(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{1370:function(n,r,e){"use strict";e.r(r),r.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {\r\n    CornerRibbon,\r\n    DEFAULT_CORNER_RIBBON_CLASSNAME,\r\n    ICornerRibbonProps,\r\n    PlacementX,\r\n    PlacementY,\r\n} from '../CornerRibbon';\r\n\r\ndescribe('CornerRibbon', () => {\r\n    let cornerRibbon: ReactWrapper<ICornerRibbonProps, any>;\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<CornerRibbon />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<CornerRibbon />', () => {\r\n        const mountWithProps = (props: Partial<ICornerRibbonProps>) => {\r\n            cornerRibbon = mount(<CornerRibbon {...props} />, {attachTo: document.getElementById('App')});\r\n        };\r\n\r\n        it('should have the default corner-ribon class', () => {\r\n            mountWithProps({});\r\n\r\n            expect(cornerRibbon.find(`.${DEFAULT_CORNER_RIBBON_CLASSNAME}`).length).toBe(1);\r\n        });\r\n\r\n        it('should render in the top right of its ribbon-container by default', () => {\r\n            mountWithProps({});\r\n\r\n            expect(cornerRibbon.find(`.${PlacementY.Top}`).length).toBe(1);\r\n            expect(cornerRibbon.find(`.${PlacementX.Right}`).length).toBe(1);\r\n        });\r\n\r\n        it('should render the label specified as prop if any', () => {\r\n            mountWithProps({\r\n                label: 'someRibbon',\r\n            });\r\n\r\n            expect(cornerRibbon.text()).toEqual('someRibbon');\r\n        });\r\n\r\n        it('should render the ribbon in x axle position specified as prop if any', () => {\r\n            mountWithProps({\r\n                placementX: PlacementX.Left,\r\n            });\r\n\r\n            expect(cornerRibbon.find(`.${PlacementX.Left}`).length).toBe(1);\r\n\r\n            cornerRibbon.setProps({\r\n                placementX: PlacementX.Right,\r\n            });\r\n\r\n            expect(cornerRibbon.find(`.${PlacementX.Right}`).length).toBe(1);\r\n        });\r\n\r\n        it('should render the ribbon in y axle position specified as prop if any', () => {\r\n            mountWithProps({\r\n                placementY: PlacementY.Bottom,\r\n            });\r\n\r\n            expect(cornerRibbon.find(`.${PlacementY.Bottom}`).length).toBe(1);\r\n\r\n            cornerRibbon.setProps({\r\n                placementY: PlacementY.Top,\r\n            });\r\n\r\n            expect(cornerRibbon.find(`.${PlacementY.Top}`).length).toBe(1);\r\n        });\r\n\r\n        it('should render the ribbon with extra classes if specified as prop', () => {\r\n            mountWithProps({\r\n                extraClasses: ['bold', 'bg-orange'],\r\n            });\r\n\r\n            expect(cornerRibbon.find('.bold').length).toBe(1);\r\n            expect(cornerRibbon.find('.bg-orange').length).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=274.bundle.js.map