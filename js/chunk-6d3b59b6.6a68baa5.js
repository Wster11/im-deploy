(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d3b59b6"],{"31e4":function(e,t,o){"use strict";o.r(t);var n=o("7a23");const a={class:"loginWrap"},r={style:{margin:"16px"}};function l(e,t,o,l,i,s){const c=Object(n["resolveComponent"])("Field"),d=Object(n["resolveComponent"])("CellGroup"),u=Object(n["resolveComponent"])("Button"),b=Object(n["resolveComponent"])("Form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("div",{class:"wel",onClick:t[0]||(t[0]=(...t)=>e.login.toConfig&&e.login.toConfig(...t))},"VolcanO"),Object(n["createVNode"])(b,{onSubmit:e.login.onSubmit},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,{inset:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{modelValue:e.login.username,"onUpdate:modelValue":t[1]||(t[1]=t=>e.login.username=t),name:"user",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),Object(n["createVNode"])(c,{modelValue:e.login.password,"onUpdate:modelValue":t[2]||(t[2]=t=>e.login.password=t),type:"password",name:"pwd",label:e.login.isTokenLogin?"Token":"密码",placeholder:e.login.isTokenLogin?"Token":"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue","label","placeholder"])]),_:1}),Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(u,{loading:e.login.loading,round:"",block:"",type:"primary","native-type":"submit"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" 登录 ")]),_:1},8,["loading"])])]),_:1},8,["onSubmit"]),Object(n["createElementVNode"])("div",{class:"toRegister",onClick:t[3]||(t[3]=(...t)=>e.login.toRegister&&e.login.toRegister(...t))},"没有账号？去注册")])}o("22fa");var i=o("2e1b"),s=(o("4d86"),o("a136")),c=(o("21a7"),o("f23a")),d=(o("3b21"),o("4b9e")),u=(o("27f1"),o("1c96")),b=(o("14d9"),o("9ab4")),m=o("ce1f"),g=o("5502"),p=o("6605"),f=o("2eac"),j=o("3fff");let O=class extends m["b"]{constructor(){super(...arguments),this.login=Object(m["c"])(()=>{const e=Object(g["b"])(),t=Object(n["ref"])(""),o=Object(n["ref"])(""),a=Object(n["ref"])(j["j"]),r=Object(p["e"])();let l=Object(n["ref"])(!1);const i=o=>{l.value=!0;const n=j["j"]?{user:o.user,accessToken:o.pwd}:o;e.state.IM.connect.open(n).then(e=>{window.localStorage.setItem("uid",t.value),window.localStorage.setItem("token",e.accessToken),r.push("/chat")}).catch(e=>{let t={};e.data.data&&(t=JSON.parse(e.data.data)),t.error_description===f["a"].invalidPassword?Object(u["a"])("用户名或密码错误"):t.error_description===f["a"].userNotFound?Object(u["a"])("用户不存在"):Object(u["a"])("登录失败")}).finally(()=>{l.value=!1})},s=e=>{i(e)},c=()=>{r.push("/register")},d=()=>{r.push("/config")};return{username:t,password:o,isTokenLogin:a,loading:l,toRegister:c,toConfig:d,onSubmit:s}})}};O=Object(b["a"])([Object(m["a"])({components:{Form:d["a"],Field:c["a"],CellGroup:s["a"],Button:i["b"]}})],O);var h=O,v=(o("e97d"),o("6b0d")),w=o.n(v);const V=w()(h,[["render",l],["__scopeId","data-v-0881cbdc"]]);t["default"]=V},"3b21":function(e,t,o){"use strict";o("68ef")},"450e":function(e,t,o){},"4b9e":function(e,t,o){"use strict";o.d(t,"a",(function(){return f}));var n=o("23f9"),a=o("7a23"),r=o("1fba"),l=o("e5f6"),i=o("d243"),s=o("8db7"),c=o("450f"),d=o("efd9");const[u,b]=Object(r["a"])("form"),m={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:l["f"],labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:l["g"],showErrorMessage:l["g"],errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var g=Object(a["defineComponent"])({name:u,props:m,emits:["submit","failed"],setup(e,{emit:t,slots:o}){const{children:n,linkChildren:r}=Object(c["useChildren"])(i["g"]),l=e=>e?n.filter(t=>e.includes(t.name)):n,u=e=>new Promise((t,o)=>{const n=[],a=l(e);a.reduce((e,t)=>e.then(()=>{if(!n.length)return t.validate().then(e=>{e&&n.push(e)})}),Promise.resolve()).then(()=>{n.length?o(n):t()})}),m=e=>new Promise((t,o)=>{const n=l(e);Promise.all(n.map(e=>e.validate())).then(e=>{e=e.filter(Boolean),e.length?o(e):t()})}),g=e=>{const t=n.find(t=>t.name===e);return t?new Promise((e,o)=>{t.validate().then(t=>{t?o(t):e()})}):Promise.reject()},p=t=>"string"===typeof t?g(t):e.validateFirst?u(t):m(t),f=e=>{"string"===typeof e&&(e=[e]);const t=l(e);t.forEach(e=>{e.resetValidation()})},j=()=>n.reduce((e,t)=>(e[t.name]=t.getValidationStatus(),e),{}),O=(e,t)=>{n.some(o=>o.name===e&&(o.$el.scrollIntoView(t),!0))},h=()=>n.reduce((e,t)=>(e[t.name]=t.formValue.value,e),{}),v=()=>{const o=h();p().then(()=>t("submit",o)).catch(n=>{t("failed",{values:o,errors:n}),e.scrollToError&&n[0].name&&O(n[0].name)})},w=e=>{Object(s["c"])(e),v()};return r({props:e}),Object(d["a"])({submit:v,validate:p,getValues:h,scrollToField:O,resetValidation:f,getValidationStatus:j}),()=>{var e;return Object(a["createVNode"])("form",{class:b(),onSubmit:w},[null==(e=o.default)?void 0:e.call(o)])}}});const p=Object(n["a"])(g);var f=p},e97d:function(e,t,o){"use strict";o("450e")}}]);
//# sourceMappingURL=chunk-6d3b59b6.6a68baa5.js.map