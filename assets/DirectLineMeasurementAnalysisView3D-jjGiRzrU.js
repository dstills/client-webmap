import{g as r,y as c,i as le,S as ce,cS as w,gQ as De,ew as ue,ar as P,at as O,aK as xe,y_ as Oe,dd as B,de as oe,mq as N,cG as Ge,p3 as Re,p7 as je,p9 as Ne,df as ge,dg as He,bU as Ie,gR as ke,gS as Fe,dn as We,wm as Qe,FW as qe,wh as U,dZ as b,wl as K,wA as J,wo as Be,aj as Ue,wx as Y,F_ as de,wp as Ke,wq as Je,wr as Ye,G0 as Ze,G1 as Xe,pQ as et,G3 as tt,wt as it,qx as st,F$ as nt,wu as at,G6 as rt,pP as pe,FS as H,G9 as ot,Ga as lt,e0 as Z,d7 as X,dk as ee,dB as $e,dl as ct,jY as te,e8 as dt,dM as j,wC as _e,s5 as me,dP as ve,oL as ht,u as f,e3 as I,dS as ut,mK as ye,s4 as gt,mI as we,p2 as pt,le as be,mL as ie,oi as _t,P as mt,d9 as vt,d8 as yt,gv as se,GS as wt,GP as bt,oF as Lt,ok as ft,pz as ne,u9 as Le,m5 as Pt,pC as Ve,pB as he,pb as Ct}from"./index-nBWeBKPv.js";import{s as Et}from"./AnalysisView3D-Bq0wY630.js";import{e as $}from"./interfaces-js1RL7O8.js";import{r as St,t as zt,f as k}from"./LineVisualElement-BUVtecPu.js";import{t as At}from"./UnitNormalizer-B2kJgVwZ.js";import{h as ae,R as fe,y as Ot,L as Pe,d as $t}from"./quantityFormatUtils-DkM1DbdG.js";import{e as y,o as A}from"./interfaces-CjSZqm0S.js";import{f as re,_ as Ce,m as R,v as Ee}from"./Segment-Bfk0CLRX.js";import{a as Vt}from"./Object3DVisualElement-BhPO44v1.js";import{z as Mt}from"./RightAngleQuadVisualElement-DQ3n55o0.js";import"./VisualElement-89nWP9ZW.js";import"./TextOverlayItem-DNA-E1Ey.js";import"./EngineVisualElement-Mqqpq6dq.js";let T=class extends ce{constructor(t){super(t),this._unitNormalizer=new At,this._tempStartPosition=w(),this._tempEndPosition=w(),this._tempCornerPosition=w()}initialize(){const t=this.view.spatialReference,e=De(t),i=e===ke?Fe:e;this._sphericalPCPF=i;const s=ue(t,i);this._unitNormalizer.spatialReference=s?i:t,this.addHandles([P(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:n,startPoint:a})=>{n.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(a)},O),P(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:n,endPoint:a})=>{n.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(a)},O),P(()=>({result:this._computedResult,viewData:this.viewData}),({result:n,viewData:a})=>{a.result=n},O)])}_applyProjectionAndElevationAlignment(t){if(t==null)return t;const{spatialReference:e,elevationProvider:i}=this.view;return St(t,e,i)??(zt(this.analysis,t.spatialReference,xe.getLogger(this)),null)}get _computedResult(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e,measurementMode:i}=this.viewData;if(t==null||e==null)return null;const s=this._euclideanDistances(t,e),n=this._geodesicDistance(t,e);let a,d;switch(i){case $.Auto:d=n!=null?"geodesic":"euclidean",a=n??s.horizontal;break;case $.Geodesic:if(n==null)return null;d="geodesic",a=n;break;case $.Euclidean:d="euclidean",a=s.horizontal}return{mode:d,directDistance:s.direct,horizontalDistance:a,verticalDistance:s.vertical,distance:i===$.Euclidean||s.horizontal.value<=Oe?s.direct:n??s.horizontal}}_euclideanDistances(t,e){const i=t.clone();i.z=e.z;const s=this._tempStartPosition,n=this._tempEndPosition,a=this._tempCornerPosition,d=this.view.spatialReference,u=this._sphericalPCPF,l=ue(d,u)?u:d;B(t,s,l),B(e,n,l),B(i,a,l);const h=oe(s,n),o=oe(a,n),g=Math.abs(e.z-t.z),p=E=>this._unitNormalizer.normalizeDistance(E),_=p(h),C=p(o),D=p(g);return{direct:N(_,"meters"),horizontal:N(C,"meters"),vertical:N(D,"meters")}}_geodesicDistance(t,e){const{spatialReference:i}=t,s=new Ge({spatialReference:i});s.addPath([t,e]);const n=i.isGeographic&&Re(i)?je([s],"meters")[0]:i.isWebMercator?Ne(s,"meters"):null,a=n??this._fallbackGeodesicDistance(t,e);return a!=null?N(a,"meters"):null}_fallbackGeodesicDistance(t,e){if(ge(t,Se)&&ge(e,ze)){const i=new We;return He(i,Se,ze,Ie.WGS84),i.distance}return null}};r([c()],T.prototype,"view",void 0),r([c()],T.prototype,"analysis",void 0),r([c()],T.prototype,"viewData",void 0),r([c()],T.prototype,"_computedResult",null),T=r([le("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController")],T);const Se=w(),ze=w();function Me(t){const e=new Qe,{vertex:i,fragment:s}=e;qe(i,t),i.uniforms.add(new U("width",a=>a.width)),e.attributes.add(b.POSITION,"vec3"),e.attributes.add(b.NORMAL,"vec3"),e.attributes.add(b.UV0,"vec2"),e.attributes.add(b.LENGTH,"float"),e.varyings.add("vtc","vec2"),e.varyings.add("vlength","float"),e.varyings.add("vradius","float"),i.code.add(K`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = length;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),s.uniforms.add(new U("outlineSize",a=>a.outlineSize),new J("outlineColor",a=>a.outlineColor),new U("stripeLength",a=>a.stripeLength),new J("stripeEvenColor",a=>a.stripeEvenColor),new J("stripeOddColor",a=>a.stripeOddColor));const n=1/Math.sqrt(2);return s.code.add(K`
    const float INV_SQRT2 = ${K.float(n)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      fragColor = color;
    }
  `),e}const Tt=Object.freeze(Object.defineProperty({__proto__:null,build:Me},Symbol.toStringTag,{value:"Module"}));class W extends Ke{constructor(e,i,s){super(e,i,s)}initializeProgram(e){return new Je(e.rctx,W.shader.get().build(this.configuration),Te)}_setPipelineState(e){const i=e===de.NONE,s=this.configuration;return Ye({blending:s.transparent?i?Ze:Xe(e):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:et.LESS},depthWrite:tt,colorWrite:it})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return st.TRIANGLE_STRIP}}W.shader=new Be(Tt,()=>Ue(()=>Promise.resolve().then(()=>Yt),void 0));let F=class extends nt{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=de.NONE}};r([Y()],F.prototype,"polygonOffsetEnabled",void 0),r([Y()],F.prototype,"transparent",void 0),r([Y({count:de.COUNT})],F.prototype,"transparencyPassType",void 0);const Te=new Map([[b.POSITION,0],[b.NORMAL,1],[b.UV0,2],[b.LENGTH,3]]);class Dt extends rt{constructor(e){super(e,new Gt),this._vertexAttributeLocations=Te,this.produces=new Map([[pe.OPAQUE_MATERIAL,i=>!this._transparent&&(i===H.Color||i===H.Alpha)],[pe.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,i=>this._transparent&&(i===H.Color||i===H.Alpha)]]),this._configuration=new F}getConfiguration(e,i){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this._transparent,this._configuration.transparencyPassType=i.transparencyPassType,this._configuration}intersect(){}createGLMaterial(e){return new xt(e)}createBufferWriter(){return new Ft}get _transparent(){const{parameters:e}=this;return e.outlineColor[3]<1||e.stripeEvenColor[3]<1||e.stripeOddColor[3]<1}}class xt extends ot{beginSlot(e){return this.ensureTechnique(W,e)}}class Gt extends lt{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=Z(1,.5,0,1),this.stripeEvenColor=Z(1,1,1,1),this.stripeOddColor=Z(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const Rt=at().vec3f(b.POSITION).vec3f(b.NORMAL).vec2f(b.UV0).f32(b.LENGTH),jt=w(),Nt=w(),Ht=w(),It=w(),kt=w();class Ft{constructor(){this.vertexBufferLayout=Rt}elementCount(e){return 2*(e.attributes.get(b.POSITION).indices.length/2+1)}write(e,i,s,n,a){const{data:d,indices:u}=s.attributes.get(b.POSITION),l=s.attributes.get(b.NORMAL).data,h=d.length/3;u&&u.length!==2*(h-1)&&console.warn("MeasurementArrowMaterial does not support indices");const o=jt,g=Nt,p=Ht,_=It,C=kt,D=n.position,E=n.normal,S=n.uv0;let z=0;for(let L=0;L<h;++L){const G=3*L;if(X(o,d[G],d[G+1],d[G+2]),L<h-1){const x=3*(L+1);X(g,d[x],d[x+1],d[x+2]),X(C,l[x],l[x+1],l[x+2]),ee(C,C),$e(p,g,o),ee(p,p),ct(_,C,p),ee(_,_)}const q=oe(o,g);e&&i&&(te(o,o,e),te(g,g,e),te(_,_,i));const V=a+2*L,M=V+1;D.setVec(V,o),D.setVec(M,o),E.setVec(V,_),E.setVec(M,_),S.set(V,0,z),S.set(V,1,-1),S.set(M,0,z),S.set(M,1,1),L<h-1&&(z+=q)}const Q=n.length;for(let L=0;L<2*h;++L)Q.set(a+L,z)}}let Wt=class extends Vt{constructor(e){super(e),this._arrowWidth=16,this._arrowSubdivisions=128,this._origin=w(),this._originTransform=dt(),this._arrowCenter=w(),this._renderOccluded=j.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._color=_e(),this._contrastColor=_e(),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const i=this._stripesEnabled?this._contrastColor:this._color;this._arrowMaterial.setParameters({stripeEvenColor:i})}}get color(){return this._color}set color(e){me(e,this._color)||(ve(this._color,e),this._updateArrowColor())}get contrastColor(){return this._contrastColor}set contrastColor(e){me(e,this._color)||(ve(this._contrastColor,e),this._updateArrowColor())}createExternalResources(){const e=this._color,i=this._contrastColor,s=this._stripesEnabled?i:e;this._arrowMaterial=new Dt({outlineColor:e,stripeEvenColor:s,stripeOddColor:e,renderOccluded:this.renderOccluded,polygonOffset:!0,isDecoration:this.isDecoration}),this._handles=new ht,this._handles.add(P(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles=f(this._handles)}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){var s;if(((s=this._geometry)==null?void 0:s.startRenderSpace)==null||this._geometry.endRenderSpace==null)return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);i.transformation=this._originTransform,e.addGeometry(i),this._viewChanged()}_createArrowGeometry(e,i,s,n){const a=this.view.renderCoordsHelper,d=[],u=[],l=(h,o)=>{const g=I.get();$e(g,h,s),d.push(g),u.push(o)};if(n.type==="euclidean"){n.eval(.5,this._arrowCenter);const h=I.get();a.worldUpAtPosition(this._arrowCenter,h),l(e,h),l(i,h)}else{n.eval(.5,this._arrowCenter);const h=this._arrowSubdivisions+1&-2;for(let o=0;o<h;++o){const g=o/(h-1),p=I.get(),_=I.get();n.eval(g,p),a.worldUpAtPosition(p,_),l(p,_)}}return ut(this._arrowMaterial,d,u)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&this._geometry!=null){const e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._arrowWidth*e})}}_updateArrowColor(){if(!this.attached)return;const e=this._color,i=this._contrastColor,s=this._stripesEnabled?i:e,n=e,a=e;this._arrowMaterial.setParameters({stripeEvenColor:s,outlineColor:n,stripeOddColor:a})}},v=class extends ce{get _parameters(){const t=this.view.effectiveTheme,{accentColor:e,textColor:i}=t,s=ye(e),n=gt(e,.75),a=ye(we(e)),d=we(i,pt.Low);return{accentColor:s,contrastColor:a,translucentAccentColor:n,triangleLineWidth:3,geodesicProjectionLineWidth:2,guideLineWidth:2,guideStippleLengthPixels:3,directLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12,textColor:i,textBackgroundColor:be(d,.6),textCalloutColor:be(d,.5)}}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e}=this.analysisView;if(t==null||e==null||t.equals(e))return y.None;const i=this.analysisView.result;if(i==null)return y.Direct;if(this.actualVisualizedMeasurement==="geodesic")return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?y.ProjectedGeodesic:y.Direct;const{verticalDistance:s,horizontalDistance:n}=i,a=s.value,d=n.value;return Math.min(a/d,d/a)<this.triangleCollapseRatioThreshold?y.Direct:y.Triangle}get actualVisualizedMeasurement(){const{measurementMode:t,result:e}=this.analysisView;switch(t){case $.Auto:return e!=null&&e.horizontalDistance.value>Oe?"geodesic":"euclidean";case $.Euclidean:return"euclidean";case $.Geodesic:return"geodesic"}}get allowVisualElementsOrientationChange(){return this._triangleOrientationOverride==null}set allowVisualElementsOrientationChange(t){this._triangleOrientationOverride==null!==t&&(this._triangleOrientationOverride==null?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){return this.actualVisualizedMeasurement==="geodesic"?{direct:null,horizontal:this._segmentLabel,vertical:this._verticalLabel}:{direct:this._segmentLabel,horizontal:this._horizontalLabel,vertical:this._verticalLabel}}constructor(t){super(t),this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=w(),this._endPosition=w(),this._cornerPosition=w(),this._startPositionAtSeaLevel=w(),this._endPositionAtSeaLevel=w(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=A.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const t=this._parameters,e={attached:!0,view:this.view,isDecoration:!0},{guideLineWidth:i,guideStippleLengthPixels:s,triangleLineWidth:n,geodesicProjectionLineWidth:a,directLabelFontSize:d,verticalLabelFontSize:u,horizontalLabelFontSize:l}=t;this._segmentVisualElement=new Wt({...e,geometry:null,renderOccluded:j.OccludeAndTransparent}),this._triangleVisualElement=new k({...e,width:n,renderOccluded:j.OccludeAndTransparent}),this._rightAngleQuad=new Mt({...e,renderOccluded:j.OccludeAndTransparent});const h={...e,polygonOffset:!0,renderOccluded:j.OccludeAndTransparent};this._projectedGeodesicLine=new k({...h,width:a,stipplePattern:ie(s)}),this._geodesicStartHint=new k({...h,width:i,stipplePattern:ie(s)}),this._geodesicEndHint=new k({...h,width:i,stipplePattern:ie(s)}),this._segmentLabel=new re({...e,fontSize:d}),this._verticalLabel=new re({...e,fontSize:u}),this._horizontalLabel=new re({...e,fontSize:l}),this.addHandles([P(()=>{const{elevationAlignedStartPoint:o,elevationAlignedEndPoint:g}=this.analysisView,p=this.view;return{view:p,camera:p.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:o,elevationAlignedEndPoint:g,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},o=>this._updateGeometryAndViewMode(o),O),P(()=>({visible:this.visible,viewMode:this.viewMode}),o=>this._updateVisualElementVisibility(o),O),P(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),o=>this._updateLabelText(o),O),P(()=>({visible:this.visible,viewMode:this.viewMode}),o=>this._updateLabelVisibility(o),O),P(()=>this._measurementArrowStripeLength,o=>this._updateSegmentStripeLength(o),O),_t(async()=>this._updateMessageBundle()),P(()=>this._parameters,({textBackgroundColor:o,textCalloutColor:g,textColor:p,translucentAccentColor:_,accentColor:C,contrastColor:D})=>{const{_segmentLabel:E,_verticalLabel:S,_horizontalLabel:z,_triangleVisualElement:Q,_rightAngleQuad:L,_projectedGeodesicLine:G,_geodesicStartHint:q,_geodesicEndHint:V,_segmentVisualElement:M}=this;E.backgroundColor=o,E.calloutColor=g,E.textColor=p,S.backgroundColor=o,S.calloutColor=g,S.textColor=p,z.backgroundColor=o,z.calloutColor=g,z.textColor=p,Q.color=_,L.color=_,G.color=_,q.color=_,V.color=_,M.color=C,M.contrastColor=D},mt)]),this._updateMessageBundle()}destroy(){this._segmentVisualElement=f(this._segmentVisualElement),this._triangleVisualElement=f(this._triangleVisualElement),this._rightAngleQuad=f(this._rightAngleQuad),this._projectedGeodesicLine=f(this._projectedGeodesicLine),this._geodesicStartHint=f(this._geodesicStartHint),this._geodesicEndHint=f(this._geodesicEndHint),this._segmentLabel=f(this._segmentLabel),this._verticalLabel=f(this._verticalLabel),this._horizontalLabel=f(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:t,viewMode:e}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,t)switch(e){case y.None:break;case y.Direct:this._segmentVisualElement.visible=!0;break;case y.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case y.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:t,camera:e,viewMode:i,elevationAlignedStartPoint:s,elevationAlignedEndPoint:n,orientation:a,visualizedMeasurement:d,stripeLength:u}){const l=t.renderCoordsHelper;if(l==null||s==null||n==null||s.equals(n))return;let h=this._startPosition,o=this._endPosition;l.toRenderCoords(s,h),l.toRenderCoords(n,o);const g=a===A.AboveSegment?1:-1,p=g*(l.getAltitude(o)-l.getAltitude(h));p<0&&(h=this._endPosition,o=this._startPosition);const _=d==="geodesic"?new Ce(this._startPosition,this._endPosition,l.spatialReference):new R(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=_,this._updateSegmentStripeLength(u),i){case y.Direct:this._updateSegment(_,a);break;case y.Triangle:this._updateSegmentAndTriangle({view:t,camera:e,segment:_,orientation:a,startPosition:h,endPosition:o,deltaSign:g,altitudeDelta:p});break;case y.ProjectedGeodesic:this._updateSegmentAndProjection({view:t,orientation:a,startPosition:h,endPosition:o})}}_updateSegment(t,e){this._segmentLabel.anchor=e===A.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:t,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:t},camera:e,segment:i,orientation:s,startPosition:n,endPosition:a,deltaSign:d,altitudeDelta:u}){const l=this._cornerPosition;t.worldUpAtPosition(n,l),vt(l,l,d*Math.abs(u)),yt(l,l,n),this._triangleVisualElement.geometry=[[[n[0],n[1],n[2]],[l[0],l[1],l[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:n,center:l,next:a};const h=new R(n,l),o=new R(l,a),g=Qt(n,a,l,s,e);this._segmentLabel.anchor=g.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:h,sampleLocation:"center"},this._verticalLabel.anchor=g.vertical,this._horizontalLabel.geometry={type:"segment",segment:o,sampleLocation:"center"},this._horizontalLabel.anchor=g.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:t},orientation:e,startPosition:i,endPosition:s}){t.setAltitude(this._startPositionAtSeaLevel,0,i),t.setAltitude(this._endPositionAtSeaLevel,0,s);const n=new Ce(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(n),this._geodesicStartHint.setGeometryFromSegment(new R(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new R(this._endPositionAtSeaLevel,s)),this._segmentLabel.geometry={type:"segment",segment:n,sampleLocation:"center"},this._segmentLabel.anchor=e===A.AboveSegment?"top":"bottom"}_updateLabelText({text:t,visualizedMeasurement:e}){t!=null?(this._segmentLabel.text=e==="euclidean"?t.directDistance:t.horizontalDistance,this._horizontalLabel.text=t.horizontalDistance,this._verticalLabel.text=t.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:t,viewMode:e}){const i=this._segmentLabel,s=this._horizontalLabel,n=this._verticalLabel;if(i.visible=!1,s.visible=!1,n.visible=!1,t)switch(e){case y.Direct:i.visible=!0;break;case y.Triangle:i.visible=!0,s.visible=!0,n.visible=!0;break;case y.ProjectedGeodesic:i.visible=!0;case y.None:}}get _labelsText(){if(this.destroyed)return null;const t=this.messages,e=this.analysisView.result;if(e==null||t==null)return null;const{directDistance:i,horizontalDistance:s,verticalDistance:n}=e,a=this.analysisView.unit,d=u=>({directDistance:"",horizontalDistance:"",verticalDistance:"",...u});switch(a){case"metric":return d({directDistance:i&&Pe(t,i),horizontalDistance:s&&Pe(t,s),verticalDistance:n&&$t(t,n)});case"imperial":return d({directDistance:i&&fe(t,i),horizontalDistance:s&&fe(t,s),verticalDistance:n&&Ot(t,n)});default:return d({directDistance:i&&ae(t,i,a),horizontalDistance:s&&ae(t,s,a),verticalDistance:n&&ae(t,n,a)})}}_updateSegmentStripeLength(t){const e=this._segmentVisualElement;t!=null?(e.stripeLength=t,e.stripesEnabled=!0):e.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(this._triangleOrientationOverride!=null)return this._triangleOrientationOverride;const t=this.visualElementOrientation;return t===A.Auto?this.view.state.camera.aboveGround?A.AboveSegment:A.BelowSegment:t}_requiresGeodesicGuideAt(t){const e=this.view;if(!(e!=null&&e.state))return!1;const i=e.state.camera,s=e.renderCoordsHelper;if(!s)return!1;const n=i.computeScreenPixelSizeAt(t);return s.getAltitude(t)/n>=10}get _measurementArrowStripeLength(){const{result:t,unit:e}=this.analysisView;if(t==null)return null;let i=null;const s=t.directDistance;switch(e){case"metric":i=s&&se(s,"meters");break;case"imperial":i=s&&se(s,wt(s.value,s.unit));break;default:i=s&&se(s,e)}return i==null?null:bt(i.value/30)*Lt(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,ft("esri/core/t9n/Units").then(t=>{this.messages=t}).finally(()=>{this.loadingMessages=!1})}get testData(){var t;return{labels:this.labels,stripeLength:(t=this._segmentVisualElement)==null?void 0:t.stripeLength}}};function Qt(t,e,i,s,n){const a=qt,d=Bt;n.projectToRenderScreen(i,a),n.projectToRenderScreen(e,d);const u={segment:"bottom",horizontal:"top",vertical:a[0]<d[0]?"left":"right"};{const l=Ut,h=Kt;if(ne(t,i,n,l),ne(t,e,n,h),Le(l,h)>=Ae){const o=Math.sign(l[1])===Math.sign(h[1]);u.segment=o?Ee(u.vertical):u.vertical}else{const o=Jt;ne(i,e,n,o),Le(o,h)>=Ae&&(u.segment=Math.sign(o[0])===Math.sign(h[0])?Ee(u.horizontal):u.horizontal)}}if(s===A.BelowSegment){const l=h=>h==="top"?"bottom":"top";u.segment=l(u.segment),u.horizontal=l(u.horizontal),u.vertical=l(u.vertical)}return u}r([c()],v.prototype,"_parameters",null),r([c()],v.prototype,"_triangleOrientationOverride",void 0),r([c()],v.prototype,"messages",void 0),r([c()],v.prototype,"view",void 0),r([c()],v.prototype,"analysis",void 0),r([c()],v.prototype,"analysisView",void 0),r([c()],v.prototype,"loadingMessages",void 0),r([c()],v.prototype,"visible",null),r([c()],v.prototype,"viewMode",null),r([c()],v.prototype,"actualVisualizedMeasurement",null),r([c()],v.prototype,"visualElementOrientation",void 0),r([c()],v.prototype,"triangleCollapseRatioThreshold",void 0),r([c()],v.prototype,"allowVisualElementsOrientationChange",null),r([c()],v.prototype,"labels",null),r([c()],v.prototype,"_labelsText",null),r([c()],v.prototype,"_actualVisualElementsOrientation",null),r([c()],v.prototype,"_measurementArrowStripeLength",null),v=r([le("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],v);const Ae=Math.cos(Pt(12)),qt=Ve(),Bt=Ve(),Ut=he(),Kt=he(),Jt=he();let m=class extends Et(ce){constructor(t){super(t),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=$.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const t=this.view,e=this.analysis;this._analysisVisualization=new v({view:t,analysis:e,analysisView:this}),this._analysisController=new T({view:t,analysis:e,viewData:this})}destroy(){this._analysisController=f(this._analysisController),this._analysisVisualization=f(this._analysisVisualization)}get updating(){var t;return!!((t=this._analysisVisualization)!=null&&t.loadingMessages)}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(t){this._analysisVisualization.visualElementOrientation=t}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(t){this._analysisVisualization.allowVisualElementsOrientationChange=t}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(t){this._analysisVisualization.triangleCollapseRatioThreshold=t}get directLabelText(){var t;return((t=this._analysisVisualization.labels.direct)==null?void 0:t.text)??""}get horizontalLabelText(){var t;return((t=this._analysisVisualization.labels.horizontal)==null?void 0:t.text)??""}get verticalLabelText(){var t;return((t=this._analysisVisualization.labels.vertical)==null?void 0:t.text)??""}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){var t;return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...(t=this._analysisVisualization)==null?void 0:t.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};r([c()],m.prototype,"updating",null),r([c({readOnly:!0})],m.prototype,"type",void 0),r([c({constructOnly:!0,nonNullable:!0})],m.prototype,"analysis",void 0),r([c()],m.prototype,"result",void 0),r([c()],m.prototype,"measurementMode",void 0),r([c()],m.prototype,"elevationAlignedStartPoint",void 0),r([c()],m.prototype,"elevationAlignedEndPoint",void 0),r([c({readOnly:!0})],m.prototype,"viewMode",null),r([c({readOnly:!0})],m.prototype,"actualVisualizedMeasurement",null),r([c()],m.prototype,"visualElementOrientation",null),r([c()],m.prototype,"allowVisualElementsOrientationChange",null),r([c()],m.prototype,"triangleCollapseRatioThreshold",null),r([c({readOnly:!0})],m.prototype,"directLabelText",null),r([c({readOnly:!0})],m.prototype,"horizontalLabelText",null),r([c({readOnly:!0})],m.prototype,"verticalLabelText",null),r([c()],m.prototype,"_analysisVisualization",void 0),r([c()],m.prototype,"_analysisController",void 0),r([c()],m.prototype,"unit",null),r([c(Ct)],m.prototype,"_defaultUnit",void 0),m=r([le("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],m);const gi=m,Yt=Object.freeze(Object.defineProperty({__proto__:null,build:Me},Symbol.toStringTag,{value:"Module"}));export{gi as default};
