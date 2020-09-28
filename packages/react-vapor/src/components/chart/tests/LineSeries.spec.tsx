import {shallow} from 'enzyme';
import * as React from 'react';

import {LineSeries} from '../LineSeries';
import {XYChartContextMock} from './XYChartContextMock';

describe('<LineSeries />', () => {
    it('should not throw', () => {
        expect(() => {
            shallow(<LineSeries />);
            shallow(<LineSeries interpolate="monotone" strokeWith={2} />);
        }).not.toThrow();
    });

    it('should render a <g>', () => {
        const component = shallow(<LineSeries />);

        expect(component.find('g').exists()).toBe(true);
    });

    it('should render a path for every serie', () => {
        jest.spyOn(React, 'useContext').mockReturnValue(XYChartContextMock);

        const {series} = XYChartContextMock;
        const component = shallow(<LineSeries />);

        expect(component.find('path').length).toBe(series.length);
    });
});
