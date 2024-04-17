import{d as B,p as _,b as f,v as x,e as A,h as a,w as p,F as S,x as T,o as k,g as l,y as d,f as y,k as b,z as N,n as j}from"./index-2e588a01.js";import{w as F}from"./defaults-4d6daddf.js";import{i as U}from"./boolean-f2550a48.js";function V(r,{separator:e=" "}={}){return r.split("").map(n=>n.charCodeAt(0).toString(2).padStart(8,"0")).join(e)}function C(r){const e=r.replace(/[^01]/g,"");if(e.length%8)throw new Error("无效的二进制字符串");return e.split(/(\d{8})/).filter(Boolean).map(n=>String.fromCharCode(Number.parseInt(n,2))).join("")}const h={"mt-2":"",flex:"","justify-center":""},z={"mt-2":"",flex:"","justify-center":""},D=B({__name:"text-to-binary",setup(r){const e=_(""),n=f(()=>V(e.value)),{copy:I}=x({source:n}),u=_(""),i=f(()=>F(()=>C(u.value),"")),g=[{validator:c=>U(()=>C(c)),message:"格式错误：应该是ASCII二进制字符串，且长度是8的倍数"}],{copy:w}=x({source:i});return(c,t)=>{const s=N,m=j,v=T;return k(),A(S,null,[a(v,{title:"文本 转 ASCII二进制"},{default:p(()=>[a(s,{value:l(e),"onUpdate:value":t[0]||(t[0]=o=>d(e)?e.value=o:null),multiline:"",placeholder:"输入文本",label:"文本",autosize:"",autofocus:"","raw-text":"","test-id":"text-to-binary-input"},null,8,["value"]),a(s,{value:l(n),"onUpdate:value":t[1]||(t[1]=o=>d(n)?n.value=o:null),label:"ASCII二进制",multiline:"","raw-text":"",readonly:"","mt-2":"",placeholder:"转换后的ASCII二进制","test-id":"text-to-binary-output"},null,8,["value"]),y("div",h,[a(m,{disabled:!l(n),onClick:t[2]||(t[2]=o=>l(I)())},{default:p(()=>[b(" 复制到剪贴板 ")]),_:1},8,["disabled"])])]),_:1}),a(v,{title:"ASCII二进制 转 文本"},{default:p(()=>[a(s,{value:l(u),"onUpdate:value":t[3]||(t[3]=o=>d(u)?u.value=o:null),multiline:"",placeholder:"输入ASCII二进制，例：01001000 01100101 01101100 01101100 01101111",label:"ASCII二进制",autosize:"","raw-text":"","validation-rules":g,"test-id":"binary-to-text-input"},null,8,["value"]),a(s,{value:l(i),"onUpdate:value":t[4]||(t[4]=o=>d(i)?i.value=o:null),label:"文本",multiline:"","raw-text":"",readonly:"","mt-2":"",placeholder:"转换后的文本","test-id":"binary-to-text-output"},null,8,["value"]),y("div",z,[a(m,{disabled:!l(i),onClick:t[5]||(t[5]=o=>l(w)())},{default:p(()=>[b(" 复制到剪贴板 ")]),_:1},8,["disabled"])])]),_:1})],64)}}});export{D as default};