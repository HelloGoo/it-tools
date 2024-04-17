import{ai as T,af as p,aj as k,d as B,b as _,aC as P,ar as r,aT as U,br as j,bo as G,bp as V,bq as L,al as Q,am as X,cz as ee,aw as A,ap as re,m as te,v as oe,J as ie,o as Y,e as E,f as I,h as y,w as $,cA as ne,k as D,t as F,g as x,n as J,bb as K,cB as se,U as ae,p as le,F as ce,x as de,y as ue,cy as pe,z as ge,E as fe,G as he,B as me}from"./index-2e588a01.js";import{_ as ve}from"./refresh-0ec1e559.js";import{u as ye,_ as be}from"./useQRCode-867afc99.js";import{c as N}from"./index-1e49f95b.js";import{c as xe}from"./token-generator.service-1d5ce7c1.js";import{c as _e}from"./computedRefreshable-ee8b18d3.js";import"./use-locale-02253be4.js";import"./browser-e933942f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-1436d598.js";const $e=T([p("progress",{display:"inline-block"},[p("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),k("line",`
 width: 100%;
 display: block;
 `,[p("progress-content",`
 display: flex;
 align-items: center;
 `,[p("progress-graph",{flex:1})]),p("progress-custom-content",{marginLeft:"14px"}),p("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[k("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),k("circle, dashboard",{width:"120px"},[p("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),p("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),p("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),k("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[p("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),p("progress-content",{position:"relative"}),p("progress-graph",{position:"relative"},[p("progress-graph-circle",[T("svg",{verticalAlign:"bottom"}),p("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[k("empty",{opacity:0})]),p("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),p("progress-graph-line",[k("indicator-inside",[p("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[p("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),p("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),k("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[p("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),p("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),p("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[p("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[k("processing",[T("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),T("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Se={success:r(j,null),error:r(G,null),warning:r(V,null),info:r(L,null)},Ce=B({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:o}){const s=_(()=>P(e.height)),i=_(()=>e.railBorderRadius!==void 0?P(e.railBorderRadius):e.height!==void 0?P(e.height,{c:.5}):""),t=_(()=>e.fillBorderRadius!==void 0?P(e.fillBorderRadius):e.railBorderRadius!==void 0?P(e.railBorderRadius):e.height!==void 0?P(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:a,railColor:g,railStyle:l,percentage:c,unit:d,indicatorTextColor:h,status:f,showIndicator:m,fillColor:n,processing:b,clsPrefix:u}=e;return r("div",{class:`${u}-progress-content`,role:"none"},r("div",{class:`${u}-progress-graph`,"aria-hidden":!0},r("div",{class:[`${u}-progress-graph-line`,{[`${u}-progress-graph-line--indicator-${a}`]:!0}]},r("div",{class:`${u}-progress-graph-line-rail`,style:[{backgroundColor:g,height:s.value,borderRadius:i.value},l]},r("div",{class:[`${u}-progress-graph-line-fill`,b&&`${u}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:n,height:s.value,lineHeight:s.value,borderRadius:t.value}},a==="inside"?r("div",{class:`${u}-progress-graph-line-indicator`,style:{color:h}},o.default?o.default():`${c}${d}`):null)))),m&&a==="outside"?r("div",null,o.default?r("div",{class:`${u}-progress-custom-content`,style:{color:h},role:"none"},o.default()):f==="default"?r("div",{role:"none",class:`${u}-progress-icon ${u}-progress-icon--as-text`,style:{color:h}},c,d):r("div",{class:`${u}-progress-icon`,"aria-hidden":!0},r(U,{clsPrefix:u},{default:()=>Se[f]}))):null)}}}),ke={success:r(j,null),error:r(G,null),warning:r(V,null),info:r(L,null)},we=B({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:o}){function s(i,t,a){const{gapDegree:g,viewBoxWidth:l,strokeWidth:c}=e,d=50,h=0,f=d,m=0,n=2*d,b=50+c/2,u=`M ${b},${b} m ${h},${f}
      a ${d},${d} 0 1 1 ${m},${-n}
      a ${d},${d} 0 1 1 ${-m},${n}`,S=Math.PI*2*d,C={stroke:a,strokeDasharray:`${i/100*(S-g)}px ${l*8}px`,strokeDashoffset:`-${g/2}px`,transformOrigin:t?"center":void 0,transform:t?`rotate(${t}deg)`:void 0};return{pathString:u,pathStyle:C}}return()=>{const{fillColor:i,railColor:t,strokeWidth:a,offsetDegree:g,status:l,percentage:c,showIndicator:d,indicatorTextColor:h,unit:f,gapOffsetDegree:m,clsPrefix:n}=e,{pathString:b,pathStyle:u}=s(100,0,t),{pathString:S,pathStyle:C}=s(c,g,i),v=100+a;return r("div",{class:`${n}-progress-content`,role:"none"},r("div",{class:`${n}-progress-graph`,"aria-hidden":!0},r("div",{class:`${n}-progress-graph-circle`,style:{transform:m?`rotate(${m}deg)`:void 0}},r("svg",{viewBox:`0 0 ${v} ${v}`},r("g",null,r("path",{class:`${n}-progress-graph-circle-rail`,d:b,"stroke-width":a,"stroke-linecap":"round",fill:"none",style:u})),r("g",null,r("path",{class:[`${n}-progress-graph-circle-fill`,c===0&&`${n}-progress-graph-circle-fill--empty`],d:S,"stroke-width":a,"stroke-linecap":"round",fill:"none",style:C}))))),d?r("div",null,o.default?r("div",{class:`${n}-progress-custom-content`,role:"none"},o.default()):l!=="default"?r("div",{class:`${n}-progress-icon`,"aria-hidden":!0},r(U,{clsPrefix:n},{default:()=>ke[l]})):r("div",{class:`${n}-progress-text`,style:{color:h},role:"none"},r("span",{class:`${n}-progress-text__percentage`},c),r("span",{class:`${n}-progress-text__unit`},f))):null)}}});function H(e,o,s=100){return`m ${s/2} ${s/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Pe=B({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:o}){const s=_(()=>e.percentage.map((t,a)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*a)-e.circleGap*a)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:i,strokeWidth:t,circleGap:a,showIndicator:g,fillColor:l,railColor:c,railStyle:d,percentage:h,clsPrefix:f}=e;return r("div",{class:`${f}-progress-content`,role:"none"},r("div",{class:`${f}-progress-graph`,"aria-hidden":!0},r("div",{class:`${f}-progress-graph-circle`},r("svg",{viewBox:`0 0 ${i} ${i}`},h.map((m,n)=>r("g",{key:n},r("path",{class:`${f}-progress-graph-circle-rail`,d:H(i/2-t/2*(1+2*n)-a*n,t,i),"stroke-width":t,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:c[n]},d[n]]}),r("path",{class:[`${f}-progress-graph-circle-fill`,m===0&&`${f}-progress-graph-circle-fill--empty`],d:H(i/2-t/2*(1+2*n)-a*n,t,i),"stroke-width":t,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:s.value[n],strokeDashoffset:0,stroke:l[n]}})))))),g&&o.default?r("div",null,r("div",{class:`${f}-progress-text`},o.default())):null)}}}),Be=Object.assign(Object.assign({},X.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),ze=B({name:"Progress",props:Be,setup(e){const o=_(()=>e.indicatorPlacement||e.indicatorPosition),s=_(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:i,inlineThemeDisabled:t}=Q(e),a=X("Progress","-progress",$e,ee,e,i),g=_(()=>{const{status:c}=e,{common:{cubicBezierEaseInOut:d},self:{fontSize:h,fontSizeCircle:f,railColor:m,railHeight:n,iconSizeCircle:b,iconSizeLine:u,textColorCircle:S,textColorLineInner:C,textColorLineOuter:v,lineBgProcessing:w,fontWeightCircle:z,[A("iconColor",c)]:O,[A("fillColor",c)]:R}}=a.value;return{"--n-bezier":d,"--n-fill-color":R,"--n-font-size":h,"--n-font-size-circle":f,"--n-font-weight-circle":z,"--n-icon-color":O,"--n-icon-size-circle":b,"--n-icon-size-line":u,"--n-line-bg-processing":w,"--n-rail-color":m,"--n-rail-height":n,"--n-text-color-circle":S,"--n-text-color-line-inner":C,"--n-text-color-line-outer":v}}),l=t?re("progress",_(()=>e.status[0]),g,e):void 0;return{mergedClsPrefix:i,mergedIndicatorPlacement:o,gapDeg:s,cssVars:t?void 0:g,themeClass:l?.themeClass,onRender:l?.onRender}},render(){const{type:e,cssVars:o,indicatorTextColor:s,showIndicator:i,status:t,railColor:a,railStyle:g,color:l,percentage:c,viewBoxWidth:d,strokeWidth:h,mergedIndicatorPlacement:f,unit:m,borderRadius:n,fillBorderRadius:b,height:u,processing:S,circleGap:C,mergedClsPrefix:v,gapDeg:w,gapOffsetDegree:z,themeClass:O,$slots:R,onRender:W}=this;return W?.(),r("div",{class:[O,`${v}-progress`,`${v}-progress--${e}`,`${v}-progress--${t}`],style:o,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?r(we,{clsPrefix:v,status:t,showIndicator:i,indicatorTextColor:s,railColor:a,fillColor:l,railStyle:g,offsetDegree:this.offsetDegree,percentage:c,viewBoxWidth:d,strokeWidth:h,gapDegree:w===void 0?e==="dashboard"?75:0:w,gapOffsetDegree:z,unit:m},R):e==="line"?r(Ce,{clsPrefix:v,status:t,showIndicator:i,indicatorTextColor:s,railColor:a,fillColor:l,railStyle:g,percentage:c,processing:S,indicatorPlacement:f,unit:m,fillBorderRadius:b,railBorderRadius:n,height:u},R):e==="multiple-circle"?r(Pe,{clsPrefix:v,strokeWidth:h,railColor:a,fillColor:l,railStyle:g,viewBoxWidth:d,percentage:c,showIndicator:i,circleGap:C},R):null)}});function Re(e){return(e.match(/.{1,2}/g)??[]).map(o=>Number.parseInt(o,16))}function Ie(e,o){return N.HmacSHA1(N.enc.Hex.parse(e),N.enc.Hex.parse(Te(o))).toString(N.enc.Hex)}function Te(e){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";return(e.toUpperCase().replace(/=+$/,"").split("").map(t=>o.indexOf(t).toString(2).padStart(5,"0")).join("").match(/.{1,8}/g)??[]).map(t=>Number.parseInt(t,2).toString(16).padStart(2,"0")).join("")}function Ne({key:e,counter:o=0}){const s=Ie(o.toString(16).padStart(16,"0"),e),i=Re(s),t=i[19]&15,a=(i[t]&127)<<24|(i[t+1]&255)<<16|(i[t+2]&255)<<8|i[t+3]&255;return String(a%1e6).padStart(6,"0")}function De({now:e,timeStep:o}){return Math.floor(e/1e3/o)}function q({key:e,now:o=Date.now(),timeStep:s=30}){const i=De({now:o,timeStep:s});return Ne({key:e,counter:i})}function Oe({secret:e,app:o="IT-Tools",account:s="it-tools.haokudelei.com(user)",algorithm:i="SHA1",digits:t=6,period:a=30}){const l=te({issuer:o,secret:e,algorithm:i,digits:t,period:a}).map((c,d)=>`${encodeURIComponent(d)}=${encodeURIComponent(c)}`).join("&");return`otpauth://totp/${encodeURIComponent(o)}:${encodeURIComponent(s)}?${l}`}function M(){return xe({length:16,alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"})}const We={flex:"","items-center":""},qe=B({__name:"token-display",props:{tokens:{}},setup(e){const o=e,{copy:s,isJustCopied:i}=oe({createToast:!1}),{tokens:t}=ie(o);return(a,g)=>{const l=J,c=K;return Y(),E("div",null,[I("div",We,[y(c,{tooltip:x(i)?"令牌已复制到剪贴板":"复制此令牌",position:"top","flex-1":"","flex-basis-5xl":""},{default:$(()=>[y(l,{"data-test-id":"current-otp","w-full":"","important:h-48":"","important:rounded-0":"","important:text-48px":"",onClick:g[0]||(g[0]=ne(d=>x(s)(x(t).current),["prevent"]))},{default:$(()=>[D(F(x(t).current),1)]),_:1})]),_:1},8,["tooltip"])])])}}}),Z=e=>(fe("data-v-b381bcc1"),e=e(),he(),e),Ae=Z(()=>I("div",{"mb-5":"",style:{opacity:"0.8"}}," 用于生成OTP的凭证，请使用移动设备下载带有身份验证的OTP应用程序，扫描二维码添加OTP凭证，或妥善保存OTP秘钥用于以后查看OTP令牌。 ",-1)),He={flex:"","flex-col":"","items-center":"","justify-center":"","gap-3":""},Me=Z(()=>I("div",{"mb-5":"",style:{opacity:"0.8"}}," 此OTP令牌是根据OTP凭证生成的，此工具不会存储此凭证和令牌。运算是通过浏览器即时生成的，不会与服务器共享数据。 ",-1)),Ue={"mt-1":"",style:{"text-align":"center"}},je=B({__name:"otp-code-generator-and-validator",setup(e){const o=se(),s=_(()=>o.value/1e3%30),i=ae(),t=le(M());function a(){t.value=M()}const[g]=_e(()=>({previous:q({key:t.value,now:o.value-3e4}),current:q({key:t.value,now:o.value}),next:q({key:t.value,now:o.value+3e4})}),{throttle:500}),l=_(()=>Oe({secret:t.value})),{qrcode:c}=ye({text:l,color:{background:_(()=>i.isDarkTheme?"#ffffff":"#00000000"),foreground:"#000000"},options:{width:210}}),d=[{message:"秘钥应该是32位字符串",validator:h=>h.toUpperCase().match(/^[A-Z234567]+$/)},{message:"请粘贴或随机生成秘钥",validator:h=>h!==""}];return(h,f)=>{const m=pe,n=ve,b=J,u=K,S=ge,C=be,v=de,w=ze;return Y(),E(ce,null,[y(v,null,{default:$(()=>[y(m,{style:{"margin-bottom":"0"}},{default:$(()=>[D(" OTP 凭证 ")]),_:1}),Ae,y(S,{value:x(t),"onUpdate:value":f[0]||(f[0]=z=>ue(t)?t.value=z:null),label:"秘钥",placeholder:"粘贴 TOTP 秘钥","mb-5":"","validation-rules":d},{suffix:$(()=>[y(u,{tooltip:"生成一个新的随机秘钥"},{default:$(()=>[y(b,{circle:"",variant:"text",size:"small",onClick:a},{default:$(()=>[y(n)]),_:1})]),_:1})]),_:1},8,["value"]),I("div",He,[y(C,{src:x(c),"preview-disabled":""},null,8,["src"]),y(b,{href:x(l),target:"_blank"},{default:$(()=>[D(" 在新标签页中打开密钥URI ")]),_:1},8,["href"])])]),_:1}),y(v,null,{default:$(()=>[y(m,{style:{"margin-bottom":"0"}},{default:$(()=>[D(" OTP 令牌 ")]),_:1}),Me,y(qe,{tokens:x(g)},null,8,["tokens"]),y(w,{percentage:100-100*x(s)/30,status:Math.floor(30-x(s))>10?"success":"error","show-indicator":!1,style:{transform:"rotate(180deg)"}},null,8,["percentage","status"]),I("div",Ue," 此令牌有效期：还剩"+F(String(Math.floor(30-x(s))).padStart(2,"0"))+"秒 ",1)]),_:1})],64)}}});const Qe=me(je,[["__scopeId","data-v-b381bcc1"]]);export{Qe as default};
