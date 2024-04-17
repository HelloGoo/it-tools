import{d as E,p as R,b as T,c as C,w as y,x as U,o as _,h as P,bm as b,g,y as k,e as j,r as z,F,f as S,z as Z}from"./index-2e588a01.js";import{_ as B}from"./InputCopyable.vue_vue_type_script_setup_true_lang-85d4c60e.js";var t=function(){return t=Object.assign||function(e){for(var a,l=1,n=arguments.length;l<n;l++){a=arguments[l];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(e[u]=a[u])}return e},t.apply(this,arguments)};function O(r){return r.toLowerCase()}var $=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],D=/[^A-Z0-9]+/gi;function o(r,e){e===void 0&&(e={});for(var a=e.splitRegexp,l=a===void 0?$:a,n=e.stripRegexp,u=n===void 0?D:n,s=e.transform,d=s===void 0?O:s,c=e.delimiter,i=c===void 0?" ":c,f=h(h(r,l,"$1\0$2"),u,"\0"),m=0,p=f.length;f.charAt(m)==="\0";)m++;for(;f.charAt(p-1)==="\0";)p--;return f.slice(m,p).split("\0").map(d).join(i)}function h(r,e,a){return e instanceof RegExp?r.replace(e,a):e.reduce(function(l,n){return l.replace(n,a)},r)}function w(r,e){var a=r.charAt(0),l=r.substr(1).toLowerCase();return e>0&&a>="0"&&a<="9"?"_"+a+l:""+a.toUpperCase()+l}function x(r,e){return e===void 0&&(e={}),o(r,t({delimiter:"",transform:w},e))}function G(r,e){return e===0?r.toLowerCase():w(r,e)}function I(r,e){return e===void 0&&(e={}),x(r,t({transform:G},e))}function L(r){return r.charAt(0).toUpperCase()+r.substr(1)}function N(r){return L(r.toLowerCase())}function A(r,e){return e===void 0&&(e={}),o(r,t({delimiter:" ",transform:N},e))}function V(r){return r.toUpperCase()}function X(r,e){return e===void 0&&(e={}),o(r,t({delimiter:"_",transform:V},e))}function v(r,e){return e===void 0&&(e={}),o(r,t({delimiter:"."},e))}function q(r,e){return e===void 0&&(e={}),A(r,t({delimiter:"-"},e))}function W(r,e){return e===void 0&&(e={}),v(r,t({delimiter:"-"},e))}function H(r,e){return e===void 0&&(e={}),v(r,t({delimiter:"/"},e))}function J(r,e){var a=r.toLowerCase();return e===0?L(a):a}function K(r,e){return e===void 0&&(e={}),o(r,t({delimiter:" ",transform:J},e))}function M(r,e){return e===void 0&&(e={}),v(r,t({delimiter:"_"},e))}const Q=S("div",{"my-16px":"",divider:""},null,-1),re=E({__name:"case-converter",setup(r){const e={stripRegexp:/[^A-Za-zÀ-ÖØ-öø-ÿ]+/gi},a=R("The quick brown fox jumps over the lazy dog."),l=T(()=>[{label:"小写式:",value:a.value.toLocaleLowerCase()},{label:"大写式:",value:a.value.toLocaleUpperCase()},{label:"驼峰式:",value:I(a.value,e)},{label:"首大式:",value:A(a.value,e)},{label:"常量式:",value:X(a.value,e)},{label:"点符式:",value:v(a.value,e)},{label:"标头式:",value:q(a.value,e)},{label:"默认式:",value:o(a.value,e)},{label:"参数式:",value:W(a.value,e)},{label:"帕斯卡式:",value:x(a.value,e)},{label:"路径式:",value:H(a.value,e)},{label:"语句式:",value:K(a.value,e)},{label:"蛇形式:",value:M(a.value,e)},{label:"模拟式:",value:a.value.split("").map((u,s)=>s%2===0?u.toUpperCase():u.toLowerCase()).join("")}]),n={labelPosition:"left",labelWidth:"120px",labelAlign:"right"};return(u,s)=>{const d=Z,c=U;return _(),C(c,null,{default:y(()=>[P(d,b({value:g(a),"onUpdate:value":s[0]||(s[0]=i=>k(a)?a.value=i:null),label:"原始短句：",placeholder:"原始短句...","raw-text":""},n),null,16,["value"]),Q,(_(!0),j(F,null,z(g(l),i=>(_(),C(B,b({key:i.label,value:i.value,label:i.label},n,{"mb-1":""}),null,16,["value","label"]))),128))]),_:1})}}});export{re as default};