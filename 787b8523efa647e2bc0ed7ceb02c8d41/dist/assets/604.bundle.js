(window.webpackJsonp=window.webpackJsonp||[]).push([[604],{1696:function(n,r,t){"use strict";t.r(r),r.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const OptionsCycleActions = {\r\n    add: 'ADD_OPTIONS_CYCLE',\r\n    remove: 'REMOVE_OPTIONS_CYCLE',\r\n    change: 'CHANGE_OPTIONS_CYCLE',\r\n};\r\n\r\nexport interface IOptionsCyclePayload {\r\n    id: string;\r\n}\r\n\r\nexport interface IChangeOptionsCyclePayload extends IOptionsCyclePayload {\r\n    currentOption: number;\r\n}\r\n\r\nexport const addOptionsCycle = (id: string, currentOption: number = 0): IReduxAction<IChangeOptionsCyclePayload> => ({\r\n    type: OptionsCycleActions.add,\r\n    payload: {\r\n        id,\r\n        currentOption,\r\n    },\r\n});\r\n\r\nexport const removeOptionsCycle = (id: string): IReduxAction<IOptionsCyclePayload> => ({\r\n    type: OptionsCycleActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const changeOptionsCycle = (id: string, currentOption: number): IReduxAction<IChangeOptionsCyclePayload> => ({\r\n    type: OptionsCycleActions.change,\r\n    payload: {\r\n        id,\r\n        currentOption,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=604.bundle.js.map