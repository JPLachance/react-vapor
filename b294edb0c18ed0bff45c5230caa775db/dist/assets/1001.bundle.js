(window.webpackJsonp=window.webpackJsonp||[]).push([[1001],{1017:function(t,e,n){var r=n(602);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n(74)(r,o);r.locals&&(t.exports=r.locals),t.hot.accept(602,(function(){var e=n(602);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(e)})),t.hot.dispose((function(){i()}))},2351:function(t,e,n){"use strict";n.r(e),n.d(e,"FooterExample",(function(){return p}));var r=n(786),o=n(1),i=n(449),a=n(455),s=n(688),c=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},l=r({count:200}),p=function(){return o.createElement(u,null)},u=function(){var t=c(o.useState(!1),2),e=t[0],n=t[1];return o.createElement(a.a,{title:"A sticky footer example"},o.createElement(i.a,{name:"toggle sticky footer",onClick:function(){return n(!e)}}),o.createElement("div",{className:"mt2"},l),o.createElement(s.a,{className:"sticky-footer-mod-header",isOpened:e},o.createElement(i.a,{primary:!0,name:"fake button   "})))}},449:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r,o=n(9),i=n(1),a=n(0),s=n(83),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},p=["small","classes","enabled","name","link","target","primary","tooltip","tooltipPlacement","hideDisabled","onClick"],u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.onClick=function(){this.props.onClick&&this.props.enabled&&this.props.onClick()},e.prototype.getTemplate=function(t){var e,n=this,r=l(l({},a.omit(this.props,p)),{disabled:!this.props.enabled,onClick:function(){return n.onClick()}});return this.props.link?(r=a.extend(r,{target:this.props.target,rel:"noopener noreferrer",href:this.props.link}),e=i.createElement("a",l({className:t+" btn-container"},r),this.props.name,this.props.children)):e=i.createElement("button",l({className:t},r),this.props.name,this.props.children),a.isEmpty(this.props.tooltip)?e:i.createElement(s.a,{title:this.props.tooltip,placement:this.props.tooltipPlacement,className:"btn-container"},e)},e.prototype.getClasses=function(){return o("btn",{"mod-primary":this.props.primary,"mod-small":this.props.small,"state-disabled disabled":!this.props.enabled,"text-medium-grey":!this.props.primary&&!this.props.enabled},this.props.classes)},e.prototype.render=function(){return this.getTemplate(this.getClasses())},e.defaultProps={enabled:!0,name:"",tooltip:"",primary:!1,small:!1,tooltipPlacement:"right",target:""},e}(i.Component)},455:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(9),o=n(1),i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},a=function(t){var e=t.children,n=t.title,a=t.description,s=t.className,c=t.mods,l=t.level,p=void 0===l?1:l,u={className:"text-medium-blue mb1",children:n},d="h"+(p+1);return o.createElement("fieldset",{className:r(s,c,"level-"+p+" form-group mod-padding-children")},n&&o.createElement(d,i({},u)),a&&o.createElement("p",{className:"description"},a),e)}},602:function(t,e,n){(e=t.exports=n(73)(!1)).push([t.i,"/* ----------- Deprecated Palette ----------- */\n.StickyFooter-stickyFooter-1xhGV9I_nUv3jgB_VJNY8z {\n  position: -webkit-sticky;\n  position: sticky;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #f1f3f4;\n  border-radius: 0 0 2px 2px;\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n  visibility: hidden;\n  opacity: 0;\n  transition: width 0.1s ease-in-out, opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out, width 0.1s ease-in-out, opacity 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out, width 0.1s ease-in-out, opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\n  will-change: transform; }\n\n.StickyFooter-stickyFooterOpened-1khYQMi5wJ0Iu-c_wzbjb3 {\n  height: unset;\n  padding: 12px 20px;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  visibility: visible;\n  opacity: 1; }\n\n.sticky-footer-mod-header {\n  margin-right: -40px;\n  margin-left: -40px; }\n",""]),e.locals={stickyFooter:"StickyFooter-stickyFooter-1xhGV9I_nUv3jgB_VJNY8z",stickyFooterOpened:"StickyFooter-stickyFooterOpened-1khYQMi5wJ0Iu-c_wzbjb3"}},688:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r,o=n(9),i=n(1),a=n(1017),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){var t,e=this.props,n=e.id,r=e.className,s=e.isOpened;return i.createElement("div",{id:n,className:o(a.stickyFooter,(t={},t[a.stickyFooterOpened]=s,t),r)},this.props.children)},e.ID="StickyFooter",e.defaultProps={id:e.ID},e}(i.Component)},786:function(t,e,n){(function(e){function r(t){return-1===t.indexOf("s",t.length-1)?t+"s":t}t.exports=function(){var o=arguments.length?arguments[0]:{},i=o.count||1,a=o.units||"sentences",s=o.sentenceLowerBound||5,c=o.sentenceUpperBound||15,l=o.paragraphLowerBound||3,p=o.paragraphUpperBound||7,u=o.format||"plain",d=o.words||n(787).words,m=o.random||Math.random,f=o.suffix;if(!f){var h=t.exports,y="undefined"!=typeof product&&"ReactNative"===product.navigator,b=void 0!==e&&"win32"===e.platform;f=!y&&h&&b?"\r\n":"\n"}function g(t,e){return Math.floor(m()*(e-t+1)+t)}function v(t){return t[g(0,t.length-1)]}function k(t,e,n){for(var r="",o={min:0,max:g(e,n)};o.min<o.max;)r+=" "+v(t),o.min++;return r.length&&(r=(r=r.slice(1)).charAt(0).toUpperCase()+r.slice(1)),r}function w(t,e,n,r,o){for(var i="",a={min:0,max:g(e,n)};a.min<a.max;)i+=". "+k(t,r,o),a.min++;return i.length&&(i=i.slice(2),i+="."),i}a=r(a.toLowerCase());var x,O,_={min:0,max:i},E="";for("html"===u&&(x="<p>",O="</p>");_.min<_.max;){switch(a.toLowerCase()){case"words":E+=" "+v(d);break;case"sentences":E+=". "+k(d,s,c);break;case"paragraphs":var C=w(d,l,p,s,c);"html"===u?(C=x+C+O,_.min<_.max-1&&(C+=f)):_.min<_.max-1&&(C+=f+f),E+=C}_.min++}if(E.length){var j=0;0===E.indexOf(". ")?j=2:0!==E.indexOf(".")&&0!==E.indexOf(" ")||(j=1),E=E.slice(j),"sentences"===a&&(E+=".")}return E}}).call(this,n(822))},787:function(t,e){t.exports={words:["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]}}}]);
//# sourceMappingURL=1001.bundle.js.map