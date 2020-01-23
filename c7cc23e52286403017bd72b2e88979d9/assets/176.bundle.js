(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1270:function(n,r,e){"use strict";e.r(r),r.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport {shallowWithState} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {BreadcrumbLink, IBreadcrumbLinkProps} from '../BreadcrumbLink';\r\n\r\ndescribe('<BreadcrumbLink/>', () => {\r\n    const defaultProps: IBreadcrumbLinkProps = {\r\n        name: 'title',\r\n        link: '#',\r\n    };\r\n\r\n    let breadcrumbLinkComponent: ShallowWrapper<IBreadcrumbLinkProps>;\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<BreadcrumbLink {...defaultProps} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<BreadcrumbLink /> with default props', () => {\r\n        const renderBreadcrumbLink = (props: IBreadcrumbLinkProps = defaultProps) => {\r\n            breadcrumbLinkComponent = shallowWithState(<BreadcrumbLink {...props} />, {});\r\n        };\r\n\r\n        it('should render the default name', () => {\r\n            renderBreadcrumbLink();\r\n            expect(breadcrumbLinkComponent.find('.link').text()).toEqual(defaultProps.name as any);\r\n        });\r\n\r\n        it('should return a <a/> tag if the link is defined', () => {\r\n            renderBreadcrumbLink({name: 'a', link: 'zelda'});\r\n            expect(breadcrumbLinkComponent.find('a').length).toBe(1);\r\n        });\r\n\r\n        it('should return a <span/> tag if the link is not defined', () => {\r\n            renderBreadcrumbLink({name: 'a', link: undefined});\r\n            expect(breadcrumbLinkComponent.find('span').length).toBe(1);\r\n        });\r\n\r\n        it('should render a link undefined for the BreadcrumbLink if not defined', () => {\r\n            renderBreadcrumbLink();\r\n            expect(breadcrumbLinkComponent.find('.link').text()).toEqual(defaultProps.name as any);\r\n        });\r\n\r\n        it('should render the default link', () => {\r\n            renderBreadcrumbLink();\r\n            expect(breadcrumbLinkComponent.find(`.link[href=\"${defaultProps.link}\"]`).length).toEqual(1);\r\n        });\r\n\r\n        it('should trigger the onClick', () => {\r\n            const event = {\r\n                stopPropagation: _.noop,\r\n                preventDefault: _.noop,\r\n                nativeEvent: {\r\n                    stopImmediatePropagation: _.noop,\r\n                },\r\n            };\r\n            const spy = jasmine.createSpy('onClick').and.returnValue(false);\r\n            renderBreadcrumbLink({...defaultProps, onClick: spy});\r\n            breadcrumbLinkComponent\r\n                .find('a')\r\n                .props()\r\n                .onClick(event as any);\r\n\r\n            expect(spy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should return true if the onClick props return true', () => {\r\n            const stopPropagationSpy: jasmine.Spy = jasmine.createSpy('stopPropagation');\r\n            const spy: jasmine.Spy = spyOn<any>(BreadcrumbLink.prototype, 'handleOnClick').and.callThrough();\r\n            renderBreadcrumbLink({...defaultProps, onClick: () => true});\r\n            breadcrumbLinkComponent.find('a.link').simulate('click', {\r\n                stopPropagation: stopPropagationSpy,\r\n            });\r\n\r\n            expect(spy).toHaveBeenCalledTimes(1);\r\n            expect(stopPropagationSpy).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call each event stop propagation on onClick if it returns false ', () => {\r\n            const stopPropagationSpy: jasmine.Spy = jasmine.createSpy('stopPropagation').and.callThrough();\r\n            const stopImmediatePropagationSpy: jasmine.Spy = jasmine\r\n                .createSpy('stopImmediatePropagation')\r\n                .and.callThrough();\r\n            const preventDefaultSpy: jasmine.Spy = jasmine.createSpy('preventDefault').and.callThrough();\r\n\r\n            const handleOnClickSpy: jasmine.Spy = spyOn<any>(\r\n                BreadcrumbLink.prototype,\r\n                'handleOnClick'\r\n            ).and.callThrough();\r\n\r\n            renderBreadcrumbLink({...defaultProps, onClick: () => false});\r\n            breadcrumbLinkComponent.find('a.link').simulate('click', {\r\n                stopPropagation: stopPropagationSpy,\r\n                nativeEvent: {\r\n                    stopImmediatePropagation: stopImmediatePropagationSpy,\r\n                },\r\n                preventDefault: preventDefaultSpy,\r\n            });\r\n\r\n            expect(handleOnClickSpy).toHaveBeenCalledTimes(1);\r\n            expect(stopPropagationSpy).toHaveBeenCalledTimes(1);\r\n            expect(stopImmediatePropagationSpy).toHaveBeenCalledTimes(1);\r\n            expect(preventDefaultSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=176.bundle.js.map