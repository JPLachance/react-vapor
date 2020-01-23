(window.webpackJsonp=window.webpackJsonp||[]).push([[570],{1658:function(n,r,e){"use strict";e.r(r),r.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\n\r\nexport interface IPerPageActionPayload {\r\n    id: string;\r\n}\r\n\r\nexport interface IChangePerPageActionPayload extends IPerPageActionPayload {\r\n    perPage: number;\r\n}\r\n\r\nexport const PerPageActions = {\r\n    add: 'ADD_PER_PAGE',\r\n    remove: 'REMOVE_PER_PAGE',\r\n    change: 'CHANGE_PER_PAGE',\r\n};\r\n\r\nexport const addPerPage = (id: string, perPage: number): IReduxAction<IChangePerPageActionPayload> => ({\r\n    type: PerPageActions.add,\r\n    payload: {\r\n        id,\r\n        perPage,\r\n    },\r\n});\r\n\r\nexport const removePerPage = (id: string): IReduxAction<IPerPageActionPayload> => ({\r\n    type: PerPageActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const changePerPage = (id: string, perPage: number): IReduxAction<IChangePerPageActionPayload> => ({\r\n    type: PerPageActions.change,\r\n    payload: {\r\n        id,\r\n        perPage,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=570.bundle.js.map