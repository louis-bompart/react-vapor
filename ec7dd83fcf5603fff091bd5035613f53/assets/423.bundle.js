(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1529:function(e,r,n){"use strict";n.r(r),r.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {HeaderWrapper} from '../HeaderWrapper';\r\nimport {TabsHeader} from '../TabsHeader';\r\n\r\ndescribe('<HeaderWrapper/>', () => {\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            const header = shallow(<HeaderWrapper />);\r\n            header.unmount();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render the description when specified', () => {\r\n        const money = '💰';\r\n        const header = shallow(<HeaderWrapper description={money} />);\r\n        expect(header.find('h4').text()).toBe(money);\r\n    });\r\n\r\n    it('should render actions when specified', () => {\r\n        const myActions = [{content: '📗'}, {content: '📘'}, {content: '📙'}];\r\n        const header = shallow(<HeaderWrapper actions={myActions} />);\r\n        const actions = header.find('.action-bar').children();\r\n\r\n        expect(actions.length).toBe(myActions.length);\r\n        actions.forEach((action, index) => {\r\n            expect(action.prop('content')).toBe(myActions[index].content);\r\n        });\r\n    });\r\n\r\n    it('should render tabs when specified', () => {\r\n        const myTabs = [\r\n            {id: 'tomato', title: '🍅'},\r\n            {id: 'sweet-potato', title: '🍠'},\r\n        ];\r\n        const header = shallow(<HeaderWrapper tabs={myTabs} />);\r\n\r\n        expect(header.find(TabsHeader).exists()).toBe(true);\r\n        expect(header.find(TabsHeader).prop('tabs')).toBe(myTabs);\r\n    });\r\n\r\n    it('should not render a border on the bottom', () => {\r\n        const header = shallow(<HeaderWrapper hasBorderBottom={false} />);\r\n\r\n        expect(header.find('.panel-header').hasClass('mod-no-border-bottom')).toBe(true);\r\n    });\r\n\r\n    it('should render without padding', () => {\r\n        const header = shallow(<HeaderWrapper hasPadding={false} />);\r\n\r\n        expect(header.find('.panel-header').hasClass('px0')).toBe(true);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=423.bundle.js.map