(window.webpackJsonp=window.webpackJsonp||[]).push([[926],{2008:function(n,r,a){"use strict";a.r(r),r.default="import * as _ from 'underscore';\r\n\r\nexport const convertUndefinedAndNullToEmptyString = (value: any) =>\r\n    _.isUndefined(value) || _.isNull(value) ? '' : value;\r\n\r\n/**\r\n * @deprecated Typescript 3.7 now has built-in optional function calls.\r\n *\r\n * ```\r\n * callIfDefined(myfunction, arg1, arg2);\r\n *\r\n * // can be replaced with\r\n * myFunction?.(arg1, arg2);\r\n * ```\r\n */\r\nexport const callIfDefined = <T>(callback?: ((...params: any[]) => T) | null, ...args: any[]): T | undefined => {\r\n    if (_.isFunction(callback)) {\r\n        return callback(...args);\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=926.bundle.js.map