(window.webpackJsonp=window.webpackJsonp||[]).push([[822],{1922:function(e,r,t){"use strict";t.r(r),r.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport {shallowWithState} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {IBlankSlateProps} from '../../blankSlate';\r\nimport {ITableHOCProps, TableHOC} from '../TableHOC';\r\nimport {tableWithFilter} from '../TableWithFilter';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableWithFilter', () => {\r\n        const TableWithFilter = _.compose(tableWithFilter())(TableHOC);\r\n\r\n        const defaultProps: ITableHOCProps = {\r\n            id: 'a',\r\n            data: [{value: 'a'}, {value: 'b'}],\r\n            renderBody: _.identity,\r\n        };\r\n\r\n        const getStateWithFilter = (filter: string) => ({filters: [{id: defaultProps.id, filterText: filter}]});\r\n\r\n        it('should not throw', () => {\r\n            expect(shallowWithState(<TableWithFilter id=\"a\" data={[]} renderBody={_.identity} />, {}));\r\n            expect(shallowWithState(<TableWithFilter id=\"b\" data={[{value: 'a'}]} renderBody={_.identity} />, {}));\r\n        });\r\n\r\n        it('should render a TableHOC', () => {\r\n            const wrapper = shallowWithState(<TableWithFilter {...defaultProps} />, {}).dive();\r\n            expect(wrapper.find(TableHOC).exists()).toBe(true);\r\n        });\r\n\r\n        it('should filter out elements not matching the filter in the state', () => {\r\n            const filterText = 'b';\r\n            const wrapper = shallowWithState(\r\n                <TableWithFilter {...defaultProps} />,\r\n                getStateWithFilter(filterText)\r\n            ).dive();\r\n\r\n            const filteredData = _.filter(defaultProps.data, ({value}) => value === filterText);\r\n            const tableData = wrapper.find(TableHOC).prop('data');\r\n\r\n            expect(tableData).toEqual(filteredData);\r\n        });\r\n\r\n        describe('when server side', () => {\r\n            const TableWithFilterServer = _.compose(withServerSideProcessing, tableWithFilter())(TableHOC);\r\n\r\n            it('should not filter out elements if the filter is server side', () => {\r\n                const filterText = 'b';\r\n                const wrapper = shallowWithState(\r\n                    <TableWithFilterServer {...defaultProps} />,\r\n                    getStateWithFilter(filterText)\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                const tableData = wrapper.find(TableHOC).prop('data');\r\n\r\n                expect(tableData).toEqual(defaultProps.data);\r\n            });\r\n\r\n            it('should call onUpdate when the filter changes', () => {\r\n                const updateSpy = jasmine.createSpy('update');\r\n                const filterText = 'b';\r\n                const wrapper = shallowWithState(\r\n                    <TableWithFilterServer {...defaultProps} onUpdate={updateSpy} />,\r\n                    getStateWithFilter(filterText)\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                wrapper.setProps({filter: 'a'});\r\n                wrapper.update();\r\n\r\n                expect(updateSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should not call onUpdate when the filter does not changes', () => {\r\n                const updateSpy = jasmine.createSpy('update');\r\n                const filterText = 'b';\r\n                const wrapper = shallowWithState(\r\n                    <TableWithFilterServer {...defaultProps} onUpdate={updateSpy} />,\r\n                    getStateWithFilter(filterText)\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                wrapper.setProps({ignore: true});\r\n                wrapper.update();\r\n\r\n                expect(updateSpy).not.toHaveBeenCalled();\r\n            });\r\n\r\n            it('should render a blankSlate as renderBody if the data is empty and the filter is not empty', () => {\r\n                const wrapper = shallowWithState(\r\n                    <TableWithFilterServer {...defaultProps} data={null} />,\r\n                    getStateWithFilter('filterText')\r\n                );\r\n\r\n                const wrapperRenderBody: ShallowWrapper<IBlankSlateProps> = shallow(\r\n                    (wrapper as any)\r\n                        .dive()\r\n                        .dive()\r\n                        .props()\r\n                        .renderBody()\r\n                );\r\n\r\n                expect((wrapperRenderBody.instance().props as IBlankSlateProps).title).toBeDefined();\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=822.bundle.js.map