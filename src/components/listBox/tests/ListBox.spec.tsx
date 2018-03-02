import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {ItemBox} from '../../itemBox/ItemBox';
import {IListBoxProps, ListBox} from '../ListBox';

describe('ListBox', () => {

    let listBoxComponent: ReactWrapper<IListBoxProps, any>;

    const defaultProps: IListBoxProps = {
        items: [
            {value: 'test'},
            {value: 'test1'},
            {value: 'test2'},
            {value: 'test3'},
            {value: 'test4'},
            {value: 'test5'},
            {value: 'test6'},
            {value: 'test7'},
        ],
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<ListBox {...defaultProps} />);
        }).not.toThrow();
    });

    describe('<BoxItem /> with default props', () => {

        beforeEach(() => {
            listBoxComponent = mount(
                <ListBox {...defaultProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        it('should render with the box-item class', () => {
            expect(listBoxComponent.find(ItemBox).length).toBe(defaultProps.items.length);
        });
    });

    describe('<BoxItem /> with custom props', () => {

        const renderListBox = (props: Partial<IListBoxProps> = {}) => {
            listBoxComponent = mount(
                <ListBox {..._.defaults(props, defaultProps)} />,
                {attachTo: document.getElementById('App')},
            );
        };

        it('should render items with events on onOptionClick', () => {
            const onOptionClick: jasmine.Spy = jasmine.createSpy('onOptionClick');
            renderListBox({
                onOptionClick,
            });

            (listBoxComponent.find(ItemBox) as any).node.handleOnOptionClick({target: 'target'});
            expect(onOptionClick).toHaveBeenCalled();
        });

        it('should show the no result <BoxItem/> if the items array is empty', () => {
            renderListBox({
                items: [],
            });

            expect(listBoxComponent.find(ItemBox).props().value).toBe(ListBox.defaultProps.noResultItem.value);
        });
    });
});
