function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/geometryEngineJSON-BIumsHI5.js","assets/index-nBWeBKPv.js","assets/index-CIBc8SyM.css","assets/json-Wa8cmqdu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{uO as X,uP as G,uQ as H,br as R,uR as v,uS as K,uT as Q,uU as k,mS as ee,uV as te,v as ne,iJ as ie,hC as d,aU as I,uW as Z,aW as M,mT as j,aG as re,bz as se,tG as ae,aN as oe,b$ as le,fX as h,fY as x,fZ as ue,ew as ce,qQ as fe,aT as me,i1 as T,aj as O,uX as pe,uY as he,ip as A,uZ as ye,u_ as Re,D as $,ib as Se}from"./index-nBWeBKPv.js";import{t as q}from"./json-Wa8cmqdu.js";const E=new R,ge=new R,b=new R,m={esriGeometryPoint:v,esriGeometryPolyline:K,esriGeometryPolygon:Q,esriGeometryMultipoint:k};function Ce(e,t,n,i=e.hasZ,r=e.hasM){if(t==null)return null;const s=e.hasZ&&i,a=e.hasM&&r;if(n){const o=G(b,t,e.hasZ,e.hasM,"esriGeometryPoint",n,i,r);return v(o,s,a)}return v(t,s,a)}function g(e,t,n,i,r,s,a=t,o=n){var y,p,S;const l=t&&a,u=n&&o,c=i!=null?"coords"in i?i:i.geometry:null;if(c==null)return null;if(r){let f=X(ge,c,t,n,e,r,a,o);return s&&(f=G(b,f,l,u,e,s)),((y=m[e])==null?void 0:y.call(m,f,l,u))??null}if(s){const f=G(b,c,t,n,e,s,a,o);return((p=m[e])==null?void 0:p.call(m,f,l,u))??null}return H(E,c,t,n,a,o),((S=m[e])==null?void 0:S.call(m,E,l,u))??null}function Ve(e){return e&&z in e?JSON.parse(JSON.stringify(e,de)):e}const z="_geVersion",de=(e,t)=>e!==z?t:void 0,_=[0,0];function C(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,_),t.z!=null&&(n.z=t.z),t.m!=null&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,_),[n.xmax,n.ymax]=e(t.xmax,t.ymax,_),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:F(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:F(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:V(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function F(e,t){const n=[];for(const i of e)n.push(V(i,t));return n}function V(e,t){const n=[];for(const i of e){const r=t(i[0],i[1],[0,0]);n.push(r),i.length>2&&r.push(i[2]),i.length>3&&r.push(i[3])}return n}async function P(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map(i=>i.geometry!=null?i.geometry.spatialReference:null).filter(ne):[e];await ie(n.map(i=>({source:i,dest:t})))}const D=C.bind(null,ee),J=C.bind(null,te);function W(e,t,n,i){if(!e||(n||(n=t,t=e.spatialReference),!d(t)||!d(n)||I(t,n)))return e;if(Z(t,n)){const r=M(n)?D(e):J(e);return r.spatialReference=n,r}return j(q,[e],t,n,null,i)[0]}class xe{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,n,i,r){if(!(t!=null&&t.length)||!n||!i||I(n,i))return t;const s={geometries:t,inSpatialReference:n,outSpatialReference:i,geographicTransformation:r,resolve:re()};return this._jobs.push(s),this._timer??(this._timer=setTimeout(this._process,10)),s.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:n,inSpatialReference:i,outSpatialReference:r,resolve:s,geographicTransformation:a}=t;Z(i,r)?M(r)?s(n.map(D)):s(n.map(J)):s(j(q,n,i,r,a,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const $e=new xe;function De(e,t,n,i){return $e.push(e,t,n,i)}const _e=new se({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),U=Object.freeze({});async function Je(e,t,n){const{outFields:i,orderByFields:r,groupByFieldsForStatistics:s,outStatistics:a}=e;if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(r)for(let o=0;o<r.length;o++)r[o]=r[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),we(e,t,n)}async function we(e,t,n){var s;if(!e)return null;let{where:i}=e;if(e.where=i=i==null?void 0:i.trim(),(!i||/^1 *= *1$/.test(i)||t&&t===i)&&(e.where=null),!e.geometry)return e;let r=await ve(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:a}=e.geometry;r=ae(r),r.spatialReference=a}if(r){await P(r.spatialReference,n),r=Ge(r,n);const a=(await oe(le(r)))[0];if(a==null)throw U;const o="quantizationParameters"in e&&((s=e.quantizationParameters)==null?void 0:s.tolerance)||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,l=o&&Y(r,n)?{densificationStep:8*o}:void 0,u=a.toJSON(),c=W(u,u.spatialReference,n,l);if(!c)throw U;c.spatialReference=n,e.geometry=c}return e}function Y(e,t){if(!e)return!1;const n=e.spatialReference;return(h(e)||x(e)||ue(e))&&!I(n,t)&&!ce(n,t)}function Ge(e,t){const n=e.spatialReference;return Y(e,t)&&h(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function ve(e){const{distance:t,units:n}=e,i=e.geometry;if(t==null||"vertexAttributes"in i)return i;const r=i.spatialReference,s=n?_e.fromJSON(n):fe(r),a=r&&(me(r)||M(r))?i:await P(r,T).then(()=>W(i,T));return(await be())(a.spatialReference,a,t,s)}async function be(){return(await O(()=>import("./geometryEngineJSON-BIumsHI5.js").then(e=>e.g),__vite__mapDeps([0,1,2,3]))).geodesicBuffer}function Ie(e){return e==="mesh"?pe:he(e)}function B(e,t){return e?t?4:3:t?3:2}function Me(e,t,n,i){return L(e,t,n,i.coords[0],i.coords[1])}function Pe(e,t,n,i,r,s){const a=B(r,s),{coords:o,lengths:l}=i;if(!l)return!1;for(let u=0,c=0;u<l.length;u++,c+=a)if(!L(e,t,n,o[c],o[c+1]))return!1;return!0}function L(e,t,n,i,r){if(!e)return!1;const s=B(t,n),{coords:a,lengths:o}=e;let l=!1,u=0;for(const c of o)l=Ne(l,a,s,u,c,i,r),u+=c*s;return l}function Ne(e,t,n,i,r,s,a){let o=e,l=i;for(let u=i,c=i+r*n;u<c;u+=n){l=u+n,l===c&&(l=i);const y=t[u],p=t[u+1],S=t[l],f=t[l+1];(p<a&&f>=a||f<a&&p>=a)&&y+(a-p)/(f-p)*(S-y)<s&&(o=!o)}return o}const w="unsupported-query",Te={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},N={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Ae(e){return e!=null&&N.spatialRelationship[e]===!0}function Ee(e){return e!=null&&N.queryGeometry[Se(e)]===!0}function Fe(e){return e!=null&&N.layerGeometry[e]===!0}function Ue(){return O(()=>import("./geometryEngineJSON-BIumsHI5.js").then(e=>e.g),__vite__mapDeps([0,1,2,3]))}function We(e,t,n,i,r){if(x(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const s=A(new R,t,!1,!1);return Promise.resolve(a=>Me(s,!1,!1,a))}if(x(t)&&n==="esriGeometryMultipoint"){const s=A(new R,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(a=>Pe(s,!1,!1,a,i,r))}if(h(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(s=>ye(t,g(n,i,r,s)));if(h(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(s=>Re(t,g(n,i,r,s)));if(h(t)&&e==="esriSpatialRelIntersects"){const s=Ie(n);return Promise.resolve(a=>s(t,g(n,i,r,a)))}return Ue().then(s=>{const a=s[Te[e]].bind(null,t.spatialReference,t);return o=>a(g(n,i,r,o))})}async function Ye(e,t,n){var s;const{spatialRel:i,geometry:r}=e;if(r){if(!Ae(i))throw new $(w,"Unsupported query spatial relationship",{query:e});if(d(r.spatialReference)&&d(n)){if(!Ee(r))throw new $(w,"Unsupported query geometry type",{query:e});if(!Fe(t))throw new $(w,"Unsupported layer geometry type",{query:e});if(e.outSR)return P((s=e.geometry)==null?void 0:s.spatialReference,e.outSR)}}}function Be(e){if(h(e))return!0;if(x(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function Le(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:i,endTimeField:r}=e;let s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(i&&r)await t.forEach(o=>{const l=n.getAttribute(o,i),u=n.getAttribute(o,r);l==null||isNaN(l)||(s=Math.min(s,l)),u==null||isNaN(u)||(a=Math.max(a,u))});else{const o=i||r;await t.forEach(l=>{const u=n.getAttribute(l,o);u==null||isNaN(u)||(s=Math.min(s,u),a=Math.max(a,u))})}return{start:s,end:a}}function Xe(e,t,n){var l;if(!t||!e)return null;const{startTimeField:i,endTimeField:r}=e;if(!i&&!r)return null;const{start:s,end:a}=t;if(s===null&&a===null)return null;if(s===void 0&&a===void 0)return Oe();const o=((l=n.getAttributeAsTimestamp)==null?void 0:l.bind(n))??n.getAttribute.bind(n);return i&&r?Ze(o,i,r,s,a):je(o,i||r,s,a)}function Ze(e,t,n,i,r){return i!=null&&r!=null?s=>{const a=e(s,t),o=e(s,n);return(a==null||a<=r)&&(o==null||o>=i)}:i!=null?s=>{const a=e(s,n);return a==null||a>=i}:r!=null?s=>{const a=e(s,t);return a==null||a<=r}:void 0}function je(e,t,n,i){return n!=null&&i!=null&&n===i?r=>e(r,t)===n:n!=null&&i!=null?r=>{const s=e(r,t);return s!=null&&s>=n&&s<=i}:n!=null?r=>{const s=e(r,t);return s!=null&&s>=n}:i!=null?r=>{const s=e(r,t);return s!=null&&s<=i}:void 0}function Oe(){return()=>!1}export{Be as I,Ye as P,Je as S,g as a,we as b,De as c,U as g,Ve as h,W as j,Le as n,Xe as t,We as v,P as x,Ce as y};
