import {mount} from 'enzyme';
import * as React from 'react';

import {ChartContainer} from '../ChartContainer';

describe('<ChartContainer />', () => {
    it('should not throw', () => {
        expect(() => {
            const renderChart = (): any => null;
            const component = mount(<ChartContainer renderChart={renderChart} />);
            component.setProps({renderChart});
            component.unmount();
        }).not.toThrow();
    });

    it('should re-render on window resize', () => {
        jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({width: 10, height: 50} as DOMRect);
        // jest.spyOn(Element.prototype, 'querySelectorAll').mockReturnValue([{style: {}}]); // TODO: fix
        // jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: () => void) => cb()); // TODO: fix

        const renderSpy = jest.fn(() => null);

        const component = mount(<ChartContainer renderChart={renderSpy} />);
        // Need the component to update to get the ref.current
        component.setProps({renderChart: renderSpy});

        renderSpy.mockReset();

        const resizeEvent = document.createEvent('Event');
        resizeEvent.initEvent('resize', true, true);
        window.dispatchEvent(resizeEvent);

        expect(renderSpy).toHaveBeenCalledTimes(1);
    });
});
