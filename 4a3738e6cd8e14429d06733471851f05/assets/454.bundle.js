(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{1545:function(e,a,n){"use strict";n.r(a),a.default="import {shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Label} from '../Label';\r\n\r\ndescribe('Label', () => {\r\n    describe('<Label />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<Label />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<Label />', () => {\r\n        it('should set inner label classes when specified', () => {\r\n            const innerLabelClass = 'valid';\r\n            const classesTest = [innerLabelClass];\r\n            const label = shallow(<Label classes={classesTest} />);\r\n            expect(label.find('label').hasClass(innerLabelClass)).toBe(true);\r\n        });\r\n\r\n        it('should set inner label valid message when specified', () => {\r\n            const message = 'salut';\r\n            const label = shallow(<Label data-valid-message={message} />);\r\n            expect(label.find('label').prop('data-valid-message')).toBe(message);\r\n        });\r\n\r\n        it('should set inner label invalid message when specified', () => {\r\n            const message = 'salut';\r\n            const label = shallow(<Label data-invalid-message={message} />);\r\n            expect(label.find('label').prop('data-invalid-message')).toBe(message);\r\n        });\r\n\r\n        it('should pass down any other attribute to the underlying label tag', () => {\r\n            const expectedSelector = 'Thon';\r\n            const label = shallow(<Label data-whatever={expectedSelector} />);\r\n            expect(label.find('label').prop('data-whatever')).toBe(expectedSelector);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=454.bundle.js.map