(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{1469:function(e,r,t){"use strict";t.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {addFacet, toggleMoreFacetRows} from '../FacetActions';\r\nimport {FacetMoreToggle, IFacetMoreToggleProps} from '../FacetMoreToggle';\r\nimport {FacetMoreToggleConnected} from '../FacetMoreToggleConnected';\r\n\r\ndescribe('Facets', () => {\r\n    describe('<FacetMoreToggleConnected />', () => {\r\n        const facet: string = 'facet title';\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let facetMoreToggle: ReactWrapper<IFacetMoreToggleProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <FacetMoreToggleConnected facet={facet} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            store.dispatch(addFacet(facet));\r\n            wrapper.update();\r\n            facetMoreToggle = wrapper.find(FacetMoreToggle);\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get its state (opened or not) as a prop', () => {\r\n            const openedProp = facetMoreToggle.props().isOpened;\r\n\r\n            expect(openedProp).toBeDefined();\r\n            expect(openedProp).toBe(false);\r\n        });\r\n\r\n        it('should get what to do when toggling it as a prop', () => {\r\n            const onToggleProp = facetMoreToggle.props().onToggleMore;\r\n\r\n            expect(onToggleProp).toBeDefined();\r\n        });\r\n\r\n        it('should call onToggleMore on change', () => {\r\n            expect(facetMoreToggle.props().isOpened).toBe(false);\r\n\r\n            facetMoreToggle.find('input').simulate('change');\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(FacetMoreToggle).props().isOpened).toBe(true);\r\n        });\r\n\r\n        it('should be hidden when the other rows are opened', () => {\r\n            expect(facetMoreToggle.find('li').hasClass('hidden')).toBe(false);\r\n\r\n            store.dispatch(toggleMoreFacetRows(facet));\r\n            wrapper.update();\r\n\r\n            expect(\r\n                wrapper\r\n                    .find(FacetMoreToggle)\r\n                    .find('li')\r\n                    .hasClass('hidden')\r\n            ).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=375.bundle.js.map