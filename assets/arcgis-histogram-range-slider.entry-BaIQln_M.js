import{aA as a,aB as n,aC as e,aD as d}from"./index-nBWeBKPv.js";import{E as r}from"./index-f6afcedb-DJUkfEVF.js";import{c as s}from"./component-utils-858627d8-DRqmNtSu.js";import{o as h}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const o="arcgis-histogram-range-slider{}",c=class{constructor(i){a(this,i),this.widgetReady=n(this,"widgetReady",7),this._watchHandles=[],this.referenceElement=void 0,this.average=void 0,this.barCreatedFunction=void 0,this.bins=void 0,this.dataLineCreatedFunction=void 0,this.dataLines=void 0,this.excludedBarColor=void 0,this.includedBarColor=void 0,this.labelFormatFunction=void 0,this.max=0,this.min=0,this.precision=void 0,this.rangeType=void 0,this.standardDeviation=void 0,this.standardDeviationCount=void 0,this.values=void 0,this.position="bottom-left",this.expandable=!1,this.widget=void 0}averageWatcher(i){this.widget&&(this.widget.average=i)}barCreatedFunctionWatcher(i){this.widget&&(this.widget.barCreatedFunction=i)}binsWatcher(i){this.widget&&(this.widget.bins=i)}dataLineCreatedFunctionWatcher(i){this.widget&&(this.widget.dataLineCreatedFunction=i)}dataLinesWatcher(i){this.widget&&(this.widget.dataLines=i)}excludedBarColorWatcher(i){this.widget&&(this.widget.excludedBarColor=i)}includedBarColorWatcher(i){this.widget&&(this.widget.includedBarColor=i)}labelFormatFunctionWatcher(i){this.widget&&(this.widget.labelFormatFunction=i)}maxWatcher(i){this.widget&&(this.widget.max=Number(i))}minWatcher(i){this.widget&&(this.widget.min=Number(i))}precisionWatcher(i){this.widget&&(this.widget.precision=i)}rangeTypeWatcher(i){this.widget&&(this.widget.rangeType=i)}standardDeviationWatcher(i){this.widget&&(this.widget.standardDeviation=i)}standardDeviationCountWatcher(i){this.widget&&(this.widget.standardDeviationCount=i)}valuesWatcher(i){this.widget&&(this.widget.values=i)}async componentDidLoad(){const i=this._createParams(),t=await r(i);this.widget=t,this.widgetReady.emit({widget:this.widget}),s(this)}disconnectedCallback(){h(this)}render(){return this.expandable?e("arcgis-expand",{position:this.position,ref:i=>this.expandElem=i},e("div",{ref:i=>this.childElem=i})):e("div",{ref:i=>this.childElem=i})}_createParams(){const i={container:this.childElem,min:this.min,max:this.max};return this.average!==void 0&&(i.average=this.average),this.barCreatedFunction&&(i.barCreatedFunction=this.barCreatedFunction),this.bins!==void 0&&(i.bins=this.bins),this.dataLineCreatedFunction&&(i.dataLineCreatedFunction=this.dataLineCreatedFunction),this.dataLines!==void 0&&(i.dataLines=this.dataLines),this.excludedBarColor&&(i.excludedBarColor=this.excludedBarColor),this.includedBarColor&&(i.includedBarColor=this.includedBarColor),this.labelFormatFunction&&(i.labelFormatFunction=this.labelFormatFunction),this.precision!==void 0&&(i.precision=this.precision),this.rangeType&&(i.rangeType=this.rangeType),this.standardDeviation!==void 0&&(i.standardDeviation=this.standardDeviation),this.standardDeviationCount!==void 0&&(i.standardDeviationCount=this.standardDeviationCount),this.values!==void 0&&(i.values=this.values),i}get el(){return d(this)}static get watchers(){return{average:["averageWatcher"],barCreatedFunction:["barCreatedFunctionWatcher"],bins:["binsWatcher"],dataLineCreatedFunction:["dataLineCreatedFunctionWatcher"],dataLines:["dataLinesWatcher"],excludedBarColor:["excludedBarColorWatcher"],includedBarColor:["includedBarColorWatcher"],labelFormatFunction:["labelFormatFunctionWatcher"],max:["maxWatcher"],min:["minWatcher"],precision:["precisionWatcher"],rangeType:["rangeTypeWatcher"],standardDeviation:["standardDeviationWatcher"],standardDeviationCount:["standardDeviationCountWatcher"],values:["valuesWatcher"]}}};c.style=o;export{c as arcgis_histogram_range_slider};
