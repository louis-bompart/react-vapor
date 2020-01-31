(window.webpackJsonp=window.webpackJsonp||[]).push([[951],{2048:function(e,r,n){"use strict";n.r(r),r.default="import * as escapeRegExp from 'escape-string-regexp';\r\nimport {ReactNode} from 'react';\r\n\r\nimport {getReactNodeTextContent} from './JSXUtils';\r\n\r\nfunction matchesString(filterValue: string, str: string, caseSensitive = false): boolean {\r\n    const escapedFilterValue = escapeRegExp(filterValue ?? '');\r\n    return escapedFilterValue === '' || new RegExp(escapedFilterValue, caseSensitive ? 'g' : 'gi').test(str);\r\n}\r\n\r\nfunction matchesNumber(filterValue: string, num: number): boolean {\r\n    return num != null ? matchesString(filterValue, num.toString()) : false;\r\n}\r\n\r\nfunction matchesArrayLength(filterValue: string, array: any[]): boolean {\r\n    return array ? matchesString(filterValue, array.length.toString()) : false;\r\n}\r\n\r\nfunction matchesReactNode(filterValue: string, node: ReactNode): boolean {\r\n    return node ? matchesString(filterValue, getReactNodeTextContent(node)) : false;\r\n}\r\n\r\nexport const FilterUtils = {\r\n    matchesString,\r\n    matchesNumber,\r\n    matchesReactNode,\r\n    matchesArrayLength,\r\n};\r\n"}}]);
//# sourceMappingURL=951.bundle.js.map