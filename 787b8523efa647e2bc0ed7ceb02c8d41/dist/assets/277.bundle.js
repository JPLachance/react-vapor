(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{1373:function(e,r,n){"use strict";n.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport * as s from 'underscore.string';\r\n\r\nimport {IReduxStatePossibleProps} from '../../utils/ReduxUtils';\r\nimport {Calendar, ICalendarProps, ICalendarSelectionRule} from '../calendar/Calendar';\r\nimport {CalendarConnected} from '../calendar/CalendarConnected';\r\nimport {IOption} from '../optionPicker/Option';\r\nimport {IOptionPickerProps, OptionPicker} from '../optionPicker/OptionPicker';\r\nimport {OptionPickerConnected} from '../optionPicker/OptionPickerConnected';\r\nimport {DatePickerDateRange} from './DatePickerConstants';\r\nimport {DatesSelection, IDatesSelectionProps, IRangeLimit} from './DatesSelection';\r\nimport {DatesSelectionConnected} from './DatesSelectionConnected';\r\n\r\nexport interface IDatesSelectionBox {\r\n    title: string;\r\n    quickOptions?: IOption[];\r\n    isRange?: boolean;\r\n    rangeLimit?: IRangeLimit;\r\n    withTime?: boolean;\r\n    hasSetToNowButton?: boolean;\r\n    color?: string;\r\n}\r\n\r\nexport interface IDatePickerBoxOwnProps extends React.ClassAttributes<DatePickerBox> {\r\n    id?: string;\r\n    datesSelectionBoxes: IDatesSelectionBox[];\r\n    setToNowTooltip?: string;\r\n    isClearable?: boolean;\r\n    clearLabel?: string;\r\n    initiallyUnselected?: boolean;\r\n    simple?: boolean;\r\n    footer?: JSX.Element;\r\n    onClear?: () => void;\r\n}\r\n\r\nexport interface IDatePickerBoxStateProps extends IReduxStatePossibleProps {}\r\n\r\nexport interface IDatePickerBoxChildrenProps {\r\n    months?: string[];\r\n    startingMonth?: number;\r\n    years?: string[];\r\n    startingYear?: number;\r\n    days?: string[];\r\n    startingDay?: number;\r\n    selectionRules?: ICalendarSelectionRule[];\r\n    lowerLimitPlaceholder?: string;\r\n    upperLimitPlaceholder?: string;\r\n    isLinkedToDateRange?: boolean;\r\n    initialDateRange?: DatePickerDateRange;\r\n}\r\n\r\nexport const DEFAULT_CLEAR_DATE_LABEL = 'Clear';\r\n\r\nexport interface IDatePickerBoxProps\r\n    extends IDatePickerBoxOwnProps,\r\n        IDatePickerBoxStateProps,\r\n        IDatePickerBoxChildrenProps {}\r\n\r\nexport class DatePickerBox extends React.Component<IDatePickerBoxProps, any> {\r\n    static defaultProps: Partial<IDatePickerBoxProps> = {\r\n        clearLabel: DEFAULT_CLEAR_DATE_LABEL,\r\n    };\r\n\r\n    static getCalendarId = (datePickerId: string) => `calendar-${datePickerId}`;\r\n\r\n    private id: string;\r\n\r\n    componentWillMount() {\r\n        this.id = DatePickerBox.getCalendarId(this.props.id);\r\n    }\r\n\r\n    render() {\r\n        const calendarProps: ICalendarProps = {\r\n            id: this.id,\r\n            months: this.props.months,\r\n            startingMonth: this.props.startingMonth,\r\n            years: this.props.years,\r\n            startingYear: this.props.startingYear,\r\n            days: this.props.days,\r\n            startingDay: this.props.startingDay,\r\n            selectionRules: this.props.selectionRules,\r\n            isLinkedToDateRange: this.props.isLinkedToDateRange,\r\n            simple: this.props.simple,\r\n        };\r\n\r\n        const calendar: JSX.Element = this.props.withReduxState ? (\r\n            <CalendarConnected {...calendarProps} />\r\n        ) : (\r\n            <Calendar />\r\n        );\r\n\r\n        const datePickerClasses: string = classNames('date-picker-box', 'flex', 'flex-column', {\r\n            simple: this.props.simple,\r\n        });\r\n\r\n        const inside: JSX.Element = this.props.simple ? (\r\n            calendar\r\n        ) : (\r\n            <div className=\"flex\">\r\n                {calendar}\r\n                {this.getdatePickerRightPart()}\r\n            </div>\r\n        );\r\n\r\n        return (\r\n            <div className={datePickerClasses}>\r\n                {inside}\r\n                {this.props.footer}\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private getdatePickerRightPart(): JSX.Element {\r\n        return (\r\n            <div className=\"date-selection mod-width-50 mod-border-left mod-small-content p2\">\r\n                {this.getdateSelectionBoxes()}\r\n                {this.getClearOptions()}\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private getdateSelectionBoxes(): JSX.Element[] {\r\n        return _.map(this.props.datesSelectionBoxes, (datesSelectionBox: IDatesSelectionBox) => {\r\n            const boxId: string = `${this.props.id}-${s.slugify(datesSelectionBox.title)}`;\r\n\r\n            const quickOptionsProps: IOptionPickerProps = {\r\n                id: boxId,\r\n                options: datesSelectionBox.quickOptions,\r\n            };\r\n            const optionPicker: JSX.Element = this.props.withReduxState ? (\r\n                <OptionPickerConnected {...quickOptionsProps} />\r\n            ) : (\r\n                <OptionPicker {...quickOptionsProps} />\r\n            );\r\n\r\n            const datesSelectionProps: IDatesSelectionProps = {\r\n                id: boxId,\r\n                withTime: datesSelectionBox.withTime,\r\n                hasSetToNowButton: datesSelectionBox.hasSetToNowButton,\r\n                setToNowTooltip: this.props.setToNowTooltip,\r\n                isRange: datesSelectionBox.isRange,\r\n                isClearable: this.props.isClearable,\r\n                rangeLimit: datesSelectionBox.rangeLimit,\r\n                color: datesSelectionBox.color,\r\n                calendarId: this.id,\r\n                lowerLimitPlaceholder: this.props.lowerLimitPlaceholder,\r\n                upperLimitPlaceholder: this.props.upperLimitPlaceholder,\r\n                initiallyUnselected: this.props.initiallyUnselected,\r\n                initialDateRange: this.props.initialDateRange,\r\n            };\r\n            const dateSelection: JSX.Element = this.props.withReduxState ? (\r\n                <DatesSelectionConnected {...datesSelectionProps} />\r\n            ) : (\r\n                <DatesSelection {...datesSelectionProps} />\r\n            );\r\n\r\n            return (\r\n                <div key={boxId}>\r\n                    <h3 className=\"bold text-medium-blue\">{datesSelectionBox.title}</h3>\r\n                    {optionPicker}\r\n                    {dateSelection}\r\n                </div>\r\n            );\r\n        });\r\n    }\r\n\r\n    private getClearOptions(): JSX.Element {\r\n        return this.props.isClearable ? (\r\n            <button type=\"button\" onClick={() => this.props.onClear()} className=\"clear-selection-button mt2\">\r\n                {this.props.clearLabel}\r\n            </button>\r\n        ) : null;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=277.bundle.js.map