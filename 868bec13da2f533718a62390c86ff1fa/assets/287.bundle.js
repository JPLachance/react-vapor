(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{1385:function(r,e,t){"use strict";t.r(e),e.default="import * as React from 'react';\r\nimport {DATES_SEPARATOR, DateUtils} from '../../utils/DateUtils';\r\nimport {DatePicker, IDatePickerProps} from './DatePicker';\r\nimport {DatePickerDateRange} from './DatePickerConstants';\r\n\r\nexport interface IRangeLimit {\r\n    weeks?: number;\r\n    days?: number;\r\n    hours?: number;\r\n    message?: string;\r\n}\r\n\r\nexport interface IDatesSelectionOwnProps extends React.ClassAttributes<DatesSelection> {\r\n    id?: string;\r\n    withTime?: boolean;\r\n    hasSetToNowButton?: boolean;\r\n    isRange?: boolean;\r\n    isClearable?: boolean;\r\n    rangeLimit?: IRangeLimit;\r\n    color?: string;\r\n    calendarId?: string;\r\n    defaultLowerLimit?: Date;\r\n    defaultUpperLimit?: Date;\r\n    lowerLimitPlaceholder?: string;\r\n    upperLimitPlaceholder?: string;\r\n    initiallyUnselected?: boolean;\r\n    initialDateRange?: DatePickerDateRange;\r\n}\r\n\r\nexport interface IDatesSelectionStateProps {\r\n    lowerLimit?: Date;\r\n    upperLimit?: Date;\r\n    inputLowerLimit?: Date;\r\n    inputUpperLimit?: Date;\r\n    quickOption?: string;\r\n    isSelecting?: string;\r\n}\r\n\r\nexport interface IDatesSelectionDispatchProps {\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n    onClick?: (isUpperLimit: boolean) => void;\r\n    onBlur?: (date: Date, isUpperLimit: boolean, datePicker?: boolean) => void;\r\n}\r\n\r\nexport interface IDatesSelectionChildrenProps {\r\n    setToNowTooltip?: string;\r\n}\r\n\r\nexport interface IDatesSelectionProps\r\n    extends IDatesSelectionOwnProps,\r\n        IDatesSelectionStateProps,\r\n        IDatesSelectionDispatchProps,\r\n        IDatesSelectionChildrenProps {}\r\n\r\nexport const LOWER_LIMIT_PLACEHOLDER: string = 'Select a start date';\r\nexport const UPPER_LIMIT_PLACEHOLDER: string = 'Select an end date';\r\n\r\nexport class DatesSelection extends React.Component<IDatesSelectionProps, any> {\r\n    static defaultProps: Partial<IDatesSelectionProps> = {\r\n        lowerLimitPlaceholder: LOWER_LIMIT_PLACEHOLDER,\r\n        upperLimitPlaceholder: UPPER_LIMIT_PLACEHOLDER,\r\n        quickOption: '',\r\n        isSelecting: '',\r\n    };\r\n\r\n    private onDateChange(date: Date, isUpperLimit: boolean, datePicker?: boolean) {\r\n        if (this.props.onBlur) {\r\n            this.props.onBlur(date, isUpperLimit, datePicker);\r\n        }\r\n    }\r\n\r\n    private onDateClick(isUpperLimit: boolean) {\r\n        if (this.props.onClick) {\r\n            this.props.onClick(isUpperLimit);\r\n        }\r\n    }\r\n\r\n    componentWillMount() {\r\n        if (this.props.onRender) {\r\n            this.props.onRender();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n    }\r\n\r\n    componentWillReceiveProps(nextProps: IDatesSelectionProps) {\r\n        if (nextProps.quickOption && nextProps.quickOption !== this.props.quickOption) {\r\n            const dates: string[] = nextProps.quickOption.split(DATES_SEPARATOR);\r\n\r\n            this.onDateChange(new Date(dates[0]), false, true);\r\n\r\n            if (dates.length > 1) {\r\n                this.onDateChange(new Date(dates[1]), true, true);\r\n            }\r\n        }\r\n    }\r\n\r\n    private handleOnBlur(date: Date, isUpperLimit: boolean = false) {\r\n        const formattedLowerLimit: string = DateUtils.getDateWithTimeString(this.props.inputLowerLimit);\r\n        const formattedUpperLimit: string = DateUtils.getDateWithTimeString(this.props.inputUpperLimit);\r\n        const formattedInputDate: string = DateUtils.getDateWithTimeString(date);\r\n\r\n        if (\r\n            (!isUpperLimit && formattedLowerLimit !== formattedInputDate) ||\r\n            (isUpperLimit && formattedUpperLimit !== formattedInputDate)\r\n        ) {\r\n            this.onDateChange(date, isUpperLimit);\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const isSmallSplit = this.props.isRange && !this.props.hasSetToNowButton;\r\n        const isLarge = this.props.withTime || (this.props.isRange && this.props.hasSetToNowButton);\r\n        const wrapperClasses: string = !isSmallSplit || isLarge ? '' : 'mod-inline flex';\r\n        const datePickerProps: IDatePickerProps = {\r\n            withTime: this.props.withTime,\r\n            hasSetToNowButton: this.props.hasSetToNowButton,\r\n            setToNowTooltip: this.props.setToNowTooltip,\r\n            isSelecting: this.props.isSelecting,\r\n            onClick: (isUpperLimit: boolean) => this.onDateClick(isUpperLimit),\r\n            onBlur: (date: Date, isUpperLimit: boolean) => this.handleOnBlur(date, isUpperLimit),\r\n            placeholder: '',\r\n        };\r\n        const separatorClasses: string[] = ['date-separator'];\r\n        if (isLarge) {\r\n            separatorClasses.push('mod-vertical');\r\n        }\r\n        const separator: JSX.Element = this.props.isRange ? (\r\n            <span className={separatorClasses.join(' ')}>\r\n                <span>-</span>\r\n            </span>\r\n        ) : null;\r\n        const toDate: JSX.Element = this.props.isRange ? (\r\n            <DatePicker\r\n                upperLimit\r\n                date={this.props.upperLimit}\r\n                {...datePickerProps}\r\n                placeholder={this.props.upperLimitPlaceholder}\r\n            />\r\n        ) : null;\r\n\r\n        return (\r\n            <div className={wrapperClasses}>\r\n                <DatePicker\r\n                    date={this.props.lowerLimit}\r\n                    {...datePickerProps}\r\n                    placeholder={this.props.lowerLimitPlaceholder}\r\n                />\r\n                {separator}\r\n                {toDate}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=287.bundle.js.map