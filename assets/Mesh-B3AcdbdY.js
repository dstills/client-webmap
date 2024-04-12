function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/loadGLTFMesh-Bq_X-Qp_.js","assets/index-BS4ejk0L.js","assets/index-DvE0Cji0.css","assets/gltfexport-5UdPshhe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as G,vB as at,vC as lt,df as ct,o0 as ut,aL as Se,vD as ie,aR as H,e_ as A,aT as _,fS as Re,eV as pt,eN as y,vE as ft,vF as ht,k7 as Fe,_ as te,av as ae,bY as F,vu as mt,vG as dt,k8 as gt,ep as vt,lx as xt,E as d,F as g,J as _e,mj as yt,be as wt,cM as $t,r1 as D,qX as bt,qY as J,vH as At,lb as ne,eL as St,eC as ke,fr as le,lC as Ie,lM as Rt,iO as Me,fk as X,vI as je,vJ as Pe,e6 as Y,eM as re,vK as Ft,vL as Le,vM as K,vN as Oe,vO as _t,gh as Z,tV as Te,vP as Ee,gk as Ne,vQ as Ce,vR as De,qB as ze,qx as kt,vS as Ve,vT as Ue,vU as Be,vV as Ge,vW as Ye,vX as qe,vY as It,hM as Mt,vZ as jt,eW as Pt,aD as Lt,cL as Ot,oN as oe,bt as Tt,p4 as pe,v_ as Et,g1 as ee,H as Nt,v$ as Ct,q4 as Dt,w0 as fe,w1 as he,oO as zt,kb as Vt}from"./index-BS4ejk0L.js";import{u as me,y as Ut,h as Bt}from"./External-BnivL3sx.js";const Gt="Mesh must be loaded before applying operations",Yt="Provided component is not part of the list of components",qt="Expected polygon to be a Polygon instance",B="Expected location to be a Point instance";let de=class extends G{constructor(){super("invalid-input:location",B)}};function Wt([e,t,n,r,o,s],i,a,c){ge??(ge=new Float64Array(24));const l=ge;return l[0]=e,l[1]=t,l[2]=n,l[3]=e,l[4]=o,l[5]=n,l[6]=r,l[7]=o,l[8]=n,l[9]=r,l[10]=t,l[11]=n,l[12]=e,l[13]=t,l[14]=s,l[15]=e,l[16]=o,l[17]=s,l[18]=r,l[19]=o,l[20]=s,l[21]=r,l[22]=t,l[23]=s,at({positions:l,transform:i,vertexSpace:a,inSpatialReference:c,outSpatialReference:c,outPositions:l}),He(l,c)}let ge=null;function We(e){if(e.length===0)return lt;const t=ct([Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY]);return ut(t,e),t}function He(e,t){const[n,r,o,s,i,a]=We(e);return new Se({xmin:n,ymin:r,zmin:o,xmax:s,ymax:i,zmax:a,spatialReference:t})}const q="esri.geometry.support.meshUtils.centerAt";function Ht(e,t,n){var a;if(!((a=e.vertexAttributes)!=null&&a.position))return;const{vertexSpace:r}=e,o=(n==null?void 0:n.origin)??e.anchor,s=n==null?void 0:n.geographic,i=ie(q,r,o.spatialReference,s);H(r)?Jt(e,t,o):i?Kt(e,t,o):Qt(e,t,o)}function Jt(e,t,n){const{vertexSpace:r}=e;if(!H(r))return;const o=Ke,s=Je;if(!A(t,s,e.spatialReference))return void _.getLogger(q).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);if(!A(n,o,e.spatialReference)){const a=e.origin;o[0]=a.x,o[1]=a.y,o[2]=a.z,_.getLogger(q).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}const i=Re(Zt,s,o);r.origin=pt(y(),r.origin,i)}function Kt(e,t,n){const r=ft(e.vertexAttributes,n),{position:o,normal:s,tangent:i}=ht(r,t,!1);e.vertexAttributes.position=o,e.vertexAttributes.normal=s,e.vertexAttributes.tangent=i,e.vertexAttributesChanged()}function Qt(e,t,n){const r=Ke,o=Je;if(A(t,o,e.spatialReference)){if(!A(n,r,e.spatialReference)){const s=e.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,_.getLogger(q).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}Xt(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else _.getLogger(q).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}function Xt(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const Je=y(),Ke=y(),Zt=y();async function en(e,t,n){const{source:r}=t,{loadGLTFMesh:o}=await Fe(te(()=>import("./loadGLTFMesh-Bq_X-Qp_.js"),__vite__mapDeps([0,1,2])),n),s=await nn(r,n);ae(n);const i=o(new F({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:tn(s),signal:n==null?void 0:n.signal,expectedType:s.type});i.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:a,components:c}=await i;e.vertexAttributes=a,e.components=c}function tn(e){const t=mt(e.url);return n=>{const r=dt(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??n}}async function nn(e,t){if(Array.isArray(e)){if(!e.length)throw new G("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?on(e):sn(e,t)}return Qe(e)}async function rn(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(n.length===1)return new z(n[0].partUrl);const s=await e.toBlob(t);return ae(t),z.fromBlob(s,tt(o,r))}function Qe(e){return z.fromBlob(e,tt(e.name,e.type))}function on(e){return et(e.map(t=>({name:t.name,mimeType:t.type,source:Qe(t)})))}async function sn(e,t){const n=await gt(e.map(async r=>{const o=await rn(r);return ae(t),{name:r.assetName,mimeType:r.assetMimeType,source:o}}));if(vt(t))throw n.forEach(r=>r.source.dispose()),xt();return et(n)}const Xe=/^model\/gltf\+json$/,Ze=/^model\/gltf-binary$/,se=/\.gltf$/i,an=/\.glb$/i;function et(e){const t=new Map;let n,r=null;for(const{name:o,mimeType:s,source:i}of e)r===null&&(Xe.test(s)||se.test(o)?(r=i.url,n="gltf"):(Ze.test(s)||an.test(o))&&(r=i.url,n="glb")),t.set(o,i.url),i.files.forEach((a,c)=>t.set(c,a));if(r==null)throw new G("mesh-load-external:missing-files","Missing files to load external mesh source");return new z(r,()=>e.forEach(({source:o})=>o.dispose()),t,n)}class z{constructor(t,n=()=>{},r=new Map,o){this.url=t,this.dispose=n,this.files=r,this.type=o}static fromBlob(t,n){const r=URL.createObjectURL(t);return new z(r,()=>URL.revokeObjectURL(r),void 0,n)}}function tt(e,t){return Xe.test(t)||se.test(e)?"gltf":Ze.test(t)||se.test(e)?"glb":void 0}let M=class extends yt{constructor(){super(),this.externalSources=new wt,this._explicitDisplaySource=null,this.addHandles($t(()=>this.externalSources,"after-remove",({item:e})=>{e===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!me(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!Ut(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>Bt(t,e))}get _implicitDisplaySource(){return this.externalSources.find(me)}};d([g()],M.prototype,"externalSources",void 0),d([g()],M.prototype,"displaySource",null),d([g()],M.prototype,"_implicitDisplaySource",null),d([g()],M.prototype,"_explicitDisplaySource",void 0),M=d([_e("esri.geometry.support.meshUtils.Metadata")],M);function ln(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=vn,r=4*e.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let c=0,l=0,u=0,h=0;for(let f=0;f<e.length;f++){const p=e[f],x=c/3;for(const $ of t)a[h++]=x+$;const V=p.corners;for(let $=0;$<4;$++){const j=V[$];let w=0;i[u++]=.25*n[$][0]+p.uvOrigin[0],i[u++]=p.uvOrigin[1]-.25*n[$][1];for(let S=0;S<3;S++)p.axis[S]!==0?(o[c++]=.5*p.axis[S],s[l++]=p.axis[S]):(o[c++]=.5*j[w++],s[l++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function cn(e,t){const n=e.components[0],r=n.faces,o=xn[t],s=6*o,i=new Array(6),a=new Array(r.length-6);let c=0,l=0;for(let u=0;u<r.length;u++)u>=s&&u<s+6?i[c++]=r[u]:a[l++]=r[u];if(e.vertexAttributes.uv!=null){const u=new Float32Array(e.vertexAttributes.uv),h=4*o*2,f=[0,1,1,1,1,0,0,0];for(let p=0;p<f.length;p++)u[h+p]=f[p];e.vertexAttributes.uv=u}return e.components=[new D({faces:i,material:n.material}),new D({faces:a})],e}function un(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((t-1)*n*2));let c=0,l=0,u=0,h=0;for(let f=0;f<=t;f++){const p=f/t*Math.PI+.5*Math.PI,x=Math.cos(p),V=Math.sin(p);m[2]=V;const $=f===0||f===t,j=$?n-1:n;for(let w=0;w<=j;w++){const S=w/j*2*Math.PI;m[0]=-Math.sin(S)*x,m[1]=Math.cos(S)*x;for(let k=0;k<3;k++)o[c]=.5*m[k],s[c]=m[k],++c;i[l++]=(w+($?.5:0))/n,i[l++]=f/t,f!==0&&w!==n&&(f!==t&&(a[u++]=h,a[u++]=h+1,a[u++]=h-n),f!==1&&(a[u++]=h,a[u++]=h-n,a[u++]=h-n-1)),h++}}return{position:o,normal:s,uv:i,faces:a}}function pn(e=0){const n=Math.round(16*2**e),r=4*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*(4*n));let c=0,l=0,u=0,h=0,f=0;for(let p=0;p<=5;p++){const x=p===0||p===5,V=p<=1||p>=4,$=p===2||p===4,j=x?n-1:n;for(let w=0;w<=j;w++){const S=w/j*2*Math.PI,k=x?0:.5;m[0]=k*Math.sin(S),m[1]=k*-Math.cos(S),m[2]=p<=2?.5:-.5;for(let P=0;P<3;P++)o[c++]=m[P],s[l++]=V?P===2?p<=1?1:-1:0:P===2?0:m[P]/k;i[u++]=(w+(x?.5:0))/n,i[u++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,$||p===0||w===n||(p!==5&&(a[h++]=f,a[h++]=f+1,a[h++]=f-n),p!==1&&(a[h++]=f,a[h++]=f-n,a[h++]=f-n-1)),f++}}return{position:o,normal:s,uv:i,faces:a}}function fn(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function hn(e){const t=U.facingAxisOrderSwap[e],n=U.position,r=U.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const c=i;for(let l=0;l<3;l++){const u=t[l],h=Math.abs(u)-1,f=u>=0?1:-1;o[i]=n[c+h]*f,s[i]=r[c+h]*f,i++}}return{position:o,normal:s,uv:new Float32Array(U.uv),faces:new Uint32Array(U.faces),isPlane:!0}}const L=1,O=2,T=3,U={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[T,L,O],west:[-T,-L,O],north:[-L,T,O],south:[L,-T,O],up:[L,O,T],down:[L,-O,-T]}};function W(e,t,n){e.isPlane||mn(e),gn(e,dn(n==null?void 0:n.size,n==null?void 0:n.unit,t.spatialReference));const{vertexAttributes:r,vertexSpace:o,transform:s}=bt(e,t,{vertexSpace:n==null?void 0:n.vertexSpace,geographic:n==null?void 0:n.geographic});return{vertexAttributes:new J({...r,uv:e.uv}),vertexSpace:o,transform:s,components:[new D({faces:e.faces,material:(n==null?void 0:n.material)||null})],spatialReference:t.spatialReference}}function mn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function dn(e,t,n){const r=At(t,n);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){const o=e*r;return[o,o,o]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function gn(e,t){if(t!=null){I[0]=t[0],I[4]=t[1],I[8]=t[2];for(let n=0;n<e.position.length;n+=3){for(let r=0;r<3;r++)m[r]=e.position[n+r];ne(m,m,I);for(let r=0;r<3;r++)e.position[n+r]=m[r]}if(t[0]!==t[1]||t[1]!==t[2]){I[0]=1/t[0],I[4]=1/t[1],I[8]=1/t[2];for(let n=0;n<e.normal.length;n+=3){for(let r=0;r<3;r++)m[r]=e.normal[n+r];ne(m,m,I),St(m,m);for(let r=0;r<3;r++)e.normal[n+r]=m[r]}}}}const vn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},xn={south:0,east:1,north:2,west:3,up:4,down:5},m=y(),I=ke();function nt(e,t,{vertexSpace:n,spatialReference:r}){if(n.type==="georeferenced"){const l=e;if(!A(t,l,r))return!1;const{origin:u}=n;return Re(e,l,u),!0}const o=le(r),s=e;if(!A(t,s,o))return!1;const{origin:i}=n,a=ve;if(!Ie(r,i,a,o))return!1;const c=Rt(ve,a);return c!=null&&(Me(e,s,c),!0)}const ve=X(),ce="esri.geometry.support.meshUtils.rotate";function yn(e,t,n){var c;if(!((c=e.vertexAttributes)!=null&&c.position)||t[3]===0)return;const{spatialReference:r,vertexSpace:o}=e,s=(n==null?void 0:n.origin)??e.anchor,i=n==null?void 0:n.geographic,a=ie(ce,o,r,i);Pe(e)?wn(e,t,s):a?$n(e,t,s):bn(e,t,s)}function wn(e,t,n){e.transform??(e.transform=new Y);const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,c]=r.origin,l=new F({x:i,y:a,z:c,spatialReference:s}),u=E;if(l.equals(n))re(u,0,0,0);else if(!nt(u,n,e))return void _.getLogger(ce).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh (wkid:${s.wkid}) ${r.type} vertex space. Projection may be possible after calling projection.load().`);Ft($e,K(t),Le(t));const h=Oe(xe,$e,Z,_t,u),{localMatrix:f}=o,p=Te(xe,h,f);o.scale=Ee(y(),p),Ne(p,p,Ce(E,o.scale)),o.rotation=De(p),o.translation=ze(y(),p)}function $n(e,t,n){const r=e.spatialReference,o=le(r),s=rt;A(n,s,o)||A(e.origin,s,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),u=a!=null?new Float32Array(a.length):null,h=c!=null?new Float32Array(c.length):null;Ie(o,s,Q,o),kt(we,Q);const f=ye;ne(K(ye),K(t),we),f[3]=t[3],Ve(i,r,l),a!=null&&u!=null&&Ue(a,i,l,r,u),c!=null&&h!=null&&Be(c,i,l,r,h),C(l,f,3,s),Ge(l,i,r),a!=null&&u!=null&&(C(u,f,3),Ye(u,i,l,r,a)),c!=null&&h!=null&&(C(h,f,4),qe(h,i,l,r,c)),e.vertexAttributesChanged()}function bn(e,t,n){const r=rt;if(!A(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,_.getLogger(ce).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}C(e.vertexAttributes.position,t,3,r),C(e.vertexAttributes.normal,t,3),C(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function C(e,t,n,r=Z){if(e!=null){It(Q,Le(t),K(t));for(let o=0;o<e.length;o+=n){for(let s=0;s<3;s++)E[s]=e[o+s]-r[s];Me(E,E,Q);for(let s=0;s<3;s++)e[o+s]=E[s]+r[s]}}}const E=y(),xe=X(),ye=je(),Q=X(),we=ke(),rt=y(),$e=Mt(),ue="esri.geometry.support.meshUtils.scale";function An(e,t,n){var c;if(!((c=e.vertexAttributes)!=null&&c.position))return;const{vertexSpace:r,spatialReference:o}=e,s=(n==null?void 0:n.origin)??e.anchor,i=n==null?void 0:n.geographic,a=ie(ue,r,o,i);Pe(e)?Sn(e,t,s):a?Rn(e,t,s):Fn(e,t,s)}function Sn(e,t,n){e.transform??(e.transform=new Y);const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,c]=r.origin,l=new F({x:i,y:a,z:c,spatialReference:s}),u=N;if(l.equals(n))re(u,0,0,0);else if(!nt(u,n,e))return void _.getLogger(ue).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh (wkid:${s.wkid}) ${r.type} vertex space. Projection may be possible after calling projection.load().`);const h=re(_n,t,t,t),f=Oe(be,jt,Z,h,u),{localMatrix:p}=o,x=Te(be,f,p);o.scale=Ee(y(),x),Ne(x,x,Ce(N,o.scale)),o.rotation=De(x),o.translation=ze(y(),x)}function Rn(e,t,n){const r=e.spatialReference,o=le(r),s=st;A(n,s,o)||A(e.origin,s,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),u=a!=null?new Float32Array(a.length):null,h=c!=null?new Float32Array(c.length):null;Ve(i,r,l),a!=null&&u!=null&&Ue(a,i,l,r,u),c!=null&&h!=null&&Be(c,i,l,r,h),ot(l,t,s),Ge(l,i,r),a!=null&&u!=null&&Ye(u,i,l,r,a),c!=null&&h!=null&&qe(h,i,l,r,c),e.vertexAttributesChanged()}function Fn(e,t,n){const r=st;if(!A(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,_.getLogger(ue).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}ot(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function ot(e,t,n=Z){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)N[o]=e[r+o]-n[o];Pt(N,N,t);for(let o=0;o<3;o++)e[r+o]=N[o]+n[o]}}const N=y(),_n=y(),be=X(),st=y();var b;const it="esri.geometry.Mesh";function R(){return _.getLogger(it)}const kn={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:oe,local:zt}};let v=b=class extends Lt.LoadableMixin(Ot(Vt)){constructor(e){super(e),this.components=null,this.vertexSpace=new oe,this.transform=null,this.metadata=new M,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new J,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(Tt(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(t=>t.clone())}},()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):((e=this.metadata.displaySource)==null?void 0:e.extent)!=null}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:n,vertexSpace:r}=this,o=n.position;if(o.length===0||e&&e.length===0)return new Se({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if(H(r)){const{_untransformedBounds:s,transform:i}=this;return Wt(s,i,r,t)}return He(o,t)}get _untransformedBounds(){return We(this.vertexAttributes.position)}get anchor(){const e=pe(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:n}=this._transformedExtent;return new F({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get origin(){const e=pe(this.vertexSpace,this.spatialReference);return e??this._transformedExtent.center}get extent(){var e,t;return this.loaded||((t=(e=this.metadata)==null?void 0:e.displaySource)==null?void 0:t.extent)==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(D.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}R().error("removeComponent()",Yt)}}rotate(e,t,n,r){return Et(e,t,n,Ae),yn(this,Ae,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:o}=this,s=o==null?void 0:o.position;if(!s)return this;if(H(r)){const[i,a,c]=r.origin;r.origin=ee(i+e,a+t,c+n)}else{for(let i=0;i<s.length;i+=3)s[i]+=e,s[i+1]+=t,s[i+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(An(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Ht(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(en(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneWithVertexSpace(this.vertexSpace.clone())}cloneWithVertexSpace(e){var r;let t=null;if(this.components){const o=new Map,s=new Map;t=this.components.map(i=>i.cloneWithDeduplication(o,s))}const n={components:t,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),vertexSpace:e,transform:((r=this.transform)==null?void 0:r.clone())??null,metadata:this.metadata.clone()};return new b(n)}cloneShallow(){return new b({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=te(()=>import("./gltfexport-5UdPshhe.js"),__vite__mapDeps([3,1,2])),n=this.load(),r=await Promise.all([t,n]),{toBinaryGLTF:o}=r[0];return o(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(R().error(e,Gt),!1)}static createBox(e,t){if(!(e instanceof F))return R().error(".createBox()",B),null;const n=new b(W(ln(),e,t));return t!=null&&t.imageFace&&t.imageFace!=="all"?cn(n,t.imageFace):n}static createSphere(e,t){return e instanceof F?new b(W(un((t==null?void 0:t.densificationFactor)||0),e,t)):(R().error(".createSphere()",B),null)}static createCylinder(e,t){return e instanceof F?new b(W(pn((t==null?void 0:t.densificationFactor)||0),e,t)):(R().error(".createCylinder()",B),null)}static createPlane(e,t){if(!(e instanceof F))return R().error(".createPlane()",B),null;const n=(t==null?void 0:t.facing)??"up",r=fn(n,t==null?void 0:t.size);return new b(W(hn(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof Nt))return R().error(".createFromPolygon()",qt),null;const n=Ct(e);return new b({vertexAttributes:new J({position:n.position}),components:[new D({faces:n.faces,shading:"flat",material:(t==null?void 0:t.material)??null})],spatialReference:e.spatialReference,vertexSpace:new oe})}static async createFromGLTF(e,t,n){if(!(e instanceof F)){const o=new de;throw R().error(".createfromGLTF()",o.message),o}const{loadGLTFMesh:r}=await Fe(te(()=>import("./loadGLTFMesh-Bq_X-Qp_.js"),__vite__mapDeps([0,1,2])),n);return new b(await r(e,t,n))}static async createFromFiles(e,t,n){Dt(R(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const r=o=>R().error(".createFromFiles()",o.message);if(!(e instanceof F)){const o=new de;throw r(o),o}if(!(n!=null&&n.layer))throw new G("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){var p;const r=(n==null?void 0:n.extent)??null,{x:o,y:s,z:i,spatialReference:a}=e,c=((p=n==null?void 0:n.transform)==null?void 0:p.clone())??new Y,l=ee(o,s,i??0),u=fe((n==null?void 0:n.vertexSpace)??he(a),l),h={source:t,extent:r},f=new M;return f.externalSources.push(h),new b({metadata:f,transform:c,vertexSpace:u,spatialReference:a})}static createIncomplete(e,t){var u;const{x:n,y:r,z:o,spatialReference:s}=e,i=((u=t==null?void 0:t.transform)==null?void 0:u.clone())??new Y,a=ee(n,r,o??0),c=fe((t==null?void 0:t.vertexSpace)??he(s),a),l=new b({transform:i,vertexSpace:c,spatialReference:s});return l.addResolvingPromise(Promise.reject(new G("mesh-incomplete","Mesh resources are not complete"))),l}};d([g({type:[D],json:{write:!0}})],v.prototype,"components",void 0),d([g({nonNullable:!0,types:kn,constructOnly:!0,json:{write:!0}})],v.prototype,"vertexSpace",void 0),d([g({type:Y,json:{write:!0}})],v.prototype,"transform",void 0),d([g({constructOnly:!0})],v.prototype,"metadata",void 0),d([g()],v.prototype,"hasExtent",null),d([g()],v.prototype,"_transformedExtent",null),d([g()],v.prototype,"_untransformedBounds",null),d([g()],v.prototype,"anchor",null),d([g()],v.prototype,"origin",null),d([g({readOnly:!0,json:{read:!1}})],v.prototype,"extent",null),d([g({readOnly:!0,json:{read:!1,write:!0,default:!0}})],v.prototype,"hasZ",void 0),d([g({readOnly:!0,json:{read:!1,write:!0,default:!1}})],v.prototype,"hasM",void 0),d([g({type:J,nonNullable:!0,json:{write:!0}})],v.prototype,"vertexAttributes",void 0),v=b=d([_e(it)],v);const Ae=je(),Pn=v;export{Pn as $};