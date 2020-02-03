(window.webpackJsonp=window.webpackJsonp||[]).push([[819],{1918:function(e,n,t){"use strict";t.r(n),n.default="import {ShallowWrapper} from 'enzyme';\r\nimport {shallowWithState, shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';\r\nimport {TableHOCRowActions} from '../actions/TableHOCRowActions';\r\nimport {TableHOC} from '../TableHOC';\r\nimport {TableSelectors} from '../TableSelectors';\r\nimport {tableWithActions} from '../TableWithActions';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableWithActions', () => {\r\n        const TableWithActions = _.compose(tableWithActions())(TableHOC);\r\n\r\n        it('should not throw', () => {\r\n            expect(shallowWithState(<TableWithActions id=\"a\" data={[]} renderBody={_.identity} />, {}));\r\n            expect(\r\n                shallowWithState(\r\n                    <TableWithActions\r\n                        id=\"b\"\r\n                        data={[{value: 'a'}]}\r\n                        renderBody={(allData: any[]) =>\r\n                            _.map(allData, (data: any) => (\r\n                                <tr>\r\n                                    <td>{data.value}</td>\r\n                                </tr>\r\n                            ))\r\n                        }\r\n                    />,\r\n                    {}\r\n                )\r\n            );\r\n        });\r\n\r\n        it('should render a TableHOC', () => {\r\n            const wrapper = shallowWithState(<TableWithActions id=\"a\" data={[]} renderBody={_.identity} />, {}).dive();\r\n            expect(wrapper.find(TableHOC).exists()).toBe(true);\r\n        });\r\n\r\n        it('should add the hasActionButtons prop on the table', () => {\r\n            const wrapper = shallowWithState(<TableWithActions id=\"a\" data={[]} renderBody={_.identity} />, {}).dive();\r\n            expect(wrapper.find(TableHOC).prop('hasActionButtons')).toBe(true);\r\n        });\r\n\r\n        describe('click outside', () => {\r\n            const id = 'a';\r\n            let wrapper: ShallowWrapper;\r\n            let store: ReactVaporMockStore;\r\n\r\n            const shallowComponent = () => {\r\n                spyOn(document.body, 'contains').and.returnValue(true);\r\n                const spy = spyOn(document, 'addEventListener');\r\n\r\n                store = getStoreMock({});\r\n                wrapper = shallowWithStore(\r\n                    <TableWithActions id={id} data={[]} renderBody={_.identity} />,\r\n                    store\r\n                ).dive();\r\n                return [spy.calls.mostRecent().args[1]];\r\n            };\r\n\r\n            afterEach(() => {\r\n                wrapper?.unmount();\r\n            });\r\n\r\n            it('should not dispatch an action when the user click outside and no rows are selected', () => {\r\n                spyOn(TableSelectors, 'getSelectedRows').and.returnValue([]);\r\n                const [clickOnElement] = shallowComponent();\r\n\r\n                clickOnElement({target: {closest: (): HTMLElement => null}});\r\n\r\n                expect(store.getActions()).not.toContain(TableHOCRowActions.deselectAll(id));\r\n            });\r\n\r\n            it('should dispatch an action when the user click outside and a row is selected', () => {\r\n                spyOn(TableSelectors, 'getSelectedRows').and.returnValue([{}]);\r\n                const [clickOnElement] = shallowComponent();\r\n\r\n                clickOnElement({target: {closest: (): HTMLElement => null}});\r\n\r\n                expect(store.getActions()).toContain(TableHOCRowActions.deselectAll(id));\r\n            });\r\n\r\n            it('should not dispatch an action when the user click inside the table', () => {\r\n                spyOn(TableSelectors, 'getSelectedRows').and.returnValue([{}]);\r\n                const [clickOnElement] = shallowComponent();\r\n\r\n                clickOnElement({target: {closest: () => jasmine.anything()}});\r\n\r\n                expect(store.getActions()).not.toContain(TableHOCRowActions.deselectAll(id));\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=819.bundle.js.map