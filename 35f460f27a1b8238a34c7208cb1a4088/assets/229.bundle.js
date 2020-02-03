(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{1339:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {IInputProps} from '../../input/Input';\r\nimport {Checkbox, ICheckboxProps} from '../Checkbox';\r\n\r\ndescribe('Checkbox', () => {\r\n    describe('<Checkbox />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => mount(<Checkbox />)).not.toThrow();\r\n        });\r\n\r\n        describe('<Checkbox />', () => {\r\n            let checkbox: ReactWrapper<IInputProps, any>;\r\n\r\n            const renderCheckbox = (props: ICheckboxProps = {}) => {\r\n                if (checkbox && checkbox.length) {\r\n                    checkbox.unmount();\r\n                }\r\n\r\n                checkbox = mount(<Checkbox {...props} />, {attachTo: document.getElementById('App')});\r\n            };\r\n\r\n            afterEach(() => {\r\n                checkbox.detach();\r\n            });\r\n\r\n            it('should call prop onClick when specified on click', () => {\r\n                const clickSpy = jasmine.createSpy('onClick');\r\n                renderCheckbox({\r\n                    onClick: clickSpy,\r\n                });\r\n                const innerLabel = checkbox.find('div');\r\n\r\n                innerLabel.simulate('click');\r\n\r\n                expect(clickSpy.calls.count()).toBe(1);\r\n            });\r\n\r\n            it('should not call prop onClick when specified on click if disabled', () => {\r\n                const clickSpy = jasmine.createSpy('onClick');\r\n                renderCheckbox({\r\n                    onClick: clickSpy,\r\n                    disabled: true,\r\n                });\r\n                const innerLabel = checkbox.find('div');\r\n\r\n                innerLabel.simulate('click');\r\n\r\n                expect(clickSpy).not.toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call prop handleOnClick when specified on click', () => {\r\n                const handleOnClickSpy = jasmine.createSpy('handleOnClick');\r\n                renderCheckbox({\r\n                    handleOnClick: handleOnClickSpy,\r\n                });\r\n\r\n                const innerLabel = checkbox.find('div');\r\n\r\n                innerLabel.simulate('click');\r\n\r\n                expect(handleOnClickSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should not call prop handleOnClick when specified on click if disabled', () => {\r\n                const handleOnClickSpy = jasmine.createSpy('handleOnClick');\r\n                renderCheckbox({\r\n                    handleOnClick: handleOnClickSpy,\r\n                    disabled: true,\r\n                });\r\n                const innerLabel = checkbox.find('div');\r\n\r\n                innerLabel.simulate('click');\r\n\r\n                expect(handleOnClickSpy.calls.count()).toBe(0);\r\n            });\r\n\r\n            it('should set inner input type to checkbox', () => {\r\n                renderCheckbox();\r\n\r\n                const innerInput = checkbox.find('input');\r\n\r\n                expect(innerInput.prop('type')).toBe('checkbox');\r\n            });\r\n\r\n            it('should set indeterminate on input', () => {\r\n                renderCheckbox({\r\n                    indeterminate: true,\r\n                });\r\n                const innerInput: any = checkbox.find('input').instance();\r\n                expect(innerInput.indeterminate).toBe(true);\r\n            });\r\n\r\n            it('should add the disable class on the label only if input is disabled', () => {\r\n                renderCheckbox({\r\n                    disabled: true,\r\n                });\r\n\r\n                expect(checkbox.find('.coveo-checkbox-label').hasClass('disabled')).toBe(true);\r\n\r\n                [false, undefined].forEach((falsyValue) => {\r\n                    renderCheckbox({\r\n                        disabled: falsyValue,\r\n                    });\r\n                    expect(checkbox.find('.coveo-checkbox-label').hasClass('disabled')).toBe(false);\r\n                });\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=229.bundle.js.map