(window.webpackJsonp=window.webpackJsonp||[]).push([[892],{1977:function(t,o,e){"use strict";e.r(o),o.default="import {shallow, ShallowWrapper} from 'enzyme';\nimport * as moment from 'moment';\nimport * as React from 'react';\nimport * as _ from 'underscore';\nimport {DateTooltip, DateTooltipsProps} from '../DateTooltip';\nimport {Tooltip} from '../Tooltip';\n\ndescribe('Tooltip', () => {\n    let tooltipWrapper: ShallowWrapper<DateTooltipsProps>;\n    const defaultDate = '1995-12-25';\n    const defaultFormat = moment(defaultDate).format('LLL');\n    const stringFormat = 'ddd, hA';\n\n    describe('<DateTooltip />', () => {\n        it('should display a tooltip', () => {\n            tooltipWrapper = shallow(<DateTooltip date={moment()} />);\n            expect(tooltipWrapper.find(Tooltip).length).toBe(1);\n        });\n\n        it('should display content in LLL if no format is given on moment date', () => {\n            tooltipWrapper = shallow(<DateTooltip date={moment(defaultDate)} />);\n            expect(tooltipWrapper.find(Tooltip).props().title).toEqual(defaultFormat);\n        });\n\n        it('should display the tooltip in the given tooltipformat', () => {\n            tooltipWrapper = shallow(<DateTooltip date={moment(defaultDate)} tooltipFormat={stringFormat} />);\n            expect(tooltipWrapper.find(Tooltip).props().title).toEqual(moment(defaultFormat).format(stringFormat));\n        });\n\n        it('should display the children of the tooltip in the given format', () => {\n            tooltipWrapper = shallow(<DateTooltip date={moment(defaultDate)} format={stringFormat} />);\n            expect(tooltipWrapper.find(Tooltip).props().children).toEqual(moment(defaultFormat).format(stringFormat));\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=892.bundle.js.map