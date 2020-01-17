(window.webpackJsonp=window.webpackJsonp||[]).push([[842],{1926:function(r,n,o){"use strict";o.r(n),n.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {NavigationConnected} from '../../navigation/NavigationConnected';\r\nimport {ITableProps} from '../Table';\r\nimport {TableChildNavigation} from '../table-children/TableChildNavigation';\r\nimport {tablePropsMock} from './TableTestCommon';\r\n\r\ndescribe('<TableChildNavigation />', () => {\r\n    let store: Store<IReactVaporState>;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    describe('render', () => {\r\n        const mountComponentWithProps = (props: ITableProps) => {\r\n            return mount(\r\n                <Provider store={store}>\r\n                    <TableChildNavigation {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        };\r\n\r\n        it('should render without error if basic props are passed', () => {\r\n            expect(() => {\r\n                mountComponentWithProps(tablePropsMock);\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should render without error if basic props are passed with navigation prop as boolean', () => {\r\n            expect(() => {\r\n                mountComponentWithProps({...tablePropsMock, navigation: true});\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should render without error if basic props are passed with navigation prop as NavigationChildrenProps', () => {\r\n            expect(() => {\r\n                mountComponentWithProps({...tablePropsMock, navigation: {}});\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should render null if navigation is not passed as prop', () => {\r\n            expect(mountComponentWithProps(tablePropsMock).html()).toBeNull();\r\n        });\r\n\r\n        it('should render NavigationConnected if passed as boolean', () => {\r\n            expect(\r\n                mountComponentWithProps({...tablePropsMock, navigation: true}).find(NavigationConnected).length\r\n            ).toBe(1);\r\n        });\r\n\r\n        it('should render NavigationConnected is passed as NavigationChildrenProps', () => {\r\n            expect(mountComponentWithProps({...tablePropsMock, navigation: {}}).find(NavigationConnected).length).toBe(\r\n                1\r\n            );\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=842.bundle.js.map