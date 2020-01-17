(window.webpackJsonp=window.webpackJsonp||[]).push([[766],{1854:function(r,n,e){"use strict";e.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nimport {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {ActionBarConnected} from '../actions/ActionBar';\r\n\r\n/**\r\n * @deprecated Use WithServerSideProcessingProps directly instead\r\n */\r\nexport type IMaybeServerConfig = WithServerSideProcessingProps;\r\n\r\nexport interface ITableHOCOwnProps {\r\n    id: string;\r\n    isLoading?: boolean;\r\n    hasActionButtons?: boolean;\r\n    data: any[];\r\n    renderBody: (data: any[]) => React.ReactNode;\r\n    actions?: React.ReactNode[];\r\n    tableHeader?: React.ReactNode;\r\n    onUpdate?: () => void;\r\n    containerClassName?: string;\r\n    showBorderTop?: boolean;\r\n}\r\n\r\nexport interface ITableHOCProps extends ITableHOCOwnProps {}\r\n\r\nexport class TableHOC extends React.PureComponent<ITableHOCProps & React.HTMLAttributes<HTMLTableElement>> {\r\n    static defaultProps: Partial<ITableHOCOwnProps> = {\r\n        isLoading: false,\r\n        hasActionButtons: false,\r\n        actions: [],\r\n        showBorderTop: false,\r\n    };\r\n\r\n    render() {\r\n        return (\r\n            <div\r\n                className={classNames('table-container', this.props.containerClassName, {\r\n                    'loading-component': this.props.isLoading,\r\n                })}\r\n            >\r\n                {this.renderActions()}\r\n                <table className={classNames(this.props.className)}>\r\n                    {this.props.tableHeader}\r\n                    <tbody>{this.props.renderBody(this.props.data || [])}</tbody>\r\n                </table>\r\n                {this.props.children}\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private renderActions() {\r\n        if (this.props.hasActionButtons || this.props.actions.length) {\r\n            return (\r\n                <ActionBarConnected\r\n                    id={this.props.id}\r\n                    removeDefaultContainerClasses\r\n                    extraContainerClasses={classNames(\r\n                        'coveo-table-actions-container',\r\n                        'mod-cancel-header-padding',\r\n                        'mod-align-header',\r\n                        {\r\n                            'mod-border-top': this.props.showBorderTop,\r\n                        }\r\n                    ).split(' ')}\r\n                >\r\n                    {this.props.actions}\r\n                </ActionBarConnected>\r\n            );\r\n        }\r\n        return null;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=766.bundle.js.map