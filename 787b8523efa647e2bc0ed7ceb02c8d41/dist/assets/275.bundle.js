(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{1371:function(t,e,r){"use strict";r.r(e),e.default="import * as $ from 'jquery';\r\nimport * as React from 'react';\r\nimport {DateUtils} from '../../utils/DateUtils';\r\nimport {CalendarDay} from '../calendar/CalendarDay';\r\nimport {DateLimits} from './DatePickerActions';\r\nimport {SetToNowButton} from './SetToNowButton';\r\n\r\nexport interface IDatePickerProps extends React.ClassAttributes<DatePicker> {\r\n    onBlur: (date: Date, isUpperLimit: boolean) => void;\r\n    onClick: (isUpperLimit: boolean) => void;\r\n    placeholder: string;\r\n    withTime?: boolean;\r\n    hasSetToNowButton?: boolean;\r\n    upperLimit?: boolean;\r\n    date?: Date;\r\n    setToNowTooltip?: string;\r\n    isSelecting?: string;\r\n    color?: string;\r\n}\r\n\r\nexport const DatePickerColors = {\r\n    blue: 'blue',\r\n    green: 'green',\r\n    yellow: 'yellow',\r\n    red: 'red',\r\n    orange: 'orange',\r\n};\r\n\r\nexport const DEFAULT_DATE_PICKER_COLOR: string = DatePickerColors.blue;\r\n\r\nexport class DatePicker extends React.Component<IDatePickerProps, any> {\r\n    static defaultProps: Partial<IDatePickerProps> = {\r\n        color: DEFAULT_DATE_PICKER_COLOR,\r\n    };\r\n\r\n    private dateInput: HTMLInputElement;\r\n    private isPicked: boolean;\r\n\r\n    private getDateFromString(dateValue: string): Date {\r\n        return this.props.withTime\r\n            ? DateUtils.getDateFromTimeString(dateValue)\r\n            : DateUtils.getDateFromSimpleDateString(dateValue);\r\n    }\r\n\r\n    private getStringFromDate(date: Date): string {\r\n        return this.props.withTime ? DateUtils.getDateWithTimeString(date) : DateUtils.getSimpleDate(date);\r\n    }\r\n\r\n    private setToToday() {\r\n        const date = new Date();\r\n        this.dateInput.value = this.getStringFromDate(date);\r\n        this.handleChangeDate();\r\n    }\r\n\r\n    private handleChangeDate() {\r\n        const date: Date = this.getDateFromString(this.dateInput.value);\r\n\r\n        if (date.getDate()) {\r\n            this.props.onBlur(date, this.props.upperLimit);\r\n        }\r\n    }\r\n\r\n    handleDocumentClick = (e: MouseEvent) => {\r\n        const target = $(e.target);\r\n        if (\r\n            this.isPicked &&\r\n            !target.closest('.date-picker').length &&\r\n            !target.closest(`.${CalendarDay.DEFAULT_DATE_CLASS}`).length &&\r\n            !target.closest('.date-picker-dropdown').length\r\n        ) {\r\n            this.handleChangeDate();\r\n        }\r\n    };\r\n\r\n    componentDidMount() {\r\n        document.addEventListener('click', this.handleDocumentClick);\r\n    }\r\n\r\n    componentWillReceiveProps(nextProps: IDatePickerProps) {\r\n        if (nextProps.date) {\r\n            const dateValue: string = this.getStringFromDate(nextProps.date);\r\n\r\n            if (this.dateInput.value !== dateValue) {\r\n                this.dateInput.value = dateValue;\r\n            }\r\n        } else {\r\n            this.dateInput.value = '';\r\n        }\r\n        this.isPicked =\r\n            (nextProps.isSelecting === DateLimits.upper && nextProps.upperLimit) ||\r\n            (nextProps.isSelecting === DateLimits.lower && !nextProps.upperLimit);\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        document.removeEventListener('click', this.handleDocumentClick);\r\n    }\r\n\r\n    render() {\r\n        const nowButton: JSX.Element = this.props.hasSetToNowButton ? (\r\n            <SetToNowButton onClick={() => this.setToToday()} tooltip={this.props.setToNowTooltip} />\r\n        ) : null;\r\n\r\n        const inputClasses: string[] = [`border-${this.props.color}`];\r\n        if (this.isPicked) {\r\n            inputClasses.push('picking-date');\r\n        } else if (this.dateInput && this.dateInput.value) {\r\n            inputClasses.push('date-picked', `bg-${this.props.color}`);\r\n        }\r\n\r\n        return (\r\n            <div className=\"date-picker flex\">\r\n                <input\r\n                    className={inputClasses.join(' ')}\r\n                    ref={(dateInput: HTMLInputElement) => (this.dateInput = dateInput)}\r\n                    onBlur={() => this.handleChangeDate()}\r\n                    onClick={() => this.props.onClick(this.props.upperLimit)}\r\n                    placeholder={this.props.placeholder}\r\n                    required\r\n                />\r\n                {nowButton}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=275.bundle.js.map