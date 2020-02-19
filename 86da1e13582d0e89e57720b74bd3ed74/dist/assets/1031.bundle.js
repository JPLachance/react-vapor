(window.webpackJsonp=window.webpackJsonp||[]).push([[1031],{2357:function(e,t,a){"use strict";a.r(t),a.d(t,"PartialStringMatchExamples",(function(){return s}));var r,n=a(1),o=a(694),l=a(695),c=a(172),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return n.createElement("div",{className:"mt2"},n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"PartialStringMatch without match"),n.createElement("div",{className:"text-dark-grey"},n.createElement(c.a,{partialMatch:"I do not match"},"I do not have a match"))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"PartialStringMatch with partial match undefined"),n.createElement("div",{className:"text-dark-grey"},n.createElement(c.a,null,"I do not have a match because partialMatch was not passed as prop"))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"PartialStringMatch with partial match"),n.createElement("div",{className:"text-dark-grey"},n.createElement(c.a,{partialMatch:"I match at the"},"I match at the beginning")),n.createElement("div",{className:"text-dark-grey"},n.createElement(c.a,{partialMatch:"the end"},"I match at the end")),n.createElement("div",{className:"text-dark-grey"},n.createElement(c.a,{partialMatch:"in the"},"I match in the middle")),n.createElement("div",{className:"text-dark-grey"},n.createElement(c.a,{partialMatch:"match multiple"},"I match multiple times because I match multiple substrings"))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"PartialStringMatch with partial match (caseInsensitive)"),n.createElement("div",{className:"text-dark-grey"},n.createElement(c.a,{partialMatch:"partial match".toUpperCase(),caseInsensitive:!0},"I match even if my partial match is in uppercase"))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"PartialStringMatch with dangerous match"),n.createElement("div",{className:"text-dark-grey"},n.createElement(c.a,{wholeString:'Hey <script>alert("I may be dangerous")<\/script>',partialMatch:'<script>alert("I may be dangerous")<\/script>'}))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"PartialStringMatch with children"),n.createElement("div",{className:"text-dark-grey"},n.createElement(c.a,{key:"a",partialMatch:"o"},n.createElement("div",null,"Hello"),n.createElement("br",null),n.createElement("div",null,"World")),n.createElement(c.a,{key:"b",caseInsensitive:!0,partialMatch:"hello"},n.createElement("div",{className:"py2"},n.createElement("div",{className:"my2"},"Hello"," ",n.createElement("span",null,"is this working with deep structure? ",n.createElement("span",null,"(hello, still reading?)"))),n.createElement(o.a,null,"What about custom components? ",n.createElement(l.a,null,"Can they contain hello?")))))))},t}(n.Component)},557:function(e,t,a){(t=e.exports=a(75)(!1)).push([e.i,"/* ----------- Deprecated Palette ----------- */\n.InfoBox-infoBox-1wF-uPZe11iTV_lVSZHpp7 {\n  padding: 1rem 1rem 1rem 1.5rem;\n  font-size: 14px;\n  line-height: 16px;\n  border-left: 4px solid #0d80ef;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); }\n\n.InfoBox-infoBoxFooter-128KFL1YtKWa5ExR2rCyzz {\n  margin-top: 1.5rem; }\n",""]),t.locals={infoBox:"InfoBox-infoBox-1wF-uPZe11iTV_lVSZHpp7",infoBoxFooter:"InfoBox-infoBoxFooter-128KFL1YtKWa5ExR2rCyzz"}},670:function(e,t,a){var r=a(557);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(76)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(557,(function(){var t=a(557);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},694:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r,n=a(9),o=a(1),l=a(670),c=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),i=function(){return(i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return o.createElement("div",i({},this.props,{className:n("text-oxford-blue bg-onahau",this.props.className,l.infoBox)}),this.props.children)},t}(o.PureComponent)},695:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r,n=a(9),o=a(1),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),c=function(){return(c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){return o.createElement("a",c({},this.props,{className:n("text-oxford-blue underline",this.props.className)}),this.props.children)},t}(o.PureComponent)}}]);
//# sourceMappingURL=1031.bundle.js.map