(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1229:function(t,r,n){"use strict";n.r(r),r.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\n\r\nexport const ItemFilterActions = {\r\n    add: 'ADD_ITEM_FILTER',\r\n    filter: 'FILTER_ITEMS',\r\n    remove: 'REMOVE_ITEM_FILTER',\r\n};\r\n\r\nexport interface IItemFilterActionPayload {\r\n    id: string;\r\n}\r\n\r\nexport interface IItemFilteringActionPayload extends IItemFilterActionPayload {\r\n    item: string;\r\n}\r\n\r\nexport const addItemFilter = (id: string): IReduxAction<IItemFilterActionPayload> => ({\r\n    type: ItemFilterActions.add,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const filterItems = (id: string, item: string): IReduxAction<IItemFilteringActionPayload> => ({\r\n    type: ItemFilterActions.filter,\r\n    payload: {\r\n        id,\r\n        item,\r\n    },\r\n});\r\n\r\nexport const removeItemFilter = (id: string): IReduxAction<IItemFilterActionPayload> => ({\r\n    type: ItemFilterActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=129.bundle.js.map