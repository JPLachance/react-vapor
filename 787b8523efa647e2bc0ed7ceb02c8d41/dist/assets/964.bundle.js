(window.webpackJsonp=window.webpackJsonp||[]).push([[964],{2289:function(e,t,o){"use strict";o.r(t),o.d(t,"FacetConnectedExamples",(function(){return u}));var n=o(0),r=o(7),c=o(728),a=o(32),s=o(779),i={name:"facetTitle1",formattedName:"The first facet"},l={name:"facetTitle2",formattedName:"The second facet"},p=[{name:"row1",formattedName:"Row 1"},{name:"row2",formattedName:"The second row"},{name:"row3",formattedName:"Third row with a count property",count:"23412"},{name:"row4",formattedName:"Row 4, count of 0",count:"0"}],u=Object(r.b)(null,(function(e){return{onRender:function(){e(Object(a.c)(i.name,{name:"row2",formattedName:"Irrelevent"})),e(Object(a.c)(l.name,{name:"row1",formattedName:"it does not matter"})),e(Object(a.c)(l.name,{name:"row2",formattedName:"why is this mandatory ?",exclude:!0}))}}}))((function(e){var t=e.onRender;return n.useEffect((function(){t()}),[t]),n.createElement(c.a,{level:2,title:"Facets connected to store"},n.createElement("div",{style:{width:400}},n.createElement("label",{className:"form-control-label"},"Facet with the second row selectd"),n.createElement(s.a,{facet:i,facetRows:p,clearFacet:function(){},toggleFacet:function(){}})),n.createElement("div",{style:{width:400}},n.createElement("label",{className:"form-control-label"},"Facet with exclusions, the first row selected and the second row already excluded"),n.createElement(s.a,{facet:l,facetRows:p,clearFacet:function(){},enableExclusions:!0,toggleFacet:function(){}})))}))},592:function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));var n,r=o(0),c=o(18),a=o(1),s=o(25),i=o(185),l=o(179),p=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleDocumentClick=function(e){t.props.isOpened&&(c.findDOMNode(t.facetSearch).contains(e.target)||t.props.onDocumentClick())},t}return p(t,e),t.prototype.componentWillMount=function(){this.props.onDocumentClick&&document.addEventListener("click",this.handleDocumentClick)},t.prototype.componentWillReceiveProps=function(e){this.props.onOpen&&!this.props.isOpened&&e.isOpened&&this.props.onOpen()},t.prototype.componentWillUnmount=function(){this.props.onDocumentClick&&document.removeEventListener("click",this.handleDocumentClick)},t.prototype.componentDidUpdate=function(){this.props.isOpened&&this.facetSearch.getElementsByTagName("input")[0].focus()},t.prototype.render=function(){var e=this,t="facet-more-search"+(this.props.isOpened?"":" hidden"),o=this.props.filterText&&this.props.filterText.length?a.map(this.props.facetRows,(function(t){var o=t.props.facetRow.formattedName;if(s.contains(o.toLowerCase(),e.props.filterText.toLowerCase()))return t})).filter(Boolean):this.props.facetRows,n="facet-search-results"+(o.length?"":" hidden"),c="filter-"+this.props.facet,p=this.props.withReduxState?r.createElement(l.a,{id:c,filterPlaceholder:this.props.filterPlaceholder}):r.createElement(i.a,{id:c,filterPlaceholder:this.props.filterPlaceholder});return r.createElement("div",{className:t},r.createElement("div",{className:"facet-search",ref:function(t){return e.facetSearch=t}},p),r.createElement("ul",{className:n},o))},t}(r.Component)},593:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n,r=o(0),c=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleOnChange=function(){t.props.onToggleMore&&t.props.onToggleMore(t.props.facet)},t}return c(t,e),t.prototype.render=function(){var e=this,t="facet-value facet-selectable facet-more"+(!!this.props.isOpened&&this.props.isOpened?" hidden":""),o=this.props.moreLabel||"More";return r.createElement("li",{className:t,onClick:function(e){return e.nativeEvent.stopImmediatePropagation()}},r.createElement("label",{className:"coveo-checkbox-label facet-value-label"},r.createElement("input",{type:"checkbox",className:"coveo-checkbox facet-checkbox-input",onChange:function(){return e.handleOnChange()}}),r.createElement("span",{className:"facet-more-button"}),r.createElement("span",{className:"label"},o)))},t}(r.Component)},675:function(e,t,o){"use strict";o.d(t,"a",(function(){return m}));var n,r=o(0),c=o(1),a=o(13),s=o(40),i=o(592),l=o(676),p=o(593),u=o(677),f=o(678),h=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildFacet=function(e){t.props.toggleFacet(t.props.facet.name,e),t.props.onToggleFacet&&t.props.onToggleFacet(t.props.facet.name,e)},t.clearFacet=function(){t.props.clearFacet(t.props.facet.name),t.props.onClearFacet&&t.props.onClearFacet(t.props.facet.name)},t}return h(t,e),t.prototype.sortFacetRows=function(e){return c.sortBy(e,(function(e){return e.formattedName.toLowerCase()}))},t.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender(this.props.facet.name)},t.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy(this.props.facet.name)},t.prototype.render=function(){var e=this;if(!this.props.facetRows.length&&!this.props.selectedFacetRows.length)return null;var t="facet-header-eraser"+(this.props.selectedFacetRows.length?"":" hidden"),o=this.sortFacetRows(this.props.selectedFacetRows),n=this.sortFacetRows(this.props.facetRows),i=c.union(o,n),l=c.uniq(i,!1,(function(e){return e.name})),h=c.map(l,(function(t){var n=c.contains(c.pluck(o,"name"),t.name);return r.createElement(f.a,{key:t.name,facet:e.props.facet.name,facetRow:t,onToggleFacet:e.buildFacet,isChecked:n,enableExclusions:e.props.enableExclusions,maxTooltipLabelLength:e.props.maxTooltipLabelLength,excludeTooltipMessage:e.props.excludeTooltipMessage})})),m=Math.max(this.props.selectedFacetRows.length,this.props.maxRowsToShow);h.length===m+1&&(m+=1);var d=h.length>m?this.props.withReduxState?r.createElement(u.a,{facet:this.props.facet.name,moreLabel:this.props.moreLabel}):r.createElement(p.a,{facet:this.props.facet.name,moreLabel:this.props.moreLabel}):null,b=this.props.facet.name+" facet"+(this.props.isOpened?" facet-opened":"");return r.createElement("div",{className:b},r.createElement("div",{className:"facet-header"},r.createElement("div",{className:t,onClick:function(){return e.clearFacet()}},r.createElement(s.a,{className:"remove-selected-tooltip",title:this.props.clearFacetLabel+" "+this.props.facet.formattedName},r.createElement(a.a,{svgName:"clear",className:"icon fill-medium-grey"}))),r.createElement("div",{className:"facet-header-title bold text-medium-blue"},this.props.facet.formattedName)),r.createElement("ul",{className:"facet-values"},h.slice(0,m),d),this.getMoreRows(!!d,h.slice(m)))},t.prototype.getMoreRows=function(e,t){if(e)return this.props.withReduxState?r.createElement(l.a,{facet:this.props.facet.name,facetRows:t,filterPlaceholder:this.props.filterPlaceholder}):r.createElement(i.a,{facet:this.props.facet.name,facetRows:t,filterPlaceholder:this.props.filterPlaceholder})},t.defaultProps={clearFacetLabel:"Clear",selectedFacetRows:[],maxRowsToShow:5},t}(r.Component)},676:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o(7),r=o(1),c=o(6),a=o(28),s=o(32),i=o(592),l=Object(n.b)((function(e,t){var o=r.findWhere(e.facets,{facet:t.facet}),n=r.findWhere(e.filters,{id:"filter-"+t.facet});return{isOpened:o&&o.opened,filterText:n?n.filterText:"",withReduxState:!0}}),(function(e,t){return{onOpen:function(){return e(Object(a.c)("filter-"+t.facet,""))},onDocumentClick:function(){return e(Object(s.d)())}}}),c.c.mergeProps)(i.a)},677:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(7),r=o(1),c=o(6),a=o(32),s=o(593),i=Object(n.b)((function(e,t){var o=r.findWhere(e.facets,{facet:t.facet});return{isOpened:o&&o.opened}}),(function(e){return{onToggleMore:function(t){return e(Object(a.g)(t))}}}),c.c.mergeProps)(s.a)},678:function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));var n,r=o(2),c=o(0),a=o(1),s=o(13),i=o(40),l=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),p=function(){return(p=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),Object.defineProperty(t.prototype,"isExclude",{get:function(){return!!this.props.enableExclusions&&!!this.props.facetRow.exclude},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this,t=r("facet-value","facet-selectable",{"facet-exclude":this.props.enableExclusions});return c.createElement("li",{className:t},this.getExcludeCheckbox(),c.createElement("label",{className:"coveo-checkbox-label facet-value-label",onClick:function(t){t.preventDefault(),e.toggleFacet()}},c.createElement("input",{type:"checkbox",name:this.props.facetRow.name,className:"coveo-checkbox facet-checkbox-input",checked:this.props.isChecked&&!this.isExclude,onClick:this.stopEvent,onChange:a.noop}),c.createElement("button",{type:"button",className:this.props.isChecked&&this.isExclude?"exclude-box":""},c.createElement(s.a,{svgName:"clear",className:"icon hide exclude-icon",svgClass:"fill-red"})),this.getLabel(),this.getCount()))},t.prototype.getLabel=function(){var e=this.props.facetRow.count?this.props.maxTooltipLabelLength-this.props.facetRow.count.length:this.props.maxTooltipLabelLength,t=r({"text-exclude":this.props.isChecked&&this.isExclude}),o=c.createElement("span",{className:t},this.props.facetRow.formattedName);return this.props.facetRow.formattedName.length>e?c.createElement(i.a,{title:this.props.facetRow.tooltipLabel||this.props.facetRow.formattedName,placement:"top",className:"label"},o):c.createElement("span",{className:"label"},o)},t.prototype.getCount=function(){if(!a.isUndefined(this.props.facetRow.count))return c.createElement("span",{className:r("facet-value-count",{"text-exclude":this.props.isChecked&&this.isExclude})},this.props.facetRow.count)},t.prototype.getExcludeCheckbox=function(){var e=this;if(this.props.enableExclusions)return c.createElement("div",{className:"flex center-align facet-exclude-button",onClick:function(){return e.toggleFacetToExclude()}},c.createElement("input",{type:"checkbox",className:"coveo-checkbox",checked:this.props.isChecked&&this.isExclude,onClick:this.stopEvent,onChange:a.noop}),this.getExcludeButton())},t.prototype.getExcludeButton=function(){return this.props.excludeTooltipMessage?c.createElement(i.a,{className:"exclude-button",title:this.props.excludeTooltipMessage(this.props.facetRow.formattedName)},c.createElement(s.a,{svgName:"exclude",className:"icon",svgClass:"fill-medium-grey"})):c.createElement(s.a,{svgName:"exclude",className:"exclude-button icon",svgClass:"fill-medium-grey"})},t.prototype.stopEvent=function(e){e.preventDefault(),e.stopPropagation()},t.prototype.toggleFacetToExclude=function(){this.props.onToggleFacet(p(p({},this.props.facetRow),{exclude:!this.isExclude}))},t.prototype.toggleFacet=function(){this.props.onToggleFacet(p(p({},this.props.facetRow),{exclude:!1}))},t.defaultProps={maxTooltipLabelLength:25},t}(c.Component)},728:function(e,t,o){"use strict";var n=o(175);o.d(t,"a",(function(){return n.a}))},779:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));var n=o(7),r=o(1),c=o(6),a=o(675),s=o(32),i=function(){return(i=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){return r.compact(r.map(e,(function(e){var o=r.findWhere(t,{name:e.name});return o&&i(i({},o),e)})))},p=Object(n.b)((function(e,t){var o=r.findWhere(e.facets,{facet:t.facet.name}),n=o?l(t.facetRows,o.selected):[];return{isOpened:o&&o.opened,selectedFacetRows:n,withReduxState:!0}}),(function(e){return{onRender:function(t){return e(Object(s.b)(t))},onDestroy:function(t){return e(Object(s.f)(t))},onToggleFacet:function(t,o){return e(Object(s.c)(t,o))},onClearFacet:function(t){return e(Object(s.e)(t))}}}),c.c.mergeProps)(a.a)}}]);
//# sourceMappingURL=964.bundle.js.map