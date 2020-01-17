(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1260:function(e,r,n){"use strict";n.r(r),r.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Badge, DEFAULT_BADGE_CLASSNAME, IBadgeProps} from '../Badge';\r\n\r\ndescribe('Badge', () => {\r\n    let badge: ReactWrapper<IBadgeProps, any>;\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<Badge label=\"badge\" />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<Badge />', () => {\r\n        const mountWithProps = (props: Partial<IBadgeProps>) => {\r\n            badge = mount(<Badge {..._.defaults(props, {label: 'badge'})} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        };\r\n\r\n        it('should render badge with the label specified as prop', () => {\r\n            mountWithProps({\r\n                label: 'somelabel',\r\n            });\r\n\r\n            expect(badge.text()).toEqual('somelabel');\r\n        });\r\n\r\n        it('should render the badge with the default badge class', () => {\r\n            mountWithProps({});\r\n\r\n            expect(badge.find(`.${DEFAULT_BADGE_CLASSNAME}`).length).toBe(1);\r\n        });\r\n\r\n        it('should render the badge with the extra classes specified as props', () => {\r\n            mountWithProps({\r\n                extraClasses: ['bg-blue', 'bold'],\r\n            });\r\n\r\n            expect(badge.find('.bg-blue').length).toBe(1);\r\n            expect(badge.find('.bold').length).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=158.bundle.js.map