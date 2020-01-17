(window.webpackJsonp=window.webpackJsonp||[]).push([[888],{1975:function(t,n,e){"use strict";e.r(n),n.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {IToastContainerActionPayload, ToastAction} from '../ToastActions';\r\nimport {\r\n    IToastsState,\r\n    toastContainerInitialState,\r\n    toastContainerReducer,\r\n    toastInitialState,\r\n    toastsContainerInitialState,\r\n    toastsContainerReducer,\r\n} from '../ToastReducers';\r\n\r\ndescribe('Reducers', () => {\r\n    describe('toastContainers', () => {\r\n        const genericAction: IReduxAction<IToastContainerActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'toast-container',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const oldState: IToastsState[] = undefined;\r\n            const newState: IToastsState[] = toastsContainerReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(toastsContainerInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one toast container', () => {\r\n            const oldState: IToastsState = undefined;\r\n            const newState: IToastsState = toastContainerReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(toastContainerInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IToastsState[] = [toastContainerInitialState];\r\n            const newState: IToastsState[] = toastsContainerReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one container', () => {\r\n            const oldState: IToastsState = toastContainerInitialState;\r\n            const newState: IToastsState = toastContainerReducer(oldState, genericAction);\r\n\r\n            expect(newState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more ToastsState when the action is \"ADD_TOAST_CONTAINER\"', () => {\r\n            const oldState: IToastsState[] = toastsContainerInitialState;\r\n            const action: IReduxAction<IToastContainerActionPayload> = {\r\n                type: ToastAction.addToastContainer,\r\n                payload: {id: 'some-id'},\r\n            };\r\n            const toastContainersState: IToastsState[] = toastsContainerReducer(oldState, action);\r\n\r\n            expect(toastContainersState.length).toBe(oldState.length + 1);\r\n            expect(toastContainersState.filter((container) => container.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the ToastsState when the action is \"REMOVE_TOAST_CONTAINER\"', () => {\r\n            const oldState: IToastsState[] = [\r\n                {id: 'some-id', toasts: []},\r\n                {id: 'some-other-id', toasts: []},\r\n                {id: 'hello', toasts: []},\r\n            ];\r\n            const action: IReduxAction<IToastContainerActionPayload> = {\r\n                type: ToastAction.removeToastContainer,\r\n                payload: {id: oldState[1].id},\r\n            };\r\n            const toastContainersState: IToastsState[] = toastsContainerReducer(oldState, action);\r\n\r\n            expect(toastContainersState.length).toBe(oldState.length - 1);\r\n            expect(toastContainersState.filter((container) => container.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should return the old state with one more ToastState when the action is \"ADD_TOAST\"', () => {\r\n            const oldState: IToastsState[] = [{id: 'some-id', toasts: []}];\r\n            const action: IReduxAction<any> = {\r\n                type: ToastAction.addToast,\r\n                payload: {id: null, containerId: 'some-id'},\r\n            };\r\n            const toastContainersState: IToastsState[] = toastsContainerReducer(oldState, action);\r\n            const containerState = _.findWhere(toastContainersState, {id: action.payload.containerId});\r\n\r\n            expect(toastContainersState.length).toBe(oldState.length);\r\n            expect(containerState.toasts.length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state state without the ToastState when the action is \"REMOVE_TOAST\"', () => {\r\n            const toastToRemove = 'toast-id';\r\n            const oldState: IToastsState[] = [\r\n                {id: 'some-id', toasts: [_.extend({}, toastInitialState, {id: toastToRemove, title: 'test'})]},\r\n            ];\r\n            const action: IReduxAction<any> = {\r\n                type: ToastAction.removeToast,\r\n                payload: {id: toastToRemove, containerId: 'some-id'},\r\n            };\r\n            const toastContainersState: IToastsState[] = toastsContainerReducer(oldState, action);\r\n\r\n            const containerState = _.findWhere(toastContainersState, {id: action.payload.containerId});\r\n            expect(toastContainersState.length).toBe(oldState.length);\r\n            expect(containerState.toasts.length).toBe(0);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=888.bundle.js.map