import{G as x,aY as F,a9 as G,aZ as Y,a_ as w,a$ as Z,aU as A,b as v,b0 as M,b1 as T}from"./index-D2dWKXoe.js";import{isFeatureIdentifierArrayWithGlobalId as X,isFeatureIdentifierArrayWithObjectId as U}from"./editingSupport-pr8untXV.js";async function C(e,t,s){const{geometry:n}=t,a={...t.attributes};if(s!=null&&(n==null?void 0:n.type)==="mesh"){const{transformFieldRoles:r}=s,{origin:d,spatialReference:l,transform:p,vertexSpace:o}=n,u=o.type==="local",i=e.spatialReference,R=i.isGeographic,h=x(i,l),j=h||F(i)&&(F(l)||G(l));if(!(u&&R&&j||!u&&!R&&h))return null;const m=Y(d,l,i);if(m==null)return null;if(a[r.originX]=m.x,a[r.originY]=m.y,a[r.originZ]=m.z??0,p!=null){const{translation:b,scale:I,rotation:f}=p,y=u?1:w(l)/w(i);a[r.translationX]=b[0]*y,a[r.translationY]=b[2]*y,a[r.translationZ]=-b[1]*y,a[r.scaleX]=I[0],a[r.scaleY]=I[2],a[r.scaleZ]=I[1],a[r.rotationX]=f[0],a[r.rotationY]=f[2],a[r.rotationZ]=-f[1],a[r.rotationDeg]=f[3]}return{attributes:a}}return n==null?{attributes:a}:n.type==="mesh"||n.type==="extent"?null:{geometry:n.toJSON(),attributes:a}}async function J(e,t){const s=await Promise.all((t.addAttachments??[]).map(r=>$(e,r))),n=await Promise.all((t.updateAttachments??[]).map(r=>$(e,r))),a=t.deleteAttachments??[];return s.length||n.length||a.length?{adds:s,updates:n,deletes:[...a]}:null}async function $(e,t){var u;const{feature:s,attachment:n}=t,{globalId:a,name:r,contentType:d,data:l,uploadId:p}=n,o={globalId:a};if(s&&("attributes"in s?o.parentGlobalId=(u=s.attributes)==null?void 0:u[e.globalIdField]:s.globalId&&(o.parentGlobalId=s.globalId)),p)o.uploadId=p;else if(l){const i=await Z(l);i&&(o.contentType=i.mediaType,o.data=i.data),l instanceof File&&(o.name=l.name)}return r&&(o.name=r),d&&(o.contentType=d),o}function L(e,t,s){if(!t||t.length===0)return[];if(s&&X(t))return t.map(a=>a.globalId);if(U(t))return t.map(a=>a.objectId);const n=s?e.globalIdField:e.objectIdField;return n?t.map(a=>a.getAttribute(n)):[]}function O(e){var a,r,d;const t=e==null?void 0:e.assetMaps;if(t){for(const l of t.addResults)l.success||A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${l.globalId}.`);for(const l of t.updateResults)l.success||A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${l.globalId}.`)}const s=e==null?void 0:e.attachments,n={addFeatureResults:((a=e==null?void 0:e.addResults)==null?void 0:a.map(c))??[],updateFeatureResults:((r=e==null?void 0:e.updateResults)==null?void 0:r.map(c))??[],deleteFeatureResults:((d=e==null?void 0:e.deleteResults)==null?void 0:d.map(c))??[],addAttachmentResults:s!=null&&s.addResults?s.addResults.map(c):[],updateAttachmentResults:s!=null&&s.updateResults?s.updateResults.map(c):[],deleteAttachmentResults:s!=null&&s.deleteResults?s.deleteResults.map(c):[]};return e!=null&&e.editMoment&&(n.editMoment=e.editMoment),n}function c(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new v("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}function g(e,t){return new M({attributes:e.attributes,geometry:T({...e.geometry,spatialReference:t})})}function P(e,t){var s,n,a;return{adds:((s=e==null?void 0:e.adds)==null?void 0:s.map(r=>g(r,t)))||[],updates:((n=e==null?void 0:e.updates)==null?void 0:n.map(r=>({original:g(r[0],t),current:g(r[1],t)})))||[],deletes:((a=e==null?void 0:e.deletes)==null?void 0:a.map(r=>g(r,t)))||[],spatialReference:t}}function S(e){const t=e.details.raw,s=+t.code,n=+t.extendedCode;return s===500&&(n===-2147217144||n===-2147467261)}export{P as I,c as R,O as b,L as g,S as h,J as m,C as p};