(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1231:function(e,r,t){"use strict";t.r(r),r.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport {shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {Drop} from '../../drop/Drop';\r\nimport {ListBox} from '../../listBox/ListBox';\r\nimport {Svg} from '../../svg/Svg';\r\nimport {ActionableItem, IActionableItemProps} from '../ActionableItem';\r\n\r\ndescribe('ActionableItem', () => {\r\n    const basicProps: IActionableItemProps = {\r\n        id: 'actionable-item',\r\n        actions: [{value: 'some action'}],\r\n    };\r\n    let actionableItem: ShallowWrapper<IActionableItemProps>;\r\n\r\n    describe('<ActionableItem />', () => {\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n        });\r\n\r\n        const shallowWithProps = (\r\n            props: Partial<IActionableItemProps> = basicProps,\r\n            children: React.ReactNode = ''\r\n        ) => {\r\n            actionableItem = shallowWithStore(\r\n                <ActionableItem {...basicProps} {...props}>\r\n                    {children}\r\n                </ActionableItem>,\r\n                store\r\n            );\r\n        };\r\n\r\n        it('should mount without error', () => {\r\n            expect(() => shallowWithProps()).not.toThrow();\r\n            expect(() => shallowWithProps(undefined, <div>hello world</div>)).not.toThrow();\r\n        });\r\n\r\n        describe('after mount', () => {\r\n            beforeEach(() => {\r\n                shallowWithProps();\r\n            });\r\n\r\n            it('should render the children in the actionable-item-content container', () => {\r\n                const children = <div className=\"children\">hello world</div>;\r\n                shallowWithProps(undefined, children);\r\n\r\n                expect(actionableItem.find('.actionable-item-content').find('.children').length).toBe(1);\r\n            });\r\n\r\n            it('should render the more-append svg in the Drop', () => {\r\n                shallowWithProps();\r\n\r\n                const renderButton: () => React.ReactElement = actionableItem\r\n                    .find(Drop)\r\n                    .prop('renderOpenButton') as any;\r\n                const button = shallow(renderButton());\r\n                expect(button.find(Svg).prop('svgName')).toBe('more-append');\r\n            });\r\n\r\n            it('should not render a Drop if there is no actions', () => {\r\n                shallowWithProps({id: 'mountwithnoactions', actions: []});\r\n\r\n                expect(actionableItem.find(Drop).length).toBe(0);\r\n            });\r\n\r\n            it('should render the actions in a list-box', () => {\r\n                shallowWithProps();\r\n\r\n                // React-Tether renders the attached element to the body of the page, thus we need to start from there\r\n                expect(actionableItem.find(ListBox).exists()).toBe(true);\r\n            });\r\n\r\n            it('should not have the cursor-pointer class if onItemClick is not passed as prop', () => {\r\n                shallowWithProps();\r\n\r\n                expect(actionableItem.find('.actionable-item-content').hasClass('cursor-pointer')).toBe(false);\r\n            });\r\n\r\n            it('should have the cursor-pointer class if onItemClick is passed as prop', () => {\r\n                shallowWithProps({id: 'someid', onItemClick: _.noop});\r\n\r\n                expect(actionableItem.find('.actionable-item-content').hasClass('cursor-pointer')).toBe(true);\r\n            });\r\n\r\n            it('should be possible to add a class on the container via the containerClassName prop', () => {\r\n                const expectedContainerClass = 'oxford-comma';\r\n                shallowWithProps({id: 'someid', containerClassName: expectedContainerClass});\r\n\r\n                expect(actionableItem.find('.actionable-item-content').hasClass(expectedContainerClass)).toBe(true);\r\n            });\r\n\r\n            it('should call the onItemClick method if passed as prop', () => {\r\n                const props = {id: 'someid', onItemClick: jasmine.createSpy('onItemClick')};\r\n                shallowWithProps(props);\r\n\r\n                actionableItem.find('.actionable-item-content').simulate('click');\r\n\r\n                expect(props.onItemClick).toHaveBeenCalledTimes(1);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=117.bundle.js.map