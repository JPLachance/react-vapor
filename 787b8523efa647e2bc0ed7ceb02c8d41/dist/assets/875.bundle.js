(window.webpackJsonp=window.webpackJsonp||[]).push([[875],{1961:function(n,t,o){"use strict";o.r(t),t.default="import * as _ from 'underscore';\r\n\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IToastProps} from './Toast';\r\n\r\nexport interface IToastContainerActionPayload {\r\n    id: string;\r\n}\r\n\r\nexport interface IToastActionPayload {\r\n    containerId: string;\r\n    id: string;\r\n}\r\n\r\nexport const ToastAction = {\r\n    addToast: 'ADD_TOAST',\r\n    removeToast: 'REMOVE_TOAST',\r\n    addToastContainer: 'ADD_TOAST_CONTAINER',\r\n    removeToastContainer: 'REMOVE_TOAST_CONTAINER',\r\n};\r\n\r\nexport interface IToastAddOptionalPayload extends Partial<IToastProps> {\r\n    id: string;\r\n}\r\n\r\nexport interface IToastAddPayload extends IToastActionPayload, IToastAddOptionalPayload {\r\n    title: React.ReactNode;\r\n}\r\n\r\nexport const addToast = (\r\n    containerId: string,\r\n    title: string,\r\n    optionals: Partial<IToastProps> = {}\r\n): IReduxAction<IToastAddPayload> => ({\r\n    type: ToastAction.addToast,\r\n    payload: {\r\n        title,\r\n        containerId,\r\n        id: _.uniqueId('toast'),\r\n        ...optionals,\r\n    },\r\n});\r\n\r\nexport const removeToast = (containerId: string, id: string): IReduxAction<IToastActionPayload> => ({\r\n    type: ToastAction.removeToast,\r\n    payload: {containerId, id},\r\n});\r\n\r\nexport const addToastContainer = (id: string): IReduxAction<IToastContainerActionPayload> => ({\r\n    type: ToastAction.addToastContainer,\r\n    payload: {id},\r\n});\r\n\r\nexport const removeToastContainer = (id: string): IReduxAction<IToastContainerActionPayload> => ({\r\n    type: ToastAction.removeToastContainer,\r\n    payload: {id},\r\n});\r\n"}}]);
//# sourceMappingURL=875.bundle.js.map