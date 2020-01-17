(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{1946:function(e,r,n){"use strict";n.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {ITableHeadingRowOwnProps, ITableHeadingRowProps, TableHeadingRow} from '../TableHeadingRow';\r\nimport {TableHeadingRowConnected} from '../TableHeadingRowConnected';\r\n\r\ndescribe('Tables', () => {\r\n    let basicTableHeadingRowProps: ITableHeadingRowOwnProps;\r\n\r\n    describe('<TableHeadingRowConnected />', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let tableHeadingRow: ReactWrapper<ITableHeadingRowProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const mountWithProps = (props?: Partial<ITableHeadingRowOwnProps>) => {\r\n            if (wrapper && wrapper.length) {\r\n                wrapper.unmount();\r\n            }\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <table>\r\n                        <tbody>\r\n                            <TableHeadingRowConnected {...{...basicTableHeadingRowProps, ...props}} />\r\n                        </tbody>\r\n                    </table>\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            tableHeadingRow = wrapper.find(TableHeadingRow).first();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            basicTableHeadingRowProps = {\r\n                id: 'heading-row',\r\n                isCollapsible: true,\r\n            };\r\n\r\n            store = TestUtils.buildStore();\r\n            mountWithProps();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get its id as a prop', () => {\r\n            const idProp = tableHeadingRow.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(basicTableHeadingRowProps.id);\r\n        });\r\n\r\n        it('should get if its collapsible row is opened as a prop', () => {\r\n            const openedProp = tableHeadingRow.props().opened;\r\n\r\n            expect(openedProp).toBeDefined();\r\n            expect(openedProp).toBe(false);\r\n        });\r\n\r\n        it('should get what to do on render as a prop', () => {\r\n            const onRowRenderProp = tableHeadingRow.props().onRender;\r\n\r\n            expect(onRowRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy as a prop', () => {\r\n            const onRowDestroyProp = tableHeadingRow.props().onDestroy;\r\n\r\n            expect(onRowDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on click as a prop', () => {\r\n            const onRowClickProp = tableHeadingRow.props().onClick;\r\n\r\n            expect(onRowClickProp).toBeDefined();\r\n        });\r\n\r\n        it('should add the row in the store on render', () => {\r\n            expect(store.getState().rows.filter((row) => row.id === basicTableHeadingRowProps.id).length).toBe(1);\r\n        });\r\n\r\n        it('should remove the row in the store on destroy', () => {\r\n            wrapper.unmount();\r\n            expect(store.getState().rows.filter((row) => row.id === basicTableHeadingRowProps.id).length).toBe(0);\r\n        });\r\n\r\n        it('should set the open property to true on click', () => {\r\n            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).opened).toBe(false);\r\n\r\n            tableHeadingRow.find('tr').simulate('click');\r\n            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).opened).toBe(true);\r\n        });\r\n\r\n        it('should set the selected property to true on click when the selectionDisabled prop is false', () => {\r\n            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).selected).toBe(false);\r\n\r\n            tableHeadingRow.find('tr').simulate('click');\r\n            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).selected).toBe(true);\r\n        });\r\n\r\n        it('should not set the selected property to true on click if the selectionDisabled prop is true', () => {\r\n            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).selected).toBe(false);\r\n\r\n            mountWithProps({selectionDisabled: true});\r\n\r\n            wrapper.find('tr').simulate('click');\r\n            wrapper.update();\r\n\r\n            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).selected).toBe(false);\r\n        });\r\n\r\n        it('should not dispatch any action on render, on destroy and on click if not collapsible', () => {\r\n            store.dispatch(clearState());\r\n\r\n            const rowState = _.clone(store.getState().rows);\r\n\r\n            mountWithProps({isCollapsible: false});\r\n\r\n            expect(store.getState().rows).toEqual(jasmine.objectContaining(rowState));\r\n\r\n            tableHeadingRow.find('tr').simulate('click');\r\n            expect(store.getState().rows).toEqual(jasmine.objectContaining(rowState));\r\n\r\n            wrapper.unmount();\r\n            expect(store.getState().rows).toEqual(jasmine.objectContaining(rowState));\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=858.bundle.js.map