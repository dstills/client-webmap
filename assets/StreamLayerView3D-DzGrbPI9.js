import{E as r,F as s,J as p,cL as M,O,M as y,hW as k,bt as _,a$ as $,bq as R,b as T,aV as C}from"./index-BS4ejk0L.js";import{o as G}from"./StreamFeatureManager-TkapmJRp.js";import{createConnection as P}from"./createConnection-BlPtgy63.js";import{h as E}from"./EventedSet-nhmx11x8.js";import{b as j}from"./HeatmapDensity.glsl-7S58iYVW.js";import{n as x}from"./LayerView3D-CyxA26u0.js";import{u as U}from"./LayerView-BXe9D6EI.js";import{r as V}from"./StreamLayerView-x55LVtP-.js";import"./CircularArray-DfLrgW_-.js";import"./query-B5HIkOqR.js";import"./pbfQueryUtils-B-d_6UUW.js";import"./pbf-C4Eb1fn3.js";import"./dehydratedFeatureComparison-BLk0wGvH.js";import"./queryForSymbologySnapping-DakD_zol.js";import"./hash-CcEbRgUF.js";import"./Graphics3DObjectStates-B8Jz26uP.js";import"./optimizedFeatureQueryEngineAdapter-CbGFef8S.js";import"./centroid-DdLmOD72.js";import"./PooledRBush-W3Jjqe8b.js";import"./popupUtils-D7QL1g2A.js";import"./QueryEngine-ClmdEF_O.js";import"./WhereClause-CApUyJQA.js";import"./TimeOnly-Bteh-FKU.js";import"./timeSupport-CUSS_Biu.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DPbV31nd.js";import"./utils-FV1mcCak.js";import"./ClassBreaksDefinition-_48d00G7.js";import"./FeatureStore-Dj1iG0Aw.js";import"./BoundsStore-CF_o2Ev6.js";import"./heatmapTextureUtils-DW_fXosT.js";import"./projectExtentUtils-BkTF27Em.js";const F=2500;let l=class extends ${getObjectId(){return this.objectId}};r([s({type:Number,json:{read:!0}})],l.prototype,"objectId",void 0),l=r([p("esri.layers.graphics.controllers.StreamGraphic")],l);class L{constructor(t){this.onUpdate=t,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(t){this._idToGraphic.set(t.objectId,t)}get(t){return this._idToGraphic.get(t)}forEach(t){this._idToGraphic.forEach(t)}removeById(t){const o=this._idToGraphic.get(t);return o?(o.sourceLayer=o.layer=null,this._idToGraphic.delete(t),o):null}update(t,o){this.onUpdate(t,o)}get size(){return this._idToGraphic.size}}let n=class extends M(O){constructor(){super(...arguments),this.isPaused=!1,this.graphics=new E,this._updateInfo={websocket:0,client:0},this._updateIntervalId=null,this._outSpatialReference=null}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId!==null&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}clear(){this._shutdown(),this.graphics.clear()}get updating(){return!this.connection||this.connection.connectionStatus==="connected"}_shutdown(){this._clearInterval(),this.connection=y(this.connection),this.store=y(this.store),this.removeAllHandles()}_startup(){const{layer:e,layerView:t}=this,{spatialReference:o,definitionExpression:c,geometryDefinition:h,objectIdField:d,timeInfo:f,purgeOptions:g,maxReconnectionAttempts:v,maxReconnectionInterval:I,customParameters:w}=e,b=e.geometryType?k.toJSON(e.geometryType):null,S=o,u=t.view.spatialReference;this.clear(),this._set("connection",P(e.parsedUrl,S,u,b,c,h,v,I,w??void 0)),this._outSpatialReference=u.toJSON(),this.store=new L(this._onUpdate.bind(this)),this.featuresManager=new G(this.store,d,f.toJSON(),g);const m="startup-watches";this.removeHandles(m),this.addHandles([e.on("send-message-to-socket",a=>this.connection.sendMessageToSocket(a)),e.on("send-message-to-client",a=>this.connection.sendMessageToClient(a)),this.connection.on("data-received",a=>this._onFeature(a)),this.connection.on("message-received",a=>this._onWebSocketMessage(a)),_(()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions],()=>this._startup())],m),this.isPaused||this._initUpdateInterval()}_onWebSocketMessage(e){if(this.layerView.emit("message-received",e),"type"in e)switch(e.type){case"delete":if(e.objectIds)for(const t of e.objectIds)this.featuresManager.removeById(t);if(e.trackIds)for(const t of e.trackIds)this.featuresManager.removeByTrackId(t);break;case"clear":this.store.forEach(t=>this.featuresManager.removeById(t.objectId))}}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{e.geometry==null||e.geometry.spatialReference||(e.geometry.spatialReference=this._outSpatialReference);const t=l.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){t!=null&&this.graphics.removeMany(t),e!=null&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval(()=>{const o=performance.now(),c=o-t;if(c>F){t=o;const h=Math.round(this._updateInfo.client/(c/1e3)),d=Math.round(this._updateInfo.websocket/(c/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:h,websocket:d})}this.featuresManager.checkForUpdates()},e)}pauseStream(){this.isPaused=!0,this._clearInterval()}resumeStream(){this.isPaused=!1,this._initUpdateInterval()}disconnect(){this._shutdown()}connect(){this.connection==null&&this._startup()}clearGraphics(){this.graphics.clear()}};r([s()],n.prototype,"isPaused",void 0),r([s({constructOnly:!0})],n.prototype,"layer",void 0),r([s({constructOnly:!0})],n.prototype,"layerView",void 0),r([s()],n.prototype,"connection",void 0),r([s({readOnly:!0})],n.prototype,"updating",null),n=r([p("esri.layers.graphics.controllers.StreamController")],n);let i=class extends V(j(x(U))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=R.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.addHandles(_(()=>this.suspended,e=>{this.controller&&this._onSuspendedChange(e)}))}get connectionError(){var t,o;const e=(o=(t=this.controller)==null?void 0:t.connection)==null?void 0:o.errorString;return e?new T("stream-controller",e):null}createQuery(){return new C({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),t==null?void 0:t.signal)}get _streamConnectionStatus(){var e,t;return((t=(e=this.controller)==null?void 0:e.connection)==null?void 0:t.connectionStatus)??"disconnected"}createController(){return new n({layer:this.layer,layerView:this})}beforeSetController(){}_doPause(){var e;(e=this.controller)==null||e.pauseStream()}_doResume(){var e;(e=this.controller)==null||e.resumeStream()}_doDisconnect(){var e;(e=this.controller)==null||e.disconnect(),this._doPause()}_doConnect(){var e;(e=this.controller)==null||e.connect(),this.resume()}_doClear(){var e;(e=this.controller)==null||e.clearGraphics()}};r([s({readOnly:!0})],i.prototype,"updatePolicy",void 0),r([s({readOnly:!0})],i.prototype,"connectionError",null),r([s()],i.prototype,"controller",void 0),r([s({readOnly:!0})],i.prototype,"hasZ",void 0),r([s({readOnly:!0})],i.prototype,"hasM",void 0),r([s({readOnly:!0})],i.prototype,"_streamConnectionStatus",null),i=r([p("esri.views.3d.layers.StreamLayerView3D")],i);const Ie=i;export{Ie as default};