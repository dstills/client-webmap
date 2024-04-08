import{ef as w,em as b,eg as o,eh as p,ei as C}from"./index-nBWeBKPv.js";import{k as h}from"./dom-bef18e4a-CP2TJ11y.js";import{i as f}from"./key-3f1e3da4-DU8kuSDQ.js";import{c as m,u as R,d as g,I as y}from"./interactive-583e13d7-Cl8hsh9F.js";import{g as k}from"./component-b0a9a44a-WqEOSVCt.js";import"./guid-617f6e1b-DQtJl1SZ.js";import"./browser-1baf23f7-zzj4YD6P.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const T={lastVisibleRow:"last-visible-row"},A=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-row-background:var(--calcite-table-row-background, var(--calcite-color-foreground-1));--calcite-internal-table-row-border-color:var(--calcite-table-row-border-color, transparent);display:contents}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) tr{pointer-events:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}tr{border-block-end:1px solid var(--calcite-internal-table-row-border-color);background-color:var(--calcite-internal-table-row-background)}tr.last-visible-row{border-block-end:0}",S=class{constructor(s){w(this,s),this.calciteTableRowSelect=b(this,"calciteTableRowSelect",6),this.calciteInternalTableRowFocusRequest=b(this,"calciteInternalTableRowFocusRequest",6),this.rowCells=[],this.keyDownHandler=e=>{var c;if(this.interactionMode!=="interactive")return;const t=e.target,a=e.key,i=e.ctrlKey,n=this.rowCells;if(t.matches("calcite-table-cell")||t.matches("calcite-table-header"))switch(a){case"ArrowUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"previous"),e.preventDefault();break;case"ArrowDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"next"),e.preventDefault();break;case"PageUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"first"),e.preventDefault();break;case"PageDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"last"),e.preventDefault();break;case"ArrowLeft":h(n,t,"previous",!1),e.preventDefault();break;case"ArrowRight":h(n,t,"next",!1),e.preventDefault();break;case"Home":i?(this.emitTableRowFocusRequest(1,this.positionAll,"first"),e.preventDefault()):(h(n,t,"first",!1),e.preventDefault());break;case"End":i?(this.emitTableRowFocusRequest((c=this.rowCells)==null?void 0:c.length,this.positionAll,"last",!0),e.preventDefault()):(h(n,t,"last",!1),e.preventDefault());break}},this.emitTableRowFocusRequest=(e,t,a,i)=>{this.calciteInternalTableRowFocusRequest.emit({cellPosition:e,rowPosition:t,destination:a,lastCell:i})},this.updateCells=()=>{var n,c,r,d;const e=this.alignment?this.alignment:this.rowType!=="head"?"center":"start",t=(c=(n=this.tableRowSlotEl)==null?void 0:n.assignedElements({flatten:!0}))==null?void 0:c.filter(l=>l.matches("calcite-table-cell")||l.matches("calcite-table-header")),a=(d=Array.from((r=this.tableRowEl)==null?void 0:r.querySelectorAll("calcite-table-header, calcite-table-cell")))==null?void 0:d.filter(l=>l.numberCell||l.selectionCell),i=a?a.concat(t):t;i.length>0&&(i==null||i.forEach((l,u)=>{l.interactionMode=this.interactionMode,l.lastCell=u===i.length-1,l.parentRowAlignment=e,l.parentRowIsSelected=this.selected,l.parentRowType=this.rowType,l.positionInRow=u+1,l.scale=this.scale,l.nodeName==="CALCITE-TABLE-CELL"&&(l.readCellContentsToAT=this.readCellContentsToAT,l.disabled=this.disabled)})),this.rowCells=i||[],this.cellCount=i==null?void 0:i.length},this.handleSelectionOfRow=()=>{this.calciteTableRowSelect.emit()},this.handleKeyboardSelection=e=>{f(e.key)&&(e.key===" "&&e.preventDefault(),this.handleSelectionOfRow())},this.alignment=void 0,this.disabled=!1,this.selected=!1,this.cellCount=void 0,this.interactionMode="interactive",this.lastVisibleRow=void 0,this.rowType=void 0,this.numbered=!1,this.positionSection=void 0,this.positionSectionLocalized=void 0,this.positionAll=void 0,this.readCellContentsToAT=void 0,this.scale=void 0,this.selectionMode="none",this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.bodyRowCount=void 0,this.effectiveLocale=""}handleCellChanges(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}handleDelayedCellChanges(){this.tableRowEl&&this.rowCells.length>0&&requestAnimationFrame(()=>this.updateCells())}componentDidLoad(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}connectedCallback(){m(this)}componentDidRender(){R(this)}disconnectedCallback(){g(this)}calciteInternalTableRowFocusChangeHandler(s){var e;if(s.target.contains(this.el)){const t=s.detail.cellPosition,a=s.detail.rowPosition,i=s.detail.destination,n=s.detail.lastCell;if(a===this.positionAll){if(this.disabled){const r=i==="last"?"previous":i==="first"?"next":i;this.emitTableRowFocusRequest(t,this.positionAll,r);return}const c=n?this.rowCells[this.rowCells.length-1]:(e=this.rowCells)==null?void 0:e.find((r,d)=>d+1===t);c&&c.setFocus()}}}renderSelectionIcon(){const s=this.selectionMode==="multiple"&&this.selected?"check-square-f":this.selectionMode==="multiple"?"square":this.selected?"circle-f":"circle";return o("calcite-icon",{icon:s,scale:k(this.scale)})}renderSelectableCell(){return this.rowType==="head"?o("calcite-table-header",{alignment:"center",bodyRowCount:this.bodyRowCount,key:"selection-head",onClick:this.selectionMode==="multiple"&&this.handleSelectionOfRow,onKeyDown:this.selectionMode==="multiple"&&this.handleKeyboardSelection,parentRowAlignment:this.alignment,selectedRowCount:this.selectedRowCount,selectedRowCountLocalized:this.selectedRowCountLocalized,selectionCell:!0,selectionMode:this.selectionMode}):this.rowType==="body"?o("calcite-table-cell",{alignment:"center",key:"selection-body",onClick:this.handleSelectionOfRow,onKeyDown:this.handleKeyboardSelection,parentRowAlignment:this.alignment,parentRowIsSelected:this.selected,parentRowPositionLocalized:this.positionSectionLocalized,selectionCell:!0},this.renderSelectionIcon()):o("calcite-table-cell",{alignment:"center",key:"selection-foot",parentRowAlignment:this.alignment,selectionCell:!0})}renderNumberedCell(){return this.rowType==="head"?o("calcite-table-header",{alignment:"center",key:"numbered-head",numberCell:!0,parentRowAlignment:this.alignment}):this.rowType==="body"?o("calcite-table-cell",{alignment:"center",key:"numbered-body",numberCell:!0,parentRowAlignment:this.alignment},this.positionSectionLocalized):o("calcite-table-cell",{alignment:"center",key:"numbered-foot",numberCell:!0,parentRowAlignment:this.alignment})}render(){return o(p,null,o(y,{disabled:this.disabled},o("tr",{"aria-disabled":this.disabled,"aria-rowindex":this.positionAll+1,"aria-selected":this.selected,class:{[T.lastVisibleRow]:this.lastVisibleRow},onKeyDown:this.keyDownHandler,ref:s=>this.tableRowEl=s},this.numbered&&this.renderNumberedCell(),this.selectionMode!=="none"&&this.renderSelectableCell(),o("slot",{onSlotchange:this.updateCells,ref:s=>this.tableRowSlotEl=s}))))}get el(){return C(this)}static get watchers(){return{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],interactionMode:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}}};S.style=A;export{S as calcite_table_row};
