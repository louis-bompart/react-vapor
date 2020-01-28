(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{1673:function(n,r,a){"use strict";a.r(r),r.default="import * as React from 'react';\r\nimport {IReduxStatePossibleProps} from '../../utils/ReduxUtils';\r\nimport {Loading} from '../loading/Loading';\r\nimport {LoadingConnected} from '../loading/LoadingConnected';\r\nimport {INavigationPaginationProps, NavigationPagination} from './pagination/NavigationPagination';\r\nimport {NavigationPaginationConnected} from './pagination/NavigationPaginationConnected';\r\nimport {INavigationPerPageProps, NavigationPerPage, PER_PAGE_NUMBERS} from './perPage/NavigationPerPage';\r\nimport {NavigationPerPageConnected} from './perPage/NavigationPerPageConnected';\r\n\r\nexport interface INavigationOwnProps extends React.ClassAttributes<Navigation> {\r\n    id?: string;\r\n    totalPages: number;\r\n    totalEntries: number;\r\n    loadingIds?: string[];\r\n}\r\n\r\nexport interface INavigationChildrenProps {\r\n    numberOfPagesToShow?: number;\r\n    previousLabel?: string;\r\n    nextLabel?: string;\r\n    onPageClick?: (pageNb: number) => void;\r\n    perPageLabel?: string;\r\n    perPageNumbers?: number[];\r\n    onPerPageClick?: (newPerPage: number, currentPerPage?: number, currentPage?: number) => void;\r\n    hidePages?: boolean;\r\n    currentPerPage?: number;\r\n    currentPage?: number;\r\n    initialPosition?: number;\r\n}\r\n\r\nexport interface INavigationStateProps extends IReduxStatePossibleProps {\r\n    isLoading?: boolean;\r\n}\r\n\r\nexport interface INavigationProps extends INavigationOwnProps, INavigationChildrenProps, INavigationStateProps {}\r\n\r\nexport class Navigation extends React.Component<INavigationProps, any> {\r\n    static defaultProps: Partial<INavigationProps> = {\r\n        perPageNumbers: PER_PAGE_NUMBERS,\r\n    };\r\n\r\n    render() {\r\n        const paginationProps: INavigationPaginationProps = {\r\n            totalPages: this.props.totalPages,\r\n            numberOfPagesToShow: this.props.numberOfPagesToShow,\r\n            previousLabel: this.props.previousLabel,\r\n            nextLabel: this.props.nextLabel,\r\n            hidePages: this.props.hidePages || !this.props.totalPages || this.props.totalPages === 1,\r\n        };\r\n\r\n        const pagination: JSX.Element = this.props.withReduxState ? (\r\n            <NavigationPaginationConnected\r\n                id={`pagination-${this.props.id}`}\r\n                loadingIds={this.props.loadingIds}\r\n                {...paginationProps}\r\n            />\r\n        ) : (\r\n            <NavigationPagination\r\n                currentPage={this.props.currentPage}\r\n                onPageClick={this.props.onPageClick}\r\n                {...paginationProps}\r\n            />\r\n        );\r\n        const paginationClass: string = this.props.totalPages > 1 ? '' : 'hidden';\r\n\r\n        const perPageProps: INavigationPerPageProps = {\r\n            label: this.props.perPageLabel,\r\n            perPageNumbers: this.props.perPageNumbers,\r\n            totalEntries: this.props.totalEntries,\r\n            initialPosition: this.props.initialPosition,\r\n        };\r\n        if (this.props.currentPerPage) {\r\n            perPageProps.currentPerPage = this.props.currentPerPage;\r\n        }\r\n        const perPage: JSX.Element = this.props.withReduxState ? (\r\n            <NavigationPerPageConnected id={this.props.id} loadingIds={this.props.loadingIds} {...perPageProps} />\r\n        ) : (\r\n            <NavigationPerPage onPerPageClick={this.props.onPerPageClick} {...perPageProps} />\r\n        );\r\n        const perPageClass =\r\n            this.props.perPageNumbers.length && this.props.totalEntries > this.props.perPageNumbers[0] ? '' : 'hidden';\r\n\r\n        const navigationClasses: string = `pagination-container${this.props.isLoading ? ' loading-view' : ''}`;\r\n        const loading: JSX.Element = this.props.withReduxState ? (\r\n            <LoadingConnected id={`loading-${this.props.id}`} />\r\n        ) : (\r\n            <Loading />\r\n        );\r\n\r\n        return (\r\n            <div className={navigationClasses}>\r\n                <div className={perPageClass}>{perPage}</div>\r\n                <div className=\"flex-auto\">{loading}</div>\r\n                <div className={paginationClass}>{pagination}</div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=568.bundle.js.map