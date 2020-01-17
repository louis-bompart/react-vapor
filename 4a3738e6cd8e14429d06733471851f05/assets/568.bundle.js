(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{1659:function(n,e,a){"use strict";a.r(e),e.default="import * as React from 'react';\r\n\r\nexport interface INavigationPaginationSelectProps extends React.ClassAttributes<NavigationPaginationSelect> {\r\n    selected: boolean;\r\n    pageNb: number;\r\n    onPageClick: (pageNb: number) => void;\r\n}\r\n\r\nexport class NavigationPaginationSelect extends React.Component<INavigationPaginationSelectProps, any> {\r\n    render() {\r\n        const linkClasses: string = 'flat-select-option' + (this.props.selected ? '' : ' selectable');\r\n\r\n        return (\r\n            <a\r\n                className={linkClasses}\r\n                data-page={this.props.pageNb}\r\n                onClick={() => this.props.onPageClick(this.props.pageNb)}\r\n            >\r\n                {this.props.pageNb + 1}\r\n            </a>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=568.bundle.js.map