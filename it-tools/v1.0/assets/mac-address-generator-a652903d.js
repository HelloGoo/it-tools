import{m as v,d as B,C as _,p as M,v as S,e as U,f as m,h as l,g as s,y as c,w as f,z as j,P,x as $,n as N,o as R,t as T,k as C}from"./index-2e588a01.js";import{c as F}from"./computedRefreshable-ee8b18d3.js";import{u as z}from"./macAddress-b30caa11.js";import{_ as D}from"./InputNumber-3af733bc.js";import"./use-locale-02253be4.js";import"./use-form-item-6311a236.js";import"./Button-cd011781.js";import"./Remove-f3c3b67b.js";function E(o){return(o.match(/[^0-9a-f]/i)===null?o.match(/.{1,2}/g)??[]:o.split(/[^0-9a-f]/i)).filter(Boolean).map(t=>t.padStart(2,"0"))}function L({prefix:o="",separator:n=":",getRandomByte:t=()=>v.random(0,255).toString(16).padStart(2,"0")}={}){const r=E(o),p=v.times(6-r.length,t);return[...r,...p].join(n)}const q={flex:"","flex-col":"","justify-center":"","gap-2":""},G={flex:"","items-center":""},H=m("label",{"w-150px":"","pr-12px":"","text-right":""}," 数量:",-1),I={"m-0":"","m-x-auto":""},J={flex:"","justify-center":"","gap-2":""},te=B({__name:"mac-address-generator",setup(o){const n=_("mac-address-generator-amount",1),t=_("mac-address-generator-prefix","64:16:7F"),r=z(t),p=[{label:"大写",value:u=>u.toUpperCase()},{label:"小写",value:u=>u.toLowerCase()}],i=M(p[0].value),x=[{label:":",value:":"},{label:"-",value:"-"},{label:".",value:"."},{label:"无",value:""}],d=_("mac-address-generator-separator",x[0].value),[b,y]=F(()=>r.isValid?v.times(n.value,()=>i.value(L({prefix:t.value,separator:d.value}))).join(`
`):""),{copy:w}=S({source:b,text:"MAC地址已复制到剪贴板"});return(u,e)=>{const A=D,k=j,g=P,V=$,h=N;return R(),U("div",q,[m("div",G,[H,l(A,{value:s(n),"onUpdate:value":e[0]||(e[0]=a=>c(n)?n.value=a:null),min:"1",max:"10000","flex-1":""},null,8,["value"])]),l(k,{value:s(t),"onUpdate:value":e[1]||(e[1]=a=>c(t)?t.value=a:null),label:"MAC地址前缀:",placeholder:"设置前缀，例：64:16:7F",clearable:"","label-position":"left",spellcheck:"false",validation:s(r),"raw-text":"","label-width":"150px","label-align":"right"},null,8,["value","validation"]),l(g,{value:s(i),"onUpdate:value":e[2]||(e[2]=a=>c(i)?i.value=a:null),options:p,label:"格式:","label-width":"150px","label-align":"right"},null,8,["value"]),l(g,{value:s(d),"onUpdate:value":e[3]||(e[3]=a=>c(d)?d.value=a:null),options:x,label:"分隔符:","label-width":"150px","label-align":"right"},null,8,["value"]),l(V,{"mt-5":"",flex:"","data-test-id":"ulids"},{default:f(()=>[m("pre",I,T(s(b)),1)]),_:1}),m("div",J,[l(h,{"data-test-id":"refresh",onClick:e[4]||(e[4]=a=>s(y)())},{default:f(()=>[C(" 刷新 ")]),_:1}),l(h,{onClick:e[5]||(e[5]=a=>s(w)())},{default:f(()=>[C(" 复制 ")]),_:1})])])}}});export{te as default};
