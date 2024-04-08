function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BhDz4nJ7.js","assets/index-CIBc8SyM.css","assets/layersCreator-UI1_S5qI.js","assets/portalLayers-7Zau4Ogq.js","assets/associatedFeatureServiceUtils-Bt517Z0N.js","assets/lazyLayerLoader-BrBN1iIe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{D as y,g as s,y as o,i as g,eM as w,zn as G,bU as b,kd as le,zo as je,zp as Ue,zq as _e,uG as xe,aH as k,jS as Se,sF as Ne,zr as Ge,zs as ke,aO as V,gV as A,zt as Fe,u as Ae,kc as z,qi as qe,fI as Le,bh as Be,aK as R,zu as We,oo as Je,aw as ze,lv as De,cT as He,lx as Ke,ay as Qe,zv as Xe,aj as Ie,cV as Ye,fG as Ze,da as ce,cS as D,zw as et,fH as tt,q5 as it,bA as rt,eE as st,h1 as nt,zx as at,bB as ot,jy as E,eG as lt,ku as pt,jx as ct,zy as ht,bw as $e,aq as H,kP as dt,am as K,zz as ut,zA as yt,zB as he,hN as de,zC as mt,B as ue,C as ye,kN as me,bK as gt,b$ as wt,eN as v,h6 as Q,h7 as vt,ew as bt}from"./index-BhDz4nJ7.js";import{i as ge}from"./originUtils-D69mHv66.js";import{o as we}from"./jsonContext-BDfQJJ3g.js";import{i as ft,a as _t,l as St}from"./Viewing-5vFPeUeu.js";import{e as At}from"./tagSymbols-BPcGfZon.js";import{n as Lt,p as It}from"./resourceUtils-BsUeDECd.js";import{i as ve}from"./saveAPIKeyUtils-CoHQbrv0.js";import{t as $t}from"./saveUtils-CjoLFEtF.js";import{u as I}from"./SlideThumbnail-DNRJuONt.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceUtils-DEF3g4Gm.js";const Tt="webscene:failed-to-copy-embedded-resources",Rt="webscene:schema-validation";function Ct(){return new y(Tt,"Copying of embedded resources is currently not supported")}function Vt(e){return new y(Rt,"Failed to save webscene due to schema validation errors. See 'details.errors' for more detailed information",{errors:e})}var Y;let P=Y=class extends w{constructor(e){super(e),this.viewing=null}clone(){return new Y({viewing:this.viewing?this.viewing.clone():null})}};s([o({type:ft,json:{write:!0}})],P.prototype,"viewing",void 0),P=Y=s([g("esri.webscene.ApplicationProperties")],P);const Et=P;var Z;let f=Z=class extends w{constructor(e){super(e),this.environment=new G,this.spatialReference=null,this.viewpoint=null}set viewingMode(e){this._set("viewingMode",e)}clone(){return new Z({environment:this.environment.clone(),spatialReference:this.spatialReference?this.spatialReference.clone():null,viewingMode:this.viewingMode,viewpoint:this.viewpoint?this.viewpoint.clone():null})}};s([o({type:G,json:{write:{isRequired:!0}}})],f.prototype,"environment",void 0),s([o({type:b})],f.prototype,"spatialReference",void 0),s([o({type:["local","global"]})],f.prototype,"viewingMode",null),s([o({type:le,json:{write:{isRequired:!0}}})],f.prototype,"viewpoint",void 0),f=Z=s([g("esri.webscene.InitialViewProperties")],f);const F=f;var ee;let M=ee=class extends w{constructor(){super(...arguments),this.text=""}clone(){return new ee({text:this.text})}};s([o({type:String,json:{write:!0}})],M.prototype,"text",void 0),M=ee=s([g("esri.webscene.support.Description")],M);const O=M;var te;let $=te=class extends w{constructor(){super(...arguments),this.lighting=new _e,this.weather=new xe}clone(){return new te({lighting:k(this.lighting),weather:k(this.weather)})}};s([o({types:je,json:{write:!0}})],$.prototype,"lighting",void 0),s([o({types:Ue,json:{write:!0}})],$.prototype,"weather",void 0),$=te=s([g("esri.webscene.Environment")],$);var j;let U=j=class extends w{constructor(){super(...arguments),this.opacity=null}clone(){return new j({opacity:this.opacity})}cloneAndApplyTo(e){return this.opacity==null||((e=(e==null?void 0:e.clone())??new ke).opacity=this.opacity),e}static fromGround(e){return new j({opacity:e.opacity})}};s([o({type:Number,json:{type:Se,read:{reader:Ne,source:"transparency"},write:{writer:(e,t)=>{t.transparency=Ge(e)},target:"transparency"}}})],U.prototype,"opacity",void 0),U=j=s([g("esri.webscene.support.SlideGround")],U);const Te=U;var ie;let T=ie=class extends w{constructor(e){super(e),this.id="",this.sublayerIds=null}clone(){return new ie({id:this.id,sublayerIds:k(this.sublayerIds)})}};s([o({type:String,json:{write:!0}})],T.prototype,"id",void 0),s([o({type:[Se],json:{read:{source:"subLayerIds"},write:{target:"subLayerIds"}}})],T.prototype,"sublayerIds",void 0),T=ie=s([g("esri.webscene.support.SlideVisibleLayer")],T);var re;let x=re=class extends w{constructor(){super(...arguments),this.text=""}clone(){return new re({text:this.text})}};s([o({type:String,json:{write:{isRequired:!0}}})],x.prototype,"text",void 0),x=re=s([g("esri.webscene.support.Title")],x);const C=x;let Pt=0;const se=V.ofType(T);let u=class extends w{constructor(e){super(e),this.id=Date.now().toString(16)+"-slide-"+Pt++,this.title=new C,this.description=new O,this.hidden=!1,this.thumbnail=new I,this.viewpoint=null,this.basemap=null,this.ground=null,this.environment=new $,this.visibleLayers=new se}destroy(){this.visibleLayers.removeAll(),this.basemap=null,this.thumbnail=Ae(this.thumbnail),this.description=null,this.title=null,this.thumbnail=null}castTitle(e){return typeof e=="string"?new C({text:e}):z(C,e)}castDescription(e){return typeof e=="string"?new O({text:e}):z(O,e)}castThumbnail(e){return typeof e=="string"?new I({url:e}):z(I,e)}castBasemap(e){return qe(e)}set visibleLayers(e){this._set("visibleLayers",Le(e,this._get("visibleLayers"),se))}castVisibleLayers(e){return e&&typeof e.map=="function"?e.map(t=>{if(typeof t=="string")return{id:t};if(t instanceof Be){const i=be(t);return{id:t.id,sublayerIds:i}}return t.id?{id:t.id,sublayerIds:"sublayerIds"in t?t.sublayerIds:void 0}:(R.getLogger(this).warn('Invalid visible layer, expected { id }, Layer or "id"'),t)}):null}clone(){var e,t;return new this.constructor({id:this.id,title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||null,basemap:((e=this.basemap)==null?void 0:e.clone())||null,ground:((t=this.ground)==null?void 0:t.clone())||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||null,hidden:this.hidden})}async _updateVisibleLayersFrom(e){const t=[];await Promise.allSettled(this._getLayers(e.map).map(i=>e.whenLayerView(i).then(r=>{if(r.visible){const n=be(i);t.push(new T({id:r.layer.id,sublayerIds:n}))}})).toArray()),this.visibleLayers.removeAll(),this.visibleLayers.addMany(t)}updateFrom(e,t){const i={format:"png",quality:80,width:120,height:75,disableDecorations:!0,...t==null?void 0:t.screenshot};return e.when(()=>(this.viewpoint=e.viewpoint.clone(),this.environment.lighting=e.environment.lighting.type==="virtual"?We.prototype.clone.apply(e.environment.lighting):_e.prototype.clone.apply(e.environment.lighting),this.environment.weather=e.environment.weather.clone(),this.basemap=e.map.basemap&&e.map.basemap.clone()||null,this.ground=e.map.ground?Te.fromGround(e.map.ground):null,this._updateVisibleLayersFrom(e))).then(()=>e.takeScreenshot(i)).then(r=>(this.thumbnail=new I({url:r.dataUrl}),this))}async applyTo(e,t){this._applyToController!=null&&this._applyToController.abort();let i=new AbortController;this._applyToController=i;const r=Je(t,()=>i==null?void 0:i.abort()),n=()=>{this._applyToController===i&&(this._applyToController=null),i=null,r==null||r.remove()};try{await ze(()=>e.ready,i.signal)}catch(m){throw n(),m}if(i.signal.aborted)throw n(),De();const a=e.resourceController.scheduler.registerTask(He.SLIDE);let c=!1;const l={animate:!0,...t,signal:this._applyToController.signal},d=async()=>{await Promise.all([a.schedule(async()=>c=await this._setViewpointOfInterest(e,l)),a.schedule(()=>this._applyBasemap(e,l),l.signal)]),await this._loadLayersWithSublayerVisibility(e),await Promise.all([a.schedule(()=>this._applyLayerVisibility(e),l.signal),a.schedule(()=>this._applyGround(e),l.signal),a.schedule(()=>this._applyViewpoint(e,l),l.signal)]),await a.schedule(()=>e.environment.weather=this.environment.weather.clone())},h=await Ke(e.addUpdatingPromise(d()));if(c&&(e.contentCamera=null),a.remove(),n(),h.ok===!1)throw h.error;return this}async _applyBasemap(e,t){if(this.basemap){try{await this.basemap.load(t)}catch(i){if(Qe(i))throw i}e.map.basemap=Xe(this.basemap,e.map.basemap)}}_applyGround(e){this.ground&&(e.map.ground=this.ground.cloneAndApplyTo(e.map.ground))}_getLayers(e){const t=new V;return this._collectLayers(e,t),this._collectLayers(e.ground,t),t}_collectLayers(e,t){e.layers.forEach(i=>{i.persistenceEnabled&&(t.add(i),"layers"in i&&this._collectLayers(i,t))})}async _loadLayersWithSublayerVisibility(e){this.visibleLayers&&await Promise.allSettled(this._getLayers(e.map).items.map(t=>{var r;return((r=this.visibleLayers.find(n=>n.id===t.id))==null?void 0:r.sublayerIds)?t.load():null}))}_applyLayerVisibility(e){this.visibleLayers&&this._getLayers(e.map).forEach(t=>{const i=this.visibleLayers.find(a=>a.id===t.id);t.visible=i!=null;const r=i==null?void 0:i.sublayerIds,n=Re(t);r&&n&&n.forEach(a=>a.visible=r.includes(a.id))})}async _setViewpointOfInterest(e,t){if(e.state.fixedContentCamera||!this.viewpoint||t!=null&&t.ignoreViewpoint||!(t!=null&&t.useDestinationCamera))return!1;const{toCameraAsync:i}=await Ie(()=>import("./index-BhDz4nJ7.js").then(n=>n.Hl),__vite__mapDeps([0,1])),r=await i(e,this.viewpoint);return e.contentCamera=r,r!=null}async _applyViewpoint(e,t){if(this._applyCachedCameraTrackingEnabled(e),this.viewpoint&&!t.ignoreViewpoint){this.viewpoint.camera!=null&&(this.viewpoint.camera.fov=e.camera.fov);const i=this.environment.lighting;if(t.animate&&i.type==="sun"&&i.date)return this._animateToLighting(e,t);t.animate&&(e.environment.applyLighting(i.clone()),await e.goTo(this.viewpoint,t)),e.viewpoint=this.viewpoint}e.environment.applyLighting(this.environment.lighting.clone())}async _animateToLighting(e,t){let i=null;return e.environment.lighting.type!=="virtual"&&this.environment.lighting.type!=="virtual"&&(e.viewingMode==="global"&&(i=this._animateLightingWithCamera(e,e.environment.lighting,this.environment.lighting)),e.environment.cachedCameraTrackingEnabled=e.environment.lighting.cameraTrackingEnabled,e.environment.lighting.cameraTrackingEnabled=!1),e.environment.lighting.directShadowsEnabled=this.environment.lighting.directShadowsEnabled,this.environment.lighting.type==="virtual"||e.environment.lighting.type==="virtual"?(e.environment.applyLighting(this.environment.lighting.clone()),e.environment.lighting.type!=="virtual"&&(e.environment.cachedCameraTrackingEnabled=e.environment.lighting.cameraTrackingEnabled,e.environment.lighting.cameraTrackingEnabled=!1)):this.environment.lighting.displayUTCOffset!=null&&(e.environment.lighting.displayUTCOffset=this.environment.lighting.displayUTCOffset),e.goTo(this.viewpoint,t).then(()=>{this._applyCachedCameraTrackingEnabled(e),e.environment.applyLighting(this.environment.lighting.clone())}).catch(r=>{throw e.animation==null&&this._applyCachedCameraTrackingEnabled(e),r}).finally(()=>{Ye(i)})}_applyCachedCameraTrackingEnabled(e){e.environment.cachedCameraTrackingEnabled!=null&&(e.environment.lighting.cameraTrackingEnabled=e.environment.cachedCameraTrackingEnabled,e.environment.cachedCameraTrackingEnabled=null)}_getTime(e){return[e.getTime(),3600*e.getUTCHours()+60*e.getUTCMinutes()+e.getUTCSeconds()]}_setTime(e,t,i){return e.setTime(t),e.setUTCHours(i/3600),e.setUTCMinutes(i%3600/60),e.setUTCSeconds(i%3600%60),e}_animateLightingWithCamera(e,t,i){const r=new Date(t.date.toString()),[n,a]=this._getTime(r),[c,l]=this._getTime(i.date),d=Mt(a,l),h=e.renderCoordsHelper,m=D();h.toRenderCoords(e.camera.position,m);const S=D(),B=D();this.viewpoint.camera!=null&&h.toRenderCoords(this.viewpoint.camera.position,S);const Ee=new Date;return Ze(()=>e.camera,Pe=>{h.toRenderCoords(Pe.position,B);const W=ce(m,B),pe=ce(S,B);let J=0;W+pe!==0&&(J=W/(W+pe));const Me=n+(c-n)*J,Oe=Ot(a,d*J);t.date=this._setTime(Ee,Me,Oe)})}static createFrom(e,t){return new this().updateFrom(e,t)}};function Re(e){if(e.type==="building-scene"||e.type==="map-image")return e.allSublayers.toArray()}function be(e){const t=Re(e);if(t)return t.filter(i=>i.visible).map(i=>i.id)}s([o({type:String,json:{write:{isRequired:!0}}})],u.prototype,"id",void 0),s([o({type:C,json:{default:()=>new C({text:""}),write:{isRequired:!0}}})],u.prototype,"title",void 0),s([A("title")],u.prototype,"castTitle",null),s([o({type:O,json:{write:{overridePolicy:e=>({enabled:!(!e||!e.text)})}}})],u.prototype,"description",void 0),s([A("description")],u.prototype,"castDescription",null),s([o({type:Boolean,nonNullable:!0,json:{write:!0,default:!1}})],u.prototype,"hidden",void 0),s([o({type:I,json:{default:()=>new I({url:""}),write:{isRequired:!0}}})],u.prototype,"thumbnail",void 0),s([A("thumbnail")],u.prototype,"castThumbnail",null),s([o({type:le,nonNullable:!0,json:{write:{isRequired:!0}}})],u.prototype,"viewpoint",void 0),s([o({type:Fe,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],u.prototype,"basemap",void 0),s([A("basemap")],u.prototype,"castBasemap",null),s([o({type:Te,json:{write:!0}})],u.prototype,"ground",void 0),s([o({type:se,json:{write:{isRequired:!0}}})],u.prototype,"visibleLayers",null),s([A("visibleLayers")],u.prototype,"castVisibleLayers",null),s([o({type:$,json:{write:!0}})],u.prototype,"environment",void 0),u=s([g("esri.webscene.Slide")],u);const ne=86400,fe=43200;function Mt(e,t){let i=t-e;return i>fe&&(i-=ne),i<-fe&&(i+=ne),i}function Ot(e,t){return et(e+t,ne)}const jt=u,ae=V.ofType(jt);let N=class extends w{constructor(e){super(e),this.slides=new ae}destroy(){this.slides.forEach(e=>e.destroy()),this.slides.removeAll()}set slides(e){e&&(e=e.filter(t=>!!t.viewpoint)),this._set("slides",Le(e,this._get("slides"),ae))}clone(){return new this.constructor({slides:this.slides.clone()})}};s([o({type:ae,nonNullable:!0,json:{write:!0}}),A(tt)],N.prototype,"slides",null),N=s([g("esri.webscene.Presentation")],N);const Ce=N;var oe;let L=oe=class extends w{constructor(e){super(e)}clone(){return new oe({name:this.name,path:this.path,title:this.title})}};s([o({type:String,json:{write:!0}})],L.prototype,"name",void 0),s([o({type:String,json:{write:!0}})],L.prototype,"path",void 0),s([o({type:String,json:{write:!0}})],L.prototype,"title",void 0),L=oe=s([g("esri.webscene.TransportationNetwork")],L);const Ut=L;class q extends it{constructor(t,i){super(t,i,"webscene")}get supportsGround(){return this.since(1,8)}get supportsVisibleElevationLayersInSlides(){return this.lessThan(1,8)}}let xt=null;function Nt(){return xt}var Ve;const _=new q(1,33),Gt=()=>{const t=[],i=_.major;for(let r=8;r<=_.minor;r++)t.push(`${i}.${r}`);return t},X="Web Scene";let p=class extends rt.LoadableMixin(st(nt(at))){constructor(e){super(e),this[Ve]=!0,this._layersIdGCTimeoutId=void 0,this._updateFromPromise=null,this.applicationProperties=null,this.clippingArea=null,this.clippingEnabled=!1,this.floorInfo=null,this.heightModelInfo=void 0,this.sourceVersion=null,this.transportationNetworks=null,this.presentation=new Ce,this.initialViewProperties=new F,this.portalItem=null,this.resourceInfo=null,this._debouncedSaveOperations=ot(async(t,i,r)=>{switch(t){case E.SAVE:return this._saveImpl(i);case E.SAVE_AS:return this._saveAsImpl(r,i)}}),this._resourceReferences={portalItem:null,paths:[]},this.authoringApp=null,this.authoringAppVersion=null,this._isAuthoringAppSetByUser=!1,this._isAuthoringAppVersionSetByUser=!1}initialize(){if(this.when().catch(e=>{R.getLogger(this).error("#load()","Failed to load web scene",e)}),this.resourceInfo){let e;try{e=this._validateJSON(this.resourceInfo)}catch(t){return void this.addResolvingPromise(Promise.reject(t))}this.read(e),this.addResolvingPromise(this._validateSpatialReference()),this.addResolvingPromise(this._validateHeightModelInfo())}this.addHandles(lt(()=>this.allLayers,"change",()=>this._scheduleLayersIdGC()))}destroy(){this._unscheduleLayersIdGC(),this.presentation&&this.presentation.destroy(),this.portalItem=Ae(this.portalItem)}writeClippingArea(e,t){t.clippingArea||(t.clippingArea={}),t.clippingArea.geometry=e.toJSON()}readClippingEnabled(e,t){return!!t.clippingArea&&!!t.clippingArea.clip}writeClippingEnabled(e,t){this.clippingArea&&(t.clippingArea||(t.clippingArea={}),t.clippingArea.clip=e)}writeLayers(e,t,i,r){t[i]=this._layersToJSON(e,"operational-layers",r)}readSourceVersion(e,t){const[i,r]=t.version.split(".");return new q(parseInt(i,10),parseInt(r,10))}writeSourceVersion(e,t,i){t[i]=`${_.major}.${_.minor}`}writeTables(e,t,i,r){const n=this._layersToJSON(e,"tables",r);n.length&&(t[i]=n)}get thumbnailUrl(){var e;return((e=this.portalItem)==null?void 0:e.thumbnailUrl)??null}set thumbnailUrl(e){e?this._override("thumbnailUrl",e):(this._clearOverride("thumbnailUrl"),this.clear("thumbnailUrl","user"))}set authoringApp(e){this._isAuthoringAppSetByUser=!0,this._set("authoringApp",e)}writeAuthoringApp(e,t){e&&this._isAuthoringAppSetByUser?t.authoringApp=e:t.authoringApp="ArcGIS API for JavaScript"}set authoringAppVersion(e){this._isAuthoringAppVersionSetByUser=!0,this._set("authoringAppVersion",e)}writeAuthoringAppVersion(e,t){e&&this._isAuthoringAppVersionSetByUser?t.authoringAppVersion=e:t.authoringAppVersion=pt}writeGround(e,t,i,r){t[i]=e?e.write({},r):{transparency:0,layers:[]}}readInitialViewProperties(e,t){var r,n;const i={};return(r=t.initialState)!=null&&r.environment&&(i.environment=G.fromJSON(t.initialState.environment)),i.spatialReference=t.spatialReference?b.fromJSON(t.spatialReference):b.WebMercator,i.viewingMode=t.viewingMode??"global",(n=t.initialState)!=null&&n.viewpoint&&(i.viewpoint=le.fromJSON(t.initialState.viewpoint)),new F(i)}get spatialReference(){var e;return((e=this.initialViewProperties)==null?void 0:e.spatialReference)??b.WebMercator}get viewingMode(){var e;return((e=this.initialViewProperties)==null?void 0:e.viewingMode)??"global"}load(e){const t=this.ground;return this.addResolvingPromise(this._loadFromSource().then(()=>{t&&t!==this.ground&&t.destroy()})),Promise.resolve(this)}loadAll(){return ct(this,e=>{const t=this.presentation&&this.presentation.slides;e(this.ground,this.basemap,this.layers,t&&t.map(i=>i.basemap),this.tables)})}read(e,t){var n;t={...t,origin:"web-scene"};const i=this._isAuthoringAppVersionSetByUser,r=this._isAuthoringAppSetByUser;if(ht(this,e,a=>super.read(e,a),t),r||(this._isAuthoringAppSetByUser=!1),i||(this._isAuthoringAppVersionSetByUser=!1),e.baseMap&&Array.isArray(e.baseMap.elevationLayers)&&((n=this.sourceVersion)==null?void 0:n.supportsVisibleElevationLayersInSlides)){const a=e.baseMap.elevationLayers.map(h=>({id:h.id})),c=this.presentation.slides,l=(h,m)=>h.visibleLayers.some(S=>S.id===m),d=a.filter(h=>!c.some(m=>l(m,h.id)));c.forEach(h=>{h.visibleLayers.addMany(d)})}}_writeBasemapElevationLayers(e){var i;const t=(i=e.ground)==null?void 0:i.layers;!e.baseMap&&(t!=null&&t.length)&&(e.baseMap={title:"Basemap",baseMapLayers:[]}),e.baseMap&&(e.baseMap.elevationLayers=k(t))}_layersToJSON(e,t,i){const r={...i,layerContainerType:t};return e.map(n=>this._verifyWritableLayer(n,i)?n.write({},r):null).filter(n=>!!n).toArray()}_verifyWritableLayer(e,t){return!!e.persistenceEnabled&&("write"in e||(t!=null&&t.messages&&t.messages.push(new y("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted in web scenes`,{layer:e})),!1))}write(e,t){var n;if(this.loadStatus!=="loaded"){const a=new y("webscene:not-loaded","Web scene must be loaded before it can be serialized");throw R.getLogger(this).error("#toJSON()","Web scene must be loaded before it can be serialized",this.loadError||this.loadStatus),a}this._runLayersIdGC();const i=!(t!=null&&t.messages);t={messages:[],...t,origin:"web-scene"};const r=super.write(e,t);if(i){const a=((n=t.messages)==null?void 0:n.filter(c=>c.name==="web-document-write:property-required"))??[];if(a.length){const c=new y("web-document:property-required","One or more properties that are required in the webscene JSON are missing, see details for the specific errors",{errors:a});throw R.getLogger(this).error("#toJSON()","One or more properties that are required in the webscene JSON are missing",a),c}}return this._writeBasemapElevationLayers(r),r}async save(e){return this._debouncedSaveOperations(E.SAVE,e)}async _saveImpl(e){var n;if(!this.portalItem)throw new y("webscene:portal-item-not-set","Portal item to save to has not been set on the WebScene");if(ve(this.portalItem),((n=this.portalItem)==null?void 0:n.type)!==X)throw new y("webscene:portal-item-wrong-type",`Portal item needs to have type "${X}"`);const t=this._updateFromPromise;await this._ensureLoadBeforeSave();const i=this._enableVerifyItemRelativeUrls(we(this.portalItem,"web-scene",!0)),r=this.write({},i);return await Promise.all(i.resources.pendingOperations),await this._verifySave(r,i,e),this._updateTypeKeywords(this.portalItem),await Lt(this.portalItem,r,this._resourceReferences,i),ge(i),t&&await t,await this._saveThumbnail(),this.portalItem}async saveAs(e,t){return this._debouncedSaveOperations(E.SAVE_AS,t,e)}async _saveAsImpl(e,t){let i=$e.from(e);if(!i)throw new y("webscene:portal-item-required","saveAs requires a portal item to save to");ve(i),i.id&&(i=i.clone(),i.id=null);const r=i.portal||H.getDefault();await this._ensureLoadBeforeSave(),i.type=X,i.portal=r;const n=this._enableVerifyItemRelativeUrls(we(i,"web-scene",!0)),a=this.write({},n);await Promise.all(n.resources.pendingOperations),await this._verifySaveAs(a,n,t);const c=this.thumbnailUrl,l=!this._isOverridden("thumbnailUrl");if(this._updateTypeKeywords(i),await r.signIn(),!r.user)throw new y("webscene:user-not-signed-in","saveAs requires a user to be signed in to the portal");return await r.user.addItem({item:i,folder:t==null?void 0:t.folder,data:a}),await It(this._resourceReferences,n),this.portalItem=i,dt.prototype.read.call(this,{version:a.version,authoringApp:a.authoringApp,authoringAppVersion:a.authoringAppVersion},{name:"web-scene",ignoreDefaults:!0,url:i.itemUrl?K(i.itemUrl):void 0}),ge(n),c&&(this.thumbnailUrl=l?ut(c,"w","8192"):c),n.portalItem=i,await this._saveThumbnail(),i}async _saveThumbnail(){var e;this._isOverridden("thumbnailUrl")&&(await((e=this.portalItem)==null?void 0:e.updateThumbnail({thumbnail:this.thumbnailUrl})),this._clearOverride("thumbnailUrl"),this.clear("thumbnailUrl","user"))}async _verifySave(e,t,i,r=!1){if(!yt(this.spatialReference))throw new y("webscene:unsupported-spatial-reference","Webscenes using spatial reference systems from Mars or Moon can not be saved currently.");const{ignoreUnsupported:n,requiredPropertyChecksDisabled:a,strictSchemaValidationEnabled:c}=i||{};$t(t,{errorName:"webscene:save"},{ignoreUnsupported:n,supplementalUnsupportedErrors:["scenemodification:unsupported"],requiredPropertyChecksDisabled:a});const l=Nt();if(c&&l){const d=(await l()).validate(e);if(!d.length)return;const h=`webscene did not validate:
${d.join(`
`)}`;R.getLogger(this).error(`${r?"saveAs":"save"}(): ${h}`);const m=d.map(S=>new y("webscene:schema-validation",S));throw Vt(m)}}_verifySaveAs(e,t,i){return this.canNotSaveAs(t)?Promise.reject(Ct()):this._verifySave(e,t,i,!0)}verifySaveAs(e){const t=this._enableVerifyItemRelativeUrls({origin:"web-scene",messages:[]}),i=this.write({},t);return this._verifySaveAs(i,t,e)}canNotSaveAs(e){var t,i;return e||(e=this._enableVerifyItemRelativeUrls({origin:"web-scene",messages:[]}),this.write({},e)),(((i=(t=e.verifyItemRelativeUrls)==null?void 0:t.writtenUrls)==null?void 0:i.length)??0)>0}async updateFrom(e,t={}){const i=this._updateFrom(e,t);this._updateFromPromise=i,await i,this._updateFromPromise===i&&(this._updateFromPromise=null)}async _updateFrom(e,t={}){if(await e.whenReady(),!t.environmentExcluded&&e.environment&&(this.initialViewProperties.environment=G.prototype.clone.apply(e.environment)),!t.viewpointExcluded&&e.viewpoint&&(this.initialViewProperties.viewpoint=e.viewpoint.clone()),this.initialViewProperties.spatialReference=e.spatialReference.clone(),this.initialViewProperties.viewingMode=e.viewingMode,e.clippingArea!=null?e.clippingArea!==this.clippingArea&&(this.clippingArea=e.clippingArea.clone(),this.clippingEnabled=!0):this.clippingEnabled=!1,e.heightModelInfo&&(this.heightModelInfo=e.heightModelInfo.clone()),e.map===this)for(const i of e.allLayerViews){const r="visible";r in i&&r in i.layer&&i._isOverridden(r)&&(i.layer[r]=i[r])}(t.thumbnailExcluded===!1||t.thumbnailExcluded==null&&!t.viewpointExcluded)&&await this._updateFromThumbnail(e,t.thumbnailSize??void 0)}async _updateFromThumbnail(e,t){const i=_t(e,t),r=await e.takeScreenshot({format:"jpg",width:i.width,height:i.height,disableDecorations:!0});this.thumbnailUrl=r.dataUrl}_loadFromSource(){var e;return this.resourceInfo?this._loadFromJSON(this.resourceInfo,{origin:"web-scene"}):(e=this.portalItem)!=null&&e.id?this._loadFromItem(this.portalItem):this._loadObjectsWithLayers()}_readAndLoadFromJSON(e,t){const i=this._validateJSON(e);return this.read(i,t),this._loadFromJSON(i,t)}_extractOperationalLayers(e){var n;const t=[];if(!((n=this.sourceVersion)!=null&&n.supportsGround)&&e.baseMap&&Array.isArray(e.baseMap.elevationLayers))for(const a of e.baseMap.elevationLayers)t.push(a);const i=[],r=a=>{var c;return a.layers&&(a.layers=a.layers.filter(r)),a.layerType!=="ArcGISTiledElevationServiceLayer"||((c=this.sourceVersion)!=null&&c.supportsGround||i.push(a),!1)};return{operationalLayers:e.operationalLayers?e.operationalLayers.filter(r):[],operationalElevationLayers:i,basemapElevationLayers:t}}async _loadFromJSON(e,t){var h;const i=new V;await this._validateSpatialReference(),await this._validateHeightModelInfo();const{populateOperationalLayers:r}=await Ie(()=>import("./layersCreator-UI1_S5qI.js"),__vite__mapDeps([2,0,1,3,4,5])),{operationalLayers:n,operationalElevationLayers:a,basemapElevationLayers:c}=this._extractOperationalLayers(e),l=[],d={context:{...t,layerContainerType:"operational-layers"}};if(this.portalItem&&(d.context.portal=this.portalItem.portal||H.getDefault()),c.length>0){const m={...d,context:{...d.context,layerContainerType:"ground"}};m.defaultLayerType="ArcGISTiledElevationServiceLayer",l.push(r(this.ground.layers,c,m))}if(a.length>0){const m={...d,context:{...d.context,layerContainerType:"ground"}};m.defaultLayerType="ArcGISTiledElevationServiceLayer",l.push(r(i,a,m))}n&&n.length>0&&l.push(r(this.layers,n,d)),(h=e.tables)!=null&&h.length&&l.push(r(this.tables,e.tables,{...d,context:{...d.context,layerContainerType:"tables"},defaultLayerType:"ArcGISFeatureLayer"})),await Promise.allSettled(l),await this._loadObjectsWithLayers(),this.ground.layers.addMany(i)}async _ensureLoadBeforeSave(){await this.load(),await this._loadObjectsWithLayers();const e=[],t=[...this.allLayers.items];for(const{basemap:i}of this.presentation.slides.items)i&&(t.push(...i.baseLayers.items),t.push(...i.referenceLayers.items));for(const i of t)if("beforeSave"in i&&typeof i.beforeSave=="function"){const r=i.beforeSave();r&&e.push(r)}await Promise.allSettled(e)}async _loadObjectsWithLayers(){const e=[];this.ground&&e.push(this.ground.load()),this.basemap&&e.push(this.basemap.load()),this.presentation.slides.forEach(t=>{t.basemap&&e.push(t.basemap.load())}),await Promise.allSettled(e)}async _loadFromItem(e){if(await e.load().catch(r=>{throw new y("webscene:load-portal-item","Failed to load portal item",{error:r})}),e.type!=="Web Scene")throw new y("webscene:invalid-portal-item","Invalid portal item type '${type}', expected 'Web Scene'",{type:e.type});const t=await e.fetchData();this.resourceInfo=t;const i={origin:"web-scene",url:K(e.itemUrl),portal:e.portal||H.getDefault(),portalItem:e,readResourcePaths:[]};await this._readAndLoadFromJSON(t,i),this._resourceReferences={portalItem:e,paths:i.readResourcePaths??[]}}_validateSpatialReference(){const e=this.initialViewProperties,t=this._sceneSpatialReference;let i;if(e.viewingMode!=="local"){if(!he(t,de.Global))return Promise.reject(new y("webscene:unsupported-spatial-reference","Unsupported spatial reference (${spatialReference.wkid}) in global mode, only Web Mercator, WGS84 GCS or CGCS2000 are supported",{spatialReference:t,viewingMode:e.viewingMode}));i=l=>!l||bt(l,t)}else{if(!he(t,de.Local))return Promise.reject(new y("webscene:unsupported-spatial-reference","Unsupported spatial reference (${spatialReference.wkid}) in local mode, only projected coordinate systems are supported",{spatialReference:t,viewingMode:e.viewingMode}));i=l=>!l||l.equals(t)}const r=l=>{var d,h;return((d=l==null?void 0:l.camera)==null?void 0:d.position.spatialReference)??((h=l==null?void 0:l.targetGeometry)==null?void 0:h.spatialReference)},n=e.viewpoint,a=r(n);if(a&&!i(a))return Promise.reject(new y("webscene:incompatible-camera-spatial-reference","Camera spatial reference (${cameraSpatialReference.wkid}) is incompatible with the scene spatial reference (${sceneSpatialReference.wkid})",{cameraSpatialReference:a,sceneSpatialReference:t,viewingMode:e.viewingMode}));const c=this.presentation.slides.find(l=>!i(r(l.viewpoint)));if(c){const l=r(c.viewpoint);return Promise.reject(new y("webscene:incompatible-slide-spatial-reference","Slide spatial reference (${slideSpatialReference.wkid}) is incompatible with the scene spatial reference (${sceneSpatialReference.wkid})",{slideSpatialReference:l,sceneSpatialReference:t,viewingMode:e.viewingMode}))}return Promise.resolve()}_validateHeightModelInfo(){const e=this._sceneSpatialReference,t=mt(this.heightModelInfo,e);return t?Promise.reject(t):Promise.resolve()}_validateJSON(e){const t=q.parse(e.version||"","webscene");return _.validate(t),e.version=`${t.major}.${t.minor}`,t.major===1&&t.minor<=2&&(e.spatialReference=b.WebMercator.toJSON()),e}_updateTypeKeywords(e){ue(e,ye.LOCAL_SCENE,this.initialViewProperties.viewingMode==="local"),ue(e,ye.DEVELOPER_BASEMAP,me(this.basemap)||this.presentation.slides.some(({basemap:t})=>!!t&&me(t))),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((t,i,r)=>r.indexOf(t)===i))}get _sceneSpatialReference(){return this.initialViewProperties.spatialReference||b.WebMercator}get _verifyItemRelativeRootPath(){var e;return(e=this.portalItem)!=null&&e.itemUrl?K(this.portalItem.itemUrl).path:null}_enableVerifyItemRelativeUrls(e){const t=this._verifyItemRelativeRootPath;return t&&(e.verifyItemRelativeUrls={rootPath:t,writtenUrls:[]}),e}_unscheduleLayersIdGC(){this._layersIdGCTimeoutId&&(clearTimeout(this._layersIdGCTimeoutId),this._layersIdGCTimeoutId=0)}_scheduleLayersIdGC(){this._unscheduleLayersIdGC(),this._layersIdGCTimeoutId=setTimeout(()=>{this._layersIdGCTimeoutId=0,this._runLayersIdGC()},3e3)}_runLayersIdGC(){var r,n;this._unscheduleLayersIdGC();const e=(n=(r=this.applicationProperties)==null?void 0:r.viewing)==null?void 0:n.search,t=a=>this.allLayers.some(c=>c.id===a&&c.persistenceEnabled);e&&e.layers&&(e.layers=e.layers.filter(a=>t(a.id)));const i=this.presentation&&this.presentation.slides;i&&i.forEach(a=>{a.visibleLayers&&(a.visibleLayers=a.visibleLayers.filter(c=>t(c.id)))})}static fromJSON(e){if(!e)throw new y("webscene:empty-resource","Expected a JSON resource but got nothing");return new this({resourceInfo:e})}};Ve=At,p.version=`${_.major}.${_.minor}`,s([o({type:Et,json:{write:!0}})],p.prototype,"applicationProperties",void 0),s([o({type:gt,json:{read:{source:"clippingArea.geometry",reader:wt},write:{target:"clippingArea.geometry"}}})],p.prototype,"clippingArea",void 0),s([v("clippingArea")],p.prototype,"writeClippingArea",null),s([o({type:Boolean,json:{write:{target:"clippingArea.clip"}}})],p.prototype,"clippingEnabled",void 0),s([Q("clippingEnabled",["clippingArea"])],p.prototype,"readClippingEnabled",null),s([v("clippingEnabled")],p.prototype,"writeClippingEnabled",null),s([o({type:St,json:{read:{source:"mapFloorInfo"},write:{target:"mapFloorInfo"}}})],p.prototype,"floorInfo",void 0),s([o({type:vt,json:{write:!0}})],p.prototype,"heightModelInfo",void 0),s([o({json:{write:{target:"operationalLayers",ignoreOrigin:!0}}})],p.prototype,"layers",void 0),s([v("layers")],p.prototype,"writeLayers",null),s([o({readOnly:!0,type:q,json:{type:Gt(),write:{ignoreOrigin:!0,target:"version",isRequired:!0,overridePolicy:()=>({enabled:!0,allowNull:!0,ignoreOrigin:!0})}}})],p.prototype,"sourceVersion",void 0),s([Q("sourceVersion",["version"])],p.prototype,"readSourceVersion",null),s([v("sourceVersion")],p.prototype,"writeSourceVersion",null),s([o({json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],p.prototype,"tables",void 0),s([v("tables")],p.prototype,"writeTables",null),s([o()],p.prototype,"thumbnailUrl",null),s([o({type:String,json:{write:{writerEnsuresNonNull:!0,ignoreOrigin:!0}}})],p.prototype,"authoringApp",null),s([v("authoringApp")],p.prototype,"writeAuthoringApp",null),s([o({type:String,json:{write:{writerEnsuresNonNull:!0,ignoreOrigin:!0}}})],p.prototype,"authoringAppVersion",null),s([v("authoringAppVersion")],p.prototype,"writeAuthoringAppVersion",null),s([o({json:{write:{isRequired:!0,allowNull:!0,ignoreOrigin:!0,enabled:!0}}})],p.prototype,"ground",void 0),s([v("ground")],p.prototype,"writeGround",null),s([o({type:V.ofType(Ut),json:{write:!0}})],p.prototype,"transportationNetworks",void 0),s([o({type:Ce,nonNullable:!0,json:{write:{ignoreOrigin:!0,writer:(e,t,i,r)=>{if(e.slides&&e.slides.length>0){const n={...r,isPresentation:!0};t.presentation=e.write({},n)}}}}})],p.prototype,"presentation",void 0),s([o({type:F,nonNullable:!0,json:{write:{target:"initialState",isRequired:!0,ignoreOrigin:!0},default:()=>new F({viewingMode:"global",spatialReference:b.WebMercator})}})],p.prototype,"initialViewProperties",void 0),s([Q("initialViewProperties",["initialState.environment","initialState.viewpoint","spatialReference","viewingMode"])],p.prototype,"readInitialViewProperties",null),s([o({type:b,json:{read:!1,write:{isRequired:!0,ignoreOrigin:!0}}})],p.prototype,"spatialReference",null),s([o({type:["local","global"],json:{read:!1,write:{isRequired:!0,ignoreOrigin:!0}}})],p.prototype,"viewingMode",null),s([o({type:$e})],p.prototype,"portalItem",void 0),s([o()],p.prototype,"resourceInfo",void 0),p=s([g("esri.WebScene")],p);const Xt=p;export{Xt as default};