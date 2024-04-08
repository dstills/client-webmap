import{fp as G,fq as z,cF as L,fr as O,fs as U,ft as E,fu as V,fv as Z,fg as j,bU as A,fw as D,fx as P}from"./index-nBWeBKPv.js";import{c as T,B as R}from"./utils-DaKmNdQ2.js";let c=null;const Y=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function _(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function W(t,e,o,r){const s=G(o)?z(o):null,u=s?Math.round((s.valid[1]-s.valid[0])/e.scale[0]):null;return t.map(i=>{const a=new L(i.geometry);return O(e,a,a,a.hasZ,a.hasM),i.geometry=s?_(a,u??0,r[0]):a,i})}function k(t,e=18,o,r,s){const u=new Float64Array(r*s);e=Math.round(D(e));let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;const g=P(o);for(const{geometry:h,attributes:M}of t){const{x:$,y:f}=h,I=Math.max(0,$-e),N=Math.max(0,f-e),F=Math.min(s,f+e),b=Math.min(r,$+e),x=+g(M);for(let m=N;m<F;m++)for(let d=I;d<b;d++){const w=m*r+d,y=U(d-$,m-f,e)*x,l=u[w]+=y;i=Math.min(i,l),a=Math.max(a,l)}}return{min:i,max:a}}function q(t){const e=Y.exec(t);if(!e)return null;const{hh:o,mm:r,ss:s,ms:u}=e.groups;return Number(o)*E.hours+Number(r)*E.minutes+Number(s)*E.seconds+Number(u||0)}async function H(t,e,o=!0){if(!e)return[];const{field:r,field2:s,field3:u,fieldDelimiter:i,fieldInfos:a,timeZone:g}=t,h=r&&(a==null?void 0:a.find(l=>l.name.toLowerCase()===r.toLowerCase())),M=!!h&&V(h),$=!!h&&Z(h),f=t.valueExpression,I=t.normalizationType,N=t.normalizationField,F=t.normalizationTotal,b=[],x=t.viewInfoParams;let m=null,d=null;if(f){if(!c){const{arcadeUtils:l}=await j();c=l}c.hasGeometryOperations(f)&&await c.enableGeometryOperations(),m=c.createFunction(f),d=x?c.getViewInfo({viewingMode:x.viewingMode,scale:x.scale,spatialReference:new A(x.spatialReference)}):null}const w=t.fieldInfos,y=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&w?{fields:w}:null;return e.forEach(l=>{const p=l.attributes;let n;if(f){const v=y?{...l,layer:y}:l,C=c.createExecContext(v,d,g);n=c.executeFunction(m,C)}else p&&(n=p[r],s?(n=`${T(n)}${i}${T(p[s])}`,u&&(n=`${n}${i}${T(p[u])}`)):typeof n=="string"&&o&&($?n=n?new Date(n).getTime():null:M&&(n=n?q(n):null)));if(I&&typeof n=="number"&&isFinite(n)){const v=p&&parseFloat(p[N]);n=R(n,I,v,F)}b.push(n)}),b}export{H as b,W as j,q as w,k as x};
