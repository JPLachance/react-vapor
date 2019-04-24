import * as d3 from 'd3';
import * as _ from 'underscore';

import {XYChartContextProps} from '../XYChart';

export const XYChartContextMock: XYChartContextProps = {
    width: 10,
    height: 50,
    xDomain: [0, 5],
    yDomain: [100, 0],
    series: [
        {
            label: 'First',
            data: [
                {x: 0, y: 3},
                {x: 1, y: 3},
                {x: 2, y: 6},
                {x: 3, y: 2},
                {x: 4, y: 12},
                {x: 5, y: 8},
            ],
        },
        {
            label: 'Second',
            data: [
                {x: 0, y: 5},
                {x: 1, y: 4},
                {x: 2, y: 0},
                {x: 3, y: 6},
                {x: 4, y: 7},
                {x: 5, y: 4},
            ],
        },
    ],
    colorPattern: ['blue', 'green', 'yellow'],
    color: (serie: number, pattern: string[]) => pattern[serie],
    xScale: d3.scale.linear().domain([0, 5]).range([0, 10]),
    yScale: d3.scale.linear().domain([100, 0]).range([50, 0]),
    xFormat: _.identity,
    yFormat: _.identity,
    xTicksCount: 5,
    yTicksCount: 10,
};
