import{g as m,i as n,ar as d,P as u,bC as l}from"./index-nBWeBKPv.js";import{X as g}from"./FeatureLayerView2D-DoDkAlSt.js";import"./highlightReasons-BreL7upH.js";import"./Tile-CQ6TlwHd.js";import"./quickselect-BhLHWy4r.js";import"./LayerView2D-BloiS6d1.js";import"./Container-CTQo6kEb.js";import"./ClipRect-CL_RLv1L.js";import"./TechniqueInstance-iSLO03bC.js";import"./UpdateTracking2D-CD1onhf0.js";import"./TurboLine-CoGYQY3E.js";import"./LabelMetric-DofoYXTH.js";import"./constants-D5zmR9t2.js";import"./TileContainer-CHFG_M5g.js";import"./WGLContainer-CosurzxA.js";import"./WGLBrushVTLSymbol-CgE_QQ-Q.js";import"./vec4f32-CjrfB-0a.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-B9wT6rfn.js";import"./tileUtils-B7X19rIS.js";import"./SDFHelper-CHMOMUR8.js";import"./FeatureCommandQueue-sA8oVCV4.js";import"./heatmapTextureUtils-CDx4jbqS.js";import"./HighlightCounter-Cqsao5gu.js";import"./FeatureLayerView-mjCQ-2EL.js";import"./popupUtils-BmN35jfJ.js";import"./LayerView-Dpo8VUNV.js";import"./RefreshableLayerView-B8arDm74.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(a=>a.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,e=!this._worker,p=this.dataUpdating,s=t&&(r||o||e||p);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${s}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${e}
  -> updatingPipeline ${p}
`),s}};i=m([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const A=i;export{A as default};
