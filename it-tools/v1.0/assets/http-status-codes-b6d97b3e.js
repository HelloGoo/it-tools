import{d as b,p as k,Y as B,aa as i,b as w,e as o,h as C,g as p,y as F,F as m,r as f,z,o as t,f as c,t as a,c as N,w as R,x as S}from"./index-2e588a01.js";const T={"mb-2":"","text-xl":""},V={"text-lg":"","font-bold":""},D={"op-70":""},L=b({__name:"http-status-codes",setup(E){const e=k(""),{searchResult:h}=B({search:e,data:i.flatMap(({codes:u,category:s})=>u.map(n=>({...n,category:s}))),options:{keys:[{name:"code",weight:3},{name:"name",weight:2},"description","category"]}}),g=w(()=>e.value?[{category:"搜索结果",codes:h.value}]:i);return(u,s)=>{const n=z,v=S;return t(),o("div",null,[C(n,{value:p(e),"onUpdate:value":s[0]||(s[0]=r=>F(e)?e.value=r:null),placeholder:"搜索 http 状态码...",autofocus:"","raw-text":"","mb-10":""},null,8,["value"]),(t(!0),o(m,null,f(p(g),({codes:r,category:l})=>(t(),o("div",{key:l,"mb-8":""},[c("div",T,a(l),1),(t(!0),o(m,null,f(r,({code:_,description:x,name:y,type:d})=>(t(),N(v,{key:_,"mb-2":""},{default:R(()=>[c("div",V,a(_)+" "+a(y),1),c("div",D,a(d!=="HTTP"?`【${d}协议】`:"")+a(x),1)]),_:2},1024))),128))]))),128))])}}});export{L as default};
