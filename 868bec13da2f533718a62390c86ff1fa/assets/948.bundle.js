(window.webpackJsonp=window.webpackJsonp||[]).push([[948],{2034:function(n,r,e){"use strict";e.r(r),r.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {DragDropContext} from 'react-dnd';\r\nimport TestBackend from 'react-dnd-test-backend';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {DnDUtils} from '../../components/dragAndDrop/DnDUtils';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {UUID} from '../UUID';\r\nimport {TestUtils} from './TestUtils';\r\n\r\nconst mockUUID = (generatedId: string = 'id') => {\r\n    spyOn(UUID, 'generate').and.returnValue(generatedId);\r\n};\r\n\r\nconst mockTagContext = () => {\r\n    DnDUtils.TagControlContext = (DecoratedClass: any) => DecoratedClass;\r\n};\r\n\r\nconst DD = DragDropContext(TestBackend);\r\n\r\nconst renderComponent = (ComponentClass: any, props = {}, child: React.ReactNode = null) => {\r\n    const store: Store<IReactVaporState> = TestUtils.buildStore();\r\n\r\n    class Tester extends React.Component {\r\n        render() {\r\n            return (\r\n                <Provider store={store}>\r\n                    <ComponentClass {...props}>{child}</ComponentClass>\r\n                </Provider>\r\n            );\r\n        }\r\n    }\r\n\r\n    const Draggable = DD(Tester);\r\n    const wrapper = mount(<Draggable {...props} />);\r\n\r\n    return {\r\n        wrapper,\r\n        store,\r\n    };\r\n};\r\n\r\nconst defaultId: string = 'other';\r\n\r\nconst addHTMLElementWithId = (id: string = defaultId) => {\r\n    const otherElement: HTMLDivElement = document.createElement('div');\r\n    otherElement.setAttribute('id', id);\r\n    document.body.appendChild(otherElement);\r\n};\r\n\r\nconst removeHTMLElementWithId = (id: string = defaultId) => {\r\n    document.getElementById(id).remove();\r\n};\r\n\r\nconst clickOnElement = (el: Element = document.getElementById(defaultId), event: string = 'click') => {\r\n    const evt = new MouseEvent(event, {\r\n        view: window,\r\n        bubbles: true,\r\n        cancelable: true,\r\n        clientX: 20,\r\n    });\r\n    el.dispatchEvent(evt);\r\n};\r\n\r\nexport const RTestUtils = {\r\n    mockUUID,\r\n    mockTagContext,\r\n    renderComponent,\r\n    addHTMLElementWithId,\r\n    removeHTMLElementWithId,\r\n    clickOnElement,\r\n    defaultId,\r\n};\r\n"}}]);
//# sourceMappingURL=948.bundle.js.map