(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{1247:function(r,t,n){"use strict";n.r(t),t.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IActionOptions} from '../Action';\r\nimport {IPrimaryActionProps, PrimaryAction} from '../PrimaryAction';\r\nimport {PrimaryActionConnected} from '../PrimaryActionConnected';\r\nimport {TriggerActionConnected} from '../TriggerActionConnected';\r\n\r\ndescribe('Actions', () => {\r\n    describe('TablePrimaryActionView', () => {\r\n        const action: IActionOptions = {\r\n            name: 'action2',\r\n            trigger: jasmine.createSpy('triggerMethod'),\r\n            enabled: true,\r\n        };\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let primaryAction: ReactWrapper<IPrimaryActionProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <PrimaryActionConnected action={action} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            primaryAction = wrapper.find(PrimaryAction).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get withReduxState as a prop', () => {\r\n            const withReduxStateProp = primaryAction.props().withReduxState;\r\n\r\n            expect(withReduxStateProp).toBeDefined();\r\n            expect(withReduxStateProp).toBe(true);\r\n        });\r\n\r\n        it('should display a <TriggerActionConnected /> component if the action is a trigger action', () => {\r\n            expect(primaryAction.find(TriggerActionConnected).length).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=145.bundle.js.map