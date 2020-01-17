(window.webpackJsonp=window.webpackJsonp||[]).push([[808],{1896:function(t,e,n){"use strict";n.r(e),e.default="import {ShallowWrapper} from 'enzyme';\nimport {shallowWithStore} from 'enzyme-redux';\nimport * as React from 'react';\nimport * as _ from 'underscore';\n\nimport {getStoreMock, TestUtils} from '../../../utils/tests/TestUtils';\nimport {UrlUtils} from '../../../utils/UrlUtils';\nimport {\n    applyDatePicker,\n    changeDatePickerLowerLimit,\n    changeDatePickerUpperLimit,\n} from '../../datePicker/DatePickerActions';\nimport {filterThrough} from '../../filterBox/FilterBoxActions';\nimport {selectListBoxOption} from '../../listBox/ListBoxActions';\nimport {changePage} from '../../navigation/pagination/NavigationPaginationActions';\nimport {changePerPage} from '../../navigation/perPage/NavigationPerPageActions';\nimport {TableHeaderActions} from '../actions/TableHeaderActions';\nimport {ITableHOCOwnProps, TableHOC} from '../TableHOC';\nimport {TableHOCUtils} from '../TableHOCUtils';\nimport {tableWithDatePicker} from '../TableWithDatePicker';\nimport {tableWithFilter} from '../TableWithFilter';\nimport {tableWithPagination} from '../TableWithPagination';\nimport {tableWithPredicate} from '../TableWithPredicate';\nimport {tableWithSort} from '../TableWithSort';\nimport {tableWithUrlState} from '../TableWithUrlState';\n\ndescribe('Table HOC', () => {\n    describe('tableWithUrlState', () => {\n        let table: ShallowWrapper<ITableHOCOwnProps>;\n        let store: ReturnType<typeof getStoreMock>;\n\n        beforeAll(() => {\n            store = getStoreMock();\n            TestUtils.makeDebounceStatic();\n        });\n\n        beforeEach(() => {\n            store.clearActions();\n        });\n\n        afterEach(() => {\n            table && table.exists() && table.unmount();\n        });\n\n        it('should not throw when creating the HOC component', () => {\n            expect(() => {\n                tableWithUrlState(TableHOC);\n            }).not.toThrow();\n        });\n\n        it('should not throw when rendering the HOC component', () => {\n            expect(() => {\n                const TableWithUrlState = tableWithUrlState(TableHOC);\n                table = shallowWithStore(<TableWithUrlState />, store).dive();\n                table.unmount();\n            }).not.toThrow();\n        });\n\n        it('should call the \"onUpdateUrl\" prop with the query string representing the current state when the table needs to update', () => {\n            const onUpdateUrlSpy = jasmine.createSpy('onUpdateUrl');\n            const TableWithUrlState = tableWithUrlState(TableHOC);\n            table = shallowWithStore(<TableWithUrlState onUpdateUrl={onUpdateUrlSpy} />, store).dive();\n\n            expect(onUpdateUrlSpy).not.toHaveBeenCalled();\n            table.prop('onUpdate')();\n            expect(onUpdateUrlSpy).toHaveBeenCalledTimes(1);\n            expect(onUpdateUrlSpy).toHaveBeenCalledWith('');\n        });\n\n        describe('when table has pagination', () => {\n            const TableWithUrlState = _.compose(tableWithUrlState, tableWithPagination())(TableHOC);\n\n            it('should set the current page number in the url using \"page\" as param name', () => {\n                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({\n                    pageNb: 2,\n                });\n\n                table = shallowWithStore(<TableWithUrlState />, store);\n                expect(table.prop('query')).toContain('page=2');\n            });\n\n            it('should set the current perPage number in the url using \"pageSize\" as param name', () => {\n                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({\n                    perPage: 5,\n                });\n\n                table = shallowWithStore(<TableWithUrlState />, store);\n                expect(table.prop('query')).toContain('pageSize=5');\n            });\n\n            it('should dispatch an action to set the page number on mount if \"page\" param is specified in the url', () => {\n                spyOn(UrlUtils, 'getSearchParams').and.returnValue({page: 4});\n                table = shallowWithStore(<TableWithUrlState id=\"🦋\" />, store).dive();\n\n                expect(store.getActions()).toContain(changePage(TableHOCUtils.getPaginationId('🦋'), 4));\n            });\n\n            it('should dispatch an action to set the page size on mount if \"pageSize\" param is specified in the url', () => {\n                spyOn(UrlUtils, 'getSearchParams').and.returnValue({pageSize: 3});\n                table = shallowWithStore(<TableWithUrlState id=\"💎\" />, store).dive();\n\n                expect(store.getActions()).toContain(changePerPage('💎', 3));\n            });\n        });\n\n        describe('when table has sortable columns', () => {\n            const TableWithUrlState = _.compose(tableWithUrlState, tableWithSort())(TableHOC);\n\n            it('should set the current sorted column key in the url using \"sortBy\" as param name', () => {\n                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({\n                    sortKey: 'bacon',\n                });\n\n                table = shallowWithStore(<TableWithUrlState />, store);\n                expect(table.prop('query')).toContain('sortBy=bacon');\n            });\n\n            it('should set the current sort direction in the url using \"order\" as param name', () => {\n                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({\n                    sortAscending: true,\n                });\n\n                table = shallowWithStore(<TableWithUrlState />, store);\n                expect(table.prop('query')).toContain('order=asc');\n            });\n\n            it('should dispatch an action to set the sort key on mount if \"sortBy\" and \"order\" params are specified in the url', () => {\n                spyOn(UrlUtils, 'getSearchParams').and.returnValue({sortBy: '🔥', order: 'desc'});\n                table = shallowWithStore(<TableWithUrlState id=\"🦋\" />, store).dive();\n\n                expect(store.getActions()).toContain(TableHeaderActions.sortTable('🔥', false));\n            });\n        });\n\n        describe('when the table is filterable', () => {\n            const TableWithUrlState = _.compose(tableWithUrlState, tableWithFilter())(TableHOC);\n\n            it('should set the current filter text in the url using \"q\" as param name', () => {\n                const filterText = 'not so black sheep 🐑';\n                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({\n                    filter: filterText,\n                });\n\n                table = shallowWithStore(<TableWithUrlState />, store);\n                expect(table.prop('query')).toContain(`q=${encodeURIComponent(filterText)}`);\n            });\n\n            it('should dispatch an action to set the filter value on mount if \"q\" param is specified in the url', () => {\n                spyOn(UrlUtils, 'getSearchParams').and.returnValue({q: '💧'});\n                table = shallowWithStore(<TableWithUrlState id=\"🎠\" />, store).dive();\n\n                expect(store.getActions()).toContain(filterThrough('🎠', '💧'));\n            });\n        });\n\n        describe('when the table has a date picker', () => {\n            const lowerLimit = new Date(2019, 1, 1);\n            const upperLimit = new Date(2019, 1, 2);\n            const TableWithUrlState = _.compose(tableWithUrlState, tableWithDatePicker())(TableHOC);\n\n            it('should set the current lower date limit in the url using \"from\" as param name', () => {\n                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({\n                    dateLimits: [lowerLimit],\n                });\n\n                table = shallowWithStore(<TableWithUrlState />, store);\n                expect(table.prop('query')).toContain(`from=${encodeURIComponent(lowerLimit.toISOString())}`);\n            });\n\n            it('should set the current upper date limit in the url using \"to\" as param name', () => {\n                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({\n                    dateLimits: [null, upperLimit],\n                });\n\n                table = shallowWithStore(<TableWithUrlState />, store);\n                expect(table.prop('query')).toContain(`to=${encodeURIComponent(upperLimit.toISOString())}`);\n            });\n\n            it('should dispatch an action to set the lower date limit on mount if \"from\" param is specified in the url', () => {\n                spyOn(UrlUtils, 'getSearchParams').and.returnValue({from: lowerLimit.toISOString()});\n                table = shallowWithStore(<TableWithUrlState id=\"🏦\" />, store).dive();\n\n                expect(store.getActions()).toContain(\n                    changeDatePickerLowerLimit(TableHOCUtils.getDatePickerId('🏦'), lowerLimit)\n                );\n                expect(store.getActions()).toContain(applyDatePicker('🏦'));\n            });\n\n            it('should dispatch an action to set the upper date limit on mount if \"to\" param is specified in the url', () => {\n                spyOn(UrlUtils, 'getSearchParams').and.returnValue({to: upperLimit.toISOString()});\n                table = shallowWithStore(<TableWithUrlState id=\"🏥\" />, store).dive();\n\n                expect(store.getActions()).toContain(\n                    changeDatePickerUpperLimit(TableHOCUtils.getDatePickerId('🏥'), upperLimit)\n                );\n                expect(store.getActions()).toContain(applyDatePicker('🏥'));\n            });\n        });\n\n        describe('when the table has predicates', () => {\n            const TableWithUrlState = _.compose(\n                tableWithUrlState,\n                tableWithPredicate({\n                    id: 'size',\n                    values: [],\n                }),\n                tableWithPredicate({\n                    id: 'topping',\n                    values: [],\n                })\n            )(TableHOC);\n\n            it('should set the selected predicate values in the url using the each predicate id as param name', () => {\n                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({\n                    predicates: [\n                        {id: 'size', value: '12 inches'},\n                        {id: 'topping', value: 'pepperoni'},\n                    ],\n                });\n\n                table = shallowWithStore(<TableWithUrlState />, store);\n                expect(table.prop('query')).toContain(`size=${encodeURIComponent('12 inches')}`);\n                expect(table.prop('query')).toContain('topping=pepperoni');\n            });\n\n            it('should dispatch an action to set each selected predicate on mount if its id is specified in the url', () => {\n                spyOn(TableHOCUtils, 'getPredicateIds').and.returnValue(['size', 'topping']);\n                spyOn(UrlUtils, 'getSearchParams').and.returnValue({size: '12 inches', topping: 'pepperoni'});\n                table = shallowWithStore(<TableWithUrlState id=\"🍕\" />, store).dive();\n\n                expect(store.getActions()).toContain(\n                    selectListBoxOption(TableHOCUtils.getPredicateId('🍕', 'size'), false, '12 inches')\n                );\n                expect(store.getActions()).toContain(\n                    selectListBoxOption(TableHOCUtils.getPredicateId('🍕', 'topping'), false, 'pepperoni')\n                );\n            });\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=808.bundle.js.map