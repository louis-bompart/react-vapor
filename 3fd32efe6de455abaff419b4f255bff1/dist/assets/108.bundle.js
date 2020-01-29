(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1221:function(e,r,o){"use strict";o.r(r),r.default="import {ReducersMapObject} from 'redux';\r\n\r\nimport {actionBarsReducer} from './components/actions/ActionBarReducers';\r\nimport {itemFiltersReducer} from './components/actions/filters/ItemFilterReducers';\r\nimport {autocompletesReducer} from './components/autocomplete/AutocompleteReducers';\r\nimport {checkboxesReducer} from './components/checkbox/CheckboxReducers';\r\nimport {groupableCheckboxesReducer} from './components/checkbox/GroupableCheckboxReducers';\r\nimport {collapsiblesReducer} from './components/collapsible/CollapsibleReducers';\r\nimport {datePickersReducer} from './components/datePicker/DatePickerReducers';\r\nimport {dropReducer} from './components/drop/redux/DropReducers';\r\nimport {dropdownsReducer} from './components/dropdown/DropdownReducers';\r\nimport {dropdownsSearchReducer} from './components/dropdownSearch/DropdownSearchReducers';\r\nimport {facetsReducer} from './components/facets/FacetReducers';\r\nimport {filterBoxesReducer} from './components/filterBox/FilterBoxReducers';\r\nimport {flatSelectsReducer} from './components/flatSelect/FlatSelectReducers';\r\nimport {flippablesReducer} from './components/flippable/FlippableReducers';\r\nimport {promptsReducer} from './components/inlinePrompt/InlinePromptReducers';\r\nimport {inputsReducer} from './components/input/InputReducers';\r\nimport {lastUpdatedCompositeReducer} from './components/lastUpdated/LastUpdatedReducers';\r\nimport {listBoxesReducer} from './components/listBox/ListBoxReducers';\r\nimport {loadingsReducer} from './components/loading/LoadingReducers';\r\nimport {menuCompositeReducer} from './components/menu/MenuReducers';\r\nimport {modalsReducer, openModalsReducer} from './components/modal/ModalReducers';\r\nimport {paginationCompositeReducer} from './components/navigation/pagination/NavigationPaginationReducers';\r\nimport {perPageCompositeReducer} from './components/navigation/perPage/NavigationPerPageReducers';\r\nimport {numericInputReducer} from './components/numericInput/NumericInputReducers';\r\nimport {optionPickersReducer} from './components/optionPicker/OptionPickerReducers';\r\nimport {optionsCyclesReducer} from './components/optionsCycle/OptionsCycleReducers';\r\nimport {popoversReducer} from './components/popover/PopoverReducers';\r\nimport {radioSelectsReducer} from './components/radio/RadioSelectReducers';\r\nimport {refreshCallBackReducer} from './components/refresh/RefreshCallbackReducer';\r\nimport {searchBarsReducer} from './components/searchBar/SearchBarReducers';\r\nimport {selectWithFilterCompositeReducer} from './components/select/hoc/SelectWithFilterReducers';\r\nimport {selectCompositeReducer} from './components/select/SelectReducers';\r\nimport {SliderReducer} from './components/slider/SliderReducers';\r\nimport {subNavigationsReducer} from './components/subNavigation/SubNavigationReducers';\r\nimport {tabGroupsReducer} from './components/tab/TabReducers';\r\nimport {TableRowReducers} from './components/table-hoc/reducers/TableRowReducers';\r\nimport {TableWithPaginationReducers} from './components/table-hoc/reducers/TableWithPaginationReducers';\r\nimport {TableWithSortReducers} from './components/table-hoc/reducers/TableWithSortReducers';\r\nimport {tableHeaderCellsReducer} from './components/tables/TableHeaderCellReducers';\r\nimport {tablesReducer} from './components/tables/TableReducers';\r\nimport {tableRowsReducer} from './components/tables/TableRowReducers';\r\nimport {textAreasReducer} from './components/textarea/TextAreaReducers';\r\nimport {toastsContainerReducer} from './components/toast/ToastReducers';\r\nimport {withDirtyReducer} from './hoc/withDirty/withDirtyReducers';\r\nimport {IReactVaporState} from './ReactVapor';\r\nimport {stringListCompositeReducer} from './reusableState/customList/StringListReducers';\r\nimport {IReduxAction} from './utils/ReduxUtils';\r\n\r\nconst lastAction = (state: IReactVaporState = null, action: IReduxAction): IReduxAction => {\r\n    return action;\r\n};\r\n\r\nexport const ReactVaporReducers: ReducersMapObject = {\r\n    actionBars: actionBarsReducer,\r\n    autocompletes: autocompletesReducer,\r\n    checkboxes: checkboxesReducer,\r\n    collapsibles: collapsiblesReducer,\r\n    datePickers: datePickersReducer,\r\n    dirtyComponents: withDirtyReducer,\r\n    drop: dropReducer,\r\n    dropdowns: dropdownsReducer,\r\n    dropdownSearch: dropdownsSearchReducer,\r\n    facets: facetsReducer,\r\n    filters: filterBoxesReducer,\r\n    flatSelect: flatSelectsReducer,\r\n    flippables: flippablesReducer,\r\n    groupableCheckboxes: groupableCheckboxesReducer,\r\n    inputs: inputsReducer,\r\n    itemFilters: itemFiltersReducer,\r\n    lastAction,\r\n    lastUpdatedComposite: lastUpdatedCompositeReducer,\r\n    listBoxes: listBoxesReducer,\r\n    loadings: loadingsReducer,\r\n    menus: menuCompositeReducer,\r\n    modals: modalsReducer,\r\n    multilineIds: stringListCompositeReducer,\r\n    numericInputs: numericInputReducer,\r\n    openModals: openModalsReducer,\r\n    optionPickers: optionPickersReducer,\r\n    optionsCycles: optionsCyclesReducer,\r\n    paginationComposite: paginationCompositeReducer,\r\n    perPageComposite: perPageCompositeReducer,\r\n    popovers: popoversReducer,\r\n    prompts: promptsReducer,\r\n    radioSelects: radioSelectsReducer,\r\n    refreshCallback: refreshCallBackReducer,\r\n    rows: tableRowsReducer,\r\n    searchBars: searchBarsReducer,\r\n    selects: selectCompositeReducer,\r\n    selectWithFilter: selectWithFilterCompositeReducer,\r\n    sliders: SliderReducer,\r\n    subNavigations: subNavigationsReducer,\r\n    tableHeaderCells: tableHeaderCellsReducer,\r\n    tableHOCHeader: TableWithSortReducers,\r\n    tableHOCPagination: TableWithPaginationReducers,\r\n    tableHOCRow: TableRowReducers,\r\n    tables: tablesReducer,\r\n    tabs: tabGroupsReducer,\r\n    textAreas: textAreasReducer,\r\n    toastContainers: toastsContainerReducer,\r\n};\r\n"}}]);
//# sourceMappingURL=108.bundle.js.map