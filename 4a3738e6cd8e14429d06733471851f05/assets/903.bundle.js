(window.webpackJsonp=window.webpackJsonp||[]).push([[903],{1985:function(r,t,n){"use strict";n.r(t),t.default="import * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\n\r\nconst getIsDirty = (state: IReactVaporState, props: {id: string}): boolean => {\r\n    return _.contains(state.dirtyComponents || [], props.id);\r\n};\r\n\r\nexport const WithDirtySelectors = {\r\n    getIsDirty,\r\n};\r\n"}}]);
//# sourceMappingURL=903.bundle.js.map