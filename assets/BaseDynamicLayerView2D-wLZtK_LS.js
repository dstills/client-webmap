import{ay as o,aK as p,g as a,y as r,i as m}from"./index-BhDz4nJ7.js";import{a as h}from"./BitmapContainer-BPkjrv5z.js";import{m as n}from"./LayerView2D-CnHSL2ze.js";import{v as d}from"./ExportStrategy-DtU0V7cN.js";import{u}from"./LayerView-C77uL6vR.js";import{i as c}from"./RefreshableLayerView-CWwfo6pL.js";import"./WGLContainer-BH0kviEM.js";import"./LabelMetric-CeMeOwg_.js";import"./WGLBrushVTLSymbol-DtHTPLWt.js";import"./vec4f32-CjrfB-0a.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-COAJiysE.js";import"./Container-BXVidpqz.js";import"./highlightReasons-oPQR33ZA.js";import"./Tile-Bw3qZqtY.js";import"./quickselect-C4F3mpYw.js";import"./ClipRect-IkMaETau.js";import"./Bitmap-BIlekH8j.js";let t=class extends c(n(u)){update(e){this._strategy.update(e).catch(i=>{o(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new d({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,s){return this.layer.fetchImageBitmap(e,i,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};a([r()],t.prototype,"_strategy",void 0),a([r()],t.prototype,"updating",void 0),t=a([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const A=t;export{A as default};