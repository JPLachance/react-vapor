(window.webpackJsonp=window.webpackJsonp||[]).push([[864],{1953:function(r,e,n){"use strict";n.r(e),e.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {TableCollapsibleRowWrapper} from '../TableCollapsibleRowWrapper';\r\n\r\ndescribe('<TableCollapsibleRowWrapper />', () => {\r\n    describe('render', () => {\r\n        it('should render without error without children', () => {\r\n            expect(() => {\r\n                mount(<TableCollapsibleRowWrapper />, {attachTo: document.getElementById('App')});\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should render without error with children', () => {\r\n            expect(() => {\r\n                mount(\r\n                    <TableCollapsibleRowWrapper>\r\n                        <div>Hello World</div>\r\n                    </TableCollapsibleRowWrapper>,\r\n                    {attachTo: document.getElementById('App')}\r\n                );\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should render a tbody wrapper with the children inside it', () => {\r\n            const tableRowWrapper = mount(\r\n                <TableCollapsibleRowWrapper>\r\n                    <div>Hello World</div>\r\n                </TableCollapsibleRowWrapper>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n\r\n            expect(tableRowWrapper.find('tbody').exists()).toBe(true);\r\n            expect(tableRowWrapper.find('tbody').find('div').length).toBe(1);\r\n            expect(\r\n                tableRowWrapper\r\n                    .find('tbody')\r\n                    .find('div')\r\n                    .text()\r\n            ).toBe('Hello World');\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=864.bundle.js.map