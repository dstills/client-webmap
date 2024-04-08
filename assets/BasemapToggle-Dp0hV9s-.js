function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-button-DXncz_6_.js","assets/button-CXWXhZac.js","assets/index-nBWeBKPv.js","assets/index-CIBc8SyM.css","assets/calcite-icon-DnteIGRp.js","assets/calcite-scrim-CQfVKTKg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{g as t,y as i,gV as R,i as k,S as E,qi as h,ar as T,P as L,qj as M,kM as P,aw as O,aU as B,gf as I,ew as j,gg as V,qk as $,cw as C,cx as q,cy as A,aj as v,cz as l,o9 as w}from"./index-nBWeBKPv.js";let n=class extends E{constructor(e){super(e),this._basemapCache={},this._loadingProjectionEngine=!1,this.nextBasemap=h("hybrid",this._basemapCache),this.view=null}initialize(){T(()=>this.nextBasemap,e=>{e&&!e.loaded&&e.load().catch(()=>{})},L)}destroy(){this.view=null,M(this._basemapCache),this._basemapCache=null}get _nextBasemapSpatialReferenceTask(){return P(this.view,this.nextBasemap)}get _viewSpatialReferenceLocked(){const{view:e}=this;return!e||!("spatialReferenceLocked"in e)||e.spatialReferenceLocked}get activeBasemap(){var e,s;return h(((s=(e=this.view)==null?void 0:e.map)==null?void 0:s.basemap)??"topo-vector",this._basemapCache)}castNextBasemap(e){return h(e,this._basemapCache)}get state(){const{view:e}=this;if(!(e!=null&&e.ready)||this._nextBasemapSpatialReferenceTask.updating)return"disabled";const{spatialReference:s}=this._nextBasemapSpatialReferenceTask;return this._viewSpatialReferenceLocked&&s!=null&&!e.spatialReference.equals(s)?"incompatible-next-basemap":this._loadingProjectionEngine?"loading":"ready"}async toggle(){const{activeBasemap:e,nextBasemap:s,state:u,view:p}=this;if(!p||u==="disabled"||u==="incompatible-next-basemap")return;const m=this._viewSpatialReferenceLocked;if(!m){if(await O(()=>!this._nextBasemapSpatialReferenceTask.updating),s!==this.nextBasemap||e!==this.activeBasemap)return;const{spatialReference:d}=this._nextBasemapSpatialReferenceTask;if(d==null||B(p.spatialReference,d)||I()||j(p.spatialReference,d)||(this._loadingProjectionEngine=!0,await V(),this._loadingProjectionEngine=!1),s!==this.nextBasemap||e!==this.activeBasemap)return}p.map.basemap=s,m||this._nextBasemapSpatialReferenceTask.spatialReference==null||B(p.spatialReference,this._nextBasemapSpatialReferenceTask.spatialReference)||(p.spatialReference=this._nextBasemapSpatialReferenceTask.spatialReference),this.nextBasemap=e}static getThumbnailUrl(e){return $(e)}};t([i()],n.prototype,"_loadingProjectionEngine",void 0),t([i({readOnly:!0})],n.prototype,"_nextBasemapSpatialReferenceTask",null),t([i({readOnly:!0})],n.prototype,"_viewSpatialReferenceLocked",null),t([i({readOnly:!0})],n.prototype,"activeBasemap",null),t([i()],n.prototype,"nextBasemap",void 0),t([R("nextBasemap")],n.prototype,"castNextBasemap",null),t([i({readOnly:!0})],n.prototype,"state",null),t([i()],n.prototype,"view",void 0),t([i()],n.prototype,"toggle",null),n=t([k("esri.widgets.BasemapToggle.BasemapToggleViewModel")],n);const S=n,c="esri-basemap-toggle",g="esri-basemap-thumbnail",r={base:c,secondaryBasemapImage:`${c}__image--secondary`,container:`${g} ${c}__container`,image:`${g}__image ${c}__image`,imageLoading:`${c}__image--loading`,overlay:`${g}__overlay ${c}__image-overlay`,title:`${g}__title ${c}__title`,overlayScrim:`${g}__overlay-scrim`};function f(a){const e=$(a);return e?{backgroundImage:"url("+e+")"}:{backgroundImage:""}}const x={title:!1};let o=class extends q{constructor(a,e){super(a,e),this.messages=null,this.viewModel=new S,this.visibleElements={...x},this.toggle=()=>this.viewModel.toggle()}loadDependencies(){return A({button:()=>v(()=>import("./calcite-button-DXncz_6_.js"),__vite__mapDeps([0,1,2,3])),icon:()=>v(()=>import("./calcite-icon-DnteIGRp.js"),__vite__mapDeps([4,2,3])),scrim:()=>v(()=>import("./calcite-scrim-CQfVKTKg.js"),__vite__mapDeps([5,2,3]))})}get activeBasemap(){return this.viewModel.activeBasemap}get label(){var a;return((a=this.messages)==null?void 0:a.widgetLabel)??""}set label(a){this._overrideIfSome("label",a)}get nextBasemap(){return this.viewModel.nextBasemap}set nextBasemap(a){this.viewModel.nextBasemap=a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}castVisibleElements(a){return{...x,...a}}render(){const a=this.viewModel,e=a.state==="disabled"?null:a.activeBasemap,s=a.state==="disabled"?null:a.nextBasemap,u=a.state==="loading",p=a.state==="incompatible-next-basemap",m=(s==null?void 0:s.title)??"",d=s&&s.loadStatus!=="loaded";let _;const b=this.visibleElements.title&&m,y=p;return(b||y)&&(_=l("div",{class:r.overlay,key:"overlay"},b?l("span",{class:r.title,title:m},m):null,y?l("calcite-scrim",{class:r.overlayScrim,title:this.messages.incompatibleSpatialReference},l("calcite-icon",{icon:"exclamation-mark-triangle"})):null)),l("div",{class:this.classes(r.base,w.widget)},l("calcite-button",{appearance:"transparent","data-basemap-id":s?s.id:"",disabled:p,kind:"neutral",label:this.label,onclick:()=>{this.toggle()},title:this.label},l("div",{class:this.classes(r.container,r.secondaryBasemapImage)},l("div",{class:r.image,styles:f(e)})),l("div",{class:r.container},l("div",{class:this.classes(r.image,d?r.imageLoading:null),styles:f(s)},d||u?l("calcite-scrim",null,l("span",{"aria-hidden":"true",class:w.loaderAnimation,role:"presentation"})):null),_)))}};t([i({readOnly:!0})],o.prototype,"activeBasemap",null),t([i()],o.prototype,"label",null),t([i(),C("esri/widgets/BasemapToggle/t9n/BasemapToggle")],o.prototype,"messages",void 0),t([i()],o.prototype,"nextBasemap",null),t([i()],o.prototype,"view",null),t([i({type:S})],o.prototype,"viewModel",void 0),t([i()],o.prototype,"visibleElements",void 0),t([R("visibleElements")],o.prototype,"castVisibleElements",null),o=t([k("esri.widgets.BasemapToggle")],o);const z=o;export{z as default};