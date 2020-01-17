(window.webpackJsonp=window.webpackJsonp||[]).push([[816],{1904:function(r,n,e){"use strict";e.r(n),n.default="import {ITableData} from './TableReducers';\r\n\r\nexport enum TableSortingOrder {\r\n    UNSORTED = 'UNSORTED',\r\n    ASCENDING = 'ASCENDING',\r\n    DESCENDING = 'DESCENDING',\r\n}\r\n\r\nexport const DEFAULT_TABLE_PER_PAGE = 100000; // show any number of rows if per page is not present\r\nexport const DEFAULT_TABLE_DATA: ITableData = Object.freeze({\r\n    byId: {},\r\n    allIds: [],\r\n    displayedIds: [],\r\n    totalEntries: 0,\r\n    totalPages: 0,\r\n    selectedIds: [],\r\n    IS_DEFAULT_TABLE_DATA: true,\r\n});\r\n\r\nexport const TABLE_PREDICATE_DEFAULT_VALUE = 'ALL';\r\nexport const TOGGLE_ARROW_CELL_COUNT = 1;\r\n\r\nexport const TABLE_ID_PREFIX = 'react-vapor-table-';\r\nexport const TABLE_PREDICATE_ID_PREFIX = 'predicate-';\r\n\r\nexport enum TableChildComponent {\r\n    ACTION_BAR = 'action-bar',\r\n    DATEPICKER = 'datepicker',\r\n    DATEPICKER_RANGE = 'datepicker-date-range',\r\n    FILTER = 'filter',\r\n    NAVIGATION = 'navigation',\r\n    PAGINATION = 'pagination',\r\n    PER_PAGE = 'per-page',\r\n    LOADING_TABLE = 'loading-table',\r\n    LOADING_ACTION_BAR = 'loading-action-bar',\r\n    LOADING_NAVIGATION = 'loading-navigation',\r\n    BLANKSLATE = 'blankslate',\r\n    PREDICATE = 'predicate',\r\n    TABLE_HEADER = 'table-header',\r\n    TABLE_HEADER_CELL = 'table-header-cell',\r\n    TABLE_ROW_CELL = 'table-row-cell',\r\n    TABLE_HEADING_ROW = 'table-heading-row',\r\n    TABLE_COLLAPSIBLE_ROW = 'table-collapsible-row',\r\n    TABLE_ROW_WRAPPER = 'table-row-wrapper',\r\n    LAST_UPDATED = 'last-updated',\r\n}\r\n"}}]);
//# sourceMappingURL=816.bundle.js.map