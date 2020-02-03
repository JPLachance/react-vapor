(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{1320:function(t,o,r){"use strict";r.r(o),o.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {ChartTooltipContent} from '../ChartTooltipContent';\r\nimport {XYChartContextMock} from './XYChartContextMock';\r\n\r\ndescribe('<ChartTooltipContent />', () => {\r\n    beforeEach(() => {\r\n        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);\r\n    });\r\n\r\n    it('should not throw', () => {\r\n        expect(() => {\r\n            shallow(<ChartTooltipContent x={0} sort={true} />);\r\n            shallow(<ChartTooltipContent x={1} sort={false} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render a div for the title', () => {\r\n        const component = shallow(<ChartTooltipContent x={0} sort={true} />);\r\n        expect(component.find('.tooltip-serie-title').exists()).toBe(true);\r\n    });\r\n\r\n    it('should render a div for every serie', () => {\r\n        const component = shallow(<ChartTooltipContent x={0} sort={true} />);\r\n        expect(component.find('.tooltip-serie-row').length).toBe(XYChartContextMock.series.length);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=209.bundle.js.map