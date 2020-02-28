(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{1414:function(n,t,r){"use strict";r.r(t),t.default="import {\r\n    DomPositionCalculator,\r\n    DropPodPosition,\r\n    IBoundingLimit,\r\n    IDomPositionCalculatorReturn,\r\n    IDropUIPosition,\r\n} from '../DomPositionCalculator';\r\n\r\ndescribe('DomPositionCalculator', () => {\r\n    let validator: (\r\n        buttonOffset: ClientRect | DOMRect,\r\n        dropOffset: ClientRect | DOMRect,\r\n        boundingLimit: IBoundingLimit,\r\n        lastPosition: IDropUIPosition\r\n    ) => IDomPositionCalculatorReturn;\r\n\r\n    const defaultLastPosition = {position: '', orientation: ''};\r\n\r\n    describe('bottom', () => {\r\n        beforeEach(() => {\r\n            validator = DomPositionCalculator[DropPodPosition.bottom];\r\n        });\r\n\r\n        it('should return an empty style object if drop target position is bigger than the max Y bounding box', () => {\r\n            expect(\r\n                validator({bottom: 100} as any, {height: 10} as any, {maxY: 90} as any, defaultLastPosition)\r\n            ).toEqual({});\r\n        });\r\n\r\n        it('should return button offset bottom and left position if the drop can render on bottom with left orientation', () => {\r\n            expect(\r\n                validator(\r\n                    {bottom: 100, left: 100} as any,\r\n                    {height: 10, width: 10} as any,\r\n                    {maxY: 200, maxX: 200} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toEqual({\r\n                top: 100,\r\n                left: 100,\r\n            });\r\n        });\r\n\r\n        it('should return button offset top and right - width position if the drop can render on bottom with right orientation', () => {\r\n            expect(\r\n                validator(\r\n                    {bottom: 100, left: 100, right: 110, top: 90, width: 10, height: 10} as any,\r\n                    {height: 10, width: 10} as any,\r\n                    {maxY: 200, maxX: 100, minX: 10} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toEqual({\r\n                top: 100,\r\n                left: 100,\r\n            });\r\n        });\r\n\r\n        it('should return no style if the drop do not have space in X to render inside the bounding box', () => {\r\n            expect(\r\n                validator(\r\n                    {bottom: 100, left: 100, right: 110, top: 90, width: 10, height: 10} as any,\r\n                    {height: 10, width: 1000} as any,\r\n                    {maxY: 200, maxX: 100, minX: 10} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toBeUndefined();\r\n        });\r\n    });\r\n\r\n    describe('top', () => {\r\n        beforeEach(() => {\r\n            validator = DomPositionCalculator[DropPodPosition.top];\r\n        });\r\n\r\n        it('should return no style object if drop target position is smaller than the min Y bounding box', () => {\r\n            expect(\r\n                validator({top: 50} as any, {height: 100} as any, {minY: 0} as any, defaultLastPosition).style\r\n            ).toBeUndefined();\r\n        });\r\n\r\n        it('should return the button position left if the drop can render on top with left orientation', () => {\r\n            expect(\r\n                validator(\r\n                    {top: 100, left: 100} as any,\r\n                    {height: 10, width: 10} as any,\r\n                    {minY: 0, maxX: 200} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toEqual({\r\n                top: 90,\r\n                left: 100,\r\n            });\r\n        });\r\n\r\n        it('should return the button position right if the drop can render on top with right orientation', () => {\r\n            expect(\r\n                validator(\r\n                    {bottom: 100, left: 100, right: 110, top: 90, width: 10, height: 10} as any,\r\n                    {height: 10, width: 10} as any,\r\n                    {maxY: 200, maxX: 100, minX: 10, minY: 10} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toEqual({\r\n                top: 80,\r\n                left: 100,\r\n            });\r\n        });\r\n\r\n        it('should return no style if the drop do not have space in X to render inside the bounding box', () => {\r\n            expect(\r\n                validator(\r\n                    {bottom: 100, left: 100, right: 110, top: 90, width: 10, height: 10} as any,\r\n                    {height: 10, width: 1000} as any,\r\n                    {maxY: 200, maxX: 100, minY: 0, minX: 10} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toBeUndefined();\r\n        });\r\n    });\r\n\r\n    describe('left', () => {\r\n        beforeEach(() => {\r\n            validator = DomPositionCalculator[DropPodPosition.left];\r\n        });\r\n\r\n        it('should return no style object if drop target position is smaller than the min X bounding box', () => {\r\n            expect(\r\n                validator({left: 50} as any, {width: 100} as any, {minY: 0} as any, defaultLastPosition).style\r\n            ).toBeUndefined();\r\n        });\r\n\r\n        it('should return the button position top if the drop can render on left with top orientation', () => {\r\n            expect(\r\n                validator(\r\n                    {left: 100, top: 100} as any,\r\n                    {height: 10, width: 10} as any,\r\n                    {maxY: 200, maxX: 200, minY: 0, minX: 0} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toEqual({\r\n                top: 100,\r\n                left: 90,\r\n            });\r\n        });\r\n\r\n        it('should return the button position bottom if the drop can render on left with bottom orientation', () => {\r\n            expect(\r\n                validator(\r\n                    {left: 100, top: 100, bottom: 120} as any,\r\n                    {height: 10, width: 10} as any,\r\n                    {maxY: 110, maxX: 100, minY: 0, minX: 10} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toEqual({\r\n                top: 110,\r\n                left: 90,\r\n            });\r\n        });\r\n\r\n        it('should return no style if the drop do not have space in Y to render inside the bounding box', () => {\r\n            expect(\r\n                validator(\r\n                    {left: 100, top: 100} as any,\r\n                    {height: 20, width: 20} as any,\r\n                    {maxY: 110, maxX: 200, minY: 100, minX: 0} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toBeUndefined();\r\n        });\r\n    });\r\n\r\n    describe('right', () => {\r\n        beforeEach(() => {\r\n            validator = DomPositionCalculator[DropPodPosition.right];\r\n        });\r\n\r\n        it('should return no style object if drop target position is bigger than the max X bounding box', () => {\r\n            expect(\r\n                validator({right: 90} as any, {width: 100} as any, {maxX: 100} as any, defaultLastPosition).style\r\n            ).toBeUndefined();\r\n        });\r\n\r\n        it('should return the button position top if the drop can render on right with top orientation', () => {\r\n            expect(\r\n                validator(\r\n                    {right: 100, top: 100} as any,\r\n                    {height: 10, width: 10} as any,\r\n                    {maxY: 200, maxX: 200, minY: 0, minX: 0} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toEqual({\r\n                top: 100,\r\n                left: 100,\r\n            });\r\n        });\r\n\r\n        it('should return the button position bottom if the drop can render on left with bottom orientation', () => {\r\n            expect(\r\n                validator(\r\n                    {left: 100, top: 100, bottom: 150, right: 120} as any,\r\n                    {height: 50, width: 20} as any,\r\n                    {maxY: 110, maxX: 200, minY: 0, minX: 10} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toEqual({\r\n                top: 100,\r\n                left: 120,\r\n            });\r\n        });\r\n\r\n        it('should return no style if the drop do not have space in Y to render inside the bounding box', () => {\r\n            expect(\r\n                validator(\r\n                    {left: 100, right: 90, top: 100} as any,\r\n                    {height: 20, width: 20} as any,\r\n                    {maxY: 110, maxX: 200, minY: 100, minX: 0} as any,\r\n                    defaultLastPosition\r\n                ).style\r\n            ).toBeUndefined();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=318.bundle.js.map