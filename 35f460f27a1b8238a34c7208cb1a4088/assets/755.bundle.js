(window.webpackJsonp=window.webpackJsonp||[]).push([[755],{1854:function(r,n,e){"use strict";e.r(n),n.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {findWhere} from 'underscore';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {ISubNavigationProps, SubNavigation} from '../SubNavigation';\r\nimport {SubNavigationConnected} from '../SubNavigationConnected';\r\n\r\ndescribe('SubNavigation', () => {\r\n    let wrapper: ReactWrapper<any, any>;\r\n    let subNavigation: ReactWrapper<ISubNavigationProps, any>;\r\n    let store: Store<IReactVaporState>;\r\n\r\n    describe('<SubNavigationConnected />', () => {\r\n        const basicProps: ISubNavigationProps = {\r\n            id: 'sub-nav-id',\r\n            items: [\r\n                {id: 'a', label: 'A'},\r\n                {id: 'b', label: 'B'},\r\n            ],\r\n            defaultSelected: 'b',\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <SubNavigationConnected {...basicProps} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            subNavigation = wrapper.find(SubNavigation);\r\n        });\r\n\r\n        afterEach(() => {\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get what to do on render as a prop', () => {\r\n            const onRenderProp = subNavigation.props().onRender;\r\n\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy as a prop', () => {\r\n            const onDestroyProp = subNavigation.props().onDestroy;\r\n\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on item click as a prop', () => {\r\n            const onClickItemProp = subNavigation.props().onClickItem;\r\n\r\n            expect(onClickItemProp).toBeDefined();\r\n        });\r\n\r\n        it('should add the sub navigation in the store on mount', () => {\r\n            expect(store.getState().subNavigations.length).toBe(1);\r\n        });\r\n\r\n        it('should remove the dropdown from the store when unmounting', () => {\r\n            wrapper.unmount();\r\n            expect(store.getState().subNavigations.length).toBe(0);\r\n        });\r\n\r\n        it('should set the selected property of the sub navigation on item click', () => {\r\n            expect(findWhere(store.getState().subNavigations, {id: basicProps.id}).selected).toBe(\r\n                basicProps.defaultSelected\r\n            );\r\n\r\n            const li = subNavigation\r\n                .find('.sub-navigation-item')\r\n                .filterWhere((item) => item.key() !== basicProps.defaultSelected)\r\n                .first();\r\n            li.find('.sub-navigation-item-link').simulate('click');\r\n\r\n            expect(findWhere(store.getState().subNavigations, {id: basicProps.id}).selected).toBe(li.key(), 'after');\r\n        });\r\n    });\r\n\r\n    describe('<SubNavigationConnected />', () => {\r\n        it('should select the first menu item when mounting', () => {\r\n            store = TestUtils.buildStore();\r\n            const props: ISubNavigationProps = {\r\n                id: 'sub-nav-id',\r\n                items: [\r\n                    {id: 'a', label: 'A'},\r\n                    {id: 'b', label: 'B'},\r\n                ],\r\n            };\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <SubNavigationConnected {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n\r\n            expect(findWhere(store.getState().subNavigations, {id: props.id}).selected).toBe(props.items[0].id);\r\n            wrapper.unmount();\r\n        });\r\n\r\n        it('should not throw when there is no items', () => {\r\n            store = TestUtils.buildStore();\r\n            const props: ISubNavigationProps = {\r\n                id: 'sub-nav-id',\r\n                items: [],\r\n            };\r\n\r\n            expect(() =>\r\n                mount(\r\n                    <Provider store={store}>\r\n                        <SubNavigationConnected {...props} />\r\n                    </Provider>,\r\n                    {attachTo: document.getElementById('App')}\r\n                ).unmount()\r\n            ).not.toThrow();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=755.bundle.js.map