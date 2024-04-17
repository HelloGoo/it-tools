import{d as R,bA as g,m as s,e as f,F as w,r as x,g as c,o as v,c as k,w as a,h as u,k as p,t as K}from"./index-2e588a01.js";import{_ as b}from"./InputGroupLabel-a0ab4b83.js";import{_ as C}from"./InputNumber-3af733bc.js";import{_ as F}from"./InputGroup-8e84cc88.js";import"./use-locale-02253be4.js";import"./use-form-item-6311a236.js";import"./Button-cd011781.js";import"./Remove-f3c3b67b.js";const N=e=>e+273.15,D=e=>e-273.15,B=e=>(e+459.67)*(5/9),y=e=>e*(9/5)-459.67,E=e=>e*(5/9),U=e=>e*(9/5),V=e=>373.15-2/3*e,j=e=>3/2*(373.15-e),A=e=>e*(100/33)+273.15,L=e=>(e-273.15)*(33/100),M=e=>e*(5/4)+273.15,O=e=>(e-273.15)*(4/5),S=e=>(e-7.5)*(40/21)+273.15,$=e=>(e-273.15)*(21/40)+7.5,W=R({__name:"temperature-converter",setup(e){const n=g({kelvin:{title:"开尔文",unit:"K",ref:0,toKelvin:s.identity,fromKelvin:s.identity},celsius:{title:"摄氏度",unit:"°C",ref:0,toKelvin:N,fromKelvin:D},fahrenheit:{title:"华氏度",unit:"°F",ref:0,toKelvin:B,fromKelvin:y},rankine:{title:"兰金",unit:"°R",ref:0,toKelvin:E,fromKelvin:U},delisle:{title:"德莱尔",unit:"°De",ref:0,toKelvin:V,fromKelvin:j},newton:{title:"牛顿",unit:"°N",ref:0,toKelvin:A,fromKelvin:L},reaumur:{title:"雷奥穆尔",unit:"°Ré",ref:0,toKelvin:M,fromKelvin:O},romer:{title:"罗默",unit:"°Rø",ref:0,toKelvin:S,fromKelvin:$}});function m(i){const{ref:_,toKelvin:o}=n[i],r=o(_)??0;s.chain(n).omit(i).forEach(({fromKelvin:l},t)=>{n[t].ref=Math.floor((l(r)??0)*100)/100}).value()}return m("kelvin"),(i,_)=>{const o=b,r=C,l=F;return v(),f("div",null,[(v(!0),f(w,null,x(Object.entries(c(n)),([t,{title:d,unit:T}])=>(v(),k(l,{key:t,"mb-3":"","w-full":""},{default:a(()=>[u(o,{style:{width:"100px"}},{default:a(()=>[p(K(d),1)]),_:2},1024),u(r,{value:c(n)[t].ref,"onUpdate:value":[h=>c(n)[t].ref=h,()=>m(t)],style:{flex:"1"}},null,8,["value","onUpdate:value"]),u(o,{style:{width:"50px"}},{default:a(()=>[p(K(T),1)]),_:2},1024)]),_:2},1024))),128))])}}});export{W as default};
