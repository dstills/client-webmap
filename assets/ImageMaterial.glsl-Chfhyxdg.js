import{wm as I,FW as O,FT as w,dZ as l,wl as c,FU as S,FY as b,wj as A,wh as x,FS as p,ym as y,FV as C,F_ as u,ws as D,qw as E,g as i,wx as o,mx as P,wo as G,aj as F,F$ as N,wp as R,wq as V,wr as M,G1 as L,G2 as j,Ge as U,G3 as z,G4 as B,wt as W,Gf as q,Gg as H,Gh as k,Gi as Q,Gj as Y,pP as _,Gk as m,Gl as Z,Gm as J,Gn as K,Go as X,Gp as ee,Fg as te,Gq as se,Gr as ae,r5 as re,Ga as ie}from"./index-nBWeBKPv.js";function T(s){const e=new I,{vertex:t,fragment:a}=e;return O(t,s),e.include(w,s),e.attributes.add(l.POSITION,"vec3"),e.attributes.add(l.UV0,"vec2"),s.perspectiveInterpolation&&e.attributes.add(l.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),s.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(c`
    void main(void) {
      vpos = position;
      ${s.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${s.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(S,s),e.include(b,s),a.uniforms.add(new A("tex",n=>n.texture),new x("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),s.output===p.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(y)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(C),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(y)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${s.transparencyPassType===u.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const oe=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));class g extends R{initializeProgram(e){return new V(e.rctx,g.shader.get().build(this.configuration),$)}_setPipelineState(e,t){const a=this.configuration,n=e===u.NONE,d=e===u.FrontFace;return M({blending:a.output!==p.Color&&a.output!==p.Alpha||!a.transparent?null:n?ne:L(e),culling:j(a.cullFace),depthTest:{func:U(e)},depthWrite:n?a.writeDepth?z:null:B(e),colorWrite:W,stencilWrite:a.hasOccludees?q:null,stencilTest:a.hasOccludees?t?H:k:null,polygonOffset:n||d?null:Q(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}g.shader=new G(oe,()=>F(()=>Promise.resolve().then(()=>ue),void 0));const ne=D(E.ONE,E.ONE_MINUS_SRC_ALPHA);class r extends N{constructor(){super(...arguments),this.output=p.Color,this.cullFace=P.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=u.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}i([o({count:p.COUNT})],r.prototype,"output",void 0),i([o({count:P.COUNT})],r.prototype,"cullFace",void 0),i([o()],r.prototype,"hasSlicePlane",void 0),i([o()],r.prototype,"transparent",void 0),i([o()],r.prototype,"enableOffset",void 0),i([o()],r.prototype,"writeDepth",void 0),i([o()],r.prototype,"hasOccludees",void 0),i([o({count:u.COUNT})],r.prototype,"transparencyPassType",void 0),i([o()],r.prototype,"multipassEnabled",void 0),i([o()],r.prototype,"cullAboveGround",void 0),i([o()],r.prototype,"perspectiveInterpolation",void 0),i([o({constValue:!1})],r.prototype,"occlusionPass",void 0);const $=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);class he extends Y{constructor(e){super(e,new ce),this.supportsEdges=!0,this.produces=new Map([[_.OPAQUE_MATERIAL,t=>t===p.Highlight||m(t)&&!this.parameters.transparent],[_.TRANSPARENT_MATERIAL,t=>m(t)&&this.parameters.transparent&&this.parameters.writeDepth],[_.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>m(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[_.DRAPED_MATERIAL,t=>Z(t)]]),this._vertexAttributeLocations=$,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<J,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new le(e)}createBufferWriter(){const e=K.clone();return this.parameters.perspectiveInterpolation&&e.f32(l.PERSPECTIVEDIVIDE),new pe(e)}}class le extends X{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(g,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==p.Color&&this._output!==p.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class pe extends ee{write(e,t,a,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const f=a.attributes.get(h);if(f)if(h===l.PERSPECTIVEDIVIDE){te(f.size===1);const v=n.getField(h,se);v&&ae(f,v,d)}else re(h,f,e,t,n,d)}}}class ce extends ie{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=P.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ue=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));export{he as T};
