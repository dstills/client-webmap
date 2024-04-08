function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-combobox-fzws2pAh.js","assets/combobox-B7aBqrBY.js","assets/index-nBWeBKPv.js","assets/index-CIBc8SyM.css","assets/filter-Cyq-e8PA.js","assets/utils2-CLQcIKKA.js","assets/core-Bizuf87v.js","assets/Validation-BNlJRDE1.js","assets/chip-gKIXHvRo.js","assets/combobox-item-Do23RB4K.js","assets/input-message-BCRW2dJK.js","assets/calcite-combobox-item-C0z6MGsM.js","assets/calcite-tooltip-D4ScpS1B.js","assets/calcite-action-Dl3Ej-DA.js","assets/calcite-action-bar-D8WJajri.js","assets/ExpandToggle-9pVcKys2.js","assets/action-group-gIzdD0OT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{g as i,y as o,i as v,cx as J,aO as ee,cz as r,cy as D,aj as $,S as Q,of as te,bB as ie,ar as G,P as se,eF as le,bO as oe,ay as ne,aK as ae,cw as K,oh as re,eG as B,o9 as ue,es as pe}from"./index-nBWeBKPv.js";let k=class extends J{constructor(t,s){super(t,s),this.type=null,this.viewModel=null}};i([o()],k.prototype,"type",void 0),i([o()],k.prototype,"viewModel",void 0),k=i([v("esri.widgets.ValuePicker.ValuePickerBaseComponent")],k);const V=k;let y=class extends V{constructor(t,s){super(t,s),this.collection=null,this.type="collection"}get canNext(){var t,s;return!(!((t=this.collection)!=null&&t.length)||!this.viewModel)&&this.collection.at(-1)!==((s=this.viewModel.values)==null?void 0:s[0])}get canPlay(){var t;return this.viewModel!=null&&!!((t=this.collection)!=null&&t.length)}get canPrevious(){var t,s;return!(!((t=this.collection)!=null&&t.length)||!this.viewModel)&&this.collection.at(0)!==((s=this.viewModel.values)==null?void 0:s[0])}render(){return r("div",null)}animate(t){this._step(1,t)}next(){this._step(1)}previous(){this._step(-1)}_step(t,s=!1){var n;if(!this.viewModel||!((n=this.collection)!=null&&n.length))return;if(!this.viewModel.values)return void(this.viewModel.values=[this.collection.at(0)]);if(!this.collection.includes(this.viewModel.values[0]))return void(this.viewModel.values=[this.collection.at(0)]);const l=this.collection.indexOf(this.viewModel.values[0])+t;l<0||l>=this.collection.length?this.viewModel.loop||s?this.viewModel.values=[this.collection.at(t===1?0:-1)]:this.viewModel.state==="playing"&&this.viewModel.pause():this.viewModel.values=[this.collection.at(l)]}};i([o()],y.prototype,"canNext",null),i([o()],y.prototype,"canPlay",null),i([o()],y.prototype,"canPrevious",null),i([o({type:ee})],y.prototype,"collection",void 0),i([o()],y.prototype,"type",void 0),y=i([v("esri.widgets.ValuePicker.ValuePickerCollection")],y);const ce=y,de="esri-value-picker__combobox";let h=class extends V{constructor(t,s){super(t,s),this.items=null,this.placeholder=null,this.type="combobox"}loadDependencies(){return D({combobox:()=>$(()=>import("./calcite-combobox-fzws2pAh.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),"combobox-item":()=>$(()=>import("./calcite-combobox-item-C0z6MGsM.js"),__vite__mapDeps([11,9,2,3,5]))})}get canNext(){return!(!this.items||!this.viewModel)&&this.items.findIndex(({value:t})=>{var s;return t===((s=this.viewModel.values)==null?void 0:s[0])})!==this.items.length-1}get canPlay(){var t;return this.viewModel!=null&&!!((t=this.items)!=null&&t.length)}get canPrevious(){const{items:t,viewModel:s}=this;return!(!t||!s)&&t.findIndex(({value:l})=>{var n;return l===((n=s.values)==null?void 0:n[0])})!==0}render(){var l,n;const{viewModel:t}=this;if(t==null)return r("div",null);const s=(l=t.values)==null?void 0:l[0];return r("div",{class:de},r("calcite-combobox",{disabled:t.disabled,label:this.label,maxItems:10,overlayPositioning:"fixed",placeholder:this.placeholder??void 0,selectionMode:"single",onCalciteComboboxChange:a=>{Array.isArray(a.target.value)||(t.values!=null?t.values[0]!==a.target.value&&(t.values=[a.target.value]):t.values=[a.target.value])}},(n=this.items)==null?void 0:n.map(({value:a,label:u},g)=>r("calcite-combobox-item",{key:g,selected:a===s,textLabel:u,value:a}))))}animate(t){this._step(1,t)}next(){this._step(1)}previous(){this._step(-1)}_step(t,s=!1){const{viewModel:l,items:n}=this;if(!(n!=null&&n.length)||!l)return;if(!l.values)return void(l.values=[n[0].value]);const a=n.findIndex(({value:g})=>g===l.values[0]);if(a===-1)return void(l.values=[n[0].value]);const u=a+t;u<0||u>=n.length?l.loop||s?l.values=[n[t===1?0:n.length-1].value]:l.state==="playing"&&l.pause():l.values=[n[u].value]}};i([o()],h.prototype,"canNext",null),i([o()],h.prototype,"canPlay",null),i([o()],h.prototype,"canPrevious",null),i([o()],h.prototype,"items",void 0),i([o()],h.prototype,"placeholder",void 0),i([o()],h.prototype,"type",void 0),h=i([v("esri.widgets.ValuePicker.ValuePickerCombobox")],h);const he=h,A="esri-value-picker__label",q={border:`${A}-border`,text:`${A}-text`};let _=class extends V{constructor(e,t){super(e,t),this.items=null,this.type="label"}get canNext(){return!(!this.items||!this.viewModel)&&this.items.findIndex(({value:e})=>{var t;return e===((t=this.viewModel.values)==null?void 0:t[0])})!==this.items.length-1}get canPlay(){var e;return this.viewModel!=null&&!!((e=this.items)!=null&&e.length)}get canPrevious(){const{items:e,viewModel:t}=this;return!(!e||!t)&&e.findIndex(({value:s})=>{var l;return s===((l=t.values)==null?void 0:l[0])})!==0}render(){var s;const{viewModel:e}=this;if(e==null)return r("div",null);const t=(s=this.items)==null?void 0:s.find(({value:l})=>{var n;return l===((n=e.values)==null?void 0:n[0])});return r("div",{class:A},r("div",{class:q.border},r("div",{class:q.text},t==null?void 0:t.label)))}animate(e){this._step(1,e)}next(){this._step(1)}previous(){this._step(-1)}_step(e,t=!1){const{viewModel:s,items:l}=this;if(!(l!=null&&l.length)||!s)return;if(!s.values)return void(s.values=[l[0].value]);const n=l.findIndex(({value:u})=>u===s.values[0]);if(n===-1)return void(s.values=[l[0].value]);const a=n+e;a<0||a>=l.length?s.loop||t?s.values=[l[e===1?0:l.length-1].value]:s.state==="playing"&&s.pause():s.values=[l[a].value]}};i([o()],_.prototype,"canNext",null),i([o()],_.prototype,"canPlay",null),i([o()],_.prototype,"canPrevious",null),i([o()],_.prototype,"items",void 0),i([o()],_.prototype,"type",void 0),_=i([v("esri.widgets.ValuePicker.ValuePickerLabel")],_);const ve=_;let P=class extends Q{constructor(e){super(e),this.steps=!1,this.thumbTooltip=!1}};i([o({nonNullable:!0})],P.prototype,"steps",void 0),i([o({nonNullable:!0})],P.prototype,"thumbTooltip",void 0),P=i([v("esri.widgets.ValuePicker.ValuePickerSliderVisibleElements")],P);const U=P,f="esri-value-picker__slider",C={minorTick:`${f}__tick-minor`,majorTick:`${f}__tick-major`,stepsTick:`${f}__tick-steps`,tooltip:`${f}__tooltip`};function I(e){return(t,s)=>{s==null||s.classList.add(e)}}let c=class extends V{constructor(e,t){super(e,t),this._majorTickCreatedFunction=I(C.majorTick),this._minorTickCreatedFunction=I(C.minorTick),this._stepsTickCreatedFunction=I(C.stepsTick),this._thumbNode=null,this._tooltip=null,this._slider=new te({thumbCreatedFunction:(s,l,n)=>{this._thumbNode=n}}),this.labelFormatFunction=null,this.labels=null,this.min=null,this.minorTicks=null,this.majorTicks=null,this.max=null,this.reversed=!1,this.steps=null,this.type="slider",this.visibleElements=new U,this._thumbDragDebounced=ie(async s=>{var l;await((l=this._tooltip)==null?void 0:l.reposition(!1))})}initialize(){this.addHandles([G(()=>{var e;return(e=this.viewModel)==null?void 0:e.values},e=>{this._slider.values=e},se),G(()=>this._slider.values,e=>{this.viewModel&&this.viewModel.values!==e&&(this.viewModel.values=e)}),this._slider.on("thumb-drag",this._thumbDragDebounced)])}destroy(){this._slider.destroy()}loadDependencies(){return D({tooltip:()=>$(()=>import("./calcite-tooltip-D4ScpS1B.js"),__vite__mapDeps([12,2,3]))})}get _ascending(){const{reversed:e,viewModel:t}=this;if(!t)return null;const{layout:s}=t;return s==="horizontal"&&!e||s==="vertical"&&e}get canNext(){const{_ascending:e,min:t,max:s,steps:l,viewModel:n}=this;if(e==null||t==null||s==null||!(l!=null&&l.length)||!n)return!1;const{values:a}=n,u=a==null?void 0:a[0];return u==null||(e?u!==l[l.length-1]:u!==l[0])}get canPlay(){var e;return this.viewModel!=null&&!!((e=this.steps)!=null&&e.length)&&this.min!=null&&this.max!=null}get canPrevious(){const{_ascending:e,min:t,max:s,steps:l,viewModel:n}=this;if(e==null||t==null||s==null||!(l!=null&&l.length)||!n)return!1;const{values:a}=n,u=a==null?void 0:a[0];return u==null||(e?u!==l[0]:u!==l[l.length-1])}render(){const{labels:e,labelFormatFunction:t,min:s,max:l,steps:n,minorTicks:a,majorTicks:u,reversed:g,viewModel:T}=this;if(!T)return r("div",null);const{disabled:N,layout:E}=T,F=`${E}${g?"-reversed":""}`,w="position",m=[];return s!=null&&l!=null&&(a&&m.push({mode:w,values:a,tickCreatedFunction:this._minorTickCreatedFunction}),u&&m.push({mode:w,values:u,tickCreatedFunction:this._majorTickCreatedFunction}),e&&m.push({mode:w,values:e,labelsVisible:!0}),this.visibleElements.steps&&this.steps&&m.push({mode:w,values:this.steps,tickCreatedFunction:this._stepsTickCreatedFunction})),this._slider.set({disabled:N,labelFormatFunction:t,layout:F,min:s,max:l,steps:n,tickConfigs:m}),r("div",{class:f},this._slider.render(),this._renderToolTip())}animate(e){this._step(1,e)}next(){this._step(this._ascending?1:-1)}previous(){this._step(this._ascending?-1:1)}_onTooltipAfterCreate(e){this._tooltip=e}_renderToolTip(){if(!this.visibleElements.thumbTooltip||!this._thumbNode||!this._slider.values)return null;const e=this._slider.viewModel.getLabelForValue(this._slider.values[0],"value");return e?r("calcite-tooltip",{afterCreate:this._onTooltipAfterCreate,class:C.tooltip,referenceElement:this._thumbNode},e):null}_step(e,t=!1){var l;if(!this.viewModel||!((l=this.steps)!=null&&l.length))return;if(!this.viewModel.values||!this.steps.includes(this.viewModel.values[0]))return void(this.viewModel.values=[this.steps[0]]);const s=this.steps.indexOf(this.viewModel.values[0])+e;s<0||s>=this.steps.length?this.viewModel.loop||t?this.viewModel.values=[this.steps[e===1?0:this.steps.length-1]]:this.viewModel.state==="playing"&&this.viewModel.pause():this.viewModel.values=[this.steps[s]]}};i([o()],c.prototype,"_ascending",null),i([o()],c.prototype,"canNext",null),i([o()],c.prototype,"canPlay",null),i([o()],c.prototype,"canPrevious",null),i([o()],c.prototype,"labelFormatFunction",void 0),i([o()],c.prototype,"labels",void 0),i([o()],c.prototype,"min",void 0),i([o()],c.prototype,"minorTicks",void 0),i([o()],c.prototype,"majorTicks",void 0),i([o()],c.prototype,"max",void 0),i([o({nonNullable:!0})],c.prototype,"reversed",void 0),i([o()],c.prototype,"steps",void 0),i([o()],c.prototype,"type",void 0),i([o({type:U,nonNullable:!0})],c.prototype,"visibleElements",void 0),c=i([v("esri.widgets.ValuePicker.ValuePickerSlider")],c);const me=c,ye={first:!0},_e={first:!1};let d=class extends le.EventedAccessor{constructor(t){super(t),this._animationController=null,this.disabled=!1,this.layout="horizontal",this.loop=!1,this.playRate=1e3,this.values=null}destroy(){this._pause()}get state(){return this._animationController?"playing":"ready"}next(){this.emit("next")}pause(){this.emit("pause"),this._pause()}play(){this.emit("play"),this._play()}previous(){this.emit("previous")}_pause(){var t;(t=this._animationController)==null||t.abort(),this._animationController=null}_play(){this._pause(),this._animationController=new AbortController,this._animate(ye)}async _animate(t){if(this.emit("animate",t),this._animationController){try{await oe(this.playRate,null,this._animationController.signal)}catch(s){return ne(s)||ae.getLogger(this).error(s),void this._pause()}this._animate(_e)}}};i([o()],d.prototype,"_animationController",void 0),i([o({nonNullable:!0})],d.prototype,"disabled",void 0),i([o({nonNullable:!0})],d.prototype,"layout",void 0),i([o({nonNullable:!0})],d.prototype,"loop",void 0),i([o({nonNullable:!0})],d.prototype,"playRate",void 0),i([o({readOnly:!0})],d.prototype,"state",null),i([o()],d.prototype,"values",void 0),i([o()],d.prototype,"next",null),i([o()],d.prototype,"pause",null),i([o()],d.prototype,"play",null),i([o()],d.prototype,"previous",null),d=i([v("esri.widgets.ValuePicker.ValuePickerViewModel")],d);const be=d;let x=class extends Q{constructor(e){super(e),this.nextButton=!0,this.playButton=!0,this.previousButton=!0}};i([o({nonNullable:!0})],x.prototype,"nextButton",void 0),i([o({nonNullable:!0})],x.prototype,"playButton",void 0),i([o({nonNullable:!0})],x.prototype,"previousButton",void 0),x=i([v("esri.widgets.ValuePicker.ValuePickerVisibleElements")],x);const W=x,b="esri-value-picker",M={widgetIcon:pe.playCircled,actionBar:`${b}__action-bar`,caption:`${b}__caption`,captionBorder:`${b}__caption-border`,captionText:`${b}__caption-text`,separator:`${b}__separator`},ge={base:null,key:"type",typeMap:{collection:ce,combobox:he,label:ve,slider:me}};let p=class extends J{constructor(e,t){super(e,t),this.caption=null,this.messages=null,this.messagesCommon=null,this.viewModel=new be,this.visibleElements=new W}initialize(){this.addHandles([B(()=>this.viewModel,"animate",({first:e})=>{var t;(t=this.component)==null||t.animate(e)}),B(()=>this.viewModel,"next",()=>{var e;(e=this.component)==null||e.next()}),B(()=>this.viewModel,"previous",()=>{var e;(e=this.component)==null||e.previous()})])}loadDependencies(){return D({action:()=>$(()=>import("./calcite-action-Dl3Ej-DA.js"),__vite__mapDeps([13,2,3])),"action-bar":()=>$(()=>import("./calcite-action-bar-D8WJajri.js"),__vite__mapDeps([14,2,3,15,16]))})}get canNext(){var e;return((e=this.component)==null?void 0:e.canNext)??!0}get canPlay(){var e;return((e=this.component)==null?void 0:e.canPlay)??!0}get canPrevious(){var e;return((e=this.component)==null?void 0:e.canPrevious)??!0}set component(e){e&&(e.viewModel??(e.viewModel=this.viewModel)),this._set("component",e)}get disabled(){return this.viewModel.disabled}set disabled(e){this.viewModel.disabled=e}get label(){return this.messages.widgetLabel}set label(e){this._overrideIfSome("label",e)}get layout(){return this.viewModel.layout}set layout(e){this.viewModel.layout=e}get loop(){return this.viewModel.loop}set loop(e){this.viewModel.loop=e}get playRate(){return this.viewModel.playRate}set playRate(e){this.viewModel.playRate=e}get values(){return this.viewModel.values}set values(e){this.viewModel.values=e}next(){this.viewModel.next()}pause(){this.viewModel.pause()}play(){this.viewModel.play()}previous(){this.viewModel.previous()}render(){var L,O,z,S,H;const{disabled:e,state:t}=this.viewModel,s=t==="playing",l=this.layout==="horizontal",{control:n,pagination:a}=this.messagesCommon,{pause:u,play:g}=n,{previous:T,up:N,next:E,down:F}=a,w=this.visibleElements.playButton&&r("calcite-action",{active:s,alignment:"center",bind:this,disabled:e||!this.canPlay,icon:s?"pause":"play",key:"play",onclick:s?this.pause:this.play,text:s?u:g}),m=this.visibleElements.previousButton&&r("calcite-action",{alignment:"center",bind:this,disabled:e||s||!this.canPrevious,icon:l?"chevron-left":"chevron-up",key:"previous",onclick:this.previous,text:l?T:N}),R=this.visibleElements.nextButton&&r("calcite-action",{alignment:"center",bind:this,disabled:e||s||!this.canNext,icon:l?"chevron-right":"chevron-down",key:"next",onclick:this.next,text:l?E:F}),j=this.caption&&r("div",{class:M.caption},r("div",{class:M.captionBorder},r("div",{class:M.captionText},this.caption))),X=((L=this.component)==null?void 0:L.type)==="combobox"||((O=this.component)==null?void 0:O.type)==="label"||((z=this.component)==null?void 0:z.type)==="slider",Y=(w||m||R)&&(j||X)&&r("div",{class:M.separator}),Z=(S=this.component)==null?void 0:S.render();return r("div",{"aria-label":this.label,class:this.classes(b,ue.widget,`${b}__layout--${this.layout}`,`${b}__type--${(H=this.component)==null?void 0:H.type}`)},r("calcite-action-bar",{class:M.actionBar,expandDisabled:!0,layout:this.layout},[w,m,R,Y,j,Z]))}};i([o()],p.prototype,"canNext",null),i([o()],p.prototype,"canPlay",null),i([o()],p.prototype,"canPrevious",null),i([o()],p.prototype,"caption",void 0),i([o({types:ge,value:null})],p.prototype,"component",null),i([o()],p.prototype,"disabled",null),i([o()],p.prototype,"label",null),i([o()],p.prototype,"layout",null),i([o()],p.prototype,"loop",null),i([o(),K("esri/widgets/ValuePicker/t9n/ValuePicker")],p.prototype,"messages",void 0),i([o(),K("esri/t9n/common")],p.prototype,"messagesCommon",void 0),i([o()],p.prototype,"playRate",null),i([o()],p.prototype,"values",null),i([o(),re(["animate","next","pause","play","previous"])],p.prototype,"viewModel",void 0),i([o({type:W,nonNullable:!0})],p.prototype,"visibleElements",void 0),p=i([v("esri.widgets.ValuePicker")],p);const fe=p;export{fe as default};
