(window.webpackJsonp=window.webpackJsonp||[]).push([[541],{1632:function(r,t,n){"use strict";n.r(t),t.default="import {shallowWithState, shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {StringListActions} from '../../../reusableState/customList/StringListActions';\r\nimport {RTestUtils} from '../../../utils/tests/RTestUtils';\r\nimport {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';\r\nimport {IMultilineBoxOwnProps, IMultilineParentProps, IMultilineSingleBoxProps, MultilineBox} from '../MultilineBox';\r\n\r\ndescribe('MultilineBox', () => {\r\n    describe('<MultilineBox/>', () => {\r\n        let store: ReactVaporMockStore;\r\n        const id = 'multiline-box';\r\n        const defaultProps: IMultilineBoxOwnProps = {\r\n            id,\r\n            data: [],\r\n            renderBody: () => <div className=\"multiline-box\" />,\r\n        };\r\n\r\n        it('should not throw on create', () => {\r\n            expect(() => shallowWithState(<MultilineBox {...defaultProps} />, {})).not.toThrow();\r\n        });\r\n\r\n        it('should mount without errors', () => {\r\n            expect(() => shallowWithState(<MultilineBox {...defaultProps} />, {}).dive()).not.toThrow();\r\n        });\r\n\r\n        it('should unmount without errors', () => {\r\n            const wrapper = shallowWithState(<MultilineBox {...defaultProps} />, {}).dive();\r\n\r\n            expect(() => wrapper.unmount()).not.toThrow();\r\n        });\r\n\r\n        it('should render a multiline box', () => {\r\n            const wrapper = shallowWithState(<MultilineBox {...defaultProps} />, {}).dive();\r\n            expect(wrapper.find('div').exists()).toBe(true);\r\n        });\r\n\r\n        describe('store actions', () => {\r\n            const propsWithData: IMultilineBoxOwnProps = {\r\n                id,\r\n                data: [{name: 'princess'}],\r\n                renderBody: () => <div className=\"multiline-box\" />,\r\n            };\r\n\r\n            it('should add an additional ids in the store on mount', () => {\r\n                store = getStoreMock();\r\n                shallowWithStore(<MultilineBox {...defaultProps} />, store).dive();\r\n\r\n                expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.add);\r\n            });\r\n\r\n            it('should remove ids in the store on unmount', () => {\r\n                store = getStoreMock();\r\n                const wrapper = shallowWithStore(<MultilineBox {...defaultProps} />, store).dive();\r\n                wrapper.unmount();\r\n\r\n                expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.remove);\r\n            });\r\n\r\n            describe('parentProps sent to the renderBody', () => {\r\n                it('should dispatch action to remove the current box id from the list on removeBox sent with the ParentProps object', () => {\r\n                    store = getStoreMock();\r\n                    shallowWithStore(\r\n                        <MultilineBox\r\n                            {...propsWithData}\r\n                            renderBody={(data: IMultilineSingleBoxProps[], parentProps: IMultilineParentProps) => {\r\n                                parentProps.removeBox('id');\r\n                                return <div />;\r\n                            }}\r\n                        />,\r\n                        store\r\n                    ).dive();\r\n\r\n                    expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.removeValue);\r\n                });\r\n\r\n                it('should dispatch action to add a new id on addNewBox sent with the ParentProps object', () => {\r\n                    store = getStoreMock();\r\n                    shallowWithStore(\r\n                        <MultilineBox\r\n                            {...propsWithData}\r\n                            renderBody={(data: IMultilineSingleBoxProps[], parentProps: IMultilineParentProps) => {\r\n                                parentProps.addNewBox();\r\n                                return <div />;\r\n                            }}\r\n                        />,\r\n                        store\r\n                    ).dive();\r\n\r\n                    expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.addValue);\r\n                });\r\n\r\n                it('should dispatch action to add a new id on addNewBox sent with the ParentProps object', () => {\r\n                    let parentId: string = '';\r\n                    store = getStoreMock();\r\n                    shallowWithStore(\r\n                        <MultilineBox\r\n                            {...propsWithData}\r\n                            renderBody={(data: IMultilineSingleBoxProps[], parentProps: IMultilineParentProps) => {\r\n                                parentId = parentProps.parentId;\r\n                                return <div />;\r\n                            }}\r\n                        />,\r\n                        store\r\n                    ).dive();\r\n\r\n                    expect(parentId).toBe(id);\r\n                });\r\n            });\r\n\r\n            describe('data sent to the renderBody', () => {\r\n                let dataToBody: any[] = [];\r\n\r\n                it('should return an array of data with an generated id for the initial data object and and an other one for the default box at the end', () => {\r\n                    const testId = 'cream';\r\n\r\n                    RTestUtils.mockUUID(testId);\r\n                    shallowWithState(\r\n                        <MultilineBox\r\n                            {...propsWithData}\r\n                            renderBody={(data: IMultilineSingleBoxProps[]) => {\r\n                                dataToBody = data;\r\n                                return <div />;\r\n                            }}\r\n                        />,\r\n                        {\r\n                            multilineIds: {\r\n                                [id]: {\r\n                                    id: id,\r\n                                    list: [testId],\r\n                                },\r\n                            },\r\n                        }\r\n                    ).dive();\r\n\r\n                    expect(dataToBody[0].id).toBe(testId);\r\n                });\r\n\r\n                it('should return an array of data with the isLast set to true for the last element only', () => {\r\n                    const testId = 'cream';\r\n\r\n                    RTestUtils.mockUUID(testId);\r\n                    shallowWithState(\r\n                        <MultilineBox\r\n                            {...propsWithData}\r\n                            renderBody={(data: IMultilineSingleBoxProps[]) => {\r\n                                dataToBody = data;\r\n                                return <div />;\r\n                            }}\r\n                        />,\r\n                        {\r\n                            multilineIds: {\r\n                                [id]: {\r\n                                    id: id,\r\n                                    list: [testId, '1234'],\r\n                                },\r\n                            },\r\n                        }\r\n                    ).dive();\r\n\r\n                    expect(dataToBody[0].isLast).toBe(false);\r\n                    expect(dataToBody[1].isLast).toBe(true);\r\n                });\r\n\r\n                it('should return props from initial data if rendered', () => {\r\n                    const testId = 'cream';\r\n\r\n                    RTestUtils.mockUUID(testId);\r\n                    shallowWithState(\r\n                        <MultilineBox\r\n                            {...propsWithData}\r\n                            renderBody={(data: IMultilineSingleBoxProps[]) => {\r\n                                dataToBody = data;\r\n                                return <div />;\r\n                            }}\r\n                        />,\r\n                        {\r\n                            multilineIds: {\r\n                                [id]: {\r\n                                    id: id,\r\n                                    list: [testId],\r\n                                },\r\n                            },\r\n                        }\r\n                    ).dive();\r\n\r\n                    expect(dataToBody[0].props).toEqual({name: 'princess'});\r\n                });\r\n\r\n                it('should return an empty object if the default props is not defined and its not a box from the initial data', () => {\r\n                    const testId = 'cream';\r\n\r\n                    RTestUtils.mockUUID(testId);\r\n                    shallowWithState(\r\n                        <MultilineBox\r\n                            {...propsWithData}\r\n                            defaultProps={undefined}\r\n                            renderBody={(data: IMultilineSingleBoxProps[]) => {\r\n                                dataToBody = data;\r\n                                return <div />;\r\n                            }}\r\n                        />,\r\n                        {\r\n                            multilineIds: {\r\n                                [id]: {\r\n                                    id: id,\r\n                                    list: ['uniqueID'],\r\n                                },\r\n                            },\r\n                        }\r\n                    ).dive();\r\n\r\n                    expect(dataToBody[0].props).toEqual({});\r\n                });\r\n\r\n                it('should return the default props defined as own props', () => {\r\n                    const testId = 'cream';\r\n                    const theInitialProps = {\r\n                        name: 'myName',\r\n                    };\r\n\r\n                    RTestUtils.mockUUID(testId);\r\n                    shallowWithState(\r\n                        <MultilineBox\r\n                            {...propsWithData}\r\n                            defaultProps={theInitialProps}\r\n                            renderBody={(data: IMultilineSingleBoxProps[]) => {\r\n                                dataToBody = data;\r\n                                return <div />;\r\n                            }}\r\n                        />,\r\n                        {\r\n                            multilineIds: {\r\n                                [id]: {\r\n                                    id: id,\r\n                                    list: ['uniqueID'],\r\n                                },\r\n                            },\r\n                        }\r\n                    ).dive();\r\n\r\n                    expect(dataToBody[0].props).toEqual(theInitialProps);\r\n                });\r\n            });\r\n\r\n            describe('on component did update', () => {\r\n                it('should not call updateData if the previous data is equal than the old props data', () => {\r\n                    const dataToTest: any = [{name: 'princess'}];\r\n\r\n                    store = getStoreMock();\r\n                    const wrapper = shallowWithStore(\r\n                        <MultilineBox {...defaultProps} data={dataToTest} />,\r\n                        store\r\n                    ).dive();\r\n\r\n                    wrapper.setProps({\r\n                        data: dataToTest,\r\n                    });\r\n\r\n                    expect(_.pluck(store.getActions(), 'type')).not.toContain(StringListActions.updateValues);\r\n                });\r\n\r\n                it('should call updateData if the previous data is not equal than the old props data', () => {\r\n                    store = getStoreMock();\r\n                    const wrapper = shallowWithStore(\r\n                        <MultilineBox {...defaultProps} data={[{name: 'princess'}]} />,\r\n                        store\r\n                    ).dive();\r\n\r\n                    wrapper.setProps({\r\n                        data: {name: 'Succubus'},\r\n                    });\r\n\r\n                    expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.updateValues);\r\n                });\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=541.bundle.js.map