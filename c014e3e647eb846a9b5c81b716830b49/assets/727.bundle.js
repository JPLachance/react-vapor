(window.webpackJsonp=window.webpackJsonp||[]).push([[727],{1815:function(r,e,s){"use strict";s.r(e),e.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {IStepProgressBarProps, StepProgressBar} from '../StepProgressBar';\r\n\r\ndescribe('StepProgressBar', () => {\r\n    const stepProgressBarContainerSelector = '.step-progress-bar-container';\r\n    const stepProgressBarSelector = '.step-progress-bar';\r\n    const stepProgressBarDoneSelector = '.step-progress-bar-done';\r\n    const stepProgressBarDoingSelector = '.step-progress-bar-doing';\r\n    const stepProgressBarToDoSelector = '.step-progress-bar-to-do';\r\n    const testProps = {numberOfSteps: 10, currentStep: 5};\r\n\r\n    it('should render without error with multiple scenarios of number of steps and current step', () => {\r\n        [\r\n            {numberOfSteps: 1, currentStep: 0},\r\n            {numberOfSteps: 10, currentStep: 5},\r\n            {numberOfSteps: 4, currentStep: 4},\r\n            {numberOfSteps: 5, currentStep: 4},\r\n        ].forEach((props: IStepProgressBarProps) => {\r\n            expect(() => shallow(<StepProgressBar {...props} />)).not.toThrow();\r\n        });\r\n    });\r\n\r\n    it('should render without error with mandatory props and className as array of string', () => {\r\n        expect(() => shallow(<StepProgressBar {...testProps} className={['some', 'classes']} />)).not.toThrow();\r\n    });\r\n\r\n    it('should render without error with mandatory props and className as string', () => {\r\n        expect(() => shallow(<StepProgressBar {...testProps} className=\"some classes\" />)).not.toThrow();\r\n    });\r\n\r\n    describe('StepProgressBar Content', () => {\r\n        const stepProgressBar = shallow(<StepProgressBar {...testProps} />);\r\n\r\n        it('should render with steps done below the current step', () => {\r\n            expect(stepProgressBar.find(stepProgressBarDoneSelector).length).toBe(testProps.currentStep);\r\n        });\r\n\r\n        it('should render the current step after the last done step', () => {\r\n            expect(\r\n                stepProgressBar.find(`${stepProgressBarDoneSelector} + ${stepProgressBarDoingSelector}`).length\r\n            ).toBe(1);\r\n        });\r\n\r\n        it('should render with steps to-do above the current step', () => {\r\n            expect(\r\n                stepProgressBar.find(`${stepProgressBarDoingSelector} + ${stepProgressBarToDoSelector}`).length\r\n            ).toBe(1);\r\n            const currentStepAndDoneStepsCombined =\r\n                stepProgressBar.find(stepProgressBarDoneSelector).length +\r\n                stepProgressBar.find(stepProgressBarDoingSelector).length;\r\n            expect(stepProgressBar.find(stepProgressBarToDoSelector).length).toBe(\r\n                testProps.numberOfSteps - currentStepAndDoneStepsCombined\r\n            );\r\n        });\r\n\r\n        it('should have as many div.progress-bar as there are number of steps', () => {\r\n            expect(stepProgressBar.find(stepProgressBarSelector).length).toBe(testProps.numberOfSteps);\r\n        });\r\n\r\n        it('should render with extra classes on the container if passed in props as array', () => {\r\n            const testClasses = ['container', 'classes', 'wonderful'];\r\n            const stepProgressBarWithClasses = shallow(<StepProgressBar {...testProps} className={testClasses} />);\r\n\r\n            testClasses.forEach((testClass: string) => {\r\n                expect(stepProgressBarWithClasses.find(stepProgressBarContainerSelector).hasClass(testClass)).toBe(\r\n                    true\r\n                );\r\n            });\r\n        });\r\n\r\n        it('should render with extra classes on the container if passed in props as string', () => {\r\n            const testClasses = 'container classes wonderful';\r\n            const stepProgressBarWithClasses = shallow(<StepProgressBar {...testProps} className={testClasses} />);\r\n\r\n            testClasses.split(' ').forEach((testClass: string) => {\r\n                expect(stepProgressBarWithClasses.find(stepProgressBarContainerSelector).hasClass(testClass)).toBe(\r\n                    true\r\n                );\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=727.bundle.js.map