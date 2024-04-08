import{mW as fe,g as l,y as r,i as H,S as q,bh as W,aK as z,ar as v,sj as d,dp as Ve,sk as be,hR as Me,as as De,at as F,u as V,mQ as M,sl as p,sm as D,dc as T,sn as K,dx as C,so as Z,dj as Q,e3 as c,d9 as R,d8 as Y,sp as J,dA as U,du as L,dC as O,sq as Ee,sr as S,jY as X,n4 as Ce,dk as ee,n7 as Se,cV as te,dq as Te,ds as xe,d7 as le,ss as re,st as oe,ml as $e,su as he,cS as j,mL as ke}from"./index-BhDz4nJ7.js";import{s as Le}from"./AnalysisView3D-DhCzwIGu.js";import{h as ue}from"./SlicePlane-Dst6lIZR.js";import{_ as He}from"./BuildingComponentSublayer-DJb6X-E1.js";import{x as ze,L as Re,V as Oe,R as pe,m as Ge,I as Ie,H as Ae,g as ie,v as Be,j as ce,A as de,M as ye,r as G,t as I,l as ae,_ as se,a as Fe,p as Ke,s as Ue,b as x,e as je,C as f,c as ve,u as Ne,d as qe,f as We,h as Ze,i as _e,k as we,n as Qe,o as Ye,q as Je,w as Xe,y as et}from"./SlicePlaneMaterial.glsl-DzWeg-lD.js";import{t as tt}from"./LineVisualElement-BWUmCZ7r.js";import{l as it,n as at}from"./Factory-bADadLLm.js";import{b as st}from"./ShadedColorMaterial.glsl-C5Zzz7Ov.js";import{O as $}from"./dragEventPipeline3D-C7_KAA3n.js";import{o as nt}from"./AnalysisToolBase-D6DpsO8-.js";import{x as k}from"./InteractiveToolBase-DAZZuFBn.js";import{t as lt}from"./ToolIntersector-CL7QGbJr.js";import{a as rt,v as ot}from"./analysisViewUtils-CNJpV_KI.js";import"./persistable-DaHnVUBI.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-BhndBlKT.js";import"./capabilities-G8cwTF6L.js";import"./I3SIndexInfo-D3eHCr37.js";import"./I3SLayerDefinitions-BtCBO_0M.js";import"./I3SUtil-NsljtA_A.js";import"./I3SBinaryReader-DKkBJHMp.js";import"./popupUtils-MZRTyQW5.js";import"./ImageMaterial.glsl-gnKJ78W6.js";import"./Object3DVisualElement-BOhC2dTP.js";import"./VisualElement-BZRMP-FE.js";import"./drawUtils-Bqp5w5Kg.js";function ht(e){switch(e.type){case"building-scene":case"catalog":case"catalog-dynamic-group":case"catalog-footprint":case"csv":case"dimension":case"feature":case"geo-rss":case"geojson":case"graphics":case"group":case"integrated-mesh":case"integrated-mesh-3dtiles":case"kml":case"knowledge-graph":case"link-chart":case"knowledge-graph-sublayer":case"line-of-sight":case"map-notes":case"ogc-feature":case"oriented-imagery":case"point-cloud":case"route":case"scene":case"stream":case"voxel":case"subtype-group":case"unknown":case"unsupported":case"wfs":case null:return!1;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"elevation":case"imagery":case"imagery-tile":case"map-image":case"media":case"open-street-map":case"tile":case"vector-tile":case"video":case"wcs":case"web-tile":case"wms":case"wmts":return!0;default:return fe(e.type),!1}}let g=class extends q{constructor(e){super(e),this._internalChange=!1,this._currentSlicePlane=null}initialize(){this.addHandles(this.analysis.excludedLayers.on("before-add",e=>{const t=e.item;t!=null&&(t instanceof W||t instanceof He)?t instanceof W&&ht(t)?(z.getLogger(this).error("excludedLayers",`Layer '${t.title}, id:${t.id}' of type '${t.type}' can not be individually excluded from slicing. Use 'excludeGroundSurface' instead.`),e.preventDefault()):this.analysis.excludedLayers.includes(t)&&e.preventDefault():(z.getLogger(this).error("excludedLayers","Invalid layer type, layer must derive from Layer or BuildingComponentSublayer"),e.preventDefault())})),pt(this.view,this),this.addHandles([v(()=>this.analysisViewData.plane,()=>{this._internalChange||this._updateSlicePlaneFromBoundedPlane(),this._updateLayerViews()},{sync:!0}),v(()=>this.analysis.excludeGroundSurface,()=>this._updateLayerViews(),{sync:!0}),this.analysis.excludedLayers.on("change",()=>this._updateLayerViews()),v(()=>[this.analysisViewData.active,this.analysisViewData.visible],()=>{this._updateActiveController(),this._updateViewSlicePlane()},{sync:!0}),v(()=>this._allLayerAndSubLayerViews,()=>this._updateLayerViews())]),this.addHandles([v(()=>this.analysis.shape,()=>{this._internalChange||(this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane())},{sync:!0})],"analysis"),this._updateActiveController(),this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane()}destroy(){this.analysisViewData.active&&(this.analysisViewData.active=!1,this.view.slicePlane=null,this._updateActiveController(),this._updateViewSlicePlane()),ct(this.view,this),this.set("view",null)}get _allLayerAndSubLayerViews(){const e=this.view.allLayerViews.items;return e.concat(e.filter(ze).flatMap(({sublayerViews:t})=>t.items))}_updateBoundedPlaneFromSlicePlane(){const e=this.analysis.shape,t=this._currentSlicePlane;if(t==null&&e==null||t!=null&&e!=null&&e.equals(t))return;let i=null,a=null;if((e==null?void 0:e.position)!=null){const s=e.position.spatialReference,n=Re(e,this.view);n==null&&tt(this.analysis,s,z.getLogger(this)),i=Oe(n,this.view,{tiltEnabled:this.analysis.tiltEnabled},d()),i!=null&&(a={heading:e.heading,tilt:e.tilt,position:e.position,width:e.width,height:e.height})}this._currentSlicePlane=a,this._internalChange=!0,this.analysisViewData.plane=i,this._internalChange=!1}_updateSlicePlaneFromBoundedPlane(){const e=this.analysisViewData.plane,t=pe(e,this.view,this.view.spatialReference,new ue);let i=null;t!=null&&(i={heading:t.heading,tilt:t.tilt,position:t.position,width:t.width,height:t.height}),this._currentSlicePlane=i,this._internalChange=!0,this.analysis.shape=t,this._internalChange=!1,this._updateViewSlicePlane()}_updateActiveController(){if(A)return;const e=ge(this.view);if(e)if(this.analysisViewData.active)e.activeController!=null&&e.activeController!==this?(A=!0,e.activeController.analysisViewData.active=!1,A=!1):e.activeController!=null&&e.activeController,this._updateLayerViews(),e.activeController=this;else{if(e.activeController!=null&&e.activeController!==this)return;e.activeController!=null&&e.activeController===this&&(e.activeController=null,this._updateLayerViews())}}_updateViewSlicePlane(){ut(this.view)}_updateLayerViews(){const e=this.analysisViewData.plane!=null&&this.analysisViewData.visible&&this.analysisViewData.active,t=[],i=a=>{"layers"in a?a.layers.forEach(i):t.push(a)};this.analysis.excludedLayers.forEach(i),this.view.allLayerViews.forEach(a=>{a.destroyed||("slicePlaneEnabled"in a&&(a.slicePlaneEnabled=e&&!t.includes(a.layer)),"sublayerViews"in a&&a.sublayerViews.forEach(s=>{s.slicePlaneEnabled=e&&!t.includes(s.sublayer)}))}),this.view.basemapTerrain!=null&&(this.view.basemapTerrain.slicePlaneEnabled=e&&!this.analysis.excludeGroundSurface)}};l([r()],g.prototype,"view",void 0),l([r()],g.prototype,"analysis",void 0),l([r()],g.prototype,"analysisViewData",void 0),l([r()],g.prototype,"_allLayerAndSubLayerViews",null),g=l([H("esri.views.3d.analysis.Slice.SliceController")],g);const P=new Map;let A=!1;function ut(e){const t=ge(e),i=t==null?void 0:t.activeController;(i==null?void 0:i.analysisViewData.plane)!=null&&i.analysisViewData.visible?e.slicePlane=i.analysisViewData.plane:e.slicePlane=null}function pt(e,t){var i;P.has(e)||P.set(e,{all:[],activeController:null}),(i=P.get(e))==null||i.all.push(t)}function ge(e){return P.get(e)}function ct(e,t){if(!P.has(e))throw new Error("view expected in global slice register");const i=P.get(e),a=(i==null?void 0:i.all.lastIndexOf(t))??-1;if(!i||a===-1)throw new Error("controller expected in global slice register");i.all.splice(a,1),i.all.length===0&&P.delete(e)}var N;let u=N=class extends nt{constructor(e){super(e),this._clock=be,this._previewPlaneOpacity=1,this.removeIncompleteOnCancel=!1,this._layersMode="none",this.shiftManipulator=null,this.rotateHeadingManipulator=null,this.rotateTiltManipulator=null,this.resizeManipulators=null,this._frameTask=null,this._pointerMoveTimerMs=Ge,this._prevPointerMoveTimeout=null,this._previewPlaneGridVisualElement=null,this._previewPlaneOutlineVisualElement=null,this._startPlane=d(),this._previewPlane=null,this._activeKeyModifiers={},this._lastCursorPosition=Me(),this._resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}],this._intersector=lt(e.view.state.viewingMode)}initialize(){var h;if(this.analysis==null)throw new Error("SliceTool requires valid analysis, but null was provided.");const e=o=>{this._updateManipulatorsInteractive(o),o.grabbing||(this.analysisViewData.plane!=null&&p(this.analysisViewData.plane,this._startPlane),this.inputState=null)},t=new Ie(this.view,Ae.CENTER_ON_ARROW);this.shiftManipulator=t,this.manipulators.add(t),this.addHandles([this._createShiftDragPipeline(t),t.events.on("grab-changed",o=>{this._onShiftGrab(o),e(t)})]);const i=!((h=this.view._stage)!=null&&h.renderView.renderingContext.driverTest.svgPremultipliesAlpha.result),a=new ie(this.view,(o,_)=>it(this.view.textures,{accentColor:o,contrastColor:_,preMultiplyAlpha:i}));this.rotateHeadingManipulator=a,this.manipulators.add(a),this.addHandles([this._createRotateHeadingDragPipeline(a),a.events.on("grab-changed",o=>{this._onRotateHeadingGrab(o),e(a)})]);const s=new ie(this.view,(o,_)=>at(this.view.textures,{accentColor:o,contrastColor:_,preMultiplyAlpha:i}));this.rotateTiltManipulator=s,this.manipulators.add(s),this.addHandles([this._createRotateTiltDragPipeline(s),s.events.on("grab-changed",o=>{this._onRotateTiltGrab(o),e(s)})]),this.resizeManipulators=this._resizeHandles.map((o,_)=>{const m=new Be(this.view,o);return this.addHandles([this._createResizeDragPipeline(m),m.events.on("grab-changed",b=>{this._onResizeGrab(b,_),e(m)})]),m}),this.manipulators.addMany(this.resizeManipulators),this._previewPlaneGridVisualElement=ce(this.view),this._previewPlaneOutlineVisualElement=de(this.view),this._previewPlaneOutlineVisualElement.width=ye,this.addHandles(v(()=>[this.analysisViewData.plane,this.analysis.tiltEnabled],()=>this._updateManipulators(),De));const n=v(()=>this.state,o=>{o==="sliced"&&this.finishToolCreation()},F);this.addHandles([n,v(()=>this.view.state.camera,()=>this._onCameraChange())])}destroy(){this._removeFrameTask(),this._clearPointerMoveTimeout(),this._previewPlaneOutlineVisualElement=V(this._previewPlaneOutlineVisualElement),this._previewPlaneGridVisualElement=V(this._previewPlaneGridVisualElement)}get state(){const e=!!this.analysisViewData.plane,t=!!this.inputState;return e?e&&t?"slicing":e&&!t?"sliced":"ready":"ready"}get cursor(){return this._isPlacingSlicePlane||this.layersMode==="exclude"?"crosshair":this._creatingPointerId!=null?"grabbing":null}set analysis(e){if(e==null)throw new Error("SliceTool requires valid analysis, but null was provided.");this.removeHandles("analysis"),this._set("analysis",e)}get layersMode(){return this._layersMode}get inputState(){return this._get("inputState")}set inputState(e){this._set("inputState",e),this.analysisViewData.showGrid=e!=null&&e.type==="resize",this._updateMaterials()}get _isPlacingSlicePlane(){return!this.inputState&&!this.analysisViewData.plane&&this.active}get _creatingPointerId(){return this.inputState!=null&&this.inputState.type==="shift"?this.inputState.creatingPointerId:null}enterExcludeLayerMode(){this.analysisViewData.plane!=null&&(this._layersMode="exclude",this.active||(this.view.activeTool=this))}exitExcludeLayerMode(){this.analysisViewData.plane!=null&&(this._layersMode="none",this.active&&(this.view.activeTool=null))}onDeactivate(){this._updatePreviewPlane(null)}onShow(){this._updateVisibility(!0)}onHide(){this._updateVisibility(!1)}_updateVisibility(e){this._updateManipulators(),e||this._clearPointerMoveTimeout()}onInputEvent(e){switch(e.type){case"pointer-drag":if(!B(e))return;this._isPlacingSlicePlane?this._onClickPlacePlane(e)&&e.stopPropagation():this._onPointerDrag(e)&&e.stopPropagation();break;case"pointer-move":this._onPointerMove(e);break;case"pointer-up":this._onPointerUp(e)&&e.stopPropagation();break;case"immediate-click":if(!B(e))return;this._onClickPlacePlane(e)&&e.stopPropagation();break;case"click":if(!B(e))return;this._onClickExcludeLayer(e)&&e.stopPropagation();break;case"drag":this.inputState&&e.stopPropagation();break;case"key-down":this._onKeyDown(e)&&e.stopPropagation();break;case"key-up":this._onKeyUp(e)&&e.stopPropagation()}}onEditableChange(){this.analysisViewData.editable=this.internallyEditable}_onPointerDrag(e){const t=this.inputState;if(e.pointerId===this._creatingPointerId&&t!=null&&t.type==="shift"){const i=M(e);return this.shiftManipulator.events.emit("drag",{action:t.hasBeenDragged?"update":"start",pointerType:e.pointerType,start:i,screenPoint:i}),t.hasBeenDragged=!0,!0}return!1}_onPointerMove(e){this._lastCursorPosition.x=e.x,this._lastCursorPosition.y=e.y,this._resetPointerMoveTimeout(),e.pointerType!=="touch"&&this._updatePreviewPlane(M(e),this._activeKeyModifiers)}_onCameraChange(){this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),this._updateManipulators()}_onPointerUp(e){if(e.pointerId===this._creatingPointerId&&this.analysisViewData.plane!=null){const t=M(e);return this.shiftManipulator.events.emit("drag",{action:"end",start:t,screenPoint:t}),p(this.analysisViewData.plane,this._startPlane),this.inputState=null,!0}return!1}_onClickPlacePlane(e){if(this.layersMode==="exclude")return!1;if(this._isPlacingSlicePlane){const t=M(e),i=d();if(this._pickPlane(t,!1,this._activeKeyModifiers,i)){if(e.type==="pointer-drag"){const a=D(this.view.state.camera,t,E);this.inputState=ne(a,e.pointerId,i.origin,i)}return p(i,this._startPlane),this.analysis.shape=pe(i,this.view,this.view.spatialReference,new ue),!0}}return!1}_onClickExcludeLayer(e){return!(this.layersMode!=="exclude"||!this.created)&&(this.view.hitTest(M(e)).then(t=>{if(t.results.length){const i=t.results[0],a=(i==null?void 0:i.type)==="graphic"&&i.graphic;if(a){const s=a.sourceLayer||a.layer;s&&this.analysis.excludedLayers.push(s)}}else t.ground.layer?this.analysis.excludedLayers.push(t.ground.layer):this.analysis.excludeGroundSurface=!0}),this.exitExcludeLayerMode(),!0)}_onKeyDown(e){return(e.key===G||e.key===I)&&(this._activeKeyModifiers[e.key]=!0,this._previewPlane!=null&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onKeyUp(e){return!(e.key!==G&&e.key!==I||!this._activeKeyModifiers[e.key])&&(delete this._activeKeyModifiers[e.key],this._previewPlane!=null&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onShiftGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=D(this.view.state.camera,e.screenPoint,E);p(this.analysisViewData.plane,this._startPlane),this.inputState=ne(t,null,this.shiftManipulator.renderLocation,this.analysisViewData.plane)}_createShiftDragPipeline(e){return k(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="shift")return;const n=this.analysisViewData.plane!=null?p(this.analysisViewData.plane,d()):null;i.next($(this.view,s.shiftPlane)).next(this._shiftDragAdjustSensitivity(s)).next(this._shiftDragUpdatePlane(s)),a.next(()=>{n!=null&&this._updateBoundedPlane(n)})})}_shiftDragAdjustSensitivity(e){return t=>{if(this.analysisViewData.plane==null)return null;const i=.001,a=Math.min((1-Math.abs(T(K(this.analysisViewData.plane),t.ray.direction)/C(t.ray.direction)))/i,1),s=-Z(this._startPlane.plane,t.renderEnd),n=-Z(this._startPlane.plane,e.startPoint);return e.depth=e.depth*(1-a)+s*a-n,t}}_shiftDragUpdatePlane(e){return()=>{if(this.analysisViewData.plane==null)return;const t=Q(c.get(),this._startPlane.origin),i=Q(c.get(),K(this._startPlane));R(i,i,-e.depth),Y(i,i,t);const a=J(i,this.analysisViewData.plane.basis1,this.analysisViewData.plane.basis2,d());this._updateBoundedPlane(a)}}_onRotateHeadingGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=ae(this.analysisViewData.plane,this.view.renderCoordsHelper,se.HEADING,U()),i=D(this.view.state.camera,e.screenPoint,E),a=j();L(t,i,a)&&(p(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:t,startPoint:a})}_createRotateHeadingDragPipeline(e){return k(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="rotate")return;const n=this.analysisViewData.plane!=null?p(this.analysisViewData.plane,d()):null;i.next($(this.view,s.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(s)).next(this._rotateDragUpdatePlaneFromRotate()),a.next(()=>{n!=null&&this._updateBoundedPlane(n)})})}_onRotateTiltGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=ae(this.analysisViewData.plane,this.view.renderCoordsHelper,se.TILT,U()),i=D(this.view.state.camera,e.screenPoint,E),a=j();L(t,i,a)&&(p(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:t,startPoint:a})}_createRotateTiltDragPipeline(e){return k(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="rotate")return;const n=this.analysisViewData.plane!=null?p(this.analysisViewData.plane,d()):null;i.next($(this.view,s.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(s)).next(this._rotateDragUpdatePlaneFromRotate()),a.next(()=>{n!=null&&this._updateBoundedPlane(n)})})}_rotateDragRenderPlaneToRotate(e){return t=>{if(this.analysisViewData.plane==null)return null;const i=O(e.rotatePlane),a=st(e.startPoint,t.renderEnd,this.analysisViewData.plane.origin,i);return{...t,rotateAxis:i,rotateAngle:a}}}_rotateDragUpdatePlaneFromRotate(){return e=>{if(this.analysisViewData.plane==null)return;const t=Ee(S.get(),e.rotateAngle,e.rotateAxis);if(t==null)return;const i=X(c.get(),this._startPlane.basis1,t),a=X(c.get(),this._startPlane.basis2,t),s=J(this.analysisViewData.plane.origin,i,a,d());this._updateBoundedPlane(s)}}_onResizeGrab(e,t){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const i=D(this.view.state.camera,e.screenPoint,E),a=c.get();L(this.analysisViewData.plane.plane,i,a)&&(p(this.analysisViewData.plane,this._startPlane),this.inputState={type:"resize",activeHandleIdx:t,startPoint:Ce(a)})}_createResizeDragPipeline(e){return k(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="resize"||this.analysisViewData.plane==null)return;const n=p(this.analysisViewData.plane,d());i.next($(this.view,this.analysisViewData.plane.plane)).next(this._resizeDragUpdatePlane(s)),a.next(()=>{this._updateBoundedPlane(n)})})}_resizeDragUpdatePlane(e){return t=>{if(this.analysisViewData.plane==null)return;const i=this._resizeHandles[e.activeHandleIdx],a=Fe(i,e.startPoint,t.renderEnd,this.view.state.camera,this._startPlane,p(this.analysisViewData.plane));this._updateBoundedPlane(a)}}_updateBoundedPlane(e){const t=this.analysisViewData;if(t==null)throw new Error("valid internal object expected");t.plane=e}_updatePreviewPlane(e,t={}){let i=this._previewPlane;if(this._previewPlane=null,e==null)return this._removeFrameTask(),void this._updateManipulators();if(!this.analysisViewData.plane&&this.active){const a=i??d();if(i=i!=null?p(i,dt):null,this._pickPlane(e,!0,t,a)){const s=Ye;let n=!1;i!=null&&(n=T(O(i.plane),O(a.plane))<s||T(ee(c.get(),i.basis1),ee(c.get(),a.basis1))<s),n&&(this._previewPlaneOpacity=0),this._previewPlane=a}}this._previewPlane!=null&&this._frameTask==null&&this._previewPlaneOpacity===0?this._frameTask=Se({update:({deltaTime:a})=>{this._previewPlaneOpacity=Math.min(this._previewPlaneOpacity+a/(1e3*Ke),1),this._updateManipulators(),this._previewPlaneOpacity===1&&this._removeFrameTask()}}):this._previewPlane==null&&this._frameTask!=null?this._removeFrameTask():this._previewPlane!=null&&this._updateManipulators()}_removeFrameTask(){this._frameTask=te(this._frameTask)}_pickMinResult(e){const t=Te(e,xe.get());return this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(t,this._intersector),this._intersector.results.min}_pickPlane(e,t,i,a){const s=this._pickMinResult(e),n=c.get();if(!s.getIntersectionPoint(n))return!1;const h=s.getTransformedNormal(c.get()),o=this.view.state.camera;T(h,o.viewForward)>0&&R(h,h,-1);const _=Ue(n,o),m=(t?1:-1)*_*Je,b=R(c.get(),h,m);Y(b,b,n);const Pe=this.analysis.tiltEnabled?x.TILTED:x.HORIZONTAL_OR_VERTICAL,me=i[G]?x.VERTICAL:i[I]?x.HORIZONTAL:Pe;return je(b,h,_,_,o,me,this.view.renderCoordsHelper,a),!0}_clearPointerMoveTimeout(){this._prevPointerMoveTimeout=te(this._prevPointerMoveTimeout)}_resetPointerMoveTimeout(){this._clearPointerMoveTimeout(),this.shiftManipulator.state|=f,this.rotateHeadingManipulator.state|=f,this.rotateTiltManipulator.state|=f,this._prevPointerMoveTimeout=this._clock.setTimeout(()=>{this.shiftManipulator.state&=~f,this.rotateHeadingManipulator.state&=~f,this.rotateTiltManipulator.state&=~f},this._pointerMoveTimerMs)}_updateManipulators(){if(N.disableEngineLayers)return;let e,t=!1;if(this.analysisViewData.plane!=null)e=this.analysisViewData.plane,t=!1;else{if(this._previewPlane==null)return this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach(h=>h.available=!1),this._previewPlaneOutlineVisualElement.visible=!1,void(this._previewPlaneGridVisualElement.visible=!1);e=this._previewPlane,t=!0}const i=ve(e,S.get());t?(this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach(h=>h.available=!1),this._previewPlaneOutlineVisualElement.attached=!0,this._previewPlaneGridVisualElement.attached=!0,this._previewPlaneOutlineVisualElement.visible=!0,this._previewPlaneGridVisualElement.visible=!0):(this.shiftManipulator.available=!0,this.rotateHeadingManipulator.available=!0,this.rotateTiltManipulator.available=this.analysis.tiltEnabled,this.resizeManipulators.forEach(h=>h.available=!0),Ne(this.shiftManipulator,i,e,this.view.state.camera),qe(this.rotateHeadingManipulator,i,e,this.view.renderCoordsHelper),We(this.rotateTiltManipulator,i,e),this.resizeManipulators.forEach((h,o)=>Ze(h,this._resizeHandles[o],i,e)),this._previewPlaneOutlineVisualElement.visible=!1,this._previewPlaneGridVisualElement.visible=!1);const a=le(c.get(),C(e.basis1),C(e.basis2),1),s=re(S.get(),a),n=oe(s,i,s);this._previewPlaneOutlineVisualElement.transform=n,this._previewPlaneGridVisualElement.transform=n,this._updateMaterials()}_updateMaterials(){const e=_e(this.view.effectiveTheme);e[3]*=this._previewPlaneOpacity;const t=$e(we);t[3]*=this._previewPlaneOpacity,this._previewPlaneOutlineVisualElement.color=e,this._previewPlaneGridVisualElement.backgroundColor=t,this._previewPlaneGridVisualElement.gridColor=he}_updateManipulatorsInteractive(e){if(!e.grabbing)return this.shiftManipulator.interactive=!0,this.rotateHeadingManipulator.interactive=!0,this.rotateTiltManipulator.interactive=!0,void this.resizeManipulators.forEach(t=>{t.interactive=!0});this.shiftManipulator.interactive=this.shiftManipulator===e,this.rotateHeadingManipulator.interactive=this.rotateHeadingManipulator===e,this.rotateTiltManipulator.interactive=this.rotateTiltManipulator===e,this.resizeManipulators.forEach(t=>{t.interactive=t===e})}testData(){return{plane:this.analysisViewData.plane,setPointerMoveTimerMs:e=>{this._pointerMoveTimerMs=e}}}};function ne(e,t,i,a){const s=Qe(i,K(a),e.direction,U()),n=j();return L(s,e,n)?{type:"shift",creatingPointerId:t,hasBeenDragged:!1,shiftPlane:s,depth:0,startPoint:n}:null}function B(e){return e.pointerType!=="mouse"||e.button===0}u.disableEngineLayers=!1,l([r()],u.prototype,"_clock",void 0),l([r({constructOnly:!0})],u.prototype,"view",void 0),l([r()],u.prototype,"analysisViewData",void 0),l([r({readOnly:!0})],u.prototype,"state",null),l([r({readOnly:!0})],u.prototype,"cursor",null),l([r()],u.prototype,"analysis",null),l([r()],u.prototype,"removeIncompleteOnCancel",void 0),l([r()],u.prototype,"_layersMode",void 0),l([r()],u.prototype,"layersMode",null),l([r({value:null})],u.prototype,"inputState",null),l([r()],u.prototype,"_isPlacingSlicePlane",null),l([r()],u.prototype,"_creatingPointerId",null),u=N=l([H("esri.views.3d.analysis.Slice.SliceTool")],u);const dt=d(),E=Ve(),yt=u;let w=class extends q{constructor(e){super(e),this._gridVisualElement=null,this._outlineVisualElement=null,this.showGrid=!1,this.preview=!0}initialize(){const e=this.analysisViewData;if(e==null)throw new Error("expected internal object to be valid");this._gridVisualElement=ce(this.view),this._outlineVisualElement=de(this.view),this.addHandles([v(()=>{const t=e.plane!=null&&this.analysisViewData.visible,{active:i}=this.analysisViewData,{preview:a,showGrid:s,view:n}=this,{effectiveTheme:h}=n;return{visible:t,active:i,preview:a,showGrid:s,gridColor:Xe(h),outlineColor:_e(h)}},t=>this._updateMaterials(t),F),v(()=>e.plane,t=>this._updatePlane(t),F)],"internal")}destroy(){this._gridVisualElement=V(this._gridVisualElement),this._outlineVisualElement=V(this._outlineVisualElement),this.set("view",null)}_updatePlane(e){if(e==null)return;this._gridVisualElement.attached=!0,this._outlineVisualElement.attached=!0;const t=le(c.get(),C(e.basis1),C(e.basis2),1),i=re(S.get(),t),a=ve(e,S.get()),s=oe(i,a,i);this._outlineVisualElement.transform=s,this._gridVisualElement.transform=s}_updateMaterials({visible:e,active:t,preview:i,showGrid:a,gridColor:s,outlineColor:n}){this._outlineVisualElement.color=n,this._outlineVisualElement.width=i?ye:et,this._outlineVisualElement.stipplePattern=t?null:ke(5),this._gridVisualElement.backgroundColor=we,this._gridVisualElement.gridColor=a?s:he,this._gridVisualElement.visible=e,this._outlineVisualElement.visible=e}};l([r()],w.prototype,"view",void 0),l([r()],w.prototype,"analysis",void 0),l([r()],w.prototype,"analysisViewData",void 0),l([r()],w.prototype,"showGrid",void 0),l([r()],w.prototype,"preview",void 0),w=l([H("esri.views.3d.analysis.Slice.SliceVisualization")],w);let y=class extends Le(q){constructor(e){super(e),this.type="slice-view-3d",this.analysis=null,this.tool=null,this.analysisVisualization=null,this.analysisController=null,this.plane=null,this.active=!0}initialize(){this.analysisVisualization=new w({view:this.view,analysis:this.analysis,analysisViewData:this}),this.analysisController=new g({view:this.view,analysis:this.analysis,analysisViewData:this}),this.addHandles(rt(this,yt))}destroy(){ot(this),this.analysisVisualization=V(this.analysisVisualization),this.analysisController=V(this.analysisController)}get showGrid(){var e;return((e=this.analysisVisualization)==null?void 0:e.showGrid)??!1}set showGrid(e){this.analysisVisualization&&(this.analysisVisualization.showGrid=e)}get editable(){return!this.analysisVisualization.preview}set editable(e){this.analysisVisualization.preview=!e}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController,tool:this.tool}}};l([r({readOnly:!0})],y.prototype,"type",void 0),l([r({constructOnly:!0,nonNullable:!0})],y.prototype,"analysis",void 0),l([r()],y.prototype,"tool",void 0),l([r()],y.prototype,"plane",void 0),l([r()],y.prototype,"active",void 0),l([r()],y.prototype,"showGrid",null),l([r()],y.prototype,"editable",null),y=l([H("esri.views.3d.analysis.SliceAnalysisView3D")],y);const Bt=y;export{Bt as default};