(function(e){function n(n){for(var o,c,s=n[0],u=n[1],i=n[2],l=0,d=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(n);while(d.length)d.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,c=1;c<t.length;c++){var s=t[c];0!==a[s]&&(o=!1)}o&&(r.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},c={app:0},a={app:0},r=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-156373d6":"9e9ff107","chunk-5b40ba86":"806b6c54","chunk-01784922":"815b31cc","chunk-1067c6ca":"4ba2f576","chunk-610a9ee0":"5440acf2","chunk-2767f02c":"66ab0a04","chunk-2eb8e7cb":"14fd3543","chunk-4248d516":"a9a8b2ec","chunk-4e395c6a":"ecafae44","chunk-bd07f83a":"4e3b5537","chunk-a7e6578a":"46aeb282"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-156373d6":1,"chunk-5b40ba86":1,"chunk-01784922":1,"chunk-1067c6ca":1,"chunk-610a9ee0":1,"chunk-2767f02c":1,"chunk-2eb8e7cb":1,"chunk-4248d516":1,"chunk-4e395c6a":1,"chunk-bd07f83a":1,"chunk-a7e6578a":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-156373d6":"9b7691fc","chunk-5b40ba86":"864cdaea","chunk-01784922":"0dca8853","chunk-1067c6ca":"6573d9ff","chunk-610a9ee0":"06b70a61","chunk-2767f02c":"12c8bf70","chunk-2eb8e7cb":"e94c212f","chunk-4248d516":"e735130a","chunk-4e395c6a":"470db549","chunk-bd07f83a":"d92c6559","chunk-a7e6578a":"b153e957"}[e]+".css",a=u.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===o||l===a))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===o||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[e],f.parentNode.removeChild(f),t(r)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,t){o=a[e]=[n,t]}));n.push(o[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",d.name="ChunkLoadError",d.type=o,d.request=c,t[1](d)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var f=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"2eac":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));const o={noAuth:"token not assign error",loginFailed:"login failed",notLogin:"not login",recallTimeout:"exceed recall time limit",userNotFound:"user not found",invalidPassword:"invalid password",registerUnique:"duplicate_unique_property_exists",sendMsgBlock:"blocked"}},"3fff":function(e,n,t){"use strict";t.d(n,"f",(function(){return c})),t.d(n,"c",(function(){return f})),t.d(n,"b",(function(){return o})),t.d(n,"g",(function(){return d})),t.d(n,"m",(function(){return a})),t.d(n,"h",(function(){return r})),t.d(n,"l",(function(){return s})),t.d(n,"k",(function(){return i})),t.d(n,"i",(function(){return l})),t.d(n,"j",(function(){return u})),t.d(n,"e",(function(){return h})),t.d(n,"a",(function(){return m})),t.d(n,"d",(function(){return g}));const o="easemob#easeim",c=localStorage.getItem("appkey")||o,a="true"===localStorage.getItem("useReplacedMessageContents"),r="true"===localStorage.getItem("isHttpDNS"),s="true"===localStorage.getItem("useCustomConfig"),u="true"===localStorage.getItem("isTokenLogin"),i=localStorage.getItem("url"),l=localStorage.getItem("restUrl"),d=c.split("#")[1],f="conference";var h,m,g;(function(e){e["read"]="read",e["delivery"]="delivery",e["channel"]="channel",e["txt"]="txt",e["cmd"]="cmd",e["custom"]="custom",e["loc"]="loc",e["img"]="img",e["audio"]="audio",e["file"]="file",e["video"]="video",e["combine"]="combine"})(h||(h={})),function(e){e["singleChat"]="singleChat",e["groupChat"]="groupChat",e["chatRoom"]="chatRoom"}(m||(m={})),function(e){e["recall"]="撤回",e["modify"]="编辑"}(g||(g={}))},6611:function(e,n,t){"use strict";t("7568")},"6c89":function(e,n,t){"use strict";var o=t("8ca0"),c=t("3fff");const a={appKey:c["f"],url:c["k"]||window.location.protocol+"//im-api-v2-hsb.easemob.com/ws",apiUrl:c["i"]||window.location.protocol+"//a1-hsb.easemob.com",useReplacedMessageContents:c["m"],isHttpDNS:c["h"]},r={appKey:c["b"]};o["a"].logger.enableAll();const s=new o["a"].connection(c["l"]?a:r);window.websdk=o["a"],window.conn=s,n["a"]=s},7568:function(e,n,t){},afbc:function(e,n,t){"use strict";var o=t("6605");const c=[{path:"/",component:()=>t.e("chunk-a7e6578a").then(t.bind(null,"2a0a")),children:[{path:"/chat",name:"chat",component:()=>Promise.all([t.e("chunk-5b40ba86"),t.e("chunk-01784922")]).then(t.bind(null,"2467"))},{path:"/contact",name:"contact",component:()=>t.e("chunk-156373d6").then(t.bind(null,"54fa"))},{path:"/user",name:"user",component:()=>Promise.all([t.e("chunk-610a9ee0"),t.e("chunk-2eb8e7cb")]).then(t.bind(null,"a144"))},{path:"/setting",name:"setting",component:()=>Promise.all([t.e("chunk-610a9ee0"),t.e("chunk-bd07f83a")]).then(t.bind(null,"82d4"))}]},{path:"/chat/to/:chatType/:fromId",name:"chatDetail",component:()=>Promise.all([t.e("chunk-5b40ba86"),t.e("chunk-1067c6ca")]).then(t.bind(null,"8d07"))},{path:"/login",component:()=>Promise.all([t.e("chunk-610a9ee0"),t.e("chunk-2767f02c")]).then(t.bind(null,"31e4"))},{path:"/register",component:()=>Promise.all([t.e("chunk-610a9ee0"),t.e("chunk-4e395c6a")]).then(t.bind(null,"0511"))},{path:"/config",name:"config",component:()=>Promise.all([t.e("chunk-610a9ee0"),t.e("chunk-4248d516")]).then(t.bind(null,"ef83"))}],a=Object(o["b"])({history:Object(o["c"])(),routes:c});n["a"]=a},cd49:function(e,n,t){"use strict";t.r(n);t("27f1");var o=t("1c96"),c=t("7a23"),a=t("afbc"),r=t("5502");t("14d9");const s={namespaced:!0,state:{connect:{},chat:{}},mutations:{setConnect(e,n){e.connect=n},pushMessage(e,{fromId:n,message:t}){Object.prototype.hasOwnProperty.call(e.chat,n)?e.chat[n].messageList.push(t):e.chat[n]={messageList:[t]}},deleteMessage(e,{fromId:n,id:t}){if(e.chat[n]){const o=e.chat[n].messageList.findIndex(e=>e.id===t);o>-1&&e.chat[n].messageList.splice(o,1)}},updateMessage(e,{fromId:n,modifiedMsg:t}){if(e.chat[n]){const o=e.chat[n].messageList.findIndex(e=>e.id===t.id);o>-1&&(e.chat[n].messageList[o].msg=t.msg,e.chat[n].messageList[o].modifiedInfo=t.modifiedInfo)}}}};var u=s,i=Object(r["a"])({modules:{IM:u}});function l(e,n,t,o,a,r){const s=Object(c["resolveComponent"])("RouterView");return e.app.isShowApp?(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:0})):Object(c["createCommentVNode"])("",!0)}t("ec5d");var d=t("2e9e"),f=t("9ab4"),h=t("ce1f"),m=t("6605"),g=t("6c89"),p=t("2eac"),b=t("f695"),v=t("3fff");let k=class extends h["b"]{constructor(){super(...arguments),this.app=Object(h["c"])(()=>{const e=Object(m["e"])(),n=Object(c["ref"])(!1),t=localStorage.getItem("token"),a=localStorage.getItem("uid"),s=()=>{t&&a?g["a"].open({accessToken:t,user:a}).then(()=>{e.push("/chat")}).catch(()=>{e.push("/login")}).finally(()=>{n.value=!0}):(n.value=!0,e.push("/login"))};return Object(c["onMounted"])(()=>{s(),document.oncontextmenu=function(e){e.preventDefault()};const n=Object(r["b"])();n.commit("IM/setConnect",g["a"]),g["a"].addEventHandler("Connected",{onConnected:()=>{Object(o["a"])("连接成功")},onDisconnected:()=>{Object(o["a"])("连接断开")}}),g["a"].addEventHandler("MESSAGE",{onCmdMessage:e=>{n.commit("IM/pushMessage",{fromId:Object(b["e"])(g["a"].user,e),message:e}),console.log("收到命令消息了",e)},onMessage:e=>{e.forEach(e=>{n.commit("IM/pushMessage",{fromId:Object(b["e"])(g["a"].user,e),message:e})})},onModifiedMessage:e=>{n.commit("IM/updateMessage",{fromId:Object(b["e"])(g["a"].user,e),modifiedMsg:e})},onRecallMessage:e=>{n.commit("IM/deleteMessage",{fromId:`${v["a"].singleChat}${e.from}`,id:e.mid}),n.commit("IM/deleteMessage",{fromId:`${v["a"].groupChat}${e.to}`,id:e.mid}),console.log("收到撤回消息了",e)},onDeliveredMessage:e=>{console.log("收到送达回执消息了",e)},onChannelMessage:e=>{console.log("收到会话已读回执消息了",e)},onReceivedMessage:e=>{console.log("收到消息送达服务器消息了",e)},onReadMessage:e=>{console.log("收到消息已读回执消息了",e)},onStatisticMessage:e=>{console.log("离线消息已读回执消息了",e)},onContactAgreed:e=>{Object(o["a"])(e.from+"已经同意您的好友申请")},onContactRefuse:e=>{Object(o["a"])(e.from+"拒绝了您的好友申请")},onContactDeleted:e=>{Object(o["a"])(e.from+"解除了与您的好友关系")},onContactInvited:e=>{d["a"].confirm({title:e.from+"请求添加您为好友",message:e.status}).then(()=>{g["a"].acceptContactInvite(e.from).then(()=>{Object(o["a"])("接受好友申请成功")}).catch(e=>{console.log("接收好友申请失败",e),Object(o["a"])("接收好友申请失败")})}).catch(()=>{g["a"].declineContactInvite(e.from).then(()=>{Object(o["a"])("拒绝好友申请成功")}).catch(e=>{console.log("接收好友申请失败",e),Object(o["a"])("拒绝好友申请失败")})})}}),g["a"].addEventHandler("ERROR",{onError:n=>{switch(n.message){case p["a"].noAuth:e.push("/login");break;default:break}}}),g["a"].addEventHandler("CHATROOM",{onChatroomEvent:e=>{"memberPresence"===e.operation&&console.log(null===e||void 0===e?void 0:e.memberCount)}}),g["a"].addEventHandler("GROUP",{onGroupEvent:e=>{"memberAbsence"===e.operation&&console.log(null===e||void 0===e?void 0:e.memberCount)}})}),{isShowApp:n}})}};k=Object(f["a"])([Object(h["a"])({components:{RouterView:m["a"]}})],k);var O=k,y=(t("6611"),t("d959")),j=t.n(y);const M=j()(O,[["render",l]]);var w=M;Object(c["createApp"])(w).use(a["a"]).use(i).use(o["a"]).mount("#app")},f695:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return l})),t.d(n,"f",(function(){return i})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return h}));t("27f1");var o=t("1c96"),c=t("2eac"),a=t("8ca0"),r=t("6c89"),s=t("3fff");const u=e=>r["a"].send(e).then(n=>(e.id=n.serverMsgId,n)).catch(e=>{throw e.message===c["a"].notLogin?console.log("未登录"):e.message===c["a"].sendMsgBlock&&Object(o["a"])("您已被拉入黑名单"),console.log(e,"发送消息失败"),e}),i=e=>new Promise((n,t)=>{r["a"].recallMessage(e).then(e=>{n(e)}).catch(e=>{e.message===c["a"].notLogin?console.log("未登录"):e.message===c["a"].recallTimeout&&Object(o["a"])("已超过可撤回时间"),t(e),console.log(e,"撤回消息失败")})}),l=e=>a["a"].message.create(e),d=e=>({filename:e.name,filetype:e.type.split("/")[1],data:e}),f=e=>{var n,t,o;const c=new RegExp(`${s["g"]}_(\\S*)@|${s["g"]}_(\\S*)`);return null===(n=(null===(t=e.match(c))||void 0===t?void 0:t[1])||(null===(o=e.match(c))||void 0===o?void 0:o[2]))||void 0===n?void 0:n.replace(c,"")},h=(e,n)=>{const{to:t,from:o,chatType:c}=n;return e===n.from||c===s["a"].groupChat||c===s["a"].chatRoom?`${c}${t}`:`${c}${o}`}}});
//# sourceMappingURL=app.d6accfe8.js.map