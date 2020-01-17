(window.webpackJsonp=window.webpackJsonp||[]).push([[1004],{2443:function(t,e,n){"use strict";n.r(e),n.d(e,"ToastExamples",(function(){return f}));var r=n(0),o=n(7),a=n(94),c=n(178),i=n(195),s=n(74),l=n(599),u=n(697),m=function(){return(m=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},p=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)c.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return c},f=function(){return r.createElement(c.a,null,r.createElement(d,null),r.createElement(E,null))},d=function(){var t=p(r.useState({Success:!1,Warning:!1,Error:!1,Timed:!1}),2),e=t[0],n=t[1];return r.createElement(r.Fragment,null,r.createElement(c.a,{level:2,title:"Toasts with a local state"},r.createElement(a.a,{enabled:!0,className:"btn",name:"Top left",onClick:function(){return n(m(m({},e),{Success:!e.Success}))}}),r.createElement(a.a,{enabled:!0,className:"btn",name:"Middle Earth",onClick:function(){return n(m(m({},e),{Warning:!e.Warning}))}}),r.createElement(a.a,{className:"btn",name:"Top right",onClick:function(){return n(m(m({},e),{Error:!e.Error}))}}),r.createElement(a.a,{className:"btn",name:"Bottom",onClick:function(){return n(m(m({},e),{Timed:!e.Timed}))}})),r.createElement(l.a,{left:!0},e.Success&&r.createElement(i.a,{key:"toast-1",id:"toast-1",title:"Timed Sucess !!",dismiss:1e3,onClose:function(){return n(m(m({},e),{Success:!1}))}})),r.createElement(l.a,null,e.Warning&&r.createElement(i.a,{key:"toast-1",id:"toast-1",title:"Warning !!",type:"Warning",onClose:function(){return n(m(m({},e),{Warning:!1}))}})),r.createElement(l.a,{right:!0},e.Error&&r.createElement(i.a,{key:"toast-1",id:"toast-1",title:"Error !!",type:"Error",onClose:function(){return n(m(m({},e),{Error:!1}))}})),r.createElement(l.a,{bottom:!0},e.Timed&&r.createElement(i.a,{key:"toast-1",id:"toast-1",title:"An eternal Success !",dismissible:!1,onClose:function(){return n(m(m({},e),{Timed:!1}))}})))},E=Object(o.b)(null,(function(t){return{renderToast:function(e,n,r){return t(Object(s.b)(e,n,r))}}}))((function(t){var e=t.renderToast,n=function(){return r.createElement("ul",null,r.createElement("li",{style:{marginBottom:"5px"}},r.createElement("a",{href:"#"},"Some Link")),r.createElement("li",null,"Complex React Component"))};return r.createElement(r.Fragment,null,r.createElement(c.a,{level:2,title:"Toasts with a redux store"},r.createElement(a.a,{enabled:!0,className:"btn",name:"Success",onClick:function(){return e("containerId","Success !")}}),r.createElement(a.a,{enabled:!0,className:"btn",name:"Warning   ",onClick:function(){return e("containerId","Warning !",{type:"Warning"})}}),r.createElement(a.a,{className:"btn",name:"Error",onClick:function(){return e("containerId","Error !",{type:"Error"})}}),r.createElement(a.a,{className:"btn",name:"Timed Success",onClick:function(){return e("containerId","Timed Success !",{dismiss:1e3})}}),r.createElement(a.a,{className:"btn",name:"custom JSX",onClick:function(){return e("containerId","Custom JSX !",{content:n})}}),r.createElement(a.a,{className:"btn",name:"custom String",onClick:function(){return e("containerId","Timed Success!",{content:"I am a string !"})}})),r.createElement(u.a,{id:"containerId"}))}))},599:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r,o=n(2),a=n(0),c=n(1),i=n(195),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender()},e.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},e.prototype.onCloseToast=function(t){this.props.onCloseToast&&this.props.onCloseToast(t)},e.prototype.render=function(){var t=this,e=o("toast-container",this.props.classes,{"mod-bottom":this.props.bottom,"mod-left":this.props.left,"mod-right":this.props.right}),n=this.props.toasts?c.map(this.props.toasts,(function(e){return a.createElement(i.a,l({key:e.id},e,{onClose:function(){var n,r;t.onCloseToast(e.id),null===(r=(n=e).onClose)||void 0===r||r.call(n)}}))})):this.props.children;return a.createElement("div",{className:e},n)},e}(a.Component)},697:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(7),o=n(1),a=n(6),c=n(74),i=n(599),s=Object(r.b)((function(t,e){return{toasts:(o.findWhere(t.toastContainers,{id:e.id})||{id:null,toasts:[]}).toasts}}),(function(t,e){return{onRender:function(){return t(Object(c.c)(e.id))},onDestroy:function(){return t(Object(c.e)(e.id))},onCloseToast:function(n){return t(Object(c.d)(e.id,n))}}}),a.c.mergeProps)(i.a)}}]);
//# sourceMappingURL=1004.bundle.js.map