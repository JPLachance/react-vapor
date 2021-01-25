import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {SelectedOption} from '../../dropdownSearch/MultiSelectDropdownSearch/SelectedOption';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {Tooltip} from '../../tooltip/Tooltip';
import {IMultiSelectProps, MultiSelectConnected} from '../MultiSelectConnected';
import {ISelectOwnProps, SelectConnected} from '../SelectConnected';

describe('Select', () => {
    describe('<MultiSelectConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let multiSelect: ReactWrapper<ISelectOwnProps, void>;
        let store: Store<IReactVaporState>;

        const id: string = 'list-box-connected';

        const mountMultiSelect = (items: IItemBoxProps[] = [], props: Partial<IMultiSelectProps> = {}) => {
            wrapper = mount(
                <Provider store={store}>
                    <MultiSelectConnected id={id} items={items} {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            multiSelect = wrapper.find(SelectConnected).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
        });

        describe('mount and unmount', () => {
            it('should not throw on mount', () => {
                expect(() => mountMultiSelect()).not.toThrow();
            });

            it('should not throw on unmount', () => {
                mountMultiSelect();

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should add the list box to the state when mounted', () => {
                expect(store.getState().selects.length).toBe(0);

                mountMultiSelect();

                expect(store.getState().selects.length).toBe(1);
            });

            it('should remove the list box from the state when the component unmount', () => {
                mountMultiSelect();

                expect(store.getState().selects.length).toBe(1);
                wrapper.unmount();

                expect(store.getState().selects.length).toBe(0);
            });
        });

        it('should allow a custom placeholder', () => {
            const expectedPlaceholder = 'select thingy';

            mountMultiSelect([{value: 'a'}, {value: 'b'}], {placeholder: expectedPlaceholder});

            expect(multiSelect.html()).toContain(expectedPlaceholder);
        });

        it('should contain a the selected value', () => {
            const selectedValue = 'dis 1';
            mountMultiSelect([{value: 'a'}, {value: selectedValue, selected: true}]);

            expect(multiSelect.html()).toContain(selectedValue);
        });

        it('should contain the display value when the selected value has one', () => {
            const selectedDisplayValue = 'dis 2';
            mountMultiSelect([{value: 'a'}, {value: 'dis 1', displayValue: selectedDisplayValue, selected: true}]);

            expect(multiSelect.html()).toContain(selectedDisplayValue);
        });

        it('should contain a different tooltip value when the selected value has a selectedTooltip', () => {
            const selectedTooltip = {title: 'Bananas!'};
            mountMultiSelect([{value: 'a'}, {value: 'Five', selectedTooltip, selected: true}]);

            expect(multiSelect.find(SelectedOption).find(Tooltip).prop('title')).toBe('Bananas!');
        });

        it('should contain a default tooltip value if no hoverTooltipValue is provided', () => {
            mountMultiSelect([{value: 'a'}, {value: 'Five', selected: true}]);

            expect(multiSelect.find(SelectedOption).prop('label')).toBe('Five');
        });

        it('should contain a SelectedOption for every selected item', () => {
            const firstSelected = 'dis 1';
            const secondSelected = 'dis two';

            mountMultiSelect([
                {value: 'a'},
                {value: firstSelected, selected: true},
                {value: secondSelected, selected: true},
            ]);

            expect(multiSelect.find(SelectedOption).length).toBe(2);
            expect(multiSelect.find(SelectedOption).at(0).props().value).toBe(firstSelected);
            expect(multiSelect.find(SelectedOption).at(1).props().value).toBe(secondSelected);
        });

        it('should contain a SelectedOption for a selected item', () => {
            const itemValue = 'b';
            mountMultiSelect([{value: itemValue, selected: true}]);

            expect(multiSelect.find(SelectedOption).props().value).toBe(itemValue);
        });

        it('should disable the dropdown if there is no options', () => {
            mountMultiSelect();

            expect(multiSelect.find('.multiselect-add').prop('disabled')).toBe(true);
        });

        it('should set the toggleClasses prop if any on the dropdown-toggle', () => {
            mountMultiSelect([], {
                toggleClasses: 'tuna-can',
            });

            expect(multiSelect.find('.dropdown-toggle').hasClass('tuna-can')).toBe(true);
        });

        it('should not disable the dropdown if one of the options is not selected', () => {
            mountMultiSelect([
                {value: 'a', selected: false},
                {value: 'b', selected: true},
            ]);

            expect(multiSelect.find('.multiselect-add').prop('disabled')).toBeFalsy();
        });

        it('should disable the dropdown when every option is selected', () => {
            mountMultiSelect([
                {value: 'a', selected: true},
                {value: 'b', selected: true},
            ]);

            expect(multiSelect.find('.multiselect-add').prop('disabled')).toBe(true);
        });

        it('should remove the selected item when a X on SelectedOption is clicked', () => {
            const firstSelected = 'dis 1';
            const secondSelected = 'dis two';

            mountMultiSelect([
                {value: 'a'},
                {value: firstSelected, selected: true},
                {value: secondSelected, selected: true},
            ]);

            let state = _.findWhere(store.getState().listBoxes, {id});

            expect(state.selected).toEqual([firstSelected, secondSelected]);

            multiSelect.find(SelectedOption).at(0).find('.remove-option').simulate('click');

            state = _.findWhere(store.getState().listBoxes, {id});

            expect(state.selected).toEqual([secondSelected]);
        });

        it('should remove all selected items when the clear button is clicked', () => {
            const firstSelected = 'dis 1';
            const secondSelected = 'dis two';

            mountMultiSelect([
                {value: 'a'},
                {value: firstSelected, selected: true},
                {value: secondSelected, selected: true},
            ]);

            let state = _.findWhere(store.getState().listBoxes, {id});

            expect(state.selected).toEqual([firstSelected, secondSelected]);

            multiSelect.find('.remove-all-selected-options').simulate('click');

            state = _.findWhere(store.getState().listBoxes, {id});

            expect(state.selected).toEqual([]);
        });

        it('should not render a X icon when readOnly is true', () => {
            const firstSelected = 'dis 1';
            const secondSelected = 'dis two';

            mountMultiSelect(
                [{value: 'a'}, {value: firstSelected, selected: true}, {value: secondSelected, selected: true}],
                {readOnly: true}
            );

            expect(multiSelect.find(SelectedOption).at(0).find('.remove-option').length).toBe(0);
            expect(multiSelect.find(SelectedOption).at(1).find('.remove-option').length).toBe(0);
        });

        it('should not render a X icon that remove all selected options when readOnly is true', () => {
            const firstSelected = 'dis 1';
            const secondSelected = 'dis two';

            mountMultiSelect(
                [{value: 'a'}, {value: firstSelected, selected: true}, {value: secondSelected, selected: true}],
                {readOnly: true}
            );

            expect(multiSelect.find('.remove-all-selected-options').length).toBe(0);
        });

        it('should not render the dropdown if readOnly is true', () => {
            mountMultiSelect(
                [
                    {value: 'a', selected: true},
                    {value: 'b', selected: true},
                ],
                {readOnly: true}
            );

            expect(multiSelect.find('.multiselect-add').length).toBe(0);
        });
    });
});
