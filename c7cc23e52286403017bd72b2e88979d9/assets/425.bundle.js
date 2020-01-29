(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{1514:function(o,r,e){"use strict";e.r(r),r.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {InfoBoxFooter} from '../InfoBoxFooter';\r\n\r\ndescribe('InfoBoxFooter', () => {\r\n    it('should not throw', () => {\r\n        expect(() => shallow(<InfoBoxFooter />)).not.toThrow();\r\n        expect(() => shallow(<InfoBoxFooter>Footer</InfoBoxFooter>)).not.toThrow();\r\n        expect(() => shallow(<InfoBoxFooter onClick={_.noop}>Footer</InfoBoxFooter>)).not.toThrow();\r\n    });\r\n\r\n    it('should allow custom classes', () => {\r\n        const expectedClass = 'some-footer-class';\r\n        const wrapper = shallow(<InfoBoxFooter className={expectedClass} />);\r\n\r\n        expect(wrapper.hasClass(expectedClass)).toBe(true);\r\n    });\r\n\r\n    it('should render children', () => {\r\n        const expectedChildren = <div className=\"to-find\" />;\r\n        const wrapper = shallow(<InfoBoxFooter>{expectedChildren}</InfoBoxFooter>);\r\n\r\n        expect(wrapper.contains(expectedChildren)).toBe(true);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=425.bundle.js.map