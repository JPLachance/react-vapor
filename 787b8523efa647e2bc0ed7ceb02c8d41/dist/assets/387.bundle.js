(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{1481:function(r,e,t){"use strict";t.r(e),e.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {FilterBox, IFilterBoxProps} from '../FilterBox';\r\nimport {filterThrough} from '../FilterBoxActions';\r\nimport {FilterBoxConnected} from '../FilterBoxConnected';\r\n\r\ndescribe('FilterBox', () => {\r\n    describe('<FilterBoxConnected />', () => {\r\n        let id: string;\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let filterBox: ReactWrapper<IFilterBoxProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            id = 'filter-box';\r\n\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <FilterBoxConnected id={id} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            filterBox = wrapper.find(FilterBox).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get its id as a prop', () => {\r\n            const idProp = filterBox.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(id);\r\n        });\r\n\r\n        it('should get what to do on render as a prop', () => {\r\n            const onRenderProp = filterBox.props().onRender;\r\n\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy as a prop', () => {\r\n            const onDestroyProp = filterBox.props().onDestroy;\r\n\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on filter as a prop', () => {\r\n            const onFilterProp = filterBox.props().onFilter;\r\n\r\n            expect(onFilterProp).toBeDefined();\r\n        });\r\n\r\n        it('should render an input to filter', () => {\r\n            expect(filterBox.find('input').length).toBe(1);\r\n        });\r\n\r\n        it('should add the filter box in the store on render', () => {\r\n            expect(store.getState().filters.filter((filter) => filter.id === id).length).toBe(1);\r\n        });\r\n\r\n        it('should remove the filter box in the store on render', () => {\r\n            wrapper.unmount();\r\n            expect(store.getState().filters.filter((filter) => filter.id === id).length).toBe(0);\r\n        });\r\n\r\n        it('should send the text from the filter input to the store on filter', () => {\r\n            const newValue = 'something';\r\n\r\n            expect(\r\n                store.getState().filters.filter((filter) => filter.id === id && filter.filterText === '').length\r\n            ).toBe(1);\r\n\r\n            // Use the dispatch since the onFilter is debounced, and is hardly testable\r\n            expect(() => filterBox.props().onFilter(filterBox.props().id, 'anyWouldDo')).not.toThrow();\r\n            store.dispatch(filterThrough(filterBox.props().id, newValue));\r\n\r\n            expect(\r\n                store.getState().filters.filter((filter) => filter.id === id && filter.filterText === '').length\r\n            ).toBe(0);\r\n            expect(\r\n                store.getState().filters.filter((filter) => filter.id === id && filter.filterText === newValue).length\r\n            ).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=387.bundle.js.map