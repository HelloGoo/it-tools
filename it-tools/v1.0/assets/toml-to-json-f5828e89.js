import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-1937d1bc.js";import{p as s}from"./toml-esm-9c5f6a1e.js";import{w as e}from"./defaults-4d6daddf.js";import{i as m}from"./toml.services-cf2cf3ec.js";import{d as i,c as p,o as l}from"./index-2e588a01.js";import"./TextareaCopyable-ef65357f.js";import"./Copy-062b8cc7.js";import"./Scrollbar-23aba636.js";import"./boolean-f2550a48.js";const b=i({__name:"toml-to-json",setup(c){const t=o=>o===""?"":e(()=>JSON.stringify(s(o),null,3),""),r=[{validator:m,message:"无效的TOML"}];return(o,u)=>{const a=n;return l(),p(a,{"input-label":"TOML","input-placeholder":"输入TOML","output-label":"JSON","output-language":"json","input-validation-rules":r,transformer:t})}}});export{b as default};