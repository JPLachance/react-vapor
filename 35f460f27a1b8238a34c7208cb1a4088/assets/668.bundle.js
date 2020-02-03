(window.webpackJsonp=window.webpackJsonp||[]).push([[668],{1770:function(r,n,e){"use strict";e.r(n),n.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const SearchBarActions = {\r\n    add: 'ADD_SEARCH_BAR',\r\n    remove: 'REMOVE_SEARCH_BAR',\r\n    toggleSearching: 'TOGGLE_SEARCH_BAR_SEARCHING',\r\n    toggleDisabled: 'TOGGLE_SEARCH_BAR_DISABLED',\r\n    setValue: 'SET_SEARCH_BAR_TEXT',\r\n};\r\n\r\nexport interface ISearchBarActionPayload {\r\n    id: string;\r\n    disabled?: boolean;\r\n    searching?: boolean;\r\n    value?: string;\r\n}\r\n\r\nexport const addSearchBar = (id: string, disabled = false): IReduxAction<ISearchBarActionPayload> => ({\r\n    type: SearchBarActions.add,\r\n    payload: {id, disabled},\r\n});\r\n\r\nexport const removeSearchBar = (id: string): IReduxAction<ISearchBarActionPayload> => ({\r\n    type: SearchBarActions.remove,\r\n    payload: {id},\r\n});\r\n\r\nexport const toggleSearching = (id: string, searching: boolean) => ({\r\n    type: SearchBarActions.toggleSearching,\r\n    payload: {id, searching},\r\n});\r\n\r\nexport const toggleSearchBarDisabled = (id: string, disabled: boolean) => ({\r\n    type: SearchBarActions.toggleDisabled,\r\n    payload: {id, disabled},\r\n});\r\n\r\nexport const setSearchBarValue = (id: string, value = '') => ({\r\n    type: SearchBarActions.setValue,\r\n    payload: {id, value},\r\n});\r\n\r\nexport const SearchBarReduxActions = {\r\n    addSearchBar,\r\n    removeSearchBar,\r\n    toggleSearching,\r\n    toggleSearchBarDisabled,\r\n    setSearchBarValue,\r\n};\r\n"}}]);
//# sourceMappingURL=668.bundle.js.map