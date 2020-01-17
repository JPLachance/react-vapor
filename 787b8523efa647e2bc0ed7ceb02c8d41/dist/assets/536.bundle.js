(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1629:function(n,r,a){"use strict";a.r(r),r.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {Button} from '../../button/Button';\r\nimport {InputConnected} from '../../input/InputConnected';\r\nimport {IMultilineParentProps, IMultilineSingleBoxProps, MultilineBox} from '../MultilineBox';\r\n\r\nexport type IExampleData = IMultilineSingleBoxProps<IMultilineBoxExamplesProps>;\r\n\r\nexport interface IMultilineBoxExamplesProps {\r\n    name: string;\r\n    displayName: string;\r\n}\r\n\r\nexport class WrapperExample extends React.Component<{}, {id: string; data: IMultilineBoxExamplesProps[]}> {\r\n    constructor(props: any, state: any) {\r\n        super(props, state);\r\n\r\n        this.state = {\r\n            id: UUID.generate(),\r\n            data: [\r\n                {\r\n                    name: 'Pear',\r\n                    displayName: 'Paris',\r\n                },\r\n            ],\r\n        };\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <>\r\n                <div className=\"my2\">\r\n                    <Button\r\n                        name={'Update initial data sent to the multiline box'}\r\n                        onClick={() => {\r\n                            this.setState({\r\n                                data: [\r\n                                    {\r\n                                        name: 'Banana',\r\n                                        displayName: 'Bahamas',\r\n                                    },\r\n                                    {\r\n                                        name: 'Tomato',\r\n                                        displayName: 'Tacoma',\r\n                                    },\r\n                                ],\r\n                            });\r\n                        }}\r\n                    />\r\n                </div>\r\n                <MultilineBox<IMultilineBoxExamplesProps>\r\n                    id={this.state.id}\r\n                    data={this.state.data}\r\n                    renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>\r\n                        _.map(data, (cData: IExampleData) => (\r\n                            <div key={cData.id}>\r\n                                <InputConnected\r\n                                    id={`${cData.id}1`}\r\n                                    classes=\"mt0 inline-block mx1\"\r\n                                    defaultValue={cData.props.name}\r\n                                    validate={(value: string) => cData.props.name === value}\r\n                                    validateOnChange\r\n                                    onChange={(value: string) => {\r\n                                        if (value !== '' && cData.isLast) {\r\n                                            defaultProps.addNewBox();\r\n                                        }\r\n                                    }}\r\n                                />\r\n                                <InputConnected\r\n                                    id={`${cData.id}2`}\r\n                                    classes=\"mt0 inline-block mx1\"\r\n                                    defaultValue={cData.props.displayName}\r\n                                />\r\n                            </div>\r\n                        ))\r\n                    }\r\n                    defaultProps={{\r\n                        name: '',\r\n                        displayName: '',\r\n                    }}\r\n                />\r\n            </>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=536.bundle.js.map