(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{1663:function(n,r,e){"use strict";e.r(r),r.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Svg} from '../../svg/Svg';\r\nimport {NavigationPaginationSelect} from './NavigationPaginationSelect';\r\n\r\nexport interface INavigationPaginationOwnProps extends React.ClassAttributes<NavigationPagination> {\r\n    id?: string;\r\n    totalPages: number;\r\n    numberOfPagesToShow?: number;\r\n    previousLabel?: string;\r\n    nextLabel?: string;\r\n    loadingIds?: string[];\r\n    hidePages?: boolean;\r\n}\r\n\r\nexport interface INavigationPaginationStateProps {\r\n    currentPage?: number;\r\n}\r\n\r\nexport interface INavigationPaginationDispatchProps {\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n    onPageClick?: (pageNb: number) => void;\r\n}\r\n\r\nexport interface INavigationPaginationProps\r\n    extends INavigationPaginationOwnProps,\r\n        INavigationPaginationStateProps,\r\n        INavigationPaginationDispatchProps {}\r\n\r\nexport const NUMBER_OF_PAGES_SHOWING: number = 7;\r\nexport const PREVIOUS_LABEL: string = 'Previous';\r\nexport const NEXT_LABEL: string = 'Next';\r\n\r\nexport class NavigationPagination extends React.Component<INavigationPaginationProps, any> {\r\n    private handlePageClick = (pageNb: number) => {\r\n        if (pageNb >= 0 && this.props.currentPage !== pageNb) {\r\n            this.props.onPageClick?.(pageNb);\r\n        }\r\n    };\r\n\r\n    componentDidUpdate() {\r\n        if (this.props.currentPage > this.props.totalPages - 1) {\r\n            this.handlePageClick(this.props.totalPages - 1);\r\n        }\r\n    }\r\n\r\n    componentDidMount() {\r\n        this.props.onRender?.();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onDestroy?.();\r\n    }\r\n\r\n    render() {\r\n        const currentPage: number = this.props.currentPage || 0;\r\n        const showXPages: number = Math.abs((this.props.numberOfPagesToShow || NUMBER_OF_PAGES_SHOWING) - 1);\r\n        const previousLabel: string = this.props.previousLabel || PREVIOUS_LABEL;\r\n        const nextLabel: string = this.props.nextLabel || NEXT_LABEL;\r\n        let start: number = 0;\r\n        let end: number = showXPages;\r\n        const lastPage: number = this.props.totalPages - 1;\r\n        const previousClasses: string =\r\n            'flat-select-option mod-link ' + (currentPage === 0 ? 'disabled' : 'selectable');\r\n        const nextClasses: string =\r\n            'flat-select-option mod-link ' + (currentPage === lastPage ? 'disabled' : 'selectable');\r\n        const pageSelects: JSX.Element[] = [];\r\n\r\n        if (!this.props.hidePages) {\r\n            if (currentPage + showXPages / 2 > lastPage) {\r\n                end = lastPage;\r\n                start = Math.max(lastPage - showXPages, 0);\r\n            } else {\r\n                start = Math.max(Math.floor(currentPage - showXPages / 2), 0);\r\n                end = Math.min(start + showXPages, lastPage);\r\n            }\r\n\r\n            _.each(_.range(start, end + 1), (p: number): void => {\r\n                pageSelects.push(\r\n                    <NavigationPaginationSelect\r\n                        key={'page-' + p}\r\n                        onPageClick={this.handlePageClick}\r\n                        pageNb={p}\r\n                        selected={p === currentPage}\r\n                    />\r\n                );\r\n            });\r\n        }\r\n\r\n        return (\r\n            <div className=\"pagination\">\r\n                <div className=\"flat-select\">\r\n                    <a\r\n                        className={previousClasses}\r\n                        data-page={currentPage - 1}\r\n                        onClick={() => this.handlePageClick(currentPage - 1)}\r\n                    >\r\n                        <Svg\r\n                            svgName=\"arrow-left-rounded\"\r\n                            className=\"pagination-icon\"\r\n                            svgClass=\"icon icon-small mod-lg\"\r\n                        />\r\n                        {previousLabel}\r\n                    </a>\r\n                    {pageSelects}\r\n                    <a\r\n                        className={nextClasses}\r\n                        data-page={currentPage + 1}\r\n                        onClick={() => this.handlePageClick(currentPage + 1)}\r\n                    >\r\n                        {nextLabel}\r\n                        <Svg\r\n                            svgName=\"arrow-right-rounded\"\r\n                            className=\"pagination-icon\"\r\n                            svgClass=\"icon icon-small mod-lg\"\r\n                        />\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=568.bundle.js.map