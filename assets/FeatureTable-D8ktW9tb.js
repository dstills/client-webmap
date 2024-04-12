function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-button-BEiwyGvk.js","assets/button-CTlumxno.js","assets/index-BS4ejk0L.js","assets/index-DvE0Cji0.css","assets/calcite-popover-D1OHY7u8.js","assets/calcite-icon-BkHotFMP.js","assets/calcite-scrim-De915RLe.js","assets/calcite-action-BTM0fbsv.js","assets/calcite-action-bar-gDmUv4Zi.js","assets/ExpandToggle-DhWXC-6g.js","assets/action-group-CiY4XEDt.js","assets/calcite-input-date-picker-DWn4WYL3.js","assets/Validation-Pfa6caJE.js","assets/input-message-CuciggWc.js","assets/input-text-BYseP8Rn.js","assets/input-kBVpmtEZ.js","assets/progress-B2N2lbwf.js","assets/calcite-input-time-picker-N84mbiCR.js","assets/math-BEjMmqe5.js","assets/calcite-input-time-zone-Y6IdxQPT.js","assets/chip-BpprsELZ.js","assets/combobox-BY5gvlAi.js","assets/filter-C2cemdNK.js","assets/utils2-DMbAlmau.js","assets/core-Bizuf87v.js","assets/combobox-item-C4Xn7Gan.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var co=Object.defineProperty;var uo=(r,t,e)=>t in r?co(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var z=(r,t,e)=>(uo(r,typeof t!="symbol"?t+"":t,e),e);import{E as c,F as u,gm as Dt,J as W,O as vi,j1 as Ci,j2 as Xs,_ as Q,j3 as C,oH as po,nF as wi,E0 as we,sM as _o,c6 as er,c3 as ie,bt as T,kU as xt,ht as re,ck as Ui,cj as Wi,E1 as ji,cz as qi,hu as Yi,aT as St,pU as fo,y3 as mo,y2 as go,y1 as yo,hw as Zi,ce as Ki,cf as bo,xX as vo,bb as Qe,sd as Qi,se as Ji,x$ as Co,y0 as wo,pO as Ao,pP as Eo,cd as Nt,be as Y,j0 as De,cM as Ne,A as ni,kD as Wt,v as xo,b as Oe,b4 as So,a$ as tr,oG as Io,xj as jt,aE as Po,o7 as To,nM as Ro,E2 as Oo,cm as Fo,ca as zo,q9 as Mo,j9 as ko,nO as qt,q4 as Do,pZ as No,b$ as Xi}from"./index-BS4ejk0L.js";import{q as $o}from"./FieldInput-VhZeY3W_.js";import{a as Lo}from"./uriUtils-Dq3r-kPd.js";import"./featureUtils-CGogJx99.js";import"./featureFormUtils-DsXg5bmB.js";var Ct;let q=Ct=class extends vi{constructor(r){super(r),this.autoCloseMenu=!1,this.iconClass=null,this.items=null,this.label=null,this.open=!1,this.selected=!1,this.selectionEnabled=!1,this.clickFunction=null}castItems(r){return r?r.map(t=>t instanceof Ct?t:new Ct(t)):null}};c([u()],q.prototype,"autoCloseMenu",void 0),c([u()],q.prototype,"iconClass",void 0),c([u()],q.prototype,"items",void 0),c([Dt("items")],q.prototype,"castItems",null),c([u()],q.prototype,"label",void 0),c([u()],q.prototype,"open",void 0),c([u()],q.prototype,"selected",void 0),c([u()],q.prototype,"selectionEnabled",void 0),c([u()],q.prototype,"clickFunction",void 0),q=Ct=c([W("esri.widgets.FeatureTable.Grid.support.ButtonMenuItem")],q);const J=q;let Fe=class extends vi{constructor(t){super(t),this.items=null,this.open=!1}castItems(t){return t?t.map(e=>e instanceof J?e:new J(e)):null}};c([u()],Fe.prototype,"items",void 0),c([Dt("items")],Fe.prototype,"castItems",null),c([u()],Fe.prototype,"open",void 0),Fe=c([W("esri.widgets.FeatureTable.Grid.support.ButtonMenuViewModel")],Fe);const Ho=Fe,L="esri-button-menu",V={base:L,content:`${L}__content`,itemWrapper:`${L}__item-wrapper`,label:`${L}__label`,icon:`${L}__icon`,item:`${L}__item`,itemLabel:`${L}__item-label`,itemLabelContent:`${L}__item-label-content`,selectableMenuItem:`${L}__item--selectable`,selectedMenuItem:`${L}__item--selected`,checkbox:`${L}__checkbox`,embeddedContentWrapper:`${L}__embedded-content-wrapper`,button:`${L}__button`,buttonSelected:`${L}__button--selected`};let ae=class extends Ci{constructor(t,e){super(t,e),this._popover=null,this.disabled=!1,this.iconClass="",this.viewModel=new Ho}loadDependencies(){return Xs({button:()=>Q(()=>import("./calcite-button-BEiwyGvk.js"),__vite__mapDeps([0,1,2,3])),popover:()=>Q(()=>import("./calcite-popover-D1OHY7u8.js"),__vite__mapDeps([4,2,3]))})}destroy(){this._popover=null}get items(){return this.viewModel.items}set items(t){this.viewModel.items=t}get open(){return this.viewModel.open}set open(t){this.viewModel.open=t}render(){const{open:t}=this,e=`${this.id}-button`;return C("div",{class:this.classes(V.base,wi.widget),key:"menu"},C("calcite-button",{appearance:"transparent",bind:this,class:this.classes(V.button,t&&V.buttonSelected),disabled:this.disabled,iconStart:t?"x":"ellipsis",id:e,kind:"neutral",label:this.label||"button",onclick:()=>this._toggleOpen(t),tabIndex:0}),C("calcite-popover",{afterCreate:po,afterUpdate:()=>{var i;return(i=this._popover)==null?void 0:i.reposition()},autoClose:!0,bind:this,"data-node-ref":"_popover",label:this.label||"menu",open:t,overlayPositioning:"fixed",pointerDisabled:!0,referenceElement:e,onCalcitePopoverClose:this._onPopoverClose},this._renderMenuContent()))}_onPopoverClose(){this.open=!1}_renderMenuContent(){var i;const{id:t,open:e}=this;return C("div",{afterCreate:this._afterMenuContentNodeCreate,bind:this,class:V.content,hidden:!e,key:"esri-button-menu-content"},C("ul",{"aria-labelledby":`${t}-button`,bind:this,class:V.itemWrapper,id:`${t}-menu`,role:"menu"},(i=this.items)!=null&&i.length?this._renderItems():null))}_renderItems(){var t;return(t=this.items)==null?void 0:t.map((e,i)=>this._renderItem(e,i))}_renderItem(t,e,i){var a;const s=i!=null?`${this.id}-menu-item-${e}-${i}`:`${this.id}-menu-item-${e}`,o=`${s}-label`,n=this.classes(V.item,t.selectionEnabled?V.selectableMenuItem:null,t.selectionEnabled&&t.selected?V.selectedMenuItem:null);return C("li",{afterCreate:this._afterMenuItemCreate,bind:this,class:n,"data-item-index":e,"data-item-subIndex":i,for:s,key:s,onclick:l=>this._handleMenuItemInteraction(l,t),onkeydown:l=>this._handleMenuItemKeydown(l,t),role:"menuitem",tabIndex:this.disabled?-1:0},C("input",{checked:t.selected,class:V.checkbox,disabled:!0,id:s,name:s,tabIndex:-1,type:"checkbox"}),C("label",{class:V.itemLabel,for:s,id:o},C("span",{"aria-hidden":"true",class:this.classes(V.icon,t.iconClass)}),C("span",{class:V.itemLabelContent},we.sanitize(t.label))),C("ul",{"aria-labelledby":o,class:V.embeddedContentWrapper,id:`${this.id}-submenu`,role:"menu"},(a=t==null?void 0:t.items)==null?void 0:a.map((l,d)=>this._renderItem(l,e,d))))}_handleMenuItemInteraction(t,e){e.selected=!e.selected,e.open=!(!e.selected||!e.items),e.autoCloseMenu&&this.set("open",!1),e.clickFunction&&e.clickFunction({event:t,item:e}),t.stopPropagation()}_handleMenuItemKeydown(t,e){const{key:i}=t;_o(i)&&this._handleMenuItemInteraction(t,e),i==="Escape"&&(this.open=!1,t.preventDefault(),t.stopPropagation())}_afterMenuContentNodeCreate(t){t.focus()}_toggleOpen(t){this.open=!t}_afterMenuItemCreate(t){t["data-item-index"]===0&&t.focus()}};c([u()],ae.prototype,"disabled",void 0),c([u()],ae.prototype,"iconClass",void 0),c([u()],ae.prototype,"items",null),c([u()],ae.prototype,"open",null),c([u()],ae.prototype,"viewModel",void 0),ae=c([W("esri.widgets.FeatureTable.Grid.support.ButtonMenu")],ae);const ir=ae,_t="esri-column",ft={menuContainer:`${_t}__menu-container`,sorter:`${_t}__sorter`,headerContent:`${_t}__header-content`,headerLabel:`${_t}__header-label`},es={keyboardSort1:"Enter",keyboardSort2:"Spacebar"};let b=class extends er.EventedAccessor{constructor(t){super(t),this._menuContainer=document.createElement("div"),this.activeRowIndex=null,this.autoWidth=!1,this.cellValueFormatFunction=({value:e})=>we.sanitize(e),this.direction=null,this.flexGrow=1,this.footerRenderFunction=null,this.frozen=!1,this.frozenToEnd=!1,this.grid=null,this.header=null,this.headerRenderFunction=e=>{const{root:i}=e;if(this.removeCellContent(i),i.classList.add(ft.headerContent),this.sortable)this.headerSorterRenderFunction(e);else{const s=document.createElement("div");s.classList.add(ft.headerLabel);const o=document.createElement("span");o.textContent=this.label,o.setAttribute("title",this.label),s.appendChild(o),i.appendChild(s)}this.headerMenuEnabled&&this.headerMenuRenderFunction(e)},this.headerMenuRenderFunction=({root:e})=>{var i,s;(s=(i=this.menu)==null?void 0:i.items)!=null&&s.length&&e.appendChild(this._menuContainer)},this.headerSorterRenderFunction=({root:e})=>{var a;const{label:i,sortElement:s}=this;if(!s)return void(e.textContent=i);s.textContent!==i&&s.setAttribute("textContent",i),e.appendChild(s);const o=(a=this.grid)==null?void 0:a.getSlotElementByName(e.slot),n=o==null?void 0:o.parentElement;n&&!n.onkeydown&&(n.onkeydown=({key:l})=>{l!==es.keyboardSort1&&l!==es.keyboardSort2||s.click()})},this.hidden=!1,this.headerMenuEnabled=!0,this.initialSortPriority=null,this.menu=null,this.menuConfig=null,this.messages=null,this.messagesCommon=null,this.messagesURIUtils=null,this.path=null,this.renderFunction=({root:e,column:i,rowData:s})=>{const o=this.getCellValue(i,s),n=this.cellValueFormatFunction({column:i,rowData:s,value:o});e.innerHTML!==n&&(e.innerHTML=n)},this.resizable=!0,this.sortable=!1,this.textAlign="start",this.timeZone=null,this.timeZoneName=null,this.width=200}initialize(){const{messages:t,path:e}=this;this._set("sortElement",this.createSortElement()),this.sortElement.setAttribute("path",e??""),this._menuContainer.classList.add(ft.menuContainer),this.menu=new ir({container:this._menuContainer,label:t==null?void 0:t.options,iconClass:ie.handleHorizontal,...this.menuConfig}),this.menu.set("items",this.getMenuItems()),this.addHandles([T(()=>this.direction,i=>{const{sortElement:s}=this;this.sortable&&s&&(i?this.sortElement.direction!==i&&s.setAttribute("direction",i):s.removeAttribute("direction"))}),T(()=>this.hidden,()=>{var i;return(i=this.menu)==null?void 0:i.set("open",!1)}),T(()=>this.path,i=>{const{sortElement:s}=this,o=i??"";s&&s.path!==o&&s.setAttribute("path",o)})])}destroy(){var t;(t=this.menu)==null||t.destroy()}set invalid(t){var e;this._set("invalid",t),(e=this.grid)==null||e.generateCellPartNames()}get label(){return we.sanitize(this.header??this.path??"")}getMenuItems(){const{menuConfig:t,sortable:e}=this,i=t==null?void 0:t.items,s=this.getSortMenuItems(),o=[];return e&&o.push(...s),i!=null&&i.length&&o.push(...i),o.length?o:null}getSortMenuItems(){const{messages:t}=this;return[{selected:this.direction==="asc",iconClass:ie.arrowUp,label:t==null?void 0:t.sortAsc,autoCloseMenu:!0,clickFunction:()=>this.set("direction",this.direction!=="asc"?"asc":null)},{selected:this.direction==="desc",iconClass:ie.arrowDown,label:t==null?void 0:t.sortDesc,autoCloseMenu:!0,clickFunction:()=>this.set("direction",this.direction!=="desc"?"desc":null)}]}getCellValue(t,e){return t.path&&(e!=null&&e.item)?e.item[t.path]:""}createSortElement(){const{direction:t,label:e,path:i,initialSortPriority:s}=this,o=document.createElement("vaadin-grid-sorter");return o.classList.add(ft.sorter),o.setAttribute("path",i??""),o.setAttribute("title",e),o.textContent=e,t&&o.setAttribute("direction",t),s!=null&&(o._initialOrder=s),o.addEventListener("direction-changed",()=>{this.direction!==o.direction&&this._set("direction",o.direction)}),o}createCalciteAction(t){const e=document.createElement("calcite-action"),{click:i,icon:s,text:o}=t;return e.scale="s",e.text=o,e.title=o,e.icon=s,e.onclick=i,e}removeCellContent(t){if(t&&t.firstChild)try{for(;t!=null&&t.firstChild;)t==null||t.removeChild(t.firstChild)}catch{}}};c([u()],b.prototype,"activeRowIndex",void 0),c([u()],b.prototype,"autoWidth",void 0),c([u()],b.prototype,"cellValueFormatFunction",void 0),c([u()],b.prototype,"direction",void 0),c([u()],b.prototype,"flexGrow",void 0),c([u()],b.prototype,"footerRenderFunction",void 0),c([u()],b.prototype,"frozen",void 0),c([u()],b.prototype,"frozenToEnd",void 0),c([u()],b.prototype,"grid",void 0),c([u()],b.prototype,"header",void 0),c([u()],b.prototype,"invalid",null),c([u()],b.prototype,"headerRenderFunction",void 0),c([u()],b.prototype,"headerMenuRenderFunction",void 0),c([u()],b.prototype,"headerSorterRenderFunction",void 0),c([u()],b.prototype,"hidden",void 0),c([u()],b.prototype,"headerMenuEnabled",void 0),c([u({constructOnly:!0})],b.prototype,"initialSortPriority",void 0),c([u({readOnly:!0})],b.prototype,"label",null),c([u()],b.prototype,"menu",void 0),c([u()],b.prototype,"menuConfig",void 0),c([u()],b.prototype,"messages",void 0),c([u()],b.prototype,"messagesCommon",void 0),c([u()],b.prototype,"messagesURIUtils",void 0),c([u()],b.prototype,"path",void 0),c([u()],b.prototype,"renderFunction",void 0),c([u()],b.prototype,"resizable",void 0),c([u()],b.prototype,"sortable",void 0),c([u({readOnly:!0})],b.prototype,"sortElement",void 0),c([u()],b.prototype,"textAlign",void 0),c([u()],b.prototype,"timeZone",void 0),c([u()],b.prototype,"timeZoneName",void 0),c([u()],b.prototype,"width",void 0),b=c([W("esri.widgets.FeatureTable.Grid.Column")],b);const $t=b,Bo={attachmentsColumn:"esri-feature-table__column--attachments"};let le=class extends $t{constructor(t){super(t),this.header="",this.path="EsriFeatureTableAttachmentsColumn",this.renderFunction=({root:e,rowData:i})=>{const s=this._countFromItem(i==null?void 0:i.item).toString();e.innerHTML=`<div class="${Bo.attachmentsColumn}">${s}</div>`},this.sortable=!1,this.textAlign="center"}_countFromItem(t){var e;return((e=t==null?void 0:t.attachments)==null?void 0:e.length)||0}};c([u({constructOnly:!0})],le.prototype,"header",void 0),c([u({readOnly:!0})],le.prototype,"path",void 0),c([u()],le.prototype,"renderFunction",void 0),c([u({readOnly:!0})],le.prototype,"sortable",void 0),c([u({readOnly:!0})],le.prototype,"textAlign",void 0),le=c([W("esri.widgets.FeatureTable.AttachmentsColumn")],le);const Vo=le,ts="esri-editor-column__cell-input",is={input:ts,inputContainer:`${ts}--container`},ss={showInput:"Enter",hideInput:"Escape"};let M=class extends $t{constructor(t){super(t),this.activeEditInfo=null,this.cellValueValidatorFunction=({oldValue:e,value:i})=>e!==i,this.editable=!1,this.inputRenderFunction=({root:e,column:i,rowData:s})=>{if(this.activeEditInfo||!this.editable)return;const o=this.getCellValue(i,s),n=this.createInputElement({root:e,column:i,rowData:s,value:o});this._set("activeEditInfo",{column:i,inputs:[n],root:e,rowData:s,oldValue:o});const a=this.createInputContainer();a.appendChild(n),this.removeCellContent(e),e.appendChild(a),n.focus(),n instanceof HTMLInputElement&&n.select()},this.loadingMessage="",this.inputType="text",this.maxLength=null,this.parseInputValueFunction=({inputs:e})=>e!=null&&e.length||e.length!==1||Array.isArray(e[0].value)?null:e[0].value,this.renderFunction=e=>{var _;const{root:i,column:s,rowData:o}=e,{activeEditInfo:n}=this;if(n)return;const a=this.getCellValue(s,o),l=this.cellValueFormatFunction({column:s,rowData:o,value:a});i.onclick=()=>i.focus(),i.ondblclick=()=>this.inputRenderFunction(e),i.ontouchend=()=>this.inputRenderFunction(e);const d=(_=this.grid)==null?void 0:_.getSlotElementByName(i.slot),h=d==null?void 0:d.parentElement;h&&!h.onkeydown&&(h.onkeydown=f=>{f.key!==ss.showInput||this.activeEditInfo||this.inputRenderFunction(e),f.key===ss.hideInput&&this.activeEditInfo&&this.cancel()}),a!=null&&l!=null?i.title=l.toString():i.title&&i.removeAttribute("title");const p=Lo(this.messagesURIUtils,l);(l==null?void 0:l.toString())!==i.innerHTML&&p!==i.innerHTML&&(i.innerHTML=p)},this.required=!1,this.store=null,this.updateRowItemFunction=({rowData:e,column:i,value:s})=>{xt(e),i.path&&(e!=null&&e.item)&&(e.item[i.path]=s)},this.updateStoreItemFunction=async({rowData:e,column:i,value:s})=>{var o;xt(e),i.path&&await((o=this.store)==null?void 0:o.updateItem({index:e.index,name:i.path,value:s}))}}onEditComplete(){var t;this._set("activeEditInfo",null),(t=this.grid)==null||t.generateCellPartNames()}cancel(){const{activeEditInfo:t}=this;if(!t)return;const{column:e,root:i,rowData:s}=t;this.onEditComplete(),this.renderFunction({column:e,root:i,rowData:s})}createInputContainer(){const t=document.createElement("div");return t.classList.add(is.inputContainer),t}createInputElement({value:t}){const e=document.createElement("input");return e.classList.add(is.input),this.maxLength!=null&&(e.maxLength=this.maxLength),e.type=this.inputType,e.value=t,e.onblur=()=>{e.onblur=null,this.submit()},e}createDateComponent(){const t=document.createElement("calcite-input-date-picker");return t.focusTrapDisabled=!0,t.overlayPositioning="fixed",t}createTimeComponent(){const t=document.createElement("calcite-input-time-picker");return t.overlayPositioning="fixed",t.placement="auto-start",t.step=1,t}createTimeZoneComponent(){const t=document.createElement("calcite-input-time-zone");return t.maxItems=4,t.overlayPositioning="fixed",t}async submit(){const{activeEditInfo:t}=this;if(!t)return;const{column:e,inputs:i,root:s,rowData:o,oldValue:n}=t,a=this.parseInputValueFunction({inputs:i,column:e,rowData:o});if(!this.cellValueValidatorFunction({value:a,oldValue:n,column:e,rowData:o}))this.cancel();else{s.textContent=this.loadingMessage;try{await this.updateStoreItemFunction({rowData:o,column:e,value:a}),this.updateRowItemFunction({rowData:o,column:e,value:a}),this.onEditComplete(),this.renderFunction({column:e,root:s,rowData:o}),this.emit("value-change",{column:e,rowData:o,value:this.getCellValue(e,o)})}catch{this.cancel()}}}};c([u({readOnly:!0})],M.prototype,"activeEditInfo",void 0),c([u()],M.prototype,"cellValueValidatorFunction",void 0),c([u()],M.prototype,"editable",void 0),c([u()],M.prototype,"inputRenderFunction",void 0),c([u({constructOnly:!0})],M.prototype,"loadingMessage",void 0),c([u()],M.prototype,"inputType",void 0),c([u()],M.prototype,"maxLength",void 0),c([u()],M.prototype,"parseInputValueFunction",void 0),c([u()],M.prototype,"renderFunction",void 0),c([u()],M.prototype,"required",void 0),c([u()],M.prototype,"store",void 0),c([u()],M.prototype,"updateRowItemFunction",void 0),c([u()],M.prototype,"updateStoreItemFunction",void 0),M=c([W("esri.widgets.FeatureTable.Grid.EditorColumn")],M);const Go=M,Uo={cancelEdit:"Escape"},oe="esri-field-column",K={headerRoot:`${oe}__header-root`,headerRootEditable:`${oe}__header-root--editable`,headerRootMenuEnabled:`${oe}__header-root--menu-enabled`,headerContent:`${oe}__header-content`,headerLabel:`${oe}__header-label`,input:`${oe}__cell-input`,inputContainer:`${oe}__cell__input-container`,dateInputContainer:`${oe}__cell__date-input-container`},Wo=Nt("short-date-short-time"),jo=Nt("short-date"),rs={useGrouping:!0,maximumFractionDigits:20};let v=class extends Go{constructor(r){super(r),this._activeFieldInput=null,this.cellValueFormatFunction=({rowData:t,value:e})=>{var o,n,a;if(this.formatFunction){const{template:l,field:d}=this;return this.formatFunction({template:l,field:d,value:we.sanitize(e)})}if(e===null)return"&nbsp;";const{field:i}=this,s=this._getDomainForFeature((o=t==null?void 0:t.item)==null?void 0:o.feature);if(s){const l=this._getComputedDomain(e,s);if(i.type==="date"&&s.type==="range")return this._formatDateValueForDisplay(i,l);if(re(i)&&s.type==="range"){const d=(n=this.template)==null?void 0:n.format,h=d?Ui(d):rs;return Wi(parseFloat(e),h)}return ji.has(i.type)?s.type==="range"?we.sanitize(qi(i,l)):we.sanitize(l):l}if(i.type==="date"||ji.has(i.type))return this._formatDateValueForDisplay(i,e);if(re(i)){const l=(a=this.template)==null?void 0:a.format,d=l?Ui(l):rs;return Wi(parseFloat(e),d)}return we.sanitize(e)},this.cellValueValidatorFunction=({oldValue:t,value:e})=>{const{field:i}=this;if(this.required&&(e==null||e===""))return!1;if(re(i)&&Yi(i,e))return St.getLogger(this).warn("value-exceeds-valid-range","Field value exceeds valid range. Attempted edit was rejected."),!1;if(this._isAnyDateOrTimeField){const s=i.type,o=this._effectiveRange;if(!fo({type:s,range:o,value:e}))return!1}return t!==e},this.editingEnabled=!1,this.expressionInfos=null,this.field=null,this.formatFunction=null,this.headerRenderFunction=t=>{var l;const{root:e}=t,{editable:i,editingEnabled:s,headerMenuEnabled:o,menu:n,sortable:a}=this;if(!e.childElementCount){e.classList.add(K.headerRoot);const d=document.createElement("div");d.classList.add(K.headerContent),e.appendChild(d);const h=document.createElement("div");if(h.classList.add(ie.locked),d.appendChild(h),a&&this.sortElement)d.appendChild(this.sortElement);else{const p=document.createElement("span");p.classList.add(K.headerLabel),p.textContent=this.label,d.appendChild(p)}n!=null&&n.container&&d.appendChild(n.container)}s&&!i?e.classList.add(K.headerRootEditable):e.classList.remove(K.headerRootEditable),o&&((l=n==null?void 0:n.items)!=null&&l.length)?e.classList.add(K.headerRootMenuEnabled):e.classList.remove(K.headerRootMenuEnabled)},this.inputRenderFunction=({root:t,column:e,rowData:i})=>{var p,_;if(this.activeEditInfo||!this.editable)return;const s=this.getCellValue(e,i),{field:o}=this;if(re(o)&&Yi(o,s))return void St.getLogger(this).warn("value-exceeds-valid-range","Field value is beyond supported limit. Editing is disabled for this field value.");const n=i==null?void 0:i.item.feature;if(!n)return;this._activeFieldInput=this._setUpFieldInput(n,s);const a=document.createElement("div");a.classList.add(K.inputContainer);const l=[],d=((p=this._effectiveDomain)==null?void 0:p.type)==="coded-value";if(this._isAnyDateOrTimeField&&!d){const f=document.createElement("div");f.classList.add(K.dateInputContainer);const m=this._setUpDateComponents(s),y=this._setUpDateActionBar();m.forEach(I=>f.appendChild(I)),a.appendChild(f),a.appendChild(y),l.push(...m)}else{const f=this.createInputElement({root:t,column:e,rowData:i,value:s});a.appendChild(f),l.push(f)}this._set("activeEditInfo",{column:e,inputs:l,root:t,rowData:i,oldValue:s}),this.removeCellContent(t),t.appendChild(a),this._syncRowEditingState(t,!0),(_=this.grid)==null||_.generateCellPartNames();const h=l[0];h&&(h.focus(),h instanceof HTMLInputElement&&h.select())},this.layer=null,this.parseInputValueFunction=({inputs:t})=>{var l;const{activeEditInfo:e,field:i,includeTime:s}=this;if(!e||!t.length)return null;const o=t[0];if(this._isAnyDateOrTimeField){const d=e.oldValue??void 0;if(((l=this._effectiveDomain)==null?void 0:l.type)==="coded-value")return o.value!=null?parseFloat(o.value):null;switch(i.type){case"date-only":{const h=o.value;return h!==""?h:null}case"time-only":{const h=yo(o.value);return h!==""?h:null}case"timestamp-offset":{const h=s?t[1]:void 0,p=t.at(-1);return go({oldValue:d,dateComponent:o,timeComponent:h,timeZoneComponent:p,defaultTimeZone:this.timeZone})}case"date":{const{max:h,min:p}=this._effectiveRange;return mo({oldValue:d,dateComponent:o,timeComponent:t[1],timeZone:this.timeZone??void 0,max:h,min:p})}}return null}const n=o.value,{required:a}=this;return a||n!==""?re(i)?parseFloat(n):Zi(i)?n.trim():n:null},this.sortable=!0,this.store=null,this.template=null,this.updateRowItemFunction=({rowData:t,column:e,value:i})=>{t&&e.path&&(t.item.feature.attributes[e.path]=i)},this.updateStoreItemFunction=async({rowData:t,column:e,value:i})=>{if(!t||!this.store||!e.path)return;const s=t.item.objectId,o=this.store.getObjectIdIndex(s)??t.index;await this.store.updateItem({index:o,name:e.path,value:i})}}get _effectiveDomain(){var t;const r=(t=this._activeFieldInput)==null?void 0:t.feature;return r?this._getDomainForFeature(r):null}get _effectiveRange(){var r;return((r=this._activeFieldInput)==null?void 0:r.range)??{max:null,min:null}}get _isAnyDateOrTimeField(){const{field:r}=this;return Ki(r)||bo(r)}get alias(){var r;return(r=this.field)==null?void 0:r.alias}get defaultValue(){var r;return(r=this.field)==null?void 0:r.defaultValue}get description(){var r,t;return((r=this.template)==null?void 0:r.description)??((t=this.field)==null?void 0:t.description)??null}get editable(){const{editingEnabled:r,field:t,layer:e,template:i}=this;if(t==null||e==null)return!1;const s=vo(e),o=Qe(e),n=o==null?void 0:o.operations.supportsUpdate;return!!(t.editable&&s&&n&&t.type!=="oid")&&(r?(i==null?void 0:i.editable)!==!1:!!(i!=null&&i.editable))}get header(){var r;return((r=this.template)==null?void 0:r.label)||this.alias||this.path||null}get includeTime(){const{field:r,template:t}=this;return r.type==="time-only"||r.type!=="date-only"&&(!(t!=null&&t.input)||"includeTime"in t.input&&t.input.includeTime!==!1)}get loadingMessage(){var r;return((r=this.messages)==null?void 0:r.loading)||"..."}get maxLength(){const{field:r,template:t}=this,e=(r==null?void 0:r.length)??-1,i=t!=null&&t.input&&"maxLength"in t.input?t.input.maxLength:null;return i!=null&&!isNaN(i)&&i>=-1&&(e===-1||i<=e)?i:e}get minLength(){const{template:r,maxLength:t}=this,e=r!=null&&r.input&&"minLength"in r.input?r.input.minLength:null;return t&&e<=t?e:null}get name(){var r;return(r=this.field)==null?void 0:r.name}get nullable(){var r;return((r=this.field)==null?void 0:r.nullable)??!1}get path(){var r;return(r=this.field)==null?void 0:r.name}get required(){var r,t,e;return!(!this.editable||(r=this.field)!=null&&r.nullable&&!((t=this._activeFieldInput)!=null&&t.required)&&!((e=this.template)!=null&&e.required))}createInputElement({value:r}){const{_effectiveDomain:t,field:e,maxLength:i,minLength:s,required:o}=this;let n;(t==null?void 0:t.type)==="coded-value"?(n=this._createSelectElement(r,t.codedValues.map(({code:d,name:h})=>({value:d,name:h})),o),n.onchange=()=>{n.onblur=null,l()}):(n=document.createElement("input"),n.type=re(e)?"number":"text",i>-1&&(n.maxLength=i),s>0&&(n.minLength=s)),n.classList.add(K.input),n.value=r,n.required=o;let a=!1;n.onkeydown=d=>{a=d.key===Uo.cancelEdit},n.onblur=()=>{n.onblur=null,l()};const l=()=>{a?this.cancel():this.submit()};return n}getCellValue({path:r},t){var e,i,s;return r&&((i=(e=t==null?void 0:t.item)==null?void 0:e.feature)!=null&&i.attributes)?(s=t.item.feature.attributes)==null?void 0:s[r]:null}onEditComplete(){var t;const r=(t=this.activeEditInfo)==null?void 0:t.root;r&&this._syncRowEditingState(r,!1),this._activeFieldInput=null,super.onEditComplete()}_clearActiveEditValues(){var r,t;(t=(r=this.activeEditInfo)==null?void 0:r.inputs)==null||t.forEach(e=>e.value="")}_setUpDateActionBar(){const{cancel:r,clear:t,save:e}=this.messagesCommon,i=document.createElement("calcite-action-bar");return i.expandDisabled=!0,i.layout="horizontal",i.appendChild(this.createCalciteAction({text:e,icon:"save",click:()=>this.submit()})),this.required||i.appendChild(this.createCalciteAction({text:t,icon:"trash",click:()=>{this._clearActiveEditValues(),this.submit()}})),i.appendChild(this.createCalciteAction({text:r,icon:"x",click:()=>this.cancel()})),i}_formatDateValueForDisplay(r,t){const{timeZone:e,timeZoneName:i}=this;return t!=null?qi(r,t,{...this._getDateFormatOptions(),timeZone:e??void 0,timeZoneName:i??void 0}):null}_setUpDateComponents(r){const{_effectiveRange:{max:t,min:e,rawMax:i,rawMin:s},field:o,required:n}=this,a=this._getDateFieldValuesForComponents(o,r),l=[];if(Ki(o)){const d=this.createDateComponent(),h=Qi(o)||Ji(o)?i:t,p=Qi(o)||Ji(o)?s:e,_=this._getDateFieldValuesForComponents(o,h??null),f=this._getDateFieldValuesForComponents(o,p??null);d.value=a.date??"",d.max=_.date??"",d.min=f.date??"",d.required=n,d.addEventListener("calciteInputDatePickerOpen",()=>this._onDateComponentOpen(d)),l.push(d)}if(this.includeTime){const d=this.createTimeComponent();d.value=a.time??"",d.required=n,d.addEventListener("calciteInputTimePickerOpen",()=>this._onDateComponentOpen(d)),l.push(d)}if(o.type==="timestamp-offset"){const d=this.createTimeZoneComponent();d.value=a.timeZoneOffset??"0",d.addEventListener("calciteInputTimeZoneOpen",()=>this._onDateComponentOpen(d)),l.push(d)}return l}_onDateComponentOpen(r){var t;(t=this.activeEditInfo)==null||t.inputs.forEach(e=>{e!==r&&"open"in e&&(e.open=!1)})}_syncRowEditingState(r,t=!1){var i;const e=(i=this.grid)==null?void 0:i.getRowContainingNode(r);e&&(t?e.setAttribute("editing","true"):e.removeAttribute("editing"))}_getDateFieldValuesForComponents(r,t){switch(r.type){case"date":return wo(t,this.timeZone??void 0);case"date-only":return{date:t};case"time-only":return{time:t};case"timestamp-offset":return Co(t);default:return{}}}_createSelectElement(r,t,e=!1){let i=!1;const s=t.map(n=>{n.value===r&&(i=!0);const a=document.createElement("option");return a.text=n.name,a.value=n.value,a});if(r!=null&&r!==""&&!i){const n=document.createElement("option");n.text=r,n.value=r,s.unshift(n)}if(!e&&r==null){const n=document.createElement("option");n.value="",s.unshift(n)}const o=document.createElement("select");return s.forEach(n=>o.add(n)),o.value=r,o}_setUpFieldInput(r,t){const{field:e,layer:i,timeZone:s}=this,o=new $o({feature:r,field:e,initialFeature:r.clone(),layer:i,timeZone:s});return o.set("value",t),o}_isDomainCompatible(r){const{field:t}=this;if(r&&r.type==="coded-value"){const e=typeof r.codedValues[0].code;if(e==="string"&&Zi(t)||e==="number"&&re(t))return!0}return!(!r||r.type!=="range"||!re(t))}_getDomainForFeature(r){var a;const{layer:t,name:e,template:i}=this;if(!t||!r||t.type==="wfs"||t.type==="geojson"||t.type==="csv")return null;if(i!=null&&i.domain&&this._isDomainCompatible(i.domain))return i.domain;const{typeIdField:s}=t,o=s===e,n=this.field.domain;return o&&!n?new Ao({name:"__internal-type-based-coded-value-domain__",codedValues:(a=t.types)==null?void 0:a.map(({id:l,name:d})=>new Eo({code:l,name:d}))}):s&&e!=null&&t.getFieldDomain(e,{feature:r})||n}_getComputedDomain(r,t){if(!t)return null;if(t.type==="range")return r;if(t.type==="coded-value"){const e=t.codedValues.filter(i=>i.hasOwnProperty("code")&&i.code===r);return e&&e.length?e[0].name:r}return null}_getDateFormatOptions(){var e;const{template:r}=this,t=(e=r==null?void 0:r.format)==null?void 0:e.dateFormat;return t?Nt(t):r!=null&&r.input&&"includeTime"in r.input&&r.input.includeTime===!1?jo:Wo}};c([u()],v.prototype,"_effectiveDomain",null),c([u()],v.prototype,"_activeFieldInput",void 0),c([u()],v.prototype,"_effectiveRange",null),c([u()],v.prototype,"_isAnyDateOrTimeField",null),c([u({readOnly:!0})],v.prototype,"alias",null),c([u()],v.prototype,"cellValueFormatFunction",void 0),c([u()],v.prototype,"cellValueValidatorFunction",void 0),c([u({readOnly:!0})],v.prototype,"defaultValue",null),c([u({readOnly:!0})],v.prototype,"description",null),c([u({readOnly:!0})],v.prototype,"editable",null),c([u()],v.prototype,"editingEnabled",void 0),c([u()],v.prototype,"expressionInfos",void 0),c([u()],v.prototype,"field",void 0),c([u()],v.prototype,"formatFunction",void 0),c([u({readOnly:!0})],v.prototype,"header",null),c([u()],v.prototype,"headerRenderFunction",void 0),c([u()],v.prototype,"includeTime",null),c([u()],v.prototype,"inputRenderFunction",void 0),c([u()],v.prototype,"layer",void 0),c([u({readOnly:!0})],v.prototype,"loadingMessage",null),c([u()],v.prototype,"maxLength",null),c([u()],v.prototype,"minLength",null),c([u({readOnly:!0})],v.prototype,"name",null),c([u({readOnly:!0})],v.prototype,"nullable",null),c([u()],v.prototype,"parseInputValueFunction",void 0),c([u({readOnly:!0})],v.prototype,"path",null),c([u({readOnly:!0})],v.prototype,"required",null),c([u()],v.prototype,"sortable",void 0),c([u()],v.prototype,"store",void 0),c([u()],v.prototype,"template",void 0),c([u()],v.prototype,"updateRowItemFunction",void 0),c([u()],v.prototype,"updateStoreItemFunction",void 0),v=c([W("esri.widgets.FeatureTable.FieldColumn")],v);const os=v;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Pe(r){const t=customElements.get(r.is);if(!t)Object.defineProperty(r,"version",{get(){return"24.3.10"}}),customElements.define(r.is,r);else{const e=t.version;e&&r.version&&e===r.version?console.warn(`The component ${r.is} has been loaded twice`):console.error(`Tried to define ${r.is} version ${r.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qo extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Pe(qo);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=globalThis,Ai=wt.ShadowRoot&&(wt.ShadyCSS===void 0||wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ei=Symbol(),ns=new WeakMap;let xi=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ei)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ai&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ns.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ns.set(e,t))}return t}toString(){return this.cssText}};const Yo=r=>new xi(typeof r=="string"?r:r+"",void 0,Ei),N=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new xi(e,r,Ei)},Zo=(r,t)=>{if(Ai)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=wt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},as=Ai?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Yo(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ko,defineProperty:Qo,getOwnPropertyDescriptor:Jo,getOwnPropertyNames:Xo,getOwnPropertySymbols:en,getPrototypeOf:tn}=Object,ue=globalThis,ls=ue.trustedTypes,sn=ls?ls.emptyScript:"",Yt=ue.reactiveElementPolyfillSupport,tt=(r,t)=>r,ai={toAttribute(r,t){switch(t){case Boolean:r=r?sn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},sr=(r,t)=>!Ko(r,t),ds={attribute:!0,type:String,converter:ai,reflect:!1,hasChanged:sr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ue.litPropertyMetadata??(ue.litPropertyMetadata=new WeakMap);class ze extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ds){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Qo(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=Jo(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ds}static _$Ei(){if(this.hasOwnProperty(tt("elementProperties")))return;const t=tn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tt("properties"))){const e=this.properties,i=[...Xo(e),...en(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(as(s))}else t!==void 0&&e.push(as(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zo(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:ai).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:ai;this._$Em=s,this[s]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??sr)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}ze.elementStyles=[],ze.shadowRootOptions={mode:"open"},ze[tt("elementProperties")]=new Map,ze[tt("finalized")]=new Map,Yt==null||Yt({ReactiveElement:ze}),(ue.reactiveElementVersions??(ue.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=globalThis,It=it.trustedTypes,hs=It?It.createPolicy("lit-html",{createHTML:r=>r}):void 0,rr="$lit$",he=`lit$${(Math.random()+"").slice(9)}$`,or="?"+he,rn=`<${or}>`,Ie=document,ot=()=>Ie.createComment(""),nt=r=>r===null||typeof r!="object"&&typeof r!="function",nr=Array.isArray,on=r=>nr(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Zt=`[ 	
\f\r]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cs=/-->/g,us=/>/g,ve=RegExp(`>|${Zt}(?:([^\\s"'>=/]+)(${Zt}*=${Zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ps=/'/g,_s=/"/g,ar=/^(?:script|style|textarea|title)$/i,Be=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),fs=new WeakMap,Ae=Ie.createTreeWalker(Ie,129);function lr(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return hs!==void 0?hs.createHTML(t):t}const nn=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=je;for(let a=0;a<e;a++){const l=r[a];let d,h,p=-1,_=0;for(;_<l.length&&(n.lastIndex=_,h=n.exec(l),h!==null);)_=n.lastIndex,n===je?h[1]==="!--"?n=cs:h[1]!==void 0?n=us:h[2]!==void 0?(ar.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=ve):h[3]!==void 0&&(n=ve):n===ve?h[0]===">"?(n=s??je,p=-1):h[1]===void 0?p=-2:(p=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?ve:h[3]==='"'?_s:ps):n===_s||n===ps?n=ve:n===cs||n===us?n=je:(n=ve,s=void 0);const f=n===ve&&r[a+1].startsWith("/>")?" ":"";o+=n===je?l+rn:p>=0?(i.push(d),l.slice(0,p)+rr+l.slice(p)+he+f):l+he+(p===-2?a:f)}return[lr(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class at{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[d,h]=nn(t,e);if(this.el=at.createElement(d,i),Ae.currentNode=this.el.content,e===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=Ae.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(rr)){const _=h[n++],f=s.getAttribute(p).split(he),m=/([.?@])?(.*)/.exec(_);l.push({type:1,index:o,name:m[2],strings:f,ctor:m[1]==="."?ln:m[1]==="?"?dn:m[1]==="@"?hn:Lt}),s.removeAttribute(p)}else p.startsWith(he)&&(l.push({type:6,index:o}),s.removeAttribute(p));if(ar.test(s.tagName)){const p=s.textContent.split(he),_=p.length-1;if(_>0){s.textContent=It?It.emptyScript:"";for(let f=0;f<_;f++)s.append(p[f],ot()),Ae.nextNode(),l.push({type:2,index:++o});s.append(p[_],ot())}}}else if(s.nodeType===8)if(s.data===or)l.push({type:2,index:o});else{let p=-1;for(;(p=s.data.indexOf(he,p+1))!==-1;)l.push({type:7,index:o}),p+=he.length-1}o++}}static createElement(t,e){const i=Ie.createElement("template");return i.innerHTML=t,i}}function Ve(r,t,e=r,i){var n,a;if(t===Be)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=nt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=Ve(r,s._$AS(r,t.values),s,i)),t}let an=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??Ie).importNode(e,!0);Ae.currentNode=s;let o=Ae.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new Si(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new cn(o,this,t)),this._$AV.push(d),l=i[++a]}n!==(l==null?void 0:l.index)&&(o=Ae.nextNode(),n++)}return Ae.currentNode=Ie,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Si=class dr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ve(this,t,e),nt(t)?t===F||t==null||t===""?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==Be&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):on(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==F&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ie.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=at.createElement(lr(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new an(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=fs.get(t.strings);return e===void 0&&fs.set(t.strings,e=new at(t)),e}k(t){nr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new dr(this.S(ot()),this.S(ot()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}};class Lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=Ve(this,t,e,0),n=!nt(t)||t!==this._$AH&&t!==Be,n&&(this._$AH=t);else{const a=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=Ve(this,a[i+l],e,l),d===Be&&(d=this._$AH[l]),n||(n=!nt(d)||d!==this._$AH[l]),d===F?t=F:t!==F&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ln extends Lt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class dn extends Lt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class hn extends Lt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Ve(this,t,e,0)??F)===Be)return;const i=this._$AH,s=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class cn{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ve(this,t)}}const Kt=it.litHtmlPolyfillSupport;Kt==null||Kt(at,Si),(it.litHtmlVersions??(it.litHtmlVersions=[])).push("3.1.2");const un=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new Si(t.insertBefore(ot(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class At extends ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=un(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Be}}var Js;At._$litElement$=!0,At.finalized=!0,(Js=globalThis.litElementHydrateSupport)==null||Js.call(globalThis,{LitElement:At});const Qt=globalThis.litElementPolyfillSupport;Qt==null||Qt({LitElement:At});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pn=r=>class extends r{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,i,s){super.attributeChangedCallback(e,i,s),e==="theme"&&this._set_theme(s)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hr=[];function cr(r){return r&&Object.prototype.hasOwnProperty.call(r,"__themes")}function _n(r){return cr(customElements.get(r))}function fn(r=[]){return[r].flat(1/0).filter(t=>t instanceof xi?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function ye(r,t,e={}){r&&_n(r)&&console.warn(`The custom element definition for "${r}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),t=fn(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(r,t,e):hr.push({themeFor:r,styles:t,include:e.include,moduleId:e.moduleId})}function li(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():hr}function mn(r,t){return(r||"").split(" ").some(e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(t))}function gn(r=""){let t=0;return r.startsWith("lumo-")||r.startsWith("material-")?t=1:r.startsWith("vaadin-")&&(t=2),t}function ur(r){const t=[];return r.include&&[].concat(r.include).forEach(e=>{const i=li().find(s=>s.moduleId===e);i?t.push(...ur(i),...i.styles):console.warn(`Included moduleId ${e} not found in style registry`)},r.styles),t}function yn(r,t){const e=document.createElement("style");e.innerHTML=r.map(i=>i.cssText).join(`
`),t.content.appendChild(e)}function bn(r){const t=`${r}-default-theme`,e=li().filter(i=>i.moduleId!==t&&mn(i.themeFor,r)).map(i=>({...i,styles:[...ur(i),...i.styles],includePriority:gn(i.moduleId)})).sort((i,s)=>s.includePriority-i.includePriority);return e.length>0?e:li().filter(i=>i.moduleId===t)}const Ii=r=>class extends pn(r){static finalize(){if(super.finalize(),this.elementStyles)return;const e=this.prototype._template;!e||cr(this)||yn(this.getStylesForThis(),e)}static finalizeStyles(e){const i=this.getStylesForThis();return e?[...super.finalizeStyles(e),...i]:i}static getStylesForThis(){const e=Object.getPrototypeOf(this.prototype),i=(e?e.constructor.__themes:[])||[];this.__themes=[...i,...bn(this.is)];const s=this.__themes.flatMap(o=>o.styles);return s.filter((o,n)=>n===s.lastIndexOf(o))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vn=(r,...t)=>{const e=document.createElement("style");e.id=r,e.textContent=t.map(i=>i.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",e)},We=(r,...t)=>{vn(`lumo-${r}`,t)};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cn=N`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;We("color-props",Cn);const wn=N`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;ye("",wn,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const An=N`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;We("font-icons",An);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const En=N`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;We("sizing-props",En);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xn=N`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;We("spacing-props",xn);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sn=N`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;N`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;We("style-props",Sn);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const In=N`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Pn=N`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;ye("",Pn,{moduleId:"lumo-typography"});We("typography-props",In);ye("vaadin-checkbox",N`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});ye("vaadin-grid",N`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(r,t){return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Tn=/(url\()([^)]*)(\))/g,Rn=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,mt,G;function st(r,t){if(r&&Rn.test(r)||r==="//")return r;if(mt===void 0){mt=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",mt=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),mt)try{return new URL(r,t).href}catch{return r}return G||(G=document.implementation.createHTMLDocument("temp"),G.base=G.createElement("base"),G.head.appendChild(G.base),G.anchor=G.createElement("a"),G.body.appendChild(G.anchor)),G.base.href=t,G.anchor.href=r,G.anchor.href||r}function Pi(r,t){return r.replace(Tn,function(e,i,s,o){return i+"'"+st(s.replace(/["']/g,""),t)+"'"+o})}function Ti(r){return r.substring(0,r.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const On=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Fn=On&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const r=new CSSStyleSheet;r.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[r],t.shadowRoot.adoptedStyleSheets[0]===r}catch{return!1}})();let zn=window.Polymer&&window.Polymer.rootPath||Ti(document.baseURI||window.location.href),Pt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let di=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Mn=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,kn=window.Polymer&&window.Polymer.legacyOptimizations||!1,Dn=window.Polymer&&window.Polymer.legacyWarnings||!1,Nn=window.Polymer&&window.Polymer.syncInitialRender||!1,hi=window.Polymer&&window.Polymer.legacyUndefined||!1,$n=window.Polymer&&window.Polymer.orderedComputed||!1,ms=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Ln=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Hn=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Bn=0;const D=function(r){let t=r.__mixinApplications;t||(t=new WeakMap,r.__mixinApplications=t);let e=Bn++;function i(s){let o=s.__mixinSet;if(o&&o[e])return s;let n=t,a=n.get(s);if(!a){a=r(s),n.set(s,a);let l=Object.create(a.__mixinSet||o||null);l[e]=!0,a.__mixinSet=l}return a}return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ri={},pr={};function gs(r,t){Ri[r]=pr[r.toLowerCase()]=t}function ys(r){return Ri[r]||pr[r.toLowerCase()]}function Vn(r){r.querySelector("style")&&console.warn("dom-module %s has style outside template",r.id)}class lt extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=ys(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,s){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=st(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Ti(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(di&&ys(t)!==void 0)throw gs(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,gs(t,this),Vn(this)}}}lt.prototype.modules=Ri;customElements.define("dom-module",lt);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Gn="link[rel=import][type~=css]",Un="include",bs="shady-unscoped";function _r(r){return lt.import(r)}function vs(r){let t=r.body?r.body:r;const e=Pi(t.textContent,r.baseURI),i=document.createElement("style");return i.textContent=e,i}function Wn(r){const t=r.trim().split(/\s+/),e=[];for(let i=0;i<t.length;i++)e.push(...jn(t[i]));return e}function jn(r){const t=_r(r);if(!t)return console.warn("Could not find style data in module named",r),[];if(t._styles===void 0){const e=[];e.push(...mr(t));const i=t.querySelector("template");i&&e.push(...fr(i,t.assetpath)),t._styles=e}return t._styles}function fr(r,t){if(!r._styles){const e=[],i=r.content.querySelectorAll("style");for(let s=0;s<i.length;s++){let o=i[s],n=o.getAttribute(Un);n&&e.push(...Wn(n).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(o.textContent=Pi(o.textContent,t)),e.push(o)}r._styles=e}return r._styles}function qn(r){let t=_r(r);return t?mr(t):[]}function mr(r){const t=[],e=r.querySelectorAll(Gn);for(let i=0;i<e.length;i++){let s=e[i];if(s.import){const o=s.import,n=s.hasAttribute(bs);if(n&&!o._unscopedStyle){const a=vs(o);a.setAttribute(bs,""),o._unscopedStyle=a}else o._style||(o._style=vs(o));t.push(n?o._unscopedStyle:o._style)}}return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xe=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?r=>ShadyDOM.patch(r):r=>r;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ci(r){return r.indexOf(".")>=0}function Te(r){let t=r.indexOf(".");return t===-1?r:r.slice(0,t)}function Yn(r,t){return r.indexOf(t+".")===0}function Tt(r,t){return t.indexOf(r+".")===0}function Rt(r,t,e){return t+e.slice(r.length)}function Je(r){if(Array.isArray(r)){let t=[];for(let e=0;e<r.length;e++){let i=r[e].toString().split(".");for(let s=0;s<i.length;s++)t.push(i[s])}return t.join(".")}else return r}function gr(r){return Array.isArray(r)?Je(r).split("."):r.toString().split(".")}function H(r,t,e){let i=r,s=gr(t);for(let o=0;o<s.length;o++){if(!i)return;let n=s[o];i=i[n]}return e&&(e.path=s.join(".")),i}function Cs(r,t,e){let i=r,s=gr(t),o=s[s.length-1];if(s.length>1){for(let n=0;n<s.length-1;n++){let a=s[n];if(i=i[a],!i)return}i[o]=e}else i[t]=e;return s.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ot={},Zn=/-[a-z]/g,Kn=/([A-Z])/g;function yr(r){return Ot[r]||(Ot[r]=r.indexOf("-")<0?r:r.replace(Zn,t=>t[1].toUpperCase()))}function Ht(r){return Ot[r]||(Ot[r]=r.replace(Kn,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Qn=0,br=0,$e=[],Jn=0,ui=!1,vr=document.createTextNode("");new window.MutationObserver(Xn).observe(vr,{characterData:!0});function Xn(){ui=!1;const r=$e.length;for(let t=0;t<r;t++){let e=$e[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}$e.splice(0,r),br+=r}const ea={run(r){return ui||(ui=!0,vr.textContent=Jn++),$e.push(r),Qn++},cancel(r){const t=r-br;if(t>=0){if(!$e[t])throw new Error("invalid async handle: "+r);$e[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ta=ea,Cr=D(r=>{class t extends r{static createProperties(i){const s=this.prototype;for(let o in i)o in s||s._createPropertyAccessor(o)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,s){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,s))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let s=this.__dataAttributes[i];return s||(s=this.constructor.attributeNameForProperty(i),this.__dataAttributes[s]=i),s}_definePropertyAccessor(i,s){Object.defineProperty(this,i,{get(){return this.__data[i]},set:s?function(){}:function(o){this._setPendingProperty(i,o,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,s){this._setPendingProperty(i,s)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,s,o){let n=this.__data[i],a=this._shouldPropertyChange(i,s,n);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=n),this.__data[i]=s,this.__dataPending[i]=s),a}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ta.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,s=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(i,s,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,s,o)),this.__dataCounter--}_shouldPropertiesChange(i,s,o){return!!s}_propertiesChanged(i,s,o){}_shouldPropertyChange(i,s,o){return o!==s&&(o===o||s===s)}attributeChangedCallback(i,s,o,n){s!==o&&this._attributeToProperty(i,o),super.attributeChangedCallback&&super.attributeChangedCallback(i,s,o,n)}_attributeToProperty(i,s,o){if(!this.__serializing){const n=this.__dataAttributes,a=n&&n[i]||i;this[a]=this._deserializeValue(s,o||this.constructor.typeForProperty(a))}}_propertyToAttribute(i,s,o){this.__serializing=!0,o=arguments.length<3?this[i]:o,this._valueToNodeAttribute(this,o,s||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,s,o){const n=this._serializeValue(s);(o==="class"||o==="name"||o==="slot")&&(i=xe(i)),n===void 0?i.removeAttribute(o):i.setAttribute(o,n===""&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(i){switch(typeof i){case"boolean":return i?"":void 0;default:return i!=null?i.toString():void 0}}_deserializeValue(i,s){switch(s){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wr={};let gt=HTMLElement.prototype;for(;gt;){let r=Object.getOwnPropertyNames(gt);for(let t=0;t<r.length;t++)wr[r[t]]=!0;gt=Object.getPrototypeOf(gt)}const ia=window.trustedTypes?r=>trustedTypes.isHTML(r)||trustedTypes.isScript(r)||trustedTypes.isScriptURL(r):()=>!1;function sa(r,t){if(!wr[t]){let e=r[t];e!==void 0&&(r.__data?r._setPendingProperty(t,e):(r.__dataProto?r.hasOwnProperty(JSCompiler_renameProperty("__dataProto",r))||(r.__dataProto=Object.create(r.__dataProto)):r.__dataProto={},r.__dataProto[t]=e))}}const ra=D(r=>{const t=Cr(r);class e extends t{static createPropertiesForAttributes(){let s=this.observedAttributes;for(let o=0;o<s.length;o++)this.prototype._createPropertyAccessor(yr(s[o]))}static attributeNameForProperty(s){return Ht(s)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(s){for(let o in s)this._setProperty(o,s[o])}_ensureAttribute(s,o){const n=this;n.hasAttribute(s)||this._valueToNodeAttribute(n,o,s)}_serializeValue(s){switch(typeof s){case"object":if(s instanceof Date)return s.toString();if(s){if(ia(s))return s;try{return JSON.stringify(s)}catch{return""}}default:return super._serializeValue(s)}}_deserializeValue(s,o){let n;switch(o){case Object:try{n=JSON.parse(s)}catch{n=s}break;case Array:try{n=JSON.parse(s)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${s}`)}break;case Date:n=isNaN(s)?String(s):Number(s),n=new Date(n);break;default:n=super._deserializeValue(s,o);break}return n}_definePropertyAccessor(s,o){sa(this,s),super._definePropertyAccessor(s,o)}_hasAccessor(s){return this.__dataHasAccessor&&this.__dataHasAccessor[s]}_isPropertyPending(s){return!!(this.__dataPending&&s in this.__dataPending)}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const oa={"dom-if":!0,"dom-repeat":!0};let ws=!1,As=!1;function na(){if(!ws){ws=!0;const r=document.createElement("textarea");r.placeholder="a",As=r.placeholder===r.textContent}return As}function aa(r){na()&&r.localName==="textarea"&&r.placeholder&&r.placeholder===r.textContent&&(r.textContent=null)}const la=(()=>{const r=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,i)=>{const s=e.getAttribute(i);if(r&&i.startsWith("on-")){t.setAttribute(i,r.createScript(s,i));return}t.setAttribute(i,s)}})();function da(r){let t=r.getAttribute("is");if(t&&oa[t]){let e=r;for(e.removeAttribute("is"),r=e.ownerDocument.createElement(t),e.parentNode.replaceChild(r,e),r.appendChild(e);e.attributes.length;){const{name:i}=e.attributes[0];la(r,e,i),e.removeAttribute(i)}}return r}function Ar(r,t){let e=t.parentInfo&&Ar(r,t.parentInfo);if(e){for(let i=e.firstChild,s=0;i;i=i.nextSibling)if(t.parentIndex===s++)return i}else return r}function ha(r,t,e,i){i.id&&(t[i.id]=e)}function ca(r,t,e){if(e.events&&e.events.length)for(let i=0,s=e.events,o;i<s.length&&(o=s[i]);i++)r._addMethodEventListenerToNode(t,o.name,o.value,r)}function ua(r,t,e,i){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=i)}function pa(r,t,e){return r=r._methodHost||r,function(s){r[e]?r[e](s,s.detail):console.warn("listener method `"+e+"` not defined")}}const _a=D(r=>{class t extends r{static _parseTemplate(i,s){if(!i._templateInfo){let o=i._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=!!s,o.stripWhiteSpace=s&&s.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,o,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,s,o){return this._parseTemplateNode(i.content,s,o)}static _parseTemplateNode(i,s,o){let n=!1,a=i;return a.localName=="template"&&!a.hasAttribute("preserve-content")?n=this._parseTemplateNestedTemplate(a,s,o)||n:a.localName==="slot"&&(s.hasInsertionPoint=!0),aa(a),a.firstChild&&this._parseTemplateChildNodes(a,s,o),a.hasAttributes&&a.hasAttributes()&&(n=this._parseTemplateNodeAttributes(a,s,o)||n),n||o.noted}static _parseTemplateChildNodes(i,s,o){if(!(i.localName==="script"||i.localName==="style"))for(let n=i.firstChild,a=0,l;n;n=l){if(n.localName=="template"&&(n=da(n)),l=n.nextSibling,n.nodeType===Node.TEXT_NODE){let h=l;for(;h&&h.nodeType===Node.TEXT_NODE;)n.textContent+=h.textContent,l=h.nextSibling,i.removeChild(h),h=l;if(s.stripWhiteSpace&&!n.textContent.trim()){i.removeChild(n);continue}}let d={parentIndex:a,parentInfo:o};this._parseTemplateNode(n,s,d)&&(d.infoIndex=s.nodeInfoList.push(d)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(i,s,o){let n=i,a=this._parseTemplate(n,s);return(a.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),o.templateInfo=a,!0}static _parseTemplateNodeAttributes(i,s,o){let n=!1,a=Array.from(i.attributes);for(let l=a.length-1,d;d=a[l];l--)n=this._parseTemplateNodeAttribute(i,s,o,d.name,d.value)||n;return n}static _parseTemplateNodeAttribute(i,s,o,n,a){return n.slice(0,3)==="on-"?(i.removeAttribute(n),o.events=o.events||[],o.events.push({name:n.slice(3),value:a}),!0):n==="id"?(o.id=a,!0):!1}static _contentForTemplate(i){let s=i._templateInfo;return s&&s.content||i.content}_stampTemplate(i,s){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),s=s||this.constructor._parseTemplate(i);let o=s.nodeInfoList,n=s.content||i.content,a=document.importNode(n,!0);a.__noInsertionPoint=!s.hasInsertionPoint;let l=a.nodeList=new Array(o.length);a.$={};for(let d=0,h=o.length,p;d<h&&(p=o[d]);d++){let _=l[d]=Ar(a,p);ha(this,a.$,_,p),ua(this,_,p,s),ca(this,_,p)}return a=a,a}_addMethodEventListenerToNode(i,s,o,n){n=n||i;let a=pa(n,s,o);return this._addEventListenerToNode(i,s,a),a}_addEventListenerToNode(i,s,o){i.addEventListener(s,o)}_removeEventListenerFromNode(i,s,o){i.removeEventListener(s,o)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let dt=0;const ht=[],A={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Er="__computeInfo",fa=/[A-Z]/;function Jt(r,t,e){let i=r[t];if(!i)i=r[t]={};else if(!r.hasOwnProperty(t)&&(i=r[t]=Object.create(r[t]),e))for(let s in i){let o=i[s],n=i[s]=Array(o.length);for(let a=0;a<o.length;a++)n[a]=o[a]}return i}function Xe(r,t,e,i,s,o){if(t){let n=!1;const a=dt++;for(let l in e){let d=s?Te(l):l,h=t[d];if(h)for(let p=0,_=h.length,f;p<_&&(f=h[p]);p++)(!f.info||f.info.lastRun!==a)&&(!s||Oi(l,f.trigger))&&(f.info&&(f.info.lastRun=a),f.fn(r,l,e,i,f.info,s,o),n=!0)}return n}return!1}function ma(r,t,e,i,s,o,n,a){let l=!1,d=n?Te(i):i,h=t[d];if(h)for(let p=0,_=h.length,f;p<_&&(f=h[p]);p++)(!f.info||f.info.lastRun!==e)&&(!n||Oi(i,f.trigger))&&(f.info&&(f.info.lastRun=e),f.fn(r,i,s,o,f.info,n,a),l=!0);return l}function Oi(r,t){if(t){let e=t.name;return e==r||!!(t.structured&&Yn(e,r))||!!(t.wildcard&&Tt(e,r))}else return!0}function Es(r,t,e,i,s){let o=typeof s.method=="string"?r[s.method]:s.method,n=s.property;o?o.call(r,r.__data[n],i[n]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function ga(r,t,e,i,s){let o=r[A.NOTIFY],n,a=dt++;for(let d in t)t[d]&&(o&&ma(r,o,a,d,e,i,s)||s&&ya(r,d,e))&&(n=!0);let l;n&&(l=r.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function ya(r,t,e){let i=Te(t);if(i!==t){let s=Ht(i)+"-changed";return xr(r,s,e[t],t),!0}return!1}function xr(r,t,e,i){let s={value:e,queueProperty:!0};i&&(s.path=i),xe(r).dispatchEvent(new CustomEvent(t,{detail:s}))}function ba(r,t,e,i,s,o){let a=(o?Te(t):t)!=t?t:null,l=a?H(r,a):r.__data[t];a&&l===void 0&&(l=e[t]),xr(r,s.eventName,l,a)}function va(r,t,e,i,s){let o,n=r.detail,a=n&&n.path;a?(i=Rt(e,i,a),o=n&&n.value):o=r.currentTarget[e],o=s?!o:o,(!t[A.READ_ONLY]||!t[A.READ_ONLY][i])&&t._setPendingPropertyOrPath(i,o,!0,!!a)&&(!n||!n.queueProperty)&&t._invalidateProperties()}function Ca(r,t,e,i,s){let o=r.__data[t];Pt&&(o=Pt(o,s.attrName,"attribute",r)),r._propertyToAttribute(t,s.attrName,o)}function wa(r,t,e,i){let s=r[A.COMPUTE];if(s)if($n){dt++;const o=Ea(r),n=[];for(let l in t)xs(l,s,n,o,i);let a;for(;a=n.shift();)Sr(r,"",t,e,a)&&xs(a.methodInfo,s,n,o,i);Object.assign(e,r.__dataOld),Object.assign(t,r.__dataPending),r.__dataPending=null}else{let o=t;for(;Xe(r,s,o,e,i);)Object.assign(e,r.__dataOld),Object.assign(t,r.__dataPending),o=r.__dataPending,r.__dataPending=null}}const Aa=(r,t,e)=>{let i=0,s=t.length-1,o=-1;for(;i<=s;){const n=i+s>>1,a=e.get(t[n].methodInfo)-e.get(r.methodInfo);if(a<0)i=n+1;else if(a>0)s=n-1;else{o=n;break}}o<0&&(o=s+1),t.splice(o,0,r)},xs=(r,t,e,i,s)=>{const o=s?Te(r):r,n=t[o];if(n)for(let a=0;a<n.length;a++){const l=n[a];l.info.lastRun!==dt&&(!s||Oi(r,l.trigger))&&(l.info.lastRun=dt,Aa(l.info,e,i))}};function Ea(r){let t=r.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=r[A.COMPUTE];let{counts:i,ready:s,total:o}=xa(r),n;for(;n=s.shift();){t.set(n,t.size);const a=e[n];a&&a.forEach(l=>{const d=l.info.methodInfo;--o,--i[d]===0&&s.push(d)})}o!==0&&console.warn(`Computed graph for ${r.localName} incomplete; circular?`),r.constructor.__orderedComputedDeps=t}return t}function xa(r){const t=r[Er],e={},i=r[A.COMPUTE],s=[];let o=0;for(let n in t){const a=t[n];o+=e[n]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let n in i)t[n]||s.push(n);return{counts:e,ready:s,total:o}}function Sr(r,t,e,i,s){let o=pi(r,t,e,i,s);if(o===ht)return!1;let n=s.methodInfo;return r.__dataHasAccessor&&r.__dataHasAccessor[n]?r._setPendingProperty(n,o,!0):(r[n]=o,!1)}function Sa(r,t,e){let i=r.__dataLinkedPaths;if(i){let s;for(let o in i){let n=i[o];Tt(o,t)?(s=Rt(o,n,t),r._setPendingPropertyOrPath(s,e,!0,!0)):Tt(n,t)&&(s=Rt(n,o,t),r._setPendingPropertyOrPath(s,e,!0,!0))}}}function Xt(r,t,e,i,s,o,n){e.bindings=e.bindings||[];let a={kind:i,target:s,parts:o,literal:n,isCompound:o.length!==1};if(e.bindings.push(a),Oa(a)){let{event:d,negate:h}=a.parts[0];a.listenerEvent=d||Ht(s)+"-changed",a.listenerNegate=h}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let h=a.parts[d];h.compoundIndex=d,Ia(r,t,a,h,l)}}function Ia(r,t,e,i,s){if(!i.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let o=i.dependencies,n={index:s,binding:e,part:i,evaluator:r};for(let a=0;a<o.length;a++){let l=o[a];typeof l=="string"&&(l=Pr(l),l.wildcard=!0),r._addTemplatePropertyEffect(t,l.rootProperty,{fn:Pa,info:n,trigger:l})}}}function Pa(r,t,e,i,s,o,n){let a=n[s.index],l=s.binding,d=s.part;if(o&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let h=e[t];t=Rt(d.source,l.target,t),a._setPendingPropertyOrPath(t,h,!1,!0)&&r._enqueueClient(a)}else{let h=s.evaluator._evaluateBinding(r,d,t,e,i,o);h!==ht&&Ta(r,a,l,d,h)}}function Ta(r,t,e,i,s){if(s=Ra(t,s,e,i),Pt&&(s=Pt(s,e.target,e.kind,t)),e.kind=="attribute")r._valueToNodeAttribute(t,s,e.target);else{let o=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?(!t[A.READ_ONLY]||!t[A.READ_ONLY][o])&&t._setPendingProperty(o,s)&&r._enqueueClient(t):r._setUnmanagedPropertyToNode(t,o,s)}}function Ra(r,t,e,i){if(e.isCompound){let s=r.__dataCompoundStorage[e.target];s[i.compoundIndex]=t,t=s.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(r.localName==="input"||r.localName==="textarea"))&&(t=t??""),t}function Oa(r){return!!r.target&&r.kind!="attribute"&&r.kind!="text"&&!r.isCompound&&r.parts[0].mode==="{"}function Fa(r,t){let{nodeList:e,nodeInfoList:i}=t;if(i.length)for(let s=0;s<i.length;s++){let o=i[s],n=e[s],a=o.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];za(n,d),Ma(n,r,d)}n.__dataHost=r}}function za(r,t){if(t.isCompound){let e=r.__dataCompoundStorage||(r.__dataCompoundStorage={}),i=t.parts,s=new Array(i.length);for(let n=0;n<i.length;n++)s[n]=i[n].literal;let o=t.target;e[o]=s,t.literal&&t.kind=="property"&&(o==="className"&&(r=xe(r)),r[o]=t.literal)}}function Ma(r,t,e){if(e.listenerEvent){let i=e.parts[0];r.addEventListener(e.listenerEvent,function(s){va(s,t,e.target,i.source,i.negate)})}}function Ss(r,t,e,i,s,o){o=t.static||o&&(typeof o!="object"||o[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:o};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||r._addPropertyEffect(l.rootProperty,e,{fn:i,info:n,trigger:l});return o&&r._addPropertyEffect(t.methodName,e,{fn:i,info:n}),n}function pi(r,t,e,i,s){let o=r._methodHost||r,n=o[s.methodName];if(n){let a=r._marshalArgs(s.args,t,e);return a===ht?ht:n.apply(o,a)}else s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const ka=[],Ir="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Da="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Na="(?:'(?:[^'\\\\]|\\\\.)*')",$a='(?:"(?:[^"\\\\]|\\\\.)*")',La="(?:"+Na+"|"+$a+")",Is="(?:("+Ir+"|"+Da+"|"+La+")\\s*)",Ha="(?:"+Is+"(?:,\\s*"+Is+")*)",Ba="(?:\\(\\s*(?:"+Ha+"?)\\)\\s*)",Va="("+Ir+"\\s*"+Ba+"?)",Ga="(\\[\\[|{{)\\s*",Ua="(?:]]|}})",Wa="(?:(!)\\s*)?",ja=Ga+Wa+Va+Ua,Ps=new RegExp(ja,"g");function Ts(r){let t="";for(let e=0;e<r.length;e++){let i=r[e].literal;t+=i||""}return t}function ei(r){let t=r.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let i={methodName:t[1],static:!0,args:ka};if(t[2].trim()){let s=t[2].replace(/\\,/g,"&comma;").split(",");return qa(s,i)}else return i}return null}function qa(r,t){return t.args=r.map(function(e){let i=Pr(e);return i.literal||(t.static=!1),i},this),t}function Pr(r){let t=r.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},i=t[0];switch(i==="-"&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=Te(t),e.structured=ci(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function Rs(r,t,e){let i=H(r,e);return i===void 0&&(i=t[e]),i}function Tr(r,t,e,i){const s={indexSplices:i};hi&&!r._overrideLegacyUndefined&&(t.splices=s),r.notifyPath(e+".splices",s),r.notifyPath(e+".length",t.length),hi&&!r._overrideLegacyUndefined&&(s.indexSplices=[])}function qe(r,t,e,i,s,o){Tr(r,t,e,[{index:i,addedCount:s,removed:o,object:t,type:"splice"}])}function Ya(r){return r[0].toUpperCase()+r.substring(1)}const Za=D(r=>{const t=_a(ra(r));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return A}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Ye.length){let s=Ye[Ye.length-1];s._enqueueClient(this),this.__dataHost=s}}_initializeProtoProperties(s){this.__data=Object.create(s),this.__dataPending=Object.create(s),this.__dataOld={}}_initializeInstanceProperties(s){let o=this[A.READ_ONLY];for(let n in s)(!o||!o[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=s[n])}_addPropertyEffect(s,o,n){this._createPropertyAccessor(s,o==A.READ_ONLY);let a=Jt(this,o,!0)[s];a||(a=this[o][s]=[]),a.push(n)}_removePropertyEffect(s,o,n){let a=Jt(this,o,!0)[s],l=a.indexOf(n);l>=0&&a.splice(l,1)}_hasPropertyEffect(s,o){let n=this[o];return!!(n&&n[s])}_hasReadOnlyEffect(s){return this._hasPropertyEffect(s,A.READ_ONLY)}_hasNotifyEffect(s){return this._hasPropertyEffect(s,A.NOTIFY)}_hasReflectEffect(s){return this._hasPropertyEffect(s,A.REFLECT)}_hasComputedEffect(s){return this._hasPropertyEffect(s,A.COMPUTE)}_setPendingPropertyOrPath(s,o,n,a){if(a||Te(Array.isArray(s)?s[0]:s)!==s){if(!a){let l=H(this,s);if(s=Cs(this,s,o),!s||!super._shouldPropertyChange(s,o,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(s,o,n))return Sa(this,s,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[s])return this._setPendingProperty(s,o,n);this[s]=o}return!1}_setUnmanagedPropertyToNode(s,o,n){(n!==s[o]||typeof n=="object")&&(o==="className"&&(s=xe(s)),s[o]=n)}_setPendingProperty(s,o,n){let a=this.__dataHasPaths&&ci(s),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(s,o,l[s])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),s in this.__dataOld||(this.__dataOld[s]=this.__data[s]),a?this.__dataTemp[s]=o:this.__data[s]=o,this.__dataPending[s]=o,(a||this[A.NOTIFY]&&this[A.NOTIFY][s])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[s]=n),!0):!1}_setProperty(s,o){this._setPendingProperty(s,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(s){this.__dataPendingClients=this.__dataPendingClients||[],s!==this&&this.__dataPendingClients.push(s)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let s=this.__dataPendingClients;if(s){this.__dataPendingClients=null;for(let o=0;o<s.length;o++){let n=s[o];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(s,o){for(let n in s)(o||!this[A.READ_ONLY]||!this[A.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,s[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(s,o,n){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;wa(this,o,n,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,n,a),this._flushClients(),Xe(this,this[A.REFLECT],o,n,a),Xe(this,this[A.OBSERVE],o,n,a),l&&ga(this,l,o,n,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(s,o,n){this[A.PROPAGATE]&&Xe(this,this[A.PROPAGATE],s,o,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,s,o,n)}_runEffectsForTemplate(s,o,n,a){const l=(d,h)=>{Xe(this,s.propertyEffects,d,n,h,s.nodeList);for(let p=s.firstChild;p;p=p.nextSibling)this._runEffectsForTemplate(p,d,n,h)};s.runEffects?s.runEffects(l,o,a):l(o,a)}linkPaths(s,o){s=Je(s),o=Je(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[s]=o}unlinkPaths(s){s=Je(s),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[s]}notifySplices(s,o){let n={path:""},a=H(this,s,n);Tr(this,a,n.path,o)}get(s,o){return H(o||this,s)}set(s,o,n){n?Cs(n,s,o):(!this[A.READ_ONLY]||!this[A.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,o,!0)&&this._invalidateProperties()}push(s,...o){let n={path:""},a=H(this,s,n),l=a.length,d=a.push(...o);return o.length&&qe(this,a,n.path,l,o.length,[]),d}pop(s){let o={path:""},n=H(this,s,o),a=!!n.length,l=n.pop();return a&&qe(this,n,o.path,n.length,0,[l]),l}splice(s,o,n,...a){let l={path:""},d=H(this,s,l);o<0?o=d.length-Math.floor(-o):o&&(o=Math.floor(o));let h;return arguments.length===2?h=d.splice(o):h=d.splice(o,n,...a),(a.length||h.length)&&qe(this,d,l.path,o,a.length,h),h}shift(s){let o={path:""},n=H(this,s,o),a=!!n.length,l=n.shift();return a&&qe(this,n,o.path,0,0,[l]),l}unshift(s,...o){let n={path:""},a=H(this,s,n),l=a.unshift(...o);return o.length&&qe(this,a,n.path,0,o.length,[]),l}notifyPath(s,o){let n;if(arguments.length==1){let a={path:""};o=H(this,s,a),n=a.path}else Array.isArray(s)?n=Je(s):n=s;this._setPendingPropertyOrPath(n,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(s,o){this._addPropertyEffect(s,A.READ_ONLY),o&&(this["_set"+Ya(s)]=function(n){this._setProperty(s,n)})}_createPropertyObserver(s,o,n){let a={property:s,method:o,dynamicFn:!!n};this._addPropertyEffect(s,A.OBSERVE,{fn:Es,info:a,trigger:{name:s}}),n&&this._addPropertyEffect(o,A.OBSERVE,{fn:Es,info:a,trigger:{name:o}})}_createMethodObserver(s,o){let n=ei(s);if(!n)throw new Error("Malformed observer expression '"+s+"'");Ss(this,n,A.OBSERVE,pi,null,o)}_createNotifyingProperty(s){this._addPropertyEffect(s,A.NOTIFY,{fn:ba,info:{eventName:Ht(s)+"-changed",property:s}})}_createReflectedProperty(s){let o=this.constructor.attributeNameForProperty(s);o[0]==="-"?console.warn("Property "+s+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(s,A.REFLECT,{fn:Ca,info:{attrName:o}})}_createComputedProperty(s,o,n){let a=ei(o);if(!a)throw new Error("Malformed computed expression '"+o+"'");const l=Ss(this,a,A.COMPUTE,Sr,s,n);Jt(this,Er)[s]=l}_marshalArgs(s,o,n){const a=this.__data,l=[];for(let d=0,h=s.length;d<h;d++){let{name:p,structured:_,wildcard:f,value:m,literal:y}=s[d];if(!y)if(f){const I=Tt(p,o),P=Rs(a,n,I?o:p);m={path:I?o:p,value:P,base:I?H(a,p):P}}else m=_?Rs(a,n,p):a[p];if(hi&&!this._overrideLegacyUndefined&&m===void 0&&s.length>1)return ht;l[d]=m}return l}static addPropertyEffect(s,o,n){this.prototype._addPropertyEffect(s,o,n)}static createPropertyObserver(s,o,n){this.prototype._createPropertyObserver(s,o,n)}static createMethodObserver(s,o){this.prototype._createMethodObserver(s,o)}static createNotifyingProperty(s){this.prototype._createNotifyingProperty(s)}static createReadOnlyProperty(s,o){this.prototype._createReadOnlyProperty(s,o)}static createReflectedProperty(s){this.prototype._createReflectedProperty(s)}static createComputedProperty(s,o,n){this.prototype._createComputedProperty(s,o,n)}static bindTemplate(s){return this.prototype._bindTemplate(s)}_bindTemplate(s,o){let n=this.constructor._parseTemplate(s),a=this.__preBoundTemplateInfo==n;if(!a)for(let l in n.propertyEffects)this._createPropertyAccessor(l);if(o)if(n=Object.create(n),n.wasPreBound=a,!this.__templateInfo)this.__templateInfo=n;else{const l=s._parentTemplateInfo||this.__templateInfo,d=l.lastChild;n.parent=l,l.lastChild=n,n.previousSibling=d,d?d.nextSibling=n:l.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(s,o,n){let a=s.hostProps=s.hostProps||{};a[o]=!0;let l=s.propertyEffects=s.propertyEffects||{};(l[o]=l[o]||[]).push(n)}_stampTemplate(s,o){o=o||this._bindTemplate(s,!0),Ye.push(this);let n=super._stampTemplate(s,o);if(Ye.pop(),o.nodeList=n.nodeList,!o.wasPreBound){let a=o.childNodes=[];for(let l=n.firstChild;l;l=l.nextSibling)a.push(l)}return n.templateInfo=o,Fa(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(s){const o=s.templateInfo,{previousSibling:n,nextSibling:a,parent:l}=o;n?n.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=n:l&&(l.lastChild=n),o.nextSibling=o.previousSibling=null;let d=o.childNodes;for(let h=0;h<d.length;h++){let p=d[h];xe(xe(p).parentNode).removeChild(p)}}static _parseTemplateNode(s,o,n){let a=t._parseTemplateNode.call(this,s,o,n);if(s.nodeType===Node.TEXT_NODE){let l=this._parseBindings(s.textContent,o);l&&(s.textContent=Ts(l)||" ",Xt(this,o,n,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(s,o,n,a,l){let d=this._parseBindings(l,o);if(d){let h=a,p="property";fa.test(a)?p="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),p="attribute");let _=Ts(d);return _&&p=="attribute"&&(a=="class"&&s.hasAttribute("class")&&(_+=" "+s.getAttribute(a)),s.setAttribute(a,_)),p=="attribute"&&h=="disable-upgrade$"&&s.setAttribute(a,""),s.localName==="input"&&h==="value"&&s.setAttribute(h,""),s.removeAttribute(h),p==="property"&&(a=yr(a)),Xt(this,o,n,p,a,d,_),!0}else return t._parseTemplateNodeAttribute.call(this,s,o,n,a,l)}static _parseTemplateNestedTemplate(s,o,n){let a=t._parseTemplateNestedTemplate.call(this,s,o,n);const l=s.parentNode,d=n.templateInfo,h=l.localName==="dom-if",p=l.localName==="dom-repeat";ms&&(h||p)&&(l.removeChild(s),n=n.parentInfo,n.templateInfo=d,n.noted=!0,a=!1);let _=d.hostProps;if(Ln&&h)_&&(o.hostProps=Object.assign(o.hostProps||{},_),ms||(n.parentInfo.noted=!0));else{let f="{";for(let m in _){let y=[{mode:f,source:m,dependencies:[m],hostProp:!0}];Xt(this,o,n,"property","_host_"+m,y)}}return a}static _parseBindings(s,o){let n=[],a=0,l;for(;(l=Ps.exec(s))!==null;){l.index>a&&n.push({literal:s.slice(a,l.index)});let d=l[1][0],h=!!l[2],p=l[3].trim(),_=!1,f="",m=-1;d=="{"&&(m=p.indexOf("::"))>0&&(f=p.substring(m+2),p=p.substring(0,m),_=!0);let y=ei(p),I=[];if(y){let{args:P,methodName:S}=y;for(let j=0;j<P.length;j++){let R=P[j];R.literal||I.push(R)}let $=o.dynamicFns;($&&$[S]||y.static)&&(I.push(S),y.dynamicFn=!0)}else I.push(p);n.push({source:p,mode:d,negate:h,customEvent:_,signature:y,dependencies:I,event:f}),a=Ps.lastIndex}if(a&&a<s.length){let d=s.substring(a);d&&n.push({literal:d})}return n.length?n:null}static _evaluateBinding(s,o,n,a,l,d){let h;return o.signature?h=pi(s,n,a,l,o.signature):n!=o.source?h=H(s,o.source):d&&ci(n)?h=H(s,n):h=s.__data[n],o.negate&&(h=!h),h}}return e}),Ye=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ka(r){const t={};for(let e in r){const i=r[e];t[e]=typeof i=="function"?{type:i}:i}return t}const Qa=D(r=>{const t=Cr(r);function e(o){const n=Object.getPrototypeOf(o);return n.prototype instanceof s?n:null}function i(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let n=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){const a=o.properties;a&&(n=Ka(a))}o.__ownProperties=n}return o.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const n=this._properties;this.__observedAttributes=n?Object.keys(n).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const n=e(this);n&&n.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const n=i(this);n&&this.createProperties(n)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const n=e(this);this.__properties=Object.assign({},n&&n._properties,i(this))}return this.__properties}static typeForProperty(n){const a=this._properties[n];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Ja="3.5.1",Os=window.ShadyCSS&&window.ShadyCSS.cssBuild,Xa=D(r=>{const t=Qa(Za(r));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let h in d){let p=d[h];"value"in p&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[h]=p)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function s(l,d,h,p){h.computed&&(h.readOnly=!0),h.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,h.computed,p)),h.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!h.computed):h.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),h.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):h.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),h.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):h.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),h.observer&&l._createPropertyObserver(d,h.observer,p[h.observer]),l._addPropertyToAttributeMap(d)}function o(l,d,h,p){if(!Os){const _=d.content.querySelectorAll("style"),f=fr(d),m=qn(h),y=d.content.firstElementChild;for(let P=0;P<m.length;P++){let S=m[P];S.textContent=l._processStyleText(S.textContent,p),d.content.insertBefore(S,y)}let I=0;for(let P=0;P<f.length;P++){let S=f[P],$=_[I];$!==S?(S=S.cloneNode(!0),$.parentNode.insertBefore(S,$)):I++,S.textContent=l._processStyleText(S.textContent,p)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,h),Hn&&Os&&Fn){const _=d.content.querySelectorAll("style");if(_){let f="";Array.from(_).forEach(m=>{f+=m.textContent,m.parentNode.removeChild(m)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(f)}}}function n(l){let d=null;if(l&&(!di||Mn)&&(d=lt.import(l,"template"),di&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return Ja}static _finalizeClass(){t._finalizeClass.call(this);const d=i(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):kn||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let h in d)s(this.prototype,h,d[h],d)}static createObservers(d,h){const p=this.prototype;for(let _=0;_<d.length;_++)p._createMethodObserver(d[_],h)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&n(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=Ti(d.url);else{const h=lt.import(this.is);this._importPath=h&&h.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=zn,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(d)for(let h in d){let p=d[h];if(this._canApplyPropertyDefault(h)){let _=typeof p.value=="function"?p.value.call(this):p.value;this._hasAccessor(h)?this._setPendingProperty(h,_,!0):this[h]=_}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,h){return Pi(d,h)}static _finalizeTemplate(d){const h=this.prototype._template;if(h&&!h.__polymerFinalized){h.__polymerFinalized=!0;const p=this.importPath,_=p?st(p):"";o(this,h,d,_),this.prototype._bindTemplate(h)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const h=xe(this);if(h.attachShadow)return d?(h.shadowRoot||(h.attachShadow({mode:"open",shadyUpgradeFragment:d}),h.shadowRoot.appendChild(d),this.constructor._styleSheet&&(h.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Nn&&window.ShadyDOM&&window.ShadyDOM.flushInitial(h.shadowRoot),h.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,h){return!h&&this.importPath&&(h=st(this.importPath)),st(d,h)}static _parseTemplateContent(d,h,p){return h.dynamicFns=h.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,h,p)}static _addTemplatePropertyEffect(d,h,p){return Dn&&!(h in this._properties)&&!(p.info.part.signature&&p.info.part.signature.static)&&!p.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${h}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,h,p)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Fs=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:r=>r});class Rr{constructor(t,e){Fr(t,e);const i=e.reduce((s,o,n)=>s+Or(o)+t[n+1],t[0]);this.value=i.toString()}toString(){return this.value}}function Or(r){if(r instanceof Rr)return r.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${r}`)}function el(r){if(r instanceof HTMLTemplateElement)return r.innerHTML;if(r instanceof Rr)return Or(r);throw new Error(`non-template value passed to Polymer's html function: ${r}`)}const Fi=function(t,...e){Fr(t,e);const i=document.createElement("template");let s=e.reduce((o,n,a)=>o+el(n)+t[a+1],t[0]);return Fs&&(s=Fs.createHTML(s)),i.innerHTML=s,i},Fr=(r,t)=>{if(!Array.isArray(r)||!Array.isArray(r.raw)||t.length!==r.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pt=Xa(HTMLElement);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let zs=0,zr=0;const Le=[];let _i=!1;function tl(){_i=!1;const r=Le.length;for(let t=0;t<r;t++){const e=Le[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}Le.splice(0,r),zr+=r}const pe={after(r){return{run(t){return window.setTimeout(t,r)},cancel(t){window.clearTimeout(t)}}},run(r,t){return window.setTimeout(r,t)},cancel(r){window.clearTimeout(r)}},me={run(r){return window.requestAnimationFrame(r)},cancel(r){window.cancelAnimationFrame(r)}},Mr={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}},se={run(r){_i||(_i=!0,queueMicrotask(()=>tl())),Le.push(r);const t=zs;return zs+=1,t},cancel(r){const t=r-zr;if(t>=0){if(!Le[t])throw new Error(`invalid async handle: ${r}`);Le[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ct=new Set;class x{static debounce(t,e,i){return t instanceof x?t._cancelAsync():t=new x,t.setConfig(e,i),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,ct.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ct.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function kr(r){ct.add(r)}function il(){const r=!!ct.size;return ct.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),r}const et=()=>{let r;do r=il();while(r)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ee=[];function fi(r,t,e=r.getAttribute("dir")){t?r.setAttribute("dir",t):e!=null&&r.removeAttribute("dir")}function mi(){return document.documentElement.getAttribute("dir")}function sl(){const r=mi();ee.forEach(t=>{fi(t,r)})}const rl=new MutationObserver(sl);rl.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const zi=r=>class extends r{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),fi(this,mi(),null))}attributeChangedCallback(e,i,s){if(super.attributeChangedCallback(e,i,s),e!=="dir")return;const o=mi(),n=s===o&&ee.indexOf(this)===-1,a=!s&&i&&ee.indexOf(this)===-1;n||a?(this.__subscribe(),fi(this,o,s)):s!==o&&i===o&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=ee.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,i,s){s==="dir"&&i===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,i,s)}_attributeToProperty(e,i,s){e==="dir"&&!i?this.dir="":super._attributeToProperty(e,i,s)}__subscribe(){ee.includes(this)||ee.push(this)}__unsubscribe(){ee.includes(this)&&ee.splice(ee.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Mi(r,t){return r.split(".").reduce((e,i)=>e?e[i]:void 0,t)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Dr(r){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(r);return}r.querySelector("template")&&console.warn(`WARNING: <template> inside <${r.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Nr(r,t){return t?t.closest(r)||Nr(r,t.getRootNode().host):null}function $r(r){return r?new Set(r.split(" ")):new Set}function Lr(r){return r?[...r].join(" "):""}function Hr(r,t,e){const i=$r(r.getAttribute(t));i.add(e),r.setAttribute(t,Lr(i))}function Br(r,t,e){const i=$r(r.getAttribute(t));if(i.delete(e),i.size===0){r.removeAttribute(t);return}r.setAttribute(t,Lr(i))}function ol(r){return r.nodeType===Node.TEXT_NODE&&r.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ge(r){return r.__cells||Array.from(r.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function B(r,t){[...r.children].forEach(t)}function Ue(r,t){Ge(r).forEach(t),r.__detailsCell&&t(r.__detailsCell)}function Vr(r,t,e){let i=1;r.forEach(s=>{i%10===0&&(i+=1),s._order=e+i*t,i+=1})}function Bt(r,t,e){switch(typeof e){case"boolean":r.toggleAttribute(t,e);break;case"string":r.setAttribute(t,e);break;default:r.removeAttribute(t);break}}function ge(r,t,e){t||t===""?Hr(r,"part",e):Br(r,"part",e)}function ce(r,t,e){r.forEach(i=>{ge(i,e,t)})}function rt(r,t){const e=Ge(r);Object.entries(t).forEach(([i,s])=>{Bt(r,i,s);const o=`${i}-row`;ge(r,s,o),ce(e,`${o}-cell`,s)})}function Ms(r,t){const e=Ge(r);Object.entries(t).forEach(([i,s])=>{const o=r.getAttribute(i);if(Bt(r,i,s),o){const n=`${i}-${o}-row`;ge(r,!1,n),ce(e,`${n}-cell`,!1)}if(s){const n=`${i}-${s}-row`;ge(r,s,n),ce(e,`${n}-cell`,s)}})}function Ce(r,t,e,i,s){Bt(r,t,e),s&&ge(r,!1,s),ge(r,e,i||`${t}-cell`)}class _e{constructor(t,e){this.__host=t,this.__callback=e,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(t,{childList:!0}),this.__initialCallDebouncer=x.debounce(this.__initialCallDebouncer,se,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(t){this.__currentSlots.forEach(e=>{t?e.addEventListener("slotchange",this.__onMutation):e.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const t=!this.__currentColumns;this.__currentColumns||(this.__currentColumns=[]);const e=_e.getColumns(this.__host),i=e.filter(a=>!this.__currentColumns.includes(a)),s=this.__currentColumns.filter(a=>!e.includes(a)),o=this.__currentColumns.some((a,l)=>a!==e[l]);this.__currentColumns=e,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(a=>a instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(t||i.length||s.length||o)&&this.__callback(i,s)}static __isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(t.localName)}static getColumns(t){const e=[],i=t._isColumnElement||_e.__isColumnElement;return[...t.children].forEach(s=>{i(s)?e.push(s):s instanceof HTMLSlotElement&&[...s.assignedElements({flatten:!0})].filter(o=>i(o)).forEach(o=>e.push(o))}),e}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gr=r=>class extends r{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),Dr(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(i=>{i.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(i=>{i.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(i=>{i.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(i=>{Ce(i,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||Ce(i,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(i=>{Ce(i,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||Ce(i,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,i){i&&i.forEach(s=>{s.setAttribute("role",e?"rowheader":"gridcell")})}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,i=>i.toUpperCase())}_reorderStatusChanged(e){const i=this.__previousReorderStatus,s=i?`reorder-${i}-cell`:"",o=`reorder-${e}-cell`;this._allCells.forEach(n=>{Ce(n,"reorder-status",e,o,s)}),this.__previousReorderStatus=e}_resizableChanged(e,i){e===void 0||i===void 0||i&&[i].concat(this._emptyCells).forEach(s=>{if(s){const o=s.querySelector('[part~="resize-handle"]');if(o&&s.removeChild(o),e){const n=document.createElement("div");n.setAttribute("part","resize-handle"),s.appendChild(n)}}})}_textAlignChanged(e){if(e===void 0||this._grid===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let i;getComputedStyle(this._grid).direction==="ltr"?e==="start"?i="left":e==="end"&&(i="right"):e==="start"?i="right":e==="end"&&(i="left"),this._allCells.forEach(s=>{s._content.style.textAlign=e,getComputedStyle(s._content).textAlign!==e&&(s._content.style.textAlign=i)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(i=>{i._content.parentNode&&i._content.parentNode.removeChild(i._content)}),this._grid._debouncerHiddenChanged=x.debounce(this._grid._debouncerHiddenChanged,me,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,i,s){const o=s&&s.item&&!i.parentElement.hidden;if(!(o||e===this._headerRenderer||e===this._footerRenderer))return;const a=[i._content,this];o&&a.push(s),e.apply(this,a)}__renderCellsContent(e,i){this.hidden||!this._grid||i.forEach(s=>{if(!s.parentElement)return;const o=this._grid.__getRowModel(s.parentElement);e&&(s._renderer!==e&&this._clearCellContent(s),s._renderer=e,this._runRenderer(e,s,o))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onHeaderRendererOrBindingChanged(e,i,...s){this._renderHeaderCellContent(e,i)}__headerFooterPartNameChanged(e,i,s,o){[{cell:e,partName:s},{cell:i,partName:o}].forEach(({cell:n,partName:a})=>{if(n){const l=n.__customParts||[];n.part.remove(...l),n.__customParts=a?a.trim().split(" "):[],n.part.add(...n.__customParts)}})}_renderBodyCellsContent(e,i){!i||!e||this.__renderCellsContent(e,i)}_onRendererOrBindingChanged(e,i,...s){this._renderBodyCellsContent(e,i)}_renderFooterCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onFooterRendererOrBindingChanged(e,i){this._renderFooterCellContent(e,i)}__setTextContent(e,i){e.textContent!==i&&(e.textContent=i)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,i,{item:s}){this.path&&this.__setTextContent(e,Mi(this.path,s))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,i){return e||(i!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}},nl=r=>class extends Gr(zi(r)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ur extends nl(pt){static get is(){return"vaadin-grid-column"}}Pe(Ur);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wr=D(r=>typeof r.prototype.addController=="function"?r:class extends r{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}),al=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Et=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ll(){function r(){return!0}return jr(r)}function dl(){try{return hl()?!0:cl()?Et?!ul():!ll():!1}catch{return!1}}function hl(){return localStorage.getItem("vaadin.developmentmode.force")}function cl(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ul(){return!!(Et&&Object.keys(Et).map(t=>Et[t]).filter(t=>t.productionMode).length>0)}function jr(r,t){if(typeof r!="function")return;const e=al.exec(r.toString());if(e)try{r=new Function(e[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(t)}window.Vaadin=window.Vaadin||{};const ks=function(r,t){if(window.Vaadin.developmentMode)return jr(r,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=dl());function pl(){}const _l=function(){if(typeof ks=="function")return ks(pl)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){_l()};let ti;const Ds=new Set,qr=r=>class extends zi(r){static finalize(){super.finalize();const{is:e}=this;e&&!Ds.has(e)&&(window.Vaadin.registrations.push(this),Ds.add(e),window.Vaadin.developmentModeCallback&&(ti=x.debounce(ti,Mr,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),kr(ti)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ki=!1;window.addEventListener("keydown",()=>{ki=!0},{capture:!0});window.addEventListener("mousedown",()=>{ki=!1},{capture:!0});function Yr(){return ki}function fl(r){const t=r.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(r);return e.visibility==="hidden"||e.display==="none"}function Ft(r){return r.offsetParent===null&&r.clientWidth===0&&r.clientHeight===0?!0:fl(r)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Di=D(r=>class extends r{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zr=r=>class extends Di(r){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,i){super._disabledChanged(e,i),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):i&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vt=r=>r.test(navigator.userAgent),gi=r=>r.test(navigator.platform),ml=r=>r.test(navigator.vendor),Ns=Vt(/Android/u),gl=Vt(/Chrome/u)&&ml(/Google Inc/u),yl=Vt(/Firefox/u),bl=gi(/^iPad/u)||gi(/^Mac/u)&&navigator.maxTouchPoints>1,vl=gi(/^iPhone/u),$s=vl||bl,Kr=Vt(/^((?!chrome|android).)*safari/iu),Qr=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cl{constructor(t,e){this.slot=t,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const t=this.slot.assignedNodes({flatten:!0});let e=[];const i=[],s=[];t.length&&(e=t.filter(o=>!this._storedNodes.includes(o))),this._storedNodes.length&&this._storedNodes.forEach((o,n)=>{const a=t.indexOf(o);a===-1?i.push(o):a!==n&&s.push(o)}),(e.length||i.length||s.length)&&this.callback({addedNodes:e,movedNodes:s,removedNodes:i}),this._storedNodes=t}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let wl=0;function Al(){return wl++}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ni extends EventTarget{static generateId(t,e){return`${e||"default"}-${t.localName}-${Al()}`}constructor(t,e,i,s={}){super();const{initializer:o,multiple:n,observe:a,useUniqueId:l}=s;this.host=t,this.slotName=e,this.tagName=i,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=o,n&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(t,e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(t.length===0){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=t,t.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:t,slotName:e,tagName:i}=this;let s=this.defaultNode;return!s&&i&&(s=document.createElement(i),s instanceof Element&&(e!==""&&s.setAttribute("slot",e),this.node=s,this.defaultNode=s)),s&&t.appendChild(s),s}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,i=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Cl(i,({addedNodes:s,removedNodes:o})=>{const n=this.multiple?this.nodes:[this.node],a=s.filter(l=>!ol(l)&&!n.includes(l));o.length&&(this.nodes=n.filter(l=>!o.includes(l)),o.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Jr extends Ni{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.ariaTarget!==void 0&&(t.ariaTarget=this.ariaTarget),this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(t){this.ariaTarget=t;const e=this.node;e&&(e.ariaTarget=t)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const Ls=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),El=Ls&&Ls[1]>=8,Hs=3,xl={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const r=this._virtualCount;return Math.max(0,r-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(r){r=this._clamp(r,0,this._maxVirtualStart),this._virtualStartVal=r},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(r){r%=this._physicalCount,r<0&&(r=this._physicalCount+r),this._physicalStartVal=r},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(r){this._physicalCountVal=r},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let r=this._firstVisibleIndexVal;if(r==null){let t=this._physicalTop+this._scrollOffset;r=this._iterateItems((e,i)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return i})||0,this._firstVisibleIndexVal=r}return r},get lastVisibleIndex(){let r=this._lastVisibleIndexVal;if(r==null){let t=this._physicalTop+this._scrollOffset;this._iterateItems((e,i)=>{t<this._scrollBottom&&(r=i),t+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=r}return r},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const r=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=r-this._scrollPosition;const e=t>=0;if(this._scrollPosition=r,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const i=Math.round(t/this._physicalAverage);this._virtualStart+=i,this._physicalStart+=i,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const i=this._getReusables(e);e?(this._physicalTop=i.physicalTop,this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length):(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length),this._update(i.indexes,e?null:i.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),se)}},_getReusables(r){let t,e,i;const s=[],o=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const h=this._physicalBottom+this._scrollOffset,p=this._scrollPosition,_=this._scrollBottom;for(r?(t=this._physicalStart,e=p-d):(t=this._physicalEnd,e=h-_);i=this._getPhysicalSizeIncrement(t),e-=i,!(s.length>=l||e<=o);)if(r){if(a+s.length+1>=this._virtualCount||d+i>=p-this._scrollOffset)break;s.push(t),d+=i,t=(t+1)%l}else{if(n-s.length<=0||d+this._physicalSize-i<=_)break;s.push(t),d-=i,t=t===0?l-1:t-1}return{indexes:s,physicalTop:d-this._scrollOffset}},_update(r,t){if(!(r&&r.length===0||this._physicalCount===0)){if(this._assignModels(r),this._updateMetrics(r),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(r){const e=this._clamp(this._physicalCount+r,Hs,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const s=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let o=0;o<e;o++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-s)/e,i=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||i===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),Mr):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),se))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const r=this._getReusables(!0);this._physicalTop=r.physicalTop,this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length,this._update(r.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(Hs))},_itemsChanged(r){r.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,me))},_iterateItems(r,t){let e,i,s,o;if(arguments.length===2&&t){for(o=0;o<t.length;o++)if(e=t[o],i=this._computeVidx(e),(s=r.call(this,e,i))!=null)return s}else{for(e=this._physicalStart,i=this._virtualStart;e<this._physicalCount;e++,i++)if((s=r.call(this,e,i))!=null)return s;for(e=0;e<this._physicalStart;e++,i++)if((s=r.call(this,e,i))!=null)return s}},_computeVidx(r){return r>=this._physicalStart?this._virtualStart+(r-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+r},_positionItems(){this._adjustScrollPosition();let r=this._physicalTop;this._iterateItems(t=>{this.translate3d(0,`${r}px`,0,this._physicalItems[t]),r+=this._physicalSizes[t]})},_getPhysicalSizeIncrement(r){return this._physicalSizes[r]},_adjustScrollPosition(){const r=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(r!==0){this._physicalTop-=r;const t=this._scrollPosition;!El&&t>0&&this._resetScrollPosition(t-r)}},_resetScrollPosition(r){this.scrollTarget&&r>=0&&(this._scrollTop=r,this._scrollPosition=this._scrollTop)},_updateScrollerSize(r){const t=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=t,(r||this._scrollHeight===0||this._scrollPosition>=t-this._physicalSize||Math.abs(t-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${t}px`,this._scrollHeight=t)},scrollToIndex(r){if(typeof r!="number"||r<0||r>this.items.length-1||(et(),this._physicalCount===0))return;r=this._clamp(r,0,this._virtualCount-1),(!this._isIndexRendered(r)||r>=this._maxVirtualStart)&&(this._virtualStart=r-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,e=this._virtualStart,i=0;const s=this._hiddenContentSize;for(;e<r&&i<=s;)i+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},me)},_isIndexRendered(r){return r>=this._virtualStart&&r<=this._virtualEnd},_getPhysicalIndex(r){return(this._physicalStart+(r-this._virtualStart))%this._physicalCount},_clamp(r,t,e){return Math.min(e,Math.max(t,r))},_debounce(r,t,e){this._debouncers||(this._debouncers={}),this._debouncers[r]=x.debounce(this._debouncers[r],e,t.bind(this)),kr(this._debouncers[r])}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sl=1e5,ii=1e3;class Xr{constructor({createElements:t,updateElement:e,scrollTarget:i,scrollContainer:s,elementsContainer:o,reorderElements:n}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=i,this.scrollContainer=s,this.elementsContainer=o||s,this.reorderElements=n,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",a=>this.__onWheel(a)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}__hasPlaceholders(){return this.__getVisibleElements().some(t=>t.__virtualizerPlaceholder)}scrollToIndex(t){if(typeof t!="number"||isNaN(t)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let i=Math.floor(t/this.size*this._virtualCount);this._virtualCount-i<e?(i=this._virtualCount-(this.size-t),this._vidxOffset=this.size-this._virtualCount):i<e?t<ii?(i=t,this._vidxOffset=0):(i=ii,this._vidxOffset=t-i):this._vidxOffset=t-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=t)}flush(){const t=this._physicalCount;this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),et(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush(),this._physicalCount!==t&&this.flush())}update(t=0,e=this.size-1){const i=[];this.__getVisibleElements().forEach(s=>{s.__virtualIndex>=t&&s.__virtualIndex<=e&&(this.__updateElement(s,s.__virtualIndex,!0),i.push(s))}),this.__afterElementsUpdated(i)}_updateMetrics(t){et();let e=0,i=0;const s=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((n,a)=>{i+=this._physicalSizes[n],this._physicalSizes[n]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[n])),e+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},t),this._physicalSize=this._physicalSize+e-i,this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((o*s+e)/this._physicalAverageCount))}__getBorderBoxHeight(t){const e=getComputedStyle(t),i=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return i;const s=parseFloat(e.paddingBottom)||0,o=parseFloat(e.paddingTop)||0,n=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.borderTopWidth)||0;return i+s+o+n+a}__updateElement(t,e,i){t.__virtualizerPlaceholder&&(t.style.paddingTop="",t.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(t.__lastUpdatedIndex!==e||i)&&(this.updateElement(t,e),t.__lastUpdatedIndex=e)}__afterElementsUpdated(t){t.forEach(e=>{const i=e.offsetHeight;if(i===0)e.style.paddingTop=`${this.__placeholderHeight}px`,e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=x.debounce(this.__placeholderClearDebouncer,me,()=>this._resizeHandler());else{this.__elementHeightQueue.push(i),this.__elementHeightQueue.shift();const s=this.__elementHeightQueue.filter(o=>o!==void 0);this.__placeholderHeight=Math.round(s.reduce((o,n)=>o+n,0)/s.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find(i=>i.__virtualIndex===t);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,i;if(t>0&&(e=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(e)),this.__size=t,this._itemsChanged({path:"items"}),et(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);const s=this.__getIndexScrollOffset(e);i!==void 0&&s!==void 0&&(this._scrollTop+=i-s)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),et()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,Sl)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=t.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),i=document.createDocumentFragment();return e.forEach(s=>{s.style.position="absolute",i.appendChild(s),this.__resizeObserver.observe(s)}),this.elementsContainer.appendChild(i),e}_assignModels(t){const e=[];this._iterateItems((i,s)=>{const o=this._physicalItems[i];o.hidden=s>=this.size,o.hidden?delete o.__lastUpdatedIndex:(o.__virtualIndex=s+(this._vidxOffset||0),this.__updateElement(o,o.__virtualIndex),e.push(o))},t),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(t,e,i,s){s.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const t=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=t>=0,i=this._getReusables(!e);i.indexes.length&&(this._physicalTop=i.physicalTop,e?(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length):(this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length),this._resizeHandler())}t&&(this.__fixInvalidItemPositioningDebouncer=x.debounce(this.__fixInvalidItemPositioningDebouncer,pe.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=x.debounce(this.__scrollReorderDebouncer,pe.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(t)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const t=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,i=this.adjustedFirstVisibleIndex===0,s=this.adjustedLastVisibleIndex===this.size-1;if(t&&!i||e&&!s){const o=e,n=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(o?-1:1),this._scrollHandler(),this._ratio=n}}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,t.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=x.debounce(this.__debouncerWheelAnimationFrame,me,()=>{this._wheelAnimationFrame=!1});const i=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=x.debounce(this._debouncerIgnoreNewWheel,pe.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(t,e,i){if(t===this.scrollTarget||t===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(t,e,i)&&["auto","scroll"].indexOf(getComputedStyle(t).overflow)!==-1)return!0;if(t!==this&&t.parentElement)return this._hasScrolledAncestor(t.parentElement,e,i)}_canScroll(t,e,i){return i>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||i<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_increasePoolIfNeeded(t){if(this._physicalCount>2&&t){const i=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(t,Math.min(100,i)))}else super._increasePoolIfNeeded(t)}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(t=>!t.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),s=e.find(a=>a.contains(this.elementsContainer.getRootNode().activeElement)||a.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!s)return;const o=s.__virtualIndex-t,n=e.indexOf(s)-o;if(n>0)for(let a=0;a<n;a++)this.elementsContainer.appendChild(e[a]);else if(n<0)for(let a=e.length+n;a<e.length;a++)this.elementsContainer.insertBefore(e[a],e[0]);if(Kr){const{transform:a}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=a})}}_adjustVirtualIndexOffset(t){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),i=e*this.size;this._vidxOffset=Math.round(i-e*this._virtualCount)}else{const e=this._vidxOffset,i=ii,s=100;this._scrollTop===0?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<i&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,s),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const o=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=o,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-i&&this._vidxOffset<o&&(this._vidxOffset+=Math.min(o-this._vidxOffset,s),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(Xr.prototype,xl);class Il{constructor(t){this.__adapter=new Xr(t)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pl=r=>class extends r{static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer||s.path||s.header)).length}_a11yGetFooterRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer)).length}_a11yUpdateGridSize(e,i){if(e===void 0||i===void 0)return;const s=i[i.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(i)+this._a11yGetFooterRowCount(i)),this.$.table.setAttribute("aria-colcount",s&&s.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){B(this.$.header,(e,i)=>{e.setAttribute("aria-rowindex",i+1)})}_a11yUpdateFooterRows(){B(this.$.footer,(e,i)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+i+1)})}_a11yUpdateRowRowindex(e,i){e.setAttribute("aria-rowindex",i+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,i){e.setAttribute("aria-selected",!!i),Ue(e,s=>{s.setAttribute("aria-selected",!!i)})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,i){i>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",i+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,i){Ue(e,s=>{s!==i&&s.setAttribute("aria-controls",i.id)})}_a11yUpdateCellColspan(e,i){e.setAttribute("aria-colspan",Number(i))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let i=e.parentNode;for(;i&&i.localName!=="vaadin-grid-cell-content";)i=i.parentNode;i&&i.assignedSlot&&i.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tl=r=>{if(!r.parentNode)return!1;const e=Array.from(r.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(i=>{const s=i.getAttribute("part");return!(s&&s.includes("body-cell"))}).includes(r);return!r.disabled&&e&&r.offsetParent&&getComputedStyle(r).visibility!=="hidden"},Rl=r=>class extends r{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const i=e.detail.model,s=i?i.item:null;s&&(this.activeItem=this._itemsEqual(this.activeItem,s)?null:s)}_onClick(e){if(e.defaultPrevented)return;const i=e.composedPath(),s=i[i.indexOf(this.$.table)-3];if(!s||s.getAttribute("part").indexOf("details-cell")>-1)return;const o=s._content,n=this.getRootNode().activeElement;!o.contains(n)&&!this._isFocusable(e.target)&&!(e.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(s.parentElement)}}))}_isFocusable(e){return Tl(e)}};function ke(r,t){return r.split(".").reduce((e,i)=>e[i],t)}function Bs(r,t,e){if(e.length===0)return!1;let i=!0;return r.forEach(({path:s})=>{if(!s||s.indexOf(".")===-1)return;const o=s.replace(/\.[^.]*$/u,"");ke(o,e[0])===void 0&&(console.warn(`Path "${s}" used for ${t} does not exist in all of the items, ${t} is disabled.`),i=!1)}),i}function zt(r){return[void 0,null].indexOf(r)>=0?"":isNaN(r)?r.toString():r}function Vs(r,t){return r=zt(r),t=zt(t),r<t?-1:r>t?1:0}function Ol(r,t){return r.sort((e,i)=>t.map(s=>s.direction==="asc"?Vs(ke(s.path,e),ke(s.path,i)):s.direction==="desc"?Vs(ke(s.path,i),ke(s.path,e)):0).reduce((s,o)=>s!==0?s:o,0))}function Fl(r,t){return r.filter(e=>t.every(i=>{const s=zt(ke(i.path,e)),o=zt(i.value).toString().toLowerCase();return s.toString().toLowerCase().includes(o)}))}const zl=r=>(t,e)=>{let i=r?[...r]:[];t.filters&&Bs(t.filters,"filtering",i)&&(i=Fl(i,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&Bs(t.sortOrders,"sorting",i)&&(i=Ol(i,t.sortOrders));const s=Math.min(i.length,t.pageSize),o=t.page*s,n=o+s,a=i.slice(o,n);e(a,i.length)};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ml=r=>class extends r{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, _filters, _sorters, items.*)"]}__setArrayDataProvider(e){const i=zl(this.items);i.__items=e,this._arrayDataProvider=i,this.size=e.length,this.dataProvider=i}__dataProviderOrItemsChanged(e,i,s){s&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):i?this._arrayDataProvider.__items===i?(this.clearCache(),this.size=this._flatSize):this.__setArrayDataProvider(i):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):i&&this.__setArrayDataProvider(i))}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const kl=!1,Dl=r=>r,$i=typeof document.head.style.touchAction=="string",yi="__polymerGestures",si="__polymerGesturesHandled",bi="__polymerGesturesTouchAction",Gs=25,Us=5,Nl=2,$l=["mousedown","mousemove","mouseup","click"],Ll=[0,1,4,2],Hl=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Li(r){return $l.indexOf(r)>-1}let eo=!1;(function(){try{const r=Object.defineProperty({},"passive",{get(){eo=!0}});window.addEventListener("test",null,r),window.removeEventListener("test",null,r)}catch{}})();function Bl(r){if(!(Li(r)||r==="touchend")&&$i&&eo&&kl)return{passive:!0}}const Vl=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Gl={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Se(r){const t=r.type;if(!Li(t))return!1;if(t==="mousemove"){let i=r.buttons===void 0?1:r.buttons;return r instanceof window.MouseEvent&&!Hl&&(i=Ll[r.which]||0),!!(i&1)}return(r.button===void 0?0:r.button)===0}function Ul(r){if(r.type==="click"){if(r.detail===0)return!0;const t=fe(r);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),i=r.pageX,s=r.pageY;return!(i>=e.left&&i<=e.right&&s>=e.top&&s<=e.bottom)}return!1}const te={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Wl(r){let t="auto";const e=io(r);for(let i=0,s;i<e.length;i++)if(s=e[i],s[bi]){t=s[bi];break}return t}function to(r,t,e){r.movefn=t,r.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function He(r){document.removeEventListener("mousemove",r.movefn),document.removeEventListener("mouseup",r.upfn),r.movefn=null,r.upfn=null}const io=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:r=>r.composedPath&&r.composedPath()||[],Hi={},Ee=[];function jl(r,t){let e=document.elementFromPoint(r,t),i=e;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const s=i;if(i=i.shadowRoot.elementFromPoint(r,t),s===i)break;i&&(e=i)}return e}function fe(r){const t=io(r);return t.length>0?t[0]:r.target}function ql(r){const t=r.type,i=r.currentTarget[yi];if(!i)return;const s=i[t];if(!s)return;if(!r[si]&&(r[si]={},t.startsWith("touch"))){const n=r.changedTouches[0];if(t==="touchstart"&&r.touches.length===1&&(te.touch.id=n.identifier),te.touch.id!==n.identifier)return;$i||(t==="touchstart"||t==="touchmove")&&Yl(r)}const o=r[si];if(!o.skip){for(let n=0,a;n<Ee.length;n++)a=Ee[n],s[a.name]&&!o[a.name]&&a.flow&&a.flow.start.indexOf(r.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<Ee.length;n++)a=Ee[n],s[a.name]&&!o[a.name]&&(o[a.name]=!0,a[t](r))}}function Yl(r){const t=r.changedTouches[0],e=r.type;if(e==="touchstart")te.touch.x=t.clientX,te.touch.y=t.clientY,te.touch.scrollDecided=!1;else if(e==="touchmove"){if(te.touch.scrollDecided)return;te.touch.scrollDecided=!0;const i=Wl(r);let s=!1;const o=Math.abs(te.touch.x-t.clientX),n=Math.abs(te.touch.y-t.clientY);r.cancelable&&(i==="none"?s=!0:i==="pan-x"?s=n>o:i==="pan-y"&&(s=o>n)),s?r.preventDefault():Mt("track")}}function ut(r,t,e){return Hi[t]?(Zl(r,t,e),!0):!1}function Zl(r,t,e){const i=Hi[t],s=i.deps,o=i.name;let n=r[yi];n||(r[yi]=n={});for(let a=0,l,d;a<s.length;a++)l=s[a],!(Vl&&Li(l)&&l!=="click")&&(d=n[l],d||(n[l]=d={_count:0}),d._count===0&&r.addEventListener(l,ql,Bl(l)),d[o]=(d[o]||0)+1,d._count=(d._count||0)+1);r.addEventListener(t,e),i.touchAction&&Ql(r,i.touchAction)}function Bi(r){Ee.push(r),r.emits.forEach(t=>{Hi[t]=r})}function Kl(r){for(let t=0,e;t<Ee.length;t++){e=Ee[t];for(let i=0,s;i<e.emits.length;i++)if(s=e.emits[i],s===r)return e}return null}function Ql(r,t){$i&&r instanceof HTMLElement&&se.run(()=>{r.style.touchAction=t}),r[bi]=t}function Vi(r,t,e){const i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=e,Dl(r).dispatchEvent(i),i.defaultPrevented){const s=e.preventer||e.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function Mt(r){const t=Kl(r);t.info&&(t.info.prevent=!0)}Bi({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){He(this.info)},mousedown(r){if(!Se(r))return;const t=fe(r),e=this,i=o=>{Se(o)||(Ze("up",t,o),He(e.info))},s=o=>{Se(o)&&Ze("up",t,o),He(e.info)};to(this.info,i,s),Ze("down",t,r)},touchstart(r){Ze("down",fe(r),r.changedTouches[0],r)},touchend(r){Ze("up",fe(r),r.changedTouches[0],r)}});function Ze(r,t,e,i){t&&Vi(t,r,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i,prevent(s){return Mt(s)}})}Bi({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(r){this.moves.length>Nl&&this.moves.shift(),this.moves.push(r)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,He(this.info)},mousedown(r){if(!Se(r))return;const t=fe(r),e=this,i=o=>{const n=o.clientX,a=o.clientY;Ws(e.info,n,a)&&(e.info.state=e.info.started?o.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&Mt("tap"),e.info.addMove({x:n,y:a}),Se(o)||(e.info.state="end",He(e.info)),t&&ri(e.info,t,o),e.info.started=!0)},s=o=>{e.info.started&&i(o),He(e.info)};to(this.info,i,s),this.info.x=r.clientX,this.info.y=r.clientY},touchstart(r){const t=r.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(r){const t=fe(r),e=r.changedTouches[0],i=e.clientX,s=e.clientY;Ws(this.info,i,s)&&(this.info.state==="start"&&Mt("tap"),this.info.addMove({x:i,y:s}),ri(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(r){const t=fe(r),e=r.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),ri(this.info,t,e))}});function Ws(r,t,e){if(r.prevent)return!1;if(r.started)return!0;const i=Math.abs(r.x-t),s=Math.abs(r.y-e);return i>=Us||s>=Us}function ri(r,t,e){if(!t)return;const i=r.moves[r.moves.length-2],s=r.moves[r.moves.length-1],o=s.x-r.x,n=s.y-r.y;let a,l=0;i&&(a=s.x-i.x,l=s.y-i.y),Vi(t,"track",{state:r.state,x:e.clientX,y:e.clientY,dx:o,dy:n,ddx:a,ddy:l,sourceEvent:e,hover(){return jl(e.clientX,e.clientY)}})}Bi({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(r){Se(r)&&(this.info.x=r.clientX,this.info.y=r.clientY)},click(r){Se(r)&&js(this.info,r)},touchstart(r){const t=r.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(r){js(this.info,r.changedTouches[0],r)}});function js(r,t,e){const i=Math.abs(t.clientX-r.x),s=Math.abs(t.clientY-r.y),o=fe(e||t);!o||Gl[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(s)||i<=Gs&&s<=Gs||Ul(t))&&(r.prevent||Vi(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jl=r=>class extends r{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),ut(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),Qr||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const i=e.composedPath(),s=i[i.indexOf(this.$.header)-2];if(!s||!s._content||s._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const i=e.composedPath&&e.composedPath();if(i&&i.some(o=>o.hasAttribute&&o.hasAttribute("draggable")))return;const s=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!s||!s.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=s._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(s),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(!i)return;const s=this._getTargetColumn(i,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,s)&&this._isSwappableByPosition(s,e.detail.x)){const o=this._columnTree.findIndex(h=>h.includes(s)),n=this._getColumnsInOrder(o),a=n.indexOf(this._draggedColumn),l=n.indexOf(s),d=a<l?1:-1;for(let h=a;h!==l;h+=d)this._swapColumnOrders(this._draggedColumn,n[h+d])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(i=>!i.hidden).sort((i,s)=>i._order-s._order)}_cellFromPoint(e=0,i=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const s=this.shadowRoot.elementFromPoint(e,i);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),s&&s._column)return s}_updateGhostPosition(e,i){const s=this._reorderGhost.getBoundingClientRect(),o=e-s.width/2,n=i-s.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(s.left-o),this._reorderGhost._top=l-(s.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const i=this._reorderGhost;i.textContent=e._content.innerText;const s=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(o=>{i.style[o]=s[o]}),i}_updateOrders(e){e!==void 0&&(e[0].forEach(i=>{i._order=0}),Vr(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,i){B(e.parentNode,s=>{/column/u.test(s.localName)&&this._isSwapAllowed(s,e)&&(s._reorderStatus=i)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,i=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:i>0&&(this.$.table.scrollLeft-=i/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,i){if(e&&i){const s=e!==i,o=e.parentElement===i.parentElement,n=e.frozen&&i.frozen||e.frozenToEnd&&i.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!i.frozen&&!i.frozenToEnd;return s&&o&&n}}_isSwappableByPosition(e,i){const s=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(a=>e.contains(a._column)),o=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=s.getBoundingClientRect();return n.left>o.left?i>n.right-o.width:i<n.left+o.width}_swapColumnOrders(e,i){[e._order,i._order]=[i._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,i){if(e&&i){let s=e._column;for(;s.parentElement!==i.parentElement&&s!==this;)s=s.parentElement;return s.parentElement===i.parentElement?s:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xl=r=>class extends r{ready(){super.ready();const e=this.$.scroller;ut(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",i=>e.hasAttribute("column-resizing")&&i.preventDefault()),e.addEventListener("contextmenu",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault()),e.addEventListener("mousedown",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault())}_onHeaderTrack(e){const i=e.target;if(i.getAttribute("part")==="resize-handle"){let o=i.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);o.localName==="vaadin-grid-column-group";)o=o._childColumns.slice(0).sort((p,_)=>p._order-_._order).filter(p=>!p.hidden).pop();const n=this.__isRTL,a=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),d=l.find(p=>p._column===o);if(d.offsetWidth){const p=getComputedStyle(d._content),_=10+parseInt(p.paddingLeft)+parseInt(p.paddingRight)+parseInt(p.borderLeftWidth)+parseInt(p.borderRightWidth)+parseInt(p.marginLeft)+parseInt(p.marginRight);let f;const m=d.offsetWidth,y=d.getBoundingClientRect();d.hasAttribute("frozen-to-end")?f=m+(n?a-y.right:y.left-a):f=m+(n?y.left-a:a-y.right),o.width=`${Math.max(_,f)}px`,o.flexGrow=0}l.sort((p,_)=>p._column._order-_._column._order).forEach((p,_,f)=>{_<f.indexOf(d)&&(p._column.width=`${p.offsetWidth}px`,p._column.flexGrow=0)});const h=this._frozenToEndCells[0];if(h&&this.$.table.scrollWidth>this.$.table.offsetWidth){const p=h.getBoundingClientRect(),_=a-(n?p.right:p.left);(n&&_<=0||!n&&_>=0)&&(this.$.table.scrollLeft+=_)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function kt(r,t,e=0){let i=t;for(const s of r.subCaches){const o=s.parentCacheIndex;if(i<=o)break;if(i<=o+s.flatSize)return kt(s,i-o-1,e+1);i-=s.flatSize}return{cache:r,item:r.items[i],index:i,page:Math.floor(i/r.pageSize),level:e}}function so({getItemId:r},t,e,i=0,s=0){for(let o=0;o<t.items.length;o++){const n=t.items[o];if(n&&r(n)===r(e))return{cache:t,level:i,item:n,index:o,page:Math.floor(o/t.pageSize),subCache:t.getSubCache(o),flatIndex:s+t.getFlatIndex(o)}}for(const o of t.subCaches){const n=s+t.getFlatIndex(o.parentCacheIndex),a=so({getItemId:r},o,e,i+1,n+1);if(a)return a}}function ro(r,[t,...e],i=0){t===1/0&&(t=r.size-1);const s=r.getFlatIndex(t),o=r.getSubCache(t);return o&&o.flatSize>0&&e.length?ro(o,e,i+s+1):i+s}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gi{constructor(t,e,i,s,o){z(this,"context");z(this,"size",0);z(this,"pageSize");z(this,"items",[]);z(this,"pendingRequests",{});z(this,"__subCacheByIndex",{});z(this,"__flatSize",0);this.context=t,this.pageSize=e,this.size=i||0,this.parentCache=s,this.parentCacheIndex=o,this.__flatSize=i||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(t=>t.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((t,e)=>(e.recalculateFlatSize(),t+e.flatSize),0):0}setPage(t,e){const i=t*this.pageSize;e.forEach((s,o)=>{this.items[i+o]=s})}getSubCache(t){return this.__subCacheByIndex[t]}removeSubCache(t){delete this.__subCacheByIndex[t]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(t){const e=new Gi(this.context,this.pageSize,0,this,t);return this.__subCacheByIndex[t]=e,e}getFlatIndex(t){const e=Math.max(0,Math.min(this.size-1,t));return this.subCaches.reduce((i,s)=>{const o=s.parentCacheIndex;return e>o?i+s.flatSize:i},e)}getItemForIndex(t){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:e}=kt(this,t);return e}getCacheAndIndex(t){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:e,index:i}=kt(this,t);return{cache:e,scaledIndex:i}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(t){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(t)){const e=this.createSubCache(t);this.context.__controller.__loadCachePage(e,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ed extends EventTarget{constructor(e,{size:i,pageSize:s,isExpanded:o,getItemId:n,dataProvider:a,dataProviderParams:l}){super();z(this,"host");z(this,"dataProvider");z(this,"dataProviderParams");z(this,"size");z(this,"pageSize");z(this,"isExpanded");z(this,"getItemId");z(this,"rootCache");this.host=e,this.pageSize=s,this.getItemId=n,this.isExpanded=o,this.dataProvider=a,this.dataProviderParams=l,this.rootCache=this.__createRootCache(i)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(e){this.pageSize=e,this.clearCache()}setDataProvider(e){this.dataProvider=e,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(e){return kt(this.rootCache,e)}getItemContext(e){return so({getItemId:this.getItemId},this.rootCache,e)}getFlatIndexByPath(e){return ro(this.rootCache,e)}ensureFlatIndexLoaded(e){const{cache:i,page:s,item:o}=this.getFlatIndexContext(e);o||this.__loadCachePage(i,s)}ensureFlatIndexHierarchy(e){const{cache:i,item:s,index:o}=this.getFlatIndexContext(e);if(s&&this.isExpanded(s)&&!i.getSubCache(o)){const n=i.createSubCache(o);this.__loadCachePage(n,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(e){return new Gi(this.__cacheContext,this.pageSize,e)}__loadCachePage(e,i){if(!this.dataProvider||e.pendingRequests[i])return;let s={page:i,pageSize:this.pageSize,parentItem:e.parentItem};this.dataProviderParams&&(s={...s,...this.dataProviderParams()});const o=(n,a)=>{a!==void 0?e.size=a:s.parentItem&&(e.size=n.length),e.setPage(i,n),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete e.pendingRequests[i],this.dispatchEvent(new CustomEvent("page-loaded"))};e.pendingRequests[i]=o,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(s,o)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const td=r=>class extends r{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new ed(this,{size:this.size,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,i){!i&&e==="children"||this.requestContentUpdate()}_getItem(e,i){if(e>=this._flatSize)return;i.index=e;const{item:s}=this._dataProviderController.getFlatIndexContext(e);s?(this.__updateLoading(i,!1),this._updateItem(i,s),this._isExpanded(s)&&this._dataProviderController.ensureFlatIndexHierarchy(e)):(this.__updateLoading(i,!0),this._dataProviderController.ensureFlatIndexLoaded(e))}__updateLoading(e,i){const s=Ge(e);Bt(e,"loading",i),ce(s,"loading-row-cell",i)}getItemId(e){return this.itemIdPath?Mi(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,i){const s=i||[],o=new Set;return s.forEach(n=>{o.add(this.getItemId(n))}),o}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(i=>!this._itemsEqual(i,e)))}_getIndexLevel(e=0){const{level:i}=this._dataProviderController.getFlatIndexContext(e);return i}_loadPage(e,i){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(i,e)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize=this._dataProviderController.flatSize,this._getRenderedRows().forEach(e=>{this._dataProviderController.ensureFlatIndexHierarchy(e.index)}),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=x.debounce(this._debouncerApplyCachedData,pe.after(0),()=>{this._setLoading(!1),this._getRenderedRows().forEach(e=>{const{item:i}=this._dataProviderController.getFlatIndexContext(e.index);i&&this._getItem(e.index,e)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=x.debounce(this.__clearCacheDebouncer,se,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),(!this.__virtualizer||!this.__virtualizer.size)&&this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,i){this._dataProviderController.setPageSize(e),i!==void 0&&e!==i&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,i){this._dataProviderController.setDataProvider(e?e.bind(this):null),i!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=x.debounce(this._debouncerCheckSize,pe.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,i){return this.getItemId(e)===this.getItemId(i)}_getItemIndexInArray(e,i){let s=-1;return i.forEach((o,n)=>{this._itemsEqual(o,e)&&(s=n)}),s}scrollToIndex(...e){let i;for(;i!==(i=this._dataProviderController.getFlatIndexByPath(e));)this._scrollToFlatIndex(i);(this._dataProviderController.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndexes=e)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ke={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},ne={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},id=!("draggable"in document.createElement("div")),sd=r=>class extends r{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let i=e.target;if(i.localName==="vaadin-grid-cell-content"&&(i=i.assignedSlot.parentNode.parentNode),i.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const a=i.style.transform;i.style.top=/translateY\((.*)\)/u.exec(a)[1],i.style.transform="none",requestAnimationFrame(()=>{i.style.top="",i.style.transform=a})}const s=i.getBoundingClientRect();id?e.dataTransfer.setDragImage(i):e.dataTransfer.setDragImage(i,e.clientX-s.left,e.clientY-s.top);let o=[i];this._isSelected(i._item)&&(o=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(o)),rt(i,{dragstart:o.length>1?`${o.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-s.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-s.top+10}px`),requestAnimationFrame(()=>{rt(i,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y","")});const n=new CustomEvent("grid-dragstart",{detail:{draggedItems:o.map(a=>a._item),setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>i.setAttribute("dragstart",a)}});n.originalEvent=e,this.dispatchEvent(n)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const i=new CustomEvent("grid-dragend");i.originalEvent=e,this.dispatchEvent(i)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let i=e.composedPath().find(s=>s.localName==="tr");if(!this._flatSize||this.dropMode===Ke.ON_GRID)this._dropLocation=ne.EMPTY;else if(!i||i.parentNode!==this.$.items){if(i)return;if(this.dropMode===Ke.BETWEEN||this.dropMode===Ke.ON_TOP_OR_BETWEEN)i=Array.from(this.$.items.children).filter(s=>!s.hidden).pop(),this._dropLocation=ne.BELOW;else return}else{const s=i.getBoundingClientRect();if(this._dropLocation=ne.ON_TOP,this.dropMode===Ke.BETWEEN){const o=e.clientY-s.top<s.bottom-e.clientY;this._dropLocation=o?ne.ABOVE:ne.BELOW}else this.dropMode===Ke.ON_TOP_OR_BETWEEN&&(e.clientY-s.top<s.height/3?this._dropLocation=ne.ABOVE:e.clientY-s.top>s.height/3*2&&(this._dropLocation=ne.BELOW))}if(i&&i.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===ne.EMPTY?this.toggleAttribute("dragover",!0):i?(this._dragOverItem=i._item,i.getAttribute("dragover")!==this._dropLocation&&Ms(i,{dragover:this._dropLocation})):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const i=this.$.header.getBoundingClientRect().bottom,s=this.$.footer.getBoundingClientRect().top,o=i-e+this.__dndAutoScrollThreshold,n=e-s+this.__dndAutoScrollThreshold;let a=0;if(n>0?a=n*2:o>0&&(a=-o*2),a){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(s=>{const o=s.getBoundingClientRect();return o.bottom>e&&o.top<i})}_clearDragStyles(){this.removeAttribute("dragover"),B(this.$.items,e=>{Ms(e,{dragover:null})})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const i=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(o=>({type:o,data:e.dataTransfer.getData(o)}));this._clearDragStyles();const s=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:i}});s.originalEvent=e,this.dispatchEvent(s)}}__formatDefaultTransferData(e){return e.map(i=>Array.from(i.children).filter(s=>!s.hidden&&s.getAttribute("part").indexOf("details-cell")===-1).sort((s,o)=>s._column._order>o._column._order?1:-1).map(s=>s._content.textContent.trim()).filter(s=>s).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){B(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,i){const s=this.loading||e.hasAttribute("loading"),o=!this.rowsDraggable||s||this.dragFilter&&!this.dragFilter(i),n=!this.dropMode||s||this.dropFilter&&!this.dropFilter(i);Ue(e,a=>{o?a._content.removeAttribute("draggable"):a._content.setAttribute("draggable",!0)}),rt(e,{"drag-disabled":!!o,"drop-disabled":!!n})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function oo(r,t){if(!r||!t||r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]instanceof Array&&t[e]instanceof Array){if(!oo(r[e],t[e]))return!1}else if(r[e]!==t[e])return!1;return!0}const rd=r=>class extends r{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(i=>i.localName==="vaadin-grid-column-group")}_getChildColumns(e){return _e.getColumns(e)}_flattenColumnGroups(e){return e.map(i=>i.localName==="vaadin-grid-column-group"?this._getChildColumns(i):[i]).reduce((i,s)=>i.concat(s),[])}_getColumnTree(){const e=_e.getColumns(this),i=[e];let s=e;for(;this._hasColumnGroups(s);)s=this._flattenColumnGroups(s),i.push(s);return i}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=x.debounce(this.__updateColumnTreeDebouncer,se,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();oo(e,this._columnTree)||(e.forEach(i=>{i.forEach(s=>{s.performUpdate&&s.performUpdate()})}),this._columnTree=e)}_addNodeObserver(){this._observer=new _e(this,(e,i)=>{const s=i.flatMap(n=>n._allCells),o=n=>s.filter(a=>a&&a._content.contains(n)).length;this.__removeSorters(this._sorters.filter(o)),this.__removeFilters(this._filters.filter(o)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=x.debounce(this._debouncerCheckImports,pe.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((i,s)=>i._column._order-s._column._order).forEach((i,s,o)=>{Ce(i,"first-column",s===0),Ce(i,"last-column",s===o.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const od=r=>class extends r{getEventContext(e){const i={},s=e.__composedPath||e.composedPath(),o=s[s.indexOf(this.$.table)-3];return o&&(i.section=["body","header","footer","details"].find(n=>o.getAttribute("part").indexOf(n)>-1),o._column&&(i.column=o._column),(i.section==="body"||i.section==="details")&&Object.assign(i,this.__getRowModel(o.parentElement))),i}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nd=r=>class extends r{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(i=>e.indexOf(i)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ad=r=>class extends r{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(i=>{const s=this[i];if(e){const o=s&&s.parentElement;this.__isCell(s)?this[i]=o:this.__isCell(o)&&(this[i]=o.parentElement)}else if(!e&&this.__isRow(s)){const o=s.firstElementChild;this[i]=o._focusButton||o}})}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,i){i&&i.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,i){i&&Br(i,"part","focused-cell"),e&&Hr(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(i=>{if(i.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=i;else{let s=this._itemsFocusable.parentElement,o=this._itemsFocusable;if(s){this.__isCell(s)&&(o=s,s=s.parentElement);const n=[...s.children].indexOf(o);this._itemsFocusable=this.__getFocusable(i,i.children[n])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const i=e.key;let s;switch(i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":s="Navigation";break;case"Enter":case"Escape":case"F2":s="Interaction";break;case"Tab":s="Tab";break;case" ":s="Space";break}this._detectInteracting(e),this.interacting&&s!=="Interaction"&&(s=void 0),s&&this[`_on${s}KeyDown`](e,i)}_ensureScrolledToIndex(e){[...this.$.items.children].find(s=>s.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const i=e._item;return!!(i&&Mi(this.itemHasChildrenPath,i)&&!this._isExpanded(i))}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,i){e.preventDefault();const s=this.__isRTL,o=e.composedPath().find(p=>this.__isRow(p)),n=e.composedPath().find(p=>this.__isCell(p));let a=0,l=0;switch(i){case"ArrowRight":a=s?-1:1;break;case"ArrowLeft":a=s?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?l=-1/0:a=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?l=1/0:a=1/0;break;case"ArrowDown":l=1;break;case"ArrowUp":l=-1;break;case"PageDown":if(this.$.items.contains(o)){const p=this.__getIndexInGroup(o,this._focusedItemIndex);this._scrollToFlatIndex(p)}l=this._visibleItemsCount;break;case"PageUp":l=-this._visibleItemsCount;break}if(this.__rowFocusMode&&!o||!this.__rowFocusMode&&!n)return;const d=s?"ArrowLeft":"ArrowRight",h=s?"ArrowRight":"ArrowLeft";if(i===d){if(this.__rowFocusMode){if(this.__isRowExpandable(o)){this.expandItem(o._item);return}this.__rowFocusMode=!1,this._onCellNavigation(o.firstElementChild,0,0);return}}else if(i===h)if(this.__rowFocusMode){if(this.__isRowCollapsible(o)){this.collapseItem(o._item);return}}else{const p=[...o.children].sort((_,f)=>_._order-f._order);if(n===p[0]||this.__isDetailsCell(n)){this.__rowFocusMode=!0,this._onRowNavigation(o,0);return}}this.__rowFocusMode?this._onRowNavigation(o,l):this._onCellNavigation(n,a,l)}_onRowNavigation(e,i){const{dstRow:s}=this.__navigateRows(i,e);s&&s.focus()}__getIndexInGroup(e,i){return e.parentNode===this.$.items?i!==void 0?i:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,i,s){const o=this.__getIndexInGroup(i,this._focusedItemIndex),n=i.parentNode,a=(n===this.$.items?this._flatSize:n.children.length)-1;let l=Math.max(0,Math.min(o+e,a));if(n!==this.$.items){if(l>o)for(;l<a&&n.children[l].hidden;)l+=1;else if(l<o)for(;l>0&&n.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:n.children[l]}}let d=!1;if(s){const h=this.__isDetailsCell(s);if(n===this.$.items){const p=i._item,{item:_}=this._dataProviderController.getFlatIndexContext(l);h?d=e===0:d=e===1&&this._isDetailsOpened(p)||e===-1&&l!==o&&this._isDetailsOpened(_),d!==h&&(e===1&&d||e===-1&&!d)&&(l=o)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...n.children].find(h=>!h.hidden&&h.index===l),dstIsRowDetails:d}}_onCellNavigation(e,i,s){const o=e.parentNode,{dstRow:n,dstIsRowDetails:a}=this.__navigateRows(s,o,e);if(!n)return;let l=this.__getIndexOfChildElement(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(_=>_._column===e._column));const d=this.__isDetailsCell(e),h=o.parentNode,p=this.__getIndexInGroup(o,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(d?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(h,p).filter(_=>!_.hidden)[l]._order),a)[...n.children].find(f=>this.__isDetailsCell(f)).focus();else{const _=this.__getIndexInGroup(n,this._focusedItemIndex),f=this._getColumns(h,_).filter(R=>!R.hidden),m=f.map(R=>R._order).sort((R,Z)=>R-Z),y=m.length-1,I=m.indexOf(m.slice(0).sort((R,Z)=>Math.abs(R-this._focusedColumnOrder)-Math.abs(Z-this._focusedColumnOrder))[0]),P=s===0&&d?I:Math.max(0,Math.min(I+i,y));P!==I&&(this._focusedColumnOrder=void 0);const $=f.reduce((R,Z,X)=>(R[Z._order]=X,R),{})[m[P]];let j;if(this.$.items.contains(e)){const R=this.$.sizer.children[$];this._lazyColumns&&(this.__isColumnInViewport(R._column)||R.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),j=[...n.children].find(Z=>Z._column===R._column),this._scrollHorizontallyToCell(j)}else j=n.children[$],this._scrollHorizontallyToCell(j);j.focus()}}_onInteractionKeyDown(e,i){const s=e.composedPath()[0],o=s.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(s.type);let n;switch(i){case"Enter":n=this.interacting?!o:!0;break;case"Escape":n=!1;break;case"F2":n=!this.interacting;break}const{cell:a}=this._getGridEventLocation(e);if(this.interacting!==n&&a!==null)if(n){const l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(d=>this._isFocusable(d));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);i==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,i){const s=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let o=s.indexOf(e);for(o+=i;o>=0&&o<=s.length-1;){let a=s[o];if(a&&!this.__rowFocusMode&&(a=s[o].parentNode),!a||a.hidden)o+=i;else break}let n=s[o];if(n&&!this.__isHorizontallyInViewport(n)){const a=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(a)if(n===this._headerFocusable)n=a._headerCell;else if(n===this._itemsFocusable){const l=n._column._cells.indexOf(n);n=a._cells[l]}else n===this._footerFocusable&&(n=a._footerCell)}return n}_onTabKeyDown(e){const i=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(i){if(e.stopPropagation(),i===this.$.table)this.$.table.focus();else if(i===this.$.focusexit)this.$.focusexit.focus();else if(i===this._itemsFocusable){let s=i;const o=this.__isRow(i)?i:i.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),o.index!==this._focusedItemIndex&&this.__isCell(i)){const n=Array.from(o.children).indexOf(this._itemsFocusable),a=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);a&&(s=a.children[n])}e.preventDefault(),s.focus()}else e.preventDefault(),i.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const i=e.composedPath()[0],s=this.__isRow(i);(s||!i._content||!i._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(s?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(s?i:i.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const i=e.composedPath()[0];if(i._content&&i._content.firstElementChild){const s=this.hasAttribute("navigating");i._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",s)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const i=e.composedPath()[0];i===this.$.table||i===this.$.focusexit?(this._predictFocusStepTarget(i,i===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:i,cell:s,row:o}=this._getGridEventLocation(e);if(!(!s&&!this.__rowFocusMode)){if(this._detectInteracting(e),i&&(s||o))if(this._activeRowGroup=i,this.$.header===i?this._headerFocusable=this.__getFocusable(o,s):this.$.items===i?this._itemsFocusable=this.__getFocusable(o,s):this.$.footer===i&&(this._footerFocusable=this.__getFocusable(o,s)),s){const n=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&n.section==="body",this.__pendingBodyCellFocus||s.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:n}})),this._focusedCell=s._focusButton||s,Yr()&&e.target===s&&this._showTooltip(e)}else this._focusedCell=null;this._detectFocusedItemIndex(e)}}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,i){return this.__rowFocusMode?e:i._focusButton||i}_detectInteracting(e){const i=e.composedPath().some(s=>s.localName==="vaadin-grid-cell-content");this._setInteracting(i),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:i,row:s}=this._getGridEventLocation(e);i===this.$.items&&(this._focusedItemIndex=s.index)}_updateGridSectionFocusTarget(e){if(!e)return;const i=this._getGridSectionFromFocusTarget(e),s=this.interacting&&i===this._activeRowGroup;e.tabIndex=s?-1:0}_preventScrollerRotatingCellFocus(e,i){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),i===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,i){let s=this._columnTree.length-1;return e===this.$.header?s=i:e===this.$.footer&&(s=this._columnTree.length-1-i),this._columnTree[s]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const i=[...this.$[e].children].find(o=>o.offsetHeight),s=i?[...i.children].find(o=>!o.hidden):null;i&&s&&(this[`_${e}Focusable`]=this.__getFocusable(i,s))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),i=e?[...e.children].find(s=>!s.hidden):null;i&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,i))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const i=e.getBoundingClientRect(),s=e.parentNode,o=Array.from(s.children).indexOf(e),n=this.$.table.getBoundingClientRect();let a=n.left,l=n.right;for(let d=o-1;d>=0;d--){const h=s.children[d];if(!(h.hasAttribute("hidden")||this.__isDetailsCell(h))&&(h.hasAttribute("frozen")||h.hasAttribute("frozen-to-end"))){a=h.getBoundingClientRect().right;break}}for(let d=o+1;d<s.children.length;d++){const h=s.children[d];if(!(h.hasAttribute("hidden")||this.__isDetailsCell(h))&&(h.hasAttribute("frozen")||h.hasAttribute("frozen-to-end"))){l=h.getBoundingClientRect().left;break}}i.left<a&&(this.$.table.scrollLeft+=Math.round(i.left-a)),i.right>l&&(this.$.table.scrollLeft+=Math.round(i.right-l))}_getGridEventLocation(e){const i=e.composedPath(),s=i.indexOf(this.$.table),o=s>=1?i[s-1]:null,n=s>=2?i[s-2]:null,a=s>=3?i[s-3]:null;return{section:o,row:n,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ld=r=>class extends r{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:i})=>{this._updateDetailsCellHeight(i.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&B(this.$.items,i=>{if(!i.querySelector("[part~=details-cell]")){this._updateRow(i,this._columnTree[this._columnTree.length-1]);const s=this._isDetailsOpened(i._item);this._toggleDetailsCell(i,s)}})}_detailsOpenedItemsChanged(e,i){B(this.$.items,s=>{if(s.hasAttribute("details-opened")){this._updateItem(s,s._item);return}i&&this._isDetailsOpened(s._item)&&this._updateItem(s,s._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,i){const s=e.querySelector('[part~="details-cell"]');s&&(s.hidden=!i,!s.hidden&&this.rowDetailsRenderer&&(s._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const i=e.querySelector('[part~="details-cell"]');i&&(this.__updateDetailsRowPadding(e,i),requestAnimationFrame(()=>this.__updateDetailsRowPadding(e,i)))}__updateDetailsRowPadding(e,i){i.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${i.offsetHeight}px`)}_updateDetailsCellHeights(){B(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(i=>!this._itemsEqual(i,e)))}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gt=document.createElement("div");Gt.style.position="fixed";Gt.style.clip="rect(0px, 0px, 0px, 0px)";Gt.setAttribute("aria-live","polite");document.body.appendChild(Gt);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dd=D(r=>class extends r{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hd=r=>class extends Di(dd(r)){get _activeKeys(){return[" "]}ready(){super.ready(),ut(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),ut(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",i=>{this._activeKeys.includes(i.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cd=D(r=>class extends r{get _keyboardActive(){return Yr()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ud=D(r=>class extends cd(Zr(r)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,i){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):i&&this._removeFocusListeners(i)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,i){super._disabledChanged(e,i),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function qs(r,t){const{scrollLeft:e}=r;return t!=="rtl"?e:r.scrollWidth-r.clientWidth+e}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yt=new ResizeObserver(r=>{setTimeout(()=>{r.forEach(t=>{t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),pd=D(r=>class extends r{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),yt.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,yt.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),yt.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const i=e.resizables;i&&(i.delete(this),i.size===0&&yt.unobserve(e)),this.__parent=null}}_onResize(e){}});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ys={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},_d=r=>class extends pd(r){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const i=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[i-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!Ft(this);e&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const i=[...this.$.items.children].find(s=>s.index===e);if(i){const s=i.getBoundingClientRect(),o=this.$.footer.getBoundingClientRect().top,n=this.$.header.getBoundingClientRect().bottom;s.bottom>o?this.$.table.scrollTop+=s.bottom-o:s.top<n&&(this.$.table.scrollTop-=n-s.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=x.debounce(this._debounceScrolling,pe.after(Ys.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=x.debounce(this._debounceColumnContentVisibility,pe.after(Ys.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!Ft(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree)return;const e=this._getColumnsInOrder();if(!e[0]||!e[0]._sizerCell)return;let i=!1;if(e.forEach(s=>{const o=this._lazyColumns&&!this.__isColumnInViewport(s);s._bodyContentHidden!==o&&(i=!0,s._cells.forEach(n=>{if(n!==s._sizerCell){if(o)n.remove();else if(n.__parentRow){const a=[...n.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(s));n.__parentRow.insertBefore(n,a)}}})),s._bodyContentHidden=o}),i&&this._frozenCellsChanged(),this._lazyColumns){const s=[...e].reverse().find(a=>a.frozen),o=this.__getColumnEnd(s),n=e.find(a=>!a.frozen&&!a._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(n)-o,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,i){i==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",i),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=x.debounce(this._debounceOverflow,me,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="";const i=this.$.table;i.scrollTop<i.scrollHeight-i.clientHeight&&(e+=" bottom"),i.scrollTop>0&&(e+=" top");const s=qs(i,this.getAttribute("dir"));s>0&&(e+=" start"),s<i.scrollWidth-i.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,n=>n==="start"?"end":"start")),i.scrollLeft<i.scrollWidth-i.clientWidth&&(e+=" right"),i.scrollLeft>0&&(e+=" left");const o=e.trim();o.length>0&&this.getAttribute("overflow")!==o?this.setAttribute("overflow",o):o.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=x.debounce(this._debouncerCacheElements,se,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=x.debounce(this.__debounceUpdateFrozenColumn,se,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((o,n)=>o._order-n._order);let i,s;for(let o=0;o<e.length;o++){const n=e[o];n._lastFrozen=!1,n._firstFrozenToEnd=!1,s===void 0&&n.frozenToEnd&&!n.hidden&&(s=o),n.frozen&&!n.hidden&&(i=o)}i!==void 0&&(e[i]._lastFrozen=!0),s!==void 0&&(e[s]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,i=this.$.table.clientWidth,s=Math.max(0,this.$.table.scrollLeft),o=qs(this.$.table,this.getAttribute("dir")),n=`translate(${-s}px, 0)`;this.$.header.style.transform=n,this.$.footer.style.transform=n,this.$.items.style.transform=n;const a=this.__isRTL?o+i-e:s,l=`translate(${a}px, 0)`;this._frozenCells.forEach(_=>{_.style.transform=l});const d=this.__isRTL?o:s+i-e,h=`translate(${d}px, 0)`;let p=h;if(this._lazyColumns){const _=this._getColumnsInOrder(),f=[..._].reverse().find(S=>!S.frozenToEnd&&!S._bodyContentHidden),m=this.__getColumnEnd(f),y=_.find(S=>S.frozenToEnd),I=this.__getColumnStart(y);p=`translate(${d+(I-m)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(_=>{this.$.items.contains(_)?_.style.transform=p:_.style.transform=h}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-a}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fd=r=>class extends r{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(i=>!this._itemsEqual(i,e)))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,i){const s=i||[],o=new Set;return s.forEach(n=>{o.add(this.getItemId(n))}),o}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Zs="prepend";const md=r=>class extends r{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>Zs},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){Zs=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const i=e.target;e.stopPropagation(),i._grid=this,this.__updateSorter(i,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(i=>e.indexOf(i)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,i)=>{e._order=this._sorters.length>1?i:null})}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e,i,s){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!s)||this.multiSortOnShiftClick&&i)this.multiSortPriority==="append"?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction||this.multiSortOnShiftClick){const o=this._sorters.filter(n=>n!==e);this._sorters=e.direction?[e]:[],o.forEach(n=>{n._order=null,n.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,i){const s=e.indexOf(i);s>-1&&e.splice(s,1)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gd=r=>class extends r{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){B(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){B(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,i){Ue(e,s=>{if(s.__generatedClasses&&s.__generatedClasses.forEach(o=>s.classList.remove(o)),this.cellClassNameGenerator){const o=this.cellClassNameGenerator(s._column,i);s.__generatedClasses=o&&o.split(" ").filter(n=>n.length>0),s.__generatedClasses&&s.__generatedClasses.forEach(n=>s.classList.add(n))}})}_generateCellPartNames(e,i){Ue(e,s=>{if(s.__generatedParts&&s.__generatedParts.forEach(o=>{ge(s,null,o)}),this.cellPartNameGenerator){const o=this.cellPartNameGenerator(s._column,i);s.__generatedParts=o&&o.split(" ").filter(n=>n.length>0),s.__generatedParts&&s.__generatedParts.forEach(n=>{ge(s,!0,n)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yd=r=>class extends Ml(td(rd(Rl(_d(fd(md(ld(ad(Pl(nd(Jl(Xl(od(sd(gd(Zr(r))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:Kr},_ios:{type:Boolean,value:$s},_firefox:{type:Boolean,value:yl},_android:{type:Boolean,value:Ns},_touchDevice:{type:Boolean,value:Qr},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const t=this.__getFirstVisibleItem();return t?t.index:void 0}get _lastVisibleIndex(){const t=this.__getLastVisibleItem();return t?t.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(t=>this._isInViewport(t))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(t=>this._isInViewport(t))}_isInViewport(t){const e=this.$.table.getBoundingClientRect(),i=t.getBoundingClientRect(),s=this.$.header.getBoundingClientRect().height,o=this.$.footer.getBoundingClientRect().height;return i.bottom>e.top+s&&i.top<e.bottom-o}_getRenderedRows(){return Array.from(this.$.items.children).filter(t=>!t.hidden).sort((t,e)=>t.index-e.index)}_getRowContainingNode(t){const e=Nr("vaadin-grid-cell-content",t);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(t,e){const i=this.__getRowModel(e);return this.getItemId(t)===this.getItemId(i.item)}ready(){super.ready(),this.__virtualizer=new Il({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})).observe(this.$.table),Dr(this),this._tooltipController=new Jr(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&t.localName==="td")return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){const i=this._getRenderedRows().find(o=>o._item===t),s=i&&[...i.children].find(o=>o._column===e);s&&s.focus()}_focusFirstVisibleRow(){const t=this.__getFirstVisibleItem();this.__rowFocusMode=!0,t.focus()}_flatSizeChanged(t,e,i,s){if(e&&i&&s){const o=this.shadowRoot.activeElement,n=this.__getBodyCellCoordinates(o),a=e.size||0;e.size=t,e.update(a-1,a-1),t<a&&e.update(t-1,t-1),n&&o.parentElement.hidden&&this.__focusBodyCell(n),this._resetKeyboardNavigation()}}__getIntrinsicWidth(t){return this.__intrinsicWidthCache.has(t)||this.__calculateAndCacheIntrinsicWidths([t]),this.__intrinsicWidthCache.get(t)}__getDistributedWidth(t,e){if(t==null||t===this)return 0;const i=Math.max(this.__getIntrinsicWidth(t),this.__getDistributedWidth((t.assignedSlot||t).parentElement,t));if(!e)return i;const s=t,o=i,n=s._visibleChildColumns.map(h=>this.__getIntrinsicWidth(h)).reduce((h,p)=>h+p,0),a=Math.max(0,o-n),d=this.__getIntrinsicWidth(e)/n*a;return this.__getIntrinsicWidth(e)+d}_recalculateColumnWidths(t){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(s=>{s.__debounceUpdateHeaderFooterRowVisibility&&s.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map;const e=this._firstVisibleIndex,i=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(s=>s.index>=e&&s.index<=i),this.__calculateAndCacheIntrinsicWidths(t),t.forEach(s=>{s.width=`${this.__getDistributedWidth(s)}px`})}__setVisibleCellContentAutoWidth(t,e){t._allCells.filter(i=>this.$.items.contains(i)?this.__viewportRowsCache.includes(i.parentElement):!0).forEach(i=>{i.__measuringAutoWidth=e,i.__measuringAutoWidth?(i.__originalWidth=i.style.width,i.style.width="auto",i.style.position="absolute"):(i.style.width=i.__originalWidth,delete i.__originalWidth,i.style.position="")})}__getAutoWidthCellsMaxWidth(t){return t._allCells.reduce((e,i)=>i.__measuringAutoWidth?Math.max(e,i.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(t){t.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),t.forEach(e=>{const i=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,i)}),t.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this._columnTree)return;if(Ft(this)||this._dataProviderController.isLoading()){this.__pendingRecalculateColumnWidths=!0;return}const t=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(t)}__tryToRecalculateColumnWidthsIfPending(){if(!this.__pendingRecalculateColumnWidths||Ft(this)||this._dataProviderController.isLoading()||[...this.$.items.children].some(i=>i.index===void 0))return;[...this.$.items.children].some(i=>i.clientHeight>0)&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(t){const e=[];for(let i=0;i<t;i++){const s=document.createElement("tr");s.setAttribute("part","row body-row"),s.setAttribute("role","row"),s.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(s,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(s)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(i=>{i.isConnected&&i._cells&&(i._cells=[...i._cells])}),this.__afterCreateScrollerRowsDebouncer=x.debounce(this.__afterCreateScrollerRowsDebouncer,me,()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()}),e}_createCell(t,e){const s=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,o=document.createElement("vaadin-grid-cell-content");o.setAttribute("slot",s);const n=document.createElement(t);n.id=s.replace("-content-","-"),n.setAttribute("role",t==="td"?"gridcell":"columnheader"),!Ns&&!$s&&(n.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),n.addEventListener("mouseleave",()=>{this._hideTooltip()}),n.addEventListener("mousedown",()=>{this._hideTooltip(!0)})),e&&e._onCellKeyDown&&n.addEventListener("keydown",e._onCellKeyDown.bind(e));const a=document.createElement("slot");if(a.setAttribute("name",s),e&&e._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),n.appendChild(l),n._focusButton=l,n.focus=function(){n._focusButton.focus()},l.appendChild(a)}else n.setAttribute("tabindex","-1"),n.appendChild(a);return n._content=o,o.addEventListener("mousedown",()=>{if(gl){const l=d=>{const h=o.contains(this.getRootNode().activeElement),p=d.composedPath().includes(o);!h&&p&&n.focus(),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{o.contains(this.getRootNode().activeElement)||n.focus()})}),n}_updateRow(t,e,i="body",s=!1,o=!1){const n=document.createDocumentFragment();Ue(t,a=>{a._vacant=!0}),t.innerHTML="",i==="body"&&(t.__cells=[],t.__detailsCell=null),e.filter(a=>!a.hidden).forEach((a,l,d)=>{let h;if(i==="body"){a._cells||(a._cells=[]),h=a._cells.find(_=>_._vacant),h||(h=this._createCell("td",a),a._cells.push(h)),h.setAttribute("part","cell body-cell"),h.__parentRow=t,t.__cells.push(h);const p=t===this.$.sizer;if((!a._bodyContentHidden||p)&&t.appendChild(h),p&&(a._sizerCell=h),l===d.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const _=this._detailsCells.find(f=>f._vacant)||this._createCell("td");this._detailsCells.indexOf(_)===-1&&this._detailsCells.push(_),_._content.parentElement||n.appendChild(_._content),this._configureDetailsCell(_),t.appendChild(_),t.__detailsCell=_,this._a11ySetRowDetailsCell(t,_),_._vacant=!1}o||(a._cells=[...a._cells])}else{const p=i==="header"?"th":"td";s||a.localName==="vaadin-grid-column-group"?(h=a[`_${i}Cell`]||this._createCell(p,a),h._column=a,t.appendChild(h),a[`_${i}Cell`]=h):(a._emptyCells||(a._emptyCells=[]),h=a._emptyCells.find(_=>_._vacant)||this._createCell(p),h._column=a,t.appendChild(h),a._emptyCells.indexOf(h)===-1&&a._emptyCells.push(h)),h.part.add("cell",`${i}-cell`)}h._content.parentElement||n.appendChild(h._content),h._vacant=!1,h._column=a}),i!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(t),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__debounceUpdateHeaderFooterRowVisibility(t){t.__debounceUpdateHeaderFooterRowVisibility=x.debounce(t.__debounceUpdateHeaderFooterRowVisibility,se,()=>this.__updateHeaderFooterRowVisibility(t))}__updateHeaderFooterRowVisibility(t){if(!t)return;const e=Array.from(t.children).filter(i=>{const s=i._column;if(s._emptyCells&&s._emptyCells.indexOf(i)>-1)return!1;if(t.parentElement===this.$.header){if(s.headerRenderer)return!0;if(s.header===null)return!1;if(s.path||s.header!==void 0)return!0}else if(s.footerRenderer)return!0;return!1});t.hidden!==!e.length&&(t.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),this._columnTree&&(this._updateRowOrderParts(t,e),this._a11yUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(t,e=t.index){rt(t,{first:e===0,last:e===this._flatSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(t,{expanded:e,selected:i,detailsOpened:s}){rt(t,{expanded:e,collapsed:this.__isRowExpandable(t),selected:i,"details-opened":s})}_renderColumnTree(t){for(B(this.$.items,e=>{this._updateRow(e,t[t.length-1],"body",!1,!0);const i=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,i),this._filterDragAndDrop(e,i)});this.$.header.children.length<t.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),i.setAttribute("tabindex","-1"),this.$.footer.appendChild(i)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);B(this.$.header,(e,i,s)=>{this._updateRow(e,t[i],"header",i===t.length-1);const o=Ge(e);ce(o,"first-header-row-cell",i===0),ce(o,"last-header-row-cell",i===s.length-1)}),B(this.$.footer,(e,i,s)=>{this._updateRow(e,t[t.length-1-i],"footer",i===0);const o=Ge(e);ce(o,"first-footer-row-cell",i===0),ce(o,"last-footer-row-cell",i===s.length-1)}),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(t,e){t._item=e;const i=this.__getRowModel(t);this._toggleDetailsCell(t,i.detailsOpened),this._a11yUpdateRowLevel(t,i.level),this._a11yUpdateRowSelected(t,i.selected),this._updateRowStateParts(t,i),this._generateCellClassNames(t,i),this._generateCellPartNames(t,i),this._filterDragAndDrop(t,i),B(t,s=>{if(s._renderer){const o=s._column||this;s._renderer.call(o,s._content,o,i)}}),this._updateDetailsCellHeight(t),this._a11yUpdateRowExpanded(t,i.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(t){t.animationName.indexOf("vaadin-grid-appear")===0&&(t.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}_showTooltip(t){const e=this._tooltipController.node;e&&e.isConnected&&(this._tooltipController.setTarget(t.target),this._tooltipController.setContext(this.getEventContext(t)),e._stateController.open({focus:t.type==="focusin",hover:t.type==="mouseenter"}))}_hideTooltip(t){const e=this._tooltipController&&this._tooltipController.node;e&&e._stateController.close(t)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(t=>{t.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})})}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bd=N`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing] {
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ye("vaadin-grid",bd,{moduleId:"vaadin-grid-styles"});class vd extends yd(qr(Ii(Wr(pt)))){static get template(){return Fi`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}}Pe(vd);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cd=r=>class extends Gr(r){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(t,e){t==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(t)&&this._updateFlexAndWidth(),t==="frozen"&&!this.frozen&&(this.frozen=e),t==="lastFrozen"&&!this._lastFrozen&&(this._lastFrozen=e),t==="frozenToEnd"&&!this.frozenToEnd&&(this.frozenToEnd=e),t==="firstFrozenToEnd"&&!this._firstFrozenToEnd&&(this._firstFrozenToEnd=e)}_groupOrderChanged(t,e){if(e){const i=e.slice(0);if(!t){i.forEach(a=>{a._order=0});return}const s=/(0+)$/u.exec(t).pop().length,o=~~(Math.log(e.length)/Math.LN10)+1,n=10**(s-o);i[0]&&i[0]._order&&i.sort((a,l)=>a._order-l._order),Vr(i,n,t)}}_groupReorderStatusChanged(t,e){t===void 0||e===void 0||e.forEach(i=>{i._reorderStatus=t})}_groupResizableChanged(t,e){t===void 0||e===void 0||e.forEach(i=>{i.resizable=t})}_updateVisibleChildColumns(t){this._visibleChildColumns=Array.prototype.filter.call(t,e=>!e.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const t=this._visibleChildColumns.reduce((e,i)=>(e+=` + ${(i.width||"0px").replace("calc","")}`,e),"").substring(3);this._setWidth(`calc(${t})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(t,e)=>t+e.flexGrow,0))}}__scheduleAutoFreezeWarning(t,e){if(this._grid){const i=e.replace(/([A-Z])/gu,"-$1").toLowerCase(),s=t[0][e]||t[0].hasAttribute(i);t.every(n=>(n[e]||n.hasAttribute(i))===s)||(this._grid.__autoFreezeWarningDebouncer=x.debounce(this._grid.__autoFreezeWarningDebouncer,me,()=>{console.warn(`WARNING: Joining ${e} and non-${e} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${e}. Otherwise, exclude the ${e} columns from the joined group.`)}))}}_groupFrozenChanged(t,e){e===void 0||t===void 0||t!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozen"),Array.from(e).forEach(i=>{i.frozen=t}))}_groupFrozenToEndChanged(t,e){e===void 0||t===void 0||t!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozenToEnd"),Array.from(e).forEach(i=>{i.frozenToEnd=t}))}_groupHiddenChanged(t){(t||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const t=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(t||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(t=>{t.hidden=this.hidden})}_colSpanChanged(t,e,i){e&&(e.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(e,t)),i&&(i.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(i,t))}_getChildColumns(t){return _e.getColumns(t)}_addNodeObserver(){this._observer=new _e(this,()=>{this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()}),this._observer.flush()}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(t.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wd extends Cd(pt){static get is(){return"vaadin-grid-column-group"}}Pe(wd);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ad=D(r=>class extends r{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((i,s)=>{this._delegateAttribute(i,e[s])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((i,s)=>{this._delegateProperty(i,e[s])})}_delegateAttribute(e,i){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",i?"true":!1),typeof i=="boolean"?this.stateTarget.toggleAttribute(e,i):i?this.stateTarget.setAttribute(e,i):this.stateTarget.removeAttribute(e))}_delegateProperty(e,i){this.stateTarget&&(this.stateTarget[e]=i)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ed=D(r=>class extends r{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,i){e?this._addInputListeners(e):i&&this._removeInputListeners(i)}_hasInputValueChanged(e,i){(e||i)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const i=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=i.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,i){this._toggleHasValue(this._hasValue),!(e===""&&i===void 0)&&(this.__userInput||this._forwardInputValue(e))}_setHasInputValue(e){const i=e.composedPath()[0];this._hasInputValue=i.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xd=D(r=>class extends Ad(Di(Ed(r))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const i=e.target;this._toggleChecked(i.checked)}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sd extends Ni{constructor(t,e){super(t,"input","input",{initializer:(i,s)=>{s.value&&(i.value=s.value),s.type&&i.setAttribute("type",s.type),i.id=this.defaultId,typeof e=="function"&&e(i)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Id extends Ni{constructor(t,e,i,s={}){super(t,e,i,{...s,useUniqueId:!0})}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(i=>{const s=i.target,o=s===this.node;i.type==="attributes"?o&&this.__updateNodeId(s):(o||s.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return t?t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&t.textContent.trim()!=="":!1}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){const e=!this.nodes||t===this.nodes[0];t.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!t.id&&(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pd extends Id{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:t}=this;if(t&&t.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Td=D(r=>class extends Wr(r){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Pd(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Rd{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",i=>{this.__initLabel(i.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Od=r=>class extends Td(xd(ud(hd(r)))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new Sd(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Rd(this.inputElement,this._labelController))}_shouldSetActive(e){return e.target.localName==="a"?!1:super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fd=N`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ye("vaadin-checkbox",Fd,{moduleId:"vaadin-checkbox-styles"});class zd extends Od(qr(Ii(pt))){static get is(){return"vaadin-checkbox"}static get template(){return Fi`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Jr(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}Pe(zd);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Md=r=>class extends r{static get properties(){return{width:{type:String,value:"58px",sync:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}_defaultHeaderRenderer(e,i){let s=e.firstElementChild;s||(s=document.createElement("vaadin-checkbox"),s.setAttribute("aria-label","Select All"),s.classList.add("vaadin-grid-select-all-checkbox"),e.appendChild(s),s.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)));const o=this.__isChecked(this.selectAll,this._indeterminate);s.__rendererChecked=o,s.checked=o,s.hidden=this._selectAllHidden,s.indeterminate=this._indeterminate}_defaultRenderer(e,i,{item:s,selected:o}){let n=e.firstElementChild;n||(n=document.createElement("vaadin-checkbox"),n.setAttribute("aria-label","Select Row"),e.appendChild(n),n.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),ut(e,"track",this.__onCellTrack.bind(this)),e.addEventListener("mousedown",this.__onCellMouseDown.bind(this)),e.addEventListener("click",this.__onCellClick.bind(this))),n.__item=s,n.__rendererChecked=o,n.checked=o}__onSelectAllCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(this._indeterminate||e.target.checked?this._selectAll():this._deselectAll())}__onSelectRowCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(e.target.checked?this._selectItem(e.target.__item):this._deselectItem(e.target.__item))}__onCellTrack(e){if(this.dragSelect)if(this.__dragCurrentY=e.detail.y,this.__dragDy=e.detail.dy,e.detail.state==="start"){const s=this._grid._getRenderedRows().find(o=>o.contains(e.currentTarget.assignedSlot));this.__selectOnDrag=!this._grid._isSelected(s._item),this.__dragStartIndex=s.index,this.__dragStartItem=s._item,this.__dragAutoScroller()}else e.detail.state==="end"&&(this.__dragStartItem&&(this.__selectOnDrag?this._selectItem(this.__dragStartItem):this._deselectItem(this.__dragStartItem)),setTimeout(()=>{this.__dragStartIndex=void 0}))}__onCellMouseDown(e){this.dragSelect&&e.preventDefault()}__onCellClick(e){this.__dragStartIndex!==void 0&&e.preventDefault()}_onCellKeyDown(e){const i=e.composedPath()[0];if(e.keyCode===32&&(i===this._headerCell||this._cells.includes(i)&&!this.autoSelect)){const s=i._content.firstElementChild;s.checked=!s.checked}}__dragAutoScroller(){if(this.__dragStartIndex===void 0)return;const e=this._grid._getRenderedRows(),i=e.find(l=>{const d=l.getBoundingClientRect();return this.__dragCurrentY>=d.top&&this.__dragCurrentY<=d.bottom});let s=i?i.index:void 0;const o=this.__getScrollableArea();this.__dragCurrentY<o.top?s=this._grid._firstVisibleIndex:this.__dragCurrentY>o.bottom&&(s=this._grid._lastVisibleIndex),s!==void 0&&e.forEach(l=>{(s>this.__dragStartIndex&&l.index>=this.__dragStartIndex&&l.index<=s||s<this.__dragStartIndex&&l.index<=this.__dragStartIndex&&l.index>=s)&&(this.__selectOnDrag?this._selectItem(l._item):this._deselectItem(l._item),this.__dragStartItem=void 0)});const n=o.height*.15,a=10;if(this.__dragDy<0&&this.__dragCurrentY<o.top+n){const l=o.top+n-this.__dragCurrentY,d=Math.min(1,l/n);this._grid.$.table.scrollTop-=d*a}if(this.__dragDy>0&&this.__dragCurrentY>o.bottom-n){const l=this.__dragCurrentY-(o.bottom-n),d=Math.min(1,l/n);this._grid.$.table.scrollTop+=d*a}setTimeout(()=>this.__dragAutoScroller(),10)}__getScrollableArea(){const e=this._grid.$.table.getBoundingClientRect(),i=this._grid.$.header.getBoundingClientRect(),s=this._grid.$.footer.getBoundingClientRect();return{top:e.top+i.height,bottom:e.bottom-s.height,left:e.left,right:e.right,height:e.height-i.height-s.height,width:e.width}}_selectAll(){}_deselectAll(){}_selectItem(e){}_deselectItem(e){}__isChecked(e,i){return i||e}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kd=r=>class extends Md(r){static get properties(){return{__previousActiveItem:Object}}static get observers(){return["__onSelectAllChanged(selectAll)"]}constructor(){super(),this.__boundOnActiveItemChanged=this.__onActiveItemChanged.bind(this),this.__boundOnDataProviderChanged=this.__onDataProviderChanged.bind(this),this.__boundOnSelectedItemsChanged=this.__onSelectedItemsChanged.bind(this)}disconnectedCallback(){this._grid.removeEventListener("active-item-changed",this.__boundOnActiveItemChanged),this._grid.removeEventListener("data-provider-changed",this.__boundOnDataProviderChanged),this._grid.removeEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.removeEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged),super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("active-item-changed",this.__boundOnActiveItemChanged),this._grid.addEventListener("data-provider-changed",this.__boundOnDataProviderChanged),this._grid.addEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged))}__onSelectAllChanged(t){if(!(t===void 0||!this._grid)){if(!this.__selectAllInitialized){this.__selectAllInitialized=!0;return}this._selectAllChangeLock||(t&&this.__hasArrayDataProvider()?this.__withFilteredItemsArray(e=>{this._grid.selectedItems=e}):this._grid.selectedItems=[])}}__arrayContains(t,e){return Array.isArray(t)&&Array.isArray(e)&&e.every(i=>t.includes(i))}_selectAll(){this.selectAll=!0}_deselectAll(){this.selectAll=!1}_selectItem(t){this._grid.selectItem(t)}_deselectItem(t){this._grid.deselectItem(t)}__onActiveItemChanged(t){const e=t.detail.value;if(this.autoSelect){const i=e||this.__previousActiveItem;i&&this._grid._toggleItem(i)}this.__previousActiveItem=e}__hasArrayDataProvider(){return Array.isArray(this._grid.items)&&!!this._grid.dataProvider}__onSelectedItemsChanged(){this._selectAllChangeLock=!0,this.__hasArrayDataProvider()&&this.__withFilteredItemsArray(t=>{this._grid.selectedItems.length?this.__arrayContains(this._grid.selectedItems,t)?(this.selectAll=!0,this._indeterminate=!1):(this.selectAll=!1,this._indeterminate=!0):(this.selectAll=!1,this._indeterminate=!1)}),this._selectAllChangeLock=!1}__onDataProviderChanged(){this._selectAllHidden=!Array.isArray(this._grid.items)}__withFilteredItemsArray(t){const e={page:0,pageSize:1/0,sortOrders:[],filters:this._grid._mapFilters()};this._grid.dataProvider(e,i=>t(i))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Dd extends kd(Ur){static get is(){return"vaadin-grid-selection-column"}}Pe(Dd);ye("vaadin-grid-sorter",N`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const no=document.createElement("template");no.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(no.content);ye("vaadin-grid-sorter",N`
    :host {
      display: inline-flex;
      cursor: pointer;
      max-width: 100%;
    }

    [part='content'] {
      flex: 1 1 auto;
    }

    [part='indicators'] {
      position: relative;
      align-self: center;
      flex: none;
    }

    [part='order'] {
      display: inline;
      vertical-align: super;
    }

    [part='indicators']::before {
      font-family: 'vaadin-grid-sorter-icons';
      display: inline-block;
    }

    :host(:not([direction])) [part='indicators']::before {
      content: '\\e901';
    }

    :host([direction='asc']) [part='indicators']::before {
      content: '\\e900';
    }

    :host([direction='desc']) [part='indicators']::before {
      content: '\\e902';
    }
  `,{moduleId:"vaadin-grid-sorter-styles"});const Nd=r=>class extends r{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(e,i){i!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(e){return e===null?"":e+1}_onClick(e){if(e.defaultPrevented)return;const i=this.getRootNode().activeElement;this!==i&&this.contains(i)||(e.preventDefault(),this._shiftClick=e.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $d extends Nd(Ii(zi(pt))){static get template(){return Fi`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}}Pe($d);let k=class extends er.EventedAccessor{constructor(r){super(r),this.cellClassNameGenerator=null,this.cellPartNameGenerator=(t,e)=>{var o;const i=this.findColumn(t==null?void 0:t.path);let s="";return i&&(i.invalid&&(s+=" invalid"),"activeEditInfo"in i&&i.activeEditInfo&&((o=i.activeEditInfo.rowData)==null?void 0:o.index)===e.index&&(s+=" editing")),s},this.columnPerformanceModeEnabled=!0,this.columnReorderingEnabled=!0,this.columns=new Y,this.dataProvider=async(t,e)=>{const{store:i}=this;if(e){if(!i)return void(e&&e([]));e(await i.fetchItems(t))}},this.multiSortEnabled=!1,this.pageSize=50,this.rowDetailsRenderer=null,this.store=null}get highlightIds(){return this._get("highlightIds")||new Y}set highlightIds(r){Array.isArray(r)?this._set("highlightIds",new Y(r)):this._set("highlightIds",r)}get size(){var r;return((r=this.store)==null?void 0:r.count)||0}get state(){const{store:r}=this;return r&&r.state!=="disabled"?r.state==="loading"?"loading":r.state==="loaded"?"loaded":"ready":"disabled"}closeColumnMenus(){var r;(r=this.columns)==null||r.forEach(t=>{t.menu&&t.menu.open&&t.menu.set("open",!1)})}sortColumn(r,t){if(!r)return;const e=this.findColumn(r);e&&(e.direction=t)}hideColumn(r){const t=this.findColumn(r);(t==null?void 0:t.hidden)===!1&&(t.hidden=!0)}showColumn(r){const t=this.findColumn(r);t!=null&&t.hidden&&(t.hidden=!1)}showAllColumns(){var r;(r=this.columns)==null||r.forEach(t=>{t.hidden&&(t.hidden=!1)})}findColumn(r){const t=[];return this.columns.forEach(e=>{var i;t.push(e),"columns"in e&&((i=e.columns)==null||i.forEach(s=>t.push(s)))}),t.find(e=>e.path===r)}getRowItemAt(r){var t;return(t=this.store)==null?void 0:t.getLocalItemAt(r)}refresh(){this.store&&(this.store.reset(),this.store.load())}};c([u()],k.prototype,"cellClassNameGenerator",void 0),c([u()],k.prototype,"cellPartNameGenerator",void 0),c([u()],k.prototype,"columnPerformanceModeEnabled",void 0),c([u()],k.prototype,"columnReorderingEnabled",void 0),c([u()],k.prototype,"columns",void 0),c([u()],k.prototype,"dataProvider",void 0),c([u()],k.prototype,"highlightIds",null),c([u()],k.prototype,"multiSortEnabled",void 0),c([u()],k.prototype,"pageSize",void 0),c([u()],k.prototype,"rowDetailsRenderer",void 0),c([u({readOnly:!0})],k.prototype,"size",null),c([u()],k.prototype,"store",void 0),c([u({readOnly:!0})],k.prototype,"state",null),k=c([W("esri.widgets.FeatureTable.Grid.GridViewModel")],k);const ao=k,Ks={selectionColumn:!0,columnMenus:!0},bt="esri-grid",Ld="compact column-borders",vt={base:bt,content:`${bt}__content`,grid:`${bt}__grid`,noColumnMenu:`${bt}--no-column-menu`};let E=class extends Ci{constructor(t,e){super(t,e),this._columnElements=[],this._grid=null,this.itemIdPath=null,this.messages=null,this.viewModel=new ao,this.visibleElements={...Ks}}initialize(){this.addHandles([this.columns.on("before-changes",()=>this.renderNow()),this.columns.on("change",()=>this.onColumnChange()),T(()=>{var t;return(t=this.viewModel)==null?void 0:t.size},()=>this._updateGridSize()),T(()=>{var t;return(t=this.store)==null?void 0:t.state},(t,e)=>{t!=="ready"||e!=="loaded"&&e!=="error"||this.refreshPageCache()}),Ne(()=>{var t,e;return(e=(t=this._grid)==null?void 0:t.$)==null?void 0:e.table},"scroll",()=>{var t;return(t=this.viewModel)==null?void 0:t.closeColumnMenus()})])}destroy(){this.resetColumns(),this.columns.destroyed||this.columns.destroy()}resetColumns(){this.columns.drain(t=>!t.destroyed&&t.destroy())}get _activeEditInfos(){return this._editorColumns.map(t=>t.activeEditInfo).filter(ni)}get _editorColumns(){return this.columns.filter(t=>"activeEditInfo"in t).toArray()}get cellClassNameGenerator(){return this.viewModel.cellClassNameGenerator}set cellClassNameGenerator(t){this.viewModel.cellClassNameGenerator=t}get cellPartNameGenerator(){return this.viewModel.cellPartNameGenerator}set cellPartNameGenerator(t){this.viewModel.cellPartNameGenerator=t}get columns(){return this.viewModel.columns}set columns(t){this.viewModel.columns=t}get columnPerformanceModeEnabled(){return this.viewModel.columnPerformanceModeEnabled}set columnPerformanceModeEnabled(t){this.viewModel.columnPerformanceModeEnabled=t}get columnReorderingEnabled(){return this.viewModel.columnReorderingEnabled}set columnReorderingEnabled(t){this.viewModel.columnReorderingEnabled=t}get dataProvider(){return this.viewModel.dataProvider}set dataProvider(t){this.viewModel.dataProvider=t}get highlightIds(){return this.viewModel.highlightIds}set highlightIds(t){this.viewModel.highlightIds=t}get isEditingActive(){return!!this._activeEditInfos.length}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}get multiSortEnabled(){return this.viewModel.multiSortEnabled}set multiSortEnabled(t){this.viewModel.multiSortEnabled=t}get pageSize(){return this.viewModel.pageSize}set pageSize(t){this.viewModel.pageSize=t}get rowDetailsRenderer(){return this.viewModel.rowDetailsRenderer}set rowDetailsRenderer(t){this.viewModel.rowDetailsRenderer=t}get size(){return this.viewModel.size}get sortOrders(){var t;return(t=this._grid)!=null&&t._sorters?this._grid._sorters.filter(e=>!!e&&e.path).map(({direction:e,path:i})=>({direction:e,path:i})):[]}get store(){return this.viewModel.store}set store(t){this.viewModel.store=t}castVisibleElements(t){return{...Ks,...t}}getColumnProps(t,e){const{id:i}=this,{autoWidth:s,direction:o,flexGrow:n,frozen:a,frozenToEnd:l,header:d,hidden:h,invalid:p,path:_,resizable:f,textAlign:m,width:y}=t,I=`${i}_${d}_${e??_}`,{renderFunction:P,footerRenderFunction:S,headerRenderFunction:$}=t;return{footerRenderer:S?(X,be)=>S({root:X,column:be}):void 0,headerRenderer:$?(X,be)=>$({root:X,column:be}):void 0,renderer:P?(X,be,Ut)=>P({root:X,column:be,rowData:Ut}):void 0,autoWidth:s,direction:o,flexGrow:n,frozen:a,frozenToEnd:l,header:d,hidden:h,key:I,path:_,resizable:f,bind:this,headerPartName:p?"invalid":void 0,"text-align":m,width:typeof y=="number"?`${y}px`:y,afterCreate:this._afterColumnCreate,afterRemoved:this._afterColumnRemoved}}clearSelection(){this._clearSelection(),this.scheduleRender()}clearSort(){var e;let t=!1;this._grid&&((e=this._grid._sorters)!=null&&e.length&&(this._grid._sorters.forEach(i=>{i._order=null,i.direction=null}),t=!0),this.columns.length&&this.columns.some(i=>!!i.direction)&&(this.columns.forEach(i=>i.direction=null),t=!0),t&&(this.notifyChange("sortOrders"),this.scheduleRender()))}findColumn(t){this.viewModel.findColumn(t)}generateCellClassNames(){var t;(t=this._grid)==null||t.generateCellClassNames()}generateCellPartNames(){var t;(t=this._grid)==null||t.generateCellPartNames()}getRowContainingNode(t){var e;return(e=this._grid)==null?void 0:e._getRowContainingNode(t)}getSlotElementByName(t){var e,i;return((i=(e=this._grid)==null?void 0:e.shadowRoot)==null?void 0:i.querySelector(`slot[name='${t}']`))??null}hideColumn(t){var e;(e=this.viewModel)==null||e.hideColumn(t)}recalculateColumnWidths(){var t;(t=this._grid)==null||t.recalculateColumnWidths()}async reset(){var t;this._clearSelection(),await((t=this.store)==null?void 0:t.reset()),this.scrollToTop()}refreshPageCache(){var t;(t=this._grid)==null||t.clearCache()}selectRows(t){const e=t==null?void 0:t.filter(s=>!this.highlightIds.includes(s.objectId)),i=e.map(s=>s.objectId);i.length&&this.highlightIds.addMany(i)}deselectRows(t){const e=(t==null?void 0:t.map(i=>i.objectId))||[];e.length&&this.highlightIds.removeMany(e)}showColumn(t){var e;(e=this.viewModel)==null||e.showColumn(t)}sort({path:t,direction:e}){var i;(i=this.viewModel)==null||i.sortColumn(t,e),this.notifyChange("sortOrders")}scrollToIndex(t){var e;(e=this._grid)==null||e.scrollToIndex(t)}scrollToTop(){var t;(t=this._grid)==null||t.scrollToIndex(0)}onColumnChange(){var t;this._columnElements.forEach(e=>{this._applyRenderersToColumnElement(e)}),(t=this._grid)==null||t.requestContentUpdate()}render(){const{columnMenus:t}=this.visibleElements;return C("div",{bind:this,class:this.classes(vt.base,wi.widget,{[vt.noColumnMenu]:!t})},C("div",{bind:this,class:vt.content},this._renderGrid()))}_renderGrid(){const t=this.highlightIds.map(i=>{var s;return((s=this.store)==null?void 0:s.getLocalItemByKey(i))||{objectId:i}}).toArray(),e=this.columnPerformanceModeEnabled?"lazy":"eager";return C("vaadin-grid",{afterCreate:this._afterGridCreate,afterUpdate:this._afterGridUpdate,bind:this,cellClassNameGenerator:this.cellClassNameGenerator,cellPartNameGenerator:this.cellPartNameGenerator,class:vt.grid,columnRendering:e,columnReorderingAllowed:this.columnReorderingEnabled,dataProvider:this.dataProvider,id:`${this.id}_grid`,itemIdPath:this.itemIdPath,multiSort:this.multiSortEnabled,pageSize:this.pageSize,ref:"grid",rowDetailsRenderer:this.rowDetailsRenderer,selectedItems:t,size:this.size},this._renderAllColumns())}_renderAllColumns(){return this.viewModel.state!=="disabled"&&this.columns.length?[this._renderSelectionColumn(),this._renderColumns()]:null}_renderSelectionColumn(){return C("vaadin-grid-selection-column",{_selectAllHidden:!0,bind:this,dragSelect:!0,frozen:!0,hidden:!this.visibleElements.selectionColumn,selectAll:!1,sortable:!1,textAlign:"center"})}_renderColumns(){return Array.from(this.columns,(t,e)=>"columns"in t?this._renderGroupColumn(t,e):C("vaadin-grid-column",{...this.getColumnProps(t,e)})).filter(ni)}_renderGroupColumn(t,e){const i=this.getColumnProps(t,e);if(i.hidden||!t.columns)return null;const s=t.columns.filter(({hidden:o})=>!o);return s.length?C("vaadin-grid-column-group",{...i},s.map(o=>C("vaadin-grid-column",{...this.getColumnProps(o,e)}))):null}_afterGridCreate(t){const e=this._grid=t;e.setAttribute("theme",Ld),customElements.whenDefined("vaadin-grid").then(()=>{this._appendStyles(),this._addGridEventListeners()}),e.__updateSorter=i=>{const s=e._sorters,o=!s.includes(i);if(i.direction||!o){if(i._order=null,e.multiSort)e._removeArrayItem(s,i),i.direction&&(i._initialOrder!=null?(o?s[i._initialOrder]=i:s.splice(i._initialOrder,0,i),i._initialOrder=null):s.unshift(i)),e.__updateSortOrders();else if(i.direction){const n=s.filter(a=>a!==i);e._sorters=[i],n.forEach(a=>{a._order=null,a.direction=null})}}}}_appendStyles(){var i;const t=(i=this._grid)==null?void 0:i.shadowRoot,e=document.createElement("style");t&&(e.textContent=`
      #items [part~="row"][editing], 
      #items [part~="row"][editing][selected] { 
        z-index: 2; 
      }

      #items [part~="editing"],
      #items [part~="editing"][selected] {
        z-index: 3;
      }

      [frozen], [frozen-to-end] {
        z-index: 4;
      }
    `,t.appendChild(e))}_afterGridUpdate(t){this._grid||(this._grid=t)}_afterColumnCreate(t){this._columnElements.push(t)}_afterColumnRemoved(t){const e=this._columnElements.indexOf(t,0);e>-1&&this._columnElements.splice(e,1)}_updateGridSize(){this._grid&&(this._grid.size=this.size||0,this.scheduleRender())}_addGridEventListeners(){const t=this._grid;xt(t),this.addHandles([Wt(t,"click",e=>this._onRowClick(e)),Wt(t,"selected-items-changed",e=>this._onSelectedItemsChange(e)),Wt(t,"sorter-changed",()=>this.notifyChange("sortOrders"))])}_onRowClick(t){const e=this._grid;xt(e);const i=e.getEventContext(t),{item:s,section:o}=i;s&&o&&o!=="details"&&o!=="header"&&this.emit("row-click",{context:i,native:t})}_clearSelection(){this.highlightIds.removeAll()}_onSelectedItemsChange(t){const{highlightIds:e}=this,i=t.detail.value.map(n=>n.objectId),s=i.filter(n=>!e.includes(n)),o=e.filter(n=>!i.includes(n));e.removeMany(o),e.addMany(s)}_applyRenderersToColumnElement(t){const e=t==null?void 0:t.path,i=e!=null?this.viewModel.findColumn(e):void 0;if(i)try{const{renderFunction:s,footerRenderFunction:o,headerRenderFunction:n}=i;s&&"renderer"in t&&(t.renderer=(a,l,d)=>s({root:a,column:l,rowData:d})),o&&(t.footerRenderer=(a,l)=>o({root:a,column:l})),n&&(t.headerRenderer=(a,l)=>n({root:a,column:l}))}catch{}}};c([u()],E.prototype,"_activeEditInfos",null),c([u()],E.prototype,"_columnElements",void 0),c([u()],E.prototype,"_editorColumns",null),c([u()],E.prototype,"_grid",void 0),c([u()],E.prototype,"cellClassNameGenerator",null),c([u()],E.prototype,"cellPartNameGenerator",null),c([u()],E.prototype,"columns",null),c([u()],E.prototype,"columnPerformanceModeEnabled",null),c([u()],E.prototype,"columnReorderingEnabled",null),c([u()],E.prototype,"dataProvider",null),c([u()],E.prototype,"highlightIds",null),c([u()],E.prototype,"isEditingActive",null),c([u()],E.prototype,"itemIdPath",void 0),c([u()],E.prototype,"label",null),c([u(),De("esri/widgets/FeatureTable/t9n/FeatureTable")],E.prototype,"messages",void 0),c([u()],E.prototype,"multiSortEnabled",null),c([u()],E.prototype,"pageSize",null),c([u()],E.prototype,"rowDetailsRenderer",null),c([u()],E.prototype,"size",null),c([u({readOnly:!0})],E.prototype,"sortOrders",null),c([u()],E.prototype,"store",null),c([u()],E.prototype,"viewModel",void 0),c([u()],E.prototype,"visibleElements",void 0),c([Dt("visibleElements")],E.prototype,"castVisibleElements",null),E=c([W("esri.widgets.FeatureTable.Grid.Grid")],E);const Hd=E;let Me=class extends $t{constructor(r){super(r),this.columns=null,this.sortable=!1}get path(){return this.header}set path(r){this.header=r}};c([u()],Me.prototype,"columns",void 0),c([u()],Me.prototype,"path",null),c([u({readOnly:!0})],Me.prototype,"sortable",void 0),Me=c([W("esri.widgets.FeatureTable.Grid.GroupColumn")],Me);const Bd=Me,lo="esri.widgets.FeatureTable.support.FeatureStore";function oi(r,t,e){St.getLogger(lo).error(new Oe(r,t,e))}let O=class extends vi{constructor(t){super(t),this._loaded=!1,this._loadError=!1,this._loading=!1,this._editOperationQueue=[],this._queryOperationQueue=[],this._objectIdCache=new Y,this._hasStaleCache=!1,this.count=0,this.failures=new Y,this.itemCache=new Y,this.relatedRecordsEnabled=!1}destroy(){var t,e;this.layer=null,(t=this.itemCache)==null||t.destroy(),(e=this.failures)==null||e.destroy(),this._set("itemCache",null)}set attachmentsEnabled(t){this._reset(),this._set("attachmentsEnabled",t),this.notifyChange("state")}set filterGeometry(t){this._reset(),this._set("filterGeometry",t),this.notifyChange("state")}set layer(t){this._reset(),this._set("layer",t),this.notifyChange("state")}set objectIds(t){this._reset(),this._set("objectIds",t||null),this.notifyChange("state")}get orderByFields(){return this._get("orderByFields")||[]}set orderByFields(t){const e=this.orderByFields;xo(t,e)||(this.itemCache.removeAll(),this._hasStaleCache=!0,this._set("orderByFields",t))}get querying(){return this._queryOperationQueue.length>0}set returnGeometry(t){this._reset(),this._set("returnGeometry",t),this.notifyChange("state")}get state(){const{layer:t,_loaded:e,_loadError:i,_loading:s}=this;return i?"error":!t||t.loadError?"disabled":s?"loading":t.loadStatus==="loaded"&&e?"loaded":"ready"}get syncing(){return this._editOperationQueue.length>0}set timeExtent(t){this._reset(),this._set("timeExtent",t),this.notifyChange("state")}get where(){return this._get("where")||null}set where(t){this._reset(),this._set("where",t),this.notifyChange("state")}async load(){this._reset();const{layer:t}=this;if(t){this._loading=!0,this.notifyChange("state");try{await t.when(),await this._syncLayerInfo(),this._loading=!1,this._loaded=!0,this.notifyChange("state")}catch(e){throw this._reset(),this._loadError=!0,this.notifyChange("state"),oi("store:load-error","An error occurred.",{error:e}),e}}}async refreshLayerInfo(){return this._syncLayerInfo()}async addItems(t){}async fetchItems(t){const{page:e,pageSize:i}=t,s=e*i,o=s+i,{layer:n,state:a}=this;if(!n||a!=="loaded")return[];this.notifyChange("querying");const l=await this._query({start:s,num:o,page:e,pageSize:i});return this.notifyChange("state"),l}async verifyFeaturesByObjectId(t){const{layer:e,state:i}=this;if(!e||i!=="loaded")return[];const{features:s}=await this._verifyFeaturesByObjectId(t);return t.map(o=>s.some(n=>(n==null?void 0:n.getObjectId())===o))}async query(t){const{layer:e,state:i}=this;if(!e||i!=="loaded")return[];this.notifyChange("querying");const s=await this._query(t);return this.notifyChange("state"),s}async removeItemAt(t){}async reset(){this._reset()}async updateItem(t){return this._update(t).then(()=>{})}async deleteRowsByObjectId(t){const{layer:e}=this,{operations:i}=Qe(e);if(!i.supportsDelete||!("applyEdits"in e))throw new Oe("store:delete-error","Delete is not supported.");const s=t.map(o=>{var n;return(n=this.getItemByObjectId(o))==null?void 0:n.feature}).filter(ni);return this._queueEditOperation(()=>e.applyEdits({deleteFeatures:s}))}getLocalItemByKey(t){return this.getItemByObjectId(t)}getItemByObjectId(t){const{itemCache:e,layer:{objectIdField:i}}=this;return e.find(s=>{var o;return((o=s.feature)==null?void 0:o.attributes[i])===t})}getLocalItemAt(t){return this.itemCache.at(t)}at(t){return Promise.resolve(this.itemCache.at(t))}getObjectIdIndex(t){const{itemCache:e,layer:{objectIdField:i}}=this;return e.findIndex(s=>{var o;return((o=s.feature)==null?void 0:o.attributes[i])===t})}_reset(){this.itemCache.removeAll(),this.failures.removeAll(),this._editOperationQueue=[],this._queryOperationQueue=[],this._hasStaleCache=!1,this._loading=!1,this._loaded=!1,this._loadError=!1,this._set("count",0),this._objectIdCache.removeAll(),this.notifyChange("querying"),this.notifyChange("syncing"),this.notifyChange("state")}_getIdsFromFeatures(t){return t.map(e=>e.attributes[this.layer.objectIdField])}_toFeatureData(t,e){const{layer:{objectIdField:i}}=this;return t.map(s=>{const{attributes:o}=s,n=o[i];return{objectId:n,feature:s,attachments:e?e[n]:null,relatedRecords:null}})}async _update(t){const{layer:e}=this,{operations:i}=Qe(e);if(!i.supportsUpdate||!("applyEdits"in e))throw new Oe("store:update-error","Update is not supported.");const{index:s,name:o,value:n}=t,a=await this.at(s);if(!(a!=null&&a.feature))throw new Oe("store:update-error","Feature with provided 'objectId' not found.");const{feature:l}=a,d=So(l.attributes);d[o]=n;const h=new tr({attributes:d}),p=e.applyEdits({updateFeatures:[h]}).then(_=>{const{updateFeatureResults:f}=_,m=f.find(y=>!!y.error);if(m)throw m.error;return f.length&&(l.attributes=d),_});return this._queueEditOperation(()=>p)}async _query(t){const{refresh:e}=t;return e===!0?(this.itemCache.removeAll(),this._syncLayerInfo().then(()=>this._queryFeatureData(t))):(this._hasStaleCache&&(await this._updateIds(),this._hasStaleCache=!1),this._queryFeatureData(t))}async _queryFeatureData(t){return this._queueQueryOperation(async()=>{const{features:e}=await this._queryFeatures(t),i=this._getIdsFromFeatures(e),s=await this._queryAttachments(i);return this._toFeatureData(e,s)||[]})}async _syncLayerInfo(){await this._updateCount(),await this._updateIds()}async _updateCount(){await this._queryCount().then(t=>this._set("count",t))}async _updateIds(){var t,e,i;(i=(e=(t=this.layer)==null?void 0:t.capabilities)==null?void 0:e.query)!=null&&i.supportsPagination||(this._objectIdCache.removeAll(),await this._queryForObjectIds().then(s=>this._objectIdCache.addMany(s)))}_queryCount(){var o,n;const{filterGeometry:t,layer:e}=this,i=(n=(o=e.capabilities)==null?void 0:o.query)==null?void 0:n.supportsCacheHint,s=e.createQuery();return s.geometry=t,s.returnGeometry=!1,s.where=this._getWhere(),s.timeExtent=this._getTimeExtent(),s.objectIds=this.objectIds,i&&(s.cacheHint=!0),e.queryFeatureCount(s)}_queryForObjectIds(){var l;const{filterGeometry:t,layer:e,orderByFields:i}=this,s=(l=e.capabilities)==null?void 0:l.query,o=s==null?void 0:s.supportsCacheHint,n=s==null?void 0:s.supportsOrderBy,a=e.createQuery();return a.geometry=t,a.outFields=[e.objectIdField],a.returnGeometry=!1,a.where=this._getWhere(),a.timeExtent=this._getTimeExtent(),a.objectIds=this.objectIds,n&&(a.orderByFields=i),o&&(a.cacheHint=!0),e.queryObjectIds(a)}async _queryFeatures(t){var h,p,_;const{layer:e}=this;if(!((h=Qe(e))!=null&&h.operations.supportsQuery))throw new Oe("store:query-error","Layer does not support query operation.");const{filterGeometry:i,orderByFields:s,returnGeometry:o}=this,n=(_=(p=this.layer)==null?void 0:p.capabilities)==null?void 0:_.query,{start:a,pageSize:l}=t,d=e.createQuery();return d.returnGeometry=o,n!=null&&n.supportsPagination?(d.start=a,d.num=l,d.where=this._getWhere(),d.timeExtent=this._getTimeExtent(),d.objectIds=this.objectIds):d.objectIds=this.objectIds||this._getObjectIdsForPage(a,l??0),n!=null&&n.supportsOrderBy&&(d.orderByFields=s),i&&(d.geometry=i),n!=null&&n.supportsCacheHint&&(d.cacheHint=!0),e.queryFeatures(d)}async _verifyFeaturesByObjectId(t){var n,a,l;const{layer:e}=this;if(!((n=Qe(e))!=null&&n.operations.supportsQuery))throw new Oe("store:query-error","Layer does not support query operation.");const{orderByFields:i}=this,s=(l=(a=this.layer)==null?void 0:a.capabilities)==null?void 0:l.query,o=e.createQuery();return o.where=this._getWhere(),o.timeExtent=this._getTimeExtent(),o.returnGeometry=!1,o.objectIds=t,o.outFields=[e.objectIdField],s!=null&&s.supportsOrderBy&&(o.orderByFields=i),s!=null&&s.supportsCacheHint&&(o.cacheHint=!0),e.queryFeatures(o)}_getObjectIdsForPage(t,e){const i=this._objectIdCache.toArray();return i.length>=t+e?i.slice(t,t+e):i.slice(t)}_queryAttachments(t){var a;const{attachmentsEnabled:e,layer:i}=this,{capabilities:s}=i,o=s==null?void 0:s.data.supportsAttachment,n=(a=s==null?void 0:s.operations)==null?void 0:a.supportsQueryAttachments;return e&&o&&n&&"queryAttachments"in i?i.queryAttachments(new Io({objectIds:t,where:this._getWhere()})):Promise.resolve(null)}_syncLocalCache(t){t.forEach(e=>{if(e.feature){const i=e.feature.getObjectId();if(i!=null){const s=this.getObjectIdIndex(i);s===-1?this.itemCache.add(e):this.itemCache.splice(s,1,e)}}})}_queueQueryOperation(t){return this._queryOperationQueue.push(t),this.notifyChange("querying"),t().then(e=>this._queryOperationQueue.includes(t)?(this._syncLocalCache(e),e):[]).catch(e=>{oi("store:query-error","An error occurred.",{error:e});const i={error:e,retry:()=>{this.failures.remove(i),this._queueQueryOperation(t)},cancel:()=>this.failures.remove(i)};return this.failures.add(i),[]}).then(e=>(jt(this._queryOperationQueue,t),this.notifyChange("querying"),e))}_queueEditOperation(t){return this._editOperationQueue.push(t),this.notifyChange("syncing"),t().then(e=>(jt(this._editOperationQueue,t),this.notifyChange("syncing"),e)).catch(e=>{oi("store:edit-error","An error occurred.",{error:e});const i={error:e,retry:()=>{this.failures.remove(i),this._queueEditOperation(t)},cancel:()=>this.failures.remove(i)};throw this.failures.add(i),jt(this._editOperationQueue,t),this.notifyChange("syncing"),e})}_getWhere(){var t;return this.where||((t=this.layer)==null?void 0:t.definitionExpression)||"1=1"}_getTimeExtent(){const t=this.layer;return this.timeExtent||t&&"timeExtent"in t&&t.timeExtent||null}};c([u()],O.prototype,"attachmentsEnabled",null),c([u({readOnly:!0})],O.prototype,"count",void 0),c([u({readOnly:!0})],O.prototype,"failures",void 0),c([u()],O.prototype,"filterGeometry",null),c([u({readOnly:!0})],O.prototype,"itemCache",void 0),c([u({value:null})],O.prototype,"layer",null),c([u({value:null})],O.prototype,"objectIds",null),c([u()],O.prototype,"orderByFields",null),c([u({readOnly:!0})],O.prototype,"querying",null),c([u()],O.prototype,"relatedRecordsEnabled",void 0),c([u({value:!1})],O.prototype,"returnGeometry",null),c([u({readOnly:!0})],O.prototype,"state",null),c([u({readOnly:!0})],O.prototype,"syncing",null),c([u()],O.prototype,"timeExtent",null),c([u()],O.prototype,"where",null),O=c([W(lo)],O);const ho=O;let w=class extends ao{constructor(r){super(r),this._debounceRefresh=Po(()=>this._refresh()),this._highlights=new To,this.activeFilters=new Y,this.attachmentsEnabled=!1,this.autoRefreshEnabled=!0,this.cellClassNameGenerator=(t,e)=>t.path||"",this.columns=new Y,this.dataProvider=async(t,e)=>{const{store:i}=this,s=this._sortOrdersToLayerOrderByFields(t.sortOrders);e&&(i?(i.set({orderByFields:s}),i.state!=="loaded"&&i.state!=="loading"&&await i.load(),e&&e(await i.fetchItems(t))):e&&e([]))},this.editingEnabled=!1,this.grid=null,this.highlightEnabled=!0,this.itemIdPath="objectId",this.layer=null,this.messagesCommon=null,this.messagesURIUtils=null,this.relatedRecordsEnabled=!1,this.returnGeometryEnabled=!1,this.store=null,this.tableTemplate=null,this.timeZone=null,this.view=null,this._onLayerRefresh=this._onLayerRefresh.bind(this),this._set("store",new ho),this._set("grid",new Hd({itemIdPath:this.itemIdPath,viewModel:this}))}initialize(){const r=async()=>{this.messages=await qt("esri/widgets/FeatureTable/t9n/FeatureTable"),this.messagesCommon=await qt("esri/t9n/common"),this.messagesURIUtils=await qt("esri/widgets/support/t9n/uriUtils")};r(),this.addHandles([Ro(()=>{r(),this._generateColumns()}),Ne(()=>this.highlightIds,"change",t=>this._onHighlightIdsChange(t),{onListenerAdd:()=>{this.highlightIds.forEach(t=>this._highlight(t))},onListenerRemove:()=>{this.highlightIds.forEach(t=>this._removeHighlight(t))}}),T(()=>this.attachmentsEnabled,t=>{var e;this.store.attachmentsEnabled=t,(e=this.layer)!=null&&e.loaded&&this._generateColumns()}),T(()=>this.layerView,t=>{var e;this._highlights.removeAll(),t&&this.highlightEnabled&&((e=this.highlightIds)==null||e.forEach(i=>this._highlight(i)))}),T(()=>this.highlightEnabled,t=>{var e;this._highlights.removeAll(),t&&((e=this.highlightIds)==null||e.forEach(i=>this._highlight(i)))}),T(()=>this.relatedRecordsEnabled,t=>this.store.relatedRecordsEnabled=t),T(()=>this.returnGeometryEnabled,t=>this.store.returnGeometry=t),T(()=>this.layer,async(t,e)=>{const i=this.grid;i&&(i.clearSort(),t&&e&&await i.reset()),this._drainColumns(),t&&(this.store.layer=t,t.loaded?this._onLayerLoad():t.load().catch(()=>{}))}),T(()=>{var t;return(t=this.layer)==null?void 0:t.loaded},t=>t&&this._onLayerLoad()),T(()=>this.store.state,t=>{var e;t==="loaded"&&((e=this.grid)==null||e.scrollToTop())}),T(()=>[this.messages,this.tableTemplate],()=>{var t;return((t=this.layer)==null?void 0:t.loaded)&&this._generateColumns()}),T(()=>{var t;return[this.timeZone,(t=this.view)==null?void 0:t.timeZone]},()=>{var t;this.columns.forEach(e=>{if("field"in e&&e.field){const{timeZone:i,timeZoneName:s}=this._getTimeZoneInfoForFieldColumn(e.field);e.set({timeZone:i,timeZoneName:s})}}),(t=this.grid)==null||t.onColumnChange()}),T(()=>this.editingEnabled,t=>{var e;this.columns.forEach(i=>{"editingEnabled"in i&&(i.editingEnabled=t)}),(e=this.grid)==null||e.onColumnChange()}),T(()=>{var t;return(t=this.layer)==null?void 0:t.definitionExpression},(t,e)=>(t||e)&&this.store.state==="loaded"&&this.reset()),T(()=>this.layer&&"timeExtent"in this.layer&&this.layer.timeExtent,(t,e)=>(t||e)&&!this.timeExtent&&this.store.state==="loaded"&&this.reset()),Ne(()=>this.layer,"refresh",t=>this._onLayerRefresh(t))])}destroy(){var r;this._drainColumns(),this._highlights.removeAll(),this._highlights.destroy(),(r=this.grid)==null||r.destroy(),this.columns.destroyed||this.columns.destroy(),this.layer=null,this.view=null}get _defaultHiddenFields(){return Oo(this.layer)}get activeSortOrders(){var r;return(r=this.grid)!=null&&r.sortOrders?this.grid.sortOrders.map(({path:t,direction:e})=>({fieldName:t,direction:e})).filter(t=>t.fieldName&&t.direction):[]}set filterGeometry(r){if(!this.filterGeometry&&!r)return;const t=this.activeFilters.find(e=>e.type==="geometry");t&&this.activeFilters.remove(t),this._set("filterGeometry",r),this.store.filterGeometry=r,r&&this.activeFilters.add({type:"geometry",geometry:r})}get hiddenFields(){return this._get("hiddenFields")??new Y}set hiddenFields(r){Array.isArray(r)?this._set("hiddenFields",new Y(r)):this._set("hiddenFields",r)}get highlightOnRowSelectEnabled(){return this.highlightEnabled}set highlightOnRowSelectEnabled(r){this.highlightEnabled=r}get layerView(){var r;return((r=this.view)==null?void 0:r.allLayerViews.find(t=>t.layer===this.layer))||null}set messages(r){var t;(t=this.grid)==null||t.set("messages",r),this._set("messages",r)}get state(){const{store:r}=this;return r&&r.state!=="disabled"?r.state==="loading"?"loading":r.state==="loaded"?"loaded":"ready":"disabled"}set timeExtent(r){this._set("timeExtent",r),this.store.timeExtent=r}clearSelection(){var r;(r=this.grid)==null||r.clearSelection()}async deleteSelection(){const r=this.highlightIds.toArray();if(!(r!=null&&r.length))return;const{deleteFeatureResults:t}=await this.store.deleteRowsByObjectId(r),e=t.filter(i=>!i.error).map(i=>i.objectId);e.length&&(this.deselectRows(e),await this.refresh())}deselectRows(r){var e;const t=this._getStoreItemsFromSelectionParams(r);(e=this.grid)==null||e.deselectRows(t)}filterBySelection(){const r=this.highlightIds.toArray();r.length&&(this.clearSelectionFilter(),this.store.objectIds=r,this.activeFilters.add({type:"selection",objectIds:r}))}getObjectIdIndex(r){var t;return(t=this.store)==null?void 0:t.getObjectIdIndex(r)}getValue(r,t){var i;const e=this.store.getItemByObjectId(r);return(i=e==null?void 0:e.feature)==null?void 0:i.attributes[t]}get highlightIds(){return this._get("highlightIds")||new Y}set highlightIds(r){Array.isArray(r)?this._set("highlightIds",new Y(r)):this._set("highlightIds",r)}async refresh(){return Fo(this._debounceRefresh())}reset(){var r;(r=this.grid)==null||r.reset()}selectRows(r){var e;const t=this._getStoreItemsFromSelectionParams(r);return(e=this.grid)==null?void 0:e.selectRows(t)}scrollToIndex(r){var t;(t=this.grid)==null||t.scrollToIndex(r)}clearSelectionFilter(){this.store.objectIds=null;const r=this.activeFilters.find(t=>t.type==="selection");r&&this.activeFilters.remove(r)}async zoomToSelection(){const{layer:r,view:t}=this,e=this.highlightIds.toArray();if(!r||!t||!e.length)return;const i=r.createQuery();i.objectIds=e,i.returnGeometry=!0;const s=await r.queryFeatures(i);try{await t.goTo(s.features)}catch(o){o.name!=="AbortError"&&console.error(o)}}async _refresh(){var t;await this.store.refreshLayerInfo();const r=this.highlightIds.toArray();r.length&&(await this.store.verifyFeaturesByObjectId(r)).forEach((e,i)=>{e||this.deselectRows(r[i])}),(t=this.grid)==null||t.refreshPageCache()}_onLayerLoad(){var t;const r=(t=this.layer.capabilities)==null?void 0:t.query.maxRecordCount;r&&r<this.pageSize&&this.grid&&(this.grid.pageSize=r),this._generateColumns()}_onLayerRefresh(r){this.autoRefreshEnabled&&r.dataChanged&&this.refresh()}_generateColumns(){var e;this._drainColumns();const r=[],t=(e=this.tableTemplate)!=null&&e.columnTemplates?this._generateColumnsFromTemplates(this.tableTemplate.columnTemplates):this._generateDefaultFieldColumns();r.push(...t),r.length&&this.attachmentsEnabled&&r.push(this._generateAttachmentsColumn()),this.columns.addMany([...r])}_generateColumnsFromTemplates(r){const{editingEnabled:t,grid:e,layer:i,messages:s,messagesCommon:o,messagesURIUtils:n,store:a,tableTemplate:l}=this,d=(i==null?void 0:i.fields)??[],h=p=>{var f;const _="fieldName"in p&&((f=p.fieldName)==null?void 0:f.toLowerCase());return d.find(m=>{var y;return _===((y=m.name)==null?void 0:y.toLowerCase())})};return r.map(p=>({template:p,field:h(p)})).filter(({template:p,field:_})=>_!=null||p.type==="group"&&"columnTemplates"in p||p.type==="column").map(({template:p,field:_})=>{if("fieldName"in p){const f=p.visible===!1||p.visible!==!0&&this._isFieldHidden(_==null?void 0:_.name),{direction:m,formatFunction:y,frozen:I,frozenToEnd:P,initialSortPriority:S,invalid:$,menuConfig:j,sortable:R,textAlign:Z}=p,X=(l==null?void 0:l.expressionInfos)||null,{timeZone:be,timeZoneName:Ut}=this._getTimeZoneInfoForFieldColumn(_);return new os({sortable:R!==!1,direction:m,editingEnabled:t,expressionInfos:X,field:_,formatFunction:y,frozen:I,frozenToEnd:P,grid:e,hidden:f,initialSortPriority:S,invalid:$,layer:i,messages:s,messagesCommon:o,messagesURIUtils:n,menuConfig:j,store:a,template:p,textAlign:Z,timeZone:be,timeZoneName:Ut})}if(p.type==="group"&&"columnTemplates"in p){const f=this._generateColumnsFromTemplates(p.columnTemplates),m=p.visible===!1||p.visible!==!0&&this._isFieldHidden(p.label),{label:y}=p;return new Bd({header:y,columns:f,hidden:m})}return new $t({...p,timeZone:this.timeZone})})}_generateDefaultFieldColumns(){var a;const{editingEnabled:r,grid:t,layer:e,messages:i,messagesCommon:s,messagesURIUtils:o,store:n}=this;return(((a=this.layer)==null?void 0:a.fields)??[]).map(l=>{const{timeZone:d,timeZoneName:h}=this._getTimeZoneInfoForFieldColumn(l);return new os({editingEnabled:r,field:l,grid:t,hidden:this._isFieldHidden(l.name),layer:e,store:n,messages:i,messagesCommon:s,messagesURIUtils:o,timeZone:d,timeZoneName:h})})}_getTimeZoneInfoForFieldColumn(r){const{timeZone:t,view:e}=this;return!r||(r==null?void 0:r.type)!=="date"&&(r==null?void 0:r.type)!=="timestamp-offset"?{timeZone:void 0,timeZoneName:void 0}:zo("preferredTimeZone"in this.layer?this.layer.preferredTimeZone:null,"datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,t??(e==null?void 0:e.timeZone)??Mo,Nt("short-time"),r.type)}_generateAttachmentsColumn(){var r;return new Vo({header:((r=this.messages)==null?void 0:r.attachments)??"Attachments"})}_sortOrdersToLayerOrderByFields(r){return r!=null&&r.length?r.filter((t,e,i)=>i.map(s=>s.path).indexOf(t.path)===e).filter(({direction:t})=>!!t).map(({direction:t,path:e})=>e+" "+(t==null?void 0:t.toUpperCase())):[]}_isFieldHidden(r){const t=r==null?void 0:r.toLowerCase();return(this.hiddenFields??this._defaultHiddenFields).some(e=>e.toLowerCase()===t)}_highlight(r){this.layerView&&ko(this.layerView)&&this._highlights.add(this.layerView.highlight(r),r)}_removeHighlight(r){this._highlights.remove(r)}_getStoreItemsFromSelectionParams(r){const t=[];return this.layer?((r=r instanceof Array?r:[r]).forEach(e=>{let i=e instanceof tr?e:null;const s=i?i.getObjectId():e;if(typeof s=="number"||typeof s=="string"){if(!i){const o=this.store.getItemByObjectId(s);o&&(i=o.feature)}t.push({objectId:s,feature:i})}}),t):[]}_onHighlightIdsChange(r){const{highlightEnabled:t}=this,{added:e,removed:i}=r;t&&(e.forEach(s=>this._highlight(s)),i.forEach(s=>this._removeHighlight(s))),this.emit("selection-change",{added:e,removed:i})}_drainColumns(){this.columns.drain(r=>!r.destroyed&&r.destroy())}};c([u()],w.prototype,"_defaultHiddenFields",null),c([u({readOnly:!0})],w.prototype,"activeFilters",void 0),c([u({readOnly:!0})],w.prototype,"activeSortOrders",null),c([u()],w.prototype,"attachmentsEnabled",void 0),c([u()],w.prototype,"autoRefreshEnabled",void 0),c([u()],w.prototype,"cellClassNameGenerator",void 0),c([u({readOnly:!0})],w.prototype,"columns",void 0),c([u()],w.prototype,"dataProvider",void 0),c([u()],w.prototype,"editingEnabled",void 0),c([u()],w.prototype,"filterGeometry",null),c([u({readOnly:!0})],w.prototype,"grid",void 0),c([u()],w.prototype,"hiddenFields",null),c([u()],w.prototype,"highlightEnabled",void 0),c([u()],w.prototype,"highlightOnRowSelectEnabled",null),c([u({readOnly:!0})],w.prototype,"itemIdPath",void 0),c([u()],w.prototype,"layer",void 0),c([u()],w.prototype,"layerView",null),c([u()],w.prototype,"messages",null),c([u(),De("esri/t9n/common")],w.prototype,"messagesCommon",void 0),c([u(),De("esri/widgets/support/t9n/uriUtils")],w.prototype,"messagesURIUtils",void 0),c([u()],w.prototype,"relatedRecordsEnabled",void 0),c([u()],w.prototype,"returnGeometryEnabled",void 0),c([u({readOnly:!0})],w.prototype,"state",null),c([u({readOnly:!0,type:ho})],w.prototype,"store",void 0),c([u()],w.prototype,"tableTemplate",void 0),c([u()],w.prototype,"timeExtent",null),c([u()],w.prototype,"timeZone",void 0),c([u()],w.prototype,"view",void 0),c([u()],w.prototype,"highlightIds",null),w=c([W("esri.widgets.FeatureTable.FeatureTableViewModel")],w);const Vd=w,Qs={header:!0,menu:!0,menuItems:{clearSelection:!0,refreshData:!0,toggleColumns:!0,selectedRecordsShowAllToggle:!0,selectedRecordsShowSelectedToggle:!0,zoomToSelection:!0,deleteSelection:!0},selectionColumn:!0,columnMenus:!0},de="esri-feature-table",Re=`${de}__prompt`,U={base:de,header:`${de}__header`,title:`${de}__title`,content:`${de}__content`,loader:`${de}__loader`,loaderContainer:`${de}__loader-container`,menuContainer:`${de}__menu`,promptContainer:Re,promptHeader:`${Re}__header`,promptHeading:`${Re}__header__heading`,promptMessage:`${Re}__message`,promptDivider:`${Re}__divider`,promptActions:`${Re}__actions`};let g=class extends Ci{constructor(r,t){super(r,t),this._prompt=null,this.menu=null,this.menuConfig=null,this.viewModel=new Vd,this.visibleElements={...Qs},this._showDeletePrompt=this._showDeletePrompt.bind(this),this._onDeleteSelectionClick=this._onDeleteSelectionClick.bind(this)}initialize(){var e,i,s;this.addHandles([Ne(()=>this.viewModel.columns,"change",()=>this._syncMenuConfig()),Ne(()=>this.viewModel.activeFilters,"change",()=>this._syncMenuConfig()),Ne(()=>this.viewModel,"selection-change",o=>{this._syncMenuConfig(),this.emit("selection-change",o)}),T(()=>[this.viewModel.store.querying,this.viewModel.store.syncing,this.editingEnabled],()=>this.scheduleRender()),T(()=>[this.menuConfig,this.editingEnabled],()=>this._syncMenuConfig()),T(()=>this.messages,()=>{var o;this.menu&&(this.menu.label=(o=this.messages)==null?void 0:o.options),this._syncMenuConfig()})]),this._set("menu",new ir({label:(e=this.messages)==null?void 0:e.options,iconClass:ie.handleHorizontal,...this.menuConfig}));const{attachmentsEnabled:r,relatedRecordsEnabled:t}=this;(s=(i=this.viewModel)==null?void 0:i.store)==null||s.set({attachmentsEnabled:r,relatedRecordsEnabled:t})}loadDependencies(){return Xs({button:()=>Q(()=>import("./calcite-button-BEiwyGvk.js"),__vite__mapDeps([0,1,2,3])),icon:()=>Q(()=>import("./calcite-icon-BkHotFMP.js"),__vite__mapDeps([5,2,3])),scrim:()=>Q(()=>import("./calcite-scrim-De915RLe.js"),__vite__mapDeps([6,2,3])),action:()=>Q(()=>import("./calcite-action-BTM0fbsv.js"),__vite__mapDeps([7,2,3])),"action-bar":()=>Q(()=>import("./calcite-action-bar-gDmUv4Zi.js"),__vite__mapDeps([8,2,3,9,10])),"input-date-picker":()=>Q(()=>import("./calcite-input-date-picker-DWn4WYL3.js"),__vite__mapDeps([11,2,3,12,13,14,15,16])),"input-time-picker":()=>Q(()=>import("./calcite-input-time-picker-N84mbiCR.js"),__vite__mapDeps([17,2,3,18,12,13,14,15,16])),"input-time-zone":()=>Q(()=>import("./calcite-input-time-zone-Y6IdxQPT.js"),__vite__mapDeps([19,2,3,20,21,22,23,24,12,25,13]))})}destroy(){var r;this._prompt=null,(r=this.menu)==null||r.destroy()}get activeFilters(){return this.viewModel.activeFilters}get activeSortOrders(){return this.viewModel.activeSortOrders}get attachmentsEnabled(){return this.viewModel.attachmentsEnabled}set attachmentsEnabled(r){this.viewModel.attachmentsEnabled=r}get autoRefreshEnabled(){return this.viewModel.autoRefreshEnabled}set autoRefreshEnabled(r){this.viewModel.autoRefreshEnabled=r}get columnPerformanceModeEnabled(){return this.viewModel.columnPerformanceModeEnabled}set columnPerformanceModeEnabled(r){this.viewModel.columnPerformanceModeEnabled=r}get columnReorderingEnabled(){return this.viewModel.columnReorderingEnabled}set columnReorderingEnabled(r){this.viewModel.columnReorderingEnabled=r}get columns(){return this.viewModel.columns}get editingEnabled(){return this.viewModel.editingEnabled}set editingEnabled(r){this.viewModel.editingEnabled=r}get filterGeometry(){return this.viewModel.filterGeometry}set filterGeometry(r){this.viewModel.filterGeometry=r}get grid(){return this.viewModel.grid}get hiddenFields(){return this.viewModel.hiddenFields}set hiddenFields(r){this.viewModel.hiddenFields=r}get highlightEnabled(){return this.viewModel.highlightEnabled}set highlightEnabled(r){this.viewModel.highlightEnabled=r}get highlightIds(){return this.viewModel.highlightIds}set highlightIds(r){this.viewModel.highlightIds=r}get highlightOnRowSelectEnabled(){return this.viewModel.highlightEnabled}set highlightOnRowSelectEnabled(r){this.viewModel.highlightEnabled=r}get label(){var r;return((r=this.messages)==null?void 0:r.widgetLabel)??""}set label(r){this._overrideIfSome("label",r)}get layer(){return this.viewModel.layer}set layer(r){this.viewModel.layer=r}get messages(){return this.viewModel.messages}set messages(r){this.viewModel.messages=r}get messagesCommon(){return this.viewModel.messagesCommon}set messagesCommon(r){this.viewModel.messagesCommon=r}get messagesURIUtils(){return this.viewModel.messagesURIUtils}set messagesURIUtils(r){this.viewModel.messagesURIUtils=r}get multiSortEnabled(){return this.viewModel.multiSortEnabled}set multiSortEnabled(r){this.viewModel.multiSortEnabled=r}get pageSize(){return this.viewModel.pageSize}set pageSize(r){this.viewModel.pageSize=r}get relatedRecordsEnabled(){return this.viewModel.relatedRecordsEnabled}set relatedRecordsEnabled(r){this.viewModel.relatedRecordsEnabled=r}get state(){return this.viewModel.state}get tableTemplate(){return this.viewModel.tableTemplate}set tableTemplate(r){this.viewModel.tableTemplate=r}get timeExtent(){return this.viewModel.timeExtent}set timeExtent(r){this.viewModel.timeExtent=r}get timeZone(){return this.viewModel.timeZone}set timeZone(r){this.viewModel.timeZone=r}get view(){return this.viewModel.view}set view(r){this.viewModel.view=r}castVisibleElements(r){var e;const t={...Qs,...r};return(e=this.grid)==null||e.set("visibleElements",{...this.grid.visibleElements,selectionColumn:t.selectionColumn,columnMenus:t.columnMenus}),t}clearSelection(){return Do(St.getLogger(this),"`FeatureTable.clearSelection` is deprecated in favor of 'FeatureTable.highlightIds'",{replacement:"FeatureTable.highlightIds",version:"4.25",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html#highlightIds"}),this.viewModel.clearSelection()}clearSelectionFilter(){return this.viewModel.clearSelectionFilter()}deleteSelection(r){return this.highlightIds.length?r?(this._showDeletePrompt(),this.scheduleRender(),Promise.resolve()):this.viewModel.deleteSelection():Promise.resolve()}deselectRows(r){return this.viewModel.deselectRows(r)}filterBySelection(){return this.viewModel.filterBySelection()}findColumn(r){return this.viewModel.findColumn(r)}hideColumn(r){var t;(t=this.grid)==null||t.hideColumn(r),this._syncMenuConfig()}refresh(){return this.viewModel.refresh()}get returnGeometryEnabled(){return this.viewModel.returnGeometryEnabled}set returnGeometryEnabled(r){this.viewModel.returnGeometryEnabled=r}showAllColumns(){return this.viewModel.showAllColumns()}showColumn(r){var t;(t=this.grid)==null||t.showColumn(r),this._syncMenuConfig()}sortColumn(r,t){return this.viewModel.sortColumn(r,t)}selectRows(r){return this.viewModel.selectRows(r)}scrollToIndex(r){return this.viewModel.scrollToIndex(r)}zoomToSelection(){this.viewModel.zoomToSelection()}render(){var e;const{_prompt:r}=this,t=r!=null?C("calcite-scrim",null,this._renderPrompt(r)):null;return C("div",{bind:this,class:this.classes(U.base,wi.widget)},this.visibleElements.header?this._renderHeader():null,C("div",{class:U.content},this.state!=="disabled"&&((e=this.grid)==null?void 0:e.render())),t)}_renderPrompt({title:r,message:t,context:e,actions:i}){const s=C("calcite-button",{appearance:"solid",key:"prompt-primary-button",kind:e==="danger"?"danger":"brand",onclick:i.primary.action,width:i.secondary?"half":"full"},i.primary.label),o=i.secondary?C("calcite-button",{appearance:"outline",key:"prompt-secondary-button",kind:e==="danger"?"danger":"brand",onclick:i.secondary.action,width:"half"},i.secondary.label):null;return C("div",{class:`${U.promptContainer}--${e}`},C("div",{class:U.promptHeader},C("calcite-icon",{icon:"exclamation-mark-triangle"}),C(No,{class:U.promptHeading,level:2},r)),C("div",{class:U.promptMessage},t),C("div",{class:U.promptDivider}),C("div",{class:U.promptActions},o,s))}_renderHeader(){return C("div",{class:U.header,key:"header"},this._renderLoader(),this._renderTitle(),this.visibleElements.menu?this._renderMenu():null)}_renderTitle(){return C("div",{class:U.title,key:"title"},this._getTitle())}_getTitle(){const{grid:r,highlightIds:t,layer:e,messages:i,viewModel:{size:s}}=this;return r&&e?Xi(i.header,{title:e.title,count:s,selected:t.length||0}):""}_renderLoader(){const{state:r,store:t}=this.viewModel,e=r==="loading"||t.syncing||t.querying;return C("div",{class:U.loaderContainer},e?C("div",{class:U.loader,key:"loader"}):null)}_renderMenu(){var r;return C("div",{class:U.menuContainer},(r=this.menu)==null?void 0:r.render())}_syncMenuConfig(){var r;(r=this.menu)==null||r.set({...this.menuConfig,items:this._getMenuItems()})}_getMenuItems(){var i;const r=(i=this.menuConfig)==null?void 0:i.items,t=this._getDefaultMenuItems(),e=[];return t!=null&&t.length&&e.push(...t),r!=null&&r.length&&e.push(...r),e}_getDefaultMenuItems(){var n,a,l,d;const{highlightIds:r,messages:t,viewModel:e,visibleElements:i}=this,{menuItems:s}=i,o=[];if(s!=null&&s.refreshData&&o.push(new J({selectionEnabled:!1,label:t==null?void 0:t.refreshData,clickFunction:()=>this.refresh()})),r.length){const h=this._getSelectionFilter();if(s!=null&&s.clearSelection&&o.push(new J({selectionEnabled:!1,label:t==null?void 0:t.clearSelection,clickFunction:()=>{var p;return(p=this.highlightIds)==null?void 0:p.removeAll()}})),s!=null&&s.zoomToSelection&&this.view&&o.push(new J({selectionEnabled:!1,label:t==null?void 0:t.zoomToSelection,clickFunction:()=>this.viewModel.zoomToSelection()})),(s==null?void 0:s.selectedRecordsShowSelectedToggle)&&(!h||r.length!==h.objectIds.length)){const p=t==null?void 0:t.showSelected,_=new J({selectionEnabled:!1,label:p,clickFunction:()=>{this.filterBySelection(),_.set("label",p)}});o.push(_)}s!=null&&s.deleteSelection&&this.editingEnabled&&((l=(a=(n=this.layer)==null?void 0:n.capabilities)==null?void 0:a.operations)!=null&&l.supportsDelete)&&o.push(new J({selectionEnabled:!1,label:t.deleteSelection,clickFunction:this._showDeletePrompt}))}if(s!=null&&s.selectedRecordsShowAllToggle&&this._hasSelectionFilter()){const h=t.showAllRecords,p=new J({selectionEnabled:!1,label:h,clickFunction:()=>{this.clearSelectionFilter(),p.set("label",h)}});o.push(p)}return s!=null&&s.toggleColumns&&o.push(new J({iconClass:ie.right,label:t==null?void 0:t.toggleColumns,clickFunction:this._toggleMenuItemSelectedIcon,items:(d=e==null?void 0:e.columns)==null?void 0:d.items.map(({header:h,hidden:p,path:_})=>new J({label:h||_,selected:!p,selectionEnabled:!0,iconClass:ie.checkMark,clickFunction:()=>this._toggleColumnFromMenuItem(_)}))})),o.length?o:null}_toggleMenuItemSelectedIcon({item:r}){r==null||r.set("iconClass",r!=null&&r.selected?ie.down:ie.right)}_toggleColumnFromMenuItem(r){const{grid:t,viewModel:e}=this,i=e.findColumn(r);i!=null&&i.hidden?t==null||t.showColumn(r):t==null||t.hideColumn(r)}_showDeletePrompt(){const{messages:r,messagesCommon:t}=this,e=this.highlightIds.length||0,i=Xi(r.deleteSelectionCount,{count:e});this.menu&&(this.menu.open=!1),this._prompt={title:i,message:r.deleteRecordsRemoved,context:"danger",actions:{primary:{label:t.delete,action:this._onDeleteSelectionClick},secondary:{label:r.keepRecords,action:()=>this._prompt=null}}}}async _onDeleteSelectionClick(){await this.viewModel.deleteSelection(),this._prompt=null}_getSelectionFilter(){var r;return(r=this.viewModel.activeFilters)==null?void 0:r.find(t=>t.type==="selection")}_hasSelectionFilter(){return!!this._getSelectionFilter()}};c([u({readOnly:!0})],g.prototype,"activeFilters",null),c([u({readOnly:!0})],g.prototype,"activeSortOrders",null),c([u()],g.prototype,"attachmentsEnabled",null),c([u()],g.prototype,"autoRefreshEnabled",null),c([u()],g.prototype,"columnPerformanceModeEnabled",null),c([u()],g.prototype,"columnReorderingEnabled",null),c([u({readOnly:!0})],g.prototype,"columns",null),c([u()],g.prototype,"editingEnabled",null),c([u()],g.prototype,"filterGeometry",null),c([u({readOnly:!0})],g.prototype,"grid",null),c([u()],g.prototype,"hiddenFields",null),c([u()],g.prototype,"highlightEnabled",null),c([u()],g.prototype,"highlightIds",null),c([u()],g.prototype,"highlightOnRowSelectEnabled",null),c([u()],g.prototype,"label",null),c([u()],g.prototype,"layer",null),c([u(),De("esri/widgets/FeatureTable/t9n/FeatureTable")],g.prototype,"messages",null),c([u(),De("esri/t9n/common")],g.prototype,"messagesCommon",null),c([u(),De("esri/widgets/support/t9n/uriUtils")],g.prototype,"messagesURIUtils",null),c([u({readOnly:!0})],g.prototype,"menu",void 0),c([u()],g.prototype,"menuConfig",void 0),c([u()],g.prototype,"multiSortEnabled",null),c([u()],g.prototype,"pageSize",null),c([u()],g.prototype,"relatedRecordsEnabled",null),c([u({readOnly:!0})],g.prototype,"state",null),c([u()],g.prototype,"tableTemplate",null),c([u()],g.prototype,"timeExtent",null),c([u()],g.prototype,"timeZone",null),c([u()],g.prototype,"view",null),c([u()],g.prototype,"viewModel",void 0),c([u()],g.prototype,"visibleElements",void 0),c([Dt("visibleElements")],g.prototype,"castVisibleElements",null),c([u()],g.prototype,"returnGeometryEnabled",null),g=c([W("esri.widgets.FeatureTable")],g);const Hh=g;export{Hh as default};
