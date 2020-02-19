(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1570:function(t,r,a){"use strict";a.r(r),r.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {\r\n    ILastUpdatedDispatchProps,\r\n    ILastUpdatedOwnProps,\r\n    ILastUpdatedProps,\r\n    ILastUpdatedStateProps,\r\n    LastUpdated,\r\n} from './LastUpdated';\r\nimport {addLastUpdated, removeLastUpdated} from './LastUpdatedActions';\r\nimport {ILastUpdatedState} from './LastUpdatedReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: ILastUpdatedOwnProps): ILastUpdatedStateProps => {\r\n    const item: ILastUpdatedState = _.findWhere(state.lastUpdatedComposite, {id: ownProps.id});\r\n\r\n    return {\r\n        time: item ? item.time : new Date(),\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: ILastUpdatedOwnProps\r\n): ILastUpdatedDispatchProps => ({\r\n    onRender: () => dispatch(addLastUpdated(ownProps.id)),\r\n    onDestroy: () => dispatch(removeLastUpdated(ownProps.id)),\r\n});\r\n\r\nexport const LastUpdatedConnected: React.ComponentClass<ILastUpdatedProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(LastUpdated);\r\n"}}]);
//# sourceMappingURL=464.bundle.js.map