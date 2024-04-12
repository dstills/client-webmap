function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/uploadAssets-DNll3jXx.js","assets/index-D2dWKXoe.js","assets/index-DvE0Cji0.css","assets/External-Cdfk_Ixq.js","assets/infoFor3D-CxOdoily.js","assets/uploadAssetErrors-DhqndyUS.js","assets/progressUtils-D_mpish3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{aC as D,E as F,F as I,aD as L,aE as P,aj as J,aF as x,aB as p,A as v,aG as Q,aH as j,aI as V,aJ as G,b as _,aK as H,aL as B,aM as z,aN as K,az as k,_ as W,aO as X,aP as Y,aQ as Z,aR as ee,aS as te,aT as ae,aU as U,aV as se,g as re,aW as ie,J as ne,aX as oe}from"./index-D2dWKXoe.js";import{v as ue}from"./External-Cdfk_Ixq.js";import{R as T,p as C,g as le,m as ce,h as de,b as pe,I as he}from"./applyEditsUtils-C11kyp0y.js";import{x as ye}from"./QueryTask-b04h5kOV.js";import{F as me}from"./infoFor3D-CxOdoily.js";import{s as fe}from"./executeQueryJSON-CFHQvffJ.js";import"./editingSupport-pr8untXV.js";import"./executeForIds-DWwoRykJ.js";import"./query-BHx-VbRk.js";import"./pbfQueryUtils-CqUhfAuD.js";import"./pbf-sj8ixt_4.js";import"./executeQueryPBF-B5gghsgA.js";const ge=new D({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),we=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),qe=new D({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let E=class extends L{constructor(){super(...arguments),this.type="feature-layer",this.refresh=P(async()=>{var a,s;await this.load();const t=(a=this.sourceJSON.editingInfo)==null?void 0:a.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==((s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate);return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(t){const e=this.layer.sourceJSON,a=this._fetchService(e,{...t}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t)).then(()=>this._ensureLatestMetadata(t));return this.addResolvingPromise(a),Promise.resolve(this)}get queryTask(){var d;const{capabilities:t,parsedUrl:e,dynamicDataSource:a,infoFor3D:s,gdbVersion:r,spatialReference:n,fieldsIndex:i}=this.layer,o=J("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF)&&s==null,u=((d=t==null?void 0:t.operations)==null?void 0:d.supportsQueryAttachments)??!1;return new ye({url:e.path,pbfSupported:o,fieldsIndex:i,infoFor3D:s,dynamicDataSource:a,gdbVersion:r,sourceSpatialReference:n,queryAttachmentsSupported:u})}async addAttachment(t,e){await this.load();const{layer:a}=this;await x(a,"editing");const s=t.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/addAttachment",n=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(e,n.query);try{const o=await p(r,{body:i});return T(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(s,o)}}async updateAttachment(t,e,a){await this.load();const{layer:s}=this;await x(s,"editing");const r=t.attributes[s.objectIdField],n=s.parsedUrl.path+"/"+r+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:e}}),o=this._getFormDataForAttachment(a,i.query);try{const u=await p(n,{body:o});return T(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(r,u)}}async applyEdits(t,e){var y,S,A,N,$,M;await this.load();const{layer:a}=this;await x(a,"editing");const s=a.infoFor3D,r=s!=null,n=r||((e==null?void 0:e.globalIdUsed)??!1),i=r?await this._uploadMeshesAndGetAssetMapEditsJSON(t):null,o=((y=t.addFeatures)==null?void 0:y.map(m=>C(this.layer,m,s)))??[],u=(await Promise.all(o)).filter(v),d=((S=t.updateFeatures)==null?void 0:S.map(m=>C(this.layer,m,s)))??[],c=(await Promise.all(d)).filter(v),g=le(this.layer,t.deleteFeatures,n);Q(u,c,a.spatialReference);const f=await ce(this.layer,t),O=a.capabilities.editing.supportsAsyncApplyEdits&&r,w=(e==null?void 0:e.gdbVersion)||a.gdbVersion,l={gdbVersion:w,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:n,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,async:O};await j(this.layer.url,w,!0);const b=V(this.layer.url,w||null);if(await G(a.url,w,a.historicMoment))throw new _("feature-layer-source:historic-version","Editing a historic version is not allowed");e!=null&&e.returnServiceEditsOption?(l.edits=JSON.stringify([{id:a.layerId,adds:u,updates:c,deletes:g,attachments:f,assetMaps:i}]),l.returnServiceEditsOption=ge.toJSON(e==null?void 0:e.returnServiceEditsOption),l.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(l.adds=u.length?JSON.stringify(u):null,l.updates=c.length?JSON.stringify(c):null,l.deletes=g.length?n?JSON.stringify(g):g.join(","):null,l.attachments=f&&JSON.stringify(f),l.assetMaps=i!=null?JSON.stringify(i):void 0);const h=this._getLayerRequestOptions({method:"post",query:l});b&&(h.authMode="immediate",h.query.returnEditMoment=!0,h.query.sessionId=H);const q=e!=null&&e.returnServiceEditsOption?a.url:a.parsedUrl.path;let R;try{R=O?await this._asyncApplyEdits(q+"/applyEdits",h):await p(q+"/applyEdits",h)}catch(m){if(!de(m))throw m;h.authMode="immediate",R=O?await this._asyncApplyEdits(q+"/applyEdits",h):await p(q+"/applyEdits",h)}if(!((A=a.capabilities.operations)!=null&&A.supportsEditing)&&(($=(N=a.effectiveCapabilities)==null?void 0:N.operations)!=null&&$.supportsEditing)){const m=(M=oe)==null?void 0:M.findCredential(a.url);await(m==null?void 0:m.refreshToken())}return this._createEditsResult(R)}async deleteAttachments(t,e){await this.load();const{layer:a}=this;await x(a,"editing");const s=t.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await p(r,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(T)}catch(n){throw this._createAttachmentErrorResult(s,n)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const a=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:s,url:r}=this.layer,{data:n}=await p(`${r}/${s}`,a),{id:i,extent:o,fullExtent:u,timeExtent:d}=n,c=o||u;return{id:i,fullExtent:c&&B.fromJSON(c),timeExtent:d&&z.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(t,e={}){await this.load();const a=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,a)}async queryFeatures(t,e){var s;await this.load();const a=await this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)});return(s=t.outStatistics)!=null&&s.length&&a.features.length&&a.features.forEach(r=>{var i;const n=r.attributes;(i=t.outStatistics)==null||i.forEach(({outStatisticFieldName:o})=>{if(o){const u=o.toLowerCase();u&&u in n&&o!==u&&(n[o]=n[u],delete n[u])}})}),a}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!K(this.layer.url))return"unavailable";const t=k(this.layer.url,"status"),e=await p(t,{query:{f:"json"}});return qe.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:a}=await W(()=>import("./uploadAssets-DNll3jXx.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return a(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}async _asyncApplyEdits(t,e){const a=(await p(t,e)).data.statusUrl;for(;;){const s=(await p(a,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return p(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new _("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new _("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await X(Se)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const s={};J("featurelayer-advanced-symbols")&&(s.returnAdvancedSymbols=!0),e!=null&&e.cacheBust&&(s._ts=Date.now());const{data:r}=await p(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:s,signal:e==null?void 0:e.signal}));t=r}this.sourceJSON=await this._patchServiceJSON(t,e==null?void 0:e.signal);const a=t.type;if(!we.has(a))throw new _("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}async _patchServiceJSON(t,e){var a;if(t.type!=="Table"&&t.geometryType&&!((a=t==null?void 0:t.drawingInfo)!=null&&a.renderer)&&!t.defaultSymbol){const s=Y(t.geometryType).renderer;Z("drawingInfo.renderer",s,t)}if(t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t.extent==null)try{const{data:s}=await p(this.layer.url,this._getLayerRequestOptions({signal:e}));s.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(s){ee(s)}return t}async _ensureLatestMetadata(t){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...t,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!(e!=null&&e.length))return null;const a=await this._filterRedundantAssetMaps(e);if(!(e!=null&&e.length))return null;const s=new Array,r=new Map;for(const n of a){const{geometry:i}=n,{vertexSpace:o}=i;if(te(o))s.push(i);else{const u=ae(i);r.set(u,i),n.geometry=u,s.push(u)}}await this.uploadAssets(s);for(const[n,i]of r)i.addExternalSources(n.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(a),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,a=this.layer.globalIdField,s=this.layer.parsedUrl;for(const r of t){const n=r.geometry,{metadata:i}=n,o=i.getExternalSourcesOnService(s),u=r.getAttribute(a);if(o.length===0){U.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:d}=o.find(ue)??o[0];for(const c of d)c.parts.length===1?e.push({globalId:se(),parentGlobalId:u,assetName:c.assetName,assetHash:c.parts[0].partHash,flags:[]}):U.getLogger(this).error(`Skipping asset ${c.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){const e=t.data,{layerId:a}=this.layer,s=[];let r=null;if(Array.isArray(e))for(const i of e)s.push({id:i.id,editedFeatures:i.editedFeatures}),i.id===a&&(r={addResults:i.addResults??[],updateResults:i.updateResults??[],deleteResults:i.deleteResults??[],attachments:i.attachments,editMoment:i.editMoment});else r=e;const n=pe(r);if(s.length>0){n.editedFeatureResults=[];for(const i of s){const{editedFeatures:o}=i,u=o!=null&&o.spatialReference?new re(o.spatialReference):null;n.editedFeatureResults.push({layerId:i.id,editedFeatures:he(o,u)})}}return n}_createAttachmentErrorResult(t,e){var r;const a=((r=e.details.messages)==null?void 0:r[0])||e.message,s=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new _("feature-layer-source:attachment-failure",a,{code:s})}}_getFormDataForAttachment(t,e){const a=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(a)for(const s in e){const r=e[s];r!=null&&(a.set?a.set(s,r):a.append(s,r))}return a}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:a,dynamicDataSource:s}=this.layer;return{...t,query:{gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _filterRedundantAssetMaps(t){const{layer:e}=this,{globalIdField:a,infoFor3D:s,parsedUrl:r}=e;if(s==null||a==null)return t;const n=me(s);if(n==null)return t;const i=k(r.path,`../${n.id}`),o=new Array,u=new Array;for(const l of t)l.geometry.metadata.getExternalSourcesOnService(r).length>0?u.push(l):o.push(l);const d=u.map(l=>l.getAttribute(a)).filter(v);if(d.length===0)return t;const{assetMapFieldRoles:{parentGlobalId:c,assetHash:g}}=s,f=new ie;f.where=`${c} IN (${d.map(l=>`'${l}'`)})`,f.outFields=[g,c],f.returnGeometry=!1;const O=await fe(i,f),{features:w}=O;return w.length===0?t:[...o,...u.filter(l=>{const b=l.getAttribute(a);if(!b)return!0;const{metadata:h}=l.geometry,q=w.filter(y=>y.getAttribute(c)===b);if(q.length===0)return!0;const R=q.map(y=>y.getAttribute(g));return h.getExternalSourcesOnService(r).flatMap(({source:y})=>y.flatMap(S=>S.parts.map(A=>A.partHash))).some(y=>R.every(S=>y!==S))})]}};F([I()],E.prototype,"type",void 0),F([I({constructOnly:!0})],E.prototype,"layer",void 0),F([I({readOnly:!0})],E.prototype,"queryTask",null),E=F([ne("esri.layers.graphics.sources.FeatureLayerSource")],E);const Se=1e3,$e=E;export{$e as default};