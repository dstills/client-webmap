import{aO as l,ga as _,P as m,v as n,bl as c,ar as d,g as p,y as u,i as w}from"./index-BhDz4nJ7.js";import{m as y,c as f,O as k,f as M,j as v,g as V}from"./RouteInfo-CELWKVhl.js";import{O as I}from"./Stop-GaHM479u.js";import{t as G}from"./highlightReasons-oPQR33ZA.js";import{m as F}from"./LayerView2D-CnHSL2ze.js";import{t as H}from"./GraphicContainer-BxEil6dD.js";import{$}from"./GraphicsView2D-Bm0WnMYO.js";import{u as C}from"./LayerView-C77uL6vR.js";import"./Tile-Bw3qZqtY.js";import"./quickselect-C4F3mpYw.js";import"./Container-BXVidpqz.js";import"./ClipRect-IkMaETau.js";import"./AGraphicContainer-P2xXnmI_.js";import"./TechniqueInstance-DCkShiYG.js";import"./UpdateTracking2D-D16VlBPt.js";import"./TurboLine-CEOhZHLm.js";import"./LabelMetric-CeMeOwg_.js";import"./constants-D5zmR9t2.js";import"./TileContainer-BTh3SyKI.js";import"./WGLContainer-BH0kviEM.js";import"./WGLBrushVTLSymbol-DtHTPLWt.js";import"./vec4f32-CjrfB-0a.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-COAJiysE.js";import"./FeatureCommandQueue-DhWQMpDE.js";import"./heatmapTextureUtils-F_IWNXr_.js";import"./AttributeStore-Cu7N58nR.js";import"./centroid-DdLmOD72.js";import"./timeSupport-BllRBzVr.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-BhrfXAEA.js";const b=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function g(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof v||t instanceof V||t instanceof I}function O(t){return l.isCollection(t)&&t.length&&g(t.at(0))}function U(t){return Array.isArray(t)&&t.length>0&&g(t[0])}let h=class extends F(C){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new _({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),m)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(t,e){return this._graphicsView.hitTest(t).filter(({popupTemplate:i})=>!!i)}highlight(t){let e;e=g(t)?[this._getNetworkFeatureUid(t)]:U(t)?t.map(r=>this._getNetworkFeatureUid(r)):O(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(n);return i.length?(this._addHighlight(i),c(()=>this._removeHighlight(i))):c()}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(n).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new H(t.featuresTilingScheme);this._graphicsView=new $({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return b.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return i.symbol==null?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(n));for(const e of t.added)this.addHandles([d(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),d(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const o=this._createGraphic(t);return this._networkFeatureMap.set(t,o),this._networkGraphicMap.set(o,t),void this._graphics.add(o)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),e=G("highlight");this._graphicsView.setHighlight(t.map(i=>({objectId:i,highlightFlags:e})))}};p([u()],h.prototype,"_graphics",void 0),p([u()],h.prototype,"_routeItems",null),h=p([w("esri.views.2d.layers.RouteLayerView2D")],h);const lt=h;export{lt as default};