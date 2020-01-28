(window.webpackJsonp=window.webpackJsonp||[]).push([[880],{1978:function(e,t,r){"use strict";r.r(t),t.default="import {TableSortingOrder} from '../TableConstants';\r\nimport {addHeaderCell, removeHeaderCell, sortFromHeaderCell} from '../TableHeaderCellActions';\r\nimport {\r\n    tableHeaderCellReducer,\r\n    tableHeaderCellsInitialState,\r\n    tableHeaderCellsReducer,\r\n} from '../TableHeaderCellReducers';\r\nimport {getNextTableSortingOrder} from '../TableUtils';\r\n\r\ndescribe('tableHeaderCellsReducer', () => {\r\n    const testHeaderCell = {\r\n        id: 'test-header-cell-tableid',\r\n        attributeToSort: 'awesomeAttribute',\r\n        tableId: 'tableid',\r\n        sorted: TableSortingOrder.UNSORTED,\r\n    };\r\n\r\n    it('should return the default state if the action is unrelated and the state is undefined', () => {\r\n        const unrelatedAction = {type: 'any', payload: {}};\r\n        expect(tableHeaderCellsReducer(undefined, unrelatedAction)).toEqual(tableHeaderCellsInitialState);\r\n    });\r\n\r\n    it('should return the same state if the action is unrelated and the state is defined for tableHeaderCellReducer', () => {\r\n        const unrelatedAction = {type: 'any', payload: {}};\r\n        expect(tableHeaderCellReducer(testHeaderCell, unrelatedAction)).toEqual(testHeaderCell);\r\n    });\r\n\r\n    it('should return the state with the new header cell in it on TableHeaderCellActions.add', () => {\r\n        const newState = {\r\n            [testHeaderCell.id]: testHeaderCell,\r\n        };\r\n        expect(\r\n            tableHeaderCellsReducer(\r\n                undefined,\r\n                addHeaderCell(testHeaderCell.id, testHeaderCell.attributeToSort, testHeaderCell.tableId)\r\n            )\r\n        ).toEqual(newState);\r\n    });\r\n\r\n    it('should return the state with the new header cell in it on TableHeaderCellActions.remove', () => {\r\n        const currentState = {\r\n            [testHeaderCell.id]: testHeaderCell,\r\n        };\r\n\r\n        const nextState = {};\r\n        expect(tableHeaderCellsReducer(currentState, removeHeaderCell(testHeaderCell.id))).toEqual(nextState);\r\n    });\r\n\r\n    describe('on TableHeaderCellActions.sort', () => {\r\n        it('should modify the sorted prop to the next table sorting order of the header cell having an identical id and tableId as the ones in the payload', () => {\r\n            const currentState = {\r\n                [testHeaderCell.id]: testHeaderCell,\r\n            };\r\n\r\n            const nextState = {\r\n                [testHeaderCell.id]: {...testHeaderCell, sorted: getNextTableSortingOrder(testHeaderCell.sorted)},\r\n            };\r\n            expect(\r\n                tableHeaderCellsReducer(\r\n                    currentState,\r\n                    sortFromHeaderCell(testHeaderCell.id, testHeaderCell.attributeToSort, testHeaderCell.tableId)\r\n                )\r\n            ).toEqual(nextState);\r\n        });\r\n\r\n        it('should modify the sorted prop to UNSORTED if the header cell have a different id and and a similar tableId as the ones in the payload', () => {\r\n            const currentState = {\r\n                [testHeaderCell.id]: {...testHeaderCell, sorted: TableSortingOrder.ASCENDING},\r\n            };\r\n\r\n            const nextState = {\r\n                [testHeaderCell.id]: {...testHeaderCell, sorted: TableSortingOrder.UNSORTED},\r\n            };\r\n            expect(\r\n                tableHeaderCellsReducer(\r\n                    currentState,\r\n                    sortFromHeaderCell('differentId', testHeaderCell.attributeToSort, testHeaderCell.tableId)\r\n                )\r\n            ).toEqual(nextState);\r\n        });\r\n\r\n        it('should not modify the sorted prop of the header cell having an identical id but a different tableId', () => {\r\n            const currentState = {\r\n                [testHeaderCell.id]: testHeaderCell,\r\n            };\r\n\r\n            expect(\r\n                tableHeaderCellsReducer(\r\n                    currentState,\r\n                    sortFromHeaderCell(testHeaderCell.id, testHeaderCell.attributeToSort, 'differentTableId')\r\n                )\r\n            ).toEqual(currentState);\r\n        });\r\n\r\n        it('should not modify the sorted prop of the header cell having a different id and a different tableId', () => {\r\n            const currentState = {\r\n                [testHeaderCell.id]: testHeaderCell,\r\n            };\r\n\r\n            expect(\r\n                tableHeaderCellsReducer(\r\n                    currentState,\r\n                    sortFromHeaderCell('differentId', testHeaderCell.attributeToSort, 'differentTableId')\r\n                )\r\n            ).toEqual(currentState);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=880.bundle.js.map