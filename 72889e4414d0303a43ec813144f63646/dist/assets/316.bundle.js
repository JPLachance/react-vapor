(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{1413:function(n,r,o){"use strict";o.r(r),r.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\n\r\nexport const DefaultGroupIds = {\r\n    default: 'default',\r\n    tooltip: 'tooltip',\r\n    dropdown: 'dropdown',\r\n};\r\n\r\nexport const DropReducerActions = {\r\n    toggle: 'DROP_TOGGLE',\r\n};\r\n\r\nexport interface IDropPayload {\r\n    id: string;\r\n    isOpen?: boolean;\r\n    groupId?: string;\r\n}\r\n\r\nconst toggle = (id: string, groupId: string, isOpen?: boolean): IReduxAction<IDropPayload> => ({\r\n    type: DropReducerActions.toggle,\r\n    payload: {\r\n        id,\r\n        isOpen,\r\n        groupId,\r\n    },\r\n});\r\n\r\nexport const DropActions = {\r\n    toggle,\r\n};\r\n"}}]);
//# sourceMappingURL=316.bundle.js.map