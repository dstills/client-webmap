import{m0 as E,m1 as _,m2 as m,lZ as i,m3 as c,m4 as x,iq as h,cS as A,m5 as C,fO as I,h3 as d}from"./index-nBWeBKPv.js";function L(e,u,s,r){if(u==null||r==null)return!1;const t=_(u,r,P);if(t.projector===m)return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],!0;if(t.projector==null)return!1;const{source:n,dest:a}=t;if(a.spatialReferenceId===i.WEB_MERCATOR){const o=c[n.spatialReferenceId][i.WGS84];return o!=null&&(o(e,0,f,0),x(f,0,s,0),s[3]=p(f[1],e[2],e[3],h.radius),!0)}if(n.spatialReferenceId!==i.WGS84&&n.spatialReferenceId!==i.CGCS2000||a.spatialReferenceId!==i.PLATE_CARREE){t.projector(e,0,s,0);const o=n.metersPerUnit??1,l=a.metersPerUnit??1;s[3]=e[3]*o/l}else{const o=c[n.spatialReferenceId][i.SPHERICAL_ECEF],l=c[i.SPHERICAL_ECEF][i.PLATE_CARREE];let R=e[3];o!=null&&l!=null&&(R=p(e[1],e[2],e[3],h.radius)),t.projector(e,0,s,0),s[3]=R}return!0}function p(e,u,s,r){const t=r+u;if(t<r/2||s>t)return Number.MAX_VALUE;const n=Math.abs(M*e)+Math.asin(s/t);return n>=Math.PI/2?Number.MAX_VALUE:s/Math.cos(n)}const f=A(),P=E(),M=C(1);class T{constructor(u,s){this._textureRep=u,this.loadPromise=null,this._disposed=!1;const r=this._textureRep.acquire(s);I(r)?(r.then(t=>{this._disposed?d(t):this._textureRef=t}),this.loadPromise=r):this._textureRef=r}dispose(){this._textureRef=d(this._textureRef),this._disposed=!0}get glTexture(){return this._textureRef!=null?this._textureRef.glTexture:null}}export{L as a,T as s};