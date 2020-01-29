(window.webpackJsonp=window.webpackJsonp||[]).push([[784],{1882:function(r,n,e){"use strict";e.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {ActionBarConnected} from '../actions/ActionBar';\r\nimport {TableLoading} from '../loading/components/TableLoading';\r\nimport {PER_PAGE_NUMBERS} from '../navigation/perPage/NavigationPerPage';\r\n\r\n/**\r\n * @deprecated Use WithServerSideProcessingProps directly instead\r\n */\r\nexport type IMaybeServerConfig = WithServerSideProcessingProps;\r\n\r\nexport interface ITableHOCOwnProps {\r\n    id: string;\r\n    isLoading?: boolean;\r\n    hasActionButtons?: boolean;\r\n    data: any[];\r\n    renderBody: (data: any[]) => React.ReactNode;\r\n    actions?: React.ReactNode[];\r\n    tableHeader?: React.ReactNode;\r\n    onUpdate?: () => void;\r\n    containerClassName?: string;\r\n    showBorderTop?: boolean;\r\n    loading?: {\r\n        numberOfColumns?: number;\r\n        defaultLoadingRow?: number;\r\n    };\r\n}\r\n\r\nexport interface ITableHOCProps extends ITableHOCOwnProps {}\r\n\r\nexport class TableHOC extends React.PureComponent<ITableHOCProps & React.HTMLAttributes<HTMLTableElement>> {\r\n    static defaultProps: Partial<ITableHOCOwnProps> = {\r\n        isLoading: false,\r\n        hasActionButtons: false,\r\n        actions: [],\r\n        showBorderTop: false,\r\n        loading: {\r\n            numberOfColumns: 5,\r\n            defaultLoadingRow: PER_PAGE_NUMBERS[1],\r\n        },\r\n    };\r\n\r\n    render() {\r\n        const table = (\r\n            <table className={classNames(this.props.className)}>\r\n                {this.props.tableHeader}\r\n                {this.props.isLoading ? (\r\n                    <TableLoading.Body\r\n                        numberOfRow={\r\n                            _.size(this.props.data) || (this.props?.loading?.defaultLoadingRow ?? PER_PAGE_NUMBERS[1])\r\n                        }\r\n                        numberOfColumns={this.props?.loading?.numberOfColumns ?? 5}\r\n                    />\r\n                ) : (\r\n                    <tbody>{this.props.renderBody(this.props.data || [])}</tbody>\r\n                )}\r\n            </table>\r\n        );\r\n\r\n        return (\r\n            <div className={classNames('table-container', this.props.containerClassName)}>\r\n                {this.renderActions()}\r\n                {table}\r\n                {this.props.children}\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private renderActions() {\r\n        if (this.props.hasActionButtons || this.props.actions.length) {\r\n            return (\r\n                <ActionBarConnected\r\n                    id={this.props.id}\r\n                    removeDefaultContainerClasses\r\n                    extraContainerClasses={classNames(\r\n                        'coveo-table-actions-container',\r\n                        'mod-cancel-header-padding',\r\n                        'mod-align-header',\r\n                        {\r\n                            'mod-border-top': this.props.showBorderTop,\r\n                        }\r\n                    ).split(' ')}\r\n                >\r\n                    {this.props.actions}\r\n                </ActionBarConnected>\r\n            );\r\n        }\r\n        return null;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=784.bundle.js.map