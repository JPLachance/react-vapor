(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{1494:function(e,t,n){"use strict";n.r(t),t.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {Content, IContentProps} from '../../content/Content';\r\nimport {ISvgProps, Svg} from '../../svg/Svg';\r\nimport {FlatSelectOption, IFlatSelectOptionProps} from '../FlatSelectOption';\r\n\r\ndescribe('FlatSelect', () => {\r\n    describe('<FlatSelectOption />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<FlatSelectOption id={UUID.generate()} option={{content: 'test'}} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<FlatSelectOption />', () => {\r\n        let flatSelect: ReactWrapper<IFlatSelectOptionProps, any>;\r\n        const defaultOption: IContentProps = {content: 'test'};\r\n        const defaultProps: IFlatSelectOptionProps = {\r\n            id: UUID.generate(),\r\n            option: defaultOption,\r\n        };\r\n        const svg: ISvgProps = {\r\n            svgName: 'domain-google',\r\n            svgClass: 'icon',\r\n        };\r\n        const content: IContentProps = {content: () => <Svg {...svg} />, classes: ['mr1']};\r\n\r\n        const renderFlatSelectOption = (props: IFlatSelectOptionProps = defaultProps) => {\r\n            flatSelect = mount(<FlatSelectOption {...props} />, {attachTo: document.getElementById('App')});\r\n        };\r\n\r\n        afterEach(() => {\r\n            flatSelect.detach();\r\n        });\r\n\r\n        it('should call prop onClick when specified on click', () => {\r\n            renderFlatSelectOption();\r\n\r\n            const clickSpy = jasmine.createSpy('onClick');\r\n            const option = flatSelect.find('a');\r\n\r\n            flatSelect.setProps({onClick: clickSpy}).mount();\r\n            option.simulate('click');\r\n\r\n            expect(clickSpy.calls.count()).toBe(1);\r\n        });\r\n\r\n        it('should not have the class selectable if the props selected is true', () => {\r\n            renderFlatSelectOption(\r\n                _.extend({}, defaultProps, {\r\n                    selected: true,\r\n                })\r\n            );\r\n\r\n            const optionElement = flatSelect.find('a');\r\n            expect(optionElement.hasClass('selectable')).toBe(false);\r\n        });\r\n\r\n        it('should have the class selectable if the props selected is false', () => {\r\n            renderFlatSelectOption(\r\n                _.extend({}, defaultProps, {\r\n                    selected: false,\r\n                })\r\n            );\r\n\r\n            const optionElement = flatSelect.find('a');\r\n            expect(optionElement.hasClass('selectable')).toBe(true);\r\n        });\r\n\r\n        it('should have 1 <Content/> if only default props are set', () => {\r\n            renderFlatSelectOption(defaultProps);\r\n\r\n            expect(flatSelect.find(Content).length).toBe(1);\r\n        });\r\n\r\n        it('should have 2 <Content/> if a prop prepend is set', () => {\r\n            renderFlatSelectOption(\r\n                _.extend({}, defaultProps, {\r\n                    prepend: content,\r\n                })\r\n            );\r\n\r\n            expect(flatSelect.find(Content).length).toBe(2);\r\n        });\r\n\r\n        it('should have 2 <Content/> if a prop append is set', () => {\r\n            renderFlatSelectOption(\r\n                _.extend({}, defaultProps, {\r\n                    append: content,\r\n                })\r\n            );\r\n\r\n            expect(flatSelect.find(Content).length).toBe(2);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=400.bundle.js.map