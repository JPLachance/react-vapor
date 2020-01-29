(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{1342:function(e,o,r){"use strict";r.r(o),o.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {findWhere} from 'underscore';\r\n\r\nimport {SlideY} from '../../../animations/SlideY';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {Collapsible, CollapsibleOwnProps} from '../Collapsible';\r\nimport {setCollapsibleExpanded} from '../CollapsibleActions';\r\nimport {CollapsibleConnected} from '../CollapsibleConnected';\r\nimport {collapsiblePossibleProps} from './CollapsibleTestCommon.spec';\r\n\r\ndescribe('<CollapsibleConnected />', () => {\r\n    let store: Store<IReactVaporState>;\r\n    let basicCollapsibleProps: CollapsibleOwnProps;\r\n    let collapsible: ReactWrapper<CollapsibleOwnProps>;\r\n\r\n    const mountComponentWithProps = (props: CollapsibleOwnProps) => {\r\n        if (collapsible && collapsible.length) {\r\n            collapsible.unmount();\r\n        }\r\n        collapsible = mount(\r\n            <Provider store={store}>\r\n                <CollapsibleConnected {...props}>dummy children</CollapsibleConnected>\r\n            </Provider>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n        return collapsible;\r\n    };\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n        basicCollapsibleProps = {...collapsiblePossibleProps[0]};\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n        collapsible.detach();\r\n    });\r\n\r\n    it('should not throw when calling onMount', () => {\r\n        expect(() =>\r\n            mountComponentWithProps(basicCollapsibleProps)\r\n                .find(Collapsible)\r\n                .props()\r\n                .onMount()\r\n        ).not.toThrow();\r\n    });\r\n\r\n    it('should not throw when calling onUnmount', () => {\r\n        expect(() =>\r\n            mountComponentWithProps(basicCollapsibleProps)\r\n                .find(Collapsible)\r\n                .props()\r\n                .onUnmount()\r\n        ).not.toThrow();\r\n    });\r\n\r\n    it('should not throw when calling onToggleExpandedState', () => {\r\n        expect(() =>\r\n            mountComponentWithProps(basicCollapsibleProps)\r\n                .find(Collapsible)\r\n                .props()\r\n                .onToggleExpandedState(true)\r\n        ).not.toThrow();\r\n    });\r\n\r\n    describe('render', () => {\r\n        it('should render without error in different scenarios', () => {\r\n            collapsiblePossibleProps.forEach((props: CollapsibleOwnProps) => {\r\n                expect(() => mountComponentWithProps(props)).not.toThrow();\r\n            });\r\n        });\r\n\r\n        it('should put the collapsible container in the store on mount', () => {\r\n            expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id})).toBeUndefined();\r\n            mountComponentWithProps(basicCollapsibleProps);\r\n            expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id})).toBeDefined();\r\n        });\r\n\r\n        it('should put the collapsible container in the store on mount', () => {\r\n            mountComponentWithProps(basicCollapsibleProps);\r\n            expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id})).toBeDefined();\r\n            collapsible.unmount();\r\n            expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id})).toBeUndefined();\r\n        });\r\n    });\r\n\r\n    describe('after render', () => {\r\n        describe('Expansion/Toggling logic', () => {\r\n            it('should toggle the expanded prop on click of the collapsible header button', () => {\r\n                mountComponentWithProps(basicCollapsibleProps);\r\n                const expandedBeforeClick = findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id})\r\n                    .expanded;\r\n                collapsible.find(`.${basicCollapsibleProps.headerClasses}`).simulate('click');\r\n                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(\r\n                    !expandedBeforeClick\r\n                );\r\n\r\n                collapsible.find(`.${basicCollapsibleProps.headerClasses}`).simulate('click');\r\n                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(\r\n                    expandedBeforeClick\r\n                );\r\n            });\r\n\r\n            it('should toggle the SlideY component when CollapsibleActions.setExpanded is triggered', () => {\r\n                mountComponentWithProps({...basicCollapsibleProps});\r\n                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(false);\r\n\r\n                store.dispatch(setCollapsibleExpanded(basicCollapsibleProps.id, true));\r\n                collapsible.update();\r\n\r\n                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(true);\r\n                expect(collapsible.find(SlideY).prop('in')).toBe(true);\r\n\r\n                store.dispatch(setCollapsibleExpanded(basicCollapsibleProps.id, false));\r\n                collapsible.update();\r\n\r\n                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(false);\r\n                expect(collapsible.find(SlideY).prop('in')).toBe(false);\r\n            });\r\n\r\n            it('should render as expanded if expandedOnMount is passed in props', () => {\r\n                mountComponentWithProps({...basicCollapsibleProps, expandedOnMount: true});\r\n\r\n                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(true);\r\n                expect(collapsible.find(SlideY).prop('in')).toBe(true);\r\n            });\r\n\r\n            it('should render as not expanded if expandedOnMount is not passed in props', () => {\r\n                mountComponentWithProps(basicCollapsibleProps);\r\n\r\n                expect(findWhere(store.getState().collapsibles, {id: basicCollapsibleProps.id}).expanded).toBe(false);\r\n                expect(collapsible.find(SlideY).prop('in')).toBe(false);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=251.bundle.js.map