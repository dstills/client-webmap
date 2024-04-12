import{lX as y,lY as M,lZ as w,l_ as a,G as F,fQ as H,hC as C,l$ as _,c6 as z,O as A,m0 as j,fD as G,fE as L,eM as P,aT as T,dS as S,el as $,k5 as B,iO as W,iK as I,E as h,F as v,J as k,fk as q,dT as D,eN as E}from"./index-BS4ejk0L.js";import{a as K}from"./RenderTexture-CgbqonUO.js";function X(e,n,t,s){if(n==null||s==null)return!1;const i=y(n,M),r=y(s,w);if(i===r&&i!==a.UNKNOWN||F(n,s))return t[0]=1,t[1]=1,t[2]=1,!0;if(i===a.SPHERICAL_ECEF){const c=H(e),u=c/Math.sqrt(e[0]*e[0]+e[1]*e[1]),p=c/C.radius;if(r===a.WEB_MERCATOR)return t[0]=u*p,t[1]=u*p,t[2]=1,!0;if(r===a.WGS84||r===a.CGCS2000){const o=_;return t[0]=o*u*p,t[1]=o*p,t[2]=1,!0}}else if(i===a.PLATE_CARREE){if(r===a.WGS84||r===a.CGCS2000)return t[0]=_,t[1]=_,t[2]=1,!0;if(r===a.WEB_MERCATOR){const c=e[1]/C.radius;return t[0]=1,t[1]=1/Math.cos(c),t[2]=1,!0}}return!1}let d=class extends z.EventedMixin(A){constructor(e){super(e),this._tmpEvent=new j,this._renderCoordsHelper=e.view.renderCoordsHelper,this._renderSR=this._renderCoordsHelper.spatialReference,this._layerElevationSource=e.layerElevationSource}initialize(){this._intersector=G(this.view.state.viewingMode),this._intersector.options.store=L.MIN,this._tmpEvent.context=this.intersectionHandler.isGround?"ground":"scene"}get spatialReference(){var e,n;return(n=(e=this.view)==null?void 0:e.elevationProvider)==null?void 0:n.spatialReference}getElevation(e,n,t,s){const i=this._renderCoordsHelper,r=P(l,e,n,t);if(!i.toRenderCoords(r,s,r))return T.getLogger(this).error("could not project point to compute elevation"),null;const{layerElevationSource:c,_intersector:u,intersectionHandler:p}=this,o=c.fullExtent,f=o!=null&&Number.isFinite(o.xmin)&&Number.isFinite(o.xmax)&&Number.isFinite(o.ymin)&&Number.isFinite(o.ymax)&&Number.isFinite(o.zmin)&&Number.isFinite(o.zmax)?new S(o.zmin,o.zmax):c.elevationRange;if(f==null)return null;const R=c.elevationOffset,b=f.elevationRangeMin+R,N=f.elevationRangeMax+R,x=i.setAltitude(Z,N,r),g=i.setAltitude(J,b,r);return u.reset(x,g,null),p.intersect(u,null,x,g,null,!0),u.results.min.getIntersectionPoint(r)?i.getAltitude(r):null}getSphereElevationBounds(e,n){return K(e,n,O,this._renderSR),this._layerElevationSource.getElevationRange(O)}getRootElevationBounds(){const e=this.layerElevationSource.fullExtent;return e!=null&&e.hasZ?new S(e.zmin,e.zmax):null}objectsChanged(e){this.spatialReference&&(this._computeLayerExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}objectChanged(e){this.spatialReference&&(this._computeObjectExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}_computeObjectExtent(e,n){$(n),this._expandExtent(e,n)}_computeLayerExtent(e,n){$(n);for(const t of e)this._expandExtent(t,n)}_expandExtent(e,n){const t=this.spatialReference;if(t==null||e==null)return;B(m,e.quaternion),m[12]=e.center[0],m[13]=e.center[1],m[14]=e.center[2];const s=e.halfSize;for(let i=0;i<8;++i)l[0]=1&i?s[0]:-s[0],l[1]=2&i?s[1]:-s[1],l[2]=4&i?s[2]:-s[2],W(l,l,m),this._renderCoordsHelper.fromRenderCoords(l,l,t),I(n,l,n)}};h([v({constructOnly:!0})],d.prototype,"layerElevationSource",void 0),h([v({constructOnly:!0})],d.prototype,"intersectionHandler",void 0),h([v({constructOnly:!0})],d.prototype,"view",void 0),h([v()],d.prototype,"spatialReference",null),d=h([k("esri.views.3d.layers.i3s.LayerElevationProvider")],d);const m=q(),O=D(0,0,0,0),l=E(),Z=E(),J=E();export{X as f,d as x};