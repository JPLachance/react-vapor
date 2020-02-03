(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1233:function(n,r,o){"use strict";o.r(r),r.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IActionOptions} from './Action';\r\n\r\nexport interface IActionBarPayload {\r\n    id: string;\r\n    yPosition?: number;\r\n}\r\n\r\nexport interface IChangeActionBarActionsPayload extends IActionBarPayload {\r\n    actions: IActionOptions[];\r\n}\r\n\r\nexport const ActionBarActions = {\r\n    add: 'ADD_ACTION_BAR',\r\n    remove: 'REMOVE_ACTION_BAR',\r\n    addActions: 'ADD_ACTIONS',\r\n};\r\n\r\nexport const addActionBar = (id: string): IReduxAction<IActionBarPayload> => ({\r\n    type: ActionBarActions.add,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const removeActionBar = (id: string): IReduxAction<IActionBarPayload> => ({\r\n    type: ActionBarActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const addActionsToActionBar = (\r\n    id: string,\r\n    actions: IActionOptions[]\r\n): IReduxAction<IChangeActionBarActionsPayload> => ({\r\n    type: ActionBarActions.addActions,\r\n    payload: {\r\n        id,\r\n        actions,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=120.bundle.js.map