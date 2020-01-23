(window.webpackJsonp=window.webpackJsonp||[]).push([[797],{1878:function(e,t,r){"use strict";r.r(t),t.default="import {shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';\r\nimport {turnOffLoading} from '../../loading/LoadingActions';\r\nimport {NavigationConnected} from '../../navigation/NavigationConnected';\r\nimport {TableWithPaginationActions} from '../actions/TableWithPaginationActions';\r\nimport {ITableHOCProps, TableHOC} from '../TableHOC';\r\nimport {TableHOCUtils} from '../TableHOCUtils';\r\nimport {ITableWithPaginationProps, tableWithPagination} from '../TableWithPagination';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableWithPagination', () => {\r\n        let store: ReactVaporMockStore;\r\n\r\n        const TableWithPagination = _.compose(tableWithPagination())(TableHOC);\r\n\r\n        const defaultProps: ITableHOCProps = {\r\n            id: 'a',\r\n            data: _.map(_.range(10), (i: number) => ({value: i})),\r\n            renderBody: _.identity,\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = getStoreMock({\r\n                tableHOCPagination: [],\r\n                paginationComposite: [],\r\n                perPageComposite: [],\r\n            });\r\n        });\r\n\r\n        it('should not throw', () => {\r\n            expect(() =>\r\n                shallowWithStore(<TableWithPagination id=\"a\" data={[]} renderBody={_.identity} />, store)\r\n            ).not.toThrow();\r\n            expect(() =>\r\n                shallowWithStore(<TableWithPagination id=\"b\" data={[{value: 'a'}]} renderBody={_.identity} />, store)\r\n            ).not.toThrow();\r\n        });\r\n\r\n        it('should render a TableHOC', () => {\r\n            const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();\r\n            expect(wrapper.find(TableHOC).exists()).toBe(true);\r\n        });\r\n\r\n        it('should render a NavigationConnected', () => {\r\n            const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();\r\n            expect(wrapper.find(NavigationConnected).exists()).toBe(true);\r\n        });\r\n\r\n        it('should dispatch a turnOffLoading on mount', () => {\r\n            const expectedAction = turnOffLoading([`loading-${defaultProps.id}`]);\r\n\r\n            shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should dispatch a TableWithPaginationActions.add on mount', () => {\r\n            const expectedAction = TableWithPaginationActions.add(defaultProps.id);\r\n\r\n            shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should dispatch an TableWithPaginationActions.remove on componentWillUnmount', () => {\r\n            const expectedAction = TableWithPaginationActions.remove(defaultProps.id);\r\n\r\n            const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();\r\n            wrapper.unmount();\r\n\r\n            expect(store.getActions()).toContain(expectedAction);\r\n        });\r\n\r\n        it('should slice the data according to the perPageNumbers specified in the HOC config', () => {\r\n            const expectedPerPageNumbers = [2, 3, 4];\r\n            const MyTable: React.ComponentType<ITableWithPaginationProps> = _.compose(\r\n                tableWithPagination({perPageNumbers: expectedPerPageNumbers})\r\n            )(TableHOC);\r\n            const table = shallowWithStore(<MyTable {...defaultProps} />, getStoreMock()).dive();\r\n\r\n            expect(table.find(NavigationConnected).prop('perPageNumbers')).toEqual(expectedPerPageNumbers);\r\n        });\r\n\r\n        it('should always have a totalPages count of 1 or more', () => {\r\n            const table = shallowWithStore(\r\n                <TableWithPagination id=\"💎\" renderBody={_.identity} data={[]} />,\r\n                store\r\n            ).dive();\r\n\r\n            expect(table.find(NavigationConnected).prop('totalPages')).toBe(1);\r\n        });\r\n\r\n        describe('with store data', () => {\r\n            const getStoreWithPage = (pageNb: number, perPage: number, count: number = 0) => {\r\n                return getStoreMock({\r\n                    tableHOCPagination: [{id: defaultProps.id, count}],\r\n                    paginationComposite: [{id: TableHOCUtils.getPaginationId(defaultProps.id), pageNb}],\r\n                    perPageComposite: [{id: defaultProps.id, perPage}],\r\n                });\r\n            };\r\n\r\n            it('should not throw if the data is null', () => {\r\n                store = getStoreWithPage(1, 5);\r\n                expect(() =>\r\n                    shallowWithStore(<TableWithPagination {...defaultProps} data={null} />, store).dive()\r\n                ).not.toThrow();\r\n            });\r\n\r\n            it('should return the correct page', () => {\r\n                const perPage = 3;\r\n                const page = 2;\r\n\r\n                store = getStoreWithPage(page, perPage);\r\n                const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();\r\n                const tableData = wrapper.find(TableHOC).prop('data');\r\n                expect(tableData).toEqual(defaultProps.data.slice(page * perPage, (page + 1) * perPage));\r\n            });\r\n\r\n            describe('when server side', () => {\r\n                const TableWithPaginationServer = _.compose(withServerSideProcessing, tableWithPagination())(TableHOC);\r\n\r\n                it('should not slice data', () => {\r\n                    const perPage = 3;\r\n                    const page = 2;\r\n\r\n                    store = getStoreWithPage(page, perPage);\r\n                    const wrapper = shallowWithStore(<TableWithPaginationServer {...defaultProps} />, store)\r\n                        .dive()\r\n                        .dive();\r\n                    const tableData = wrapper.find(TableHOC).prop('data');\r\n                    expect(tableData).toEqual(defaultProps.data);\r\n                });\r\n\r\n                it('should call onUpdate when the pageNb or perPage changes', () => {\r\n                    const updateSpy = jasmine.createSpy('update');\r\n                    const initialPage = 2;\r\n                    const initialPerPage = 2;\r\n\r\n                    store = getStoreWithPage(initialPage, initialPerPage);\r\n                    const wrapper = shallowWithStore(\r\n                        <TableWithPaginationServer {...defaultProps} onUpdate={updateSpy} />,\r\n                        store\r\n                    )\r\n                        .dive()\r\n                        .dive();\r\n\r\n                    wrapper.setProps({pageNb: initialPage + 1});\r\n                    wrapper.update();\r\n\r\n                    expect(updateSpy).toHaveBeenCalledTimes(1);\r\n\r\n                    wrapper.setProps({perPage: initialPerPage + 1});\r\n                    wrapper.update();\r\n\r\n                    expect(updateSpy).toHaveBeenCalledTimes(2);\r\n                });\r\n\r\n                it('should not call onUpdate when pageNb & perPage does not changes', () => {\r\n                    const updateSpy = jasmine.createSpy('update');\r\n\r\n                    store = getStoreWithPage(1, 10);\r\n                    const wrapper = shallowWithStore(\r\n                        <TableWithPaginationServer {...defaultProps} onUpdate={updateSpy} />,\r\n                        store\r\n                    )\r\n                        .dive()\r\n                        .dive();\r\n\r\n                    wrapper.setProps({ignore: true});\r\n                    wrapper.update();\r\n\r\n                    expect(updateSpy).not.toHaveBeenCalled();\r\n                });\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=797.bundle.js.map