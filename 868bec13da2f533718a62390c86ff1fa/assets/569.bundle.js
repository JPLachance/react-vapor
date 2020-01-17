(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{1664:function(n,a,r){"use strict";r.r(a),a.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\n\r\nexport interface IPaginationActionPayload {\r\n    id: string;\r\n}\r\n\r\nexport interface IChangePaginationActionPayload extends IPaginationActionPayload {\r\n    pageNb: number;\r\n}\r\n\r\nexport const PaginationActions = {\r\n    add: 'ADD_PAGINATION',\r\n    remove: 'REMOVE_PAGINATION',\r\n    changePage: 'CHANGE_PAGE',\r\n    reset: 'RESET_PAGING',\r\n};\r\n\r\nexport const addPagination = (id: string): IReduxAction<IPaginationActionPayload> => ({\r\n    type: PaginationActions.add,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const removePagination = (id: string): IReduxAction<IPaginationActionPayload> => ({\r\n    type: PaginationActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const changePage = (id: string, pageNb: number): IReduxAction<IChangePaginationActionPayload> => ({\r\n    type: PaginationActions.changePage,\r\n    payload: {\r\n        id,\r\n        pageNb,\r\n    },\r\n});\r\n\r\nexport const resetPaging = (id: string): IReduxAction<IChangePaginationActionPayload> => ({\r\n    type: PaginationActions.reset,\r\n    payload: {\r\n        id,\r\n        pageNb: 0,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=569.bundle.js.map