import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {FACET_TOGGLE_MORE_LABEL, FacetMoreToggle, IFacetMoreToggleProps} from '../FacetMoreToggle';

describe('Facets', () => {
    const basicFacetMoreToggleProps: IFacetMoreToggleProps = {
        facet: 'facetTitle',
    };
    it('should render without errors', () => {
        expect(() => {
            shallow(<FacetMoreToggle {...basicFacetMoreToggleProps} />);
        }).not.toThrow();
    });

    describe('<FacetMoreToggle />', () => {
        let facetMoreToggle: ReactWrapper<IFacetMoreToggleProps, any>;

        beforeEach(() => {
            facetMoreToggle = mount(<FacetMoreToggle {...basicFacetMoreToggleProps} />, {
                attachTo: document.getElementById('App'),
            });
        });

        afterEach(() => {
            facetMoreToggle.unmount(); // <-- new
        });

        it('should get the facet as a prop', () => {
            const facetProp = facetMoreToggle.props().facet;

            expect(facetProp).toBeDefined();
            expect(facetProp).toBe(basicFacetMoreToggleProps.facet);
        });

        it('should display the moreLabel if passed as a prop else use the default label', () => {
            const expectedMoreLabel = 'Show more rows';
            const newFacetMoreToggleProps = _.extend({}, basicFacetMoreToggleProps, {moreLabel: expectedMoreLabel});

            expect(facetMoreToggle.html()).toContain(FACET_TOGGLE_MORE_LABEL);

            facetMoreToggle.setProps(newFacetMoreToggleProps);
            facetMoreToggle.mount();

            expect(facetMoreToggle.html()).not.toContain(FACET_TOGGLE_MORE_LABEL);
            expect(facetMoreToggle.html()).toContain(expectedMoreLabel);
        });

        it('should call onToggleMore on change if prop is set', () => {
            const onToggleMoreSpy = jest.fn();
            const handleOnChangeSpy: jest.SpyInstance = jest.spyOn(facetMoreToggle.instance() as any, 'handleOnChange');
            const newFacetMoreToggleProps = _.extend({}, basicFacetMoreToggleProps, {onToggleMore: onToggleMoreSpy});

            facetMoreToggle.find('input').simulate('change');

            expect(handleOnChangeSpy).toHaveBeenCalled();

            facetMoreToggle = mount(<FacetMoreToggle {...newFacetMoreToggleProps} />, {
                attachTo: document.getElementById('App'),
            });
            const newHandleOnChangeSpy: jest.SpyInstance = jest.spyOn(
                facetMoreToggle.instance() as any,
                'handleOnChange'
            );

            facetMoreToggle.find('input').simulate('change');

            expect(newHandleOnChangeSpy).toHaveBeenCalled();
            expect(onToggleMoreSpy.mock.calls.length).toBe(1);
        });

        it('should stop clicks from propagating their events', () => {
            const generalEventSpy = jest.fn();

            document.addEventListener('click', generalEventSpy);

            (document.getElementsByClassName('facet-more')[0] as HTMLDivElement).click();

            expect(generalEventSpy).not.toHaveBeenCalled();

            document.getElementById('App').click();

            expect(generalEventSpy).toHaveBeenCalled();

            document.removeEventListener('click', generalEventSpy);
        });
    });
});
