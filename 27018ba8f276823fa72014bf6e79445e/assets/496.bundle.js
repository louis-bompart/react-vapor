(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{1603:function(n,e,o){"use strict";o.r(e),e.default="import {shallow} from 'enzyme';\nimport * as React from 'react';\nimport {TableLoading} from '../TableLoading';\n\ndescribe('TableLoading tests', () => {\n    describe('<TableLoading.Table />', () => {\n        it('should mount and unmount without errors', () => {\n            expect(() => {\n                const wrapper = shallow(<TableLoading.Table />, {});\n                wrapper.unmount();\n            });\n        });\n    });\n\n    describe('<TableLoading.Body />', () => {\n        it('should mount and unmount without errors', () => {\n            expect(() => {\n                const wrapper = shallow(<TableLoading.Body />, {});\n                wrapper.unmount();\n            });\n        });\n\n        it('should render <tr/> equal of the the number of columns sent as parameter', () => {\n            const wrapper = shallow(<TableLoading.Body numberOfRow={10} />, {});\n            expect(wrapper.find('tr').length).toBe(10);\n        });\n\n        it('should render <Row/> equal of the the number of columns sent as parameter', () => {\n            const wrapper = shallow(<TableLoading.Body numberOfColumns={8} numberOfRow={1} />, {});\n            expect(wrapper.find(TableLoading.Row).length).toBe(8);\n        });\n    });\n\n    describe('<TableLoading.Row />', () => {\n        it('should mount and unmount without errors', () => {\n            expect(() => {\n                const wrapper = shallow(<TableLoading.Row num={0} />, {});\n                wrapper.unmount();\n            });\n        });\n\n        it('should add the class mod-haft if the number is odd', () => {\n            const wrapper = shallow(<TableLoading.Row num={1} />, {});\n            expect(wrapper.find('div').hasClass('mod-half')).toBe(true);\n        });\n\n        it('should not add the class mod-haft if the number is even', () => {\n            const wrapper = shallow(<TableLoading.Row num={2} />, {});\n            expect(wrapper.find('div').hasClass('mod-half')).toBe(false);\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=496.bundle.js.map