(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{1692:function(e,n,r){"use strict";r.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {INavigationPerPageProps, NavigationPerPage, PER_PAGE_LABEL, PER_PAGE_NUMBERS} from '../NavigationPerPage';\r\nimport {NavigationPerPageSelect} from '../NavigationPerPageSelect';\r\n\r\ndescribe('NavigationPerPage', () => {\r\n    const NAVIGATION_PER_PAGE_BASIC_PROPS: INavigationPerPageProps = {\r\n        totalEntries: 50,\r\n    };\r\n\r\n    describe('<NavigationPerPage />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<NavigationPerPage />', () => {\r\n        let navigationPerPage: ReactWrapper<INavigationPerPageProps, any>;\r\n        let navigationPerPageInstance: NavigationPerPage;\r\n        let navigationPerPageInstanceAsAny: any;\r\n\r\n        beforeEach(() => {\r\n            navigationPerPage = mount(<NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n            navigationPerPageInstance = navigationPerPage.instance() as NavigationPerPage;\r\n            navigationPerPageInstanceAsAny = navigationPerPageInstance;\r\n        });\r\n\r\n        afterEach(() => {\r\n            navigationPerPage.detach();\r\n        });\r\n\r\n        it('should get the number of entries as a prop', () => {\r\n            const totalEntriesProp = navigationPerPage.props().totalEntries;\r\n\r\n            expect(totalEntriesProp).toBeDefined();\r\n            expect(totalEntriesProp).toBe(NAVIGATION_PER_PAGE_BASIC_PROPS.totalEntries);\r\n        });\r\n\r\n        it('should render zero <NavigationPerPageSelect /> if the total entries are equal to zero', () => {\r\n            // [10, 20, 30]\r\n            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(3);\r\n\r\n            navigationPerPage = mount(<NavigationPerPage totalEntries={0} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n\r\n            // []\r\n            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(0);\r\n        });\r\n\r\n        it('should render one <NavigationPerPageSelect /> if the total entries are of at least one over zero', () => {\r\n            // [10, 20, 30]\r\n            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(3);\r\n\r\n            navigationPerPage = mount(<NavigationPerPage totalEntries={1} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n\r\n            // [10]\r\n            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(1);\r\n        });\r\n\r\n        it('should render all <NavigationPerPageSelect />s where there are at least 1 element more than the previous <NavigationPerPageSelect />', () => {\r\n            // [10, 20, 30]\r\n            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(3);\r\n\r\n            navigationPerPage = mount(<NavigationPerPage totalEntries={11} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(2);\r\n\r\n            navigationPerPage = mount(<NavigationPerPage totalEntries={21} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(3);\r\n        });\r\n\r\n        it('should call onRender if prop is set on mount', () => {\r\n            const onRenderSpy = jasmine.createSpy('onRender');\r\n\r\n            expect(() => {\r\n                navigationPerPageInstance.componentWillMount();\r\n            }).not.toThrow();\r\n\r\n            navigationPerPage = mount(\r\n                <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} onRender={onRenderSpy} />,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            expect(onRenderSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onDestroy if prop is set when unmounting', () => {\r\n            const onDestroySpy = jasmine.createSpy('onDestroy');\r\n\r\n            expect(() => {\r\n                navigationPerPageInstance.componentWillMount();\r\n            }).not.toThrow();\r\n\r\n            navigationPerPage = mount(\r\n                <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} onDestroy={onDestroySpy} />,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            navigationPerPage.unmount();\r\n            expect(onDestroySpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should display the per page label if prop is set else it should show the default one', () => {\r\n            const expectedLabel = 'Show this many items per page';\r\n            const newNavigationPerPageProps = _.extend({}, NAVIGATION_PER_PAGE_BASIC_PROPS, {label: expectedLabel});\r\n\r\n            expect(navigationPerPage.html()).toContain(PER_PAGE_LABEL);\r\n\r\n            navigationPerPage.setProps(newNavigationPerPageProps);\r\n            expect(navigationPerPage.html()).not.toContain(PER_PAGE_LABEL);\r\n            expect(navigationPerPage.html()).toContain(expectedLabel);\r\n        });\r\n\r\n        it('should show the custom per page numbers if set as a prop or show the default ones', () => {\r\n            const expectedPerPageNumbers = [2, 3, 4, 5, 10, 30];\r\n            const newNavigationPerPageProps = _.extend({}, NAVIGATION_PER_PAGE_BASIC_PROPS, {\r\n                perPageNumbers: expectedPerPageNumbers,\r\n            });\r\n\r\n            expect(navigationPerPage.find('NavigationPerPageSelect').length).toBe(PER_PAGE_NUMBERS.length);\r\n\r\n            navigationPerPage.setProps(newNavigationPerPageProps);\r\n            expect(navigationPerPage.find('NavigationPerPageSelect').length).toBe(expectedPerPageNumbers.length);\r\n        });\r\n\r\n        it('should call onPerPageClick prop if it is set when calling handleClick and perPage is different than currentPerPage', () => {\r\n            const newProps: INavigationPerPageProps = _.extend({}, NAVIGATION_PER_PAGE_BASIC_PROPS, {\r\n                onPerPageClick: jasmine.createSpy('onPerPageClick'),\r\n            });\r\n            const expectedPerPage: number = 22;\r\n\r\n            expect(() => navigationPerPageInstanceAsAny.handleClick(expectedPerPage)).not.toThrow();\r\n\r\n            navigationPerPage.setProps(newProps);\r\n            navigationPerPageInstanceAsAny.handleClick(expectedPerPage);\r\n\r\n            expect(newProps.onPerPageClick).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not call onPerPageClick prop if perPage is identical to currentPerPage', () => {\r\n            const newProps: INavigationPerPageProps = _.extend({}, NAVIGATION_PER_PAGE_BASIC_PROPS, {\r\n                onPerPageClick: jasmine.createSpy('onPerPageClick'),\r\n                currentPerPage: 10,\r\n            });\r\n            const expectedPerPage: number = 10;\r\n\r\n            expect(() => navigationPerPageInstanceAsAny.handleClick(expectedPerPage)).not.toThrow();\r\n\r\n            navigationPerPage.setProps(newProps);\r\n            // two clicks should call the function once\r\n            navigationPerPageInstanceAsAny.handleClick(expectedPerPage);\r\n            expect(newProps.onPerPageClick).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should set the per page at the initial position on first render', () => {\r\n            const expectedSelected: number = 2;\r\n            navigationPerPage = mount(\r\n                <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} initialPosition={expectedSelected} />,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n\r\n            expect(\r\n                navigationPerPage\r\n                    .find(NavigationPerPageSelect)\r\n                    .at(expectedSelected)\r\n                    .props().selected\r\n            ).toBe(true);\r\n        });\r\n\r\n        it('should select the middle option if initialPosition prop is not defined on first render', () => {\r\n            navigationPerPage = mount(\r\n                <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} perPageNumbers={[1, 2, 3, 4, 5]} />,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n\r\n            expect(\r\n                navigationPerPage\r\n                    .find(NavigationPerPageSelect)\r\n                    .at(2)\r\n                    .props().selected\r\n            ).toBe(true);\r\n\r\n            navigationPerPage = mount(\r\n                <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} perPageNumbers={[1, 2]} />,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n\r\n            expect(\r\n                navigationPerPage\r\n                    .find(NavigationPerPageSelect)\r\n                    .at(0)\r\n                    .props().selected\r\n            ).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=587.bundle.js.map