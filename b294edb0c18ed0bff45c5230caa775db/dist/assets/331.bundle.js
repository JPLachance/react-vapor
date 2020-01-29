(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{1437:function(n,r,o){"use strict";o.r(r),r.default="import * as React from 'react';\r\nimport * as InfiniteScroll from 'react-infinite-scroll-component';\r\nimport * as _ from 'underscore';\r\n\r\nexport interface DropdownSearchInfiniteScrollOptionsProps {\r\n    onMouseEnter: () => void;\r\n    options: JSX.Element[];\r\n    ulElementRefFunction: (menu: HTMLElement) => void;\r\n    infiniteScroll: InfiniteScroll.InfiniteScrollProps;\r\n}\r\n\r\nexport class DropdownSearchInfiniteScrollOptions extends React.Component<DropdownSearchInfiniteScrollOptionsProps, {}> {\r\n    private id: string;\r\n\r\n    componentWillMount() {\r\n        this.id = _.uniqueId('infinite-dropdown');\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div\r\n                id={this.id}\r\n                className=\"dropdown-menu\"\r\n                ref={(menu: HTMLElement) => this.props.ulElementRefFunction(menu)}\r\n                onMouseEnter={() => this.props.onMouseEnter()}\r\n            >\r\n                <InfiniteScroll\r\n                    {...this.props.infiniteScroll}\r\n                    scrollableTarget={this.id}\r\n                    style={{...this.props.infiniteScroll.style, overflow: 'initial'}}\r\n                >\r\n                    {this.props.options}\r\n                </InfiniteScroll>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=331.bundle.js.map