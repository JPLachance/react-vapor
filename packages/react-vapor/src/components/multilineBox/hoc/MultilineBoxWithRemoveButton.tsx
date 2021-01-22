import classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {connect} from 'react-redux';
import {removeValueStringList} from '../../../reusableState/customList/StringListActions';
import {ConfigSupplier, HocUtils} from '../../../utils/HocUtils';
import {IDispatch} from '../../../utils/ReduxUtils';
import {Button, IButtonProps} from '../../button/Button';
import {Svg} from '../../svg/Svg';
import {
    IMultilineBoxDispatchProps,
    IMultilineBoxOwnProps,
    IMultilineParentProps,
    IMultilineSingleBoxProps,
} from '../MultilineBox';

type MultilineBoxWithRemoveButtonComponent<T = any> = React.ComponentClass<IMultilineBoxOwnProps<T>>;

export interface IMultilineBoxWithRemoveButtonSupplierProps<T = any> {
    containerNode?: (
        child: React.ReactNode,
        getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode,
        data: Array<IMultilineSingleBoxProps<T>>,
        index: number
    ) => React.ReactNode;
}

export interface IMultilineBoxWithRemoveButtonProps<T>
    extends IMultilineBoxWithRemoveButtonSupplierProps<T>,
        IMultilineBoxOwnProps<T>,
        Partial<IMultilineBoxDispatchProps> {}

const defaultContainerNode = (
    child: React.ReactNode,
    getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode,
    data: IMultilineSingleBoxProps[],
    index: number
) => (
    <React.Fragment key={`${(data.length && data[index].id) || index}RemoveButton`}>
        {child}
        {getRemoveButton()}
    </React.Fragment>
);

export const defaultMultilineBoxRemoveButtonClasses: string = 'center-align mod-no-border';

export const multilineBoxWithRemoveButton = (
    supplier: ConfigSupplier<IMultilineBoxWithRemoveButtonSupplierProps> = {containerNode: defaultContainerNode}
) => (Component: MultilineBoxWithRemoveButtonComponent): MultilineBoxWithRemoveButtonComponent => {
    const mapDispatchToProps = (dispatch: IDispatch, ownProps: IMultilineBoxOwnProps) => ({
        removeBox: (id: string) => dispatch(removeValueStringList(ownProps.id, id)),
    });

    class MultilineBoxWithRemoveButton<T> extends React.PureComponent<
        IMultilineBoxWithRemoveButtonProps<T> & ReturnType<typeof mapDispatchToProps>
    > {
        static defaultProps = {
            renderBody: () => <div />,
        };

        private getRemoveButtonNode(
            data: Partial<IMultilineSingleBoxProps<T>> = {},
            props: Partial<IButtonProps> = {}
        ) {
            return (
                <Button
                    classes={[
                        classNames(defaultMultilineBoxRemoveButtonClasses, {
                            'cursor-pointer': !data.isLast,
                        }),
                    ]}
                    style={{
                        visibility: !data.isLast ? 'visible' : 'hidden',
                    }}
                    onClick={() => !data.isLast && !this.props.disabled && this.props.removeBox(data.id)}
                    enabled={!this.props.disabled}
                    {...props}
                >
                    <Svg
                        svgName={VaporSVG.svg.remove.name}
                        className="icon mod-18"
                        style={{
                            visibility: !data.isLast ? 'visible' : 'hidden',
                        }}
                    />
                </Button>
            );
        }

        private getWrapper(children: React.ReactNode, data: Array<IMultilineSingleBoxProps<T>>) {
            return React.Children.map(children, (child: React.ReactNode, index: number) =>
                HocUtils.supplyConfig(supplier).containerNode(
                    child,
                    (props?: Partial<IButtonProps>) => this.getRemoveButtonNode(data[index], props),
                    data,
                    index
                )
            );
        }

        render() {
            return (
                <Component
                    {...this.props}
                    renderBody={(boxProps: Array<IMultilineSingleBoxProps<T>>, parentProps: IMultilineParentProps) =>
                        this.getWrapper(this.props.renderBody(boxProps, parentProps), boxProps)
                    }
                >
                    {this.props.children}
                </Component>
            );
        }
    }

    return connect(undefined, mapDispatchToProps)(MultilineBoxWithRemoveButton);
};
