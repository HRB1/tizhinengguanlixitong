(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{14:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return s}));var i="SETINFO",a="GETALLLIST",r="DELETEDA",s="IMPORTLIST"},27:function(e,t,n){"use strict";var i=n(7),a=n(8),r=n(10),s=n(9),o=n(11),c=n(0),l=n.n(c),u=n(12),d=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"loading...")}}]),t}(c.Component),h=n(35),p=n.n(h),m=n(19);function v(e,t){var i=p()({loader:function(){return n(51)("./views".concat(e,"/index"))},loading:d});return t?t(i):i}function f(e,t,n){var i={path:"home"===e?"/":"/"+e,title:t,id:e,component:v("/"+e)};if(n){var a=n.map((function(t){return{path:"/".concat(e,"/").concat(t.path),showAside:!1!==t.showAside,title:t.title,parentId:t.parentId||"",component:v("/".concat(e,"/").concat(t.path))}}));a.push({path:"/"+e,redirect:"/".concat(e,"/").concat(n[0].path)}),i.children=a}return i}var w=[{path:"/login",component:v("/login")},{path:"/",component:v("",(function(e){var t=function(t){function n(){return Object(i.a)(this,n),Object(r.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(o.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){var t=this.props,n=t.user,i=t.location.pathname;return""===n.userName?l.a.createElement(u.a,{to:"/login"}):"/noAuthority"===i||n.limitView.find((function(e){return("/"===i?"home":i).includes(e.routerId)}))?l.a.createElement(e,this.props):l.a.createElement(u.a,{to:"/noAuthority"})}}]),n}(c.Component);return Object(m.b)((function(e){return{user:e.user}}))(t)})),children:[f("management","\u5458\u5de5\u7ba1\u7406",[{path:"da",title:"\u6863\u6848\u7ba1\u7406"},{path:"fp",title:"\u5206\u914d\u7ba1\u7406"},{path:"kc",title:"\u8bfe\u7a0b\u7ba1\u7406"},{path:"dkf",title:"\u4ee3\u8bfe\u8d39\u7ba1\u7406"},{path:"sr",title:"\u751f\u65e5\u7ba1\u7406"},{path:"xc",title:"\u85aa\u916c\u7ba1\u7406"},{path:"lz",title:"\u79bb\u804c\u7ba1\u7406"}]),f("checkWork","\u5458\u5de5\u8003\u52e4",[{path:"sp",title:"\u8003\u52e4\u5ba1\u6279"},{path:"tj",title:"\u8003\u52e4\u7edf\u8ba1"},{path:"mx",title:"\u8003\u52e4\u660e\u7ec6"},{path:"set",title:"\u8003\u52e4\u8bbe\u7f6e"}]),f("plan","\u5de5\u4f5c\u8ba1\u5212",[{path:"gzjh",title:"\u5de5\u4f5c\u8ba1\u5212"}]),f("customer","\u5ba2\u6237\u7ba1\u7406",[{path:"khlb",parentId:"kh",title:"\u5ba2\u6237\u5217\u8868"},{path:"tnlsgl",parentId:"kh",title:"\u4f53\u80fd\u8001\u5e08\u7ba1\u7406"},{path:"khsh",parentId:"kh",title:"\u5ba2\u6237\u5ba1\u6838"},{path:"khwh",parentId:"kh",title:"\u5ba2\u6237\u7ef4\u62a4"},{path:"khsjfx",parentId:"kh",title:"\u5ba2\u6237\u6570\u636e\u5206\u6790"},{path:"bfgl",parentId:"khbf",title:"\u62dc\u8bbf\u7ba1\u7406"},{path:"bfjl",parentId:"khbf",title:"\u62dc\u8bbf\u8bb0\u5f55"}]),f("college","\u4e9a\u592a\u5b66\u9662",[{path:"all",title:"\u8003\u52e4\u6570\u636e\u6c47\u603b"},{path:"fx",title:"\u5ba2\u6237\u6570\u636e\u5206\u6790"},{path:"sort",title:"\u4e3b\u7ba1\u7ade\u4e89\u529b\u6392\u540d"},{path:"study",title:"\u6559\u5e08\u5b66\u4e60\u6392\u540d"}]),f("level","\u7ea7\u522b\u8003\u6838",[{path:"ps",title:"\u8003\u6838\u8bc4\u5ba1"}]),f("assistant","\u7ba1\u7406\u52a9\u624b",[{path:"all",title:"\u8003\u52e4\u6570\u636e\u6c47\u603b"},{path:"fx",title:"\u5ba2\u6237\u6570\u636e\u5206\u6790"},{path:"sort",title:"\u4e3b\u7ba1\u7ade\u4e89\u529b\u6392\u540d"},{path:"study",title:"\u6559\u5e08\u5b66\u4e60\u6392\u540d"}]),f("integral","\u79ef\u5206\u7ba1\u7406",[{path:"sb",title:"\u79ef\u5206\u4e0a\u62a5"},{path:"sh",title:"\u79ef\u5206\u5ba1\u6838"},{path:"tj",title:"\u79ef\u5206\u7edf\u8ba1"},{path:"dx",title:"\u79ef\u5206\u5151\u73b0"}]),f("noAuthority",""),f("home","\u9996\u9875")]}];n.d(t,"a",(function(){return x}));var x=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props.Routes,t=e.filter((function(e){return e.redirect})).map((function(e,t){return l.a.createElement(u.a,{from:e.path,to:e.redirect,key:t})}));return l.a.createElement(u.d,null,e.filter((function(e){return e.component})).map((function(e,t){return l.a.createElement(u.b,{path:e.path,render:function(t){return l.a.createElement(e.component,Object.assign({},t,{Routes:e.children}))},key:t})})),t)}}]),t}(c.Component);x.defaultProps={Routes:w}},37:function(e,t,n){e.exports=n(53)},42:function(e,t,n){},51:function(e,t,n){var i={"./views/assistant/all/index":[87,0,1,2,3,9],"./views/assistant/fx/index":[85,0,1,2,3,8],"./views/assistant/index":[60,43],"./views/assistant/sort/index":[97,0,1,2,3,21],"./views/assistant/study/index":[93,0,1,2,3,22],"./views/checkWork/index":[61,35],"./views/checkWork/tj/index":[88,0,1,2,3,7],"./views/college/all/index":[95,0,1,2,3,26],"./views/college/fx/index":[62,44],"./views/college/index":[63,45],"./views/college/sort/index":[64,46],"./views/college/study/index":[65,47],"./views/customer/bfgl/index":[99,0,1,2,3,17],"./views/customer/bfjl/index":[100,0,1,2,3,19],"./views/customer/index":[66,48],"./views/customer/khlb/index":[86,0,1,2,3,20],"./views/customer/khsh/index":[67,49],"./views/customer/khsjfx/index":[68,50],"./views/customer/khwh/index":[69,51],"./views/customer/tnlsgl/index":[70,52],"./views/home/components/activity/index":[54,0,1,2,4,36],"./views/home/components/attendance/index":[59,4,37],"./views/home/components/calendar/index":[55,38],"./views/home/components/customer/index":[56,39],"./views/home/components/daily/index":[58,4,40],"./views/home/components/tab/index":[57,41],"./views/home/index":[71,0,1,2,4,30],"./views/index":[90,0,1,3,29,31],"./views/integral/dx/index":[92,32,34],"./views/integral/index":[72,53],"./views/integral/sb/index":[73,0,1,2,3,18],"./views/integral/sh/index":[89,0,1,2,3,23],"./views/integral/tj/index":[96,0,1,2,3,25],"./views/level/index":[74,54],"./views/level/ps/index":[91,0,1,2,3,24],"./views/login/index":[94,0,3,27,33],"./views/management/da/index":[98,0,1,2,3,10],"./views/management/dkf/index":[75,0,1,2,3,11],"./views/management/fp/index":[76,0,1,2,3,12],"./views/management/index":[77,42],"./views/management/kc/index":[78,0,1,2,3,13],"./views/management/lz/index":[79,0,1,2,3,14],"./views/management/sr/index":[80,0,1,2,3,15],"./views/management/xc/index":[81,0,1,2,3,16],"./views/noAuthority/index":[82,55],"./views/plan/gzjh/index":[83,56],"./views/plan/index":[84,57]};function a(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(i)},a.id=51,e.exports=a},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(17),s=n.n(r),o=(n(42),n(7)),c=n(8),l=n(10),u=n(9),d=n(11),h=n(19),p=n(13),m=n(33),v=n(34),f=n.n(v),w=n(14),x=n(22),b=function(e){return e.map((function(e){return e.key?Object(x.a)({},e):Object(x.a)({},e,{key:e.id})}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alllist:[],allcount:0},t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case w.b:var i=t.data,a=t.size;return n.alllist=b(i),n.allcount=a,n;case w.c:var r=t.data;return n.alllist=n.alllist.concat(b(r)),n;case w.a:var s=t.id;return s.forEach((function(e){var t=n.alllist.findIndex((function(t){return t.id===e}));-1!==t&&(n.alllist.splice(t,1),n.allcount--)})),n;default:return e}},O=Object(p.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(window.sessionStorage.getItem("userInfo"))||{identityName:"",limitView:[],userName:""},t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e)),i=null;switch(t.type){case w.d:Object.keys(n).forEach((function(e){n[e]=t.data[e]})),window.sessionStorage.setItem("userInfo",JSON.stringify(n)),i=n;break;default:i=e}return i},management:g}),j=Object(p.d)(O,Object(p.a)(m.a,f.a)),k=n(18),y=n(27),E=(n(52),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(h.a,{store:j},a.a.createElement(k.a,null,a.a.createElement(y.a,null)))}}]),t}(i.Component));s.a.render(a.a.createElement(E,null),document.querySelector("#root"))}},[[37,6,28]]]);
//# sourceMappingURL=main.1249d505.chunk.js.map