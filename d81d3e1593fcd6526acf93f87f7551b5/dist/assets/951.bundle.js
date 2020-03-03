(window.webpackJsonp=window.webpackJsonp||[]).push([[951],{2052:function(e,r,n){"use strict";n.r(r),r.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {withServerSideProcessing} from './withServerSideProcessing';\r\n\r\ndescribe('withServerSideProcessing', () => {\r\n    const Component = () => <div>I am a component</div>;\r\n\r\n    it('should not throw when creating the HOC component', () => {\r\n        expect(() => {\r\n            withServerSideProcessing(Component);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should not throw when rendering the HOC component', () => {\r\n        expect(() => {\r\n            const ComponentWithServerSideProcessing = withServerSideProcessing(Component);\r\n            shallow(<ComponentWithServerSideProcessing />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should set the \"isServer\" prop to true on the wrapped component', () => {\r\n        const ComponentWithServerSideProcessing = withServerSideProcessing(Component);\r\n        const wrapper = shallow(<ComponentWithServerSideProcessing />);\r\n\r\n        expect(wrapper.props().isServer).toBe(true);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=951.bundle.js.map