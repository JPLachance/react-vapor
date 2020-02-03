(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{1846:function(e,o,t){"use strict";t.r(o),o.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {StickyFooter} from '../StickyFooter';\r\nimport * as styles from '../StickyFooter.scss';\r\n\r\ndescribe('StickyFooter', () => {\r\n    it('should render without error', () => {\r\n        expect(() => shallow(<StickyFooter isOpened={true} />)).not.toThrow();\r\n        expect(() => shallow(<StickyFooter isOpened={false} />)).not.toThrow();\r\n        expect(() => shallow(<StickyFooter className=\"someclass\" isOpened={true} />)).not.toThrow();\r\n        expect(() => shallow(<StickyFooter id=\"oyeah\" isOpened={true} />)).not.toThrow();\r\n    });\r\n\r\n    it('should render with extra classes on container if classes is passed as prop', () => {\r\n        const classes = 'some classes';\r\n        const component = shallow(<StickyFooter className={classes} isOpened={true} />);\r\n        expect(component.find('.some.classes').exists()).toBe(true);\r\n    });\r\n\r\n    it('should render with id if passed as prop', () => {\r\n        const id = 'someid';\r\n        const component = shallow(<StickyFooter id={id} isOpened={true} />);\r\n        expect(component.find(`#${id}`).exists()).toBe(true);\r\n    });\r\n\r\n    it('should render opened class if it is opened', () => {\r\n        const component = shallow(<StickyFooter isOpened={true} />);\r\n        expect(component.find('#StickyFooter').hasClass(styles.stickyFooterOpened)).toBe(true);\r\n    });\r\n\r\n    it('should not render opened class if it is closed', () => {\r\n        const component = shallow(<StickyFooter isOpened={false} />);\r\n        expect(component.find('#StickyFooter').hasClass(styles.stickyFooterOpened)).toBe(false);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=747.bundle.js.map