function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-action-Dl3Ej-DA.js","assets/index-nBWeBKPv.js","assets/index-CIBc8SyM.css","assets/calcite-button-DXncz_6_.js","assets/button-CXWXhZac.js","assets/calcite-list-item-DyLWmkgR.js","assets/utils3-CW4gBV_0.js","assets/calcite-list-CinAE7We.js","assets/filter-Cyq-e8PA.js","assets/input2-BBl3JTKq.js","assets/Validation-BNlJRDE1.js","assets/input-kBVpmtEZ.js","assets/input-message-BCRW2dJK.js","assets/progress-DvHi5Mrp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{g as t,y as s,fH as f,i as b,aO as g,fI as E,cw as $,cx as k,d2 as V,cy as G,aj as x,cz as i,o9 as m,qp as I,es as A}from"./index-nBWeBKPv.js";import{c as C}from"./Analysis-onDbq5gp.js";import{h as O}from"./SlicePlane-BQEFYL3L.js";import{v as T}from"./AnalysisViewModel-CfmmWZyA.js";import"./persistable-BpBIdujX.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-M0Ef-_ik.js";let c=class extends C{constructor(l){super(l),this.type="slice",this.tiltEnabled=!1,this.shape=null,this.excludeGroundSurface=!1}get excludedLayers(){return this._get("excludedLayers")||new g}set excludedLayers(l){this._set("excludedLayers",E(l,this._get("excludedLayers")))}get requiredPropertiesForEditing(){var l;return[(l=this.shape)==null?void 0:l.position]}clear(){this.shape=null}};t([s({type:["slice"]})],c.prototype,"type",void 0),t([s()],c.prototype,"tiltEnabled",void 0),t([s({types:{key:"type",base:null,typeMap:{plane:O},defaultKeyValue:"plane"}})],c.prototype,"shape",void 0),t([s({cast:f,clonable:e=>e.slice()})],c.prototype,"excludedLayers",null),t([s({type:Boolean,nonNullable:!0})],c.prototype,"excludeGroundSurface",void 0),t([s({readOnly:!0})],c.prototype,"requiredPropertiesForEditing",null),c=t([b("esri.analysis.SliceAnalysis")],c);const M=c,L=new Set;let d=class extends T{constructor(e){super(e),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="SliceViewModel is only supported in 3D views.",L.add(this)}destroy(){L.delete(this)}get state(){return this.disabled||!this.ready?"disabled":this.tool==null?"ready":this.tool.state}get shape(){return this.analysis.shape}set shape(e){this.analysis.shape=e}get tiltEnabled(){return this.analysis.tiltEnabled}set tiltEnabled(e){this.analysis.tiltEnabled=e}get layersMode(){var e;return((e=this.tool)==null?void 0:e.layersMode)??"none"}get excludedLayers(){return this.analysis.excludedLayers}set excludedLayers(e){this.analysis.excludedLayers=g.isCollection(e)?e:new g(e)}get excludeGroundSurface(){return this.analysis.excludeGroundSurface}set excludeGroundSurface(e){this.analysis.excludeGroundSurface=e}async start(){await super.start(),L.forEach(e=>{e.view===this.view&&e!==this&&e.clear()}),this.analysisView!=null&&(this.analysisView.active=!0)}enterExcludeLayerMode(){this.tool!=null&&this.tool.enterExcludeLayerMode()}exitExcludeLayerMode(){this.tool!=null&&this.tool.exitExcludeLayerMode()}onConnectToAnalysisView(e){e.active=!0}constructAnalysis(){return new M}};t([s({type:M})],d.prototype,"analysis",void 0),t([s({readOnly:!0})],d.prototype,"state",null),t([s()],d.prototype,"shape",null),t([s()],d.prototype,"tiltEnabled",null),t([s()],d.prototype,"layersMode",null),t([s()],d.prototype,"excludedLayers",null),t([s({nonNullable:!0})],d.prototype,"excludeGroundSurface",null),d=t([b("esri.widgets.Slice.SliceViewModel")],d);const S=d,n="esri-slice",a={base:n,widgetIcon:A.slice,actions:`${n}__actions`,cancelButton:`${n}__cancel-button`,container:`${n}__container`,error:`${n}__error`,excludeButton:`${n}__exclude-button`,hint:`${n}__hint`,hintText:`${n}__hint-text`,layerItem:`${n}__layer-item`,layerList:`${n}__layer-list`,layerListHeading:`${n}__layer-list-title`,newSliceButton:`${n}__clear-button`};let r=class extends k{constructor(e,l){super(e,l),this.headingLevel=3,this.iconClass=a.widgetIcon,this.icon=null,this.messages=null,this.viewModel=new S,this._onNewSliceClick=()=>{V(this.viewModel.start())}}loadDependencies(){return G({action:()=>x(()=>import("./calcite-action-Dl3Ej-DA.js"),__vite__mapDeps([0,1,2])),button:()=>x(()=>import("./calcite-button-DXncz_6_.js"),__vite__mapDeps([3,4,1,2])),"list-item":()=>x(()=>import("./calcite-list-item-DyLWmkgR.js"),__vite__mapDeps([5,1,2,6])),list:()=>x(()=>import("./calcite-list-CinAE7We.js"),__vite__mapDeps([7,1,2,6,8,9,10,11,12,13]))})}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(e){this.viewModel.analysis=e}get excludedLayers(){return this.viewModel.excludedLayers}set excludedLayers(e){this.viewModel.excludedLayers=e}get excludeGroundSurface(){return this.viewModel.excludeGroundSurface}set excludeGroundSurface(e){this.viewModel.excludeGroundSurface=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}get hasVoxelLayers(){var l;const e=(l=this.viewModel)==null?void 0:l.view;return e!=null&&e.allLayerViews.some(u=>u.type==="voxel-3d")}render(){return i("div",{class:this.classes(a.base,m.widget,m.panel),role:"presentation"},this.visible?i("div",{class:a.container},this.viewModel.supported?[this._renderHint(),this._renderLayerList(),this._renderActions()]:this._renderUnsupported()):null)}_renderUnsupported(){return i("div",{class:a.error,key:"unsupported"},i("p",null,this.messages.unsupported))}_renderHint(){const{hasVoxelLayers:e,messages:l,viewModel:u}=this,{active:y,layersMode:p,state:v}=u;let o=null;return y&&(p==="exclude"?o=l.excludeHint:v==="ready"&&(o=e?l.voxelHint:l.hint)),o?i("div",{class:a.hint,key:"hint"},i("p",{class:a.hintText},o),i("p",{class:a.hintText},l.verticalHint)):null}_renderLayerList(){const{excludedLayers:e,excludeGroundSurface:l,headingLevel:u,messages:y,viewModel:p}=this,{layersMode:v,state:o}=p,h=o==="slicing"||o==="sliced",_=e?e.toArray().map(w=>this._renderLayerItem({uid:w.uid,title:w.title,onClick:()=>(this.excludedLayers.remove(w),!1)})):[];return l&&_.push(this._renderLayerItem({uid:"ground",title:y.ground,onClick:()=>(this.excludeGroundSurface=!1,!1)})),v!=="exclude"&&h&&_.length!==0?i("div",{class:a.layerList,key:"settings"},i(I,{class:a.layerListHeading,level:u},y.excludedLayers),i("calcite-list",{selectionMode:"none"},_)):null}_renderActions(){const{messages:e,viewModel:l}=this,{active:u,state:y}=l,p=y==="disabled",v=y==="slicing"||y==="sliced",o=l.layersMode==="exclude",h=[];return u&&!v||o||h.push(i("calcite-button",{class:a.newSliceButton,disabled:p,key:"new-slice",onclick:this._onNewSliceClick},e.newSlice)),v&&!o&&h.push(i("calcite-button",{appearance:"outline-fill",class:a.excludeButton,disabled:p,key:"exclude",onclick:()=>l.enterExcludeLayerMode()},e.excludeLayer)),u&&o&&h.push(i("calcite-button",{appearance:"outline-fill",class:a.cancelButton,disabled:p,key:"cancel-exclude",onclick:()=>l.exitExcludeLayerMode()},e.cancel)),h.length===0?null:i("div",{class:a.actions},h)}_renderLayerItem(e){return i("calcite-list-item",{class:a.layerItem,key:e.uid,label:e.title??""},i("calcite-action",{icon:"x",onclick:e.onClick,scale:"s",slot:"actions-end",text:this.messages.includeLayer}))}};t([s()],r.prototype,"active",null),t([s({constructOnly:!0,nonNullable:!0})],r.prototype,"analysis",null),t([s()],r.prototype,"excludedLayers",null),t([s()],r.prototype,"excludeGroundSurface",null),t([s()],r.prototype,"headingLevel",void 0),t([s()],r.prototype,"iconClass",void 0),t([s()],r.prototype,"icon",void 0),t([s()],r.prototype,"label",null),t([s(),$("esri/widgets/Slice/t9n/Slice")],r.prototype,"messages",void 0),t([s()],r.prototype,"view",null),t([s({type:S})],r.prototype,"viewModel",void 0),t([s()],r.prototype,"visible",null),t([s()],r.prototype,"hasVoxelLayers",null),r=t([b("esri.widgets.Slice")],r);const U=r;export{U as default};
