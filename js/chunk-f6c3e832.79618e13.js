(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6c3e832"],{"02ab":function(e,t,c){"use strict";c("68ef"),c("cb51"),c("3743"),c("8a0b")},"2c25":function(e,t,c){"use strict";c("f2d0")},"82d4":function(e,t,c){"use strict";c.r(t);var l=c("7a23");const a=e=>(Object(l["pushScopeId"])("data-v-2d827f97"),e=e(),Object(l["popScopeId"])(),e),o={class:"settingWrap"},n=a(()=>Object(l["createElementVNode"])("br",null,null,-1)),r=a(()=>Object(l["createElementVNode"])("br",null,null,-1)),d=a(()=>Object(l["createElementVNode"])("br",null,null,-1)),s=a(()=>Object(l["createElementVNode"])("br",null,null,-1));function i(e,t,c,a,i,b){const u=Object(l["resolveComponent"])("NavBar"),j=Object(l["resolveComponent"])("Button"),O=Object(l["resolveComponent"])("Field"),p=Object(l["resolveComponent"])("CellGroup");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",o,[Object(l["createVNode"])(u,{title:"Setting"}),Object(l["createVNode"])(p,{inset:""},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.setting.appkey,"onUpdate:modelValue":t[0]||(t[0]=t=>e.setting.appkey=t),center:"",clearable:"",label:"APPKEY",placeholder:"环信appkey"},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.setAppKey},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("设置")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(p,{inset:""},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.setting.userID,"onUpdate:modelValue":t[1]||(t[1]=t=>e.setting.userID=t),center:"",clearable:"",label:"添加好友",placeholder:"请输入好友ID"},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.addFriend},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("添加")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(p,{inset:""},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.setting.delUserID,"onUpdate:modelValue":t[2]||(t[2]=t=>e.setting.delUserID=t),center:"",clearable:"",label:"删除好友",placeholder:"请输入好友ID"},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.delFriend},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("删除")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(p,{inset:""},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.setting.blockStr,"onUpdate:modelValue":t[3]||(t[3]=t=>e.setting.blockStr=t),rows:"1",autosize:"",label:"黑名单列表",type:"textarea",center:"",placeholder:"黑名单"},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,{type:"primary",size:"small",onClick:e.setting.getBlockList},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("查看")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(p,{inset:""},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.setting.blockId,"onUpdate:modelValue":t[4]||(t[4]=t=>e.setting.blockId=t),center:"",clearable:"",label:"加入黑名单",placeholder:"请输入好友ID"},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.addBlock},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("加入")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(p,{inset:""},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.setting.delBlockId,"onUpdate:modelValue":t[5]||(t[5]=t=>e.setting.delBlockId=t),center:"",clearable:"",label:"移除黑名单",placeholder:"请输入好友ID"},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.delBlock},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("移除")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(p,{inset:""},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.setting.groupId,"onUpdate:modelValue":t[6]||(t[6]=t=>e.setting.groupId=t),center:"",clearable:"",label:"加入群组",placeholder:"请输入群组ID"},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.joinGroup},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("加入")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(p,{inset:""},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.setting.infoGroupId,"onUpdate:modelValue":t[7]||(t[7]=t=>e.setting.infoGroupId=t),center:"",clearable:"",label:"获取群组信息",placeholder:"请输入群组ID"},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,{size:"small",type:"danger",onClick:e.setting.getGroupInfo},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("获取")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(p,{inset:""},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.setting.remark,"onUpdate:modelValue":t[8]||(t[8]=t=>e.setting.remark=t),center:"",clearable:"",label:"设置好友备注",placeholder:"请输入好友备注"},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.setRemark},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("设置")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(p,{inset:""},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.setting.allContacts,"onUpdate:modelValue":t[9]||(t[9]=t=>e.setting.allContacts=t),center:"",clearable:"",label:"联系人列表",placeholder:"联系人列表"},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.getAllContacts},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("获取所有联系人")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(p,{inset:""},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.setting.cursor,"onUpdate:modelValue":t[10]||(t[10]=t=>e.setting.cursor=t),center:"",clearable:"",label:"Cursor",placeholder:"请输入cursor,默认为空"},null,8,["modelValue"]),Object(l["createVNode"])(O,{modelValue:e.setting.pageSize,"onUpdate:modelValue":t[11]||(t[11]=t=>e.setting.pageSize=t),center:"",clearable:"",label:"PageSize",placeholder:"请输入pageSize"},{button:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,{size:"small",type:"primary",onClick:e.setting.getContactsWithCursor},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("分页获取联系人")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),n,r,d,s])}c("21a7");var b=c("f23a"),u=(c("4d86"),c("a136")),j=(c("22fa"),c("2e1b")),O=(c("02ab"),c("dc94")),p=(c("27f1"),c("1c96")),g=c("9ab4"),f=c("ce1f"),V=c("5502"),h=c("3fff");let m=class extends f["b"]{constructor(){super(...arguments),this.setting=Object(f["c"])(()=>{const e=Object(V["b"])();let t=Object(l["ref"])(""),c=Object(l["ref"])(""),a=Object(l["ref"])(""),o=Object(l["ref"])(""),n=Object(l["ref"])(""),r=Object(l["ref"])(""),d=Object(l["ref"])(""),s=Object(l["ref"])(""),i=Object(l["ref"])(h["e"]),b=Object(l["ref"])(""),u=Object(l["ref"])(""),j=Object(l["ref"])(""),O=Object(l["ref"])(void 0);const g=()=>{e.state.IM.connect.getAllContacts().then(e=>{u.value=JSON.stringify(e.data),console.log("getAllContacts成功",e)}).catch(e=>{console.log("getAllContacts失败",e)})},f=()=>{e.state.IM.connect.getContactsWithCursor({cursor:j.value,pageSize:isNaN(Number(O.value))?O.value:Number(O.value)}).then(e=>{u.value=JSON.stringify(e.data),console.log("getContactsWithCursor成功",e)}).catch(e=>{console.log("getContactsWithCursor失败",e)})},m=()=>{e.state.IM.connect.getBlacklist().then(e=>{o.value=e.data.join("、")})},C=()=>{let t="添加个好友吧!";e.state.IM.connect.addContact(c.value,t).then(()=>{Object(p["a"])("发送好友请求成功")}).catch(e=>{console.log("发送好友请求失败",e),Object(p["a"])("发送好友请求失败")})},k=()=>{const t=n.value.split(",");e.state.IM.connect.addUsersToBlocklist({name:1===(null===t||void 0===t?void 0:t.length)?t[0]:t}).then(e=>{console.log(e,"addUsersToBlocklist res"),Object(p["a"])(`将${n.value}加入黑名单成功`)}).catch(e=>{console.log(`将${n.value}加入黑名单失败`,e),Object(p["a"])(`将${n.value}加入黑名单失败`)})},N=()=>{e.state.IM.connect.deleteContact(a.value).then(()=>{console.log("删除好友成功"),Object(p["a"])("删除好友成功")}).catch(e=>{console.log("删除好友失败",e),Object(p["a"])("删除好友失败")})},x=()=>{const t=r.value.split(",");e.state.IM.connect.removeUserFromBlocklist({name:1===(null===t||void 0===t?void 0:t.length)?t[0]:t}).then(()=>{Object(p["a"])(`将${r.value}移除黑名单成功`)}).catch(e=>{console.log("移除黑名单失败",e),Object(p["a"])(`将${r.value}移除黑名单失败`)})},v=()=>{e.state.IM.connect.close(),localStorage.setItem("appkey",i.value),localStorage.removeItem("uid"),localStorage.removeItem("token"),Object(p["a"])("更新appkey成功，请重新登录"),window.location.href="/login"},I=()=>{e.state.IM.connect.joinGroup({groupId:d.value,message:"申请加入群组"}).then(()=>{Object(p["a"])("申请加入群组成功")}).catch(()=>{Object(p["a"])("申请加入群组失败")})},w=()=>{let t=s.value.split(",");1===t.length&&(t=t[0]),e.state.IM.connect.getGroupInfo({groupId:t}).then(e=>{console.log(e,"res")}).catch(e=>{console.log(e,"eee")})},_=()=>{e.state.IM.connect.setContactRemark({userId:c.value,remark:b.value}).then(()=>{console.log("设置备注成功")}).catch(e=>{console.log(e,"设置备注失败")})};return Object(l["onMounted"])(()=>{}),{userStr:t,userID:c,delUserID:a,blockStr:o,blockId:n,delBlockId:r,appkey:i,groupId:d,infoGroupId:s,remark:b,allContacts:u,cursor:j,pageSize:O,getAllContacts:g,getContactsWithCursor:f,addFriend:C,delFriend:N,getBlockList:m,addBlock:k,delBlock:x,setAppKey:v,joinGroup:I,getGroupInfo:w,setRemark:_}})}};m=Object(g["a"])([Object(f["a"])({components:{NavBar:O["a"],Button:j["b"],CellGroup:u["a"],Field:b["a"]}})],m);var C=m,k=(c("2c25"),c("6b0d")),N=c.n(k);const x=N()(C,[["render",i],["__scopeId","data-v-2d827f97"]]);t["default"]=x},"8a0b":function(e,t,c){},dc94:function(e,t,c){"use strict";c.d(t,"a",(function(){return g}));var l=c("23f9"),a=c("7a23"),o=c("1fba"),n=c("e5f6"),r=c("5aa0"),d=c("d243"),s=c("fa8a"),i=c("9a1c");const[b,u]=Object(o["a"])("nav-bar"),j={title:String,fixed:Boolean,zIndex:n["f"],border:n["g"],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var O=Object(a["defineComponent"])({name:b,props:j,emits:["click-left","click-right"],setup(e,{emit:t,slots:c}){const l=Object(a["ref"])(),o=Object(s["a"])(l,u),n=e=>t("click-left",e),b=e=>t("click-right",e),j=()=>c.left?c.left():[e.leftArrow&&Object(a["createVNode"])(i["a"],{class:u("arrow"),name:"arrow-left"},null),e.leftText&&Object(a["createVNode"])("span",{class:u("text")},[e.leftText])],O=()=>c.right?c.right():Object(a["createVNode"])("span",{class:u("text")},[e.rightText]),p=()=>{const{title:t,fixed:o,border:s,zIndex:i}=e,p=Object(r["f"])(i),g=e.leftArrow||e.leftText||c.left,f=e.rightText||c.right;return Object(a["createVNode"])("div",{ref:l,style:p,class:[u({fixed:o}),{[d["b"]]:s,"van-safe-area-top":e.safeAreaInsetTop}]},[Object(a["createVNode"])("div",{class:u("content")},[g&&Object(a["createVNode"])("div",{class:[u("left"),d["h"]],onClick:n},[j()]),Object(a["createVNode"])("div",{class:[u("title"),"van-ellipsis"]},[c.title?c.title():t]),f&&Object(a["createVNode"])("div",{class:[u("right"),d["h"]],onClick:b},[O()])])])};return()=>e.fixed&&e.placeholder?o(p):p()}});const p=Object(l["a"])(O);var g=p},f2d0:function(e,t,c){}}]);
//# sourceMappingURL=chunk-f6c3e832.79618e13.js.map