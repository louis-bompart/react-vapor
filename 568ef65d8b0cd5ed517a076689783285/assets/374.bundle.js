(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{1483:function(e,r,t){"use strict";t.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {addFilter, filterThrough} from '../../filterBox/FilterBoxActions';\r\nimport {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';\r\nimport {addFacet, toggleMoreFacetRows} from '../FacetActions';\r\nimport {FacetMoreRows, IFacetMoreRowsProps} from '../FacetMoreRows';\r\nimport {FacetMoreRowsConnected} from '../FacetMoreRowsConnected';\r\nimport {FacetRow} from '../FacetRow';\r\n\r\ndescribe('Facets', () => {\r\n    describe('<FacetMoreRowConnected />', () => {\r\n        let facet: string;\r\n        let facetRows: JSX.Element[];\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let facetMoreRows: ReactWrapper<IFacetMoreRowsProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            const onToggleFacet = jasmine.createSpy('onToggleFacet');\r\n            facet = 'facetTitle';\r\n            facetRows = [\r\n                <FacetRow\r\n                    key=\"row1\"\r\n                    facet={facet}\r\n                    facetRow={{name: 'row1', formattedName: 'Row 1'}}\r\n                    onToggleFacet={onToggleFacet}\r\n                    isChecked={false}\r\n                />,\r\n                <FacetRow\r\n                    key=\"row2\"\r\n                    facet={facet}\r\n                    facetRow={{name: 'row2', formattedName: 'Row 2'}}\r\n                    onToggleFacet={onToggleFacet}\r\n                    isChecked={false}\r\n                />,\r\n            ];\r\n\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <FacetMoreRowsConnected facet={facet} facetRows={facetRows} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            store.dispatch(addFacet(facet));\r\n            wrapper.update();\r\n\r\n            facetMoreRows = wrapper.find(FacetMoreRows);\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get if the rows are opened as a prop', () => {\r\n            const isOpenedProp = facetMoreRows.props().isOpened;\r\n\r\n            expect(isOpenedProp).toBeDefined();\r\n            expect(isOpenedProp).toBe(false);\r\n        });\r\n\r\n        it('should get the text in its filter as a prop', () => {\r\n            const filterTextProp = facetMoreRows.props().filterText;\r\n\r\n            expect(filterTextProp).toBeDefined();\r\n            expect(filterTextProp).toBe('');\r\n        });\r\n\r\n        it('should be hidden if it is not opened', () => {\r\n            expect(facetMoreRows.props().isOpened).toBe(false);\r\n            expect(facetMoreRows.find('.facet-more-search').hasClass('hidden')).toBe(true);\r\n\r\n            store.dispatch(toggleMoreFacetRows(facet));\r\n            wrapper.update();\r\n            facetMoreRows = wrapper.find(FacetMoreRows);\r\n\r\n            expect(facetMoreRows.props().isOpened).toBe(true);\r\n            expect(facetMoreRows.find('.facet-more-search').hasClass('hidden')).toBe(false);\r\n        });\r\n\r\n        it('should render a <FilterBoxConnected /> component', () => {\r\n            expect(facetMoreRows.find(FilterBoxConnected).length).toBe(1);\r\n            expect(facetMoreRows.find(FilterBoxConnected).props().id).toBe('filter-' + facet);\r\n        });\r\n\r\n        it('should show only the filtered rows', () => {\r\n            const filterId = `filter-${facet}`;\r\n            store.dispatch(addFilter(filterId));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(FacetMoreRows).find(FacetRow).length).toBe(2);\r\n\r\n            store.dispatch(filterThrough(filterId, 'row'));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(FacetMoreRows).find(FacetRow).length).toBe(2);\r\n\r\n            store.dispatch(filterThrough(filterId, 'Row 2'));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(FacetMoreRows).find(FacetRow).length).toBe(1);\r\n        });\r\n\r\n        it('should set the filter value to an empty string when opening', () => {\r\n            const filterId = 'filter-' + facet;\r\n            const filterValue = 'something';\r\n\r\n            store.dispatch(filterThrough(filterId, filterValue));\r\n            expect(_.findWhere(store.getState().filters, {id: filterId}).filterText).toBe(filterValue);\r\n\r\n            store.dispatch(toggleMoreFacetRows(facet));\r\n            expect(_.findWhere(store.getState().filters, {id: filterId}).filterText).toBe('');\r\n        });\r\n\r\n        it('should close itself when clicking out of the \"facet-search\" div', () => {\r\n            store.dispatch(toggleMoreFacetRows(facet));\r\n            wrapper.update();\r\n            expect(wrapper.find(FacetMoreRows).props().isOpened).toBe(true);\r\n\r\n            (document.getElementsByClassName('facet-search')[0] as HTMLDivElement).click();\r\n            wrapper.update();\r\n            expect(wrapper.find(FacetMoreRows).props().isOpened).toBe(true);\r\n\r\n            (document.getElementsByClassName('facet-more-search')[0] as HTMLDivElement).click();\r\n            wrapper.update();\r\n            expect(wrapper.find(FacetMoreRows).props().isOpened).toBe(false);\r\n\r\n            store.dispatch(toggleMoreFacetRows(facet));\r\n            wrapper.update();\r\n            expect(wrapper.find(FacetMoreRows).props().isOpened).toBe(true);\r\n\r\n            document.getElementById('App').click();\r\n            wrapper.update();\r\n            expect(wrapper.find(FacetMoreRows).props().isOpened).toBe(false);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=374.bundle.js.map