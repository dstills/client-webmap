import{hu as L,jn as h,jl as m,h1 as f,aO as w,q1 as _,f6 as b,bl as $,aK as T,aq as F,bh as c,bw as S,g as i,y as s,q2 as j,i as g,nk as x,lP as P,nn as R,no as q,np as O,jp as V,lR as C,jF as E,nq as Q,nL as B,nl as D,jK as G,jm as N,g_ as U,g$ as J,h0 as A,jM as M,jL as k,d6 as K,bR as H,D as v,bD as z,am as W,bN as X,bk as d,jQ as Y,bP as Z,bE as ee,lS as te}from"./index-nBWeBKPv.js";import{a as re}from"./lazyLayerLoader-Cm51XF4k.js";import{T as ie}from"./utils-DaKmNdQ2.js";import oe from"./FeatureLayerSource-tnz9i2Bh.js";import"./ClassBreaksDefinition-wh1e69hS.js";import"./External-BXxqNysM.js";import"./applyEditsUtils-C65BPP0t.js";import"./editingSupport-D5CECPtY.js";import"./QueryTask-B9fRlzjN.js";import"./executeForIds-BY_LMuyR.js";import"./query-DRwR4uHa.js";import"./pbfQueryUtils-Cp4O6AeF.js";import"./pbf-9dqbeZu4.js";import"./executeQueryJSON-D0F5yCyp.js";import"./executeQueryPBF-BxIYsLLw.js";class se{constructor(t,r){this.objectId=t,this.itemSource=r,this.count=0,this.layer=null,this.sortValue=void 0}}const u=new L(20,e=>e.destroy());let p=class extends h(m(f(c))){constructor(e){super(e),this._oidToReference=new Map,this._layerToReference=new Map,this._portals=new Map,this.layers=new w,this.maximumVisibleSublayers=10,this.opacity=1,this.title="Layers In View",this.type="catalog-dynamic-group",this.visible=!0}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}get _orderBy(){var e;return((e=this.parent.orderBy)==null?void 0:e.find(t=>!t.valueExpression&&t.field))??new _({field:this.parent.objectIdField})}get _referenceComparator(){const e=this._orderBy,t=this.parent.fieldsIndex.get(e.field),r=ie(t==null?void 0:t.toJSON().type,e.order==="descending");return(o,a)=>r(o.sortValue,a.sortValue)||o.objectId-o.objectId}acquireLayer(e){const t=e.getObjectId(),r=b(this._oidToReference,t,()=>this._createLayerReference(e));return r.count++,$(()=>{r.count--,r.count||this._disposeLayerReference(r)})}_createLayerReference(e){const t=e.getObjectId(),r=e.getAttribute(this.parent.itemSourceField),o=new se(t,r);if(u.get(r))return this._addLayer(u.pop(r),o,e),o;let a;try{a=JSON.parse(r)}catch(y){return T.getLogger(this).error(y),o}return this._createLayer(a).then(y=>{this.destroyed||o.count===0?(u.get(r)||u.put(o.itemSource,y),o.layer=null):this._addLayer(y,o,e)}).catch(()=>{}),o}_addLayer(e,t,r){this._layerToReference.set(e,t),t.sortValue=r.getAttribute(this._orderBy.field),t.layer=e,e.parent=this,this.layers.add(e),this.layers.sort((o,a)=>this._referenceComparator(this._layerToReference.get(o),this._layerToReference.get(a)))}_disposeLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),u.put(e.itemSource,e.layer)),this._oidToReference.delete(e.objectId)}async _createLayer(e){if(!ne(e))return new(await re.UnsupportedLayer());const{itemId:t,portalUrl:r}=e,o=b(this._portals,r,()=>new F({url:r}));return c.fromPortalItem(new S({id:t,portal:o}))}};i([s()],p.prototype,"_orderBy",null),i([s()],p.prototype,"_referenceComparator",null),i([s({readOnly:!0})],p.prototype,"layers",void 0),i([s()],p.prototype,"maximumVisibleSublayers",void 0),i([s(j)],p.prototype,"opacity",void 0),i([s({type:String,json:{name:"title",write:!0}})],p.prototype,"title",void 0),i([s({json:{read:!1}})],p.prototype,"type",void 0),i([s({type:Boolean,json:{name:"visibility",write:!0}})],p.prototype,"visible",void 0),p=i([g("esri.layers.catalog.CatalogDynamicGroupLayer")],p);const ae=p;function ne(e){return typeof e=="object"&&e!=null&&"itemId"in e&&"portalUrl"in e}let l=class extends h(x(m(f(c)))){constructor(e){super(e),this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}get fields(){return this.parent.fields}get fieldsIndex(){return this.parent.fieldsIndex}get geometryType(){return this.parent.geometryType}get objectIdField(){return this.parent.objectIdField}get orderBy(){return this.parent.orderBy}createPopupTemplate(e){const t={fields:this.parent.fields,objectIdField:this.parent.objectIdField,title:this.title};return P(t,e)}createQuery(){return this.parent.createQuery()}queryFeatures(e,t){return this.parent.queryFeatures(e,t)}};i([s({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),i([s({type:[R],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:q,write:!0}})],l.prototype,"labelingInfo",void 0),i([s(O)],l.prototype,"labelsVisible",void 0),i([s(V)],l.prototype,"legendEnabled",void 0),i([s(j)],l.prototype,"opacity",void 0),i([s(C)],l.prototype,"popupEnabled",void 0),i([s({type:E,json:{name:"popupInfo",write:!0}})],l.prototype,"popupTemplate",void 0),i([s({types:Q,json:{name:"layerDefinition.drawingInfo.renderer"}})],l.prototype,"renderer",void 0),i([s({json:{read:!1}})],l.prototype,"type",void 0),i([s({type:Boolean,json:{name:"visibility",write:!0}})],l.prototype,"visible",void 0),l=i([g("esri.layers.catalog.CatalogFootprintLayer")],l);const le=l,pe="esri.layers.CatalogLayer",I=te();let n=class extends B(m(D(G(h(N(U(J(A(f(M(k(K(c))))))))))))){constructor(e){super(e),this.dynamicGroupLayer=new ae({parent:this}),this.fields=null,this.fieldsIndex=null,this.footprintLayer=new le({parent:this}),this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new w([this.dynamicGroupLayer,this.footprintLayer]),this.source=new oe({layer:this}),this.type="catalog"}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(H).then(async()=>{var o;if(!this.url)throw new v("catalog-layer:missing-url","Catalog layer must be created with a url");if(this.url&&this.layerId==null){const a=await this._fetchFirstValidLayerId(t);if(a==null)throw new v("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:this.url});this.layerId=a}await this.source.load(),this.source.sourceJSON&&(this.sourceJSON=this.source.sourceJSON,this.read(this.source.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(o=this.portalItem)==null?void 0:o.portal,url:this.parsedUrl}))}).then(()=>z(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get parsedUrl(){const e=W(this.url);return e!=null&&this.layerId!=null&&(e.path=X(e.path,this.layerId.toString())),e}createQuery(){var a;const e=new d,t=(a=this.capabilities)==null?void 0:a.query;e.returnGeometry=!0,t&&(e.compactGeometryEnabled=t.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=t.supportsDefaultSpatialReference),e.outFields=["*"];const{timeOffset:r,timeExtent:o}=this;return e.timeExtent=r!=null&&o!=null?o.offset(-r.value,r.unit):o||null,e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r;return(r=this.fieldsIndex.get(e))==null?void 0:r.domain}async queryFeatures(e,t){const r=await this.load(),o=await r.source.queryFeatures(d.from(e)??r.createQuery(),t);if(o!=null&&o.features)for(const a of o.features)a.layer=a.sourceLayer=r.footprintLayer;return o}async queryObjectIds(e,t){return(await this.load()).source.queryObjectIds(d.from(e)??this.createQuery(),t)}async queryFeatureCount(e,t){return(await this.load()).source.queryFeatureCount(d.from(e)??this.createQuery(),t)}async queryExtent(e,t){return(await this.load()).source.queryExtent(d.from(e)??this.createQuery(),t)}serviceSupportsSpatialReference(e){return this.loaded&&Y(this,e)}read(e,t){super.read(e,t);let r=e.footprintLayer;r||(t==null?void 0:t.origin)!=="service"||(r={layerDefinition:{drawingInfo:Z(e.geometryType)}}),this.footprintLayer.read(r,t)}_fetchFirstValidLayerId(e){return ee(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t=>{var o;const r=t.data;if(r)return Array.isArray(r.layers)?(o=r.layers.find(a=>a.type==="Catalog Layer"))==null?void 0:o.id:void 0})}};i([s({readOnly:!0})],n.prototype,"createQueryVersion",null),i([s({...I.fields,json:{origins:{service:{name:"fields"}}}})],n.prototype,"fields",void 0),i([s(I.fieldsIndex)],n.prototype,"fieldsIndex",void 0),i([s({json:{read:!1,write:!1}})],n.prototype,"footprintLayer",void 0),i([s()],n.prototype,"itemSourceField",void 0),i([s()],n.prototype,"itemTypeField",void 0),i([s()],n.prototype,"layers",void 0),i([s({value:"CatalogLayer",type:["CatalogLayer"]})],n.prototype,"operationalLayerType",void 0),i([s()],n.prototype,"outFields",void 0),i([s({readOnly:!0})],n.prototype,"parsedUrl",null),i([s()],n.prototype,"source",void 0),i([s({json:{read:!1}})],n.prototype,"type",void 0),n=i([g(pe)],n);const $e=n;export{$e as default};