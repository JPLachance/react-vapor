(window.webpackJsonp=window.webpackJsonp||[]).push([[516],{1611:function(r,n,e){"use strict";e.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IClassName} from '../../utils/ClassNameUtils';\r\nimport {ILinkSvgProps} from '../svg/LinkSvg';\r\nimport {Svg} from '../svg/Svg';\r\nimport {Title} from '../title/Title';\r\n\r\nexport interface IModalHeaderOwnProps {\r\n    id?: string;\r\n    title: string;\r\n    classes?: IClassName;\r\n    docLink?: ILinkSvgProps;\r\n}\r\n\r\nexport interface IModalHeaderStateProps {\r\n    lastOpened: boolean;\r\n}\r\n\r\nexport interface IModalHeaderDispatchProps {\r\n    onClose: () => void;\r\n}\r\n\r\nexport interface IModalHeaderProps\r\n    extends IModalHeaderOwnProps,\r\n        Partial<IModalHeaderStateProps>,\r\n        Partial<IModalHeaderDispatchProps> {}\r\n\r\nexport class ModalHeader extends React.Component<IModalHeaderProps, {}> {\r\n    static defaultProps: Partial<IModalHeaderProps> = {\r\n        lastOpened: true,\r\n    };\r\n\r\n    private canClose: boolean;\r\n\r\n    componentDidMount() {\r\n        this.canClose = this.props.lastOpened;\r\n    }\r\n\r\n    componentDidUpdate() {\r\n        this.canClose = false;\r\n        _.defer(() => (this.canClose = this.props.lastOpened));\r\n    }\r\n\r\n    close() {\r\n        if (this.canClose) {\r\n            this.props.onClose?.();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const classes = classNames('modal-header', this.props.classes);\r\n        const docLinkProps: ILinkSvgProps = this.props.docLink\r\n            ? {\r\n                  svg: {\r\n                      svgName: 'help',\r\n                      svgClass: 'fill-orange icon mod-20',\r\n                  },\r\n                  ...this.props.docLink,\r\n              }\r\n            : null;\r\n\r\n        let closeComponent: JSX.Element = null;\r\n        if (this.props.onClose) {\r\n            closeComponent = (\r\n                <span\r\n                    className=\"small-close\"\r\n                    onClick={() => {\r\n                        this.close();\r\n                    }}\r\n                >\r\n                    <Svg svgName=\"close\" className=\"icon mod-lg fill-pure-white\" />\r\n                </span>\r\n            );\r\n        }\r\n\r\n        return (\r\n            <header className={classes}>\r\n                <div className=\"truncate\">\r\n                    <Title text={this.props.title} documentationLink={docLinkProps} classes={['regular']} />\r\n                </div>\r\n                {this.props.children}\r\n                {closeComponent}\r\n            </header>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=516.bundle.js.map