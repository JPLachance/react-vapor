import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import {findWhere} from 'underscore';

import {SlideY} from '../../animations/SlideY';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {addCollapsible, removeCollapsible, setCollapsibleExpanded} from './CollapsibleActions';
import {CollapsibleToggle} from './CollapsibleToggle';

export interface CollapsibleOwnProps {
    id: string;
    disabled?: boolean;
    expandedOnMount?: boolean;
    headerContent?: React.ReactNode;
    headerClasses?: string;
    toggleIconClassName?: string;
    className?: string;
    withBorders?: boolean;
}

const mapStateToProps = (state: IReactVaporState, ownProps: CollapsibleOwnProps) => {
    const collapsibleState = findWhere(state.collapsibles, {id: ownProps.id});
    if (collapsibleState) {
        return {expanded: collapsibleState.expanded};
    }

    return {expanded: ownProps.expandedOnMount};
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: CollapsibleOwnProps) => ({
    onMount: () => dispatch(addCollapsible(ownProps.id, !!ownProps.expandedOnMount)),
    onUnmount: () => dispatch(removeCollapsible(ownProps.id)),
    onToggleExpandedState: (currentExpandedState: boolean) =>
        dispatch(setCollapsibleExpanded(ownProps.id, !currentExpandedState)),
});

export const COLLAPSIBLE_EFFECT_DURATION = 150;
export const CollapsibleDisconnected: React.FunctionComponent<
    CollapsibleOwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> = ({
    children,
    id,
    disabled = false,
    className,
    withBorders,
    expanded,
    headerClasses,
    onMount,
    headerContent,
    toggleIconClassName,
    onUnmount,
    onToggleExpandedState,
}) => {
    React.useEffect(() => {
        onMount();
        return () => onUnmount();
    }, [onMount, onUnmount]);

    const headerClassesCombine = classNames('cursor-pointer flex space-between center-align', headerClasses, {
        'mod-border-bottom mod-border-top': withBorders,
    });

    return (
        <div className={classNames(className)}>
            <div className={headerClassesCombine} onClick={() => !disabled && onToggleExpandedState(expanded)}>
                {headerContent}
                <CollapsibleToggle expanded={expanded} svgClassName={toggleIconClassName} className="mr2" />
            </div>
            <SlideY id={id} in={expanded} timeout={COLLAPSIBLE_EFFECT_DURATION} duration={COLLAPSIBLE_EFFECT_DURATION}>
                {children}
            </SlideY>
        </div>
    );
};

export const CollapsibleConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(CollapsibleDisconnected);
