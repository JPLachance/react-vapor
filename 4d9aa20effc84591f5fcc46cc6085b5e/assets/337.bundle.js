(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1426:function(e,n,t){"use strict";t.r(n),n.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {TestUtils} from '../../../../utils/tests/TestUtils';\r\nimport {DraggableSelectedOption, IDraggableSelectedOptionProps} from '../DraggableSelectedOption';\r\n\r\ndescribe('DraggableSelectedOption', () => {\r\n    const props: Partial<IDraggableSelectedOptionProps> = {\r\n        value: 'test',\r\n        label: '',\r\n        index: 0,\r\n    };\r\n\r\n    describe('<DraggableSelectedOption />', () => {\r\n        const WrappedDraggableSelectedOption = TestUtils.wrapComponentInDnDContext(DraggableSelectedOption);\r\n        let selectedOption: ReactWrapper<IDraggableSelectedOptionProps, any>;\r\n        let dndBackend: any;\r\n        let dndMonitor: any;\r\n\r\n        const getHandlerId = (isSource = true) => {\r\n            const char = isSource ? 'S' : 'T';\r\n            return _.chain(dndMonitor.registry.types)\r\n                .keys()\r\n                .filter((k: string) => k[0] === char)\r\n                .value();\r\n        };\r\n\r\n        const mountOption = (currentProps: Partial<IDraggableSelectedOptionProps> = {}) => {\r\n            selectedOption = mount(<WrappedDraggableSelectedOption {...props} {...currentProps} />);\r\n            const manager = (selectedOption.instance() as any).getManager();\r\n            dndBackend = manager.getBackend();\r\n            dndMonitor = manager.monitor;\r\n        };\r\n\r\n        afterEach(() => {\r\n            dndMonitor.registry.types = {};\r\n        });\r\n\r\n        it('should render the display value in the selectedOption', () => {\r\n            const label: string = 'displayTest';\r\n            mountOption({label});\r\n\r\n            expect(\r\n                selectedOption\r\n                    .find('.selected-option-value')\r\n                    .first()\r\n                    .text()\r\n            ).toBe(label);\r\n        });\r\n\r\n        it('should change the opacity when the element is dragged', () => {\r\n            mountOption();\r\n\r\n            dndBackend.simulateBeginDrag([getHandlerId()[0]]);\r\n            selectedOption.update();\r\n            expect(selectedOption.find('.selected-option-wrapper').prop('style').opacity).toBe(0);\r\n\r\n            dndBackend.simulateEndDrag();\r\n        });\r\n\r\n        it('should not switch elements if they are on the same index', () => {\r\n            const spy = jasmine.createSpy('move');\r\n            mountOption({move: spy});\r\n\r\n            dndBackend.simulateBeginDrag([getHandlerId()[0]]);\r\n            dndBackend.simulateHover([getHandlerId(false)[0]]);\r\n\r\n            expect(spy).not.toHaveBeenCalled();\r\n            dndBackend.simulateEndDrag();\r\n        });\r\n\r\n        it('should reset the label on drop', () => {\r\n            const label = 'H3110 W0R1D';\r\n            mountOption({label});\r\n\r\n            dndBackend.simulateBeginDrag([getHandlerId()[0]]);\r\n            dndBackend.simulateHover([getHandlerId(false)[0]]);\r\n\r\n            expect(dndMonitor.getItem().label).toBe(label);\r\n\r\n            dndBackend.simulateDrop();\r\n            dndBackend.simulateEndDrag();\r\n\r\n            expect(dndMonitor.getItem()).toBe(null);\r\n        });\r\n\r\n        it('should switch elements if they are on different index and the dragged item is above another item', () => {\r\n            const spy = jasmine.createSpy('move');\r\n\r\n            mountOption({move: spy});\r\n\r\n            spyOn(dndMonitor, 'getItem').and.returnValue({index: 5});\r\n            spyOn(dndMonitor, 'getClientOffset').and.returnValue({y: 0});\r\n\r\n            dndBackend.simulateBeginDrag([getHandlerId()[0]]);\r\n            dndBackend.simulateHover([getHandlerId(false)[1]]);\r\n\r\n            expect(spy).toHaveBeenCalledTimes(1);\r\n            dndBackend.simulateEndDrag();\r\n        });\r\n\r\n        it('should not switch elements if they are on different index but the dragged item is above the first item of the list', () => {\r\n            const spy = jasmine.createSpy('move');\r\n\r\n            mountOption({move: spy});\r\n\r\n            spyOn(dndMonitor, 'getItem').and.returnValue({index: 5});\r\n            spyOn(dndMonitor, 'getClientOffset').and.returnValue({y: 30});\r\n            spyOn(Element.prototype, 'getBoundingClientRect').and.returnValue({bottom: 0, top: 50}); // middle is 25\r\n\r\n            dndBackend.simulateBeginDrag([getHandlerId()[0]]);\r\n            dndBackend.simulateHover([getHandlerId(false)[1]]);\r\n\r\n            expect(spy).not.toHaveBeenCalled();\r\n            dndBackend.simulateEndDrag();\r\n        });\r\n\r\n        it('should not switch elements if they are on different index but the dragged item is above the first item of the list', () => {\r\n            const spy = jasmine.createSpy('move');\r\n            const top = 50;\r\n            const bottom = 0;\r\n\r\n            mountOption({move: spy, index: 1});\r\n\r\n            spyOn(dndMonitor, 'getItem').and.returnValue({index: 0});\r\n            spyOn(dndMonitor, 'getClientOffset').and.returnValue({y: (top + bottom) / 2 - 1});\r\n            spyOn(Element.prototype, 'getBoundingClientRect').and.returnValue({bottom, top});\r\n\r\n            dndBackend.simulateBeginDrag([getHandlerId()[0]]);\r\n            dndBackend.simulateHover([getHandlerId(false)[1]]);\r\n\r\n            expect(spy).not.toHaveBeenCalled();\r\n            dndBackend.simulateEndDrag();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=337.bundle.js.map