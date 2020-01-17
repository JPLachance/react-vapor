(window.webpackJsonp=window.webpackJsonp||[]).push([[788],{1876:function(n,a,t){"use strict";t.r(a),a.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {\r\n    ITableWithPaginationBasePayload,\r\n    ITableWithPaginationSetCountPayload,\r\n    TableWithPaginationActionsType,\r\n} from '../actions/TableWithPaginationActions';\r\n\r\nexport interface ITableWithPaginationState {\r\n    id: string;\r\n    count: number;\r\n}\r\n\r\nconst addTableWithPaginationReducer = (\r\n    state: ITableWithPaginationState[],\r\n    action: IReduxAction<ITableWithPaginationBasePayload>\r\n) => {\r\n    return [\r\n        ...state,\r\n        {\r\n            id: action.payload.id,\r\n            count: 0,\r\n        },\r\n    ];\r\n};\r\n\r\nconst removeTableWithPaginationReducer = (\r\n    state: ITableWithPaginationState[],\r\n    action: IReduxAction<ITableWithPaginationBasePayload>\r\n) => {\r\n    return _.reject(state, (header: ITableWithPaginationState) => header.id === action.payload.id);\r\n};\r\n\r\nconst setTableWithPaginationCountReducer = (\r\n    state: ITableWithPaginationState[],\r\n    action: IReduxAction<ITableWithPaginationSetCountPayload>\r\n) => {\r\n    const current = _.findWhere(state, {id: action.payload.id});\r\n    if (current) {\r\n        return _.map(state, (pagination: ITableWithPaginationState) => {\r\n            return pagination.id === current.id ? {...pagination, count: action.payload.count} : pagination;\r\n        });\r\n    }\r\n    return state;\r\n};\r\n\r\nconst TableWithPaginationActionReducers: {[key: string]: (...args: any[]) => any} = {\r\n    [TableWithPaginationActionsType.add]: addTableWithPaginationReducer,\r\n    [TableWithPaginationActionsType.remove]: removeTableWithPaginationReducer,\r\n    [TableWithPaginationActionsType.setCount]: setTableWithPaginationCountReducer,\r\n};\r\n\r\ntype ITableHeaderPayload = ITableWithPaginationBasePayload | ITableWithPaginationSetCountPayload;\r\nexport const TableWithPaginationReducers = (\r\n    state: ITableWithPaginationState[] = [],\r\n    action: IReduxAction<ITableHeaderPayload>\r\n) => {\r\n    if (!_.isUndefined(TableWithPaginationActionReducers[action.type])) {\r\n        return TableWithPaginationActionReducers[action.type](state, action);\r\n    }\r\n    return state;\r\n};\r\n"}}]);
//# sourceMappingURL=788.bundle.js.map