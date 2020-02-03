(window.webpackJsonp=window.webpackJsonp||[]).push([[674],{1776:function(r,a,e){"use strict";e.r(a),a.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {ISearchBarActionPayload, SearchBarActions} from './SearchBarActions';\r\n\r\nexport interface ISearchBarState {\r\n    id: string;\r\n    searching: boolean;\r\n    disabled: boolean;\r\n    value: string;\r\n}\r\n\r\nexport const searchBarDefaultState: ISearchBarState = {\r\n    id: undefined,\r\n    searching: false,\r\n    disabled: false,\r\n    value: '',\r\n};\r\n\r\nexport const searchBarsInitialState: ISearchBarState[] = [];\r\n\r\nexport const searchBarsReducer = (\r\n    state: ISearchBarState[] = searchBarsInitialState,\r\n    action: IReduxAction<ISearchBarActionPayload>\r\n): ISearchBarState[] => {\r\n    switch (action.type) {\r\n        case SearchBarActions.add:\r\n            return [\r\n                ...state,\r\n                {\r\n                    ...searchBarDefaultState,\r\n                    id: action.payload.id,\r\n                    disabled: action.payload.disabled,\r\n                },\r\n            ];\r\n        case SearchBarActions.remove:\r\n            return _.reject(state, (searchBar: ISearchBarState) => searchBar.id === action.payload.id);\r\n        case SearchBarActions.toggleSearching:\r\n        case SearchBarActions.toggleDisabled:\r\n        case SearchBarActions.setValue:\r\n            return state.map((searchBarState: ISearchBarState) =>\r\n                searchBarState.id === action.payload.id ? {...searchBarState, ...action.payload} : searchBarState\r\n            );\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=674.bundle.js.map