import{S as v,f as S,P as y,ja as w,ar as b,eG as k,je as E,ax as c,jf as F,jc as C,av as P,iJ as $,j as G,jg as g,ew as I,gh as A,i9 as H,bq as R,iL as x,i2 as O,cT as j,g as r,y as p,i as z,jd as Z,jh as L}from"./index-nBWeBKPv.js";import{t as M}from"./memoize-DsJmrG76.js";import{a as W}from"./normalizeUtilsSync-Dv3yGzcd.js";import{m as q}from"./FeatureStore-b2Fs3ZpN.js";import{$ as J}from"./QueryEngine-CPnR0m15.js";import{o as T,a as N}from"./queryEngineUtils-Blw78Y6w.js";import{i as m,r as U,n as _}from"./symbologySnappingCandidates-CYa0AN5E.js";import"./BoundsStore-BF0zlYhz.js";import"./PooledRBush-B1lNesT9.js";import"./quickselect-BhLHWy4r.js";import"./timeSupport-rQ_0tTrz.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-B5P_uar9.js";import"./centroid-DdLmOD72.js";import"./WhereClause-B4tsjlCE.js";import"./utils-DU6_NK45.js";import"./utils-DaKmNdQ2.js";import"./ClassBreaksDefinition-wh1e69hS.js";import"./VertexSnappingCandidate-C27dRzdt.js";import"./PointSnappingHint-J48rnsfj.js";const f="graphics-collections";let a=class extends v{get updating(){return this._updatingHandles.updating}get _hasZ(){const e=this.view;return e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes"}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="map-notes")return m();const s=async(n,o)=>(await Z(e.whenLayerView(t),o)).elevationAlignPointsInFeatures(n,o);return m(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:s})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes";return U(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d",s=this._extrudedPolygonSymbolsCount>0;return i&&t.type!=="map-notes"&&s?_(s,async(n,o)=>{const l=await e.whenLayerView(t);return c(o),l.queryForSymbologySnapping({candidates:n,spatialReference:e.spatialReference},o)}):_()}constructor(e){super(e),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new S,this._memoizedMakeGetGroundElevation=M(T)}destroy(){for(const e of this._pendingAdds)e.task.abort();this._pendingAdds.length=0,this._mapSources(e=>this._destroySource(e)),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add(()=>this.getGraphicsLayers(),i=>{this._updatingHandles.removeHandles(f);for(const s of i)this._addMany(s.graphics.toArray()),this.addHandles([s.on("graphic-update",n=>this._onGraphicUpdate(n)),this._updatingHandles.addOnCollectionChange(()=>s.graphics,n=>this._onGraphicsChanged(n))],f)},y);const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="map-notes"&&e.elevationProvider&&this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{w(i,t.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),b(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),y),k(()=>t,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(e,t){const{point:i,coordinateHelper:{spatialReference:s}}=e,n=await E(this._mapSources(d=>this._fetchCandidatesForSource(d,e,t)));c(t);const o=this._memoizedMakeGetGroundElevation(this.view,s),l=n.flat().map(d=>N(d,o));return F(i,l),l}async _fetchCandidatesForSource(e,t,i){var u;const s=C(t,((u=this.view)==null?void 0:u.type)??"2d"),n=await e.queryEngine.executeQueryForSnapping(s,i);c(i);const o=await this._snappingElevationAligner.alignCandidates(n.candidates,t.coordinateHelper.spatialReference,i);c(i);const l=await this._symbologySnappingFetcher.fetch(o,i);c(i);const d=l.length===0?o:[...o,...l];return this._snappingElevationFilter.filter(s,d)}refresh(){}_onGraphicUpdate(e){if(this.getGraphicsLayers().some(t=>t.graphics.includes(e.graphic)))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}_onGraphicsChanged(e){for(const t of e.removed)this._remove(t);this._addMany(e.added)}_addMany(e){const t=[],i=new Map;for(const s of e)s.geometry!=null&&(this._needsInitializeProjection(s.geometry.spatialReference)?(t.push(s.geometry.spatialReference),i.set(s.uid,s)):this._add(s));this._createPendingAdd(t,i)}_createPendingAdd(e,t){if(!e.length)return;const i=P(async o=>{await $(e.map(l=>({source:l,dest:this.spatialReference})),{signal:o}),this._markLoadedSpatialReferences(e);for(const[,l]of t)this._add(l)});this._updatingHandles.addPromise(i.promise);const s={task:i,graphics:t},n=()=>L(this._pendingAdds,s);i.promise.then(n,n),this._pendingAdds.push(s)}_markLoadedSpatialReferences(e){for(const t of e){t.wkid!=null&&this._loadedWkids.add(t.wkid);const i=t.wkt2||t.wkt;i&&this._loadedWkts.add(i)}}_add(e){if(e.geometry==null||!e.visible)return;let t=e.geometry;if(t.type==="mesh")return;t.type==="extent"&&(t=G.fromExtent(t));const i=this._ensureSource(t.type);if(i==null)return;const s=this._createOptimizedFeature(e.uid,t);s!=null&&(i.featureStore.add(s),g(e.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(e){if(e.wkid!=null&&this._loadedWkids.has(e.wkid))return!1;const t=e.wkt2||e.wkt;return(!t||!this._loadedWkts.has(t))&&!I(e,this.spatialReference)}_createOptimizedFeature(e,t){const i=A(W(t),this.spatialReference);if(!i)return null;const s=this._ensureGeometryHasZ(i),n=H(s,this._hasZ,!1);return new R(n,{[h]:e},null,e)}_ensureGeometryHasZ(e){if(!this._hasZ)return e;const t=s=>{for(;s.length<3;)s.push(0)},i=e.clone();switch(i.hasZ=!0,i.type){case"point":i.z=i.z??0;break;case"multipoint":i.points.forEach(t);break;case"polyline":i.paths.forEach(s=>s.forEach(t));break;case"polygon":i.rings.forEach(s=>s.forEach(t))}return i}_ensureSource(e){const t=this._sources[e];if(t!=null)return t;const i=this._createSource(e);return this._sources[e]=i,i}_createSource(e){const t=x.toJSON(e),i=this._hasZ,s=new q({geometryType:t,hasZ:i,hasM:!1});return{featureStore:s,queryEngine:new J({featureStore:s,fieldsIndex:O.fromLayerJSON({fields:[{name:h,type:"esriFieldTypeOID",alias:h}]}),geometryType:t,hasM:!1,hasZ:i,objectIdField:h,spatialReference:this.spatialReference,priority:j.SNAPPING,scheduler:this.view!=null&&this.view.type==="3d"?this.view.resourceController.scheduler:null}),type:e}}_remove(e){this._mapSources(t=>this._removeFromSource(t,e));for(const t of this._pendingAdds)t.graphics.delete(e.uid),t.graphics.size===0&&t.task.abort()}_removeFromSource(e,t){const i=t.uid;e.featureStore.has(i)&&(e.featureStore.removeById(t.uid),g(t.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(e){e.queryEngine.destroy(),this._sources[e.type]=null}_mapSources(e){const{point:t,polygon:i,polyline:s,multipoint:n}=this._sources,o=[];return t!=null&&o.push(e(t)),i!=null&&o.push(e(i)),s!=null&&o.push(e(s)),n!=null&&o.push(e(n)),o}};r([p()],a.prototype,"getGraphicsLayers",void 0),r([p({constructOnly:!0})],a.prototype,"layerSource",void 0),r([p({constructOnly:!0})],a.prototype,"spatialReference",void 0),r([p({constructOnly:!0})],a.prototype,"view",void 0),r([p({readOnly:!0})],a.prototype,"updating",null),r([p({readOnly:!0})],a.prototype,"availability",void 0),r([p()],a.prototype,"_hasZ",null),r([p()],a.prototype,"_snappingElevationAligner",null),r([p()],a.prototype,"_snappingElevationFilter",null),r([p()],a.prototype,"_symbologySnappingFetcher",null),r([p()],a.prototype,"_extrudedPolygonSymbolsCount",void 0),a=r([z("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],a);const h="OBJECTID";export{a as GraphicsSnappingSource};