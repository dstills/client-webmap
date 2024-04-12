import{f2 as Ae,eV as Y,eI as F,fS as T,eL as Ve,eN as u,uc as Re,mB as ze,fr as ee,d7 as Ge,Ew as Oe,fx as oe,e$ as Ee,Ex as te,sI as Ie,Ey as ae,eK as Te,gb as We,ld as he,eZ as D,eW as J,xE as je,lD as Ue,zR as ke,Dh as le,zJ as de,fc as Fe,g as qe,m6 as Ne,e_ as X,f0 as He,mf as Be,E as a,F as d,J as B,O as re,bt as z,bu as ce,fs as Ze,ft as Je,c6 as Xe,el as pe,lN as Ke,bA as se,me as Qe,aT as Ye,bY as et,u0 as tt,u5 as st,ev as q,t$ as ue,u8 as it,w5 as rt,u6 as me,u4 as nt,ub as W,ud as ot,_ as at,wl as ht,oq as j,uf as lt,ug as dt,wd as ct,uh as pt,uj as ut,E3 as mt,ul as gt,um as _t,un as yt,ue as V,up as ft,wm as vt,pd as K,E8 as Q,wn as Lt,wo as wt,ut as Ct,uu as St,wG as xe,dU as N,g2 as G,xy as Pt,g5 as ge,g6 as _e,qB as $t,eu as bt,ew as ye,nZ as Mt,rU as fe,nX as ve,pF as At,mo as Le,fk as Vt,n_ as Gt,nM as xt,P as Dt,M as P,Ez as Rt,cq as zt,gj as Ot,cw as Et,cv as It,cs as Tt,cp as Wt,nO as jt}from"./index-BS4ejk0L.js";import{e as Ut}from"./defaultUnit-DgRQNz8q.js";import{s as kt}from"./AnalysisView3D-B89FZHTh.js";import{e as ie}from"./interfaces-js1RL7O8.js";import{i as E,a as we,c as Ft}from"./quantityUtils-b7cV58jp.js";import{L as qt,w as Nt,k as Ht,T as Bt,G as Zt,S as Jt,d as Xt,W as Kt}from"./measurementUtils-CrXSOMz1.js";import{k as Ce}from"./euclideanAreaMeasurementUtils-5l6rCxRx.js";import{t as Qt}from"./UnitNormalizer-Ch1FgHWq.js";import{t as Yt,f as I}from"./LineVisualElement-uM3BzT66.js";import{V as Se,p as es,P as ts,l as ss}from"./EditGeometryOperations-pgU8rWPM.js";import{h as Pe}from"./quantityFormatUtils-Bce0XkeG.js";import{f as $e,_ as is,m as rs}from"./Segment-Coy_fsLu.js";import{a as ns}from"./Object3DVisualElement-CjWBQfQT.js";import"./getDefaultUnitForView-n2jWYNVB.js";import"./geometryEngine-C5wCr2lg.js";import"./geometryEngineBase-JM13Zf35.js";import"./hydrated-Brlnp7w9.js";import"./geodesicUtils-CnTg9Ebr.js";import"./measurementUtils-BC1ilJUF.js";import"./geometry2dUtils-qdpAqfFv.js";import"./unitFormatUtils-jNvliv8R.js";import"./VisualElement-CXf3NBDK.js";import"./viewUtils-CrPzLSYw.js";import"./TextOverlayItem-ByCv8vWw.js";function be(t,e,s,i,r){Ae(U,t),Y(k,t,e),F(U,s,U,r),F(k,s,k,r),T(i,k,U),Ve(i,i)}const U=u(),k=u();class os{get numVertices(){return this._length}get hasStagedVertex(){return this._hasCursorPoint}constructor(e,s){this.validMeasurement=!1,this.positionsWorldCoords=[],this.positionsRenderCoords=[],this.positionsProjectedWorldCoords=[],this.positionsFittedRenderCoords=[],this.positionsGeographic=[],this.positionsSpherical=[],this.positionsStereographic=[],this.pathSegmentLengths=[],this.geodesicPathSegmentLengths=[],this.perimeterSegmentLengths=[],this.intersectingSegments=new Set,this.geodesicIntersectingSegments=new Set,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.areaCentroidWorldCoords=u(),this.areaCentroidRenderCoords=u(),this.geodesicAreaCentroidRenderCoords=u(),this.area=null,this.geodesicArea=null,this.pathLength=null,this.geodesicPathLength=null,this.perimeterLength=null,this._length=0,this._centroidRenderCoords=u(),this._planeWorldCoords=Re(),this._worldUp=u(),this._worldTangent=u(),this._frame=[u(),u(),u()],this._pathVersion=-1,this._hasCursorPoint=!1,this._mode=null,this._tempU=u(),this._tempV=u(),this._tempVec3=u(),this._tempSphere=ze(),this._sceneView=e,this.unitNormalizer=s}update(e,s,i,r,n,o){const h=s!=null,l=this._pathVersion===e.version,p=this._hasCursorPoint===h,c=this._mode===n;return!(l&&!o&&p&&c&&e.isValidPolygon)&&(this._pathVersion=e.version,this._hasCursorPoint=h,this._updateCursorSegmentLength(e,s),this._update(e,s,i,r,n),!0)}_update(e,s,i,r,n){const o=this.unitNormalizer,h=this._sceneView.renderSpatialReference,l=this.unitNormalizer.spatialReference;let p=e.numVertices;const c=!(s==null||s.equals(e.lastPoint)||p>2&&s.equals(e.firstPoint));c&&(p+=1);const m=!e.polygonIsClosed&&p>2,g=e.polygonIsClosed||m;this._resize(p);const y=ee(i.spatialReference),$=Ge(i.spatialReference,y)&&Oe(i.spatialReference),{positionsGeographic:w,positionsWorldCoords:M,positionsRenderCoords:b,positionsSpherical:x}=this,O=(f,v)=>{as(i.elevationProvider,f),X(f,M[v],l),X(f,b[v],h),$&&(He(f,w[v]),X(f,x[v],y),Ve(x[v],x[v]))};e.forEachVertexPosition((f,v)=>O(f,v)),c&&O(s,p-1);const S=this._updatePathLengths(g);if(this.pathLength=this._length>1?E(o.normalizeDistance(S),"meters"):null,$){const f=this._updateGeodesicPathLengths(g,l);this.geodesicPathLength=this._length>1?E(f,"meters"):null}else this.geodesicPathLength=null;if(this._updateMode(n),!g)return this.area=null,this.geodesicArea=null,this.perimeterLength=null,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.intersectingSegments.clear(),this.geodesicIntersectingSegments.clear(),void(this.validMeasurement=!1);this._updateAreaAndPerimeterLength(i,o,h,l,r),$&&this._updateGeodesicArea(i),this.validMeasurement=!0}getData(){return{validMeasurement:this.validMeasurement,numVertices:this.numVertices,hasStagedVertex:this.hasStagedVertex,positionsWorldCoords:this.positionsWorldCoords,positionsRenderCoords:this.positionsRenderCoords,positionsProjectedWorldCoords:this.positionsProjectedWorldCoords,positionsFittedRenderCoords:this.positionsFittedRenderCoords,positionsGeographic:this.positionsGeographic,positionsSpherical:this.positionsSpherical,positionsStereographic:this.positionsStereographic,pathSegmentLengths:this.pathSegmentLengths,geodesicPathSegmentLengths:this.geodesicPathSegmentLengths,perimeterSegmentLengths:this.perimeterSegmentLengths,intersectingSegments:this.intersectingSegments,geodesicIntersectingSegments:this.geodesicIntersectingSegments,triangleIndices:this.triangleIndices,geodesicTriangleIndices:this.geodesicTriangleIndices,areaCentroidWorldCoords:this.areaCentroidWorldCoords,areaCentroidRenderCoords:this.areaCentroidRenderCoords,geodesicAreaCentroidRenderCoords:this.geodesicAreaCentroidRenderCoords,fittingMode:this.fittingMode,area:this.area,geodesicArea:this.geodesicArea,pathLength:this.pathLength,geodesicPathLength:this.geodesicPathLength,perimeterLength:this.perimeterLength,unitNormalizer:this.unitNormalizer,actualMeasurementMode:this.actualMeasurementMode}}_resize(e){for(e<this._length&&(this.positionsWorldCoords.length=e,this.positionsRenderCoords.length=e,this.positionsProjectedWorldCoords.length=e,this.positionsFittedRenderCoords.length=e,this.positionsGeographic.length=e,this.positionsSpherical.length=e,this.positionsStereographic.length=e,this.pathSegmentLengths.length=e,this.geodesicPathSegmentLengths.length=e,this.perimeterSegmentLengths.length=e,this._length=e);this._length<e;)this.positionsWorldCoords.push(u()),this.positionsRenderCoords.push(u()),this.positionsProjectedWorldCoords.push(oe()),this.positionsFittedRenderCoords.push(u()),this.positionsGeographic.push(u()),this.positionsSpherical.push(u()),this.positionsStereographic.push(oe()),this.pathSegmentLengths.push(0),this.geodesicPathSegmentLengths.push(0),this.perimeterSegmentLengths.push(0),++this._length}_updatePathLengths(e){const s=this.positionsWorldCoords,i=this.pathSegmentLengths;let r=0;for(let n=0;n<this._length;++n){const o=i[n]=Ee(s[n],s[(n+1)%this._length]);(n<this._length-1||e)&&(r+=o)}return r}_updateGeodesicPathLengths(e,s){const i=this.positionsGeographic,r=this.geodesicPathSegmentLengths;let n=0;for(let o=0;o<this._length;++o){const h=r[o]=qt(i[o],i[(o+1)%this._length],s??void 0);(o<this._length-1||e)&&(n+=h)}return n}_updateAreaAndPerimeterLength(e,s,i,r,n){const o=e.renderCoordsHelper,h=this.positionsWorldCoords,l=this.positionsRenderCoords,p=this.positionsProjectedWorldCoords,c=this.positionsFittedRenderCoords,m=this._planeWorldCoords,g=this._centroidRenderCoords;te(l,g),o.worldUpAtPosition(g,this._worldUp),o.worldBasisAtPosition(g,Ie.X,this._worldTangent),be(g,this._worldUp,i,this._worldUp,r),be(g,this._worldTangent,i,this._worldTangent,r),h.length>2&&Nt(h,m),this.fittingMode=this._selectFittingMode(m,h,this._worldUp,n);let y=0;if(this.fittingMode==="horizontal"){let S=-1/0;l.forEach((f,v)=>{const ne=o.getAltitude(l[v]);ne>S&&(S=ne,y=v)})}const $=h[y];let w=m,M=this._worldTangent;this.fittingMode==="horizontal"?w=this._worldUp:this.fittingMode==="vertical"&&(w=this._tempVec3,M=this._worldUp,ae(m,this._worldUp,w)),Ae(this._frame[2],w),ae(M,w,this._frame[0]),Te(this._frame[1],this._frame[0],this._frame[2]),We(this._frame[1],this._frame[1]);const b=this._tempVec3,x=this._tempU,O=this._tempV;for(let S=0;S<this._length;++S){const f=p[S],v=c[S];T(b,h[S],$),he(f,D(this._frame[0],b),D(this._frame[1],b)),J(x,this._frame[0],f[0]),J(O,this._frame[1],f[1]),Y(b,x,O),Y(b,b,$),F(b,r,v,i)}this.perimeterLength=this._length>0?E(s.normalizeDistance(this._updatePerimeterLengths()),"meters"):null,te(c,this.areaCentroidRenderCoords),F(this.areaCentroidRenderCoords,i,this.areaCentroidWorldCoords,r),this._updateIntersectingSegments(),this.area=this.intersectingSegments.size===0?we(s.normalizeArea(this._computeArea()),"square-meters"):null}_updateGeodesicArea(e){const{renderCoordsHelper:s,spatialReference:i}=e,{positionsSpherical:r,positionsStereographic:n}=this,o=this._tempVec3,h=Ht(r,o);if(!h)return void(this.geodesicArea=null);const l=this._tempU,p=this._tempV;je(o,l,p);for(let c=0;c<this._length;++c){const m=D(r[c],l),g=D(r[c],p),y=D(r[c],o);he(n[c],m/y,g/y)}J(o,o,Ue(i).radius),s.toRenderCoords(o,ee(i),this.geodesicAreaCentroidRenderCoords),this._updateGeodesicIntersectingSegments(),this.geodesicArea=h&&this.geodesicIntersectingSegments.size===0?we(this._computeGeodesicArea(),"square-meters"):null}_updatePerimeterLengths(){const e=this.positionsProjectedWorldCoords,s=this.perimeterSegmentLengths;let i=0;for(let r=0;r<this._length;++r)i+=s[r]=ke(e[r],e[(r+1)%this._length]);return i}_updateIntersectingSegments(){const e=this.positionsProjectedWorldCoords,s=this.intersectingSegments;s.clear();for(let i=0;i<this._length;++i)for(let r=i+2;r<this._length;++r){if((r+1)%this._length===i)continue;const n=e[i],o=e[(i+1)%this._length],h=e[r],l=e[(r+1)%this._length];le(n,o,h,l)&&(s.add(i),s.add(r))}}_computeArea(){const e=this.positionsProjectedWorldCoords,s=this.triangleIndices=de(Ce(e));let i=0;for(let r=0;r<s.length;r+=3)i+=Fe(e[s[r]],e[s[r+1]],e[s[r+2]]);return i}_updateGeodesicIntersectingSegments(){const e=this.positionsStereographic,s=this.geodesicIntersectingSegments;s.clear();for(let i=0;i<this._length;++i)for(let r=i+2;r<this._length;++r){if((r+1)%this._length===i)continue;const n=e[i],o=e[(i+1)%this._length],h=e[r],l=e[(r+1)%this._length];le(n,o,h,l)&&(s.add(i),s.add(r))}}_computeGeodesicArea(){const e=this.positionsGeographic,s=this.positionsStereographic,i=this.geodesicTriangleIndices=de(Ce(s));let r=0;for(let n=0;n<i.length;n+=3)r+=Bt(e[i[n]],e[i[n+1]],e[i[n+2]],qe.WGS84);return r}_selectFittingMode(e,s,i,r){const n=s.map(c=>Math.abs(Zt(e,c))).reduce((c,m)=>Math.max(c,m),0);Jt(s,this._tempSphere);const o=n/(2*this._tempSphere[3]),h=o<r.maxRelativeErrorCoplanar,l=o<r.maxRelativeErrorAlmostCoplanar;let p="horizontal";return h?p="oblique":l&&(p=Math.abs(D(i,e))>Math.cos(Ne(r.verticalAngleThreshold))?"horizontal":"vertical"),p}_updateCursorSegmentLength(e,s){const i=e.lastPoint;e.isValidPolygon||i==null||s==null?(this.geodesicStagedSegmentLength=null,this.stagedSegmentLength=null):(this.geodesicStagedSegmentLength=E(Xt(i,s),"meters"),this.stagedSegmentLength=E(this.unitNormalizer.normalizeDistance(Kt(i,s,this.unitNormalizer.spatialReference)),"meters"))}_updateMode(e){if(e===ie.Auto){this.actualMeasurementMode="euclidean";let s=0;this.geodesicPathLength!=null&&(s+=this.geodesicPathLength.value),s>hs&&(this.actualMeasurementMode="geodesic")}else this.actualMeasurementMode=e===ie.Euclidean?"euclidean":"geodesic";this.geodesicPathLength==null&&(this.actualMeasurementMode="euclidean"),this._mode=e}}function as(t,e){e.hasZ||(e.z=Be(t,e,"ground")??0)}const hs=1e5;let R=class extends re{constructor(e){super(e)}initialize(){const e=this.view.spatialReference,s=ee(e),i=s===Ze?Je:s,r=!e||Ge(e,i)?i:e,n=new Qt(r);this._measurementDataManager=new os(this.view,n),this.addHandles([this.analysisViewData.path.on("change",()=>this._update()),z(()=>this.analysisViewData.stagedPoint,()=>this._update(),ce),z(()=>this.analysisViewData.mode,()=>this._update(),ce)]),this._update()}_update(e=!1){const{analysisViewData:s,view:i}=this,r={maxRelativeErrorCoplanar:.005,maxRelativeErrorAlmostCoplanar:.01,verticalAngleThreshold:80};this._measurementDataManager.update(s.path,s.stagedPoint,i,r,s.mode,e)&&(s.measurementData=this._measurementDataManager.getData())}};a([d({constructOnly:!0})],R.prototype,"view",void 0),a([d({constructOnly:!0})],R.prototype,"analysis",void 0),a([d({constructOnly:!0})],R.prototype,"analysisViewData",void 0),R=a([B("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")],R);let C=class extends Xe.EventedAccessor{constructor(e={}){super(e),this._version=0,this._internalGeometryChange=!1,this._extent=pe()}set areaMeasurement(e){this._set("areaMeasurement",e),e!=null&&this.view!=null&&this._initialize(e,this.view)}set view(e){this._set("view",e),e!=null&&this.areaMeasurement!=null&&this._initialize(this.areaMeasurement,e)}get constructed(){return this.areaMeasurement!=null&&this.view!=null}get version(){return this._version}get isEmptyPolygon(){return!this.constructed||this._editGeometry.components.length===0}get isValidPolygon(){return this.constructed&&this.polygonIsClosed}get extent(){if(this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].vertices.length>0){const e=pe(this._extent);return this.forEachVertex(s=>{Ke(e,s.pos)}),e}return null}get spatialReference(){return this.constructed?this._editGeometry.coordinateHelper.spatialReference:null}_initialize(e,s){this.removeAllHandles(),this.addHandles(z(()=>e.geometry,()=>{this._updateEditGeometryFromModelGeometry(e,s)},se)),this._makeDirty(!0)}_makeDirty(e=!1){this.notifyChange("polygonIsClosed"),this.notifyChange("isValidPolygon"),this.notifyChange("initialized"),this.notifyChange("extent"),e&&this.notifyChange("numVertices")}_updateEditGeometryFromModelGeometry(e,s){if(this._version++,this._internalGeometryChange)return;this.removeHandles("EditGeometry");let i=e.geometry;if(i!=null){const r=Qe(i,s.spatialReference);r==null&&Yt(e,i.spatialReference,Ye.getLogger(this)),i=r}this._editGeometryOperations=i!=null?Se.fromGeometry(i,s.state.viewingMode):new Se(new es("polygon",ts(!0,!1,s.spatialReference))),this._makeDirty(!0),this.emit("change"),this.addHandles(this._editGeometry.on("change",r=>{this._makeDirty(r.addedVertices!=null||r.removedVertices!=null),this._internalGeometryChange=!0,e.geometry=this.numVertices>0?this._editGeometry.geometry:null,this._internalGeometryChange=!1}),"EditGeometry")}get _editGeometry(){return this._editGeometryOperations.data}get vertices(){const e=[];return this.forEachVertex(s=>{e.push(s)}),e}get numVertices(){return this.constructed&&this._editGeometry.components.length>0?this._editGeometry.components[0].vertices.length:0}get polygonIsClosed(){return this._editGeometry.components.length>0&&this._editGeometry.components[0].isClosed()}get firstPoint(){if(this.constructed&&this._editGeometry.components.length>0){const e=this._editGeometry.components[0].getFirstVertex();if(e!=null)return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}return null}get lastPoint(){if(this.constructed&&this._editGeometry.components.length>0){const e=this._editGeometry.components[0].getLastVertex();if(e!=null)return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}return null}getVertex(e){if(!this.constructed||this._editGeometry.components.length===0||this._editGeometry.components[0].vertices.length===0)return null;const s=this._editGeometry.components[0].vertices[0];let i=s;do{if(i.index===e)return i;i=i.rightEdge.rightVertex}while(i!==s&&i!=null);return null}getVertexPositionAsPoint(e){return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}getVertexPositionAsPointFromIndex(e){return this._editGeometry.coordinateHelper.vectorToPoint(this.getVertex(e).pos)}forEachVertex(e){this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].iterateVertices(e)}forEachVertexPosition(e){const s=this._editGeometry.coordinateHelper;this.forEachVertex((i,r)=>{s.vectorToPoint(i.pos,Me),e(Me,r)})}clear(){this.areaMeasurement!=null&&(this.areaMeasurement.geometry=null)}add(e){if(!this.constructed)return null;if(this._editGeometry.components.length===0){const i=this.view;this._editGeometry.components.push(new ss(i.spatialReference,i.state.viewingMode))}const s=this._editGeometryOperations.appendVertex(this._editGeometry.coordinateHelper.pointToVector(e));return this.emit("change"),s}close(){if(!this.constructed||this._editGeometry.components.length===0)return null;const e=this._editGeometryOperations.closeComponent(this._editGeometry.components[0]);return this.emit("change"),e}ensureContains(e,s=""){let i=!1;if(this._editGeometry.components.forEach(r=>{r.iterateVertices(n=>{n===e&&(i=!0)})}),!i)throw new Error(`vertex doesnt exist ${s}`);return i}setVertexPosition(e,s){if(!this.constructed)return null;const i=this._editGeometryOperations.setVertexPosition(e,this._editGeometry.coordinateHelper.pointToVector(s));return this.emit("change"),i}equals(e){if(this.numVertices!==e.numVertices)return!1;let s=!0;return this.forEachVertexPosition((i,r)=>{const n=e.getVertexPositionAsPointFromIndex(r);i.equals(n)||(s=!1)}),!!s}};a([d({value:null})],C.prototype,"areaMeasurement",null),a([d({value:null})],C.prototype,"view",null),a([d()],C.prototype,"isEmptyPolygon",null),a([d()],C.prototype,"isValidPolygon",null),a([d()],C.prototype,"extent",null),a([d()],C.prototype,"spatialReference",null),a([d()],C.prototype,"numVertices",null),a([d()],C.prototype,"polygonIsClosed",null),C=a([B("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurement3DPathHelper")],C);const Me=new et;function De(t){const e=new tt,{vertex:s,fragment:i}=e;return st(s,t),e.attributes.add(q.POSITION,"vec3"),e.attributes.add(q.UV0,"vec2"),e.varyings.add("vUV","vec2"),t.multipassEnabled&&e.varyings.add("depth","float"),s.code.add(ue`
    void main(void) {
      vUV = uv0;
      ${t.multipassEnabled?"depth = (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `),e.include(it,t),i.uniforms.add(new rt("size",r=>r.size)),i.uniforms.add(new me("color1",r=>r.color1)),i.uniforms.add(new me("color2",r=>r.color2)),i.include(nt),i.code.add(ue`
    void main() {
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      ${t.transparencyPassType===W.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
  `),e}const ls=Object.freeze(Object.defineProperty({__proto__:null,build:De},Symbol.toStringTag,{value:"Module"}));class Z extends lt{initializeProgram(e){return new dt(e.rctx,Z.shader.get().build(this.configuration),ct)}_setPipelineState(e){const s=this.configuration,i=e===W.NONE,r=e===W.FrontFace;return pt({blending:s.transparent?i?cs:ut(e):null,depthTest:{func:mt(e)},depthWrite:i?s.writeDepth?gt:null:_t(e),colorWrite:yt,polygonOffset:i||r?s.polygonOffset?ds:null:{factor:-1,units:-25}})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}Z.shader=new ot(ls,()=>at(()=>Promise.resolve().then(()=>fs),void 0));const ds={factor:0,units:-25},cs=ht(j.SRC_ALPHA,j.ONE,j.ONE_MINUS_SRC_ALPHA,j.ONE_MINUS_SRC_ALPHA);class A extends ft{constructor(){super(...arguments),this.transparencyPassType=W.NONE,this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1,this.multipassEnabled=!1,this.cullAboveGround=!1}}a([V({count:W.COUNT})],A.prototype,"transparencyPassType",void 0),a([V()],A.prototype,"transparent",void 0),a([V()],A.prototype,"writeDepth",void 0),a([V()],A.prototype,"polygonOffset",void 0),a([V()],A.prototype,"multipassEnabled",void 0),a([V()],A.prototype,"cullAboveGround",void 0),a([V({constValue:!1})],A.prototype,"occlusionPass",void 0);class ps extends vt{constructor(e){super(e,new ms),this.produces=new Map([[K.OPAQUE_MATERIAL,s=>Q(s)&&!this.parameters.transparent],[K.TRANSPARENT_MATERIAL,s=>Q(s)&&this.parameters.transparent&&this.parameters.writeDepth],[K.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,s=>Q(s)&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new A}getConfiguration(e,s){return this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.transparencyPassType=s.transparencyPassType,this._configuration.multipassEnabled=s.multipassEnabled,this._configuration.cullAboveGround=s.multipassTerrain.cullAboveGround,this._configuration}createGLMaterial(e){return new us(e)}createBufferWriter(){return new Lt(wt)}}class us extends Ct{beginSlot(e){return this.ensureTechnique(Z,e)}}let ms=class extends St{constructor(){super(...arguments),this.size=xe(1,1),this.color1=N(.75,.75,.75,1),this.color2=N(.5,.5,.5,1),this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1}};class gs extends ns{constructor(e){super(e),this._checkerBoardMaterial=null,this._renderOccluded=G.OccludeAndTransparent,this._geometry=null,this._size=xe(1,1),this._color1=N(1,.5,0,.5),this._color2=N(1,1,1,.5),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){Pt(this._size,e),this._updateMaterial()}get color1(){return this._color1}set color1(e){ge(e,this._color1)||(_e(this._color1,e),this._updateMaterial())}get color2(){return this._color2}set color2(e){ge(e,this._color2)||(_e(this._color2,e),this._updateMaterial())}_updateMaterial(){this._checkerBoardMaterial!=null&&this._checkerBoardMaterial.setParameters({size:this._size,color1:this._color1,color2:this._color2,renderOccluded:this._renderOccluded})}createExternalResources(){this._checkerBoardMaterial=new ps({size:this._size,color1:this._color1,color2:this._color2,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:G.OccludeAndTransparent,isDecoration:this.isDecoration})}destroyExternalResources(){this._checkerBoardMaterial=null}forEachExternalMaterial(e){this._checkerBoardMaterial!=null&&e(this._checkerBoardMaterial)}createGeometries(e){if(this._geometry==null||this._checkerBoardMaterial==null)return;const s=_s;$t(s,this.transform);const i=this._geometry,r=[],n=u();i.position.forEach(l=>{T(n,l,s),r.push(n[0],n[1],n[2])});const o=[];i.uv.forEach(l=>{o.push(l[0],l[1])});const h=new bt(this._checkerBoardMaterial,[[q.POSITION,new ye(r,i.triangleIndices,3,!0)],[q.UV0,new ye(o,i.triangleIndices,2,!0)]]);e.addGeometry(h)}}const _s=u();let L=class extends re{get _parameters(){const{accentColor:t,textColor:e}=this.view.effectiveTheme,s=Mt(t),i=fe(t,.5),r=fe(ve(t),.5),n=ve(e,At.Low);return{accentColor:s,transparentAccentColor:i,transparentContrastColor:r,intersectingLineColor:[1,.2,0,1],textColor:e,textBackgroundColor:Le(n,.6),textCalloutColor:Le(n,.5),pathLineWidth:3,perimeterLineWidth:2,projectionLineWidth:2,projectionLineStippleSize:5,labelDistance:25}}get visible(){return this.analysisViewData.visible}get testData(){return{labels:{area:this._areaLabel,perimeterLength:this._perimeterLengthLabel}}}constructor(t){super(t),this._path=null,this._intersectedPath=null,this._perimeter=null,this._intersectedPerimeter=null,this._projectionLines=null,this._measurementArea=null,this._areaLabel=null,this._perimeterLengthLabel=null,this._pathSegments=[],this._perimeterSegments=[],this._origin=u(),this._originTransform=Vt(),this.messages=null,this.viewData=ys,this.areaLabel=null,this.perimeterLengthLabel=null,this.loadingMessages=!0}initialize(){const{analysisViewData:t,_parameters:e,view:s}=this;this._path=new I({view:s,attached:!0,width:e.pathLineWidth,polygonOffset:!0,renderOccluded:G.OccludeAndTransparent,isDecoration:!0}),this._intersectedPath=new I({view:s,attached:!0,width:e.pathLineWidth,polygonOffset:!0,renderOccluded:G.OccludeAndTransparent,isDecoration:!0}),this._perimeter=new I({view:s,attached:!0,width:e.perimeterLineWidth,polygonOffset:!0,renderOccluded:G.OccludeAndTransparent,isDecoration:!0}),this._intersectedPerimeter=new I({view:s,attached:!0,width:e.perimeterLineWidth,color:e.intersectingLineColor,polygonOffset:!0,renderOccluded:G.OccludeAndTransparent,isDecoration:!0}),this._projectionLines=new I({view:s,attached:!0,width:e.projectionLineWidth,stipplePattern:Gt(e.projectionLineStippleSize),polygonOffset:!0,renderOccluded:G.OccludeAndTransparent,isDecoration:!0}),this._measurementArea=new gs({view:s,attached:!0,isDecoration:!0});const i={attached:!0,view:s,isDecoration:!0};this._areaLabel=new $e({...i,fontSize:H.Large}),this._perimeterLengthLabel=new $e({...i,fontSize:H.Small}),this.addHandles([z(()=>[t.mode,this.visible,t.unit,t.measurementData,t.stagedPoint],()=>this._update(),se),z(()=>{var r;return(r=s.state)==null?void 0:r.camera},()=>this._updateLabels(),se),xt(()=>this._updateMessageBundle()),z(()=>this._parameters,({accentColor:r,transparentAccentColor:n,transparentContrastColor:o,textColor:h,textBackgroundColor:l,textCalloutColor:p})=>{const{_path:c,_intersectedPath:m,_perimeter:g,_projectionLines:y,_measurementArea:$,_areaLabel:w,_perimeterLengthLabel:M}=this;c.color=r,m.color=r,g.color=r,y.color=r,$.color1=n,$.color2=o,w.textColor=h,w.backgroundColor=l,w.calloutColor=p,M.textColor=h,M.backgroundColor=l,M.calloutColor=p},Dt)]),this._updateMessageBundle()}destroy(){this._measurementArea=P(this._measurementArea),this._path=P(this._path),this._intersectedPath=P(this._intersectedPath),this._perimeter=P(this._perimeter),this._intersectedPerimeter=P(this._intersectedPerimeter),this._areaLabel=P(this._areaLabel),this._perimeterLengthLabel=P(this._perimeterLengthLabel),this._projectionLines=P(this._projectionLines),this.set("view",null)}_update(){if(this.destroyed||!this.view.ready||!this.view.renderCoordsHelper)return;const{analysisViewData:{measurementData:t},analysisViewData:e}=this;t!=null&&(this._updateViewData(t,e.path,e.stagedPoint),this._updateOrigin(),this._updatePathSegments(),this._updatePerimeterSegments(),this._updateArea(),this._updateProjectionLines(),this._updateLabels())}_updateViewData(t,e,s){const i=t.validMeasurement,r=t.actualMeasurementMode==="geodesic",n=r?t.geodesicArea:t.area;let o=1;if(n){const l=this._toPreferredAreaUnit(n,this.analysisViewData.unit);o=Rt(Math.sqrt(l.value)/Math.sqrt(300)),o*=Math.sqrt(zt(1,l.unit,"square-meters")),o/=t.unitNormalizer.normalizeDistance(1)}const h={validMeasurement:i,numVertices:t.numVertices,hasStagedVertex:t.hasStagedVertex,path:e,pathVersion:e.version,stagedPoint:s,measurementData:t,mode:t.actualMeasurementMode,positionsGeographic:t.positionsGeographic,positionsRenderCoords:t.positionsRenderCoords,positionsProjected:t.positionsProjectedWorldCoords,positionsFittedRenderCoords:t.positionsFittedRenderCoords,intersectingSegments:r?t.geodesicIntersectingSegments:t.intersectingSegments,triangleIndices:r?t.geodesicTriangleIndices:t.triangleIndices,fittingMode:t.fittingMode,areaCentroid:r?t.geodesicAreaCentroidRenderCoords:t.areaCentroidRenderCoords,pathLengthLabelSegmentIndex:i?0:e.numVertices-2,perimeterLengthLabelSegmentIndex:0,checkerSize:o};this._set("viewData",h)}_updateOrigin(){const t=this.viewData;te(t.positionsRenderCoords,this._origin),Ot(this._originTransform,this._origin),this._measurementArea.transform=this._originTransform,this._projectionLines.transform=this._originTransform}_createSegments(t){const e=this.viewData,s=this.view.renderCoordsHelper.spatialReference,i=e.mode,r=[],n=[],o=[],h=e.numVertices,l=e.validMeasurement?h:h-1;for(let c=0;c<l;++c){const m=e[t][c],g=e[t][(c+1)%h];let y=null;switch(i){case"euclidean":y=new rs(m,g);break;case"geodesic":y=new is(m,g,s)}e.intersectingSegments.has(c)?o.push(y):n.push(y),r.push(y)}let p=null;return e.validMeasurement&&e.hasStagedVertex&&l>=2?p=r[r.length-2]:e.hasStagedVertex&&l>=1&&(p=r[r.length-1]),{all:r,nonIntersecting:n,intersecting:o,stagedSegment:p}}_updatePathSegments(){const{visible:t}=this,e=this._createSegments("positionsRenderCoords");this._path.setGeometryFromSegments(e.nonIntersecting,this._origin),this._path.visible=t,this._intersectedPath.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPath.visible=t,this._pathSegments=e.all}_updatePerimeterSegments(){const t=this.visible&&this.viewData.mode==="euclidean",e=this._createSegments("positionsFittedRenderCoords");this._perimeter.setGeometryFromSegments(e.nonIntersecting,this._origin),this._perimeter.visible=t,this._intersectedPerimeter.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPerimeter.visible=t,this._perimeterSegments=e.all}_updateArea(){const t=this.viewData;switch(t.mode){case"euclidean":this._updateAreaEuclidean(t);break;case"geodesic":this._updateAreaGeodesic()}}_updateAreaEuclidean(t){const e=this.visible;t.validMeasurement&&t.intersectingSegments.size===0&&t.triangleIndices?(this._measurementArea.geometry={uv:t.positionsProjected,position:t.positionsFittedRenderCoords,triangleIndices:t.triangleIndices},this._measurementArea.size=[t.checkerSize,t.checkerSize],this._measurementArea.visible=e):this._measurementArea.visible=!1}_updateAreaGeodesic(){this._measurementArea.visible=!1}_updateProjectionLines(){const t=this.viewData,e=this.visible,s=t.mode,i=t.numVertices;if(i>0&&t.validMeasurement&&s==="euclidean"){const r=[];for(let n=0;n<i;++n){const o=u();T(o,t.positionsRenderCoords[n],this._origin);const h=u();T(h,t.positionsFittedRenderCoords[n],this._origin),r.push([o,h])}this._projectionLines.geometry=r,this._projectionLines.visible=e}else this._projectionLines.geometry=null,this._projectionLines.visible=!1}_updateLabels(){if(this.destroyed)return;const{viewData:t}=this,{measurementData:e,mode:s,path:i}=t;if(!i)return;const r=this.visible,n=this._formatAreaLabel(this.messages,s==="geodesic"?e.geodesicArea:e.area,this.analysisViewData.unit);if(n!=null?(this._areaLabel.geometry={type:"point",point:t.areaCentroid},this._areaLabel.text=n,this._areaLabel.visible=t.validMeasurement&&t.intersectingSegments.size===0&&r):this._areaLabel.visible=!1,this._set("areaLabel",n),t.validMeasurement&&t.intersectingSegments.size===0){const o=t.mode==="geodesic",h=o?e.geodesicPathLength:e.validMeasurement?e.perimeterLength:e.pathLength,l=this._formatLengthLabel(this.messages,h,this.analysisViewData.unit);this._set("perimeterLengthLabel",l),this._perimeterLengthLabel.distance=this._parameters.labelDistance,this._perimeterLengthLabel.anchor="top",this._perimeterLengthLabel.text=l,this._perimeterLengthLabel.visible=!0;let p=!0;for(let c=0;c<t.numVertices;++c){const m=(t.perimeterLengthLabelSegmentIndex+c)%t.numVertices,g=o||!e.validMeasurement?this._pathSegments[m]:this._perimeterSegments[m];if(p=!0,this._perimeterLengthLabel.geometry={type:"segment",segment:g,sampleLocation:"center"},!this._perimeterLengthLabel.overlaps(this._areaLabel))break;p=!1}this._perimeterLengthLabel.visible=p&&r}else this._perimeterLengthLabel.visible=!1}_toPreferredAreaUnit(t,e){return Ft(t,this._preferredAreaUnit(t,e))}_preferredAreaUnit(t,e){switch(e){case"metric":return It(t.value,t.unit);case"imperial":return Et(t.value,t.unit);default:return e}}_preferredLengthUnit(t,e){const s=this._deriveLengthUnitFromAreaUnit(e);switch(s){case"metric":return Wt(t.value,t.unit);case"imperial":return Tt(t.value,t.unit);default:return s}}_deriveLengthUnitFromAreaUnit(t){switch(t){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";case"square-meters":return"meters";case"square-kilometers":return"kilometers"}throw new Error("unhandled area unit")}_formatAreaLabel(t,e,s){return t&&e&&Pe(t,e,this._preferredAreaUnit(e,s))}_formatLengthLabel(t,e,s){return t&&e&&Pe(t,e,this._preferredLengthUnit(e,s))}_updateMessageBundle(){this.loadingMessages=!0,jt("esri/core/t9n/Units").then(t=>{this.messages=t,this.view&&this._update()}).finally(()=>{this.loadingMessages=!1})}};var H;a([d()],L.prototype,"_parameters",null),a([d()],L.prototype,"view",void 0),a([d()],L.prototype,"messages",void 0),a([d()],L.prototype,"analysis",void 0),a([d()],L.prototype,"viewData",void 0),a([d()],L.prototype,"analysisViewData",void 0),a([d({readOnly:!0})],L.prototype,"areaLabel",void 0),a([d({readOnly:!0})],L.prototype,"perimeterLengthLabel",void 0),a([d()],L.prototype,"loadingMessages",void 0),a([d()],L.prototype,"visible",null),L=a([B("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementVisualization")],L),function(t){t[t.Small=12]="Small",t[t.Large=16]="Large"}(H||(H={}));const ys={validMeasurement:!1,numVertices:0,hasStagedVertex:!1,path:null,pathVersion:-1,stagedPoint:null,measurementData:null,mode:null,positionsGeographic:null,positionsRenderCoords:null,positionsProjected:null,positionsFittedRenderCoords:null,intersectingSegments:null,triangleIndices:null,fittingMode:null,areaCentroid:null,pathLengthLabelSegmentIndex:null,perimeterLengthLabelSegmentIndex:null,checkerSize:null};let _=class extends kt(re){constructor(t){super(t),this.type="area-measurement-view-3d",this.analysis=null,this.measurementData=null,this.lastDraggedVertex=null,this.stagedPoint=null,this.mode=ie.Auto}initialize(){const{analysis:t,view:e}=this;this.path=new C({view:e,areaMeasurement:t}),this.analysisVisualization=new L({view:e,analysis:t,analysisViewData:this}),this.analysisController=new R({view:e,analysis:t,analysisViewData:this})}destroy(){this.analysisController=P(this.analysisController),this.analysisVisualization=P(this.analysisVisualization),this.path.destroy()}get updating(){var t;return!!((t=this.analysisVisualization)!=null&&t.loadingMessages)}get result(){const{measurementData:t}=this;return t==null?{area:null,mode:null,perimeter:null}:t.actualMeasurementMode==="euclidean"?{area:t.area,perimeter:t.perimeterLength,mode:"euclidean"}:{area:t.geodesicArea,perimeter:t.pathLength,mode:"geodesic"}}get viewData(){return this.analysisVisualization.viewData}get validMeasurement(){return this.path.isValidPolygon}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController}}};a([d({readOnly:!0})],_.prototype,"type",void 0),a([d({constructOnly:!0,nonNullable:!0})],_.prototype,"analysis",void 0),a([d()],_.prototype,"updating",null),a([d()],_.prototype,"analysisVisualization",void 0),a([d()],_.prototype,"analysisController",void 0),a([d()],_.prototype,"result",null),a([d()],_.prototype,"measurementData",void 0),a([d()],_.prototype,"viewData",null),a([d()],_.prototype,"validMeasurement",null),a([d()],_.prototype,"path",void 0),a([d()],_.prototype,"lastDraggedVertex",void 0),a([d()],_.prototype,"stagedPoint",void 0),a([d()],_.prototype,"mode",void 0),a([d()],_.prototype,"unit",null),a([d(Ut)],_.prototype,"_defaultUnit",void 0),_=a([B("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")],_);const Hs=_,fs=Object.freeze(Object.defineProperty({__proto__:null,build:De},Symbol.toStringTag,{value:"Module"}));export{Hs as default};