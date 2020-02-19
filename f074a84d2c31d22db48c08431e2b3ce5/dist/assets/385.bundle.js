(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{1481:function(r,t,e){"use strict";e.r(t),t.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {\r\n    FilterBox,\r\n    IFilterBoxDispatchProps,\r\n    IFilterBoxOwnProps,\r\n    IFilterBoxProps,\r\n    IFilterBoxStateProps,\r\n} from './FilterBox';\r\nimport {addFilter, filterThrough, removeFilter} from './FilterBoxActions';\r\nimport {FilterBoxSelectors} from './FilterBoxSelectors';\r\n\r\nconst FILTER_THROUGH_DEBOUNCE = 400;\r\nexport const debouncedFilterThrough = _.debounce(\r\n    (dispatch: IDispatch, id: string, filterText: string) => dispatch(filterThrough(id, filterText)),\r\n    FILTER_THROUGH_DEBOUNCE\r\n);\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IFilterBoxOwnProps): IFilterBoxStateProps => ({\r\n    filterText: FilterBoxSelectors.getFilterText(state, {id: ownProps.id}),\r\n});\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch): IFilterBoxDispatchProps => ({\r\n    onRender: (id: string) => dispatch(addFilter(id)),\r\n    onDestroy: (id: string) => dispatch(removeFilter(id)),\r\n    onFilter: (id: string, filterText: string) => debouncedFilterThrough(dispatch, id, filterText),\r\n});\r\n\r\nexport const FilterBoxConnected: React.ComponentClass<IFilterBoxProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(FilterBox);\r\n"}}]);
//# sourceMappingURL=385.bundle.js.map