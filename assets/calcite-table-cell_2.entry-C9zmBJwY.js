import{ef as p,eg as i,ek as y,eh as b,ei as g}from"./index-nBWeBKPv.js";import{s as f,a as m,c as C}from"./loadable-6056dcbc-CWY718pR.js";import{u as v,s as w,c as x,d as R}from"./t9n-91f18f76-DmfvLzG2.js";import{c as k,u as L,d as z,I}from"./interactive-583e13d7-Cl8hsh9F.js";import{c as S,d as T}from"./locale-b835bf72-D_ioPdlj.js";import{g as $}from"./dom-bef18e4a-CP2TJ11y.js";import{g as M}from"./component-b0a9a44a-WqEOSVCt.js";import"./browser-1baf23f7-zzj4YD6P.js";import"./key-3f1e3da4-DU8kuSDQ.js";import"./observers-ff65e337--1jEkyko.js";import"./guid-617f6e1b-DQtJl1SZ.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const o={contentCell:"content-cell",numberCell:"number-cell",footerCell:"footer-cell",selectionCell:"selection-cell",selectedCell:"selected-cell",assistiveText:"assistive-text",lastCell:"last-cell",staticCell:"static-cell"},A=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-cell-background:var(--calcite-table-cell-background, transparent);display:contents}:host([alignment=center]) td:not(.selection-cell):not(.number-cell){text-align:center}:host([alignment=end]) td:not(.selection-cell):not(.number-cell){text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}td{white-space:normal;text-align:start;vertical-align:middle;color:var(--calcite-color-text-1);background:var(--calcite-internal-table-cell-background);font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-color-border-3);padding:var(--calcite-internal-table-cell-padding)}td:not(.static-cell){outline-color:transparent}td:not(.static-cell):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}td.start.content-cell{vertical-align:top}td.end.content-cell{vertical-align:bottom}td.last-cell{border-inline-end:0}.number-cell{background-color:var(--calcite-color-foreground-2)}.footer-cell{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);border-block-start:1px solid var(--calcite-color-border-3)}.number-cell,.selection-cell{text-align:center;border-inline-end:1px solid var(--calcite-color-border-3);inline-size:2rem;min-inline-size:2rem}.selection-cell{color:var(--calcite-color-text-3);inset-inline-start:2rem}.selection-cell:not(.footer-cell){cursor:pointer}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-internal-table-cell-background:var(--calcite-color-foreground-current)}.selection-cell.selected-cell{box-shadow:inset 0.25rem 0 0 0 var(--calcite-color-brand);color:var(--calcite-color-brand)}.selection-cell.selected-cell calcite-icon{color:var(--calcite-color-brand)}.calcite--rtl.selection-cell.selected-cell{box-shadow:inset -0.25rem 0 0 0 var(--calcite-color-brand)}.selection-cell{vertical-align:middle}.selection-cell ::slotted(calcite-icon){pointer-events:none;margin-block-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,F=class{constructor(e){p(this,e),this.updateScreenReaderContentsText=()=>{this.contentsText=this.el.textContent},this.onContainerBlur=()=>{this.focused=!1},this.onContainerFocus=()=>{this.focused=!0},this.alignment="start",this.colSpan=void 0,this.rowSpan=void 0,this.disabled=void 0,this.interactionMode="interactive",this.lastCell=void 0,this.numberCell=void 0,this.parentRowIsSelected=void 0,this.parentRowAlignment="start",this.parentRowPositionLocalized=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.readCellContentsToAT=void 0,this.scale="m",this.selectionCell=void 0,this.messages=void 0,this.messageOverrides=void 0,this.contentsText="",this.defaultMessages=void 0,this.focused=!1,this.selectionText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderSelectionText()}onMessagesChange(){}effectiveLocaleChange(){v(this,this.effectiveLocale)}async componentWillLoad(){f(this),await w(this),this.updateScreenReaderContentsText(),this.updateScreenReaderSelectionText()}componentDidLoad(){m(this)}connectedCallback(){S(this),x(this),k(this)}componentDidRender(){L(this)}disconnectedCallback(){T(this),R(this),z(this)}async setFocus(){await C(this),this.containerEl.focus()}updateScreenReaderSelectionText(){var n,s,c,a,r,d;const e=`${(n=this.messages)==null?void 0:n.row} ${this.parentRowPositionLocalized} ${(s=this.messages)==null?void 0:s.selected} ${(c=this.messages)==null?void 0:c.keyboardDeselect}`,l=`${(a=this.messages)==null?void 0:a.row} ${this.parentRowPositionLocalized} ${(r=this.messages)==null?void 0:r.unselected} ${(d=this.messages)==null?void 0:d.keyboardSelect}`;this.selectionText=this.parentRowIsSelected?e:l}render(){const e=$(this.el),l=this.disabled||this.interactionMode==="static"&&(!this.selectionCell||this.selectionCell&&this.parentRowType==="foot");return i(b,null,i(I,{disabled:this.disabled},i("td",{"aria-disabled":this.disabled,class:{[o.footerCell]:this.parentRowType==="foot",[o.contentCell]:!this.numberCell&&!this.selectionCell,[o.numberCell]:this.numberCell,[o.selectionCell]:this.selectionCell,[o.selectedCell]:this.parentRowIsSelected,[o.lastCell]:this.lastCell&&(!this.rowSpan||this.colSpan&&!!this.rowSpan),[y.rtl]:e==="rtl",[o.staticCell]:l,[this.parentRowAlignment]:this.parentRowAlignment==="start"||this.parentRowAlignment==="end"},colSpan:this.colSpan,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,role:this.interactionMode==="interactive"?"gridcell":"cell",rowSpan:this.rowSpan,tabIndex:l?-1:0,ref:n=>this.containerEl=n},(this.selectionCell||this.readCellContentsToAT)&&i("span",{"aria-hidden":!0,"aria-live":this.focused?"polite":"off",class:o.assistiveText},this.selectionCell&&this.selectionText,this.readCellContentsToAT&&!this.selectionCell&&this.contentsText),i("slot",{onSlotchange:this.updateScreenReaderContentsText}))))}static get assetsDirs(){return["assets"]}get el(){return g(this)}static get watchers(){return{parentRowIsSelected:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};F.style=A;const t={contentCell:"content-cell",numberCell:"number-cell",selectionCell:"selection-cell",bodyRow:"body-row",footerRow:"footer-row",heading:"heading",description:"description",multipleSelectionCell:"cell--multiple-selection",assistiveText:"assistive-text",active:"active",selectedCell:"selected-cell",lastCell:"last-cell",staticCell:"static-cell"},D=`:host{--calcite-internal-table-header-background:var(--calcite-table-header-background, var(--calcite-color-foreground-2));--calcite-internal-table-header-border-color:var(--calcite-table-border-color, var(--calcite-color-border-3));display:contents}:host([alignment=center]) th{text-align:center}:host([alignment=end]) th{text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}th{white-space:normal;text-align:start;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-internal-table-header-border-color);border-block-end:1px solid var(--calcite-internal-table-header-border-color);padding-block:calc(var(--calcite-internal-table-cell-padding) * 1.5);padding-inline:var(--calcite-internal-table-cell-padding);background-color:var(--calcite-internal-table-header-background)}th:not(.static-cell){outline-color:transparent}th:not(.static-cell):not(.static-cell):focus-within{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}th:not(.center):not(.end).content-cell{vertical-align:top}th.center{vertical-align:middle}th.end.content-cell{vertical-align:bottom}th.body-row,th.footer-row{padding-block:var(--calcite-internal-table-cell-padding);border-block-end:0}th.footer-row{border-block-start:1px solid var(--calcite-internal-table-header-border-color)}th.last-cell{border-inline-end:0}.cell--multiple-selection{cursor:pointer;vertical-align:middle;color:var(--calcite-color-text-3)}.cell--multiple-selection:not(.end){vertical-align:middle}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-internal-table-header-background:var(--calcite-color-foreground-current)}.number-cell,.selection-cell{color:var(--calcite-color-text-2);inline-size:2rem;min-inline-size:2rem}.selection-cell calcite-icon.active{color:var(--calcite-color-brand)}.number-cell calcite-icon,.selection-cell calcite-icon{margin-inline-start:auto;margin-inline-end:auto;vertical-align:middle}.heading{color:var(--calcite-color-text-1)}.description{color:var(--calcite-color-text-3);font-size:var(--calcite-internal-table-cell-font-size-secondary)}`,B=class{constructor(e){p(this,e),this.onContainerBlur=()=>{this.focused=!1},this.onContainerFocus=()=>{this.focused=!0},this.alignment="start",this.colSpan=void 0,this.description=void 0,this.heading=void 0,this.rowSpan=void 0,this.interactionMode="interactive",this.lastCell=void 0,this.numberCell=!1,this.parentRowAlignment="start",this.parentRowIsSelected=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.scale=void 0,this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.selectionCell=!1,this.selectionMode=void 0,this.bodyRowCount=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.focused=!1,this.screenReaderText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderText()}onMessagesChange(){}async componentWillLoad(){f(this),await w(this),this.updateScreenReaderText()}componentDidLoad(){m(this)}connectedCallback(){S(this),x(this)}disconnectedCallback(){T(this),R(this)}effectiveLocaleChange(){v(this,this.effectiveLocale)}async setFocus(){await C(this),this.containerEl.focus()}updateScreenReaderText(){var n,s,c,a,r,d,h,u;let e="";const l=`${this.selectedRowCountLocalized} ${(n=this.messages)==null?void 0:n.selected}`;this.numberCell?e=(s=this.messages)==null?void 0:s.rowNumber:this.selectionMode==="single"?e=`${(c=this.messages)==null?void 0:c.selectionColumn}. ${l}`:this.bodyRowCount===this.selectedRowCount?e=`${(a=this.messages)==null?void 0:a.selectionColumn}. ${(r=this.messages)==null?void 0:r.all} ${l} ${(d=this.messages)==null?void 0:d.keyboardDeselectAll}`:e=`${(h=this.messages)==null?void 0:h.selectionColumn}. ${l} ${(u=this.messages)==null?void 0:u.keyboardSelectAll}`,this.screenReaderText=e}render(){const e=this.rowSpan?"rowgroup":this.colSpan?"colgroup":this.parentRowType==="body"?"row":"col",l=this.selectedRowCount===this.bodyRowCount,n=l?"check-square-f":"check-square",s=this.interactionMode==="static"&&!this.selectionCell;return i(b,null,i("th",{"aria-colindex":this.parentRowType==="head"?this.positionInRow:void 0,class:{[t.bodyRow]:this.parentRowType==="body",[t.footerRow]:this.parentRowType==="foot",[t.contentCell]:!this.numberCell&&!this.selectionCell,[t.numberCell]:this.numberCell,[t.selectionCell]:this.selectionCell,[t.selectedCell]:this.parentRowIsSelected,[t.multipleSelectionCell]:this.selectionMode==="multiple",[t.staticCell]:s,[t.lastCell]:this.lastCell&&(!this.rowSpan||this.colSpan&&!!this.rowSpan),[this.parentRowAlignment]:this.parentRowAlignment==="center"||this.parentRowAlignment==="end"},colSpan:this.colSpan,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,role:this.parentRowType==="head"?"columnheader":"rowheader",rowSpan:this.rowSpan,scope:e,tabIndex:this.selectionCell?0:s?-1:0,ref:c=>this.containerEl=c},this.heading&&i("div",{class:t.heading},this.heading),this.description&&i("div",{class:t.description},this.description),this.selectionCell&&this.selectionMode==="multiple"&&i("calcite-icon",{class:{[t.active]:l},icon:n,scale:M(this.scale)}),(this.selectionCell||this.numberCell)&&i("span",{"aria-hidden":!0,"aria-live":this.focused?"polite":"off",class:t.assistiveText},this.screenReaderText)))}static get assetsDirs(){return["assets"]}get el(){return g(this)}static get watchers(){return{selectedRowCount:["onSelectedChange"],selectedRowCountLocalized:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};B.style=D;export{F as calcite_table_cell,B as calcite_table_header};
