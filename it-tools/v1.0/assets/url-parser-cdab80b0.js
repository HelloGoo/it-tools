import{o as l,e as r,f as m,d as b,p as y,b as B,c as L,w as R,x as k,h as t,g as a,y as U,r as u,F as p,z as E,B as A}from"./index-2e588a01.js";import{_ as s}from"./InputCopyable.vue_vue_type_script_setup_true_lang-85d4c60e.js";import{i as C}from"./boolean-f2550a48.js";import{w as P}from"./defaults-4d6daddf.js";import{_ as q}from"./Divider-1b71e9b4.js";const V={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},j=m("path",{fill:"currentColor",d:"m20 16l-5.5 5.5l-1.42-1.41L16.17 17H10.5A6.5 6.5 0 0 1 4 10.5V4h2v6.5C6 13 8 15 10.5 15h5.67l-3.08-3.09l1.41-1.41z"},null,-1),D=[j];function F(d,o){return l(),r("svg",V,[...D])}const N={name:"mdi-arrow-right-bottom",render:F},O={style:{flex:"1 0 110px"}},$=b({__name:"url-parser",setup(d){const o=y("https://cn.bing.com/search?q=URL%E8%A7%A3%E6%9E%90&form=QBLH&sp=-1&lq=0&pq=urljiex&sc=10-7&qs=n&sk=&cvid=1DB3F89659C040B296A799066212A03D&ghsh=0&ghacc=0&ghpl="),_=B(()=>P(()=>new URL(o.value),void 0)),h=[{validator:c=>C(()=>new URL(c)),message:"无效的URL"}],f=[{title:"协议",key:"protocol"},{title:"域名",key:"hostname"},{title:"路径",key:"pathname"},{title:"参数",key:"search"}];return(c,i)=>{const v=E,g=q,x=N,w=k;return l(),L(w,null,{default:R(()=>[t(v,{value:a(o),"onUpdate:value":i[0]||(i[0]=e=>U(o)?o.value=e:null),label:"URL链接:",placeholder:"输入URL链接","raw-text":"","validation-rules":h},null,8,["value"]),t(g),(l(),r(p,null,u(f,({title:e,key:n})=>t(s,{key:n,label:e,value:a(_)?.[n]??"",readonly:"","label-position":"left","label-width":"110px","mb-2":"",placeholder:" "},null,8,["label","value"])),64)),(l(!0),r(p,null,u(Object.entries(Object.fromEntries(a(_)?.searchParams.entries()??[])),([e,n])=>(l(),r("div",{key:e,"mb-2":"","w-full":"",flex:""},[m("div",O,[t(x)]),t(s,{value:e,readonly:"",placeholder:""},null,8,["value"]),t(s,{value:n,readonly:"",placeholder:""},null,8,["value"])]))),128))]),_:1})}}});const G=A($,[["__scopeId","data-v-20477187"]]);export{G as default};
