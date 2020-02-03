(window.webpackJsonp=window.webpackJsonp||[]).push([[718],{1818:function(e,n,i){"use strict";i.r(n),n.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {Collapsible} from '../../collapsible/Collapsible';\r\nimport {ISideNavigationSectionProps, SideNavigationMenuSection} from '../SideNavigationMenuSection';\r\n\r\ndescribe('SideNavigationMenuSection', () => {\r\n    let section: ShallowWrapper<ISideNavigationSectionProps>;\r\n    const header = {\r\n        title: 'title is comming from the header prop',\r\n        svgName: 'some-name',\r\n        svgClass: 'some-class',\r\n    };\r\n\r\n    afterEach(() => {\r\n        if (section && section.exists()) {\r\n            section.unmount();\r\n        }\r\n    });\r\n\r\n    it('should render and unmount without errors', () => {\r\n        expect(() => {\r\n            section = shallow(<SideNavigationMenuSection />);\r\n            section.unmount();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should setup the section header using the \"header\" prop', () => {\r\n        section = shallow(<SideNavigationMenuSection header={header} />);\r\n        expect(section.find('SideNavigationHeader').exists()).toBe(true);\r\n\r\n        const sectionHeader = section.find('SideNavigationHeader');\r\n        expect(sectionHeader.children().contains(header.title)).toBe(true);\r\n        expect(sectionHeader.prop('svgName')).toBe(header.svgName);\r\n        expect(sectionHeader.prop('svgClass')).toBe(header.svgClass);\r\n    });\r\n\r\n    it('should setup the section header directly using the props', () => {\r\n        section = shallow(<SideNavigationMenuSection {...header} />);\r\n        expect(section.find('SideNavigationHeader').exists()).toBe(true);\r\n\r\n        const sectionHeader = section.find('SideNavigationHeader');\r\n        expect(sectionHeader.children().contains(header.title)).toBe(true);\r\n        expect(sectionHeader.prop('svgName')).toBe(header.svgName);\r\n        expect(sectionHeader.prop('svgClass')).toBe(header.svgClass);\r\n    });\r\n\r\n    it('should hide children when expandable prop is true and expanded prop is false.', () => {\r\n        section = shallow(<SideNavigationMenuSection {...header} expandable />);\r\n\r\n        expect(section.find(Collapsible).prop('expanded')).toBe(false);\r\n    });\r\n\r\n    it('should not hide children when expandable prop is true and expanded prop is true.', () => {\r\n        section = shallow(<SideNavigationMenuSection {...header} expandable expanded />);\r\n\r\n        expect(section.find(Collapsible).prop('expanded')).toBe(true);\r\n    });\r\n\r\n    it('should call onClick prop when clicking on the header', () => {\r\n        const onClickSpy = jasmine.createSpy('click');\r\n        section = shallow(<SideNavigationMenuSection {...header} onClick={onClickSpy} />);\r\n        section.find('SideNavigationHeader').prop('onClick')(null);\r\n\r\n        expect(onClickSpy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should render the navigation items inside the .navigation-menu-section-items class', () => {\r\n        section = shallow(\r\n            <SideNavigationMenuSection {...header}>\r\n                <div>Item 1</div>\r\n                <div>Item 2</div>\r\n                <div>Item 3</div>\r\n            </SideNavigationMenuSection>\r\n        );\r\n\r\n        expect(section.find('.navigation-menu-section-items').children().length).toBe(3);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=718.bundle.js.map