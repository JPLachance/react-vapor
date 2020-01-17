(window.webpackJsonp=window.webpackJsonp||[]).push([[654],{1745:function(r,e,n){"use strict";n.r(e),e.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {clearState} from '../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../utils/tests/TestUtils';\r\nimport {Svg} from '../svg/Svg';\r\nimport {toggleSearchBarDisabled, toggleSearching} from './SearchBarActions';\r\nimport {SearchBarConnected} from './SearchBarConnected';\r\nimport {searchBarConnectedPropsScenarios} from './SearchBarPropsScenarios.spec';\r\n\r\ndescribe('SearchBarConnected', () => {\r\n    const requiredProps = {...searchBarConnectedPropsScenarios[0]};\r\n\r\n    let store: Store<any>;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    it('should not throw on mount and unmount in different props scenarios', () => {\r\n        expect(() => {\r\n            searchBarConnectedPropsScenarios.forEach((props) => {\r\n                mount(\r\n                    <Provider store={store}>\r\n                        <SearchBarConnected {...props} />\r\n                    </Provider>\r\n                ).unmount();\r\n            });\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should add and remove the search bar on mount and unmount respectively', () => {\r\n        const component = mount(\r\n            <Provider store={store}>\r\n                <SearchBarConnected {...requiredProps} />\r\n            </Provider>\r\n        );\r\n\r\n        expect(store.getState().searchBars[0].id).toBe(requiredProps.id);\r\n        expect(store.getState().searchBars.length).toBe(1);\r\n\r\n        component.unmount();\r\n        expect(store.getState().searchBars.length).toBe(0);\r\n    });\r\n\r\n    it('should mount with a state not searching, not disabled, and without value by default', () => {\r\n        mount(\r\n            <Provider store={store}>\r\n                <SearchBarConnected {...requiredProps} />\r\n            </Provider>\r\n        );\r\n\r\n        expect(store.getState().searchBars[0]).toEqual(\r\n            jasmine.objectContaining({searching: false, disabled: false, value: ''})\r\n        );\r\n    });\r\n\r\n    it('should mount with a state not searching, disabled, and without value if disabledOnMount is passed as prop', () => {\r\n        mount(\r\n            <Provider store={store}>\r\n                <SearchBarConnected {...requiredProps} disabledOnMount />\r\n            </Provider>\r\n        );\r\n\r\n        expect(store.getState().searchBars[0]).toEqual(\r\n            jasmine.objectContaining({searching: false, disabled: true, value: ''})\r\n        );\r\n    });\r\n\r\n    describe('after mount', () => {\r\n        let component: any;\r\n\r\n        beforeEach(() => {\r\n            component = mount(\r\n                <Provider store={store}>\r\n                    <SearchBarConnected {...requiredProps} />\r\n                </Provider>\r\n            );\r\n        });\r\n\r\n        it('should change the value in the state on input change', () => {\r\n            component.find('input').prop('onChange')({target: {value: 'new value'}});\r\n            expect(store.getState().searchBars[0].value).toBe('new value');\r\n        });\r\n\r\n        it('should toggle the disabled state of search bar in the UI when toggleSearchBarDisabled is dispatched', () => {\r\n            store.dispatch(toggleSearchBarDisabled(requiredProps.id, true));\r\n            component.update();\r\n\r\n            expect(component.find('input').prop('disabled')).toBe(true);\r\n            expect(component.find(Svg).prop('svgClass')).toBe('fill-light-grey');\r\n\r\n            store.dispatch(toggleSearchBarDisabled(requiredProps.id, false));\r\n            component.update();\r\n\r\n            expect(component.find('input').prop('disabled')).toBe(false);\r\n            expect(component.find(Svg).prop('svgClass')).toBe('fill-medium-blue');\r\n        });\r\n\r\n        it('should toggle the searching state of search bar in the UI when toggleSearching is dispatched', () => {\r\n            store.dispatch(toggleSearching(requiredProps.id, true));\r\n            component.update();\r\n\r\n            expect(\r\n                component\r\n                    .find('div')\r\n                    .first()\r\n                    .hasClass('search-bar-loading')\r\n            ).toBe(true);\r\n            expect(component.find('input').prop('disabled')).toBe(true);\r\n\r\n            store.dispatch(toggleSearching(requiredProps.id, false));\r\n            component.update();\r\n\r\n            expect(\r\n                component\r\n                    .find('div')\r\n                    .first()\r\n                    .hasClass('search-bar-loading')\r\n            ).toBe(false);\r\n            expect(component.find('input').prop('disabled')).toBe(false);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=654.bundle.js.map