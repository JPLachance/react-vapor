(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1631:function(t,e,r){"use strict";r.r(e),e.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {IMultiStepBarProps, IStep, MultiStepBar, MultiStepState} from '../MultiStepBar';\r\n\r\ndescribe('<MultiStepBar />', () => {\r\n    const multiStepBarBackgroundContainerSelector = '.multi-step-bar-backdrop-container';\r\n    const multiStepBarContainerSelector = '.multi-step-bar-container';\r\n    const multiStepBarDoneSelector = '.multi-step-bar-done';\r\n    const multiStepBarWarningSelector = '.multi-step-bar-warning';\r\n    const multiStepBarErrorSelector = '.multi-step-bar-error';\r\n    const multiStepBarDoingSelector = '.multi-step-bar-doing';\r\n    const multiStepBarToDoSelector = '.multi-step-bar-to-do';\r\n    const eachPossibleStepSelectors = [\r\n        multiStepBarDoingSelector,\r\n        multiStepBarWarningSelector,\r\n        multiStepBarErrorSelector,\r\n        multiStepBarDoingSelector,\r\n        multiStepBarToDoSelector,\r\n    ];\r\n    const defaultSteps: IStep[] = [\r\n        {state: MultiStepState.Done},\r\n        {state: MultiStepState.Warning},\r\n        {state: MultiStepState.Error},\r\n        {state: MultiStepState.Doing},\r\n        {state: MultiStepState.ToDo},\r\n    ];\r\n    const stepsWithText: IStep[] = defaultSteps.map((step, i) => ({...step, text: `Step ${i}`}));\r\n    const testProps: IMultiStepBarProps = {steps: defaultSteps};\r\n\r\n    it('should render without error with mandatory props', () => {\r\n        expect(() => shallow(<MultiStepBar {...testProps} />)).not.toThrow();\r\n    });\r\n\r\n    it('should render without error with mandatory props and className as array of string', () => {\r\n        expect(() => shallow(<MultiStepBar {...testProps} className={['some', 'classes']} />)).not.toThrow();\r\n    });\r\n\r\n    it('should render without error with mandatory props and className as string', () => {\r\n        expect(() => shallow(<MultiStepBar {...testProps} className=\"some classes\" />)).not.toThrow();\r\n    });\r\n\r\n    it('should render without error with a steps with a tooltip', () => {\r\n        expect(() =>\r\n            shallow(<MultiStepBar steps={[{state: MultiStepState.Doing, tooltip: {title: 'Some Tooltip'}}]} />)\r\n        ).not.toThrow();\r\n    });\r\n\r\n    describe('MultiStepBar Content', () => {\r\n        describe('with simple states', () => {\r\n            const multiStepBar = shallow(<MultiStepBar {...testProps} />);\r\n\r\n            it('should render one step per state in the backdrop', () => {\r\n                eachPossibleStepSelectors.forEach((state) => {\r\n                    expect(\r\n                        multiStepBar.find(`${multiStepBarBackgroundContainerSelector} ${multiStepBarDoneSelector}`)\r\n                            .length\r\n                    ).toBe(1);\r\n                });\r\n            });\r\n\r\n            it('should render with extra classes on the container if passed in props as array', () => {\r\n                const testClasses = ['container', 'classes', 'wonderful'];\r\n                const multiStepBarWithClasses = shallow(<MultiStepBar {...testProps} className={testClasses} />);\r\n\r\n                testClasses.forEach((testClass: string) => {\r\n                    expect(multiStepBarWithClasses.find(multiStepBarContainerSelector).hasClass(testClass)).toBe(true);\r\n                });\r\n            });\r\n\r\n            it('should render with extra classes on the container if passed in props as string', () => {\r\n                const testClasses = 'container classes wonderful';\r\n                const multiStepBarWithClasses = shallow(<MultiStepBar {...testProps} className={testClasses} />);\r\n\r\n                testClasses.split(' ').forEach((testClass: string) => {\r\n                    expect(multiStepBarWithClasses.find(multiStepBarContainerSelector).hasClass(testClass)).toBe(true);\r\n                });\r\n            });\r\n        });\r\n\r\n        describe('with states with the text attribute', () => {\r\n            const multiStepBar = shallow(<MultiStepBar {...testProps} steps={stepsWithText} />);\r\n\r\n            it('should render one step per state in the backdrop and in the content container', () => {\r\n                eachPossibleStepSelectors.forEach((state) => {\r\n                    expect(\r\n                        multiStepBar.find(`${multiStepBarBackgroundContainerSelector} ${multiStepBarDoneSelector}`)\r\n                            .length\r\n                    ).toBe(1);\r\n                    expect(\r\n                        multiStepBar.find(`${multiStepBarContainerSelector} ${multiStepBarDoneSelector}`).length\r\n                    ).toBe(1);\r\n                });\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=536.bundle.js.map