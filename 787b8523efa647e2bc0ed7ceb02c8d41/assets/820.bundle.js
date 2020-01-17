(window.webpackJsonp=window.webpackJsonp||[]).push([[820],{1906:function(r,n,e){"use strict";e.r(n),n.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const TableHeaderCellActions = {\r\n    add: 'ADD_HEADER_CELL',\r\n    remove: 'REMOVE_HEADER_CELL',\r\n    sort: 'SORT_FROM_HEADER_CELL',\r\n};\r\n\r\nexport interface ITableHeaderCellActionPayload {\r\n    id: string;\r\n    attributeToSort?: string;\r\n    tableId?: string;\r\n}\r\n\r\nexport const addHeaderCell = (\r\n    id: string,\r\n    attributeToSort: string,\r\n    tableId: string\r\n): IReduxAction<ITableHeaderCellActionPayload> => ({\r\n    type: TableHeaderCellActions.add,\r\n    payload: {\r\n        id,\r\n        attributeToSort,\r\n        tableId,\r\n    },\r\n});\r\n\r\nexport const removeHeaderCell = (id: string): IReduxAction<ITableHeaderCellActionPayload> => ({\r\n    type: TableHeaderCellActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const sortFromHeaderCell = (\r\n    id: string,\r\n    attributeToSort: string,\r\n    tableId: string\r\n): IReduxAction<ITableHeaderCellActionPayload> => ({\r\n    type: TableHeaderCellActions.sort,\r\n    payload: {\r\n        id,\r\n        attributeToSort,\r\n        tableId,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=820.bundle.js.map