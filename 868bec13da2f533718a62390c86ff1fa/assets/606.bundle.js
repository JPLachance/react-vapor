(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{1700:function(e,r,t){"use strict";t.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IOptionPickerProps, OptionPicker} from '../OptionPicker';\r\nimport {changeOptionPicker} from '../OptionPickerActions';\r\nimport {OptionPickerConnected} from '../OptionPickerConnected';\r\nimport {IOptionPickerState} from '../OptionPickerReducers';\r\n\r\ndescribe('Option picker', () => {\r\n    const OPTION_PICKER_BASIC_PROPS: IOptionPickerProps = {\r\n        id: 'option-picker',\r\n        options: [\r\n            {\r\n                label: 'Option 1',\r\n                value: () => 'optionValue',\r\n            },\r\n            {\r\n                label: 'Option 2',\r\n                value: () => '1238',\r\n            },\r\n        ],\r\n    };\r\n\r\n    describe('<OptionPickerConnected />', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let optionPicker: ReactWrapper<IOptionPickerProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <OptionPickerConnected {...OPTION_PICKER_BASIC_PROPS} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            optionPicker = wrapper.find(OptionPicker).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get an id as a prop', () => {\r\n            const idProp = optionPicker.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(OPTION_PICKER_BASIC_PROPS.id);\r\n        });\r\n\r\n        it('should get the active label as a prop', () => {\r\n            const activeLabelProp = optionPicker.props().activeLabel;\r\n\r\n            expect(activeLabelProp).toBeDefined();\r\n            expect(activeLabelProp).toBe('');\r\n        });\r\n\r\n        it('should get what to do on render as a prop', () => {\r\n            const onRenderProp = optionPicker.props().onRender;\r\n\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy as a prop', () => {\r\n            const onDestroyProp = optionPicker.props().onDestroy;\r\n\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on click as a prop', () => {\r\n            const onChangeProp = optionPicker.props().onClick;\r\n\r\n            expect(onChangeProp).toBeDefined();\r\n        });\r\n\r\n        it('should return an empty string for the activeLabel when the option picker does not exist in the state', () => {\r\n            store.dispatch(clearState());\r\n            wrapper.update();\r\n\r\n            expect(_.findWhere(store.getState().optionPickers, {id: OPTION_PICKER_BASIC_PROPS.id})).toBeUndefined();\r\n            expect(wrapper.find(OptionPicker).props().activeLabel).toBe('');\r\n        });\r\n\r\n        it('should return the activeLabel from the state when the option picker exists in the state', () => {\r\n            const expectedSelectedValue: string = 'our value';\r\n            const expectedSelectedLabel: string = 'our label';\r\n\r\n            store.dispatch(\r\n                changeOptionPicker(OPTION_PICKER_BASIC_PROPS.id, expectedSelectedLabel, expectedSelectedValue)\r\n            );\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(OptionPicker).props().activeLabel).toBe(expectedSelectedLabel);\r\n        });\r\n\r\n        it('should call onRender prop when mounted', () => {\r\n            wrapper.unmount();\r\n            store.dispatch(clearState());\r\n\r\n            expect(store.getState().optionPickers.length).toBe(0);\r\n\r\n            wrapper.mount();\r\n\r\n            expect(store.getState().optionPickers.length).toBe(1);\r\n        });\r\n\r\n        it('should call onDestroy prop when will unmount', () => {\r\n            wrapper.unmount();\r\n\r\n            expect(store.getState().optionPickers.length).toBe(0);\r\n        });\r\n\r\n        it('should set the selected value to the one sent when calling the onClick prop', () => {\r\n            let expectedSelectedValue: string = 'our value';\r\n            let expectedSelectedLabel: string = 'our label';\r\n            let optionPickerState: IOptionPickerState;\r\n\r\n            optionPicker.props().onClick(expectedSelectedValue, expectedSelectedLabel);\r\n\r\n            optionPickerState = _.findWhere(store.getState().optionPickers, {id: OPTION_PICKER_BASIC_PROPS.id});\r\n            expect(optionPickerState.selectedValue).toBe(expectedSelectedValue);\r\n            expect(optionPickerState.selectedLabel).toBe(expectedSelectedLabel);\r\n\r\n            expectedSelectedValue = 'new value';\r\n            expectedSelectedLabel = 'new label';\r\n\r\n            optionPicker.props().onClick(expectedSelectedValue, expectedSelectedLabel);\r\n\r\n            optionPickerState = _.findWhere(store.getState().optionPickers, {id: OPTION_PICKER_BASIC_PROPS.id});\r\n            expect(optionPickerState.selectedValue).toBe(expectedSelectedValue);\r\n            expect(optionPickerState.selectedLabel).toBe(expectedSelectedLabel);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=606.bundle.js.map