(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{1343:function(n,e,s){"use strict";s.r(e),e.default='import * as classNames from \'classnames\';\r\nimport * as React from \'react\';\r\n\r\nimport {Svg} from \'../svg/Svg\';\r\nimport {CollapsibleConnected} from \'./CollapsibleConnected\';\r\nimport * as styles from \'./styles/CollapsibleInfoBox.scss\';\r\n\r\nexport interface CollapsibleInfoBoxProps {\r\n    id: string;\r\n    title: string;\r\n    expandedOnMount?: boolean;\r\n    isSection?: boolean;\r\n    sectionAdditionalContent?: React.ReactNode;\r\n    sectionAdditionalContentCondition?: () => boolean;\r\n    sectionAdditionalContentClasses?: string;\r\n}\r\n\r\nexport class CollapsibleInfoBox extends React.PureComponent<CollapsibleInfoBoxProps> {\r\n    render() {\r\n        return (\r\n            <CollapsibleConnected\r\n                id={this.props.id}\r\n                className={classNames(styles.container, \'text-grey-9 mod-rounded-border-2\')}\r\n                headerClasses="p1"\r\n                toggleIconClassName="fill-medium-blue"\r\n                headerContent={this.getHeader()}\r\n                expandedOnMount={this.props.expandedOnMount}\r\n            >\r\n                <div className={classNames(styles.alignWithIcon, \'px1 pb1 mr3\')}>{this.props.children}</div>\r\n            </CollapsibleConnected>\r\n        );\r\n    }\r\n\r\n    private getHeader(): React.ReactNode {\r\n        return this.props.isSection ? (\r\n            <div className="flex pl1">\r\n                <h2 className="text-medium-blue">{this.props.title}</h2>\r\n                {this.props.sectionAdditionalContent && (\r\n                    <span className={this.getAdditionalInfoClasses()}>{this.props.sectionAdditionalContent}</span>\r\n                )}\r\n            </div>\r\n        ) : (\r\n            <div className="inline-flex">\r\n                <Svg svgName="info" className="icon mod-20 mx1 js-info-svg" svgClass="fill-medium-grey" />\r\n                <h3 className="text-medium-blue">{this.props.title}</h3>\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private getAdditionalInfoClasses() {\r\n        return classNames(this.props.sectionAdditionalContentClasses, {\r\n            hidden: this.props.sectionAdditionalContentCondition && !this.props.sectionAdditionalContentCondition(),\r\n        });\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=249.bundle.js.map