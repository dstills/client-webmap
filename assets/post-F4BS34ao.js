import{E as n,F as c,J as d,dw as v,b as u,b6 as y,dy as l,dz as f,aB as $}from"./index-BS4ejk0L.js";import{r as b}from"./serverVersionUtils-ZQFwPOpf.js";let t=class extends v{constructor(s){super(s),this.moment=null,this.success=!1}};n([c({type:Date,json:{type:Number,write:{writer:(s,e)=>{e.moment=s?s.getTime():null}}}})],t.prototype,"moment",void 0),n([c({type:Boolean,json:{write:!0}})],t.prototype,"success",void 0),t=n([d("esri.rest.versionManagement.gdbVersion.support.PostResult")],t);const j=t,i=new Map;async function S(s,e,r,m){i.has(s)||await b(i,s);const o=i.get(s);if(((o==null?void 0:o.serverVersion)??0)<=11.1)throw new u("post:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");if(!e)throw new u("post:missing-guid","guid for version is missing");const a=y(s),p=r.toJSON();r.rows&&(p.rows=JSON.stringify(r.rows));const w=l(a.query,{query:f({...p,f:"json"}),...m,method:"post"});e.startsWith("{")&&(e=e.slice(1,-1));const g=`${a.path}/versions/${e}/post`,{data:h}=await $(g,w);return j.fromJSON(h)}export{S as post,i as serverVersionCacheMap};