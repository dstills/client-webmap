import{ef as i,eg as t,eh as c}from"./index-nBWeBKPv.js";import{b as a}from"./dom-bef18e4a-CP2TJ11y.js";import{S as o,C as s}from"./resources-324e00f0-BQvEl0kh.js";import"./guid-617f6e1b-DQtJl1SZ.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const l=":host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, 0.75rem);padding-block:var(--calcite-stack-padding-block, 0.5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}",d=class{constructor(n){i(this,n),this.handleActionsStartSlotChange=e=>{this.hasActionsStart=a(e)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=a(e)},this.handleContentStartSlotChange=e=>{this.hasContentStart=a(e)},this.handleContentEndSlotChange=e=>{this.hasContentEnd=a(e)},this.disabled=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasContentStart=!1,this.hasContentEnd=!1}renderActionsStart(){const{hasActionsStart:n}=this;return t("div",{class:s.actionsStart,hidden:!n,key:"actions-start-container"},t("slot",{name:o.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{hasActionsEnd:n}=this;return t("div",{class:s.actionsEnd,hidden:!n,key:"actions-end-container"},t("slot",{name:o.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}))}renderContentStart(){const{hasContentStart:n}=this;return t("div",{class:s.contentStart,hidden:!n},t("slot",{name:o.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderDefaultContent(){return t("div",{class:s.content},t("slot",null))}renderContentEnd(){const{hasContentEnd:n}=this;return t("div",{class:s.contentEnd,hidden:!n},t("slot",{name:o.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}render(){return t(c,null,t("div",{class:s.container},this.renderActionsStart(),this.renderContentStart(),this.renderDefaultContent(),this.renderContentEnd(),this.renderActionsEnd()))}};d.style=l;export{d as calcite_stack};
