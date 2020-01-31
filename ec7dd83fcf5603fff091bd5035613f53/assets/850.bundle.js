(window.webpackJsonp=window.webpackJsonp||[]).push([[850],{1948:function(t,a,e){"use strict";e.r(a),a.default="import * as _ from 'underscore';\r\nimport {contains} from 'underscore.string';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IActionOptions} from '../actions/Action';\r\nimport {LoadingActions} from '../loading/LoadingActions';\r\nimport {ITablePredicate} from './Table';\r\nimport {ITableActionPayload, TableActions} from './TableActions';\r\nimport {DEFAULT_TABLE_DATA, TableChildComponent, TableSortingOrder} from './TableConstants';\r\nimport {TableHeaderCellActions} from './TableHeaderCellActions';\r\nimport {getTableChildComponentId} from './TableUtils';\r\n\r\nexport interface ITableById {\r\n    [id: string]: {\r\n        id: string;\r\n        [attribute: string]: any;\r\n    };\r\n}\r\n\r\nexport interface ITableData {\r\n    byId: ITableById;\r\n    allIds: string[]; // useful to loop over all ids\r\n    displayedIds: string[]; // will be the data displayed in the table\r\n    totalEntries: number;\r\n    totalPages: number;\r\n    selectedIds?: string[];\r\n    /**\r\n     * Only used by DEFAULT_TABLE_DATA object in TableConstants.tsx.\r\n     * Useful for differientiating it from empty table data during the table initial load logic\r\n     */\r\n    IS_DEFAULT_TABLE_DATA?: boolean;\r\n}\r\n\r\nexport interface ITablesState {\r\n    [id: string]: ITableState;\r\n}\r\n\r\nexport type attributeName = any;\r\nexport type attributeValue = any;\r\n\r\nexport interface ITableCompositeState {\r\n    id: string;\r\n    data: ITableData;\r\n    isInError: boolean;\r\n    isLoading: boolean;\r\n    filter: string;\r\n    page: number;\r\n    perPage: number;\r\n    sortState: {\r\n        attribute: attributeName;\r\n        order: TableSortingOrder;\r\n    };\r\n    predicates: {\r\n        [attributeNameAssociatedToPredicate: string]: attributeValue;\r\n    };\r\n    from: Date;\r\n    to: Date;\r\n    actions?: IActionOptions[];\r\n    dataDeleted?: boolean;\r\n}\r\n\r\nexport interface ITableState {\r\n    id: string;\r\n    data: ITableData;\r\n    isInError: boolean;\r\n    isLoading: boolean;\r\n    filterId: string;\r\n    datePickerId: string;\r\n    datePickerRangeId: string;\r\n    paginationId: string;\r\n    perPageId: string;\r\n    predicateIds: string[];\r\n    tableHeaderCellId: string;\r\n    yPosition: number;\r\n    dataDeleted?: boolean;\r\n}\r\n\r\nexport const tableInitialState: ITableState = {\r\n    id: undefined,\r\n    data: DEFAULT_TABLE_DATA,\r\n    isInError: false,\r\n    isLoading: false,\r\n    paginationId: undefined,\r\n    perPageId: undefined,\r\n    filterId: undefined,\r\n    predicateIds: [],\r\n    tableHeaderCellId: undefined,\r\n    datePickerId: undefined,\r\n    datePickerRangeId: undefined,\r\n    yPosition: undefined,\r\n    dataDeleted: false,\r\n};\r\n\r\nexport const tablesInitialState: {[tableId: string]: ITableState} = {};\r\n\r\nexport const updateSelectedIDs = (state: ITableState, oldSelectedIds: string[]): ITableState => {\r\n    const newSelectedIds = _.reject(\r\n        oldSelectedIds,\r\n        (selectedId: string) => !_.contains(state.data.displayedIds, selectedId)\r\n    );\r\n    return {\r\n        ...state,\r\n        dataDeleted: false,\r\n        data: {\r\n            ...state.data,\r\n            selectedIds: newSelectedIds,\r\n        },\r\n    };\r\n};\r\n\r\nexport const tableReducer = (\r\n    state: ITableState = tableInitialState,\r\n    action: IReduxAction<ITableActionPayload>\r\n): ITableState => {\r\n    switch (action.type) {\r\n        case TableActions.add:\r\n            return {\r\n                ...tableInitialState,\r\n                id: action.payload.id,\r\n                data: action.payload.initialTableData,\r\n                perPageId: getTableChildComponentId(action.payload.id, TableChildComponent.PER_PAGE),\r\n                paginationId: getTableChildComponentId(action.payload.id, TableChildComponent.PAGINATION),\r\n                filterId: getTableChildComponentId(action.payload.id, TableChildComponent.FILTER),\r\n                predicateIds: action.payload.predicates.map(\r\n                    (predicate: ITablePredicate) =>\r\n                        `${getTableChildComponentId(action.payload.id, TableChildComponent.PREDICATE)}${\r\n                            predicate.attributeName\r\n                        }`\r\n                ),\r\n                datePickerId: getTableChildComponentId(action.payload.id, TableChildComponent.DATEPICKER),\r\n                datePickerRangeId: getTableChildComponentId(action.payload.id, TableChildComponent.DATEPICKER_RANGE),\r\n                dataDeleted: false,\r\n            };\r\n        case TableActions.modifyState:\r\n            const selectedIds: string[] = state.data && state.data.selectedIds ? state.data.selectedIds : [];\r\n            return updateSelectedIDs(action.payload.tableStateModifier(state), selectedIds);\r\n        case TableActions.inError:\r\n            return {\r\n                ...state,\r\n                dataDeleted: false,\r\n                isInError: action.payload.isInError,\r\n            };\r\n        case LoadingActions.turnOn:\r\n            return {\r\n                ...state,\r\n                dataDeleted: false,\r\n                isLoading: true,\r\n            };\r\n        case LoadingActions.turnOff:\r\n            return {\r\n                ...state,\r\n                dataDeleted: false,\r\n                isLoading: false,\r\n            };\r\n        case TableHeaderCellActions.sort:\r\n            return {\r\n                ...state,\r\n                dataDeleted: false,\r\n                tableHeaderCellId: action.payload.id,\r\n            };\r\n        case TableActions.updateSelectedIds:\r\n            return {\r\n                ...state,\r\n                dataDeleted: false,\r\n                data: {\r\n                    ...state.data,\r\n                    selectedIds: action.payload.hasMultipleSelectedRow\r\n                        ? _.union(state.data.selectedIds, action.payload.selectedIds)\r\n                        : action.payload.selectedIds.slice(0, 1),\r\n                },\r\n            };\r\n        case TableActions.deleteTableDataEntry:\r\n            return {\r\n                ...state,\r\n                dataDeleted: !!state.data.byId[action.payload.dataId],\r\n                data: {\r\n                    ...state.data,\r\n                    byId: {\r\n                        ..._.omit(state.data.byId, action.payload.dataId),\r\n                    },\r\n                    allIds: _.reject(state.data.allIds, (id) => id === action.payload.dataId),\r\n                    displayedIds: _.reject(state.data.displayedIds, (id) => id === action.payload.dataId),\r\n                    selectedIds: _.reject(state.data.selectedIds, (id) => id === action.payload.dataId),\r\n                },\r\n            };\r\n        case TableActions.addTableDataEntry:\r\n            return {\r\n                ...state,\r\n                dataDeleted: false,\r\n                data: {\r\n                    ...state.data,\r\n                    byId: {\r\n                        ...state.data.byId,\r\n                        [action.payload.data.id]: action.payload.data,\r\n                    },\r\n                    allIds: _.uniq([action.payload.data.id, ...state.data.allIds]),\r\n                    displayedIds: _.initial([action.payload.data.id, ...state.data.displayedIds]),\r\n                },\r\n            };\r\n        case TableActions.updateTableDataEntry:\r\n            return state.data.byId[action.payload.data.id]\r\n                ? {\r\n                      ...state,\r\n                      dataDeleted: false,\r\n                      data: {\r\n                          ...state.data,\r\n                          byId: {\r\n                              ...state.data.byId,\r\n                              [action.payload.data.id]: {\r\n                                  ...state.data.byId[action.payload.data.id],\r\n                                  ...action.payload.data,\r\n                              },\r\n                          },\r\n                      },\r\n                  }\r\n                : state;\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const tablesReducer = (tablesState = tablesInitialState, action: IReduxAction<ITableActionPayload | any>) => {\r\n    switch (action.type) {\r\n        case TableActions.add:\r\n            return {\r\n                ...tablesState,\r\n                [action.payload.id]: tableReducer(undefined, action),\r\n            };\r\n        case TableActions.remove:\r\n            return _.omit(tablesState, action.payload.id);\r\n        default:\r\n            const currentTableId = _.contains([LoadingActions.turnOn, LoadingActions.turnOff], action.type)\r\n                ? _.chain(action.payload.ids)\r\n                      .intersection(_.keys(tablesState))\r\n                      .first()\r\n                      .value()\r\n                : _.findKey(tablesState, (tableState, tableId: string) =>\r\n                      contains(action.payload && action.payload.id, tableId)\r\n                  );\r\n\r\n            return currentTableId\r\n                ? {...tablesState, [currentTableId]: tableReducer(tablesState[currentTableId], action)}\r\n                : tablesState;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=850.bundle.js.map