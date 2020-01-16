(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{1447:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {InfiniteScrollProps} from 'react-infinite-scroll-component';\r\nimport * as _ from 'underscore';\r\n\r\nimport {keyCode} from '../../../utils/InputUtils';\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {Content} from '../../content/Content';\r\nimport {FilterBox} from '../../filterBox/FilterBox';\r\nimport {Tooltip} from '../../tooltip/Tooltip';\r\nimport {DropdownSearch, IDropdownOption, IDropdownSearchProps} from '../DropdownSearch';\r\nimport {\r\n    DropdownSearchAutoInfiniteScroll,\r\n    IDropdownSearchAutoInfiniteScrollOptions,\r\n} from '../DropdownSearchAutoInfiniteScroll';\r\nimport {DropdownSearchInfiniteScrollOptions} from '../DropdownSearchInfiniteScrollOptions';\r\nimport {defaultSelectedOptionPlaceholder} from '../DropdownSearchReducers';\r\n\r\ndescribe('DropdownSearch', () => {\r\n    const id: string = UUID.generate();\r\n    const options = [\r\n        {value: 'test a', displayValue: 'test a', prefix: 'test'},\r\n        {value: 'test b', displayValue: 'test b', svg: {svgClass: 'svg-class', svgName: 'svg-name'}},\r\n        {value: 'test c', displayValue: 'test c'},\r\n    ];\r\n\r\n    const ownProps: IDropdownSearchProps = {\r\n        id,\r\n        options,\r\n        modMenu: false,\r\n        filterPlaceholder: 'fill me',\r\n        maxWidth: 400,\r\n        width: 300,\r\n        hasFilterSuggestionBoxWidthFixed: true,\r\n        isDisabled: false,\r\n        isOpened: false,\r\n        searchThresold: 1,\r\n    };\r\n\r\n    const infiniteScrollProps: InfiniteScrollProps = {\r\n        dataLength: 2,\r\n        hasMore: true,\r\n        next: jasmine.createSpy('next'),\r\n        endMessage: 'no more',\r\n        loader: null,\r\n    };\r\n\r\n    const autoInfiniteScrollOptions: IDropdownSearchAutoInfiniteScrollOptions = {\r\n        optionsPerPage: 10,\r\n    };\r\n\r\n    describe('<DropdownSearch />', () => {\r\n        let dropdownSearch: ReactWrapper<IDropdownSearchProps, any>;\r\n        let dropdownSearchInstance: DropdownSearch;\r\n        let dropdownSearchInstanceAsAny: any;\r\n\r\n        const renderDropdownSearch = (props?: IDropdownSearchProps) => {\r\n            dropdownSearch = mount(<DropdownSearch {...props} />, {attachTo: document.getElementById('App')});\r\n            dropdownSearchInstance = dropdownSearch.instance() as DropdownSearch;\r\n            dropdownSearchInstanceAsAny = dropdownSearchInstance;\r\n        };\r\n\r\n        afterEach(() => {\r\n            dropdownSearch.detach();\r\n        });\r\n\r\n        describe('default props', () => {\r\n            beforeEach(() => {\r\n                renderDropdownSearch(ownProps);\r\n            });\r\n\r\n            it('should have the same object sent has parameter than the component props', () => {\r\n                expect(dropdownSearch.props()).toEqual(_.extend({}, DropdownSearch.defaultProps, ownProps));\r\n            });\r\n        });\r\n\r\n        describe('render', () => {\r\n            it('should render without error', () => {\r\n                expect(() => {\r\n                    renderDropdownSearch(_.extend({}, ownProps));\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error with no options provided', () => {\r\n                expect(() => {\r\n                    renderDropdownSearch(\r\n                        _.extend({}, ownProps, {\r\n                            options: [],\r\n                        })\r\n                    );\r\n                }).not.toThrow();\r\n            });\r\n        });\r\n\r\n        describe('event props', () => {\r\n            beforeEach(() => {\r\n                renderDropdownSearch(ownProps);\r\n            });\r\n\r\n            it('should call onMountCallBack prop if set when mounting', () => {\r\n                const onMountCallBack = jasmine.createSpy('onMountCallBack');\r\n\r\n                expect(() => dropdownSearchInstance.componentWillMount()).not.toThrow();\r\n\r\n                dropdownSearch.unmount();\r\n                dropdownSearch.setProps({onMountCallBack});\r\n                dropdownSearch.mount();\r\n\r\n                expect(onMountCallBack).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onMount prop if set when mounting', () => {\r\n                const onMountSpy = jasmine.createSpy('onMount');\r\n\r\n                expect(() => dropdownSearchInstance.componentWillMount()).not.toThrow();\r\n\r\n                dropdownSearch.unmount();\r\n                dropdownSearch.setProps({onMount: onMountSpy});\r\n                dropdownSearch.mount();\r\n\r\n                expect(onMountSpy).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onDestroy prop if set when will unmount', () => {\r\n                const onDestroy = jasmine.createSpy('onDestroy');\r\n\r\n                expect(() => dropdownSearchInstance.componentWillUnmount()).not.toThrow();\r\n\r\n                dropdownSearch.setProps({onDestroy});\r\n                dropdownSearch.unmount();\r\n\r\n                expect(onDestroy).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onFilterTextChange if defined when onChange the \"filter-box\" input', () => {\r\n                const onFilterTextChange = jasmine.createSpy('onFilterTextChange');\r\n                dropdownSearch.setProps({isOpened: true, onFilterTextChange});\r\n                dropdownSearch.find('input.filter-box').simulate('change');\r\n\r\n                expect(onFilterTextChange).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should not call onFilterTextChange if defined when the filter box input changes and customFiltering is defined', () => {\r\n                const onFilterTextChange = jasmine.createSpy('onFilterTextChange');\r\n                dropdownSearch.setProps({\r\n                    isOpened: true,\r\n                    onFilterTextChange,\r\n                    customFiltering: jasmine.createSpy('customFiltering'),\r\n                });\r\n                dropdownSearch.find('input.filter-box').simulate('change');\r\n\r\n                expect(onFilterTextChange).not.toHaveBeenCalled();\r\n            });\r\n\r\n            it('shoudl call customFiltering if defined when the filter box input changes', () => {\r\n                const customFiltering = jasmine.createSpy('customFiltering');\r\n                dropdownSearch.setProps({isOpened: true, customFiltering});\r\n                dropdownSearch.find('input.filter-box').simulate('change');\r\n\r\n                expect(customFiltering).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should call onBlur if defined when we lost focus on \"filter-box\" input', () => {\r\n                const onBlur = jasmine.createSpy('onBlur');\r\n                dropdownSearch.setProps({onBlur, isOpened: true});\r\n\r\n                const element = dropdownSearch.find('.filter-box');\r\n                element.simulate('focus');\r\n                element.simulate('blur');\r\n\r\n                expect(onBlur).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onToggleDropdown if defined when click the \"dropdown-toggle\" button', () => {\r\n                const onToggleDropdown = jasmine.createSpy('onToggleDropdown');\r\n                dropdownSearch.setProps({onToggleDropdown});\r\n\r\n                dropdownSearch.find('button.dropdown-toggle').simulate('click');\r\n\r\n                expect(onToggleDropdown).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onClickCallBack if defined when click the \"dropdown-toggle\" button', () => {\r\n                const onClickCallBack = jasmine.createSpy('onClickCallBack');\r\n                dropdownSearch.setProps({onClickCallBack});\r\n\r\n                dropdownSearch.find('button.dropdown-toggle').simulate('click');\r\n\r\n                expect(onClickCallBack).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onOptionClickCallBack if defined when click an option \"dropdown-toggle\" button', () => {\r\n                const onOptionClickCallBack = jasmine.createSpy('onOptionClickCallBack');\r\n                dropdownSearch.setProps({isOpened: true, onOptionClickCallBack});\r\n\r\n                dropdownSearch.find('[data-value=\"test a\"]').simulate('mousedown');\r\n\r\n                expect(onOptionClickCallBack).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onMouseEnterDropdown if defined when enter over the ul element and dropdown is opened', () => {\r\n                renderDropdownSearch(_.extend({}, ownProps, {isOpened: true}));\r\n\r\n                const onMouseEnterDropdown = jasmine.createSpy('onMouseEnterDropdown');\r\n                dropdownSearch.setProps({onMouseEnterDropdown});\r\n\r\n                dropdownSearch.find('ul.dropdown-menu').simulate('mouseenter');\r\n\r\n                expect(onMouseEnterDropdown).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onKeyDownFilterBox if defined when key down on \"filter-box\"', () => {\r\n                const onKeyDownFilterBox = jasmine.createSpy('onKeyDownFilterBox');\r\n                dropdownSearch.setProps({isOpened: true, onKeyDownFilterBox, activeOption: options[0]});\r\n\r\n                dropdownSearch.find('input.filter-box').simulate('keydown');\r\n\r\n                expect(onKeyDownFilterBox).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onOptionClickCallBack if defined and they key is enter when key down on \"filter-box\"', () => {\r\n                const onOptionClickCallBack = jasmine.createSpy('onOptionClickCallBack');\r\n                dropdownSearch.setProps({\r\n                    isOpened: true,\r\n                    activeOption: {value: 'test a'},\r\n                    onOptionClickCallBack,\r\n                });\r\n\r\n                dropdownSearch.find('input.filter-box').simulate('keydown', {keyCode: keyCode.enter});\r\n\r\n                expect(onOptionClickCallBack).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onOptionClickCallBack if defined and they key is tab when key down on \"filter-box\"', () => {\r\n                const onOptionClickCallBack = jasmine.createSpy('onOptionClickCallBack');\r\n                dropdownSearch.setProps({\r\n                    isOpened: true,\r\n                    activeOption: {value: 'test a'},\r\n                    onOptionClickCallBack,\r\n                });\r\n\r\n                dropdownSearch.find('input.filter-box').simulate('keydown', {keyCode: keyCode.tab});\r\n\r\n                expect(onOptionClickCallBack).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call onKeyDownDropdownButton if defined when key down on button \"dropdown-toggle\"', () => {\r\n                const onKeyDownDropdownButton = jasmine.createSpy('onKeyDownDropdownButton');\r\n                dropdownSearch.setProps({onKeyDownDropdownButton});\r\n\r\n                dropdownSearch.find('button.dropdown-toggle').simulate('keydown');\r\n\r\n                expect(onKeyDownDropdownButton).toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call handleOnOptionClickOnKeyDown if search is off', () => {\r\n                spyOn(DropdownSearch.prototype as any, 'isSearchOn').and.returnValue(false);\r\n                const handleOnOptionClickOnKeyDownSpy = spyOn(\r\n                    DropdownSearch.prototype as any,\r\n                    'handleOnOptionClickOnKeyDown'\r\n                );\r\n\r\n                dropdownSearch.find('button.dropdown-toggle').simulate('keydown');\r\n\r\n                expect(handleOnOptionClickOnKeyDownSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should not call handleOnOptionClickOnKeyDown if search is on', () => {\r\n                spyOn(DropdownSearch.prototype as any, 'isSearchOn').and.returnValue(true);\r\n                const handleOnOptionClickOnKeyDownSpy = spyOn(\r\n                    DropdownSearch.prototype as any,\r\n                    'handleOnOptionClickOnKeyDown'\r\n                );\r\n\r\n                dropdownSearch.find('button.dropdown-toggle').simulate('keydown');\r\n\r\n                expect(handleOnOptionClickOnKeyDownSpy).not.toHaveBeenCalled();\r\n            });\r\n\r\n            it('should call updateOptions when receiving new default options when the option list is empty', () => {\r\n                const updateOptionsSpy: jasmine.Spy = jasmine.createSpy('updateOptions');\r\n                const newProps: IDropdownSearchProps = _.extend({}, ownProps, {updateOptions: updateOptionsSpy});\r\n                dropdownSearch.setProps(newProps);\r\n\r\n                expect(updateOptionsSpy).not.toHaveBeenCalled();\r\n\r\n                dropdownSearch.setProps(_.extend(newProps, {options: [], defaultOptions: [{value: 'something'}]}));\r\n\r\n                expect(updateOptionsSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            describe('getDropdownOptionAppend', () => {\r\n                it('should return a non null append jsx.element if append is defined', () => {\r\n                    expect(\r\n                        shallow(\r\n                            dropdownSearchInstanceAsAny.getDropdownOptionAppend({value: 'test', append: 'test append'})\r\n                        )\r\n                            .find('.dropdown-option-append')\r\n                            .text()\r\n                    ).toBe('test append');\r\n                });\r\n\r\n                it('should a null value if option is undefined or append is undefined', () => {\r\n                    expect(dropdownSearchInstanceAsAny.getDropdownOptionAppend()).toBeNull();\r\n                    expect(dropdownSearchInstanceAsAny.getDropdownOptionAppend({value: 'test'})).toBeNull();\r\n                });\r\n            });\r\n\r\n            describe('handleOnOptionClick', () => {\r\n                it('should call onOptionClick if option is found in options', () => {\r\n                    const onOptionClick = jasmine.createSpy('onOptionClick');\r\n                    dropdownSearch.setProps({...ownProps, onOptionClick});\r\n\r\n                    dropdownSearchInstanceAsAny.handleOnOptionClick({\r\n                        target: 'defined',\r\n                        currentTarget: {dataset: {value: options[0].value}},\r\n                    });\r\n                    expect(onOptionClick).toHaveBeenCalledTimes(1);\r\n                });\r\n\r\n                it('should call onOptionClick if option is found in options', () => {\r\n                    const onOptionClick = jasmine.createSpy('onOptionClick');\r\n                    dropdownSearch.setProps({...ownProps, onOptionClick});\r\n\r\n                    dropdownSearchInstanceAsAny.handleOnOptionClick({\r\n                        target: 'defined',\r\n                        currentTarget: {dataset: {value: 'i do not exist in options'}},\r\n                        preventDefault: _.noop,\r\n                        stopPropagation: _.noop,\r\n                    });\r\n\r\n                    expect(onOptionClick).not.toHaveBeenCalled();\r\n                });\r\n            });\r\n\r\n            describe('getSelectedOption', () => {\r\n                it('should return undefined if there are no selected options', () => {\r\n                    expect(dropdownSearchInstanceAsAny.getSelectedOption()).toBeUndefined();\r\n                });\r\n\r\n                it('should return the selected option if there is one', () => {\r\n                    const selected = {value: 'test', selected: true};\r\n                    dropdownSearch.setProps({...ownProps, options: [selected, ...ownProps.options]});\r\n                    expect(dropdownSearchInstanceAsAny.getSelectedOption()).toEqual(selected);\r\n                });\r\n            });\r\n\r\n            describe('getDropdownOptions', () => {\r\n                it('should return li elements if the infiniteScroll and autoInfiniteScroll props are undefined', () => {\r\n                    expect(dropdownSearchInstanceAsAny.getDropdownOptions()[0].type).toBe('li');\r\n                });\r\n\r\n                it('should return div elements if the infiniteScrollProps are defined', () => {\r\n                    dropdownSearch.setProps({\r\n                        ...ownProps,\r\n                        infiniteScroll: {...infiniteScrollProps},\r\n                    });\r\n                    expect(dropdownSearchInstanceAsAny.getDropdownOptions()[0].type).toBe('div');\r\n                });\r\n\r\n                it('should return div elements if the autoInfiniteScroll prop is defined', () => {\r\n                    dropdownSearch.setProps({\r\n                        ...ownProps,\r\n                        autoInfiniteScroll: {...autoInfiniteScrollOptions},\r\n                    });\r\n                    expect(dropdownSearchInstanceAsAny.getDropdownOptions()[0].type).toBe('div');\r\n                });\r\n            });\r\n\r\n            describe('getDropdownMenu', () => {\r\n                it('should return null if isOpened is false', () => {\r\n                    expect(dropdownSearchInstanceAsAny.getDropdownMenu()).toBeNull();\r\n                });\r\n\r\n                it('should return a ul if the infiniteScroll and autoInfiniteScroll props are undefined', () => {\r\n                    dropdownSearch.setProps({\r\n                        ...ownProps,\r\n                        isOpened: true,\r\n                    });\r\n                    expect(dropdownSearchInstanceAsAny.getDropdownMenu().type).toBe('ul');\r\n                });\r\n\r\n                it('should return a DropdownSearchInfiniteScrollOptions if the infiniteScroll prop is defined', () => {\r\n                    dropdownSearch.setProps({\r\n                        ...ownProps,\r\n                        isOpened: true,\r\n                        infiniteScroll: {...infiniteScrollProps},\r\n                    });\r\n                    expect(dropdownSearchInstanceAsAny.getDropdownMenu().type).toBe(\r\n                        DropdownSearchInfiniteScrollOptions\r\n                    );\r\n                });\r\n\r\n                it('should return a DropdownSearchInfiniteScrollOptions if the autoInfiniteScroll prop is defined', () => {\r\n                    dropdownSearch.setProps({\r\n                        ...ownProps,\r\n                        isOpened: true,\r\n                        autoInfiniteScroll: {...autoInfiniteScrollOptions},\r\n                    });\r\n                    expect(dropdownSearchInstanceAsAny.getDropdownMenu().type).toBe(DropdownSearchAutoInfiniteScroll);\r\n                });\r\n\r\n                it('should call the hasMoreItems prop to let the infinite scroll if there are more items', () => {\r\n                    const hasMoreItemsSpy: jasmine.Spy = jasmine.createSpy('hasMoreItems');\r\n                    dropdownSearch.setProps({\r\n                        ...ownProps,\r\n                        isOpened: true,\r\n                        infiniteScroll: {...infiniteScrollProps},\r\n                        hasMoreItems: hasMoreItemsSpy,\r\n                    });\r\n                    const hasMoreItemsCallsCount = hasMoreItemsSpy.calls.count();\r\n                    dropdownSearchInstanceAsAny.getDropdownMenu();\r\n\r\n                    expect(hasMoreItemsSpy).toHaveBeenCalledTimes(hasMoreItemsCallsCount + 1);\r\n                });\r\n\r\n                it(`if infiniteScroll prop is defined\r\n                    should call handleOnMouseEnter when calling DropdownSearchInfiniteScrollOptions onMouseEnter prop`, () => {\r\n                    const handleOnMouseEnterSpy = spyOn<any>(dropdownSearchInstance, 'handleOnMouseEnter');\r\n\r\n                    dropdownSearch.setProps({\r\n                        ...ownProps,\r\n                        isOpened: true,\r\n                        infiniteScroll: {...infiniteScrollProps},\r\n                    });\r\n\r\n                    dropdownSearchInstanceAsAny.getDropdownMenu().props.onMouseEnter();\r\n\r\n                    expect(handleOnMouseEnterSpy).toHaveBeenCalledTimes(1);\r\n                });\r\n\r\n                it(`if autoInfiniteScroll prop is defined\r\n                    should call handleOnMouseEnter when calling DropdownSearchInfiniteScrollOptions onMouseEnter prop`, () => {\r\n                    const handleOnMouseEnterSpy = spyOn<any>(dropdownSearchInstance, 'handleOnMouseEnter');\r\n\r\n                    dropdownSearch.setProps({\r\n                        ...ownProps,\r\n                        isOpened: true,\r\n                        autoInfiniteScroll: {...autoInfiniteScrollOptions},\r\n                    });\r\n\r\n                    dropdownSearchInstanceAsAny.getDropdownMenu().props.onMouseEnter();\r\n\r\n                    expect(handleOnMouseEnterSpy).toHaveBeenCalledTimes(1);\r\n                });\r\n            });\r\n        });\r\n\r\n        describe('Props functionality', () => {\r\n            let selectedOption: IDropdownOption = defaultSelectedOptionPlaceholder;\r\n\r\n            beforeEach(() => {\r\n                selectedOption = {\r\n                    prefix: 'test',\r\n                    value: 'test1',\r\n                    displayValue: 'test 2',\r\n                    svg: {\r\n                        svgName: 'close',\r\n                        svgClass: 'small',\r\n                    },\r\n                    selected: true,\r\n                };\r\n            });\r\n\r\n            it('should show the filterBox if the dropdown is open and search is on', () => {\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        isOpened: true,\r\n                    })\r\n                );\r\n\r\n                expect(dropdownSearch.find(FilterBox).length).toBe(1);\r\n            });\r\n\r\n            it('should show the button if the dropdown is open and search is off and supportSingleCustomOption is true', () => {\r\n                const infiniteSearchThreshold = 1000000000000;\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        isOpened: true,\r\n                        searchThresold: infiniteSearchThreshold,\r\n                        supportSingleCustomOption: true,\r\n                    })\r\n                );\r\n\r\n                expect(dropdownSearch.find(FilterBox).length).toBe(1);\r\n            });\r\n\r\n            it('should show the button if the dropdown is open and search is off and supportSingleCustomOption is false', () => {\r\n                const infiniteSearchThreshold = 1000000000000;\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        isOpened: true,\r\n                        searchThresold: infiniteSearchThreshold,\r\n                    })\r\n                );\r\n\r\n                expect(dropdownSearch.find('button.dropdown-toggle').length).toBe(1);\r\n            });\r\n\r\n            it('should show the button if the dropdown is close', () => {\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        isOpened: false,\r\n                    })\r\n                );\r\n\r\n                expect(dropdownSearch.find('button.dropdown-toggle').length).toBe(1);\r\n            });\r\n\r\n            it('should call handleOnClose if a blur event occurs on the dropdown button', () => {\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        isOpened: false,\r\n                    })\r\n                );\r\n\r\n                const handleOnCloseSpy = spyOn(DropdownSearch.prototype as any, 'handleOnClose');\r\n                dropdownSearch.find('button.dropdown-toggle').simulate('blur');\r\n                expect(handleOnCloseSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should call this.props.onClose if a blur event occurs on the dropdown button and the onClose prop is defined', () => {\r\n                const onCloseSpy = jasmine.createSpy('onCloseSpy');\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        isOpened: false,\r\n                        onClose: onCloseSpy,\r\n                    })\r\n                );\r\n\r\n                dropdownSearch.find('button.dropdown-toggle').simulate('blur');\r\n                expect(onCloseSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should show the button with a fixed prepend if it has one', () => {\r\n                const fixedPrepend = 'prependo';\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        isOpened: false,\r\n                        fixedPrepend,\r\n                    })\r\n                );\r\n\r\n                expect(dropdownSearch.find(Content).text()).toContain(fixedPrepend);\r\n            });\r\n\r\n            it('should show the dropdown prepend if the selected option has one', () => {\r\n                renderDropdownSearch(_.extend({}, {...ownProps, isOpened: true}));\r\n\r\n                expect(dropdownSearch.find('.dropdown-prepend').text()).toBe(selectedOption.prefix);\r\n            });\r\n\r\n            it('should show the dropdown svg if the selected option has one', () => {\r\n                renderDropdownSearch(_.extend({}, {...ownProps, isOpened: true}));\r\n\r\n                expect(dropdownSearch.find('.value-icon').length).toBe(1);\r\n            });\r\n\r\n            it('should show the dropdown value if the selected option has one', () => {\r\n                renderDropdownSearch(\r\n                    _.extend(\r\n                        {},\r\n                        {\r\n                            ownProps,\r\n                            options: [...options, selectedOption],\r\n                        }\r\n                    )\r\n                );\r\n\r\n                expect(dropdownSearch.find('.dropdown-selected-value').text()).toBe(selectedOption.displayValue);\r\n            });\r\n\r\n            it('should add the mod-menu class if the modMenu is set to true', () => {\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        modMenu: true,\r\n                    })\r\n                );\r\n\r\n                expect(dropdownSearch.find('.mod-menu').length).toBe(1);\r\n            });\r\n\r\n            it('should show options with the highlight set on a span with the class bold when dropdown is opened', () => {\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        highlightAllFilterResult: true,\r\n                        filterText: 'tes',\r\n                        isOpened: true,\r\n                    })\r\n                );\r\n\r\n                expect(dropdownSearch.find('span.bold').length).toBe(3);\r\n            });\r\n\r\n            it('should show the highlight if the filterText is contained in the middle of a word', () => {\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        highlightAllFilterResult: true,\r\n                        filterText: 'es',\r\n                        isOpened: true,\r\n                    })\r\n                );\r\n\r\n                expect(dropdownSearch.find('span.bold').length).toBe(3);\r\n            });\r\n\r\n            it('should not show the highlight if the number of result if greater than the highlightThreshold', () => {\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        highlightThreshold: 1,\r\n                        filterText: 'tes',\r\n                    })\r\n                );\r\n\r\n                expect(dropdownSearch.find('span.bold').length).toBe(0);\r\n            });\r\n\r\n            it('should disabled the dropdown', () => {\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        isDisabled: true,\r\n                    })\r\n                );\r\n\r\n                expect(dropdownSearch.find('.dropdown-toggle').prop('disabled')).toBe(true);\r\n            });\r\n\r\n            it('should call getNoOptions if no options are in the dropdown', () => {\r\n                const getNoOptionsSpy = spyOn(DropdownSearch.prototype as any, 'getNoOptions');\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        selectedOption: undefined,\r\n                        isOpened: true,\r\n                        options: [],\r\n                    })\r\n                );\r\n\r\n                expect(getNoOptionsSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should return a list of one descriptive element when getNoOptions is called', () => {\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        selectedOption: undefined,\r\n                        isOpened: true,\r\n                        options: [],\r\n                    })\r\n                );\r\n\r\n                expect(JSON.stringify(dropdownSearchInstanceAsAny.getNoOptions())).toBe(\r\n                    JSON.stringify([\r\n                        <li key=\"noResultDropdownSearch\">\r\n                            <span className=\"no-search-results\">{dropdownSearchInstance.props.noResultText}</span>\r\n                        </li>,\r\n                    ])\r\n                );\r\n            });\r\n\r\n            it('should scroll down if the active option is not visible by the user inside the dropdown list', () => {\r\n                const opts = _.times(20, (n: number) => {\r\n                    return {value: `test ${n}`};\r\n                });\r\n\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        selectedOption: {value: 'test 1', displayValue: 'test 1'},\r\n                        isOpened: true,\r\n                        options: opts,\r\n                        displayedOptions: options,\r\n                        activeOption: {value: 'testd 1', displayValue: 'test 1'},\r\n                    })\r\n                );\r\n\r\n                spyOn(dropdownSearchInstanceAsAny, 'isScrolledIntoView').and.returnValue(false);\r\n                const spy = spyOn(\r\n                    dropdownSearchInstanceAsAny,\r\n                    'updateScrollPositionBasedOnActiveElement'\r\n                ).and.callThrough();\r\n\r\n                const ul: Element = dropdownSearch.find('ul.dropdown-menu').getDOMNode();\r\n                spyOn(ul, 'getBoundingClientRect').and.returnValue({bottom: 10, top: 10});\r\n\r\n                dropdownSearch.setProps({activeOption: {value: 'test 15'}});\r\n                expect(spy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should scroll up if the active option is not visible by the user inside the dropdown list', () => {\r\n                const opts = _.times(20, (n: number) => {\r\n                    return {value: `test ${n}`, displayValue: `test ${n}`};\r\n                });\r\n\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        selectedOption: {value: 'test 1', displayValue: 'test 1'},\r\n                        isOpened: true,\r\n                        options: opts,\r\n                        displayedOptions: options,\r\n                        activeOption: {value: 'test 19', displayValue: 'test 19'},\r\n                    })\r\n                );\r\n\r\n                spyOn(dropdownSearchInstanceAsAny, 'isScrolledIntoView').and.returnValue(false);\r\n                const spy = spyOn<any>(\r\n                    dropdownSearchInstance,\r\n                    'updateScrollPositionBasedOnActiveElement'\r\n                ).and.callThrough();\r\n\r\n                const ul: Element = dropdownSearch.find('ul.dropdown-menu').getDOMNode();\r\n                spyOn(ul, 'getBoundingClientRect').and.returnValue({bottom: 200000, top: 200000});\r\n\r\n                dropdownSearch.setProps({activeOption: {value: 'test 1', displayValue: 'test 1'}});\r\n                expect(spy).toHaveBeenCalledTimes(1);\r\n            });\r\n        });\r\n\r\n        describe('isSearchOn', () => {\r\n            const renderDropdownSearchWithNumberOfOptions = (numberOfOptions: number) => {\r\n                renderDropdownSearch(\r\n                    _.extend({}, ownProps, {\r\n                        selectedOption: {value: 'test 1', displayValue: 'test 1'},\r\n                        isOpened: true,\r\n                        options: _.times(numberOfOptions, (n: number) => ({value: `${n}`})),\r\n                        searchThresold: 2,\r\n                        displayedOptions: options,\r\n                        activeOption: {value: 'test 19', displayValue: 'test 19'},\r\n                    })\r\n                );\r\n            };\r\n\r\n            it('should return true if the number of options is greater than the search thresold', () => {\r\n                renderDropdownSearchWithNumberOfOptions(3);\r\n\r\n                expect(dropdownSearchInstanceAsAny.isSearchOn()).toBe(true);\r\n            });\r\n\r\n            it('should return false if the number of options is equal to the search thresold', () => {\r\n                renderDropdownSearchWithNumberOfOptions(2);\r\n\r\n                expect(dropdownSearchInstanceAsAny.isSearchOn()).toBe(false);\r\n            });\r\n\r\n            it('should return false if the number of options is lower to the search thresold', () => {\r\n                renderDropdownSearchWithNumberOfOptions(1);\r\n\r\n                expect(dropdownSearchInstanceAsAny.isSearchOn()).toBe(false);\r\n            });\r\n        });\r\n\r\n        describe('disabled tooltip', () => {\r\n            it('should render each option wrapped by a tooltip if they are disabled and disabledTooltip is defined', () => {\r\n                renderDropdownSearch({\r\n                    ...ownProps,\r\n                    isOpened: true,\r\n                    options: options.map((opt: IDropdownOption) => ({\r\n                        ...opt,\r\n                        disabled: true,\r\n                        disabledTooltip: {title: 'i am disabled'},\r\n                    })),\r\n                });\r\n\r\n                expect(dropdownSearch.find(Tooltip).length).toBe(options.length);\r\n            });\r\n\r\n            it('should not render each option wrapped by a tooltip if they are disabled and disabledTooltip is undefined', () => {\r\n                renderDropdownSearch({\r\n                    ...ownProps,\r\n                    isOpened: true,\r\n                    options: options.map((opt: IDropdownOption) => ({...opt, disabled: true})),\r\n                });\r\n\r\n                expect(dropdownSearch.find(Tooltip).length).toBe(0);\r\n            });\r\n\r\n            it('should not render each option wrapped by a tooltip if they are not disabled', () => {\r\n                renderDropdownSearch({\r\n                    ...ownProps,\r\n                    isOpened: true,\r\n                });\r\n\r\n                expect(dropdownSearch.find(Tooltip).length).toBe(0);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=351.bundle.js.map