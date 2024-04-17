import{_ as a}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-1937d1bc.js";import{J as o}from"./index-d4e515d0.js";import{w as s}from"./defaults-4d6daddf.js";import{d as i,c as m,o as l}from"./index-2e588a01.js";import"./TextareaCopyable-ef65357f.js";import"./Copy-062b8cc7.js";import"./Scrollbar-23aba636.js";const p=`{
	"bot": null,
	"brand": "",
	"client": {
		"engine": "Blink",
		"engine_version": "119.0.0.0",
		"family": "Chrome",
		"name": "Chrome",
		"short_name": "CH",
		"type": "browser",
		"version": "119.0"
	},
	"device": "desktop",
	"model": "",
	"os": {
		"family": "Windows",
		"name": "Windows",
		"platform": "x64",
		"short_name": "WIN",
		"version": "10"
	}
}`,g=i({__name:"json-minify",setup(u){const e=n=>s(()=>JSON.stringify(o.parse(n),null,0),""),r=[{validator:n=>n===""||o.parse(n),message:"JSON 无效"}];return(n,f)=>{const t=a;return l(),m(t,{"input-label":"原始 JSON","input-default":p,"input-placeholder":"输入原始 JSON","output-label":"压缩后的 JSON","output-language":"json","input-validation-rules":r,transformer:e})}}});export{g as default};
