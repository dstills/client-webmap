import{ef as f,em as o,eg as i,ek as b,eh as m,ei as g}from"./index-nBWeBKPv.js";import{h as d,e as u,g as x}from"./dom-bef18e4a-CP2TJ11y.js";import{s as v,c as I,i as h,d as y,H as k}from"./form-034629b4-D-o1RCa6.js";import{c as w,d as E,u as z,I as T}from"./interactive-583e13d7-Cl8hsh9F.js";import{c as C,d as V,g as L}from"./label-8c0f9304-B90qkOHH.js";import{s as H,a as F,c as D}from"./loadable-6056dcbc-CWY718pR.js";import{c as M,d as O}from"./locale-b835bf72-D_ioPdlj.js";import{c as A}from"./observers-ff65e337--1jEkyko.js";import{u as q,c as P,d as W,s as B}from"./t9n-91f18f76-DmfvLzG2.js";import{g as p}from"./component-b0a9a44a-WqEOSVCt.js";import{V as R}from"./Validation-cf2abfd2-qlB4DSkM.js";import{s as S}from"./input-8486abfd-kBVpmtEZ.js";import"./guid-617f6e1b-DQtJl1SZ.js";import"./browser-1baf23f7-zzj4YD6P.js";import"./key-3f1e3da4-DU8kuSDQ.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const n={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper"},K={action:"action"},U=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input{padding-inline-start:0.5rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.5rem)}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .prefix,:host([scale=s]) .suffix{padding-inline:0.5rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input{padding-inline-start:0.75rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.75rem)}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .prefix,:host([scale=m]) .suffix{padding-inline:0.75rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input{padding-inline-start:1rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 1rem)}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .prefix,:host([scale=l]) .suffix{padding-inline:1rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,_=class{constructor(t){f(this,t),this.calciteInternalInputTextFocus=o(this,"calciteInternalInputTextFocus",7),this.calciteInternalInputTextBlur=o(this,"calciteInternalInputTextBlur",7),this.calciteInputTextInput=o(this,"calciteInputTextInput",7),this.calciteInputTextChange=o(this,"calciteInputTextChange",7),this.previousValueOrigin="initial",this.mutationObserver=A("mutation",()=>this.setDisabledAction()),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||(this.isClearable&&e.key==="Escape"&&(this.clearInputTextValue(e),e.preventDefault()),e.key==="Enter"&&!e.defaultPrevented&&v(this)&&e.preventDefault())},this.clearInputTextValue=e=>{this.setValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue&&(this.calciteInputTextChange.emit(),this.setPreviousEmittedValue(this.value))},this.inputTextBlurHandler=()=>{this.calciteInternalInputTextBlur.emit({element:this.childEl,value:this.value}),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const a=d(this.el,"action");e.target!==a&&this.setFocus()},this.inputTextFocusHandler=()=>{this.calciteInternalInputTextFocus.emit({element:this.childEl,value:this.value})},this.inputTextInputHandler=e=>{this.disabled||this.readOnly||this.setValue({nativeEvent:e,origin:"user",value:e.target.value})},this.inputTextKeyDownHandler=e=>{this.disabled||this.readOnly||e.key==="Enter"&&this.emitChangeIfUserModified()},this.onHiddenFormInputInput=e=>{e.target.name===this.name&&this.setValue({value:e.target.value,origin:"direct"}),this.setFocus(),e.stopPropagation()},this.setChildElRef=e=>{this.childEl=e},this.setInputValue=e=>{this.childEl&&(this.childEl.value=e)},this.setPreviousEmittedValue=e=>{this.previousEmittedValue=e},this.setPreviousValue=e=>{this.previousValue=e},this.setValue=({committing:e=!1,nativeEvent:a,origin:l,previousValue:r,value:s})=>{this.setPreviousValue(r??this.value),this.previousValueOrigin=l,this.userChangedValue=l==="user"&&s!==this.value,this.value=s,l==="direct"&&(this.setInputValue(s),this.setPreviousEmittedValue(s)),a&&(this.calciteInputTextInput.emit().defaultPrevented?this.value=this.previousValue:e&&this.emitChangeIfUserModified())},this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.form=void 0,this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.loading=!1,this.maxLength=void 0,this.minLength=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.name=void 0,this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.autocomplete=void 0,this.inputMode="text",this.enterKeyHint=void 0,this.pattern=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0,this.slottedActionElDisabledInternally=!1}disabledWatcher(){this.setDisabledAction()}onMessagesChange(){}valueWatcher(t,e){this.userChangedValue||this.setValue({origin:"direct",previousValue:e,value:t||""}),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=u({},this.icon,"text")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleChange(){q(this,this.effectiveLocale)}connectedCallback(){var t;w(this),M(this),P(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),C(this),I(this),(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener(h,this.onHiddenFormInputInput)}disconnectedCallback(){var t;E(this),V(this),y(this),O(this),W(this),(t=this.mutationObserver)==null||t.disconnect(),this.el.removeEventListener(h,this.onHiddenFormInputInput)}async componentWillLoad(){H(this),this.requestedIcon=u({},this.icon,"text"),await B(this),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value)}componentDidLoad(){F(this)}componentDidRender(){z(this)}async setFocus(){var t;await D(this),(t=this.childEl)==null||t.focus()}async selectText(){var t;(t=this.childEl)==null||t.select()}onLabelClick(){this.setFocus()}syncHiddenFormInput(t){S("text",this,t)}setDisabledAction(){const t=d(this.el,"action");t&&(this.disabled?(t.getAttribute("disabled")==null&&(this.slottedActionElDisabledInternally=!0),t.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(t.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}render(){const t=x(this.el),e=i("div",{class:n.loader},i("calcite-progress",{label:this.messages.loading,type:"indeterminate"})),a=i("button",{"aria-label":this.messages.clear,class:n.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputTextValue,tabIndex:-1,type:"button"},i("calcite-icon",{icon:"x",scale:p(this.scale)})),l=i("calcite-icon",{class:n.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:p(this.scale)}),r=i("div",{class:n.prefix},this.prefixText),s=i("div",{class:n.suffix},this.suffixText),c=i("input",{"aria-label":L(this),autocomplete:this.autocomplete,autofocus:this.autofocus?!0:null,class:{[n.editingEnabled]:this.editingEnabled,[n.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,maxLength:this.maxLength,minLength:this.minLength,name:this.name,onBlur:this.inputTextBlurHandler,onFocus:this.inputTextFocusHandler,onInput:this.inputTextInputHandler,onKeyDown:this.inputTextKeyDownHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,required:this.required?!0:null,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:"text",value:this.value,ref:this.setChildElRef});return i(m,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},i(T,{disabled:this.disabled},i("div",{class:{[n.inputWrapper]:!0,[b.rtl]:t==="rtl"}},this.prefixText?r:null,i("div",{class:n.wrapper},c,this.isClearable?a:null,this.requestedIcon?l:null,this.loading?e:null),i("div",{class:n.actionWrapper},i("slot",{name:K.action})),this.suffixText?s:null,i(k,{component:this})),this.validationMessage&&this.status==="invalid"?i(R,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return g(this)}static get watchers(){return{disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};_.style=U;export{_ as calcite_input_text};
