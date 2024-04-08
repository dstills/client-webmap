import{g as s,y as n,i as f,S as V,ay as x,aK as w,aP as v,bB as k,bK as B,ar as g,at as q,bE as D,jP as A,kF as I,as as $,aO as S,bl as E,bC as U}from"./index-nBWeBKPv.js";import{d as z,f as C,a as T}from"./RasterVFDisplayObject-Brl9NaxE.js";import{m as F}from"./LayerView2D-BloiS6d1.js";import{$ as M}from"./GraphicsView2D-0TEF5AKb.js";import{h as O}from"./HighlightGraphicContainer-CmHN5UN8.js";import{M as j,m as H,f as L}from"./dataUtils-DiNDcfRY.js";import{a as G}from"./BitmapContainer-BQBbPtIh.js";import{h as J,E as R}from"./Container-CTQo6kEb.js";import{l as N}from"./Bitmap-BlKmXJ1C.js";import{v as W}from"./ExportStrategy-CYVVW0_N.js";import{J as K}from"./rasterProjectionHelper-Db7yMgUP.js";import{a as Q}from"./WGLContainer-CosurzxA.js";import{u as X}from"./ImageryLayerView-BwEQunlR.js";import{u as Y}from"./LayerView-Dpo8VUNV.js";import{i as Z}from"./RefreshableLayerView-B8arDm74.js";import"./WGLBrushVTLSymbol-CgE_QQ-Q.js";import"./vec4f32-CjrfB-0a.js";import"./LabelMetric-DofoYXTH.js";import"./Tile-CQ6TlwHd.js";import"./quickselect-BhLHWy4r.js";import"./ClipRect-CL_RLv1L.js";import"./AttributeStore-DOjVp8d7.js";import"./UpdateTracking2D-CD1onhf0.js";import"./TurboLine-CoGYQY3E.js";import"./highlightReasons-BreL7upH.js";import"./constants-D5zmR9t2.js";import"./centroid-DdLmOD72.js";import"./timeSupport-rQ_0tTrz.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-sA8oVCV4.js";import"./heatmapTextureUtils-CDx4jbqS.js";import"./normalizeUtilsSync-Dv3yGzcd.js";import"./AGraphicContainer-Dguq8bB7.js";import"./TechniqueInstance-iSLO03bC.js";import"./TileContainer-CHFG_M5g.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-B9wT6rfn.js";import"./popupUtils-BmN35jfJ.js";let h=class extends V{constructor(){super(...arguments),this.attached=!1,this.container=new J,this.updateRequested=!1,this.type="imagery",this._bitmapView=new G}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(e=>{x(e)||w.getLogger(this).error(e)})}hitTest(t){return new v({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new W({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:e.extent}}).catch(t=>{x(t)||w.getLogger(this).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(e)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),r=j(i,e);return r!=null?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){var c;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const a=await this.layer.fetchImage(t,e,i,r);if(a.imageBitmap)return a.imageBitmap;const o=await this.layer.applyRenderer(a.pixelData,{signal:r.signal}),l=new N(o.pixelBlock,(c=o.extent)==null?void 0:c.clone(),a.pixelData.pixelBlock);return l.filter=u=>this.layer.applyFilter(u),l}};s([n()],h.prototype,"attached",void 0),s([n()],h.prototype,"container",void 0),s([n()],h.prototype,"layer",void 0),s([n()],h.prototype,"strategy",void 0),s([n()],h.prototype,"timeExtent",void 0),s([n()],h.prototype,"view",void 0),s([n()],h.prototype,"updateRequested",void 0),s([n()],h.prototype,"updating",null),s([n()],h.prototype,"type",void 0),h=s([f("esri.views.2d.layers.imagery.ImageryView2D")],h);const tt=h;class et extends Q{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[z],target:()=>this.children,drawPhase:R.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===R.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let d=class extends V{constructor(t){super(t),this._loading=null,this.update=k((e,i)=>this._update(e,i).catch(r=>{x(r)||w.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:a}=t.state,o=new B({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[l,c]=t.state.size;this._loading=this.fetchPixels(o,l,c,i);const u=await this._loading;this._addToDisplay(u,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(t.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=t,o=new C(a);o.offset=[0,0],o.symbolizerParameters=e,o.rawPixelData=t,o.invalidateVAO(),o.x=r.xmin,o.y=r.ymax,o.pixelRatio=i.pixelRatio,o.rotation=i.rotation,o.resolution=i.resolution,o.width=a.width*e.symbolTileSize,o.height=a.height*e.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(o)}};s([n()],d.prototype,"fetchPixels",void 0),s([n()],d.prototype,"container",void 0),s([n()],d.prototype,"_loading",void 0),s([n()],d.prototype,"updating",null),d=s([f("esri.views.2d.layers.imagery.ImageryVFStrategy")],d);const it=d;let p=class extends V{constructor(){super(...arguments),this.attached=!1,this.container=new et,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:o}=this.layer.renderer,{extent:l,width:c,height:u}=H(t,e,i,o,a);if(a!=null&&!a.intersects(t))return{extent:l,pixelBlock:null};const b={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:o,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(b)){const m=this.getPixelData();if(m!=null&&`${m.extent.xmin}, ${m.extent.ymin}, ${m.extent.xmax}, ${m.extent.ymax}`===b.bbox)return m}const{pixelData:_}=await this.layer.fetchImage(l,c,u,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=b;const P=_==null?void 0:_.pixelBlock;return P==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?L(P,"vector-uv"):P}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new it({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(g(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),q),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const t=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new v({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch(e=>{x(e)||w.getLogger(this).error(e)})}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,a=this._dataParameters.bbox===t.bbox;return e&&i&&r&&a}async _getProjectedFullExtent(t){try{return K(this.layer.fullExtent,t)}catch{try{const i=(await D(this.layer.url,{query:{option:"footprints",outSR:A(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?B.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([n()],p.prototype,"attached",void 0),s([n()],p.prototype,"container",void 0),s([n()],p.prototype,"layer",void 0),s([n()],p.prototype,"timeExtent",void 0),s([n()],p.prototype,"type",void 0),s([n()],p.prototype,"view",void 0),s([n()],p.prototype,"updating",null),p=s([f("esri.views.2d.layers.imagery.VectorFieldView2D")],p);const rt=p;let y=class extends X(Z(F(Y))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new I,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new M({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new O(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([g(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},$),g(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},$),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),g(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:S.isCollection(t)?t.at(0):t)instanceof v))return E();let i=[];return Array.isArray(t)||S.isCollection(t)?i=t.map(r=>r.clone()):t instanceof v&&(i=[t.clone()]),this._highlightGraphics.addMany(i),E(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){var e,i;const t=!this.subview||this.subview.updating||!!((e=this._highlightView)!=null&&e.updating);return U("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${t}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${(i=this._highlightView)==null?void 0:i.updating}
`),t}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:a}=this.subview;if(a===e)return this._attachSubview(this.subview),void(a==="flow"?this.subview.redrawOrRefetch():a==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new tt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new rt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new T({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0))}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};s([n()],y.prototype,"pixelData",null),s([n()],y.prototype,"subview",void 0),y=s([f("esri.views.2d.layers.ImageryLayerView2D")],y);const jt=y;export{jt as default};