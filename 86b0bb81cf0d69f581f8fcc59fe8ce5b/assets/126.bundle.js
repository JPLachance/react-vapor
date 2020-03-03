(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1240:function(r,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\r\nimport {IReduxStatePossibleProps} from '../../utils/ReduxUtils';\r\nimport {IBasicActionProps} from './Action';\r\nimport {LinkAction} from './LinkAction';\r\nimport {TriggerAction, TriggerActionConnected} from './TriggerActionConnected';\r\n\r\nexport interface IPrimaryActionOwnProps extends React.ClassAttributes<PrimaryAction>, IBasicActionProps {\r\n    parentId?: string;\r\n}\r\n\r\nexport interface IPrimaryActionStateProps extends IReduxStatePossibleProps {}\r\n\r\nexport interface IPrimaryActionProps extends IPrimaryActionOwnProps, IPrimaryActionStateProps {}\r\n\r\nexport class PrimaryAction extends React.Component<IPrimaryActionProps, any> {\r\n    render() {\r\n        const action: JSX.Element = this.props.action.link ? (\r\n            <LinkAction action={this.props.action} />\r\n        ) : this.props.withReduxState ? (\r\n            <TriggerActionConnected action={this.props.action} parentId={this.props.parentId} />\r\n        ) : (\r\n            <TriggerAction action={this.props.action} />\r\n        );\r\n\r\n        return <div>{action}</div>;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=126.bundle.js.map