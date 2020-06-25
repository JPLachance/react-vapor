import {ReactWrapper} from 'enzyme';
import {mountWithStore} from 'enzyme-redux';
import * as React from 'react';

import {SlideY} from '../../../animations/SlideY';
import {IReactVaporState} from '../../../ReactVapor';
import {getStoreMock} from '../../../utils/tests/TestUtils';
import {setCollapsibleExpanded} from '../CollapsibleActions';
import {CollapsibleConnected, CollapsibleOwnProps} from '../CollapsibleConnected';
import {CollapsibleToggle} from '../CollapsibleToggle';
import {collapsiblePossibleProps} from './CollapsibleTestCommon.spec';

describe('<CollapsibleConnected />', () => {
    let store: ReturnType<typeof getStoreMock>;
    let wrapper: ReactWrapper<CollapsibleOwnProps>;
    const collapsibleProps = collapsiblePossibleProps[0];

    const mountComponentWithProps = (props: Partial<CollapsibleOwnProps> = {}, expanded: boolean = true) => {
        store = getStoreMock({
            collapsibles: [{id: collapsibleProps.id, expanded}],
        } as IReactVaporState);
        wrapper = mountWithStore(
            <CollapsibleConnected {...collapsibleProps} {...props}>
                dummy children
            </CollapsibleConnected>,
            store
        );
    };

    it('should mount and unmount without error', () => {
        expect(() => {
            mountComponentWithProps();
            wrapper.unmount();
        }).not.toThrow();
    });

    describe('once mounted', () => {
        describe('Expansion/Toggling logic', () => {
            it('should toggle the expanded prop to false on click of the collapsible header button', () => {
                mountComponentWithProps();

                wrapper.find(`.${collapsibleProps.headerClasses}`).simulate('click');

                expect(store.getActions()).toContain(setCollapsibleExpanded(collapsibleProps.id, false));
            });

            it('should toggle the expanded prop to true on click of the collapsible header button', () => {
                mountComponentWithProps({}, false);

                wrapper.find(`.${collapsibleProps.headerClasses}`).simulate('click');

                expect(store.getActions()).toContain(setCollapsibleExpanded(collapsibleProps.id, true));
            });

            it('should not toggle the expanded prop on click of the collapsible header button if disabled', () => {
                mountComponentWithProps({disabled: true});

                wrapper.find(`.${collapsibleProps.headerClasses}`).simulate('click');

                expect(store.getActions()).not.toContain(setCollapsibleExpanded(collapsibleProps.id, true));
            });

            it('should set the expended from the state to SlideY', () => {
                mountComponentWithProps({}, true);
                expect(wrapper.find(SlideY).props().in).toBe(true);
            });

            it('should set the expended to the slideY', () => {
                mountComponentWithProps({}, false);
                expect(wrapper.find(SlideY).props().in).toBe(false);
            });

            it('should render header content', () => {
                mountComponentWithProps({headerContent: <div className="test">test</div>});
                expect(wrapper.find('.test').length).toBe(1);
            });

            it('should render the CollapsibleToggle if no custom collapsible icon defined', () => {
                mountComponentWithProps();

                expect(wrapper.find(CollapsibleToggle).length).toBe(1);
            });

            it('should not render the CollapsibleToggle if a custom collapsible icon is defined', () => {
                mountComponentWithProps({collapsibleToggleIcon: <div className="test">test</div>});

                expect(wrapper.find(CollapsibleToggle).length).toBe(0);
            });

            it('should set the class disabled on collapsible if disabled', () => {
                mountComponentWithProps({disabled: true});

                expect(wrapper.find(CollapsibleToggle).props().svgClassName).toContain('disabled');
            });
        });
    });
});
