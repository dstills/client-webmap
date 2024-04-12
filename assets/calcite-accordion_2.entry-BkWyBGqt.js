import{bN as m,bU as l,bO as t,bQ as g,bS as u,bP as v}from"./index-BS4ejk0L.js";import{c as x}from"./observers-ff65e337--1jEkyko.js";import{c as f,d as b}from"./conditionalSlot-9a0153a6-JpmXKvuq.js";import{h,g as y,t as I,a as p}from"./dom-bef18e4a-C5uoTC-E.js";import{g as s}from"./component-b0a9a44a-WqEOSVCt.js";import"./guid-617f6e1b-DQtJl1SZ.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const S=":host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-color-border-2);--calcite-accordion-item-background:var(--calcite-color-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-color-border-2)}:host([hidden]){display:none}[hidden]{display:none}",C=class{constructor(e){m(this,e),this.calciteInternalAccordionChange=l(this,"calciteInternalAccordionChange",6),this.mutationObserver=x("mutation",()=>this.updateAccordionItems()),this.appearance="solid",this.iconPosition="end",this.iconType="chevron",this.scale="m",this.selectionMode="multiple"}handlePropsChange(){this.updateAccordionItems()}connectedCallback(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0}),this.updateAccordionItems()}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect()}render(){const e=this.appearance==="transparent";return t("div",{class:{"accordion--transparent":e,accordion:!e}},t("slot",null))}updateActiveItemOnChange(e){this.calciteInternalAccordionChange.emit({requestedAccordionItem:e.detail.requestedAccordionItem}),e.stopPropagation()}updateAccordionItems(){this.el.querySelectorAll("calcite-accordion-item").forEach(e=>{e.iconPosition=this.iconPosition,e.iconType=this.iconType,e.scale=this.scale}),document.dispatchEvent(new CustomEvent("calciteInternalAccordionItemsSync"))}get el(){return g(this)}static get watchers(){return{iconPosition:["handlePropsChange"],iconType:["handlePropsChange"],scale:["handlePropsChange"],selectionMode:["handlePropsChange"]}}};C.style=S;const a={actionsStart:"actions-start",actionsEnd:"actions-end"},i={icon:"icon",header:"header",headerContent:"header-content",actionsStart:"actions-start",actionsEnd:"actions-end",headerText:"header-text",heading:"heading",description:"description",expandIcon:"expand-icon",content:"content",iconStart:"icon--start",iconEnd:"icon--end",headerContainer:"header-container"},r={section:"section",sectionToggle:"section-toggle"},k=`.icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:flex;flex-direction:column;color:var(--calcite-color-text-3);text-decoration-line:none;background-color:var(--calcite-accordion-item-background, var(--calcite-color-foreground-1))}:host .header-content{outline-color:transparent}:host(:focus) .header-content{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([expanded]){color:var(--calcite-color-text-1)}:host([expanded]) .content{display:block;color:var(--calcite-color-text-1)}:host([expanded]) .header{border-block-end-color:transparent}:host .header{display:flex;align-items:stretch}:host .icon{position:relative;margin:0px;display:inline-flex;color:var(--calcite-color-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}.icon--start{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin)}.icon--end{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin);margin-inline-start:var(--calcite-accordion-icon-margin)}.header-container{inline-size:100%}.content{padding:var(--calcite-accordion-item-padding)}:host .content,:host .header{border-block-end:1px solid var(--calcite-accordion-item-border, var(--calcite-color-border-2))}:host .header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}:host .content{display:none;padding-block-start:0px;color:var(--calcite-color-text-3);text-align:initial}:host .expand-icon{color:var(--calcite-color-text-3);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([expanded]) .expand-icon{color:var(--calcite-color-text-3);transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}:host .heading,:host .description{display:flex;inline-size:100%}:host .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}:host .description{margin-block-start:0.25rem;color:var(--calcite-color-text-3)}:host(:focus) .heading,:host(:hover) .heading{color:var(--calcite-color-text-1)}:host(:focus) .icon,:host(:hover) .icon{color:var(--calcite-color-text-1)}:host(:focus) .expand-icon,:host(:hover) .expand-icon{color:var(--calcite-color-text-1)}:host(:focus) .description,:host(:hover) .description{color:var(--calcite-color-text-2)}:host(:focus) .heading,:host(:active) .heading,:host([expanded]) .heading{color:var(--calcite-color-text-1)}:host(:focus) .icon,:host(:active) .icon,:host([expanded]) .icon{color:var(--calcite-color-text-1)}:host(:focus) .description,:host(:active) .description,:host([expanded]) .description{color:var(--calcite-color-text-2)}.header-content{flex-grow:1;cursor:pointer;padding:var(--calcite-accordion-item-padding);flex-direction:var(--calcite-accordion-item-flex-direction)}.actions-start,.actions-end{display:flex;align-items:center}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}:host(:hover) .heading,:host(:focus) .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}`,A=class{constructor(e){m(this,e),this.calciteInternalAccordionItemSelect=l(this,"calciteInternalAccordionItemSelect",6),this.calciteInternalAccordionItemClose=l(this,"calciteInternalAccordionItemClose",6),this.itemHeaderClickHandler=()=>this.emitRequestedItem(),this.expanded=!1,this.heading=void 0,this.description=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconPosition=void 0,this.iconType=void 0,this.accordionParent=void 0,this.scale=void 0}connectedCallback(){f(this)}disconnectedCallback(){b(this)}renderActionsStart(){const{el:e}=this;return h(e,a.actionsStart)?t("div",{class:i.actionsStart},t("slot",{name:a.actionsStart})):null}renderActionsEnd(){const{el:e}=this;return h(e,a.actionsEnd)?t("div",{class:i.actionsEnd},t("slot",{name:a.actionsEnd})):null}render(){const{iconFlipRtl:e}=this,c=y(this.el),o=this.iconStart?t("calcite-icon",{class:i.iconStart,flipRtl:e==="both"||e==="start",icon:this.iconStart,key:"icon-start",scale:s(this.scale)}):null,d=this.iconEnd?t("calcite-icon",{class:i.iconEnd,flipRtl:e==="both"||e==="end",icon:this.iconEnd,key:"icon-end",scale:s(this.scale)}):null,{description:n}=this;return t(v,null,t("div",{class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},t("div",{class:{[i.header]:!0,[u.rtl]:c==="rtl"}},this.renderActionsStart(),t("div",{"aria-controls":r.section,"aria-expanded":I(this.expanded),class:i.headerContent,id:r.sectionToggle,onClick:this.itemHeaderClickHandler,role:"button",tabindex:"0"},t("div",{class:i.headerContainer},o,t("div",{class:i.headerText},t("span",{class:i.heading},this.heading),n?t("span",{class:i.description},n):null),d),t("calcite-icon",{class:i.expandIcon,icon:this.iconType==="chevron"?"chevronDown":this.iconType==="caret"?"caretDown":this.expanded?"minus":"plus",scale:s(this.scale)})),this.renderActionsEnd()),t("section",{"aria-labelledby":r.sectionToggle,class:i.content,id:r.section},t("slot",null))))}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.emitRequestedItem(),e.preventDefault();break}}updateActiveItemOnChange(e){const[c]=e.composedPath(),o=p(this.el,"calcite-accordion");c===o&&(this.determineActiveItem(o.selectionMode,e.detail.requestedAccordionItem),e.stopPropagation())}accordionItemSyncHandler(e){const[c]=e.composedPath(),o=this.el;if(o.parentElement===c)return;const n=p(o,"calcite-accordion");c===n&&(o.iconPosition=n.iconPosition,o.iconType=n.iconType,o.scale=n.scale,e.stopPropagation())}determineActiveItem(e,c){switch(e){case"multiple":this.el===c&&(this.expanded=!this.expanded);break;case"single":this.expanded=this.el===c?!this.expanded:!1;break;case"single-persist":this.expanded=this.el===c;break}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}get el(){return g(this)}};A.style=k;export{C as calcite_accordion,A as calcite_accordion_item};