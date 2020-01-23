(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{1623:function(r,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\r\nimport {DropTarget} from 'react-dnd';\r\nimport {createStructuredSelector} from 'reselect';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {reorderStringList} from '../../../reusableState/customList/StringListActions';\r\nimport {ConfigSupplier, HocUtils} from '../../../utils/HocUtils';\r\nimport {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';\r\nimport {DnDContainer, DraggableContainerType, IDraggableContainerOwnProps} from '../../dragAndDrop/DnDContainer';\r\nimport {DnDUtils} from '../../dragAndDrop/DnDUtils';\r\nimport {IMultiSelectOwnProps} from '../../select/MultiSelectConnected';\r\nimport {\r\n    IMultilineBoxDispatchProps,\r\n    IMultilineBoxOwnProps,\r\n    IMultilineBoxStateProps,\r\n    IMultilineParentProps,\r\n    IMultilineSingleBoxProps,\r\n} from '../MultilineBox';\r\nimport {MultilineBoxSelectors} from '../MultilineBoxSelector';\r\n\r\ntype MultilineBoxWithDnDComponent<T = any> = React.ComponentClass<IMultilineBoxOwnProps<T>>;\r\n\r\nexport interface IMultilineBoxWithDnDSupplierProps {\r\n    DnDContainerProps?: Partial<IDraggableContainerOwnProps>;\r\n}\r\n\r\nexport interface IMultilineBoxWithDnDDispatchProps {\r\n    onReorder?: (list: string[]) => void;\r\n}\r\n\r\nexport interface IMultilineBoxWithDnDProps<T>\r\n    extends IMultilineBoxWithDnDSupplierProps,\r\n        IMultilineBoxStateProps,\r\n        IDraggableContainerOwnProps,\r\n        IMultilineBoxOwnProps<T>,\r\n        Partial<IMultilineBoxWithDnDDispatchProps>,\r\n        Partial<IMultilineBoxDispatchProps> {}\r\n\r\nexport const multilineBoxWithDnD = (supplier: ConfigSupplier<IMultilineBoxWithDnDSupplierProps> = {}) => (\r\n    Component: MultilineBoxWithDnDComponent\r\n): MultilineBoxWithDnDComponent => {\r\n    const makeMapStateToProps = () => {\r\n        const getStateProps = createStructuredSelector({\r\n            multilineBoxIds: MultilineBoxSelectors.getIds,\r\n        });\r\n\r\n        return (state: IReactVaporState, ownProps: IMultiSelectOwnProps): IMultilineBoxStateProps =>\r\n            getStateProps(state, {id: ownProps.id});\r\n    };\r\n\r\n    const mapDispatchToProps = (\r\n        dispatch: IDispatch,\r\n        ownProps: IMultilineBoxOwnProps\r\n    ): IMultilineBoxWithDnDDispatchProps => ({\r\n        onReorder: (list: string[]) => dispatch(reorderStringList(ownProps.id, list)),\r\n    });\r\n\r\n    @DropTarget(DraggableContainerType, DnDUtils.parentDropTarget, (connect: any) => ({\r\n        connectDropTarget: connect.dropTarget(),\r\n    }))\r\n    @ReduxConnect(makeMapStateToProps, mapDispatchToProps)\r\n    class MultilineBoxWithDnD<T> extends React.PureComponent<IMultilineBoxWithDnDProps<T>> {\r\n        static defaultProps = {\r\n            renderBody: () => <div />,\r\n        };\r\n\r\n        private getDnDWrapper(children: React.ReactNode, data: Array<IMultilineSingleBoxProps<T>>) {\r\n            const supplierProps: IMultilineBoxWithDnDSupplierProps = {\r\n                ...{\r\n                    DnDContainerProps: {},\r\n                },\r\n                ...HocUtils.supplyConfig(supplier),\r\n            };\r\n            return React.Children.map(children, (child: React.ReactNode, index: number) => {\r\n                const isLast = index === data.length - 1;\r\n                const id: string = (data.length && data[index].id) || index.toString();\r\n                return (\r\n                    <DnDContainer\r\n                        id={id}\r\n                        key={`${id}DnD`}\r\n                        index={index}\r\n                        move={(dragIndex: number, hoverIndex: number) =>\r\n                            DnDUtils.move(dragIndex, hoverIndex, this.props.multilineBoxIds, this.props.onReorder)\r\n                        }\r\n                        child={child}\r\n                        isDraggable={!isLast}\r\n                        {...supplierProps.DnDContainerProps}\r\n                    />\r\n                );\r\n            });\r\n        }\r\n\r\n        render() {\r\n            return (\r\n                <Component\r\n                    {...this.props}\r\n                    renderBody={(boxProps: Array<IMultilineSingleBoxProps<T>>, parentProps: IMultilineParentProps) =>\r\n                        this.getDnDWrapper(this.props.renderBody(boxProps, parentProps), boxProps)\r\n                    }\r\n                >\r\n                    {this.props.children}\r\n                </Component>\r\n            );\r\n        }\r\n    }\r\n\r\n    return DnDUtils.TagControlContext(MultilineBoxWithDnD);\r\n};\r\n"}}]);
//# sourceMappingURL=535.bundle.js.map