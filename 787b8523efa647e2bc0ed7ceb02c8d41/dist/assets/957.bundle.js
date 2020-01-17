(window.webpackJsonp=window.webpackJsonp||[]).push([[957],{2190:function(e,t,r){"use strict";r.r(t),r.d(t,"ChartExamples",(function(){return C}));var n=r(4),a=r(0),o=r(1),i=r(25),l=r(92),c=r(543),s=r(744),u=r(745),f=r(746),m=r(747),d=r(748),p=r(749),h=r(750),y=r(751),g=r(533),x=r(752),b=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i},v=[{label:"First",data:[{x:-1,y:3},{x:0,y:3},{x:1,y:3},{x:2,y:6},{x:3,y:2},{x:4,y:12},{x:5,y:8}]},{label:"Second",data:[{x:-1,y:1},{x:0,y:5},{x:1,y:4},{x:2,y:0},{x:3,y:6},{x:4,y:7},{x:5,y:4}]},{label:"Third",data:[{x:-1,y:4},{x:0,y:7},{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:2},{x:5,y:7}]}],E=[{label:"First",data:o.range(25).map((function(e){return{x:n().startOf("day").subtract(e,"day").unix(),y:e+1}}))}],w=[c.b["orange-1"],c.b["orange-2"],c.b["orange-3"]],k={Scatter:"scatter",Line:"line",Bar:"bar"},C=function(){var e=b(a.useState(k.Scatter),2),t=e[0],r=e[1];return a.createElement("div",{className:"mt2"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Basic ",i.capitalize(t)," Chart"),a.createElement("div",{className:"form-control",style:{height:"300px"}},a.createElement(u.a,{renderChart:function(e,r){return a.createElement(g.a,{series:[v[0]],height:r,width:e,padding:t===k.Bar?{left:e/12,right:e/12}:void 0},t===k.Scatter&&a.createElement(p.a,null),t===k.Line&&a.createElement(d.a,null),t===k.Bar&&a.createElement(s.a,null))}})),o.map(k,(function(e){return a.createElement(l.a,{key:e,enabled:t!==e,onClick:function(){return r(e)},name:e+" Series"})}))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Chart with tooltip"),a.createElement("div",{className:"form-control",style:{height:"300px"}},a.createElement(u.a,{renderChart:function(e,t){return a.createElement(g.a,{series:v,height:t,width:e},a.createElement(p.a,null),a.createElement(f.a,null))}}))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Chart with y-axis and Info Lines"),a.createElement("div",{className:"form-control",style:{height:"300px"}},a.createElement(u.a,{renderChart:function(e,t){return a.createElement(g.a,{series:v,height:t,width:e},a.createElement(y.a,{x:{innerPadding:30},y:{innerPadding:30}},a.createElement(h.a,{padding:30}),a.createElement(x.a,{padding:30}),a.createElement(d.a,null),a.createElement(m.a,{value:3,label:"Three",padding:30}),a.createElement(m.a,{value:2,label:"Two",padding:30,isVertical:!0})))}}))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Combined Chart"),a.createElement("div",{className:"form-control",style:{height:"500px"}},a.createElement(u.a,{renderChart:function(e,t){return a.createElement(g.a,{series:v,height:t,width:e,color:function(e,t,r){return r&&r.y>7?w[e]:t[e]},xFormat:function(e){return["One","Two","Three","Four","Five","Six","Seven"][e+1]},yFormat:function(e){return 10*e+"%"}},a.createElement(y.a,{x:{innerPadding:e/12},y:{show:!1}},a.createElement(s.a,null),a.createElement(d.a,null),a.createElement(p.a,null),a.createElement(f.a,{sort:!0})))}}))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Date Chart"),a.createElement("div",{className:"form-control",style:{height:"300px"}},a.createElement(u.a,{renderChart:function(e,t){return a.createElement(g.a,{series:E,height:t,width:e,xFormat:function(e){return n.unix(e).format("YYYY-MM-DD")}},a.createElement(y.a,{x:{tickTextSize:120},y:{show:!1}},a.createElement(s.a,null),a.createElement(f.a,{sort:!0})))}}))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Date Chart"),a.createElement("div",{className:"form-control",style:{height:"300px"}},a.createElement(u.a,{renderChart:function(e,t){return a.createElement(g.a,{series:[{label:"First",data:[{x:n().startOf("day").unix(),y:500}]}],height:t,width:e,xFormat:function(e){return n.unix(e).format("YYYY-MM-DD")}},a.createElement(y.a,{x:{tickTextSize:120},y:{show:!1}},a.createElement(s.a,null),a.createElement(f.a,{sort:!0})))}}))))}},533:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return f}));var n=r(569),a=r(0),o=r(1),i=r(543),l=r(560),c=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i},s=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e},u=a.createContext({width:0,height:0,xDomain:[0,0],yDomain:[0,0],series:[],colorPattern:[],xScale:n.scale.ordinal(),yScale:n.scale.linear(),xFormat:o.identity,yFormat:o.identity,xTicksCount:10,yTicksCount:10}),f=function(e){var t=e.width,r=e.height,c=e.series,f=e.colorPattern,m=void 0===f?[]:f,d=e.color,p=e.padding,h=void 0===p?10:p,y=e.xFormat,g=void 0===y?o.identity:y,x=e.yFormat,b=void 0===x?o.identity:x,v=e.xTicksCount,E=e.yTicksCount,w=e.children,k=l.a.getXValues(c),C=[Math.min.apply(Math,s(k)),Math.max.apply(Math,s(k))],S=l.a.getYValues(c),N=[Math.min.apply(Math,s([0],S)),Math.max.apply(Math,s(S))];m=m.length?m:function(e){var t=[i.b.azure,i.b.java,i.b.anakiwa,i.b.nepal];return e>2?s([i.b["blue-8"]],t):t}(c.length),d=d||function(e,t){return t[e]};var T=o.isNumber(h)?{top:h,right:h,bottom:h,left:h}:o.defaults(h,{top:10,right:10,bottom:10,left:10});t=t-T.left-T.right,r=r-T.top-T.bottom;var P=n.scale.ordinal().domain(k).rangePoints([0,t]),M=n.scale.linear().domain(N).range([r,0]);return a.createElement(u.Provider,{value:{width:t,height:r,xDomain:C,yDomain:N,xScale:P,yScale:M,xFormat:g,yFormat:b,color:d,colorPattern:m,series:c,xTicksCount:v||k.length/2,yTicksCount:E||S.length/2}},a.createElement("svg",{width:t,height:r},a.createElement("g",{transform:"translate("+T.left+","+T.top+")"},w)))};f.displayName="XYChart"},543:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return u}));var n,a=r(2),o=r(0),i=r(1),l=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=r(640),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e,t=-1===i.keys(s).indexOf(this.props.color),r=t&&{backgroundColor:this.props.color}||{};return this.props.style&&(r=c(c({},r),this.props.style)),o.createElement("div",c({},i.omit(this.props,"color","hex"),{style:r,className:a(this.props.className,(e={},e["bg-"+this.props.color]=!t,e))}),this.props.children)},t.defaultprops={color:"pure-white"},t}(o.Component)},560:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(1),a=function(e,t){return n.chain(e).map((function(e){return e.data.map(t)})).flatten().uniq().sort().value()},o={getXValues:function(e){return a(e,(function(e){return e.x}))},getYValues:function(e){return a(e,(function(e){return e.y}))}}},601:function(e,t,r){(t=e.exports=r(70)(!1)).push([e.i,"/* ----------- Deprecated Palette ----------- */\n.ChartTooltipContent-chartTooltipContent-1TL1Eip8IV3vXD0PRy5XLB {\n  font-size: 13px;\n  border: 1px solid #bcc3ca;\n  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3); }\n\n.ChartTooltipContent-chartTooltipColor-2epsGANhwWjZRlSgUjP17o {\n  width: 3px;\n  height: 18px; }\n\n.ChartTooltipContent-chartTooltipLabel-2L73x1da5KH26eHsyMcb6M {\n  padding-top: 3px;\n  padding-bottom: 3px; }\n",""]),t.locals={chartTooltipContent:"ChartTooltipContent-chartTooltipContent-1TL1Eip8IV3vXD0PRy5XLB",chartTooltipColor:"ChartTooltipContent-chartTooltipColor-2epsGANhwWjZRlSgUjP17o",chartTooltipLabel:"ChartTooltipContent-chartTooltipLabel-2L73x1da5KH26eHsyMcb6M"}},640:function(e,t){e.exports={"primary-colors":"category",mirage:"#1e253f","coveo-blue":"#004990","coveo-orange":"#f58020","secondary-colors":"category",azure:"#0d80ef",anakiwa:"#4ed6ff",java:"#26e8cc","primary-palette":"category","science-blue":"#0061c0","dodger-blue":"#3ca0ff","tropical-rain-forest":"#007766",observatory:"#028f7b","caribbean-green":"#05c3a2",lynch:"#5d7289","bali-hai":"#8097aa",nepal:"#94a9bf",heather:"#b5c4cf",tango:"#e56613","neon-carrot":"#ff9844","tan-hide":"#f8aa69","partners-palette":"category","coveo-sitecore-red":"#dc291e","coveo-salesforce-blue":"#009ddc","grey-palette":"category","oxford-blue":"#313a45","coveo-grey":"#94a9bf","grey-1":"#f7f8f9","grey-2":"#eff3f7","grey-3":"#e4eaed","grey-4":"#cfd9e0","grey-5":"#b5c4cf","grey-6":"#94a9bf","grey-7":"#8097aa","grey-8":"#5d7289","grey-9":"#4e5f71","grey-10":"#37424e","blue-palette":"category","blue-1":"#cde7ff","blue-2":"#8fc9ff","blue-3":"#3ca0ff","blue-4":"#0d80ef","blue-5":"#0061c0","blue-6":"#004990","blue-7":"#00305c","blue-8":"#00284b","blue-9":"#00203a","blue-10":"#00101e",astral:"#296896",matisse:"#257bab","curious-blue-1":"#218ec0","curious-blue-2":"#1da2d5","picton-blue":"#19b5ea",cerulean:"#90e5ff",onahau:"#c6f2ff","onahau-1":"#b6eeff","blue-purple-palette":"category","coveo-blue-purple":"#1e253f","blue-purple-1":"#3e5485","blue-purple-2":"#354878","blue-purple-3":"#2d385e","blue-purple-4":"#1e253f","blue-purple-5":"#101425","green-palette":"category","frosted-mint":"#d3fff8","frosted-mint-1":"#a9fff2","persian-green":"#00a78a",watercourse:"#066356",cyprus:"#004446","deep-teal":"#003530","orange-palette":"category","orange-1":"#ffbc86","orange-2":"#ff9844","orange-3":"#f58020","orange-4":"#ed731a","orange-5":"#e56613","orange-6":"#de590d","orange-7":"#d64c06","orange-8":"#ce3f00","carrot-orange":"#ec8c25","tahiti-gold":"#dc7704",buttercup:"#f39e08","my-sin":"#ffac23",amber:"#fbba06",sunglow:"#ffce44","school-bus-yellow":"#ffdf00",picasso:"#fff08f","lemon-chiffon":"#fff9cf",travertine:"#fffde9","red-pink-palette":"category","lonestar-2":"#550500","lonestar-1":"#720700","red-berry":"#8b0900",sangria:"#b10007","milano-red":"#d02b08",pomegranate:"#f7472e",persimmon:"#ff644e",bittersweet:"#ff8675","mona-lisa":"#ffa79b",melon:"#ffc4bc",status:"category",red:"#ce3f00",yellow:"#ecad00",green:"#009830",utilities:"category",transparent:"transparent","deprecated-palette":"category","darker-blue":"#193045","dark-blue":"#263e55","medium-blue":"#1d4f76","light-blue":"#296896","dark-grey":"#373737","dark-medium-grey":"#7a7d81","medium-grey":"#bcc3ca","light-grey":"#e6ecf0",white:"#f1f3f4","pure-white":"#ffffff",orange:"#f58020",stratos:"#08080e","purple-blue":"#1e2541","soft-red":"#edbcbf","soft-green":"#d0e9c4",blue:"#009ad9",black:"#000000",turquoise:"#26e8cc","salesforce-blue":"#009ddc","google-red":"#ce3f00","office365-red":"#ce3f00"}},662:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(2),a=r(0),o=r(1),i=r(543),l=r(560),c=r(827),s=r(533),u=function(e){var t=e.x,r=e.sort,u=a.useContext(s.b),f=u.series,m=u.xFormat,d=u.yFormat,p=u.color,h=u.colorPattern,y=m(l.a.getXValues(f)[t]);return a.createElement("div",{className:n("flex flex-column bg-pure-white",c.chartTooltipContent)},a.createElement("div",{className:"flex flex-row center-align flex-start tooltip-serie-title"},a.createElement("div",{className:n(c.chartTooltipColor)}),a.createElement("div",{className:n("px1",c.chartTooltipLabel)},y),a.createElement("div",{className:"pr1 flex-auto"})),o.chain(f).sortBy((function(e,n){return r?-e.data[t].y:n})).map((function(e,r){var o=e.data[t];return o&&a.createElement("div",{key:"tooltip-serie-row-"+e.label,className:"flex flex-row center-align flex-start tooltip-serie-row"},a.createElement(i.a,{className:n(c.chartTooltipColor),color:p(r,h,o)}),a.createElement("div",{className:n("pl1 pr2",c.chartTooltipLabel)},e.label),a.createElement("div",{className:"pr1 flex-auto right-align"},d(o.y)))})).value())}},744:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(569),a=r(0),o=r(560),i=r(533),l=function(e){var t=e.barRatio,r=void 0===t?.8:t,l=e.children,c=a.useContext(i.b),s=c.series,u=c.xScale,f=c.yScale,m=c.xDomain,d=c.yDomain,p=c.color,h=c.colorPattern,y=o.a.getXValues(s),g=y.length>1?(u(m[1])-u(m[0]))/y.length/2*r:u(m[0])/2*r,x=n.scale.ordinal().domain(n.range(s.length)).rangeBands([-g,g],0),b=s.map((function(e,t){return e.data.map((function(r){var n=Math.max(f(r.y),2);return a.createElement("rect",{key:e.label+"-"+r.x,fill:p(t,h,r),width:x.rangeBand(),height:f(d[0])-n,x:u(r.x)+x(t),y:n})}))}));return a.createElement("g",{className:"bar-series"},b,l)};l.displayName="BarSeries"},745:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),a=r(1),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e){var t,r,i=n.useRef(null);l();var c=function(e){if(i.current){var t=i.current.querySelectorAll("svg");a.each(t,(function(t){return t.style.display=e?"block":"none"}))}};c(!1);var s=null!=(r=null===(t=i.current)||void 0===t?void 0:t.getBoundingClientRect())?r:{width:0,height:0},u=s.width,f=s.height;return c(!0),n.createElement("div",o({className:"full-content"},a.omit(e,"renderChart"),{ref:i}),u>0&&f>0?e.renderChart(u,f):null)};i.displayName="ChartContainer";var l=function(){var e=n.useState(void 0)[1];n.useEffect((function(){var t=function(){return window.requestAnimationFrame(e)};return window.addEventListener("resize",t),e(1),function(){return window.removeEventListener("resize",t)}}),[e])}},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(2),a=r(0),o=r(46),i=r(543),l=r(31),c=r(138),s=r(662),u=r(533),f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},m=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i},d=function(e){var t=e.sort,r=void 0!==t&&t,d=a.useContext(u.b),p=d.series,h=d.xScale,y=d.yScale,g=d.xDomain,x=d.yDomain,b=d.width,v=d.height,E=m(a.useState({x:0,y:0,index:0,position:"",pointX:null}),2),w=E[0],k=E[1],C=a.useRef(null),S=function(e,t,r){var n=r<b/2?l.b.right:l.b.left;k({x:r,y:v/2,index:e,pointX:t,position:n})},N=function(){return k(f(f({},w),{position:""}))},T=p[0].data.length>1?(h(g[1])-h(g[0]))/p[0].data.length:h(g[0]),P=p[0].data.map((function(e,t){var r=h(e.x);return a.createElement(a.Fragment,{key:"chart-zone-"+t},a.createElement("rect",{fill:"transparent",width:T/2,height:y(x[0]),x:r-T/2,y:y(x[1]),onMouseMove:function(){return S(t,e.x,r)},onMouseLeave:N}),a.createElement("rect",{fill:"transparent",width:T/2,height:y(x[0]),x:r,y:y(x[1]),onMouseMove:function(){return S(t,e.x,r)},onMouseLeave:N}))}));return a.createElement("g",{className:"chart-tooltip-zones"},!!w.position&&a.createElement("rect",{className:"chart-tooltip-line",width:2,x:h(w.pointX)-1,y:y(x[1]),height:y(x[0]),fill:i.b.orange}),a.createElement("circle",{cx:w.x,cy:w.y,r:"1",fill:"transparent",ref:C}),a.createElement(c.a,{ref:C,isOpen:!!w.position,positions:[w.position,l.b.left,l.b.right],parentSelector:o.a.DROP_ROOT,renderDrop:function(e,t,o){return a.createElement("div",{ref:t,style:f(f({},e),{pointerEvents:"none"}),className:n("show-on-top",{"ml-2":o.position===l.b.left,ml2:o.position===l.b.right})},a.createElement(s.a,{x:w.index,sort:r}))}}),P)};d.displayName="ChartTooltip"},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r(533),o=function(e){var t=e.stroke,r=void 0===t?"#000":t,o=e.isVertical,i=void 0!==o&&o,l=e.label,c=void 0===l?"":l,s=e.padding,u=void 0===s?30:s,f=e.value,m=n.useContext(a.b),d=m.xDomain,p=m.yDomain,h=m.xScale,y=m.yScale,g=m.height;return n.createElement("g",{className:"info-line"},n.createElement("line",{stroke:r,strokeDasharray:"6",x1:i?h(f):0-u,x2:i?h(f):h(d[1])+u,y1:i?0-u:y(f),y2:i?g+u:y(f)}),c&&!i&&n.createElement("text",{textAnchor:"end",x:h(d[1]),y:y(f)-4},c),c&&i&&n.createElement("text",{textAnchor:"end",transform:"rotate(-90)",x:y(p[1]),y:h(f)-4},c))};o.displayName="InfoLine"},748:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(569),a=r(0),o=r(533),i=function(e){var t=e.interpolate,r=void 0===t?"linear":t,i=e.strokeWith,l=void 0===i?2:i,c=e.children,s=a.useContext(o.b),u=s.series,f=s.xScale,m=s.yScale,d=s.color,p=s.colorPattern,h=n.svg.line().x((function(e){return f(e.x)})).y((function(e){return m(e.y)})).interpolate(r),y=u.map((function(e,t){return a.createElement("path",{key:"line-"+t,fill:"none",strokeWidth:l,stroke:d(t,p),d:h(e.data)})}));return a.createElement("g",{className:"line-series"},y,c)};i.displayName="LineSeries"},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r(533),o=function(e){var t=e.children,r=e.radius,o=void 0===r?3:r,i=n.useContext(a.b),l=i.series,c=i.xScale,s=i.yScale,u=i.color,f=i.colorPattern,m=l.map((function(e,t){return e.data.map((function(r,a){return n.createElement("circle",{key:"scatter-"+e.label+"-"+a,cx:c(r.x),cy:s(r.y),r:o,fill:u(t,f,r)})}))}));return n.createElement("g",{className:"scatter-series"},m,t)};o.displayName="ScatterSeries"},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r(533),o=function(e){var t=e.padding,r=void 0===t?0:t,o=e.color,i=void 0===o?"rgba(0,0,0,0.2)":o,l=n.useContext(a.b),c=l.yDomain,s=l.xScale,u=l.yScale,f=s.range().map((function(e){return n.createElement("line",{key:"x-grid-"+e,stroke:i,x1:s(e),x2:s(e),y1:u(c[0])+r,y2:u(c[1])-r})}));return n.createElement(n.Fragment,null,f)};o.displayName="XGrid"},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(569),a=r(0),o=r(1),i=r(533),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e){return void 0===e&&(e={}),o.defaults(e,{tickSize:!1!==e.show?7:0,tickTextSize:0,size:!1!==e.show?40:0,innerPadding:0,show:!0,format:o.identity})},s=function(e){var t=e.x,r=e.y,s=e.children,u=a.useContext(i.b),f=u.xDomain,m=u.yDomain,d=u.xScale,p=u.yScale,h=u.xFormat,y=u.yFormat,g=u.width,x=u.height,b=u.xTicksCount,v=u.yTicksCount,E=c(t),w=c(r),k=w.innerPadding||w.tickTextSize/2,C=E.innerPadding||E.tickTextSize/2,S=g-w.size-2*C,N=x-E.size-2*k,T=d.rangePoints([0,S]),P=p.range([N,0]),M=T(f[0]),D=T(f[1]),z=P(m[0]),F=P(m[1]),O=P.ticks(0===w.tickTextSize?v:Math.floor(N/w.tickTextSize)).map((function(e){return a.createElement("g",{key:"y-axis-tick-"+e,className:"y-axis-tick",transform:"translate("+(D+2*C)+","+(P(e)+k)+")"},a.createElement("line",{stroke:"black",x1:"0",x2:w.tickSize}),a.createElement("text",{textAnchor:"start",x:w.tickSize+5,y:5},y(e)))})),L=n.scale.linear().range(T.range()).domain(f).ticks(0===E.tickTextSize?b:Math.floor(S/E.tickTextSize)).length,j=o.chunk(T.domain(),Math.floor(T.domain().length/L)).filter((function(e,t,r){return t<r.length-1||e.length>1||1===r[0].length})).map((function(e){return e[Math.floor((e.length-1)/2)]})),X=T.domain().map((function(e){var t=o.contains(j,e)&&h(e),r=T(e);return a.createElement("g",{key:"x-axis-tick-"+e,transform:"translate("+(r+C)+","+(z+2*k)+")",className:"x-axis-tick"},a.createElement("line",{stroke:"black",y1:"0",y2:E.tickSize}),t&&a.createElement("text",{textAnchor:"middle",y:E.tickSize+15},t))}));return a.createElement(a.Fragment,null,a.createElement(i.b.Provider,{value:l(l({},u),{xScale:T,yScale:P,height:z,width:D})},a.createElement("g",{transform:"translate("+C+","+k+")"},s)),w.show&&a.createElement("g",{className:"y-axis"},a.createElement("line",{className:"axis-line",stroke:"black",x1:D+2*C,x2:D+2*C,y1:z+2*k,y2:F}),O),E.show&&a.createElement("g",{className:"x-axis"},a.createElement("line",{className:"axis-line",stroke:"black",x1:M,x2:D+2*C,y1:z+2*k,y2:z+2*k}),X))};s.displayName="XYAxis"},752:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r(533),o=function(e){var t=e.padding,r=void 0===t?0:t,o=e.color,i=void 0===o?"rgba(0,0,0,0.2)":o,l=n.useContext(a.b),c=l.xDomain,s=l.xScale,u=l.yScale,f=l.yTicksCount,m=u.ticks(f).map((function(e){return n.createElement("line",{key:"y-grid-"+e,stroke:i,x1:s(c[0])-r,x2:s(c[1])+r,y1:u(e),y2:u(e)})}));return n.createElement(n.Fragment,null,m)};o.displayName="YGrid"},827:function(e,t,r){var n=r(601);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(71)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(601,(function(){var t=r(601);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=957.bundle.js.map