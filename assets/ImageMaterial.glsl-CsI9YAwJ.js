import{u2 as $,u7 as O,u4 as b,et as l,u1 as u,u5 as S,ua as A,w6 as w,u0 as x,u3 as p,yu as P,u6 as C,ud as c,uf as D,_ as N,w9 as R,oq as y,E as i,ug as o,mr as m,uh as V,ui as M,uj as F,ul as L,um as z,E5 as U,un as j,uo as B,up as G,E6 as W,E7 as q,E8 as H,E9 as k,ur as Q,wo as J,pd as _,Ea as g,Eb as K,Ec as X,wq as Y,Ed as Z,wp as ee,uz as te,Ee as ae,Ef as se,qF as re,uw as ie}from"./index-HSyhVbHY.js";function T(a){const e=new $,{vertex:t,fragment:s}=e;return O(t,a),e.include(b,a),e.attributes.add(l.POSITION,"vec3"),e.attributes.add(l.UV0,"vec2"),a.perspectiveInterpolation&&e.attributes.add(l.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),a.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(u`
    void main(void) {
      vpos = position;
      ${a.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${a.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(S,a),e.include(A,a),s.uniforms.add(new w("tex",n=>n.texture),new x("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===p.Alpha?s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${u.float(P)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(s.include(C),s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${u.float(P)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===c.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const oe=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));class E extends V{initializeProgram(e){return new M(e.rctx,E.shader.get().build(this.configuration),I)}_setPipelineState(e,t){const s=this.configuration,n=e===c.NONE,d=e===c.FrontFace;return F({blending:s.output!==p.Color&&s.output!==p.Alpha||!s.transparent?null:n?ne:L(e),culling:z(s.cullFace),depthTest:{func:U(e)},depthWrite:n?s.writeDepth?j:null:B(e),colorWrite:G,stencilWrite:s.hasOccludees?W:null,stencilTest:s.hasOccludees?t?q:H:null,polygonOffset:n||d?null:k(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}E.shader=new D(oe,()=>N(()=>Promise.resolve().then(()=>ce),void 0));const ne=R(y.ONE,y.ONE_MINUS_SRC_ALPHA);class r extends Q{constructor(){super(...arguments),this.output=p.Color,this.cullFace=m.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=c.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}i([o({count:p.COUNT})],r.prototype,"output",void 0),i([o({count:m.COUNT})],r.prototype,"cullFace",void 0),i([o()],r.prototype,"hasSlicePlane",void 0),i([o()],r.prototype,"transparent",void 0),i([o()],r.prototype,"enableOffset",void 0),i([o()],r.prototype,"writeDepth",void 0),i([o()],r.prototype,"hasOccludees",void 0),i([o({count:c.COUNT})],r.prototype,"transparencyPassType",void 0),i([o()],r.prototype,"multipassEnabled",void 0),i([o()],r.prototype,"cullAboveGround",void 0),i([o()],r.prototype,"perspectiveInterpolation",void 0),i([o({constValue:!1})],r.prototype,"occlusionPass",void 0);const I=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);class he extends J{constructor(e){super(e,new ue),this.supportsEdges=!0,this.produces=new Map([[_.OPAQUE_MATERIAL,t=>t===p.Highlight||g(t)&&!this.parameters.transparent],[_.TRANSPARENT_MATERIAL,t=>g(t)&&this.parameters.transparent&&this.parameters.writeDepth],[_.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>g(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[_.DRAPED_MATERIAL,t=>K(t)]]),this._vertexAttributeLocations=I,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<X,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new le(e)}createBufferWriter(){const e=Y.clone();return this.parameters.perspectiveInterpolation&&e.f32(l.PERSPECTIVEDIVIDE),new pe(e)}}class le extends Z{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(E,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==p.Color&&this._output!==p.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class pe extends ee{write(e,t,s,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const f=s.attributes.get(h);if(f)if(h===l.PERSPECTIVEDIVIDE){te(f.size===1);const v=n.getField(h,ae);v&&se(f,v,d)}else re(h,f,e,t,n,d)}}}class ue extends ie{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=m.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ce=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));export{he as T};
