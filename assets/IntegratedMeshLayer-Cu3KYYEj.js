import{d5 as w,aO as _,am as T,bE as I,g as o,y as r,i as f,g_ as O,g$ as $,h0 as L,jn as x,h1 as b,jM as j,jL as M,eG as N,as as A,ng as P,bR as D,D as d,k1 as m,k2 as V,aK as c,k3 as E,h6 as J,k4 as K,bh as U}from"./index-nBWeBKPv.js";import{j as k}from"./persistable-BpBIdujX.js";import{L as R,P as u}from"./SceneService-DaTwg6yt.js";import{s as z,l as C,u as F,m as G}from"./I3SLayerDefinitions-B3NCVUA2.js";import{f as l}from"./SceneModification-B83DrytO.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-M0Ef-_ik.js";import"./originUtils-D69mHv66.js";import"./I3SIndexInfo-zhZGoVBW.js";import"./jsonContext-Dn5hidsh.js";import"./resourceUtils-CwZaF-Uu.js";import"./resourceUtils-g9k93dTC.js";import"./saveAPIKeyUtils-93BT8veH.js";import"./saveUtils-aoqZ3m__.js";var a;let n=a=class extends w(_.ofType(l)){constructor(e){super(e),this.url=null}clone(){return new a({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const s=new a;for(const p of e)s.add(l.fromJSON(p,t));return s}static async fromUrl(e,t,s){const p={url:T(e),origin:"service"},v=await I(e,{responseType:"json",signal:s==null?void 0:s.signal}),S=t.toJSON(),y=[];for(const h of v.data)y.push(l.fromJSON({...h,geometry:{...h.geometry,spatialReference:S}},p));return new a({url:e,items:y})}};o([r({type:String})],n.prototype,"url",void 0),n=a=o([f("esri.layers.support.SceneModifications")],n);const g=n;let i=class extends R(O($(L(x(b(j(M(U)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles(N(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,A))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,s){this._modificationsSource={url:P(e,s),context:s}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(s){D(s)}if(await this._fetchService(t),this._modificationsSource!=null){const s=await g.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",s,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(u.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(u.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";m(c.getLogger(this),V(t,"absolute-height",e)),m(c.getLogger(this),E(t,e))}};o([r({type:String,readOnly:!0})],i.prototype,"geometryType",void 0),o([r({type:["show","hide"]})],i.prototype,"listMode",void 0),o([r({type:["IntegratedMeshLayer"]})],i.prototype,"operationalLayerType",void 0),o([r({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),o([r({type:z,readOnly:!0})],i.prototype,"nodePages",void 0),o([r({type:[C],readOnly:!0})],i.prototype,"materialDefinitions",void 0),o([r({type:[F],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),o([r({type:[G],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),o([r({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),o([r({type:g}),k({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],i.prototype,"modifications",void 0),o([J(["web-scene","portal-item"],"modifications")],i.prototype,"readModifications",null),o([r(K)],i.prototype,"elevationInfo",null),o([r({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),i=o([f("esri.layers.IntegratedMeshLayer")],i);const ae=i;export{ae as default};
