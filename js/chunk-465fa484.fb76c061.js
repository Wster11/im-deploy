(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-465fa484"],{"02ab":function(e,t,o){"use strict";o("68ef"),o("cb51"),o("3743"),o("8a0b")},"1f5f":function(e,t,o){"use strict";o("e095")},"3b21":function(e,t,o){"use strict";o("68ef")},"4b9e":function(e,t,o){"use strict";o.d(t,"a",(function(){return m}));var n=o("23f9"),a=o("7a23"),l=o("1fba"),r=o("e5f6"),c=o("d243"),i=o("8db7"),s=o("450f"),u=o("efd9");const[f,d]=Object(l["a"])("form"),b={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:r["f"],labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:r["g"],showErrorMessage:r["g"],errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var p=Object(a["defineComponent"])({name:f,props:b,emits:["submit","failed"],setup(e,{emit:t,slots:o}){const{children:n,linkChildren:l}=Object(s["useChildren"])(c["g"]),r=e=>e?n.filter(t=>e.includes(t.name)):n,f=e=>new Promise((t,o)=>{const n=[],a=r(e);a.reduce((e,t)=>e.then(()=>{if(!n.length)return t.validate().then(e=>{e&&n.push(e)})}),Promise.resolve()).then(()=>{n.length?o(n):t()})}),b=e=>new Promise((t,o)=>{const n=r(e);Promise.all(n.map(e=>e.validate())).then(e=>{e=e.filter(Boolean),e.length?o(e):t()})}),p=e=>{const t=n.find(t=>t.name===e);return t?new Promise((e,o)=>{t.validate().then(t=>{t?o(t):e()})}):Promise.reject()},g=t=>"string"===typeof t?p(t):e.validateFirst?f(t):b(t),m=e=>{"string"===typeof e&&(e=[e]);const t=r(e);t.forEach(e=>{e.resetValidation()})},O=()=>n.reduce((e,t)=>(e[t.name]=t.getValidationStatus(),e),{}),j=(e,t)=>{n.some(o=>o.name===e&&(o.$el.scrollIntoView(t),!0))},v=()=>n.reduce((e,t)=>(e[t.name]=t.formValue.value,e),{}),V=()=>{const o=v();g().then(()=>t("submit",o)).catch(n=>{t("failed",{values:o,errors:n}),e.scrollToError&&n[0].name&&j(n[0].name)})},h=e=>{Object(i["c"])(e),V()};return l({props:e}),Object(u["a"])({submit:V,validate:g,getValues:v,scrollToField:j,resetValidation:m,getValidationStatus:O}),()=>{var e;return Object(a["createVNode"])("form",{class:d(),onSubmit:h},[null==(e=o.default)?void 0:e.call(o)])}}});const g=Object(n["a"])(p);var m=g},"72ff":function(e,t,o){"use strict";o("68ef"),o("e3b3"),o("d9d2")},"8a0b":function(e,t,o){},d44e:function(e,t,o){var n=o("9bf2").f,a=o("1a2d"),l=o("b622"),r=l("toStringTag");e.exports=function(e,t,o){e&&!o&&(e=e.prototype),e&&!a(e,r)&&n(e,r,{configurable:!0,value:t})}},d9d2:function(e,t,o){},dc94:function(e,t,o){"use strict";o.d(t,"a",(function(){return m}));var n=o("23f9"),a=o("7a23"),l=o("1fba"),r=o("e5f6"),c=o("5aa0"),i=o("d243"),s=o("fa8a"),u=o("9a1c");const[f,d]=Object(l["a"])("nav-bar"),b={title:String,fixed:Boolean,zIndex:r["f"],border:r["g"],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var p=Object(a["defineComponent"])({name:f,props:b,emits:["click-left","click-right"],setup(e,{emit:t,slots:o}){const n=Object(a["ref"])(),l=Object(s["a"])(n,d),r=e=>t("click-left",e),f=e=>t("click-right",e),b=()=>o.left?o.left():[e.leftArrow&&Object(a["createVNode"])(u["a"],{class:d("arrow"),name:"arrow-left"},null),e.leftText&&Object(a["createVNode"])("span",{class:d("text")},[e.leftText])],p=()=>o.right?o.right():Object(a["createVNode"])("span",{class:d("text")},[e.rightText]),g=()=>{const{title:t,fixed:l,border:s,zIndex:u}=e,g=Object(c["f"])(u),m=e.leftArrow||e.leftText||o.left,O=e.rightText||o.right;return Object(a["createVNode"])("div",{ref:n,style:g,class:[d({fixed:l}),{[i["b"]]:s,"van-safe-area-top":e.safeAreaInsetTop}]},[Object(a["createVNode"])("div",{class:d("content")},[m&&Object(a["createVNode"])("div",{class:[d("left"),i["h"]],onClick:r},[b()]),Object(a["createVNode"])("div",{class:[d("title"),"van-ellipsis"]},[o.title?o.title():t]),O&&Object(a["createVNode"])("div",{class:[d("right"),i["h"]],onClick:f},[p()])])])};return()=>e.fixed&&e.placeholder?l(g):g()}});const g=Object(n["a"])(p);var m=g},e095:function(e,t,o){},e31f:function(e,t,o){"use strict";o.d(t,"a",(function(){return g}));var n=o("23f9"),a=o("7a23"),l=o("1fba"),r=o("e5f6"),c=o("5aa0"),i=o("450f"),s=o("5913");const[u,f]=Object(l["a"])("switch"),d={size:r["f"],loading:Boolean,disabled:Boolean,modelValue:r["h"],activeColor:String,inactiveColor:String,activeValue:{type:r["h"],default:!0},inactiveValue:{type:r["h"],default:!1}};var b=Object(a["defineComponent"])({name:u,props:d,emits:["change","update:modelValue"],setup(e,{emit:t,slots:o}){const n=()=>e.modelValue===e.activeValue,l=()=>{if(!e.disabled&&!e.loading){const o=n()?e.inactiveValue:e.activeValue;t("update:modelValue",o),t("change",o)}},r=()=>{if(e.loading){const t=n()?e.activeColor:e.inactiveColor;return Object(a["createVNode"])(s["a"],{class:f("loading"),color:t},null)}if(o.node)return o.node()};return Object(i["useCustomFieldValue"])(()=>e.modelValue),()=>{var t;const{size:i,loading:s,disabled:u,activeColor:d,inactiveColor:b}=e,p=n(),g={fontSize:Object(c["a"])(i),backgroundColor:p?d:b};return Object(a["createVNode"])("div",{role:"switch",class:f({on:p,loading:s,disabled:u}),style:g,tabindex:u?void 0:0,"aria-checked":p,onClick:l},[Object(a["createVNode"])("div",{class:f("node")},[r()]),null==(t=o.background)?void 0:t.call(o)])}}});const p=Object(n["a"])(b);var g=p},ef83:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),a={class:"configWrap"},l={key:0},r={style:{margin:"16px"}};function c(e,t,o,c,i,s){var u=Object(n["resolveComponent"])("Switch"),f=Object(n["resolveComponent"])("Field"),d=Object(n["resolveComponent"])("CellGroup"),b=Object(n["resolveComponent"])("Button"),p=Object(n["resolveComponent"])("Form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("div",{class:"wel",onClick:t[0]||(t[0]=function(){for(var t,o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];return e.config.toLogin&&(t=e.config).toLogin.apply(t,o)})},"VolcanO"),Object(n["createVNode"])(p,{"label-width":"auto",onSubmit:e.config.onSubmit},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{inset:""},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{name:"isUseCustomConfig",center:"",label:"使用自定义配置"},{input:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{size:"large",modelValue:e.config.isUseCustomConfig,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.config.isUseCustomConfig=t})},null,8,["modelValue"])]})),_:1}),e.config.isUseCustomConfig?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[Object(n["createVNode"])(f,{name:"appkey",modelValue:e.config.appkey,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.config.appkey=t}),center:"",clearable:"",label:"APPKEY",placeholder:"环信appkey"},null,8,["modelValue"]),Object(n["createVNode"])(f,{name:"url",modelValue:e.config.urlRef,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.config.urlRef=t}),center:"",clearable:"",label:"Url",placeholder:"Msync Url"},null,8,["modelValue"]),Object(n["createVNode"])(f,{name:"restUrl",modelValue:e.config.restUrlRef,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.config.restUrlRef=t}),center:"",clearable:"",label:"Rest Url",placeholder:"Rest Url"},null,8,["modelValue"]),Object(n["createVNode"])(f,{name:"isHttpDNS",center:"",label:"启用HttpDNS"},{input:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{size:"large",modelValue:e.config.isDNS,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.config.isDNS=t})},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(f,{name:"isUseReplacedMessageContents",center:"",label:"启用替换消息内容"},{input:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{size:"large",modelValue:e.config.isUseReplacedMessageContents,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.config.isUseReplacedMessageContents=t})},null,8,["modelValue"])]})),_:1})])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(f,{name:"isTokenLogin",center:"",label:"使用Token登录"},{input:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{size:"large",modelValue:e.config.useTokenLogin,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.config.useTokenLogin=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(b,{round:"",block:"",type:"primary","native-type":"submit"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(" 设置 ")]})),_:1})])]})),_:1},8,["onSubmit"])])}o("3b21");var i=o("4b9e"),s=(o("72ff"),o("e31f")),u=(o("21a7"),o("f23a")),f=(o("4d86"),o("a136")),d=(o("22fa"),o("2e1b")),b=(o("02ab"),o("dc94")),p=(o("27f1"),o("1c96")),g=(o("f8c9"),o("14d9"),o("ce1f")),m=o("5502"),O=o("3fff"),j=o("6605"),v=function(){var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},e(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),V=function(e,t,o,n){var a,l=arguments.length,r=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(r=(l<3?a(r):l>3?a(t,o,r):a(t,o))||r);return l>3&&r&&Object.defineProperty(t,o,r),r},h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.config=Object(g["c"])((function(){var e=Object(m["b"])(),t=Object(j["e"])(),o=Object(n["ref"])(O["f"]),a=Object(n["ref"])(O["k"]),l=Object(n["ref"])(O["i"]),r=Object(n["ref"])(O["m"]),c=Object(n["ref"])(O["h"]),i=Object(n["ref"])(O["l"]),s=Object(n["ref"])(O["j"]),u=function(){e.state.IM.connect.close(),localStorage.setItem("appkey",o.value),localStorage.setItem("useReplacedMessageContents",""+r.value),localStorage.setItem("isHttpDNS",""+c.value),localStorage.setItem("useCustomConfig",""+i.value),localStorage.setItem("isTokenLogin",""+s.value),localStorage.setItem("url",a.value||""),localStorage.setItem("restUrl",l.value||""),localStorage.removeItem("uid"),localStorage.removeItem("token"),Object(p["a"])("配置成功，请重新登录"),window.location.href="/login"},f=function(){t.push("/login")};return{appkey:o,urlRef:a,restUrlRef:l,isUseReplacedMessageContents:r,isDNS:c,isUseCustomConfig:i,useTokenLogin:s,onSubmit:u,toLogin:f}})),t}return v(t,e),t=V([Object(g["a"])({components:{NavBar:b["a"],Button:d["b"],CellGroup:f["a"],Field:u["a"],Switch:s["a"],Form:i["a"]}})],t),t}(g["b"]),C=h,N=(o("1f5f"),o("6b0d")),k=o.n(N);const w=k()(C,[["render",c]]);t["default"]=w},f8c9:function(e,t,o){var n=o("23e7"),a=o("da84"),l=o("d44e");n({global:!0},{Reflect:{}}),l(a.Reflect,"Reflect",!0)}}]);
//# sourceMappingURL=chunk-465fa484.fb76c061.js.map