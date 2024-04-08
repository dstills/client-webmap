function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/geometryEngineJSON-Yp3G35Lu.js","assets/index-BhDz4nJ7.js","assets/index-CIBc8SyM.css","assets/json-Wa8cmqdu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{ii as d,ij as h,ih as m,ik as g,il as p,im as y,hC as a,aj as w}from"./index-BhDz4nJ7.js";import{n as _}from"./date-M6n_RqpC.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(i){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=i}}function c(n){return new b(n)}class j{constructor(i){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=i}}function A(n){return new j(n)}const l=new Set;function F(n,i,t,f=!1){l.clear();for(const e in t){const r=n.get(e);if(!r)continue;const o=q(r,t[e]);if(l.add(r.name),r&&(f||r.editable)){const u=d(r,o);if(u)return c(h(u,r,o));i[r.name]=o}}for(const e of(n==null?void 0:n.requiredFields)??[])if(!l.has(e.name))return c(`missing required field "${e.name}"`);return null}function q(n,i){let t=i;return m(n)&&typeof i=="string"?t=parseFloat(i):g(n)&&i!=null&&typeof i!="string"?t=String(i):p(n)&&typeof i=="string"&&(t=_(i)),y(t)}let s;function G(n,i){if(!n||!a(i))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(i,n)}return n}async function P(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-Yp3G35Lu.js").then(n=>n.g),__vite__mapDeps([0,1,2,3]))),s}async function S(n,i){!a(n)||i!=="esriGeometryPolygon"&&i!=="esriGeometryPolyline"||await P()}export{A as d,c as f,S as j,F as p,G as y};