(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{1456:function(n,o,e){"use strict";e.r(o),o.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {\r\n    DropdownSearchAutoInfiniteScroll,\r\n    IDropdownSearchAutoInfiniteScrollProps,\r\n} from '../DropdownSearchAutoInfiniteScroll';\r\nimport {DropdownSearchInfiniteScrollOptions} from '../DropdownSearchInfiniteScrollOptions';\r\n\r\ndescribe('DropdownSearchAutoInfiniteScroll', () => {\r\n    let basicProps: IDropdownSearchAutoInfiniteScrollProps;\r\n    const totalOptions = 23;\r\n    const optionsPerPage = 10;\r\n\r\n    function getOptions(prependText: string, total: number) {\r\n        return _.times(total, (n: number) => (\r\n            <div key={n}>\r\n                {prependText} {n}\r\n            </div>\r\n        ));\r\n    }\r\n\r\n    beforeEach(() => {\r\n        basicProps = {\r\n            onMouseEnter: jasmine.createSpy('onMouseEnter'),\r\n            options: getOptions('Test', totalOptions),\r\n            ulElementRefFunction: jasmine.createSpy('refFunction'),\r\n            endMessage: 'the end',\r\n            optionsPerPage,\r\n        };\r\n    });\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => shallow(<DropdownSearchAutoInfiniteScroll {...basicProps} />)).not.toThrow();\r\n    });\r\n\r\n    describe('<DropdownSearchAutoInfiniteScroll />', () => {\r\n        let autoInfiniteScroll: ReactWrapper<IDropdownSearchAutoInfiniteScrollProps, any>;\r\n\r\n        beforeEach(() => {\r\n            autoInfiniteScroll = mount(<DropdownSearchAutoInfiniteScroll {...basicProps} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            autoInfiniteScroll.detach();\r\n        });\r\n\r\n        it('should get what to do on mouse enter as a prop', () => {\r\n            const onMouseEnterProp = autoInfiniteScroll.props().onMouseEnter;\r\n\r\n            expect(onMouseEnterProp).toBeDefined();\r\n\r\n            onMouseEnterProp();\r\n\r\n            expect(basicProps.onMouseEnter).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should get the options as a prop', () => {\r\n            const optionsProp = autoInfiniteScroll.props().options;\r\n\r\n            expect(optionsProp).toBeDefined();\r\n            expect(optionsProp.length).toBe(basicProps.options.length);\r\n        });\r\n\r\n        it('should get the menu ref function as a prop and call it on render', () => {\r\n            const ulElementRefFunctionProp = autoInfiniteScroll.props().ulElementRefFunction;\r\n\r\n            expect(ulElementRefFunctionProp).toBeDefined();\r\n            expect(ulElementRefFunctionProp).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should display a <DropdownSearchInfiniteScrollOptions /> component', () => {\r\n            expect(autoInfiniteScroll.find(DropdownSearchInfiniteScrollOptions)).toBeDefined();\r\n        });\r\n\r\n        it('should call onMouseEnter prop on mouse enter', () => {\r\n            autoInfiniteScroll.find('.dropdown-menu').simulate('mouseenter');\r\n\r\n            expect(basicProps.onMouseEnter).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should update activeOptions and respect the paging when loading additional options', () => {\r\n            expect(autoInfiniteScroll.state('activeOptions')).toEqual(basicProps.options.slice(0, optionsPerPage));\r\n\r\n            autoInfiniteScroll\r\n                .find(DropdownSearchInfiniteScrollOptions)\r\n                .props()\r\n                .infiniteScroll.next();\r\n            expect(autoInfiniteScroll.state('activeOptions')).toEqual(basicProps.options.slice(0, optionsPerPage * 2));\r\n\r\n            autoInfiniteScroll\r\n                .find(DropdownSearchInfiniteScrollOptions)\r\n                .props()\r\n                .infiniteScroll.next();\r\n            expect(autoInfiniteScroll.state('activeOptions')).toEqual(basicProps.options);\r\n        });\r\n\r\n        it('should update activeOptions and respect the paging when setting new options', () => {\r\n            const newOptions = getOptions('Other options', 33);\r\n\r\n            autoInfiniteScroll.setProps({options: newOptions});\r\n            expect(autoInfiniteScroll.state('activeOptions')).toEqual(newOptions.slice(0, optionsPerPage));\r\n        });\r\n\r\n        it('should not show endMessage if infinite scrolling is unused (less options shown then per page)', () => {\r\n            expect(autoInfiniteScroll.find(DropdownSearchInfiniteScrollOptions).props().infiniteScroll.endMessage).toBe(\r\n                basicProps.endMessage\r\n            );\r\n\r\n            const newOptions = getOptions('Other options', optionsPerPage - 1);\r\n            autoInfiniteScroll.setProps({options: newOptions});\r\n\r\n            expect(\r\n                autoInfiniteScroll.find(DropdownSearchInfiniteScrollOptions).props().infiniteScroll.endMessage\r\n            ).toBeNull();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=350.bundle.js.map