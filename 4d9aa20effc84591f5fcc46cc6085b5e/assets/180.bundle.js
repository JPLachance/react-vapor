(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{1273:function(n,t,r){"use strict";r.r(t),t.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Tooltip} from '../../tooltip/Tooltip';\r\nimport {Button, IButtonProps} from '../Button';\r\n\r\ndescribe('Button', () => {\r\n    let buttonComponent: ReactWrapper<IButtonProps, any>;\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<Button enabled={true} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<Button /> with default props', () => {\r\n        beforeEach(() => {\r\n            buttonComponent = mount(<Button enabled={true} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        it('should render the default name', () => {\r\n            expect(buttonComponent.find('button').text()).toEqual('');\r\n        });\r\n\r\n        it('should render the button not primary', () => {\r\n            expect(buttonComponent.find('button').hasClass('mod-primary')).toBe(false);\r\n        });\r\n    });\r\n\r\n    describe('<Button /> with custom props', () => {\r\n        const showButton = (props: Partial<IButtonProps>) => {\r\n            buttonComponent = mount(<Button {..._.defaults(props, {enabled: true})} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        };\r\n\r\n        it('should render the custom name', () => {\r\n            showButton({\r\n                name: 'test',\r\n            });\r\n\r\n            expect(buttonComponent.find('button').text()).toEqual('test');\r\n        });\r\n\r\n        it('should render the button mod primary', () => {\r\n            showButton({\r\n                primary: true,\r\n            });\r\n\r\n            expect(buttonComponent.find('button').hasClass('mod-primary')).toBe(true);\r\n        });\r\n\r\n        it('should render the button mod small', () => {\r\n            showButton({\r\n                small: true,\r\n            });\r\n\r\n            expect(buttonComponent.find('button').hasClass('mod-small')).toBe(true);\r\n        });\r\n\r\n        it('should render the default button disabled with enabled at false', () => {\r\n            showButton({\r\n                enabled: false,\r\n            });\r\n\r\n            expect(buttonComponent.find('button').prop('disabled')).toBe(true);\r\n            expect(buttonComponent.find('button').hasClass('disabled')).toBe(true);\r\n        });\r\n\r\n        it('should call the onClick props on click', () => {\r\n            const spyOnClick = jasmine.createSpy('onClick');\r\n\r\n            showButton({\r\n                onClick: spyOnClick,\r\n            });\r\n            buttonComponent.find('button').simulate('click');\r\n\r\n            expect(spyOnClick).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should add <Tooltip/> if tooltip is defined', () => {\r\n            showButton({\r\n                tooltip: 'tooltip test',\r\n            });\r\n\r\n            expect(buttonComponent.find(Tooltip).length).toBe(1);\r\n        });\r\n\r\n        describe('with the link button', () => {\r\n            const link: string = 'link';\r\n\r\n            it('should render the custom name', () => {\r\n                showButton({\r\n                    name: 'test',\r\n                    link,\r\n                });\r\n\r\n                expect(buttonComponent.find('a').text()).toEqual('test');\r\n            });\r\n\r\n            it('should render the link button disabled with enabled at false', () => {\r\n                showButton({\r\n                    enabled: false,\r\n                    link,\r\n                });\r\n\r\n                expect(buttonComponent.find('a').prop('disabled')).toBe(true);\r\n                expect(buttonComponent.find('a').hasClass('disabled')).toBe(true);\r\n                expect(buttonComponent.find('a').hasClass('text-medium-grey')).toBe(true);\r\n            });\r\n\r\n            it('should not add the text-medium-grey if the button is disabled and primary', () => {\r\n                showButton({\r\n                    enabled: false,\r\n                    primary: true,\r\n                    link,\r\n                });\r\n\r\n                expect(buttonComponent.find('a').prop('disabled')).toBe(true);\r\n                expect(buttonComponent.find('a').hasClass('disabled')).toBe(true);\r\n                expect(buttonComponent.find('a').hasClass('text-medium-grey')).toBe(false);\r\n            });\r\n\r\n            it('should add the link in a href', () => {\r\n                showButton({\r\n                    link,\r\n                });\r\n                expect(buttonComponent.find('a').prop('href')).toEqual(link);\r\n            });\r\n\r\n            it('should have the class btn-container', () => {\r\n                showButton({\r\n                    link,\r\n                });\r\n\r\n                expect(buttonComponent.find('.btn-container').length).toBe(1);\r\n            });\r\n\r\n            it('should add the rel default value', () => {\r\n                showButton({\r\n                    link,\r\n                });\r\n                expect(buttonComponent.find('a').prop('rel')).toEqual('noopener noreferrer');\r\n            });\r\n\r\n            it('should add empty target by default', () => {\r\n                showButton({\r\n                    link,\r\n                });\r\n                expect(buttonComponent.find('a').prop('target')).toEqual('');\r\n            });\r\n\r\n            it('should use the target send in options', () => {\r\n                const target: string = 'target';\r\n                showButton({\r\n                    link,\r\n                    target,\r\n                });\r\n                expect(buttonComponent.find('a').prop('target')).toEqual(target);\r\n            });\r\n\r\n            it('should add <Tooltip/> on link button if tooltip is defined', () => {\r\n                showButton({\r\n                    tooltip: 'tooltip test',\r\n                    link,\r\n                });\r\n\r\n                expect(buttonComponent.find(Tooltip).length).toBe(1);\r\n            });\r\n\r\n            it('should call the onClick props on click', () => {\r\n                const spyOnClick = jasmine.createSpy('onClick');\r\n\r\n                showButton({\r\n                    onClick: spyOnClick,\r\n                    link,\r\n                });\r\n                buttonComponent.find('a').simulate('click');\r\n\r\n                expect(spyOnClick).toHaveBeenCalledTimes(1);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=180.bundle.js.map