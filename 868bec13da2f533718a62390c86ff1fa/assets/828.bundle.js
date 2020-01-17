(window.webpackJsonp=window.webpackJsonp||[]).push([[828],{1916:function(n,r,o){"use strict";o.r(r),r.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const TableRowActions = {\r\n    add: 'ADD_ROW',\r\n    remove: 'REMOVE_ROW',\r\n    select: 'SELECT_ROW',\r\n    toggleOpen: 'TOGGLE_COLLAPSE_ROW',\r\n    unselectAll: 'UNSELECT_ALL_ROW',\r\n};\r\n\r\nexport interface ITableRowActionPayload {\r\n    id?: string;\r\n    tableId?: string;\r\n    rowId?: string;\r\n    opened?: boolean;\r\n}\r\n\r\nexport const addRow = (id: string, tableId?: string): IReduxAction<ITableRowActionPayload> => ({\r\n    type: TableRowActions.add,\r\n    payload: {\r\n        id,\r\n        tableId,\r\n    },\r\n});\r\n\r\nexport const removeRow = (id: string): IReduxAction<ITableRowActionPayload> => ({\r\n    type: TableRowActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const selectRow = (id: string, tableId?: string, rowId?: string): IReduxAction<ITableRowActionPayload> => ({\r\n    type: TableRowActions.select,\r\n    payload: {\r\n        id,\r\n        tableId,\r\n        rowId,\r\n    },\r\n});\r\n\r\nexport const toggleRowOpened = (\r\n    id: string,\r\n    tableId?: string,\r\n    rowId?: string,\r\n    opened?: boolean\r\n): IReduxAction<ITableRowActionPayload> => ({\r\n    type: TableRowActions.toggleOpen,\r\n    payload: {\r\n        id,\r\n        tableId,\r\n        rowId,\r\n        opened,\r\n    },\r\n});\r\n\r\nexport const unselectAllRows = (tableId?: string): IReduxAction<ITableRowActionPayload> => ({\r\n    type: TableRowActions.unselectAll,\r\n    payload: {\r\n        tableId,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=828.bundle.js.map