(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{1450:function(e,r,n){"use strict";n.r(r),r.default="// tslint:disable-next-line:no-unused-variable\r\nimport {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {UUID} from '../../../../utils/UUID';\r\nimport {IDropdownSearchProps} from '../../DropdownSearch';\r\nimport {MultiSelectDropdownSearch} from '../MultiSelectDropdownSearch';\r\n\r\ndescribe('MultiSelectDropdownSearch', () => {\r\n    const id: string = UUID.generate();\r\n    const options = [{value: 'test a'}, {value: 'test b'}, {value: 'test c'}];\r\n\r\n    const props: IDropdownSearchProps = {\r\n        id,\r\n        options,\r\n        modMenu: false,\r\n        filterPlaceholder: 'fill me',\r\n        maxWidth: 400,\r\n        width: 300,\r\n        hasFilterSuggestionBoxWidthFixed: true,\r\n        isDisabled: false,\r\n        isOpened: false,\r\n        filterText: '',\r\n        noResultText: 'no result',\r\n    };\r\n\r\n    describe('<MultiSelectDropdownSearch />', () => {\r\n        let multiSelectDropdownSearch: ReactWrapper<IDropdownSearchProps, any>;\r\n\r\n        const renderMultiSelectDropdownSearch = (currentProps?: IDropdownSearchProps) => {\r\n            multiSelectDropdownSearch = mount(<MultiSelectDropdownSearch {...currentProps} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        };\r\n\r\n        beforeEach(() => {\r\n            renderMultiSelectDropdownSearch(props);\r\n        });\r\n\r\n        afterEach(() => {\r\n            multiSelectDropdownSearch.detach();\r\n        });\r\n\r\n        describe('render', () => {\r\n            it('should call custom option click function on mousedown when the value is not present in the selected options', () => {\r\n                const filterText: string = 'customValue';\r\n                const onCustomOptionClick = jasmine.createSpy('onCustomOptionClick');\r\n                multiSelectDropdownSearch.setProps({\r\n                    filterText,\r\n                    onCustomOptionClick,\r\n                    isOpened: true,\r\n                });\r\n\r\n                multiSelectDropdownSearch.find('li span').simulate('mouseDown');\r\n\r\n                expect(onCustomOptionClick).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should render a \"Create new option\" label for the custom value if it is not present in the selected options', () => {\r\n                const filterText: string = 'customValue';\r\n                multiSelectDropdownSearch.setProps({\r\n                    filterText,\r\n                    isOpened: true,\r\n                });\r\n\r\n                expect(multiSelectDropdownSearch.find('li span').text()).toEqual(`Create option for \"${filterText}\"`);\r\n            });\r\n\r\n            it('should render a \"No Option\" label if the filterText is a value present in the selectedOptions', () => {\r\n                const filterText: string = 'selectedValue';\r\n                multiSelectDropdownSearch.setProps({\r\n                    filterText,\r\n                    isOpened: true,\r\n                    options: [...options, {value: filterText, selected: true, custom: true}],\r\n                });\r\n\r\n                expect(multiSelectDropdownSearch.find('li span').text()).toEqual(\r\n                    multiSelectDropdownSearch.props().noResultText\r\n                );\r\n            });\r\n\r\n            it('should call onKeyDownFilterBox props on key down in input', () => {\r\n                const onKeyDownFilterBox = jasmine.createSpy('onKeyDownFilterBox');\r\n\r\n                multiSelectDropdownSearch.setProps({\r\n                    onKeyDownFilterBox,\r\n                });\r\n\r\n                multiSelectDropdownSearch.find('input').simulate('keyDown');\r\n\r\n                expect(onKeyDownFilterBox).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onBlur props on blur in input', () => {\r\n                const onBlur = jasmine.createSpy('onBlur');\r\n\r\n                multiSelectDropdownSearch.setProps({\r\n                    onBlur,\r\n                });\r\n\r\n                multiSelectDropdownSearch.find('input').simulate('blur');\r\n\r\n                expect(onBlur).toHaveBeenCalledTimes(1);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=343.bundle.js.map