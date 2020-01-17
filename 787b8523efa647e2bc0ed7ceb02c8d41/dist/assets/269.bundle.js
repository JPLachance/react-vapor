(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{1365:function(n,o,r){"use strict";r.r(o),o.default='import * as React from \'react\';\r\nimport {ItemBox} from \'../../itemBox/ItemBox\';\r\nimport {Loading} from \'../../loading/Loading\';\r\nimport {Svg} from \'../../svg/Svg\';\r\nimport {Tooltip} from \'../../tooltip/Tooltip\';\r\nimport {Content} from \'../Content\';\r\n\r\nexport class ContentExamples extends React.Component<any, any> {\r\n    static deprecated = true;\r\n\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Content with an string</label>\r\n                    <div className="form-control">\r\n                        <Content content="test" />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Content with a Svg</label>\r\n                    <div className="form-control">\r\n                        <Content content={() => <Svg svgName="domain-google" svgClass="icon" />} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Content with a tooltip</label>\r\n                    <div className="form-control">\r\n                        <Content content={() => <Tooltip title="test">Tooltip</Tooltip>} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Content with a component Loading</label>\r\n                    <div className="form-control">\r\n                        <Content content={Loading} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Content with a component ItemBox with props</label>\r\n                    <div className="form-control">\r\n                        <Content content={ItemBox} componentProps={{value: \'test\'}} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Content with an a tag for container</label>\r\n                    <div className="form-control">\r\n                        <Content content={ItemBox} componentProps={{value: \'test\'}} tag={\'div\'} />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=269.bundle.js.map