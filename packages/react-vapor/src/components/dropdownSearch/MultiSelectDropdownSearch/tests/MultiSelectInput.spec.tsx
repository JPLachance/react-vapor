import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';

import {IDropdownOption} from '../../DropdownSearch';
import {IMultiselectInputProps, MultiselectInput} from '../MultiSelectInput';

describe('MultiSelectInput', () => {
    const selectedOptions: IDropdownOption[] = [
        {value: 'test 1'},
        {value: 'test 2'},
        {value: 'test 3'},
        {value: 'test 4'},
    ];
    const props: IMultiselectInputProps = {
        selectedOptions: [],
        filterText: '',
    };

    describe('<SelectedOption />', () => {
        let multiSelectInput: ReactWrapper<IMultiselectInputProps, any>;

        const renderMultiSelectInput = (curentProps?: IMultiselectInputProps) => {
            multiSelectInput = mount(<MultiselectInput {...curentProps} />);
        };

        beforeEach(() => {
            renderMultiSelectInput(props);
        });

        afterEach(() => {
            multiSelectInput.unmount(); // <-- new
        });

        describe('render', () => {
            it('should render placeholder text', () => {
                const filterPlaceholder = 'placeholdertext';
                multiSelectInput.setProps({filterPlaceholder});

                expect(multiSelectInput.find(`input[placeholder="${filterPlaceholder}"]`)).toHaveLength(1);
            });

            it('should render filter text', () => {
                const filterText = 'text';
                multiSelectInput.setProps({filterText});

                expect(multiSelectInput.find(`input[value="${filterText}"]`)).toHaveLength(1);
            });

            it('should not render the remove-all button if there are no options given', () => {
                expect(multiSelectInput.find('.remove-all-selected-options')).toHaveLength(0);
            });

            it('should render all the supplied selected options', () => {
                multiSelectInput.setProps({selectedOptions});

                expect(multiSelectInput.find('SelectedOption')).toHaveLength(selectedOptions.length);
            });

            it('should not render any selected options if none provided', () => {
                expect(multiSelectInput.find('SelectedOption')).toHaveLength(0);
            });

            it('should not render the remove-all button if there are no selected options', () => {
                expect(multiSelectInput.find('.remove-all-selected-options')).toHaveLength(0);
            });

            it('should render the remove-all button if there are selected options', () => {
                multiSelectInput.setProps({selectedOptions});

                expect(multiSelectInput.find('.remove-all-selected-options')).toHaveLength(1);
            });
        });

        describe('handle functions', () => {
            it('should handle on remove all', () => {
                const onRemoveAll = jest.fn();

                multiSelectInput.setProps({
                    selectedOptions,
                    onRemoveAll: onRemoveAll,
                });

                multiSelectInput.find('.remove-all-selected-options').simulate('click');

                expect(onRemoveAll).toHaveBeenCalled();
            });

            it('should handle on input change', () => {
                const onInputChange = jest.fn();

                multiSelectInput.setProps({
                    onFilterTextChange: onInputChange,
                });

                multiSelectInput.find('input').simulate('change', {target: {value: 'input value changed'}});

                expect(onInputChange).toHaveBeenCalled();
            });

            it('should handle on blur', () => {
                const onBlur = jest.fn();

                multiSelectInput.setProps({
                    onBlur: onBlur,
                });

                multiSelectInput.find('input').simulate('blur');

                expect(onBlur).toHaveBeenCalled();
            });

            it('should handle on focus', () => {
                const onFocus = jest.fn();

                multiSelectInput.setProps({
                    onFocus: onFocus,
                });

                multiSelectInput.find('input').simulate('focus');

                expect(onFocus).toHaveBeenCalled();
            });

            it('should handle on key down', () => {
                const onKeyDown = jest.fn();

                multiSelectInput.setProps({
                    onKeyDownFilterBox: onKeyDown,
                });

                multiSelectInput.find('input').simulate('keyDown');

                expect(onKeyDown).toHaveBeenCalled();
            });
        });
    });
});
