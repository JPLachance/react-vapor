(window.webpackJsonp=window.webpackJsonp||[]).push([[742],{1823:function(n,e,r){"use strict";r.r(e),e.default="import * as React from 'react';\r\nimport {Svg} from '../svg/Svg';\r\n\r\nexport interface ISyncFeedbackProps {\r\n    feedback?: string;\r\n    state: string;\r\n}\r\n\r\nexport const SyncFeedbackState = {\r\n    SYNCING: 'SYNCING',\r\n    SUCCESS: 'SUCCESS',\r\n    ERROR: 'ERROR',\r\n    NONE: 'NONE',\r\n};\r\n\r\nexport const DEFAULT_SYNC_FEEDBACK_SYNCING_LABEL: string = 'Saving changes...';\r\nexport const DEFAULT_SYNC_FEEDBACK_SUCCESS_LABEL: string = 'Changes saved';\r\nexport const DEFAULT_SYNC_FEEDBACK_ERROR_LABEL: string = 'Changes could not be saved.';\r\n\r\nexport class SyncFeedback extends React.Component<ISyncFeedbackProps, any> {\r\n    render() {\r\n        const classes = ['sync-feedback'];\r\n        if (this.props.state === SyncFeedbackState.ERROR) {\r\n            classes.push('mod-error');\r\n        } else if (this.props.state === SyncFeedbackState.SUCCESS) {\r\n            classes.push('mod-success');\r\n        }\r\n\r\n        return (\r\n            <div className={classes.join(' ')}>\r\n                {this.renderIcon()}\r\n                {this.renderContent()}\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private renderIcon() {\r\n        if (this.props.state === SyncFeedbackState.SYNCING) {\r\n            return <span className=\"status-dot syncing sync-feedback-icon\"></span>;\r\n        } else if (this.props.state === SyncFeedbackState.SUCCESS) {\r\n            return <Svg svgName=\"check\" className=\"sync-feedback-icon\" svgClass=\"icon\" />;\r\n        } else if (this.props.state === SyncFeedbackState.ERROR) {\r\n            return <Svg svgName=\"clear\" className=\"sync-feedback-icon\" svgClass=\"icon\" />;\r\n        } else {\r\n            return null;\r\n        }\r\n    }\r\n\r\n    private renderContent() {\r\n        if (this.props.state === SyncFeedbackState.SYNCING) {\r\n            return (\r\n                <span className=\"sync-feedback-text\">{this.props.feedback || DEFAULT_SYNC_FEEDBACK_SYNCING_LABEL}</span>\r\n            );\r\n        } else if (this.props.state === SyncFeedbackState.SUCCESS) {\r\n            return (\r\n                <span className=\"sync-feedback-text\">{this.props.feedback || DEFAULT_SYNC_FEEDBACK_SUCCESS_LABEL}</span>\r\n            );\r\n        } else if (this.props.state === SyncFeedbackState.ERROR) {\r\n            return (\r\n                <span className=\"sync-feedback-text\">{this.props.feedback || DEFAULT_SYNC_FEEDBACK_ERROR_LABEL}</span>\r\n            );\r\n        } else {\r\n            return null;\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=742.bundle.js.map