(window.webpackJsonp=window.webpackJsonp||[]).push([[1007],{1162:function(e,t,r){"use strict";r.r(t),r.d(t,"TableHOCExamples",(function(){return O})),r.d(t,"generateDataWithFacker",(function(){return C})),r.d(t,"generateTableRow",(function(){return B}));var a=r(2037),n=r(4),i=r(0),o=r(7),c=r(1),l=r(9),u=r(545),d=r(276),m=r(110),s=r(201),f=r(204),y=r(205),b=r(206),p=r(202),x=r(207),h=r(139),v=r(208),g=function(){return(g=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},w=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,i=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)o.push(a.value)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return o},E=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(w(arguments[t]));return e},O=function(){return i.createElement(P,null)},C=function(e){return c.map(c.range(e),(function(e){Object(a.seed)(e+1);var t=a.helpers.contextualCard();return{city:t.address.city,email:t.email,username:t.username,dateOfBirth:t.dob,id:u.a.generate()}}))},D=C(200),j=[{primary:!0,icon:"edit",name:"edit",enabled:!0,trigger:function(){return alert("trigger on action")},callOnDoubleClick:!0},{primary:!1,icon:"view",name:"view",enabled:!0},{primary:!1,icon:"copy",name:"copy",enabled:!0},{primary:!1,icon:"delete",name:"delete",enabled:!0,unrepeatable:!0,requiresConfirmation:{confirmLabel:"wanna do it ?",confirmType:"danger",buttonLabels:{confirm:"Confirm",cancel:"Cancel"}}}],k=function(e){return i.createElement("thead",null,i.createElement("tr",null,i.createElement(m.a,{id:"city",tableId:e},"City"),i.createElement(m.a,{id:"email",tableId:e},"Email"),i.createElement(m.a,{id:"username",tableId:e},"Username"),i.createElement("th",null,"Date of birth")))},B=function(e,t){return e.map((function(e){return i.createElement(f.a,{id:e.id,tableId:t,key:e.id,actions:j},i.createElement("td",{key:"city"},e.city),i.createElement("td",{key:"email"},e.email.toLowerCase()),i.createElement("td",{key:"username"},e.username.toLowerCase()),i.createElement("td",{key:"date-of-birth"},e.dateOfBirth.toLocaleDateString()))}))},L={id:"firstPredicate",prepend:i.createElement("span",{className:"mr1 text-medium-grey"},"prepend:"),values:[{displayValue:"All",value:"",selected:!0},{displayValue:D[2].city,value:D[2].city},{displayValue:D[1].email,value:D[1].email}]},S=c.compose(Object(h.a)(g(g({},L),{matchPredicate:function(e,t){var r=e===t.city,a=e===t.email;return!e||r||a}})),Object(p.a)(),Object(v.a)({sort:function(e,t,r,a){if(e){if(r[e]instanceof Date){var n=r[e]-a[e];return t?n:-1*n}var i=r[e].toLowerCase().localeCompare(a[e].toLowerCase());return t?i:-1*i}return 0}}),b.a.apply(void 0,E((function(){return{datesSelectionBoxes:d.e,matchDates:function(e,t,r){return c.isUndefined(r)||t<=e.dateOfBirth&&e.dateOfBirth<=r},years:E(l.b.getPreviousYears(100),[l.b.currentYear.toString()]),initialDateRange:[n().subtract(75,"years").toDate(),n().toDate()]}}))),Object(x.a)({perPageNumbers:[3,5,10]}),Object(y.a)())(s.a),P=Object(o.b)((function(){return{data:D}}))((function(e){var t=e.data,r="TableWithActionsAndDataFiltering";return i.createElement(S,{id:r,className:"table",data:t,renderBody:function(e){return B(e,r)},tableHeader:k(r),showBorderTop:!0})}))},545:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a=function(){function e(){}return e.generate=function(){var e=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?r:3&r|8).toString(16)}))},e}()}}]);
//# sourceMappingURL=1007.bundle.js.map