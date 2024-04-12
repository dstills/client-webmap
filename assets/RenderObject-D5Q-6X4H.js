function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ShadedColorMaterial.glsl-BEwQAGcL.js","assets/index-D2dWKXoe.js","assets/index-DvE0Cji0.css","assets/InteractiveToolBase-DdeEXL8I.js","assets/drawUtils-CLrYXPOv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{f_ as Re,fD as je,fP as Pe,bW as C,tO as De,fi as M,eL as $,tP as D,c4 as ze,fd as $e,p0 as Fe,am as Ce,fj as xe,fV as Z,p3 as Me,eT as x,fE as Ie,cz as Ne,fH as B,qy as ee,lb as te,fR as ie,fI as se,iO as A,tQ as ke,g7 as ne,gg as y,eU as Q,tR as ae,f0 as oe,gf as We,eV as Be,tS as Ve,nD as He,fk as Ue,bo as qe,d5 as Ge,M as Qe,fN as Xe,tT as Ye,tU as Je,mf as V,tV as T,fl as Ke,eK as X,fQ as we,tW as Ze,tX as re,lD as et,tY as tt,tZ as it,m6 as ce,t_ as st,eA as nt,t$ as at,u0 as le,u1 as f,u2 as ot,u3 as S,u4 as rt,u5 as ct,u6 as lt,u7 as ht,u8 as he,et as h,u9 as dt,ua as ut,ub as _t,uc as gt,ud as P,ue as pt,uf as ft,_ as vt,E as b,ug as m,mr as R,uh as bt,ui as mt,uj as St,uk as yt,ul as $t,um as wt,pe as H,un as Ot,uo as Tt,up as Et,uq as Lt,ur as At,us as Rt,pd as U,ut as q,uu as de,uv as jt,uw as Pt,dS as ue,eJ as Y,ux as Dt,uy as zt,uz as Ft,qM as Ct,uA as xt,uB as Mt,uC as It,uD as Nt,eI as Oe,lM as kt,rX as Te,ge as Ee,g0 as Le,uE as Wt,rH as Bt}from"./index-D2dWKXoe.js";class ri{constructor(e){var i;this.metadata=void 0,this._camera=new De,this._elevation={offset:0,override:null},this.collisionType={type:"point"},this.collisionPriority=0,this._renderObjects=new Array,this.autoScaleRenderObjects=!0,this._available=!0,this._noDisplayCount=0,this._radius=10,this._worldSized=!1,this.focusMultiplier=2,this.touchMultiplier=2.5,this.worldOriented=!1,this._modelTransform=M(),this._worldFrame=null,this._renderLocation=$(),this._renderLocationDirty=!0,this._location=new C({x:0,y:0,z:0}),this._elevationAlignedLocation=new C,this._elevationAlignedLocationDirty=!0,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.consumesClicks=!0,this.cursor=null,this.grabCursor=null,this._grabbing=!1,this.dragging=!1,this._hovering=!1,this._selected=!1,this._state=D.None,this._focused=!1,this.events=new ze.EventEmitter,this._screenLocation={screenPointArray:$e(),renderScreenPointArray:Fe(),pixelSize:0},this._screenLocationDirty=!0,this._engineResourcesAddedToStage=!1,this._attached=!1,this._location.spatialReference=e.view.spatialReference,Object.assign(this,e);const t=(i=this.view.state)==null?void 0:i.camera;t&&this._camera.copyFrom(t)}destroy(){this._applyObjectTransform=Gt,this._removeResourcesFromStage(),this._engineResources=null,this.view=null,this._camera=null}get _stage(){var e;return(e=this.view)==null?void 0:e._stage}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this._elevationAlignedLocationDirty=!0,this._renderLocationDirty=!0,this._updateEngineObject()}get renderObjects(){return this._renderObjects}set renderObjects(e){this._removeResourcesFromStage(),this._engineResources=null,this._renderObjects=e.slice(),this._updateEngineObject()}set available(e){e!==this._available&&(this._available=e,this._updateEngineObject())}get available(){return this._available}disableDisplay(){return this._noDisplayCount++,this._noDisplayCount===1&&this._updateEngineObject(),Ce(()=>{this._noDisplayCount--,this._noDisplayCount===0&&this._updateEngineObject()})}set radius(e){e!==this._radius&&(this._radius=e,this._updateEngineObject())}get radius(){return this._radius}set worldSized(e){e!==this._worldSized&&(this._worldSized=e,this._updateEngineObject())}get worldSized(){return this._worldSized}get modelTransform(){return this._modelTransform}set modelTransform(e){_e(e)&&(this._screenLocationDirty=!0),xe(this._modelTransform,e),this._updateEngineObject()}get renderLocation(){return this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=M()),Vt(this.view,this._renderLocation,this._worldFrame)):this._worldFrame&&(this._worldFrame=null)),this._renderLocation}set renderLocation(e){this.view.renderCoordsHelper.fromRenderCoords(e,this._location),this.elevationAlignedLocation=this._location}get location(){return this._location}set location(e){Z(e,this._location),this._notifyLocationChanged()}_notifyLocationChanged(){this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!0,this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}get elevationAlignedLocation(){return this._elevationAlignedLocationDirty?(this._evaluateElevationAlignment(),this._updateElevationAlignedLocation(),this._elevationAlignedLocation):this._elevationAlignedLocation}set elevationAlignedLocation(e){Z(e,this._location),this._evaluateElevationAlignment(),this._location.z-=this._elevation.offset,this._updateElevationAlignedLocation(),this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}_updateElevationAlignedLocation(){const e=this._elevation.override!=null?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.x=this.location.x,this._elevationAlignedLocation.y=this.location.y,this._elevationAlignedLocation.z=e+this._elevation.offset,this._elevationAlignedLocation.spatialReference=Me(this.location.spatialReference),this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!1}grabbableForEvent(){return!0}get grabbing(){return this._grabbing}set grabbing(e){e!==this._grabbing&&(this._grabbing=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get hovering(){return this._hovering}set hovering(e){e!==this._hovering&&(this._hovering=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get selected(){return this._selected}set selected(e){e!==this._selected&&(this._selected=e,this._updateEngineObject(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get state(){return this._state}set state(e){e!==this._state&&(this._state=e,this._updateEngineObject())}updateStateEnabled(e,t){t?this.state|=e:this.state&=~e}_setFocused(e){e!==this._focused&&(this._focused=e,this.events.emit("focus-changed",{action:e===!0?"focus":"unfocus"}))}get focused(){return this._focused}get screenLocation(){return this._ensureScreenLocation(),this._screenLocation}_ensureScreenLocation(){if(!this._screenLocationDirty)return;this._screenLocation.pixelSize=this._camera.computeScreenPixelSizeAt(this.renderLocation),this._screenLocationDirty=!1;let e;if(_e(this._modelTransform)){const t=this._calculateModelTransformOffset(qt);e=x(t,t,this.renderLocation)}else e=this.renderLocation;this._camera.projectToRenderScreen(e,this._screenLocation.renderScreenPointArray),this._camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}get applyObjectTransform(){return this._applyObjectTransform}set applyObjectTransform(e){this._applyObjectTransform=e,this._screenLocationDirty=!0,this._updateEngineObject()}get attached(){return this._attached}intersectionDistance(e,t){if(!this.available)return null;const i=Ie(e,Ht),n=this._getCollisionRadius(t),a=-1*this.collisionPriority;switch(this.collisionType.type){case"point":if(He(this.screenLocation.screenPointArray,i)<n*n)return this.screenLocation.renderScreenPointArray[2]+a;break;case"line":{const o=this.collisionType.paths,r=this._getWorldToScreenObjectScale(),g=this._calculateObjectTransform(r,z),l=n*this.screenLocation.pixelSize,d=B(this._camera,i,G);if(d==null)return null;for(const u of o){if(u.length===0)continue;const c=A(j,u[0],g);for(let p=1;p<u.length;p++){const _=A(fe,u[p],g),w=Ve(ne(c,_,ge),d);if(w!=null&&w<l*l){const O=x(y.get(),c,_);Q(O,O,.5);const L=ae(y.get());return this._camera.projectToRenderScreen(O,L),L[2]+a}oe(c,_)}}break}case"disc":{const o=this.collisionType.direction,r=this.collisionType.offset??We,g=this._getWorldToScreenObjectScale(),l=this._calculateObjectTransform(g,z),d=n*this.screenLocation.pixelSize,u=B(this._camera,i,G);if(u==null)return null;const c=ee(pe,l),p=te(be,o,c),_=A(me,r,l);ie(_,p,F);const w=ve;if(se(F,u,w)&&Be(w,_)<d*d)return this.screenLocation.renderScreenPointArray[2]+a;break}case"ribbon":{const{paths:o,direction:r}=this.collisionType,g=this._getWorldToScreenObjectScale(),l=this._calculateObjectTransform(g,z),d=n*this._camera.computeScreenPixelSizeAt(this.renderLocation),u=B(this._camera,i,G);if(u==null)return null;const c=ee(pe,l),p=te(be,r,c),_=this._calculateModelTransformPosition(me);ie(_,p,F);const w=ve;if(!se(F,u,w))break;for(const O of o){if(O.length===0)continue;const L=A(j,O[0],l);for(let N=1;N<O.length;N++){const k=A(fe,O[N],l),J=ke(ne(L,k,ge),w);if(J!=null&&J<d*d){const W=x(y.get(),L,k);Q(W,W,.5);const K=ae(y.get());return this._camera.projectToRenderScreen(W,K),K[2]+a}oe(L,k)}}break}default:Ne(this.collisionType)}return null}attach(e={manipulator3D:{}}){const t=this._stage;if(!t)return;const i=e.manipulator3D;i.engineLayerId==null?(this._engineLayer=new Ue(t,{pickable:!1,updatePolicy:qe.SYNC}),i.engineLayerId=this._engineLayer.id):t!=null&&t.getObject&&(this._engineLayer=t.getObject(i.engineLayerId)),i.engineLayerReferences=(i.engineLayerReferences||0)+1,this._materialIdReferences=i.materialIdReferences,this._materialIdReferences==null&&(this._materialIdReferences=new Map,i.materialIdReferences=this._materialIdReferences),this._camera.copyFrom(this.view.state.camera),this._attached=!0,this._updateEngineObject(),Ge(this._location.spatialReference,this.view.spatialReference)||(this.location=new C({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}detach(e={manipulator3D:{}}){const t=e.manipulator3D;t.engineLayerReferences--;const i=t.engineLayerReferences===0;this._removeResourcesFromStage(),i&&(t.engineLayerId=null,Qe(this._engineLayer)),this._engineResources=null,this._engineLayer=null,this._materialIdReferences=null,this._attached=!1}onViewChange(){this._camera.copyFrom(this.view.state.camera),this._screenLocationDirty=!0,this._updateEngineObject()}onElevationChange(e){Xe(this.location,Se,e.spatialReference)&&Ye(e.extent,Se)&&this._notifyLocationChanged()}_evaluateElevationAlignment(){if(this.elevationInfo==null)return;let e=null,t=0;const i=Je(this.elevationInfo,this.location.spatialReference??this.view.elevationProvider.spatialReference);switch(this.elevationInfo.mode){case"on-the-ground":e=V(this.view.elevationProvider,this.location,"ground")??0;break;case"relative-to-ground":t=(V(this.view.elevationProvider,this.location,"ground")??0)+i;break;case"relative-to-scene":t=(V(this.view.elevationProvider,this.location,"scene")??0)+i;break;case"absolute-height":t=i}return t!==this._elevation.offset||e!==this._elevation.override?(this._elevation.offset=t,void(this._elevation.override=e)):void 0}_updateEngineObject(){if(!this._attached)return;if(!this.available)return void this._removeResourcesFromStage();const e=this._getWorldToScreenObjectScale(),t=z;if(this.autoScaleRenderObjects===!0){const o=this._getFocusedSize(this._radius,this.focused)*e;this._calculateObjectTransform(o,t)}else this._calculateObjectTransform(e,t);const{objectsByState:i}=this._ensureEngineResources(),n=(this.focused?T.Focused:T.Unfocused)|(this.selected?T.Selected:T.Unselected),a=this._noDisplayCount>0;for(const{stateMask:o,objects:r}of i){if(a){for(const c of r)c.visible=!1;continue}const g=(o&T.All)!==T.None,l=(o&D.All)!==D.None,d=!g||(n&o)==(o&T.All),u=!l||(this.state&o)==(o&D.All);if(d&&u)for(const c of r)c.visible=!0,c.transformation=t;else for(const c of r)c.visible=!1}}_ensureEngineResources(){if(this._engineResources==null){const e=this._engineLayer,t=[],i=new Set;this.renderObjects.forEach(({geometry:{material:o}})=>{i.has(o)||(t.push(o),i.add(o))});const n=new Map;this._renderObjects.forEach(o=>{const r=new Ke({castShadow:!1,geometries:[o.geometry]}),g=n.get(o.stateMask)||[];g.push(r),n.set(o.stateMask,g)});const a=[];n.forEach((o,r)=>a.push({stateMask:r,objects:o})),this._engineResources={objectsByState:a,layer:e,materials:t}}return this._addResourcesToStage(),this._engineResources}_addResourcesToStage(){const e=this._stage;if(this._engineResourcesAddedToStage||this._engineResources==null||!e)return;const{objectsByState:t,layer:i,materials:n}=this._engineResources;n.forEach(a=>{const o=this._materialIdReferences,r=o.get(a.id)||0;r===0&&e.add(a),o.set(a.id,r+1)}),t.forEach(({objects:a})=>{i.addMany(a),e.addMany(a)}),this._engineResourcesAddedToStage=!0}_removeResourcesFromStage(){const e=this._stage;if(!this._engineResourcesAddedToStage||this._engineResources==null||!e)return;const{objectsByState:t,layer:i,materials:n}=this._engineResources;t.forEach(({objects:a})=>{i.removeMany(a),e.removeMany(a)}),n.forEach(a=>{const o=this._materialIdReferences,r=o.get(a.id);r===1?(e.remove(a),o.delete(a.id)):o.set(a.id,r-1)}),this._engineResourcesAddedToStage=!1}_getCollisionRadius(e){return this._getFocusedSize(this.radius,!0)*(e==="touch"?this.touchMultiplier:1)}_getFocusedSize(e,t){return e*(t?this.focusMultiplier:1)}_getWorldToScreenObjectScale(){return this._worldSized?1:this.screenLocation.pixelSize}_calculateModelTransformPosition(e){const t=this._getWorldToScreenObjectScale(),i=this._calculateObjectTransform(t,Ut);return X(e,i[12],i[13],i[14])}_calculateModelTransformOffset(e){const t=this._calculateModelTransformPosition(e);return we(e,t,this.renderLocation)}_calculateObjectTransform(e,t){return Ze(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1),this._worldFrame&&re(t,t,this._worldFrame),re(t,t,this._modelTransform),t[12]+=this.renderLocation[0],t[13]+=this.renderLocation[1],t[14]+=this.renderLocation[2],t[15]=1,this._applyObjectTransform!=null&&this._applyObjectTransform(t),t}get test(){let e=!1;if(this._engineResources!=null)for(const t of this._engineResources.objectsByState){for(const i of t.objects)if(i.visible){e=!0;break}if(e)break}return{areAnyResourcesVisible:e}}}function _e(s){return s[12]!==0||s[13]!==0||s[14]!==0}function Vt(s,e,t){switch(s.viewingMode){case"local":return st(t),!0;case"global":{const i=et(s.renderCoordsHelper.spatialReference);return tt(e,0,j,0,i.radius),it(ce(j[0]),ce(j[1]),t),!0}}}const Ht=$e(),ge=Re(),G=je(),pe=nt(),Ut=M(),z=M(),F=Pe(),j=$(),fe=$(),ve=$(),be=$(),me=$(),qt=$(),Se=new C({x:0,y:0,z:0,spatialReference:null}),Gt=()=>{};function Qt(s,e){if(!e.screenSizeEnabled)return;const t=s.vertex;at(t,e),t.uniforms.add(new le("perScreenPixelRatio",(i,n)=>n.camera.perScreenPixelRatio),new le("screenSizeScale",i=>i.screenSizeScale)),t.code.add(f`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function Xt(s){const e=new ot,t=s.multipassEnabled&&(s.output===S.Color||s.output===S.Alpha);e.include(rt,s),e.include(Qt,s),e.include(ct,s);const{vertex:i,fragment:n}=e;return n.include(lt),ht(i,s),n.uniforms.add(new he("uColor",a=>a.color)),e.attributes.add(h.POSITION,"vec3"),e.varyings.add("vWorldPosition","vec3"),t&&e.varyings.add("depth","float"),s.screenSizeEnabled&&e.attributes.add(h.OFFSET,"vec3"),s.shadingEnabled&&(dt(i),e.attributes.add(h.NORMAL,"vec3"),e.varyings.add("vViewNormal","vec3")),i.code.add(f`
    void main(void) {
      vWorldPosition = ${s.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),s.shadingEnabled&&i.code.add(f`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),i.code.add(f`
    ${t?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),t&&e.include(ut,s),n.code.add(f`
    void main() {
      discardBySlice(vWorldPosition);
      ${t?"terrainDepthTest(depth);":""}
    `),s.shadingEnabled?(n.uniforms.add(new _t("shadingDirection",a=>a.shadingDirection)),n.uniforms.add(new he("shadedColor",a=>Yt(a.shadingTint,a.color))),n.code.add(f`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):n.code.add(f`vec4 finalColor = uColor;`),n.code.add(f`
      ${s.output===S.ObjectAndLayerIdColor?f`finalColor.a = 1.0;`:""}
      if (finalColor.a < ${f.float(gt)}) {
        discard;
      }
      ${s.output===S.Alpha?f`fragColor = vec4(finalColor.a);`:""}

      ${s.output===S.Color?f`fragColor = highlightSlice(finalColor, vWorldPosition); ${s.transparencyPassType===P.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    }
    `),e}function Yt(s,e){const t=1-s[3],i=s[3]+e[3]*t;return i===0?(E[3]=i,E):(E[0]=(s[0]*s[3]+e[0]*e[3]*t)/i,E[1]=(s[1]*s[3]+e[1]*e[3]*t)/i,E[2]=(s[2]*s[3]+e[2]*e[3]*t)/i,E[3]=e[3],E)}const E=pt(),Jt=Object.freeze(Object.defineProperty({__proto__:null,build:Xt},Symbol.toStringTag,{value:"Module"}));class I extends bt{initializeProgram(e){return new mt(e.rctx,I.shader.get().build(this.configuration),Ae)}_setPipelineState(e){const t=this.configuration,i=e===P.NONE,n=e===P.FrontFace;return St({blending:t.output!==S.Color&&t.output!==S.Alpha||!t.transparent?null:i?yt:$t(e),culling:wt(t.cullFace),depthTest:{func:n?H.LESS:t.shadingEnabled?H.LEQUAL:H.LESS},depthWrite:i?t.writeDepth?Ot:null:Tt(e),colorWrite:Et,polygonOffset:i||n?null:Lt})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}I.shader=new ft(Jt,()=>vt(()=>import("./ShadedColorMaterial.glsl-BEwQAGcL.js").then(s=>s.S),__vite__mapDeps([0,1,2,3,4])));let v=class extends At{constructor(){super(...arguments),this.output=S.Color,this.cullFace=R.None,this.transparencyPassType=P.NONE,this.hasSlicePlane=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.multipassEnabled=!1,this.cullAboveGround=!1}};b([m({count:S.COUNT})],v.prototype,"output",void 0),b([m({count:R.COUNT})],v.prototype,"cullFace",void 0),b([m({count:P.COUNT})],v.prototype,"transparencyPassType",void 0),b([m()],v.prototype,"hasSlicePlane",void 0),b([m()],v.prototype,"transparent",void 0),b([m()],v.prototype,"writeDepth",void 0),b([m()],v.prototype,"screenSizeEnabled",void 0),b([m()],v.prototype,"shadingEnabled",void 0),b([m()],v.prototype,"multipassEnabled",void 0),b([m()],v.prototype,"cullAboveGround",void 0),b([m({constValue:!1})],v.prototype,"occlusionPass",void 0);const Ae=new Map([[h.POSITION,0],[h.NORMAL,1],[h.OFFSET,2]]);let Kt=class extends Rt{constructor(e){super(e,new ei),this.supportsEdges=!0,this.produces=new Map([[U.OPAQUE_MATERIAL,t=>t===S.Highlight||q(t)&&!this._isTransparent],[U.TRANSPARENT_MATERIAL,t=>q(t)&&this._isTransparent&&this.parameters.writeDepth],[U.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>q(t)&&this._isTransparent&&!this.parameters.writeDepth]]),this._configuration=new v,this._vertexAttributeLocations=Ae}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.screenSizeEnabled=this.parameters.screenSizeEnabled,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,i,n,a,o){if(this.parameters.screenSizeEnabled){const r=e.attributes.get(h.OFFSET);de(e,i,n,a,{applyToVertex:(l,d,u,c)=>{const p=X(ye,r.data[3*c],r.data[3*c+1],r.data[3*c+2]),_=X(ii,l,d,u);return Q(p,p,this.parameters.screenSizeScale*i.camera.computeScreenPixelSizeAt(p)),x(_,_,p),[_[0],_[1],_[2]]},applyToAabb:l=>{const d=Mt(l,ye);return It(l,this.parameters.screenSizeScale*i.camera.computeScreenPixelSizeAt(d))}},o)}else de(e,i,n,a,void 0,o)}createGLMaterial(e){return new Zt(e)}createBufferWriter(){return new ti(this.parameters.screenSizeEnabled)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}};class Zt extends jt{beginSlot(e){return this.ensureTechnique(I,e)}}class ei extends Pt{constructor(){super(...arguments),this.color=ue(1,1,1,1),this.shadingTint=ue(0,0,0,.25),this.shadingDirection=Y($(),[.5,-.5,-.5]),this.screenSizeScale=14,this.forceTransparentMode=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=R.None,this.screenSizeEnabled=!1,this.shadingEnabled=!0}}class ti{constructor(e){this.screenSizeEnabled=e;const t=Dt().vec3f(h.POSITION).vec3f(h.NORMAL);this.screenSizeEnabled&&t.vec3f(h.OFFSET),this.vertexBufferLayout=t}elementCount(e){return e.attributes.get(h.POSITION).indices.length}write(e,t,i,n,a){if(zt(i,this.vertexBufferLayout,e,t,n,a),this.screenSizeEnabled){if(!i.attributes.has(h.OFFSET))throw new Error(`${h.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);{const o=i.attributes.get(h.OFFSET);Ft(o.size===3);const r=n.getField(h.OFFSET,Ct);if(!r)throw new Error("unable to acquire view for "+h.OFFSET);xt(o,t,r,a)}}}}const ye=$(),ii=$();function hi(s,e=Le.OccludeAndTransparent,t=!0){const i=Te(s),n=!(s[3]<1);return t?new Kt({color:i,writeDepth:n,cullFace:R.Back,renderOccluded:e,isDecoration:!0}):new Ee({color:i,writeDepth:n,cullFace:R.Back,renderOccluded:e,isDecoration:!0})}function di(s,e=Le.OccludeAndTransparent){const t=Te(s);return new Ee({color:t,writeDepth:!0,cullFace:R.Front,renderOccluded:e,isDecoration:!0})}const ui=Object.freeze({calloutLength:40,calloutWidth:1,discRadius:27,focusMultiplier:1.1}),_i=Object.freeze({autoScaleRenderObjects:!1,worldSized:!0});function gi(s,e,t,i){const n=we(y.get(),s,t),a=si(n,Oe(y.get(),i,n),t,Nt.get());kt(a,a);const o=A(y.get(),e,a);return Math.atan2(o[1],o[0])}function si(s,e,t,i){const n=Y(y.get(),s),a=Y(y.get(),e),o=Oe(y.get(),n,a);return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=0,i[4]=a[0],i[5]=a[1],i[6]=a[2],i[7]=0,i[8]=o[0],i[9]=o[1],i[10]=o[2],i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i}function ni(s,e){const t=s.getViewForGraphic(e);return t!=null&&"computeAttachmentOrigin"in t?t.computeAttachmentOrigin(e,s.spatialReference):null}function pi(s,e,t){const i=ni(s,t);i==null?ai(e,t.geometry):e.elevationAlignedLocation=i}function ai(s,e){if(e==null)return;const t=e.type==="mesh"?e.anchor:Wt(e);t!=null&&(s.location=Bt(t))}class fi{constructor(e,t=T.None){this.geometry=e,this.stateMask=t}}export{ni as O,fi as a,_i as b,gi as c,hi as d,ri as e,di as f,ui as h,Kt as j,Xt as p,si as w,pi as y};