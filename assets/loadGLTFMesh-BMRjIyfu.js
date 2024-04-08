import{rD as L,rE as P,rF as j,rG as z,rH as D,bE as N,f6 as _,rI as G,rJ as U,b4 as w,rK as V,rL as K,rM as Q,rN as q,rO as B,fS as E,rP as H,rQ as S,rR as J,rS as W,rT as X,rU as Y,rV as h,rW as Z,rX as k,r9 as O,rY as C,ra as I,rZ as ee,rb as te,rd as A,rc as F,r_ as M,r$ as re,re as ne,fR as v,e0 as oe,dL as se,s0 as ae,rf as le,s1 as ue,cE as ce,s2 as ie}from"./index-nBWeBKPv.js";function fe(e,t,r){const c=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,l=r?r.count:t.count;let s=((r==null?void 0:r.dstIndex)??0)*o,m=((r==null?void 0:r.srcIndex)??0)*i;for(let u=0;u<l;++u){for(let n=0;n<9;++n)c[s+n]=a[m+n];s+=o,m+=i}}Object.freeze(Object.defineProperty({__proto__:null,copy:fe},Symbol.toStringTag,{value:"Module"}));function me(e,t,r){const c=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,l=r?r.count:t.count;let s=((r==null?void 0:r.dstIndex)??0)*o,m=((r==null?void 0:r.srcIndex)??0)*i;for(let u=0;u<l;++u){for(let n=0;n<16;++n)c[s+n]=a[m+n];s+=o,m+=i}}Object.freeze(Object.defineProperty({__proto__:null,copy:me},Symbol.toStringTag,{value:"Module"}));function y(e,t){return new e(new ArrayBuffer(t*e.ElementCount*L(e.ElementType)))}async function Ee(e,t,r){const c=new P(pe(r)),o=(await j(c,t,r,!0)).model,a=o.lods.shift(),i=new Map,l=new Map;o.textures.forEach(($,b)=>i.set(b,ge($))),o.materials.forEach(($,b)=>l.set(b,$e($,i)));const s=xe(a);for(const $ of s.parts)ye(s,$,l);const{position:m,normal:u,tangent:n,color:f,texCoord0:p}=s.vertexAttributes,x={position:m.typedBuffer,normal:u!=null?u.typedBuffer:null,tangent:n!=null?n.typedBuffer:null,uv:p!=null?p.typedBuffer:null,color:f!=null?f.typedBuffer:null},g=z(x,e,r);return{transform:g.transform,vertexSpace:g.vertexSpace,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new D({position:g.vertexAttributes.position,normal:g.vertexAttributes.normal,tangent:g.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function pe(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(r,c,o)=>{const a=(t==null?void 0:t(r))??r;return(await N(a,{responseType:c==="image"?"image":c==="binary"?"array-buffer":"json",signal:o!=null?o.signal:null})).data}}:null}function T(e,t){if(e==null)return"-";const r=e.typedBuffer;return`${_(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function de(e){return e!=null?e.toString():"-"}function xe(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},c=new Map,o=new Map,a=[];for(const i of e.parts){const{attributes:{position:l,normal:s,color:m,tangent:u,texCoord0:n}}=i,f=`
      ${T(l,c)}/
      ${T(s,c)}/
      ${T(m,c)}/
      ${T(u,c)}/
      ${T(n,c)}/
      ${de(i.transform)}
    `;let p=!1;const x=_(o,f,()=>(p=!0,{start:t,length:l.count}));p&&(t+=l.count),s&&(r.normal=!0),m&&(r.color=!0),u&&(r.tangent=!0),n&&(r.texCoord0=!0),a.push({gltf:i,writeVertices:p,region:x})}return{vertexAttributes:{position:y(ae,t),normal:r.normal?y(F,t):null,tangent:r.tangent?y(O,t):null,color:r.color?y(I,t):null,texCoord0:r.texCoord0?y(le,t):null},parts:a,components:[]}}function ge(e){return new G({data:(U(e.data),e.data),wrap:he(e.parameters.wrap)})}function $e(e,t){const r=new w(ve(e.color,e.opacity)),c=e.emissiveFactor?new w(we(e.emissiveFactor)):null,o=a=>a?new ue({scale:a.scale?[a.scale[0],a.scale[1]]:[1,1],rotation:ce(a.rotation??0),offset:a.offset?[a.offset[0],a.offset[1]]:[0,0]}):null;return new V({color:r,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:c,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:o(e.colorTextureTransform),normalTextureTransform:o(e.normalTextureTransform),occlusionTextureTransform:o(e.occlusionTextureTransform),emissiveTextureTransform:o(e.emissiveTextureTransform),metallicRoughnessTextureTransform:o(e.metallicRoughnessTextureTransform)})}function ye(e,t,r){t.writeVertices&&Te(e,t);const{indices:c,attributes:o,primitiveType:a,material:i}=t.gltf;let l=K(c||o.position.count,a);const s=t.region.start;if(s){const m=new Uint32Array(l);for(let u=0;u<l.length;u++)m[u]+=s;l=m}e.components.push(new Q({name:t.gltf.name,faces:l,material:r.get(i),shading:o.normal?"source":"flat",trustSourceNormals:!0}))}function Te(e,t){const{position:r,normal:c,tangent:o,color:a,texCoord0:i}=e.vertexAttributes,l=t.region.start,{attributes:s,transform:m}=t.gltf,u=s.position.count;if(q(r.slice(l,u),s.position,m),s.normal!=null&&c!=null){const n=B(E(),m),f=c.slice(l,u);H(f,s.normal,n),S(n)&&J(f,f)}else c!=null&&W(c,0,0,1,{dstIndex:l,count:u});if(s.tangent!=null&&o!=null){const n=B(E(),m),f=o.slice(l,u);X(f,s.tangent,n),S(n)&&Y(f,f)}else o!=null&&h(o,0,0,1,1,{dstIndex:l,count:u});if(s.texCoord0!=null&&i!=null?Z(i.slice(l,u),s.texCoord0):i!=null&&k(i,0,0,{dstIndex:l,count:u}),s.color!=null&&a!=null){const n=s.color,f=a.slice(l,u);if(n.elementCount===4)n instanceof O?C(f,n,255):n instanceof I?ee(f,n):n instanceof te&&C(f,n,1/256);else{h(f,255,255,255,255);const p=A.fromTypedArray(f.typedBuffer,f.typedBufferStride);n instanceof F?M(p,n,255):n instanceof A?re(p,n):n instanceof ne&&M(p,n,1/256)}}else a!=null&&h(a.slice(l,u),255,255,255,255)}function be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function he(e){return{horizontal:R(e.s),vertical:R(e.t)}}function R(e){switch(e){case v.CLAMP_TO_EDGE:return"clamp";case v.MIRRORED_REPEAT:return"mirror";case v.REPEAT:return"repeat"}}function d(e){return e**(1/ie)*255}function ve(e,t){return oe(d(e[0]),d(e[1]),d(e[2]),t)}function we(e){return se(d(e[0]),d(e[1]),d(e[2]))}export{Ee as loadGLTFMesh};