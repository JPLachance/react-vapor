(window.webpackJsonp=window.webpackJsonp||[]).push([[1050],{2315:function(e,t,l){"use strict";l.r(t),l.d(t,"MultiSelectExamples",(function(){return p}));var a,r=l(0),n=l(1),c=l(124),s=l(536),m=l(690),o=l(653),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var l in t)t.hasOwnProperty(l)&&(e[l]=t[l])})(e,t)},function(e,t){function l(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(l.prototype=t.prototype,new l)}),u=[{displayValue:"Test",value:"0"},{displayValue:"Test One",value:"1"},{displayValue:"Disabled",value:"disabled",disabled:!0},{displayValue:"Three",value:"3"},{displayValue:"Four",value:"4"},{displayValue:"Five",value:"5"},{displayValue:"Six",value:"6"},{displayValue:"Seven",value:"7"}],d=[{id:s.a.generate(),option:{content:"All"},selected:!0},{id:s.a.generate(),option:{content:"even"}},{id:s.a.generate(),option:{content:"odd"}}],p=function(e){function t(t){var l=t.props,a=t.state,c=e.call(this,l,a)||this,s=n.map(u,(function(e){return n.clone(e)}));s[0].selected=!0;var m=n.map(u,(function(e){return n.extend({},e,{append:{content:function(){return r.createElement("span",{className:"text-medium-grey ml1"},e.value)}}})}));return m[0].selected=!0,c.state={first:n.clone(u),drag:n.clone(u),second:s,hoc:m},c}return i(t,e),t.prototype.render=function(){var e=this;return r.createElement("div",{className:"mb2"},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Simple Multi Select without items"),r.createElement("br",null),r.createElement(o.a,{id:s.a.generate(),items:[]})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Simple Multi Select with only one items"),r.createElement("br",null),r.createElement(o.a,{id:s.a.generate(),items:[{value:"Single Item"}]})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select with filter, disabled"),r.createElement("br",null),r.createElement(m.a,{id:s.a.generate(),items:[{value:"Single Item"}],disabled:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Simple Multi Select with Custom Strings"),r.createElement("br",null),r.createElement(o.a,{id:s.a.generate(),items:this.state.first,placeholder:"Select something",deselectAllTooltipText:"Remove all"})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Sortable Multi Select with Custom Strings"),r.createElement("br",null),r.createElement(o.a,{id:s.a.generate(),items:this.state.first,placeholder:"Select something",deselectAllTooltipText:"Remove all",sortable:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Filter"),r.createElement("br",null),r.createElement(m.a,{id:s.a.generate(),items:this.state.hoc})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Filter and Custom Values"),r.createElement("br",null),r.createElement(m.a,{id:s.a.generate(),items:this.state.hoc,customValues:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Filter, Custom Values and no items"),r.createElement("br",null),r.createElement(m.a,{id:s.a.generate(),items:[],customValues:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Filter, Custom Values and list of items selectable"),r.createElement("br",null),r.createElement(m.a,{id:s.a.generate(),items:[{value:"a"},{value:"b"}],customValues:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Filter and list of items selectable"),r.createElement("br",null),r.createElement(m.a,{id:s.a.generate(),items:[{value:"a"},{value:"b"}]})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Filter and default list"),r.createElement("br",null),r.createElement(m.a,{id:s.a.generate(),defaultCustomValues:["c","d"],items:[{value:"a"},{value:"b"}]})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Filter, default list and Custom Values"," "),r.createElement("br",null),r.createElement(m.a,{id:s.a.generate(),defaultCustomValues:["c","d"],items:[{value:"a"},{value:"b"}],customValues:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Filter that only match display value"),r.createElement("br",null),r.createElement(m.a,{id:s.a.generate(),items:this.state.hoc,matchFilter:function(e,t){return-1!==Object(c.b)(t.displayValue).indexOf(e)}})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Predicates"),r.createElement("br",null),r.createElement(m.b,{id:s.a.generate(),items:this.state.hoc,options:d,matchPredicate:function(t,l){return e.matchPredicate(t,l)}})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With 500px width"),r.createElement("br",null),r.createElement(o.a,{id:s.a.generate(),items:this.state.hoc,multiSelectStyle:{width:"500px"}})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select with width 100%"),r.createElement("br",null),r.createElement(o.a,{id:"test",items:this.state.hoc,selectClasses:"mod-width-100",multiSelectStyle:{width:"100%"}})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Filter and Predicates"),r.createElement("br",null),r.createElement(m.c,{id:s.a.generate(),items:this.state.hoc,options:d,matchPredicate:function(t,l){return e.matchPredicate(t,l)}})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Filter, Predicate and Custom Values"),r.createElement("br",null),r.createElement(m.c,{id:s.a.generate(),items:this.state.hoc,options:d,matchPredicate:function(t,l){return e.matchPredicate(t,l)},customValues:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Multi Select With Filter, default list and Custom Values"," "),r.createElement("br",null),r.createElement(m.a,{id:s.a.generate(),defaultCustomValues:["b".repeat(100)],items:[{value:"a".repeat(100)}],customValues:!0})))},t.prototype.matchPredicate=function(e,t){var l=parseInt(t.value,10);return e===d[0].id||(e===d[1].id?l%2==0:e!==d[2].id||l%2==1)},t.description="A multi-select component allows users to select one or more options from a set of predefined options, or, if relevant, to add custom options.",t}(r.Component)}}]);
//# sourceMappingURL=1050.bundle.js.map