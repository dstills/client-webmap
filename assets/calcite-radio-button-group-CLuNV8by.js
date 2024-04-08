import{F as o,H as n,O as l,G as c,K as r,M as d,J as u,N as t,a0 as h,c as m}from"./index-BhDz4nJ7.js";import{V as p}from"./Validation-DfD77_UB.js";import{d as g}from"./input-message-Ib1DzjNv.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const f={itemWrapper:"item-wrapper"},b=":host{display:flex;flex-direction:column}:host>.item-wrapper{display:flex;max-inline-size:100vw}:host([layout=horizontal])>.item-wrapper{flex-direction:row;flex-wrap:wrap}:host([layout=horizontal][scale=s])>.item-wrapper{column-gap:1rem}:host([layout=horizontal][scale=m])>.item-wrapper{column-gap:1.25rem}:host([layout=horizontal][scale=l])>.item-wrapper{column-gap:1.5rem}:host([layout=vertical])>.item-wrapper{flex-direction:column}:host([scale=s]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-xxs) * -1)}:host([scale=m]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-sm) * -1)}:host([scale=l]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-md) * -1)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}:host([hidden]){display:none}[hidden]{display:none}",s=o(class extends n{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteRadioButtonGroupChange=l(this,"calciteRadioButtonGroupChange",6),this.mutationObserver=c("mutation",()=>this.passPropsToRadioButtons()),this.passPropsToRadioButtons=()=>{this.radioButtons=Array.from(this.el.querySelectorAll("calcite-radio-button")),this.selectedItem=Array.from(this.radioButtons).find(e=>e.checked)||null,this.radioButtons.length>0&&this.radioButtons.forEach(e=>{e.disabled=this.disabled||e.disabled,e.hidden=this.el.hidden,e.name=this.name,e.required=this.required,e.scale=this.scale})},this.disabled=!1,this.layout="horizontal",this.name=void 0,this.required=!1,this.selectedItem=null,this.scale="m",this.status="idle",this.validationMessage=void 0,this.validationIcon=void 0,this.radioButtons=[]}handleHiddenChange(){this.passPropsToRadioButtons()}onDisabledChange(){this.passPropsToRadioButtons()}onLayoutChange(){this.passPropsToRadioButtons()}onScaleChange(){this.passPropsToRadioButtons()}connectedCallback(){var e;this.passPropsToRadioButtons(),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0})}componentWillLoad(){r(this)}componentDidLoad(){d(this)}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect()}getFocusableRadioButton(){return this.radioButtons.find(e=>!e.disabled)??null}async setFocus(){var e;if(await u(this),this.selectedItem&&!this.selectedItem.disabled)return this.selectedItem.setFocus();if(this.radioButtons.length>0)return(e=this.getFocusableRadioButton())==null?void 0:e.setFocus()}radioButtonChangeHandler(e){this.selectedItem=e.target,this.calciteRadioButtonGroupChange.emit()}render(){return t(h,{role:"radiogroup"},t("div",{class:f.itemWrapper},t("slot",null)),this.validationMessage&&this.status==="invalid"?t(p,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null)}get el(){return this}static get watchers(){return{hidden:["handleHiddenChange"],disabled:["onDisabledChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}}static get style(){return b}},[1,"calcite-radio-button-group",{disabled:[516],layout:[513],name:[513],required:[516],selectedItem:[1040],scale:[513],status:[513],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],radioButtons:[32],setFocus:[64]},[[0,"calciteRadioButtonChange","radioButtonChangeHandler"]],{hidden:["handleHiddenChange"],disabled:["onDisabledChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}]);function a(){if(typeof customElements>"u")return;["calcite-radio-button-group","calcite-icon","calcite-input-message"].forEach(e=>{switch(e){case"calcite-radio-button-group":customElements.get(e)||customElements.define(e,s);break;case"calcite-icon":customElements.get(e)||m();break;case"calcite-input-message":customElements.get(e)||g();break}})}a();const R=s,w=a;export{R as CalciteRadioButtonGroup,w as defineCustomElement};