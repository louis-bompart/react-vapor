(window.webpackJsonp=window.webpackJsonp||[]).push([[898],{1996:function(t,n,e){"use strict";e.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {ILinkSvgProps, LinkSvg} from '../../svg/LinkSvg';\r\nimport {Tooltip} from '../../tooltip/Tooltip';\r\nimport {ITitleProps, Title} from '../Title';\r\n\r\ndescribe('<Title/>', () => {\r\n    const defaultProps: ITitleProps = {\r\n        text: 'title',\r\n    };\r\n    let titleComponent: ReactWrapper<ITitleProps, any>;\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<Title {...defaultProps} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<Title /> with default props', () => {\r\n        beforeEach(() => {\r\n            titleComponent = mount(<Title {...defaultProps} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            titleComponent.detach();\r\n        });\r\n\r\n        it('should render the default text', () => {\r\n            expect(titleComponent.find('h1').text()).toBe(defaultProps.text as string);\r\n        });\r\n\r\n        it('should not render the prefix', () => {\r\n            expect(titleComponent.find('span.mr1').length).toBe(0);\r\n        });\r\n\r\n        it('should not add the tooltip for the title', () => {\r\n            expect(titleComponent.find(Tooltip).exists()).toBe(false);\r\n        });\r\n\r\n        it('should not render the documentation link', () => {\r\n            expect(titleComponent.find(LinkSvg).length).toBe(0);\r\n        });\r\n    });\r\n\r\n    describe('<Title /> with custom props', () => {\r\n        const customProps: ITitleProps = {\r\n            prefix: 'prefix',\r\n            text: 'title',\r\n            withTitleTooltip: false,\r\n        };\r\n\r\n        const documentationLink: ILinkSvgProps = {\r\n            url: 'https://www.google.ca',\r\n            target: '_blank',\r\n            svg: {\r\n                svgName: 'help',\r\n                svgClass: 'fill-orange icon mod-20',\r\n            },\r\n        };\r\n\r\n        const renderTitle = (props: Partial<ITitleProps> = {}) => {\r\n            titleComponent = mount(<Title {..._.defaults(props, customProps)} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        };\r\n\r\n        afterEach(() => {\r\n            titleComponent.unmount();\r\n            titleComponent.detach();\r\n        });\r\n\r\n        it('should render the prefix', () => {\r\n            renderTitle();\r\n            expect(titleComponent.find('span.mr1').text()).toBe(customProps.prefix);\r\n        });\r\n\r\n        it('should add the tooltip for the title with withTitleTooltip to true', () => {\r\n            renderTitle({\r\n                withTitleTooltip: true,\r\n            });\r\n            expect(titleComponent.find(Tooltip).length).toBe(1);\r\n        });\r\n\r\n        it('should render the documentation link with the inline-doc-link class by default', () => {\r\n            renderTitle({\r\n                documentationLink,\r\n            });\r\n            expect(titleComponent.find(LinkSvg).length).toBe(1);\r\n            expect(titleComponent.find(LinkSvg).prop('linkClasses')).toContain('inline-doc-link');\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=898.bundle.js.map