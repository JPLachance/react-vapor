(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{1628:function(n,r,e){"use strict";e.r(r),r.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {\r\n    DEFAULT_MODAL_PROMPT_CANCEL_LABEL,\r\n    DEFAULT_MODAL_PROMPT_CONFIRM_LABEL,\r\n    IModalPromptProps,\r\n    ModalPrompt,\r\n} from '../ModalPrompt';\r\n\r\ndescribe('ModalPrompt', () => {\r\n    const id: string = 'modalPrompt';\r\n    const title: string = 'Title';\r\n    const confirmLabel: string = 'Confirm';\r\n    const cancelLabel: string = 'Cancel';\r\n    const message: string = 'message';\r\n\r\n    describe('<ModalPrompt />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(\r\n                    <ModalPrompt\r\n                        id={id}\r\n                        title={title}\r\n                        confirmLabel={confirmLabel}\r\n                        cancelLabel={cancelLabel}\r\n                        message={message}\r\n                        onConfirm={() => 1}\r\n                    />\r\n                );\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<ModalPrompt />', () => {\r\n        const defaultConfirmLabel: string = DEFAULT_MODAL_PROMPT_CONFIRM_LABEL;\r\n        const defaultCancelLabel: string = DEFAULT_MODAL_PROMPT_CANCEL_LABEL;\r\n        let modalPrompt: ReactWrapper<IModalPromptProps, any>;\r\n\r\n        beforeEach(() => {\r\n            modalPrompt = mount(<ModalPrompt id={id} title={title} message={message} onConfirm={() => 1} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            modalPrompt.detach();\r\n        });\r\n\r\n        it('should set default value for cancel label when not set', () => {\r\n            const cancelButton = modalPrompt.find('.js-cancel');\r\n\r\n            expect(cancelButton.text()).toBe(defaultCancelLabel);\r\n        });\r\n\r\n        it('should set default value for confirm label when not set', () => {\r\n            const confirmButton = modalPrompt.find('.js-confirm');\r\n\r\n            expect(confirmButton.text()).toBe(defaultConfirmLabel);\r\n        });\r\n    });\r\n\r\n    describe('<ModalPrompt />', () => {\r\n        let modalPrompt: ReactWrapper<IModalPromptProps, any>;\r\n\r\n        beforeEach(() => {\r\n            modalPrompt = mount(\r\n                <ModalPrompt\r\n                    id={id}\r\n                    title={title}\r\n                    confirmLabel={confirmLabel}\r\n                    cancelLabel={cancelLabel}\r\n                    message={message}\r\n                    onConfirm={() => 1}\r\n                />,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        });\r\n\r\n        afterEach(() => {\r\n            modalPrompt.detach();\r\n        });\r\n\r\n        it('should set opened class on container when isOpened is true', () => {\r\n            expect(modalPrompt.find('.modal-container').hasClass('opened')).toBe(false);\r\n\r\n            modalPrompt.setProps({id, title, isOpened: true}).update();\r\n\r\n            expect(modalPrompt.find('.modal-container').hasClass('opened')).toBe(true);\r\n        });\r\n\r\n        describe('with a confirm spy', () => {\r\n            let confirmSpy: jasmine.Spy;\r\n            let confirmButton: ReactWrapper<React.HTMLAttributes<HTMLButtonElement>, void>;\r\n\r\n            beforeEach(() => {\r\n                confirmSpy = jasmine.createSpy('onConfirm');\r\n                confirmButton = modalPrompt.find('.js-confirm');\r\n            });\r\n\r\n            it('should call prop onConfirm when modalPrompt Confirm button is clicked and prop is set', () => {\r\n                confirmButton.simulate('click');\r\n\r\n                expect(confirmSpy).not.toHaveBeenCalled();\r\n\r\n                modalPrompt.setProps({id, title, onConfirm: confirmSpy});\r\n                confirmButton.simulate('click');\r\n\r\n                expect(confirmSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should call prop onConfirm when modalPrompt Confirm button is clicked and prop is set', () => {\r\n                confirmButton.simulate('click');\r\n                expect(confirmSpy).not.toHaveBeenCalled();\r\n\r\n                modalPrompt.setProps({id, title, onConfirm: confirmSpy});\r\n                confirmButton.simulate('click');\r\n\r\n                expect(confirmSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n        });\r\n\r\n        describe('with a cancel spy', () => {\r\n            let cancelSpy: jasmine.Spy;\r\n\r\n            beforeEach(() => {\r\n                cancelSpy = jasmine.createSpy('onCancel');\r\n            });\r\n\r\n            it('should call prop onCancel when modalPrompt x is clicked and prop is set', () => {\r\n                jasmine.clock().install();\r\n                const closeButton = modalPrompt.find('.small-close');\r\n\r\n                closeButton.simulate('click');\r\n                expect(cancelSpy).not.toHaveBeenCalled();\r\n\r\n                modalPrompt.setProps({id, title, onCancel: cancelSpy});\r\n                jasmine.clock().tick(5);\r\n\r\n                closeButton.simulate('click');\r\n\r\n                expect(cancelSpy).toHaveBeenCalledTimes(1);\r\n                jasmine.clock().uninstall();\r\n            });\r\n\r\n            it('should call prop onCancel when modalPrompt cancel button is clicked and prop is set', () => {\r\n                const cancelButton = modalPrompt.find('.js-cancel');\r\n\r\n                cancelButton.simulate('click');\r\n                expect(cancelSpy).not.toHaveBeenCalled();\r\n\r\n                modalPrompt.setProps({id, title, onCancel: cancelSpy});\r\n                cancelButton.simulate('click');\r\n\r\n                expect(cancelSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should call prop onCancel when concreteModalPrompt cancel button is clicked and prop is set', () => {\r\n                const cancelButton = modalPrompt.find('.js-cancel');\r\n\r\n                cancelButton.simulate('click');\r\n                expect(cancelSpy).not.toHaveBeenCalled();\r\n\r\n                modalPrompt.setProps({id, title, onCancel: cancelSpy});\r\n                cancelButton.simulate('click');\r\n\r\n                expect(cancelSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=533.bundle.js.map