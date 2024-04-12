import{gm as w,gn as E,jj as c,gs as B,gt as L,gu as y,gC as F,gB as I,gE as S,gx as P,gz as x,gA as A,gD as M,gL as O,gK as T,jt as D,gF as t,gJ as $,jq as j,jv as z,jr as R,gM as H,gN as _,js as U,ji as q}from"./index-D2dWKXoe.js";import{S as o,d as J}from"./panel-DFr89jz8.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const K={backButton:"back-button"},h={backLeft:"chevron-left",backRight:"chevron-right"},a={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},W=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}",f=w(class extends E{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=c(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=c(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=c(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=c(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){B(this),L(this),y(this)}async componentWillLoad(){await F(this),I(this)}componentDidRender(){S(this)}disconnectedCallback(){P(this),x(this),A(this)}componentDidLoad(){M(this)}effectiveLocaleChange(){O(this,this.effectiveLocale)}async setFocus(){await T(this);const{backButtonEl:e,containerEl:s}=this;if(e)return e.setFocus();if(s)return s.setFocus()}async scrollContentTo(e){var s;await((s=this.containerEl)==null?void 0:s.scrollContentTo(e))}renderBackButton(){const{el:e}=this,s=D(e)==="rtl",{showBackButton:l,backButtonClick:r,messages:d}=this,i=d.back,n=s?h.backRight:h.backLeft;return l?t("calcite-action",{"aria-label":i,class:K.backButton,icon:n,key:"flow-back-button",onClick:r,scale:"s",slot:"header-actions-start",text:i,title:i,ref:this.setBackRef}):null}render(){const{collapsed:e,collapseDirection:s,collapsible:l,closable:r,closed:d,description:i,disabled:n,heading:u,headingLevel:b,loading:p,menuOpen:C,messages:k,overlayPositioning:v}=this;return t(j,null,t($,{disabled:n},t("calcite-panel",{closable:r,closed:d,collapseDirection:s,collapsed:e,collapsible:l,description:i,disabled:n,heading:u,headingLevel:b,loading:p,menuOpen:C,messageOverrides:k,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,overlayPositioning:v,ref:this.setContainerRef},this.renderBackButton(),t("slot",{name:a.actionBar,slot:o.actionBar}),t("slot",{name:a.headerActionsStart,slot:o.headerActionsStart}),t("slot",{name:a.headerActionsEnd,slot:o.headerActionsEnd}),t("slot",{name:a.headerContent,slot:o.headerContent}),t("slot",{name:a.headerMenuActions,slot:o.headerMenuActions}),t("slot",{name:a.fab,slot:o.fab}),t("slot",{name:a.footerActions,slot:o.footerActions}),t("slot",{name:a.footer,slot:o.footer}),t("slot",null))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return W}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function m(){if(typeof customElements>"u")return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,f);break;case"calcite-action":customElements.get(e)||q();break;case"calcite-action-menu":customElements.get(e)||U();break;case"calcite-icon":customElements.get(e)||_();break;case"calcite-loader":customElements.get(e)||H();break;case"calcite-panel":customElements.get(e)||J();break;case"calcite-popover":customElements.get(e)||R();break;case"calcite-scrim":customElements.get(e)||z();break}})}m();const X=f,Y=m;export{X as CalciteFlowItem,Y as defineCustomElement};