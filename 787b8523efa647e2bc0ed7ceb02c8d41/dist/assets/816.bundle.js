(window.webpackJsonp=window.webpackJsonp||[]).push([[816],{1902:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\n\r\nexport interface ITableEmptyRowProps extends React.ClassAttributes<TableEmptyRow> {\r\n    text: string;\r\n    nbColumns: number;\r\n}\r\n\r\nexport class TableEmptyRow extends React.Component<ITableEmptyRowProps, any> {\r\n    render() {\r\n        return (\r\n            <tbody>\r\n                <tr className=\"empty\">\r\n                    <td colSpan={this.props.nbColumns}>{this.props.text}</td>\r\n                </tr>\r\n            </tbody>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=816.bundle.js.map