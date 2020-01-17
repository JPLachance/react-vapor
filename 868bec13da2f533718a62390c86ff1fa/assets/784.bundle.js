(window.webpackJsonp=window.webpackJsonp||[]).push([[784],{1872:function(e,r,t){"use strict";t.r(r),r.default="import {helpers, seed} from 'faker/locale/en';\r\nimport * as moment from 'moment';\r\nimport * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';\r\nimport {DateUtils} from '../../../utils/DateUtils';\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {SELECTION_BOXES_LONG} from '../../datePicker/examples/DatePickerExamplesCommon';\r\nimport {TableHeaderWithSort} from '../TableHeaderWithSort';\r\nimport {TableHOC} from '../TableHOC';\r\nimport {TableRowConnected} from '../TableRowConnected';\r\nimport {tableWithActions} from '../TableWithActions';\r\nimport {tableWithDatePicker} from '../TableWithDatePicker';\r\nimport {tableWithFilter} from '../TableWithFilter';\r\nimport {tableWithPagination} from '../TableWithPagination';\r\nimport {tableWithPredicate} from '../TableWithPredicate';\r\nimport {tableWithSort} from '../TableWithSort';\r\n\r\nexport interface IExampleRowData {\r\n    city: string;\r\n    email: string;\r\n    username: string;\r\n    dateOfBirth: Date;\r\n    id: string;\r\n}\r\n\r\nexport type TableWithActionsType = React.FunctionComponent<ReturnType<typeof mapStateToProps>>;\r\n\r\nexport const TableHOCExamples: ExampleComponent = () => <TableWithActionsAndDataFiltering />;\r\n\r\n// https://github.com/marak/Faker.js/\r\nexport const generateDataWithFacker = (length: number) =>\r\n    _.map(_.range(length), (i: number) => {\r\n        seed(i + 1);\r\n        const fakedData = helpers.contextualCard();\r\n        return {\r\n            city: fakedData.address.city,\r\n            email: fakedData.email,\r\n            username: fakedData.username,\r\n            dateOfBirth: fakedData.dob,\r\n            id: UUID.generate(),\r\n        };\r\n    });\r\nconst twoHundredRowsOfData = generateDataWithFacker(200);\r\n\r\n// start-print\r\n\r\nconst rowActions = [\r\n    {\r\n        primary: true,\r\n        icon: 'edit',\r\n        name: 'edit',\r\n        enabled: true,\r\n        trigger: () => alert('trigger on action'),\r\n        callOnDoubleClick: true,\r\n    },\r\n    {primary: false, icon: 'view', name: 'view', enabled: true},\r\n    {primary: false, icon: 'copy', name: 'copy', enabled: true},\r\n    {\r\n        primary: false,\r\n        icon: 'delete',\r\n        name: 'delete',\r\n        enabled: true,\r\n        unrepeatable: true,\r\n        requiresConfirmation: {\r\n            confirmLabel: 'wanna do it ?',\r\n            confirmType: 'danger',\r\n            buttonLabels: {\r\n                confirm: 'Confirm',\r\n                cancel: 'Cancel',\r\n            },\r\n        },\r\n    },\r\n];\r\n\r\nconst renderHeader = (tableId: string) => (\r\n    <thead>\r\n        <tr>\r\n            <TableHeaderWithSort id=\"city\" tableId={tableId}>\r\n                City\r\n            </TableHeaderWithSort>\r\n            <TableHeaderWithSort id=\"email\" tableId={tableId}>\r\n                Email\r\n            </TableHeaderWithSort>\r\n            <TableHeaderWithSort id=\"username\" tableId={tableId}>\r\n                Username\r\n            </TableHeaderWithSort>\r\n            <th>Date of birth</th>\r\n        </tr>\r\n    </thead>\r\n);\r\n\r\nexport const generateTableRow = (allData: IExampleRowData[], tableId: string) =>\r\n    allData.map((data: IExampleRowData) => (\r\n        <TableRowConnected id={data.id} tableId={tableId} key={data.id} actions={rowActions}>\r\n            <td key=\"city\">{data.city}</td>\r\n            <td key=\"email\">{data.email.toLowerCase()}</td>\r\n            <td key=\"username\">{data.username.toLowerCase()}</td>\r\n            <td key=\"date-of-birth\">{data.dateOfBirth.toLocaleDateString()}</td>\r\n        </TableRowConnected>\r\n    ));\r\n\r\nconst tableDatePickerConfig = () => ({\r\n    datesSelectionBoxes: SELECTION_BOXES_LONG,\r\n    matchDates: (data: IExampleRowData, lowerLimit: Date, upperLimit?: Date) =>\r\n        _.isUndefined(upperLimit) || (lowerLimit <= data.dateOfBirth && data.dateOfBirth <= upperLimit),\r\n    years: [...DateUtils.getPreviousYears(100), DateUtils.currentYear.toString()],\r\n    initialDateRange: [\r\n        moment()\r\n            .subtract(75, 'years')\r\n            .toDate(),\r\n        moment().toDate(),\r\n    ],\r\n});\r\n\r\nconst matchPredicate = (predicate: string, rowData: IExampleRowData) => {\r\n    const matchCity = predicate === rowData.city;\r\n    const matchEmail = predicate === rowData.email;\r\n    return !predicate || matchCity || matchEmail;\r\n};\r\n\r\nconst sort = (key: keyof IExampleRowData, isAsc: boolean, a: IExampleRowData, b: IExampleRowData) => {\r\n    if (key) {\r\n        if (a[key] instanceof Date) {\r\n            const dateCompare = (a[key] as any) - (b[key] as any);\r\n            return isAsc ? dateCompare : -1 * dateCompare;\r\n        }\r\n        const compare = (a[key] as string).toLowerCase().localeCompare((b[key] as string).toLowerCase());\r\n\r\n        return isAsc ? compare : -1 * compare;\r\n    }\r\n    return 0;\r\n};\r\n\r\nconst predicateSetup = {\r\n    id: 'firstPredicate',\r\n    prepend: <span className=\"mr1 text-medium-grey\">prepend:</span>,\r\n    values: [\r\n        {displayValue: 'All', value: '', selected: true},\r\n        {displayValue: twoHundredRowsOfData[2].city, value: twoHundredRowsOfData[2].city},\r\n        {displayValue: twoHundredRowsOfData[1].email, value: twoHundredRowsOfData[1].email},\r\n    ],\r\n};\r\n\r\nconst mapStateToProps = () => ({\r\n    data: twoHundredRowsOfData,\r\n});\r\n\r\nconst TableWithActionsAndDataFilteringDisconnected: TableWithActionsType = ({data}) => {\r\n    const tableId = 'TableWithActionsAndDataFiltering';\r\n\r\n    return (\r\n        <TableWithActionsAndDataFilteringComposed\r\n            id={tableId}\r\n            className=\"table\"\r\n            data={data}\r\n            renderBody={(Alldata: IExampleRowData[]) => generateTableRow(Alldata, tableId)}\r\n            tableHeader={renderHeader(tableId)}\r\n            showBorderTop\r\n        />\r\n    );\r\n};\r\n\r\nconst TableWithActionsAndDataFilteringComposed = _.compose(\r\n    tableWithPredicate({\r\n        ...predicateSetup,\r\n        matchPredicate,\r\n    }),\r\n    tableWithFilter(), // using the default matchfilter\r\n    tableWithSort({sort}),\r\n    tableWithDatePicker(...(tableDatePickerConfig as any)),\r\n    tableWithPagination({perPageNumbers: [3, 5, 10]}),\r\n    tableWithActions()\r\n)(TableHOC) as typeof TableHOC;\r\n\r\nconst TableWithActionsAndDataFiltering = connect(mapStateToProps)(TableWithActionsAndDataFilteringDisconnected);\r\n"}}]);
//# sourceMappingURL=784.bundle.js.map