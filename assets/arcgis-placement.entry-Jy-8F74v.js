import{T as i,V as n,X as t,Y as r}from"./index-D2dWKXoe.js";import{r as s,c}from"./component-utils-858627d8-DRqmNtSu.js";import{o as a}from"./disconnected-e221dd46-DyoRKtII.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */const o="arcgis-placement{}",l=class{constructor(e){i(this,e),this.placementReady=n(this,"placementReady",7),this.referenceElement=void 0,this.view=void 0,this.position="bottom-left"}referenceElementWatcher(e){s(this,e)}positionWatcher(e){e!==void 0&&this.view.ui.move(this.childElem,e)}async componentDidLoad(){this.placementReady.emit({ready:!0}),c(this)}disconnectedCallback(){a(this)}render(){return t("div",{ref:e=>this.childElem=e},t("slot",null))}get el(){return r(this)}static get watchers(){return{referenceElement:["referenceElementWatcher"],position:["positionWatcher"]}}};l.style=o;export{l as arcgis_placement};
