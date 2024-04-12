import{bL as k,bS as l,bM as t,bN as C,bO as v}from"./index-D2dWKXoe.js";import{g as w}from"./dom-bef18e4a-C29mvo6M.js";import{c as B,u as I,d as L,I as y}from"./interactive-583e13d7-DfHC3qcQ.js";import{s as S,a as F,c as P}from"./loadable-6056dcbc-DO2oKssx.js";import{c as A,d as x}from"./locale-b835bf72-0NfHq2VP.js";import{c as E,s as M,d as O,u as T}from"./t9n-91f18f76-BKtQip7d.js";import{S as s}from"./resources-d328710c-CKVPfAA8.js";import"./guid-617f6e1b-DQtJl1SZ.js";import"./browser-1baf23f7-zzj4YD6P.js";import"./key-3f1e3da4-DU8kuSDQ.js";import"./observers-ff65e337--1jEkyko.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const z={backButton:"back-button"},h={backLeft:"chevron-left",backRight:"chevron-right"},a={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},D=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}",R=class{constructor(o){k(this,o),this.calciteFlowItemBack=l(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=l(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=l(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=l(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){B(this),A(this),E(this)}async componentWillLoad(){await M(this),S(this)}componentDidRender(){I(this)}disconnectedCallback(){L(this),x(this),O(this)}componentDidLoad(){F(this)}effectiveLocaleChange(){T(this,this.effectiveLocale)}async setFocus(){await P(this);const{backButtonEl:o,containerEl:e}=this;if(o)return o.setFocus();if(e)return e.setFocus()}async scrollContentTo(o){var e;await((e=this.containerEl)==null?void 0:e.scrollContentTo(o))}renderBackButton(){const{el:o}=this,e=w(o)==="rtl",{showBackButton:c,backButtonClick:r,messages:d}=this,i=d.back,n=e?h.backRight:h.backLeft;return c?t("calcite-action",{"aria-label":i,class:z.backButton,icon:n,key:"flow-back-button",onClick:r,scale:"s",slot:"header-actions-start",text:i,title:i,ref:this.setBackRef}):null}render(){const{collapsed:o,collapseDirection:e,collapsible:c,closable:r,closed:d,description:i,disabled:n,heading:f,headingLevel:b,loading:m,menuOpen:p,messages:g,overlayPositioning:u}=this;return t(C,null,t(y,{disabled:n},t("calcite-panel",{closable:r,closed:d,collapseDirection:e,collapsed:o,collapsible:c,description:i,disabled:n,heading:f,headingLevel:b,loading:m,menuOpen:p,messageOverrides:g,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,overlayPositioning:u,ref:this.setContainerRef},this.renderBackButton(),t("slot",{name:a.actionBar,slot:s.actionBar}),t("slot",{name:a.headerActionsStart,slot:s.headerActionsStart}),t("slot",{name:a.headerActionsEnd,slot:s.headerActionsEnd}),t("slot",{name:a.headerContent,slot:s.headerContent}),t("slot",{name:a.headerMenuActions,slot:s.headerMenuActions}),t("slot",{name:a.fab,slot:s.fab}),t("slot",{name:a.footerActions,slot:s.footerActions}),t("slot",{name:a.footer,slot:s.footer}),t("slot",null))))}static get assetsDirs(){return["assets"]}get el(){return v(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};R.style=D;export{R as calcite_flow_item};