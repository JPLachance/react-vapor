import {shallow} from 'enzyme';
import * as React from 'react';

import {BarSeries} from '../BarSeries';
import {ChartUtils} from '../ChartUtils';
import {XYChartContextMock, XYChartOnePointContextMock} from './XYChartContextMock';

describe('<BarSeries />', () => {
    it('should not throw', () => {
        expect(() => {
            shallow(<BarSeries />);
            shallow(<BarSeries barRatio={0.5} />);
        }).not.toThrow();
    });

    it('should render a <g>', () => {
        const component = shallow(<BarSeries />);

        expect(component.find('g').exists()).toBe(true);
    });

    it('should render a rect for every point in every serie', () => {
        jest.spyOn(React, 'useContext').mockReturnValue(XYChartContextMock);

        const {series} = XYChartContextMock;
        const component = shallow(<BarSeries />);

        expect(component.find('rect').length).toBe(ChartUtils.getXValues(series).length * series.length);
    });

    it('should not throw when there is only one point in a serie', () => {
        jest.spyOn(React, 'useContext').mockReturnValue(XYChartOnePointContextMock);

        expect(() => {
            shallow(<BarSeries />);
        }).not.toThrow();
    });
});
