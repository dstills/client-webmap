import{g as i,y as l,i as c,aO as p,eJ as b,eK as g}from"./index-BhDz4nJ7.js";import{a as h,_ as f}from"./BuildingComponentSublayer-DJb6X-E1.js";var u;const y={type:p,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:d}}},read:!1}};function d(e,a,s){if(e&&Array.isArray(e))return new p(e.map(r=>{const n=m(r);if(n){const t=new n;return t.read(r,s),t}return s!=null&&s.messages&&r&&s.messages.push(new b("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:s})),null}))}let o=u=class extends h{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return g(this,e=>u.forEachSublayer(this.sublayers,a=>{a.type!=="building-group"&&e(a)}))}};function m(e){return e.layerType==="group"?o:f}i([l({type:["hide","show","hide-children"],json:{write:!0}})],o.prototype,"listMode",void 0),i([l(y)],o.prototype,"sublayers",void 0),o=u=i([c("esri.layers.buildingSublayers.BuildingGroupSublayer")],o),function(e){function a(s,r){s.forEach(n=>{r(n),n.type==="building-group"&&a(n.sublayers,r)})}e.sublayersProperty=y,e.readSublayers=d,e.forEachSublayer=a}(o||(o={}));const v=o;export{v as d};