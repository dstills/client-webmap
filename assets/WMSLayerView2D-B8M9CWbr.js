import{bq as S,aU as q,br as R,M as U,aL as $,E as h,F as f,J as E}from"./index-D2dWKXoe.js";import{a as w}from"./BitmapContainer-BVMu1fo1.js";import{m as I}from"./LayerView2D-BE5PI0CI.js";import{v as F}from"./ExportStrategy-Cc62cxzc.js";import{u as H}from"./LayerView-CdvlOxD9.js";import{i as L}from"./RefreshableLayerView-C_CRn-mm.js";import{m as W}from"./WMSLayerView-D4Aa0_Bm.js";import"./WGLContainer-D37HpRRR.js";import"./LabelMetric-DNMaITZH.js";import"./WGLBrushVTLSymbol-fbZdJNvO.js";import"./vec4f32-CjrfB-0a.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-DCHoF5zU.js";import"./Container-BlNhIyyD.js";import"./highlightReasons-CtJXH9dW.js";import"./ClipRect-DnqRnAoq.js";import"./Bitmap-CQcrclLc.js";import"./ExportWMSImageParameters-K5qpIPlF.js";let s=class extends W(L(I(H))){constructor(){super(...arguments),this.bitmapContainer=new w}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch(e=>{S(e)||q.getLogger(this).error(e)})}attach(){const{layer:t}=this,{imageMaxHeight:e,imageMaxWidth:r}=t;this.bitmapContainer=new w,this.container.addChild(this.bitmapContainer),this.strategy=new F({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=U(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e,bitmapContainer:r}=this,{x:a,y:o}=t,{spatialReference:b}=e;let i,n=0,d=0;if(r.children.some(C=>{const{width:c,height:g,resolution:y,x:m,y:p}=C,l=m+y*c,x=p-y*g;return a>=m&&a<=l&&o<=p&&o>=x&&(i=new $({xmin:m,ymin:x,xmax:l,ymax:p,spatialReference:b}),n=c,d=g,!0)}),!i)return null;const u=i.width/n,v=Math.round((a-i.xmin)/u),M=Math.round((i.ymax-o)/u);return{extent:i,width:n,height:d,x:v,y:M}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,a){return this.layer.fetchImageBitmap(t,e,r,{timeExtent:this.timeExtent,...a})}};h([f()],s.prototype,"strategy",void 0),h([f()],s.prototype,"updating",void 0),s=h([E("esri.views.2d.layers.WMSLayerView2D")],s);const _=s;export{_ as default};