(window.webpackJsonp=window.webpackJsonp||[]).push([[828],{1926:function(e,t,r){"use strict";r.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {ITableHeaderBasePayload, TableHeaderActions} from '../actions/TableHeaderActions';\r\nimport {ITableWithSortState, TableWithSortReducers} from '../reducers/TableWithSortReducers';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableWithSortReducers', () => {\r\n        const genericAction: IReduxAction<ITableHeaderBasePayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'some-table-header',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const oldState: ITableWithSortState[] = undefined;\r\n            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, genericAction);\r\n\r\n            expect(tableHeadersState).toEqual([]);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: ITableWithSortState[] = [{id: 'a', tableId: 'b', isAsc: undefined}];\r\n            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, genericAction);\r\n\r\n            expect(tableHeadersState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more ITableWithSortState when the action is \"TableHeaderActions.addTableHeader\"', () => {\r\n            const expectedId = 'a';\r\n            const expectedTableId = 'b';\r\n            const expectedIsAsc = true;\r\n            const action = TableHeaderActions.addTableHeader(expectedId, expectedTableId, true);\r\n\r\n            const oldState: ITableWithSortState[] = [];\r\n            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length + 1);\r\n            const headerState = _.findWhere(tableHeadersState, {id: action.payload.id});\r\n\r\n            expect(headerState).toBeDefined();\r\n            expect(headerState.id).toBe(expectedId);\r\n            expect(headerState.tableId).toBe(expectedTableId);\r\n            expect(headerState.isAsc).toBe(expectedIsAsc);\r\n        });\r\n\r\n        it('should not set the isAsc if the isDefault is set to false when the action is \"TableHeaderActions.addTableHeader\"', () => {\r\n            const expectedIsAsc: boolean = undefined;\r\n            const action = TableHeaderActions.addTableHeader('a', 'b', false);\r\n\r\n            const oldState: ITableWithSortState[] = [];\r\n            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);\r\n\r\n            const headerState = _.findWhere(tableHeadersState, {id: action.payload.id});\r\n\r\n            expect(headerState).toBeDefined();\r\n            expect(headerState.isAsc).toBe(expectedIsAsc);\r\n        });\r\n\r\n        it('should return the old state without the ITableWithSortState when the action is \"TableHeaderActions.removeTableHeader\"', () => {\r\n            const oldState: ITableWithSortState[] = [\r\n                {\r\n                    id: 'some-table-header-1',\r\n                    tableId: 'not-important',\r\n                    isAsc: undefined,\r\n                },\r\n                {\r\n                    id: 'some-table-header-2',\r\n                    tableId: 'not-important',\r\n                    isAsc: undefined,\r\n                },\r\n                {\r\n                    id: 'some-table-header-3',\r\n                    tableId: 'not-important',\r\n                    isAsc: undefined,\r\n                },\r\n            ];\r\n            const action = TableHeaderActions.removeTableHeader(oldState[1].id);\r\n            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);\r\n\r\n            expect(tableHeadersState.length).toBe(oldState.length - 1);\r\n            expect(_.findWhere(tableHeadersState, {id: action.payload.id})).toBeUndefined();\r\n        });\r\n\r\n        describe('when the action is \"TableHeaderActions.sortTable\"', () => {\r\n            it('should not throw on sort if the table header does not exists', () => {\r\n                const oldState: ITableWithSortState[] = [];\r\n                const action = TableHeaderActions.sortTable('To be or not to be');\r\n\r\n                expect(() => TableWithSortReducers(oldState, action)).not.toThrow();\r\n            });\r\n\r\n            it('should set the sort on the table header\"', () => {\r\n                const oldState: ITableWithSortState[] = [\r\n                    {\r\n                        id: 'some-table-header-1',\r\n                        tableId: 'not-important',\r\n                        isAsc: undefined,\r\n                    },\r\n                    {\r\n                        id: 'some-table-header-2',\r\n                        tableId: 'not-important',\r\n                        isAsc: true,\r\n                    },\r\n                ];\r\n\r\n                const action = TableHeaderActions.sortTable(oldState[0].id);\r\n                const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);\r\n\r\n                expect(tableHeadersState.length).toBe(oldState.length);\r\n                expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).isAsc).toBe(true);\r\n                expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).isAsc).toBe(undefined);\r\n            });\r\n\r\n            it('should not modify the isAsc for the other tables\"', () => {\r\n                const oldState: ITableWithSortState[] = [\r\n                    {\r\n                        id: 'some-table-header',\r\n                        tableId: 'current-table',\r\n                        isAsc: undefined,\r\n                    },\r\n                    {\r\n                        id: 'other-table-header',\r\n                        tableId: 'other-table',\r\n                        isAsc: true,\r\n                    },\r\n                ];\r\n\r\n                const action = TableHeaderActions.sortTable(oldState[0].id);\r\n                const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);\r\n                expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).isAsc).toBe(oldState[1].isAsc);\r\n            });\r\n\r\n            it('should set isAsc to the value specified in the action payload', () => {\r\n                const oldState: ITableWithSortState[] = [\r\n                    {\r\n                        id: '🐌',\r\n                        tableId: '🐋',\r\n                        isAsc: undefined,\r\n                    },\r\n                ];\r\n\r\n                const action = TableHeaderActions.sortTable('🐌', false);\r\n                const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);\r\n                expect(_.findWhere(tableHeadersState, {id: '🐌'}).isAsc).toBe(false);\r\n            });\r\n\r\n            it('should set isAsc to the opposite value of the current one if no \"ascending\" value is specified in the action payload', () => {\r\n                const oldState: ITableWithSortState[] = [\r\n                    {\r\n                        id: '🐊',\r\n                        tableId: '🐋',\r\n                        isAsc: true,\r\n                    },\r\n                ];\r\n\r\n                const action = TableHeaderActions.sortTable('🐊');\r\n                const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);\r\n                expect(_.findWhere(tableHeadersState, {id: '🐊'}).isAsc).toBe(false);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=828.bundle.js.map