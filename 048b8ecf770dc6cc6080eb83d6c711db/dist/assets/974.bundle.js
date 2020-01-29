(window.webpackJsonp=window.webpackJsonp||[]).push([[974],{2070:function(e,n,t){"use strict";t.r(n),n.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {addClassNameToChildren, getReactNodeTextContent} from './JSXUtils';\r\n\r\ndescribe('JSXUtils', () => {\r\n    describe('getReactNodeTextContent', () => {\r\n        it('should return an empty string when receiving falsy values as react node', () => {\r\n            expect(getReactNodeTextContent(null)).toBe('');\r\n            expect(getReactNodeTextContent(undefined)).toBe('');\r\n            expect(getReactNodeTextContent(<></>)).toBe('');\r\n        });\r\n\r\n        it('should return the text content of the react node received as argument', () => {\r\n            expect(getReactNodeTextContent(<span>Hello world!</span>)).toBe('Hello world!');\r\n\r\n            expect(\r\n                getReactNodeTextContent(\r\n                    <div>\r\n                        {'Hello there!    '}\r\n                        <span>\r\n                            {\" Can't you see me? \"}\r\n                            <span>I can.</span>\r\n                        </span>\r\n                    </div>\r\n                )\r\n            ).toBe(\"Hello there! Can't you see me? I can.\");\r\n        });\r\n    });\r\n\r\n    describe('addClassNameToChildren', () => {\r\n        it('should wrap the child with a span that has the classname if the children is not a react element', () => {\r\n            const resultingChildren = addClassNameToChildren('a string is not a react element', 'new-class');\r\n            const component = shallow(resultingChildren[0] as React.ReactElement);\r\n\r\n            expect(component.type()).toBe('span');\r\n            expect(component.hasClass('new-class')).toBe(true);\r\n        });\r\n\r\n        it('should add the new className to existing ones if the children a react element', () => {\r\n            const resultingChildren = addClassNameToChildren(\r\n                <span className=\"old-class\">Hello react-vapor!</span>,\r\n                'new-class'\r\n            );\r\n            const component = shallow(resultingChildren[0] as React.ReactElement);\r\n            expect(component.hasClass('old-class')).toBe(true);\r\n            expect(component.hasClass('new-class')).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=974.bundle.js.map