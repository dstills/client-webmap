import{d5 as d,d6 as b,gU as s,g as i,y as r,cF as c,l2 as f,i as p,S as j,mo as h}from"./index-nBWeBKPv.js";import{j as a}from"./persistable-BpBIdujX.js";function y(t,e){return u(t)===u(e)}function u(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let l=null;return l=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,l==null?null:`o-${e}-${l}`}const I={json:{write:{writer:v,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:g}}}};function v(t,e){var l;((l=t==null?void 0:t.layer)==null?void 0:l.objectIdField)!=null&&t.attributes!=null&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function g(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let n=class extends d(b(j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return s(this.position,e.position)&&s(this.elevationInfo,e.elevationInfo)&&y(this.feature,e.feature)}};i([r({type:c,json:{write:{isRequired:!0}}})],n.prototype,"position",void 0),i([r({type:f}),a()],n.prototype,"elevationInfo",void 0),i([r(I)],n.prototype,"feature",void 0),n=i([p("esri.analysis.LineOfSightAnalysisObserver")],n);const S=n;let o=class extends d(h){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return s(this.position,t.position)&&s(this.elevationInfo,t.elevationInfo)&&y(this.feature,t.feature)}};i([r({type:c}),a()],o.prototype,"position",void 0),i([r({type:f}),a()],o.prototype,"elevationInfo",void 0),i([r(I)],o.prototype,"feature",void 0),o=i([p("esri.analysis.LineOfSightAnalysisTarget")],o);const O=o;export{O as f,u as t,S as u};
