(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{437:function(e,t,o){"use strict";o.r(t),o.d(t,"ItemFilterConnectedExamples",(function(){return m}));var r,n=o(0),l=o(9),i=o(33),a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c="item-filter-connected-example",m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.componentDidMount=function(){i.a.dispatch(Object(l.filterItems)(c,"Item")),i.a.dispatch(Object(l.filterItems)(c+"1","Very looooooooooooong item")),i.a.dispatch(Object(l.filterItems)(c+"2","Very looooooooooooong item"))},t.prototype.render=function(){return n.createElement("div",{className:"mt2"},n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Action bar with an item filter and Redux state"),n.createElement(l.ActionBarConnected,{id:c,itemFilterLabel:"Item filter",onClearItemFilter:function(){return alert("Item filter was cleared")}})),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Action bar with an item filter cropped on the right and with Redux state"),n.createElement(l.ActionBarConnected,{id:c+"1",itemFilterLabel:"Item filter",itemFilterCropLength:10,onClearItemFilter:function(){return alert("Item filter was cleared")}})),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Action bar with an item filter cropped on the left and with Redux state"),n.createElement(l.ActionBarConnected,{id:c+"2",itemFilterLabel:"Item filter",itemFilterCropLength:-10,onClearItemFilter:function(){return alert("Item filter was cleared")}})),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Action bar with an item filter cropped on the left with Redux state and tooltip options"),n.createElement(l.ActionBarConnected,{id:c+"3",itemFilterLabel:"Item filter",itemTooltipProps:{title:"tooltip",placement:"top"},itemFilterCropLength:-10,onClearItemFilter:function(){return alert("Item filter was cleared")}})))},t}(n.Component)}}]);
//# sourceMappingURL=148.bundle.js.map