(window.webpackJsonp=window.webpackJsonp||[]).push([[992,1007],{1162:function(e,t,a){"use strict";a.r(t),a.d(t,"TableHOCExamples",(function(){return E})),a.d(t,"generateDataWithFacker",(function(){return j})),a.d(t,"generateTableRow",(function(){return B}));var r=a(2037),n=a(4),i=a(0),c=a(7),l=a(1),o=a(9),u=a(545),d=a(276),m=a(110),s=a(201),f=a(204),b=a(205),y=a(206),p=a(202),x=a(207),h=a(139),v=a(208),g=function(){return(g=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},O=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,n,i=a.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(e){n={error:e}}finally{try{r&&!r.done&&(a=i.return)&&a.call(i)}finally{if(n)throw n.error}}return c},w=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(O(arguments[t]));return e},E=function(){return i.createElement(T,null)},j=function(e){return l.map(l.range(e),(function(e){Object(r.seed)(e+1);var t=r.helpers.contextualCard();return{city:t.address.city,email:t.email,username:t.username,dateOfBirth:t.dob,id:u.a.generate()}}))},C=j(200),k=[{primary:!0,icon:"edit",name:"edit",enabled:!0,trigger:function(){return alert("trigger on action")},callOnDoubleClick:!0},{primary:!1,icon:"view",name:"view",enabled:!0},{primary:!1,icon:"copy",name:"copy",enabled:!0},{primary:!1,icon:"delete",name:"delete",enabled:!0,unrepeatable:!0,requiresConfirmation:{confirmLabel:"wanna do it ?",confirmType:"danger",buttonLabels:{confirm:"Confirm",cancel:"Cancel"}}}],D=function(e){return i.createElement("thead",null,i.createElement("tr",null,i.createElement(m.a,{id:"city",tableId:e},"City"),i.createElement(m.a,{id:"email",tableId:e},"Email"),i.createElement(m.a,{id:"username",tableId:e},"Username"),i.createElement("th",null,"Date of birth")))},B=function(e,t){return e.map((function(e){return i.createElement(f.a,{id:e.id,tableId:t,key:e.id,actions:k},i.createElement("td",{key:"city"},e.city),i.createElement("td",{key:"email"},e.email.toLowerCase()),i.createElement("td",{key:"username"},e.username.toLowerCase()),i.createElement("td",{key:"date-of-birth"},e.dateOfBirth.toLocaleDateString()))}))},L={id:"firstPredicate",prepend:i.createElement("span",{className:"mr1 text-medium-grey"},"prepend:"),values:[{displayValue:"All",value:"",selected:!0},{displayValue:C[2].city,value:C[2].city},{displayValue:C[1].email,value:C[1].email}]},S=l.compose(Object(h.a)(g(g({},L),{matchPredicate:function(e,t){var a=e===t.city,r=e===t.email;return!e||a||r}})),Object(p.a)(),Object(v.a)({sort:function(e,t,a,r){if(e){if(a[e]instanceof Date){var n=a[e]-r[e];return t?n:-1*n}var i=a[e].toLowerCase().localeCompare(r[e].toLowerCase());return t?i:-1*i}return 0}}),y.a.apply(void 0,w((function(){return{datesSelectionBoxes:d.e,matchDates:function(e,t,a){return l.isUndefined(a)||t<=e.dateOfBirth&&e.dateOfBirth<=a},years:w(o.b.getPreviousYears(100),[o.b.currentYear.toString()]),initialDateRange:[n().subtract(75,"years").toDate(),n().toDate()]}}))),Object(x.a)({perPageNumbers:[3,5,10]}),Object(b.a)())(s.a),T=Object(c.b)((function(){return{data:C}}))((function(e){var t=e.data,a="TableWithActionsAndDataFiltering";return i.createElement(S,{id:a,className:"table",data:t,renderBody:function(e){return B(e,a)},tableHeader:D(a),showBorderTop:!0})}))},2420:function(e,t,a){"use strict";a.r(t),a.d(t,"TableHocWithBlankSlateExample",(function(){return m}));var r=a(0),n=a(7),i=a(1),c=a(175),l=a(201),o=a(210),u=a(202),d=a(1162),m=function(){return r.createElement(c.a,null,r.createElement(s,null))};m.title="TableHOC blankSlate";var s=Object(n.b)((function(){return{data:Object(d.generateDataWithFacker)(0)}}))((function(){return r.createElement(c.a,null,r.createElement(f,{id:"tableWithBlankSlate",className:"table",data:Object(d.generateDataWithFacker)(0),renderBody:d.generateTableRow}))})),f=i.compose(Object(o.a)({title:"No data caused the table to be empty"}),Object(u.a)({matchFilter:function(e,t){return-1!==t.username.toLowerCase().indexOf(e.toLowerCase())}}),Object(o.a)({title:"Filter caused the table to be empty"}))(l.a)},545:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(){function e(){}return e.generate=function(){var e=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?a:3&a|8).toString(16)}))},e}()}}]);
//# sourceMappingURL=992.bundle.js.map