import{p as u,a4 as B,d as h,b as z,e as A,h as a,w as y,F as C,x as V,o as x,f,g as l,y as c,c as E,k as O,t as R,z as D,a6 as N,O as T}from"./index-2e588a01.js";import{c as v}from"./index-1e49f95b.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-1436d598.js";function j(g,{defaultValue:r,defaultErrorMessage:s="Unknown error"}={}){const o=u(),n=u();return B(()=>{try{o.value=void 0,n.value=g()}catch(i){o.value=i instanceof Error?i.message:i?.toString()??s,n.value=r}}),[n,o]}const F={flex:"","gap-3":""},I={flex:"","flex-1":"","flex-col":"","gap-2":""},K={flex:"","gap-3":""},L={flex:"","flex-1":"","flex-col":"","gap-2":""},Q=h({__name:"encryption",setup(g){const r={AES:v.AES,TripleDES:v.TripleDES,Rabbit:v.Rabbit,RC4:v.RC4},s=u("Lorem ipsum dolor sit amet"),o=u("AES"),n=u("my secret key"),i=z(()=>r[o.value].encrypt(s.value,n.value).toString()),d=u("U2FsdGVkX1/EC3+6P5dbbkZ3e1kQ5o2yzuU0NHTjmrKnLBEwreV489Kr0DIB+uBs"),m=u("AES"),_=u("my secret key"),[S,b]=j(()=>r[m.value].decrypt(d.value,_.value).toString(v.enc.Utf8),{defaultValue:"",defaultErrorMessage:"无法解密文本"});return(G,t)=>{const p=D,k=N,w=V,U=T;return x(),A(C,null,[a(w,{title:"加密"},{default:y(()=>[f("div",F,[a(p,{value:l(s),"onUpdate:value":t[0]||(t[0]=e=>c(s)?s.value=e:null),label:"明文：",placeholder:"待加密的明文",rows:"4",multiline:"","raw-text":"",monospace:"",autosize:"","flex-1":""},null,8,["value"]),f("div",I,[a(p,{value:l(n),"onUpdate:value":t[1]||(t[1]=e=>c(n)?n.value=e:null),label:"秘钥：",clearable:"","raw-text":""},null,8,["value"]),a(k,{value:l(o),"onUpdate:value":t[2]||(t[2]=e=>c(o)?o.value=e:null),label:"加密算法：",options:Object.keys(r).map(e=>({label:e,value:e}))},null,8,["value","options"])])]),a(p,{label:"密文：",value:l(i),rows:"3",placeholder:"加密后的密文",multiline:"",monospace:"",readonly:"",autosize:"","mt-5":""},null,8,["value"])]),_:1}),a(w,{title:"解密"},{default:y(()=>[f("div",K,[a(p,{value:l(d),"onUpdate:value":t[3]||(t[3]=e=>c(d)?d.value=e:null),label:"密文：",placeholder:"待解密的密文",rows:"4",multiline:"","raw-text":"",monospace:"",autosize:"","flex-1":""},null,8,["value"]),f("div",L,[a(p,{value:l(_),"onUpdate:value":t[4]||(t[4]=e=>c(_)?_.value=e:null),label:"秘钥：",clearable:"","raw-text":""},null,8,["value"]),a(k,{value:l(m),"onUpdate:value":t[5]||(t[5]=e=>c(m)?m.value=e:null),label:"加密算法：",options:Object.keys(r).map(e=>({label:e,value:e}))},null,8,["value","options"])])]),l(b)?(x(),E(U,{key:0,type:"warning","mt-12":"",title:"解密时出错"},{default:y(()=>[O(R(l(b)),1)]),_:1})):(x(),E(p,{key:1,label:"明文：",value:l(S),placeholder:"解密后的明文",rows:"3",multiline:"",monospace:"",readonly:"",autosize:"","mt-5":""},null,8,["value"]))]),_:1})],64)}}});export{Q as default};
