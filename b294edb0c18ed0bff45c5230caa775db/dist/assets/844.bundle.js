(window.webpackJsonp=window.webpackJsonp||[]).push([[844],{1942:function(e,r,a){"use strict";a.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IClassName} from '../../utils/ClassNameUtils';\r\nimport {IReduxStatePossibleProps} from '../../utils/ReduxUtils';\r\nimport {ITableHeaderCellProps, TableHeaderCell} from './TableHeaderCell';\r\nimport {TableHeaderCellConnected} from './TableHeaderCellConnected';\r\n\r\nexport interface ITableHeaderProps extends React.ClassAttributes<TableHeader>, IReduxStatePossibleProps {\r\n    columns: ITableHeaderCellProps[];\r\n    headerClass?: IClassName;\r\n}\r\n\r\nexport class TableHeader extends React.Component<ITableHeaderProps, any> {\r\n    render() {\r\n        const columns: JSX.Element[] = _.map(\r\n            this.props.columns,\r\n            (column: ITableHeaderCellProps, index: number): JSX.Element => {\r\n                const TableHeaderCellClass =\r\n                    this.props.withReduxState && column.attributeToSort ? TableHeaderCellConnected : TableHeaderCell;\r\n\r\n                return <TableHeaderCellClass key={`th-${column.id || index}`} {...column} />;\r\n            }\r\n        );\r\n\r\n        return (\r\n            <thead className={classNames(this.props.headerClass)}>\r\n                <tr>{columns}</tr>\r\n            </thead>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=844.bundle.js.map