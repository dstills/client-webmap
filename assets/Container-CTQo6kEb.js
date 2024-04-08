import{ow as W,fR as U,m as F,vF as $,aK as V,pQ as q,pS as A,gi as B,vG as R,bC as C,vw as I,bz as K,on as X,vH as Y,ov as k}from"./index-nBWeBKPv.js";import{l as Z,c as L}from"./highlightReasons-BreL7upH.js";const z=1,at=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],dt=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],_=256,g={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0},y=()=>V.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function Q(e,t){t.fillColor[0]=e.color.r/255,t.fillColor[1]=e.color.g/255,t.fillColor[2]=e.color.b/255,t.fillColor[3]=e.color.a,e.haloColor?(t.outlineColor[0]=e.haloColor.r/255,t.outlineColor[1]=e.haloColor.g/255,t.outlineColor[2]=e.haloColor.b/255,t.outlineColor[3]=e.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=e.fillOpacity,t.outlineColor[3]*=e.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=g.outlineWidth,t.outerHaloWidth=g.outerHaloWidth,t.innerHaloWidth=g.innerHaloWidth,t.outlinePosition=g.outlinePosition}const J=[0,0,0,0];class N{constructor(){this.type="single",this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:g.outlinePosition,outlineWidth:g.outlineWidth,innerHaloWidth:g.innerHaloWidth,outerHaloWidth:g.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*_),this._minMaxDistance=[0,0]}setHighlightOptions(t){const i=this._convertedHighlightOptions;Q(t,i);const n=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,s=i.outlinePosition-i.outlineWidth/2,d=i.outlinePosition+i.outlineWidth/2,a=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,l=Math.sqrt(Math.PI/2)*z,r=Math.abs(n)>l?Math.round(10*(Math.abs(n)-l))/10:0,u=Math.abs(a)>l?Math.round(10*(Math.abs(a)-l))/10:0;let c;r&&!u?y().error("The outer rim of the highlight is "+r+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!r&&u?y().error("The inner rim of the highlight is "+u+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):r&&u&&y().error("The highlight is "+Math.max(r,u)+"px away from the edge of the feature; consider reducing some width values.");const o=[void 0,void 0,void 0,void 0];function p(h,m,f){o[0]=(1-f)*h[0]+f*m[0],o[1]=(1-f)*h[1]+f*m[1],o[2]=(1-f)*h[2]+f*m[2],o[3]=(1-f)*h[3]+f*m[3]}const{_texelData:E}=this;for(let h=0;h<_;++h)c=n+h/(_-1)*(a-n),c<n?(o[0]=0,o[1]=0,o[2]=0,o[3]=0):c<s?p(J,i.outlineColor,(c-n)/(s-n)):c<d?[o[0],o[1],o[2],o[3]]=i.outlineColor:c<a?p(i.outlineColor,i.fillColor,(c-d)/(a-d)):[o[0],o[1],o[2],o[3]]=i.fillColor,E[4*h]=255*o[0],E[4*h+1]=255*o[1],E[4*h+2]=255*o[2],E[4*h+3]=255*o[3];this._minMaxDistance[0]=n,this._minMaxDistance[1]=a,this._shadeTexChanged=!0}applyHighlightOptions(t,i){if(!this._shadeTex){const n=new W;n.wrapMode=U.CLAMP_TO_EDGE,n.width=_,n.height=1,this._shadeTex=new F(t,n)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,_,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,$),i.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){var t;(t=this._shadeTex)==null||t.dispose(),this._shadeTex=null}getReasonsWithGradients(){return[{activeReasons:(1<<Z.length)-1,activeGradient:this}]}}class j{constructor(){this.type="multi";const t={};for(const i in L)t[i]=new N;this.gradients=t}setHighlightOptions(t){for(const i in L){const n=L[i](t);this.gradients[i].setHighlightOptions(n)}}applyHighlightOptions(t,i,n){this.gradients[n].applyHighlightOptions(t,i)}destroy(){for(const t in L)this.gradients[t].destroy()}getReasonsWithGradients(){let t=1;const i=[];for(const n in this.gradients){const s=this.gradients[n];i.push({activeReasons:t,activeGradient:s}),t<<=1}return i}}var M,S,w,v,H,b,O,P,G;(function(e){e[e.FILL=0]="FILL",e[e.LINE=1]="LINE",e[e.MARKER=2]="MARKER",e[e.TEXT=3]="TEXT",e[e.LABEL=4]="LABEL"})(M||(M={})),function(e){e[e.NONE=0]="NONE",e[e.MAP=1]="MAP",e[e.LABEL=2]="LABEL",e[e.LABEL_ALPHA=4]="LABEL_ALPHA",e[e.HITTEST=8]="HITTEST",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.CLIP=32]="CLIP",e[e.DEBUG=64]="DEBUG",e[e.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(S||(S={})),function(e){e[e.SIZE=0]="SIZE",e[e.COLOR=1]="COLOR",e[e.OPACITY=2]="OPACITY",e[e.ROTATION=3]="ROTATION"}(w||(w={})),function(e){e[e.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",e[e.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",e[e.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",e[e.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(v||(v={})),function(e){e[e.SPRITE=0]="SPRITE",e[e.GLYPH=1]="GLYPH"}(H||(H={})),function(e){e[e.DEFAULT=0]="DEFAULT",e[e.SIMPLE=1]="SIMPLE",e[e.DOT_DENSITY=2]="DOT_DENSITY",e[e.OUTLINE_FILL=3]="OUTLINE_FILL",e[e.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",e[e.HEATMAP=5]="HEATMAP",e[e.PIE_CHART=6]="PIE_CHART"}(b||(b={})),function(e){e[e.All=0]="All",e[e.Highlight=1]="Highlight",e[e.InsideEffect=2]="InsideEffect",e[e.OutsideEffect=3]="OutsideEffect"}(O||(O={})),function(e){e[e.BATCHING=0]="BATCHING",e[e.STRICT_ORDER=1]="STRICT_ORDER",e[e.STRICT_MARKERS_AND_TEXT=2]="STRICT_MARKERS_AND_TEXT"}(P||(P={})),function(e){e[e.FILL=0]="FILL",e[e.LINE=1]="LINE",e[e.MARKER=2]="MARKER",e[e.TEXT=3]="TEXT"}(G||(G={}));const T={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:{write:!1,test:{ref:e=>e.stencilRef,compare:q.EQUAL,mask:255,op:{fail:A.KEEP,zFail:A.KEEP,zPass:A.REPLACE}}}},tt={color:{write:[!0,!0,!0,!0],blendMode:"additive"},depth:!1,stencil:!1},et={...T,color:{write:[!0,!0,!0,!0],blendMode:"delete"}};function it({pixelRatio:e,state:t,displayLevel:i,requiredLevel:n},s){const d=1/2**(i-s.key.level),a=1/2**(n-s.key.level);return{displayMat3:Array.from(t.displayMat3),displayViewMat3:Array.from(t.displayViewMat3),displayViewScreenMat3:Array.from(s.transforms.displayViewScreenMat3),viewMat3:Array.from(t.viewMat3),tileMat3:Array.from(s.transforms.tileMat3),displayZoomFactor:d,requiredZoomFactor:a,tileOffset:[s.x,s.y],currentScale:t.scale,currentZoom:i,metersPerSRUnit:B(t.spatialReference),rotation:t.rotation,pixelRatio:e}}function x(e){var t;return((t=e.passOptions)==null?void 0:t.type)==="highlight"}function D(e){var t;return((t=e.passOptions)==null?void 0:t.type)==="hittest"}function nt(e){if(!D(e))return null;const{position:t}=e.passOptions,i=e.pixelRatio,n=C("esri-mobile");return{position:t,distance:C(n?"hittest-2d-mobile-tolerance":"hittest-2d-desktop-tolerance")*i,smallSymbolDistance:C(n?"hittest-2d-mobile-tolerance":"hittest-2d-small-symbol-tolerance")*i,smallSymbolSizeThreshold:C("hittest-2d-small-symbol-tolerance-threshold")}}function st(e){if(!x(e))return null;const{activeReasons:t,highlightAll:i}=e.passOptions;return{activeReasons:t,highlightAll:i?1:0}}function ct(e,t,i){const n={};for(const s in i)i[s]instanceof Function?n[s]=i[s](e,t):n[s]=i[s];return n}function ut(e,t){const{attributeView:i,context:n}=e;return{storage:i.getUniforms(n),view:it(e,t),hittestRequest:nt(e),highlight:st(e)}}function ft(e){return{inside:e.selection===O.InsideEffect,outside:e.selection===O.OutsideEffect}}function ot(e){return D(e)?tt:x(e)&&e.passOptions.stepType==="clear"?et:T}function gt(e){const{row:t,col:i}=e.key,n=i*I,s=t*I;return{tileOffsetFromLocalOrigin:[n%R,s%R],maxIntsToLocalOrigin:[Math.floor(n/R),Math.floor(s/R)]}}new K({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function pt(e){const{bandCount:t,attributeTable:i,colormap:n,pixelType:s}=e.raster.rasterInfo;return t===1&&(i!=null||n!=null||s==="u8"||s==="s8")}function rt(e,t){return(e==null?void 0:e.type)==="single"&&t.multiHighlightEnabled&&(e.destroy(),e=null),(e==null?void 0:e.type)!=="multi"||t.multiHighlightEnabled||(e.destroy(),e=null),e||(e=t.multiHighlightEnabled?new j:new N),e.setHighlightOptions(t),e}function _t(e,t,i){const{painter:n,highlightGradient:s}=e,{highlight:d}=n.effects;if(!s)return;const a=e.passOptions,l=s.getReasonsWithGradients();for(let r=0;r<l.length;r++){const u={...e,passOptions:{type:"highlight",activeGradient:l[r].activeGradient,activeReasons:l[r].activeReasons,stepType:"burn",highlightAll:t}};if(d.bind(u),i(u),r<l.length-1){let o=0;for(let p=r+1;p<l.length;p++)o|=l[p].activeReasons;i({...e,passOptions:{type:"highlight",activeGradient:l[r].activeGradient,activeReasons:o,stepType:"clear",highlightAll:t}})}const c={...e,passOptions:{type:"highlight",activeGradient:l[r].activeGradient,activeReasons:l[r].activeReasons,stepType:"draw",highlightAll:t}};n.setPipelineState(ot(e)),n.updatePipelineState(e.context),d.draw(c),d.unbind()}e.passOptions=a}class Et extends X{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get children(){return this._children}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(i=>i.clips=t)}get computedEffects(){var t;return((t=this._effectView)==null?void 0:t.effects)??null}get effect(){var t;return((t=this._effectView)==null?void 0:t.effect)??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new Y),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient=rt(this._highlightGradient,t),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(t=>t.hasHighlight)}get hasLabels(){return this.children.some(t=>t.hasLabels)}get requiresDedicatedFBO(){return this.children.some(t=>"blendMode"in t&&t.blendMode&&t.blendMode!=="normal")}updateTransitionProperties(t,i){super.updateTransitionProperties(t,i),this._effectView&&(this._effectView.transitionStep(t,i),this._effectView.transitioning&&this.requestRender())}doRender(t){var s;const i=this.createRenderParams(t),{painter:n}=i;n.beforeRenderLayer(i,(s=this._clips)!=null&&s.length?255:0,this.computedOpacity),this.renderChildren(i),n.afterRenderLayer(i,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,i=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const n=t.parent;return n&&n!==this&&n.removeChild(t),i>=this.children.length?this.children.push(t):this.children.splice(i,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const i=this.children.splice(t,1)[0];return this._childrenSet.delete(i),this!==this.stage&&(i.clips=null),i.stage=null,i.parent=null,i}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const i of this.children)i.beforeRender(t)}afterRender(t){super.afterRender(t);for(const i of this.children)i.afterRender(t)}_createTransforms(){return{displayViewScreenMat3:k()}}onAttach(){super.onAttach();const t=this.stage;for(const i of this.children)i.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const i of this.children)i.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}export{H as A,S as E,w as L,ot as M,P as N,O as R,G as S,_t as a,ut as b,it as c,ct as d,x as f,Et as h,dt as i,D as m,z as o,pt as r,at as t,gt as w,ft as y};
