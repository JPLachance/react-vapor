(window.webpackJsonp=window.webpackJsonp||[]).push([[1013],{2350:function(t,e,n){"use strict";n.r(e),n.d(e,"NavigationConnectedExamples",(function(){return d}));var r,o=n(1),i=n(0),a=n(164),s=n(13),p=n(496),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},u=["loading-navigation-connected"],d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.componentWillMount=function(){a.a.subscribe((function(){i.contains([s.a.turnOn,s.a.add],a.a.getState().lastAction.type)&&setTimeout((function(){a.a.dispatch(Object(s.d)(u))}),2e3)}))},e.prototype.render=function(){var t={id:"navigation-connected",totalPages:10,totalEntries:50,loadingIds:u};return o.createElement("div",{className:"mt2"},o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"Navigation with Redux state and loading"),o.createElement(p.a,l({},t))))},e}(o.Component)},464:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return c}));var r,o=n(1),i=n(0),a=n(554),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=[10,20,30],c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.handleClick=function(t){this.props.onPerPageClick&&this.props.currentPerPage!==t&&this.props.onPerPageClick(t,this.props.currentPerPage,this.props.currentPage)},e.prototype.componentWillMount=function(){var t,e;this.initialPosition=i.isUndefined(this.props.initialPosition)?Math.ceil(this.props.perPageNumbers.length/2)-1:this.props.initialPosition,null===(e=(t=this.props).onRender)||void 0===e||e.call(t,this.props.perPageNumbers[this.initialPosition])},e.prototype.componentWillUnmount=function(){var t,e;null===(e=(t=this.props).onDestroy)||void 0===e||e.call(t)},e.prototype.render=function(){var t=this,e=this.props.currentPerPage||this.props.perPageNumbers[this.initialPosition],n=this.props.totalEntries,r=i.map(this.props.perPageNumbers,(function(r,i){if(n>(t.props.perPageNumbers[i-1]||0)){var s="perpage-"+(t.props.id||"")+"-"+r,p=e===r;return o.createElement(a.a,{onPerPageClick:function(e){return t.handleClick(e)},perPageNb:r,key:s,selected:p})}}));return o.createElement("div",{className:"items-per-page prepended-flat-select"},o.createElement("div",{className:"flat-select-prepend"},this.props.label,":"),o.createElement("div",{className:"flat-select clearfix"},r))},e.defaultProps={perPageNumbers:p,label:"Results per page"},e}(o.Component)},482:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r,o=n(1),i=n(0),a=n(82),s=n(511),p=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handlePageClick=function(t){var n,r;t>=0&&e.props.currentPage!==t&&(null===(r=(n=e.props).onPageClick)||void 0===r||r.call(n,t))},e}return p(e,t),e.prototype.componentDidUpdate=function(){this.props.currentPage>this.props.totalPages-1&&this.handlePageClick(this.props.totalPages-1)},e.prototype.componentDidMount=function(){var t,e;null===(e=(t=this.props).onRender)||void 0===e||e.call(t)},e.prototype.componentWillUnmount=function(){var t,e;null===(e=(t=this.props).onDestroy)||void 0===e||e.call(t)},e.prototype.render=function(){var t=this,e=this.props.currentPage||0,n=Math.abs((this.props.numberOfPagesToShow||7)-1),r=this.props.previousLabel||"Previous",p=this.props.nextLabel||"Next",c=0,l=n,u=this.props.totalPages-1,d="flat-select-option mod-link "+(0===e?"disabled":"selectable"),f="flat-select-option mod-link "+(e===u?"disabled":"selectable"),h=[];return this.props.hidePages||(e+n/2>u?(l=u,c=Math.max(u-n,0)):(c=Math.max(Math.floor(e-n/2),0),l=Math.min(c+n,u)),i.each(i.range(c,l+1),(function(n){h.push(o.createElement(s.a,{key:"page-"+n,onPageClick:t.handlePageClick,pageNb:n,selected:n===e}))}))),o.createElement("div",{className:"pagination"},o.createElement("div",{className:"flat-select"},o.createElement("a",{className:d,"data-page":e-1,onClick:function(){return t.handlePageClick(e-1)}},o.createElement(a.a,{svgName:"arrow-left-rounded",className:"pagination-icon",svgClass:"icon icon-small mod-lg"}),r),h,o.createElement("a",{className:f,"data-page":e+1,onClick:function(){return t.handlePageClick(e+1)}},p,o.createElement(a.a,{svgName:"arrow-right-rounded",className:"pagination-icon",svgClass:"icon icon-small mod-lg"}))))},e}(o.Component)},496:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(55),o=n(0),i=n(56),a=n(510),s=Object(r.b)((function(t,e){var n=o.findWhere(t.loadings,{id:"loading-"+e.id});return{isLoading:n&&n.isOn||!1,withReduxState:!0}}),void 0,i.c.mergeProps)(a.a)},509:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(55),o=n(56),i=n(143),a=n(13),s=Object(r.b)((function(){return{}}),(function(t,e){return{onRender:function(){return t(Object(a.b)(e.id))},onDestroy:function(){return t(Object(a.c)(e.id))}}}),o.c.mergeProps)(i.a)},510:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r,o=n(1),i=n(143),a=n(509),s=n(482),p=n(512),c=n(464),l=n(513),u=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d=function(){return(d=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.render=function(){var t={totalPages:this.props.totalPages,numberOfPagesToShow:this.props.numberOfPagesToShow,previousLabel:this.props.previousLabel,nextLabel:this.props.nextLabel,hidePages:this.props.hidePages||!this.props.totalPages||1===this.props.totalPages},e=this.props.withReduxState?o.createElement(p.a,d({id:"pagination-"+this.props.id,loadingIds:this.props.loadingIds},t)):o.createElement(s.a,d({currentPage:this.props.currentPage,onPageClick:this.props.onPageClick},t)),n=this.props.totalPages>1?"":"hidden",r={label:this.props.perPageLabel,perPageNumbers:this.props.perPageNumbers,totalEntries:this.props.totalEntries,initialPosition:this.props.initialPosition};this.props.currentPerPage&&(r.currentPerPage=this.props.currentPerPage);var u=this.props.withReduxState?o.createElement(l.a,d({id:this.props.id,loadingIds:this.props.loadingIds},r)):o.createElement(c.a,d({onPerPageClick:this.props.onPerPageClick},r)),f=this.props.perPageNumbers.length&&this.props.totalEntries>this.props.perPageNumbers[0]?"":"hidden",h="pagination-container"+(this.props.isLoading?" loading-view":""),g=this.props.withReduxState?o.createElement(a.a,{id:"loading-"+this.props.id}):o.createElement(i.a,null);return o.createElement("div",{className:h},o.createElement("div",{className:f},u),o.createElement("div",{className:"flex-auto"},g),o.createElement("div",{className:n},e))},e.defaultProps={perPageNumbers:c.b},e}(o.Component)},511:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r,o=n(9),i=n(1),a=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.render=function(){var t=this,e=o("flat-select-option",{selectable:!this.props.selected,disabled:this.props.disabled});return i.createElement("a",{className:e,"data-page":this.props.pageNb,onClick:function(){return t.props.onPageClick(t.props.pageNb)}},this.props.pageNb+1)},e}(i.Component)},512:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n(55),o=n(0),i=n(56),a=n(482),s=n(22),p=Object(r.b)((function(t,e){var n=o.findWhere(t.paginationComposite,{id:e.id});return{currentPage:n?n.pageNb:0}}),(function(t,e){return{onRender:function(){return t(Object(s.c)(e.id))},onDestroy:function(){return t(Object(s.e)(e.id))},onPageClick:function(n){return t(Object(s.d)(e.id,n))}}}),i.c.mergeProps)(a.a)},513:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(55),o=n(0),i=n(56),a=n(22),s=n(464),p=n(31),c=Object(r.b)((function(t,e){var n=e.perPageNumbers||s.b,r=Math.ceil(n.length/2)-1,i=o.findWhere(t.perPageComposite,{id:e.id}),a=o.findWhere(t.paginationComposite,{id:"pagination-"+e.id}),p=o.isUndefined(e.initialPosition)?r:e.initialPosition;return{currentPerPage:i?i.perPage:n[p],currentPage:a?a.pageNb:0}}),(function(t,e){return{onRender:function(n){return t(Object(p.b)(e.id,n))},onDestroy:function(){return t(Object(p.d)(e.id))},onPerPageClick:function(n,r,o){t(Object(p.c)(e.id,n)),t(Object(a.d)("pagination-"+e.id,Math.floor(o*r/n)))}}}),i.c.mergeProps)(s.a)},554:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r,o=n(1),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.render=function(){var t=this,e="flat-select-option"+(this.props.selected?"":" selectable"),n="enabled"+(this.props.selected?" selected-value state-selected":"");return o.createElement("a",{className:e,onClick:function(){return t.props.onPerPageClick(t.props.perPageNb)}},o.createElement("span",{className:n},this.props.perPageNb))},e}(o.Component)}}]);
//# sourceMappingURL=1013.bundle.js.map