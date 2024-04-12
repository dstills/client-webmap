import{cj as E,K as $,O as B,ck as c,aE as C,br as _,P as L,bc as f,cl as A,A as V,E as a,F as l,b0 as D,J as x}from"./index-D2dWKXoe.js";import{v as H,T as G}from"./featureUtils-Bm7bdj-R.js";import{G as k}from"./featureFormUtils-DtaQEEWU.js";const b=100;let o=class extends E($(B)){constructor(t){super(t),this._loaded=!1,this._queryAbortController=null,this._queryPageAbortController=null,this._queryFeatureCountAbortController=null,this.featuresPerPage=10,this.description=null,this.graphic=null,this.layer=null,this.map=null,this.orderByFields=null,this.featureCount=0,this.relationshipId=null,this.showAllEnabled=!1,this.title=null,this._cancelQuery=()=>{const{_queryAbortController:e}=this;e&&e.abort(),this._queryAbortController=null},this._cancelQueryFeatureCount=()=>{const{_queryFeatureCountAbortController:e}=this;e&&e.abort(),this._queryFeatureCountAbortController=null},this._cancelQueryPage=()=>{const{_queryPageAbortController:e}=this;e&&e.abort(),this._queryPageAbortController=null},this._queryController=async()=>{this._cancelQuery();const e=new AbortController;this._queryAbortController=e,await c(this._query()),this._queryAbortController===e&&(this._queryAbortController=null)},this._queryFeatureCountController=async()=>{this._loaded=!1,this._cancelQueryFeatureCount();const e=new AbortController;this._queryFeatureCountAbortController=e,await c(this._queryFeatureCount()),this._queryFeatureCountAbortController===e&&(this._queryFeatureCountAbortController=null),this._loaded=!0},this._queryPageController=async()=>{const e=new AbortController;this._queryPageAbortController=e,await c(this._queryPage()),this._queryPageAbortController===e&&(this._queryPageAbortController=null)},this._queryDebounced=C(this._queryController,b),this._queryFeatureCountDebounced=C(this._queryFeatureCountController,b),this._queryPageDebounced=C(this._queryPageController,b),this._query=async()=>{const{_queryAbortController:e,relatedFeatures:r}=this;this.featureCount&&(this._destroyRelatedFeatureViewModels(),this.featurePage=1,r.removeAll(),this.destroyed||r.addMany(this._sliceFeatures(await this._queryRelatedFeatures({signal:e==null?void 0:e.signal}))))},this.addHandles([_(()=>{var e;return[this.displayCount,this.graphic,this.layer,(e=this.layer)==null?void 0:e.loaded,this.map,this.orderByFields,this.relationshipId,this.featuresPerPage,this.showAllEnabled,this.canQuery,this.featureCount]},()=>this._queryDebounced(),L),_(()=>[this.featurePage,this.showAllEnabled],()=>this._queryPageDebounced()),_(()=>[this.layer,this.relationshipId,this.objectId,this.canQuery],()=>this._queryFeatureCountDebounced())])}destroy(){this._destroyRelatedFeatureViewModels(),this.relatedFeatures.removeAll(),this._cancelQuery(),this._cancelQueryFeatureCount(),this._cancelQueryPage()}set featurePage(t){const{featuresPerPage:e,featureCount:r}=this,s=1,i=Math.ceil(r/e)||1;this._set("featurePage",Math.min(Math.max(t,s),i))}get featurePage(){return this._get("featurePage")}get orderByFieldsFixedCasing(){const{orderByFields:t,relatedLayer:e}=this;return t&&(e!=null&&e.loaded)?t.map(r=>{const s=r.clone();return s.field=H(r.field,e),s}):t??[]}get supportsCacheHint(){var t,e,r;return!!((r=(e=(t=this.layer)==null?void 0:t.capabilities)==null?void 0:e.queryRelated)!=null&&r.supportsCacheHint)}get canLoad(){return!!this.map&&typeof this.relationshipId=="number"&&typeof this.objectId=="number"}get canQuery(){var e,r;const t=(r=(e=this.layer)==null?void 0:e.capabilities)==null?void 0:r.queryRelated;return!!(this.relatedLayer&&this.relationship&&typeof this.relationshipId=="number"&&typeof this.objectId=="number"&&(t!=null&&t.supportsCount)&&(t!=null&&t.supportsPagination))}get itemDescriptionFieldName(){var t;return((t=this.orderByFieldsFixedCasing[0])==null?void 0:t.field)||null}set displayCount(t){this._set("displayCount",Math.min(Math.max(t,0),10))}get displayCount(){return this._get("displayCount")}get objectId(){var t,e;return(this.objectIdField&&((e=(t=this.graphic)==null?void 0:t.attributes)==null?void 0:e[this.objectIdField]))??null}get objectIdField(){var t;return((t=this.layer)==null?void 0:t.objectIdField)||null}get relatedFeatures(){return this._get("relatedFeatures")||new f}get relatedLayer(){const{layer:t,map:e,relationship:r}=this;return t!=null&&t.loaded&&e&&r?G(e,t,r)??null:null}get relationship(){var r;const{relationshipId:t,layer:e}=this;return typeof t=="number"?((r=e==null?void 0:e.relationships)==null?void 0:r.find(({id:s})=>s===t))??null:null}get relatedFeatureViewModels(){return this._get("relatedFeatureViewModels")||new f}get state(){const{_queryAbortController:t,_queryFeatureCountAbortController:e,_queryPageAbortController:r,canQuery:s,_loaded:i,canLoad:d}=this;return e||d&&!i?"loading":t||r?"querying":s?"ready":"disabled"}getRelatedFeatureByObjectId(t){return this.relatedFeatures.find(e=>e.getObjectId()===t)}refresh(){this._queryFeatureCountDebounced()}_destroyRelatedFeatureViewModels(){var t;(t=this.relatedFeatureViewModels)==null||t.forEach(e=>!e.destroyed&&e.destroy()),this.relatedFeatureViewModels.removeAll()}async _queryFeatureCount(){const{layer:t,relatedLayer:e,relationshipId:r,objectId:s,_queryFeatureCountAbortController:i,canQuery:d,supportsCacheHint:h}=this;if(await(t==null?void 0:t.load()),await(e==null?void 0:e.load()),!d||!t||!e)return void this._set("featureCount",0);const p=e.createQuery(),y=new A({cacheHint:h,relationshipId:r,returnGeometry:!1,objectIds:[s],where:p.where??void 0}),n=await t.queryRelatedFeaturesCount(y,{signal:i==null?void 0:i.signal});this._set("featureCount",n[s]||0)}_sliceFeatures(t){const{showAllEnabled:e,displayCount:r}=this;return e?t:r?t.slice(0,r):[]}async _queryPage(){const{relatedFeatures:t,featurePage:e,showAllEnabled:r,_queryPageAbortController:s,featureCount:i}=this;!r||e<2||!i||t.addMany(await this._queryRelatedFeatures({signal:s==null?void 0:s.signal}))}async _queryRelatedFeatures(t){var q;const{orderByFieldsFixedCasing:e,showAllEnabled:r,featuresPerPage:s,displayCount:i,layer:d,relationshipId:h,featurePage:p,featureCount:y,relatedLayer:n,supportsCacheHint:P}=this,{canQuery:w,objectId:g}=this;if(!w||!d||!n)return[];const m=r?((p-1)*s+y)%y:0,I=r?s:i,v=n.objectIdField,j=[...e.map(u=>u.field),...k(n),v].filter(V),Q=e.map(u=>`${u.field} ${u.order}`),M=n.createQuery(),O=new A({orderByFields:Q,start:m,num:I,outFields:j,cacheHint:P,relationshipId:h,returnGeometry:!1,objectIds:[g],where:M.where??void 0}),R=await d.queryRelatedFeatures(O,{signal:t==null?void 0:t.signal}),F=((q=R[g])==null?void 0:q.features)||[];return F.forEach(u=>{u.sourceLayer=n,u.layer=n}),F}};a([l()],o.prototype,"_loaded",void 0),a([l()],o.prototype,"_queryAbortController",void 0),a([l()],o.prototype,"_queryPageAbortController",void 0),a([l()],o.prototype,"_queryFeatureCountAbortController",void 0),a([l({value:1})],o.prototype,"featurePage",null),a([l()],o.prototype,"featuresPerPage",void 0),a([l({readOnly:!0})],o.prototype,"orderByFieldsFixedCasing",null),a([l({readOnly:!0})],o.prototype,"supportsCacheHint",null),a([l({readOnly:!0})],o.prototype,"canLoad",null),a([l({readOnly:!0})],o.prototype,"canQuery",null),a([l()],o.prototype,"description",void 0),a([l({readOnly:!0})],o.prototype,"itemDescriptionFieldName",null),a([l({value:3})],o.prototype,"displayCount",null),a([l({type:D})],o.prototype,"graphic",void 0),a([l()],o.prototype,"layer",void 0),a([l()],o.prototype,"map",void 0),a([l({readOnly:!0})],o.prototype,"objectId",null),a([l({readOnly:!0})],o.prototype,"objectIdField",null),a([l()],o.prototype,"orderByFields",void 0),a([l({readOnly:!0})],o.prototype,"relatedFeatures",null),a([l({readOnly:!0})],o.prototype,"relatedLayer",null),a([l({readOnly:!0})],o.prototype,"relationship",null),a([l()],o.prototype,"featureCount",void 0),a([l({readOnly:!0})],o.prototype,"relatedFeatureViewModels",null),a([l()],o.prototype,"relationshipId",void 0),a([l()],o.prototype,"showAllEnabled",void 0),a([l()],o.prototype,"state",null),a([l()],o.prototype,"title",void 0),o=a([x("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")],o);const K=o;export{K as F};