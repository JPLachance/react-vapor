(window.webpackJsonp=window.webpackJsonp||[]).push([[775],{1863:function(r,e,t){"use strict";t.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {ConfigSupplier, HocUtils} from '../../utils/HocUtils';\r\nimport {ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {IDatePickerDropdownChildrenProps, IDatePickerDropdownOwnProps} from '../datePicker/DatePickerDropdown';\r\nimport {DatePickerDropdownConnected} from '../datePicker/DatePickerDropdownConnected';\r\nimport {DatePickerSelectors} from '../datePicker/DatePickerSelectors';\r\nimport {ITableHOCOwnProps} from './TableHOC';\r\n\r\nexport interface ITableWithDatePickerConfig\r\n    extends WithServerSideProcessingProps,\r\n        Partial<IDatePickerDropdownOwnProps>,\r\n        Partial<IDatePickerDropdownChildrenProps> {\r\n    matchDates?: (data: any, lowerLimit: Date, upperLimit?: Date) => boolean;\r\n}\r\n\r\nexport interface ITableWithDatePickerStateProps {\r\n    lowerLimit: Date;\r\n    upperLimit: Date;\r\n}\r\n\r\nexport interface ITableWithDatePickerDispatchProps {\r\n    onRender: () => void;\r\n}\r\n\r\nexport interface ITableWithDatePickerProps\r\n    extends Partial<ITableWithDatePickerStateProps>,\r\n        Partial<ITableWithDatePickerDispatchProps>,\r\n        ITableHOCOwnProps,\r\n        WithServerSideProcessingProps {}\r\n\r\nconst TableWithFilterPropsToOmit = keys<ITableWithDatePickerStateProps>();\r\n\r\nexport type FilterableTableComponent = React.ComponentClass<ITableWithDatePickerProps>;\r\n\r\nconst defaultMatchDates = () => true;\r\n\r\nexport const tableWithDatePicker = (supplier: ConfigSupplier<ITableWithDatePickerConfig> = {}) => (\r\n    Component: FilterableTableComponent\r\n): FilterableTableComponent => {\r\n    const config = HocUtils.supplyConfig(supplier);\r\n\r\n    const mapStateToProps = (\r\n        state: IReactVaporState,\r\n        ownProps: ITableWithDatePickerProps\r\n    ): ITableWithDatePickerStateProps | ITableHOCOwnProps => {\r\n        const [lowerLimit, upperLimit] = DatePickerSelectors.getDatePickerLimits(state, {id: ownProps.id});\r\n        const matchDates = config.matchDates || defaultMatchDates;\r\n        const filterData = () =>\r\n            lowerLimit\r\n                ? _.filter(ownProps.data, (datum: any) => matchDates(datum, lowerLimit, upperLimit))\r\n                : ownProps.data;\r\n        return {\r\n            lowerLimit,\r\n            upperLimit,\r\n            data: config.isServer || ownProps.isServer ? ownProps.data : ownProps.data && filterData(),\r\n        };\r\n    };\r\n\r\n    @ReduxConnect(mapStateToProps)\r\n    class TableWithDatePicker extends React.Component<ITableWithDatePickerProps> {\r\n        static defaultProps: Partial<ITableWithDatePickerProps> = {\r\n            actions: [],\r\n        };\r\n\r\n        componentDidUpdate(prevProps: ITableWithDatePickerProps) {\r\n            if (prevProps.lowerLimit !== this.props.lowerLimit || prevProps.upperLimit !== this.props.upperLimit) {\r\n                this.props.onUpdate?.();\r\n            }\r\n        }\r\n\r\n        render(): React.ReactNode {\r\n            const datePickerAction = (\r\n                <DatePickerDropdownConnected\r\n                    {...(config as any)}\r\n                    id={this.props.id}\r\n                    key={this.props.id}\r\n                    className={classNames('coveo-table-actions', config.className)}\r\n                    onRight\r\n                />\r\n            );\r\n            const newActions = [...this.props.actions, datePickerAction];\r\n            const newProps = _.omit(this.props, TableWithFilterPropsToOmit);\r\n            return (\r\n                <Component {...newProps} actions={newActions}>\r\n                    {this.props.children}\r\n                </Component>\r\n            );\r\n        }\r\n    }\r\n\r\n    return TableWithDatePicker;\r\n};\r\n"}}]);
//# sourceMappingURL=775.bundle.js.map