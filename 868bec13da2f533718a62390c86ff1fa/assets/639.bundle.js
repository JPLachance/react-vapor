(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{1731:function(e,r,o){"use strict";o.r(r),r.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IRadioSelectAllProps, RadioSelect} from '../RadioSelect';\r\nimport {RadioSelectConnected} from '../RadioSelectConnected';\r\n\r\ndescribe('RadioSelectConnected', () => {\r\n    let store: Store<IReactVaporState>;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    const mountComponentWithProps = (props: IRadioSelectAllProps = {id: 'someid'}) =>\r\n        mount(\r\n            <Provider store={store}>\r\n                <RadioSelectConnected {...props} />\r\n            </Provider>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n\r\n    const radioSelectProps = {\r\n        id: 'radioSelectId',\r\n    };\r\n    const fullRadioSelectProps = {\r\n        ...radioSelectProps,\r\n        valueOnMount: 'valueonmount',\r\n        disabledValuesOnMount: ['disabledvalue'],\r\n    };\r\n\r\n    describe('dispatch props', () => {\r\n        it('should not throw when calling onRender with basic props', () => {\r\n            expect(() =>\r\n                mountComponentWithProps(radioSelectProps)\r\n                    .find(RadioSelect)\r\n                    .prop('onMount')(radioSelectProps.id, 'somevalue', [])\r\n            ).not.toThrow();\r\n        });\r\n\r\n        it('should not throw when calling onUnmount', () => {\r\n            expect(() =>\r\n                mountComponentWithProps(radioSelectProps)\r\n                    .find(RadioSelect)\r\n                    .prop('onUnmount')(radioSelectProps.id)\r\n            ).not.toThrow();\r\n        });\r\n\r\n        it('should not throw when calling onChange with basic props', () => {\r\n            expect(() =>\r\n                mountComponentWithProps(radioSelectProps)\r\n                    .find(RadioSelect)\r\n                    .prop('onChange')('somevalue', radioSelectProps.id)\r\n            ).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('onMount', () => {\r\n        it('should add a radioSelect in the store with proper values', () => {\r\n            mountComponentWithProps(fullRadioSelectProps);\r\n\r\n            const radioSelect = _.findWhere(store.getState().radioSelects, {id: fullRadioSelectProps.id});\r\n            expect(radioSelect).toBeDefined();\r\n            expect(_.values(radioSelect)).toEqual(_.values(fullRadioSelectProps));\r\n        });\r\n    });\r\n\r\n    describe('onUnmount', () => {\r\n        it('should remove the radioSelect from the store', () => {\r\n            const radioSelect = mountComponentWithProps(fullRadioSelectProps);\r\n            expect(_.findWhere(store.getState().radioSelects, {id: fullRadioSelectProps.id})).toBeDefined();\r\n\r\n            radioSelect.unmount();\r\n            expect(_.findWhere(store.getState().radioSelects, {id: fullRadioSelectProps.id})).toBeUndefined();\r\n        });\r\n    });\r\n\r\n    describe('onChange', () => {\r\n        it('should change the value in the store to the new value', () => {\r\n            const radioSelect = mountComponentWithProps(fullRadioSelectProps);\r\n            const oldRadioSelectState = _.findWhere(store.getState().radioSelects, {id: fullRadioSelectProps.id});\r\n            expect(oldRadioSelectState.value).toBe(fullRadioSelectProps.valueOnMount);\r\n\r\n            radioSelect.find(RadioSelect).prop('onChange')('new value', radioSelectProps.id);\r\n\r\n            const newRadioSelectState = _.findWhere(store.getState().radioSelects, {id: fullRadioSelectProps.id});\r\n            expect(newRadioSelectState.value).toBe('new value');\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=639.bundle.js.map