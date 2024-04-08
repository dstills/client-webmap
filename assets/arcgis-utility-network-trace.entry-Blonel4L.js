import{aA as s,aB as t,aC as r,aD as a}from"./index-nBWeBKPv.js";import{a0 as h,i as l}from"./index-f6afcedb-DJUkfEVF.js";import{r as d,c as o,a as c}from"./component-utils-858627d8-DRqmNtSu.js";import{o as n}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const w="",g=class{constructor(e){s(this,e),this.arcgisUtilityNetworkTraceReady=t(this,"arcgisUtilityNetworkTraceReady",7),this.utilityNetworkTraceAddFlag=t(this,"utilityNetworkTraceAddFlag",7),this.utilityNetworkTraceAddFlagComplete=t(this,"utilityNetworkTraceAddFlagComplete",7),this.utilityNetworkTraceAddFlagError=t(this,"utilityNetworkTraceAddFlagError",7),this.utilityNetworkTraceAddResultArea=t(this,"utilityNetworkTraceAddResultArea",7),this.utilityNetworkTraceRemoveResultArea=t(this,"utilityNetworkTraceRemoveResultArea",7),this._watchHandles=[],this.referenceElement=void 0,this.enableResultArea=!1,this.defaultGraphicColor={color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#FFFF00"},this.disabled=!1,this.flags=[],this.gdbVersion="sde.DEFAULT",this.inputSettings=[],this.resultAreaProperties=void 0,this.selectedTraces=[],this.selectOnComplete=!0,this.showGraphicsOnComplete=!0,this.showSelectionAttributes=!0,this.position="bottom-left",this.view=void 0,this.widget=void 0}referenceElementWatcher(e){d(this,e)}enableResultAreaWatcher(e){this.widget&&(this.widget.enableResultArea=e)}defaultGraphicColorWatcher(e){this.widget&&(this.widget.defaultGraphicColor=e)}disabledWatcher(e,i){this.widget&&e!==i&&(this.widget.disabled=e)}flagsWatcher(e){this.widget&&(this.widget.flags=e)}gdbVersionWatcher(e){this.widget&&(this.widget.gdbVersion=e)}inputSettingsWatcher(e){this.widget&&(this.widget.inputSettings=e)}resultAreaPropertiesWatcher(e){this.widget&&(this.widget.resultAreaProperties=e)}selectedTracesWatcher(e){this.widget&&(this.widget.selectedTraces=e)}selectOnCompleteWatcher(e){e!==void 0&&this.widget&&(this.widget.selectOnComplete=e)}showGraphicsOnCompleteWatcher(e){e!==void 0&&this.widget&&(this.widget.showGraphicsOnComplete=e)}showSelectionAttributesWatcher(e){e!==void 0&&this.widget&&(this.widget.showSelectionAttributes=e)}positionWatcher(e){e!==void 0&&this.widget&&this.view.ui.move(this.childElem,e)}viewWatcher(e){e!==void 0&&this.widget&&(this.widget.view=e)}async checkCanTrace(){var e;await((e=this.widget)==null?void 0:e.checkCanTrace())}async confirmReset(){var e;(e=this.widget)==null||e.confirmReset()}async componentDidLoad(){const e=this._createParams(),i=await h(e);this.widget=i,await this._addWatchers(),this._proxyEvents(),this._addContainer(),this.arcgisUtilityNetworkTraceReady.emit(),o(this)}disconnectedCallback(){n(this)}render(){return r("div",{ref:e=>this.childElem=e})}_addContainer(){this.widget.container=this.childElem}async _addWatchers(){const{watch:e}=await l();c(this,e(()=>this.widget.disabled,i=>this.disabled=i))}_createParams(){const e={};return this.defaultGraphicColor&&(e.defaultGraphicColor=this.defaultGraphicColor),this.enableResultArea!==void 0&&(e.enableResultArea=this.enableResultArea),this.flags&&(e.flags=this.flags),this.gdbVersion&&(e.gdbVersion=this.gdbVersion),this.inputSettings&&(e.inputSettings=this.inputSettings),this.resultAreaProperties&&(e.resultAreaProperties=this.resultAreaProperties),this.selectedTraces&&(e.selectedTraces=this.selectedTraces),this.selectOnComplete!==void 0&&(e.selectOnComplete=this.selectOnComplete),this.showGraphicsOnComplete!==void 0&&(e.showGraphicsOnComplete=this.showGraphicsOnComplete),this.showSelectionAttributes!==void 0&&(e.showSelectionAttributes=this.showSelectionAttributes),this.view&&(e.view=this.view),e}_proxyEvents(){this.widget.on("add-flag",e=>this.utilityNetworkTraceAddFlag.emit(e)),this.widget.on("add-flag-complete",e=>this.utilityNetworkTraceAddFlagComplete.emit(e)),this.widget.on("add-flag-error",e=>this.utilityNetworkTraceAddFlagError.emit(e)),this.widget.on("add-result-area",e=>this.utilityNetworkTraceAddResultArea.emit(e)),this.widget.on("remove-result-area",e=>this.utilityNetworkTraceRemoveResultArea.emit(e))}get el(){return a(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],enableResultArea:["enableResultAreaWatcher"],defaultGraphicColor:["defaultGraphicColorWatcher"],disabled:["disabledWatcher"],flags:["flagsWatcher"],gdbVersion:["gdbVersionWatcher"],inputSettings:["inputSettingsWatcher"],resultAreaProperties:["resultAreaPropertiesWatcher"],selectedTraces:["selectedTracesWatcher"],selectOnComplete:["selectOnCompleteWatcher"],showGraphicsOnComplete:["showGraphicsOnCompleteWatcher"],showSelectionAttributes:["showSelectionAttributesWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}};g.style=w;export{g as arcgis_utility_network_trace};
