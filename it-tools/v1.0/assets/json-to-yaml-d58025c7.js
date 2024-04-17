import{_ as s}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-1937d1bc.js";import{d as i,c as m,a0 as o,o as l}from"./index-2e588a01.js";import{J as e}from"./index-d4e515d0.js";import{i as p}from"./boolean-f2550a48.js";import{w as f}from"./defaults-4d6daddf.js";import"./TextareaCopyable-ef65357f.js";import"./Copy-062b8cc7.js";import"./Scrollbar-23aba636.js";const u=`{
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
}`,J=i({__name:"json-to-yaml",setup(c){const r=n=>f(()=>o(e.parse(n)),""),t=[{validator:n=>n===""||p(()=>o(e.parse(n))),message:"JSON 无效"}];return(n,_)=>{const a=s;return l(),m(a,{"input-label":"JSON","input-default":u,"input-placeholder":"输入 JSON","output-label":"YAML","output-language":"yaml","input-validation-rules":t,transformer:r})}}});export{J as default};
