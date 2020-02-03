(window.webpackJsonp=window.webpackJsonp||[]).push([[1019],{2338:function(t,n,e){"use strict";e.r(n),e.d(n,"OptionsCycleExamples",(function(){return s}));var o=e(1),r=e(455),i=e(596),s=function(){return o.createElement(c,null)},p=["Option 1","Option 2","Option 3","Option 4"],c=function(){return o.createElement(r.a,null,o.createElement(r.a,{level:2,title:"Option cycle"},o.createElement(i.a,{id:"Cycle-1",options:p})),o.createElement(r.a,{level:2,title:"Options Cycle starting at 2 with no wrap around"},o.createElement(i.a,{id:"Cycle-2",options:p,startAt:1})),o.createElement(r.a,{level:2,title:"Option cycle with custom styles"},o.createElement(i.a,{id:"Cycle-3",options:p,previousClassName:"btn mod-border w4",buttonClassName:"btn ml1",nextClassName:"btn mod-border ml1 w4"})))}},455:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var o=e(9),r=e(1),i=function(){return(i=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)},s=function(t){var n=t.children,e=t.title,s=t.description,p=t.className,c=t.mods,a=t.level,u=void 0===a?1:a,l={className:"text-medium-blue mb1",children:e},d="h"+(u+1);return r.createElement("fieldset",{className:o(p,c,"level-"+u+" form-group mod-padding-children")},e&&r.createElement(d,i({},l)),s&&r.createElement("p",{className:"description"},s),n)}},545:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o,r=e(9),i=e(1),s=e(82),p=(o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),c=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return p(n,t),n.prototype.goToPreviousOption=function(){if(this.props.onChange){var t=this.props.currentOption?this.props.currentOption-1:this.props.options.length-1;this.props.onChange(t)}},n.prototype.goToNextOption=function(){if(this.props.onChange){var t=this.props.currentOption===this.props.options.length-1?0:this.props.currentOption+1;this.props.onChange(t)}},n.prototype.componentDidMount=function(){var t,n;null===(n=(t=this.props).onRender)||void 0===n||n.call(t)},n.prototype.componentWillUnmount=function(){var t,n;null===(n=(t=this.props).onDestroy)||void 0===n||n.call(t)},n.prototype.render=function(){var t=this;return i.createElement("div",{className:r("options-cycle text-medium-blue",this.props.className,{"mod-inline":this.props.isInline})},i.createElement("button",{type:"button",className:r("options-cycle-button previous-option",this.props.previousClassName),onClick:function(){return t.goToPreviousOption()},disabled:!this.props.wrapAround&&0===this.props.currentOption},i.createElement(s.a,{svgName:"arrow-left-rounded",svgClass:"icon fill-dark-blue mod-16"})),i.createElement("span",{className:r("options-cycle-option",this.props.buttonClassName)},this.props.options[this.props.currentOption]),i.createElement("button",{type:"button",className:r("options-cycle-button next-option",this.props.nextClassName),onClick:function(){return t.goToNextOption()},disabled:!this.props.wrapAround&&this.props.currentOption===this.props.options.length-1},i.createElement(s.a,{svgName:"arrow-right-rounded",svgClass:"icon fill-dark-blue mod-16"})))},n.defaultProps={currentOption:0,wrapAround:!0},n}(i.Component)},596:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e(56),r=e(55),i=e(545),s=e(59),p=e(597),c=Object(o.b)((function(t,n){return{currentOption:p.a.getCurrentOption(t,{id:n.id,startAt:n.startAt})}}),(function(t,n){return{onRender:function(){return t(Object(s.b)(n.id,n.startAt))},onDestroy:function(){return t(Object(s.d)(n.id))},onChange:function(e){return t(Object(s.c)(n.id,e))}}}),r.c.mergeProps)(i.a)},597:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e(0),r={getCurrentOption:function(t,n){var e=o.findWhere(t.optionsCycles,{id:n.id});return o.result(e,"currentOption",n.startAt||0)}}}}]);
//# sourceMappingURL=1019.bundle.js.map