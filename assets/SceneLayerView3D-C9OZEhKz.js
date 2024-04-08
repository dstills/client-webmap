import{ff as m,P as h,gb as a,u as _,aK as f,bk as o,cT as F,aP as b,g as n,y as l,eA as v,fc as I,i as w}from"./index-BhDz4nJ7.js";import{s as E}from"./ReactiveSet-DDrZw8n9.js";import{x as O}from"./WhereClause-CVWhFH1k.js";import{S as x,u as H,n as S}from"./I3SMeshView3D-DJUZ5Vew.js";import{n as C}from"./LayerView3D-BKIbGugV.js";import{c as j,i as Q,u as q,d as $,f as V,a as A,w as P}from"./SceneLayerView-ChMbjp91.js";import{P as p,d as R,h as D,o as G}from"./I3SQueryFeatureStore-CkHlZYVD.js";import{o as c}from"./I3SNode-DolZtN3v.js";import{D as L}from"./I3SOverrides-CHF33ues.js";import{Y as U,Z as M,W as u}from"./I3SUtil-NsljtA_A.js";import{u as T,t as N}from"./TemporalSceneLayerView-BMPM-G1M.js";import{i as z}from"./PopupSceneLayerView-D8AVeTO_.js";import{u as W}from"./popupUtils-MZRTyQW5.js";import"./LayerElevationProvider-bOov_xs8.js";import"./RenderTexture-Caq6jnTc.js";import"./SceneModification-DOgn9YNz.js";import"./persistable-DaHnVUBI.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-BhndBlKT.js";import"./Graphics3DObjectStates-Dk2iPRZ3.js";import"./optimizedFeatureQueryEngineAdapter-Cndhs9UI.js";import"./centroid-DdLmOD72.js";import"./PooledRBush-D633Sbwg.js";import"./quickselect-C4F3mpYw.js";import"./SceneLayerWorker-D-w9Jaic.js";import"./HeatmapDensity.glsl-x7q-49jW.js";import"./dehydratedFeatureComparison-pSIF2X6o.js";import"./queryForSymbologySnapping--4ez7C2X.js";import"./hash-CcEbRgUF.js";import"./QueryEngine-B-uUrZ6N.js";import"./timeSupport-BllRBzVr.js";import"./json-Wa8cmqdu.js";import"./utils-DU1Zbxxt.js";import"./utils-l_nwyURO.js";import"./ClassBreaksDefinition-CnS5D5E6.js";import"./FeatureStore-Ca9AQGu3.js";import"./BoundsStore-C_sRQ4sC.js";import"./heatmapTextureUtils-F_IWNXr_.js";import"./projectExtentUtils-HbzO5SHS.js";import"./makeScheduleFunction-CggzEh3c.js";import"./LayerView-C77uL6vR.js";import"./I3SBinaryReader-DKkBJHMp.js";import"./meshFeatureSet-BGTUh69k.js";import"./Mesh-DsVgO6Ui.js";import"./External-CAIZ3_pI.js";import"./FeatureLayerView3D-YIKBi8YK.js";import"./FeatureLayerViewBase3D-OwNxXQMU.js";import"./query-CGw84oGO.js";import"./pbfQueryUtils-Dark8sO6.js";import"./pbf-7bahT4Qy.js";import"./EventedSet-DDbFyFVs.js";import"./FeatureLayerView-B63fN2z9.js";import"./RefreshableLayerView-CWwfo6pL.js";const y=A();let s=class extends x(T(N(z(C(P))))){constructor(){super(...arguments),this.type="scene-layer-3d",this._setVisibilityHiddenObjectIds=new E,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._pendingEditsQueue=Promise.resolve(),this._interactiveEditingSessions=new Map,this._queryEngine=null}get i3slayer(){return this.layer}tryRecycleWith(e,t){return e.url===this.layer.url&&this.i3sOverrides.isEmpty?e.load(t).then(()=>{var r;U(this.layer,e,this.i3sOverrides),this.layer=e,this.i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this.i3sOverrides=new L({view:this.view,layer:e,memoryController:i}),this.resetHighlights()}):null}get layerPopupEnabledAndHasTemplate(){var e;return this.layer.popupEnabled&&W(this.layer,(e=this.view.popup)==null?void 0:e.defaultPopupTemplateEnabled)}get filter(){return this._get("filter")}set filter(e){this._set("filter",p.checkSupport(e)?e:null)}get viewFilter(){const e=this.mergedFilter,t=this.layerFilter;if(e==null&&t==null)return null;const i=this._get("viewFilter");return i==null?new p({layerFilter:t,viewFilter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:r=>this._loadAsyncModule(r),addSqlFilter:(r,d)=>this.addSqlFilter(r,d,this.logError),addTimeFilter:(r,d)=>this.addTimeFilter(r,d)}):(i.viewFilter=e,i.layerFilter=t,i)}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get _floorFilterClause(){const e=m(this);return e!=null?O.create(e,this.layer.fieldsIndex):null}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds.toArray();return e.length?e.sort((t,i)=>t-i):null}get _setVisibilityHiddenObjectIdsSorted(){return this._setVisibilityHiddenObjectIds.size?Array.from(this._setVisibilityHiddenObjectIds).sort((e,t)=>e-t):null}get lodFactor(){var e,t,i,r;return((r=(i=(t=(e=this.view)==null?void 0:e.qualitySettings)==null?void 0:t.sceneService)==null?void 0:i.object)==null?void 0:r.lodFactor)??1}get lodCrossfadeUncoveredDuration(){var e,t;return((t=(e=this.view)==null?void 0:e.qualitySettings)==null?void 0:t.fadeDuration)??0}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??0}initialize(){this._fieldsHelper=new j({layerView:this}),this._updatingHandles.add(()=>this.layer.rangeInfos,t=>this._rangeInfosChanged(t),h),this._updatingHandles.add(()=>this.layer.renderer,t=>this._updatingHandles.addPromise(this._rendererChange(t)),h);const e=()=>this._filterChange();this._updatingHandles.add(()=>this.parsedDefinitionExpression,e),this._updatingHandles.add(()=>this.mergedFilter,e),this._updatingHandles.add(()=>this._floorFilterClause,e),this._updatingHandles.add(()=>this._excludeObjectIdsSorted,e),this._updatingHandles.add(()=>this._setVisibilityHiddenObjectIdsSorted,e),this._updatingHandles.add(()=>{var t;return(t=this.viewFilter)==null?void 0:t.sortedObjectIds},e),this._updatingHandles.add(()=>{var t;return(t=this.viewFilter)==null?void 0:t.parsedWhereClause},e),this._updatingHandles.add(()=>this.getTimeFilterDependencies(),e),this._updatingHandles.add(()=>{var t,i,r;return[(t=this.viewFilter)==null?void 0:t.parsedGeometry,(i=this.mergedFilter)==null?void 0:i.spatialRelationship,(r=this.layer.filter)==null?void 0:r.spatialRelationship]},()=>this._geometryFilterChange()),a()&&this.i3sOverrides.is3DOFL&&this._updatingHandles.add(()=>this.i3sOverrides.sortedGeometryChangedObjectIds,e),this.addHandles(this.layer.on("apply-edits",t=>this._updatingHandles.addPromise(t.result))),this.addHandles(this.layer.on("edits",t=>{const i=this._pendingEditsQueue.then(()=>this._handleEdits(t)).then();this._pendingEditsQueue=i,this._updatingHandles.addPromise(i)}))}destroy(){this._fieldsHelper=_(this._fieldsHelper)}_rangeInfosChanged(e){e!=null&&e.length>0&&f.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){var t;const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return((t=this.mergedFilter)==null?void 0:t.createQuery(e))??new o(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(i=>{if(!(i!=null&&i.features))return i;const r=this.layer;for(const d of i.features)d.layer=r,d.sourceLayer=r;return i})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=H(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new R({layerView:this,priority:F.FEATURE_QUERY_ENGINE,spatialIndex:new D({featureAdapter:new G({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo??[],getFeatureExtent:e}),forAllFeatures:(t,i)=>this._forAllFeatures((r,d,g)=>t({id:r,index:d,meta:g}),i,S.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:M(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof o){const{set:i,handle:r}=t.acquireSet();return this.queryObjectIds(e).then(d=>t.setFeatureIds(i,d)),r}return super.highlight(e)}createInteractiveEditSession(e){return Q(this._attributeEditingContext,e)}_createLayerGraphic(e){const t=new b(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t}getFilters(){const e=super.getFilters();a()&&this.i3sOverrides.is3DOFL&&this.i3sOverrides.sortedGeometryChangedObjectIds.length>0&&e.push((r,d)=>{d.node.index>=0&&u(this.i3sOverrides.sortedGeometryChangedObjectIds,!1,r)});const t=this._setVisibilityHiddenObjectIdsSorted;t!=null&&e.push(r=>u(t,!1,r));const i=this._excludeObjectIdsSorted;return i!=null&&e.push(r=>u(i,!1,r)),this._floorFilterClause&&this.addSqlFilter(e,this._floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),this.viewFilter!=null&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}setVisibility(e,t){t?this._setVisibilityHiddenObjectIds.delete(e):this._setVisibilityHiddenObjectIds.add(e)}isUpdating(){return super.isUpdating()||this.layerFilterUpdating||this.viewFilter!=null&&this.viewFilter.updating||this.i3sOverrides!=null&&this.i3sOverrides.updating}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():o.from(e))}get _attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),globalIdField:this._getGlobalIdField(),forEachNode:e=>this._forAllNodes(t=>t!=null?e(t.node,t.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this.i3sOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}async _handleEdits(e){const t=a(),i=this._attributeEditingContext,r=await q(i,e);t&&$(i,r),V(i,r)}get hasGeometryFilter(){const e=this.viewFilter;return(e==null?void 0:e.parsedGeometry)!=null}computeNodeFiltering(e){const t=this.viewFilter;return t==null||!this.view.spatialReference||t.isMBSGeometryVisible(e,this.view.spatialReference,this._controller.crsIndex)?c.Unmodified:c.Culled}};n([l()],s.prototype,"i3slayer",null),n([l(v)],s.prototype,"updatingProgress",void 0),n([l({type:I})],s.prototype,"filter",null),n([l({readOnly:!0})],s.prototype,"viewFilter",null),n([l(y.requiredFields)],s.prototype,"requiredFields",null),n([l(y.availableFields)],s.prototype,"availableFields",void 0),n([l()],s.prototype,"_fieldsHelper",void 0),n([l()],s.prototype,"_floorFilterClause",null),n([l()],s.prototype,"_excludeObjectIdsSorted",null),n([l()],s.prototype,"_setVisibilityHiddenObjectIds",void 0),n([l()],s.prototype,"_setVisibilityHiddenObjectIdsSorted",null),n([l()],s.prototype,"lodFactor",null),n([l()],s.prototype,"updatingProgressValue",null),s=n([w("esri.views.3d.layers.SceneLayerView3D")],s);const We=s;export{We as default};