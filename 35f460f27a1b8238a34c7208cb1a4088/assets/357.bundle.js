(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{1464:function(r,o,e){"use strict";e.r(o),o.default='import * as React from \'react\';\r\nimport {CodeEditor} from \'../CodeEditor\';\r\nimport {CodeMirrorModes} from \'../EditorConstants\';\r\n\r\nexport class CodeEditorExamples extends React.Component<{}, {}> {\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Code Editor using codemirror</label>\r\n                    <CodeEditor value="" mode={CodeMirrorModes.Python} />\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Code Editor using codemirror in readonly mode</label>\r\n                    <CodeEditor value="" mode={CodeMirrorModes.Python} readOnly />\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Code Editor using codemirror with an action on change</label>\r\n                    <CodeEditor value="" mode={CodeMirrorModes.Python} onChange={(code: string) => alert(code)} />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=357.bundle.js.map