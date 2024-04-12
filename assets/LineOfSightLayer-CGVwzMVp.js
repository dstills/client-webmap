import{be as n,gS as l,gU as o,bt as y,bA as p,d2 as d,E as s,F as i,J as u,bx as h}from"./index-BS4ejk0L.js";import{v as r}from"./LineOfSightAnalysis-DDdbpqmB.js";import{f as g,u as f}from"./LineOfSightAnalysisTarget-DBpNc0r1.js";import"./Analysis-DU3KgEb8.js";import"./persistable-Cwi4TBqM.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-iEEhFVu4.js";const m=n.ofType(g);let t=class extends l(o(h)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new r,this.opacity=1}initialize(){this.addHandles(y(()=>this.analysis,(e,a)=>{a!=null&&a.parent===this&&(a.parent=null),e!=null&&(e.parent=this)},p))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return(e=this.analysis)==null?void 0:e.observer}set observer(e){const{analysis:a}=this;a&&(a.observer=e)}get targets(){return this.analysis!=null?this.analysis.targets:new n}set targets(e){var a;d(e,(a=this.analysis)==null?void 0:a.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new r)}};s([i({json:{read:!1},readOnly:!0})],t.prototype,"type",void 0),s([i({type:["LineOfSightLayer"]})],t.prototype,"operationalLayerType",void 0),s([i({type:f,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],t.prototype,"observer",null),s([i({type:m,json:{read:!0,write:{ignoreOrigin:!0}}})],t.prototype,"targets",null),s([i({nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"analysis",void 0),s([i({readOnly:!0})],t.prototype,"fullExtent",null),s([i({readOnly:!0})],t.prototype,"spatialReference",null),s([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],t.prototype,"opacity",void 0),s([i({type:["show","hide"]})],t.prototype,"listMode",void 0),t=s([u("esri.layers.LineOfSightLayer")],t);const $=t;export{$ as default};