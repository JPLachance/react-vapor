(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1702:function(n,o,t){"use strict";t.r(o),o.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\n\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {\r\n    IOptionsCycleConnectedOwnProps,\r\n    IOptionsCycleDispatchProps,\r\n    IOptionsCycleProps,\r\n    IOptionsCycleStateProps,\r\n    OptionsCycle,\r\n} from './OptionsCycle';\r\nimport {addOptionsCycle, changeOptionsCycle, removeOptionsCycle} from './OptionsCycleActions';\r\nimport {OptionsCycleSelectors} from './OptionsCycleSelectors';\r\n\r\nconst mapStateToProps = (\r\n    state: IReactVaporState,\r\n    ownProps: IOptionsCycleConnectedOwnProps\r\n): IOptionsCycleStateProps => ({\r\n    currentOption: OptionsCycleSelectors.getCurrentOption(state, {id: ownProps.id, startAt: ownProps.startAt}),\r\n});\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: IOptionsCycleConnectedOwnProps\r\n): IOptionsCycleDispatchProps => ({\r\n    onRender: () => dispatch(addOptionsCycle(ownProps.id, ownProps.startAt)),\r\n    onDestroy: () => dispatch(removeOptionsCycle(ownProps.id)),\r\n    onChange: (index: number) => dispatch(changeOptionsCycle(ownProps.id, index)),\r\n});\r\n\r\nexport const OptionsCycleConnected: React.ComponentClass<IOptionsCycleProps & IOptionsCycleConnectedOwnProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(OptionsCycle);\r\n"}}]);
//# sourceMappingURL=608.bundle.js.map