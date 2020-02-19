(window.webpackJsonp=window.webpackJsonp||[]).push([[800],{1901:function(e,r,a){"use strict";a.r(r),r.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\n\r\nexport const TableHeaderActionTypes = {\r\n    add: 'ADD_TABLE_HEADER',\r\n    remove: 'REMOVE_TABLE_HEADER',\r\n    sort: 'SORT_TABLE_HEADER',\r\n};\r\n\r\nexport interface ITableHeaderBasePayload {\r\n    id: string;\r\n}\r\n\r\nexport interface ITableHeaderSortPayload extends ITableHeaderBasePayload {\r\n    ascending: boolean;\r\n}\r\n\r\nexport interface ITableHeaderAddPayload extends ITableHeaderBasePayload {\r\n    tableId: string;\r\n    isDefault: boolean;\r\n}\r\n\r\nconst addTableHeader = (id: string, tableId: string, isDefault: boolean): IReduxAction<ITableHeaderAddPayload> => ({\r\n    type: TableHeaderActionTypes.add,\r\n    payload: {id, tableId, isDefault},\r\n});\r\n\r\nconst removeTableHeader = (id: string): IReduxAction<ITableHeaderBasePayload> => ({\r\n    type: TableHeaderActionTypes.remove,\r\n    payload: {id},\r\n});\r\n\r\nconst sortTable = (id: string, ascending?: boolean): IReduxAction<ITableHeaderSortPayload> => ({\r\n    type: TableHeaderActionTypes.sort,\r\n    payload: {id, ascending},\r\n});\r\n\r\nexport const TableHeaderActions = {\r\n    addTableHeader,\r\n    removeTableHeader,\r\n    sortTable,\r\n};\r\n"}}]);
//# sourceMappingURL=800.bundle.js.map