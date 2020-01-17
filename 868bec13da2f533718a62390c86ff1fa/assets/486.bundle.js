(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{1581:function(n,r,o){"use strict";o.r(r),r.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const LoadingActions = {\r\n    add: 'ADD_LOADING',\r\n    remove: 'REMOVE_LOADING',\r\n    turnOn: 'TURN_ON_LOADING',\r\n    turnOff: 'TURN_OFF_LOADING',\r\n};\r\n\r\nexport interface ILoadingActionPayload {\r\n    ids: string[];\r\n}\r\n\r\nexport const addLoading = (id: string): IReduxAction<ILoadingActionPayload> => ({\r\n    type: LoadingActions.add,\r\n    payload: {\r\n        ids: [id],\r\n    },\r\n});\r\n\r\nexport const removeLoading = (id: string): IReduxAction<ILoadingActionPayload> => ({\r\n    type: LoadingActions.remove,\r\n    payload: {\r\n        ids: [id],\r\n    },\r\n});\r\n\r\nexport const turnOnLoading = (ids: string[]): IReduxAction<ILoadingActionPayload> => ({\r\n    type: LoadingActions.turnOn,\r\n    payload: {\r\n        ids,\r\n    },\r\n});\r\n\r\nexport const turnOffLoading = (ids: string[]): IReduxAction<ILoadingActionPayload> => ({\r\n    type: LoadingActions.turnOff,\r\n    payload: {\r\n        ids,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=486.bundle.js.map