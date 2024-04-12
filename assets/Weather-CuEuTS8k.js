function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-label-Duw3CnGX.js","assets/index-D2dWKXoe.js","assets/index-DvE0Cji0.css","assets/calcite-slider-NFlbVvtU.js","assets/math-BEjMmqe5.js","assets/calcite-button-CouLQ2my.js","assets/button-CPiq8Fw-.js","assets/calcite-checkbox-DbPJO4Em.js","assets/calcite-icon-CsxVz9Z_.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{c1 as S,E as r,F as s,J as _,j1 as T,j3 as o,j2 as $,_ as g,O as f,t1 as L,t2 as V,t3 as W,t4 as B,t5 as D,br as A,by as O,t6 as x,aU as I,j0 as P,nF as E,t7 as k,t8 as N,p_ as R,s5 as b}from"./index-D2dWKXoe.js";import{t as j}from"./memoize-DsJmrG76.js";const y="esri-weather",p={base:y,widgetIcon:S.partlyCloudy,content:`${y}__content`,hasError:`${y}__content--has-error`,selector:`${y}__selector`,options:`${y}__options`,optionsHidden:`${y}__options--hidden`,error:`${y}__error`,warning:`${y}__warning`},F={base:`${`${y}__labeled-slider`}`};var u,c;(function(e){e.Disabled="disabled",e.Ready="ready",e.Error="error"})(u||(u={})),function(e){e.NotVisible="not-visible",e.LocalScene="local-scene",e.NoAtmosphere="no-atmosphere",e.UnsupportedView="unsupported-view"}(c||(c={}));let d=class extends T{constructor(t){super(t),this._onChange=n=>{this.onChange(n.target.value)}}render(){const{label:t}=this;return o("div",{class:F.base},o("calcite-label",{scale:"s"},t,o("calcite-slider",{"aria-label":t,disabled:this.disabled,max:1,min:0,step:.01,value:this.value,onCalciteSliderChange:this._onChange,onCalciteSliderInput:this._onChange})))}loadDependencies(){return $({label:()=>g(()=>import("./calcite-label-Duw3CnGX.js"),__vite__mapDeps([0,1,2])),slider:()=>g(()=>import("./calcite-slider-NFlbVvtU.js"),__vite__mapDeps([3,1,2,4]))})}};r([s()],d.prototype,"value",void 0),r([s()],d.prototype,"onChange",void 0),r([s()],d.prototype,"disabled",void 0),d=r([_("esri.widgets.Weather.LabeledSlider")],d);let w=class extends f{constructor(e){super(e),this.header=!0}};r([s({type:Boolean,nonNullable:!0})],w.prototype,"header",void 0),w=r([_("esri.widgets.Weather.VisibleElements")],w);const M=w;let h=class extends f{constructor(e){super(e),this.view=null,this._weatherByType={sunny:new L,cloudy:new V,rainy:new W,snowy:new B,foggy:new D},this._settingWeather=!1}initialize(){this.addHandles([A(()=>this.current,e=>{this._settingWeather||e==null||(this._weatherByType={...this._weatherByType,[e.type]:e})},O)])}get state(){const e=this.view;return e!=null&&e.ready?this.error!=null?this.error===c.NotVisible?u.Ready:u.Error:u.Ready:u.Disabled}get weatherByType(){return this._weatherByType}get error(){const e=this.view;return e!=null&&e.ready?e.type!=="3d"?c.UnsupportedView:e.viewingMode==="local"?c.LocalScene:e.environment.atmosphereEnabled?e.environmentManager.weatherVisible?null:c.NotVisible:c.NoAtmosphere:null}get current(){var e;return((e=this._environment)==null?void 0:e.weather)??this._weatherByType.sunny}set current(e){const t=this._environment;t&&(t.weather=e)}get _environment(){const e=this.view;return e!=null&&e.type==="3d"?e.environment:null}setWeatherByType(e){if(!x(e,I.getLogger(this)))return;const t=this._environment;t!=null&&(this._settingWeather=!0,t.weather=this._weatherByType[e],this._settingWeather=!1)}setSnowCoverEnabled(e){const t=this.current;"snowCover"in t&&(t.snowCover=e?"enabled":"disabled")}};r([s()],h.prototype,"view",void 0),r([s()],h.prototype,"state",null),r([s()],h.prototype,"_weatherByType",void 0),r([s()],h.prototype,"weatherByType",null),r([s()],h.prototype,"error",null),r([s()],h.prototype,"current",null),r([s()],h.prototype,"_environment",null),h=r([_("esri.widgets.Weather.WeatherViewModel")],h);const U=h,z={sunny:"brightness",cloudy:"partly-cloudy",rainy:"rain",snowy:"snow",foggy:"fog"};let l=class extends T{constructor(e){super(e),this.viewModel=new U,this.headingLevel=4,this.visibleElements=new M,this.iconClass=p.widgetIcon,this.icon=null,this._renderWeatherTypeButton=t=>{const n=this.viewModel,a=this.messages[t].label,i=n.state===u.Disabled,v=!i&&n.current.type===t;return o("calcite-button",{appearance:v?"solid":"outline","aria-checked":v?"true":"false",disabled:i,iconStart:z[t],key:`${t}-type-button`,kind:v?"brand":"neutral",label:a,onclick:()=>{v||n.setWeatherByType(t)},scale:"l",title:a})},this._memoizedCallbacks=j(t=>({onCloudCoverChange:n=>{"cloudCover"in t&&(t.cloudCover=n)},onPrecipitationChange:n=>{"precipitation"in t&&(t.precipitation=n)},onFogStrengthChange:n=>{"fogStrength"in t&&(t.fogStrength=n)},onSnowCoverChange:n=>{this.viewModel.setSnowCoverEnabled(n.target.checked)}}))}render(){const e=this.viewModel.state===u.Disabled;return o("div",{"aria-label":this.messages.widgetLabelAccessible,class:this.classes(p.base,E.widget,e&&E.widgetDisabled),role:"region"},this._renderContent())}loadDependencies(){return $({button:()=>g(()=>import("./calcite-button-CouLQ2my.js"),__vite__mapDeps([5,6,1,2])),checkbox:()=>g(()=>import("./calcite-checkbox-DbPJO4Em.js"),__vite__mapDeps([7,1,2])),icon:()=>g(()=>import("./calcite-icon-CsxVz9Z_.js"),__vite__mapDeps([8,1,2])),label:()=>g(()=>import("./calcite-label-Duw3CnGX.js"),__vite__mapDeps([0,1,2]))})}get view(){var e;return(e=this.viewModel)==null?void 0:e.view}set view(e){this.viewModel&&(this.viewModel.view=e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get _errorMessage(){const e=this.messages.error;switch(this.viewModel.error){case c.LocalScene:return e.localScene;case c.NoAtmosphere:return e.noAtmosphere;case c.UnsupportedView:return e.unsupported;default:return null}}get _warningMessage(){var e;return this.viewModel.error===c.NotVisible&&this.view!=null&&((e=this.view)==null?void 0:e.type)==="3d"&&this.view.environment.atmosphereEnabled?this.messages.error.notVisible:null}_renderContent(){const{headingLevel:e,messages:t,viewModel:n,visibleElements:a}=this,i=this._warningMessage,v=n.current,C=n.state===u.Error;return o(b,null,a.header?o(R,{level:e},t.widgetLabel):null,C?o("div",{class:p.error,key:"error"},this._errorMessage):null,o("div",{class:k({[p.content]:!0,[p.hasError]:C}),key:"content"},o("div",{"aria-label":t.weatherType,class:p.selector,key:"type-selector",role:"radiogroup"},N.map(this._renderWeatherTypeButton)),Object.values(n.weatherByType).map(m=>o("div",{class:k({[p.options]:!0,[p.optionsHidden]:m.type!==(v==null?void 0:v.type)}),key:"options-container"},this._renderOptions(m))),i!=null?this._renderWarning(i):null))}_renderOptions(e){const{viewModel:t,messages:n}=this,a=t.state===u.Disabled,i=this._memoizedCallbacks(e);switch(e.type){case"sunny":return o(d,{disabled:a,key:"sunny-cover",label:n.sunny.cloudCover,value:e.cloudCover,onChange:i.onCloudCoverChange});case"cloudy":return o(d,{disabled:a,key:"cloudy-cover",label:n.cloudy.cloudCover,value:e.cloudCover,onChange:i.onCloudCoverChange});case"rainy":return o(b,null,o(d,{disabled:a,key:"rainy-cover",label:n.rainy.cloudCover,value:e.cloudCover,onChange:i.onCloudCoverChange}),o(d,{disabled:a,key:"rainy-precipitation",label:n.rainy.precipitation,value:e.precipitation,onChange:i.onPrecipitationChange}));case"snowy":return o(b,null,o(d,{disabled:a,key:"snowy-cloud-cover",label:n.snowy.cloudCover,value:e.cloudCover,onChange:i.onCloudCoverChange}),o(d,{disabled:a,key:"snowy-precipitation",label:n.snowy.precipitation,value:e.precipitation,onChange:i.onPrecipitationChange}),o("calcite-label",{key:"snow-cover",layout:"inline",scale:"s",title:n.snowy.snowCoverTooltip},o("calcite-checkbox",{checked:e.snowCover==="enabled",disabled:a,onCalciteCheckboxChange:i.onSnowCoverChange}),n.snowy.snowCover));case"foggy":return o(d,{disabled:a,key:"foggy-cover",label:n.foggy.fogStrength,value:e.fogStrength,onChange:i.onFogStrengthChange})}}_renderWarning(e){return o("div",{class:p.warning,key:"warning"},o("calcite-icon",{icon:"exclamation-mark-triangle",scale:"s"}),e)}};r([s()],l.prototype,"viewModel",void 0),r([s()],l.prototype,"view",null),r([s()],l.prototype,"headingLevel",void 0),r([s({type:M,nonNullable:!0})],l.prototype,"visibleElements",void 0),r([s()],l.prototype,"iconClass",void 0),r([s()],l.prototype,"icon",void 0),r([s()],l.prototype,"label",null),r([s(),P("esri/widgets/Weather/t9n/Weather")],l.prototype,"messages",void 0),r([s()],l.prototype,"_errorMessage",null),r([s()],l.prototype,"_warningMessage",null),l=r([_("esri.widgets.Weather")],l);const G=l;export{G as default};