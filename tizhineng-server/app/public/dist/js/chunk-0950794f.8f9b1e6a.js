(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0950794f"],{"5df3":function(t,e,r){"use strict";var n=r("02f4")(!0);r("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},"8cd6":function(t,e,r){},a75e:function(t,e,r){"use strict";var n=r("8cd6"),a=r.n(n);a.a},ab44:function(t,e,r){"use strict";var n=r("f6da"),a=r.n(n);a.a},e6c5:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"userContainer"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("用户")]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.addUserDialogBtn=!0}}},[r("i",{staticClass:"el-icon-circle-plus-outline"}),t._v("添加用户")])],1),r("scroll-pane",[r("el-row",{attrs:{gutter:10}},t._l(t.allUser,function(e){return r("el-col",{key:e.userid,staticStyle:{position:"relative"},attrs:{span:12}},[r("move-block",{attrs:{movedata:e}},[r("li",[r("span",[r("router-link",{attrs:{to:{path:"/admin/userDetailInfo",query:{userid:e.userid}}}},[t._v("\n                                            用户名："+t._s(e.userName)+"\n                                        ")])],1),r("el-button",{staticClass:"deleteUser",staticStyle:{padding:"0px"},attrs:{type:"info",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return t.deleteI(e,!0)}}})],1),r("li",{attrs:{title:e.identityName}},[r("span",[t._v("身   份："+t._s(e.identityName))])])])],1)}),1)],1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("身份")]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:t.addAuthor}},[r("i",{staticClass:"el-icon-circle-plus-outline"}),t._v("\n                        添加角色\n                    ")])],1),r("scroll-pane",[r("dl",{staticClass:"identity-list"},[r("dt",[r("span",[t._v("身份id")]),r("span",[t._v("身份名称")]),r("span",[t._v("操作")])]),t._l(t.allIdentity,function(e,n){return r("dd",{key:e.id,class:{active:e.id===t.id,hoverActive:n===t.hoverIndex},on:{click:function(r){return t.changeIdentity(e.id,e.identityName)},dragenter:function(e){return t.dragenter(n)},drop:function(r){return t.drop(r,e)}}},[r("span",[t._v(t._s(e.id))]),r("span",[t._v(t._s(e.identityName))]),r("span",[r("el-button",{staticStyle:{padding:"5px"},attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return r.stopPropagation(),t.deleteI(e)}}})],1)])})],2)])],1)],1),r("el-col",{attrs:{span:12}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("权限")])]),r("scroll-pane",[r("el-row",{attrs:{gutter:10}},t._l(t.allAuthority,function(e){return r("el-col",{key:e.id,attrs:{span:12}},[r("move-block",{attrs:{movedata:e}},[r("li",[r("span",[t._v("权    限："+t._s(e.authorityName))])]),r("li",{attrs:{title:e.name}},[r("span",[t._v("权限名称："+t._s(e.name))])])])],1)}),1)],1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("身份详情信息")])]),r("scroll-pane",[t.userAFromI.length||t.aFromI.length?r("div",{staticClass:"user-form"},[r("dl",[r("dt",[r("p",[t._v("身份名称")])]),r("dd",[t._v("\n                            "+t._s(t.currentIdentityName)+"\n                        ")])]),r("dl",[r("dt",[r("p",[t._v("权限")])]),r("dd",[r("ul",t._l(t.aFromI,function(e,n){return r("li",{key:n},[t._v("\n                                    "+t._s(e.authority)+":"+t._s(t.allAuthority.find(function(t){return t.authorityName===e.authority}).name)+"  \n                                    "),r("el-button",{staticStyle:{padding:"5px"},attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return t.deleteAuthor(e)}}})],1)}),0)])]),r("dl",[r("dt",[r("p",[t._v("用户")])]),r("dd",[t.userAFromI.length?r("ul",t._l(t.userAFromI,function(e){return r("li",{key:e.id},[t._v("\n                                    "+t._s(e.userName)+"\n                                ")])}),0):r("div",[t._v("暂无用户")])])])]):r("div",[t._v("暂无该信息")])])],1)],1)],1),r("el-dialog",{attrs:{title:"添加用户",visible:t.addUserDialogBtn,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.addUserDialogBtn=e}}},[r("el-form",{ref:"addUserData",attrs:{inline:"","label-width":"80px",rules:t.addUserRule,model:t.addUserData,"label-position":"left"}},[r("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[r("el-input",{attrs:{type:"text"},model:{value:t.addUserData.userName,callback:function(e){t.$set(t.addUserData,"userName",e)},expression:"addUserData.userName"}})],1),r("el-form-item",{attrs:{label:"密  码",prop:"userPwd"}},[r("el-input",{attrs:{type:"password"},model:{value:t.addUserData.userPwd,callback:function(e){t.$set(t.addUserData,"userPwd",e)},expression:"addUserData.userPwd"}})],1),r("el-form-item",{attrs:{label:"身  份",prop:"identity"}},[r("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.addUserData.identity,callback:function(e){t.$set(t.addUserData,"identity",e)},expression:"addUserData.identity"}},t._l(t.allIdentity,function(t){return r("el-option",{key:t.id,attrs:{label:t.identityName,value:t.id}})}),1)],1),r("el-form-item",{staticClass:"add-user-submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitAddUser("addUserData")}}},[t._v("提   交")])],1)],1)],1),r("el-dialog",{attrs:{title:"添加新身份",visible:t.newAuthorViseble,width:"30%",center:""},on:{"update:visible":function(e){t.newAuthorViseble=e}}},[r("el-input",{staticStyle:{"margin-bottom":"40px"},attrs:{placeholder:"请输入新用户名称"},model:{value:t.newAuthor,callback:function(e){t.newAuthor=e},expression:"newAuthor"}}),r("el-button",{on:{click:function(e){t.newAuthorViseble=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary",loading:t.newLoading},on:{click:t.addNewAuthorFn}},[t._v("确 定")])],1)],1)},a=[],i=(r("8e6e"),r("96cf"),r("3b8d")),s=r("bd86"),o=(r("ac6a"),r("456d"),r("5df3"),r("751a")),d=r("f122");function l(){return o["a"].get(d["a"]+"/user/getAllUser")}function u(){return o["a"].get(d["a"]+"/user/getAllIdentity")}function c(){return o["a"].get(d["a"]+"/user/getAllAuthority")}function f(t){return o["a"].post(d["a"]+"/user/addNewUser",t)}function h(t){return o["a"].post(d["a"]+"/user/editUser",t)}function p(t){return o["a"].post(d["a"]+"/user/addAuthorityForIdentity",t)}function v(t){return o["a"].post(d["a"]+"/user/removeAuthorityForIdentity",t)}function m(t){return Promise.all([y(t),g(t)])}function y(t){return o["a"].get(d["a"]+"/user/getUserFromIdentity",{params:{identityId:t}})}function g(t){return o["a"].get(d["a"]+"/user/getAuthorityFromIdentity",{params:{identityId:t}})}function b(t){return o["a"].post(d["a"]+"/user/addNewIdentity",t)}function w(t){return o["a"].post(d["a"]+"/user/removeUserAndIdentity",t)}var _=r("a46e"),I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"moveblock",attrs:{draggable:"true"},on:{dragstart:t.dragstart}},[t._t("default")],2)},A=[],U={props:{movedata:Object},methods:{dragstart:function(t){var e=t.dataTransfer;e.setData("text/plain",JSON.stringify(this.movedata))}}},N=U,k=(r("a75e"),r("2877")),x=Object(k["a"])(N,I,A,!1,null,"0ff375c4",null),D=x.exports,O=r("fa7d");function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(r,!0).forEach(function(e){Object(s["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var C={data:function(){var t=function(t,e,r){var n=/^\w{4,8}$/;e?n.test(e)?r():r(new Error("用户名必须在4位-8位之间的字母或数字")):r(new Error("用户名不能为空"))},e=function(t,e,r){var n=/^\w{6,}$/;e?n.test(e)?r():r(new Error("密码必须在4位-8位之间的字母或数字")):r(new Error("密码不能为空"))};return{newAuthorViseble:!1,newLoading:!1,newAuthor:"",id:0,hoverIndex:-1,addUserDialogBtn:!1,addUserData:{userName:"",userPwd:"",identity:""},addUserRule:{userName:{required:!0,validator:t,trigger:"change"},userPwd:{required:!0,validator:e,trigger:"change"},identity:{required:!0,message:"必须要选择身份"}},allUser:[],allIdentity:[],allAuthority:[],userAFromI:[],aFromI:[]}},components:{scrollPane:_["a"],moveBlock:D},mounted:function(){var t=this;this.getAllUsers(),this.getAllI(!0),c().then(function(e){var r=e.data;t.allAuthority=Object.keys(r).map(function(t){return j({authorityName:t},r[t])})}),document.addEventListener("dragover",this.dragover)},destroyed:function(){document.removeEventListener("dragover",this.dragover)},methods:{deleteI:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,r){var n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n={},t.prev=1,t.next=4,Object(O["a"])();case 4:n.id=r?e.userid:e.id,n.tableName=r?"user":"identity",w(n).then(function(t){r?a.getAllUsers():a.getAllI(!1)}),t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](1);case 11:case"end":return t.stop()}},t,null,[[1,9]])}));function e(e,r){return t.apply(this,arguments)}return e}(),getAllI:function(t){var e=this;u().then(function(r){var n=r.data;t&&(e.id=n[0].id,e.currentIdentityName=n[0].identityName),e.showInfo(e.id),e.allIdentity=n})},addAuthor:function(){this.newAuthorViseble=!0},addNewAuthorFn:function(){var t=this;b({identityName:this.newAuthor}).then(function(e){t.newAuthorViseble=!1,t.newLoading=!1,t.getAllI(!1)}).catch(function(e){t.newLoading=!1})},deleteAuthor:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var r,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(O["a"])();case 3:r={identity_id:e.identity_id,authority:e.authority},v(r).then(function(t){n.showInfo(n.id)}),t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}},t,null,[[0,7]])}));function e(e){return t.apply(this,arguments)}return e}(),getAllUsers:function(){var t=this;l().then(function(e){var r=e.data;t.allUser=r})},dragover:function(t){t.preventDefault()},showInfo:function(t){var e=this;m(t).then(function(t){e.userAFromI=t[0].data,e.aFromI=t[1].data})},changeIdentity:function(t,e){this.id=t,this.currentIdentityName=e,console.log(this.id,this.currentIdentityName),this.showInfo(t)},dragenter:function(t){this.hoverIndex=t},drop:function(t,e){var r=this,n=t.dataTransfer,a=JSON.parse(n.getData("text/plain"));if(a.authorityName){var i={identity_id:e.id,authority:a.authorityName};p(i).then(function(t){r.changeIdentity(e.id,e.identityName)}).catch(function(){r.changeIdentity(e.id,e.identityName)})}else{var s={userid:a.userid,editData:{userName:a.userName,userPwd:a.userPwd,identity:e.id}};h(s).then(function(t){e.id===r.id&&r.changeIdentity(e.id,e.identityName),r.getAllUsers()})}this.hoverIndex=-1},handleClose:function(){this.addUserDialogBtn=!1},submitAddUser:function(t){var e=this;this.$refs[t].validate(function(t){t&&f(e.addUserData).then(function(t){var r=t.code;r&&(e.addUserDialogBtn=!1,e.getAllUsers())})})}}},F=C,S=(r("ab44"),Object(k["a"])(F,n,a,!1,null,"0b8daac8",null));e["default"]=S.exports},f6da:function(t,e,r){}}]);
//# sourceMappingURL=chunk-0950794f.8f9b1e6a.js.map