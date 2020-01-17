(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{1687:function(n,r,i){"use strict";i.r(r),r.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const OptionPickerActions = {\r\n    add: 'ADD_OPTION_PICKER',\r\n    remove: 'REMOVE_OPTION_PICKER',\r\n    change: 'CHANGE_OPTION',\r\n    reset: 'RESET_OPTION_PICKERS',\r\n};\r\n\r\nexport interface IOptionPickerPayload {\r\n    id: string;\r\n}\r\n\r\nexport interface IChangeOptionPayload extends IOptionPickerPayload {\r\n    label: string;\r\n    value: string;\r\n}\r\n\r\nexport const addOptionPicker = (id: string): IReduxAction<IOptionPickerPayload> => ({\r\n    type: OptionPickerActions.add,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const removeOptionPicker = (id: string): IReduxAction<IOptionPickerPayload> => ({\r\n    type: OptionPickerActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const changeOptionPicker = (id: string, label: string, value: string): IReduxAction<IChangeOptionPayload> => ({\r\n    type: OptionPickerActions.change,\r\n    payload: {\r\n        id,\r\n        label,\r\n        value,\r\n    },\r\n});\r\n\r\nexport const resetOptionPickers = (id: string): IReduxAction<IOptionPickerPayload> => ({\r\n    type: OptionPickerActions.reset,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=595.bundle.js.map