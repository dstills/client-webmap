import{g as r,y as o,fd as x,i as f,u as g,D as n,ax as d}from"./index-BhDz4nJ7.js";import{a as P}from"./ExportWMSImageParameters-Co8WU799.js";const F=u=>{let e=class extends u{initialize(){this.exportImageParameters=new P({layer:this.layer})}destroy(){this.exportImageParameters=g(this.exportImageParameters)}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(t,y){const{layer:a}=this;if(!t)throw new n("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:h}=a;if(!h)throw new n("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:h});const m=this.createFetchPopupFeaturesQuery(t);if(!m)return[];const{extent:s,width:i,height:p,x:c,y:l}=m;if(!(s&&i&&p))throw new n("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:i,height:p});const w=await a.fetchFeatureInfo(s,i,p,c,l);return d(y),w}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o(x)],e.prototype,"timeExtent",void 0),e=r([f("esri.layers.mixins.WMSLayerView")],e),e};export{F as m};