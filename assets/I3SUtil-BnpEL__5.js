import{lC as B,lD as H,fi as q,eL as b,a6 as D,aB as z,lE as J,lF as Z,lG as Q,hH as V,aj as X,lH as Y,b as w,lI as ee,aW as te,g as G,d5 as ne,fp as re,lJ as ae,lK as U,lL as oe,lM as se,ej as L,eK as ie,eG as W,iO as I,lN as N,ls as le,lO as ce,f1 as ue,f0 as fe}from"./index-D2dWKXoe.js";import{I as he}from"./I3SBinaryReader-6lwpcws_.js";function pe(e,t,n,r){const a=de(e,t,n),o=q();return B(n,a,o,r),o}const A=1,F=5-A;function de(e,t,n){const r=b(),a=e[3],o=2**(Math.ceil(Math.log(a)*Math.LOG2E/F)*F+A);if(n.isGeographic){const c=o/H(n).radius*180/Math.PI,l=Math.round(e[1]/c),d=Math.max(-90,Math.min(90,l*c)),f=c/Math.cos((Math.abs(d)-c/2)/180*Math.PI),y=Math.round(e[0]/f)*f;r[0]=y,r[1]=d}else{const c=Math.round(e[0]/o),l=Math.round(e[1]/o);r[0]=c*o,r[1]=l*o}const i=e[2]+t,s=Math.round(i/o);return r[2]=s*o,r}function P(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function We(e){var t;if(X("disable-feature:i3s-draco")||!e)return!1;for(const n of e)for(const r of n.geometryBuffers)if(((t=r.compressedAttributes)==null?void 0:t.encoding)==="draco")return!0;return!1}function Fe(e,t,n,r){n.traverse(t,a=>{const o=a.serviceMbsInIndexSR;return(o!=null&&ye(e,o))!==S.OUTSIDE&&(r(a),!0)})}function _e(e,t,n){let r=0,a=0;for(let o=0;o<t.length&&r<e.length;o++)e[r]===t[o]&&(n(o)&&(e[a]=e[r],a++),r++);e.length=a}function Ke(e,t,n){let r=0,a=0;for(;r<n.length;)Y(e,n[r])>=0===t&&(n[a]=n[r],a++),r++;n.length=a}const T=D();function qe(e,t){if(t.rotationScale[1]===0&&t.rotationScale[2]===0&&t.rotationScale[3]===0&&t.rotationScale[5]===0&&t.rotationScale[6]===0&&t.rotationScale[7]===0)return T[0]=(e[0]-t.position[0])/t.rotationScale[0],T[1]=(e[1]-t.position[1])/t.rotationScale[4],T[2]=(e[2]-t.position[0])/t.rotationScale[0],T[3]=(e[3]-t.position[1])/t.rotationScale[4],T}var S;function ye(e,t){const n=t[0],r=t[1],a=t[3],o=e[0]-n,i=n-e[2],s=e[1]-r,c=r-e[3],l=Math.max(o,i,0),d=Math.max(s,c,0),f=l*l+d*d;return f>a*a?S.OUTSIDE:f>0?S.INTERSECTS_CENTER_OUTSIDE:-Math.max(o,i,s,c)>a?S.INSIDE:S.INTERSECTS_CENTER_INSIDE}function me(e,t,n){const r=[],a=n==null?void 0:n.missingFields,o=n==null?void 0:n.originalFields;for(const i of e){const s=i.toLowerCase();let c=!1;for(const l of t)if(s===l.name.toLowerCase()){r.push(l.name),c=!0,o&&o.push(i);break}!c&&a&&a.push(i)}return r}async function Ge(e,t,n,r,a,o){if(t.length===0)return[];const i=e.attributeStorageInfo;if(e.associatedLayer!=null)try{return await we(e.associatedLayer,t,n,r,o)}catch(s){if(e.associatedLayer.loaded)throw s}if(i){const s=ge(t,n,a);if(s==null)throw new w("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const c=e.parsedUrl.path;return(await Promise.all(s.map(l=>be(c,i,l.node,l.indices,r,e.apiKey,e.customParameters,o).then(d=>{for(let f=0;f<l.graphics.length;f++){const y=l.graphics[f],m=d[f];if(y.attributes)for(const u in y.attributes)u in m||(m[u]=y.attributes[u]);y.attributes=m}return l.graphics})))).flat()}throw new w("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function ge(e,t,n){const r=new Map,a=[],o=n();for(const i of e){const s=i.attributes[t];for(let c=0;c<o.length;c++){const l=o[c],d=l.featureIds.indexOf(s);if(d>=0){let f=r.get(l.node);f||(f={node:l.node,indices:[],graphics:[]},a.push(f),r.set(l.node,f)),f.indices.push(d),f.graphics.push(i);for(let y=c;y>0;y--)o[y]=o[y-1];o[0]=l;break}}}return a}async function we(e,t,n,r,a){t.sort((l,d)=>l.attributes[n]-d.attributes[n]);const o=t.map(l=>l.attributes[n]),i=[],s=me(r,e.fields,{originalFields:i}),c=await j(e,o,s,a);for(let l=0;l<t.length;l++){const d=t[l],f=c[l],y={};if(d.attributes)for(const m in d.attributes)y[m]=d.attributes[m];for(let m=0;m<i.length;m++)y[i[m]]=f[s[m]];d.attributes=y}return t}function j(e,t,n,r){const a=e.capabilities.query.maxRecordCount;if(a!=null&&t.length>a){const i=ee(t,a);return Promise.all(i.map(s=>j(e,s,n,r))).then(s=>s.flat())}const o=new te({objectIds:t,outFields:n,orderByFields:[e.objectIdField]});return e.queryFeatures(o,r).then(i=>{if(i&&i.features&&i.features.length===t.length)return i.features.map(s=>s.attributes);throw new w("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")})}function be(e,t,n,r,a,o,i,s){return Se(e,t,n.resources.attributes,r,a,o,i,s)}async function Se(e,t,n,r,a,o,i,s){const c=[];for(const f of t)if(f&&a.includes(f.name)){const y=`${e}/nodes/${n}/attributes/${f.key}/0`;c.push({url:y,storageInfo:f})}const l=await Promise.allSettled(c.map(f=>z(f.url,{responseType:"array-buffer",query:{...i,token:o},signal:s==null?void 0:s.signal}).then(y=>he(f.storageInfo,y.data)))),d=[];for(const f of r){const y={};for(let m=0;m<l.length;m++){const u=l[m];if(u.status==="fulfilled"){const h=u.value;y[c[m].storageInfo.name]=Ee(h,f)}}d.push(y)}return d}(function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"})(S||(S={}));const Ie=-32768,Te=-(2**31);function Ee(e,t){if(!e)return null;const n=e[t];return J(e)?n===Ie?null:n:Z(e)?n===Te?null:n:n!=n?null:n}function Me(e){const t=e.store,n=t.indexCRS||t.geographicCRS,r=n===void 0?t.indexWKT:void 0;if(r){if(!e.spatialReference)throw new w("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new w("layerview:store-spatial-reference-wkt-index-incompatible","The indexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=n?new G(P(n)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function ve(e){const t=e.store,n=t.vertexCRS||t.projectedCRS,r=n===void 0?t.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new w("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new w("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=n?new G(P(n)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function Ae(e,t){return t==null?"@null":t===re(t)?"@ECEF":e.equals(t)?"":t.wkid!=null?"@"+t.wkid:null}function k(e,t,n){if(!ne(e,t))throw new w("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if(n==="local"&&!Re(e,t))throw new w("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function Pe(e,t,n){var r,a,o,i;if(((r=e.serviceUpdateTimeStamp)==null?void 0:r.lastUpdate)!==((a=t.serviceUpdateTimeStamp)==null?void 0:a.lastUpdate)||!n.isEmpty||((o=e.associatedLayer)==null?void 0:o.url)!==((i=t.associatedLayer)==null?void 0:i.url))throw new w("layerview:recycle-failed")}function Re(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function xe(e,t,n){const r=Me(e),a=ve(e);k(r,t,n),k(a,t,n)}function $e(e){var t;return(e.geometryType==null||e.geometryType==="triangles")&&(e.topology==null||e.topology==="PerAttributeArray")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function je(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!$e(e.store.defaultGeometrySchema))throw new w("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function Be(e,t){xe(e,t.spatialReference,t.viewingMode)}function Ce(e){var t;return e.geometryType!=null&&e.geometryType==="points"&&(e.topology==null||e.topology==="PerAttributeArray")&&(e.encoding==null||e.encoding===""||e.encoding==="lepcc-xyz")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function He(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!Ce(e.store.defaultGeometrySchema))throw new w("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function ze(e,t){k(e.spatialReference,t.spatialReference,t.viewingMode)}function Ne(e){return e.type==="simple"||e.type==="class-breaks"||e.type==="unique-value"}function Oe(e){return e.type==="mesh-3d"}function Je(e){var n;if(e==null||!Ne(e)||(e.type==="unique-value"||e.type==="class-breaks")&&e.defaultSymbol==null)return!0;const t=e.getSymbols();if(t.length===0)return!0;for(const r of t){if(!Oe(r)||r.symbolLayers.length===0)return!0;for(const a of r.symbolLayers.items)if(a.type!=="fill"||((n=a.material)==null?void 0:n.color)==null||a.material.colorMixMode!=="replace")return!0}return!1}const Ze=Q({color:[0,0,0,0],opacity:0});class ke{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function Qe(e){const t=new ke;let n=!1,r=!1;for(const a of e.symbolLayers.items)if(a.type==="fill"&&a.enabled){const o=a.material,i=a.edges;if(o!=null&&!n){const s=o.color,c=ae(o.colorMixMode);t.material=s!=null?{color:[s.r/255,s.g/255,s.b/255],alpha:s.a,colorMixMode:c}:{color:[1,1,1],alpha:1,colorMixMode:U.Multiply},t.castShadows=a.castShadows,n=!0}i==null||r||(t.edgeMaterial=oe(i,{}),r=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:U.Multiply}),t}function Ve(e,t){return(0|e)+(0|t)|0}function Xe(e,t,n,r,a,o,i){if(!o||o.length===0||t==null||!e.serviceMbsInIndexSR)return null;const s=pe(e.serviceMbsInIndexSR,a,n,t);se(R,s);let c=null;const l=()=>{if(!c)if(c=De,L(v),e.serviceObbInIndexSR!=null){e.serviceObbInIndexSR.transform(_,n,t,a,i),_.getCorners(c);for(const u of c)I(u,u,R),N(v,u)}else{const u=e.serviceMbsInIndexSR;if(!u)return;const h=u[3];W(ue(u),n,p,t),I(p,p,R),p[2]+=a;for(let g=0;g<8;++g){const E=1&g?h:-h,x=2&g?h:-h,$=4&g?h:-h,M=c[g];fe(M,[p[0]+E,p[1]+x,p[2]+$]),N(v,M)}}};let d=1/0,f=-1/0;const y=u=>{if(u.type!=="replace")return;const h=u.geometry;if(!(h!=null&&h.hasZ))return;L(O);const g=h.spatialReference||r,E=h.rings.reduce((x,$)=>$.reduce((M,C)=>(ie(p,C[0],C[1],C[2]),W(p,g,p,t),I(p,p,R),N(O,p),Math.min(p[2],M)),x),1/0);l(),le(v,O)&&(d=Math.min(d,E),f=Math.max(f,E))};if(o.forEach(u=>y(u)),d===1/0)return null;const m=(u,h,g)=>{I(p,g,s),u[h]=p[0],u[h+1]=p[1],u[h+2]=p[2],h+=24,g[2]=d,I(p,g,s),u[h]=p[0],u[h+1]=p[1],u[h+2]=p[2],h+=24,g[2]=f,I(p,g,s),u[h]=p[0],u[h+1]=p[1],u[h+2]=p[2]};for(let u=0;u<8;++u)m(K.data,3*u,c[u]);return ce(K)}function Ye(e){return e[3]>=0}function et(e){e!=null&&(e[3]=-1)}const De=[b(),b(),b(),b(),b(),b(),b(),b()],O=D(),v=D(),_=new V,p=b(),K={data:new Array(72),size:3,exclusive:!0,stride:3},R=q();export{Se as $,Ge as A,_e as D,S as F,ve as H,Ae as J,me as L,We as N,ye as O,Ee as Q,Ke as W,k as X,Pe as Y,Me as Z,He as a,Ve as d,de as e,Ze as f,et as g,Xe as h,pe as i,Fe as k,Qe as m,Be as n,je as o,qe as q,ze as s,xe as t,Je as u,Ye as y};