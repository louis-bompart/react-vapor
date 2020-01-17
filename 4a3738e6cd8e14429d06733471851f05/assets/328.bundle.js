(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{1420:function(n,r,o){"use strict";o.r(r),r.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IDropdownOption} from './DropdownSearch';\r\nimport {isSelectingOption} from './DropdownSearchUtils';\r\n\r\nexport interface IDefaultDropdownSearchPayload {\r\n    id: string;\r\n}\r\n\r\nexport interface IInputDrodownSearchPayload extends IDefaultDropdownSearchPayload {\r\n    keyCode?: number;\r\n    activeOption?: IDropdownOption;\r\n}\r\n\r\nexport interface IOptionsDropdownSearchPayload extends IDefaultDropdownSearchPayload, IInputDrodownSearchPayload {\r\n    dropdownOptions?: IDropdownOption[];\r\n    filterText?: string;\r\n    selectedOptions?: IDropdownOption[];\r\n    defaultSelectedOption?: IDropdownOption;\r\n    selectedOptionValue?: string;\r\n    addedSelectedOption?: IDropdownOption;\r\n    isOpened?: boolean;\r\n    supportSingleCustomOption?: boolean;\r\n    setFocusOnDropdown?: boolean;\r\n    selectAValue?: boolean;\r\n}\r\n\r\nexport const DropdownSearchActions = {\r\n    toggle: 'TOGGLE_DROPDOWN_SEARCH',\r\n    open: 'OPEN_DROPDOWN_SEARCH',\r\n    close: 'CLOSE_DROPDOWN_SEARCH',\r\n    add: 'ADD_DROPDOWN_SEARCH',\r\n    addMultiSelect: 'ADD_MULTI_SELECT_DROPDOWN_SEARCH',\r\n    addCustomSelectedOption: 'ADD_CUSTOM_SELECTED_OPTION',\r\n    remove: 'REMOVE_DROPDOWN_SEARCH',\r\n    update: 'UPDATE_DROPDOWN_SEARCH',\r\n    filter: 'FILTER_DROPDOWN_SEARCH',\r\n    select: 'SELECT_DROPDOWN_SEARCH',\r\n    active: 'ACTIVE_DROPDOWN_SEARCH',\r\n    deselectOption: 'DESELECT_OPTION_DROPDOWN_SEARCH',\r\n    deselectAllOptions: 'DESELECT_ALL_OPTIONS_MULTISELECT_DROPDOWN_SEARCH',\r\n    multiSelect: 'MULTI_SELECT_OPTION_DROPDOWN_SEARCH',\r\n    onKeyDownMultiselect: 'KEY_DOWN_MULTISELECT',\r\n};\r\n\r\nexport const applyFilterDropdownSearch = (\r\n    id: string,\r\n    filterText: string\r\n): IReduxAction<IOptionsDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.filter,\r\n    payload: {\r\n        id,\r\n        filterText,\r\n    },\r\n});\r\n\r\nexport const updateOptionsDropdownSearch = (\r\n    id: string,\r\n    dropdownOptions: IDropdownOption[],\r\n    defaultSelectedOption?: IDropdownOption,\r\n    selectAValue: boolean = true\r\n): IReduxAction<IOptionsDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.update,\r\n    payload: {\r\n        id,\r\n        dropdownOptions,\r\n        defaultSelectedOption,\r\n        selectAValue,\r\n    },\r\n});\r\n\r\nexport const toggleDropdownSearch = (id: string): IReduxAction<IDefaultDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.toggle,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const openDropdownSearch = (id: string): IReduxAction<IDefaultDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.open,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const closeDropdownSearch = (\r\n    id: string,\r\n    dropdownOptions: IDropdownOption[] = []\r\n): IReduxAction<IOptionsDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.close,\r\n    payload: {\r\n        id,\r\n        // passing dropdownOptions on close is useful to give accessibilty to the currently selected/unselected options of a MultiselectDropdownSearch\r\n        dropdownOptions,\r\n    },\r\n});\r\n\r\nexport const addDropdownSearch = (\r\n    id: string,\r\n    dropdownOptions: IDropdownOption[],\r\n    defaultSelectedOption?: IDropdownOption,\r\n    supportSingleCustomOption?: boolean\r\n): IReduxAction<IOptionsDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.add,\r\n    payload: {\r\n        id,\r\n        dropdownOptions,\r\n        defaultSelectedOption,\r\n        supportSingleCustomOption: !!supportSingleCustomOption,\r\n    },\r\n});\r\n\r\nexport const addMultiSelectDropdownSearch = (\r\n    id: string,\r\n    dropdownOptions: IDropdownOption[]\r\n): IReduxAction<IOptionsDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.addMultiSelect,\r\n    payload: {\r\n        id,\r\n        dropdownOptions,\r\n    },\r\n});\r\n\r\nexport const removeDropdownSearch = (id: string): IReduxAction<IDefaultDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const selectOptionDropdownSearch = (\r\n    id: string,\r\n    addedSelectedOption: IDropdownOption,\r\n    setFocusOnDropdown = false\r\n): IReduxAction<IOptionsDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.select,\r\n    payload: {\r\n        id,\r\n        addedSelectedOption,\r\n        setFocusOnDropdown,\r\n    },\r\n});\r\n\r\nexport const multiSelectOptionDropdownSearch = (\r\n    id: string,\r\n    addedSelectedOption: IDropdownOption\r\n): IReduxAction<IOptionsDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.multiSelect,\r\n    payload: {\r\n        id,\r\n        addedSelectedOption,\r\n    },\r\n});\r\n\r\nexport const addCustomSelectedOption = (\r\n    id: string,\r\n    selectedOptionValue: string\r\n): IReduxAction<IOptionsDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.addCustomSelectedOption,\r\n    payload: {\r\n        id,\r\n        selectedOptionValue,\r\n    },\r\n});\r\n\r\nexport const deselectOptionDropdownSearch = (\r\n    id: string,\r\n    selectedOptionValue: string\r\n): IReduxAction<IOptionsDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.deselectOption,\r\n    payload: {\r\n        id,\r\n        selectedOptionValue,\r\n    },\r\n});\r\n\r\nexport const deselectAllOptionsMultiselectDropdownSearch = (\r\n    id: string\r\n): IReduxAction<IOptionsDropdownSearchPayload> => ({\r\n    type: DropdownSearchActions.deselectAllOptions,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const updateActiveOptionDropdownSearch = (\r\n    id: string,\r\n    keyCode: number,\r\n    activeOption?: IDropdownOption\r\n): IReduxAction<IInputDrodownSearchPayload> => ({\r\n    type: DropdownSearchActions.active,\r\n    payload: {\r\n        id,\r\n        keyCode,\r\n        activeOption,\r\n    },\r\n});\r\n\r\nexport const keyDownMultiselectDropdownSearch = (\r\n    id: string,\r\n    keyCode: number\r\n): IReduxAction<IInputDrodownSearchPayload> => ({\r\n    type: DropdownSearchActions.onKeyDownMultiselect,\r\n    payload: {\r\n        id,\r\n        keyCode,\r\n    },\r\n});\r\n\r\nexport const selectOrSetNextActiveOption = (id: string, keyCode: number, activeOption?: IDropdownOption) =>\r\n    isSelectingOption(keyCode, activeOption)\r\n        ? selectOptionDropdownSearch(id, activeOption, true)\r\n        : updateActiveOptionDropdownSearch(id, keyCode, activeOption);\r\n\r\nexport const DropdownSearchReduxActions = {\r\n    applyFilterDropdownSearch,\r\n    updateOptionsDropdownSearch,\r\n    toggleDropdownSearch,\r\n    openDropdownSearch,\r\n    closeDropdownSearch,\r\n    addDropdownSearch,\r\n    addMultiSelectDropdownSearch,\r\n    removeDropdownSearch,\r\n    selectOptionDropdownSearch,\r\n    multiSelectOptionDropdownSearch,\r\n    addCustomSelectedOption,\r\n    deselectOptionDropdownSearch,\r\n    deselectAllOptionsMultiselectDropdownSearch,\r\n    updateActiveOptionDropdownSearch,\r\n    keyDownMultiselectDropdownSearch,\r\n    selectOrSetNextActiveOption,\r\n};\r\n"}}]);
//# sourceMappingURL=328.bundle.js.map