(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1415:function(n,e,r){"use strict";r.r(e),e.default="import * as React from 'react';\r\nimport {RTestUtils} from '../../../utils/tests/RTestUtils';\r\nimport {DnDContainer} from '../DnDContainer';\r\n\r\ndescribe('DnDContainer', () => {\r\n    const id = 'im an id, OK!!';\r\n\r\n    describe('<DnDContainer />', () => {\r\n        it('should mount without errors', () => {\r\n            expect(() => {\r\n                RTestUtils.renderComponent(DnDContainer, {\r\n                    id,\r\n                });\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should unmount without errors', () => {\r\n            const component = RTestUtils.renderComponent(DnDContainer, {\r\n                id,\r\n            });\r\n\r\n            expect(() => {\r\n                component.wrapper.unmount();\r\n            }).not.toThrow();\r\n        });\r\n\r\n        describe('once rendered', () => {\r\n            describe('icon to drag and drop', () => {\r\n                it('should set additional props on draggable icon if draggableIconProps is defined', () => {\r\n                    const component = RTestUtils.renderComponent(DnDContainer, {\r\n                        id,\r\n                        draggableIconProps: {className: 'select-me'},\r\n                        isDraggable: false,\r\n                    });\r\n\r\n                    expect(component.wrapper.find('.select-me').length).toBe(1);\r\n                });\r\n\r\n                it('should set visibility to hidden on svg wrapper if the isDraggable is set to false', () => {\r\n                    const component = RTestUtils.renderComponent(DnDContainer, {\r\n                        id,\r\n                        draggableIconProps: {className: 'select-me'},\r\n                        isDraggable: false,\r\n                    });\r\n\r\n                    expect(component.wrapper.find('.select-me').props().style.visibility).toBe('hidden');\r\n                });\r\n\r\n                it('should set visibility to visible on svg wrapper if the isDraggable is set to true', () => {\r\n                    const component = RTestUtils.renderComponent(DnDContainer, {\r\n                        id,\r\n                        draggableIconProps: {className: 'select-me'},\r\n                        isDraggable: true,\r\n                    });\r\n\r\n                    expect(component.wrapper.find('.select-me').props().style.visibility).toBe('visible');\r\n                });\r\n\r\n                it('should set cursor to default on svg wrapper if the isDraggable is set to false', () => {\r\n                    const component = RTestUtils.renderComponent(DnDContainer, {\r\n                        id,\r\n                        draggableIconProps: {className: 'select-me'},\r\n                        isDraggable: false,\r\n                    });\r\n\r\n                    expect(component.wrapper.find('.select-me').props().style.cursor).toBe('default');\r\n                });\r\n\r\n                it('should set cursor to move on svg wrapper if the isDraggable is set to true', () => {\r\n                    const component = RTestUtils.renderComponent(DnDContainer, {\r\n                        id,\r\n                        draggableIconProps: {className: 'select-me'},\r\n                        isDraggable: true,\r\n                    });\r\n\r\n                    expect(component.wrapper.find('.select-me').props().style.cursor).toBe('move');\r\n                });\r\n\r\n                it('should set the icon if defined as prop', () => {\r\n                    const component = RTestUtils.renderComponent(DnDContainer, {\r\n                        id,\r\n                        icon: <div className=\"select-me\">test</div>,\r\n                    });\r\n\r\n                    expect(component.wrapper.find('.select-me').length).toBe(1);\r\n                });\r\n            });\r\n\r\n            describe('drag and drop content', () => {\r\n                it('should set additional props on draggable container if draggableContainerProps is defined', () => {\r\n                    const component = RTestUtils.renderComponent(DnDContainer, {\r\n                        id,\r\n                        draggableContainerProps: {className: 'select-me'},\r\n                    });\r\n\r\n                    expect(component.wrapper.find('.select-me').length).toBe(1);\r\n                });\r\n\r\n                it('should render a clone of the child with its own props', () => {\r\n                    const props = {className: 'test'};\r\n\r\n                    const component = RTestUtils.renderComponent(DnDContainer, {\r\n                        id,\r\n                        child: <div {...props} />,\r\n                    });\r\n\r\n                    expect(component.wrapper.find(`.${props.className}`).props()).toEqual(props);\r\n                });\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=309.bundle.js.map