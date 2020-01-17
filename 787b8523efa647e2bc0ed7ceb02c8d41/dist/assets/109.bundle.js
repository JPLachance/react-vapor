(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1209:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {SlideY, SlideYProps} from '../SlideY';\r\n\r\ndescribe('SlideY', () => {\r\n    const dummyTimeout = 400;\r\n    const testElementId = 'testId';\r\n\r\n    let testElement: JSX.Element;\r\n\r\n    beforeEach(() => {\r\n        testElement = <div id={testElementId}>testing</div>;\r\n    });\r\n\r\n    it('should not throw when rendered with in prop to true', () => {\r\n        expect(() =>\r\n            mount(\r\n                <SlideY in timeout={dummyTimeout}>\r\n                    {testElement}\r\n                </SlideY>\r\n            )\r\n        ).not.toThrow();\r\n    });\r\n\r\n    it('should not throw when rendered with in prop to false', () => {\r\n        expect(() =>\r\n            mount(\r\n                <SlideY in={false} timeout={dummyTimeout}>\r\n                    {testElement}\r\n                </SlideY>\r\n            )\r\n        ).not.toThrow();\r\n    });\r\n\r\n    it('should not throw when updating props', () => {\r\n        const wrapper = mount(\r\n            <SlideY in={false} timeout={dummyTimeout}>\r\n                {testElement}\r\n            </SlideY>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n\r\n        expect(() => wrapper.setProps({in: true}).update()).not.toThrow();\r\n        expect(\r\n            wrapper\r\n                .find(SlideY)\r\n                .first()\r\n                .props().in\r\n        ).toBe(true);\r\n    });\r\n\r\n    it('should stay opened when updating props but still in', () => {\r\n        const wrapper = mount(\r\n            <SlideY in={true} timeout={dummyTimeout}>\r\n                {testElement}\r\n            </SlideY>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n        const component = wrapper.find(SlideY).first();\r\n\r\n        expect(() => wrapper.setProps({timeout: dummyTimeout + 1})).not.toThrow();\r\n        expect(component.props().in).toBe(true);\r\n    });\r\n\r\n    it('should stay closed when updating props but still not in', () => {\r\n        const wrapper = mount(\r\n            <SlideY in={false} timeout={dummyTimeout}>\r\n                {testElement}\r\n            </SlideY>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n        const component = wrapper.find(SlideY).first();\r\n\r\n        expect(() => wrapper.setProps({timeout: dummyTimeout + 1})).not.toThrow();\r\n        expect(component.props().in).toBe(false);\r\n    });\r\n\r\n    describe('when transition ends', () => {\r\n        const timeout = 5;\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let component: ReactWrapper<SlideYProps, any>;\r\n\r\n        beforeEach(() => {\r\n            jasmine.clock().install();\r\n        });\r\n\r\n        afterEach(() => {\r\n            jasmine.clock().uninstall();\r\n        });\r\n\r\n        const mountAndWrap = (isIn: boolean, duration?: number) => {\r\n            wrapper = mount(\r\n                <SlideY in={isIn} timeout={timeout} duration={duration}>\r\n                    {testElement}\r\n                </SlideY>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            component = wrapper.find(SlideY).first();\r\n        };\r\n\r\n        const transitionToEnd = (el: HTMLElement) => {\r\n            jasmine.clock().tick(timeout + 1);\r\n            el.dispatchEvent(\r\n                new TransitionEvent('transitionend', {\r\n                    bubbles: true,\r\n                    cancelable: true,\r\n                })\r\n            );\r\n        };\r\n\r\n        it('should set the height to auto when the SlideY opens', () => {\r\n            mountAndWrap(false);\r\n            expect(() => wrapper.setProps({in: true})).not.toThrow();\r\n\r\n            const el = component\r\n                .find('.slide-y')\r\n                .first()\r\n                .getDOMNode() as HTMLElement;\r\n            expect(el.style.height).toBe('auto');\r\n        });\r\n\r\n        it('should set the height to 0px when the SlideY is closes', () => {\r\n            mountAndWrap(true);\r\n            expect(() => wrapper.setProps({in: false})).not.toThrow();\r\n\r\n            const el = wrapper\r\n                .find('.slide-y')\r\n                .first()\r\n                .getDOMNode() as HTMLElement;\r\n            expect(el.style.height).toBe('0px');\r\n        });\r\n\r\n        it('should remove the class slide-y-transition', () => {\r\n            mountAndWrap(false);\r\n            expect(() => wrapper.setProps({in: true}).update()).not.toThrow();\r\n\r\n            const slideY = wrapper.find('.slide-y').first();\r\n            transitionToEnd(slideY.getDOMNode() as HTMLElement);\r\n\r\n            expect(slideY.hasClass('slide-y-transition')).toBe(false);\r\n        });\r\n\r\n        it('should remove the class slide-y-closed when the SlideY opens', () => {\r\n            mountAndWrap(false);\r\n\r\n            expect(wrapper.html()).toContain('slide-y-closed');\r\n\r\n            expect(() => wrapper.setProps({in: true}).update()).not.toThrow();\r\n            transitionToEnd(\r\n                wrapper\r\n                    .find('.slide-y')\r\n                    .first()\r\n                    .getDOMNode() as HTMLElement\r\n            );\r\n\r\n            expect(wrapper.html()).not.toContain('slide-y-closed');\r\n        });\r\n\r\n        it('should add the class slide-y-closed when the SlideY closes', () => {\r\n            mountAndWrap(true);\r\n\r\n            expect(wrapper.html()).not.toContain('slide-y-closed');\r\n\r\n            expect(() => wrapper.setProps({in: false})).not.toThrow();\r\n            transitionToEnd(\r\n                wrapper\r\n                    .find('.slide-y')\r\n                    .first()\r\n                    .getDOMNode() as HTMLElement\r\n            );\r\n\r\n            expect(wrapper.html()).toContain('slide-y-closed');\r\n        });\r\n\r\n        it('should had the duration if one is added as a prop', () => {\r\n            const expectedDuration = 1000;\r\n            mountAndWrap(false, expectedDuration);\r\n\r\n            expect(\r\n                wrapper\r\n                    .find('.slide-y')\r\n                    .first()\r\n                    .prop('style').transitionDuration\r\n            ).toContain(expectedDuration.toString());\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=109.bundle.js.map