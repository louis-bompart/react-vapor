(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{1732:function(e,n,t){"use strict";t.r(n),n.default="import {shallow} from 'enzyme';\nimport * as React from 'react';\nimport {FlatSelectWithPrepend} from '../../flatSelect/FlatSelectWithPrepend';\nimport {PaginationPerPage} from '../PaginationPerPage';\n\ndescribe('PaginationPerPage', () => {\n    describe('<PaginationPerPage /> tests', () => {\n        it('should mount and unmount without errors', () => {\n            expect(() => {\n                const wrapper = shallow(<PaginationPerPage id={'id'} />, {});\n                wrapper.unmount();\n            });\n        });\n\n        it('should add an option for each number in the perPage array', () => {\n            const wrapper = shallow(<PaginationPerPage id={'id'} perPage={[1, 2, 3]} />, {});\n            expect(wrapper.find(FlatSelectWithPrepend).props().options.length).toBe(3);\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=628.bundle.js.map