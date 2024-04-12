function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AreaMeasurement2D-uMGgYLS2.js","assets/index-BS4ejk0L.js","assets/index-DvE0Cji0.css","assets/defaultUnit-DgRQNz8q.js","assets/getDefaultUnitForView-n2jWYNVB.js","assets/unitFormatUtils-jNvliv8R.js","assets/quantityUtils-b7cV58jp.js","assets/geometryEngine-C5wCr2lg.js","assets/geometryEngineBase-JM13Zf35.js","assets/hydrated-Brlnp7w9.js","assets/geodesicUtils-CnTg9Ebr.js","assets/GraphicsLayer-BXYC2K90.js","assets/Draw-CL-cXGLD.js","assets/SnappingVisualizer2D-DlqSAL_L.js","assets/angularMeasurementUtils-K0KXcSa5.js","assets/geometry2dUtils-qdpAqfFv.js","assets/SnappingVisualizer-en7pMWPW.js","assets/PointSnappingHint-CBTKo8oM.js","assets/EditGeometryOperations-pgU8rWPM.js","assets/SnappingContext-Cpn1WUY8.js","assets/SnappingOperation-CFzfpmTU.js","assets/surfaceCoordinateSystems-DOpj8xeV.js","assets/memoize-DsJmrG76.js","assets/dehydratedFeatureComparison-BLk0wGvH.js","assets/InteractiveToolBase-SIpBYGY-.js","assets/drawUtils-DLMPc3d2.js","assets/SketchLabelOptions-SjSNo4Z0.js","assets/SnappingDragPipelineStep-D4LIS0XX.js","assets/GraphicManipulator-D0T2YVmU.js","assets/drapedUtils-vpXFzGNU.js","assets/MeasurementWidgetContent-DPk1AsiL.js","assets/UnitSelect-C-FGb5NO.js","assets/AreaMeasurement3D-IlwGtHba.js","assets/Analysis-DU3KgEb8.js","assets/measurementUtils-CrXSOMz1.js","assets/SnappingVisualizer3D-3GYWeRxV.js","assets/ExtendedLineVisualElement-DP7CRSuq.js","assets/vec4f32-CjrfB-0a.js","assets/EngineVisualElement-JoN-3lzT.js","assets/VisualElement-CXf3NBDK.js","assets/LaserlineVisualElement-eVRZoQaC.js","assets/Laserlines.glsl-b1AlaPCs.js","assets/Object3DVisualElement-CjWBQfQT.js","assets/RightAngleQuadVisualElement-Dailh84o.js","assets/viewUtils-CrPzLSYw.js","assets/dragEventPipeline3D-OTrrMjCc.js","assets/RenderObject-cr0L8tT8.js","assets/ToolIntersector-CYRxbzUV.js","assets/ShadedColorMaterial.glsl-C0nyS0zu.js","assets/SceneSnappingManagerPool-DQsSCqw9.js","assets/SnappingManager-qaiEOTfy.js","assets/geodesicMeasurementUtils-C9DYvYv0.js","assets/InteractiveAnalysisViewModel-CeV_7nZJ.js","assets/DistanceMeasurement2D-CdkFib7r.js","assets/DirectLineMeasurement3D-CvJI2HMI.js","assets/interfaces-js1RL7O8.js","assets/interfaces-CjSZqm0S.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{E as e,F as i,nP as g,nQ as w,J as v,O as p,j0 as _,j1 as y,bt as u,j3 as M,cm as U,_ as d,c3 as m}from"./index-BS4ejk0L.js";import{e as f}from"./defaultUnit-DgRQNz8q.js";import"./getDefaultUnitForView-n2jWYNVB.js";let o=class extends p{constructor(t){super(t),this.activeTool=null,this.activeViewModel=null,this.view=null}get areaUnit(){return this.defaultUnit}set areaUnit(t){this._overrideIfSome("areaUnit",t)}get linearUnit(){return this.defaultUnit}set linearUnit(t){this._overrideIfSome("linearUnit",t)}get state(){const{activeViewModel:t}=this;return t?t.state:"disabled"}};e([i({type:["area","distance","direct-line"]})],o.prototype,"activeTool",void 0),e([i()],o.prototype,"activeViewModel",void 0),e([i({type:g})],o.prototype,"areaUnit",null),e([i(f)],o.prototype,"defaultUnit",void 0),e([i({type:w})],o.prototype,"linearUnit",null),e([i({readOnly:!0})],o.prototype,"state",null),e([i()],o.prototype,"view",void 0),o=e([v("esri.widgets.Measurement.MeasurementViewModel")],o);const h=o,c={base:"esri-measurement",widgetIcon:m.measure};function W(t){return(t==null?void 0:t.declaredClass)==="esri.widgets.AreaMeasurement2D"||(t==null?void 0:t.declaredClass)==="esri.widgets.AreaMeasurement3D"}let a=class extends y{constructor(t,s){super(t,s),this._widgets=new Map,this.activeWidget=null,this.iconClass=c.widgetIcon,this.icon=null,this.messages=null,this.viewModel=new h}initialize(){this.activeWidget&&this.viewModel.set("activeViewModel",this.activeWidget.viewModel),this.view&&this.activeTool&&this._getActiveWidget().then(t=>{this._set("activeWidget",t)}),this.addHandles([u(()=>[this.view,this.activeTool],async()=>{this._set("activeWidget",await this._getActiveWidget())}),u(()=>this.activeWidget,(t,s)=>{this.viewModel.set("activeViewModel",t?t.viewModel:null),s&&(s.visible=!1)}),u(()=>[this.areaUnit,this.linearUnit,this.uiStrings],()=>this._updateSubWidgetProperties())])}destroy(){this._destroyWidgets()}get activeTool(){return this.viewModel.activeTool}set activeTool(t){this.viewModel.activeTool=t}get areaUnit(){return this.viewModel.areaUnit}set areaUnit(t){this.viewModel.areaUnit=t}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}get linearUnit(){return this.viewModel.linearUnit}set linearUnit(t){this.viewModel.linearUnit=t}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}render(){const{activeWidget:t}=this,s=t&&!t.destroyed?t.render():null;return M("div",{class:c.base},s)}clear(){this.activeTool=null,this._destroyWidgets()}startMeasurement(){const{activeViewModel:t}=this.viewModel;t&&U(t.start())}async _createWidget(t){const{areaUnit:s,linearUnit:r,view:n}=this;if(!n)return null;switch(t){case"area":{const{type:l}=n;switch(l){case"2d":return new(await d(()=>import("./AreaMeasurement2D-uMGgYLS2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]))).default({view:n,unit:s,uiStrings:this._createUIStringsForWidget(t)});case"3d":return new(await d(()=>import("./AreaMeasurement3D-IlwGtHba.js"),__vite__mapDeps([32,1,2,33,3,4,22,34,7,8,9,10,35,36,37,38,39,40,41,42,43,14,15,6,16,17,44,45,24,25,46,47,48,18,49,50,51,19,27,23,20,52,30,31]))).default({view:n,unit:s,uiStrings:this._createUIStringsForWidget(t)});default:return null}}case"distance":{const{type:l}=n;return l==="2d"?new(await d(()=>import("./DistanceMeasurement2D-CdkFib7r.js"),__vite__mapDeps([53,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]))).default({view:n,unit:r,uiStrings:this._createUIStringsForWidget(t)}):null}case"direct-line":{const{type:l}=n;return l==="3d"?new(await d(()=>import("./DirectLineMeasurement3D-CvJI2HMI.js"),__vite__mapDeps([54,1,2,33,3,4,22,34,7,8,9,10,35,36,37,38,39,40,41,42,43,14,15,6,16,17,44,45,24,25,55,56,46,48,18,49,50,51,19,27,23,52,30,31]))).default({view:n,unit:r,uiStrings:this._createUIStringsForWidget(t)}):null}default:return null}}_destroyWidgets(){this._widgets.forEach(t=>t.destroy()),this._widgets.clear()}async _getActiveWidget(){const{activeTool:t,view:s}=this;if(!s||!t)return null;let r=null;if(this._widgets.has(t))r=this._widgets.get(t),r.visible=!0;else{if(r=await this._createWidget(t),!r)return null;await r.viewModel.start(),this._widgets.set(t,r)}return r}_createUIStringsForWidget(t){var r;if(!this.uiStrings)return;const s=t+"-"+((r=this.view)==null?void 0:r.type);return this.uiStrings[s]}_updateSubWidgetProperties(){this._widgets.forEach((t,s)=>{const{areaUnit:r,linearUnit:n}=this;t.unit=W(t)?r:n,t.uiStrings=this._createUIStringsForWidget(s)})}};e([i()],a.prototype,"activeTool",null),e([i({readOnly:!0})],a.prototype,"activeWidget",void 0),e([i()],a.prototype,"areaUnit",null),e([i()],a.prototype,"iconClass",void 0),e([i()],a.prototype,"icon",void 0),e([i()],a.prototype,"label",null),e([i()],a.prototype,"linearUnit",null),e([i(),_("esri/widgets/Measurement/t9n/Measurement")],a.prototype,"messages",void 0),e([i()],a.prototype,"uiStrings",void 0),e([i()],a.prototype,"view",null),e([i({type:h})],a.prototype,"viewModel",void 0),a=e([v("esri.widgets.Measurement")],a);const b=a;export{b as default};