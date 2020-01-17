(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{1574:function(n,r,o){"use strict";o.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport {omit} from 'underscore';\r\n\r\nexport interface ILoadingOwnProps extends React.ClassAttributes<Loading> {\r\n    id?: string;\r\n    className?: string;\r\n    fullContent?: boolean;\r\n}\r\n\r\nexport interface ILoadingDispatchProps {\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n}\r\n\r\nexport interface ILoadingProps extends ILoadingOwnProps, ILoadingDispatchProps {}\r\n\r\nexport class Loading extends React.Component<ILoadingProps & React.HTMLProps<HTMLDivElement>, any> {\r\n    static defaultProps: Partial<ILoadingOwnProps> = {\r\n        fullContent: false,\r\n    };\r\n\r\n    componentWillMount() {\r\n        if (this.props.onRender) {\r\n            this.props.onRender();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div\r\n                className={classNames('spinner', this.props.className, {\r\n                    'flex center-align flex-auto full-content-y': this.props.fullContent,\r\n                })}\r\n                {...omit(this.props, keys<ILoadingProps>())}\r\n            >\r\n                <div className=\"bounce1\"></div>\r\n                <div className=\"bounce2\"></div>\r\n                <div className=\"bounce3\"></div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=481.bundle.js.map