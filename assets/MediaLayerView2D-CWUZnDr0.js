import{kE as S,on as X,cR as Z,ar as A,P as M,qv as j,fG as ee,hq as te,aK as F,D as se,ow as re,fR as ie,m as U,h as z,qC as L,o as ne,l8 as ae,fS as oe,hR as le,ov as he,qz as ce,op as de,mf as me,oq as ue,or as pe,qA as fe,qB as ye,os as _e,fq as ve,qM as ge,aO as we,eG as W,kH as Re,kI as xe,qN as Me,ay as $e,bK as Ee,f6 as be,g as G,y as k,i as Ve,cC as Te,qO as qe}from"./index-nBWeBKPv.js";import{j as Ce,m as Q}from"./MediaElementView-DTBqhMbY.js";import{E as Se}from"./Container-CTQo6kEb.js";import{a as Ae,h as Ge}from"./WGLContainer-CosurzxA.js";import"./vec4f32-CjrfB-0a.js";import"./LabelMetric-DofoYXTH.js";import"./MagnifierPrograms-BmXBEaS4.js";import"./pbf-9dqbeZu4.js";import"./FeatureCommandQueue-sA8oVCV4.js";import"./GraphicsView2D-0TEF5AKb.js";import{f as Oe}from"./utils-A_Njewuy.js";import{m as Pe}from"./LayerView2D-BloiS6d1.js";import{u as De}from"./LayerView-Dpo8VUNV.js";import"./normalizeUtilsSync-Dv3yGzcd.js";import"./highlightReasons-BreL7upH.js";import"./Tile-CQ6TlwHd.js";import"./quickselect-BhLHWy4r.js";import"./WGLBrushVTLSymbol-CgE_QQ-Q.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-B9wT6rfn.js";import"./CircularArray-DfLrgW_-.js";import"./AttributeStore-DOjVp8d7.js";import"./UpdateTracking2D-CD1onhf0.js";import"./TurboLine-CoGYQY3E.js";import"./constants-D5zmR9t2.js";import"./centroid-DdLmOD72.js";import"./timeSupport-rQ_0tTrz.js";import"./json-Wa8cmqdu.js";import"./heatmapTextureUtils-CDx4jbqS.js";import"./ClipRect-CL_RLv1L.js";const y=oe(),He={none:S.None,loop:S.Loop,oscillate:S.Oscillate};function Ie(s){return s?{...s,playAnimation:s.playing,repeatType:s.repeatType?He[s.repeatType]:void 0}:{}}class je extends X{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=Z(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(A(()=>this.elementView.element.opacity,t=>this.opacity=t,M),A(()=>[this.elementView.coords],()=>{this.requestRender()},M),A(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{var t;(t=this._playHandle)==null||t.remove(),this.texture=j(this.texture),this.requestRender()},M),ee(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(te(t.content,"play",()=>this.requestRender()))},M)),e.element.load().catch(t=>{F.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new se("element-load-error","Element cannot be displayed",{element:e,error:t}))})}getMesh(e){throw new Error("Method not implemented.")}destroy(){var e;(e=this._playHandle)==null||e.remove(),this._handles.forEach(t=>t.remove()),this.texture=j(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(r!=null){const i=r instanceof HTMLImageElement,n=r instanceof HTMLVideoElement,h=i?r.naturalWidth:n?r.videoWidth:r.width,a=i?r.naturalHeight:n?r.videoHeight:r.height;if(this._updatePerspectiveTransform(h,a),this.texture)n&&!r.paused&&(this.texture.setData(r),this.requestRender(),this.texture.generateMipmap());else{const c=new re;if(c.wrapMode=ie.CLAMP_TO_EDGE,c.preMultiplyAlpha=!0,c.width=h,c.height=a,"getFrame"in r){const l=o=>{this.texture?this.texture.setData(o):this.texture=new U(t,c,o),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=Oe(r,Ie(this.elementView.element.animationOptions),null,l))}else this.texture=new U(t,c,r);this.texture.generateMipmap(),n&&!r.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(r==null)return;const[i,n,h,a]=r.rings[0],c=this._vertices,{x:l,y:o}=e,u=t!==0;u?c.set([n[0]-l,n[1]-o,i[0]-l,i[1]-o,h[0]-l,h[1]-o,a[0]-l,a[1]-o,a[0]-l,a[1]-o,n[0]+t-l,n[1]-o,n[0]+t-l,n[1]-o,i[0]+t-l,i[1]-o,h[0]+t-l,h[1]-o,a[0]+t-l,a[1]-o]):c.set([n[0]-l,n[1]-o,i[0]-l,i[1]-o,h[0]-l,h[1]-o,a[0]-l,a[1]-o]),this.isWrapAround=u}getVAO(e,t,r){if(this.elementView.coords==null)return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=z.createVertex(e,L.DYNAMIC_DRAW,i);const n=z.createVertex(e,L.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new ne(e,r,t,{geometry:this._geometryVbo,tex:n})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;Ce(y,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),ae(this.perspectiveTransform,y[6]/y[8]*e,y[7]/y[8]*t)}}class Ue extends Ae{constructor(){super(...arguments),this._localOrigin=le(0,0),this._viewStateId=-1,this._dvsMat3=he()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Ge.overlay],target:()=>this.children,drawPhase:Se.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:i,pixelRatio:n,resolution:h,rotation:a,viewpoint:c,displayMat3:l}=t;if(this._viewStateId===r)return;const o=Math.PI/180*a,u=n*i[0],f=n*i[1],{x:$,y:g}=c.targetGeometry,E=ce($,t.spatialReference);this._localOrigin.x=E,this._localOrigin.y=g;const b=h*u,w=h*f,d=de(this._dvsMat3);me(d,d,l),ue(d,d,pe(u/2,f/2)),fe(d,d,ye(u/b,-f/w,1)),_e(d,d,-o),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:i,spatialReference:n,worldScreenWidth:h,size:a,viewpoint:c}=r,l=this._localOrigin;let o=0;const u=ve(n);if(u&&n.isWrappable){const f=a[0],$=a[1],g=180/Math.PI*i,E=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g)),w=Math.round(f*E+$*b),[d,V]=u.valid,p=ge(n),{x:O,y:N}=c.targetGeometry,K=[O,N],T=[0,0];r.toScreen(T,K);const R=[0,0];let q;q=w>h?.5*h:.5*w;const P=Math.floor((O+.5*p)/p),Y=d+P*p,J=V+P*p,C=[T[0]+q,0];r.toMap(R,C),R[0]>J&&(o=p),C[0]=T[0]-q,r.toMap(R,C),R[0]<Y&&(o=-p);for(const x of t){const D=x.elementView.bounds;if(D==null)continue;const[H,,I]=D;H<d&&I>d?x.updateDrawCoords(l,p):I>V&&H<V?x.updateDrawCoords(l,-p):x.updateDrawCoords(l,o)}}else for(const f of t)f.updateDrawCoords(l,o)}}let v=class extends Pe(De){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new we}attach(){this.addAttachHandles([W(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(s=>this._updateTile(s)),this.requestUpdate()}),W(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new Ue,this.container.addChild(this._overlayContainer),this._fetchQueue=new Re({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new xe({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var s;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(s=this._debugGraphicsView)==null||s.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){var e;this._tileStrategy.update(s),(e=this._debugGraphicsView)==null||e.update(s)}async hitTest(s,e){const t=[],r=s.normalize(),i=[r.x,r.y];for(const{projectedElement:{normalizedCoords:n,element:h}}of this._elementReferences.values())n!=null&&Me(n.rings,i)&&t.push({type:"media",element:h,layer:this.layer,mapPoint:s,sourcePoint:h.toSource(s)});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(s=>this._updateTile(s))}_acquireTile(s){const e=new ze(s.clone());return this._updateTile(e),e}_updateTile(s){this._updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,r]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,r),this.requestUpdate()},e=>{$e(e)||F.getLogger(this).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(m,s,!0);const r=new Ee({xmin:m[0],ymin:m[1],xmax:m[2],ymax:m[3],spatialReference:this.view.spatialReference});return t.queryElements(r,e)}_referenceElements(s,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(s,t)}_referenceElement(s,e){be(this._elementReferences,e.uid,()=>{const t=new Q({element:e,spatialReference:this.view.spatialReference}),r=new je(t);return this._overlayContainer.addChild(r),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:r,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){var r;const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(r=this._debugGraphicsView)==null||r.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){var r;let e=this._elementReferences.get(s.uid);if(e){const i=e.projectedElement.normalizedCoords;if(i==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void((r=this._debugGraphicsView)==null?void 0:r.graphics.remove(e.debugGraphic));const n=[],h=[];for(const a of this._tileStrategy.tiles){const c=B(this.view.featuresTilingScheme,a,i);e.tiles.has(a)?c||h.push(a):c&&n.push(a)}for(const a of n)this._referenceElement(a,s);for(const a of h)this._dereferenceElement(a,s);return e=this._elementReferences.get(s.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new Q({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const i of this._tileStrategy.tiles)B(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,s)}};G([k()],v.prototype,"layer",void 0),G([k({readOnly:!0})],v.prototype,"elements",void 0),v=G([Ve("esri.views.2d.layers.MediaLayerView2D")],v);const m=Te(),_={xmin:0,ymin:0,xmax:0,ymax:0};function B(s,e,t){return s.getTileBounds(m,e.key,!0),_.xmin=m[0],_.ymin=m[1],_.xmax=m[2],_.ymax=m[3],qe(_,t)}class ze{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const i of e)r.has(i)?r.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const vt=v;export{vt as default};
