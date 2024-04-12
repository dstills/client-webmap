import{em as y,fA as _,el as E,av as $,j9 as D,fM as R,g0 as b,br as h,eq as H,dk as L,E as c,F as f,J as P,O as k,by as p,mq as T,a3 as z,bX as M,o7 as O,M as u}from"./index-D2dWKXoe.js";import{r as S,t as v}from"./ElevationProfile-BJ3pnGh9.js";import{a as V}from"./HoveredPoints-eIlkYbJu.js";import{z as G,w}from"./OutlineVisualElement-D3gRPWbl.js";import{e as A}from"./GraphicState-CcRHWo39.js";import{e as I}from"./throttle-jjSnxk80.js";import"./memoize-DsJmrG76.js";import"./defaultUnit-Dotgvvuw.js";import"./getDefaultUnitForView-C9_kBQfj.js";import"./geodesicUtils-0BUrW_mO.js";import"./traversalUtils-DmE6QkgJ.js";import"./ElevationQuery-BvtpUEcq.js";import"./GraphicsLayer-CYXumPqX.js";import"./SketchViewModel-B9IvZBHr.js";import"./layerUtils-BS1Di3Pm.js";import"./angularMeasurementUtils-D3zeviIM.js";import"./geometry2dUtils-14ZJrqSH.js";import"./quantityUtils-D4B7S4Ay.js";import"./SketchLabelOptions-DwkEUuft.js";import"./SnappingManager-BCnKLkaT.js";import"./viewUtils-jOSSHAZP.js";import"./geometryEngine-Bmlaqucx.js";import"./geometryEngineBase-C1UOpB5A.js";import"./hydrated-CRFlPVgK.js";import"./geodesicMeasurementUtils-DzAxKO3X.js";import"./unitFormatUtils-BobBl4gB.js";import"./UnitSelect-wG9EIHuK.js";import"./AnchorElementViewModel-P6g7Hd0r.js";import"./ExtendedLineVisualElement-BQOWz5Rf.js";import"./vec4f32-CjrfB-0a.js";import"./EngineVisualElement-Bohb_G5_.js";import"./VisualElement-Bkfawgun.js";import"./LaserlineVisualElement-o2-a7s0w.js";let x=class{constructor(e){this._params=e,this._highlightTask=null,this._highlightHandle=null,this._visualElementHandle=null,this._settings=new G({getTheme:()=>this._params.view.effectiveTheme})}destroy(){this.remove()}remove(){this._highlightTask=y(this._highlightTask),this._highlightHandle=_(this._highlightHandle),this._visualElementHandle=_(this._visualElementHandle)}showHighlight(e){if(this.remove(),e==null||!g(e))return;const i=e.layer;this._highlightTask=E(async t=>{const r=await this._params.view.whenLayerView(i);$(t),D(r)&&(this._highlightHandle=r.highlight(e))})}showReshaping(e){if(this.remove(),e==null)return;const i=this._params.view,t=new w({view:i,geometry:g(e)?e.geometry:null,attached:!1,elevationInfo:R(e),renderOccluded:b.OccludeAndTransparentStencil,isDecoration:!0}),r=new A({graphic:e}),s=[h(()=>r.isDraped,n=>{t.isDraped=n}),r.on("changed",()=>{t.geometry=g(e)?e.geometry:null}),i.trackGraphicState(r),i.maskOccludee(e),H(t)];this._settings.visualElements.lineGraphics.outline.apply(t),t.attached=!0,this._visualElementHandle=L(s)}};function g(o){return o.geometry!=null&&o.geometry.type==="polyline"}const C=100;let m=class extends k{constructor(o){super(o),this._chartData=null,this._visualElements=[]}initialize(){const o=I(e=>{this._update(e)},C);this.addHandles([h(()=>({spatialReference:this.view.spatialReference,chartData:this._chartData}),o,p),o])}destroy(){this._destroyVisualElements()}remove(){this._destroyVisualElements()}update(o){this._chartData=o}_update(o){const{chartData:e}=o;if(e==null)return this.remove();if(!e.refined)return;const i=this._visualElements,t=e.lines.filter(a=>a.viewVisualizationEnabled),r=t.length;for(;i.length>r;)i.pop().destroy();const s=S().profileLinesStyle3D;for(;i.length<r;){const a=new w({view:this.view,elevationInfo:{mode:"absolute-height",offset:0},innerWidth:s.width-s.outlineSize,width:s.width,falloff:s.falloff,color:s.outlineColor,renderOccluded:s.renderOccluded,isDecoration:!0});i.push(a)}const n=o.spatialReference;for(let a=0;a<r;++a){const d=i[a],l=t[r-1-a];d.geometry=this._createLineGeometry(l,n),d.innerColor=T(z.toUnitRGBA(l.color))}}_createLineGeometry(o,e){const i=o.samples??[],t=i.length-1,r=[];let s=[];for(let n=0;n<=t;n++){const{x:a,y:d,z:l}=i[n];l!=null&&s.push([a,d,l]),n!==t&&l!=null||!s.length||(r.push(s),s=[])}return new M({paths:r,hasZ:!0,spatialReference:e})}_destroyVisualElements(){this._visualElements.forEach(o=>o.destroy()),this._visualElements.length=0}};c([f()],m.prototype,"view",void 0),c([f()],m.prototype,"_chartData",void 0),m=c([P("esri.widgets.ElevationProfile.support.ProfileLines3D")],m);class Ee{constructor(e,i){this._handles=new O,this._inputRepresentation=new x({view:e}),this._hoveredPoints=new V({view:e}),this._profileLines=new m({view:e}),this._handles.add([h(()=>i.viewModel.hoveredPoints,t=>this._hoveredPoints.update(t),p),h(()=>{const{state:t,editable:r,highlightEnabled:s,viewModel:n}=i,a=n.input;return a&&(a.commitProperty("geometry"),a.commitProperty("layer")),{input:a,state:t,editable:r,highlightEnabled:s}},t=>this._updateInputRepresentation(t),p),h(()=>i.viewModel.chartData,t=>this._profileLines.update(t),p),h(()=>{var t;return(t=i.viewModel.input)==null?void 0:t.geometry},()=>{this._profileLines.remove()},p)])}destroy(){this._handles=u(this._handles),this._inputRepresentation=u(this._inputRepresentation),this._hoveredPoints=u(this._hoveredPoints),this._profileLines=u(this._profileLines)}_updateInputRepresentation({input:e,state:i,editable:t,highlightEnabled:r}){const s=this._inputRepresentation;if(!r)return s.remove();i===v.Selected?s.showHighlight(e):i!==v.Created||t?s.remove():s.showReshaping(e)}}export{Ee as ElevationProfileView3D};