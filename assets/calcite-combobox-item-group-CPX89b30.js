import{gm as a,gn as r,kj as m,gF as t}from"./index-D2dWKXoe.js";import{e as b,f as p}from"./utils2-DEJ-5IVT.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const i={list:"list",label:"label",title:"title"},d=`.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}:host,.list{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),.list:focus{outline:2px solid transparent;outline-offset:2px}.label{box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:0px;max-inline-size:100%;color:var(--calcite-color-text-3)}.title{--calcite-combobox-item-indent-value:calc(
    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)
  );border:0 solid;display:block;flex:1 1 0%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2);word-wrap:break-word;word-break:break-word;border-block-end-color:var(--calcite-color-border-3);padding-block:var(--calcite-combobox-item-spacing-unit-l);padding-inline:var(--calcite-combobox-item-spacing-unit-s);margin-inline-start:var(--calcite-combobox-item-indent-value)}::slotted(calcite-combobox-item-group:not([after-empty-group])){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}:host([hidden]){display:none}[hidden]{display:none}`,o=a(class extends r{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.guid=m(),this.afterEmptyGroup=!1,this.ancestors=void 0,this.label=void 0,this.scale="m"}connectedCallback(){this.ancestors=b(this.el)}render(){const{el:e,scale:n}=this,s=p(e);return t("ul",{"aria-labelledby":this.guid,class:{[i.list]:!0,[`scale--${n}`]:!0},role:"group"},t("li",{class:{[i.label]:!0},id:this.guid,role:"presentation",style:{"--calcite-combobox-item-spacing-indent-multiplier":`${s}`}},t("span",{class:i.title},this.label)),t("slot",null))}get el(){return this}static get style(){return d}},[1,"calcite-combobox-item-group",{afterEmptyGroup:[516,"after-empty-group"],ancestors:[1040],label:[1],scale:[1]}]);function c(){if(typeof customElements>"u")return;["calcite-combobox-item-group"].forEach(e=>{switch(e){case"calcite-combobox-item-group":customElements.get(e)||customElements.define(e,o);break}})}c();const f=o,h=c;export{f as CalciteComboboxItemGroup,h as defineCustomElement};