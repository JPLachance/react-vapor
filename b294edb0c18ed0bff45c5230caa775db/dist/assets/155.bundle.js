(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1267:function(s,r,a){"use strict";a.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nexport const DEFAULT_BADGE_CLASSNAME = 'badge';\r\n\r\nexport interface IBadgeProps {\r\n    label: string;\r\n    extraClasses?: string[];\r\n}\r\n\r\nexport class Badge extends React.Component<IBadgeProps> {\r\n    static defaultProps: Partial<IBadgeProps> = {\r\n        extraClasses: [],\r\n    };\r\n\r\n    render() {\r\n        const className = classNames(DEFAULT_BADGE_CLASSNAME, this.props.extraClasses);\r\n        return <span className={className}>{this.props.label}</span>;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=155.bundle.js.map