(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{139:function(e,t){},143:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),l=n(25),i=n(11),s=n(10),u=n(12),m=n(67),d=n.n(m),f=Object(a.createContext)(),g=function(e,t){switch(t.type){case"LOG_USER":return Object(s.a)({},e,{user:t.user,isLogged:!0,loading:!1});case"LOG_OUT":return Object(s.a)({},e,{user:{},isLogged:!1});case"SET_LOADING":return Object(s.a)({},e,{loading:!0});default:return e}},p=function(e){var t=Object(a.useReducer)(g,{user:{},isLogged:!1,loading:!1}),n=Object(u.a)(t,2),c=n[0],o=n[1],l=function(){return o({type:"SET_LOADING"})};return r.a.createElement(f.Provider,{value:{user:c.user,isLogged:c.isLogged,loading:c.loading,logUser:function(e){var t=Math.floor(10*Math.random())+1;l(),d.a.get("https://reqres.in/api/users/".concat(t)).then((function(t){var n=Object(s.a)({},t.data.data);n.first_name=e.charAt(0).toUpperCase()+e.slice(1),o({type:"LOG_USER",user:n})}))},logOut:function(){return o({type:"LOG_OUT"})}}},e.children)},b=n(76),v=function(e){var t=e.component,n=Object(b.a)(e,["component"]),c=Object(a.useContext)(f).isLogged;return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return c?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/react-chat/",state:{from:e.location}}})}}))},E=n(75),h=n(5),O=n(69),x=n(70),j=n.n(x)()("".concat("https://chateam-server.herokuapp.com/"));j.on("welcome",(function(e){return console.log(e)}));var y=j,w=n(6);function N(){var e=Object(h.a)(["\n  width: fit-content;\n  background-color: #7ec6d2;\n  padding: 15px;\n  border-radius: 3px;\n"]);return N=function(){return e},e}var k=w.b.div(N()),_=function(e){var t=e.list,n=Object(a.useContext)(f).user,c=function(e){return r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("b",{style:{color:"#1e606b",fontSize:14}},e.user.first_name)," "),r.a.createElement("span",{style:{color:"#1e606b",marginLeft:6,fontSize:14}},e.time))};return r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col-md"},t.map((function(e,t,a){return r.a.createElement("div",{key:t,className:"d-flex align-items-end ".concat(n.first_name===e.user.first_name?"justify-content-end text-right":"")},r.a.createElement(k,{className:"mb-1"},function(e,t,a){if(0===t)return c(e);var r=a[t-1].user;return n.first_name===e.user.first_name&&n.first_name===r.first_name||n.first_name!==e.user.first_name&&r.first_name===e.user.first_name?null:c(e)}(e,t,a),r.a.createElement("div",{style:{color:"white"}},e.msg)))}))))};function L(){var e=Object(h.a)(["\n  width: 100%;\n  height: 50px;\n  padding: 0px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  border: none;\n  background-color: #f0f0f0;\n  border-radius: 100px;\n  &:focus {\n    outline: none;\n    border: 1px solid #d7d7d7;\n  }\n"]);return L=function(){return e},e}var S=w.b.input(L()),C=function(e){return r.a.createElement(S,e)};function U(){var e=Object(h.a)(["\n      background-image: linear-gradient(120deg, #6f6f6f 0%, #303030 100%);\n    "]);return U=function(){return e},e}function T(){var e=Object(h.a)(["\n      background-image: linear-gradient(120deg, #fbac4a 0%, #f26535 100%);\n    "]);return T=function(){return e},e}function G(){var e=Object(h.a)(["\n  width: 100%;\n  height: 50px;\n  padding: 0px;\n  padding-right: 2px;\n  padding-bottom: 0px;\n  border: none;\n  border-radius: 100px;\n  color: white;\n  float: right;\n\n  &:focus {\n    outline: none !important;\n  }\n\n  &:active {\n    opacity: 80%;\n  }\n\n  ",";\n  ",";\n"]);return G=function(){return e},e}var B=w.b.button(G(),(function(e){return e.primary&&Object(w.a)(T())}),(function(e){return e.dark&&Object(w.a)(U())})),D=function(e){return r.a.createElement(B,e)};function I(){var e=Object(h.a)(["\n  width: 100%;\n  height: 500px;\n  padding: 30px;\n  background-color: #f0f0f0;\n  border-radius: 8px;\n  overflow-y: auto;\n  ::-webkit-scrollbar {\n    width: 0px;\n  }\n"]);return I=function(){return e},e}var M=w.b.div(I()),R=function(){var e=Object(a.useContext)(f).user,t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)([]),i=Object(u.a)(l,2),m=i[0],d=i[1];Object(a.useEffect)((function(){y.on("message",(function(e){d((function(t){return[].concat(Object(E.a)(t),[Object(s.a)({},e)])})),g()}))}),[]);var g=function(){O.animateScroll.scrollToBottom({containerId:"display"})};return r.a.createElement("div",{className:"h-100 d-flex justify-content-center w-100"},r.a.createElement("div",{className:"row mt-5",style:{width:"100%"}},r.a.createElement("div",{className:"col-md"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},r.a.createElement(M,{id:"display"},r.a.createElement(_,{list:m})))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),c.length>0&&(y.emit("chatMessage",e,c),console.log("===================================="),console.log(c),console.log("===================================="),o(""))},className:"pt-4 mb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-sm-10"},r.a.createElement("div",{className:"form-group"},r.a.createElement(C,{type:"text",value:c,placeholder:"Type message...",onChange:function(e){return o(e.target.value)}}))),r.a.createElement("div",{className:"col"},r.a.createElement(D,{primary:!0},r.a.createElement("i",{className:"fas fa-paper-plane fa-sm"}))))))))},A=function(){return r.a.createElement("div",null,"Landing Users")},z=n(40),J=n.n(z),W=n(74),q=n(27),F=n.n(q),P=function(){var e=Object(a.useContext)(f),t=e.logUser,n=e.isLogged,c=Object(a.useState)(""),o=Object(u.a)(c,2),l=o[0],s=o[1],m=function(){var e=Object(W.a)(J.a.mark((function e(n){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(l.length>1)){e.next=4;break}return e.next=4,t(l);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?r.a.createElement(i.a,{to:"/chat"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"h-100 d-flex flex-column justify-content-center"},r.a.createElement("div",{className:"row",style:{marginBottom:70}},r.a.createElement("div",{className:"col-md text-center"},r.a.createElement("img",{src:F.a,width:120,alt:"logo"}))),r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement("form",{onSubmit:function(e){return m(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement(C,{type:"text",value:l,placeholder:"Type your user...",onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(D,{primary:!0},"Login")))))))},$=function(){return r.a.createElement("div",null,"Register")},H=function(){var e=Object(a.useContext)(f),t=e.isLogged,n=e.logOut,c=e.user;return t?r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"#!"},r.a.createElement("img",{src:F.a,width:25,alt:"logo",className:"ml-3"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md col-sm-3 text-right align-self-center d-none d-sm-block"},r.a.createElement("span",{className:"text-secondary"},c.first_name)),r.a.createElement("div",{className:"col-md col-sm"},r.a.createElement(D,{dark:!0,onClick:n,className:"my-2 my-sm-0",style:{height:40,width:120}},"Sing out")))):null},K=(n(143),function(){return r.a.createElement(l.a,null,r.a.createElement(p,null,r.a.createElement(H,null),r.a.createElement("div",{className:"container",style:{height:"100vh"}},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/react-chat/",component:P}),r.a.createElement(i.b,{path:"/register",component:$}),r.a.createElement(v,{path:"/chat",component:R}),r.a.createElement(v,{path:"/users",component:A})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,t,n){e.exports=n.p+"static/media/logo.023d1b62.png"},78:function(e,t,n){e.exports=n(144)}},[[78,1,2]]]);
//# sourceMappingURL=main.9e9a0d30.chunk.js.map