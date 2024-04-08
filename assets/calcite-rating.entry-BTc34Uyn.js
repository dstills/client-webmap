import{ef as p,em as g,eg as s,eh as m,ei as b}from"./index-BhDz4nJ7.js";import{c as v,d as f,H as y}from"./form-034629b4-BbFZ_D1R.js";import{g as w}from"./guid-617f6e1b-DQtJl1SZ.js";import{c as L,d as k,u as x,I as V}from"./interactive-583e13d7-C27S0EWi.js";import{c as C,d as F}from"./label-8c0f9304-D9cEFaoF.js";import{s as I,a as z,c as D}from"./loadable-6056dcbc-BigmIlxw.js";import{c as R,d as O}from"./locale-b835bf72-Azb-ku1N.js";import{u as P,c as E,s as K,d as M}from"./t9n-91f18f76-C8xx5bL7.js";import{f as N}from"./dom-bef18e4a-EzrTxjlw.js";import"./browser-1baf23f7-zzj4YD6P.js";import"./component-b0a9a44a-WqEOSVCt.js";import"./key-3f1e3da4-DU8kuSDQ.js";import"./observers-ff65e337--1jEkyko.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const u=({full:i,scale:e,partial:t})=>s("calcite-icon",{class:t?void 0:"icon",icon:i?"star-f":"star",scale:e}),H=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([read-only]) *,:host([disabled]) *,:host([read-only]) ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-color-border-input)}.star:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.average,.fraction{color:var(--calcite-color-status-warning)}.hovered,.selected{color:var(--calcite-color-brand)}.fraction{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-color-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,T=class{constructor(i){p(this,i),this.calciteRatingChange=g(this,"calciteRatingChange",6),this.handleRatingPointerOver=()=>{this.isKeyboardInteraction=!1},this.handleRatingPointerOut=()=>{this.isKeyboardInteraction=!0,this.hoverValue=null},this.handleHostKeyDown=()=>{this.isKeyboardInteraction=!0},this.handleLabelKeyDown=e=>{const t=this.getValueFromLabelEvent(e),a=e.key,n=a==" "?void 0:Number(a);if(this.emit=!0,isNaN(n))switch(a){case"Enter":case" ":this.value=!this.required&&this.value===t?0:t;break;case"ArrowLeft":this.value=this.getPreviousRatingValue(t),this.updateFocus(),e.preventDefault();break;case"ArrowRight":this.value=this.getNextRatingValue(t),this.updateFocus(),e.preventDefault();break;case"Tab":this.hoverValue=null}else!this.required&&n>=0&&n<=this.max?this.value=n:this.required&&n>0&&n<=this.max&&(this.value=n),this.updateFocus()},this.handleInputChange=e=>{if(this.isKeyboardInteraction===!0){const t=Number(e.target.value);this.hoverValue=t,this.value=t}},this.handleLabelPointerOver=e=>{this.hoverValue=this.getValueFromLabelEvent(e)},this.handleLabelPointerDown=e=>{const t=e.currentTarget,a=this.getValueFromLabelEvent(e);this.hoverValue=a,this.emit=!0,this.value=!this.required&&this.value===a?0:a,t.focus()},this.handleLabelClick=e=>{e.preventDefault()},this.handleLabelFocus=e=>{const t=this.getValueFromLabelEvent(e);this.hoverValue=t},this.setLabelEl=e=>{this.labelElements.push(e)},this.emit=!1,this.guid=`calcite-ratings-${w()}`,this.isKeyboardInteraction=!0,this.labelElements=[],this.max=5,this.average=void 0,this.count=void 0,this.disabled=!1,this.form=void 0,this.messages=void 0,this.messageOverrides=void 0,this.name=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.showChip=!1,this.value=0,this.effectiveLocale="",this.defaultMessages=void 0,this.hoverValue=void 0}onMessagesChange(){}handleValueUpdate(i){this.hoverValue=i,this.emit&&this.calciteRatingChange.emit(),this.emit=!1}effectiveLocaleChange(){P(this,this.effectiveLocale)}connectedCallback(){L(this),R(this),E(this),C(this),v(this)}async componentWillLoad(){await K(this),I(this)}componentWillRender(){this.starsMap=Array.from({length:this.max},(i,e)=>{const t=e+1,a=!this.hoverValue&&this.average&&!this.value&&t<=this.average,n=t===this.value,o=this.average&&this.average+1-t,r=t<=this.hoverValue,c=`${this.guid}-${t}`,h=!this.hoverValue&&!this.value&&!r&&o>0&&o<1,l=this.value>=t,d=this.getTabIndex(t);return{average:a,checked:n,fraction:o,hovered:r,id:c,partial:h,selected:l,value:t,tabIndex:d}})}componentDidLoad(){z(this)}disconnectedCallback(){k(this),O(this),M(this),F(this),f(this)}componentDidRender(){x(this)}render(){var i,e;return s(m,{onKeyDown:this.handleHostKeyDown,onPointerOut:this.handleRatingPointerOut,onPointerOver:this.handleRatingPointerOver},s(V,{disabled:this.disabled},s("span",{class:"wrapper"},s("fieldset",{class:"fieldset",disabled:this.disabled},s("legend",{class:"visually-hidden"},this.messages.rating),this.starsMap.map(({average:t,checked:a,fraction:n,hovered:o,id:r,partial:c,selected:h,value:l,tabIndex:d})=>s("label",{class:{star:!0,selected:h,hovered:o,average:t,partial:c},"data-value":l,htmlFor:r,onClick:this.handleLabelClick,onFocus:this.handleLabelFocus,onKeyDown:this.handleLabelKeyDown,onPointerDown:this.handleLabelPointerDown,onPointerOver:this.handleLabelPointerOver,tabIndex:d,ref:this.setLabelEl},s("input",{checked:a,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:r,name:this.guid,onChange:this.handleInputChange,tabIndex:-1,type:"radio",value:l}),s(u,{full:h||t,scale:this.scale}),c&&s("div",{class:"fraction",style:{width:`${n*100}%`}},s(u,{full:!0,partial:!0,scale:this.scale})),s("span",{class:"visually-hidden"},this.messages.stars.replace("{num}",`${l}`)))),(this.count||this.average)&&this.showChip?s("calcite-chip",{scale:this.scale,value:(i=this.count)==null?void 0:i.toString()},!!this.average&&s("span",{class:"number--average"},this.average.toString()),!!this.count&&s("span",{class:"number--count"},"(",(e=this.count)==null?void 0:e.toString(),")")):null),s(y,{component:this}))))}onLabelClick(){this.setFocus()}updateFocus(){this.hoverValue=this.value,this.labelElements[this.value-1].focus()}getTabIndex(i){return this.readOnly||this.value!==i&&(this.value||i!==1)?-1:0}getValueFromLabelEvent(i){const e=i.currentTarget;return Number(e.getAttribute("data-value"))}getNextRatingValue(i){return i===5?1:i+1}getPreviousRatingValue(i){return i===1?5:i-1}async setFocus(){await D(this),N(this.el)}static get assetsDirs(){return["assets"]}get el(){return b(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],value:["handleValueUpdate"],effectiveLocale:["effectiveLocaleChange"]}}};T.style=H;export{T as calcite_rating};