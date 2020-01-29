(window.webpackJsonp=window.webpackJsonp||[]).push([[1051],{2358:function(e,t,r){"use strict";r.r(t),r.d(t,"SearchBarExamples",(function(){return h}));var n,a=r(1),o=r(0),s=r(164),c=r(623),i=r(66),l=r(775),p=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=function(e){function t(t){var r=e.call(this,t)||this;return r.state={value:"",disabled:!1,searching:!1},r}return p(t,e),t.prototype.render=function(){var e=this;return a.createElement(c.a,{id:"search-bar-1",placeholder:"Search awesome things",value:this.state.value,disabled:this.state.disabled,searching:this.state.searching,onChange:function(t){return e.setState({value:t.target.value})},onSearch:function(t){e.setState({searching:!0}),setTimeout((function(){e.setState({searching:!1}),document.querySelector("#search-bar-1").focus()}),800)}})},t}(a.Component),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){return a.createElement("div",{className:"mt2"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"SearchBar disabled"),a.createElement("div",{className:"text-dark-grey"},a.createElement(c.a,{id:"search-bar-2",disabled:!0,placeholder:"Currently disabled.",onSearch:function(){return alert("Implement your own search logic with the onSearch prop.")}}))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"SearchBar searching"),a.createElement("div",{className:"text-dark-grey"},a.createElement(c.a,{id:"search-bar-3",searching:!0,placeholder:"Searching for something",onSearch:function(){return alert("Implement your own search logic with the onSearch prop.")}}))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"SearchBar not connected but fully working"),a.createElement("div",{className:"text-dark-grey"},a.createElement(u,null))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"SearchBarConnected"),a.createElement("div",{className:"text-dark-grey"},a.createElement(l.a,{id:"search-bar-4",placeholder:"Type something and press enter, or click the loupe",onSearch:function(e){s.a.dispatch(Object(i.f)("search-bar-4",!0)),setTimeout((function(){s.a.dispatch(Object(i.f)("search-bar-4",!1)),document.querySelector("#search-bar-4").focus()}),800)}}),a.createElement("button",{type:"button",onClick:function(){var e=Object(o.findWhere)(s.a.getState().searchBars,{id:"search-bar-4"});s.a.dispatch(Object(i.e)("search-bar-4",!e.disabled))}},"Toggle disabled state"))))},t}(a.Component)},623:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n,a=r(9),o=r(1),s=r(4),c=r(82),i=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentWillMount=function(){this.props.onMount&&this.props.onMount()},t.prototype.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount()},t.prototype.render=function(){var e=this,t=this.props,r=t.minWidth,n=t.maxWidth;return o.createElement("div",{className:this.getContainerClasses(),style:{minWidth:r,maxWidth:n}},o.createElement("input",{id:this.props.id,type:"text",className:this.getInputClasses(),placeholder:this.props.placeholder,disabled:this.props.disabled||this.props.searching,value:this.props.value,onKeyUp:function(t){return t.keyCode===s.b.enter&&e.search()},onChange:function(t){return e.props.onChange&&e.props.onChange(t)}}),o.createElement("div",{className:"search-bar-icon-container"},this.getSearchIcon()))},t.prototype.getContainerClasses=function(){return a("search-bar",{"search-bar-disabled":this.props.disabled,"search-bar-loading":this.props.searching},this.props.containerClassNames)},t.prototype.getInputClasses=function(){return a("search-bar-input",this.props.inputClassNames)},t.prototype.getSearchIcon=function(){var e=this,t=this.props.searching?o.createElement("div",{className:"search-bar-spinner"}):o.createElement(c.a,{svgName:"search",svgClass:this.props.disabled?"fill-light-grey":"fill-medium-blue"});return this.props.searching||this.props.disabled?t:o.createElement("span",{onClick:function(){return e.search()}},t)},t.prototype.search=function(){this.props.disabled||this.props.searching||this.props.onSearch(this.props.value)},t.defaultProps={placeholder:"",disabled:!1,searching:!1,value:"",minWidth:"500px",maxWidth:"500px"},t}(o.Component)},775:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(55),a=r(0),o=r(56),s=r(623),c=r(66),i=Object(n.b)((function(e,t){var r=Object(a.findWhere)(e.searchBars,{id:t.id});return{disabled:r&&r.disabled,value:r&&r.value,searching:r&&r.searching}}),(function(e,t){return{onMount:function(){return e(Object(c.b)(t.id,t.disabledOnMount))},onUnmount:function(){return e(Object(c.c)(t.id))},onChange:function(r){return e(Object(c.d)(t.id,r.target.value))}}}),o.c.mergeProps)(s.a)}}]);
//# sourceMappingURL=1051.bundle.js.map