function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-nBWeBKPv.js","assets/index-CIBc8SyM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{aw as y,D as d,kM as F,aU as K,bw as H,aq as z,z as n,C as h,E as p,ap as m,kN as j,kA as q,aj as J,ky as Q,bU as X,kz as Y,kO as Z,kP as $,am as ee,L as I,kQ as ae,kR as te,kS as oe}from"./index-nBWeBKPv.js";import{i as re}from"./originUtils-D69mHv66.js";import{o as P}from"./jsonContext-Dn5hidsh.js";import{p as k}from"./resourceUtils-CwZaF-Uu.js";import{i as O}from"./saveAPIKeyUtils-93BT8veH.js";import{r as S,t as T}from"./saveUtils-aoqZ3m__.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceUtils-g9k93dTC.js";const ie=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map(a=>a.toLowerCase());async function Be(a,e,t){t??(t={}),ne(a,e),await y(()=>!e.updatingFromView),await e.load(),await L(e),await S(e),await E(a,e);const o=e.portalItem,r=P(o,"web-map",!0),i=e.write({},r);return await Promise.all(r.resources.pendingOperations),T(r,{errorName:`${a.name}:save`},t),await M(e,o),await ke(a,e,o,i,r),await Promise.all([e.updateItemThumbnail(),k(e.resourceReferences,r)]),o}async function Ne(a,e,t,o){o??(o={});const r=le(a,t);await y(()=>!e.updatingFromView),await e.load(),se(a,e),await L(e),await S(e),await E(a,e);const i=P(r,"web-map",!0),s=e.write({},i);await Promise.all(i.resources.pendingOperations),T(i,{errorName:`${a.name}:save`},o),await de(e,r);const l=e.getThumbnailState();return await Oe(a,e,r,s,i,o)&&(e.resourceReferences.portalItem=r),e.restoreThumbnailFromState(l),await Promise.all([e.updateItemThumbnail(),k(e.resourceReferences,i)]),r}function ne(a,e){if(!e.portalItem)throw new d(`${a.name}:portal-item-not-set`,"Portal item to save to has not been set on the WebMap");O(e.portalItem),D(a,e.portalItem)}function D(a,e){if(e.type!==a.itemType)throw new d(`${a.name}:portal-item-wrong-type`,`Portal item needs to have type "${a.itemType}"`)}function se(a,e){const t=e.allLayers.filter(o=>{var r;return o.type==="unsupported"&&((r=o.resourceInfo)==null?void 0:r.layerType)==="KnowledgeGraphLayer"});if(t.length)throw new d(`${a.name}:save-as-invalid-configuration`,`Failed to save a copy of ${a.name} to prevent persisting invalid configuration. See 'details.layers'`,{layers:t.toArray()})}async function E(a,e){var o;if(!((o=e.basemap)!=null&&o.baseLayers.length))throw new d(`${a.name}:save`,"Map does not have a valid basemap with a base layer.");let t=null;if(await y(()=>{const r=F(e.initialViewProperties,e.basemap);return t=r.spatialReference,!r.updating}),!K(t,e.initialViewProperties.spatialReference))throw new d(`${a.name}:save`,"The spatial reference of the basemap is not compatible with the one from the map.",{expected:e.initialViewProperties.spatialReference,actual:t})}function le(a,e){let t=H.from(e);return t.id&&(t=t.clone(),t.id=null),t.type||(t.type=a.itemType),t.portal||(t.portal=z.getDefault()),O(t),D(a,t),t}function L(a){const e=[];return a.basemap&&e.push(a.basemap.load()),a.ground&&e.push(a.ground.load()),Promise.allSettled(e).then(()=>{})}async function M(a,e){e.extent=await Re(a.portalItem,a.initialViewProperties.viewpoint.targetGeometry),await me(a,e)}const pe=h.JSAPI,V="CollectorDisabled",g="Collector",b="Data Editing",C="OfflineDisabled",v="Offline",G="Workforce Project",U="Workforce Worker",B="Workforce Dispatcher",ce="Offline Map Areas",ue="FieldMapsDisabled",R=h.DEVELOPER_BASEMAP,W="UtilityNetwork",A="IPS";async function de(a,e){n(e,V),n(e,ue),n(e,h.METADATA),n(e,C),n(e,ce),n(e,B),n(e,G),n(e,U),await M(a,e)}async function me(a,e){p(e,pe),await fe(a),ye(a,e),he(a,e),_e(a,e),ge(a,e),be(a,e),ve(a,e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((t,o,r)=>r.indexOf(t)===o))}function fe(a){const e=_(a).map(t=>t.load()).toArray();return Promise.allSettled(e).then(()=>{})}function _(a){return a.allLayers.concat(a.allTables)}function N(a){return _(a).some(e=>e.loaded&&I(e)&&e.capabilities.operations.supportsEditing&&e.editingEnabled&&(e.type!=="subtype-group"||e.sublayers.some(t=>t.editingEnabled)))}function we(a){return _(a).filter(e=>e.type!=="group").every(e=>e.loaded&&Ie(a,e))}function ye(a,e){m(e,V)||m(e,G)||m(e,U)||m(e,B)||!N(a)?n(e,g):p(e,g)}function he(a,e){N(a)?p(e,b):n(e,b)}function _e(a,e){!m(e,C)&&we(a)?p(e,v):n(e,v)}function ge(a,e){j(a.basemap)?p(e,R):n(e,R)}function be(a,e){var t;(t=a.utilityNetworks)!=null&&t.length?p(e,W):n(e,W)}function ve(a,e){a.ipsInfo?p(e,A):n(e,A)}async function Re(a,e){const t=e.clone().normalize();let o;if(t.length>1)for(const r of t)o?r.width>o.width&&(o=r):o=r;else o=t[0];return We(a,o)}async function We(a,e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return q(e);const{getGeometryServiceURL:o}=await J(()=>import("./index-nBWeBKPv.js").then(s=>s.Hp),__vite__mapDeps([0,1])),r=await o(a),i=new Q;return i.geometries=[e],i.outSpatialReference=X.WGS84,(await Y(r,i))[0]}function Ae(a){return oe(a)||a.type==="map-notes"||a.type==="route"}function Ie(a,e){return I(e)&&e.capabilities.operations.supportsSync||Ae(e)&&!e.portalItem||(e.type==="tile"||e.type==="vector-tile")&&(e.capabilities.operations.supportsExportTiles||Pe(e)||ae(e))&&e.spatialReference.equals(a.initialViewProperties.spatialReference)}function Pe(a){return a.type==="tile"&&te(a.url)&&ie.some(e=>{var t;return(t=a.url)==null?void 0:t.toLowerCase().includes("/"+e+"/")})}async function ke(a,e,t,o,r){await t.update({data:o}),x(a,e,t,o,r)}async function Oe(a,e,t,o,r,i){const s=e.portalItem,l={item:s,authenticated:!(!(s!=null&&s.id)||!s.portal.user)},c=t.portal;await c.signIn();const{copyAllowed:f,itemReloaded:u}=await Se(l,c);if(l.authenticated||(l.authenticated=u),!f)throw new d(`${a.name}:save-as-copy-not-allowed`,"Owner of this map does not allow others to save a copy");const w=await Te(t,l,o,i);return e.portalItem=t,x(a,e,t,o,r),w}async function Se(a,e){var r;const{item:t,authenticated:o}=a;return t!=null&&t.id&&((r=t.typeKeywords)!=null&&r.includes("useOnly"))?t.portal.portalHostname!==e.portalHostname?{copyAllowed:!1,itemReloaded:!1}:(o||await t.reload(),{copyAllowed:t.itemControl==="admin"||t.itemControl==="update",itemReloaded:!0}):{copyAllowed:!0,itemReloaded:!1}}async function Te(a,e,t,o){var f;const r=a.portal,{item:i}=e,{folder:s,copyAllResources:l}=o;let c=!1;if(l&&(i!=null&&i.id)&&Z(i.portal.url,r.url)&&parseInt(i.portal.currentVersion,10)>=2023){const{total:u}=await i.fetchResources();c=!!u}if(c){const u=await i.copy({copyResources:"all",folder:s});a.id=u.id,a.portal=u.portal;const w=a.toJSON();await a.load(),a.read(w),await a.update({data:t})}else await((f=r.user)==null?void 0:f.addItem({item:a,folder:s,data:t}));return c}function x(a,e,t,o,r){$.prototype.read.call(e,{version:o.version,authoringApp:o.authoringApp,authoringAppVersion:o.authoringAppVersion},{origin:a.origin,ignoreDefaults:!0,url:t.itemUrl?ee(t.itemUrl):void 0}),re(r),e.resourceInfo=o}export{Be as save,Ne as saveAs};
