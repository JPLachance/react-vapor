(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1430:function(o,r,n){"use strict";n.r(r),r.default="import {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../../utils/ReduxUtils';\r\nimport {\r\n    IDropdownOption,\r\n    IDropdownSearchDispatchProps,\r\n    IDropdownSearchOwnProps,\r\n    IDropdownSearchProps,\r\n    IDropdownSearchStateProps,\r\n} from '../DropdownSearch';\r\nimport {\r\n    addCustomSelectedOption,\r\n    addMultiSelectDropdownSearch,\r\n    applyFilterDropdownSearch,\r\n    closeDropdownSearch,\r\n    deselectAllOptionsMultiselectDropdownSearch,\r\n    deselectOptionDropdownSearch,\r\n    keyDownMultiselectDropdownSearch,\r\n    multiSelectOptionDropdownSearch,\r\n    openDropdownSearch,\r\n    removeDropdownSearch,\r\n    updateOptionsDropdownSearch,\r\n} from '../DropdownSearchActions';\r\nimport {IDropdownSearchState} from '../DropdownSearchReducers';\r\nimport {MultiSelectDropdownSearch} from './MultiSelectDropdownSearch';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IDropdownSearchProps): IDropdownSearchStateProps => {\r\n    const dropdownSearch: IDropdownSearchState = _.findWhere(state.dropdownSearch, {id: ownProps.id});\r\n\r\n    if (dropdownSearch) {\r\n        return {\r\n            isOpened: dropdownSearch.isOpened || false,\r\n            options: dropdownSearch.options || [],\r\n            filterText: dropdownSearch.filterText || '',\r\n            activeOption: dropdownSearch.activeOption,\r\n            setFocusOnDropdownButton: dropdownSearch.setFocusOnDropdownButton,\r\n        };\r\n    }\r\n\r\n    return MultiSelectDropdownSearch.defaultProps;\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: IDropdownSearchOwnProps\r\n): IDropdownSearchDispatchProps => ({\r\n    onMount: () => dispatch(addMultiSelectDropdownSearch(ownProps.id, ownProps.defaultOptions)),\r\n    onDestroy: () => dispatch(removeDropdownSearch(ownProps.id)),\r\n    onBlur: (options: IDropdownOption[]) => dispatch(closeDropdownSearch(ownProps.id, options)),\r\n    onFocus: () => dispatch(openDropdownSearch(ownProps.id)),\r\n    onOptionClick: (option: IDropdownOption) => dispatch(multiSelectOptionDropdownSearch(ownProps.id, option)),\r\n    onCustomOptionClick: (value: string) => dispatch(addCustomSelectedOption(ownProps.id, value)),\r\n    onFilterTextChange: (filterText: string) => dispatch(applyFilterDropdownSearch(ownProps.id, filterText)),\r\n    onKeyDownFilterBox: (keyCode: number) => dispatch(keyDownMultiselectDropdownSearch(ownProps.id, keyCode)),\r\n    onRemoveSelectedOption: (value: string) => dispatch(deselectOptionDropdownSearch(ownProps.id, value)),\r\n    onRemoveAllSelectedOptions: () => dispatch(deselectAllOptionsMultiselectDropdownSearch(ownProps.id)),\r\n    updateOptions: (options: IDropdownOption[]) =>\r\n        dispatch(updateOptionsDropdownSearch(ownProps.id, options, undefined, false)),\r\n});\r\n\r\nexport const MultiSelectDropdownSearchConnected: React.ComponentClass<IDropdownSearchProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(MultiSelectDropdownSearch);\r\n"}}]);
//# sourceMappingURL=336.bundle.js.map