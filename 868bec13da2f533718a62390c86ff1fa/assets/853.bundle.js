(window.webpackJsonp=window.webpackJsonp||[]).push([[853],{1941:function(e,r,n){"use strict";n.r(r),r.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {ITableHeaderProps, TableHeader} from '../TableHeader';\r\nimport {ITableHeaderCellProps, TableHeaderCell} from '../TableHeaderCell';\r\nimport {ITableHeaderCellOwnProps} from '../TableHeaderCell';\r\nimport {TableHeaderCellConnected} from '../TableHeaderCellConnected';\r\n\r\ndescribe('Tables', () => {\r\n    let columns: ITableHeaderCellProps[];\r\n    let headerClass: string;\r\n\r\n    describe('<TableHeader />', () => {\r\n        it('should render without errors', () => {\r\n            columns = [];\r\n\r\n            expect(() => {\r\n                shallow(<TableHeader columns={columns} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<TableHeader />', () => {\r\n        let tableHeader: ReactWrapper<ITableHeaderProps, any>;\r\n\r\n        beforeEach(() => {\r\n            document.getElementById('App').innerHTML = '<table id=\"AppTable\"></table>';\r\n\r\n            columns = [\r\n                {\r\n                    title: 'Header 1',\r\n                    className: 'special',\r\n                },\r\n                {\r\n                    title: 'Header 2',\r\n                },\r\n                {\r\n                    title: 'Header 3',\r\n                },\r\n            ];\r\n\r\n            headerClass = 'header-class';\r\n\r\n            tableHeader = mount(<TableHeader columns={columns} headerClass={headerClass} />, {\r\n                attachTo: document.getElementById('AppTable'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            tableHeader.detach();\r\n        });\r\n\r\n        it('should get the columns as a prop', () => {\r\n            const columnsProp = tableHeader.props().columns;\r\n\r\n            expect(columnsProp).toBeDefined();\r\n            expect(columnsProp).toBe(columns);\r\n        });\r\n\r\n        it('should get the header class name as a prop', () => {\r\n            const headerClassProp = tableHeader.props().headerClass;\r\n\r\n            expect(headerClassProp).toBeDefined();\r\n            expect(headerClassProp).toBe(headerClass);\r\n        });\r\n\r\n        it('should render as many <TableHeaderCell /> as there are columns', () => {\r\n            expect(tableHeader.find(TableHeaderCell).length).toBe(columns.length);\r\n        });\r\n\r\n        it('should have the class sent as a prop', () => {\r\n            expect(tableHeader.find('thead').hasClass(headerClass)).toBe(true);\r\n        });\r\n\r\n        describe('table connected cells vs unconnected table cells', () => {\r\n            const currentColumns: {[key: string]: ITableHeaderCellOwnProps} = {\r\n                cellWithAttributeToSort: {\r\n                    title: 'I will be connected',\r\n                    attributeToSort: 'attributeJustForTesting',\r\n                },\r\n                cellWithoutAttributeToSort: {\r\n                    title: 'I will not be connected because it is not necessary',\r\n                },\r\n            };\r\n\r\n            const store = TestUtils.buildStore();\r\n\r\n            it('should have connected cells if withReduxState is passed as prop and some cells have an attribute to sort', () => {\r\n                tableHeader = mount(\r\n                    <Provider store={store}>\r\n                        <TableHeader columns={_.values(currentColumns)} withReduxState />\r\n                    </Provider>,\r\n                    {attachTo: document.getElementById('AppTable')}\r\n                );\r\n\r\n                expect(tableHeader.find(TableHeaderCellConnected).length).toBe(1);\r\n\r\n                expect(\r\n                    tableHeader\r\n                        .find(TableHeaderCellConnected)\r\n                        .first()\r\n                        .text()\r\n                ).toBe(currentColumns.cellWithAttributeToSort.title as string);\r\n                expect(\r\n                    tableHeader\r\n                        .find(TableHeaderCell)\r\n                        .last()\r\n                        .text()\r\n                ).toBe(currentColumns.cellWithoutAttributeToSort.title as string);\r\n            });\r\n\r\n            it('should not have connected cells if withReduxState is not passed as prop even if some cells have an attribute to sort', () => {\r\n                tableHeader = mount(\r\n                    <Provider store={store}>\r\n                        <TableHeader columns={_.values(currentColumns)} />\r\n                    </Provider>,\r\n                    {attachTo: document.getElementById('AppTable')}\r\n                );\r\n\r\n                expect(tableHeader.find(TableHeaderCellConnected).length).toBe(0);\r\n\r\n                expect(\r\n                    tableHeader\r\n                        .find(TableHeaderCell)\r\n                        .first()\r\n                        .text()\r\n                ).toBe(currentColumns.cellWithAttributeToSort.title as string);\r\n                expect(\r\n                    tableHeader\r\n                        .find(TableHeaderCell)\r\n                        .last()\r\n                        .text()\r\n                ).toBe(currentColumns.cellWithoutAttributeToSort.title as string);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=853.bundle.js.map