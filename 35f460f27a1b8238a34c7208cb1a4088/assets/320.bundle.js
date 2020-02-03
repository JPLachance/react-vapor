(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{1427:function(r,o,n){"use strict";n.r(o),o.default="import {shallowWithState} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Drop} from '../Drop';\r\nimport {dropWithDropdown} from '../hoc/DropWithDropdown';\r\n\r\ndescribe('DropWithDropdown', () => {\r\n    describe('<DropWithDropdown />', () => {\r\n        const DropWithDropdown = _.compose(dropWithDropdown())(Drop);\r\n\r\n        const defaultButton: React.ReactNode = <div className={'onclick'}></div>;\r\n\r\n        it('should mount without errors', () => {\r\n            expect(() => {\r\n                shallowWithState(<DropWithDropdown id={'test'} renderOpenButton={() => defaultButton} />, {}).dive();\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should unmount without errors', () => {\r\n            const wrapper = shallowWithState(\r\n                <DropWithDropdown id={'test'} renderOpenButton={() => defaultButton} />,\r\n                {}\r\n            ).dive();\r\n            expect(() => {\r\n                wrapper.unmount();\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=320.bundle.js.map