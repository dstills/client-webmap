function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-action-uFLJuJc1.js","assets/index-D2dWKXoe.js","assets/index-DvE0Cji0.css","assets/calcite-icon-CsxVz9Z_.js","assets/calcite-notice-DJt0sRGj.js","assets/calcite-option-iPZa9JFY.js","assets/calcite-select-DAuFEt88.js","assets/Validation-CmI-spCV.js","assets/input-message-CfwgPjfy.js","assets/calcite-tooltip-CKDWgfR0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{E as r,F as n,J as E,O as x,D as V,bc as m,br as N,P as T,aU as p,b as _,cK as L,nM as A,nR as b,Q as f,nO as C,j0 as D,j1 as I,j2 as P,_ as y,j3 as e}from"./index-D2dWKXoe.js";import{t as $}from"./utils-gxvYz_WY.js";const g={noDirtyAreasInExtent:-2147208940,noUtilityNetworkExtension:-2147208474,cannotAcquireVersionLock_v10:-2147217146,cannotAcquireVersionLock_v11:-2147220947};let u=class extends x{constructor(t){super(t),this._activeOperationDidSucceed=!1,this._initialValidationsFinished=!1,this._dirtyAreasLayer=null,this._serverVersion=null,this._updatingHandles=new V,this._validConstructProperties=!1,this.executionError="",this.extentToValidate="current",this.loadErrors=new m}initialize(){const t=async()=>{this.messages||(this.messages=await C("esri/widgets/UtilityNetworkValidateTopology/t9n/UtilityNetworkValidateTopology"))};t().then(()=>{this.view||(this.view=null),this.utilityNetwork||(this.utilityNetwork=null),this.addHandles([N(()=>[this.view,this.utilityNetwork],async()=>{var o,l;const{loadErrors:i,messages:{info:{noUtilityNetwork:s,noView:a}}}=this;this._initialValidationsFinished=!1,i.removeAll(),this._validConstructProperties=!0,this._dirtyAreasLayer=null,this._serverVersion=null,((o=this.utilityNetwork)==null?void 0:o.type)!=="utility"&&(this.loadErrors.push(s),p.getLogger(this).error(new _("utilityNetworkValidateTopology:missing-property",s)),this._validConstructProperties=!1),((l=this.view)==null?void 0:l.type)!=="2d"&&(this.loadErrors.push(a),p.getLogger(this).error(new _("utilityNetworkValidateTopology:missing-property",a)),this._validConstructProperties=!1),this._validConstructProperties&&(this.utilityNetwork.loaded||await this.utilityNetwork.load().catch(c=>{p.getLogger(this).error(c),this._validConstructProperties=!1}),await this._setDirtyAreasLayer()),this._validConstructProperties&&await this._validateNetworkExtension()},T),L(()=>{var i,s;return(s=(i=this.view)==null?void 0:i.map)==null?void 0:s.layers},"change",async()=>{const{loadErrors:i,messages:{info:{noUtilityNetwork:s}}}=this,a=i.find(o=>o===s);this._initialValidationsFinished=!1,a||(i.removeAll(),await this._validateNetworkExtension(),await this._setDirtyAreasLayer()),this._initialValidationsFinished=!0}),A(t)])})}destroy(){this._updatingHandles.destroy()}get state(){return this.loadErrors.length||!this._validConstructProperties?"disabled":this.executionError?"failed":this._updatingHandles.updating?"executing":this._activeOperationDidSucceed?"success":this._initialValidationsFinished?"ready":"loading"}set utilityNetwork(t){this._get("utilityNetwork")!==t&&this._set("utilityNetwork",t)}set view(t){this._get("view")!==t&&this._set("view",t)}async validateTopology(){const{messages:{info:{cannotAcquireVersionLock:t,noDirtyAreasInExtent:i}},utilityNetwork:s,view:a}=this;this.loadErrors.length||(this._activeOperationDidSucceed=!1,this._set("executionError",""),this._updatingHandles.addPromise(s==null?void 0:s.validateTopology({validateArea:this.extentToValidate==="current"?a.extent.clone():s.fullExtent.clone()}).then(()=>{this._activeOperationDidSucceed=!0},o=>{var c;let l="Error: "+o;if(o instanceof _&&((c=o.details)!=null&&c.raw))switch(o.details.raw.extendedCode){case g.noDirtyAreasInExtent:l=i;break;case g.cannotAcquireVersionLock_v10:case g.cannotAcquireVersionLock_v11:l=t;break;default:l=o.details.message}this._set("executionError",l)})))}async _setDirtyAreasLayer(){var s;const{messages:{info:{noDirtyAreasLayer:t}}}=this,i=(s=this.view)==null?void 0:s.map.allLayers.items.filter(a=>b(a)).find(a=>{var o,l;return((o=a.parsedUrl)==null?void 0:o.path)===((l=this.utilityNetwork)==null?void 0:l.networkSystemLayers.dirtyAreasLayerUrl)});i?(this._dirtyAreasLayer=i,await this._dirtyAreasLayer.load(),this._serverVersion=this._dirtyAreasLayer.version??0,this._validConstructProperties=!0):(this.loadErrors.push(t),p.getLogger(this).error(new _("utilityNetworkValidateTopology:missing-layer",t)),this._validConstructProperties=!1)}async _validateNetworkExtension(){var l;const{messages:{info:{noAdvancedEditingUserTypeExtension:t,noUtilityNetworkServiceUserTypeExtension:i}}}=this,s=await new f({url:new URL(this.utilityNetwork.layerUrl).origin+"/portal"}).load(),a=(l=s==null?void 0:s.user)==null?void 0:l.username;if(!a){const c="No portal user found.";return this.loadErrors.push(c),p.getLogger(this).error(new _("utilityNetworkValidateTopology:no-user",c)),this._validConstructProperties=!1,void(this._initialValidationsFinished=!0)}const o=Number(this._serverVersion)<=11.1?"utilityNetwork":"advediting";$(s,a,o).then(c=>{if(!c){const w=Number(this._serverVersion)<=11.1?i:t;this.loadErrors.push(w),p.getLogger(this).error(new _("utilityNetworkValidateTopology:no-user-type-extension",w)),this._validConstructProperties=!1}}).catch(c=>{this.loadErrors.push(Number(this._serverVersion)<=11.1?i:t),p.getLogger(this).error(c),this._validConstructProperties=!1}).finally(()=>{this._initialValidationsFinished=!0})}};r([n()],u.prototype,"_initialValidationsFinished",void 0),r([n()],u.prototype,"_dirtyAreasLayer",void 0),r([n()],u.prototype,"_validConstructProperties",void 0),r([n({readOnly:!0})],u.prototype,"executionError",void 0),r([n()],u.prototype,"extentToValidate",void 0),r([n()],u.prototype,"loadErrors",void 0),r([n()],u.prototype,"messages",void 0),r([n({readOnly:!0})],u.prototype,"state",null),r([n()],u.prototype,"utilityNetwork",null),r([n()],u.prototype,"view",null),u=r([E("esri.widgets.UtilityNetworkValidateTopology.UtilityNetworkValidateTopologyViewModel")],u);const k=u,v="esri-un-validate-topology",d={container:`${v}__container`,content:`${v}__content`,controlsContainer:`${v}__controls-container`,statusIconError:`${v}__status-icon-error`,statusIconSuccess:`${v}__status-icon-success`,statusIconContainer:`${v}__status-icon-container`};let h=class extends I{constructor(t,i){super(t,i),this.messages=null,this.viewModel=new k}loadDependencies(){return P({action:()=>y(()=>import("./calcite-action-uFLJuJc1.js"),__vite__mapDeps([0,1,2])),block:()=>y(()=>import("./index-D2dWKXoe.js").then(t=>t.Ff),__vite__mapDeps([1,2])),icon:()=>y(()=>import("./calcite-icon-CsxVz9Z_.js"),__vite__mapDeps([3,1,2])),notice:()=>y(()=>import("./calcite-notice-DJt0sRGj.js"),__vite__mapDeps([4,1,2])),option:()=>y(()=>import("./calcite-option-iPZa9JFY.js"),__vite__mapDeps([5,1,2])),select:()=>y(()=>import("./calcite-select-DAuFEt88.js"),__vite__mapDeps([6,1,2,7,8])),tooltip:()=>y(()=>import("./calcite-tooltip-CKDWgfR0.js"),__vite__mapDeps([9,1,2]))})}get extentToValidate(){return this.viewModel.extentToValidate}set extentToValidate(t){this.viewModel.extentToValidate=t}get label(){var t;return((t=this.messages)==null?void 0:t.label)??""}set label(t){this._overrideIfSome("label",t)}get utilityNetwork(){return this.viewModel.utilityNetwork}set utilityNetwork(t){this.viewModel.utilityNetwork=t}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}render(){const{viewModel:t}=this;return t.state==="disabled"?e("div",{class:d.container},e("calcite-block",{class:d.content,collapsible:!1,heading:this.label,open:!0},this._renderLoadErrorStatusIcon(),this._renderLoadErrorsNotices())):e("div",{class:d.container},e("calcite-block",{class:d.content,collapsible:!0,heading:this.label,open:!1},this._renderStatusIcon(),this._renderValidateTopologyAction(),this._renderControls()))}_extentOptionSelectChange(t){this.extentToValidate=t.target.value}_getLoadErrorMessagesAsNotices(t,i){return e("calcite-notice",{closable:!1,key:"error-notice-"+i,kind:"warning",open:!0,scale:"s"},e("div",{slot:"message"},t))}_handleValidateTopologyAction(){this.viewModel.validateTopology().catch(()=>{})}_renderControls(){const{viewModel:t}=this;return t.state==="failed"?e("div",{class:d.controlsContainer},this._renderExtentOptionSelect(),this._renderStatusNotice()):this._renderExtentOptionSelect()}_renderExtentOptionSelect(){const{messages:t,viewModel:i}=this;return e("div",{key:"selectExtentDiv"},e("calcite-select",{bind:this,disabled:i.state==="loading"||i.state==="executing",label:t.input.extentToValidate,onCalciteSelectChange:this._extentOptionSelectChange},e("calcite-option",{value:"current"},t.input.currentExtent),e("calcite-option",{value:"entire"},t.input.entireExtent)))}_renderLoadErrorsNotices(){const{viewModel:t}=this;return e("div",{class:d.controlsContainer,key:"loadErrorsDiv"},t.loadErrors.items.map(this._getLoadErrorMessagesAsNotices))}_renderLoadErrorStatusIcon(){return e("div",{class:d.statusIconContainer,key:"statusDiv",slot:"control"},e("calcite-icon",{class:d.statusIconError,icon:"exclamation-mark-triangle",scale:"s"}))}_renderStatusIcon(){const{messages:t,viewModel:i}=this,s=`${this.id}-validation-status-action`,a=`${this.id}-error-status-icon`,o=`${this.id}-success-status-icon`,l=c=>{setTimeout(()=>{c.innerHTML=""},3500)};return i.state==="executing"?e("div",{key:"statusDivExecuting",slot:"control"},e("calcite-action",{id:s,loading:!0,text:t.status.executing,textEnabled:!1}),e("calcite-tooltip",{referenceElement:s},e("span",null,t.status.executing))):i.state==="success"?e("div",{afterCreate:l,class:d.statusIconContainer,key:"statusDivSuccess",slot:"control"},e("calcite-icon",{class:d.statusIconSuccess,icon:"check-circle",id:o,scale:"s"}),e("calcite-tooltip",{referenceElement:o},e("span",null,t.status.success))):i.state==="failed"?e("div",{class:d.statusIconContainer,key:"statusDivFailed",slot:"control"},e("calcite-icon",{class:d.statusIconError,icon:"exclamation-mark-triangle",id:a,scale:"s"}),e("calcite-tooltip",{referenceElement:a},e("span",null,i.executionError))):e("div",{class:d.statusIconContainer,key:"statusDiv",slot:"control"})}_renderStatusNotice(){const{viewModel:t}=this;return e("div",{key:"executionErrorDiv"},e("calcite-notice",{closable:!0,kind:"warning",open:!0,scale:"s"},e("div",{slot:"message"},t.executionError)))}_renderValidateTopologyAction(){const{messages:t,viewModel:i}=this,s=`${this.id}-validation-action`;return e("div",{key:"actionDiv",slot:"control"},e("calcite-action",{bind:this,disabled:i.state==="executing",icon:"play-f",id:s,loading:i.state==="loading",onclick:this._handleValidateTopologyAction,text:t.input.validateTopology,textEnabled:!1}),e("calcite-tooltip",{referenceElement:s},e("span",null,i.state==="loading"?t.status.loading:t.input.validateTopology)))}};r([n()],h.prototype,"extentToValidate",null),r([n()],h.prototype,"label",null),r([n(),D("esri/widgets/UtilityNetworkValidateTopology/t9n/UtilityNetworkValidateTopology")],h.prototype,"messages",void 0),r([n()],h.prototype,"utilityNetwork",null),r([n()],h.prototype,"view",null),r([n({type:k})],h.prototype,"viewModel",void 0),h=r([E("esri.widgets.UtilityNetworkValidateTopology")],h);const O=h;export{O as default};