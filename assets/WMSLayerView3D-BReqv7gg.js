import{b as h,aL as m,E as d,J as c}from"./index-D2dWKXoe.js";import{N as l}from"./DynamicLayerView3D-DKE7IoVh.js";import{m as u}from"./WMSLayerView-D4Aa0_Bm.js";import"./LayerView3D-BWp2guyo.js";import"./projectExtentUtils-D6AMB9tJ.js";import"./ImageMaterial.glsl-CNIN8YCo.js";import"./LayerView-CdvlOxD9.js";import"./RefreshableLayerView-C_CRn-mm.js";import"./ExportWMSImageParameters-K5qpIPlF.js";let r=class extends u(l){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new h("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add(()=>{var e;return(e=this.exportImageParameters)==null?void 0:e.version},()=>{this._updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(e){const s=this.findExtentInfoAt(e),t=s.extent,i=new m(t[0],t[1],t[2],t[3],this._spatialReference),a=s.imageSize,n=a.width,p=a.height,o=i.width/n;return{extent:i,width:n,height:p,x:Math.round((e.x-i.xmin)/o),y:Math.round((i.ymax-e.y)/o)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};r=d([c("esri.views.3d.layers.WMSLayerView3D")],r);const S=r;export{S as default};