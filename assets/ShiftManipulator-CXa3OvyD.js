function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SlicePlaneMaterial.glsl-URHZJ5MQ.js","assets/index-D2dWKXoe.js","assets/index-DvE0Cji0.css","assets/AnalysisView3D-aRBWBZ1U.js","assets/SlicePlane-Cxro-rLi.js","assets/persistable-D_p9bU_Z.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/resourceExtension-DOAEwW0y.js","assets/BuildingComponentSublayer-CwneA0_g.js","assets/capabilities-CZODJYLl.js","assets/I3SIndexInfo-C6ighZcz.js","assets/I3SLayerDefinitions-BkBTtg9k.js","assets/I3SUtil-BnpEL__5.js","assets/I3SBinaryReader-6lwpcws_.js","assets/popupUtils-Dv06yRaF.js","assets/LineVisualElement-BTtzjko4.js","assets/Object3DVisualElement-nzfHUdKZ.js","assets/VisualElement-Bkfawgun.js","assets/Factory-Dg8YpCEB.js","assets/RenderObject-D5Q-6X4H.js","assets/dragEventPipeline3D-DWNt5svV.js","assets/InteractiveToolBase-DdeEXL8I.js","assets/drawUtils-CLrYXPOv.js","assets/ShadedColorMaterial.glsl-BEwQAGcL.js","assets/ToolIntersector-DNI5g4Id.js","assets/analysisViewUtils-mIiZe11E.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{dS as j,rV as He,aj as Ze,m6 as K,u2 as Je,u7 as Ke,et as Q,u1 as Oe,u8 as Ie,u0 as Qe,uf as et,_ as tt,uh as st,ui as rt,wf as it,uj as nt,wn as at,oq as X,pe as ot,up as ct,wg as dt,wo as lt,pd as ut,u3 as gt,wc as ht,wp as pt,wq as ft,uv as mt,g0 as w,g4 as Ce,lr as bt,tP as ie,fD as _t,gg as l,eU as p,f0 as M,wr as We,eX as D,eI as A,eJ as P,eT as m,fO as S,fQ as O,ws as wt,fR as ke,uD as F,wt as $t,wu as le,wv as Tt,ww as Ot,mF as It,eK as ee,wx as fe,gi as je,tX as G,wy as Ge,f7 as Ct,bW as At,me as Et,pj as Fe,fY as Rt,wz as vt,te as Be,wA as ue,sK as Ae,wB as Mt,tb as Pt,aU as St,g5 as k,br as me,P as be,a3 as E,g6 as N,tV as _,f$ as v,mo as Lt,nX as qe,es as Ut,eu as Ee,ge as z,mr as Y,eL as te,t_ as Re,qB as ve,fi as ce,k5 as Me,sL as Pe,wC as Se,wD as Le,wE as Nt}from"./index-D2dWKXoe.js";import{w as xt,e as _e,b as Vt,a as b,h as Xe}from"./RenderObject-D5Q-6X4H.js";import{T as Dt}from"./ImageMaterial.glsl-CNIN8YCo.js";import{h as yt}from"./SlicePlane-Cxro-rLi.js";import{f as Ht,r as Wt}from"./LineVisualElement-BTtzjko4.js";import{a as kt}from"./Object3DVisualElement-nzfHUdKZ.js";const jt=j(0,0,0,.04);function Gt({accentColor:e}){return He(e,.5)}function Ft({accentColor:e}){return He(e,.7)}const Es=Ze("mac")?"Meta":"Control",Rs="Shift",Bt=2,qt=1.15,Xt=1.15,vs=2500,Ms=.02,zt=Math.cos(K(45)),Ue=Math.cos(K(5)),Ps=.95,Ss=.3,Ls=2,Yt=1,Zt=3,ze=11,ge=22.5,J=40,Ne=48,Jt=2.25,Kt=4,xe=1,Qt=.3,es=6,ts=4,Ve=1600,ss=.4;function rs(e){const t=new Je,{vertex:a,fragment:r,attributes:i,varyings:n}=t;return Ke(a,e),i.add(Q.POSITION,"vec3"),i.add(Q.UV0,"vec2"),n.add("vUV","vec2"),a.code.add(Oe`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),r.uniforms.add(new Ie("backgroundColor",s=>s.backgroundColor),new Ie("gridColor",s=>s.gridColor),new Qe("gridWidth",s=>s.gridWidth)),r.code.add(Oe`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`),t}const is=Object.freeze(Object.defineProperty({__proto__:null,build:rs},Symbol.toStringTag,{value:"Module"}));class ns extends dt{constructor(){super(...arguments),this.backgroundColor=j(1,0,0,.5),this.gridColor=j(0,1,0,.5),this.gridWidth=4}}class ne extends st{initializeProgram(t){return new rt(t.rctx,ne.shader.get().build(this.configuration),it)}initializePipeline(){return nt({blending:at(X.ONE,X.ONE,X.ONE_MINUS_SRC_ALPHA,X.ONE_MINUS_SRC_ALPHA),depthTest:{func:ot.LESS},colorWrite:ct})}}ne.shader=new et(is,()=>tt(()=>import("./SlicePlaneMaterial.glsl-URHZJ5MQ.js").then(e=>e.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])));let as=class extends lt{constructor(t){super(t,new cs),this.produces=new Map([[ut.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,a=>a===gt.Color]]),this._configuration=new ht}createBufferWriter(){return new pt(ft)}createGLMaterial(t){return new os(t)}getConfiguration(){return this._configuration}};class os extends mt{constructor(t){super(t),this.ensureTechnique(ne,null)}beginSlot(){return this.technique}}class cs extends ns{constructor(){super(...arguments),this.renderOccluded=w.Occlude,this.isDecoration=!1}}class ds extends kt{constructor(t){super(t),this._material=null,this._renderOccluded=w.OccludeAndTransparent,this._gridWidth=1,this._gridColor=j(1,0,0,1),this._backgroundColor=j(1,0,0,1),this.applyProperties(t)}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(t){this._gridWidth!==t&&(this._gridWidth=t,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(t){Ce(this._gridColor,t),this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){Ce(this._backgroundColor,t),this._updateMaterial()}createExternalResources(){this._material=new as(this._materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(t){this._material!=null&&t(this._material)}createGeometries(t){if(this._material!=null){const a=bt(this._material);t.addGeometry(a)}}get _materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){this._material!=null&&this._material.setParameters(this._materialParameters)}}function Ns(e,t,a,r,i,n,s,o){return ls(t,s.worldUpAtPosition(e,l.get()),i,n,o.basis1,o.basis2),p(o.basis1,o.basis1,a),p(o.basis2,o.basis2,r),M(o.origin,e),We(o.basis2,o.basis1,o.origin,o.plane),o}function ls(e,t,a,r,i,n){const s=D(e,t),o=l.get(),u=l.get();switch(r===R.HORIZONTAL_OR_VERTICAL?Math.abs(s)>zt?R.HORIZONTAL:R.VERTICAL:r){case R.VERTICAL:{const c=Math.abs(s)<=Ue?e:a.viewUp;A(o,c,t),M(u,t);break}case R.HORIZONTAL:A(o,a.viewUp,t),A(u,t,o);break;case R.TILTED:{const c=Math.abs(s)<=Ue?t:a.viewUp;A(o,c,e),A(u,e,o);break}}const d=A(l.get(),o,u);D(d,a.viewForward)>0&&p(u,u,-1),P(i,o),P(n,u)}function us(e,t,a){const r=t.worldUpAtPosition(e.origin,l.get()),i=e.basis1,n=Te(e,r),s=Math.round(n/y)*y;return ue(e,s-n,i,a)}function xs(e,t,a,r,i,n){const s=M(l.get(),i.origin);m(s,s,p(l.get(),i.basis1,e.direction[0]<0?1:-1)),m(s,s,p(l.get(),i.basis2,e.direction[1]<0?1:-1));const o=S(i.basis1),u=S(i.basis2),d=O(l.get(),a,s),c=O(l.get(),t,s);let g=0,h=0;if($e(e)){const ae=he(i),H=he(n);g=o-.5*e.direction[0]*D(i.basis1,c)/o,h=u-.5*e.direction[1]*D(i.basis2,c)/u;const B=H/ae;g*=B,h*=B}const f=g+.5*e.direction[0]*D(i.basis1,d)/o,T=h+.5*e.direction[1]*D(i.basis2,d)/u,x=p(l.get(),i.basis1,f/o),L=p(l.get(),i.basis2,T/u);(f<=0||De(n.origin,x,r)<=Ve)&&M(x,n.basis1),(T<=0||De(n.origin,L,r)<=Ve)&&M(L,n.basis2);const $=M(l.get(),s);return m($,$,p(l.get(),x,e.direction[0]<0?-1:1)),m($,$,p(l.get(),L,e.direction[1]<0?-1:1)),wt($,x,L,n)}function Vs(e,t){return ss*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)}function Ds(e,t,a,r){const i=A(l.get(),t,a);return A(i,i,t),ke(e,i,r)}function ys(e,t){return xt(e.basis1,e.basis2,e.origin,t)}function Hs(e,t,a,r){const i=t.worldUpAtPosition(e.origin,l.get()),n=l.get();switch(a){case se.HEADING:M(n,i);break;case se.TILT:M(n,e.basis1)}return ke(e.origin,n,r)}function Ws(e,t,a,r){const i=we(a,I.NEGATIVE_X),n=F.get();$t(n,t,i.edge*Math.PI/2);const s=P(l.get(),i.basis);let o=p(l.get(),s,i.direction*r.computeScreenPixelSizeAt(i.position)*J);m(o,o,i.position);const u=r.projectToRenderScreen(o,le(l.get())),d=gs(r,u);Tt(r,u,Z),P(Z.direction,Z.direction);const c=l.get();!d&&Ot(a,Z,c)&&(o=c),n[12]=0,n[13]=0,n[14]=0,e.modelTransform=n,e.renderLocation=It(o),d?e.state|=re:e.state&=~re}function gs(e,t){const[a,r,i,n]=e.viewport,s=Math.min(i,n)/16;let o=!0;return t[0]<a+s?(t[0]=a+s,o=!1):t[0]>a+i-s&&(t[0]=a+i-s,o=!1),t[1]<r+s?(t[1]=r+s,o=!1):t[1]>r+n-s&&(t[1]=r+n-s,o=!1),o}function ks(e,t,a,r){const i=S(r.basis1),n=S(r.basis2),s=Ye(r),o=he(r),u=ee(l.get(),0,0,0);m(u,p(l.get(),r.basis1,t.direction[0]),p(l.get(),r.basis2,t.direction[1])),m(u,r.origin,u);let d=0,c=1;if($e(t))t.direction[0]===1&&t.direction[1]===-1?d=y:t.direction[0]===1&&t.direction[1]===1?d=Math.PI:t.direction[0]===-1&&t.direction[1]===1&&(d=3*Math.PI/2),c=o;else{const h=t.direction[0]!==0?1:2;d=h===1?y:0,c=(h===1?n:i)-s}const g=fe(F.get(),d);je(g,g,ee(l.get(),c,c,c)),G(g,a,g),g[12]=0,g[13]=0,g[14]=0,e.modelTransform=g,e.renderLocation=u}function js(e,t,a,r){const i=r.worldUpAtPosition(a.origin,l.get()),n=we(a,I.POSITIVE_X),s=fe(F.get(),n.edge*Math.PI/2);Ge(s,s,-Te(a,i)),G(s,t,s),s[12]=0,s[13]=0,s[14]=0,e.modelTransform=s,e.renderLocation=n.position}function Gs(e,t,a){const r=we(a,I.POSITIVE_Y),i=fe(F.get(),r.edge*Math.PI/2);Ge(i,i,y),G(i,t,i),i[12]=0,i[13]=0,i[14]=0,e.modelTransform=i,e.renderLocation=r.position}var I;function we(e,t){switch(t){case I.POSITIVE_X:return{basis:e.basis1,direction:1,position:m(l.get(),e.origin,e.basis1),edge:t};case I.POSITIVE_Y:return{basis:e.basis2,direction:1,position:m(l.get(),e.origin,e.basis2),edge:t};case I.NEGATIVE_X:return{basis:e.basis1,direction:-1,position:O(l.get(),e.origin,e.basis1),edge:t};case I.NEGATIVE_Y:return{basis:e.basis2,direction:-1,position:O(l.get(),e.origin,e.basis2),edge:t}}}function De(e,t,a){const r=a.projectToRenderScreen(m(l.get(),e,t),le(l.get())),i=a.projectToRenderScreen(O(l.get(),e,t),le(l.get()));return Ct(O(r,r,i))}function Ye(e){const t=S(e.basis1),a=S(e.basis2);return Qt*Math.min(t,a)}function he(e){return Ye(e)}function $e(e){return e.direction[0]!==0&&e.direction[1]!==0}function Fs(e){const t=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]];return new Ht({view:e,attached:!1,color:Ft(e.effectiveTheme),width:Yt,renderOccluded:w.OccludeAndTransparent,geometry:[t],isDecoration:!0})}function Bs(e){return new ds({view:e,attached:!1,backgroundColor:jt,gridColor:Gt(e.effectiveTheme),gridWidth:4,renderOccluded:w.OccludeAndTransparent,isDecoration:!0})}function qs(e,t,a,r=new yt){if(e==null)return null;const{renderCoordsHelper:i}=t,n=i.fromRenderCoords(e.origin,new At({spatialReference:t.spatialReference}));if(n==null)return null;const s=Et(n,a);if(s==null)return null;r.position=s;const o=2*S(e.basis1),u=2*S(e.basis2),d=Fe.renderUnitScaleFactor(t.spatialReference,a);r.width=o*d,r.height=u*d;const c=i.worldUpAtPosition(e.origin,l.get());return r.tilt=Rt(Te(e,c)),r.heading=i.headingAtPosition(e.origin,e.basis1)-90,r}function Te(e,t){return vt(t,e.basis2,e.basis1)+y}function hs(e,t,a,r,i,n,s=Be()){return n.toRenderCoords(e,s.origin)?(n.worldBasisAtPosition(s.origin,Ae.X,s.basis1),n.worldBasisAtPosition(s.origin,Ae.Y,s.basis2),We(s.basis2,s.basis1,s.origin,s.plane),ue(s,-K(t),Mt(s),s),ue(s,K(a),s.basis1,s),p(s.basis1,s.basis1,r/2),p(s.basis2,s.basis2,i/2),Pt(s),s):(St.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error(`Failed to project slice plane position, projection from ${e.spatialReference.wkid} is not supported`),null)}function Xs(e,t){if((e==null?void 0:e.position)==null)return null;const a=Wt(e.position,t.spatialReference,t.elevationProvider);if(a==null)return null;const r=Fe.renderUnitScaleFactor(e.position.spatialReference,t.spatialReference),i=e.width*r,n=e.height*r;return{position:a,heading:e.heading,tilt:e.tilt,renderWidth:i,renderHeight:n}}function zs(e,t,a,r=Be()){if(e==null)return null;const i=hs(e.position,e.heading,e.tilt,e.renderWidth,e.renderHeight,t.renderCoordsHelper,r);return a.tiltEnabled||i==null||us(i,t.renderCoordsHelper,i),i}(function(e){e[e.POSITIVE_X=0]="POSITIVE_X",e[e.POSITIVE_Y=1]="POSITIVE_Y",e[e.NEGATIVE_X=2]="NEGATIVE_X",e[e.NEGATIVE_Y=3]="NEGATIVE_Y"})(I||(I={}));const C=ie.Custom1;var se,R;(function(e){e[e.HEADING=1]="HEADING",e[e.TILT=2]="TILT"})(se||(se={})),function(e){e[e.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",e[e.HORIZONTAL=1]="HORIZONTAL",e[e.VERTICAL=2]="VERTICAL",e[e.TILTED=3]="TILTED"}(R||(R={}));const re=ie.Custom2,Z=_t(),y=Math.PI/2,de=ie.Custom1,ps=ie.Custom2;function Ys(e){return(e.type==="building-scene-3d"?e:null)!=null}class Zs extends _e{constructor(t,a){const r=$e(a),i=r?Kt:xe,n=i*Bt,s=xe,o={renderOccluded:w.OccludeAndTransparent,isDecoration:!0},u=new k({...o,width:i}),d=new k({...o,width:n}),c=new k({...o,width:s});super({view:t,...Vt,...fs({isCorner:r,unfocusedMaterial:u,focusedMaterial:d,outlineMaterial:c})}),this._themeHandle=me(()=>t.effectiveTheme.accentColor,g=>{const h=E.toUnitRGBA(g);u.setParameters({color:h}),d.setParameters({color:h}),c.setParameters({color:h})},be)}destroy(){this._themeHandle.remove(),super.destroy()}}function fs({isCorner:e,unfocusedMaterial:t,focusedMaterial:a,outlineMaterial:r}){const i=e?[v(1,0,0),v(0,0,0),v(0,1,0)]:[v(1,0,0),v(-1,0,0)];return{renderObjects:[new b(N(t,i),_.Unfocused|de),new b(N(a,i),_.Focused|de),new b(N(r,i),ps)],collisionType:{type:"line",paths:[i]},radius:e?es:ts,state:de}}class Js extends _e{constructor(t,a){const r=new Dt({transparent:!0,writeDepth:!1,renderOccluded:w.Opaque,isDecoration:!0}),i=Xe.calloutWidth,n=new k({width:i,renderOccluded:w.OccludeAndTransparent,isDecoration:!0});super({view:t,...ms({imageMaterial:r,calloutMaterial:n})}),this._currentTexture=null,this._themeHandle=me(()=>t.effectiveTheme.accentColor,s=>{const o=Lt(s,.5),u=qe(s),d=this._currentTexture,c=a(o,u);r.setParameters({textureId:c.texture.id}),n.setParameters({color:E.toUnitRGBA(s)}),this._currentTexture=c,d==null||d.release()},be)}destroy(){var t;this._themeHandle.remove(),(t=this._currentTexture)==null||t.release(),super.destroy()}}function ms({imageMaterial:e,calloutMaterial:t}){const{focusMultiplier:a,calloutLength:r,discRadius:i}=Xe,n=i*a,s=(c,g)=>{const h=[0,1,2,2,3,0];return new Ut(g,[[Q.POSITION,new Ee([r-c,-c,0,r+c,-c,0,r+c,c,0,r-c,c,0],h,3,!0)],[Q.UV0,new Ee([0,0,1,0,1,1,0,1],h,2,!0)]])},o=N(t,[[0,0,0],[r-i,0,0]]),u=N(t,[[0,0,0],[r-n,0,0]]),d=C;return{autoScaleRenderObjects:!1,collisionPriority:1,collisionType:{type:"disc",direction:[0,0,1],offset:[r,0,0]},focusMultiplier:a,radius:i,renderObjects:[new b(s(i,e),_.Unfocused|d),new b(o,_.Unfocused|d),new b(s(n,e),_.Focused|d),new b(u,_.Focused|d)],state:d}}var pe;(function(e){e[e.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",e[e.CENTER_ON_ARROW=1]="CENTER_ON_ARROW"})(pe||(pe={}));class Ks extends _e{constructor(t,a){const r=new k({width:1,renderOccluded:w.OccludeAndTransparent,isDecoration:!0}),i=new z({cullFace:Y.Back,renderOccluded:w.Opaque,isDecoration:!0}),n=new z({cullFace:Y.Back,renderOccluded:w.Opaque,isDecoration:!0}),s=new z({cullFace:Y.Back,renderOccluded:w.Opaque,isDecoration:!0}),o=new z({writeDepth:!1,cullFace:Y.Front,renderOccluded:w.Transparent,isDecoration:!0});super({view:t,...bs({offsetMode:a,tubeMaterial:i,tipMaterial:n,capMaterial:s,outlineMaterial:o,calloutMaterial:r})}),this._themeHandle=me(()=>t.effectiveTheme.accentColor,u=>{const d=qe(u),c=E.toUnitRGBA(u),g=E.toUnitRGBA(d),h=E.toUnitRGBA(E.blendColors(d,u,.4)),f=E.toUnitRGBA(E.blendColors(d,u,.14));r.setParameters({color:c}),i.setParameters({color:f}),n.setParameters({color:g}),s.setParameters({color:h}),o.setParameters({color:c})},be)}destroy(){this._themeHandle.remove(),super.destroy()}}function bs({offsetMode:e,tubeMaterial:t,tipMaterial:a,capMaterial:r,outlineMaterial:i,calloutMaterial:n}){const s=e===pe.CENTER_ON_CALLOUT?J:0,o=[v(s,0,-Ne/2),v(s,0,Ne/2)],u=ws(o,!0),d=ye({vertices:o,padding:0,materials:{tube:t,tip:a,cap:r}}),c=ye({vertices:o,padding:Jt,materials:{tube:i,tip:i,cap:i}}),g=N(n,[[s,0,0],[s-J,0,0]]),h=N(n,[[s,0,0],[s-J,0,0]]);return{renderObjects:[...d.normal.map(f=>new b(f,_.Unfocused|C)),...c.normal.map(f=>new b(f,_.Unfocused|C)),new b(g,_.Unfocused|C|re),...d.focused.map(f=>new b(f,_.Focused|C)),...c.focused.map(f=>new b(f,_.Focused|C)),new b(h,_.Focused|C|re)],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[u]},collisionPriority:1,radius:ze,state:C}}function ye({vertices:e,padding:t,materials:a}){const r=i=>{const n=e.slice(0),s=O(l.get(),n[0],n[1]);P(s,s);const o=O(l.get(),n[n.length-1],n[n.length-2]);if(P(o,o),t>0){const W=p(te(),o,-t);n[n.length-1]=m(W,W,n[n.length-1]);const V=p(te(),s,-t);n[0]=m(V,V,n[0])}const u=i?Xt:1,d=ge*u,c=ze*u,g=Re(F.get());if(t>0){const W=d/4,V=ee(l.get(),0,W,0),q=1+t/W;ve(g,g,V),je(g,g,ee(l.get(),q,q,q)),ve(g,g,p(V,V,-1/q))}const h=Re(ce()),f=v(0,1,0),T=Me(ce(),Pe(Se.get(),f,o));T[12]=n[n.length-1][0],T[13]=n[n.length-1][1],T[14]=n[n.length-1][2],G(T,T,g);const x=a.tube,L=_s(Zt*(i?qt:1)+t,n,x);L.transformation=h;const $=[L],ae=a.tip,H=Le(ae,d,c,24,!1,!1,!0);H.transformation=T,$.push(H);const B=a.cap,oe=Le(B,d,c,24,!1,!0,!1);oe.transformation=T,$.push(oe);const U=Me(ce(),Pe(Se.get(),f,s));return U[12]=n[0][0],U[13]=n[0][1],U[14]=n[0][2],G(U,U,g),$.push(H.instantiate({transformation:U})),$.push(oe.instantiate({transformation:U})),$};return{normal:r(!1),focused:r(!0)}}function _s(e,t,a){const r=[];for(let n=0;n<12;n++){const s=n/12*2*Math.PI;r.push([Math.cos(s)*e,Math.sin(s)*e])}return Nt(a,r,t,[],[],!1)}function ws(e,t){const a=O(te(),e[e.length-1],e[e.length-2]);if(P(a,a),p(a,a,ge),m(a,a,e[e.length-1]),t){const r=O(te(),e[0],e[1]);return P(r,r),p(r,r,ge),m(r,r,e[0]),[r,...e,a]}return[...e,a]}export{Fs as A,Yt as B,C,rs as D,$e as E,pe as H,Ks as I,Xs as L,Ls as M,qs as R,re as S,ps as U,zs as V,se as _,ks as a,he as b,ys as c,de as d,xs as e,R as f,Js as g,Ns as h,js as i,Bs as j,Gs as k,Hs as l,vs as m,Ft as n,jt as o,Ss as p,Ds as q,Rs as r,Vs as s,Es as t,Ws as u,Zs as v,Ps as w,Ys as x,Ms as y,Gt as z};