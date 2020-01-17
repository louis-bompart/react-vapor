(window.webpackJsonp=window.webpackJsonp||[]).push([[570],{1661:function(n,a,t){"use strict";t.r(a),a.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../../../ReactVapor';\r\nimport {clearState} from '../../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../../utils/tests/TestUtils';\r\nimport {addLoading, turnOffLoading} from '../../../loading/LoadingActions';\r\nimport {INavigationPaginationProps, NavigationPagination} from '../NavigationPagination';\r\nimport {changePage, resetPaging} from '../NavigationPaginationActions';\r\nimport {NavigationPaginationConnected} from '../NavigationPaginationConnected';\r\nimport {NavigationPaginationSelect} from '../NavigationPaginationSelect';\r\n\r\ndescribe('<NavigationPaginationConnected />', () => {\r\n    let wrapper: ReactWrapper<any, any>;\r\n    let navigationPagination: ReactWrapper<INavigationPaginationProps, any>;\r\n    let fewPagesNavigationPagination: ReactWrapper<INavigationPaginationProps, any>;\r\n    let store: Store<IReactVaporState>;\r\n    const basicNavigationPaginationProps: INavigationPaginationProps = {\r\n        totalPages: 20,\r\n        id: 'navigation-pagination',\r\n    };\r\n    const loadingId = basicNavigationPaginationProps.id + '-loading';\r\n    basicNavigationPaginationProps.loadingIds = [loadingId];\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n        store.dispatch(addLoading(loadingId));\r\n        store.dispatch(turnOffLoading([loadingId]));\r\n\r\n        wrapper = mount(\r\n            <Provider store={store}>\r\n                <div>\r\n                    <NavigationPaginationConnected {...basicNavigationPaginationProps} />\r\n                    <NavigationPaginationConnected id=\"few-pages-navigation-pagination\" totalPages={3} />\r\n                </div>\r\n            </Provider>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n        navigationPagination = wrapper.find(NavigationPagination).first();\r\n        fewPagesNavigationPagination = wrapper.find(NavigationPagination).last();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n        wrapper.detach();\r\n    });\r\n\r\n    it('should get the number of pages as a prop', () => {\r\n        const totalPagesProp = navigationPagination.props().totalPages;\r\n\r\n        expect(totalPagesProp).toBeDefined();\r\n        expect(totalPagesProp).toBe(basicNavigationPaginationProps.totalPages);\r\n    });\r\n\r\n    it('should get the current page as a prop', () => {\r\n        const currentPageProp = navigationPagination.props().currentPage;\r\n\r\n        expect(currentPageProp).toBeDefined();\r\n        expect(currentPageProp).toBe(0);\r\n\r\n        store.dispatch(changePage(basicNavigationPaginationProps.id, 3));\r\n        wrapper.update();\r\n\r\n        expect(\r\n            wrapper\r\n                .find(NavigationPagination)\r\n                .first()\r\n                .props().currentPage\r\n        ).toBe(3);\r\n    });\r\n\r\n    it('should get what to do on click as a prop', () => {\r\n        const onPageClickProp = navigationPagination.props().onPageClick;\r\n\r\n        expect(onPageClickProp).toBeDefined();\r\n    });\r\n\r\n    it('should render no more <NavigationPaginationSelect /> than the total number of pages', () => {\r\n        expect(navigationPagination.find(NavigationPaginationSelect).length).toBeLessThan(\r\n            basicNavigationPaginationProps.totalPages + 1\r\n        );\r\n        expect(fewPagesNavigationPagination.find(NavigationPaginationSelect).length).toBeLessThan(\r\n            basicNavigationPaginationProps.totalPages + 1\r\n        );\r\n    });\r\n\r\n    it('should render no more <NavigationPaginationSelect /> than the maximum of pages shown (7)', () => {\r\n        expect(navigationPagination.find(NavigationPaginationSelect).length).toBeLessThan(8);\r\n        expect(fewPagesNavigationPagination.find(NavigationPaginationSelect).length).toBeLessThan(8);\r\n    });\r\n\r\n    it('should set the previous arrow to disabled if on first page', () => {\r\n        expect(\r\n            wrapper\r\n                .find('.flat-select-option')\r\n                .first()\r\n                .hasClass('disabled')\r\n        ).toBe(true);\r\n\r\n        store.dispatch(changePage(basicNavigationPaginationProps.id, 3));\r\n        wrapper.update();\r\n\r\n        expect(\r\n            wrapper\r\n                .find('.flat-select-option')\r\n                .first()\r\n                .hasClass('disabled')\r\n        ).toBe(false);\r\n    });\r\n\r\n    it('should set the next arrow to disabled if on last page', () => {\r\n        expect(\r\n            wrapper\r\n                .find(NavigationPagination)\r\n                .first()\r\n                .find('.flat-select-option')\r\n                .last()\r\n                .hasClass('disabled')\r\n        ).toBe(false);\r\n\r\n        store.dispatch(changePage(basicNavigationPaginationProps.id, 3));\r\n        wrapper.update();\r\n\r\n        expect(\r\n            wrapper\r\n                .find(NavigationPagination)\r\n                .first()\r\n                .find('.flat-select-option')\r\n                .last()\r\n                .hasClass('disabled')\r\n        ).toBe(false);\r\n\r\n        store.dispatch(changePage(basicNavigationPaginationProps.id, basicNavigationPaginationProps.totalPages - 1));\r\n        wrapper.update();\r\n\r\n        expect(\r\n            wrapper\r\n                .find(NavigationPagination)\r\n                .first()\r\n                .find('.flat-select-option')\r\n                .last()\r\n                .hasClass('disabled')\r\n        ).toBe(true);\r\n    });\r\n\r\n    it('should show the last page if there are less pages left than half maximum number of pages shown (7)', () => {\r\n        const lastPage = basicNavigationPaginationProps.totalPages - 1;\r\n\r\n        expect(wrapper.findWhere((select) => select.prop('pageNb') === lastPage).length).toBe(0);\r\n\r\n        store.dispatch(changePage(basicNavigationPaginationProps.id, lastPage - 4));\r\n        wrapper.update();\r\n\r\n        expect(wrapper.findWhere((select) => select.prop('pageNb') === lastPage).length).toBe(0);\r\n\r\n        store.dispatch(changePage(basicNavigationPaginationProps.id, lastPage - 3));\r\n        wrapper.update();\r\n\r\n        expect(wrapper.findWhere((select) => select.prop('pageNb') === lastPage).length).toBe(1);\r\n    });\r\n\r\n    it('should change the current page on page click', () => {\r\n        expect(_.findWhere(store.getState().paginationComposite, {id: basicNavigationPaginationProps.id}).pageNb).toBe(\r\n            0\r\n        );\r\n\r\n        navigationPagination\r\n            .find('.flat-select-option')\r\n            .last()\r\n            .simulate('click');\r\n\r\n        expect(\r\n            _.findWhere(store.getState().paginationComposite, {id: basicNavigationPaginationProps.id}).pageNb\r\n        ).not.toBe(0);\r\n    });\r\n\r\n    it('should return to the first page when resetting the pagination', () => {\r\n        store.dispatch(\r\n            store.dispatch(changePage(basicNavigationPaginationProps.id, basicNavigationPaginationProps.totalPages - 4))\r\n        );\r\n        wrapper.update();\r\n        expect(\r\n            wrapper\r\n                .find(NavigationPagination)\r\n                .first()\r\n                .props().currentPage\r\n        ).not.toBe(0);\r\n\r\n        store.dispatch(resetPaging(basicNavigationPaginationProps.id));\r\n        wrapper.update();\r\n        expect(\r\n            wrapper\r\n                .find(NavigationPagination)\r\n                .first()\r\n                .props().currentPage\r\n        ).toBe(0);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=570.bundle.js.map