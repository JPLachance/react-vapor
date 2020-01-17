(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{1510:function(r,n,e){"use strict";e.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Content, IContentProps} from '../content/Content';\r\nimport {ITabsHeaderProps, TabsHeader} from './TabsHeader';\r\n\r\nexport interface IHeaderWrapperProps extends ITabsHeaderProps {\r\n    description?: string;\r\n    actions?: IContentProps[];\r\n    classes?: string[];\r\n    hasBorderBottom?: boolean;\r\n    hasPadding?: boolean;\r\n}\r\n\r\nexport class HeaderWrapper extends React.Component<IHeaderWrapperProps, {}> {\r\n    static defaultProps: Partial<IHeaderWrapperProps> = {\r\n        hasBorderBottom: true,\r\n        hasPadding: true,\r\n    };\r\n\r\n    render() {\r\n        return (\r\n            <div className={this.containerClasses}>\r\n                <div className={this.classes}>\r\n                    <div className=\"truncate mr2\">\r\n                        {this.props.children}\r\n                        <h4 className=\"admin-description text-dark-grey normal-white-space\">\r\n                            {this.props.description}\r\n                        </h4>\r\n                    </div>\r\n                    <div className=\"action-bar\">{this.actions}</div>\r\n                </div>\r\n                <TabsHeader tabs={this.props.tabs} />\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private get containerClasses(): string {\r\n        return classNames('header-wrapper-container', {\r\n            'header-wrapper-container-with-tabs': !!this.props.tabs,\r\n        });\r\n    }\r\n\r\n    private get classes(): string {\r\n        return classNames(\r\n            'flex flex-center space-between header-height panel-header',\r\n            {\r\n                'mod-no-border-bottom': !this.props.hasBorderBottom || this.props.tabs,\r\n                px0: !this.props.hasPadding,\r\n            },\r\n            this.props.classes\r\n        );\r\n    }\r\n\r\n    private get actions(): JSX.Element[] {\r\n        return this.props.actions\r\n            ? _.map(this.props.actions, (action: IContentProps, index: number) => <Content key={index} {...action} />)\r\n            : null;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=416.bundle.js.map