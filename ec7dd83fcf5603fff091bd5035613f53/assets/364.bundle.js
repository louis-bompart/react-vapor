(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{1470:function(e,r,n){"use strict";n.r(r),r.default="import * as React from 'react';\r\nimport * as ReactDOM from 'react-dom';\r\nimport * as _ from 'underscore';\r\nimport * as s from 'underscore.string';\r\nimport {IReduxStatePossibleProps} from '../../utils/ReduxUtils';\r\nimport {FilterBox} from '../filterBox/FilterBox';\r\nimport {FilterBoxConnected} from '../filterBox/FilterBoxConnected';\r\n\r\nexport interface IFacetMoreRowsOwnProps extends React.ClassAttributes<FacetMoreRows> {\r\n    facet: string;\r\n    facetRows: JSX.Element[];\r\n}\r\n\r\nexport interface IFacetMoreRowsStateProps extends IReduxStatePossibleProps {\r\n    isOpened?: boolean;\r\n    filterText?: string;\r\n}\r\n\r\nexport interface IFacetMoreRowsDispatchProps {\r\n    onOpen?: () => void;\r\n    onDocumentClick?: () => void;\r\n}\r\n\r\nexport interface IFacetMoreRowsChildrenProps {\r\n    filterPlaceholder?: string;\r\n}\r\n\r\nexport interface IFacetMoreRowsProps\r\n    extends IFacetMoreRowsOwnProps,\r\n        IFacetMoreRowsDispatchProps,\r\n        IFacetMoreRowsStateProps,\r\n        IFacetMoreRowsChildrenProps {}\r\n\r\nexport class FacetMoreRows extends React.Component<IFacetMoreRowsProps, any> {\r\n    private facetSearch: HTMLDivElement;\r\n\r\n    componentWillMount() {\r\n        if (this.props.onDocumentClick) {\r\n            document.addEventListener('click', this.handleDocumentClick);\r\n        }\r\n    }\r\n\r\n    componentWillReceiveProps(nextProps: IFacetMoreRowsProps) {\r\n        if (this.props.onOpen && !this.props.isOpened && nextProps.isOpened) {\r\n            this.props.onOpen();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDocumentClick) {\r\n            document.removeEventListener('click', this.handleDocumentClick);\r\n        }\r\n    }\r\n\r\n    componentDidUpdate() {\r\n        if (this.props.isOpened) {\r\n            this.facetSearch.getElementsByTagName('input')[0].focus();\r\n        }\r\n    }\r\n\r\n    private handleDocumentClick = (e: MouseEvent) => {\r\n        if (this.props.isOpened) {\r\n            const facetSearch: Element | Text = ReactDOM.findDOMNode(this.facetSearch);\r\n\r\n            if (!facetSearch.contains(e.target as Node)) {\r\n                this.props.onDocumentClick();\r\n            }\r\n        }\r\n    };\r\n\r\n    render() {\r\n        const moreSearchClasses: string = 'facet-more-search' + (!this.props.isOpened ? ' hidden' : '');\r\n        const rowsFiltered: JSX.Element[] =\r\n            this.props.filterText && this.props.filterText.length\r\n                ? _.map(this.props.facetRows, (facetRow: JSX.Element) => {\r\n                      const facetText = facetRow.props.facetRow.formattedName;\r\n                      if (s.contains(facetText.toLowerCase(), this.props.filterText.toLowerCase())) {\r\n                          return facetRow;\r\n                      }\r\n                  }).filter(Boolean)\r\n                : this.props.facetRows;\r\n        const resultsClass: string = 'facet-search-results' + (!rowsFiltered.length ? ' hidden' : '');\r\n        const filterBoxId: string = 'filter-' + this.props.facet;\r\n        const filterBox: JSX.Element = this.props.withReduxState ? (\r\n            <FilterBoxConnected id={filterBoxId} filterPlaceholder={this.props.filterPlaceholder} />\r\n        ) : (\r\n            <FilterBox id={filterBoxId} filterPlaceholder={this.props.filterPlaceholder} />\r\n        );\r\n\r\n        return (\r\n            <div className={moreSearchClasses}>\r\n                <div className=\"facet-search\" ref={(facetSearch: HTMLDivElement) => (this.facetSearch = facetSearch)}>\r\n                    {filterBox}\r\n                </div>\r\n                <ul className={resultsClass}>{rowsFiltered}</ul>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=364.bundle.js.map