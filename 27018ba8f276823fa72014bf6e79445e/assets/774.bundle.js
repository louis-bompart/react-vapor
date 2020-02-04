(window.webpackJsonp=window.webpackJsonp||[]).push([[774],{1874:function(t,r,a){"use strict";a.r(r),r.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {ITabActionPayload, TabAction} from './TabActions';\r\n\r\nexport const DEFAULT_GROUP_ID: string = 'default';\r\n\r\nexport interface ITabState {\r\n    id: string;\r\n    isSelected: boolean;\r\n}\r\n\r\nexport interface ITabGroupState {\r\n    id: string;\r\n    tabs: ITabState[];\r\n}\r\n\r\nexport const tabInitialState: ITabState = {id: undefined, isSelected: false};\r\nexport const tabsInitialState: ITabState[] = [];\r\nexport const tabGroupInitialState: ITabGroupState = {id: undefined, tabs: []};\r\nexport const tabGroupsInitialState: ITabGroupState[] = [];\r\n\r\nexport const tabReducer = (state: ITabState = tabInitialState, action: IReduxAction<ITabActionPayload>): ITabState => {\r\n    switch (action.type) {\r\n        case TabAction.addTab:\r\n            return {\r\n                id: action.payload.id,\r\n                isSelected: state.isSelected,\r\n            };\r\n        case TabAction.selectTab:\r\n            return {\r\n                id: state.id,\r\n                isSelected: state.id === action.payload.id,\r\n            };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const tabsReducer = (\r\n    state: ITabState[] = tabsInitialState,\r\n    action: IReduxAction<ITabActionPayload>\r\n): ITabState[] => {\r\n    switch (action.type) {\r\n        case TabAction.addTab:\r\n            let isSelected = false;\r\n            if (state.length === 0) {\r\n                isSelected = true;\r\n            }\r\n            return [...state, tabReducer({id: undefined, isSelected}, action)];\r\n        case TabAction.removeTab:\r\n            return _.reject(state, (tab: ITabState) => {\r\n                return action.payload.id === tab.id;\r\n            });\r\n        case TabAction.selectTab:\r\n            return state.map((tab: ITabState) => tabReducer(tab, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const tabGroupReducer = (\r\n    state: ITabGroupState = tabGroupInitialState,\r\n    action: IReduxAction<ITabActionPayload>\r\n): ITabGroupState => {\r\n    switch (action.type) {\r\n        case TabAction.addTab:\r\n        case TabAction.removeTab:\r\n        case TabAction.selectTab:\r\n            const groupId = action.payload.groupId ? action.payload.groupId : DEFAULT_GROUP_ID;\r\n            if (state.id === groupId) {\r\n                return {\r\n                    id: groupId,\r\n                    tabs: tabsReducer(state.tabs, action),\r\n                };\r\n            }\r\n            return state;\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nconst findGroup = (state: ITabGroupState[], id: string) => {\r\n    return _.find(state, (group: ITabGroupState) => group.id === id);\r\n};\r\n\r\nexport const tabGroupsReducer = (\r\n    state: ITabGroupState[] = tabGroupsInitialState,\r\n    action: IReduxAction<ITabActionPayload>\r\n): ITabGroupState[] => {\r\n    switch (action.type) {\r\n        case TabAction.addTab:\r\n            const addgroupId = action.payload.groupId ? action.payload.groupId : DEFAULT_GROUP_ID;\r\n            const addgroup = findGroup(state, addgroupId);\r\n            if (addgroup) {\r\n                return state.map((tabGroup: ITabGroupState) => tabGroupReducer(tabGroup, action));\r\n            }\r\n            return [...state, tabGroupReducer({id: addgroupId, tabs: []}, action)];\r\n        case TabAction.removeTab:\r\n            const groupId = action.payload.groupId ? action.payload.groupId : DEFAULT_GROUP_ID;\r\n            const group = findGroup(state, groupId);\r\n            if (group) {\r\n                const groups = state.map((tabGroup: ITabGroupState) => tabGroupReducer(tabGroup, action));\r\n                return _.reject(groups, (tabGroup: ITabGroupState) => tabGroup.tabs.length === 0);\r\n            }\r\n            return state;\r\n        case TabAction.selectTab:\r\n            return state.map((tabGroup: ITabGroupState) => tabGroupReducer(tabGroup, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=774.bundle.js.map