import{aA as r,aB as i,aC as t,aD as n}from"./index-BhDz4nJ7.js";import{z as l}from"./index-f6afcedb-CDF9tnSF.js";import{c as a}from"./component-utils-858627d8-DRqmNtSu.js";import{o as h}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const o="",c=class{constructor(e){r(this,e),this.widgetReady=i(this,"widgetReady",7),this.featureTemplatesSelect=i(this,"featureTemplatesSelect",7),this._watchHandles=[],this.referenceElement=void 0,this.position="bottom-left",this.expandable=!1,this.widget=void 0,this.enableListScroll=void 0,this.filterFunction=void 0,this.filterText=void 0,this.groupBy=void 0,this.layers=void 0,this.selectionMode=void 0,this.visibleElements=void 0}enableListScrolWatcher(e){e!==void 0&&this.widget&&(this.widget.enableListScroll=e)}filterFunctionWatcher(e){this.widget&&(this.widget.filterFunction=e)}filterTextWatcher(e){this.widget&&(this.widget.filterText=e)}groupByWatcher(e){this.widget&&(this.widget.groupBy=e)}layersWatcher(e){this.widget&&(this.widget.layers=e)}selectionModeWatcher(e){this.widget&&(this.widget.selectionMode=e)}visibleElementsWatcher(e){this.widget&&(this.widget.visibleElements=e)}async componentDidLoad(){const e=this._createParams(),s=await l(e);this.widget=s,this._proxyEvents(),this.widgetReady.emit({widget:this.widget}),a(this)}disconnectedCallback(){h(this)}render(){return this.expandable?t("arcgis-expand",{position:this.position,ref:e=>this.expandElem=e},t("div",{ref:e=>this.childElem=e})):t("div",{ref:e=>this.childElem=e})}_createParams(){const e={container:this.childElem};return this.enableListScroll!==void 0&&(e.enableListScroll=this.enableListScroll),this.filterFunction&&(e.filterFunction=this.filterFunction),this.filterText&&(e.filterText=this.filterText),this.groupBy&&(e.groupBy=this.groupBy),this.layers&&(e.layers=this.layers),this.selectionMode!==void 0&&(e.selectionMode=this.selectionMode),this.visibleElements&&(e.visibleElements=this.visibleElements),e}_proxyEvents(){this.widget.on("select",e=>this.featureTemplatesSelect.emit(e))}get el(){return n(this)}static get watchers(){return{enableListScroll:["enableListScrolWatcher"],filterFunction:["filterFunctionWatcher"],filterText:["filterTextWatcher"],groupBy:["groupByWatcher"],layers:["layersWatcher"],selectionMode:["selectionModeWatcher"],visibleElements:["visibleElementsWatcher"]}}};c.style=o;export{c as arcgis_feature_templates};