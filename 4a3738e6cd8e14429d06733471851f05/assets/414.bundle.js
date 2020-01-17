(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{1506:function(n,e,o){"use strict";o.r(e),e.default="import {shallow} from 'enzyme';\nimport * as React from 'react';\n\nimport {Form} from '../Form';\n\ndescribe('Form', () => {\n    const SOME_TITLE = '🥝&👬';\n    const SOME_CLASS = '📚';\n\n    it('should render without errors', () => {\n        expect(() => {\n            shallow(<Form />);\n        }).not.toThrow();\n    });\n\n    describe('<Form />', () => {\n        it('should render the title in a h2 tag when defined', () => {\n            const form = shallow(<Form title={SOME_TITLE} />);\n\n            expect(form.find('h2').text()).toBe(SOME_TITLE);\n        });\n\n        it('should not render an h2 tag when the title is not defined', () => {\n            const form = shallow(<Form />);\n\n            expect(form.find('h2').exists()).toBe(false);\n        });\n\n        it('should render the fieldset with mods and classNames', () => {\n            const form = shallow(<Form className={SOME_CLASS} mods=\"mod-header-padding\" />);\n\n            expect(form.hasClass(SOME_CLASS)).toBe(true);\n            expect(form.hasClass('mod-header-padding')).toBe(true);\n        });\n\n        it('should render children', () => {\n            const SomeComponent = () => <div>COMPONENT</div>;\n            const form = shallow(\n                <Form>\n                    <SomeComponent />\n                </Form>\n            );\n\n            expect(form.find(SomeComponent)).toBeDefined();\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=414.bundle.js.map