import{E as i,J as t,cM as h,bs as l,aT as d}from"./index-BS4ejk0L.js";const o=a=>{let e=class extends a{initialize(){this.addHandles(h(()=>this.layer,"refresh",r=>{this.doRefresh(r.dataChanged).catch(s=>{l(s)||d.getLogger(this).error(s)})}),"RefreshableLayerView")}};return e=i([t("esri.layers.mixins.RefreshableLayerView")],e),e};export{o as i};