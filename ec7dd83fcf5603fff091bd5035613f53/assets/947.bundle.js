(window.webpackJsonp=window.webpackJsonp||[]).push([[947],{2043:function(e,n,i){"use strict";i.r(n),n.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {EventUtils} from './EventUtils';\r\n\r\ndescribe('EventUtils', () => {\r\n    describe('isClickingInsideElementWithClassname', () => {\r\n        let wrapper: ShallowWrapper;\r\n        const shallowWithHandler = (eventHandler: (e: React.MouseEvent<any>) => void) => {\r\n            wrapper = shallow(\r\n                <div className=\"div1\" onClick={eventHandler}>\r\n                    <ul>\r\n                        <li>\r\n                            <div className=\"div2\">\r\n                                <div className=\"div3\" />\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            );\r\n        };\r\n\r\n        it('should not throw and return false when passing falsy values', () => {\r\n            shallowWithHandler((e: React.MouseEvent<any>) => {\r\n                expect(EventUtils.isClickingInsideElementWithClassname(undefined, undefined)).not.toThrow();\r\n                expect(EventUtils.isClickingInsideElementWithClassname(null, null)).not.toThrow();\r\n                expect(EventUtils.isClickingInsideElementWithClassname(undefined, '')).not.toThrow();\r\n                expect(EventUtils.isClickingInsideElementWithClassname(e, undefined)).not.toThrow();\r\n                expect(EventUtils.isClickingInsideElementWithClassname(e, '')).not.toThrow();\r\n\r\n                expect(EventUtils.isClickingInsideElementWithClassname(undefined, undefined)).toBe(false);\r\n                expect(EventUtils.isClickingInsideElementWithClassname(null, null)).toBe(false);\r\n                expect(EventUtils.isClickingInsideElementWithClassname(undefined, '')).toBe(false);\r\n                expect(EventUtils.isClickingInsideElementWithClassname(e, undefined)).toBe(false);\r\n                expect(EventUtils.isClickingInsideElementWithClassname(e, '')).toBe(false);\r\n            });\r\n\r\n            wrapper.find('.div3').simulate('click');\r\n        });\r\n\r\n        it('should return true if the click event happens inside the element with the specified classname', () => {\r\n            shallowWithHandler((e: React.MouseEvent<any>) => {\r\n                expect(EventUtils.isClickingInsideElementWithClassname(e, 'div1')).toBe(true);\r\n            });\r\n\r\n            wrapper.find('.div3').simulate('click');\r\n            wrapper.find('.div2').simulate('click');\r\n            wrapper.find('li').simulate('click');\r\n        });\r\n\r\n        it('should return false if the click event happens outside the element with the specified classname', () => {\r\n            shallowWithHandler((e: React.MouseEvent<any>) => {\r\n                expect(EventUtils.isClickingInsideElementWithClassname(e, 'div3')).toBe(false);\r\n            });\r\n\r\n            wrapper.find('li').simulate('click');\r\n        });\r\n\r\n        it(\r\n            'should return false if the click event happens directly on the element with the specified classname ' +\r\n                'since it is not considered as \"inside\"',\r\n            () => {\r\n                shallowWithHandler((e: React.MouseEvent<any>) => {\r\n                    expect(EventUtils.isClickingInsideElementWithClassname(e, 'div2')).toBe(false);\r\n                });\r\n\r\n                wrapper.find('.div2').simulate('click');\r\n            }\r\n        );\r\n\r\n        it('should not throw and return false when the event target is null', () => {\r\n            expect(\r\n                EventUtils.isClickingInsideElementWithClassname(\r\n                    {target: null, currentTarget: {}} as React.MouseEvent,\r\n                    'whatever'\r\n                )\r\n            ).toBe(false);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=947.bundle.js.map