import{_ as s}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-1937d1bc.js";import{J as a}from"./index-d4e515d0.js";import{w as u}from"./defaults-4d6daddf.js";import{d as c,c as l,o as p}from"./index-2e588a01.js";import"./TextareaCopyable-ef65357f.js";import"./Copy-062b8cc7.js";import"./Scrollbar-23aba636.js";function f({array:t}){const r=new Set;return t.forEach(n=>Object.keys(n).forEach(e=>r.add(e))),Array.from(r)}function m(t){if(t===null)return"null";if(t===void 0)return"";const r=String(t).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/"/g,'\\"');return r.includes(",")?`"${r}"`:r}function d({array:t}){const r=f({array:t}),n=t.map(e=>r.map(o=>m(e[o])));return[r.join(","),...n].join(`
`)}const _=`[
	{"id":"1","title":"BeJSON","url":"www.bejson.com"},
	{"id":"2","title":"layui","url":"www.layui.com"}
]`,y=c({__name:"json-to-csv",setup(t){function r(e){return u(()=>e===""?"":d({array:a.parse(e)}),"")}const n=[{validator:e=>e===""||a.parse(e),message:"JSON 无效"}];return(e,o)=>{const i=s;return p(),l(i,{"input-label":"JSON","input-default":_,"input-placeholder":"输入 JSON，数组格式","output-label":"CSV","input-validation-rules":n,transformer:r})}}});export{y as default};
