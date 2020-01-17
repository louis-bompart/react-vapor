(window.webpackJsonp=window.webpackJsonp||[]).push([[837],{1921:function(n,t,e){"use strict";e.r(t),t.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {ITableProps} from '../Table';\r\nimport {TableChildBlankSlate} from '../table-children/TableChildBlankSlate';\r\nimport {DEFAULT_TABLE_DATA, TOGGLE_ARROW_CELL_COUNT} from '../TableConstants';\r\nimport {tablePropsMock} from './TableTestCommon';\r\n\r\ndescribe('<TableChildBlankSlate />', () => {\r\n    describe('render', () => {\r\n        const mountComponentWithProps = (props: ITableProps) => {\r\n            return mount(<TableChildBlankSlate {...props} />, {attachTo: document.getElementById('App')});\r\n        };\r\n\r\n        describe('render without error', () => {\r\n            it('should render without error if basic props are passed', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps(tablePropsMock);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table is loading', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({...tablePropsMock, tableCompositeState: {isLoading: true}} as any);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table has displayed rows', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        tableCompositeState: {\r\n                            data: {...DEFAULT_TABLE_DATA, displayedIds: ['some rows are displayed']},\r\n                        },\r\n                    } as any);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table has a blankslate on action and filter is non empty', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        blankSlateNoResultsOnAction: {title: 'no results'},\r\n                        tableCompositeState: {filter: 'non empty'},\r\n                    } as any);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table has a blankslate on action and from (datePicker) is non empty', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        blankSlateNoResultsOnAction: {title: 'no results'},\r\n                        tableCompositeState: {from: Date.now()},\r\n                    } as any);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table has a blankslate on action and to (datePicker) is non empty', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        blankSlateNoResultsOnAction: {title: 'no results'},\r\n                        tableCompositeState: {to: Date.now()},\r\n                    } as any);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table has a blankslate on action and some predicates have a non default value', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        blankSlateNoResultsOnAction: {title: 'no results'},\r\n                        tableCompositeState: {predicates: [{attribute1: 'non default value'}]},\r\n                    } as any);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table has no blankslate on action and filter is non empty', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        tableCompositeState: {filter: 'non empty'},\r\n                    } as any);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table has no blankslate on action and from (datePicker) is non empty', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        tableCompositeState: {from: Date.now()},\r\n                    } as any);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table has no blankslate on action and to (datePicker) is non empty', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        tableCompositeState: {to: Date.now()},\r\n                    } as any);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table has no blankslate on action and some predicates have a non default value', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        tableCompositeState: {predicates: [{attribute1: 'non default value'}]},\r\n                    } as any);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table is in error and has a blankslateOnError', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        blankSlateOnError: {title: 'table on error'},\r\n                        tableCompositeState: {isInError: true},\r\n                    } as any);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if the table is in error and has no blankslateOnError', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        tableCompositeState: {isInError: true},\r\n                    } as any);\r\n                }).not.toThrow();\r\n            });\r\n        });\r\n\r\n        describe('render content', () => {\r\n            it('should render the default blankslate if no results without actions and without table being in error', () => {\r\n                expect(mountComponentWithProps(tablePropsMock).text()).toContain(\r\n                    tablePropsMock.blankSlateDefault.title as string\r\n                );\r\n            });\r\n\r\n            it('should render the default blanslate that spans accross all table columns', () => {\r\n                expect(\r\n                    mountComponentWithProps(tablePropsMock)\r\n                        .find('td')\r\n                        .prop('colSpan')\r\n                ).toBe(tablePropsMock.headingAttributes.length);\r\n            });\r\n\r\n            it(\r\n                'should render the default blanslate that spans accross all table columns + the collapsible toggle column ' +\r\n                    'when the table has at least one collapsible column',\r\n                () => {\r\n                    expect(\r\n                        mountComponentWithProps({\r\n                            ...tablePropsMock,\r\n                            collapsibleFormatter: () => null,\r\n                        })\r\n                            .find('td')\r\n                            .prop('colSpan')\r\n                    ).toBe(tablePropsMock.headingAttributes.length + TOGGLE_ARROW_CELL_COUNT);\r\n                }\r\n            );\r\n\r\n            it('should render the blankSlateNoResultsOnAction if the table has a blankslate on action and filter is non empty', () => {\r\n                const blankslateTitleOnAction = 'no results on action!';\r\n                expect(\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        blankSlateNoResultsOnAction: {title: blankslateTitleOnAction},\r\n                        tableCompositeState: {filter: 'non empty'},\r\n                    } as any).text()\r\n                ).toContain(blankslateTitleOnAction);\r\n            });\r\n\r\n            it('should render the blankSlateNoResultsOnAction if the table has a blankslate on action and from (datePicker) is non empty', () => {\r\n                const blankslateTitleOnAction = 'no results on action!';\r\n                expect(\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        blankSlateNoResultsOnAction: {title: blankslateTitleOnAction},\r\n                        tableCompositeState: {from: Date.now()},\r\n                    } as any).text()\r\n                ).toContain(blankslateTitleOnAction);\r\n            });\r\n\r\n            it('should render the blankSlateNoResultsOnAction if the table has a blankslate on action and to (datePicker) is non empty', () => {\r\n                const blankslateTitleOnAction = 'no results on action!';\r\n                expect(\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        blankSlateNoResultsOnAction: {title: blankslateTitleOnAction},\r\n                        tableCompositeState: {to: Date.now()},\r\n                    } as any).text()\r\n                ).toContain(blankslateTitleOnAction);\r\n            });\r\n\r\n            it('should render the blankSlateNoResultsOnAction if the table has a blankslate on action and some predicates have a non default value', () => {\r\n                const blankslateTitleOnAction = 'no results on action!';\r\n                expect(\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        blankSlateNoResultsOnAction: {title: blankslateTitleOnAction},\r\n                        tableCompositeState: {predicates: [{attribute1: 'non default value'}]},\r\n                    } as any).text()\r\n                ).toContain(blankslateTitleOnAction);\r\n            });\r\n\r\n            it('should render blankSlateDefault if the table has no blankslate on action and filter is non empty', () => {\r\n                expect(\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        tableCompositeState: {filter: 'non empty'},\r\n                    } as any).text()\r\n                ).toContain(tablePropsMock.blankSlateDefault.title as string);\r\n            });\r\n\r\n            it('should render blankSlateDefault if the table has no blankslate on action and from (datePicker) is non empty', () => {\r\n                expect(\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        tableCompositeState: {from: Date.now()},\r\n                    } as any).text()\r\n                ).toContain(tablePropsMock.blankSlateDefault.title as string);\r\n            });\r\n\r\n            it('should render blankSlateDefault if the table has no blankslate on action and to (datePicker) is non empty', () => {\r\n                expect(\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        tableCompositeState: {to: Date.now()},\r\n                    } as any).text()\r\n                ).toContain(tablePropsMock.blankSlateDefault.title as string);\r\n            });\r\n\r\n            it('should render blankSlateDefault if the table has no blankslate on action and some predicates have a non default value', () => {\r\n                expect(\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        tableCompositeState: {predicates: [{attribute1: 'non default value'}]},\r\n                    } as any).text()\r\n                ).toContain(tablePropsMock.blankSlateDefault.title as string);\r\n            });\r\n\r\n            it('should render blankslateOnError if the table is in error and has a blankslateOnError', () => {\r\n                const blankslateTitleOnAction = 'no results on action!';\r\n                expect(\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        blankSlateOnError: {title: blankslateTitleOnAction},\r\n                        tableCompositeState: {isInError: true},\r\n                    } as any).text()\r\n                ).toContain(blankslateTitleOnAction);\r\n            });\r\n\r\n            it('should render blankSlateDefault if the table is in error and has no blankslateOnError', () => {\r\n                expect(\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        tableCompositeState: {isInError: true},\r\n                    } as any).text()\r\n                ).toContain(tablePropsMock.blankSlateDefault.title as string);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=837.bundle.js.map