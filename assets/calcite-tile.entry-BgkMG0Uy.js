import{ef as s,eg as e,ei as r}from"./index-nBWeBKPv.js";import{c as d,d as h,u as g,I as p}from"./interactive-583e13d7-Cl8hsh9F.js";import"./browser-1baf23f7-zzj4YD6P.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const i={container:"container",content:"content",contentContainer:"content-container",description:"description",heading:"heading",largeVisual:"large-visual"},n={contentBottom:"content-bottom",contentEnd:"content-end",contentStart:"content-start",contentTop:"content-top"},f=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-tile-background-color:var(--calcite-color-foreground-1);--calcite-tile-border-color:var(--calcite-color-border-2);--calcite-tile-description-text-color:var(--calcite-color-text-3);--calcite-tile-heading-text-color:var(--calcite-color-text-2);box-sizing:border-box;display:inline-block;max-inline-size:460px;min-inline-size:140px}:host .container{align-items:flex-start;background-color:var(--calcite-tile-background-color);block-size:var(--calcite-container-size-content-fluid);box-sizing:border-box;display:flex;flex-direction:column;gap:var(--calcite-spacing-md);inline-size:var(--calcite-container-size-content-fluid);pointer-events:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-user-select:none;user-select:none}:host .content-container{display:flex;gap:var(--calcite-spacing-md);inline-size:100%;outline-color:transparent;padding:0}:host .content{display:flex;flex-direction:column}:host .heading{color:var(--calcite-tile-heading-text-color);font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.20313rem;overflow-wrap:break-word}:host .large-visual{align-items:center;justify-content:center;min-block-size:12rem;text-align:center}:host .large-visual calcite-icon{block-size:64px;inline-size:64px}:host .large-visual .content-container{justify-content:center}:host .description{color:var(--calcite-tile-description-text-color);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-regular);line-height:1.03125rem;overflow-wrap:break-word}:host([alignment=center]) .container{align-items:center;text-align:center}:host([alignment=center]) slot[name=content-start]::slotted(*),:host([alignment=center]) slot[name=content-end]::slotted(*){align-self:center}:host([scale=s]){max-inline-size:400px;min-inline-size:100px}:host([scale=s]) .container,:host([scale=s]) .content-container{gap:var(--calcite-spacing-sm)}:host([scale=s]) .heading{font-size:var(--calcite-font-size--2);line-height:1.03125rem}:host([scale=s]) .description{font-size:var(--calcite-font-size--3);line-height:0.85938rem}:host([scale=l]){max-inline-size:520px;min-inline-size:160px}:host([scale=l]) .container,:host([scale=l]) .content-container{gap:var(--calcite-spacing-xl)}:host([scale=l]) .heading{font-size:var(--calcite-font-size-0);line-height:1.375rem}:host([scale=l]) .description{font-size:var(--calcite-font-size--1);line-height:1.20313rem}:host(:not([href])){--calcite-ui-icon-color:var(--calcite-color-text-3)}:host([href]),:host([href]:hover){--calcite-tile-heading-text-color:var(--calcite-color-text-link)}:host([href]) .heading,:host([href]:hover) .heading{text-decoration-line:underline}:host(:not([embed])) .container{box-shadow:0 0 0 1px var(--calcite-tile-border-color);padding:var(--calcite-spacing-md)}:host(:not([embed])[scale=s]) .container{padding:var(--calcite-spacing-sm)}:host(:not([embed])[scale=l]) .container{padding:var(--calcite-spacing-xl)}:host(:not([embed])[href]:hover),:host(:not([embed])[href]:focus){--calcite-tile-border-color:var(--calcite-color-brand)}:host(:not([embed])[href]:hover) .container,:host(:not([embed])[href]:focus) .container{box-shadow:0 0 0 2px var(--calcite-tile-border-color);cursor:pointer;position:relative;z-index:var(--calcite-z-index)}:host(:not([embed])[href]:active){--calcite-tile-border-color:var(--calcite-color-brand)}:host(:not([embed])[href]:active) .container{box-shadow:0 0 0 3px var(--calcite-tile-border-color)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host(:hover),:host([active]){--calcite-tile-description-text-color:var(--calcite-color-text-2);--calcite-tile-heading-text-color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}",v=class{constructor(t){s(this,t),this.active=!1,this.alignment="start",this.description=void 0,this.disabled=!1,this.embed=!1,this.focused=!1,this.heading=void 0,this.href=void 0,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m"}connectedCallback(){d(this)}disconnectedCallback(){h(this)}componentDidRender(){g(this)}renderTile(){const{icon:t,heading:o,description:c,iconFlipRtl:a}=this,l=o&&t&&!c;return e("div",{class:{[i.container]:!0,[i.largeVisual]:l}},e("slot",{name:n.contentTop}),t&&e("calcite-icon",{flipRtl:a,icon:t,scale:"l"}),e("div",{class:i.contentContainer},e("slot",{name:n.contentStart}),e("div",{class:i.content},o&&e("div",{class:i.heading},o),c&&e("div",{class:i.description},c)),e("slot",{name:n.contentEnd})),e("slot",{name:n.contentBottom}))}render(){const{disabled:t}=this;return e(p,{disabled:t},this.href?e("calcite-link",{disabled:t,href:this.href},this.renderTile()):this.renderTile())}get el(){return r(this)}};v.style=f;export{v as calcite_tile};
