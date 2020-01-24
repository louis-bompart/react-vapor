(window.webpackJsonp=window.webpackJsonp||[]).push([[676],{1758:function(e,t,r){"use strict";r.r(t),t.default="import {mount, ReactWrapper, ShallowWrapper} from 'enzyme';\r\nimport {shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {withServerSideProcessing} from '../../../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {IReactVaporState} from '../../../../ReactVapor';\r\nimport {keyCode} from '../../../../utils/InputUtils';\r\nimport {clearState} from '../../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../../utils/tests/TestUtils';\r\nimport {Button} from '../../../button/Button';\r\nimport {filterThrough} from '../../../filterBox/FilterBoxActions';\r\nimport {FilterBoxConnected} from '../../../filterBox/FilterBoxConnected';\r\nimport {IItemBoxProps, ItemBox} from '../../../itemBox/ItemBox';\r\nimport {selectListBoxOption, setActiveListBoxOption} from '../../../listBox/ListBoxActions';\r\nimport {IMultiSelectProps} from '../../MultiSelectConnected';\r\nimport {toggleSelect} from '../../SelectActions';\r\nimport {SelectConnected} from '../../SelectConnected';\r\nimport {SingleSelectConnected} from '../../SingleSelectConnected';\r\nimport {SingleSelectWithFilter} from '../SelectComponents';\r\nimport {ISelectWithFilterProps, selectWithFilter} from '../SelectWithFilter';\r\n\r\ndescribe('Select', () => {\r\n    describe('<SingleSelectWithFilter/>', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let singleSelect: ReactWrapper<IMultiSelectProps, void>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const id: string = 'single-select-with-filter';\r\n        const basicProps: ISelectWithFilterProps = {\r\n            id,\r\n        };\r\n\r\n        const mountSingleSelect = (props?: Partial<ISelectWithFilterProps>) => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <SingleSelectWithFilter {...basicProps} {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            singleSelect = wrapper.find(SelectConnected).first();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            if (wrapper && wrapper.exists()) {\r\n                wrapper.detach();\r\n            }\r\n        });\r\n\r\n        beforeAll(() => {\r\n            TestUtils.makeDebounceStatic();\r\n        });\r\n\r\n        describe('mount and unmount', () => {\r\n            it('should not throw on mount', () => {\r\n                expect(() => mountSingleSelect()).not.toThrow();\r\n            });\r\n\r\n            it('should not throw on unmount', () => {\r\n                mountSingleSelect();\r\n                expect(() => wrapper.unmount()).not.toThrow();\r\n            });\r\n\r\n            it('should add the list box to the state when mounted', () => {\r\n                expect(store.getState().selects.length).toBe(0);\r\n\r\n                mountSingleSelect();\r\n\r\n                expect(store.getState().selects.length).toBe(1);\r\n            });\r\n\r\n            it('should add the string list to the state when mounted', () => {\r\n                expect(store.getState().selectWithFilter[id]).toBeUndefined();\r\n\r\n                mountSingleSelect();\r\n\r\n                expect(store.getState().selectWithFilter[id]).toBeDefined();\r\n            });\r\n\r\n            it('should remove the list box from the state when the component unmount', () => {\r\n                mountSingleSelect();\r\n\r\n                expect(store.getState().selects.length).toBe(1);\r\n                wrapper.unmount();\r\n\r\n                expect(store.getState().selects.length).toBe(0);\r\n            });\r\n\r\n            it('should remove the list box from the state when the component unmount', () => {\r\n                mountSingleSelect();\r\n\r\n                expect(store.getState().selectWithFilter[id]).toBeDefined();\r\n\r\n                wrapper.unmount();\r\n\r\n                expect(store.getState().selectWithFilter[id]).toBeUndefined();\r\n            });\r\n        });\r\n\r\n        it('should hide items when they do not match the filter', () => {\r\n            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];\r\n\r\n            mountSingleSelect({items});\r\n            store.dispatch(toggleSelect(id, true));\r\n            store.dispatch(filterThrough(id, 'wontmatchanything'));\r\n            wrapper.update();\r\n            singleSelect = wrapper.find(SelectConnected);\r\n\r\n            expect(singleSelect.props().items.length).toBe(items.length);\r\n            singleSelect\r\n                .find(SelectConnected)\r\n                .props()\r\n                .items.every((item: IItemBoxProps) => expect(item.hidden).toBe(true));\r\n        });\r\n\r\n        it('should not show items that are already hidden', () => {\r\n            const items = [{value: 'a', hidden: true}, {value: 'b', selected: true}, {value: 'c'}];\r\n\r\n            mountSingleSelect({items});\r\n            store.dispatch(toggleSelect(id, true));\r\n            store.dispatch(filterThrough(id, 'wontmatchanything'));\r\n            store.dispatch(filterThrough(id, ''));\r\n            wrapper.update();\r\n            singleSelect = wrapper.find(SelectConnected);\r\n\r\n            expect(singleSelect.props().items.length).toBe(items.length);\r\n            expect(singleSelect.find(SelectConnected).props().items[0].hidden).toBe(true);\r\n            expect(singleSelect.find(SelectConnected).props().items[1].hidden).toBe(false);\r\n            expect(singleSelect.find(SelectConnected).props().items[2].hidden).toBe(false);\r\n        });\r\n\r\n        it('should hide items that do not match custom filter', () => {\r\n            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];\r\n\r\n            mountSingleSelect({items, matchFilter: () => false});\r\n            store.dispatch(toggleSelect(id, true));\r\n            store.dispatch(filterThrough(id, 'wontmatchanything'));\r\n            wrapper.update();\r\n            singleSelect = wrapper.find(SelectConnected);\r\n\r\n            expect(singleSelect.props().items.length).toBe(items.length);\r\n            singleSelect\r\n                .find(SelectConnected)\r\n                .props()\r\n                .items.every((item: IItemBoxProps) => expect(item.hidden).toBe(true));\r\n        });\r\n\r\n        it('should set the highlight value equal to the filter', () => {\r\n            const filterValue = 'a';\r\n            const items = [{value: 'aaaa'}, {value: 'baba', selected: true}, {value: 'dada'}];\r\n\r\n            mountSingleSelect({items, matchFilter: () => true});\r\n            store.dispatch(toggleSelect(id, true));\r\n            store.dispatch(filterThrough(id, filterValue));\r\n            wrapper.update();\r\n            singleSelect = wrapper.find(SelectConnected);\r\n\r\n            expect(singleSelect.props().items.length).toBe(items.length);\r\n            singleSelect\r\n                .find(SelectConnected)\r\n                .props()\r\n                .items.every((item: IItemBoxProps) => expect(item.highlight).toBe(filterValue));\r\n        });\r\n\r\n        describe('interactions', () => {\r\n            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];\r\n            let dispatchSpy: jasmine.Spy;\r\n\r\n            beforeEach(() => {\r\n                dispatchSpy = spyOn(store, 'dispatch').and.callThrough();\r\n                mountSingleSelect({items});\r\n            });\r\n\r\n            it('should select the active element if the user press enter', () => {\r\n                store.dispatch(toggleSelect(id, true));\r\n\r\n                wrapper\r\n                    .find('.dropdown-toggle')\r\n                    .simulate('keydown', {keyCode: keyCode.enter})\r\n                    .simulate('keyup', {keyCode: keyCode.enter});\r\n\r\n                expect(dispatchSpy).toHaveBeenCalledWith(selectListBoxOption(id, undefined, items[1].value, 1));\r\n            });\r\n\r\n            it('should dispatch a setActiveListBoxOption when the user press the up or down arrow', () => {\r\n                store.dispatch(toggleSelect(id, true));\r\n                wrapper.update();\r\n\r\n                expect(dispatchSpy).not.toHaveBeenCalledWith(setActiveListBoxOption(id, 1));\r\n                wrapper\r\n                    .find(FilterBoxConnected)\r\n                    .find('input')\r\n                    .simulate('keydown', {keyCode: keyCode.downArrow})\r\n                    .simulate('keyup', {keyCode: keyCode.downArrow});\r\n\r\n                expect(dispatchSpy).toHaveBeenCalledWith(setActiveListBoxOption(id, 1));\r\n\r\n                expect(dispatchSpy).not.toHaveBeenCalledWith(setActiveListBoxOption(id, -1));\r\n                wrapper\r\n                    .find(FilterBoxConnected)\r\n                    .find('input')\r\n                    .simulate('keydown', {keyCode: keyCode.upArrow})\r\n                    .simulate('keyup', {keyCode: keyCode.upArrow});\r\n\r\n                expect(dispatchSpy).toHaveBeenCalledWith(setActiveListBoxOption(id, -1));\r\n            });\r\n\r\n            it('should dispatch a toggleSelect to open the Select when the user press the up or down arrow', () => {\r\n                singleSelect\r\n                    .find('.dropdown-toggle')\r\n                    .simulate('keydown', {keyCode: keyCode.downArrow})\r\n                    .simulate('keyup', {keyCode: keyCode.downArrow});\r\n                expect(dispatchSpy).toHaveBeenCalledWith(toggleSelect(id));\r\n\r\n                // Close the dropdown\r\n                store.dispatch(toggleSelect(id, false));\r\n                dispatchSpy.calls.reset();\r\n\r\n                singleSelect\r\n                    .find('.dropdown-toggle')\r\n                    .simulate('keydown', {keyCode: keyCode.upArrow})\r\n                    .simulate('keyup', {keyCode: keyCode.upArrow});\r\n\r\n                expect(dispatchSpy).toHaveBeenCalledWith(toggleSelect(id));\r\n            });\r\n        });\r\n\r\n        describe('With CustomValue Props', () => {\r\n            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];\r\n\r\n            const mountSingleSelectCustomValues = (props: Partial<ISelectWithFilterProps> = {}) => {\r\n                wrapper = mount(\r\n                    <Provider store={store}>\r\n                        <SingleSelectWithFilter {...basicProps} {...props} customValues />\r\n                    </Provider>,\r\n                    {attachTo: document.getElementById('App')}\r\n                );\r\n\r\n                store.dispatch(toggleSelect(id, true));\r\n                wrapper.update();\r\n            };\r\n\r\n            it('should not add a button with the filter if customValue is false', () => {\r\n                mountSingleSelect({items, matchFilter: () => false});\r\n\r\n                expect(wrapper.find(Button).length).toBe(0);\r\n            });\r\n\r\n            it('should add a button with the filter', () => {\r\n                mountSingleSelectCustomValues({items, matchFilter: () => false});\r\n\r\n                expect(wrapper.find(Button).length).toBe(1);\r\n            });\r\n\r\n            it('should not add the value in the store list on click button if the filter value is empty', () => {\r\n                mountSingleSelectCustomValues({items, matchFilter: () => false});\r\n\r\n                expect(store.getState().selectWithFilter[id].list.length).toBe(0);\r\n                store.dispatch(filterThrough(id, ''));\r\n\r\n                wrapper\r\n                    .find(SelectConnected)\r\n                    .find(Button)\r\n                    .find('button')\r\n                    .simulate('click');\r\n\r\n                expect(store.getState().selectWithFilter[id].list.length).toBe(0);\r\n            });\r\n\r\n            it('should add the value in the store list on click button if the filterValue is not empty', () => {\r\n                const filterValue: string = 'wontmatchanything';\r\n\r\n                mountSingleSelectCustomValues({items, matchFilter: () => false});\r\n\r\n                expect(store.getState().selectWithFilter[id].list.length).toBe(0);\r\n                store.dispatch(filterThrough(id, filterValue));\r\n\r\n                wrapper\r\n                    .find(SelectConnected)\r\n                    .find(Button)\r\n                    .find('button')\r\n                    .simulate('click');\r\n\r\n                expect(store.getState().selectWithFilter[id].list.length).toBe(1);\r\n                expect(store.getState().selectWithFilter[id].list[0]).toBe(filterValue);\r\n            });\r\n\r\n            it('should add an itemBox with the filter value in the list if it is not already in the initial list', () => {\r\n                const complexItems: IItemBoxProps[] = [{value: 'abc'}, {value: 'afg'}];\r\n                const filterValue: string = 'a';\r\n\r\n                mountSingleSelectCustomValues({items: complexItems});\r\n                store.dispatch(filterThrough(id, filterValue));\r\n\r\n                wrapper.update();\r\n                const itemsBox = wrapper\r\n                    .find(SelectConnected)\r\n                    .find(ItemBox)\r\n                    .first();\r\n\r\n                expect(itemsBox.props().value).toBe(filterValue);\r\n            });\r\n\r\n            it('should add an itemBox divider with the add itemBox in the list', () => {\r\n                const complexItems: IItemBoxProps[] = [{value: 'abc'}, {value: 'afg'}];\r\n                const filterValue: string = 'a';\r\n\r\n                mountSingleSelectCustomValues({items: complexItems});\r\n                store.dispatch(filterThrough(id, filterValue));\r\n\r\n                wrapper.update();\r\n                const itemsBox = wrapper\r\n                    .find(SelectConnected)\r\n                    .find(ItemBox)\r\n                    .get(1);\r\n\r\n                expect(itemsBox.props.divider).toBe(true);\r\n            });\r\n\r\n            it('should add an itemBox with the filter value in the list on click list item', () => {\r\n                const filterValue: string = 'a';\r\n\r\n                mountSingleSelectCustomValues({items: []});\r\n                store.dispatch(filterThrough(id, filterValue));\r\n\r\n                wrapper.update();\r\n                wrapper\r\n                    .find(SelectConnected)\r\n                    .find(ItemBox)\r\n                    .find('li')\r\n                    .simulate('click');\r\n\r\n                expect(store.getState().selectWithFilter[id].list.length).toBe(1);\r\n                expect(store.getState().selectWithFilter[id].list[0]).toBe(filterValue);\r\n            });\r\n        });\r\n\r\n        describe('when filter is processed on the server side', () => {\r\n            const ServerSideMultiSingleSelectWithFilter: React.ComponentType<ISelectWithFilterProps> = _.compose(\r\n                withServerSideProcessing,\r\n                selectWithFilter\r\n            )(SingleSelectConnected);\r\n\r\n            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];\r\n\r\n            it('should not filter the items because it is done on the server', () => {\r\n                const component: ShallowWrapper<ISelectWithFilterProps> = shallowWithStore(\r\n                    <ServerSideMultiSingleSelectWithFilter {...basicProps} items={items} filterValue=\"a\" />,\r\n                    store\r\n                ).dive();\r\n\r\n                expect(component.props().items).toEqual(items);\r\n            });\r\n\r\n            it('should trigger the onUpdate prop when the selected predicate changes', () => {\r\n                const onUpdateSpy = jasmine.createSpy('onUpdate');\r\n                const component: ShallowWrapper<ISelectWithFilterProps> = shallowWithStore(\r\n                    <ServerSideMultiSingleSelectWithFilter\r\n                        {...basicProps}\r\n                        items={items}\r\n                        filterValue=\"current-filter-value\"\r\n                        onUpdate={onUpdateSpy}\r\n                    />,\r\n                    store\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                expect(onUpdateSpy).not.toHaveBeenCalled();\r\n\r\n                component.setProps({filterValue: 'some-new-filter-value'});\r\n\r\n                expect(onUpdateSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=676.bundle.js.map