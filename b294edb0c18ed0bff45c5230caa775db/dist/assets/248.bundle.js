(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1356:function(n,r,e){"use strict";e.r(r),r.default="import {connect} from 'react-redux';\r\nimport {findWhere} from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {\r\n    CollapsibleContainer,\r\n    ICollapsibleContainerOwnProps,\r\n    ICollapsibleContainerProps,\r\n    ICollapsibleContainerStateProps,\r\n} from './CollapsibleContainer';\r\n\r\nconst mapStateToProps = (\r\n    state: IReactVaporState,\r\n    ownProps: ICollapsibleContainerOwnProps\r\n): ICollapsibleContainerStateProps => {\r\n    const collapsibleState = findWhere(state.collapsibles, {id: ownProps.id});\r\n\r\n    return {expanded: collapsibleState && collapsibleState.expanded};\r\n};\r\n\r\nexport const CollapsibleContainerConnected: React.ComponentClass<ICollapsibleContainerProps> = connect(\r\n    mapStateToProps,\r\n    undefined,\r\n    ReduxUtils.mergeProps\r\n)(CollapsibleContainer);\r\n"}}]);
//# sourceMappingURL=248.bundle.js.map