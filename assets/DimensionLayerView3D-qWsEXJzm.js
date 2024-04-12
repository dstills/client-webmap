function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DimensionAnalysisView3D-BXFefWK_.js","assets/index-BS4ejk0L.js","assets/index-DvE0Cji0.css","assets/AnalysisView3D-B89FZHTh.js","assets/LengthDimension-BIm1WDC1.js","assets/getDefaultUnitForView-n2jWYNVB.js","assets/quantityUtils-b7cV58jp.js","assets/Segment-Coy_fsLu.js","assets/VisualElement-CXf3NBDK.js","assets/viewUtils-CrPzLSYw.js","assets/TextOverlayItem-ByCv8vWw.js","assets/automaticLengthMeasurementUtils-CAMwnDCq.js","assets/measurementUtils-BC1ilJUF.js","assets/SnappingManager-qaiEOTfy.js","assets/angularMeasurementUtils-K0KXcSa5.js","assets/geodesicUtils-CnTg9Ebr.js","assets/geometry2dUtils-qdpAqfFv.js","assets/geometryEngine-C5wCr2lg.js","assets/geometryEngineBase-JM13Zf35.js","assets/hydrated-Brlnp7w9.js","assets/geodesicMeasurementUtils-C9DYvYv0.js","assets/RenderObject-cr0L8tT8.js","assets/dragEventPipeline3D-OTrrMjCc.js","assets/InteractiveToolBase-SIpBYGY-.js","assets/drawUtils-DLMPc3d2.js","assets/ImageMaterial.glsl-Bc9gQoIe.js","assets/memoize-DsJmrG76.js","assets/Factory-B98A7nox.js","assets/SnappingVisualizer3D-3GYWeRxV.js","assets/ExtendedLineVisualElement-DP7CRSuq.js","assets/vec4f32-CjrfB-0a.js","assets/EngineVisualElement-JoN-3lzT.js","assets/LaserlineVisualElement-eVRZoQaC.js","assets/Laserlines.glsl-b1AlaPCs.js","assets/Object3DVisualElement-CjWBQfQT.js","assets/RightAngleQuadVisualElement-Dailh84o.js","assets/SnappingVisualizer-en7pMWPW.js","assets/PointSnappingHint-CBTKo8oM.js","assets/LineVisualElement-uM3BzT66.js","assets/VerticesVisualElement-SyzfZN7D.js","assets/EditGeometryOperations-pgU8rWPM.js","assets/SceneSnappingManagerPool-DQsSCqw9.js","assets/SnappingContext-Cpn1WUY8.js","assets/SnappingDragPipelineStep-D4LIS0XX.js","assets/dehydratedFeatureComparison-BLk0wGvH.js","assets/SnappingOperation-CFzfpmTU.js","assets/ShadedColorMaterial.glsl-C0nyS0zu.js","assets/ToolIntersector-CYRxbzUV.js","assets/quantityFormatUtils-Bce0XkeG.js","assets/unitFormatUtils-jNvliv8R.js","assets/analysisViewUtils-D7pfRgtC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{E as a,F as t,J as y,be as h,lx as w,bt as u,bA as c,b as d,en as V,M as p,eo as _,ep as m,_ as A}from"./index-BS4ejk0L.js";import{n as v}from"./LayerView3D-CyxA26u0.js";import{u as f}from"./LayerView-BXe9D6EI.js";const D=i=>{let s=class extends i{constructor(...e){super(...e),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(e){this.analysisView!=null&&(this.analysisView.interactive=e)}get results(){return this.analysisView!=null?this.analysisView.results:new h}get selectedDimension(){return this.analysisView!=null?this.analysisView.selectedDimension:null}set selectedDimension(e){this.analysisView!=null&&(this.analysisView.selectedDimension=e)}async createLengthDimensions(e){if(this.analysisView==null)throw w();await this.analysisView.createLengthDimensions(e)}};return a([t()],s.prototype,"layer",void 0),a([t()],s.prototype,"interactive",null),a([t({readOnly:!0})],s.prototype,"results",null),a([t()],s.prototype,"selectedDimension",null),s=a([y("esri.views.layers.DimensionLayerView")],s),s},o="analysis-view-handles";let n=class extends v(D(f)){constructor(i){super(i),this.type="dimension-3d",this._analysisModule=null}initialize(){this.addHandles(u(()=>this.layer.source,i=>{this._destroyAnalysisView(),i!=null&&this._createAnalysisView(i)},c),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new d("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(i){const s=V(async e=>(this.analysisView=await this._createAnalysisViewPromise(i,e),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=p(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(i,s){let e=this._analysisModule;if(e==null){const r=await this._loadAnalysisModule();this._analysisModule=r,e=r}const l=new e.default({analysis:i,view:this.view,parent:this});if(await l.when(),m(s))throw l.destroy(),w();return l}_loadAnalysisModule(){return A(()=>import("./DimensionAnalysisView3D-BXFefWK_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]))}};a([t()],n.prototype,"type",void 0),a([t()],n.prototype,"analysisView",void 0),a([t()],n.prototype,"_createAnalysisViewTask",void 0),n=a([y("esri.views.3d.layers.DimensionLayerView3D")],n);const g=n;export{g as default};