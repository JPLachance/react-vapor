(window.webpackJsonp=window.webpackJsonp||[]).push([[728],{1827:function(e,n,d){"use strict";d.r(n),n.default="import {mount, ReactWrapper, ShallowWrapper} from 'enzyme';\nimport {shallowWithStore} from 'enzyme-redux';\nimport {Range} from 'rc-slider';\nimport * as React from 'react';\nimport {act} from 'react-dom/test-utils';\nimport {Provider} from 'react-redux';\n\nimport {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';\nimport {MiddleSlider} from '../MiddleSlider';\n\ndescribe('<MiddleSlider/>', () => {\n    let store: ReactVaporMockStore;\n    const middleSliderRequiredProps = {\n        id: 'SOME-ID',\n        max: 100,\n        min: -100,\n    };\n\n    beforeEach(() => {\n        store = getStoreMock({\n            sliders: [],\n        });\n    });\n\n    afterEach(() => {\n        middleSlider?.unmount();\n        mountedSlider?.unmount();\n    });\n\n    let middleSlider: ShallowWrapper;\n    let mountedSlider: ReactWrapper;\n\n    const shallowedMiddleSlider = () =>\n        shallowWithStore(\n            <MiddleSlider\n                {...middleSliderRequiredProps}\n                onChange={(value) => value}\n                customTooltip={() => <span>customTooltip</span>}\n                hasTooltip\n                marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}\n                step={5}\n                initialValue={20}\n                enabled\n            />,\n            store\n        );\n    it('should mount and unmount without error', () => {\n        expect(() => {\n            shallowedMiddleSlider();\n            shallowedMiddleSlider().unmount();\n        }).not.toThrow();\n    });\n\n    describe('passed props', () => {\n        it('should mount with its props', () => {\n            const expectedProps = {\n                ...middleSliderRequiredProps,\n                customTooltip: jasmine.any(Function),\n                setOutputValue: jasmine.any(Function),\n                onChange: jasmine.any(Function),\n                hasTooltip: true,\n                marks: {0: '-2000', 33: '2000', 17: '0', 100: '10,000'},\n                step: 5,\n                enabled: true,\n                initialValue: 20,\n            };\n            middleSlider = shallowedMiddleSlider();\n            expect(middleSlider.props()).toEqual(expectedProps);\n        });\n\n        it('should render a track it with its marks', () => {\n            middleSlider = shallowedMiddleSlider()\n                .dive()\n                .dive();\n            const children: any = middleSlider.prop('children');\n            const marks = children[2].props.marks;\n            expect(marks).toEqual({0: '-2000', 33: '2000', 17: '0', 100: '10,000'});\n        });\n\n        it('should apply the step prop', () => {\n            middleSlider = shallowedMiddleSlider()\n                .dive()\n                .dive();\n            const children: any = middleSlider.prop('children');\n            const step = children[2].props.step;\n            expect(step).toEqual(5);\n        });\n\n        it('should set the handle hasTooltip prop to true when slider hasTooltip his passed', () => {\n            middleSlider = shallowedMiddleSlider()\n                .dive()\n                .dive();\n            const children: any = middleSlider.prop('children');\n            const firstHandle = children[3][0];\n            expect(firstHandle.props.handleCustomProps.hasTooltip).toBeTruthy();\n        });\n\n        it('should set the handle hasTooltip prop to false when slider hasTooltip his passed', () => {\n            middleSlider = shallowWithStore(\n                <MiddleSlider\n                    {...middleSliderRequiredProps}\n                    onChange={(value) => value}\n                    initialValue={20}\n                    customTooltip={() => <span>customTooltip</span>}\n                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}\n                    step={5}\n                    enabled\n                />,\n                store\n            )\n                .dive()\n                .dive();\n            const children: any = middleSlider.prop('children');\n            const firstHandle = children[3][0];\n            expect(firstHandle.props.handleCustomProps.hasTooltip).toBeUndefined();\n        });\n\n        it('should not pass the disabled props to the handle if the enable prop is set to true', () => {\n            middleSlider = shallowedMiddleSlider()\n                .dive()\n                .dive();\n            const children: any = middleSlider.prop('children');\n            const firstHandle = children[3][0];\n            expect(firstHandle.props.handleProps.disabled).toBeFalsy();\n        });\n\n        it('should pass the disabled props to the handle if the enable prop is set to false', () => {\n            middleSlider = shallowWithStore(\n                <MiddleSlider\n                    {...middleSliderRequiredProps}\n                    onChange={(value) => value}\n                    initialValue={20}\n                    customTooltip={() => <span>customTooltip</span>}\n                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}\n                    step={5}\n                    enabled={false}\n                />,\n                store\n            )\n                .dive()\n                .dive();\n\n            const children: any = middleSlider.prop('children');\n            const firstHandle = children[3][0];\n            expect(firstHandle.props.handleProps.disabled).toBeTruthy();\n        });\n    });\n\n    describe('state change', () => {\n        it('should set de default value to [50, 50] and should update the MiddleSlider Range value on change', () => {\n            const expectedSliderValueInLowRange = [20, 50];\n            const expectedSliderValueInHighRange = [50, 80];\n\n            act(() => {\n                mountedSlider = mount(\n                    <Provider store={store}>\n                        <MiddleSlider {...middleSliderRequiredProps} enabled />\n                    </Provider>\n                );\n            });\n\n            mountedSlider.find(Range).prop('onChange')(expectedSliderValueInLowRange);\n            mountedSlider.update();\n            expect(mountedSlider.find(Range).prop('value')).toEqual(expectedSliderValueInLowRange);\n\n            mountedSlider.find(Range).prop('onChange')(expectedSliderValueInHighRange);\n            mountedSlider.update();\n            expect(mountedSlider.find(Range).prop('value')).toEqual(expectedSliderValueInHighRange);\n        });\n\n        it('should set a different Range value than the default [50, 50] if an initialValue is passed in the props', () => {\n            const defaultSliderValue = [50, 50];\n            act(() => {\n                mountedSlider = mount(\n                    <Provider store={store}>\n                        <MiddleSlider\n                            {...middleSliderRequiredProps}\n                            onChange={(value) => value}\n                            initialValue={20}\n                            customTooltip={() => <span>customTooltip</span>}\n                            marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}\n                            step={5}\n                            enabled\n                        />\n                    </Provider>\n                );\n            });\n            mountedSlider.update();\n            expect(mountedSlider.find(Range).prop('value')).not.toEqual(defaultSliderValue);\n        });\n\n        it('should call the onChange callBack function on state change', () => {\n            const callBackSpy = jasmine.createSpy('🥔');\n            act(() => {\n                mountedSlider = mount(\n                    <Provider store={store}>\n                        <MiddleSlider\n                            {...middleSliderRequiredProps}\n                            onChange={callBackSpy}\n                            customTooltip={() => <span>customTooltip</span>}\n                            marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}\n                            step={5}\n                            enabled\n                        />\n                    </Provider>\n                );\n            });\n            mountedSlider.find(Range).prop('onChange')([40, 50]);\n            mountedSlider.update();\n            expect(callBackSpy).toHaveBeenCalledTimes(2);\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=728.bundle.js.map