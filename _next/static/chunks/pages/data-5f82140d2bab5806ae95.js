_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"30+C":function(t,e,r){"use strict";var a=r("wx14"),n=r("Ff2n"),c=r("q1tI"),o=(r("17x9"),r("iuhU")),i=r("kKAo"),s=r("H2TA"),u=c.forwardRef((function(t,e){var r=t.classes,s=t.className,u=t.raised,l=void 0!==u&&u,f=Object(n.a)(t,["classes","className","raised"]);return c.createElement(i.a,Object(a.a)({className:Object(o.a)(r.root,s),elevation:l?8:1,ref:e},f))}));e.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},K1Fl:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data",function(){return r("uoB9")}])},RQJL:function(t,e,r){t.exports={"page-container":"page_page-container__3LRmt","page-header-label":"page_page-header-label__O6BoI","page-header-divider":"page_page-header-divider__1xXS6"}},kzYg:function(t,e,r){"use strict";r.d(e,"i",(function(){return v})),r.d(e,"j",(function(){return m})),r.d(e,"f",(function(){return h})),r.d(e,"g",(function(){return b})),r.d(e,"b",(function(){return y})),r.d(e,"d",(function(){return x})),r.d(e,"c",(function(){return w})),r.d(e,"e",(function(){return g})),r.d(e,"h",(function(){return _})),r.d(e,"k",(function(){return O})),r.d(e,"a",(function(){return k}));var a=r("o0o1"),n=r.n(a),c=r("HaE+"),o=r("vDqi"),i=r.n(o),s=r("N39q"),u=null!=="https://facility-hub.cineca.it"?"https://facility-hub.cineca.it":"http://localhost:5000",l={login:"/auth/login",verifyToken:"/auth/verifyToken"},f={filters:function(t){return"/filters/".concat(t)},types:function(t){return"/types/".concat(t)},datasets:function(){return"/search/dataset"},models:function(){return"/search/model"}},p={datasets:function(){return"/download/dataset"},models:function(){return"/download/model"}},d=function(t){try{return t&&200===t.status?t.data:null}catch(e){throw e}},v=function(){var t=Object(c.a)(n.a.mark((function t(e){var r,a,c,o,s,l,p,v,m,h;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.data_type,a=void 0===r?null:r,c=e.query,o=e.filters,s=e.page,l=void 0===s?0:s,p=e.hitsPerPage,v=void 0===p?20:p,m="".concat(u).concat(f.datasets(),"/").concat(l,"/").concat(v),t.prev=2,t.next=5,i.a.post(m,{data_type:a,query:c,filters:o});case 5:return h=t.sent,t.abrupt("return",d(h));case 9:t.prev=9,t.t0=t.catch(2),console.error("@@@@error retrieving datasets"),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(n.a.mark((function t(e){var r,a,c,o,s,l,p,v;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.query,a=e.filters,c=e.page,o=void 0===c?0:c,s=e.hitsPerPage,l=void 0===s?20:s,p="".concat(u).concat(f.models(),"/").concat(o,"/").concat(l),t.prev=2,t.next=5,i.a.post(p,{query:r,filters:a});case 5:return v=t.sent,t.abrupt("return",d(v));case 9:t.prev=9,t.t0=t.catch(2),console.error("@@@@error retrieving datasets"),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(n.a.mark((function t(e){var r,a,c,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.indexName,a=e.type,c="".concat(u).concat(f.filters(r)),a&&(c="".concat(c,"/").concat(a)),t.prev=3,t.next=6,i.a.get(c);case 6:return o=t.sent,t.abrupt("return",d(o));case 10:t.prev=10,t.t0=t.catch(3),console.error("@@@@error retrieving data filters"),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(n.a.mark((function t(e){var r,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(u).concat(f.types(e)),t.prev=1,t.next=4,i.a.get(r);case 4:return a=t.sent,t.abrupt("return",d(a));case 8:t.prev=8,t.t0=t.catch(1),console.error("@@@@@error retrieving data types"),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),y=function(t){var e="".concat(u).concat(p.datasets(),"/all");return t&&t.trim().length>0&&(e+="?data_type=".concat(t)),e},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e="".concat(u).concat(p.datasets(),"?ids=").concat(t.join(","));return e},w=function(){return"".concat(u).concat(p.datasets(),"/all")},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e="".concat(u).concat(p.datasets(),"?ids=").concat(t.join(","));return e},k=function(){var t=Object(c.a)(n.a.mark((function t(e){var r,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(s.a.MORPHOLOGY_VIEWER_BASE_URL).concat(e),t.next=4,i.a.get(r);case 4:return a=t.sent,t.abrupt("return",!!a&&!!a.status&&200===a.status);case 8:t.prev=8,t.t0=t.catch(0),console.error("@@@@@error retrieving data types"),console.error(t.t0);case 12:return t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(c.a)(n.a.mark((function t(e,r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(u).concat(l.login),t.prev=1,t.next=4,i.a.post(a,{username:e,password:r});case 4:if(200!==t.sent.status){t.next=7;break}return t.abrupt("return",{success:!0});case 7:return t.abrupt("return",{error:"Something was wrong"});case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",{error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,r){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(u).concat(l.verifyToken),t.prev=1,t.next=4,i.a.post(r,{token:e});case 4:if(200!==t.sent.status){t.next=7;break}return t.abrupt("return",{success:!0});case 7:return t.abrupt("return",{error:"Something was wrong"});case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",{error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},"oa/T":function(t,e,r){"use strict";var a=r("wx14"),n=r("Ff2n"),c=r("q1tI"),o=(r("17x9"),r("iuhU")),i=r("H2TA"),s=c.forwardRef((function(t,e){var r=t.classes,i=t.className,s=t.component,u=void 0===s?"div":s,l=Object(n.a)(t,["classes","className","component"]);return c.createElement(u,Object(a.a)({className:Object(o.a)(r.root,i),ref:e},l))}));e.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},"rh/9":function(t,e,r){"use strict";var a=r("q1tI"),n=r("R/WZ"),c=r("wx14"),o=r("Ff2n"),i=(r("17x9"),r("iuhU")),s=r("H2TA"),u=r("NqtD"),l=a.forwardRef((function(t,e){var r=t.classes,n=t.className,s=t.color,l=void 0===s?"primary":s,f=t.disableShrink,p=void 0!==f&&f,d=t.size,v=void 0===d?40:d,m=t.style,h=t.thickness,b=void 0===h?3.6:h,y=t.value,x=void 0===y?0:y,w=t.variant,g=void 0===w?"indeterminate":w,k=Object(o.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),_={},O={},j={};if("determinate"===g||"static"===g){var N=2*Math.PI*((44-b)/2);_.strokeDasharray=N.toFixed(3),j["aria-valuenow"]=Math.round(x),_.strokeDashoffset="".concat(((100-x)/100*N).toFixed(3),"px"),O.transform="rotate(-90deg)"}return a.createElement("div",Object(c.a)({className:Object(i.a)(r.root,n,"inherit"!==l&&r["color".concat(Object(u.a)(l))],{determinate:r.determinate,indeterminate:r.indeterminate,static:r.static}[g]),style:Object(c.a)({width:v,height:v},O,m),ref:e,role:"progressbar"},j,k),a.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},a.createElement("circle",{className:Object(i.a)(r.circle,p&&r.circleDisableShrink,{determinate:r.circleDeterminate,indeterminate:r.circleIndeterminate,static:r.circleStatic}[g]),style:_,cx:44,cy:44,r:(44-b)/2,fill:"none",strokeWidth:b})))})),f=Object(s.a)((function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:t.transitions.create("transform")},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:t.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(l),p=a.createElement,d=Object(n.a)((function(t){return{container:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.2)",zIndex:10},spinnerContainer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},spinner:{color:"#333"}}}));e.a=function(){var t=d();return p("div",{className:t.container},p("div",{className:t.spinnerContainer},p(f,{className:t.spinner})))}},uoB9:function(t,e,r){"use strict";r.r(e);var a=r("o0o1"),n=r.n(a),c=r("HaE+"),o=r("ODXe"),i=r("q1tI"),s=r("nOHt"),u=r("kzYg"),l=r("TLva"),f=r("RQJL"),p=r.n(f),d=r("ofer"),v=r("rh/9"),m=r("hDQs"),h=r("R/WZ"),b=r("30+C"),y=r("oa/T"),x=r("/RtB"),w=r("vAif"),g=i.createElement,k=Object(h.a)((function(t){return{root:{borderRadius:5,boxShadow:"0px 0px 15px rgba(0, 0, 0, 0.15)",cursor:"pointer"},content:{display:"flex",flexDirection:"column",padding:"0 !important",justifyContent:"center"},mainContent:{flexGrow:1},title:{color:"#fff",fontFamily:"Titillium Web, sans-serif",fontSize:"24px",textTransform:"uppercase"}}})),_=function(t){var e=t.type,r=t.action,a=k(),o=function(){var t=Object(c.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r&&r(e);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return g(b.a,{onClick:function(){return o()},className:"".concat(a.root," ").concat(w["datatype-cta-button"]," ").concat(w["button-primary"])},g(y.a,{className:a.content},g("div",{className:"".concat(a.mainContent)},g("div",{className:"".concat(w["children-container"]," ").concat(w["cta-container"])},g(d.a,{variant:"subtitle1",className:a.title},e)),g("div",{className:"".concat(w["arrow-container"])},g(x.a,{htmlColor:"#fff",fontSize:"large"})))))},O=r("N39q"),j=i.createElement;e.default=function(){var t=Object(s.useRouter)(),e=i.useState(!0),r=Object(o.a)(e,2),a=r[0],f=r[1],h=i.useState({}),b=Object(o.a)(h,2),y=b[0],x=b[1],w=i.useState([]),g=Object(o.a)(w,2),k=g[0],N=g[1];Object(i.useEffect)((function(){T()}),[]);var T=function(){var t=Object(c.a)(n.a.mark((function t(){var e,r,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.e)("data");case 2:return e=t.sent,t.next=5,Object(u.g)("dataset");case 5:r=t.sent,a=r.values,x(e),N(a),f(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(n.a.mark((function e(r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.push("/data/".concat(r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(t){var e;return null!==(e=O.a.DATA_TYPE_LABELS[t])&&void 0!==e?e:t};return j(l.a,{variant:null===y||void 0===y?void 0:y.variant,mainClassName:"with-fixed-header",fixedHeader:!0},j("div",{className:"container ".concat(p.a["page-container"])},j("div",{className:"row"},j("div",{className:"col-12"},j(d.a,{variant:"h4"},y.title))),j("div",{className:"row"},j("div",{className:"col-12"},y.content)),j("section",{style:{marginTop:20}},(null!==k&&void 0!==k?k:[]).map((function(t){return j("div",{className:"row",style:{marginTop:20}},j("div",{className:"col-12"},j(_,{type:E(t),action:function(e){return C(t)}})))}))),a?j(v.a,null):null))}},vAif:function(t,e,r){t.exports={"datatype-cta-button":"dataTypeCtaButton_datatype-cta-button__1h7h_","button-primary":"dataTypeCtaButton_button-primary__2X4kq","arrow-container":"dataTypeCtaButton_arrow-container__h8prV","children-container":"dataTypeCtaButton_children-container__3Qxdq","cta-container":"dataTypeCtaButton_cta-container__2bUXN"}}},[["K1Fl",1,2,6,0,3,4,5,7]]]);