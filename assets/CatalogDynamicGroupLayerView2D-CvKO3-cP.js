import{bc as u,aE as c,c5 as m,br as y,aU as f,cX as g,E as w,J as V}from"./index-D2dWKXoe.js";import{m as v}from"./LayerView2D-BE5PI0CI.js";import{u as C}from"./LayerView-CdvlOxD9.js";import"./Container-BlNhIyyD.js";import"./highlightReasons-CtJXH9dW.js";import"./ClipRect-DnqRnAoq.js";const d=Symbol();let l=class extends v(C){constructor(){super(...arguments),this.layerViews=new u,this._debouncedUpdate=c(async()=>{const{layer:e,parent:{footprintLayerView:a}}=this;let s=[];if(a){const n=this._createQuery(),{features:o}=await a.queryFeatures(n);this.suspended||(s=o.map(i=>e.acquireLayer(i)))}this.removeHandles(d),this.addHandles(s,d)})}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0}),m(()=>{var e;return((e=this.parent.footprintLayerView)==null?void 0:e.dataUpdating)===!1},()=>this._updateLayers()),y(()=>{var e;return[this.layer.maximumVisibleSublayers,this.suspended,(e=this.parent.footprintLayerView)==null?void 0:e.filter]},()=>this._updateLayers())])}detach(){this.container.removeAllChildren(),this.removeHandles(d)}update(e){}moveStart(){}viewChange(){}moveEnd(){}isUpdating(){return this.layerViews.some(e=>e.updating)}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,a)=>this.container.addChildAt(e.container,a))}_updateLayers(){this.suspended?this.removeHandles(d):this._updatingHandles.addPromise(this._debouncedUpdate().catch(e=>{f.getLogger(this).error(e)}))}_createQuery(){const{parent:{footprintLayerView:e},layer:{maximumVisibleSublayers:a,parent:{itemTypeField:s,itemSourceField:n,objectIdField:o,orderBy:i}}}=this,p=`${s} <> 'Scene Service'`,t=e.createQuery();t.returnGeometry=!1,t.num=a,t.outFields=[o,n],t.where=g(t.where,p);const r=i==null?void 0:i.find(h=>h.field&&!h.valueExpression);return r!=null&&r.field&&(t.orderByFields=[`${r.field} ${r.order==="descending"?"DESC":"ASC"}`]),t}};l=w([V("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],l);const E=l;export{E as default};