function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-button-DXncz_6_.js","assets/button-CXWXhZac.js","assets/index-nBWeBKPv.js","assets/index-CIBc8SyM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{g as i,y as n,cF as T,aP as C,i as w,S as $,aO as B,fH as V,ar as y,at as O,fI as I,c_ as L,as as m,qr as S,qs as H,d0 as N,cw as x,cx as D,d2 as k,cy as P,aj as z,cz as r,o9 as f,es as E}from"./index-nBWeBKPv.js";import{v as b}from"./LineOfSightAnalysis-CpT6Lzg6.js";import{u as G,f as R}from"./LineOfSightAnalysisTarget-B7zfJrk3.js";import{v as F}from"./AnalysisViewModel-CfmmWZyA.js";import"./Analysis-onDbq5gp.js";import"./persistable-BpBIdujX.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-M0Ef-_ik.js";let h=class extends ${constructor(t){super(t),this.location=null,this.intersectedLocation=null,this.intersectedGraphic=null,this.visible=void 0}};i([n({type:T})],h.prototype,"location",void 0),i([n({type:T})],h.prototype,"intersectedLocation",void 0),i([n({type:C})],h.prototype,"intersectedGraphic",void 0),i([n({type:Boolean})],h.prototype,"visible",void 0),h=i([w("esri.widgets.lineOfSight.LineOfSightTarget")],h);const A=h,_=B.ofType(A);let c=class extends F{constructor(e){super(e),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="LineOfSightViewModel is only supported in 3D views.",this._vmTargetsToConnection=new Map,this._analysisTargetsToConnection=new Map}initialize(){this.addHandles([this.targets.on("after-add",e=>this._onViewModelTargetAdded(e.item)),this.targets.on("after-remove",e=>this._onViewModelTargetRemoved(e.item)),y(()=>this.analysis,e=>this._onAnalysisChange(e),O)])}destroy(){this._analysisTargetsToConnection.forEach(e=>e.remove())}get state(){return this.disabled||!this.ready?"disabled":this.tool==null?"ready":this.tool.state}get observer(){const{observer:e}=this.analysis;return(e==null?void 0:e.position)==null?null:this._convertAnalysisPointToAbsoluteHeight(e.position,e.elevationInfo)}set observer(e){let t=null;e&&(t=e.clone(),t.hasZ||(t.z=0)),this.analysis.observer=new G({position:t})}get targets(){return this._get("targets")||new _}set targets(e){this._set("targets",I(e,this.targets,_))}continue(){this.tool!=null&&this.tool.continue()}stop(){this.tool!=null&&this.tool.stop()}get testInfo(){return{analysisView:this.analysisView,getAnalysisTargetFromViewModelTarget:e=>{var t;return(t=this._vmTargetsToConnection.get(e))==null?void 0:t.analysisTarget}}}constructAnalysis(){return new b}async onConnectToAnalysisView(e){this.addHandles([e.on("result-changed",t=>{const s=this._analysisTargetsToConnection.get(t.target);s&&(t.result!=null?(s.viewModelTarget.intersectedGraphic=t.result.intersectedGraphic,s.viewModelTarget.intersectedLocation=t.result.intersectedLocation,s.viewModelTarget.visible=t.result.visible):(s.viewModelTarget.intersectedGraphic=null,s.viewModelTarget.intersectedLocation=null,s.viewModelTarget.visible=void 0))})],"view")}onDisconnectFromAnalysisView(){this.removeHandles("view")}_onViewModelTargetAdded(e){if(this._vmTargetsToConnection.get(e))return;const t=new R({position:e.location});this._connectViewModelWithAnalysisTarget(e,t),this.analysis.targets.add(t)}_onViewModelTargetRemoved(e){const t=this._vmTargetsToConnection.get(e);t&&(t.remove(),this.analysis.targets.remove(t.analysisTarget))}_onAnalysisTargetAdded(e){if(this._analysisTargetsToConnection.get(e))return;const{position:t}=e,s=new A({location:t?this._convertAnalysisPointToAbsoluteHeight(t,e.elevationInfo):null});this._connectViewModelWithAnalysisTarget(s,e),this.targets.add(s)}_onAnalysisTargetRemoved(e){const t=this._analysisTargetsToConnection.get(e);t&&(t.remove(),this.targets.remove(t.viewModelTarget))}_connectViewModelWithAnalysisTarget(e,t){let s=!1;const g=L([y(()=>({position:t.position,elevationInfo:t.elevationInfo}),({position:d,elevationInfo:u})=>{s||(s=!0,e.location=d?this._convertAnalysisPointToAbsoluteHeight(d,u):null,s=!1)},m),y(()=>e.location,d=>{if(!s){s=!0;let u=null;d&&(u=d.clone(),u.hasZ||(u.z=0)),t.position=u,t.elevationInfo=null,s=!1}},m)]),v={analysisTarget:t,viewModelTarget:e,remove:()=>{g.remove(),this._vmTargetsToConnection.delete(e),this._analysisTargetsToConnection.delete(t)}};this._vmTargetsToConnection.set(e,v),this._analysisTargetsToConnection.set(t,v)}_onAnalysisChange(e){const t="analysis";this.removeHandles(t),this.addHandles([this.analysis.targets.on("after-add",s=>this._onAnalysisTargetAdded(s.item)),this.analysis.targets.on("after-remove",s=>this._onAnalysisTargetRemoved(s.item))],t),this.targets.removeAll(),e.targets.forEach(s=>{this._onAnalysisTargetAdded(s)})}_convertAnalysisPointToAbsoluteHeight(e,t){const s=e.clone();if(this.view!=null){const g=S(e.hasZ,t);s.z=H(this.view,e,g,N)}return s}};i([n({type:b})],c.prototype,"analysis",void 0),i([n({readOnly:!0})],c.prototype,"state",null),i([n()],c.prototype,"observer",null),i([n({type:_,cast:V,nonNullable:!0})],c.prototype,"targets",null),c=i([w("esri.widgets.lineOfSight.LineOfSightViewModel")],c);const M=c,a="esri-line-of-sight",l={base:a,actions:`${a}__actions`,container:`${a}__container`,error:`${a}__error`,hint:`${a}__hint`,hintText:`${a}__hint-text`,newAnalysisButton:`${a}__new-analysis-button`,widgetIcon:E.lineOfSight},p={newAnalysisButton:`${a}__new-button`,continueButton:`${a}__continue-button`,doneButton:`${a}__done-button`};let o=class extends D{constructor(e,t){super(e,t),this.iconClass=l.widgetIcon,this.icon=null,this.messages=null,this.viewModel=new M,this._onNewAnalysis=()=>{k(this.viewModel.start())},this._onDone=()=>{this.viewModel.stop()},this._onContinue=()=>{this.viewModel.continue()}}loadDependencies(){return P({button:()=>z(()=>import("./calcite-button-DXncz_6_.js"),__vite__mapDeps([0,1,2,3]))})}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(e){this.viewModel.analysis=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}render(){return r("div",{class:this.classes(l.base,f.widget,f.panel),role:"presentation"},this._renderContainerNode())}_renderContainerNode(){if(!this.visible)return null;if(!this.viewModel.supported)return this._renderUnsupportedMessage();let e=null;const t=[this._renderNewAnalysisButton()];return this.viewModel.state==="creating"?(e=this._renderHint(),t.unshift(this._renderDoneButton())):this.viewModel.state==="created"&&this.viewModel.targets.length>0&&t.unshift(this._renderContinueButton()),r("div",{class:l.container},e,r("div",{class:l.actions},t))}_renderUnsupportedMessage(){return r("div",{class:l.error,key:"esri-line-of-sight__unsupported"},r("p",null,this.messages.unsupported))}_renderHint(){return r("div",{class:l.hint,key:"esri-line-of-sight__hint"},r("p",{class:l.hintText},this.messages.hint))}_renderNewAnalysisButton(){return this._renderButton({className:l.newAnalysisButton,id:p.newAnalysisButton,label:this.messages.newAnalysis,onClick:this._onNewAnalysis,primary:!0})}_renderDoneButton(){return this._renderButton({id:p.doneButton,label:this.messages.done,onClick:this._onDone,primary:!1})}_renderContinueButton(){return this._renderButton({id:p.newAnalysisButton,label:this.messages.continueAnalysis,onClick:this._onContinue,primary:!1})}_renderButton({className:e,id:t,label:s,onClick:g,primary:v}){const d=this.viewModel.state==="disabled";return r("calcite-button",{appearance:v?"solid":"outline-fill",class:e,"data-id":t,disabled:d,key:t,onclick:g},s)}get test(){return{IDS:p}}};i([n()],o.prototype,"active",null),i([n({constructOnly:!0,nonNullable:!0})],o.prototype,"analysis",null),i([n()],o.prototype,"iconClass",void 0),i([n()],o.prototype,"icon",void 0),i([n()],o.prototype,"label",null),i([n(),x("esri/widgets/LineOfSight/t9n/LineOfSight")],o.prototype,"messages",void 0),i([n()],o.prototype,"view",null),i([n({type:M})],o.prototype,"viewModel",void 0),i([n()],o.prototype,"visible",null),o=i([w("esri.widgets.LineOfSight")],o);const Y=o;export{Y as default};
