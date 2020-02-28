(window.webpackJsonp=window.webpackJsonp||[]).push([[905],{2006:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\n\r\nimport {ReduxConnect} from '../../../utils/ReduxUtils';\r\nimport {ToastType} from '../Toast';\r\nimport {addToast} from '../ToastActions';\r\nimport {ToastContainerConnected} from '../ToastContainerConnected';\r\nimport {ToastContentExample} from './ToastContentExample';\r\n\r\nexport interface IToastConnectedExamplesProps {\r\n    addToast: typeof addToast;\r\n}\r\n\r\nconst containerId = 'some-id';\r\n\r\n@ReduxConnect(null, {addToast})\r\nexport class ToastConnectedExamples extends React.Component<IToastConnectedExamplesProps, {}> {\r\n    static description =\r\n        'Toasts display non-critical confirmation information related to user-performed operations (e.g., form submission).';\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"mt2\">\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Toasts</label>\r\n                    <div>\r\n                        <button\r\n                            className=\"btn\"\r\n                            onClick={() => {\r\n                                this.props.addToast(containerId, 'Success!');\r\n                            }}\r\n                        >\r\n                            Basic\r\n                        </button>\r\n\r\n                        <button\r\n                            className=\"btn\"\r\n                            onClick={() => {\r\n                                this.props.addToast(containerId, 'Warning!', {type: ToastType.Warning});\r\n                            }}\r\n                        >\r\n                            Warning\r\n                        </button>\r\n\r\n                        <button\r\n                            className=\"btn\"\r\n                            onClick={() => {\r\n                                this.props.addToast(containerId, 'Error!', {type: ToastType.Error});\r\n                            }}\r\n                        >\r\n                            Error\r\n                        </button>\r\n\r\n                        <button\r\n                            className=\"btn\"\r\n                            onClick={() => {\r\n                                this.props.addToast(containerId, 'Timed Success!', {dismiss: 1000});\r\n                            }}\r\n                        >\r\n                            Timed\r\n                        </button>\r\n\r\n                        <button\r\n                            className=\"btn\"\r\n                            onClick={() => {\r\n                                this.props.addToast(containerId, 'Success!', {content: 'String content'});\r\n                            }}\r\n                        >\r\n                            String Content\r\n                        </button>\r\n\r\n                        <button\r\n                            className=\"btn\"\r\n                            onClick={() => {\r\n                                this.props.addToast(containerId, 'Success!', {\r\n                                    content: () => <a href=\"#\">JSX Element</a>,\r\n                                });\r\n                            }}\r\n                        >\r\n                            JSX Content\r\n                        </button>\r\n\r\n                        <button\r\n                            className=\"btn\"\r\n                            onClick={() => {\r\n                                this.props.addToast(containerId, 'Success!', {content: ToastContentExample});\r\n                            }}\r\n                        >\r\n                            React Component Content\r\n                        </button>\r\n\r\n                        <ToastContainerConnected id={containerId} />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=905.bundle.js.map