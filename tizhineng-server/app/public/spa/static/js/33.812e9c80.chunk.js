(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1095:function(e,t,a){e.exports={wrap:"login_wrap__3y5sZ",content:"login_content__xzDAd",chooes:"login_chooes__1-Q5o","login-form-button":"login_login-form-button__1uguS"}},1096:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setInfo",(function(){return P}));var r=a(29),o=(a(160),a(158)),c=(a(256),a(159)),s=(a(655),a(654)),i=(a(207),a(397)),u=(a(253),a(110)),l=a(527),m=a.n(l),d=(a(336),a(337)),p=a(528),h=a(7),g=a(8),w=a(10),f=a(9),b=a(11),_=a(0),k=a.n(_),v=a(1095),y=a.n(v),j=(a(1096),a(19)),E=a(13),N=a(22),O=a(512),z=new Headers({Accept:"application/json","Content-Type":"application/json",authorization:a.n(O).a.get("authorization"),"api-request":"yes"}),I=function(e,t){return fetch(e,{method:"POST",mode:"cors",credentials:"include",headers:z,body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject(e)}))},x=function(e){return I("/user/login",e)},S=a(14),P=function(e,t){var a=e.userName,n=e.userPwd,r=e.checked;return window.localStorage.setItem("tzn_user_name",a),function(){var a=Object(p.a)(m.a.mark((function a(o){var c,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,x(e);case 3:(c=a.sent).code&&(r?window.localStorage.setItem("tzn_user_pwd",n):window.localStorage.setItem("tzn_user_pwd",""),document.cookie="authorization=".concat(c.data.token),setTimeout((function(){t.push("/")}),0)),o({type:S.d,data:Object(N.a)({},c.data,{limitView:c.data.limitView.filter((function(e){return e.routeIsVisible}))})}),a.next=14;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,a.t0.json();case 12:s=a.sent,d.a.error(s.msg);case 14:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},V=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(w.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={userName:window.localStorage.getItem("tzn_user_name")||"",userPwd:window.localStorage.getItem("tzn_user_pwd")||"",checked:!!window.localStorage.getItem("tzn_user_pwd")},a.check=function(){var e=a.state.checked;a.setState({checked:!e})},a.login=Object(p.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state,n=t.userName,r=t.userPwd,""===n.trim()||""===r.trim()?d.a.error("\u7528\u6237\u540d\u6216\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"):a.props.setInfo(a.state,a.props.history);case 2:case"end":return e.stop()}}),e)}))),a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userName,a=e.userPwd,n=e.checked,r=this.props.form.getFieldDecorator;return k.a.createElement("div",{className:y.a.wrap},k.a.createElement("div",{className:y.a.content},k.a.createElement(s.a,{className:"login-form"},k.a.createElement(s.a.Item,null,r("userName",{initialValue:t,rules:[{required:!0,message:"\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"},{min:5,max:10,message:"\u957f\u5ea6\u4e0d\u5728\u8303\u56f4\u5185"},{pattern:new RegExp("^\\w+$","g"),message:"\u7528\u6237\u540d\u5fc5\u987b\u4e3a\u5b57\u6bcd\u6216\u8005\u6570\u5b57"}]})(k.a.createElement(i.a,{prefix:k.a.createElement(u.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",size:"large",onChange:this.changeValue.bind(this,"userName")}))),k.a.createElement(s.a.Item,null,r("userPwd",{initialValue:a,rules:[{required:!0,message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"}]})(k.a.createElement(i.a,{prefix:k.a.createElement(u.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",size:"large",onChange:this.changeValue.bind(this,"userPwd")}))),k.a.createElement(s.a.Item,{className:"".concat(y.a.chooes," chooes")},k.a.createElement(c.a,{checked:n,onChange:this.check},"\u8bb0\u4f4f\u5bc6\u7801"),k.a.createElement("a",{className:"login-form-forgot",href:"https://www.baidu.com"},"\u5fd8\u8bb0\u5bc6\u7801")),k.a.createElement(o.a,{type:"primary",htmlType:"submit",className:y.a["login-form-button"],onClick:this.login},"\u767b\u5f55"))))}},{key:"changeValue",value:function(e,t){var a=t.target.value.trim();this.setState(Object(r.a)({},e,a))}}]),t}(_.Component);t.default=Object(j.b)((function(e){return{}}),(function(e){return Object(E.b)(n,e)}))(s.a.create()(V))}}]);
//# sourceMappingURL=33.812e9c80.chunk.js.map