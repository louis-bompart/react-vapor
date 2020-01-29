(window.webpackJsonp=window.webpackJsonp||[]).push([[711],{1810:function(n,e,r){"use strict";r.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {Collapsible} from '../collapsible/Collapsible';\r\nimport {Svg} from '../svg/Svg';\r\nimport {ISideNavigationHeaderProps} from './SideNavigationHeader';\r\n\r\nexport interface SideNavigationHeaderProps {\r\n    title?: React.ReactNode;\r\n    svgName?: string;\r\n    svgClass?: string;\r\n    customIcon?: React.ReactNode;\r\n    onClick?: (event: React.MouseEvent) => void;\r\n}\r\nexport interface ISideNavigationSectionProps extends SideNavigationHeaderProps {\r\n    /**\r\n     * @deprecated pass those in props directly\r\n     */\r\n    header?: ISideNavigationHeaderProps;\r\n    expandable?: boolean;\r\n    expanded?: boolean;\r\n    onClick?: () => void;\r\n}\r\n\r\nconst HeaderIcon: React.FunctionComponent<SideNavigationHeaderProps> = ({svgName, svgClass}) =>\r\n    svgName ? (\r\n        <Svg\r\n            svgName={svgName}\r\n            svgClass={classNames('navigation-menu-section-header-icon icon mod-lg transparency-3 fill-white', svgClass)}\r\n        />\r\n    ) : (\r\n        <span className=\"navigation-menu-section-header-icon\" />\r\n    );\r\n\r\nconst SideNavigationHeader: React.FunctionComponent<SideNavigationHeaderProps> = ({\r\n    customIcon,\r\n    onClick,\r\n    children,\r\n    ...iconProps\r\n}) => (\r\n    <div className=\"navigation-menu-section-header text-white\" onClick={onClick}>\r\n        {customIcon || <HeaderIcon {...iconProps} />}\r\n        {children}\r\n    </div>\r\n);\r\n\r\nexport const SideNavigationMenuSection: React.FunctionComponent<ISideNavigationSectionProps> = ({\r\n    expandable,\r\n    expanded,\r\n    title,\r\n    onClick,\r\n    header,\r\n    children,\r\n    ...headerProps\r\n}) => {\r\n    const headerTitle = title || (header && header.title);\r\n    const sectionHeader = headerTitle && (\r\n        <SideNavigationHeader {..._.extend({}, header, headerProps)} onClick={expandable ? _.noop : onClick}>\r\n            {headerTitle}\r\n        </SideNavigationHeader>\r\n    );\r\n    const items = <div className=\"navigation-menu-section-items\">{children}</div>;\r\n\r\n    return expandable ? (\r\n        <Collapsible\r\n            className=\"navigation-menu-section\"\r\n            id={_.uniqueId('nav-section')}\r\n            headerContent={sectionHeader}\r\n            toggleIconClassName=\"fill-white transparency-3\"\r\n            onToggleExpandedState={onClick}\r\n            expanded={!!expanded}\r\n        >\r\n            {items}\r\n        </Collapsible>\r\n    ) : (\r\n        <div className=\"navigation-menu-section\">\r\n            {sectionHeader}\r\n            {items}\r\n        </div>\r\n    );\r\n};\r\n"}}]);
//# sourceMappingURL=711.bundle.js.map