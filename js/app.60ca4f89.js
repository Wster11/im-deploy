(function(e){function t(t){for(var o,a,s=t[0],u=t[1],i=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(o=!1)}o&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={app:0},c={app:0},r=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2148baec":"4a34151c","chunk-5b40ba86":"806b6c54","chunk-5d544092":"12afa700","chunk-ae5f3aa2":"58e9a132","chunk-610a9ee0":"5440acf2","chunk-03f95fa3":"89021bb1","chunk-094f2de5":"c302e9ea","chunk-10e7bd4e":"686af640","chunk-2d41b023":"acbec963","chunk-6d3b59b6":"6a68baa5","chunk-a7e6578a":"b004b377"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2148baec":1,"chunk-5b40ba86":1,"chunk-5d544092":1,"chunk-ae5f3aa2":1,"chunk-610a9ee0":1,"chunk-03f95fa3":1,"chunk-094f2de5":1,"chunk-10e7bd4e":1,"chunk-2d41b023":1,"chunk-6d3b59b6":1,"chunk-a7e6578a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2148baec":"131501ca","chunk-5b40ba86":"864cdaea","chunk-5d544092":"73bc1d99","chunk-ae5f3aa2":"b02f5f8c","chunk-610a9ee0":"06b70a61","chunk-03f95fa3":"e735130a","chunk-094f2de5":"9707cc6c","chunk-10e7bd4e":"4ce45f21","chunk-2d41b023":"470db549","chunk-6d3b59b6":"12c8bf70","chunk-a7e6578a":"b153e957"}[e]+".css",c=u.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===o||l===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===o||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],f.parentNode.removeChild(f),n(r)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"211c":function(e,t,n){},"2eac":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o={noAuth:"token not assign error",loginFailed:"login failed",notLogin:"not login",recallTimeout:"exceed recall time limit",userNotFound:"user not found",invalidPassword:"invalid password",registerUnique:"duplicate_unique_property_exists",sendMsgBlock:"blocked"}},"3fff":function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return o})),n.d(t,"g",(function(){return d})),n.d(t,"m",(function(){return c})),n.d(t,"h",(function(){return r})),n.d(t,"l",(function(){return s})),n.d(t,"k",(function(){return i})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return u})),n.d(t,"e",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return g}));const o="easemob#easeim",a=localStorage.getItem("appkey")||o,c="true"===localStorage.getItem("useReplacedMessageContents"),r="true"===localStorage.getItem("isHttpDNS"),s="true"===localStorage.getItem("useCustomConfig"),u="true"===localStorage.getItem("isTokenLogin"),i=localStorage.getItem("url"),l=localStorage.getItem("restUrl"),d=a.split("#")[1],f="conference";var h,m,g;(function(e){e["read"]="read",e["delivery"]="delivery",e["channel"]="channel",e["txt"]="txt",e["cmd"]="cmd",e["custom"]="custom",e["loc"]="loc",e["img"]="img",e["audio"]="audio",e["file"]="file",e["video"]="video",e["combine"]="combine"})(h||(h={})),function(e){e["singleChat"]="singleChat",e["groupChat"]="groupChat",e["chatRoom"]="chatRoom"}(m||(m={})),function(e){e["recall"]="撤回",e["modify"]="编辑"}(g||(g={}))},"6c89":function(e,t,n){"use strict";var o=n("8ca0"),a=n("3fff");const c={appKey:a["f"],url:a["k"]||window.location.protocol+"//im-api-v2-hsb.easemob.com/ws",apiUrl:a["i"]||window.location.protocol+"//a1-hsb.easemob.com",useReplacedMessageContents:a["m"],isHttpDNS:a["h"]},r={appKey:a["b"]},s=new o["a"].connection(a["l"]?c:r);window.conn=s,t["a"]=s},afbc:function(e,t,n){"use strict";var o=n("6605");const a=[{path:"/",component:()=>n.e("chunk-a7e6578a").then(n.bind(null,"2a0a")),children:[{path:"/chat",name:"chat",component:()=>Promise.all([n.e("chunk-5b40ba86"),n.e("chunk-ae5f3aa2")]).then(n.bind(null,"2467"))},{path:"/contact",name:"contact",component:()=>n.e("chunk-2148baec").then(n.bind(null,"54fa"))},{path:"/user",name:"user",component:()=>Promise.all([n.e("chunk-610a9ee0"),n.e("chunk-10e7bd4e")]).then(n.bind(null,"a144"))},{path:"/setting",name:"setting",component:()=>Promise.all([n.e("chunk-610a9ee0"),n.e("chunk-094f2de5")]).then(n.bind(null,"82d4"))}]},{path:"/chat/to/:chatType/:fromId",name:"chatDetail",component:()=>Promise.all([n.e("chunk-5b40ba86"),n.e("chunk-5d544092")]).then(n.bind(null,"8d07"))},{path:"/login",component:()=>Promise.all([n.e("chunk-610a9ee0"),n.e("chunk-6d3b59b6")]).then(n.bind(null,"31e4"))},{path:"/register",component:()=>Promise.all([n.e("chunk-610a9ee0"),n.e("chunk-2d41b023")]).then(n.bind(null,"0511"))},{path:"/config",name:"config",component:()=>Promise.all([n.e("chunk-610a9ee0"),n.e("chunk-03f95fa3")]).then(n.bind(null,"ef83"))}],c=Object(o["b"])({history:Object(o["c"])(),routes:a});t["a"]=c},cd49:function(e,t,n){"use strict";n.r(t);n("27f1");var o=n("1c96"),a=n("7a23"),c=n("afbc"),r=n("5502");n("14d9");const s={namespaced:!0,state:{connect:{},chat:{}},mutations:{setConnect(e,t){e.connect=t},pushMessage(e,{fromId:t,message:n}){Object.prototype.hasOwnProperty.call(e.chat,t)?e.chat[t].messageList.push(n):e.chat[t]={messageList:[n]}},deleteMessage(e,{fromId:t,id:n}){if(e.chat[t]){const o=e.chat[t].messageList.findIndex(e=>e.id===n);o>-1&&e.chat[t].messageList.splice(o,1)}},updateMessage(e,{fromId:t,modifiedMsg:n}){if(e.chat[t]){const o=e.chat[t].messageList.findIndex(e=>e.id===n.id);o>-1&&(e.chat[t].messageList[o].msg=n.msg,e.chat[t].messageList[o].modifiedInfo=n.modifiedInfo)}}}};var u=s,i=Object(r["a"])({modules:{IM:u}});function l(e,t,n,o,c,r){const s=Object(a["resolveComponent"])("RouterView");return e.app.isShowApp?(Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:0})):Object(a["createCommentVNode"])("",!0)}n("ec5d");var d=n("2e9e"),f=n("9ab4"),h=n("ce1f"),m=n("6605"),g=n("6c89"),p=n("2eac"),b=n("f695"),k=n("3fff");let v=class extends h["b"]{constructor(){super(...arguments),this.app=Object(h["c"])(()=>{const e=Object(m["e"])(),t=Object(a["ref"])(!1),n=localStorage.getItem("token"),c=localStorage.getItem("uid"),s=()=>{n&&c?g["a"].open({accessToken:n,user:c}).then(()=>{e.push("/chat")}).catch(()=>{e.push("/login")}).finally(()=>{t.value=!0}):(t.value=!0,e.push("/login"))};return Object(a["onMounted"])(()=>{s(),document.oncontextmenu=function(e){e.preventDefault()};const t=Object(r["b"])();t.commit("IM/setConnect",g["a"]),g["a"].addEventHandler("Connected",{onConnected:()=>{Object(o["a"])("连接成功")},onDisconnected:()=>{Object(o["a"])("连接断开")}}),g["a"].addEventHandler("MESSAGE",{onCmdMessage:e=>{t.commit("IM/pushMessage",{fromId:Object(b["e"])(g["a"].user,e),message:e}),console.log("收到命令消息了",e)},onMessage:e=>{e.forEach(e=>{t.commit("IM/pushMessage",{fromId:Object(b["e"])(g["a"].user,e),message:e})})},onModifiedMessage:e=>{t.commit("IM/updateMessage",{fromId:Object(b["e"])(g["a"].user,e),modifiedMsg:e})},onRecallMessage:e=>{t.commit("IM/deleteMessage",{fromId:`${k["a"].singleChat}${e.from}`,id:e.mid}),t.commit("IM/deleteMessage",{fromId:`${k["a"].groupChat}${e.to}`,id:e.mid}),console.log("收到撤回消息了",e)},onDeliveredMessage:e=>{console.log("收到送达回执消息了",e)},onChannelMessage:e=>{console.log("收到会话已读回执消息了",e)},onReceivedMessage:e=>{console.log("收到消息送达服务器消息了",e)},onReadMessage:e=>{console.log("收到消息已读回执消息了",e)},onStatisticMessage:e=>{console.log("离线消息已读回执消息了",e)},onContactAgreed:e=>{Object(o["a"])(e.from+"已经同意您的好友申请")},onContactRefuse:e=>{Object(o["a"])(e.from+"拒绝了您的好友申请")},onContactDeleted:e=>{Object(o["a"])(e.from+"解除了与您的好友关系")},onContactInvited:e=>{d["a"].confirm({title:e.from+"请求添加您为好友",message:e.status}).then(()=>{g["a"].acceptContactInvite(e.from).then(()=>{Object(o["a"])("接受好友申请成功")}).catch(e=>{console.log("接收好友申请失败",e),Object(o["a"])("接收好友申请失败")})}).catch(()=>{g["a"].declineContactInvite(e.from).then(()=>{Object(o["a"])("拒绝好友申请成功")}).catch(e=>{console.log("接收好友申请失败",e),Object(o["a"])("拒绝好友申请失败")})})}}),g["a"].addEventHandler("ERROR",{onError:t=>{switch(t.message){case p["a"].noAuth:e.push("/login");break;default:break}}})}),{isShowApp:t}})}};v=Object(f["a"])([Object(h["a"])({components:{RouterView:m["a"]}})],v);var y=v,O=(n("d09e"),n("6b0d")),j=n.n(O);const M=j()(y,[["render",l]]);var w=M;Object(a["createApp"])(w).use(c["a"]).use(i).use(o["a"]).mount("#app")},d09e:function(e,t,n){"use strict";n("211c")},f695:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return h}));n("27f1");var o=n("1c96"),a=n("2eac"),c=n("8ca0"),r=n("6c89"),s=n("3fff");const u=e=>r["a"].send(e).then(t=>(e.id=t.serverMsgId,t)).catch(e=>{throw e.message===a["a"].notLogin?console.log("未登录"):e.message===a["a"].sendMsgBlock&&Object(o["a"])("您已被拉入黑名单"),console.log(e,"发送消息失败"),e}),i=e=>new Promise((t,n)=>{r["a"].recallMessage(e).then(e=>{t(e)}).catch(e=>{e.message===a["a"].notLogin?console.log("未登录"):e.message===a["a"].recallTimeout&&Object(o["a"])("已超过可撤回时间"),n(e),console.log(e,"撤回消息失败")})}),l=e=>c["a"].message.create(e),d=e=>({filename:e.name,filetype:e.type.split("/")[1],data:e}),f=e=>{var t,n,o;const a=new RegExp(`${s["g"]}_(\\S*)@|${s["g"]}_(\\S*)`);return null===(t=(null===(n=e.match(a))||void 0===n?void 0:n[1])||(null===(o=e.match(a))||void 0===o?void 0:o[2]))||void 0===t?void 0:t.replace(a,"")},h=(e,t)=>{const{to:n,from:o,chatType:a}=t;return e===t.from||a===s["a"].groupChat||a===s["a"].chatRoom?`${a}${n}`:`${a}${o}`}}});
//# sourceMappingURL=app.60ca4f89.js.map