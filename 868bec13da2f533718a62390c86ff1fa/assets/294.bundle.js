(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1390:function(e,t,n){"use strict";n.r(t),t.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {DateUtils} from '../../../utils/DateUtils';\r\nimport {DatePicker, DEFAULT_DATE_PICKER_COLOR, IDatePickerProps} from '../DatePicker';\r\nimport {DateLimits} from '../DatePickerActions';\r\n\r\ndescribe('Date picker', () => {\r\n    const DATE_PICKER_BASIC_PROPS: IDatePickerProps = {\r\n        onClick: jasmine.createSpy('onClick'),\r\n        onBlur: jasmine.createSpy('onBlur'),\r\n        placeholder: 'Pick a date',\r\n    };\r\n\r\n    describe('<DatePicker />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<DatePicker {...DATE_PICKER_BASIC_PROPS} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<DatePicker />', () => {\r\n        let datePicker: ReactWrapper<IDatePickerProps, any>;\r\n        let datePickerInstance: DatePicker;\r\n\r\n        beforeEach(() => {\r\n            datePicker = mount(<DatePicker {...DATE_PICKER_BASIC_PROPS} />, {attachTo: document.getElementById('App')});\r\n            datePickerInstance = datePicker.instance() as DatePicker;\r\n        });\r\n\r\n        afterEach(() => {\r\n            datePicker.detach();\r\n        });\r\n\r\n        it('should get what to do on blur as a prop', () => {\r\n            const onBlurProp = datePicker.props().onBlur;\r\n\r\n            expect(onBlurProp).toBeDefined();\r\n        });\r\n\r\n        it('should display a <SetToNowButton /> component if hasSetToNowButton prop is set to true', () => {\r\n            const propsWithButton: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {hasSetToNowButton: true});\r\n\r\n            expect(datePicker.find('SetToNowButton').length).toBe(0);\r\n\r\n            datePicker.setProps(propsWithButton);\r\n\r\n            expect(datePicker.find('SetToNowButton').length).toBe(1);\r\n        });\r\n\r\n        it('should display an <input /> element', () => {\r\n            expect(datePicker.find('input').length).toBe(1);\r\n        });\r\n\r\n        it('should have a class \"border-COLOR_PROP\" on the input or \"border-DEFAULT_COLOR\" if the color prop is not set', () => {\r\n            const propsWithColor: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {color: 'blood'});\r\n\r\n            expect(datePicker.find('input').hasClass(`border-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(true);\r\n\r\n            datePicker.setProps(propsWithColor);\r\n\r\n            expect(datePicker.find('input').hasClass(`border-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);\r\n            expect(datePicker.find('input').hasClass(`border-${propsWithColor.color}`)).toBe(true);\r\n        });\r\n\r\n        it(\r\n            'should have the class \"picking-date\" on the input if the picker is the lower limit and the lower limit is ' +\r\n                'being selected or if the picker is the upper limit and the upper limit is being selected',\r\n            () => {\r\n                let newProps: IDatePickerProps;\r\n\r\n                expect(datePicker.find('input').hasClass('picking-date')).toBe(false);\r\n\r\n                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower, upperLimit: false});\r\n                datePicker.setProps(newProps);\r\n                expect(datePicker.find('input').hasClass('picking-date')).toBe(true);\r\n\r\n                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.upper, upperLimit: false});\r\n                datePicker.setProps(newProps);\r\n                expect(datePicker.find('input').hasClass('picking-date')).toBe(false);\r\n\r\n                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.upper, upperLimit: true});\r\n                datePicker.setProps(newProps);\r\n                expect(datePicker.find('input').hasClass('picking-date')).toBe(true);\r\n\r\n                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower, upperLimit: true});\r\n                datePicker.setProps(newProps);\r\n                expect(datePicker.find('input').hasClass('picking-date')).toBe(false);\r\n            }\r\n        );\r\n\r\n        it(\r\n            'should have the classes \"date-picked\" and \"bg-COLOR_PROP\" or \"bg-DEFAULT_COLOR\" on the input if we are not' +\r\n                ' selecting the picker and there is a date set in the input',\r\n            () => {\r\n                let newProps: IDatePickerProps;\r\n\r\n                expect(datePicker.find('input').hasClass('date-picked')).toBe(false);\r\n                expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);\r\n\r\n                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: new Date()});\r\n                datePicker.setProps(newProps);\r\n                expect(datePicker.find('input').hasClass('date-picked')).toBe(true);\r\n                expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(true);\r\n\r\n                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: new Date(), color: 'white'});\r\n                datePicker.setProps(newProps);\r\n                expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);\r\n                expect(datePicker.find('input').hasClass(`bg-${newProps.color}`)).toBe(true);\r\n\r\n                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {\r\n                    date: new Date(),\r\n                    isSelecting: DateLimits.lower,\r\n                    upperLimit: false,\r\n                });\r\n                datePicker.setProps(newProps);\r\n                expect(datePicker.find('input').hasClass('date-picked')).toBe(false);\r\n                expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);\r\n            }\r\n        );\r\n\r\n        it('should call setToToday when clicking the set to now button', () => {\r\n            const withButtonProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {hasSetToNowButton: true});\r\n            const setToNowSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'setToToday');\r\n            datePicker.setProps(withButtonProps);\r\n\r\n            datePicker.find('button').simulate('click');\r\n\r\n            expect(setToNowSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should change the input value to the current time when calling setToToday and withTime prop is set to true', () => {\r\n            const expectedDate: Date = new Date();\r\n            const withTimeProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {\r\n                withTime: true,\r\n                hasSetToNowButton: true,\r\n            });\r\n            datePicker.setProps(withTimeProps);\r\n\r\n            expect(datePickerInstance['dateInput'].value).toBe('');\r\n\r\n            jasmine.clock().install();\r\n            jasmine.clock().mockDate(expectedDate);\r\n            datePicker.find('button').simulate('click');\r\n\r\n            expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getDateWithTimeString(expectedDate));\r\n            jasmine.clock().uninstall();\r\n        });\r\n\r\n        it('should change the input value to the current day when calling setToToday and withTime prop is set to false', () => {\r\n            const expectedDate: Date = new Date();\r\n            const withoutTimeProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {\r\n                withTime: false,\r\n                hasSetToNowButton: true,\r\n            });\r\n            datePicker.setProps(withoutTimeProps);\r\n\r\n            expect(datePickerInstance['dateInput'].value).toBe('');\r\n\r\n            jasmine.clock().install();\r\n            jasmine.clock().mockDate(expectedDate);\r\n            datePicker.find('button').simulate('click');\r\n\r\n            expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(expectedDate));\r\n            jasmine.clock().uninstall();\r\n        });\r\n\r\n        it('should call handleChange when calling setToToday', () => {\r\n            const withButtonProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {hasSetToNowButton: true});\r\n            const handleChangeSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChangeDate');\r\n            datePicker.setProps(withButtonProps);\r\n\r\n            datePicker.find('button').simulate('click');\r\n\r\n            expect(handleChangeSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onBlur prop on handleChangeDate only if the input value is a valid date', () => {\r\n            const onBlurSpy = jasmine.createSpy('newSpy');\r\n            const simpleDate: string = DateUtils.getSimpleDate(new Date());\r\n            const newOnChangeSpyProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {onBlur: onBlurSpy});\r\n            datePicker.setProps(newOnChangeSpyProps);\r\n\r\n            datePickerInstance['dateInput'].value = 'this is not a date!';\r\n            datePickerInstance['handleChangeDate'].call(datePickerInstance);\r\n\r\n            expect(onBlurSpy).not.toHaveBeenCalled();\r\n\r\n            datePickerInstance['dateInput'].value = simpleDate;\r\n            datePickerInstance['handleChangeDate'].call(datePickerInstance);\r\n\r\n            expect(onBlurSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call the onBlur prop with a simple date if withTime prop is set to false', () => {\r\n            const simpleDate: string = DateUtils.getSimpleDate(new Date());\r\n\r\n            datePickerInstance['dateInput'].value = simpleDate;\r\n            datePickerInstance['handleChangeDate'].call(datePickerInstance);\r\n\r\n            expect(DATE_PICKER_BASIC_PROPS.onBlur).toHaveBeenCalledWith(\r\n                DateUtils.getDateFromSimpleDateString(simpleDate),\r\n                DATE_PICKER_BASIC_PROPS.upperLimit\r\n            );\r\n        });\r\n\r\n        it('should call the onBlur prop with a full date if withTime prop is set to true', () => {\r\n            const fullDate: string = DateUtils.getDateWithTimeString(new Date());\r\n            const withTimeProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {withTime: true});\r\n            datePicker.setProps(withTimeProps);\r\n\r\n            datePickerInstance['dateInput'].value = fullDate;\r\n            datePickerInstance['handleChangeDate'].call(datePickerInstance);\r\n\r\n            expect(withTimeProps.onBlur).toHaveBeenCalledWith(\r\n                DateUtils.getDateFromTimeString(fullDate),\r\n                withTimeProps.upperLimit\r\n            );\r\n        });\r\n\r\n        it(\r\n            'should change the value of the date input when passing it a new date as prop that is different than the ' +\r\n                'current one',\r\n            () => {\r\n                let newDate: Date = new Date();\r\n                let dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: newDate});\r\n                datePicker.setProps(dateProps);\r\n\r\n                expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(newDate));\r\n\r\n                dateProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: newDate, withTime: true});\r\n                datePicker.setProps(dateProps);\r\n\r\n                expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(newDate));\r\n\r\n                newDate = new Date(newDate.setHours(2, 2, 2, 2));\r\n                dateProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: newDate, withTime: true});\r\n                datePicker.setProps(dateProps);\r\n\r\n                expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getDateWithTimeString(newDate));\r\n            }\r\n        );\r\n\r\n        it('should set an empty value in the date input when passing it a null date as prop', () => {\r\n            const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: null});\r\n            datePicker.setProps(dateProps);\r\n\r\n            expect(datePickerInstance['dateInput'].value).toBe('');\r\n        });\r\n\r\n        it('should call onClick prop with whether or not the date picker is for the upper limit on input click', () => {\r\n            datePicker.find('input').simulate('click');\r\n\r\n            expect(DATE_PICKER_BASIC_PROPS.onClick).toHaveBeenCalledWith(DATE_PICKER_BASIC_PROPS.upperLimit);\r\n        });\r\n\r\n        it('should call handleChangeDate on input change', () => {\r\n            const handleChangeDateSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChangeDate');\r\n\r\n            datePicker.find('input').simulate('blur');\r\n\r\n            expect(handleChangeDateSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call handleChangeDate when clicking elsewhere than the date picker or a calendar day', () => {\r\n            const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower});\r\n            const handleChangeSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChangeDate');\r\n\r\n            datePicker.setProps(dateProps);\r\n\r\n            document.getElementById('App').click();\r\n            expect(handleChangeSpy).toHaveBeenCalledTimes(1);\r\n\r\n            datePicker.unmount();\r\n            document.getElementById('App').click();\r\n            expect(handleChangeSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not call handleChange when clicking the date picker', () => {\r\n            const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower});\r\n            const handleChangeSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChangeDate');\r\n\r\n            datePicker.setProps(dateProps);\r\n\r\n            datePicker.simulate('click');\r\n            expect(handleChangeSpy).not.toHaveBeenCalled();\r\n        });\r\n\r\n        describe('On calendar day click', () => {\r\n            beforeEach(() => {\r\n                const calendarDayElement: HTMLDivElement = document.createElement('div');\r\n                calendarDayElement.setAttribute('id', 'CalendarDay');\r\n                calendarDayElement.setAttribute('class', 'calendar-day');\r\n                document.body.appendChild(calendarDayElement);\r\n            });\r\n\r\n            it('should not call handleChangeDate when clicking a calendar day', () => {\r\n                const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {\r\n                    isSelecting: DateLimits.lower,\r\n                });\r\n                const handleChangeDateSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChangeDate');\r\n\r\n                datePicker.setProps(dateProps);\r\n\r\n                document.createElement('div').setAttribute('id', 'CalendarDay');\r\n                document.getElementById('CalendarDay').setAttribute('class', 'calendar-day');\r\n                document.getElementById('CalendarDay').click();\r\n\r\n                expect(handleChangeDateSpy).not.toHaveBeenCalled();\r\n            });\r\n\r\n            it('should not call prop onBlur when clicking a calendar day', () => {\r\n                const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {\r\n                    isSelecting: DateLimits.lower,\r\n                    onBlur: jasmine.createSpy('onBlur'),\r\n                });\r\n\r\n                datePicker.setProps(dateProps);\r\n                document.getElementById('CalendarDay').click();\r\n\r\n                expect(dateProps.onBlur).not.toHaveBeenCalled();\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=294.bundle.js.map