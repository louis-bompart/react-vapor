(window.webpackJsonp=window.webpackJsonp||[]).push([[682],{1785:function(t,e,r){"use strict";r.r(e),e.default="import {createSelector} from 'reselect';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {convertStringListToItemsBox} from '../../reusableState/customList/StringListReducers';\r\nimport {DropSelectors} from '../drop/redux/DropReducers';\r\nimport {FilterBoxSelectors} from '../filterBox/FilterBoxSelectors';\r\nimport {MatchFilter} from '../filterBox/FilterBoxUtils';\r\nimport {IItemBoxProps} from '../itemBox/ItemBox';\r\nimport {IListBoxState} from '../listBox/ListBoxReducers';\r\nimport {ISelectWithFilterProps} from './hoc/SelectWithFilter';\r\nimport {IMultiSelectProps} from './MultiSelectConnected';\r\nimport {ISelectProps, SelectConnected} from './SelectConnected';\r\n\r\nconst getListState = (state: IReactVaporState, ownProps: ISelectProps): string[] =>\r\n    state.selectWithFilter && state.selectWithFilter[ownProps.id] ? state.selectWithFilter[ownProps.id].list : [];\r\n\r\nconst getListBox = (state: IReactVaporState, ownProps: ISelectProps): Partial<IListBoxState> =>\r\n    _.findWhere(state.listBoxes, {id: ownProps.id}) || {};\r\n\r\nconst getItems = (state: IReactVaporState, ownProps: ISelectProps): IItemBoxProps[] => ownProps.items || [];\r\n\r\nconst itemsWithFilterCombiner = (\r\n    items: IItemBoxProps[],\r\n    filterText: string,\r\n    matchFilter: MatchFilter\r\n): IItemBoxProps[] =>\r\n    _.map(items, (item: IItemBoxProps) => ({...item, hidden: !matchFilter(filterText, item) || !!item.hidden}));\r\n\r\nconst getItemsWithFilter: (\r\n    state: IReactVaporState,\r\n    ownProps: ISelectWithFilterProps\r\n) => IItemBoxProps[] = createSelector(\r\n    getItems,\r\n    (state: IReactVaporState, ownProps: ISelectWithFilterProps) =>\r\n        FilterBoxSelectors.getFilterText(state, {id: ownProps.id}),\r\n    (state: IReactVaporState, ownProps: ISelectWithFilterProps) =>\r\n        FilterBoxSelectors.getMatchFilter(state, {matchFilter: ownProps.matchFilter}),\r\n    itemsWithFilterCombiner\r\n);\r\n\r\nconst customItemsCombiner = (items: IItemBoxProps[], listState: string[]): IItemBoxProps[] => {\r\n    const valueToRemove: string[] = _.map(items, (item: IItemBoxProps) => item.value);\r\n    return convertStringListToItemsBox(_.difference(listState, valueToRemove), {hidden: true, selected: true});\r\n};\r\n\r\nconst getCustomItems: (state: IReactVaporState, ownProps: ISelectWithFilterProps) => IItemBoxProps[] = createSelector(\r\n    [getItems, getListState],\r\n    customItemsCombiner\r\n);\r\n\r\nconst getCustomItemsWithFilter: (\r\n    state: IReactVaporState,\r\n    ownProps: ISelectProps\r\n) => IItemBoxProps[] = createSelector(\r\n    getItemsWithFilter,\r\n    getCustomItems,\r\n    (filteredItems: IItemBoxProps[], customItems: IItemBoxProps[]) => [...filteredItems, ...customItems]\r\n);\r\n\r\nconst getServerFilteredItems = createSelector(\r\n    getItems,\r\n    getCustomItems,\r\n    (serverSideProcessedItems, customValuesFiltered) => [...serverSideProcessedItems, ...customValuesFiltered]\r\n);\r\n\r\nconst listBoxSelectedCombiner = (listBox: IListBoxState): string[] =>\r\n    listBox && listBox.selected ? listBox.selected : [];\r\n\r\nconst getListBoxSelected: (state: IReactVaporState, ownProps: ISelectProps) => string[] = createSelector(\r\n    getListBox,\r\n    listBoxSelectedCombiner\r\n);\r\n\r\nconst getListBoxActive: (state: IReactVaporState, ownProps: ISelectProps) => number = createSelector(\r\n    getListBox,\r\n    (listBox: IListBoxState) => listBox.active\r\n);\r\n\r\nconst getSelectOpened = (state: IReactVaporState, ownProps: ISelectProps) =>\r\n    DropSelectors.isOpen(state, {id: ownProps.id, groupId: SelectConnected.DropGroup});\r\n\r\nconst multiSelectSelectedValuesCombiner = (listBoxSelected: string[], listState: string[]): string[] =>\r\n    _.uniq([...listBoxSelected, ...listState]);\r\n\r\nconst getMultiSelectSelectedValues: (state: IReactVaporState, ownProps: IMultiSelectProps) => string[] = createSelector(\r\n    getListBoxSelected,\r\n    getListState,\r\n    multiSelectSelectedValuesCombiner\r\n);\r\n\r\nexport const SelectSelector = {\r\n    getListState,\r\n    getListBox,\r\n    getItems,\r\n    getListBoxSelected,\r\n    getListBoxActive,\r\n    getSelectOpened,\r\n    getCustomItemsWithFilter,\r\n    getMultiSelectSelectedValues,\r\n    getServerFilteredItems,\r\n};\r\n\r\nexport const SelectCombiners = {\r\n    listBoxSelectedCombiner,\r\n    customItemsCombiner,\r\n    itemsWithFilterCombiner,\r\n};\r\n"}}]);
//# sourceMappingURL=682.bundle.js.map