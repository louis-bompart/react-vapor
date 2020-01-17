(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{1701:function(t,n,o){"use strict";o.r(n),n.default="import {ShallowWrapper} from 'enzyme';\r\nimport {shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\n\r\nimport {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';\r\nimport {IOptionsCycleConnectedOwnProps, IOptionsCycleProps} from '../OptionsCycle';\r\nimport {addOptionsCycle, changeOptionsCycle} from '../OptionsCycleActions';\r\nimport {OptionsCycleConnected} from '../OptionsCycleConnected';\r\n\r\ndescribe('Options cycle', () => {\r\n    const optionsCycleBasicProps: IOptionsCycleProps & IOptionsCycleConnectedOwnProps = {\r\n        id: 'options-cycle',\r\n        options: ['option 1', 'option 2', 'option 3', 'option 4'],\r\n    };\r\n\r\n    describe('<OptionsCycleConnected />', () => {\r\n        let optionsCycle: ShallowWrapper<IOptionsCycleProps>;\r\n        let store: ReactVaporMockStore;\r\n\r\n        const shallowCycleWithProps = (props: Partial<IOptionsCycleProps & IOptionsCycleConnectedOwnProps> = {}) => {\r\n            return shallowWithStore(<OptionsCycleConnected {...optionsCycleBasicProps} {...props} />, store);\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = getStoreMock({\r\n                optionsCycles: [],\r\n            });\r\n        });\r\n\r\n        it('should get the current option as a prop', () => {\r\n            optionsCycle = shallowCycleWithProps();\r\n            const currentOptionProp = optionsCycle.props().currentOption;\r\n\r\n            expect(currentOptionProp).toBeDefined();\r\n            expect(currentOptionProp).toBe(0);\r\n        });\r\n\r\n        it('should get what to do on render as a prop', () => {\r\n            optionsCycle = shallowCycleWithProps();\r\n            const onRenderProp = optionsCycle.props().onRender;\r\n\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy as a prop', () => {\r\n            optionsCycle = shallowCycleWithProps();\r\n            const onDestroyProp = optionsCycle.props().onDestroy;\r\n\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on change as a prop', () => {\r\n            optionsCycle = shallowCycleWithProps();\r\n            const onChangeProp = optionsCycle.props().onChange;\r\n\r\n            expect(onChangeProp).toBeDefined();\r\n        });\r\n\r\n        it('should add the optionCycle to the state when mounted', () => {\r\n            optionsCycle = shallowCycleWithProps().dive();\r\n            expect(store.getActions()).toContain(addOptionsCycle(optionsCycleBasicProps.id, 0));\r\n        });\r\n\r\n        it('should add the optionCycle to the state when mounted with the startAt', () => {\r\n            const startAt = 3;\r\n            optionsCycle = shallowCycleWithProps({startAt}).dive();\r\n            expect(store.getActions()).toContain(addOptionsCycle(optionsCycleBasicProps.id, startAt));\r\n        });\r\n\r\n        it('should set the currentOption to the startAt prop', () => {\r\n            const expectedCurrentOption: number = 3;\r\n            optionsCycle = shallowCycleWithProps({startAt: expectedCurrentOption});\r\n\r\n            expect(optionsCycle.props().currentOption).toBe(expectedCurrentOption);\r\n        });\r\n\r\n        it('should remove the optionCycle from the state when the component is unmounted', () => {\r\n            optionsCycle = shallowCycleWithProps().dive();\r\n            optionsCycle.unmount();\r\n\r\n            expect(store.getState().optionsCycles.length).toBe(0);\r\n        });\r\n\r\n        it('should dispatch a changeOptionsCycle when pressing the previous button', () => {\r\n            const startAt = 2;\r\n            const wrapper = shallowCycleWithProps({startAt}).dive();\r\n            wrapper.find('.previous-option').simulate('click');\r\n\r\n            expect(store.getActions()).toContain(changeOptionsCycle(optionsCycleBasicProps.id, startAt - 1));\r\n        });\r\n\r\n        it('should dispatch a changeOptionsCycle when pressing the next button', () => {\r\n            const startAt = 2;\r\n            const wrapper = shallowCycleWithProps({startAt}).dive();\r\n            wrapper.find('.next-option').simulate('click');\r\n\r\n            expect(store.getActions()).toContain(changeOptionsCycle(optionsCycleBasicProps.id, startAt + 1));\r\n        });\r\n\r\n        it('should dispatch a changeOptionsCycle by wrapping around when at 0 and the user press the previous button', () => {\r\n            const startAt = 0;\r\n            const wrapper = shallowCycleWithProps({startAt}).dive();\r\n            wrapper.find('.previous-option').simulate('click');\r\n\r\n            expect(store.getActions()).toContain(\r\n                changeOptionsCycle(optionsCycleBasicProps.id, optionsCycleBasicProps.options.length - 1)\r\n            );\r\n        });\r\n\r\n        it('should dispatch a changeOptionsCycle by wrapping around when at max and the user press the next button', () => {\r\n            const startAt = optionsCycleBasicProps.options.length - 1;\r\n            const wrapper = shallowCycleWithProps({startAt}).dive();\r\n            wrapper.find('.next-option').simulate('click');\r\n\r\n            expect(store.getActions()).toContain(changeOptionsCycle(optionsCycleBasicProps.id, 0));\r\n        });\r\n\r\n        it('should disable the previous button when wrapAround is false and the cycle is at 0', () => {\r\n            const startAt = 0;\r\n            const wrapper = shallowCycleWithProps({startAt, wrapAround: false}).dive();\r\n\r\n            expect(wrapper.find('.previous-option').prop('disabled')).toBe(true);\r\n        });\r\n\r\n        it('should disable the next button when wrapAround is false and the cycle is at max', () => {\r\n            const startAt = optionsCycleBasicProps.options.length - 1;\r\n            const wrapper = shallowCycleWithProps({startAt, wrapAround: false}).dive();\r\n\r\n            expect(wrapper.find('.next-option').prop('disabled')).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=611.bundle.js.map