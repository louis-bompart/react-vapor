(window.webpackJsonp=window.webpackJsonp||[]).push([[529],{1635:function(r,e,o){"use strict";o.r(e),e.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {addModal, openModal} from '../ModalActions';\r\nimport {IModalBackdropProps, ModalBackdrop} from '../ModalBackdrop';\r\nimport {ModalBackdropConnected} from '../ModalBackdropConnected';\r\n\r\ndescribe('ModalBackdrop', () => {\r\n    describe('<ModalBackdropConnected />', () => {\r\n        let modalBackdrop: ReactWrapper<IModalBackdropProps, any>;\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let store: Store<IReactVaporState>;\r\n        let modal1Id: string;\r\n\r\n        beforeEach(() => {\r\n            modal1Id = 'modal1';\r\n\r\n            store = TestUtils.buildStore();\r\n            store.dispatch(addModal(modal1Id));\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <ModalBackdropConnected />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            modalBackdrop = wrapper.find(ModalBackdrop).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get display false as a prop', () => {\r\n            const displayProp = modalBackdrop.props().display;\r\n\r\n            expect(displayProp).toBeDefined();\r\n            expect(displayProp).toBe(false);\r\n        });\r\n\r\n        it('should get display true as a prop when modal is opened', () => {\r\n            store.dispatch(openModal(modal1Id));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(ModalBackdrop).props().display).toBe(true);\r\n        });\r\n    });\r\n\r\n    describe('<ModalBackdropConnected /> with displayFor', () => {\r\n        let modalBackdrop: ReactWrapper<IModalBackdropProps, any>;\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let store: Store<IReactVaporState>;\r\n        let modal1Id: string;\r\n        let modal2Id: string;\r\n\r\n        beforeEach(() => {\r\n            modal1Id = 'modal1';\r\n            modal2Id = 'modal2';\r\n\r\n            store = TestUtils.buildStore();\r\n            store.dispatch(addModal(modal1Id));\r\n            store.dispatch(addModal(modal2Id));\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <ModalBackdropConnected displayFor={[modal1Id]} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            modalBackdrop = wrapper.find(ModalBackdrop).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get display false as a prop', () => {\r\n            const displayProp = modalBackdrop.props().display;\r\n\r\n            expect(displayProp).toBeDefined();\r\n            expect(displayProp).toBe(false);\r\n        });\r\n\r\n        it('should get display true as a prop when modal hidden for is opened', () => {\r\n            store.dispatch(openModal(modal1Id));\r\n            wrapper.update();\r\n\r\n            expect(store.getState().modals.filter((modal) => modal.id === modal1Id)[0].isOpened).toBe(true);\r\n\r\n            expect(wrapper.find(ModalBackdrop).props().display).toBe(true);\r\n        });\r\n\r\n        it('should get display false as a prop when modal not hidden for is opened', () => {\r\n            store.dispatch(openModal(modal2Id));\r\n            wrapper.update();\r\n\r\n            expect(store.getState().modals.filter((modal) => modal.id === modal1Id)[0].isOpened).toBe(false);\r\n            expect(store.getState().modals.filter((modal) => modal.id === modal2Id)[0].isOpened).toBe(true);\r\n\r\n            expect(wrapper.find(ModalBackdrop).props().display).toBe(false);\r\n        });\r\n\r\n        it('should call onClick when clicked', () => {\r\n            store.dispatch(openModal(modal1Id));\r\n            expect(store.getState().modals.filter((modal) => modal.id === modal1Id && modal.isOpened).length).toBe(1);\r\n\r\n            modalBackdrop.simulate('click');\r\n\r\n            expect(store.getState().modals.filter((modal) => modal.id === modal1Id && modal.isOpened).length).toBe(0);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=529.bundle.js.map