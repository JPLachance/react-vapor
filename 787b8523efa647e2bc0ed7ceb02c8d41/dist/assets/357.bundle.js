(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{1451:function(r,n,o){"use strict";o.r(n),n.default='import * as React from \'react\';\r\nimport {fakeJSON, JSONToString} from \'../../../utils/JSONUtils\';\r\nimport {JSONEditor} from \'../JSONEditor\';\r\n\r\nexport class JSONEditorExamples extends React.Component<{}, {}> {\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">JSON Editor using codemirror</label>\r\n                    <JSONEditor value={JSONToString(fakeJSON)} />\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">JSON Editor using codemirror in readonly mode</label>\r\n                    <JSONEditor value={JSONToString(fakeJSON)} readOnly />\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">JSON Editor using codemirror with an action on change</label>\r\n                    <JSONEditor value={JSONToString(fakeJSON)} onChange={(json: string) => alert(json)} />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=357.bundle.js.map