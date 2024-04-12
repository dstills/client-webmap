import{bN as i,bO as e,bQ as s}from"./index-BS4ejk0L.js";import{c as n,u as o,d as c,I as l}from"./interactive-583e13d7-DEBopD4A.js";import"./browser-1baf23f7-zzj4YD6P.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const r={container:"container"},d=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{box-sizing:border-box;display:inline-block}:host ::slotted(calcite-tile){margin-block-end:var(--calcite-spacing-px);margin-inline-end:var(--calcite-spacing-px)}.container{display:grid;grid-auto-rows:minmax(auto, 1fr)}:host([scale=s]) .container{grid-template-columns:repeat(auto-fit, minmax(100px, 1fr))}:host([scale=m]) .container{grid-template-columns:repeat(auto-fit, minmax(140px, 1fr))}:host([scale=l]) .container{grid-template-columns:repeat(auto-fit, minmax(160px, 1fr))}:host([layout=vertical]) .container{display:flex;flex-direction:column}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",h=class{constructor(t){i(this,t),this.updateTiles=()=>{this.el.querySelectorAll("calcite-tile").forEach(a=>a.scale=this.scale)},this.disabled=!1,this.layout="horizontal",this.scale="m"}scaleWatcher(){this.updateTiles()}connectedCallback(){n(this),this.updateTiles()}componentDidRender(){o(this)}disconnectedCallback(){c(this)}render(){return e(l,{disabled:this.disabled},e("div",{class:r.container},e("slot",{onSlotchange:this.updateTiles})))}get el(){return s(this)}static get watchers(){return{scale:["scaleWatcher"]}}};h.style=d;export{h as calcite_tile_group};