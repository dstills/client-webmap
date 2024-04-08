import{F as f,H as p,O as i,G as l,a8 as g,Q as m,R as v,T,W as x,X as y,Y as k,U as I,N as o,b1 as a,$ as C,a6 as E,a0 as z,V as w,_ as r,hi as F,Z as H,c as L}from"./index-nBWeBKPv.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const s={closeButton:"close-button",container:"container",content:"content",contentHasText:"content--has-text",iconEnd:"icon-end",iconPresent:"icon-present",iconStart:"icon-start",titleIcon:"calcite-tab-title--icon"},A={close:"x"},O=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px}:host([layout=inline]){flex:0 1 auto}:host([layout=center]){flex:1 1 auto}.content{display:flex;align-items:center;justify-content:center}.scale-s .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([closable]) .content{box-sizing:border-box;block-size:100%;border-block-end-color:transparent}:host([layout=inline]) .content,:host([layout=center]) .content{padding-inline:0.25rem}:host([layout=center]) .scale-s,:host([layout=center]) .scale-m,:host([layout=center]) .scale-l{margin-block:0px;justify-content:center;text-align:center}:host([layout=center]) .scale-s .content,:host([layout=center]) .scale-m .content,:host([layout=center]) .scale-l .content{flex:1 1 auto;flex-grow:1}.container{box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-content:center;justify-content:space-between;border-block-end-width:2px;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end-color:transparent;border-block-end-style:solid}:host([position=bottom]) .container{border-block-end-width:0px;border-block-start-width:2px;border-block-start-color:transparent;border-block-start-style:solid}:host([closed]){display:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-color-text-1)}:host(:focus) .container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:focus) .container:focus-within{outline-color:transparent}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-color-border-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.content--has-text{padding:0.25rem}.content--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:0.5rem}.content--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:0.5rem}.close-button{display:flex;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-style:none;background-color:var(--calcite-color-foreground-1);padding:0.25rem;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-button-transparent-1);margin-inline-start:auto}.close-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          );outline-offset:-1px}.close-button:focus,.close-button:hover{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-2)}.close-button:active{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.close-button calcite-icon{color:inherit}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:0.5rem}:host([bordered]){margin-inline-end:0}:host([bordered][selected]){box-shadow:inset 0px -2px var(--calcite-color-foreground-1)}:host([bordered][selected][position=bottom]){box-shadow:inset 0 2px 0 var(--calcite-color-foreground-1)}:host([bordered]:hover) .container{background-color:var(--calcite-color-transparent-hover)}:host([closable]) .container,:host([bordered]) .container{border-inline-start:1px solid transparent;border-inline-end:1px solid transparent}:host([closable]) .container .close-button,:host([bordered]) .container .close-button{margin-inline:0}:host([closable][position=bottom]) .container,:host([bordered][position=bottom]) .container{border-block-start-style:unset}:host([selected][bordered]) .container{border-inline-start-color:var(--calcite-color-border-1);border-inline-end-color:var(--calcite-color-border-1)}:host([layout=inline][bordered]) .scale-m .content,:host([layout=center][bordered]) .scale-m .content{padding-inline:0.75rem}:host([layout=inline][bordered]) .scale-s .content,:host([layout=center][bordered]) .scale-s .content{padding-inline:0.5rem}:host([layout=inline][bordered]) .scale-l .content,:host([layout=center][bordered]) .scale-l .content{padding-inline:1rem}:host([layout=inline][closable]) .scale-s .content,:host([layout=inline][closable]) .scale-m .content,:host([layout=inline][closable]) .scale-l .content{padding-inline-end:0}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered][position=bottom]) .container{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][position=bottom][selected]) .container{border-block-start-style:none}.close-button{z-index:var(--calcite-z-index)}}:host([hidden]){display:none}[hidden]{display:none}`,R=f(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTabsActivate=i(this,"calciteTabsActivate",6),this.calciteInternalTabsActivate=i(this,"calciteInternalTabsActivate",6),this.calciteTabsClose=i(this,"calciteTabsClose",6),this.calciteInternalTabsClose=i(this,"calciteInternalTabsClose",6),this.calciteInternalTabsFocusNext=i(this,"calciteInternalTabsFocusNext",6),this.calciteInternalTabsFocusPrevious=i(this,"calciteInternalTabsFocusPrevious",6),this.calciteInternalTabsFocusFirst=i(this,"calciteInternalTabsFocusFirst",6),this.calciteInternalTabsFocusLast=i(this,"calciteInternalTabsFocusLast",6),this.calciteInternalTabTitleRegister=i(this,"calciteInternalTabTitleRegister",6),this.calciteInternalTabIconChanged=i(this,"calciteInternalTabIconChanged",6),this.closeClickHandler=()=>{this.closeTabTitleAndNotify()},this.mutationObserver=l("mutation",()=>this.updateHasText()),this.resizeObserver=l("resize",()=>{this.calciteInternalTabIconChanged.emit()}),this.guid=`calcite-tab-title-${g()}`,this.selected=!1,this.closable=!1,this.closed=!1,this.disabled=!1,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.layout=void 0,this.position="top",this.scale="m",this.bordered=!1,this.tab=void 0,this.messages=void 0,this.messageOverrides=void 0,this.controls=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasText=!1}selectedHandler(){this.selected&&this.activateTab(!1)}onMessagesChange(){}connectedCallback(){m(this),v(this),T(this),this.setupTextContentObserver(),this.parentTabNavEl=this.el.closest("calcite-tab-nav"),this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){var e,t,n;(e=this.mutationObserver)==null||e.disconnect(),(t=document.body)==null||t.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el})),(n=this.resizeObserver)==null||n.disconnect(),x(this),y(this),k(this)}async componentWillLoad(){await I(this),this.updateHasText(),this.tab&&this.selected&&this.activateTab(!1)}componentWillRender(){this.parentTabsEl&&(this.layout=this.parentTabsEl.layout,this.bordered=this.parentTabsEl.bordered)}render(){const{el:e,closed:t}=this,n=e.id||this.guid,h=o("calcite-icon",{class:{[s.titleIcon]:!0,[s.iconStart]:!0},flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:a(this.scale)}),b=o("calcite-icon",{class:{[s.titleIcon]:!0,[s.iconEnd]:!0},flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:a(this.scale)});return o(z,{"aria-controls":this.controls,"aria-selected":E(this.selected),id:n,role:"tab",tabIndex:this.selected&&!this.disabled?0:-1},o(C,{disabled:this.disabled},o("div",{class:{container:!0,[s.iconPresent]:!!this.iconStart||!!this.iconEnd,[`scale-${this.scale}`]:!0},hidden:t,ref:u=>{var c;return(c=this.resizeObserver)==null?void 0:c.observe(u)}},o("div",{class:{[s.content]:!0,[s.contentHasText]:this.hasText}},this.iconStart?h:null,o("slot",null),this.iconEnd?b:null),this.renderCloseButton())))}renderCloseButton(){const{closable:e,messages:t}=this;return e?o("button",{"aria-label":t.close,class:s.closeButton,disabled:!1,key:s.closeButton,onClick:this.closeClickHandler,title:t.close,type:"button",ref:n=>this.closeButtonEl=n},o("calcite-icon",{icon:A.close,scale:a(this.scale)})):null}async componentDidLoad(){this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier())}componentDidRender(){w(this)}internalTabChangeHandler(e){e.composedPath().find(n=>n.tagName==="CALCITE-TABS")===this.parentTabsEl&&(this.tab?this.selected=this.tab===e.detail.tab:this.getTabIndex().then(n=>{this.selected=n===e.detail.tab}),e.stopPropagation())}onClick(){this.activateTab()}keyDownHandler(e){switch(e.key){case" ":case"Enter":e.composedPath().includes(this.closeButtonEl)||(this.activateTab(),e.preventDefault());break;case"ArrowRight":e.preventDefault(),r(this.el)==="ltr"?this.calciteInternalTabsFocusNext.emit():this.calciteInternalTabsFocusPrevious.emit();break;case"ArrowLeft":e.preventDefault(),r(this.el)==="ltr"?this.calciteInternalTabsFocusPrevious.emit():this.calciteInternalTabsFocusNext.emit();break;case"Home":e.preventDefault(),this.calciteInternalTabsFocusFirst.emit();break;case"End":e.preventDefault(),this.calciteInternalTabsFocusLast.emit();break}}async getTabIndex(){return Array.prototype.indexOf.call(F(this.el.parentElement.children).filter(e=>e.matches("calcite-tab-title")),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(e=[],t=[]){this.controls=e[t.indexOf(this.el.id)]||null}async activateTab(e=!0){if(this.disabled||this.closed)return;const t={tab:this.tab};this.calciteInternalTabsActivate.emit(t),e&&requestAnimationFrame(()=>this.calciteTabsActivate.emit())}effectiveLocaleChange(){H(this,this.effectiveLocale)}updateHasText(){this.hasText=this.el.textContent.trim().length>0}setupTextContentObserver(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0})}closeTabTitleAndNotify(){this.closed=!0,this.calciteInternalTabsClose.emit({tab:this.tab}),this.calciteTabsClose.emit()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{selected:["selectedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return O}},[1,"calcite-tab-title",{selected:[1540],closable:[516],closed:[1540],disabled:[516],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],layout:[1537],position:[1],scale:[1],bordered:[1540],tab:[513],messages:[1040],messageOverrides:[1040],controls:[32],defaultMessages:[32],effectiveLocale:[32],hasText:[32],getTabIndex:[64],getTabIdentifier:[64],updateAriaInfo:[64],activateTab:[64]},[[16,"calciteInternalTabChange","internalTabChangeHandler"],[0,"click","onClick"],[0,"keydown","keyDownHandler"]],{selected:["selectedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function S(){if(typeof customElements>"u")return;["calcite-tab-title","calcite-icon"].forEach(e=>{switch(e){case"calcite-tab-title":customElements.get(e)||customElements.define(e,R);break;case"calcite-icon":customElements.get(e)||L();break}})}S();export{R as T,S as d};
