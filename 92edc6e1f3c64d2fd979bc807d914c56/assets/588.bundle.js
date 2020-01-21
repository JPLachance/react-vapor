(window.webpackJsonp=window.webpackJsonp||[]).push([[588],{1683:function(n,r,e){"use strict";e.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {keyCode} from '../../utils/InputUtils';\r\nimport {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {Button} from '../button/Button';\r\nimport {Svg} from '../svg/Svg';\r\nimport * as styles from './numeric-input.scss';\r\nimport {NumericInputActions} from './NumericInputActions';\r\nimport {initialNumericInputState} from './NumericInputReducers';\r\nimport {NumericInputSelectors} from './NumericInputSelectors';\r\n\r\nexport interface NumericInputOwnProps {\r\n    id: string;\r\n    initialValue?: number;\r\n    step?: number;\r\n    min?: number;\r\n    max?: number;\r\n    invalidMessage?: string;\r\n    maxLength?: number; // we use the attribute from the input https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text\r\n}\r\n\r\nexport interface NumericInputStateProps {\r\n    value: React.ReactText;\r\n    hasError: boolean;\r\n}\r\n\r\nexport interface NumericInputDispatchProps {\r\n    mount: (value: number) => void;\r\n    unmount: () => void;\r\n    setValue: (value: number | string) => void;\r\n}\r\n\r\nexport interface NumericInputProps\r\n    extends NumericInputOwnProps,\r\n        Partial<NumericInputStateProps>,\r\n        Partial<NumericInputDispatchProps> {}\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: NumericInputOwnProps): NumericInputStateProps => {\r\n    return {\r\n        value: NumericInputSelectors.getValue(state, ownProps),\r\n        hasError: NumericInputSelectors.getHasError(state, ownProps),\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: NumericInputOwnProps): NumericInputDispatchProps => ({\r\n    mount: (value: number) => dispatch(NumericInputActions.mount(ownProps.id, value, ownProps.min, ownProps.max)),\r\n    unmount: () => dispatch(NumericInputActions.unmount(ownProps.id)),\r\n    setValue: (value: React.ReactText) =>\r\n        dispatch(NumericInputActions.setValue(ownProps.id, value, ownProps.min, ownProps.max)),\r\n});\r\n\r\n@ReduxConnect(mapStateToProps, mapDispatchToProps)\r\nexport class NumericInputConnected extends React.PureComponent<NumericInputProps & React.HTMLProps<HTMLInputElement>> {\r\n    static defaultProps: Partial<NumericInputOwnProps> = {\r\n        invalidMessage: 'Value is not valid',\r\n    };\r\n\r\n    componentDidMount() {\r\n        const initialValue = _.isUndefined(this.props.initialValue)\r\n            ? (initialNumericInputState.value as number)\r\n            : this.props.initialValue;\r\n        this.props.mount(initialValue);\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.unmount();\r\n    }\r\n\r\n    render() {\r\n        const valueAsNumber = parseFloat('' + this.props.value);\r\n        const incrementEnabled =\r\n            _.isUndefined(this.props.max) || _.isNaN(valueAsNumber) || valueAsNumber < this.props.max;\r\n        const decrementEnabled =\r\n            _.isUndefined(this.props.min) || _.isNaN(valueAsNumber) || valueAsNumber > this.props.min;\r\n        return (\r\n            <div className=\"numeric-input flex flex-column\">\r\n                <div className=\"flex flex-row\">\r\n                    <Button\r\n                        classes={['js-decrement mr1 p0', styles.numericInputButton]}\r\n                        enabled={decrementEnabled}\r\n                        onClick={this.onDecrement}\r\n                        type=\"button\"\r\n                    >\r\n                        <Svg svgName=\"minus\" svgClass=\"icon mod-12 fill-pure-white\" />\r\n                    </Button>\r\n                    <div className=\"flex flex-column\">\r\n                        <input\r\n                            {..._.omit(this.props, keys<NumericInputProps>())}\r\n                            className={classNames(\r\n                                'js-numeric-input',\r\n                                {\r\n                                    [`mod-max-${this.props.maxLength}-digit`]:\r\n                                        _.isNumber(this.props.maxLength) && this.props.maxLength > 0,\r\n                                },\r\n                                this.props.className,\r\n                                styles.numericInput\r\n                            )}\r\n                            value={this.props.value}\r\n                            onChange={this.onChange}\r\n                            onKeyDown={this.onKeyDown}\r\n                        />\r\n                    </div>\r\n                    <Button\r\n                        classes={['js-increment ml1 p0', styles.numericInputButton]}\r\n                        enabled={incrementEnabled}\r\n                        onClick={this.onIncrement}\r\n                        type=\"button\"\r\n                    >\r\n                        <Svg svgName=\"plus\" svgClass=\"icon mod-12 fill-pure-white\" />\r\n                    </Button>\r\n                </div>\r\n                <div className=\"flex flex-row\">\r\n                    {this.props.hasError && <span className=\"generic-form-error my1\">{this.props.invalidMessage}</span>}\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {\r\n        const key = e.keyCode;\r\n        if (key === keyCode.upArrow) {\r\n            this.onIncrement();\r\n        } else if (key === keyCode.downArrow) {\r\n            this.onDecrement();\r\n        }\r\n    };\r\n\r\n    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r\n        const value = (e.target as HTMLInputElement).value;\r\n        this.props.setValue(value);\r\n    };\r\n\r\n    private getValueAsNumber() {\r\n        let value = this.props.value;\r\n        if (typeof value === 'string') {\r\n            value = parseFloat(value);\r\n        }\r\n        return value as number;\r\n    }\r\n\r\n    private normalizeValue(value: number) {\r\n        if (_.isNaN(value)) {\r\n            return this.props.initialValue || initialNumericInputState.value;\r\n        }\r\n        return value;\r\n    }\r\n\r\n    private onDecrement = () => {\r\n        let newValue = this.normalizeValue(this.getValueAsNumber() - (this.props.step || 1));\r\n\r\n        if (!_.isUndefined(this.props.min)) {\r\n            newValue = Math.max(newValue, this.props.min);\r\n        }\r\n\r\n        this.props.setValue(newValue);\r\n    };\r\n\r\n    private onIncrement = () => {\r\n        let newValue = this.normalizeValue(this.getValueAsNumber() + (this.props.step || 1));\r\n\r\n        if (!_.isUndefined(this.props.max)) {\r\n            newValue = Math.min(newValue, this.props.max);\r\n        }\r\n\r\n        this.props.setValue(newValue);\r\n    };\r\n}\r\n"}}]);
//# sourceMappingURL=588.bundle.js.map