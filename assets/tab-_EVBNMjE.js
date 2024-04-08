import{F as l,H as s,O as o,a8 as r,N as t,a0 as d,hi as b}from"./index-BhDz4nJ7.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const i={container:"container",content:"content"},h=`:host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.content{box-sizing:border-box;padding-block:var(--calcite-internal-tab-content-block-padding)}.scale-s{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.25rem);font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.5rem);font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.625rem);font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}.container{outline-color:transparent}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([hidden]){display:none}[hidden]{display:none}`,p=l(class extends s{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalTabRegister=o(this,"calciteInternalTabRegister",6),this.guid=`calcite-tab-title-${r()}`,this.tab=void 0,this.selected=!1,this.scale="m",this.labeledBy=void 0}render(){const e=this.el.id||this.guid;return t(d,{"aria-labelledby":this.labeledBy,id:e},t("div",{class:{[i.container]:!0,[`scale-${this.scale}`]:!0},role:"tabpanel",tabIndex:this.selected?0:-1},t("section",{class:i.content},t("slot",null))))}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs")}componentDidLoad(){this.calciteInternalTabRegister.emit()}disconnectedCallback(){var e;(e=document.body)==null||e.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(e){e.composedPath().find(n=>n.tagName==="CALCITE-TABS")===this.parentTabsEl&&(this.tab?this.selected=this.tab===e.detail.tab:this.getTabIndex().then(n=>{this.selected=n===e.detail.tab}),e.stopPropagation())}async getTabIndex(){return Array.prototype.indexOf.call(b(this.el.parentElement.children).filter(e=>e.matches("calcite-tab")),this.el)}async updateAriaInfo(e=[],a=[]){this.labeledBy=a[e.indexOf(this.el.id)]||null}get el(){return this}static get style(){return h}},[1,"calcite-tab",{tab:[513],selected:[1540],scale:[1],labeledBy:[32],getTabIndex:[64],updateAriaInfo:[64]},[[16,"calciteInternalTabChange","internalTabChangeHandler"]]]);function u(){if(typeof customElements>"u")return;["calcite-tab"].forEach(e=>{switch(e){case"calcite-tab":customElements.get(e)||customElements.define(e,p);break}})}u();export{p as T,u as d};