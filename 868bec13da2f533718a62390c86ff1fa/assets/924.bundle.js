(window.webpackJsonp=window.webpackJsonp||[]).push([[924],{2010:function(e,t,n){"use strict";n.r(t),t.default="import * as moment from 'moment';\r\nimport {DateUtils} from './DateUtils';\r\n\r\ndescribe('DateUtils', () => {\r\n    describe('getValidDate', () => {\r\n        it('should return a valid formatted date if the format is MMM DD, YYYY, H:mm', () => {\r\n            const date = 'Jan 02, 2010, 22:21';\r\n            expect(DateUtils.getValidDate(date).toString()).toContain('Sat Jan 02 2010 22:21:00 GMT');\r\n        });\r\n\r\n        it('should return the date from now if YYYY-MM-DD HH:mm and YYYY-MM-DD H:mm date format is invalid', () => {\r\n            const date = 'not a date';\r\n            expect(DateUtils.getValidDate(date).toString()).toBe(\r\n                moment()\r\n                    .toDate()\r\n                    .toString()\r\n            );\r\n        });\r\n    });\r\n\r\n    describe('isDifferent', () => {\r\n        it('should return false when passing null and null', () => {\r\n            expect(DateUtils.isDifferent(null, null)).toBe(false);\r\n            expect(DateUtils.isDifferent(null, null, 'minutes')).toBe(false);\r\n            expect(DateUtils.isDifferent(null, null, 'days')).toBe(false);\r\n        });\r\n\r\n        it('should return false when passing undefined and undefined', () => {\r\n            expect(DateUtils.isDifferent(undefined, undefined)).toBe(false);\r\n            expect(DateUtils.isDifferent(undefined, undefined, 'minutes')).toBe(false);\r\n            expect(DateUtils.isDifferent(undefined, undefined, 'days')).toBe(false);\r\n        });\r\n\r\n        it('should return false when passing both empty strings', () => {\r\n            expect(DateUtils.isDifferent('', '')).toBe(false);\r\n            expect(DateUtils.isDifferent('', '', 'minutes')).toBe(false);\r\n            expect(DateUtils.isDifferent('', '', 'days')).toBe(false);\r\n        });\r\n\r\n        it('should return false when passing similar moments for the given granularity', () => {\r\n            const current = moment()\r\n                .startOf('minute')\r\n                .add(10, 'seconds'); // This makes sure that subtracting a second won't change the minute\r\n            expect(DateUtils.isDifferent(moment(current).subtract(1, 'second'), current, 'minute')).toBe(\r\n                false,\r\n                'subtracting a second'\r\n            );\r\n            expect(DateUtils.isDifferent('2018-01-01', '2018-12-31', 'year')).toBe(false, 'year');\r\n        });\r\n\r\n        it('should return true when passing different moments', () => {\r\n            expect(DateUtils.isDifferent(moment(), null)).toBe(true);\r\n            expect(DateUtils.isDifferent(null, moment())).toBe(true);\r\n            expect(DateUtils.isDifferent(moment(), moment().add(1, 'day'))).toBe(true);\r\n            expect(DateUtils.isDifferent(moment().subtract(1, 'second'), moment())).toBe(true);\r\n            expect(DateUtils.isDifferent('2018-01-01', '2018-12-31')).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=924.bundle.js.map