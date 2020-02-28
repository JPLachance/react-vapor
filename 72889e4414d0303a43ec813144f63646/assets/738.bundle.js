(window.webpackJsonp=window.webpackJsonp||[]).push([[738],{1826:function(t,n,a){"use strict";a.r(n),n.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {SubNavigationActions} from './SubNavigationActions';\r\n\r\nexport interface ISubNavigationState {\r\n    id: string;\r\n    selected: string;\r\n}\r\n\r\nexport const subNavigationInitialState: ISubNavigationState = {id: undefined, selected: ''};\r\nexport const subNavigationsInitialState: ISubNavigationState[] = [];\r\n\r\nexport const subNavigationReducer = (\r\n    state: ISubNavigationState = subNavigationInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): ISubNavigationState => {\r\n    switch (action.type) {\r\n        case SubNavigationActions.select:\r\n            return state.id !== action.payload.id\r\n                ? state\r\n                : {\r\n                      id: state.id,\r\n                      selected: action.payload.selected,\r\n                  };\r\n        case SubNavigationActions.add:\r\n            return {\r\n                id: action.payload.id,\r\n                selected: action.payload.selected,\r\n            };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const subNavigationsReducer = (\r\n    state: ISubNavigationState[] = subNavigationsInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): ISubNavigationState[] => {\r\n    switch (action.type) {\r\n        case SubNavigationActions.select:\r\n            return state.map((dropdown: ISubNavigationState) => subNavigationReducer(dropdown, action));\r\n        case SubNavigationActions.add:\r\n            return [...state, subNavigationReducer(undefined, action)];\r\n        case SubNavigationActions.remove:\r\n            return _.reject(state, (dropdown: ISubNavigationState) => action.payload.id === dropdown.id);\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=738.bundle.js.map