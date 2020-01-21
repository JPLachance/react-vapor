(window.webpackJsonp=window.webpackJsonp||[]).push([[996,1054],{1170:function(t,n,e){"use strict";e.r(n),e.d(n,"ToastContentExample",(function(){return c}));var o,r=e(0),s=(o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),c=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return s(n,t),n.prototype.render=function(){return r.createElement("ul",null,r.createElement("li",{style:{marginBottom:"5px"}},r.createElement("a",{href:"#"},"Some Link")),r.createElement("li",null,"Complex React Component"))},n}(r.Component)},2442:function(t,n,e){"use strict";e.r(n),e.d(n,"ToastConnectedExamples",(function(){return f}));var o,r=e(0),s=e(6),c=e(195),i=e(74),a=e(697),p=e(1170),u=(o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),l=function(t,n,e,o){var r,s=arguments.length,c=s<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,n,e,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(s<3?r(c):s>3?r(n,e,c):r(n,e))||c);return s>3&&c&&Object.defineProperty(n,e,c),c},f=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return u(n,t),n.prototype.render=function(){var t=this;return r.createElement("div",{className:"mt2"},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Toasts"),r.createElement("div",null,r.createElement("button",{className:"btn",onClick:function(){t.props.addToast("some-id","Success!")}},"Basic"),r.createElement("button",{className:"btn",onClick:function(){t.props.addToast("some-id","Warning!",{type:c.b.Warning})}},"Warning"),r.createElement("button",{className:"btn",onClick:function(){t.props.addToast("some-id","Error!",{type:c.b.Error})}},"Error"),r.createElement("button",{className:"btn",onClick:function(){t.props.addToast("some-id","Timed Success!",{dismiss:1e3})}},"Timed"),r.createElement("button",{className:"btn",onClick:function(){t.props.addToast("some-id","Success!",{content:"String content"})}},"String Content"),r.createElement("button",{className:"btn",onClick:function(){t.props.addToast("some-id","Success!",{content:function(){return r.createElement("a",{href:"#"},"JSX Element")}})}},"JSX Content"),r.createElement("button",{className:"btn",onClick:function(){t.props.addToast("some-id","Success!",{content:p.ToastContentExample})}},"React Component Content"),r.createElement(a.a,{id:"some-id"}))))},n.description="Toasts display non-critical confirmation information related to user-performed operations (e.g., form submission).",n=l([Object(s.b)(null,{addToast:i.b})],n)}(r.Component)},599:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var o,r=e(2),s=e(0),c=e(1),i=e(195),a=(o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),p=function(){return(p=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)},u=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender()},n.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},n.prototype.onCloseToast=function(t){this.props.onCloseToast&&this.props.onCloseToast(t)},n.prototype.render=function(){var t=this,n=r("toast-container",this.props.classes,{"mod-bottom":this.props.bottom,"mod-left":this.props.left,"mod-right":this.props.right}),e=this.props.toasts?c.map(this.props.toasts,(function(n){return s.createElement(i.a,p({key:n.id},n,{onClose:function(){var e,o;t.onCloseToast(n.id),null===(o=(e=n).onClose)||void 0===o||o.call(e)}}))})):this.props.children;return s.createElement("div",{className:n},e)},n}(s.Component)},697:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var o=e(7),r=e(1),s=e(6),c=e(74),i=e(599),a=Object(o.b)((function(t,n){return{toasts:(r.findWhere(t.toastContainers,{id:n.id})||{id:null,toasts:[]}).toasts}}),(function(t,n){return{onRender:function(){return t(Object(c.c)(n.id))},onDestroy:function(){return t(Object(c.e)(n.id))},onCloseToast:function(e){return t(Object(c.d)(n.id,e))}}}),s.c.mergeProps)(i.a)}}]);
//# sourceMappingURL=996.bundle.js.map