(window.webpackJsonp=window.webpackJsonp||[]).push([[799],{1885:function(e,t,r){"use strict";r.r(t),t.default="import {shallowWithState} from 'enzyme-redux';\r\nimport * as moment from 'moment';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {ITableHOCProps, TableHOC} from '../TableHOC';\r\nimport {FilterableTableComponent, tableWithDatePicker} from '../TableWithDatePicker';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableWithDatePicker', () => {\r\n        const TableWithDatePicker = _.compose(tableWithDatePicker())(TableHOC);\r\n\r\n        const defaultProps: ITableHOCProps = {\r\n            id: 'a',\r\n            data: _.map(_.range(10), (i) =>\r\n                moment()\r\n                    .subtract(i, 'm')\r\n                    .toDate()\r\n            ),\r\n            renderBody: _.identity,\r\n        };\r\n\r\n        const getStateWithDatePicker = (lowerLimit: Date = null, upperLimit: Date = null) => ({\r\n            datePickers: [\r\n                {id: 'not-this-one'},\r\n                {id: defaultProps.id, appliedLowerLimit: lowerLimit, appliedUpperLimit: upperLimit},\r\n            ],\r\n        });\r\n\r\n        it('should not throw', () => {\r\n            expect(shallowWithState(<TableWithDatePicker id=\"a\" data={[]} renderBody={_.identity} />, {}));\r\n            expect(shallowWithState(<TableWithDatePicker id=\"b\" data={[{value: 'a'}]} renderBody={_.identity} />, {}));\r\n        });\r\n\r\n        it('should render a TableHOC', () => {\r\n            const wrapper = shallowWithState(<TableWithDatePicker {...defaultProps} />, {}).dive();\r\n            expect(wrapper.find(TableHOC).exists()).toBe(true);\r\n        });\r\n\r\n        it('should not filter the rows if no function is sent in the config', () => {\r\n            const wrapper = shallowWithState(\r\n                <TableWithDatePicker {...defaultProps} />,\r\n                getStateWithDatePicker(new Date())\r\n            ).dive();\r\n            const tableData = wrapper.find(TableHOC).prop('data');\r\n\r\n            expect(tableData).toEqual(defaultProps.data);\r\n        });\r\n\r\n        describe('with a matchDates function', () => {\r\n            let matchDatesSpy: jasmine.Spy;\r\n            let TableWithDatePickerAndMatch: FilterableTableComponent;\r\n\r\n            beforeEach(() => {\r\n                matchDatesSpy = jasmine.createSpy('match').and.returnValue(true);\r\n\r\n                TableWithDatePickerAndMatch = _.compose(tableWithDatePicker({matchDates: matchDatesSpy}))(TableHOC);\r\n            });\r\n\r\n            it('should filter call the matchDates function for every rows', () => {\r\n                const lowerLimit = moment()\r\n                    .subtract(10, 'm')\r\n                    .toDate();\r\n\r\n                shallowWithState(\r\n                    <TableWithDatePickerAndMatch {...defaultProps} />,\r\n                    getStateWithDatePicker(lowerLimit)\r\n                ).dive();\r\n                expect(matchDatesSpy).toHaveBeenCalledTimes(defaultProps.data.length);\r\n                _.forEach(defaultProps.data, (value: Date) => {\r\n                    expect(matchDatesSpy).toHaveBeenCalledWith(value, lowerLimit, null);\r\n                });\r\n            });\r\n\r\n            it('should filter call the matchDates function with lower & upper for every rows', () => {\r\n                const lowerLimit = moment()\r\n                    .subtract(10, 'm')\r\n                    .toDate();\r\n                const upperLimit = moment()\r\n                    .subtract(5, 'm')\r\n                    .toDate();\r\n\r\n                shallowWithState(\r\n                    <TableWithDatePickerAndMatch {...defaultProps} />,\r\n                    getStateWithDatePicker(lowerLimit, upperLimit)\r\n                ).dive();\r\n                expect(matchDatesSpy).toHaveBeenCalledTimes(defaultProps.data.length);\r\n                _.forEach(defaultProps.data, (value: Date) => {\r\n                    expect(matchDatesSpy).toHaveBeenCalledWith(value, lowerLimit, upperLimit);\r\n                });\r\n            });\r\n        });\r\n\r\n        describe('when server side', () => {\r\n            const TableWithDatePickerServer = _.compose(withServerSideProcessing, tableWithDatePicker())(TableHOC);\r\n\r\n            it('should not filter out elements if the date picker is server side', () => {\r\n                const wrapper = shallowWithState(\r\n                    <TableWithDatePickerServer {...defaultProps} />,\r\n                    getStateWithDatePicker(new Date())\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                const tableData = wrapper.find(TableHOC).prop('data');\r\n\r\n                expect(tableData).toEqual(defaultProps.data);\r\n            });\r\n\r\n            it('should call onUpdate when the lowerLimit changes', () => {\r\n                const updateSpy = jasmine.createSpy('update');\r\n                const lowerLimit = moment()\r\n                    .subtract(5, 'm')\r\n                    .toDate();\r\n                const wrapper = shallowWithState(\r\n                    <TableWithDatePickerServer {...defaultProps} onUpdate={updateSpy} />,\r\n                    getStateWithDatePicker(lowerLimit)\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                wrapper.setProps({lowerLimit: new Date()});\r\n                wrapper.update();\r\n\r\n                expect(updateSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should call onUpdate when the upperLimit changes', () => {\r\n                const updateSpy = jasmine.createSpy('update');\r\n                const lowerLimit = moment()\r\n                    .subtract(15, 'm')\r\n                    .toDate();\r\n                const upperLimit = moment()\r\n                    .subtract(5, 'm')\r\n                    .toDate();\r\n                const wrapper = shallowWithState(\r\n                    <TableWithDatePickerServer {...defaultProps} onUpdate={updateSpy} />,\r\n                    getStateWithDatePicker(lowerLimit, upperLimit)\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                wrapper.setProps({upperLimit: new Date()});\r\n                wrapper.update();\r\n\r\n                expect(updateSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should not call onUpdate when the date picker does not changes', () => {\r\n                const updateSpy = jasmine.createSpy('update');\r\n                const lowerLimit = moment()\r\n                    .subtract(5, 'm')\r\n                    .toDate();\r\n                const wrapper = shallowWithState(\r\n                    <TableWithDatePickerServer {...defaultProps} onUpdate={updateSpy} />,\r\n                    getStateWithDatePicker(lowerLimit, new Date())\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                wrapper.setProps({ignore: true});\r\n                wrapper.update();\r\n\r\n                expect(updateSpy).not.toHaveBeenCalled();\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=799.bundle.js.map