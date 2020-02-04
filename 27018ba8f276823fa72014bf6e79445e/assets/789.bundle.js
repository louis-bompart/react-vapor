(window.webpackJsonp=window.webpackJsonp||[]).push([[789],{1889:function(t,e,r){"use strict";r.r(e),e.default="import * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {HOCTableRowState} from './reducers/TableRowReducers';\r\nimport {ITableWithSortState} from './reducers/TableWithSortReducers';\r\n\r\nexport interface TableSelectorsProps {\r\n    id: string;\r\n    data: any[];\r\n    isServer?: boolean;\r\n}\r\n\r\nconst initialTableSort: ITableWithSortState = {\r\n    id: '',\r\n    tableId: '',\r\n    isAsc: true,\r\n};\r\n\r\nconst getIsEmpty = (state: IReactVaporState, props: TableSelectorsProps): boolean =>\r\n    props.data !== null && (!props.data || props.data.length === 0);\r\n\r\nconst getDataCount = (state: IReactVaporState, props: TableSelectorsProps): number => {\r\n    const tablePaginationState = _.findWhere(state.tableHOCPagination, {id: props.id});\r\n    return props.isServer\r\n        ? (tablePaginationState && tablePaginationState.count) || 0\r\n        : (props.data && props.data.length) || 0;\r\n};\r\n\r\nconst getSort = (state: IReactVaporState, props: TableSelectorsProps): ITableWithSortState =>\r\n    _.find(state.tableHOCHeader, (v: ITableWithSortState) => v.tableId === props.id && _.isBoolean(v.isAsc)) ||\r\n    initialTableSort;\r\n\r\nconst getTableRow = (state: IReactVaporState, {id}: {id: string}): HOCTableRowState =>\r\n    _.findWhere(state.tableHOCRow, {id});\r\n\r\nconst getSelectedRows = (state: IReactVaporState, {id}: {id: string}): HOCTableRowState[] =>\r\n    _.where(state.tableHOCRow, {tableId: id, selected: true});\r\n\r\nexport const TableSelectors = {\r\n    getIsEmpty,\r\n    getDataCount,\r\n    getSort,\r\n    getTableRow,\r\n    getSelectedRows,\r\n};\r\n"}}]);
//# sourceMappingURL=789.bundle.js.map