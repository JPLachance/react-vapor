(window.webpackJsonp=window.webpackJsonp||[]).push([[887],{1974:function(t,r,o){"use strict";o.r(r),r.default="// tslint:disable-next-line:no-unused-variable\r\nimport {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {Toast, ToastType} from '../Toast';\r\nimport {addToast} from '../ToastActions';\r\nimport {IToastContainerProps, ToastContainer} from '../ToastContainer';\r\nimport {ToastContainerConnected} from '../ToastContainerConnected';\r\n\r\ndescribe('Toasts', () => {\r\n    describe('<ToastContainerConnected />', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let component: ReactWrapper<IToastContainerProps, void>;\r\n        let store: Store<IReactVaporState>;\r\n        const containerId = 'toast-container-id';\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <ToastContainerConnected id={containerId} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            component = wrapper.find(ToastContainer).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get the toasts as a prop', () => {\r\n            const toastsProp = component.props().toasts;\r\n            expect(toastsProp).toBeDefined();\r\n        });\r\n\r\n        it('should get onRender as a prop', () => {\r\n            const onRenderProp = component.props().onRender;\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get onDestroy as a prop', () => {\r\n            const onDestroyProp = component.props().onDestroy;\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should get onCloseToast as a prop', () => {\r\n            const onCloseToastProp = component.props().onCloseToast;\r\n            expect(onCloseToastProp).toBeDefined();\r\n        });\r\n\r\n        it('should contain Toasts when a addToast is dispatched', () => {\r\n            expect(component.props().toasts.length).toBe(0);\r\n            expect(wrapper.find(Toast).length).toBe(0);\r\n\r\n            store.dispatch(addToast(containerId, 'toast title', {type: ToastType.Error}));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(ToastContainer).props().toasts.length).toBe(1);\r\n            expect(wrapper.find(Toast).length).toBe(1);\r\n        });\r\n\r\n        it('should call onCloseToast when the user close a Toast', () => {\r\n            store.dispatch(addToast(containerId, 'toast title'));\r\n            wrapper.update();\r\n\r\n            const toast = wrapper.find(Toast).first();\r\n            toast.props().onClose();\r\n\r\n            expect(component.props().toasts.length).toBe(0);\r\n            expect(component.find(Toast).length).toBe(0);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=887.bundle.js.map