function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DimensionAnalysisView3D-DdMpmg4t.js","assets/index-nBWeBKPv.js","assets/index-CIBc8SyM.css","assets/AnalysisView3D-Bq0wY630.js","assets/LengthDimension-D_qbJKA8.js","assets/Segment-Bfk0CLRX.js","assets/VisualElement-89nWP9ZW.js","assets/TextOverlayItem-DNA-E1Ey.js","assets/automaticLengthMeasurementUtils-DmE4GvCS.js","assets/measurementUtils-msBYTq-O.js","assets/ShadedColorMaterial.glsl-C8t7OFMR.js","assets/dragEventPipeline3D-BUPEurq6.js","assets/InteractiveToolBase-B1cmKqcL.js","assets/drawUtils-C3zJcrVW.js","assets/ImageMaterial.glsl-Chfhyxdg.js","assets/memoize-DsJmrG76.js","assets/Factory-DX4d814G.js","assets/SnappingVisualizer3D-Boq0Gsk-.js","assets/ExtendedLineVisualElement-DZ6aQT-M.js","assets/vec4f32-CjrfB-0a.js","assets/EngineVisualElement-Mqqpq6dq.js","assets/LaserlineVisualElement-DpPRnC4J.js","assets/Laserlines.glsl-B4btbvp-.js","assets/Object3DVisualElement-BhPO44v1.js","assets/RightAngleQuadVisualElement-DQ3n55o0.js","assets/SnappingVisualizer-CjKEaB7x.js","assets/PointSnappingHint-J48rnsfj.js","assets/LineVisualElement-BUVtecPu.js","assets/VerticesVisualElement-CxKRxA_X.js","assets/EditGeometryOperations-CP9s9rhU.js","assets/SceneSnappingManagerPool-cL8TjEPE.js","assets/SnappingContext-Cpn1WUY8.js","assets/SnappingDragPipelineStep-uI5hn89b.js","assets/dehydratedFeatureComparison-yNW1AtFP.js","assets/SnappingOperation-CWnYMrCz.js","assets/AnalysisToolBase-0--CFa4a.js","assets/ToolIntersector-CDEoxqoI.js","assets/quantityFormatUtils-DkM1DbdG.js","assets/analysisViewUtils-CTVOf9bk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{g as a,y as t,i as y,aO as h,lv as w,ar as u,at as c,D as d,av as V,u as p,au as _,az as m,aj as v}from"./index-nBWeBKPv.js";import{n as A}from"./LayerView3D-Ddg4V2Z4.js";import{u as D}from"./LayerView-Dpo8VUNV.js";const f=i=>{let s=class extends i{constructor(...e){super(...e),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(e){this.analysisView!=null&&(this.analysisView.interactive=e)}get results(){return this.analysisView!=null?this.analysisView.results:new h}get selectedDimension(){return this.analysisView!=null?this.analysisView.selectedDimension:null}set selectedDimension(e){this.analysisView!=null&&(this.analysisView.selectedDimension=e)}async createLengthDimensions(e){if(this.analysisView==null)throw w();await this.analysisView.createLengthDimensions(e)}};return a([t()],s.prototype,"layer",void 0),a([t()],s.prototype,"interactive",null),a([t({readOnly:!0})],s.prototype,"results",null),a([t()],s.prototype,"selectedDimension",null),s=a([y("esri.views.layers.DimensionLayerView")],s),s},o="analysis-view-handles";let n=class extends A(f(D)){constructor(i){super(i),this.type="dimension-3d",this._analysisModule=null}initialize(){this.addHandles(u(()=>this.layer.source,i=>{this._destroyAnalysisView(),i!=null&&this._createAnalysisView(i)},c),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new d("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(i){const s=V(async e=>(this.analysisView=await this._createAnalysisViewPromise(i,e),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=p(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(i,s){let e=this._analysisModule;if(e==null){const r=await this._loadAnalysisModule();this._analysisModule=r,e=r}const l=new e.default({analysis:i,view:this.view,parent:this});if(await l.when(),m(s))throw l.destroy(),w();return l}_loadAnalysisModule(){return v(()=>import("./DimensionAnalysisView3D-DdMpmg4t.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]))}};a([t()],n.prototype,"type",void 0),a([t()],n.prototype,"analysisView",void 0),a([t()],n.prototype,"_createAnalysisViewTask",void 0),n=a([y("esri.views.3d.layers.DimensionLayerView3D")],n);const $=n;export{$ as default};
