import{aA as n,aB as s,aC as r,aD as o}from"./index-nBWeBKPv.js";import{n as d,i as c,a as p,b as l}from"./index-f6afcedb-DJUkfEVF.js";import{r as g,c as m,a,i as h,b as v}from"./component-utils-858627d8-DRqmNtSu.js";import{o as f}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const u="",y=class{constructor(i){n(this,i),this.arcgisBasemapGalleryReady=s(this,"arcgisBasemapGalleryReady",7),this._watchHandles=[],this.referenceElement=void 0,this.activeBasemap=void 0,this.disabled=!1,this.icon=void 0,this.source=void 0,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(i){g(this,i)}disabledWatcher(i,e){this.widget&&i!==e&&(this.widget.disabled=i)}iconWatcher(i){this.widget&&(this.widget.icon=i,this.widget.iconClass=i)}sourceWatcher(i){this.widget&&(this.widget.source=i)}positionWatcher(i){i!==void 0&&this.widget&&this.view.ui.move(this.childElem,i)}viewWatcher(i){i!==void 0&&this.widget&&(this.widget.view=i)}async componentDidLoad(){const i=this._createParams(),e=await d(i);this.widget=e,await this._addWatchers(),this._addContainer(),this.arcgisBasemapGalleryReady.emit(),m(this)}disconnectedCallback(){f(this)}render(){return r("div",{ref:i=>this.childElem=i})}_addContainer(){this.widget.container=this.childElem}async _addWatchers(){const{watch:i}=await c();a(this,[i(()=>this.widget.source,()=>this.source=this.widget.source,{initial:!0}),i(()=>this.widget.activeBasemap,e=>this.activeBasemap=e,{initial:!0}),i(()=>this.widget.disabled,e=>this.disabled=e)])}_createParams(){const i={};return this.icon&&(i.icon=this.icon,i.iconClass=this.icon),this.source&&(i.source=this.source),this.view&&(i.view=this.view),i}get el(){return o(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],disabled:["disabledWatcher"],icon:["iconWatcher"],source:["sourceWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};y.style=u;const V=".arcgis-map{padding:0;margin:0;height:100%;width:100%}",W=class{constructor(i){n(this,i),this.arcgisViewReadyChange=s(this,"arcgisViewReadyChange",7),this.arcgisViewChange=s(this,"arcgisViewChange",7),this.arcgisViewClick=s(this,"arcgisViewClick",7),this.arcgisViewDoubleClick=s(this,"arcgisViewDoubleClick",7),this.arcgisViewDrag=s(this,"arcgisViewDrag",7),this.arcgisViewHold=s(this,"arcgisViewHold",7),this.arcgisViewImmediateClick=s(this,"arcgisViewImmediateClick",7),this.arcgisViewImmediateDoubleClick=s(this,"arcgisViewImmediateDoubleClick",7),this.arcgisViewKeyDown=s(this,"arcgisViewKeyDown",7),this.arcgisViewKeyUp=s(this,"arcgisViewKeyUp",7),this.arcgisViewLayerviewCreate=s(this,"arcgisViewLayerviewCreate",7),this.arcgisViewLayerviewCreateError=s(this,"arcgisViewLayerviewCreateError",7),this.arcgisViewLayerviewDestroy=s(this,"arcgisViewLayerviewDestroy",7),this.arcgisViewMouseWheel=s(this,"arcgisViewMouseWheel",7),this.arcgisViewPointerDown=s(this,"arcgisViewPointerDown",7),this.arcgisViewPointerEnter=s(this,"arcgisViewPointerEnter",7),this.arcgisViewPointerLeave=s(this,"arcgisViewPointerLeave",7),this.arcgisViewPointerMove=s(this,"arcgisViewPointerMove",7),this.arcgisViewPointerUp=s(this,"arcgisViewPointerUp",7),this._watchHandles=[],this.allLayerViews=void 0,this.background=void 0,this.basemapView=void 0,this.basemap=void 0,this.center=void 0,this.constraints=void 0,this.destroyDisabled=!1,this.extent=void 0,this.fatalError=void 0,this.floors=void 0,this.gamepad=void 0,this.graphics=void 0,this.highlightOptions=void 0,this.interacting=!1,this.itemId=void 0,this.layerViews=void 0,this.magnifier=void 0,this.map=void 0,this.navigating=!1,this.navigation=void 0,this.padding=void 0,this.popup=void 0,this.popupEnabled=!0,this.ready=!1,this.resizeAlign=void 0,this.resolution=void 0,this.rotation=0,this.scale=void 0,this.spatialReference=void 0,this.stationary=void 0,this.suspended=!0,this.theme=void 0,this.timeExtent=void 0,this.timeZone="system",this.toMap=void 0,this.toScreen=void 0,this.updating=!1,this.viewpoint=void 0,this.zoom=void 0,this.view=void 0}backgroundWatcher(i){this.view&&(this.background=i)}basemapWatcher(i){var e,t;typeof i=="string"&&((e=this.view)!=null&&e.map)&&!h(i)?this.view.map.basemap=i:(t=this.view)!=null&&t.map&&(this.view.map.basemap=i)}centerWatcher(i,e){if(i!==e&&this.view)if(typeof i=="string"){const t=i.split(",").map(w=>Number(w));t[0]!==this.view.center.longitude&&t[1]!==this.view.center.latitude&&(this.view.center=t)}else Array.isArray(i)?i[0]!==this.view.center.longitude&&i[1]!==this.view.center.latitude&&(this.view.center=i):this.view.center.equals(i)||(this.view.center=i)}constraintsWatcher(i){this.view&&(this.view.constraints=i)}extentWatcher(i){this.view&&i&&!this.view.extent.equals(i)&&(this.view.extent=i)}floorsWatcher(i){this.view&&(this.view.floors=i)}graphicsWatcher(i){this.view&&(this.view.graphics=i)}highlightOptionsWatcher(i){this.view&&(this.view.highlightOptions=i)}itemIdWatcher(i,e){var t;i!==e&&((t=this.view)!=null&&t.map?this._updateMap():this._loadMap())}mapWatcher(i){this.view&&(this.view.map=i)}navigationWatcher(i){this.view&&(this.view.navigation=i)}paddingWatcher(i){this.view&&(this.view.padding=i)}popupWatcher(i){this.view&&(this.view.popup=i)}popupEnabledWatcher(i,e){i!==e&&this.view&&(this.view.popupEnabled=i)}resizeAlignWatcher(i){this.view&&(this.view.resizeAlign=i)}rotationWatcher(i){this.view&&this.view.rotation!==i&&(this.view.rotation=i)}scaleWatcher(i,e){var t;!((t=this.view)!=null&&t.interacting)&&i!=null&&i!==e&&(this.view.scale=i)}spatialReferenceWatcher(i){this.view&&i&&!this.view.spatialReference.equals(i)&&(this.view.spatialReference=i)}themeWatcher(i){this.view&&(this.view.theme=i)}timeExtentWatcher(i){this.view&&(this.view.timeExtent=i)}timeZoneWatcher(i){this.view&&(this.view.timeZone=i)}viewpointWatcher(i){this.view&&v(this.view.viewpoint,i)&&(this.view.viewpoint=i)}zoomWatcher(i,e){var t;!((t=this.view)!=null&&t.interacting)&&i!=null&&i!==e&&(this.view.zoom=i)}async closePopup(){var i;(i=this.view)==null||i.closePopup()}async destroy(){this.destroyDisabled&&(this._clearWatchHandles(),this.view.destroy())}async goTo(i,e){var t;return await((t=this.view)==null?void 0:t.goTo(i,e))}async hitTest(i,e){var t;return await((t=this.view)==null?void 0:t.hitTest(i,e))}async openPopup(i){var e;return void((e=this.view)==null?void 0:e.openPopup(i))}async takeScreenshot(i){var e;return await((e=this.view)==null?void 0:e.takeScreenshot(i))}async tryFatalErrorRecovery(){var i;(i=this.view)==null||i.tryFatalErrorRecovery()}async whenLayerView(i){var e;return await((e=this.view)==null?void 0:e.whenLayerView(i))}async componentWillLoad(){this.view||await this._loadMap()}componentDidRender(){this.view&&!this.view.container&&(this.view.container=this.el)}componentDidLoad(){this._proxyEvents()}disconnectedCallback(){this.destroy()}render(){return r("div",{class:"arcgis-map",ref:i=>this.el=i})}_clearWatchHandles(){this._watchHandles.forEach(i=>i.remove()),this._watchHandles=[]}async _addWatchers(){const{watch:i,when:e}=await c();a(this,[i(()=>this.view.stationary,()=>{this.stationary=this.view.stationary,this.interacting=this.view.interacting,this.navigating=this.view.navigating,this.arcgisViewChange.emit()},{initial:!0}),e(()=>this.view.stationary,()=>{this.center=this.view.center,this.extent=this.view.extent,this.scale=this.view.scale,this.viewpoint=this.view.viewpoint,this.zoom=this.view.zoom,this.spatialReference=this.view.spatialReference}),i(()=>this.view.allLayerViews,()=>{this.allLayerViews=this.view.allLayerViews},{initial:!0}),i(()=>{var t;return(t=this.view.map)==null?void 0:t.basemap},()=>{var t;this.basemap=(t=this.view.map)==null?void 0:t.basemap},{initial:!0}),i(()=>this.view.fatalError,()=>{this.fatalError=this.view.fatalError},{initial:!0}),i(()=>this.view.input.gamepad,()=>{this.gamepad=this.view.input.gamepad},{initial:!0}),i(()=>this.view.graphics,()=>{this.graphics=this.view.graphics},{initial:!0}),i(()=>this.view.layerViews,()=>{this.layerViews=this.view.layerViews},{initial:!0}),i(()=>this.view.navigation,()=>{this.navigation=this.view.navigation},{initial:!0}),i(()=>this.view.map,()=>{this.map=this.view.map},{initial:!0}),i(()=>this.view.popup,()=>{this.popup=this.view.popup},{initial:!0}),i(()=>this.view.resolution,()=>{this.resolution=this.view.resolution},{initial:!0}),i(()=>this.view.rotation,()=>{this.rotation=this.view.rotation},{initial:!0}),i(()=>this.view.suspended,()=>{this.suspended=this.view.suspended},{initial:!0}),i(()=>this.view.updating,()=>{this.updating=this.view.updating},{initial:!0}),i(()=>this.view.ready,()=>{this.ready=this.view.ready,this.arcgisViewReadyChange.emit()},{initial:!0})])}async _createMap(){const i={};return this.itemId&&(i.portalItem=await this._createPortalItem()),this.basemap?i.basemap=this.basemap:h(this.itemId)&&(i.basemap="topo-vector"),await p(i)}async _createPortalItem(){const i={};return this.itemId&&(i.id=this.itemId),i}_createViewParams(){const i={};return this.background&&(i.background=this.background),this.center&&(typeof this.center=="string"?i.center=this.center.split(",").map(e=>Number(e)):i.center=this.center),this.constraints&&(i.constraints=this.constraints),this.extent&&(i.extent=this.extent),this.floors&&(i.floors=this.floors),this.graphics&&(i.graphics=this.graphics),this.highlightOptions&&(i.highlightOptions=this.highlightOptions),this.map&&(i.map=this.map),this.navigation&&(i.navigation=this.navigation),this.padding&&(i.padding=this.padding),this.popup&&(i.popup=this.popup),this.popupEnabled!==void 0&&(i.popupEnabled=this.popupEnabled),this.rotation!==void 0&&(i.rotation=this.rotation),this.scale!==void 0&&(i.scale=this.scale),this.spatialReference&&(i.spatialReference=this.spatialReference),this.theme&&(i.theme=this.theme),this.timeExtent&&(i.timeExtent=this.timeExtent),this.timeZone&&(i.timeZone=this.timeZone),this.viewpoint&&(i.viewpoint=this.viewpoint),this.zoom!==void 0&&(i.zoom=this.zoom),i}async _loadMap(){this.map||(this.map=await this._createMap());const i=this._createViewParams(),e=await l({...i});return this.view=e,void e.when(async()=>{this.toMap=e.toMap.bind(e),this.toScreen=e.toScreen.bind(e),await this._addWatchers()})}_proxyEvents(){a(this,[this.view.on("click",i=>{this.arcgisViewClick.emit(i)}),this.view.on("double-click",i=>{this.arcgisViewDoubleClick.emit(i)}),this.view.on("drag",i=>{this.arcgisViewDrag.emit(i)}),this.view.on("hold",i=>{this.arcgisViewHold.emit(i)}),this.view.on("immediate-click",i=>{this.arcgisViewImmediateClick.emit(i)}),this.view.on("immediate-double-click",i=>{this.arcgisViewImmediateDoubleClick.emit(i)}),this.view.on("key-down",i=>{this.arcgisViewKeyDown.emit(i)}),this.view.on("key-up",i=>{this.arcgisViewKeyUp.emit(i)}),this.view.on("layerview-create",i=>{this.arcgisViewLayerviewCreate.emit(i)}),this.view.on("layerview-create-error",i=>{this.arcgisViewLayerviewCreateError.emit(i)}),this.view.on("layerview-destroy",i=>{this.arcgisViewLayerviewDestroy.emit(i)}),this.view.on("mouse-wheel",i=>{this.arcgisViewMouseWheel.emit(i)}),this.view.on("pointer-down",i=>{this.arcgisViewPointerDown.emit(i)}),this.view.on("pointer-enter",i=>{this.arcgisViewPointerEnter.emit(i)}),this.view.on("pointer-leave",i=>{this.arcgisViewPointerLeave.emit(i)}),this.view.on("pointer-move",i=>{this.arcgisViewPointerMove.emit(i)}),this.view.on("pointer-up",i=>{this.arcgisViewPointerUp.emit(i)})])}async _updateMap(){var i;if((i=this.view)!=null&&i.map){this.view.map.destroy();const e=await this._createMap();this.view.map=e}}get _hostElement(){return o(this)}static get watchers(){return{background:["backgroundWatcher"],basemap:["basemapWatcher"],center:["centerWatcher"],constraints:["constraintsWatcher"],extent:["extentWatcher"],floors:["floorsWatcher"],graphics:["graphicsWatcher"],highlightOptions:["highlightOptionsWatcher"],itemId:["itemIdWatcher"],map:["mapWatcher"],navigation:["navigationWatcher"],padding:["paddingWatcher"],popup:["popupWatcher"],popupEnabled:["popupEnabledWatcher"],resizeAlign:["resizeAlignWatcher"],rotation:["rotationWatcher"],scale:["scaleWatcher"],spatialReference:["spatialReferenceWatcher"],theme:["themeWatcher"],timeExtent:["timeExtentWatcher"],timeZone:["timeZoneWatcher"],viewpoint:["viewpointWatcher"],zoom:["zoomWatcher"]}}};W.style=V;export{y as arcgis_basemap_gallery,W as arcgis_map};
