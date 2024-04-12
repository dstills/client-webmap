import{qV as j,qW as P,qX as z,qY as F,qZ as L,aB as N,e5 as _,q_ as D,q$ as V,a3 as w,r0 as G,r1 as K,r2 as U,r3 as Y,r4 as B,eA as S,r5 as k,r6 as q,r7 as J,r8 as Q,r9 as W,ra as X,rb as h,rc as Z,rd as H,qJ as O,re as A,qK as R,rf as ee,qL as te,qN as C,qM as I,rg as E,rh as ne,qO as re,ez as v,dS as oe,f$ as se,ri as ae,qP as le,rj as ue,fY as ce,rk as ie}from"./index-D2dWKXoe.js";function fe(e,t,n){const c=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,l=n?n.count:t.count;let s=((n==null?void 0:n.dstIndex)??0)*o,m=((n==null?void 0:n.srcIndex)??0)*i;for(let u=0;u<l;++u){for(let r=0;r<9;++r)c[s+r]=a[m+r];s+=o,m+=i}}Object.freeze(Object.defineProperty({__proto__:null,copy:fe},Symbol.toStringTag,{value:"Module"}));function me(e,t,n){const c=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,l=n?n.count:t.count;let s=((n==null?void 0:n.dstIndex)??0)*o,m=((n==null?void 0:n.srcIndex)??0)*i;for(let u=0;u<l;++u){for(let r=0;r<16;++r)c[s+r]=a[m+r];s+=o,m+=i}}Object.freeze(Object.defineProperty({__proto__:null,copy:me},Symbol.toStringTag,{value:"Module"}));function y(e,t){return new e(new ArrayBuffer(t*e.ElementCount*j(e.ElementType)))}async function Se(e,t,n){const c=new P(pe(n)),o=(await z(c,t,n,!0)).model,a=o.lods.shift(),i=new Map,l=new Map;o.textures.forEach(($,b)=>i.set(b,ge($))),o.materials.forEach(($,b)=>l.set(b,$e($,i)));const s=xe(a);for(const $ of s.parts)ye(s,$,l);const{position:m,normal:u,tangent:r,color:f,texCoord0:p}=s.vertexAttributes,x={position:m.typedBuffer,normal:u!=null?u.typedBuffer:null,tangent:r!=null?r.typedBuffer:null,uv:p!=null?p.typedBuffer:null,color:f!=null?f.typedBuffer:null},g=F(x,e,n);return{transform:g.transform,vertexSpace:g.vertexSpace,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new L({position:g.vertexAttributes.position,normal:g.vertexAttributes.normal,tangent:g.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function pe(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(n,c,o)=>{const a=(t==null?void 0:t(n))??n;return(await N(a,{responseType:c==="image"?"image":c==="binary"?"array-buffer":"json",signal:o!=null?o.signal:null})).data}}:null}function T(e,t){if(e==null)return"-";const n=e.typedBuffer;return`${_(t,n.buffer,()=>t.size)}/${n.byteOffset}/${n.byteLength}`}function de(e){return e!=null?e.toString():"-"}function xe(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},c=new Map,o=new Map,a=[];for(const i of e.parts){const{attributes:{position:l,normal:s,color:m,tangent:u,texCoord0:r}}=i,f=`
      ${T(l,c)}/
      ${T(s,c)}/
      ${T(m,c)}/
      ${T(u,c)}/
      ${T(r,c)}/
      ${de(i.transform)}
    `;let p=!1;const x=_(o,f,()=>(p=!0,{start:t,length:l.count}));p&&(t+=l.count),s&&(n.normal=!0),m&&(n.color=!0),u&&(n.tangent=!0),r&&(n.texCoord0=!0),a.push({gltf:i,writeVertices:p,region:x})}return{vertexAttributes:{position:y(ae,t),normal:n.normal?y(I,t):null,tangent:n.tangent?y(O,t):null,color:n.color?y(R,t):null,texCoord0:n.texCoord0?y(le,t):null},parts:a,components:[]}}function ge(e){return new D({data:(V(e.data),e.data),wrap:he(e.parameters.wrap)})}function $e(e,t){const n=new w(ve(e.color,e.opacity)),c=e.emissiveFactor?new w(we(e.emissiveFactor)):null,o=a=>a?new ue({scale:a.scale?[a.scale[0],a.scale[1]]:[1,1],rotation:ce(a.rotation??0),offset:a.offset?[a.offset[0],a.offset[1]]:[0,0]}):null;return new G({color:n,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:c,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:o(e.colorTextureTransform),normalTextureTransform:o(e.normalTextureTransform),occlusionTextureTransform:o(e.occlusionTextureTransform),emissiveTextureTransform:o(e.emissiveTextureTransform),metallicRoughnessTextureTransform:o(e.metallicRoughnessTextureTransform)})}function ye(e,t,n){t.writeVertices&&Te(e,t);const{indices:c,attributes:o,primitiveType:a,material:i}=t.gltf;let l=K(c||o.position.count,a);const s=t.region.start;if(s){const m=new Uint32Array(l);for(let u=0;u<l.length;u++)m[u]+=s;l=m}e.components.push(new U({name:t.gltf.name,faces:l,material:n.get(i),shading:o.normal?"source":"flat",trustSourceNormals:!0}))}function Te(e,t){const{position:n,normal:c,tangent:o,color:a,texCoord0:i}=e.vertexAttributes,l=t.region.start,{attributes:s,transform:m}=t.gltf,u=s.position.count;if(Y(n.slice(l,u),s.position,m),s.normal!=null&&c!=null){const r=B(S(),m),f=c.slice(l,u);k(f,s.normal,r),q(r)&&J(f,f)}else c!=null&&Q(c,0,0,1,{dstIndex:l,count:u});if(s.tangent!=null&&o!=null){const r=B(S(),m),f=o.slice(l,u);W(f,s.tangent,r),q(r)&&X(f,f)}else o!=null&&h(o,0,0,1,1,{dstIndex:l,count:u});if(s.texCoord0!=null&&i!=null?Z(i.slice(l,u),s.texCoord0):i!=null&&H(i,0,0,{dstIndex:l,count:u}),s.color!=null&&a!=null){const r=s.color,f=a.slice(l,u);if(r.elementCount===4)r instanceof O?A(f,r,255):r instanceof R?ee(f,r):r instanceof te&&A(f,r,1/256);else{h(f,255,255,255,255);const p=C.fromTypedArray(f.typedBuffer,f.typedBufferStride);r instanceof I?E(p,r,255):r instanceof C?ne(p,r):r instanceof re&&E(p,r,1/256)}}else a!=null&&h(a.slice(l,u),255,255,255,255)}function be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function he(e){return{horizontal:M(e.s),vertical:M(e.t)}}function M(e){switch(e){case v.CLAMP_TO_EDGE:return"clamp";case v.MIRRORED_REPEAT:return"mirror";case v.REPEAT:return"repeat"}}function d(e){return e**(1/ie)*255}function ve(e,t){return oe(d(e[0]),d(e[1]),d(e[2]),t)}function we(e){return se(d(e[0]),d(e[1]),d(e[2]))}export{Se as loadGLTFMesh};