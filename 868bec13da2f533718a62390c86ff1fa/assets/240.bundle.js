(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1338:function(r,n,e){"use strict";e.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Radio} from '../../radio/Radio';\r\nimport {ChildForm, IChildFormProps} from '../ChildForm';\r\n\r\ndescribe('ChildForm', () => {\r\n    describe('<ChildForm />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<ChildForm />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<ChildForm />', () => {\r\n        let childForm: ReactWrapper<IChildFormProps, any>;\r\n\r\n        beforeEach(() => {\r\n            childForm = mount(\r\n                <ChildForm>\r\n                    <Radio id=\"id\" />\r\n                </ChildForm>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        });\r\n\r\n        afterEach(() => {\r\n            childForm.detach();\r\n        });\r\n\r\n        it('should disable children when disabled property is true', () => {\r\n            expect(\r\n                childForm\r\n                    .find(Radio)\r\n                    .first()\r\n                    .prop('disabled')\r\n            ).toBe(false);\r\n\r\n            childForm\r\n                .setProps({disabled: false})\r\n                .mount()\r\n                .update();\r\n            expect(\r\n                childForm\r\n                    .find(Radio)\r\n                    .first()\r\n                    .prop('disabled')\r\n            ).toBe(false);\r\n\r\n            childForm\r\n                .setProps({disabled: true})\r\n                .mount()\r\n                .update();\r\n            expect(\r\n                childForm\r\n                    .find(Radio)\r\n                    .first()\r\n                    .prop('disabled')\r\n            ).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=240.bundle.js.map