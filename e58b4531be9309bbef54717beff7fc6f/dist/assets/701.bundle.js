(window.webpackJsonp=window.webpackJsonp||[]).push([[701],{1783:function(e,r,t){"use strict";t.r(r),r.default="import {createSelector} from 'reselect';\nimport * as _ from 'underscore';\nimport {IReactVaporState} from '../../ReactVapor';\nimport {ISliderState} from './SliderReducers';\n\nconst getSlider = (state: IReactVaporState, props: {id: string}): ISliderState =>\n    _.findWhere(state.sliders, {id: props.id});\n\nconst getSliderValue = createSelector(getSlider, (slider: ISliderState): number => slider?.value);\n\nexport const SliderSelectors = {\n    getSliderValue,\n};\n"}}]);
//# sourceMappingURL=701.bundle.js.map