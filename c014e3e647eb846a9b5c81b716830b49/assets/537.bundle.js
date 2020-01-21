(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{1632:function(r,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\r\nimport {createStructuredSelector} from 'reselect';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {\r\n    addStringList,\r\n    addValueStringList,\r\n    removeStringList,\r\n    removeValueStringList,\r\n    updateValueStringList,\r\n} from '../../reusableState/customList/StringListActions';\r\nimport {deepClone} from '../../utils/CloneUtils';\r\nimport {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {UUID} from '../../utils/UUID';\r\nimport {IMultiSelectOwnProps} from '../select/MultiSelectConnected';\r\nimport {MultilineBoxSelectors} from './MultilineBoxSelector';\r\n\r\nexport interface IMultilineSingleBoxProps<T = any> {\r\n    id: string;\r\n    isLast: boolean;\r\n    props: T;\r\n}\r\n\r\nexport interface IMultilineParentProps {\r\n    parentId: string;\r\n    removeBox: (id: string) => void;\r\n    addNewBox: () => void;\r\n}\r\n\r\nexport interface IMultilineBoxOwnProps<T = any> {\r\n    id: string;\r\n    data: T[];\r\n    renderBody?: (data: Array<IMultilineSingleBoxProps<T>>, parentProps: IMultilineParentProps) => React.ReactNode;\r\n    defaultProps?: T;\r\n    renderWrapper?: (\r\n        children: React.ReactNode,\r\n        boxProps: IMultilineSingleBoxProps<T>,\r\n        parentProps: IMultilineParentProps\r\n    ) => React.ReactNode;\r\n}\r\n\r\nexport interface IMultilineBoxStateProps {\r\n    multilineBoxIds: string[];\r\n}\r\n\r\nexport interface IMultilineBoxDispatchProps {\r\n    onMount: (defaultIds: string[]) => void;\r\n    onUnmount: () => void;\r\n    removeBox: (id: string) => void;\r\n    addNewBox: () => void;\r\n    updateBox: (defaultIds: string[]) => void;\r\n}\r\n\r\nexport interface IMultilineBoxProps<T = any>\r\n    extends IMultilineBoxOwnProps<T>,\r\n        Partial<IMultilineBoxStateProps>,\r\n        Partial<IMultilineBoxDispatchProps> {}\r\n\r\nconst makeMapStateToProps = () => {\r\n    const getStateProps = createStructuredSelector({\r\n        multilineBoxIds: MultilineBoxSelectors.getIds,\r\n    });\r\n\r\n    return (state: IReactVaporState, ownProps: IMultiSelectOwnProps): IMultilineBoxStateProps =>\r\n        getStateProps(state, {id: ownProps.id});\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IMultilineBoxOwnProps): IMultilineBoxDispatchProps => ({\r\n    onMount: (defaultIDs: string[]) => dispatch(addStringList(ownProps.id, defaultIDs)),\r\n    onUnmount: () => dispatch(removeStringList(ownProps.id)),\r\n    removeBox: (id: string) => dispatch(removeValueStringList(ownProps.id, id)),\r\n    addNewBox: () => dispatch(addValueStringList(ownProps.id, UUID.generate())),\r\n    updateBox: (ids: string[]) => dispatch(updateValueStringList(ownProps.id, ids)),\r\n});\r\n\r\n@ReduxConnect(makeMapStateToProps, mapDispatchToProps)\r\nexport class MultilineBox<T> extends React.PureComponent<IMultilineBoxProps<T>> {\r\n    private initialData: {[id: string]: T};\r\n\r\n    static defaultProps = {\r\n        renderBody: () => <div />,\r\n        defaultProps: {},\r\n    };\r\n\r\n    constructor(props: IMultilineBoxProps<T>, state: any) {\r\n        super(props, state);\r\n\r\n        this.initialData = this.getInitialDataMappedWithBoxIDs();\r\n    }\r\n\r\n    private getInitialDataMappedWithBoxIDs(): {[id: string]: T} {\r\n        const initialData: {[id: string]: T} = {};\r\n        _.each(this.props.data, (data: T) => {\r\n            initialData[UUID.generate()] = data;\r\n        });\r\n        return initialData;\r\n    }\r\n\r\n    private getInitialBoxesWithAnExtraBox(): string[] {\r\n        const ids: string[] = _.keys(this.initialData);\r\n        ids.push(UUID.generate());\r\n        return ids;\r\n    }\r\n\r\n    private getLastBoxProps(): T {\r\n        return deepClone(this.props.defaultProps || {});\r\n    }\r\n\r\n    private getData(): Array<IMultilineSingleBoxProps<T>> {\r\n        return _.map(this.props.multilineBoxIds, (id: string, index: number) => {\r\n            const props: T = this.initialData[id] || this.getLastBoxProps();\r\n            return {\r\n                id,\r\n                isLast: index === this.props.multilineBoxIds.length - 1,\r\n                props,\r\n            };\r\n        });\r\n    }\r\n\r\n    private getParentProps(): IMultilineParentProps {\r\n        return {\r\n            removeBox: (id: string) => this.props.removeBox(id),\r\n            addNewBox: () => this.props.addNewBox(),\r\n            parentId: this.props.id,\r\n        };\r\n    }\r\n\r\n    componentDidUpdate(prevProps: Readonly<IMultilineBoxProps<T>>) {\r\n        if (!_.isEqual(prevProps.data, this.props.data)) {\r\n            this.initialData = this.getInitialDataMappedWithBoxIDs();\r\n            this.props.updateBox(this.getInitialBoxesWithAnExtraBox());\r\n        }\r\n    }\r\n\r\n    componentDidMount() {\r\n        this.props.onMount(this.getInitialBoxesWithAnExtraBox());\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onUnmount();\r\n    }\r\n\r\n    render() {\r\n        return this.props.renderBody(this.getData(), this.getParentProps());\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=537.bundle.js.map