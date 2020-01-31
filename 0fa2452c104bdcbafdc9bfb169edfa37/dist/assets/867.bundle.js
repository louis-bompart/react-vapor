(window.webpackJsonp=window.webpackJsonp||[]).push([[867],{1965:function(n,o,r){"use strict";r.r(o),o.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {Loading} from '../../loading/Loading';\r\nimport {ITableChildLoadingRowProps, TableChildLoadingRow} from '../table-children/TableChildLoadingRow';\r\nimport {TOGGLE_ARROW_CELL_COUNT} from '../TableConstants';\r\nimport {tablePropsMock} from './TableTestCommon';\r\n\r\ndescribe('<TableChildLoadingRow />', () => {\r\n    describe('render', () => {\r\n        const mountComponentWithProps = (props: ITableChildLoadingRowProps) => {\r\n            return mount(<TableChildLoadingRow {...props} />, {attachTo: document.getElementById('App')});\r\n        };\r\n\r\n        it('should render without error if basic props are passed with isInitialLoad true', () => {\r\n            expect(() => {\r\n                mountComponentWithProps({...tablePropsMock, isInitialLoad: true});\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should render without error if basic props are passed with isInitialLoad false', () => {\r\n            expect(() => {\r\n                mountComponentWithProps({...tablePropsMock, isInitialLoad: false});\r\n            }).not.toThrow();\r\n        });\r\n\r\n        it('should render null if isInitialLoading is false', () => {\r\n            expect(mountComponentWithProps({...tablePropsMock, isInitialLoad: false}).html()).toBeNull();\r\n        });\r\n\r\n        it('should render a tbody with a loading component if isInitialLoad is true', () => {\r\n            const loadingRow = mountComponentWithProps({...tablePropsMock, isInitialLoad: true});\r\n            expect(loadingRow.find('tbody').length).toBe(1);\r\n            expect(loadingRow.find('tbody').find(Loading).length).toBe(1);\r\n        });\r\n\r\n        it('should render the default blanslate that spans accross all table columns', () => {\r\n            expect(\r\n                mountComponentWithProps({\r\n                    ...tablePropsMock,\r\n                    isInitialLoad: true,\r\n                })\r\n                    .find('td')\r\n                    .prop('colSpan')\r\n            ).toBe(tablePropsMock.headingAttributes.length);\r\n        });\r\n\r\n        it(\r\n            'should render the default blanslate that spans accross all table columns + the collapsible toggle column ' +\r\n                'when the table has at least one collapsible column',\r\n            () => {\r\n                expect(\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        isInitialLoad: true,\r\n                        collapsibleFormatter: () => null,\r\n                    })\r\n                        .find('td')\r\n                        .prop('colSpan')\r\n                ).toBe(tablePropsMock.headingAttributes.length + TOGGLE_ARROW_CELL_COUNT);\r\n            }\r\n        );\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=867.bundle.js.map