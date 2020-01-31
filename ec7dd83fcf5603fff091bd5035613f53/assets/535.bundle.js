(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{1640:function(n,o,r){"use strict";r.r(o),o.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {ILinkSvgProps} from '../../svg/LinkSvg';\r\nimport {Svg} from '../../svg/Svg';\r\nimport {Tooltip} from '../../tooltip/Tooltip';\r\nimport {IModalHeaderProps, ModalHeader} from '../ModalHeader';\r\n\r\ndescribe('ModalHeader', () => {\r\n    const basicProps: IModalHeaderProps = {\r\n        id: 'modal',\r\n        title: 'Title',\r\n    };\r\n\r\n    describe('<ModalHeader />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<ModalHeader {...basicProps} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<ModalHeader />', () => {\r\n        let modal: ReactWrapper<IModalHeaderProps, any>;\r\n\r\n        beforeEach(() => {\r\n            modal = mount(<ModalHeader {...basicProps} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            modal.unmount();\r\n            modal.detach();\r\n        });\r\n\r\n        it('should call prop onClose when modal x clicked and prop is set and last opened is not set', () => {\r\n            jasmine.clock().install();\r\n            const closeSpy = jasmine.createSpy('onClose');\r\n\r\n            modal.setProps(_.extend({}, basicProps, {onClose: closeSpy}));\r\n            modal.mount();\r\n            jasmine.clock().tick(5);\r\n\r\n            const input = modal.find('.small-close');\r\n            input.simulate('click');\r\n            expect(closeSpy.calls.count()).toBe(1);\r\n            jasmine.clock().uninstall();\r\n        });\r\n\r\n        it('should call prop onClose when modal x clicked and modal is last opened', () => {\r\n            jasmine.clock().install();\r\n            const closeSpy = jasmine.createSpy('onClose');\r\n\r\n            modal.setProps(_.extend({}, basicProps, {lastOpened: true, onClose: closeSpy}));\r\n            modal.mount();\r\n            jasmine.clock().tick(5);\r\n\r\n            const input = modal.find('.small-close');\r\n            input.simulate('click');\r\n            expect(closeSpy.calls.count()).toBe(1);\r\n            jasmine.clock().uninstall();\r\n        });\r\n\r\n        it('should not call prop onClose when modal x clicked and modal is not last opened', () => {\r\n            const closeSpy = jasmine.createSpy('onClose');\r\n\r\n            modal.setProps(_.extend({}, basicProps, {lastOpened: false, onClose: closeSpy}));\r\n            modal.mount();\r\n            const input = modal.find('.small-close');\r\n            input.simulate('click');\r\n            expect(closeSpy.calls.count()).toBe(0);\r\n        });\r\n\r\n        it('should set class when the class is specified', () => {\r\n            const headerClass = 'mod-big';\r\n            const classes = [headerClass];\r\n            expect(\r\n                modal\r\n                    .find('header')\r\n                    .first()\r\n                    .html()\r\n            ).not.toContain(headerClass);\r\n\r\n            modal.setProps(_.extend({}, basicProps, {classes}));\r\n            modal.mount();\r\n            expect(\r\n                modal\r\n                    .find('header')\r\n                    .first()\r\n                    .html()\r\n            ).toContain(headerClass);\r\n        });\r\n\r\n        it('should not have a tooltip, anchor, and svg for doclink by default', () => {\r\n            expect(modal.find(Tooltip).exists()).toBe(false);\r\n        });\r\n\r\n        it('should have a tooltip, anchor, and svg for doclink if the prop is passed', () => {\r\n            const docLink: ILinkSvgProps = {url: 'testomax', tooltip: {title: 'doclinktooltip'}};\r\n            modal.setProps({docLink});\r\n\r\n            expect(modal.find(Tooltip).exists()).toBe(true);\r\n            expect(modal.find(Tooltip).props().title).toBe(docLink.tooltip.title);\r\n            expect(modal.find('a').props().href).toBe(docLink.url);\r\n            expect(modal.find(Svg).props().svgName).toBe('help');\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=535.bundle.js.map