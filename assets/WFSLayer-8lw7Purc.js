import{g as t,y as i,i as I,bA as U,ne as E,bB as J,c0 as W,bK as C,D as Y,iL as f,jk as D,kh as X,bC as H,aK as L,i6 as Q,bP as V,nl as G,jM as K,nj as M,nk as z,jl as A,jK as B,jm as Z,jn as ee,g$ as te,h0 as re,h1 as ie,bU as T,nm as R,lV as se,iK as P,bQ as oe,am as ae,lP as ne,bk as c,jR as le,k4 as pe,eN as de,np as ue,nn as ye,no as ce,jp as me,jS as h,n_ as he,lR as fe,jF as ge,nq as we,lQ as ve,nr as Fe,h8 as be,lS as xe,bh as Oe}from"./index-nBWeBKPv.js";import{v as Se,Y as Re,z as je,W as Ie,S as Ce}from"./wfsUtils-DF5Hjg-B.js";import"./geojson-JsGlW1c1.js";import"./date-M6n_RqpC.js";import"./xmlUtils-CtUoQO7q.js";let d=class extends U{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=E(!1,!1),this.type="wfs",this.refresh=J(async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:r}=await this._workerHandler.refresh(e);return r&&(this.sourceJSON.extent=r),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,r={}){const o=await this.queryFeaturesJSON(e,r);return W.fromJSON(o)}async queryFeaturesJSON(e,r={}){return await this.load(r),this._workerHandler.queryFeatures(e?e.toJSON():void 0,r)}async queryFeatureCount(e,r={}){return await this.load(r),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,r)}async queryObjectIds(e,r={}){return await this.load(r),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,r)}async queryExtent(e,r={}){await this.load(r);const o=await this._workerHandler.queryExtent(e?e.toJSON():void 0,r);return{count:o.count,extent:C.fromJSON(o.extent)}}async querySnapping(e,r={}){return await this.load(r),this._workerHandler.querySnapping(e,r)}async _createLoadOptions(e){var O,S;const{url:r,customParameters:o,name:n,namespaceUri:l,fields:a,geometryType:u,maxRecordCount:y,maxPageCount:g,maxTotalRecordCount:w,swapXY:v}=this.layer,m=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!r)throw new Y("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await Se(r,{customParameters:o,...e}));const $=["fields","geometryType","name","namespaceUri","swapXY"].some(F=>this.layer[F]==null),p=$?await Re(this.wfsCapabilities,n,l,{spatialReference:m,customParameters:o,signal:e==null?void 0:e.signal}):{...je(a??[]),geometryType:u,name:n,namespaceUri:l,spatialReference:m,swapXY:v},q=Ie(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri),_=f.toJSON(p.geometryType),{operations:x}=this.wfsCapabilities,k=x.GetFeature.url,N=x.GetFeature.outputFormat;return{customParameters:o,featureType:q,fields:((O=p.fields)==null?void 0:O.map(F=>F.toJSON()))??[],geometryField:p.geometryField,geometryType:_,getFeatureUrl:k,getFeatureOutputFormat:N,maxRecordCount:y,maxPageCount:g,maxTotalRecordCount:w,objectIdField:p.objectIdField,spatialReference:(S=p.spatialReference)==null?void 0:S.toJSON(),swapXY:!!p.swapXY}}async _startWorker(e){const[r,o]=await D([this._createLoadOptions(e),X("WFSSourceWorker",{...e,strategy:H("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=r.error||o.error||null,l=o.value||null;if(n)throw l&&l.close(),n;const a=r.value;this._connection=o.value,this._workerHandler=this._connection.createInvokeProxy();const u=await this._workerHandler.load(a,e);for(const y of u.warnings)L.getLogger(this.layer).warn("#load()",`${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:Q},extent:u.extent,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:V(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:a.maxRecordCount,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([i()],d.prototype,"capabilities",void 0),t([i({constructOnly:!0})],d.prototype,"layer",void 0),t([i()],d.prototype,"sourceJSON",void 0),t([i()],d.prototype,"type",void 0),t([i()],d.prototype,"wfsCapabilities",void 0),d=t([I("esri.layers.graphics.sources.WFSSource")],d);var b;const j=xe();let s=b=class extends G(K(M(z(A(B(Z(ee(te(re(ie(Oe))))))))))){static fromWFSLayerInfo(e){const{customParameters:r,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:y,spatialReference:g,swapXY:w,url:v,wfsCapabilities:m}=e;return new b({customParameters:r,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:y,spatialReference:g,swapXY:w,url:v,wfsCapabilities:m})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=T.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),R(this.renderer,this.fieldsIndex),se(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,o){const n=e.filter(l=>l.name!==Ce);this.geometryField&&n.unshift(new P({name:this.geometryField,alias:this.geometryField,type:"geometry"})),oe(o,n.map(l=>l.toJSON()),r)}get parsedUrl(){return ae(this.url)}set renderer(e){R(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return ne(this,e)}createQuery(){const e=new c;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:o}=this;return e.timeExtent=r!=null&&o!=null?o.offset(-r.value,r.unit):o||null,e}getFieldDomain(e,r){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){var r;return(r=this.fieldsIndex)==null?void 0:r.get(e)}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),r)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,r){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),r))}queryFeatureCount(e,r){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),r))}queryExtent(e,r){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),r))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh();return r!=null&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([i({readOnly:!0})],s.prototype,"capabilities",null),t([i({type:String})],s.prototype,"copyright",void 0),t([i({readOnly:!0})],s.prototype,"createQueryVersion",null),t([i({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],s.prototype,"customParameters",void 0),t([i(le("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),t([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),t([i({type:String})],s.prototype,"displayField",void 0),t([i(pe)],s.prototype,"elevationInfo",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"featureUrl",void 0),t([i({type:[P],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),t([de("fields")],s.prototype,"writeFields",null),t([i(j.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([i({type:C,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),t([i()],s.prototype,"geometryField",void 0),t([i({type:String,json:{read:{source:"layerDefinition.geometryType",reader:f.read},write:{target:"layerDefinition.geometryType",writer:f.write,ignoreOrigin:!0},origins:{service:{read:f.read}}}})],s.prototype,"geometryType",void 0),t([i({type:String})],s.prototype,"id",void 0),t([i(ue)],s.prototype,"labelsVisible",void 0),t([i({type:[ye],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ce},write:!0}})],s.prototype,"labelingInfo",void 0),t([i(me)],s.prototype,"legendEnabled",void 0),t([i({type:["show","hide"]})],s.prototype,"listMode",void 0),t([i({type:String})],s.prototype,"objectIdField",void 0),t([i({type:["WFS"]})],s.prototype,"operationalLayerType",void 0),t([i({type:h,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"maxRecordCount",void 0),t([i({type:h})],s.prototype,"maxPageCount",void 0),t([i({type:h})],s.prototype,"maxTotalRecordCount",void 0),t([i({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],s.prototype,"mode",void 0),t([i({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"name",void 0),t([i({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"namespaceUri",void 0),t([i(he)],s.prototype,"opacity",void 0),t([i(j.outFields)],s.prototype,"outFields",void 0),t([i({readOnly:!0})],s.prototype,"parsedUrl",null),t([i(fe)],s.prototype,"popupEnabled",void 0),t([i({type:ge,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),t([i({types:we,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ve,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],s.prototype,"renderer",null),t([i(Fe)],s.prototype,"screenSizePerspectiveEnabled",void 0),t([i({readOnly:!0})],s.prototype,"source",void 0),t([i({type:T,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],s.prototype,"spatialReference",void 0),t([i({readOnly:!0,type:[h],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"spatialReferences",void 0),t([i({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"swapXY",void 0),t([i({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],s.prototype,"title",void 0),t([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([i(be)],s.prototype,"url",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"version",void 0),t([i()],s.prototype,"wfsCapabilities",null),s=b=t([I("esri.layers.WFSLayer")],s);const ke=s;export{ke as default};
