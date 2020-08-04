import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {IStickyFooterProps} from '../../stickyFooter/StickyFooter';
import {ValidationSelectors} from '../ValidationSelectors';
import {InferableComponentEnhancer} from './connectHOC';

export interface IWithDirtyStickyFooterOwnProps {
    validationIds: string[];
    isOpened?: boolean;
}

const mapStateToProps = (state: IReactVaporState, {validationIds}: IWithDirtyStickyFooterOwnProps) => ({
    isDirty: ValidationSelectors.isDirty(validationIds)(state),
});

export const withDirtyStickyFooterHOC = <T extends IStickyFooterProps>(
    Component: React.ComponentClass<T> | React.FunctionComponent<T>
) => {
    type NewOwnProps = Omit<T, 'isOpened'> & IWithDirtyStickyFooterOwnProps;
    type StateProps = ReturnType<typeof mapStateToProps>;
    const WrappedStickyFooter: React.FunctionComponent<NewOwnProps & StateProps> = ({
        isDirty,
        validationIds,
        isOpened = false,
        ...props
    }) => <Component {...(props as any)} isOpened={isDirty || isOpened} />;

    const enhance = connect(mapStateToProps) as InferableComponentEnhancer<StateProps>;
    return enhance(WrappedStickyFooter);
};
