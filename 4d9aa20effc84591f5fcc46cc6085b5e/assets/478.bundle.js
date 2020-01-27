(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{1566:function(o,n,r){"use strict";r.r(n),n.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {ILoadingDispatchProps, ILoadingOwnProps, ILoadingProps, Loading} from './Loading';\r\nimport {addLoading, removeLoading} from './LoadingActions';\r\n\r\nconst mapStateToProps = () => ({});\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: ILoadingOwnProps\r\n): ILoadingDispatchProps => ({\r\n    onRender: () => dispatch(addLoading(ownProps.id)),\r\n    onDestroy: () => dispatch(removeLoading(ownProps.id)),\r\n});\r\n\r\nexport const LoadingConnected: React.ComponentClass<ILoadingProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(Loading);\r\n"}}]);
//# sourceMappingURL=478.bundle.js.map