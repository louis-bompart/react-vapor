(window.webpackJsonp=window.webpackJsonp||[]).push([[790],{1876:function(e,r,n){"use strict";n.r(r),r.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {ActionBarConnected} from '../../actions/ActionBar';\r\nimport {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';\r\nimport {ITableHOCOwnProps, TableHOC} from '../TableHOC';\r\n\r\ndescribe('TableHOC', () => {\r\n    describe('<TableHOC/>', () => {\r\n        const defaultProps: Partial<ITableHOCOwnProps> = {\r\n            id: 'table',\r\n            data: [],\r\n            renderBody: _.identity,\r\n        };\r\n\r\n        it('should not throw', () => {\r\n            expect(() => shallow(<TableHOC id=\"table\" data={[]} renderBody={_.identity} />)).not.toThrow();\r\n            expect(() => shallow(<TableHOC id=\"table-2\" data={null} renderBody={_.identity} />)).not.toThrow();\r\n        });\r\n\r\n        it('should render a table', () => {\r\n            const wrapper = shallow(<TableHOC {...defaultProps} />);\r\n            expect(wrapper.find('table').exists()).toBe(true);\r\n        });\r\n\r\n        it('should render the data', () => {\r\n            const data = _.map(_.range(10), (i: number) => ({value: i}));\r\n            const wrapper = shallow(\r\n                <TableHOC\r\n                    id=\"a\"\r\n                    data={data}\r\n                    renderBody={(d: any[]) => _.map(d, ({value}) => <tr className={`row-${value}`}></tr>)}\r\n                />\r\n            );\r\n            _.each(data, ({value}) => {\r\n                expect(wrapper.find(`tr.row-${value}`).exists()).toBe(true);\r\n            });\r\n        });\r\n\r\n        it('should allow custom classes on the table', () => {\r\n            const expectedClass = 'some-class';\r\n            const wrapper = shallow(<TableHOC {...defaultProps} className={expectedClass} />);\r\n            expect(wrapper.find('table').hasClass(expectedClass)).toBe(true);\r\n        });\r\n\r\n        it('should render a .table-container', () => {\r\n            const wrapper = shallow(<TableHOC {...defaultProps} />);\r\n            expect(wrapper.find('.table-container').exists()).toBe(true);\r\n        });\r\n\r\n        it('should allow custom classes on the .table-container', () => {\r\n            const expectedClass = 'some-class';\r\n            const wrapper = shallow(<TableHOC {...defaultProps} containerClassName={expectedClass} />);\r\n            expect(wrapper.find('.table-container').hasClass(expectedClass)).toBe(true);\r\n        });\r\n\r\n        it('should add the loading-component class on the table if isLoading is true', () => {\r\n            const wrapper = shallow(<TableHOC {...defaultProps} />);\r\n            expect(wrapper.find('.table-container').hasClass('loading-component')).toBe(false);\r\n\r\n            wrapper.setProps({isLoading: true});\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find('.table-container').hasClass('loading-component')).toBe(true);\r\n        });\r\n\r\n        it('should not render an ActionBarConnected if the table prop hasActionButtons is false and the table have no actions', () => {\r\n            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons={false} actions={[]} />);\r\n            expect(wrapper.find(ActionBarConnected).exists()).toBe(false);\r\n        });\r\n\r\n        it('should render an ActionBarConnected if the table prop hasActionButtons is true', () => {\r\n            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons />);\r\n            expect(wrapper.find(ActionBarConnected).exists()).toBe(true);\r\n        });\r\n\r\n        it('should render an ActionBarConnected with a top border if the \"hasBorderTop\" is set to true', () => {\r\n            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons showBorderTop />);\r\n            expect(wrapper.find(ActionBarConnected).prop('extraContainerClasses')).toContain('mod-border-top');\r\n        });\r\n\r\n        it('should render an ActionBarConnected if the table prop hasActionButtons is false but the table have some actions', () => {\r\n            const wrapper = shallow(\r\n                <TableHOC {...defaultProps} actions={[<FilterBoxConnected />]} hasActionButtons={false} />\r\n            );\r\n            expect(wrapper.find(ActionBarConnected).exists()).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=790.bundle.js.map