import{_ as A}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-1937d1bc.js";import{M as k,b9 as O,d as $,C as T,e as I,f as j,h as y,w as F,F as R,o as B,g as X,y as L}from"./index-2e588a01.js";import{w as Y}from"./defaults-4d6daddf.js";import{_ as U}from"./FormItem-60cf44aa.js";import{_ as V}from"./Switch-48006b55.js";import{_ as W}from"./InputNumber-3af733bc.js";import"./TextareaCopyable-ef65357f.js";import"./Copy-062b8cc7.js";import"./Scrollbar-23aba636.js";import"./use-form-item-6311a236.js";import"./use-locale-02253be4.js";import"./Button-cd011781.js";import"./Remove-f3c3b67b.js";var P={exports:{}},M={exports:{}};(function(d,c){Object.defineProperty(c,"__esModule",{value:!0}),c.ParsingError=void 0;class m extends Error{constructor(o,l){super(o),this.cause=l}}c.ParsingError=m;let r;function g(){return C(!1)||S()||_()||v()}function x(){return e(/\s*/),C(!0)||_()||b()||w(!1)}function a(){const t=w(!0),o=[];let l,u=x();for(;u;){if(u.node.type==="Element"){if(l)throw new Error("Found multiple root nodes");l=u.node}u.excluded||o.push(u.node),u=x()}if(!l)throw new m("Failed to parse XML","Root Element not found");if(r.xml.length!==0)throw new m("Failed to parse XML","Not Well-Formed XML");return{declaration:t?t.node:null,root:l,children:o}}function w(t){const o=e(t?/^<\?(xml)\s*/:/^<\?([\w-:.]+)\s*/);if(!o)return;const l={name:o[1],type:"ProcessingInstruction",attributes:{}};for(;!(i()||s("?>"));){const u=E();if(u)l.attributes[u.name]=u.value;else return}return e(/\?>/),{excluded:t?!1:r.options.filter(l)===!1,node:l}}function C(t){const o=e(/^<([^?!</>\s]+)\s*/);if(!o)return;const l={type:"Element",name:o[1],attributes:{},children:[]},u=t?!1:r.options.filter(l)===!1;for(;!(i()||s(">")||s("?>")||s("/>"));){const h=E();if(h)l.attributes[h.name]=h.value;else return}if(e(/^\s*\/>/))return l.children=null,{excluded:u,node:l};e(/\??>/);let f=g();for(;f;)f.excluded||l.children.push(f.node),f=g();if(r.options.strictMode){const h=`</${l.name}>`;if(r.xml.startsWith(h))r.xml=r.xml.slice(h.length);else throw new m("Failed to parse XML",`Closing tag not matching "${h}"`)}else e(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);return{excluded:u,node:l}}function b(){const t=e(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/)||e(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/)||e(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/)||e(/^<!DOCTYPE\s+\S+\s*>/);if(t){const o={type:"DocumentType",content:t[0]};return{excluded:r.options.filter(o)===!1,node:o}}}function v(){if(r.xml.startsWith("<![CDATA[")){const t=r.xml.indexOf("]]>");if(t>-1){const o=t+3,l={type:"CDATA",content:r.xml.substring(0,o)};return r.xml=r.xml.slice(o),{excluded:r.options.filter(l)===!1,node:l}}}}function _(){const t=e(/^<!--[\s\S]*?-->/);if(t){const o={type:"Comment",content:t[0]};return{excluded:r.options.filter(o)===!1,node:o}}}function S(){const t=e(/^([^<]+)/);if(t){const o={type:"Text",content:t[1]};return{excluded:r.options.filter(o)===!1,node:o}}}function E(){const t=e(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);if(t)return{name:t[1].trim(),value:n(t[2].trim())}}function n(t){return t.replace(/^['"]|['"]$/g,"")}function e(t){const o=r.xml.match(t);if(o)return r.xml=r.xml.slice(o[0].length),o}function i(){return r.xml.length===0}function s(t){return r.xml.indexOf(t)===0}function p(t,o={}){t=t.trim();const l=o.filter||(()=>!0);return r={xml:t,options:Object.assign(Object.assign({},o),{filter:l,strictMode:o.strictMode===!0})},a()}d.exports=p,c.default=p})(M,M.exports);var z=M.exports;(function(d,c){var m=O&&O.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(c,"__esModule",{value:!0});const r=m(z);function g(n){if(!n.options.indentation&&!n.options.lineSeparator)return;n.content+=n.options.lineSeparator;let e;for(e=0;e<n.level;e++)n.content+=n.options.indentation}function x(n){n.content=n.content.replace(/ +$/,"");let e;for(e=0;e<n.level;e++)n.content+=n.options.indentation}function a(n,e){n.content+=e}function w(n,e,i){if(typeof n.content=="string")C(n.content,e,i);else if(n.type==="Element")v(n,e,i);else if(n.type==="ProcessingInstruction")S(n,e);else throw new Error("Unknown node type: "+n.type)}function C(n,e,i){if(!i){const s=n.trim();(e.options.lineSeparator||s.length===0)&&(n=s)}n.length>0&&(!i&&e.content.length>0&&g(e),a(e,n))}function b(n,e){const i="/"+n.join("/"),s=n[n.length-1];return e.includes(s)||e.includes(i)}function v(n,e,i){if(e.path.push(n.name),!i&&e.content.length>0&&g(e),a(e,"<"+n.name),_(e,n.attributes),n.children===null||e.options.forceSelfClosingEmptyTag&&n.children.length===0){const s=e.options.whiteSpaceAtEndOfSelfclosingTag?" />":"/>";a(e,s)}else if(n.children.length===0)a(e,"></"+n.name+">");else{const s=n.children;a(e,">"),e.level++;let p=n.attributes["xml:space"]==="preserve",t=!1;if(!p&&e.options.ignoredPaths&&(t=b(e.path,e.options.ignoredPaths),p=t),!p&&e.options.collapseContent){let o=!1,l=!1,u=!1;s.forEach(function(f,h){f.type==="Text"?(f.content.includes(`
`)?(l=!0,f.content=f.content.trim()):(h===0||h===s.length-1)&&!i&&f.content.trim().length===0&&(f.content=""),f.content.trim().length>0&&(o=!0)):f.type==="CDATA"?o=!0:u=!0}),o&&(!u||!l)&&(p=!0)}s.forEach(function(o){w(o,e,i||p)}),e.level--,!i&&!p&&g(e),t&&x(e),a(e,"</"+n.name+">")}e.path.pop()}function _(n,e){Object.keys(e).forEach(function(i){const s=e[i].replace(/"/g,"&quot;");a(n," "+i+'="'+s+'"')})}function S(n,e){e.content.length>0&&g(e),a(e,"<?"+n.name),_(e,n.attributes),a(e,"?>")}function E(n,e={}){e.indentation="indentation"in e?e.indentation:"    ",e.collapseContent=e.collapseContent===!0,e.lineSeparator="lineSeparator"in e?e.lineSeparator:`\r
`,e.whiteSpaceAtEndOfSelfclosingTag=e.whiteSpaceAtEndOfSelfclosingTag===!0,e.throwOnFailure=e.throwOnFailure!==!1;try{const i=(0,r.default)(n,{filter:e.filter,strictMode:e.strictMode}),s={content:"",level:0,options:e,path:[]};return i.declaration&&S(i.declaration,s),i.children.forEach(function(p){w(p,s,!1)}),e.lineSeparator?s.content.replace(/\r\n/g,`
`).replace(/\n/g,e.lineSeparator):s.content}catch(i){if(e.throwOnFailure)throw i;return n}}E.minify=(n,e={})=>E(n,Object.assign(Object.assign({},e),{indentation:"",lineSeparator:""})),d.exports=E,c.default=E})(P,P.exports);var q=P.exports;const D=k(q);function N(d){return d.trim()}function G(d,c){return Y(()=>D(N(d),c)??"","")}function Q(d){const c=N(d);if(c==="")return!0;try{return D(c),!0}catch{return!1}}const H={"important:flex-full":"","important:flex-shrink-0":"","important:flex-grow-0":""},J={flex:"","justify-center":"","gap-3":""},K="<hello><world>it-tools</world><world>haokudelei</world></hello>",me=$({__name:"xml-formatter",setup(d){const c=T("xml-formatter:indent-size",2),m=T("xml-formatter:collapse-content",!0);function r(x){return G(x,{indentation:" ".repeat(c.value),collapseContent:m.value,lineSeparator:`
`})}const g=[{validator:Q,message:"无效的XML"}];return(x,a)=>{const w=V,C=U,b=W,v=A;return B(),I(R,null,[j("div",H,[j("div",J,[y(C,{label:"折叠内容:","label-placement":"left"},{default:F(()=>[y(w,{value:X(m),"onUpdate:value":a[0]||(a[0]=_=>L(m)?m.value=_:null)},null,8,["value"])]),_:1}),y(C,{label:"缩进:","label-placement":"left","label-width":"100","show-feedback":!1},{default:F(()=>[y(b,{value:X(c),"onUpdate:value":a[1]||(a[1]=_=>L(c)?c.value=_:null),min:"0",max:"10","w-100px":""},null,8,["value"])]),_:1})])]),y(v,{"input-label":"XML","input-placeholder":"请输入XML","output-label":"已格式化的XML","output-language":"xml","input-validation-rules":g,transformer:r,"input-default":K})],64)}}});export{me as default};
