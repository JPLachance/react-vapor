(window.webpackJsonp=window.webpackJsonp||[]).push([[787],{1873:function(e,r,a){"use strict";a.r(r),r.default="import * as _ from 'underscore';\r\n\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {\r\n    ITableHeaderAddPayload,\r\n    ITableHeaderBasePayload,\r\n    ITableHeaderSortPayload,\r\n    TableHeaderActionTypes,\r\n} from '../actions/TableHeaderActions';\r\n\r\nexport interface ITableWithSortState {\r\n    id: string;\r\n    tableId: string;\r\n    isAsc: boolean;\r\n}\r\n\r\nconst addTableHeaderReducer = (state: ITableWithSortState[], action: IReduxAction<ITableHeaderAddPayload>) => {\r\n    return [\r\n        ...state,\r\n        {\r\n            id: action.payload.id,\r\n            tableId: action.payload.tableId,\r\n            isAsc: action.payload.isDefault === true ? true : undefined,\r\n        },\r\n    ];\r\n};\r\n\r\nconst removeTableHeaderReducer = (state: ITableWithSortState[], action: IReduxAction<ITableHeaderBasePayload>) => {\r\n    return _.reject(state, (header: ITableWithSortState) => header.id === action.payload.id);\r\n};\r\n\r\nconst sortTableHeaderReducer = (state: ITableWithSortState[], action: IReduxAction<ITableHeaderSortPayload>) => {\r\n    const current = _.findWhere(state, {id: action.payload.id});\r\n    if (current) {\r\n        return _.map(state, (header: ITableWithSortState) => {\r\n            if (header.id === current.id) {\r\n                return {\r\n                    ...header,\r\n                    isAsc: _.isBoolean(action.payload.ascending) ? action.payload.ascending : !header.isAsc,\r\n                };\r\n            }\r\n            return header.tableId === current.tableId ? {...header, isAsc: undefined} : header;\r\n        });\r\n    }\r\n    return state;\r\n};\r\n\r\nconst TableWithSortActionReducers: {[key: string]: (...args: any[]) => any} = {\r\n    [TableHeaderActionTypes.add]: addTableHeaderReducer,\r\n    [TableHeaderActionTypes.remove]: removeTableHeaderReducer,\r\n    [TableHeaderActionTypes.sort]: sortTableHeaderReducer,\r\n};\r\n\r\ntype ITableHeaderPayload = ITableHeaderAddPayload | ITableHeaderBasePayload;\r\nexport const TableWithSortReducers = (state: ITableWithSortState[] = [], action: IReduxAction<ITableHeaderPayload>) => {\r\n    if (!_.isUndefined(TableWithSortActionReducers[action.type])) {\r\n        return TableWithSortActionReducers[action.type](state, action);\r\n    }\r\n    return state;\r\n};\r\n"}}]);
//# sourceMappingURL=787.bundle.js.map