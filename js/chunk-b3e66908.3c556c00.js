(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3e66908"],{"02ab":function(e,t,l){"use strict";l("68ef"),l("cb51"),l("3743"),l("8a0b")},"72ff":function(e,t,l){"use strict";l("68ef"),l("e3b3"),l("d9d2")},"82d4":function(e,t,l){"use strict";l.r(t);var c=l("7a23");const o=e=>(Object(c["pushScopeId"])("data-v-96718708"),e=e(),Object(c["popScopeId"])(),e),a={class:"settingWrap"},n=o(()=>Object(c["createElementVNode"])("br",null,null,-1)),r=o(()=>Object(c["createElementVNode"])("br",null,null,-1)),d=o(()=>Object(c["createElementVNode"])("br",null,null,-1)),i=o(()=>Object(c["createElementVNode"])("br",null,null,-1));function s(e,t,l,o,s,b){const u=Object(c["resolveComponent"])("NavBar"),j=Object(c["resolveComponent"])("Button"),O=Object(c["resolveComponent"])("Field"),g=Object(c["resolveComponent"])("CellGroup");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createVNode"])(u,{title:"Setting"}),Object(c["createVNode"])(g,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{modelValue:e.setting.userID,"onUpdate:modelValue":t[0]||(t[0]=t=>e.setting.userID=t),center:"",clearable:"",label:"添加好友",placeholder:"请输入好友ID"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.addFriend},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("添加")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(g,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{modelValue:e.setting.delUserID,"onUpdate:modelValue":t[1]||(t[1]=t=>e.setting.delUserID=t),center:"",clearable:"",label:"删除好友",placeholder:"请输入好友ID"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.delFriend},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("删除")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(g,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{modelValue:e.setting.blockStr,"onUpdate:modelValue":t[2]||(t[2]=t=>e.setting.blockStr=t),rows:"1",autosize:"",label:"黑名单列表",type:"textarea",center:"",placeholder:"黑名单"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{type:"primary",size:"small",onClick:e.setting.getBlockList},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("查看")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(g,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{modelValue:e.setting.blockId,"onUpdate:modelValue":t[3]||(t[3]=t=>e.setting.blockId=t),center:"",clearable:"",label:"加入黑名单",placeholder:"请输入好友ID"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.addBlock},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("加入")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(g,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{modelValue:e.setting.delBlockId,"onUpdate:modelValue":t[4]||(t[4]=t=>e.setting.delBlockId=t),center:"",clearable:"",label:"移除黑名单",placeholder:"请输入好友ID"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.delBlock},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("移除")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(g,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{modelValue:e.setting.groupId,"onUpdate:modelValue":t[5]||(t[5]=t=>e.setting.groupId=t),center:"",clearable:"",label:"加入群组",placeholder:"请输入群组ID"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.joinGroup},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("加入")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(g,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{modelValue:e.setting.roomId,"onUpdate:modelValue":t[6]||(t[6]=t=>e.setting.roomId=t),center:"",clearable:"",label:"聊天室ID",placeholder:"请输入聊天室ID"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{style:{"margin-right":"10px"},size:"small",type:"primary",onClick:e.setting.joinRoom},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("加入")]),_:1},8,["onClick"]),Object(c["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.leaveRoom},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("离开")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(g,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{modelValue:e.setting.infoGroupId,"onUpdate:modelValue":t[7]||(t[7]=t=>e.setting.infoGroupId=t),center:"",clearable:"",label:"获取群组信息",placeholder:"请输入群组ID"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.getGroupInfo},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("获取")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(g,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{modelValue:e.setting.remark,"onUpdate:modelValue":t[8]||(t[8]=t=>e.setting.remark=t),center:"",clearable:"",label:"设置好友备注",placeholder:"请输入好友备注"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.setRemark},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("设置")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(g,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{modelValue:e.setting.allContacts,"onUpdate:modelValue":t[9]||(t[9]=t=>e.setting.allContacts=t),center:"",clearable:"",label:"联系人列表",placeholder:"联系人列表"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.getAllContacts},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("获取所有联系人")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(g,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{modelValue:e.setting.cursor,"onUpdate:modelValue":t[10]||(t[10]=t=>e.setting.cursor=t),center:"",clearable:"",label:"Cursor",placeholder:"请输入cursor,默认为空"},null,8,["modelValue"]),Object(c["createVNode"])(O,{modelValue:e.setting.pageSize,"onUpdate:modelValue":t[11]||(t[11]=t=>e.setting.pageSize=t),center:"",clearable:"",label:"PageSize",placeholder:"请输入pageSize"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.getContactsWithCursor},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("分页获取联系人")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),n,r,d,i])}l("72ff");var b=l("e31f"),u=(l("21a7"),l("f23a")),j=(l("4d86"),l("a136")),O=(l("22fa"),l("2e1b")),g=(l("02ab"),l("dc94")),f=(l("27f1"),l("1c96")),p=l("9ab4"),V=l("ce1f"),h=l("5502"),m=l("3fff");let C=class extends V["b"]{constructor(){super(...arguments),this.setting=Object(V["c"])(()=>{const e=Object(h["b"])();let t=Object(c["ref"])(""),l=Object(c["ref"])(""),o=Object(c["ref"])(""),a=Object(c["ref"])(""),n=Object(c["ref"])(""),r=Object(c["ref"])(""),d=Object(c["ref"])(""),i=Object(c["ref"])(""),s=Object(c["ref"])(""),b=Object(c["ref"])(m["f"]),u=Object(c["ref"])(""),j=Object(c["ref"])(""),O=Object(c["ref"])(""),g=Object(c["ref"])(void 0);const p=()=>{e.state.IM.connect.getAllContacts().then(e=>{j.value=JSON.stringify(e.data),console.log("getAllContacts成功",e)}).catch(e=>{console.log("getAllContacts失败",e)})},V=()=>{e.state.IM.connect.getContactsWithCursor({cursor:O.value,pageSize:isNaN(Number(g.value))?g.value:Number(g.value)}).then(e=>{j.value=JSON.stringify(e.data),console.log("getContactsWithCursor成功",e)}).catch(e=>{console.log("getContactsWithCursor失败",e)})},C=()=>{e.state.IM.connect.getBlacklist().then(e=>{n.value=e.data.join("、")})},v=()=>{let t="添加个好友吧!";e.state.IM.connect.addContact(l.value,t).then(()=>{Object(f["a"])("发送好友请求成功")}).catch(e=>{console.log("发送好友请求失败",e),Object(f["a"])("发送好友请求失败")})},N=()=>{const t=r.value.split(",");e.state.IM.connect.addUsersToBlocklist({name:1===(null===t||void 0===t?void 0:t.length)?t[0]:t}).then(e=>{console.log(e,"addUsersToBlocklist res"),Object(f["a"])(`将${r.value}加入黑名单成功`)}).catch(e=>{console.log(`将${r.value}加入黑名单失败`,e),Object(f["a"])(`将${r.value}加入黑名单失败`)})},k=()=>{e.state.IM.connect.deleteContact(a.value).then(()=>{console.log("删除好友成功"),Object(f["a"])("删除好友成功")}).catch(e=>{console.log("删除好友失败",e),Object(f["a"])("删除好友失败")})},x=()=>{const t=d.value.split(",");e.state.IM.connect.removeUserFromBlocklist({name:1===(null===t||void 0===t?void 0:t.length)?t[0]:t}).then(()=>{Object(f["a"])(`将${d.value}移除黑名单成功`)}).catch(e=>{console.log("移除黑名单失败",e),Object(f["a"])(`将${d.value}移除黑名单失败`)})},I=()=>{e.state.IM.connect.joinGroup({groupId:i.value,message:"申请加入群组"}).then(()=>{Object(f["a"])("申请加入群组成功")}).catch(()=>{Object(f["a"])("申请加入群组失败")})},w=()=>{let t=s.value.split(",");1===t.length&&(t=t[0]),e.state.IM.connect.getGroupInfo({groupId:t}).then(e=>{console.log(e,"res")}).catch(e=>{console.log(e,"eee")})},_=()=>{e.state.IM.connect.setContactRemark({userId:l.value,remark:u.value}).then(()=>{console.log("设置备注成功")}).catch(e=>{console.log(e,"设置备注失败")})},y=()=>{e.state.IM.connect.joinChatRoom({roomId:o.value}).then(()=>{console.log("加入聊天室成功")}).catch(e=>{console.log(e,"加入聊天室失败")})},B=()=>{e.state.IM.connect.leaveChatRoom({roomId:o.value}).then(()=>{console.log("离开聊天室成功")}).catch(e=>{console.log(e,"离开聊天室失败")})};return Object(c["onMounted"])(()=>{}),{userStr:t,userID:l,delUserID:a,blockStr:n,blockId:r,roomId:o,delBlockId:d,appkey:b,groupId:i,infoGroupId:s,remark:u,allContacts:j,cursor:O,pageSize:g,getAllContacts:p,getContactsWithCursor:V,addFriend:v,delFriend:k,getBlockList:C,addBlock:N,delBlock:x,joinGroup:I,getGroupInfo:w,setRemark:_,joinRoom:y,leaveRoom:B}})}};C=Object(p["a"])([Object(V["a"])({components:{NavBar:g["a"],Button:O["b"],CellGroup:j["a"],Field:u["a"],Switch:b["a"]}})],C);var v=C,N=(l("b54d"),l("6b0d")),k=l.n(N);const x=k()(v,[["render",s],["__scopeId","data-v-96718708"]]);t["default"]=x},"8a0b":function(e,t,l){},"90ee":function(e,t,l){},b54d:function(e,t,l){"use strict";l("90ee")},d9d2:function(e,t,l){},dc94:function(e,t,l){"use strict";l.d(t,"a",(function(){return f}));var c=l("23f9"),o=l("7a23"),a=l("1fba"),n=l("e5f6"),r=l("5aa0"),d=l("d243"),i=l("fa8a"),s=l("9a1c");const[b,u]=Object(a["a"])("nav-bar"),j={title:String,fixed:Boolean,zIndex:n["f"],border:n["g"],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var O=Object(o["defineComponent"])({name:b,props:j,emits:["click-left","click-right"],setup(e,{emit:t,slots:l}){const c=Object(o["ref"])(),a=Object(i["a"])(c,u),n=e=>t("click-left",e),b=e=>t("click-right",e),j=()=>l.left?l.left():[e.leftArrow&&Object(o["createVNode"])(s["a"],{class:u("arrow"),name:"arrow-left"},null),e.leftText&&Object(o["createVNode"])("span",{class:u("text")},[e.leftText])],O=()=>l.right?l.right():Object(o["createVNode"])("span",{class:u("text")},[e.rightText]),g=()=>{const{title:t,fixed:a,border:i,zIndex:s}=e,g=Object(r["f"])(s),f=e.leftArrow||e.leftText||l.left,p=e.rightText||l.right;return Object(o["createVNode"])("div",{ref:c,style:g,class:[u({fixed:a}),{[d["b"]]:i,"van-safe-area-top":e.safeAreaInsetTop}]},[Object(o["createVNode"])("div",{class:u("content")},[f&&Object(o["createVNode"])("div",{class:[u("left"),d["h"]],onClick:n},[j()]),Object(o["createVNode"])("div",{class:[u("title"),"van-ellipsis"]},[l.title?l.title():t]),p&&Object(o["createVNode"])("div",{class:[u("right"),d["h"]],onClick:b},[O()])])])};return()=>e.fixed&&e.placeholder?a(g):g()}});const g=Object(c["a"])(O);var f=g},e31f:function(e,t,l){"use strict";l.d(t,"a",(function(){return g}));var c=l("23f9"),o=l("7a23"),a=l("1fba"),n=l("e5f6"),r=l("5aa0"),d=l("450f"),i=l("5913");const[s,b]=Object(a["a"])("switch"),u={size:n["f"],loading:Boolean,disabled:Boolean,modelValue:n["h"],activeColor:String,inactiveColor:String,activeValue:{type:n["h"],default:!0},inactiveValue:{type:n["h"],default:!1}};var j=Object(o["defineComponent"])({name:s,props:u,emits:["change","update:modelValue"],setup(e,{emit:t,slots:l}){const c=()=>e.modelValue===e.activeValue,a=()=>{if(!e.disabled&&!e.loading){const l=c()?e.inactiveValue:e.activeValue;t("update:modelValue",l),t("change",l)}},n=()=>{if(e.loading){const t=c()?e.activeColor:e.inactiveColor;return Object(o["createVNode"])(i["a"],{class:b("loading"),color:t},null)}if(l.node)return l.node()};return Object(d["useCustomFieldValue"])(()=>e.modelValue),()=>{var t;const{size:d,loading:i,disabled:s,activeColor:u,inactiveColor:j}=e,O=c(),g={fontSize:Object(r["a"])(d),backgroundColor:O?u:j};return Object(o["createVNode"])("div",{role:"switch",class:b({on:O,loading:i,disabled:s}),style:g,tabindex:s?void 0:0,"aria-checked":O,onClick:a},[Object(o["createVNode"])("div",{class:b("node")},[n()]),null==(t=l.background)?void 0:t.call(l)])}}});const O=Object(c["a"])(j);var g=O}}]);
//# sourceMappingURL=chunk-b3e66908.3c556c00.js.map