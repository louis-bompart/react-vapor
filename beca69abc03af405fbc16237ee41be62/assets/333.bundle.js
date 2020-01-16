(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{1429:function(o,r,n){"use strict";n.r(r),r.default="import {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {\r\n    DropdownSearch,\r\n    IDropdownOption,\r\n    IDropdownSearchOwnProps,\r\n    IDropdownSearchProps,\r\n    IDropdownSearchStateProps,\r\n} from './DropdownSearch';\r\nimport {\r\n    addDropdownSearch,\r\n    applyFilterDropdownSearch,\r\n    closeDropdownSearch,\r\n    removeDropdownSearch,\r\n    selectOptionDropdownSearch,\r\n    selectOrSetNextActiveOption,\r\n    toggleDropdownSearch,\r\n    updateActiveOptionDropdownSearch,\r\n    updateOptionsDropdownSearch,\r\n} from './DropdownSearchActions';\r\nimport {IDropdownSearchState} from './DropdownSearchReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IDropdownSearchProps): IDropdownSearchStateProps => {\r\n    const dropdownSearch: IDropdownSearchState = _.findWhere(state.dropdownSearch, {id: ownProps.id});\r\n\r\n    if (dropdownSearch) {\r\n        return {\r\n            isOpened: dropdownSearch.isOpened || false,\r\n            options: dropdownSearch.options || [],\r\n            filterText: dropdownSearch.filterText || '',\r\n            activeOption: dropdownSearch.activeOption,\r\n            setFocusOnDropdownButton: dropdownSearch.setFocusOnDropdownButton,\r\n        };\r\n    }\r\n\r\n    return {\r\n        isOpened: false,\r\n        options: ownProps.defaultOptions || [],\r\n        filterText: '',\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IDropdownSearchOwnProps) => ({\r\n    onMount: () => {\r\n        dispatch(\r\n            addDropdownSearch(\r\n                ownProps.id,\r\n                ownProps.defaultOptions,\r\n                ownProps.defaultSelectedOption,\r\n                ownProps.supportSingleCustomOption\r\n            )\r\n        );\r\n\r\n        // TODO: remove this once the component is refactored and the DropdownSearchReducer is not overwriting the defaultSelectedOption passed above anymore.\r\n        if (ownProps.defaultSelectedOption) {\r\n            dispatch(updateOptionsDropdownSearch(ownProps.id, ownProps.defaultOptions, ownProps.defaultSelectedOption));\r\n        }\r\n    },\r\n    onDestroy: () => dispatch(removeDropdownSearch(ownProps.id)),\r\n    onToggleDropdown: () => dispatch(toggleDropdownSearch(ownProps.id)),\r\n    onBlur: () => dispatch(toggleDropdownSearch(ownProps.id)),\r\n    onOptionClick: (option: IDropdownOption) => dispatch(selectOptionDropdownSearch(ownProps.id, option)),\r\n    onFilterTextChange: (filterText: string) => dispatch(applyFilterDropdownSearch(ownProps.id, filterText)),\r\n    onKeyDownFilterBox: (keyCode: number, activeOption?: IDropdownOption) =>\r\n        dispatch(selectOrSetNextActiveOption(ownProps.id, keyCode, activeOption)),\r\n    onKeyDownDropdownButton: (keyCode: number, activeOption?: IDropdownOption) =>\r\n        dispatch(selectOrSetNextActiveOption(ownProps.id, keyCode, activeOption)),\r\n    onMouseEnterDropdown: (activeOption?: IDropdownOption) =>\r\n        dispatch(updateActiveOptionDropdownSearch(ownProps.id, -1, activeOption)),\r\n    onClose: () => dispatch(closeDropdownSearch(ownProps.id)),\r\n    updateOptions: (options: IDropdownOption[]) => dispatch(updateOptionsDropdownSearch(ownProps.id, options)),\r\n});\r\n\r\nexport const DropdownSearchConnected: React.ComponentClass<IDropdownSearchProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(DropdownSearch);\r\n"}}]);
//# sourceMappingURL=333.bundle.js.map