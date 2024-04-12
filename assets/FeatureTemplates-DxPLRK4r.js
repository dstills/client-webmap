function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D2dWKXoe.js","assets/index-DvE0Cji0.css","assets/calcite-icon-CsxVz9Z_.js","assets/calcite-loader-DRitIvr9.js","assets/calcite-input-DQkRKO4G.js","assets/input2-DEw4D7Vw.js","assets/Validation-CmI-spCV.js","assets/input-kBVpmtEZ.js","assets/input-message-CfwgPjfy.js","assets/progress-DJrMrjAk.js","assets/calcite-list-HBsL5VQE.js","assets/utils3-9iZXvoug.js","assets/filter-B7NKEWeN.js","assets/calcite-list-item-DOc8mtEY.js","assets/calcite-notice-DJt0sRGj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{E as l,F as n,J as T,O as A,br as N,P as J,v2 as W,b0 as X,_ as I,K as ee,c4 as te,al as V,c5 as se,b9 as re,j3 as p,t7 as K,p_ as le,j0 as j,nL as ie,j1 as ne,v3 as oe,j2 as ae,nF as de}from"./index-D2dWKXoe.js";import{h as Y}from"./featureFormUtils-DtaQEEWU.js";var S;const ue="esri.widgets.FeatureTemplates.TemplateItem";let b=S=class extends A{constructor(e){super(e),this._activeFetchInfo={id:null,request:null},this.disabled=!1,this.layer=null,this.template=null,this.thumbnail=null}initialize(){this.addHandles(N(()=>{const{layer:e}=this;return[e&&"renderer"in e?e.renderer:null,this.template]},()=>{this._activeFetchInfo.id=null,this._activeFetchInfo.request=null,this._set("thumbnail",null)},J))}get description(){var e;return(e=this.template)==null?void 0:e.description}set description(e){this.template&&(this.template.description=e)}get label(){var e;return(e=this.template)==null?void 0:e.name}set label(e){this.template&&(this.template.name=e)}get id(){var e;return`${this.label??""}–${(e=this.layer)==null?void 0:e.id}`}get supportsUpload(){var e;return((e=this.layer)==null?void 0:e.type)==="scene"}clone(){const e=this.thumbnail!=null?this.thumbnail.cloneNode(!0):null,t=new S({layer:this.layer,template:this.template});return t._set("thumbnail",e),t}static async fetchThumbnail(e,t){var i;const s=await ce(e,t);if(s==null)return null;const r={maxSize:36};return((i=e.renderer)==null?void 0:i.type)==="dictionary"&&(r.fieldMap=e.renderer.fieldMap??void 0,r.feature={attributes:t.prototype.attributes??{}}),await W(s,r)}};async function ce(e,t){const{renderer:s}=e;if(s){const r=new X({attributes:t.prototype.attributes}),i=await s.getSymbolAsync(r);if(i)return i}return pe(e)}async function pe(e){const{geometryType:t}=e,s=t==="point"||t==="multipoint"?await I(()=>import("./index-D2dWKXoe.js").then(r=>r.E_),__vite__mapDeps([0,1])):t==="polyline"?await I(()=>import("./index-D2dWKXoe.js").then(r=>r.EY),__vite__mapDeps([0,1])):t==="polygon"||t==="mesh"||t==="multipatch"?await I(()=>import("./index-D2dWKXoe.js").then(r=>r.EZ),__vite__mapDeps([0,1])):null;return s?new s.default:null}l([n()],b.prototype,"description",null),l([n()],b.prototype,"disabled",void 0),l([n()],b.prototype,"label",null),l([n()],b.prototype,"layer",void 0),l([n()],b.prototype,"template",void 0),l([n({readOnly:!0})],b.prototype,"thumbnail",void 0),l([n()],b.prototype,"id",null),l([n()],b.prototype,"supportsUpload",null),b=S=l([T(ue)],b);const x=b;let $=class extends ee(A){constructor(t){super(t),this.items=null,this.label=null}get id(){return this.label}findByTemplate(t){return this.items.find(s=>s.template===t)}};l([n()],$.prototype,"items",void 0),l([n()],$.prototype,"label",void 0),l([n()],$.prototype,"id",null),$=l([T("esri.widgets.FeatureTemplates.TemplateItemGroup")],$);const me=$,U=e=>e==null||typeof e!="object"?[]:[..."templates"in e&&Array.isArray(e.templates)?e.templates:[],..."types"in e&&Array.isArray(e.types)?e.types.flatMap(t=>t.templates):[]];var w;const he=({layer:e})=>({key:e,label:e.title??""}),ye=({layer:e})=>({key:e.geometryType,label:e.geometryType??""});let h=w=class extends te.EventedAccessor{constructor(e){super(e),this._groupPool=new V(me),this._itemPool=new V(x),this.disabled=!1,this.disabledItemFunction=null,this.filterFunction=null,this.selectedItem=null}initialize(){this._get("groupBy")||(this.groupBy="layer")}get _featureTemplatesByLayer(){if(!this.layers)return new Map;const e=new Map;for(const t of this.layers)if(t.type==="subtype-group")for(const s of t.sublayers)e.set(s,U(s));else e.set(t,U(t));return e}set groupBy(e){if(this._set("groupBy",e),typeof e!="function")switch(e){case"layer":this._groupByFunction=he;break;case"geometry":this._groupByFunction=ye;break;default:this._groupByFunction=null}else this._groupByFunction=t=>this._ensureGroupByObject(e(t))}set layers(e){const t="layers";if(this.removeHandles(t),e){const s=()=>this.notifyChange("state");this.addHandles(e.map(r=>se(()=>r.loadStatus,s)),t)}this._set("layers",e)}get layers(){return this._get("layers")}get state(){const{layers:e}=this;return e&&e.length!==0?e.some(t=>t.loadStatus==="loading"||t.loadStatus==="not-loaded")?"loading":"ready":"disabled"}get numberOfFeatureTemplates(){return Array.from(this._featureTemplatesByLayer.values()).reduce((e,t)=>e+t.length,0)}get items(){var a,m,f;if(this.numberOfFeatureTemplates===0)return this._releasePreviousItems(),[];const e=this._featureTemplatesByLayer,t=[],s=this.filterFunction!=null?this.filterFunction:w._nullFilterFunction;for(const[d,c]of e)if(d.loaded||d.type==="subtype-sublayer"&&((a=d.parent)!=null&&a.loaded)){const o=(m=re(d))==null?void 0:m.operations;if(o!=null&&o.supportsEditing&&(o!=null&&o.supportsAdd))for(const y of c)t.push({layer:d,template:y,matchesFilter:s({label:y.name})})}if(this._groupByFunction==null){const d=t.filter(({matchesFilter:c})=>c).map(({template:c,layer:o})=>this._createItem(c,o));return this._releasePreviousItems(),d}const r=new Map;for(const d of t){const{template:c,layer:o}=d,y=this._groupByFunction({template:c,layer:o}),{key:_,label:v}=y.key!=null?y:w.nullGroupBy;r.has(_)||r.set(_,{label:v,templateItemInfos:[]}),(f=r.get(_))==null||f.templateItemInfos.push(d)}const i=[];for(const d of r.values()){const{label:c,templateItemInfos:o}=d,y=o.filter(({matchesFilter:v})=>v),_=s({label:c})?o:o.length>0?y:[];if(_.length>0){const v=_.map(({template:B,layer:E})=>this._createItem(B,E));i.push(this._createGroup(c,v))}}return i.length===1&&i[0].label===w.nullGroupBy.label?(this._releasePreviousItems(),i[0].items):(this._releasePreviousItems(),i)}refresh(){this.notifyChange("items")}select(e,{emit:t=!0}={}){const s=this.selectedItem,r=(e==null?void 0:e.clone())||null;this._set("selectedItem",r),t&&this.emit("select",{item:r,oldItem:s,template:(r==null?void 0:r.template)??null})}_createItem(e,t){var i;const s=this._itemPool.acquire(),r=((i=this.disabledItemFunction)==null?void 0:i.call(this,{template:e,layer:t}))??!1;return s.set({disabled:r,layer:t,template:e}),s}_createGroup(e,t){const s=this._groupPool.acquire();return s.set("label",e),s.items=t,s}_releasePreviousItems(){this._destroyItems(this._get("items"))}_destroyItems(e){e&&(e[0]instanceof x?e.forEach(t=>this._destroyItem(t)):e.forEach(t=>this._destroyGroup(t)))}_destroyGroup(e){e.items.forEach(t=>this._destroyItem(t)),e.items.length=0,this._groupPool.release(e)}_destroyItem(e){e.layer=null,e.template=null,this._itemPool.release(e)}_ensureGroupByObject(e){return typeof e=="string"?{key:e,label:e}:e}};h.nullGroupBy={key:Symbol(),label:"Other​"},h._nullFilterFunction=e=>!0,l([n()],h.prototype,"_featureTemplatesByLayer",null),l([n()],h.prototype,"_groupByFunction",void 0),l([n()],h.prototype,"disabled",void 0),l([n()],h.prototype,"disabledItemFunction",void 0),l([n()],h.prototype,"filterFunction",void 0),l([n()],h.prototype,"groupBy",null),l([n()],h.prototype,"layers",null),l([n()],h.prototype,"state",null),l([n({readOnly:!0})],h.prototype,"numberOfFeatureTemplates",null),l([n({readOnly:!0})],h.prototype,"items",null),l([n({readOnly:!0})],h.prototype,"selectedItem",void 0),h=w=l([T("esri.widgets.FeatureTemplates.FeatureTemplatesViewModel")],h);const H=h,C="esri-item-list",M=`${C}__list-item`,g={base:C,filterContainerSticky:`${C}__filter-container--sticky`,group:`${C}__group`,groupHeader:`${C}__group__header`,item:M,itemDisabled:`${M}--disabled`,itemIcon:`${M}-icon`,itemContentEnd:`${M}-content-end`,noMatchesMessage:`${C}__no-matches-message`,scroller:`${C}__scroller`,scrollerEnabled:`${C}__scroller--enabled`},fe=4;function be(e){const{disabled:t,filterText:s="",id:r,messages:i,onFilterChange:a,...m}=e;return p("div",{key:r},e.filterEnabled??1?ve({disabled:t,filterText:s,id:r,messages:i,onFilterChange:a}):null,ge({...m,disabled:t,enableListScroll:e.enableListScroll??!0,filterText:s,messages:i}))}function _e(e){return!!e.items}function ge(e){const{headingLevel:t,items:s,...r}=e;return s.length===0?p("div",{class:g.noMatchesMessage,key:"no-matches"},e.messages.noMatches):p("div",{class:K({[g.scroller]:!0,[g.scrollerEnabled]:!!e.enableListScroll}),key:"item-container"},s.map(i=>_e(i)?Ie({...r,group:i,headingLevel:t}):Z({...r,grouped:!0,item:i})))}function ve(e){const{disabled:t,messages:s,filterText:r,enableListScroll:i}=e;return p("div",{class:i?void 0:g.filterContainerSticky,key:"filter"},p("calcite-input",{disabled:t,placeholder:s.filterPlaceholder,type:"search",value:r,onCalciteInputInput:a=>{const m=a.currentTarget;e.onFilterChange&&e.onFilterChange(m.value)}}))}function Z(e){const{disabled:t,grouped:s,identify:r,item:i,onItemMouseEnter:a,onItemMouseLeave:m,onItemSelect:f,renderIcon:d,renderCustomItem:c,renderItemContent:o,renderItemContentEnd:y,renderItemLabel:_,renderItemDescription:v,selectedItem:B}=e,E=z(i,r),D=E===z(B,r),G=c==null?void 0:c(e);if(G)return G;const L=o==null?void 0:o(i),R=y==null?void 0:y(i),P=!(!i.disabled&&!t);return p("calcite-list-item",{afterUpdate:F=>{F.selected=D},"aria-level":s?"2":"",class:K({[g.item]:!0,[g.itemDisabled]:P}),"data-item":i,description:L?void 0:(v==null?void 0:v(i))??void 0,disabled:P,key:E,label:L?void 0:(_==null?void 0:_(i))??i.label??void 0,onmouseenter:F=>a==null?void 0:a(k(F)),onmouseleave:F=>m==null?void 0:m(k(F)),selected:D,tabIndex:P?-1:0,onCalciteListItemSelect:F=>{F.preventDefault(),f==null||f(k(F))}},p("div",{class:g.itemIcon,key:"content-start",slot:"content-start"},d==null?void 0:d(i)),L?p("div",{key:"content",slot:"content"},L):null,R?p("div",{class:g.itemContentEnd,key:"content-end",slot:"content-end"},R):null)}function z(e,t){return e?`${(t==null?void 0:t(e))||e.id}__${e.label}`:""}function k(e){return e.currentTarget["data-item"]}function Ie(e){const{disabled:t,group:s,headingLevel:r=fe,selectionMode:i="none",renderCustomGroupContent:a,...m}=e,f=a==null?void 0:a(e);return p("div",{class:g.group,key:s.label??void 0},p(le,{class:g.groupHeader,level:r},s.label),f||p("calcite-list",{disabled:t,selectionAppearance:"border",selectionMode:i},s.items.map(d=>Z({...m,disabled:t,item:d,grouped:!0}))))}let O=class extends A{constructor(e){super(e),this.filter=!0}};l([n({type:Boolean,nonNullable:!0})],O.prototype,"filter",void 0),O=l([T("esri.widgets.FeatureTemplates.VisibleElements")],O);const Q=O,Fe={base:"esri-feature-templates"};function Ce(e){return e.length>0&&Y(e[0])}function $e(e){return e.id}let u=class extends ne{constructor(e,t){super(e,t),this.enableListScroll=!0,this.filterText="",this.headingLevel=4,this.messages=null,this.messagesCommon=null,this.selectionMode="none",this.viewModel=new H,this.visibleElements=new Q,this.renderCustomItem=s=>null,this.renderCustomGroupContent=s=>null,this.renderItemLabel=()=>null,this.renderItemDescription=()=>null,this.renderItemContent=s=>null,this.renderItemContentEnd=s=>null,this._iconIntersectionObserver=new IntersectionObserver((s,r)=>{s.forEach(async i=>{if(i.isIntersecting){const a=i.target;if(Te(a))return void r.unobserve(a);const m=we(a),{layer:f,template:d}=m;q(a,!0);const c=await x.fetchThumbnail(f,d).catch(()=>(q(a,!1),null));if(c==null)return;a.appendChild(c)}})}),this._renderItemIcon=s=>oe(s.layer)?p("span",{"data-has-icon":!0,"data-item":s,key:"icon"},p("calcite-icon",{icon:"table"})):p("span",{afterCreate:this._afterItemCreateOrUpdate,afterRemoved:this._afterItemRemoved,afterUpdate:this._afterItemCreateOrUpdate,"data-has-icon":!1,"data-item":s,key:"icon"}),this._afterItemCreateOrUpdate=s=>{var r;(r=this._iconIntersectionObserver)==null||r.observe(s)},this._afterItemRemoved=s=>{var r;(r=this._iconIntersectionObserver)==null||r.unobserve(s)}}initialize(){const e=({label:t})=>!this.filterText||!!(t!=null&&t.toLowerCase().includes(this.filterText.toLowerCase()));this.addHandles(N(()=>this.viewModel,(t,s)=>{t&&!t.filterFunction&&(this.filterFunction=e),s&&s!==t&&s.filterFunction===e&&(s.filterFunction=null)},J))}destroy(){var e;(e=this._iconIntersectionObserver)==null||e.disconnect(),this._iconIntersectionObserver=null}loadDependencies(){return ae({icon:()=>I(()=>import("./calcite-icon-CsxVz9Z_.js"),__vite__mapDeps([2,0,1])),loader:()=>I(()=>import("./calcite-loader-DRitIvr9.js"),__vite__mapDeps([3,0,1])),input:()=>I(()=>import("./calcite-input-DQkRKO4G.js"),__vite__mapDeps([4,5,0,1,6,7,8,9])),list:()=>I(()=>import("./calcite-list-HBsL5VQE.js"),__vite__mapDeps([10,0,1,11,12,5,6,7,8,9])),"list-item":()=>I(()=>import("./calcite-list-item-DOc8mtEY.js"),__vite__mapDeps([13,0,1,11])),notice:()=>I(()=>import("./calcite-notice-DJt0sRGj.js"),__vite__mapDeps([14,0,1]))})}get disabled(){return this.viewModel.disabled}set disabled(e){this.viewModel.disabled=e}get filterFunction(){return this.viewModel.filterFunction}set filterFunction(e){this.viewModel.filterFunction=e}get groupBy(){return this.viewModel.groupBy}set groupBy(e){this.viewModel.groupBy=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get layers(){return this.viewModel.layers}set layers(e){this.viewModel.layers=e}get selectedItem(){return this.viewModel.selectedItem}select(e,t){return this.viewModel.select(e,t)}render(){const{disabled:e,enableListScroll:t,filterText:s,headingLevel:r,messages:i,viewModel:{items:a,numberOfFeatureTemplates:m,selectedItem:f,state:d}}=this,c=this.visibleElements.filter&&m>1;if(Ce(a)){const o=a.find(y=>y.label===H.nullGroupBy.label);o&&(o.label=i.other)}return p("div",{"aria-label":i.widgetLabel,class:this.classes(Fe.base,de.widget)},d==="loading"?p("calcite-loader",{key:"loader",label:this.messagesCommon.loading,type:"indeterminate"}):d==="ready"?p(be,{disabled:e,enableListScroll:t,filterEnabled:c,filterText:s,headingLevel:r,id:this.id,identify:$e,items:a,messages:{filterPlaceholder:i.filterPlaceholder,noItems:i.noItems,noMatches:i.noMatches},renderCustomGroupContent:this.renderCustomGroupContent,renderCustomItem:this.renderCustomItem,renderIcon:this._renderItemIcon,renderItemContent:this.renderItemContent,renderItemContentEnd:this.renderItemContentEnd,renderItemDescription:this.renderItemDescription,renderItemLabel:this.renderItemLabel,selectedItem:f??void 0,selectionMode:this.selectionMode??void 0,onFilterChange:o=>{this.filterText=o,this.viewModel.refresh()},onItemSelect:o=>!Y(o)&&this.viewModel.select(o)}):null)}};function we(e){return e==null?void 0:e["data-item"]}function Te(e){return!!(e!=null&&e["data-has-icon"])}function q(e,t){e&&(e["data-has-icon"]=t)}l([n()],u.prototype,"disabled",null),l([n()],u.prototype,"enableListScroll",void 0),l([n()],u.prototype,"filterFunction",null),l([n()],u.prototype,"filterText",void 0),l([n()],u.prototype,"groupBy",null),l([n()],u.prototype,"headingLevel",void 0),l([n()],u.prototype,"label",null),l([n()],u.prototype,"layers",null),l([n(),j("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")],u.prototype,"messages",void 0),l([n(),j("esri/t9n/common")],u.prototype,"messagesCommon",void 0),l([n({readOnly:!0})],u.prototype,"selectedItem",null),l([n()],u.prototype,"selectionMode",void 0),l([n(),ie("select")],u.prototype,"viewModel",void 0),l([n({type:Q,nonNullable:!0})],u.prototype,"visibleElements",void 0),l([n()],u.prototype,"renderCustomItem",void 0),l([n()],u.prototype,"renderCustomGroupContent",void 0),l([n()],u.prototype,"renderItemLabel",void 0),l([n()],u.prototype,"renderItemDescription",void 0),l([n()],u.prototype,"renderItemContent",void 0),l([n()],u.prototype,"renderItemContentEnd",void 0),u=l([T("esri.widgets.FeatureTemplates")],u);const Ee=u,Be=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"}));export{Ee as F,Be as a,H as h,Z as m,be as o,U as t};