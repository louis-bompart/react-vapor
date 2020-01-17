(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{1397:function(r,e,n){"use strict";n.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {fakeJSON, fakeJSON1, JSONToString} from '../../../utils/JSONUtils';\r\nimport {BlankSlate} from '../../blankSlate/BlankSlate';\r\nimport {DiffViewer, DiffViewerProps} from '../DiffViewer';\r\n\r\ndescribe('DiffViewer', () => {\r\n    const basicProps: DiffViewerProps = {\r\n        first: JSONToString(fakeJSON),\r\n        second: JSONToString(fakeJSON1),\r\n    };\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<DiffViewer {...basicProps} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<DiffViewer />', () => {\r\n        let diffViewer: ReactWrapper<DiffViewerProps>;\r\n\r\n        beforeEach(() => {\r\n            diffViewer = mount(<DiffViewer {...basicProps} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        it('should get the orginal string for the diff as a prop', () => {\r\n            const firstProp: string = diffViewer.props().first;\r\n\r\n            expect(firstProp).toBe(basicProps.first);\r\n        });\r\n\r\n        it('should get the edited string for the diff as a prop', () => {\r\n            const secondProp: string = diffViewer.props().second;\r\n\r\n            expect(secondProp).toBe(basicProps.second);\r\n        });\r\n\r\n        it('should render the diff table from diff2html', () => {\r\n            expect(diffViewer.html()).toContain('d2h-diff-table');\r\n        });\r\n\r\n        it('should display a blankslate if there are no changes', () => {\r\n            diffViewer.setProps({...basicProps, second: basicProps.first});\r\n\r\n            expect(diffViewer.find(BlankSlate).length).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=305.bundle.js.map