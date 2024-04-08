import{g as a,y as s,i as y,oc as w,od as C,oe as B,b4 as c,jS as _,cw as $,cx as D,of as x,ar as g,o9 as F,cz as v,og as M,es as T}from"./index-nBWeBKPv.js";import L from"./Histogram-BoKoK9kJ.js";let u=class extends w{constructor(e){super(e),this.average=null,this.bins=null,this.hasTimeData=!1,this.labelFormatFunction=r=>{if(this.hasTimeData)return C(r);const{max:d,min:t,precision:h}=this,o=d-t>10?2:h;return B(parseFloat(r.toFixed(o)))},this.rangeType="equal",this.standardDeviation=null}generateWhereClause(e){const{rangeType:r,state:d,values:t}=this;if(d!=="ready"||!(t!=null&&t.length)||e==null)return null;const h=t[0],o=t.length>1?t[t.length-1]:null;switch(r){case"equal":return`${e} = ${h}`;case"not-equal":return`${e} <> ${h}`;case"less-than":return`${e} < ${h}`;case"greater-than":return`${e} > ${h}`;case"at-least":return`${e} >= ${h}`;case"at-most":return`${e} <= ${h}`;case"between":return`${e} BETWEEN ${h} AND ${o}`;case"not-between":return`${e} NOT BETWEEN ${h} AND ${o}`;default:return null}}};a([s()],u.prototype,"average",void 0),a([s()],u.prototype,"bins",void 0),a([s()],u.prototype,"hasTimeData",void 0),a([s()],u.prototype,"labelFormatFunction",void 0),a([s()],u.prototype,"rangeType",void 0),a([s()],u.prototype,"standardDeviation",void 0),u=a([y("esri.widgets.HistogramRangeSlider.HistogramRangeSliderViewModel")],u);const f=u,m="esri-histogram-range-slider",p={base:m,widgetIcon:T.edit,sliderContainer:`${m}__slider-container`,histogramContainer:`${m}__histogram-container`,rangeTypePrefix:`${m}__range-type--`};let n=class extends D{constructor(e,r){super(e,r),this._barElements=[],this._histogram=null,this._slider=null,this.barCreatedFunction=null,this.dataLines=null,this.dataLineCreatedFunction=null,this.excludedBarColor=new c("#d7e5f0"),this.includedBarColor=new c("#599dd4"),this.messages=null,this.standardDeviationCount=1,this.viewModel=new f}initialize(){const{average:e,bins:r,hasTimeData:d,max:t,min:h,viewModel:o}=this;this._updateBarFill=this._updateBarFill.bind(this),this._histogram=new L({average:e,bins:r,barCreatedFunction:(i,l)=>{i===0&&(this._barElements=[]),this._barElements.push(l),this._updateBarFill(i,l),this.barCreatedFunction&&this.barCreatedFunction(i,l)},dataLines:this._getDataLines(),dataLineCreatedFunction:(i,l)=>{this.dataLineCreatedFunction&&this.dataLineCreatedFunction(i,l)},labelFormatFunction:this.labelFormatFunction,layout:"horizontal",max:t,min:h}),this._slider=new x({labelFormatFunction:this.labelFormatFunction,layout:"horizontal",visibleElements:{labels:!0,rangeLabels:!0},rangeLabelInputsEnabled:!d,viewModel:o}),this.addHandles([this._slider.on("max-change",i=>this.emit("max-change",i)),this._slider.on("min-change",i=>this.emit("min-change",i)),this._slider.on("segment-drag",i=>{this._updateBarFills(),this.emit("segment-drag",i)}),this._slider.on("thumb-change",i=>{this._updateBarFills(),this.emit("thumb-change",i)}),this._slider.on("thumb-drag",i=>{this._updateBarFills(),this.emit("thumb-drag",i)}),g(()=>this.bins,i=>{if(i&&this._histogram.bins){const l=this._histogram.bins.length-i.length;this._barElements.splice(-l,l)}else this._barElements=[];this._histogram.set({bins:i}),this._updateBarFills(),this.scheduleRender()}),g(()=>[this.max,this.min,this.rangeType,this.values],([i,l])=>{this._histogram.set({max:i,min:l}),this._updateBarFills(),this.scheduleRender()}),g(()=>[this.average,this.dataLines,this.standardDeviation,this.standardDeviationCount],([i])=>{this._histogram.set({average:i,dataLines:this._getDataLines()})}),g(()=>this.labelFormatFunction,i=>{this._histogram.set({labelFormatFunction:i})}),g(()=>this.hasTimeData,i=>{this._slider.set({rangeLabelInputsEnabled:!i})})])}get average(){return this.viewModel.average}set average(e){this.viewModel.average=e}get bins(){return this.viewModel.bins}set bins(e){this.viewModel.bins=e}get hasTimeData(){return this.viewModel.hasTimeData}set hasTimeData(e){this.viewModel.hasTimeData=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get labelFormatFunction(){return this.viewModel.labelFormatFunction}set labelFormatFunction(e){this.viewModel.labelFormatFunction=e}get max(){return this.viewModel.max}set max(e){this.viewModel.max=e}get min(){return this.viewModel.min}set min(e){this.viewModel.min=e}get precision(){return this.viewModel.precision}set precision(e){this.viewModel.precision=e}get rangeType(){return this.viewModel.rangeType}set rangeType(e){this.viewModel.rangeType=e}get standardDeviation(){return this.viewModel.standardDeviation}set standardDeviation(e){this.viewModel.standardDeviation=e}get values(){return this.viewModel.values}set values(e){this.viewModel.values=e}generateWhereClause(e){return this.viewModel.generateWhereClause(e)}render(){const{rangeType:e,viewModel:r,label:d}=this,t=this.classes(p.base,F.widget,`${p.rangeTypePrefix}${e}`,r.state==="disabled"?F.disabled:null);return v("div",{"aria-label":d,class:t},r.state==="disabled"?null:this._renderContent())}_renderContent(){return[this._renderHistogram(),this._renderSlider()]}_renderSlider(){return v("div",{class:p.sliderContainer,key:`${this.id}-slider-container`},this._slider.render())}_renderHistogram(){return v("div",{class:p.histogramContainer},this._histogram.render())}_getDataLines(){return[...this._getStandardDeviationDataLines(),...this.dataLines||[]]}_getStandardDeviationDataLines(){const{average:e,standardDeviation:r,standardDeviationCount:d}=this;return M(r,e,d).map(t=>({value:t}))}_updateBarFills(){this._barElements.forEach((e,r)=>this._updateBarFill(r,e))}_updateBarFill(e,r){var d;r.setAttribute("fill",((d=this._getFillForBar(e))==null?void 0:d.toHex())??"")}_getFillForBar(e){const{bins:r,rangeType:d,values:t}=this;if(e===-1||!(r!=null&&r.length)||!d||!(t!=null&&t.length))return null;const h=r[e];if(!h)return null;const{maxValue:o,minValue:i}=h,l=o-i,b=t[0]>i&&t[0]<o;switch(d){case"equal":case"not-equal":return this.includedBarColor;case"less-than":case"at-most":return b?this._getBlendedColor((t[0]-i)/l):o<=t[0]?this.includedBarColor:this.excludedBarColor;case"greater-than":case"at-least":return b?this._getBlendedColor(1-(t[0]-i)/l):i>=t[0]?this.includedBarColor:this.excludedBarColor;case"between":if(t.length===2)return t[0]>i&&t[0]<o?this._getBlendedColor(1-(t[0]-i)/l):t[1]>i&&t[1]<o?this._getBlendedColor((t[1]-i)/l):i>=t[0]&&o<=t[1]?this.includedBarColor:this.excludedBarColor;break;case"not-between":if(t.length===2)return t[0]>i&&t[0]<o?this._getBlendedColor((t[0]-i)/l):t[1]>i&&t[1]<o?this._getBlendedColor(1-(t[1]-i)/l):i>t[0]&&o<t[1]?this.excludedBarColor:this.includedBarColor}return this.includedBarColor}_getBlendedColor(e){return c.blendColors(this.excludedBarColor,this.includedBarColor,e)}};a([s()],n.prototype,"average",null),a([s()],n.prototype,"barCreatedFunction",void 0),a([s()],n.prototype,"bins",null),a([s()],n.prototype,"dataLines",void 0),a([s()],n.prototype,"dataLineCreatedFunction",void 0),a([s({type:c,json:{type:[_],write:!0}})],n.prototype,"excludedBarColor",void 0),a([s()],n.prototype,"hasTimeData",null),a([s({type:c,json:{type:[_],write:!0}})],n.prototype,"includedBarColor",void 0),a([s()],n.prototype,"label",null),a([s()],n.prototype,"labelFormatFunction",null),a([s()],n.prototype,"max",null),a([s(),$("esri/widgets/HistogramRangeSlider/t9n/HistogramRangeSlider")],n.prototype,"messages",void 0),a([s()],n.prototype,"min",null),a([s()],n.prototype,"precision",null),a([s()],n.prototype,"rangeType",null),a([s()],n.prototype,"standardDeviation",null),a([s()],n.prototype,"standardDeviationCount",void 0),a([s()],n.prototype,"values",null),a([s()],n.prototype,"viewModel",void 0),n=a([y("esri.widgets.HistogramRangeSlider")],n);const H=n;export{H as default};