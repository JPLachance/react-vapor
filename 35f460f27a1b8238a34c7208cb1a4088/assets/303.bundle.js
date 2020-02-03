(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{1410:function(n,r,t){"use strict";t.r(r),r.default="import {Diff2Html} from 'diff2html';\r\nimport * as React from 'react';\r\n// @ts-ignore\r\nimport * as unidiff from 'unidiff';\r\n\r\nimport {BlankSlate} from '../blankSlate/BlankSlate';\r\nimport * as styles from './styles/DiffViewer.scss';\r\n\r\nexport interface DiffViewerProps extends React.ClassAttributes<DiffViewer> {\r\n    first: string;\r\n    second: string;\r\n    noChangesLabel?: string;\r\n    noChangesDescription?: string;\r\n}\r\n\r\nexport class DiffViewer extends React.Component<DiffViewerProps> {\r\n    static defaultProps: Partial<DiffViewerProps> = {\r\n        noChangesLabel: 'No changes',\r\n    };\r\n\r\n    static OutputFormat = {\r\n        Side: 'side-by-side',\r\n        Line: 'line-by-line',\r\n    };\r\n\r\n    static InputFormat = {\r\n        Diff: 'diff',\r\n        JSON: 'json',\r\n    };\r\n\r\n    static Matching = {\r\n        Lines: 'lines',\r\n        Words: 'words',\r\n        None: 'none',\r\n    };\r\n\r\n    static EmptyHtmlRegex = new RegExp(/<div class=\"d2h-wrapper\"\\>\\s*<\\/div>/);\r\n\r\n    render() {\r\n        const diff = unidiff.diffLines(this.props.first, this.props.second);\r\n        const formattedDiff = unidiff.formatLines(diff, {context: 3});\r\n        const html = Diff2Html.getPrettyHtml(formattedDiff, {\r\n            inputFormat: DiffViewer.InputFormat.Diff,\r\n            showFiles: false,\r\n            matching: DiffViewer.Matching.Words,\r\n            outputFormat: DiffViewer.OutputFormat.Line,\r\n        });\r\n\r\n        return !DiffViewer.EmptyHtmlRegex.test(html) ? (\r\n            <div className={styles.diffViewer} dangerouslySetInnerHTML={{__html: html}}></div>\r\n        ) : (\r\n            <BlankSlate title={this.props.noChangesLabel} description={this.props.noChangesDescription} />\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=303.bundle.js.map