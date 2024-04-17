import{ac as he,cK as ge,ae as K,aB as me,p as k,az as ve,an as N,ao as Z,aQ as Q,al as U,av as T,af as F,aj as z,ag as _,ai as B,ak as W,d as P,am as V,b as A,aw as E,aM as q,ap as ee,ar as $,as as xe,aG as _e,cL as oe,cM as te,cN as we,b1 as Ce,cO as Re,ay as J,cP as Se,c as ye,w as y,x as ze,o as Y,h as x,g as I,y as H,e as ke,r as Be,k as X,t as $e,F as Fe,f as De,z as Ie,bx as Ve,n as Te,bv as Ae}from"./index-2e588a01.js";import{u as Ee,_ as He}from"./useQRCode-867afc99.js";import{u as Ue}from"./downloadBase64-dc1264e8.js";import{u as ne}from"./use-form-item-6311a236.js";import{_ as Pe}from"./ColorPicker-9df889e5.js";import{_ as je}from"./FormItem-60cf44aa.js";import{_ as Le}from"./Form-1d745b99.js";import"./use-locale-02253be4.js";import"./browser-e933942f.js";import"./index-41b50b3c.js";import"./___vite-browser-external_commonjs-proxy-1436d598.js";import"./Button-cd011781.js";import"./InputGroup-8e84cc88.js";const Ge=e=>{const{borderColor:o,primaryColor:t,baseColor:i,textColorDisabled:n,inputColorDisabled:s,textColor2:r,opacityDisabled:d,borderRadius:c,fontSizeSmall:u,fontSizeMedium:v,fontSizeLarge:h,heightSmall:g,heightMedium:w,heightLarge:m,lineHeight:C}=e;return Object.assign(Object.assign({},ge),{labelLineHeight:C,buttonHeightSmall:g,buttonHeightMedium:w,buttonHeightLarge:m,fontSizeSmall:u,fontSizeMedium:v,fontSizeLarge:h,boxShadow:`inset 0 0 0 1px ${o}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${K(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${o}`,color:i,colorDisabled:s,colorActive:"#0000",textColor:r,textColorDisabled:n,dotColorActive:t,dotColorDisabled:o,buttonBorderColor:o,buttonBorderColorActive:t,buttonBorderColorHover:o,buttonColor:i,buttonColorActive:i,buttonTextColor:r,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:d,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${K(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:c})},Me={name:"Radio",common:he,self:Ge},re=Me,Oe={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},ae=me("n-radio-group");function Ne(e){const o=ne(e,{mergedSize(l){const{size:b}=e;if(b!==void 0)return b;if(r){const{mergedSizeRef:{value:p}}=r;if(p!==void 0)return p}return l?l.mergedSize.value:"medium"},mergedDisabled(l){return!!(e.disabled||r?.disabledRef.value||l?.disabled.value)}}),{mergedSizeRef:t,mergedDisabledRef:i}=o,n=k(null),s=k(null),r=ve(ae,null),d=k(e.defaultChecked),c=N(e,"checked"),u=Z(c,d),v=Q(()=>r?r.valueRef.value===e.value:u.value),h=Q(()=>{const{name:l}=e;if(l!==void 0)return l;if(r)return r.nameRef.value}),g=k(!1);function w(){if(r){const{doUpdateValue:l}=r,{value:b}=e;T(l,b)}else{const{onUpdateChecked:l,"onUpdate:checked":b}=e,{nTriggerFormInput:p,nTriggerFormChange:f}=o;l&&T(l,!0),b&&T(b,!0),p(),f(),d.value=!0}}function m(){i.value||v.value||w()}function C(){m(),n.value&&(n.value.checked=v.value)}function R(){g.value=!1}function S(){g.value=!0}return{mergedClsPrefix:r?r.mergedClsPrefixRef:U(e).mergedClsPrefixRef,inputRef:n,labelRef:s,mergedName:h,mergedDisabled:i,renderSafeChecked:v,focus:g,mergedSize:t,handleRadioInputChange:C,handleRadioInputBlur:R,handleRadioInputFocus:S}}const We=F("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[z("checked",[_("dot",`
 background-color: var(--n-color-active);
 `)]),_("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),F("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),_("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[B("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),z("checked",{boxShadow:"var(--n-box-shadow-active)"},[B("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),_("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),W("disabled",`
 cursor: pointer;
 `,[B("&:hover",[_("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),z("focus",[B("&:not(:active)",[_("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),z("disabled",`
 cursor: not-allowed;
 `,[_("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[B("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),z("checked",`
 opacity: 1;
 `)]),_("label",{color:"var(--n-text-color-disabled)"}),F("radio-input",`
 cursor: not-allowed;
 `)])]),qe=Object.assign(Object.assign({},V.props),Oe),Ke=P({name:"Radio",props:qe,setup(e){const o=Ne(e),t=V("Radio","-radio",We,re,e,o.mergedClsPrefix),i=A(()=>{const{mergedSize:{value:u}}=o,{common:{cubicBezierEaseInOut:v},self:{boxShadow:h,boxShadowActive:g,boxShadowDisabled:w,boxShadowFocus:m,boxShadowHover:C,color:R,colorDisabled:S,colorActive:l,textColor:b,textColorDisabled:p,dotColorActive:f,dotColorDisabled:a,labelPadding:D,labelLineHeight:j,labelFontWeight:L,[E("fontSize",u)]:G,[E("radioSize",u)]:M}}=t.value;return{"--n-bezier":v,"--n-label-line-height":j,"--n-label-font-weight":L,"--n-box-shadow":h,"--n-box-shadow-active":g,"--n-box-shadow-disabled":w,"--n-box-shadow-focus":m,"--n-box-shadow-hover":C,"--n-color":R,"--n-color-active":l,"--n-color-disabled":S,"--n-dot-color-active":f,"--n-dot-color-disabled":a,"--n-font-size":G,"--n-radio-size":M,"--n-text-color":b,"--n-text-color-disabled":p,"--n-label-padding":D}}),{inlineThemeDisabled:n,mergedClsPrefixRef:s,mergedRtlRef:r}=U(e),d=q("Radio",r,s),c=n?ee("radio",A(()=>o.mergedSize.value[0]),i,e):void 0;return Object.assign(o,{rtlEnabled:d,cssVars:n?void 0:i,themeClass:c?.themeClass,onRender:c?.onRender})},render(){const{$slots:e,mergedClsPrefix:o,onRender:t,label:i}=this;return t?.(),$("label",{class:[`${o}-radio`,this.themeClass,this.rtlEnabled&&`${o}-radio--rtl`,this.mergedDisabled&&`${o}-radio--disabled`,this.renderSafeChecked&&`${o}-radio--checked`,this.focus&&`${o}-radio--focus`],style:this.cssVars},$("input",{ref:"inputRef",type:"radio",class:`${o}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),$("div",{class:`${o}-radio__dot-wrapper`}," ",$("div",{class:[`${o}-radio__dot`,this.renderSafeChecked&&`${o}-radio__dot--checked`]})),xe(e.default,n=>!n&&!i?null:$("div",{ref:"labelRef",class:`${o}-radio__label`},n||i)))}}),Qe=F("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[_("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[z("checked",{backgroundColor:"var(--n-button-border-color-active)"}),z("disabled",{opacity:"var(--n-opacity-disabled)"})]),z("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[F("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),_("splitor",{height:"var(--n-height)"})]),F("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[F("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),_("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),B("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[_("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),B("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[_("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),W("disabled",`
 cursor: pointer;
 `,[B("&:hover",[_("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),W("checked",{color:"var(--n-button-text-color-hover)"})]),z("focus",[B("&:not(:active)",[_("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),z("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),z("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Je(e,o,t){var i;const n=[];let s=!1;for(let r=0;r<e.length;++r){const d=e[r],c=(i=d.type)===null||i===void 0?void 0:i.name;c==="RadioButton"&&(s=!0);const u=d.props;if(c!=="RadioButton"){n.push(d);continue}if(r===0)n.push(d);else{const v=n[n.length-1].props,h=o===v.value,g=v.disabled,w=o===u.value,m=u.disabled,C=(h?2:0)+(g?0:1),R=(w?2:0)+(m?0:1),S={[`${t}-radio-group__splitor--disabled`]:g,[`${t}-radio-group__splitor--checked`]:h},l={[`${t}-radio-group__splitor--disabled`]:m,[`${t}-radio-group__splitor--checked`]:w},b=C<R?l:S;n.push($("div",{class:[`${t}-radio-group__splitor`,b]}),d)}}return{children:n,isButtonGroup:s}}const Ye=Object.assign(Object.assign({},V.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Xe=P({name:"RadioGroup",props:Ye,setup(e){const o=k(null),{mergedSizeRef:t,mergedDisabledRef:i,nTriggerFormChange:n,nTriggerFormInput:s,nTriggerFormBlur:r,nTriggerFormFocus:d}=ne(e),{mergedClsPrefixRef:c,inlineThemeDisabled:u,mergedRtlRef:v}=U(e),h=V("Radio","-radio-group",Qe,re,e,c),g=k(e.defaultValue),w=N(e,"value"),m=Z(w,g);function C(f){const{onUpdateValue:a,"onUpdate:value":D}=e;a&&T(a,f),D&&T(D,f),g.value=f,n(),s()}function R(f){const{value:a}=o;a&&(a.contains(f.relatedTarget)||d())}function S(f){const{value:a}=o;a&&(a.contains(f.relatedTarget)||r())}_e(ae,{mergedClsPrefixRef:c,nameRef:N(e,"name"),valueRef:m,disabledRef:i,mergedSizeRef:t,doUpdateValue:C});const l=q("Radio",v,c),b=A(()=>{const{value:f}=t,{common:{cubicBezierEaseInOut:a},self:{buttonBorderColor:D,buttonBorderColorActive:j,buttonBorderRadius:L,buttonBoxShadow:G,buttonBoxShadowFocus:M,buttonBoxShadowHover:ie,buttonColor:le,buttonColorActive:se,buttonTextColor:de,buttonTextColorActive:ue,buttonTextColorHover:ce,opacityDisabled:be,[E("buttonHeight",f)]:pe,[E("fontSize",f)]:fe}}=h.value;return{"--n-font-size":fe,"--n-bezier":a,"--n-button-border-color":D,"--n-button-border-color-active":j,"--n-button-border-radius":L,"--n-button-box-shadow":G,"--n-button-box-shadow-focus":M,"--n-button-box-shadow-hover":ie,"--n-button-color":le,"--n-button-color-active":se,"--n-button-text-color":de,"--n-button-text-color-hover":ce,"--n-button-text-color-active":ue,"--n-height":pe,"--n-opacity-disabled":be}}),p=u?ee("radio-group",A(()=>t.value[0]),b,e):void 0;return{selfElRef:o,rtlEnabled:l,mergedClsPrefix:c,mergedValue:m,handleFocusout:S,handleFocusin:R,cssVars:u?void 0:b,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:t,handleFocusin:i,handleFocusout:n}=this,{children:s,isButtonGroup:r}=Je(oe(te(this)),o,t);return(e=this.onRender)===null||e===void 0||e.call(this),$("div",{onFocusin:i,onFocusout:n,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,r&&`${t}-radio-group--button-group`],style:this.cssVars},s)}}),Ze=()=>we,eo={name:"Space",self:Ze},oo=eo;let O;const to=()=>{if(!Ce)return!0;if(O===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const o=e.scrollHeight===1;return document.body.removeChild(e),O=o}return O},no=Object.assign(Object.assign({},V.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),ro=P({name:"Space",props:no,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=U(e),i=V("Space","-space",void 0,oo,e,o),n=q("Space",t,o);return{useGap:to(),rtlEnabled:n,mergedClsPrefix:o,margin:A(()=>{const{size:s}=e;if(Array.isArray(s))return{horizontal:s[0],vertical:s[1]};if(typeof s=="number")return{horizontal:s,vertical:s};const{self:{[E("gap",s)]:r}}=i.value,{row:d,col:c}=Re(r);return{horizontal:J(c),vertical:J(d)}})}},render(){const{vertical:e,reverse:o,align:t,inline:i,justify:n,itemClass:s,itemStyle:r,margin:d,wrap:c,mergedClsPrefix:u,rtlEnabled:v,useGap:h,wrapItem:g,internalUseGap:w}=this,m=oe(te(this),!1);if(!m.length)return null;const C=`${d.horizontal}px`,R=`${d.horizontal/2}px`,S=`${d.vertical}px`,l=`${d.vertical/2}px`,b=m.length-1,p=n.startsWith("space-");return $("div",{role:"none",class:[`${u}-space`,v&&`${u}-space--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:(()=>e&&!o?"column":e&&o?"column-reverse":!e&&o?"row-reverse":"row")(),justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!c||e?"nowrap":"wrap",marginTop:h||e?"":`-${l}`,marginBottom:h||e?"":`-${l}`,alignItems:t,gap:h?`${d.vertical}px ${d.horizontal}px`:""}},!g&&(h||w)?m:m.map((f,a)=>f.type===Se?f:$("div",{role:"none",class:s,style:[r,{maxWidth:"100%"},h?"":e?{marginBottom:a!==b?S:""}:v?{marginLeft:p?n==="space-between"&&a===b?"":R:a!==b?C:"",marginRight:p?n==="space-between"&&a===0?"":R:"",paddingTop:l,paddingBottom:l}:{marginRight:p?n==="space-between"&&a===b?"":R:a!==b?C:"",marginLeft:p?n==="space-between"&&a===0?"":R:"",paddingTop:l,paddingBottom:l}]},f)))}}),ao={flex:"","flex-col":"","items-center":"","gap-3":""},_o=P({__name:"qr-code-generator",setup(e){const o=k("#000000ff"),t=k("#ffffffff"),i=k("medium"),n=[{label:"7%",value:"low"},{label:"15%",value:"medium"},{label:"25%",value:"quartile"},{label:"30%",value:"high"}],s=k("https://it-tools.haokudelei.com"),{qrcode:r}=Ee({text:s,color:{background:t,foreground:o},errorCorrectionLevel:i,options:{width:1024}}),{download:d}=Ue({source:r,filename:"qr-code.png"});return(c,u)=>{const v=Ie,h=Pe,g=je,w=Ke,m=ro,C=Xe,R=Le,S=Ve,l=He,b=Te,p=Ae,f=ze;return Y(),ye(f,null,{default:y(()=>[x(p,{"x-gap":"12","y-gap":"12",cols:"1 600:3"},{default:y(()=>[x(S,{span:"2"},{default:y(()=>[x(v,{value:I(s),"onUpdate:value":u[0]||(u[0]=a=>H(s)?s.value=a:null),"label-position":"left","label-width":"130px","label-align":"right",label:"内容:",multiline:"",rows:"1",autosize:"",placeholder:"链接或文字","mb-6":""},null,8,["value"]),x(R,{"label-width":"130","label-placement":"left"},{default:y(()=>[x(g,{label:"前景色:"},{default:y(()=>[x(h,{value:I(o),"onUpdate:value":u[1]||(u[1]=a=>H(o)?o.value=a:null),modes:["hex"]},null,8,["value"])]),_:1}),x(g,{label:"背景色:"},{default:y(()=>[x(h,{value:I(t),"onUpdate:value":u[2]||(u[2]=a=>H(t)?t.value=a:null),modes:["hex"]},null,8,["value"])]),_:1}),x(g,{label:"容错率:"},{default:y(()=>[x(C,{value:I(i),"onUpdate:value":u[3]||(u[3]=a=>H(i)?i.value=a:null),name:"radiogroup"},{default:y(()=>[x(m,null,{default:y(()=>[(Y(),ke(Fe,null,Be(n,a=>x(w,{key:a.value,value:a.value},{default:y(()=>[X($e(a.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),x(S,null,{default:y(()=>[De("div",ao,[x(l,{src:I(r),width:"200"},null,8,["src"]),x(b,{onClick:I(d)},{default:y(()=>[X(" 下载二维码 ")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),_:1})}}});export{_o as default};
