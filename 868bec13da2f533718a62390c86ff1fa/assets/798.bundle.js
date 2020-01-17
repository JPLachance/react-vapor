(window.webpackJsonp=window.webpackJsonp||[]).push([[798],{1886:function(e,t,n){"use strict";n.r(t),t.default="import * as _ from 'underscore';\r\n\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {changePage} from '../../navigation/pagination/NavigationPaginationActions';\r\nimport {changePerPage} from '../../navigation/perPage/NavigationPerPageActions';\r\nimport {ITableRowAddPayload, TableHOCRowActions} from '../actions/TableHOCRowActions';\r\nimport {HOCTableRowState, TableRowReducers} from '../reducers/TableRowReducers';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableRowReducers', () => {\r\n        const genericAction: IReduxAction<ITableRowAddPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'some-table-row',\r\n                tableId: 'hello',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const oldState: HOCTableRowState[] = undefined;\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, genericAction);\r\n\r\n            expect(tableHeadersState).toEqual([]);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: HOCTableRowState[] = [{id: 'a', tableId: 'b', selected: false}];\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, genericAction);\r\n\r\n            expect(tableHeadersState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the state with all actions deselect ', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {id: 'a', tableId: 'b', selected: true},\r\n                {id: 'ab', tableId: 'b', selected: true},\r\n            ];\r\n            const action = TableHOCRowActions.deselectAll('b');\r\n\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n\r\n            const newState = _.map(oldState, (item: any) => ({...item, selected: false}));\r\n            expect(tableHeadersState).toEqual(newState);\r\n        });\r\n\r\n        it('should return the old state with one more ITableRowState when the action is \"TableHOCRowActions.addTableRow\"', () => {\r\n            const expectedId = 'a';\r\n            const expectedTableId = 'b';\r\n            const expectedSelected = false;\r\n            const action = TableHOCRowActions.add(expectedId, expectedTableId);\r\n\r\n            const oldState: HOCTableRowState[] = [];\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length + 1);\r\n            const headerState = _.findWhere(tableHeadersState, {id: action.payload.id});\r\n\r\n            expect(headerState).toBeDefined();\r\n            expect(headerState.id).toBe(expectedId);\r\n            expect(headerState.tableId).toBe(expectedTableId);\r\n            expect(headerState.selected).toBe(expectedSelected);\r\n        });\r\n\r\n        it('should remove all rows that match the action payload id when no tableId is specified', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {\r\n                    id: '🥑',\r\n                    tableId: 'fruits',\r\n                    selected: true,\r\n                },\r\n                {\r\n                    id: '🥑',\r\n                    tableId: 'organic',\r\n                    selected: false,\r\n                },\r\n                {\r\n                    id: '🥦',\r\n                    tableId: 'organic',\r\n                    selected: false,\r\n                },\r\n            ];\r\n            const action = TableHOCRowActions.remove('🥑');\r\n            const tableRowsState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n\r\n            expect(tableRowsState.length).toBe(1);\r\n            expect(_.findWhere(tableRowsState, {id: '🥑', tableId: 'fruits'})).toBeUndefined();\r\n            expect(_.findWhere(tableRowsState, {id: '🥑', tableId: 'organic'})).toBeUndefined();\r\n        });\r\n\r\n        it('should remove a table row from the state only if the rowId and the tableId match the action payload', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {\r\n                    id: '🥑',\r\n                    tableId: 'fruits',\r\n                    selected: true,\r\n                },\r\n                {\r\n                    id: '🥑',\r\n                    tableId: 'organic',\r\n                    selected: false,\r\n                },\r\n                {\r\n                    id: '🥦',\r\n                    tableId: 'organic',\r\n                    selected: false,\r\n                },\r\n            ];\r\n            const action = TableHOCRowActions.remove('🥑', 'fruits');\r\n            const tableRowsState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n\r\n            expect(tableRowsState.length).toBe(2);\r\n            expect(_.findWhere(tableRowsState, {id: '🥑', tableId: 'fruits'})).toBeUndefined();\r\n            expect(_.findWhere(tableRowsState, {id: '🥑', tableId: 'organic'})).toBeDefined();\r\n        });\r\n\r\n        it('should set the selected on the table row when the action is \"TableHOCRowActions.selectRow\"', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {\r\n                    id: 'some-table-header-1',\r\n                    tableId: 'not-important',\r\n                    selected: false,\r\n                },\r\n                {\r\n                    id: 'some-table-header-2',\r\n                    tableId: 'not-important',\r\n                    selected: true,\r\n                },\r\n            ];\r\n\r\n            const action = TableHOCRowActions.select(oldState[0].id, false);\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(true);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(false);\r\n        });\r\n\r\n        it('should set opened on the table row when the action is \"TableHOCRowActions.toggleCollapsible\"', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {\r\n                    id: 'some-table-header-1',\r\n                    tableId: 'not-important',\r\n                    selected: false,\r\n                },\r\n                {\r\n                    id: 'some-table-header-2',\r\n                    tableId: 'not-important',\r\n                    selected: true,\r\n                },\r\n            ];\r\n\r\n            const action = TableHOCRowActions.toggleCollapsible(oldState[0].id, true);\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).opened).toBe(true);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).opened).toBe(undefined);\r\n        });\r\n\r\n        it('should toggle opened the row when the action is \"TableHOCRowActions.toggleCollapsible\" and no opened payload is specified', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {\r\n                    id: 'some-table-header-1',\r\n                    tableId: 'not-important',\r\n                    selected: false,\r\n                },\r\n                {\r\n                    id: 'some-table-header-2',\r\n                    tableId: 'not-important',\r\n                    selected: true,\r\n                },\r\n            ];\r\n\r\n            const action = TableHOCRowActions.toggleCollapsible(oldState[0].id);\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).opened).toBe(true);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).opened).toBe(undefined);\r\n        });\r\n\r\n        it('should not collapse other rows of the same table row when the action is \"TableHOCRowActions.toggleCollapsible\"', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {\r\n                    id: 'some-table-header-1',\r\n                    tableId: 'not-important',\r\n                    selected: false,\r\n                    opened: true,\r\n                },\r\n                {\r\n                    id: 'some-table-header-2',\r\n                    tableId: 'not-important',\r\n                    selected: true,\r\n                    opened: false,\r\n                },\r\n            ];\r\n\r\n            const action = TableHOCRowActions.toggleCollapsible(oldState[1].id);\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).opened).toBe(true);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).opened).toBe(true);\r\n        });\r\n\r\n        it('should not deselect other rows of the same table row when the action is \"TableHOCRowActions.selectRow\" and multi is true', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {\r\n                    id: 'some-table-header-1',\r\n                    tableId: 'not-important',\r\n                    selected: false,\r\n                },\r\n                {\r\n                    id: 'some-table-header-2',\r\n                    tableId: 'not-important',\r\n                    selected: true,\r\n                },\r\n            ];\r\n\r\n            const action = TableHOCRowActions.select(oldState[0].id, true);\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(true);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(true);\r\n        });\r\n\r\n        it('should not collapse other rows of the same table row when the action is \"TableHOCRowActions.toggleCollapsibel\"', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {\r\n                    id: 'some-table-header-1',\r\n                    tableId: 'current-table',\r\n                    selected: false,\r\n                    opened: false,\r\n                },\r\n                {\r\n                    id: 'some-table-header-2',\r\n                    tableId: 'other-table',\r\n                    selected: true,\r\n                    opened: true,\r\n                },\r\n            ];\r\n\r\n            const action = TableHOCRowActions.toggleCollapsible(oldState[0].id);\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).opened).toBe(true);\r\n        });\r\n\r\n        it('should not modify the selected for the other tables when the action is \"TableHOCRowActions.selectRow\"', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {\r\n                    id: 'some-table-header',\r\n                    tableId: 'current-table',\r\n                    selected: false,\r\n                },\r\n                {\r\n                    id: 'other-table-header',\r\n                    tableId: 'other-table',\r\n                    selected: true,\r\n                },\r\n            ];\r\n\r\n            const action = TableHOCRowActions.select(oldState[0].id);\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(oldState[1].selected);\r\n        });\r\n\r\n        it('should not throw on toggleCollapsible if the table row does not exists', () => {\r\n            const oldState: HOCTableRowState[] = [];\r\n            const action = TableHOCRowActions.toggleCollapsible('To toggle or not to toggle');\r\n\r\n            expect(() => TableRowReducers(oldState, action)).not.toThrow();\r\n        });\r\n\r\n        it('should not throw on select if the table row does not exists', () => {\r\n            const oldState: HOCTableRowState[] = [];\r\n            const action = TableHOCRowActions.select('To be or not to be');\r\n\r\n            expect(() => TableRowReducers(oldState, action)).not.toThrow();\r\n        });\r\n\r\n        it('should deselect rows when the page changes', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {\r\n                    id: 'some-table-header',\r\n                    tableId: 'current-table',\r\n                    selected: true,\r\n                },\r\n                {\r\n                    id: 'other-table-header',\r\n                    tableId: 'other-table',\r\n                    selected: true,\r\n                },\r\n            ];\r\n            const action = changePage(oldState[0].tableId, 2);\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(false);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(oldState[1].selected);\r\n        });\r\n\r\n        it('should deselect rows when the perPage changes', () => {\r\n            const oldState: HOCTableRowState[] = [\r\n                {\r\n                    id: 'some-table-header',\r\n                    tableId: 'current-table',\r\n                    selected: true,\r\n                },\r\n                {\r\n                    id: 'other-table-header',\r\n                    tableId: 'other-table',\r\n                    selected: true,\r\n                },\r\n            ];\r\n            const action = changePerPage(oldState[0].tableId, 2);\r\n            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(false);\r\n            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(oldState[1].selected);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=798.bundle.js.map