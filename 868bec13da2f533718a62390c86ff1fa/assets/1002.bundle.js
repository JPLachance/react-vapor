(window.webpackJsonp=window.webpackJsonp||[]).push([[1002],{2444:function(e,t,a){"use strict";a.r(t),a.d(t,"FeedBackExamples",(function(){return l}));var n=a(0),s=a(94),r=a(178),c=a(696),o=a(808),l=function(){return n.createElement(r.a,{title:"FeedBack Examples"},n.createElement(i,null),n.createElement(p,null))},i=function(){return n.createElement(r.a,{level:2,title:"UserFeedBacks",description:"UserFeedBacks will render with these state but won't render while in 'VALID' state."},n.createElement(r.a,{level:3},n.createElement(s.a,{name:"Warning Feedback",enabled:!0,className:"btn"}),n.createElement(o.a,{extraClasses:["mt1"],state:"WARNING",displayOnShow:"block",feedbackText:"UserFeedback on state WARNING"})),n.createElement(r.a,{level:3},n.createElement(s.a,{name:"Error FeedBack",enabled:!0,className:"btn"}),n.createElement(o.a,{extraClasses:["mt1"],state:"ERROR",displayOnShow:"block",feedbackText:"UserFeedback on state ERROR"})),n.createElement(r.a,{level:3},n.createElement(s.a,{name:"Side FeedBack",enabled:!0,className:"btn"}),n.createElement(o.a,{extraClasses:["ml1"],state:"WARNING",displayOnShow:"inline-block",feedbackText:"UserFeedback placed beside its related element"})),n.createElement(r.a,{level:3},n.createElement(s.a,{name:"styled FeedBack",enabled:!0,className:"btn"}),n.createElement(o.a,{extraClasses:["ml2","bold","italic"],state:"WARNING",displayOnShow:"inline-block",feedbackText:"extra classes for styling can be passed to the extraClasses prop"})))},p=function(){return n.createElement(r.a,{level:2,title:"SyncFeedBacks",description:"SyncFeedBack will render with these states but won't render while in 'NONE' state."},n.createElement(r.a,{level:3,title:"An invisible feedback",className:"mb3"},n.createElement(c.a,{state:c.b.NONE})),n.createElement(r.a,{level:3,title:"SyncFeedBacks with their default messages"},n.createElement(c.a,{state:c.b.SYNCING}),n.createElement(c.a,{state:c.b.SUCCESS}),n.createElement(c.a,{state:c.b.ERROR})),n.createElement(r.a,{level:3,title:"SyncFeedBack with custom messages"},n.createElement(c.a,{state:c.b.SYNCING,feedback:"This message is a SyncFeedback component on state SYNCING"}),n.createElement(c.a,{state:c.b.SUCCESS,feedback:"This message is a SyncFeedback component on state SUCCESS"}),n.createElement(c.a,{state:c.b.ERROR,feedback:"This message is a SyncFeedback component on state ERROR"})))}},696:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var n,s=a(0),r=a(13),c=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),o={SYNCING:"SYNCING",SUCCESS:"SUCCESS",ERROR:"ERROR",NONE:"NONE"},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){var e=["sync-feedback"];return this.props.state===o.ERROR?e.push("mod-error"):this.props.state===o.SUCCESS&&e.push("mod-success"),s.createElement("div",{className:e.join(" ")},this.renderIcon(),this.renderContent())},t.prototype.renderIcon=function(){return this.props.state===o.SYNCING?s.createElement("span",{className:"status-dot syncing sync-feedback-icon"}):this.props.state===o.SUCCESS?s.createElement(r.a,{svgName:"check",className:"sync-feedback-icon",svgClass:"icon"}):this.props.state===o.ERROR?s.createElement(r.a,{svgName:"clear",className:"sync-feedback-icon",svgClass:"icon"}):null},t.prototype.renderContent=function(){return this.props.state===o.SYNCING?s.createElement("span",{className:"sync-feedback-text"},this.props.feedback||"Saving changes..."):this.props.state===o.SUCCESS?s.createElement("span",{className:"sync-feedback-text"},this.props.feedback||"Changes saved"):this.props.state===o.ERROR?s.createElement("span",{className:"sync-feedback-text"},this.props.feedback||"Changes could not be saved."):null},t}(s.Component)},808:function(e,t,a){"use strict";var n=a(0),s="block",r="hidden";a.d(t,"a",(function(){return d}));var c,o=(c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),l={VALID:"VALID",WARNING:"WARNING",ERROR:"ERROR"},i="text-dark-grey",p="text-red",d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this.getUserFeedbackStyle();return n.createElement("div",{className:e.classes},this.props.feedbackText)},t.prototype.getUserFeedbackStyle=function(){var e=this.props.state in l?this.props.state:l.VALID,t=this.props.displayOnShow||s,a=e===l.VALID?r:t,n=e===l.ERROR?p:i;return{classes:(this.props.extraClasses||[]).concat(n,a).join(" ")}},t}(n.Component)}}]);
//# sourceMappingURL=1002.bundle.js.map