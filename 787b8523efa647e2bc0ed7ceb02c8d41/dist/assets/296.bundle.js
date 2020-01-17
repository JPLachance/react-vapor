(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1390:function(e,n,t){"use strict";t.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {DATES_SEPARATOR, DateUtils} from '../../../utils/DateUtils';\r\nimport {DatePicker} from '../DatePicker';\r\nimport {\r\n    DatesSelection,\r\n    IDatesSelectionProps,\r\n    LOWER_LIMIT_PLACEHOLDER,\r\n    UPPER_LIMIT_PLACEHOLDER,\r\n} from '../DatesSelection';\r\n\r\ndescribe('Date picker', () => {\r\n    describe('<DatesSelection />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<DatesSelection />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<DatesSelection />', () => {\r\n        let datesSelection: ReactWrapper<IDatesSelectionProps, any>;\r\n        let datesSelectionInstance: DatesSelection;\r\n\r\n        beforeEach(() => {\r\n            datesSelection = mount(<DatesSelection />, {attachTo: document.getElementById('App')});\r\n            datesSelectionInstance = datesSelection.instance() as DatesSelection;\r\n        });\r\n\r\n        afterEach(() => {\r\n            datesSelection.detach();\r\n        });\r\n\r\n        it('should display one <DatePicker /> by default and two if isRange prop is set to true', () => {\r\n            expect(datesSelection.find('DatePicker').length).toBe(1);\r\n\r\n            datesSelection.setProps({isRange: true});\r\n\r\n            expect(datesSelection.find('DatePicker').length).toBe(2);\r\n        });\r\n\r\n        it('should display a separator between the two date pickers if isRange prop is set to true', () => {\r\n            expect(datesSelection.find('.date-separator').length).toBe(0);\r\n\r\n            datesSelection.setProps({isRange: true});\r\n\r\n            expect(datesSelection.find('.date-separator').length).toBe(1);\r\n        });\r\n\r\n        it('should not add the class \"mod-vertical\" on the separator if the pickers are small', () => {\r\n            datesSelection.setProps({isRange: true, withTime: false, hasSetToNowButton: false});\r\n            expect(datesSelection.find('.date-separator').hasClass('mod-vertical')).toBe(false);\r\n        });\r\n\r\n        it('should add the class \"mod-vertical\" on the separator if the pickers are large', () => {\r\n            datesSelection.setProps({isRange: true, withTime: false, hasSetToNowButton: true});\r\n            expect(datesSelection.find('.date-separator').hasClass('mod-vertical')).toBe(true);\r\n\r\n            datesSelection.setProps({isRange: true, withTime: false, hasSetToNowButton: true});\r\n            expect(datesSelection.find('.date-separator').hasClass('mod-vertical')).toBe(true);\r\n        });\r\n\r\n        it('should have the classes \"mod-inline\" and \"flex\" if the pickers are small', () => {\r\n            datesSelection.setProps({isRange: true, withTime: false, hasSetToNowButton: false});\r\n            expect(datesSelection.find('.mod-inline.flex').length).toBe(1);\r\n        });\r\n\r\n        it('should not have the classes \"mod-inline\" and \"flex\" if the pickers are large', () => {\r\n            datesSelection.setProps({isRange: false, withTime: false, hasSetToNowButton: false});\r\n            expect(datesSelection.find('.mod-inline.flex').length).toBe(0);\r\n\r\n            datesSelection.setProps({isRange: true, withTime: false, hasSetToNowButton: true});\r\n            expect(datesSelection.find('.mod-inline.flex').length).toBe(0);\r\n\r\n            datesSelection.setProps({isRange: false, withTime: true, hasSetToNowButton: false});\r\n            expect(datesSelection.find('.mod-inline.flex').length).toBe(0);\r\n\r\n            datesSelection.setProps({isRange: false, withTime: true, hasSetToNowButton: true});\r\n            expect(datesSelection.find('.mod-inline.flex').length).toBe(0);\r\n\r\n            datesSelection.setProps({isRange: false, withTime: false, hasSetToNowButton: true});\r\n            expect(datesSelection.find('.mod-inline.flex').length).toBe(0);\r\n        });\r\n\r\n        it(\r\n            'should call onDateChange with the date and whether or not the picker is the upper limit when calling the ' +\r\n                'onChange prop on the picker',\r\n            () => {\r\n                const expectedDate: Date = new Date();\r\n                const expectedIsUpperLimit: boolean = true;\r\n                const onDateChangeSpy: jasmine.Spy = spyOn<any>(datesSelectionInstance, 'onDateChange');\r\n\r\n                datesSelection\r\n                    .find(DatePicker)\r\n                    .first()\r\n                    .props()\r\n                    .onBlur(expectedDate, expectedIsUpperLimit);\r\n\r\n                expect(onDateChangeSpy).toHaveBeenCalledWith(expectedDate, expectedIsUpperLimit);\r\n            }\r\n        );\r\n\r\n        it(\r\n            'should call onDateClick with and whether or not the picker is the upper limit when calling the onClick prop ' +\r\n                'on the picker',\r\n            () => {\r\n                const expectedIsUpperLimit: boolean = true;\r\n                const onDateClickSpy: jasmine.Spy = spyOn<any>(datesSelectionInstance, 'onDateClick');\r\n\r\n                datesSelection\r\n                    .find(DatePicker)\r\n                    .first()\r\n                    .props()\r\n                    .onClick(expectedIsUpperLimit);\r\n\r\n                expect(onDateClickSpy).toHaveBeenCalledWith(expectedIsUpperLimit);\r\n            }\r\n        );\r\n\r\n        it('should call onBlur prop if defined when calling onDateChange', () => {\r\n            const onBlurSpy: jasmine.Spy = jasmine.createSpy('onBlur');\r\n\r\n            expect(() => {\r\n                datesSelectionInstance['onDateChange'].call(datesSelectionInstance, new Date(), false);\r\n            }).not.toThrow();\r\n\r\n            datesSelection.setProps({onBlur: onBlurSpy});\r\n            datesSelectionInstance['onDateChange'].call(datesSelectionInstance, new Date(), false);\r\n\r\n            expect(onBlurSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should not throw on date click if the onClick prop is not defined', () => {\r\n            const onClickSpy: jasmine.Spy = jasmine.createSpy('onClick');\r\n\r\n            expect(() => {\r\n                datesSelectionInstance['onDateClick'].call(datesSelectionInstance, false);\r\n            }).not.toThrow();\r\n\r\n            datesSelection.setProps({onClick: onClickSpy});\r\n            datesSelectionInstance['onDateClick'].call(datesSelectionInstance, false);\r\n\r\n            expect(onClickSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onRender prop if set when mounting', () => {\r\n            const onRenderSpy: jasmine.Spy = jasmine.createSpy('onRender');\r\n\r\n            expect(() => datesSelectionInstance.componentWillMount()).not.toThrow();\r\n\r\n            datesSelection.unmount();\r\n            datesSelection.setProps({onRender: onRenderSpy});\r\n            datesSelection.mount();\r\n            expect(onRenderSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onDestroy prop if set when will unmount', () => {\r\n            const onDestroySpy: jasmine.Spy = jasmine.createSpy('onDestroy');\r\n\r\n            expect(() => datesSelectionInstance.componentWillUnmount()).not.toThrow();\r\n\r\n            datesSelection.setProps({onDestroy: onDestroySpy});\r\n            datesSelection.unmount();\r\n            expect(onDestroySpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should display the lower limit placeholder sent as a prop or use the default one', () => {\r\n            const expectedPlaceholder: string = 'Choisir une date';\r\n\r\n            datesSelection.setProps({isRange: true});\r\n\r\n            expect(datesSelection.html()).toContain(LOWER_LIMIT_PLACEHOLDER);\r\n\r\n            datesSelection.setProps({isRange: true, lowerLimitPlaceholder: expectedPlaceholder});\r\n\r\n            expect(datesSelection.html()).not.toContain(LOWER_LIMIT_PLACEHOLDER);\r\n            expect(datesSelection.html()).toContain(expectedPlaceholder);\r\n        });\r\n\r\n        it('should display the upper limit placeholder sent as a prop or use the default one', () => {\r\n            const expectedPlaceholder: string = 'Choisir une date';\r\n\r\n            datesSelection.setProps({isRange: true});\r\n\r\n            expect(datesSelection.html()).toContain(UPPER_LIMIT_PLACEHOLDER);\r\n\r\n            datesSelection.setProps({isRange: true, upperLimitPlaceholder: expectedPlaceholder});\r\n\r\n            expect(datesSelection.html()).not.toContain(UPPER_LIMIT_PLACEHOLDER);\r\n            expect(datesSelection.html()).toContain(expectedPlaceholder);\r\n        });\r\n\r\n        it('should call onDateChange for each picker if the quick option has changed', () => {\r\n            const onDateChangeSpy: jasmine.Spy = spyOn<any>(datesSelectionInstance, 'onDateChange');\r\n            const now: Date = new Date();\r\n\r\n            datesSelection.setProps({quickOption: now.toString()});\r\n\r\n            expect(onDateChangeSpy).toHaveBeenCalledTimes(1);\r\n\r\n            datesSelection.setProps({quickOption: now.toString()});\r\n\r\n            expect(onDateChangeSpy).toHaveBeenCalledTimes(1);\r\n\r\n            expect(onDateChangeSpy).toHaveBeenCalledTimes(1);\r\n\r\n            datesSelection.setProps({quickOption: new Date(now.setHours(4, 4, 4, 4)).toString()});\r\n\r\n            expect(onDateChangeSpy).toHaveBeenCalledTimes(2);\r\n\r\n            datesSelection.setProps({quickOption: new Date().toString() + DATES_SEPARATOR + new Date().toString()});\r\n\r\n            expect(onDateChangeSpy).toHaveBeenCalledTimes(4);\r\n        });\r\n\r\n        it('should call onBlur prop on blur of the date picker if the date is in the input is valid', () => {\r\n            const onBlurSpy: jasmine.Spy = jasmine.createSpy('onBlur');\r\n\r\n            expect(() => {\r\n                datesSelection\r\n                    .find(DatePicker)\r\n                    .props()\r\n                    .onBlur(new Date(), false);\r\n            }).not.toThrow();\r\n\r\n            datesSelection.setProps({onBlur: onBlurSpy}).update();\r\n            (datesSelection.find('input').instance() as any).value = DateUtils.getDateWithTimeString(new Date());\r\n            datesSelection\r\n                .find(DatePicker)\r\n                .props()\r\n                .onBlur(new Date(), false);\r\n\r\n            expect(onBlurSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=296.bundle.js.map