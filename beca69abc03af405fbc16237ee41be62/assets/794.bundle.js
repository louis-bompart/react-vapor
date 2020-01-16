(window.webpackJsonp=window.webpackJsonp||[]).push([[794],{1882:function(e,t,r){"use strict";r.r(t),t.default="import {TableHOCUtils} from '../TableHOCUtils';\r\n\r\ndescribe('TableHOCUtils', () => {\r\n    const defaultProps = {id: 'some-id', componentId: 'some-componentId', tableId: 'some-tableId'};\r\n\r\n    describe('getPredicateId', () => {\r\n        it('should get predicate id', () => {\r\n            const predicateId = TableHOCUtils.getPredicateId(defaultProps.tableId, defaultProps.componentId);\r\n\r\n            expect(predicateId).toEqual(defaultProps.tableId + '--' + defaultProps.componentId);\r\n        });\r\n    });\r\n\r\n    describe('getPredicateIds', () => {\r\n        it('should get predicate all the predicate ids associated with the table id', () => {\r\n            const predicates = TableHOCUtils.getPredicateIds(defaultProps.tableId, {\r\n                listBoxes: [\r\n                    {\r\n                        id: TableHOCUtils.getPredicateId(defaultProps.tableId, '🦇'),\r\n                        selected: ['🎃'],\r\n                    },\r\n                    {\r\n                        id: TableHOCUtils.getPredicateId(defaultProps.tableId, '🌳'),\r\n                        selected: ['🐍'],\r\n                    },\r\n                ],\r\n            });\r\n\r\n            expect(predicates).toContain(`🦇`);\r\n            expect(predicates).toContain(`🌳`);\r\n        });\r\n    });\r\n\r\n    describe('getTableIdFromPredicateId', () => {\r\n        it('should parse predicated id to table id', () => {\r\n            const predicateId = TableHOCUtils.getPredicateId(defaultProps.tableId, defaultProps.componentId);\r\n            const tableId = TableHOCUtils.getTableIdFromPredicateId(predicateId);\r\n\r\n            expect(tableId).toEqual(defaultProps.tableId);\r\n        });\r\n    });\r\n\r\n    describe('getPaginationId', () => {\r\n        it('should get pagination id', () => {\r\n            const paginationId = TableHOCUtils.getPaginationId(defaultProps.tableId);\r\n            const expectedResult = `pagination-${defaultProps.tableId}`;\r\n\r\n            expect(paginationId).toEqual(expectedResult);\r\n        });\r\n    });\r\n\r\n    describe('getCompositeState', () => {\r\n        const predicateId = TableHOCUtils.getPredicateId(defaultProps.tableId, defaultProps.componentId);\r\n        const predicateValue = 'LONG_64';\r\n        const defaultState: any = {\r\n            tableHOCHeader: [{id: defaultProps.id, tableId: defaultProps.tableId, isAsc: true}],\r\n            paginationComposite: [{id: `pagination-${defaultProps.tableId}`, pageNb: 2}],\r\n            perPageComposite: [{id: defaultProps.tableId, perPage: 10}],\r\n            filters: [{id: defaultProps.tableId, filterText: 'some-text'}],\r\n            listBoxes: [{id: predicateId, selected: [predicateValue]}],\r\n        };\r\n\r\n        it('should return composite state', () => {\r\n            const compositeState = TableHOCUtils.getCompositeState(defaultProps.tableId, defaultState);\r\n            const expectedResult = {\r\n                predicates: [{id: defaultProps.componentId, value: predicateValue}],\r\n                sortKey: defaultProps.id,\r\n                sortAscending: true,\r\n                perPage: 10,\r\n                pageNb: 2,\r\n                filter: 'some-text',\r\n                dateLimits: [null, null] as any,\r\n            };\r\n\r\n            expect(compositeState).toEqual(expectedResult);\r\n        });\r\n    });\r\n\r\n    describe('getDatePickerId', () => {\r\n        it('should get the table date picker id', () => {\r\n            const datePickerId = TableHOCUtils.getDatePickerId('🐞');\r\n\r\n            expect(datePickerId).toEqual('🐞-date-range');\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=794.bundle.js.map