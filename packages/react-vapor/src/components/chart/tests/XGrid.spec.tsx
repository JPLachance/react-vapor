import {shallow} from 'enzyme';
import * as React from 'react';

import {XGrid} from '../XGrid';
import {XYChartContextMock} from './XYChartContextMock';

describe('<XGrid />', () => {
    it('should not throw with the default context', () => {
        expect(() => {
            shallow(<XGrid />);
            shallow(<XGrid padding={10} />);
            shallow(<XGrid padding={30} color="red" />);
        }).not.toThrow();
    });

    it('should not throw with a custom context', () => {
        jest.spyOn(React, 'useContext').mockReturnValue(XYChartContextMock);

        expect(() => {
            shallow(<XGrid />);
            shallow(<XGrid padding={10} />);
            shallow(<XGrid padding={30} color="red" />);
        }).not.toThrow();
    });

    it('should render a line', () => {
        jest.spyOn(React, 'useContext').mockReturnValue(XYChartContextMock);

        const component = shallow(<XGrid />);

        expect(component.find('line').exists()).toBe(true);
    });
});
