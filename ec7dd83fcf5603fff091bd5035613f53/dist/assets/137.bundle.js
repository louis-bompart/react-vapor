(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1249:function(e,t,r){"use strict";r.r(t),t.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n/* tslint:disable:no-unused-variable */\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {ITooltipProps, Tooltip} from '../../../tooltip/Tooltip';\r\nimport {ELLIPSIS, IItemFilterProps, ItemFilter} from '../ItemFilter';\r\n/* tslint:enable:no-unused-variable */\r\n\r\ndescribe('Item filter', () => {\r\n    const ITEM_FILTER_BASIC_PROPS: IItemFilterProps = {\r\n        label: 'Item filter',\r\n        item: '',\r\n        onClear: jasmine.createSpy('onClear'),\r\n    };\r\n\r\n    describe('<ItemFilter />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<ItemFilter {...ITEM_FILTER_BASIC_PROPS} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<ItemFilter />', () => {\r\n        let itemFilterComponent: ReactWrapper<IItemFilterProps, any>;\r\n\r\n        beforeEach(() => {\r\n            itemFilterComponent = mount(<ItemFilter {...ITEM_FILTER_BASIC_PROPS} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            itemFilterComponent.detach();\r\n        });\r\n\r\n        it('should get the label as a prop', () => {\r\n            const labelProp = itemFilterComponent.props().label;\r\n\r\n            expect(labelProp).toBeDefined();\r\n            expect(labelProp).toBe(ITEM_FILTER_BASIC_PROPS.label);\r\n        });\r\n\r\n        it('should get the item as a prop', () => {\r\n            const itemProp = itemFilterComponent.props().item;\r\n\r\n            expect(itemProp).toBeDefined();\r\n            expect(itemProp).toBe(ITEM_FILTER_BASIC_PROPS.item);\r\n        });\r\n\r\n        it('should get what to do onClear as a prop', () => {\r\n            const onClearProp = itemFilterComponent.props().onClear;\r\n\r\n            expect(onClearProp).toBeDefined();\r\n            expect(onClearProp).toEqual(ITEM_FILTER_BASIC_PROPS.onClear);\r\n        });\r\n\r\n        it('should display the label', () => {\r\n            expect(itemFilterComponent.html()).toContain(ITEM_FILTER_BASIC_PROPS.label);\r\n        });\r\n\r\n        it('should display the item', () => {\r\n            const newItemFilterProps: IItemFilterProps = _.extend({}, ITEM_FILTER_BASIC_PROPS, {item: 'an item'});\r\n            itemFilterComponent.setProps(newItemFilterProps);\r\n\r\n            expect(itemFilterComponent.html()).toContain(newItemFilterProps.item);\r\n        });\r\n\r\n        it('should call onClear when clicking the \"item-filter-clear\" button', () => {\r\n            itemFilterComponent.find('.item-filter-clear').simulate('click');\r\n\r\n            expect(ITEM_FILTER_BASIC_PROPS.onClear).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should crop the item to the length of the crop prop', () => {\r\n            const longItem: string = 'longer than 10 characters for sure';\r\n            let cropProps: IItemFilterProps = _.extend({}, ITEM_FILTER_BASIC_PROPS, {crop: 10, item: longItem});\r\n            itemFilterComponent.setProps(cropProps);\r\n\r\n            expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(ELLIPSIS.length + cropProps.crop);\r\n\r\n            cropProps = _.extend({}, ITEM_FILTER_BASIC_PROPS, {crop: -12, item: longItem});\r\n            itemFilterComponent.setProps(cropProps);\r\n\r\n            expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(\r\n                ELLIPSIS.length + Math.abs(cropProps.crop)\r\n            );\r\n\r\n            cropProps = _.extend({}, ITEM_FILTER_BASIC_PROPS, {crop: longItem.length, item: longItem});\r\n            itemFilterComponent.setProps(cropProps);\r\n\r\n            expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(longItem.length);\r\n\r\n            cropProps = _.extend({}, ITEM_FILTER_BASIC_PROPS, {crop: -longItem.length, item: longItem});\r\n            itemFilterComponent.setProps(cropProps);\r\n\r\n            expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(longItem.length);\r\n        });\r\n\r\n        describe('itemTooltipProps', () => {\r\n            it('should not add a tooltip on the item if no props are passed', () => {\r\n                expect(itemFilterComponent.find(Tooltip).length).toBe(0);\r\n            });\r\n\r\n            it('should add a tooltip to the item if tooltip props are passed', () => {\r\n                itemFilterComponent.setProps({itemTooltipProps: {title: 'what a nice feature'}});\r\n                expect(itemFilterComponent.find(Tooltip).length).toBe(1);\r\n            });\r\n\r\n            it('should add all tooltip options passed to itemTooltipProps to the item tooltip', () => {\r\n                const itemTooltipProps: ITooltipProps = {title: 'noice', placement: 'bottom', container: 'body'};\r\n                itemFilterComponent.setProps({itemTooltipProps});\r\n\r\n                _.pairs(itemTooltipProps).forEach((tooltipProp: string[]) => {\r\n                    expect(itemFilterComponent.find(Tooltip).prop(tooltipProp[0])).toBe(tooltipProp[1]);\r\n                });\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=137.bundle.js.map