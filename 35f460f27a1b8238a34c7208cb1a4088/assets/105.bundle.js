(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1218:function(e,n,t){"use strict";t.r(n),n.default="import * as ReactModal from 'react-modal';\r\n\r\nimport {Defaults} from './Defaults';\r\n\r\ndescribe('Defaults', () => {\r\n    class DumbClassForCoverage extends Defaults {}\r\n\r\n    describe('APP_ELEMENT', () => {\r\n        it('should call ReactModal.setAppElement', () => {\r\n            const expectedAppElement = '#app-element';\r\n            const setAppElementSpy = spyOn(ReactModal, 'setAppElement');\r\n\r\n            Defaults.APP_ELEMENT = expectedAppElement;\r\n            expect(setAppElementSpy).toHaveBeenCalledTimes(1);\r\n            expect(setAppElementSpy).toHaveBeenCalledWith(expectedAppElement);\r\n        });\r\n\r\n        it('should satisfy coverage', () => {\r\n            new DumbClassForCoverage();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=105.bundle.js.map