(window.webpackJsonp=window.webpackJsonp||[]).push([[532],{1638:function(o,e,t){"use strict";t.r(e),e.default="import {ShallowWrapper} from 'enzyme';\r\nimport {shallowWithState, shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as ReactModal from 'react-modal';\r\n\r\nimport {getStoreMock} from '../../../utils/tests/TestUtils';\r\nimport {addModal, closeModal, removeModal} from '../ModalActions';\r\nimport {IModalCompositeProps} from '../ModalComposite';\r\nimport {ModalCompositeConnected} from '../ModalCompositeConnected';\r\nimport {ModalHeader} from '../ModalHeader';\r\nimport {ModalHeaderConnected} from '../ModalHeaderConnected';\r\n\r\n// tslint:disable-next-line:no-unused-variable\r\ndescribe('<ModalCompositeConnected />', () => {\r\n    const basicProps: IModalCompositeProps = {\r\n        id: 'modalo-mc-modal',\r\n        title: 'Some random title',\r\n    };\r\n\r\n    it('should get withReduxState set to true as a prop', () => {\r\n        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, getStoreMock());\r\n\r\n        expect(modalCompositeConnected.props().withReduxState).toBe(true);\r\n    });\r\n\r\n    it('should have isOpened prop to true if the modal is opened in the store', () => {\r\n        const store = getStoreMock({\r\n            modals: [\r\n                {id: 'another-modal', isOpened: false},\r\n                {id: basicProps.id, isOpened: true},\r\n            ],\r\n        });\r\n        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, store);\r\n\r\n        expect(modalCompositeConnected.props().isOpened).toBe(true);\r\n    });\r\n\r\n    it('should have the layer prop set to the position of the current modal in opened modal stack + 1', () => {\r\n        const store = getStoreMock({openModals: ['meeeeehhh-I-m-a-sheep', basicProps.id, 'mooooohhh-I-m-a-cow']});\r\n        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, store);\r\n\r\n        expect(modalCompositeConnected.props().layer).toBe(2);\r\n    });\r\n\r\n    it('should dispatch an \"ADD_MODAL\" action when it mounts', () => {\r\n        const store = getStoreMock();\r\n        shallowWithStore(<ModalCompositeConnected {...basicProps} />, store).dive();\r\n\r\n        expect(store.getActions()).toContain(addModal(basicProps.id));\r\n    });\r\n\r\n    it('should dispatch a \"REMOVE_MODAL\" action when it unmounts', () => {\r\n        const store = getStoreMock();\r\n        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, store).dive();\r\n\r\n        modalCompositeConnected.unmount();\r\n\r\n        expect(store.getActions()).toContain(removeModal(basicProps.id));\r\n    });\r\n\r\n    it('should display a <ModalHeaderConnected /> component', () => {\r\n        const store = getStoreMock();\r\n        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, store).dive();\r\n        expect(modalCompositeConnected.find(ModalHeaderConnected).length).toBe(1);\r\n    });\r\n\r\n    it('should dispatch a close modal action when closing the modal', () => {\r\n        const store = getStoreMock();\r\n        const modalCompositeConnected: ShallowWrapper<ReactModal.Props> = shallowWithStore(\r\n            <ModalCompositeConnected {...basicProps} isOpened />,\r\n            store\r\n        ).dive();\r\n\r\n        modalCompositeConnected.props().onRequestClose(new MouseEvent('fakeevent') as any);\r\n\r\n        expect(store.getActions()).toContain(closeModal(basicProps.id));\r\n    });\r\n\r\n    it('should not render a <ModalHeader /> or <ModalHeaderConnected /> if the title is not defined', () => {\r\n        const modalCompositeConnected: ShallowWrapper<ReactModal.Props> = shallowWithState(\r\n            <ModalCompositeConnected id=\"id\" isOpened />,\r\n            {}\r\n        ).dive();\r\n\r\n        expect(modalCompositeConnected.find(ModalHeaderConnected).length).toBe(0, 'has modalHeaderConnected');\r\n        expect(modalCompositeConnected.find(ModalHeader).length).toBe(0, 'has modalHeader');\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=532.bundle.js.map