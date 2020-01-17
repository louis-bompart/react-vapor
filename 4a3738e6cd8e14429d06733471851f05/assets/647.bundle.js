(window.webpackJsonp=window.webpackJsonp||[]).push([[647],{1734:function(n,e,r){"use strict";r.r(e),e.default="import {mount, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {keyCode} from '../../utils/InputUtils';\r\nimport {Svg} from '../svg/Svg';\r\nimport {SearchBar} from './SearchBar';\r\nimport {searchBarPropsScenarios} from './SearchBarPropsScenarios.spec';\r\n\r\ndescribe('SearchBar', () => {\r\n    const requiredProps = {...searchBarPropsScenarios[0]};\r\n    it('should not throw on render', () => {\r\n        expect(() => {\r\n            searchBarPropsScenarios.forEach((props) => shallow(<SearchBar {...props} />));\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should have a container div with the search-bar class and without the search-bar-loading and search-bar-disabled classes by default', () => {\r\n        const containerDiv = shallow(<SearchBar {...requiredProps} />)\r\n            .find('div')\r\n            .first();\r\n        expect(containerDiv.hasClass('search-bar')).toBe(true);\r\n        expect(containerDiv.hasClass('search-bar-loading')).toBe(false);\r\n        expect(containerDiv.hasClass('search-bar-disabled')).toBe(false);\r\n    });\r\n\r\n    it('should have a container div with search-bar-loading class when searching is passed as prop', () => {\r\n        const containerDiv = shallow(<SearchBar {...requiredProps} searching />)\r\n            .find('div')\r\n            .first();\r\n        expect(containerDiv.hasClass('search-bar-loading')).toBe(true);\r\n    });\r\n\r\n    it('should have a container div with search-bar-disabled class when disabled is passed as prop', () => {\r\n        const containerDiv = shallow(<SearchBar {...requiredProps} disabled />)\r\n            .find('div')\r\n            .first();\r\n        expect(containerDiv.hasClass('search-bar-disabled')).toBe(true);\r\n    });\r\n\r\n    it('should add the extra container classes if passed as prop', () => {\r\n        const containerDiv = shallow(<SearchBar {...requiredProps} containerClassNames=\"extra-class\" />)\r\n            .find('div')\r\n            .first();\r\n        expect(containerDiv.hasClass('extra-class')).toBe(true);\r\n    });\r\n\r\n    it('should have an input inside the div container with the search-bar-input class by default', () => {\r\n        const component = shallow(<SearchBar {...requiredProps} />);\r\n        expect(\r\n            component\r\n                .find('div')\r\n                .first()\r\n                .find('input')\r\n                .prop('className')\r\n        ).toBe('search-bar-input');\r\n    });\r\n\r\n    it('should have an input inside the div container with extra classes if passed as props', () => {\r\n        const component = shallow(<SearchBar {...requiredProps} inputClassNames=\"extra-class\" />);\r\n        expect(\r\n            component\r\n                .find('div')\r\n                .first()\r\n                .find('input')\r\n                .prop('className')\r\n        ).toContain('extra-class');\r\n    });\r\n\r\n    it('should have a clickable span containing an svg by default, which when clicked, the search method is called', () => {\r\n        const searchSpy = spyOn(SearchBar.prototype as any, 'search');\r\n        const component = shallow(<SearchBar {...requiredProps} />);\r\n        const clickableSpan = component.find('div .search-bar-icon-container span');\r\n\r\n        (clickableSpan.props() as any).onClick();\r\n        expect(searchSpy).toHaveBeenCalledTimes(1);\r\n\r\n        const svg = clickableSpan.find(Svg);\r\n        expect(svg.length).toBe(1);\r\n        expect(svg.prop('svgName')).toBe('search');\r\n        expect(svg.prop('svgClass')).toBe('fill-medium-blue');\r\n    });\r\n\r\n    it('should have an unclickable grey search svg if SearchBar is disabled', () => {\r\n        const component = shallow(<SearchBar {...requiredProps} disabled />);\r\n        expect(component.find('div .search-bar-icon-container span').length).toBe(0);\r\n\r\n        const svg = component.find('div .search-bar-icon-container').find(Svg);\r\n        expect(svg.length).toBe(1);\r\n        expect(svg.prop('svgName')).toBe('search');\r\n        expect(svg.prop('svgClass')).toBe('fill-light-grey');\r\n    });\r\n\r\n    it('should have an unclickable loading animation if searching is passed as prop', () => {\r\n        const component = shallow(<SearchBar {...requiredProps} searching />);\r\n\r\n        expect(component.find('div .search-bar-icon-container span').length).toBe(0);\r\n        expect(component.find('div .search-bar-icon-container').find(Svg).length).toBe(0);\r\n        expect(component.find('div .search-bar-icon-container .search-bar-spinner').length).toBe(1);\r\n    });\r\n\r\n    it('should call onChange on input change if it is defined', () => {\r\n        const onChange = jasmine.createSpy('onChange');\r\n        const props = {...requiredProps, onChange};\r\n        const component = mount(<SearchBar {...props} />);\r\n        component.find('input').simulate('change');\r\n\r\n        expect(onChange).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should call search on enter keyup', () => {\r\n        const searchSpy = spyOn(SearchBar.prototype as any, 'search');\r\n        const component = mount(<SearchBar {...requiredProps} />);\r\n        component.find('input').simulate('keyup', {keyCode: keyCode.enter} as any);\r\n\r\n        expect(searchSpy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should not call search on keyups other than enter', () => {\r\n        const searchSpy = spyOn(SearchBar.prototype as any, 'search');\r\n        const component = mount(<SearchBar {...requiredProps} />);\r\n        component.find('input').simulate('keyup', {keyCode: keyCode.leftArrow} as any);\r\n\r\n        expect(searchSpy).not.toHaveBeenCalled();\r\n    });\r\n\r\n    describe('on calling search', () => {\r\n        it('should call the onSearch prop even if value is empty', () => {\r\n            const component = new SearchBar({...requiredProps});\r\n            spyOn(component.props, 'onSearch');\r\n            (component as any).search();\r\n\r\n            expect(component.props.onSearch).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not call the onSearch prop if value is not empty, searching is false, but disabled is true', () => {\r\n            const component = new SearchBar({...requiredProps, value: 'non empty', disabled: true});\r\n            spyOn(component.props, 'onSearch');\r\n            (component as any).search();\r\n\r\n            expect(component.props.onSearch).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should not call the onSearch prop if value is not empty, disabled is false, but searching is true', () => {\r\n            const component = new SearchBar({...requiredProps, value: 'non empty', searching: true});\r\n            spyOn(component.props, 'onSearch');\r\n            (component as any).search();\r\n\r\n            expect(component.props.onSearch).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call the onSearch prop if value is not empty, disabled is false, and searching is false', () => {\r\n            const component = new SearchBar({...requiredProps, value: 'non empty'});\r\n            spyOn(component.props, 'onSearch');\r\n            (component as any).search();\r\n\r\n            expect(component.props.onSearch).toHaveBeenCalledTimes(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=647.bundle.js.map