import{D as h,bK as m,g as d,i as c}from"./index-BhDz4nJ7.js";import{N as l}from"./DynamicLayerView3D-dt6cStVW.js";import{m as u}from"./WMSLayerView-BAX3PN2A.js";import"./LayerView3D-BKIbGugV.js";import"./projectExtentUtils-HbzO5SHS.js";import"./ImageMaterial.glsl-gnKJ78W6.js";import"./LayerView-C77uL6vR.js";import"./RefreshableLayerView-CWwfo6pL.js";import"./ExportWMSImageParameters-Co8WU799.js";let r=class extends u(l){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new h("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add(()=>{var e;return(e=this.exportImageParameters)==null?void 0:e.version},()=>{this._updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(e){const s=this.findExtentInfoAt(e),t=s.extent,i=new m(t[0],t[1],t[2],t[3],this._spatialReference),a=s.imageSize,n=a.width,p=a.height,o=i.width/n;return{extent:i,width:n,height:p,x:Math.round((e.x-i.xmin)/o),y:Math.round((i.ymax-e.y)/o)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};r=d([c("esri.views.3d.layers.WMSLayerView3D")],r);const S=r;export{S as default};