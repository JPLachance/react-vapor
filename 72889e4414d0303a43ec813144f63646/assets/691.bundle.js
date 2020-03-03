(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{1780:function(e,t,n){"use strict";n.r(t),t.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {keyCode} from '../../../utils/InputUtils';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {clearListBoxOption} from '../../listBox/ListBoxActions';\r\nimport {ISelectProps, ISelectSpecificProps, SelectConnected} from '../SelectConnected';\r\nimport {SelectSelector} from '../SelectSelector';\r\nimport {ISingleSelectProps, SingleSelectConnected} from '../SingleSelectConnected';\r\n\r\ndescribe('Select', () => {\r\n    describe('<SingleSelectConnected />', () => {\r\n        let singleSelect: ReactWrapper<ISingleSelectProps>;\r\n        let select: ReactWrapper<ISelectProps & ISelectSpecificProps>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const id: string = 'list-box-connected';\r\n\r\n        const mountSingleSelect = (\r\n            items: IItemBoxProps[] = [],\r\n            props: Partial<ISingleSelectProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = {}\r\n        ) => {\r\n            singleSelect = mount(<SingleSelectConnected id={id} items={items} {...props} />, {\r\n                attachTo: document.getElementById('App'),\r\n                context: {store},\r\n            });\r\n            select = singleSelect.find(SelectConnected).first();\r\n        };\r\n\r\n        const getIsOpen = () => SelectSelector.getSelectOpened(store.getState(), {id});\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            singleSelect.detach();\r\n        });\r\n\r\n        describe('mount and unmount', () => {\r\n            it('should not throw on mount', () => {\r\n                expect(() => mountSingleSelect()).not.toThrow();\r\n            });\r\n\r\n            it('should not throw on unmount', () => {\r\n                mountSingleSelect();\r\n                expect(() => singleSelect.unmount()).not.toThrow();\r\n            });\r\n\r\n            it('should add the list box to the state when mounted', () => {\r\n                expect(store.getState().selects.length).toBe(0);\r\n\r\n                mountSingleSelect();\r\n\r\n                expect(store.getState().selects.length).toBe(1);\r\n            });\r\n\r\n            it('should remove the list box from the state when the component unmount', () => {\r\n                mountSingleSelect();\r\n\r\n                expect(store.getState().selects.length).toBe(1);\r\n                singleSelect.unmount();\r\n\r\n                expect(store.getState().selects.length).toBe(0);\r\n            });\r\n        });\r\n\r\n        it('should allow a custom placeholder', () => {\r\n            const expectedPlaceholder = 'select thingy';\r\n\r\n            mountSingleSelect([{value: 'a'}, {value: 'b'}], {placeholder: expectedPlaceholder});\r\n\r\n            expect(select.html()).toContain(expectedPlaceholder);\r\n        });\r\n\r\n        it('should contain the selected value', () => {\r\n            const selectedValue = 'dis 1';\r\n            mountSingleSelect([{value: 'a'}, {value: selectedValue, selected: true}]);\r\n\r\n            expect(select.html()).toContain(selectedValue);\r\n        });\r\n\r\n        it('should contain the display value when the selected value has one', () => {\r\n            const selectedDisplayValue = 'dis 2';\r\n            mountSingleSelect([{value: 'a'}, {value: 'dis 1', displayValue: selectedDisplayValue, selected: true}]);\r\n\r\n            expect(select.html()).toContain(selectedDisplayValue);\r\n        });\r\n\r\n        it('should contain the selected item as a prop', () => {\r\n            const selectedValue = 'dis 1';\r\n            mountSingleSelect([{value: 'a'}, {value: selectedValue, selected: true}]);\r\n\r\n            const value: string = select.find('.dropdown-selected-value').prop<string>('data-value');\r\n            expect(value).toBe(selectedValue);\r\n        });\r\n\r\n        it('should set the toggleClasses prop if any on the dropdown-toggle', () => {\r\n            mountSingleSelect([], {\r\n                toggleClasses: 'some-class',\r\n            });\r\n\r\n            expect(select.find('.dropdown-toggle').hasClass('some-class')).toBe(true);\r\n        });\r\n\r\n        it('should disable the toggle button when disabled prop is set to true', () => {\r\n            mountSingleSelect([], {\r\n                disabled: true,\r\n            } as any);\r\n\r\n            expect(select.find('.dropdown-toggle').is('[disabled]')).toBe(true);\r\n        });\r\n\r\n        it('should contain the toggle prepend in the toggle (button) if defined', () => {\r\n            const expectedPrepend = <span>{'some prepended text'}</span>;\r\n            mountSingleSelect([], {buttonPrepend: expectedPrepend});\r\n\r\n            expect(\r\n                select\r\n                    .find('.dropdown-toggle')\r\n                    .children()\r\n                    .first()\r\n                    .equals(expectedPrepend)\r\n            ).toBe(true);\r\n        });\r\n\r\n        it('should contain the prepend and append in the button when selected', () => {\r\n            const prepend = 'pre';\r\n            const append = 'post';\r\n            mountSingleSelect([\r\n                {value: 'a', selected: true, prepend: {content: prepend}, append: {content: append}},\r\n                {value: 'b', selected: false},\r\n            ]);\r\n            const buttonHTML = select.find('.dropdown-toggle').html();\r\n\r\n            expect(buttonHTML).toContain(prepend);\r\n            expect(buttonHTML).toContain(append);\r\n        });\r\n\r\n        it('should have a clear icon when a value selected and canClear is true', () => {\r\n            mountSingleSelect([{value: 'a', selected: true}], {canClear: true});\r\n\r\n            expect(select.find('.dropdown-toggle').hasClass('mod-append')).toBe(true);\r\n            expect(select.find('.btn-append').exists()).toBe(true);\r\n        });\r\n\r\n        it('should not have a clear icon when a value selected and canClear is undefined', () => {\r\n            mountSingleSelect([{value: 'a', selected: true}]);\r\n\r\n            expect(select.find('.dropdown-toggle').hasClass('mod-append')).toBe(false);\r\n            expect(select.find('.btn-append').exists()).toBe(false);\r\n        });\r\n\r\n        it('should not have a clear icon when no value is selected and canClear is true', () => {\r\n            mountSingleSelect([{value: 'a', selected: false}], {canClear: true});\r\n\r\n            expect(select.find('.dropdown-toggle').hasClass('mod-append')).toBe(false);\r\n            expect(select.find('.btn-append').exists()).toBe(false);\r\n        });\r\n\r\n        it('should not have a clear icon when disabled is true even if canClear is true', () => {\r\n            mountSingleSelect([{value: 'a', selected: false}], {canClear: true, disabled: true});\r\n\r\n            expect(select.find('.dropdown-toggle').hasClass('mod-append')).toBe(false);\r\n            expect(select.find('.btn-append').exists()).toBe(false);\r\n        });\r\n\r\n        it('should clear the selected value when the deselect is clicked', () => {\r\n            const spy = spyOn(store, 'dispatch').and.callThrough();\r\n            mountSingleSelect([{value: 'a', selected: true}], {canClear: true});\r\n\r\n            select\r\n                .find('.btn-append')\r\n                .first()\r\n                .simulate('click');\r\n            expect(spy).toHaveBeenCalledWith(clearListBoxOption(id));\r\n        });\r\n\r\n        it('should display the selectedDisplayValue if defined in the button for the selected item', () => {\r\n            const selectedDisplayValue = 'Another selected value bites the dust';\r\n            mountSingleSelect([\r\n                {value: 'a', selected: true, selectedDisplayValue},\r\n                {value: 'b', selected: false},\r\n            ]);\r\n            const buttonHTML = select.find('.dropdown-toggle').html();\r\n\r\n            expect(buttonHTML).toContain(selectedDisplayValue);\r\n        });\r\n\r\n        it('should not contain the prepend and append in the button when not selected', () => {\r\n            const prepend = 'pre';\r\n            const append = 'post';\r\n            mountSingleSelect([\r\n                {value: 'a', selected: false, prepend: {content: 'pre'}, append: {content: 'post'}},\r\n                {value: 'b', selected: true},\r\n            ]);\r\n\r\n            const buttonHTML = select.find('.dropdown-toggle').html();\r\n\r\n            expect(buttonHTML).not.toContain(prepend);\r\n            expect(buttonHTML).not.toContain(append);\r\n        });\r\n\r\n        it('should call with the selected option the onSelectOptionCallback prop when defined', () => {\r\n            const onSelectOptionCallbackSpy = jasmine.createSpy('onSelectOptionCallback');\r\n\r\n            mountSingleSelect([{value: 'a'}, {value: 'b'}], {onSelectOptionCallback: onSelectOptionCallbackSpy});\r\n\r\n            select.find('.dropdown-toggle').simulate('click');\r\n            select\r\n                .find('.item-box')\r\n                .first()\r\n                .simulate('click');\r\n\r\n            expect(onSelectOptionCallbackSpy).toHaveBeenCalledWith('a');\r\n        });\r\n\r\n        describe('keyboard events', () => {\r\n            it('should not throw on keydown in the dropdown', () => {\r\n                mountSingleSelect();\r\n\r\n                const el = select.find('.dropdown-toggle');\r\n                _.each(keyCode, (code) => {\r\n                    expect(() => el.simulate('keydown', {keyCode: code})).not.toThrow();\r\n                });\r\n            });\r\n\r\n            it('should open the dropdown when the user press enter on the button', () => {\r\n                mountSingleSelect();\r\n\r\n                expect(getIsOpen()).toBe(false);\r\n\r\n                select.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.enter});\r\n                expect(getIsOpen()).toBe(true);\r\n            });\r\n\r\n            it('should close the dropdown when the user press escape on the button and the dropdown is open', () => {\r\n                mountSingleSelect();\r\n\r\n                expect(getIsOpen()).toBe(false, 0);\r\n                select.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.escape});\r\n                expect(getIsOpen()).toBe(false, 1);\r\n\r\n                select.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.enter});\r\n                expect(getIsOpen()).toBe(true, 2);\r\n\r\n                select.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.escape});\r\n                expect(getIsOpen()).toBe(false, 3);\r\n            });\r\n        });\r\n\r\n        describe('footer props', () => {\r\n            it('should pass the footer prop to <SelectConnected/>', () => {\r\n                const footer: React.ReactElement = <span id=\"some-footer\"> 👢 </span>;\r\n                const mountedSingleSelect = mount(\r\n                    <SingleSelectConnected id={id} items={[{value: 'a', selected: false}]} footer={footer} />,\r\n                    {\r\n                        attachTo: document.getElementById('App'),\r\n                        context: {store},\r\n                    }\r\n                );\r\n                expect(mountedSingleSelect.find('#some-footer').matchesElement(footer)).toBeTruthy();\r\n                mountedSingleSelect.unmount();\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=691.bundle.js.map