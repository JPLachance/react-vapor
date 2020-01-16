(window.webpackJsonp=window.webpackJsonp||[]).push([[738],{1826:function(t,e,a){"use strict";a.r(e),e.default="import {createSelector} from 'reselect';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {ISubNavigationState} from './SubNavigationReducers';\r\n\r\nconst getSubNavigation = (state: IReactVaporState, subNavigationId: string): ISubNavigationState =>\r\n    _.findWhere(state.subNavigations, {id: subNavigationId});\r\n\r\nconst getSelectedItem = createSelector(getSubNavigation, (subNav) => subNav?.selected ?? '');\r\n\r\nexport const SubNavigationSelector = {\r\n    getSubNavigation,\r\n    getSelectedItem,\r\n};\r\n"}}]);
//# sourceMappingURL=738.bundle.js.map