(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{1603:function(e,a,o){"use strict";o.r(a),a.default="import {shallow} from 'enzyme';\nimport * as React from 'react';\nimport {TextLoadingPlaceholder} from '../TextLoadingPlaceholder';\n\ndescribe('TextLoadingPlaceholder tests', () => {\n    describe('<TextLoadingPlaceholder />', () => {\n        it('should mount and unmount without errors', () => {\n            expect(() => {\n                const wrapper = shallow(<TextLoadingPlaceholder />, {});\n                wrapper.unmount();\n            });\n        });\n\n        it('should not have class by default', () => {\n            const wrapper = shallow(<TextLoadingPlaceholder />, {});\n            expect(wrapper.hasClass('mod-small')).toBe(false);\n            expect(wrapper.hasClass('mod-word')).toBe(false);\n            expect(wrapper.hasClass('mod-large')).toBe(false);\n        });\n\n        it('should add mod-small with small as prop', () => {\n            const wrapper = shallow(<TextLoadingPlaceholder small />, {});\n            expect(wrapper.hasClass('mod-small')).toBe(true);\n        });\n\n        it('should add mod-word with word as prop', () => {\n            const wrapper = shallow(<TextLoadingPlaceholder word />, {});\n            expect(wrapper.hasClass('mod-word')).toBe(true);\n        });\n\n        it('should add mod-large with large as prop', () => {\n            const wrapper = shallow(<TextLoadingPlaceholder large />, {});\n            expect(wrapper.hasClass('mod-large')).toBe(true);\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=497.bundle.js.map