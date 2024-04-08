import{e0 as n,dO as u,dP as h,dZ as o,G$ as g,H0 as S,H1 as f,gc as x,g7 as _,mN as v,yu as y,mb as z,d7 as b,e3 as p,H2 as E,H3 as I,cS as C}from"./index-nBWeBKPv.js";import{a as P}from"./Object3DVisualElement-BhPO44v1.js";import{v as $,V as M,A as O}from"./LaserlineVisualElement-DpPRnC4J.js";class A extends P{constructor(e){super(e),this._material=null,this._texture=null,this._geometry=null,this._size=3,this._color=n(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=n(1,1,1,1),this._elevationInfo=null,this.applyProperties(e)}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){if(e!==this._size){const t=this._preferredTextureSize;this._size=e,t<this._preferredTextureSize?this.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(e){u(e,this._color)||(h(this._color,e),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial())}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,this.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){u(e,this._outlineColor)||(h(this._outlineColor,e),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}_updateMaterial(){this._material&&this._material.setParameters(this._materialParameters)}_updateSizeAttribute(){const e=this.object;if(e==null)return;const t=e.geometries[0];if(t==null)return;const i=t.getMutableAttribute(o.SIZE).data,r=this._geometrySize;i[0]=r,i[1]=r,e.geometryVertexAttributeUpdated(e.geometries[0],o.SIZE)}get _materialParameters(){var e;return{color:this._color,textureIsSignedDistanceField:!0,sampleSignedDistanceFieldTexelCenter:g(this._primitive),distanceFieldBoundingBox:T,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:(e=this._texture)==null?void 0:e.id,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled,isDecoration:this.isDecoration}}get _geometrySize(){return this._size/s}createExternalResources(){this._texture=S(this._primitive,this._preferredTextureSize),this._material=new f(this._materialParameters);const e=this.view._stage;this._texture.load(e.renderView.renderingContext),e.add(this._texture)}destroyExternalResources(){this._texture&&(this.view._stage.remove(this._texture),this._texture.dispose(),this._texture=null),this._material=null}createGeometries(e){const t=this._createRenderGeometry();t!=null&&e.addGeometry(t)}forEachExternalMaterial(e){this._material&&e(this._material)}get _preferredTextureSize(){return x(2*this._geometrySize,16,128)}calculateMapBounds(e){var r;const t=(r=this.object)==null?void 0:r.geometries[0];if(!t)return!1;const i=t.attributes.get(o.POSITION).data;return _(i,this.view.renderCoordsHelper.spatialReference,d,this.view.spatialReference),v(e,d),!0}_createRenderGeometry(){const{geometry:e,_material:t}=this;if(e==null||t==null)return null;const{renderCoordsHelper:i,elevationProvider:r}=this.view,c=y(e,r,z.fromElevationInfo(this.elevationInfo),i),m=b(p.get(),e.x,e.y,c),a=p.get();_(m,e.spatialReference,a,i.spatialReference);const l=this._geometrySize;return E(t,null,a,null,[l,l],[0,0,0,1])}}const s=I,T=[s/2,s/2,1-s/2,1-s/2],d=C(),H=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:"Module"})),D=Object.freeze(Object.defineProperty({__proto__:null,build:M,defaultAngleCutoff:O},Symbol.toStringTag,{value:"Module"}));export{H as L,D as a,A as x};
