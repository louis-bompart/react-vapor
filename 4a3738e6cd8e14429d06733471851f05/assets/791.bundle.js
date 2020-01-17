(window.webpackJsonp=window.webpackJsonp||[]).push([[791],{1875:function(e,r,t){"use strict";t.r(r),r.default="import {shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\n\r\nimport {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';\r\nimport {TableHeaderActions} from '../actions/TableHeaderActions';\r\nimport {TableHeaderWithSort} from '../TableHeaderWithSort';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableHeaderWithSort', () => {\r\n        let store: ReactVaporMockStore;\r\n\r\n        const defaultProps = {\r\n            id: 'a',\r\n            tableId: 'b',\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = getStoreMock({\r\n                tableHOCHeader: [\r\n                    {\r\n                        id: defaultProps.id,\r\n                        tableId: defaultProps.tableId,\r\n                        isAsc: false,\r\n                    },\r\n                ],\r\n            });\r\n        });\r\n\r\n        it('should not throw', () => {\r\n            expect(shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store));\r\n            expect(shallowWithStore(<TableHeaderWithSort {...defaultProps} isDefault />, store));\r\n        });\r\n\r\n        it('should render a th', () => {\r\n            const wrapper = shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store).dive();\r\n            expect(wrapper.find('th').exists()).toBe(true);\r\n        });\r\n\r\n        it('should not throw when rendering children', () => {\r\n            const render = () =>\r\n                shallowWithStore(\r\n                    <TableHeaderWithSort {...defaultProps}>\r\n                        <div>Hello</div>\r\n                    </TableHeaderWithSort>,\r\n                    store\r\n                ).dive();\r\n\r\n            expect(render).not.toThrow();\r\n        });\r\n\r\n        it('should dispatch an addTableHeader on componentDidMount', () => {\r\n            const expectedAction = TableHeaderActions.addTableHeader(defaultProps.id, defaultProps.tableId, undefined);\r\n\r\n            shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store).dive();\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should dispatch an removeTableHeader on componentWillUnmount', () => {\r\n            const expectedAction = TableHeaderActions.removeTableHeader(defaultProps.id);\r\n\r\n            const wrapper = shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store).dive();\r\n            wrapper.unmount();\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should dispatch an sortTable on click', () => {\r\n            const expectedAction = TableHeaderActions.sortTable(defaultProps.id);\r\n\r\n            const wrapper = shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store).dive();\r\n            wrapper.find('th').simulate('click');\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=791.bundle.js.map