(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7e6578a"],{"2a0a":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o={class:"homeWrap"};function n(e,t,a,n,r,l){const b=Object(c["resolveComponent"])("RouterView"),i=Object(c["resolveComponent"])("TabbarItem"),d=Object(c["resolveComponent"])("Tabbar");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createVNode"])(b),Object(c["createVNode"])(d,{route:"","active-color":"#1296db"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(i,{replace:"",to:"/chat",icon:"chat-o"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("聊天")]),_:1}),Object(c["createVNode"])(i,{replace:"",to:"/contact",icon:"friends-o"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(" 联系人 ")]),_:1}),Object(c["createVNode"])(i,{replace:"",to:"/user",icon:"user-o"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("我的")]),_:1})]),_:1})])}a("68ef"),a("cb51"),a("3743"),a("9312"),a("ae73");var r=a("23f9"),l=a("1fba"),b=a("fa7c"),i=a("e5f6"),d=a("b75f"),s=a("5aa0"),u=a("d243"),f=a("9b55"),j=a("450f"),O=a("fa8a");const[p,v]=Object(l["a"])("tabbar"),m={route:Boolean,fixed:i["g"],border:i["g"],zIndex:i["f"],placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:Object(i["c"])(0),safeAreaInsetBottom:{type:Boolean,default:null}},h=Symbol(p);var x=Object(c["defineComponent"])({name:p,props:m,emits:["change","update:modelValue"],setup(e,{emit:t,slots:a}){const o=Object(c["ref"])(),{linkChildren:n}=Object(j["useChildren"])(h),r=Object(O["a"])(o,v),l=()=>{var t;return null!=(t=e.safeAreaInsetBottom)?t:e.fixed},b=()=>{var t;const{fixed:n,zIndex:r,border:b}=e;return Object(c["createVNode"])("div",{ref:o,role:"tablist",style:Object(s["f"])(r),class:[v({fixed:n}),{[u["f"]]:b,"van-safe-area-bottom":l()}]},[null==(t=a.default)?void 0:t.call(a)])},i=(a,c)=>{Object(f["a"])(e.beforeChange,{args:[a],done(){t("update:modelValue",a),t("change",a),c()}})};return n({props:e,setActive:i}),()=>e.fixed&&e.placeholder?r(b):b()}}),C=a("4e5e"),V=a("9a1c"),g=a("8be7");const[N,w]=Object(l["a"])("tabbar-item"),k=Object(b["a"])({},C["a"],{dot:Boolean,icon:String,name:i["f"],badge:i["f"],badgeProps:Object,iconPrefix:String});var B=Object(c["defineComponent"])({name:N,props:k,emits:["click"],setup(e,{emit:t,slots:a}){const o=Object(C["b"])(),n=Object(c["getCurrentInstance"])().proxy,{parent:r,index:l}=Object(j["useParent"])(h);if(!r)return void 0;const b=Object(c["computed"])(()=>{var t;const{route:a,modelValue:c}=r.props;if(a&&"$route"in n){const{$route:t}=n,{to:a}=e,c=Object(d["e"])(a)?a:{path:a};return!!t.matched.find(e=>{const t="path"in c&&c.path===e.path,a="name"in c&&c.name===e.name;return t||a})}return(null!=(t=e.name)?t:l.value)===c}),i=a=>{var c;b.value||r.setActive(null!=(c=e.name)?c:l.value,o),t("click",a)},s=()=>a.icon?a.icon({active:b.value}):e.icon?Object(c["createVNode"])(V["a"],{name:e.icon,classPrefix:e.iconPrefix},null):void 0;return()=>{var t;const{dot:o,badge:n}=e,{activeColor:l,inactiveColor:d}=r.props,u=b.value?l:d;return Object(c["createVNode"])("div",{role:"tab",class:w({active:b.value}),style:{color:u},tabindex:0,"aria-selected":b.value,onClick:i},[Object(c["createVNode"])(g["a"],Object(c["mergeProps"])({dot:o,class:w("icon"),content:n},e.badgeProps),{default:s}),Object(c["createVNode"])("div",{class:w("text")},[null==(t=a.default)?void 0:t.call(a,{active:b.value})])])}}});const I=Object(r["a"])(B);var P=I;const T=Object(r["a"])(x);var y=T,S=a("9ab4"),A=a("ce1f"),_=a("6605");let z=class extends A["b"]{};z=Object(S["a"])([Object(A["a"])({components:{RouterView:_["a"],Tabbar:y,TabbarItem:P}})],z);var J=z,R=a("6b0d"),$=a.n(R);const E=$()(J,[["render",n]]);t["default"]=E},9312:function(e,t,a){},ae73:function(e,t,a){}}]);
//# sourceMappingURL=chunk-a7e6578a.b004b377.js.map