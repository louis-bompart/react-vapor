(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1275:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Banner, BannerMessageStates, BannerProps} from '../Banner';\r\nimport * as styles from '../styles/Banner.scss';\r\n\r\ndescribe('Banner', () => {\r\n    const basicProps: BannerProps = {\r\n        name: 'some name',\r\n    };\r\n    let banner: ReactWrapper<BannerProps>;\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<Banner {...basicProps} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<Banner />', () => {\r\n        const mountWithProps = (props?: Partial<BannerProps>) => {\r\n            if (banner && banner.length) {\r\n                banner.unmount();\r\n            }\r\n            banner = mount(<Banner {...basicProps} {...props} />);\r\n        };\r\n\r\n        beforeEach(() => {\r\n            mountWithProps();\r\n        });\r\n\r\n        it('should get the props correctly', () => {\r\n            const props: Partial<BannerProps> = {\r\n                nameSubtitle: 'jhdkj',\r\n                messageTitle: 'hsjkashk',\r\n                messageState: 'a',\r\n                alignCenter: true,\r\n                topRightInfos: <div>Help</div>,\r\n                bottomRightInfos: <div></div>,\r\n            };\r\n            mountWithProps(props);\r\n\r\n            const bannerProps = banner.props();\r\n            expect(bannerProps.name).toBe(basicProps.name);\r\n            expect(bannerProps.nameSubtitle).toBe(props.nameSubtitle);\r\n            expect(bannerProps.messageTitle).toBe(props.messageTitle);\r\n            expect(bannerProps.messageState).toBe(props.messageState);\r\n            expect(bannerProps.alignCenter).toBe(props.alignCenter);\r\n            expect(bannerProps.topRightInfos).toBe(props.topRightInfos);\r\n            expect(bannerProps.bottomRightInfos).toBe(props.bottomRightInfos);\r\n        });\r\n\r\n        it('should have the class \"center\" if the prop alignCenter is set', () => {\r\n            expect(banner.find('.center').length).toBe(0);\r\n\r\n            mountWithProps({alignCenter: true});\r\n\r\n            expect(banner.find('.center').length).toBe(1);\r\n        });\r\n\r\n        it('should have the class styles.bannerWarningTitle on the title if messageCondition is set to Warning', () => {\r\n            expect(banner.find(`.${styles.bannerWarningTitle}`).length).toBe(0);\r\n\r\n            mountWithProps({messageState: BannerMessageStates.Warning, messageTitle: 'something'});\r\n\r\n            expect(banner.find(`.${styles.bannerWarningTitle}`).length).toBe(1);\r\n        });\r\n\r\n        it('should have the class styles.bannerErrorTitle on the title if messageCondition is set to Error', () => {\r\n            expect(banner.find(`.${styles.bannerErrorTitle}`).length).toBe(0);\r\n\r\n            mountWithProps({messageState: BannerMessageStates.Error, messageTitle: 'something'});\r\n\r\n            expect(banner.find(`.${styles.bannerErrorTitle}`).length).toBe(1);\r\n        });\r\n\r\n        it('should display a <h2> if there is a nameSubtitle', () => {\r\n            expect(banner.find('h2').length).toBe(0);\r\n\r\n            mountWithProps({nameSubtitle: 'something'});\r\n\r\n            expect(banner.find('h2').length).toBe(1);\r\n        });\r\n\r\n        it('should display a bannerRight if there are some topRightInfos or bottomRightInfos', () => {\r\n            expect(banner.find(`.${styles.bannerRight}`).length).toBe(0);\r\n\r\n            mountWithProps({topRightInfos: <div></div>});\r\n\r\n            expect(banner.find(`.${styles.bannerRight}`).length).toBe(1);\r\n\r\n            mountWithProps({topRightInfos: <div></div>, bottomRightInfos: <div></div>});\r\n\r\n            expect(banner.find(`.${styles.bannerRight}`).length).toBe(2);\r\n        });\r\n\r\n        it('should display a <h3> if there is a messageTitle', () => {\r\n            expect(banner.find('h3').length).toBe(0);\r\n\r\n            mountWithProps({messageTitle: 'something'});\r\n\r\n            expect(banner.find('h3').length).toBe(1);\r\n        });\r\n\r\n        it('should display a bannerDescription if there are children', () => {\r\n            expect(banner.find(`.${styles.bannerDescription}`).length).toBe(0);\r\n\r\n            banner = mount(<Banner {...basicProps}>I am a child!</Banner>, {attachTo: document.getElementById('App')});\r\n\r\n            expect(banner.find(`.${styles.bannerDescription}`).length).toBe(1);\r\n        });\r\n\r\n        it('should display a bannerWarningIcon if the messageState is either set to Warning or Error', () => {\r\n            expect(banner.html()).not.toContain(styles.bannerWarningIcon);\r\n\r\n            mountWithProps({messageTitle: 'something', messageState: BannerMessageStates.Warning});\r\n\r\n            expect(banner.html()).toContain(styles.bannerWarningIcon);\r\n\r\n            mountWithProps({messageTitle: 'something', messageState: BannerMessageStates.Error});\r\n\r\n            expect(banner.html()).toContain(styles.bannerWarningIcon);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=163.bundle.js.map