(window.webpackJsonp=window.webpackJsonp||[]).push([[862],{1960:function(t,e,n){"use strict";n.r(e),e.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {ITableProps, ITableRowData, Table} from '../Table';\r\nimport {TableChildBlankSlate} from '../table-children/TableChildBlankSlate';\r\nimport {TableChildBody} from '../table-children/TableChildBody';\r\nimport {TableChildHeader} from '../table-children/TableChildHeader';\r\nimport {TableChildLastUpdated} from '../table-children/TableChildLastUpdated';\r\nimport {DEFAULT_TABLE_DATA, TableSortingOrder} from '../TableConstants';\r\nimport {ITableData} from '../TableReducers';\r\nimport {tablePossibleProps, tablePropsMock, tablePropsMockWithData} from './TableTestCommon';\r\n\r\nconst perPageNumbers = [5, 10, 20];\r\n\r\ndescribe('<Table />', () => {\r\n    let store: Store<IReactVaporState>;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    const mountComponentWithProps = (props: ITableProps) => {\r\n        return mount(\r\n            <Provider store={store}>\r\n                <Table {...props} />\r\n            </Provider>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n    };\r\n\r\n    describe('on instantiation', () => {\r\n        it('should set isInitialLoad to true if initialTableData equals DEFAULT_TABLE_DATA', () => {\r\n            expect((new Table(tablePropsMock) as any).isInitialLoad).toBe(true);\r\n        });\r\n\r\n        it('should set isInitialLoad to false if initialTableData does not equal DEFAULT_TABLE_DATA', () => {\r\n            const tablePropsWithoutDefaultInitialData = {\r\n                ...tablePropsMock,\r\n                initialTableData: {...DEFAULT_TABLE_DATA, totalPages: 10, totalEntries: 1000},\r\n            };\r\n            expect((new Table(tablePropsWithoutDefaultInitialData) as any).isInitialLoad).toBe(false);\r\n        });\r\n    });\r\n\r\n    describe('render', () => {\r\n        it('should render without error in different scenarios', () => {\r\n            tablePossibleProps.forEach((props: ITableProps) => {\r\n                expect(() => mountComponentWithProps(props)).not.toThrow();\r\n            });\r\n        });\r\n\r\n        it('should not render the <TableChildLastUpdated/> if withoutLastUpdated is true', () => {\r\n            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                withoutLastUpdated: true,\r\n            } as any);\r\n\r\n            expect(table.find(TableChildLastUpdated).length).toBe(0);\r\n        });\r\n\r\n        it('should render a blankslate null if some rows are displayed', () => {\r\n            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                tableCompositeState: {\r\n                    data: {byId: {test: {}}, allIds: ['test'], displayedIds: ['test'], totalEntries: 1, totalPages: 1},\r\n                },\r\n            } as any);\r\n\r\n            expect(table.find(TableChildBlankSlate).length).toBe(0);\r\n        });\r\n\r\n        it('should render null if table is loading', () => {\r\n            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                tableCompositeState: {\r\n                    isLoading: true,\r\n                },\r\n            } as any);\r\n\r\n            expect(table.find(TableChildBlankSlate).length).toBe(0);\r\n        });\r\n\r\n        it('should render a blankslate if no loading, empty table and isInitialLoad is false', () => {\r\n            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                initialTableData: {...DEFAULT_TABLE_DATA, totalPages: 10, totalEntries: 1000},\r\n                tableCompositeState: {\r\n                    data: {byId: {test: {}}, allIds: ['test'], displayedIds: [], totalEntries: 1, totalPages: 1},\r\n                    isLoading: false,\r\n                },\r\n            } as any);\r\n\r\n            expect(table.find(TableChildBlankSlate).length).toBe(1);\r\n        });\r\n\r\n        it('should render a blankslate if no loading, empty table, isInError is true, and isInitialLoad is true (related issue: https://github.com/coveo/react-vapor/issues/621)', () => {\r\n            const tableAsAny: any = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                initialTableData: {...DEFAULT_TABLE_DATA, totalPages: 10, totalEntries: 1000},\r\n                tableCompositeState: {\r\n                    data: {byId: {test: {}}, allIds: ['test'], displayedIds: [], totalEntries: 1, totalPages: 1},\r\n                    isLoading: false,\r\n                    isInError: true,\r\n                },\r\n            } as any);\r\n            tableAsAny.isInitialLoad = true;\r\n\r\n            expect(tableAsAny.find(TableChildBlankSlate).length).toBe(1);\r\n        });\r\n\r\n        it('should render with the wrapper fixed-header-table-container if the props withFixedHeader is true', () => {\r\n            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                withFixedHeader: true,\r\n            } as any);\r\n\r\n            expect(table.find(TableChildBlankSlate).length).toBe(0);\r\n        });\r\n\r\n        it('should have the class loading component if it is the initial load', () => {\r\n            const tableAsAny: any = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                tableCompositeState: {\r\n                    data: {byId: {test: {}}, allIds: ['test'], displayedIds: [], totalEntries: 1, totalPages: 1},\r\n                    isLoading: false,\r\n                    isInError: false,\r\n                },\r\n            } as any);\r\n\r\n            expect(tableAsAny.html()).toContain('loading-component');\r\n        });\r\n\r\n        it('should not have the class loading component if it is not the initial load', () => {\r\n            const tableAsAny: any = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                initialTableData: {...DEFAULT_TABLE_DATA, totalPages: 10, totalEntries: 1000},\r\n                tableCompositeState: {\r\n                    data: {byId: {test: {}}, allIds: ['test'], displayedIds: [], totalEntries: 1, totalPages: 1},\r\n                    isLoading: false,\r\n                    isInError: false,\r\n                },\r\n            } as any);\r\n\r\n            expect(tableAsAny.html()).not.toContain('loading-component');\r\n        });\r\n\r\n        it('should not have the class loading component if it is the initial load and the table is in error', () => {\r\n            const tableAsAny: any = mountComponentWithProps({\r\n                ...tablePropsMock,\r\n                tableCompositeState: {\r\n                    data: {byId: {test: {}}, allIds: ['test'], displayedIds: [], totalEntries: 1, totalPages: 1},\r\n                    isLoading: false,\r\n                    isInError: true,\r\n                },\r\n            } as any);\r\n\r\n            expect(tableAsAny.html()).not.toContain('loading-component');\r\n        });\r\n    });\r\n\r\n    describe('after render', () => {\r\n        it('should call onDidMount on componentDidMount if it is defined', () => {\r\n            const onDidMountSpy = jasmine.createSpy('onDidMountSpy');\r\n\r\n            mountComponentWithProps({...tablePropsMock, onDidMount: onDidMountSpy});\r\n\r\n            expect(onDidMountSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call onUnmount on componentWillUnmount if it is defined', () => {\r\n            const onUnmountSpy = jasmine.createSpy('onUnmountSpy');\r\n\r\n            mountComponentWithProps({...tablePropsMock, onUnmount: onUnmountSpy}).unmount();\r\n\r\n            expect(onUnmountSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should set isInitialLoad to false after tableCompositeState.data changes from DEFAULT_TABLE_DATA to new table data', () => {\r\n            const tableCompositeState = {...tablePropsMock.tableCompositeState, data: DEFAULT_TABLE_DATA};\r\n            const tableAsAny = new Table({...tablePropsMock, tableCompositeState}) as any;\r\n\r\n            expect(tableAsAny.props.tableCompositeState.data).toEqual(DEFAULT_TABLE_DATA);\r\n            expect(tableAsAny.isInitialLoad).toBe(true);\r\n\r\n            tableAsAny.props.tableCompositeState.data = {\r\n                ...DEFAULT_TABLE_DATA,\r\n                allIds: ['trigger-change-in-default-table-data'],\r\n            };\r\n            tableAsAny.componentDidUpdate();\r\n\r\n            expect(tableAsAny.isInitialLoad).toBe(false);\r\n        });\r\n\r\n        it('should set isInitialLoad to false after tableCompositeState.data changes from DEFAULT_TABLE_DATA to new table data, even if new data is empty', () => {\r\n            const tableCompositeState = {...tablePropsMock.tableCompositeState, data: DEFAULT_TABLE_DATA};\r\n            const tableAsAny = new Table({...tablePropsMock, tableCompositeState}) as any;\r\n\r\n            expect(tableAsAny.props.tableCompositeState.data).toEqual(DEFAULT_TABLE_DATA);\r\n            expect(tableAsAny.isInitialLoad).toBe(true);\r\n\r\n            tableAsAny.props.tableCompositeState.data = _.omit(DEFAULT_TABLE_DATA, 'IS_DEFAULT_TABLE_DATA');\r\n            tableAsAny.componentDidUpdate();\r\n\r\n            expect(tableAsAny.isInitialLoad).toBe(false);\r\n        });\r\n\r\n        it('should not render a table wrapper if there are no displayed rows', () => {\r\n            expect(mountComponentWithProps(tablePropsMock).find(TableChildBody).length).toBe(0);\r\n        });\r\n\r\n        it('should render as many <TableChildBody /> as there are displayed ids', () => {\r\n            expect(mountComponentWithProps(tablePropsMockWithData).find(TableChildBody).length).toBe(\r\n                tablePropsMockWithData.tableCompositeState.data.displayedIds.length\r\n            );\r\n        });\r\n\r\n        it('should call onRowClick when a <TableChildBody /> calls its onRowClick function', () => {\r\n            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps(tablePropsMockWithData);\r\n            table\r\n                .find(TableChildBody)\r\n                .first()\r\n                .props()\r\n                .onRowClick([]);\r\n\r\n            expect(tablePropsMockWithData.onRowClick).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call getActions when a <TableChildBody /> calls its getActions function', () => {\r\n            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps(tablePropsMockWithData);\r\n            table\r\n                .find(TableChildBody)\r\n                .first()\r\n                .props()\r\n                .getActions({id: 'any'});\r\n\r\n            expect(tablePropsMockWithData.getActions).toHaveBeenCalled();\r\n        });\r\n\r\n        describe('componentWillReceiveProps', () => {\r\n            let tableAsAny: any;\r\n            let onModifyDataSpy: jasmine.Spy;\r\n            let tableProps: any;\r\n\r\n            beforeEach(() => {\r\n                onModifyDataSpy = jasmine.createSpy('onModifyDataSpy');\r\n                tableProps = {...tablePropsMock, onModifyData: onModifyDataSpy};\r\n                tableAsAny = new Table(tableProps);\r\n            });\r\n\r\n            it('should not call onMofidyData if next tableCompositeState is identical to the previous', () => {\r\n                tableAsAny.componentWillReceiveProps(tableProps);\r\n                expect(onModifyDataSpy).not.toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onMofidyData with shouldResetPage true if next tableCompositeState is not identical to the previous and change is not in per page or pagination', () => {\r\n                const nextProps = {\r\n                    ...tableProps,\r\n                    tableCompositeState: {\r\n                        ...tableProps.tableCompositeState,\r\n                        filter: 'someone just searched for something in the table',\r\n                    },\r\n                };\r\n                tableAsAny.componentWillReceiveProps(nextProps);\r\n\r\n                expect(onModifyDataSpy).toHaveBeenCalledTimes(1);\r\n                const shouldResetPage = true;\r\n                expect(onModifyDataSpy).toHaveBeenCalledWith(\r\n                    shouldResetPage,\r\n                    nextProps.tableCompositeState,\r\n                    tableProps.tableCompositeState\r\n                );\r\n            });\r\n\r\n            it('should call onMofidyData with shouldResetPage false if next tableCompositeState is not identical to the previous and change is in pagination', () => {\r\n                const nextProps = {\r\n                    ...tableProps,\r\n                    tableCompositeState: {\r\n                        ...tableProps.tableCompositeState,\r\n                        page: 3,\r\n                    },\r\n                };\r\n                tableAsAny.componentWillReceiveProps(nextProps);\r\n\r\n                expect(onModifyDataSpy).toHaveBeenCalledTimes(1);\r\n                const shouldResetPage = false;\r\n                expect(onModifyDataSpy).toHaveBeenCalledWith(\r\n                    shouldResetPage,\r\n                    nextProps.tableCompositeState,\r\n                    tableProps.tableCompositeState\r\n                );\r\n            });\r\n\r\n            it('should call onMofidyData with shouldResetPage false if next tableCompositeState is not identical to the previous and change is in perPage', () => {\r\n                const nextProps = {\r\n                    ...tableProps,\r\n                    tableCompositeState: {\r\n                        ...tableProps.tableCompositeState,\r\n                        perPage: 20,\r\n                    },\r\n                };\r\n                tableAsAny.componentWillReceiveProps(nextProps);\r\n\r\n                expect(onModifyDataSpy).toHaveBeenCalledTimes(1);\r\n                const shouldResetPage = false;\r\n                expect(onModifyDataSpy).toHaveBeenCalledWith(\r\n                    shouldResetPage,\r\n                    nextProps.tableCompositeState,\r\n                    tableProps.tableCompositeState\r\n                );\r\n            });\r\n\r\n            describe('hasTableCompositeStateChanged', () => {\r\n                beforeEach(() => {\r\n                    tableProps = {...tablePropsMock, onModifyData: onModifyDataSpy};\r\n                    tableAsAny = new Table(tableProps);\r\n                });\r\n\r\n                it('should return false if nothing changed in the tableCompositeState', () => {\r\n                    expect(\r\n                        tableAsAny.hasTableCompositeStateChanged(\r\n                            tableProps.tableCompositeState,\r\n                            tableProps.tableCompositeState\r\n                        )\r\n                    ).toBe(false);\r\n                });\r\n\r\n                it('should return true if the filter has changed and nothing else has', () => {\r\n                    const nextTableCompositeState = {\r\n                        ...tableProps.tableCompositeState,\r\n                        filter: 'someone just searched for something in the table',\r\n                    };\r\n                    expect(\r\n                        tableAsAny.hasTableCompositeStateChanged(\r\n                            tableProps.tableCompositeState,\r\n                            nextTableCompositeState\r\n                        )\r\n                    ).toBe(true);\r\n                });\r\n\r\n                it('should return true if the from (datepicker) has changed and nothing else has', () => {\r\n                    const nextTableCompositeState = {\r\n                        ...tableProps.tableCompositeState,\r\n                        from: Date.now(),\r\n                    };\r\n                    expect(\r\n                        tableAsAny.hasTableCompositeStateChanged(\r\n                            tableProps.tableCompositeState,\r\n                            nextTableCompositeState\r\n                        )\r\n                    ).toBe(true);\r\n                });\r\n\r\n                it('should return true if the to (datepicker) has changed and nothing else has', () => {\r\n                    const nextTableCompositeState = {\r\n                        ...tableProps.tableCompositeState,\r\n                        to: Date.now(),\r\n                    };\r\n                    expect(\r\n                        tableAsAny.hasTableCompositeStateChanged(\r\n                            tableProps.tableCompositeState,\r\n                            nextTableCompositeState\r\n                        )\r\n                    ).toBe(true);\r\n                });\r\n\r\n                it('should return true if the perPage has changed and nothing else has', () => {\r\n                    const nextTableCompositeState = {\r\n                        ...tableProps.tableCompositeState,\r\n                        perPage: 50,\r\n                    };\r\n                    expect(\r\n                        tableAsAny.hasTableCompositeStateChanged(\r\n                            tableProps.tableCompositeState,\r\n                            nextTableCompositeState\r\n                        )\r\n                    ).toBe(true);\r\n                });\r\n\r\n                it('should return true if the page has changed and nothing else has', () => {\r\n                    const nextTableCompositeState = {\r\n                        ...tableProps.tableCompositeState,\r\n                        page: 3,\r\n                    };\r\n                    expect(\r\n                        tableAsAny.hasTableCompositeStateChanged(\r\n                            tableProps.tableCompositeState,\r\n                            nextTableCompositeState\r\n                        )\r\n                    ).toBe(true);\r\n                });\r\n\r\n                it('should return true if the sort attribute has changed and nothing else has', () => {\r\n                    const nextTableCompositeState = {\r\n                        ...tableProps.tableCompositeState,\r\n                        sortState: {\r\n                            ...tableProps.tableCompositeState.sortState,\r\n                            attribute: 'userName',\r\n                        },\r\n                    };\r\n                    expect(\r\n                        tableAsAny.hasTableCompositeStateChanged(\r\n                            tableProps.tableCompositeState,\r\n                            nextTableCompositeState\r\n                        )\r\n                    ).toBe(true);\r\n                });\r\n\r\n                it('should return true if the sort order has changed and nothing else has', () => {\r\n                    const nextTableCompositeState = {\r\n                        ...tableProps.tableCompositeState,\r\n                        sortState: {\r\n                            ...tableProps.tableCompositeState.sortState,\r\n                            order: TableSortingOrder.ASCENDING,\r\n                        },\r\n                    };\r\n                    expect(\r\n                        tableAsAny.hasTableCompositeStateChanged(\r\n                            tableProps.tableCompositeState,\r\n                            nextTableCompositeState\r\n                        )\r\n                    ).toBe(true);\r\n                });\r\n\r\n                it('should return true if the predicates were empty and next state has one', () => {\r\n                    const nextTableCompositeState = {\r\n                        ...tableProps.tableCompositeState,\r\n                        predicates: {\r\n                            anyWouldDo: 'anyWouldDo',\r\n                        },\r\n                    };\r\n                    expect(\r\n                        tableAsAny.hasTableCompositeStateChanged(\r\n                            tableProps.tableCompositeState,\r\n                            nextTableCompositeState\r\n                        )\r\n                    ).toBe(true);\r\n                });\r\n\r\n                it('should return true if predicates were not empty but one of the value of the predicates changed', () => {\r\n                    const tableCompositeState = {\r\n                        ...tableProps.tableCompositeState,\r\n                        predicates: {\r\n                            anyWouldDo: 'anyWouldDo',\r\n                        },\r\n                    };\r\n\r\n                    const nextTableCompositeState = {\r\n                        ...tableProps.tableCompositeState,\r\n                        predicates: {\r\n                            anyWouldDo: 'predicate value changed',\r\n                        },\r\n                    };\r\n\r\n                    expect(tableAsAny.hasTableCompositeStateChanged(tableCompositeState, nextTableCompositeState)).toBe(\r\n                        true\r\n                    );\r\n                });\r\n            });\r\n        });\r\n\r\n        describe('componentWillUpdate', () => {\r\n            let tableAsAny: any;\r\n            let onWillUpdateSpy: jasmine.Spy;\r\n            let tableProps: any;\r\n\r\n            beforeEach(() => {\r\n                onWillUpdateSpy = jasmine.createSpy('onWillUpdateSpy');\r\n                tableProps = {...tablePropsMock, onWillUpdate: onWillUpdateSpy, actions: [{id: 'id1'}]};\r\n                tableAsAny = new Table(tableProps);\r\n            });\r\n\r\n            it('should not call onWillUpdate if next actions is identical to the previous action from the state', () => {\r\n                const nextProps = {\r\n                    actions: [{id: 'id1'}],\r\n                };\r\n\r\n                tableAsAny.componentWillUpdate(nextProps);\r\n\r\n                expect(onWillUpdateSpy).not.toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onWillUpdate if next actions is different to the previous action from the state', () => {\r\n                const nextProps = {\r\n                    actions: [{id: 'id2'}],\r\n                };\r\n\r\n                tableAsAny.componentWillUpdate(nextProps);\r\n\r\n                expect(onWillUpdateSpy).toHaveBeenCalledWith(nextProps.actions);\r\n            });\r\n        });\r\n\r\n        it('should not show table head if table has no rows and it is display as card', () => {\r\n            const emptyData: ITableRowData = {};\r\n            const empty: ITableData = {\r\n                byId: emptyData,\r\n                allIds: _.keys(emptyData),\r\n                displayedIds: _.keys(emptyData),\r\n                totalEntries: _.keys(emptyData).length,\r\n                totalPages: Math.ceil(_.keys(emptyData).length / perPageNumbers[0]),\r\n            };\r\n            const tableProps: ITableProps = {\r\n                ...tablePropsMock,\r\n                asCard: true,\r\n                initialTableData: empty,\r\n            };\r\n            const table = mountComponentWithProps(tableProps);\r\n\r\n            expect(table.find(TableChildHeader).length).toBe(0);\r\n            expect(table.find(TableChildBlankSlate).length).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=862.bundle.js.map