(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd67bfc8"],{"02ab":function(e,t,c){"use strict";c("68ef"),c("cb51"),c("3743"),c("8a0b")},"5d4b":function(e,t,c){"use strict";c.d(t,"a",(function(){return O}));var o=c("23f9"),l=c("7a23"),a=c("1fba"),n=c("e5f6"),r=c("d243"),s=c("9a1c");const[i,d]=Object(a["a"])("tag"),b={size:String,mark:Boolean,show:n["g"],type:Object(n["e"])("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var u=Object(l["defineComponent"])({name:i,props:b,emits:["close"],setup(e,{slots:t,emit:c}){const o=e=>{e.stopPropagation(),c("close",e)},a=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},n=()=>{var c;const{type:n,mark:i,plain:b,round:u,size:j,closeable:O}=e,g={mark:i,plain:b,round:u};j&&(g[j]=j);const p=O&&Object(l["createVNode"])(s["a"],{name:"cross",class:[d("close"),r["h"]],onClick:o},null);return Object(l["createVNode"])("span",{style:a(),class:d([g,n])},[null==(c=t.default)?void 0:c.call(t),p])};return()=>Object(l["createVNode"])(l["Transition"],{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?n():null]})}});const j=Object(o["a"])(u);var O=j},"72ff":function(e,t,c){"use strict";c("68ef"),c("e3b3"),c("d9d2")},"82d4":function(e,t,c){"use strict";c.r(t);var o=c("7a23");const l=e=>(Object(o["pushScopeId"])("data-v-fa315948"),e=e(),Object(o["popScopeId"])(),e),a={class:"settingWrap"},n=l(()=>Object(o["createElementVNode"])("br",null,null,-1)),r=l(()=>Object(o["createElementVNode"])("br",null,null,-1)),s=l(()=>Object(o["createElementVNode"])("br",null,null,-1)),i=l(()=>Object(o["createElementVNode"])("br",null,null,-1));function d(e,t,c,l,d,b){const u=Object(o["resolveComponent"])("NavBar"),j=Object(o["resolveComponent"])("Button"),O=Object(o["resolveComponent"])("Field"),g=Object(o["resolveComponent"])("CellGroup"),p=Object(o["resolveComponent"])("Tag"),V=Object(o["resolveComponent"])("Switch");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(u,{title:"Setting"}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.userID,"onUpdate:modelValue":t[0]||(t[0]=t=>e.setting.userID=t),center:"",clearable:"",label:"添加好友",placeholder:"请输入好友ID"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.addFriend},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("添加")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.delUserID,"onUpdate:modelValue":t[1]||(t[1]=t=>e.setting.delUserID=t),center:"",clearable:"",label:"删除好友",placeholder:"请输入好友ID"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.delFriend},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("删除")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.blockStr,"onUpdate:modelValue":t[2]||(t[2]=t=>e.setting.blockStr=t),rows:"1",autosize:"",label:"黑名单列表",type:"textarea",center:"",placeholder:"黑名单"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{type:"primary",size:"small",onClick:e.setting.getBlockList},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("查看")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.blockId,"onUpdate:modelValue":t[3]||(t[3]=t=>e.setting.blockId=t),center:"",clearable:"",label:"加入黑名单",placeholder:"请输入好友ID"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.addBlock},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("加入")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.delBlockId,"onUpdate:modelValue":t[4]||(t[4]=t=>e.setting.delBlockId=t),center:"",clearable:"",label:"移除黑名单",placeholder:"请输入好友ID"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.delBlock},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("移除")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.groupId,"onUpdate:modelValue":t[5]||(t[5]=t=>e.setting.groupId=t),center:"",clearable:"",label:"加入群组",placeholder:"请输入群组ID"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.joinGroup},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("加入")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.roomId,"onUpdate:modelValue":t[6]||(t[6]=t=>e.setting.roomId=t),center:"",clearable:"",label:"聊天室ID",placeholder:"请输入聊天室ID"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{style:{"margin-right":"10px"},size:"small",type:"primary",onClick:e.setting.joinRoom},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("加入")]),_:1},8,["onClick"]),Object(o["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.leaveRoom},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("离开")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.infoGroupId,"onUpdate:modelValue":t[7]||(t[7]=t=>e.setting.infoGroupId=t),center:"",clearable:"",label:"获取群组信息",placeholder:"请输入群组ID"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.getGroupInfo},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("获取")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.remark,"onUpdate:modelValue":t[8]||(t[8]=t=>e.setting.remark=t),center:"",clearable:"",label:"设置好友备注",placeholder:"请输入好友备注"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.setRemark},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("设置")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.allContacts,"onUpdate:modelValue":t[9]||(t[9]=t=>e.setting.allContacts=t),center:"",clearable:"",label:"联系人列表",placeholder:"联系人列表"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.getAllContacts},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("获取所有联系人")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.cursorContacts,"onUpdate:modelValue":t[10]||(t[10]=t=>e.setting.cursorContacts=t),center:"",clearable:"",label:"分页联系人列表",placeholder:"联系人列表"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.getContactsWithCursor},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("联系人列表")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(p,{type:"success"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("分页配置")]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.cursor,"onUpdate:modelValue":t[11]||(t[11]=t=>e.setting.cursor=t),center:"",clearable:"",label:"Cursor",placeholder:"请输入cursor,默认为空"},null,8,["modelValue"]),Object(o["createVNode"])(O,{modelValue:e.setting.pageSize,"onUpdate:modelValue":t[12]||(t[12]=t=>e.setting.pageSize=t),center:"",clearable:"",label:"PageSize",placeholder:"请输入pageSize"},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(p,{type:"success"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("会话标记")]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.conversationId,"onUpdate:modelValue":t[13]||(t[13]=t=>e.setting.conversationId=t),center:"",clearable:"",label:"会话ID",placeholder:"请输会话ID"},null,8,["modelValue"]),Object(o["createVNode"])(O,{modelValue:e.setting.conversationType,"onUpdate:modelValue":t[14]||(t[14]=t=>e.setting.conversationType=t),center:"",clearable:"",label:"会话类型",placeholder:"请输入会话类型"},null,8,["modelValue"]),Object(o["createVNode"])(O,{modelValue:e.setting.mark,"onUpdate:modelValue":t[15]||(t[15]=t=>e.setting.mark=t),center:"",clearable:"",label:"会话标记",placeholder:"请输入会话标记"},null,8,["modelValue"]),Object(o["createVNode"])(O,{modelValue:e.setting.pageSize,"onUpdate:modelValue":t[17]||(t[17]=t=>e.setting.pageSize=t),center:"",clearable:"",label:"isMarked",placeholder:"是否标记会话"},{input:Object(o["withCtx"])(()=>[Object(o["createVNode"])(V,{size:"large",modelValue:e.setting.isMarked,"onUpdate:modelValue":t[16]||(t[16]=t=>e.setting.isMarked=t)},null,8,["modelValue"])]),button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.markConversation},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("标记会话")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.filterConversations,"onUpdate:modelValue":t[18]||(t[18]=t=>e.setting.filterConversations=t),center:"",clearable:"",label:"会话列表",placeholder:"请输会话ID"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.getServerConversationsByFilter},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("根据标记分页获取会话列表")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(p,{type:"success"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("会话列表")]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{center:"",clearable:"",label:"会话列表",placeholder:"请输会话ID"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.getServerConversations},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("获取服务端会话列表")]),_:1},8,["onClick"])]),_:1})]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{center:"",clearable:"",label:"会话列表",placeholder:"请输会话ID"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.getServerPinnedConversations},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("获取服务端置顶会话列表")]),_:1},8,["onClick"])]),_:1})]),_:1}),Object(o["createVNode"])(p,{type:"success"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Presence")]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.presenceDesc,"onUpdate:modelValue":t[19]||(t[19]=t=>e.setting.presenceDesc=t),center:"",clearable:"",label:"在线状态",placeholder:"请输入在线状态"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.publishPresence},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("发布在线状态")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.setting.expiry,"onUpdate:modelValue":t[20]||(t[20]=t=>e.setting.expiry=t),center:"",clearable:"",label:"订阅时长",placeholder:"请输入订阅时长"},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.subscribePresence},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("订阅状态")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{center:"",clearable:"",label:"取消订阅",placeholder:""},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.unsubscribePresence},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("取消订阅")]),_:1},8,["onClick"])]),_:1})]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{center:"",clearable:"",label:"获取订阅用户在线状态",placeholder:""},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.getSubscribedPresenceList},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("分野查询")]),_:1},8,["onClick"])]),_:1})]),_:1}),Object(o["createVNode"])(g,{inset:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{center:"",clearable:"",label:"获取指定用户在线状态",placeholder:""},{button:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.getPresenceStatus},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("查询")]),_:1},8,["onClick"])]),_:1})]),_:1}),n,r,s,i])}c("a3b5");var b=c("5d4b"),u=(c("72ff"),c("e31f")),j=(c("21a7"),c("f23a")),O=(c("4d86"),c("a136")),g=(c("22fa"),c("2e1b")),p=(c("02ab"),c("dc94")),V=(c("27f1"),c("1c96")),m=c("9ab4"),h=c("ce1f"),C=c("5502"),f=c("3fff");let v=class extends h["b"]{constructor(){super(...arguments),this.setting=Object(h["c"])(()=>{const e=Object(C["b"])();let t=Object(o["ref"])(""),c=Object(o["ref"])(""),l=Object(o["ref"])(""),a=Object(o["ref"])(""),n=Object(o["ref"])(""),r=Object(o["ref"])(""),s=Object(o["ref"])(""),i=Object(o["ref"])(""),d=Object(o["ref"])(""),b=Object(o["ref"])(f["f"]),u=Object(o["ref"])(""),j=Object(o["ref"])(""),O=Object(o["ref"])(""),g=Object(o["ref"])(void 0),p=Object(o["ref"])(!0),m=Object(o["ref"])(""),h=Object(o["ref"])(""),v=Object(o["ref"])(""),N=Object(o["ref"])(""),x=Object(o["ref"])(""),k=Object(o["ref"])(""),w=Object(o["ref"])(0);const I=()=>{e.state.IM.connect.getAllContacts().then(e=>{j.value=JSON.stringify(e.data),console.log("getAllContacts成功",e)}).catch(e=>{console.log("getAllContacts失败",e)})},_=()=>{e.state.IM.connect.getContactsWithCursor({cursor:O.value,pageSize:isNaN(Number(g.value))?g.value:Number(g.value)}).then(e=>{x.value=JSON.stringify(e.data),console.log("getContactsWithCursor成功",e)}).catch(e=>{console.log("getContactsWithCursor失败",e)})},y=()=>{e.state.IM.connect.getBlacklist().then(e=>{n.value=e.data.join("、")})},S=()=>{let t="添加个好友吧!";e.state.IM.connect.addContact(c.value,t).then(()=>{Object(V["a"])("发送好友请求成功")}).catch(e=>{console.log("发送好友请求失败",e),Object(V["a"])("发送好友请求失败")})},T=()=>{const t=r.value.split(",");e.state.IM.connect.addUsersToBlocklist({name:1===(null===t||void 0===t?void 0:t.length)?t[0]:t}).then(e=>{console.log(e,"addUsersToBlocklist res"),Object(V["a"])(`将${r.value}加入黑名单成功`)}).catch(e=>{console.log(`将${r.value}加入黑名单失败`,e),Object(V["a"])(`将${r.value}加入黑名单失败`)})},z=()=>{e.state.IM.connect.deleteContact(a.value).then(()=>{console.log("删除好友成功"),Object(V["a"])("删除好友成功")}).catch(e=>{console.log("删除好友失败",e),Object(V["a"])("删除好友失败")})},B=()=>{const t=s.value.split(",");e.state.IM.connect.removeUserFromBlocklist({name:1===(null===t||void 0===t?void 0:t.length)?t[0]:t}).then(()=>{Object(V["a"])(`将${s.value}移除黑名单成功`)}).catch(e=>{console.log("移除黑名单失败",e),Object(V["a"])(`将${s.value}移除黑名单失败`)})},M=()=>{e.state.IM.connect.joinGroup({groupId:i.value,message:"申请加入群组"}).then(()=>{Object(V["a"])("申请加入群组成功")}).catch(()=>{Object(V["a"])("申请加入群组失败")})},U=()=>{let t=d.value.split(",");1===t.length&&(t=t[0]),e.state.IM.connect.getGroupInfo({groupId:t}).then(e=>{console.log(e,"res")}).catch(e=>{console.log(e,"eee")})},D=()=>{e.state.IM.connect.setContactRemark({userId:c.value,remark:u.value}).then(()=>{console.log("设置备注成功")}).catch(e=>{console.log(e,"设置备注失败")})},P=()=>{e.state.IM.connect.joinChatRoom({roomId:l.value}).then(()=>{console.log("加入聊天室成功")}).catch(e=>{console.log(e,"加入聊天室失败")})},F=()=>{e.state.IM.connect.leaveChatRoom({roomId:l.value}).then(()=>{console.log("离开聊天室成功")}).catch(e=>{console.log(e,"离开聊天室失败")})},G=()=>{const t=m.value.split(","),c=h.value.split(","),o=t.map((e,t)=>({conversationId:e,conversationType:c[t]}));p.value?e.state.IM.connect.addConversationMark({conversations:o,mark:Number(v.value)}).then(()=>{console.log("标记成功")}).catch(e=>{console.log(e,"标记失败")}):e.state.IM.connect.removeConversationMark({conversations:o,mark:Number(v.value)}).then(()=>{console.log("取消标记成功")}).catch(e=>{console.log(e,"取消标记失败")})},A=()=>{e.state.IM.connect.getServerConversationsByFilter({pageSize:Number(g.value||0),cursor:O.value,filter:{mark:Number(v.value)}}).then(e=>{console.log("根据mark获取会话标记成功",e)}).catch(e=>{console.log("根据mark获取会话标记失败",e)})},R=()=>{e.state.IM.connect.getServerConversations({pageSize:Number(g.value||0),cursor:O.value}).then(e=>{console.log("获取服务端会话列表成功",e)}).catch(e=>{console.log("获取服务端会话列表失败",e)})},W=()=>{e.state.IM.connect.getServerPinnedConversations({pageSize:Number(g.value||0),cursor:O.value}).then(e=>{console.log("获取服务端置顶会话列表成功",e)}).catch(e=>{console.log("获取服务端置顶会话列表失败",e)})},E=()=>{e.state.IM.connect.publishPresence({description:k.value}).then(e=>{console.log("发布在线状态成功",e)}).catch(e=>{console.log("发布在线状态失败",e)})},$=()=>{e.state.IM.connect.subscribePresence({usernames:[c.value],expiry:Number(w.value)}).then(e=>{console.log("订阅在线状态成功",e)}).catch(e=>{console.log("订阅在线状态失败",e)})},J=()=>{e.state.IM.connect.unsubscribePresence({usernames:[c.value]}).then(e=>{console.log("取消订阅在线状态成功",e)}).catch(e=>{console.log("取消订阅在线状态失败",e)})},L=()=>{e.state.IM.connect.getSubscribedPresencelist({pageNum:1,pageSize:Number(g.value||0)}).then(e=>{console.log("获取订阅用户在线状态成功",e)}).catch(e=>{console.log("获取订阅用户在线状态失败",e)})},q=()=>{e.state.IM.connect.getPresenceStatus({usernames:[c.value]}).then(e=>{console.log("获取用户在线状态成功",e)}).catch(e=>{console.log("获取用户在线状态失败",e)})};return Object(o["onMounted"])(()=>{}),{userStr:t,userID:c,delUserID:a,blockStr:n,blockId:r,roomId:l,delBlockId:s,appkey:b,groupId:i,infoGroupId:d,remark:u,allContacts:j,cursor:O,pageSize:g,isMarked:p,conversationId:m,conversationType:h,mark:v,filterConversations:N,cursorContacts:x,presenceDesc:k,expiry:w,getAllContacts:I,getContactsWithCursor:_,addFriend:S,delFriend:z,getBlockList:y,addBlock:T,delBlock:B,joinGroup:M,getGroupInfo:U,setRemark:D,joinRoom:P,leaveRoom:F,markConversation:G,getServerConversationsByFilter:A,getServerConversations:R,getServerPinnedConversations:W,publishPresence:E,subscribePresence:$,unsubscribePresence:J,getSubscribedPresenceList:L,getPresenceStatus:q}})}};v=Object(m["a"])([Object(h["a"])({components:{NavBar:p["a"],Button:g["b"],CellGroup:O["a"],Field:j["a"],Switch:u["a"],Tag:b["a"]}})],v);var N=v,x=(c("f307"),c("6b0d")),k=c.n(x);const w=k()(N,[["render",d],["__scopeId","data-v-fa315948"]]);t["default"]=w},"8a0b":function(e,t,c){},"8ebd":function(e,t,c){},"9b7e":function(e,t,c){},a3b5:function(e,t,c){"use strict";c("68ef"),c("cb51"),c("3743"),c("9b7e")},d9d2:function(e,t,c){},dc94:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var o=c("23f9"),l=c("7a23"),a=c("1fba"),n=c("e5f6"),r=c("5aa0"),s=c("d243"),i=c("fa8a"),d=c("9a1c");const[b,u]=Object(a["a"])("nav-bar"),j={title:String,fixed:Boolean,zIndex:n["f"],border:n["g"],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var O=Object(l["defineComponent"])({name:b,props:j,emits:["click-left","click-right"],setup(e,{emit:t,slots:c}){const o=Object(l["ref"])(),a=Object(i["a"])(o,u),n=e=>t("click-left",e),b=e=>t("click-right",e),j=()=>c.left?c.left():[e.leftArrow&&Object(l["createVNode"])(d["a"],{class:u("arrow"),name:"arrow-left"},null),e.leftText&&Object(l["createVNode"])("span",{class:u("text")},[e.leftText])],O=()=>c.right?c.right():Object(l["createVNode"])("span",{class:u("text")},[e.rightText]),g=()=>{const{title:t,fixed:a,border:i,zIndex:d}=e,g=Object(r["f"])(d),p=e.leftArrow||e.leftText||c.left,V=e.rightText||c.right;return Object(l["createVNode"])("div",{ref:o,style:g,class:[u({fixed:a}),{[s["b"]]:i,"van-safe-area-top":e.safeAreaInsetTop}]},[Object(l["createVNode"])("div",{class:u("content")},[p&&Object(l["createVNode"])("div",{class:[u("left"),s["h"]],onClick:n},[j()]),Object(l["createVNode"])("div",{class:[u("title"),"van-ellipsis"]},[c.title?c.title():t]),V&&Object(l["createVNode"])("div",{class:[u("right"),s["h"]],onClick:b},[O()])])])};return()=>e.fixed&&e.placeholder?a(g):g()}});const g=Object(o["a"])(O);var p=g},e31f:function(e,t,c){"use strict";c.d(t,"a",(function(){return g}));var o=c("23f9"),l=c("7a23"),a=c("1fba"),n=c("e5f6"),r=c("5aa0"),s=c("450f"),i=c("5913");const[d,b]=Object(a["a"])("switch"),u={size:n["f"],loading:Boolean,disabled:Boolean,modelValue:n["h"],activeColor:String,inactiveColor:String,activeValue:{type:n["h"],default:!0},inactiveValue:{type:n["h"],default:!1}};var j=Object(l["defineComponent"])({name:d,props:u,emits:["change","update:modelValue"],setup(e,{emit:t,slots:c}){const o=()=>e.modelValue===e.activeValue,a=()=>{if(!e.disabled&&!e.loading){const c=o()?e.inactiveValue:e.activeValue;t("update:modelValue",c),t("change",c)}},n=()=>{if(e.loading){const t=o()?e.activeColor:e.inactiveColor;return Object(l["createVNode"])(i["a"],{class:b("loading"),color:t},null)}if(c.node)return c.node()};return Object(s["useCustomFieldValue"])(()=>e.modelValue),()=>{var t;const{size:s,loading:i,disabled:d,activeColor:u,inactiveColor:j}=e,O=o(),g={fontSize:Object(r["a"])(s),backgroundColor:O?u:j};return Object(l["createVNode"])("div",{role:"switch",class:b({on:O,loading:i,disabled:d}),style:g,tabindex:d?void 0:0,"aria-checked":O,onClick:a},[Object(l["createVNode"])("div",{class:b("node")},[n()]),null==(t=c.background)?void 0:t.call(c)])}}});const O=Object(o["a"])(j);var g=O},f307:function(e,t,c){"use strict";c("8ebd")}}]);
//# sourceMappingURL=chunk-bd67bfc8.6dde8272.js.map