(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1264:function(n,r,t){"use strict";t.r(r),r.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {IActionOptions} from '../Action';\r\nimport {ACTION_SEPARATOR} from '../ActionConstants';\r\nimport {ActionsDropdown} from '../ActionsDropdown';\r\nimport {PrimaryActionConnected} from '../PrimaryActionConnected';\r\nimport {SecondaryActions} from '../SecondaryActions';\r\n\r\ndescribe('Actions', () => {\r\n    const linkAction: IActionOptions = {\r\n        name: 'action',\r\n        link: 'http://coveo.com',\r\n        target: '_blank',\r\n        enabled: true,\r\n    };\r\n    const triggerAction: IActionOptions = {\r\n        name: 'action2',\r\n        trigger: jasmine.createSpy('methodTrigger'),\r\n        enabled: true,\r\n    };\r\n    const actions: IActionOptions[] = [linkAction, ACTION_SEPARATOR, triggerAction];\r\n\r\n    it('should render and unmount without throwing errors', () => {\r\n        expect(() => {\r\n            const component = shallow(<SecondaryActions actions={[]} />);\r\n            component.unmount();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render nothing if there are no actions to render', () => {\r\n        expect(shallow(<SecondaryActions actions={[]} />).isEmptyRender()).toBe(true);\r\n    });\r\n\r\n    it('should display a <ActionsDropdown /> if there is more than one action', () => {\r\n        expect(\r\n            shallow(<SecondaryActions actions={actions} />)\r\n                .children()\r\n                .type()\r\n        ).toBe(ActionsDropdown);\r\n    });\r\n\r\n    it('should display a <PrimaryAction /> if there is only one action', () => {\r\n        expect(\r\n            shallow(<SecondaryActions actions={[linkAction]} />)\r\n                .children()\r\n                .type()\r\n        ).toBe(PrimaryActionConnected);\r\n    });\r\n\r\n    it('should not set disabled on ActionsDropdown if more than 1 secondary action by default', () => {\r\n        const wrapper = shallow(\r\n            <SecondaryActions\r\n                actions={[linkAction, {...linkAction, primary: false}, {...linkAction, primary: false}]}\r\n            />\r\n        );\r\n        expect(wrapper.find(ActionsDropdown).props().disabled).toBe(false);\r\n    });\r\n\r\n    it('should set disabled on ActionsDropdown if more than 1 secondary action', () => {\r\n        const wrapper = shallow(\r\n            <SecondaryActions\r\n                actions={[linkAction, {...linkAction, primary: false}, {...linkAction, primary: false}]}\r\n                disabled\r\n            />\r\n        );\r\n        expect(wrapper.find(ActionsDropdown).props().disabled).toBe(true);\r\n    });\r\n\r\n    it('should add the style cursor pointer if the component is enabled', () => {\r\n        const wrapper = shallow(\r\n            <SecondaryActions\r\n                actions={[linkAction, {...linkAction, primary: false}, {...linkAction, primary: false}]}\r\n            />\r\n        );\r\n        expect(wrapper.find('div.dropdown').props().style.cursor).toBe('pointer');\r\n    });\r\n\r\n    it('should add the style cursor default if the component is disabled', () => {\r\n        const wrapper = shallow(\r\n            <SecondaryActions\r\n                actions={[linkAction, {...linkAction, primary: false}, {...linkAction, primary: false}]}\r\n                disabled\r\n            />\r\n        );\r\n        expect(wrapper.find('div.dropdown').props().style.cursor).toBe('default');\r\n    });\r\n\r\n    describe('separators', () => {\r\n        const shallowAndGetActions = (actionsList: IActionOptions[]) => {\r\n            return shallow(<SecondaryActions actions={actionsList} />)\r\n                .children()\r\n                .prop('actions');\r\n        };\r\n\r\n        it('should remove a separator if followed by another separator', () => {\r\n            expect(shallowAndGetActions([linkAction, ACTION_SEPARATOR, ACTION_SEPARATOR, triggerAction])).toEqual([\r\n                linkAction,\r\n                ACTION_SEPARATOR,\r\n                triggerAction,\r\n            ]);\r\n        });\r\n\r\n        it('should remove the separator if it is the last action', () => {\r\n            expect(shallowAndGetActions([linkAction, triggerAction, ACTION_SEPARATOR])).toEqual([\r\n                linkAction,\r\n                triggerAction,\r\n            ]);\r\n        });\r\n\r\n        it('should remove the separator if it is the first action', () => {\r\n            expect(shallowAndGetActions([ACTION_SEPARATOR, linkAction, triggerAction])).toEqual([\r\n                linkAction,\r\n                triggerAction,\r\n            ]);\r\n        });\r\n\r\n        it('should remove the useless separators', () => {\r\n            expect(\r\n                shallowAndGetActions([\r\n                    ACTION_SEPARATOR,\r\n                    ACTION_SEPARATOR,\r\n                    linkAction,\r\n                    ACTION_SEPARATOR,\r\n                    ACTION_SEPARATOR,\r\n                    triggerAction,\r\n                    ACTION_SEPARATOR,\r\n                    ACTION_SEPARATOR,\r\n                ])\r\n            ).toEqual([linkAction, ACTION_SEPARATOR, triggerAction]);\r\n        });\r\n\r\n        it('should remove the separator if it is between disabled actions', () => {\r\n            expect(\r\n                shallow(\r\n                    <SecondaryActions\r\n                        actions={[\r\n                            {...linkAction, enabled: false},\r\n                            ACTION_SEPARATOR,\r\n                            {...triggerAction, enabled: false},\r\n                        ]}\r\n                    />\r\n                ).isEmptyRender()\r\n            ).toBe(true);\r\n        });\r\n\r\n        it('should not remove the separator if it is between disabled actions but they are still shown', () => {\r\n            expect(\r\n                shallowAndGetActions([\r\n                    {...linkAction, enabled: false, hideDisabled: false},\r\n                    ACTION_SEPARATOR,\r\n                    {...triggerAction, enabled: false, hideDisabled: false},\r\n                ])\r\n            ).toEqual([\r\n                {...linkAction, enabled: false, hideDisabled: false},\r\n                ACTION_SEPARATOR,\r\n                {...triggerAction, enabled: false, hideDisabled: false},\r\n            ]);\r\n        });\r\n\r\n        it('should not remove the separator if it is between disabled actions but there are other actions around', () => {\r\n            expect(\r\n                shallowAndGetActions([\r\n                    linkAction,\r\n                    {...linkAction, enabled: false},\r\n                    ACTION_SEPARATOR,\r\n                    {...triggerAction, enabled: false},\r\n                    triggerAction,\r\n                ])\r\n            ).toEqual([linkAction, ACTION_SEPARATOR, triggerAction]);\r\n        });\r\n\r\n        it('should render a primary action if thre is only one action remaining after removing disabled actions and separators', () => {\r\n            const rendered = shallow(\r\n                <SecondaryActions actions={[linkAction, ACTION_SEPARATOR, {...triggerAction, enabled: false}]} />\r\n            ).children();\r\n            expect(rendered.type()).toBe(PrimaryActionConnected);\r\n            expect(rendered.prop('action')).toEqual(linkAction);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=147.bundle.js.map