(window.webpackJsonp=window.webpackJsonp||[]).push([[836],{1924:function(r,n,o){"use strict";o.r(n),n.default="import * as React from 'react';\r\nimport {Loading} from '../../loading/Loading';\r\nimport {ITableProps} from '../Table';\r\nimport {TOGGLE_ARROW_CELL_COUNT} from '../TableConstants';\r\n\r\nexport interface ITableChildLoadingRowProps extends ITableProps {\r\n    isInitialLoad?: boolean;\r\n}\r\n\r\nexport const TableChildLoadingRow = (props: ITableChildLoadingRowProps): JSX.Element => {\r\n    return props.isInitialLoad ? (\r\n        <tbody className=\"loading-row\">\r\n            <tr>\r\n                <td\r\n                    colSpan={\r\n                        props.headingAttributes.length + (!!props.collapsibleFormatter ? TOGGLE_ARROW_CELL_COUNT : 0)\r\n                    }\r\n                >\r\n                    <Loading />\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    ) : null;\r\n};\r\n"}}]);
//# sourceMappingURL=836.bundle.js.map