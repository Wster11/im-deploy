(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8550481a"],{2467:function(e,t,c){"use strict";c.r(t);var a=c("7a23");const o={class:"chatWrap"},r={class:"userListWrap"};function n(e,t,c,n,l,d){const i=Object(a["resolveComponent"])("Icon"),s=Object(a["resolveComponent"])("Popover"),b=Object(a["resolveComponent"])("NavBar"),u=Object(a["resolveComponent"])("User"),O=Object(a["resolveComponent"])("Empty");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(b,{title:"Message"},{right:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{overlay:!0,"overlay-style":{background:"rgba(0,0,0,0.4)"},placement:"bottom-end",show:e.chat.showPopover,"onUpdate:show":t[0]||(t[0]=t=>e.chat.showPopover=t),actions:e.chat.actions,onSelect:e.chat.onSelect},{reference:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{name:"plus",size:"20",color:"#1296db"})]),_:1},8,["overlay-style","show","actions","onSelect"])]),_:1}),Object(a["createElementVNode"])("div",r,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.chat.chatList,t=>(Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:t,chatType:t.chatType,lastMessage:t.lastMessage,name:e.chat.formatSessionListTo(t.channel_id),unReadCount:t.unread_num},null,8,["chatType","lastMessage","name","unReadCount"]))),128)),e.chat.chatList.length?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(O,{key:0,description:"会话列表为空"}))])])}c("68ef"),c("72cf");var l=c("23f9"),d=c("05df"),i=c("1fba"),s=c("e5f6"),b=c("5aa0");const[u,O]=Object(i["a"])("empty"),j={image:Object(s["e"])("default"),imageSize:[Number,String,Array],description:String};var h=Object(a["defineComponent"])({name:u,props:j,setup(e,{slots:t}){const c=()=>{const c=t.description?t.description():e.description;if(c)return Object(a["createVNode"])("p",{class:O("description")},[c])},o=()=>{if(t.default)return Object(a["createVNode"])("div",{class:O("bottom")},[t.default()])},r=Object(d["a"])(),n=e=>`${r}-${e}`,l=e=>`url(#${n(e)})`,i=(e,t,c)=>Object(a["createVNode"])("stop",{"stop-color":e,offset:t+"%","stop-opacity":c},null),s=(e,t)=>[i(e,0),i(t,100)],u=e=>[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("radialGradient",{id:n(e),cx:"50%",cy:"54%",fx:"50%",fy:"54%",r:"297%",gradientTransform:"matrix(-.16 0 0 -.33 .58 .72)"},[i("#EBEDF0",0),i("#F2F3F5",100,.3)])]),Object(a["createVNode"])("ellipse",{fill:l(e),opacity:".8",cx:"80",cy:"140",rx:"46",ry:"8"},null)],j=()=>[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{id:n("a"),x1:"64%",y1:"100%",x2:"64%"},[i("#FFF",0,.5),i("#F2F3F5",100)])]),Object(a["createVNode"])("g",{opacity:".8"},[Object(a["createVNode"])("path",{d:"M36 131V53H16v20H2v58h34z",fill:l("a")},null),Object(a["createVNode"])("path",{d:"M123 15h22v14h9v77h-31V15z",fill:l("a")},null)])],h=()=>[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{id:n("b"),x1:"64%",y1:"97%",x2:"64%",y2:"0%"},[i("#F2F3F5",0,.3),i("#F2F3F5",100)])]),Object(a["createVNode"])("g",{opacity:".8"},[Object(a["createVNode"])("path",{d:"M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",fill:l("b")},null),Object(a["createVNode"])("path",{d:"M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",fill:l("b")},null)])],p=()=>Object(a["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{id:n(1),x1:"64%",y1:"100%",x2:"64%"},[i("#FFF",0,.5),i("#F2F3F5",100)]),Object(a["createVNode"])("linearGradient",{id:n(2),x1:"50%",x2:"50%",y2:"84%"},[i("#EBEDF0",0),i("#DCDEE0",100,0)]),Object(a["createVNode"])("linearGradient",{id:n(3),x1:"100%",x2:"100%",y2:"100%"},[s("#EAEDF0","#DCDEE0")]),Object(a["createVNode"])("radialGradient",{id:n(4),cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54 0 .5 -.5)"},[i("#EBEDF0",0),i("#FFF",100,0)])]),Object(a["createVNode"])("g",{fill:"none"},[j(),Object(a["createVNode"])("path",{fill:l(4),d:"M0 139h160v21H0z"},null),Object(a["createVNode"])("path",{d:"M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",fill:l(2)},null),Object(a["createVNode"])("g",{opacity:".6","stroke-linecap":"round","stroke-width":"7"},[Object(a["createVNode"])("path",{d:"M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",stroke:l(3)},null),Object(a["createVNode"])("path",{d:"M53 36a34 34 0 0 0 0 48",stroke:l(3)},null),Object(a["createVNode"])("path",{d:"M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",stroke:l(3)},null),Object(a["createVNode"])("path",{d:"M106 84a34 34 0 0 0 0-48",stroke:l(3)},null)]),Object(a["createVNode"])("g",{transform:"translate(31 105)"},[Object(a["createVNode"])("rect",{fill:"#EBEDF0",width:"98",height:"34",rx:"2"},null),Object(a["createVNode"])("rect",{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.1"},null),Object(a["createVNode"])("rect",{fill:"#EBEDF0",x:"15",y:"12",width:"18",height:"6",rx:"1.1"},null)])])]),f=()=>Object(a["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:n(5)},[s("#F2F3F5","#DCDEE0")]),Object(a["createVNode"])("linearGradient",{x1:"95%",y1:"48%",x2:"5.5%",y2:"51%",id:n(6)},[s("#EAEDF1","#DCDEE0")]),Object(a["createVNode"])("linearGradient",{y1:"45%",x2:"100%",y2:"54%",id:n(7)},[s("#EAEDF1","#DCDEE0")])]),j(),h(),Object(a["createVNode"])("g",{transform:"translate(36 50)",fill:"none"},[Object(a["createVNode"])("g",{transform:"translate(8)"},[Object(a["createVNode"])("rect",{fill:"#EBEDF0",opacity:".6",x:"38",y:"13",width:"36",height:"53",rx:"2"},null),Object(a["createVNode"])("rect",{fill:l(5),width:"64",height:"66",rx:"2"},null),Object(a["createVNode"])("rect",{fill:"#FFF",x:"6",y:"6",width:"52",height:"55",rx:"1"},null),Object(a["createVNode"])("g",{transform:"translate(15 17)",fill:l(6)},[Object(a["createVNode"])("rect",{width:"34",height:"6",rx:"1"},null),Object(a["createVNode"])("path",{d:"M0 14h34v6H0z"},null),Object(a["createVNode"])("rect",{y:"28",width:"34",height:"6",rx:"1"},null)])]),Object(a["createVNode"])("rect",{fill:l(7),y:"61",width:"88",height:"28",rx:"1"},null),Object(a["createVNode"])("rect",{fill:"#F7F8FA",x:"29",y:"72",width:"30",height:"6",rx:"1"},null)])]),v=()=>Object(a["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:n(8)},[s("#EAEDF1","#DCDEE0")])]),j(),h(),u("c"),Object(a["createVNode"])("path",{d:"m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",fill:l(8)},null)]),N=()=>Object(a["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{x1:"50%",y1:"100%",x2:"50%",id:n(9)},[s("#EEE","#D8D8D8")]),Object(a["createVNode"])("linearGradient",{x1:"100%",y1:"50%",y2:"50%",id:n(10)},[s("#F2F3F5","#DCDEE0")]),Object(a["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:n(11)},[s("#F2F3F5","#DCDEE0")]),Object(a["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:n(12)},[s("#FFF","#F7F8FA")])]),j(),h(),u("d"),Object(a["createVNode"])("g",{transform:"rotate(-45 113 -4)",fill:"none"},[Object(a["createVNode"])("rect",{fill:l(9),x:"24",y:"52.8",width:"5.8",height:"19",rx:"1"},null),Object(a["createVNode"])("rect",{fill:l(10),x:"22.1",y:"67.3",width:"9.9",height:"28",rx:"1"},null),Object(a["createVNode"])("circle",{stroke:l(11),"stroke-width":"8",cx:"27",cy:"27",r:"27"},null),Object(a["createVNode"])("circle",{fill:l(12),cx:"27",cy:"27",r:"16"},null),Object(a["createVNode"])("path",{d:"M37 7c-8 0-15 5-16 12",stroke:l(11),"stroke-width":"3",opacity:".5","stroke-linecap":"round",transform:"rotate(45 29 13)"},null)])]),V=()=>{var c;if(t.image)return t.image();const o={error:v,search:N,network:p,default:f};return(null==(c=o[e.image])?void 0:c.call(o))||Object(a["createVNode"])("img",{src:e.image},null)};return()=>Object(a["createVNode"])("div",{class:O()},[Object(a["createVNode"])("div",{class:O("image"),style:Object(b["e"])(e.imageSize)},[V()]),c(),o()])}});const p=Object(l["a"])(h);var f=p,v=(c("b613"),c("b4d6")),N=(c("89a0"),c("9a1c")),V=(c("02ab"),c("dc94")),g=(c("14d9"),c("9ab4")),y=c("ce1f"),m=c("5502"),x=c("885a"),F=c("6605"),E=c("f695"),k=c("3fff");let C=class extends y["b"]{constructor(){super(...arguments),this.chat=Object(y["c"])(()=>{const e=Object(m["b"])(),t=Object(a["ref"])([]),c=Object(a["ref"])(!1),o=Object(F["e"])(),r=[{text:"添加好友"},{text:"设置"}],n=e=>{console.log(e),o.push("/setting")};return Object(a["onMounted"])(()=>{e.state.IM.connect.getConversationlist().then(e=>{var c;let a=null===(c=e.data)||void 0===c?void 0:c.channel_infos,o=[];null===a||void 0===a||a.forEach(e=>{let t=e.channel_id.indexOf(k["c"])>-1?k["a"].groupChat:k["a"].singleChat;o.push({...e,chatType:t})}),t.value=o})}),{chatList:t,showPopover:c,actions:r,onSelect:n,formatSessionListTo:E["d"]}})}};C=Object(g["a"])([Object(y["a"])({components:{User:x["a"],NavBar:V["a"],Icon:N["b"],Popover:v["a"],Empty:f}})],C);var w=C,B=(c("6a06"),c("6b0d")),D=c.n(B);const M=D()(w,[["render",n],["__scopeId","data-v-21a9ad24"]]);t["default"]=M},"342b":function(e,t,c){},"3b1d":function(e,t,c){},"6a06":function(e,t,c){"use strict";c("342b")},"72cf":function(e,t,c){},"885a":function(e,t,c){"use strict";var a=c("7a23");const o={key:0},r={key:0,class:"lastMsg"},n={key:1,class:"lastMsg"};function l(e,t,c,l,d,i){var s,b;const u=Object(a["resolveComponent"])("Badge");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"userWrap",onClick:t[0]||(t[0]=t=>e.user.toContact(e.name,e.chatType))},[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(e.chatType!==e.user.CHAT_TYPE.singleChat?"avatar defaultGroupAvatar":"avatar defaultAvatar"),style:Object(a["normalizeStyle"])(null!==(s=e.user.info)&&void 0!==s&&s.avatarurl?`background: url(${e.user.info.avatarurl});background-size: 100%`:"")},[e.unReadCount?(Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:0,content:e.unReadCount},null,8,["content"])):Object(a["createCommentVNode"])("",!0)],6),Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.chatType===e.user.CHAT_TYPE.groupChat?""+((null===(b=e.user.info)||void 0===b?void 0:b.name)||e.name):e.user.info.nickname||e.name),1),e.lastMessage?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,["txt"===e.lastMessage.type?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,Object(a["toDisplayString"])(e.lastMessage.msg),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,Object(a["toDisplayString"])(`[${e.lastMessage.type}]`),1))])):Object(a["createCommentVNode"])("",!0)])])}c("68ef"),c("cb51");var d=c("8be7"),i=(c("14d9"),c("cb9e"),c("9ab4")),s=c("ce1f"),b=c("6605"),u=c("3fff"),O=c("5502");class j{}let h=class extends(s["b"].with(j)){constructor(){super(...arguments),this.user=Object(s["c"])(()=>{const e=Object(O["b"])(),t=Object(b["e"])(),c=Object(a["getCurrentInstance"])(),o=Object(a["reactive"])({}),r=e.state.IM.connect,n=(e,c)=>{t.push(`/chat/to/${c}/${encodeURIComponent(e)}`)},l=()=>{(null===c||void 0===c?void 0:c.props.chatType)===u["a"].singleChat?r.fetchUserInfoById(null===c||void 0===c?void 0:c.props.name).then(e=>{var t;Object.assign(o,null===(t=e.data)||void 0===t?void 0:t[null===c||void 0===c?void 0:c.props.name],{success:!0})}):(null===c||void 0===c?void 0:c.props.chatType)===u["a"].groupChat?(r.getGroupInfo({groupId:null===c||void 0===c?void 0:c.props.name}).then(e=>{var t;Object.assign(o,null===(t=e.data)||void 0===t?void 0:t[0],{success:!0})}),Object.assign(o,{success:!0})):Object.assign(o,{success:!0})};return Object(a["onMounted"])(()=>{l()}),{toContact:n,CHAT_TYPE:u["a"],info:o}})}};h=Object(i["a"])([Object(s["a"])({props:{name:"",chatType:u["a"],lastMessage:null,unReadCount:0},components:{Badge:d["b"]}})],h);var p=h,f=(c("9691"),c("6b0d")),v=c.n(f);const N=v()(p,[["render",l],["__scopeId","data-v-4d528920"]]);t["a"]=N},9691:function(e,t,c){"use strict";c("3b1d")}}]);
//# sourceMappingURL=chunk-8550481a.6114c766.js.map