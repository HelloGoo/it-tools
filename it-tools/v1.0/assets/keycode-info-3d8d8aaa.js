import{d as v,p as y,bH as h,b,e as l,h as o,w as n,F as g,r as k,g as r,x,o as a,t as s,N as K,c as B,k as C,f as N}from"./index-2e588a01.js";import{_ as S}from"./InputCopyable.vue_vue_type_script_setup_true_lang-85d4c60e.js";import{_ as V}from"./InputGroupLabel-a0ab4b83.js";import{_ as w}from"./InputGroup-8e84cc88.js";const D={key:0,"mb-2":"","text-3xl":""},E=N("span",{"lh-1":"","op-70":""}," 按下键盘中的任意键 ",-1),W=v({__name:"keycode-info",setup(F){const e=y();h(document,"keydown",t=>{e.value=t,(t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)&&t.preventDefault()});const u=b(()=>e.value?[{label:"按键:",value:e.value.key,placeholder:"按键名称"},{label:"按键代码:",value:String(e.value.keyCode),placeholder:"按键代码"},{label:"代码:",value:e.value.code,placeholder:"代码"},{label:"位置 :",value:String(e.value.location),placeholder:"位置"},{label:"组合按键:",value:[e.value.metaKey&&"Win",e.value.shiftKey&&"Shift",e.value.ctrlKey&&"Ctrl",e.value.altKey&&"Alt"].filter(Boolean).join(" + "),placeholder:"无"}]:[]);return(t,L)=>{const c=x,_=V,p=w;return a(),l("div",null,[o(c,{"mb-5":"","text-center":"","important:py-12":""},{default:n(()=>[r(e)?(a(),l("div",D,s(r(e).key),1)):K("",!0),E]),_:1}),(a(!0),l(g,null,k(r(u),({label:i,value:m,placeholder:d},f)=>(a(),B(p,{key:f,style:{"margin-bottom":"5px"}},{default:n(()=>[o(_,{style:{flex:"0 0 150px"}},{default:n(()=>[C(s(i),1)]),_:2},1024),o(S,{value:m,readonly:"",placeholder:d},null,8,["value","placeholder"])]),_:2},1024))),128))])}}});export{W as default};
