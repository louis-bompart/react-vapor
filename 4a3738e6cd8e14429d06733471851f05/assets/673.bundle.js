(window.webpackJsonp=window.webpackJsonp||[]).push([[673],{1758:function(t,i,e){"use strict";e.r(i),i.default="import * as _ from 'underscore';\r\nimport {IStringListPayload, StringListActions} from '../../../reusableState/customList/StringListActions';\r\nimport {IStringListState, stringListCompositeReducer} from '../../../reusableState/customList/StringListReducers';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {IListBoxPayload, ListBoxActions} from '../../listBox/ListBoxActions';\r\n\r\nexport type ISelectWithFilterCompositeState = {[id: string]: ISelectWithFilterState};\r\n\r\nexport interface ISelectWithFilterState extends IStringListState {}\r\n\r\nexport interface ISelectWithFilterPayload extends IStringListPayload, IListBoxPayload {}\r\n\r\nexport const selectWithFilterInitialState: ISelectWithFilterCompositeState = {};\r\n\r\nexport const selectWithFilterCompositeReducer = (\r\n    state: ISelectWithFilterCompositeState = selectWithFilterInitialState,\r\n    action: IReduxAction<ISelectWithFilterPayload>\r\n): ISelectWithFilterCompositeState => {\r\n    if (_.contains(StringListActions, action.type)) {\r\n        return stringListCompositeReducer(state, action);\r\n    }\r\n\r\n    if (!action.payload || !state[action.payload.id]) {\r\n        return state;\r\n    }\r\n\r\n    const stateList = {...state[action.payload.id]};\r\n    switch (action.type) {\r\n        case ListBoxActions.select:\r\n            return {\r\n                ...state,\r\n                [action.payload.id]: {\r\n                    ...stateList,\r\n                    list: action.payload.multi\r\n                        ? _.uniq([...stateList.list, action.payload.value])\r\n                        : [action.payload.value],\r\n                },\r\n            };\r\n        case ListBoxActions.unselect:\r\n            return {\r\n                ...state,\r\n                [action.payload.id]: {\r\n                    ...stateList,\r\n                    list: [..._.without(stateList.list, action.payload.value)],\r\n                },\r\n            };\r\n        case ListBoxActions.clear:\r\n            return {\r\n                ...state,\r\n                [action.payload.id]: {\r\n                    ...stateList,\r\n                    list: [],\r\n                },\r\n            };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=673.bundle.js.map