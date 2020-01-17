(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{1630:function(n,r,t){"use strict";t.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {IClassName} from '../../utils/ClassNameUtils';\r\nimport {ITooltipProps, Tooltip} from '../tooltip/Tooltip';\r\n\r\nexport enum MultiStepState {\r\n    ToDo = 'to-do',\r\n    Doing = 'doing',\r\n    Done = 'done',\r\n    Error = 'error',\r\n    Warning = 'warning',\r\n}\r\n\r\nexport interface IStep {\r\n    state: MultiStepState;\r\n    text?: string;\r\n    tooltip?: ITooltipProps;\r\n}\r\n\r\nexport interface IMultiStepBarProps {\r\n    steps: IStep[];\r\n    className?: IClassName;\r\n    small?: boolean;\r\n    separator?: boolean;\r\n    inProgressAnimation?: '' | 'slide' | 'shine';\r\n    barAnimation?: '' | 'flare';\r\n}\r\n\r\nconst getStepContent = (step: IStep): JSX.Element => {\r\n    return step.text ? <div className=\"multi-step-bar-text\">{step.text}</div> : null;\r\n};\r\n\r\nexport const MultiStepBar = (props: IMultiStepBarProps) => {\r\n    const {className, small, inProgressAnimation, barAnimation, separator, steps} = props;\r\n    const containerClasses = classNames(className, {\r\n        'multi-step-bar-container': true,\r\n        'mod-multi-step-bar-in-progress-sliding-animation': inProgressAnimation === 'slide',\r\n        'mod-multi-step-bar-in-progress-shine-animation': inProgressAnimation === 'shine',\r\n        'mod-multi-step-bar-flare-animation': barAnimation === 'flare',\r\n        'mod-multi-step-bar-separated': separator,\r\n        'mod-small': small,\r\n    });\r\n    const stepsContent = steps.map(getStepContent);\r\n    return (\r\n        <div className={containerClasses}>\r\n            <div className=\"multi-step-bar-backdrop-container\">\r\n                {steps.map((step: IStep, i: number) => {\r\n                    const classes = classNames('multi-step-bar', `multi-step-bar-${step.state}`);\r\n                    return (\r\n                        <div key={`multi-step-bar-backdrop-${i}`} className={classes}>\r\n                            {stepsContent[i]}\r\n                        </div>\r\n                    );\r\n                })}\r\n            </div>\r\n            <div className=\"multi-step-bar-content-container\">\r\n                {steps.map((step: IStep, i: number) => {\r\n                    const key = `multi-step-bar-${i}`;\r\n                    const classes = classNames('multi-step-bar');\r\n                    return step.tooltip && step.tooltip.title ? (\r\n                        <Tooltip {...step.tooltip} key={key} className={classes}>\r\n                            {stepsContent[i]}\r\n                        </Tooltip>\r\n                    ) : (\r\n                        <span key={key} className={classes}>\r\n                            {stepsContent[i]}\r\n                        </span>\r\n                    );\r\n                })}\r\n            </div>\r\n        </div>\r\n    );\r\n};\r\n"}}]);
//# sourceMappingURL=535.bundle.js.map