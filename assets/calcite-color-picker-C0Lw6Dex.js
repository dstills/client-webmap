import{c as J,F as Z,H as Q,O as R,oM as ye,oN as w,oO as xe,oP as m,oQ as F,oR as g,K as ee,M as te,N as c,J as oe,kb as we,oS as I,oT as Ie,oU as U,oV as A,cv as ke,cd as E,_ as Ae,oW as j,oX as Ee,oY as B,Z as Fe,U as Oe,Q as De,R as Pe,T as He,W as Te,X as Le,Y as Re,V as Me,$ as $e,oZ as Ke,o_ as _,o$ as ze,a3 as Ve}from"./index-nBWeBKPv.js";import{c as v,d as Ue}from"./color-picker-swatch-BjWBHvOD.js";import{d as ne}from"./input-message-BCRW2dJK.js";import{d as ie}from"./input-number-BGLeOZK4.js";import{d as se}from"./input-text-Dw6uO9ad.js";import{d as ae}from"./progress-DvHi5Mrp.js";import{r as N,c as je,a as Be}from"./math-BEjMmqe5.js";import{d as _e}from"./button-CXWXhZac.js";import{d as Ne}from"./tab-IE6iUoaL.js";import{d as Xe}from"./tab-nav-Bdh8a_c3.js";import{d as We}from"./tab-title-B7NOqxTz.js";import{d as Ge}from"./tabs-mo_xbnS3.js";import{t as qe}from"./throttle-DgBWb_Q9.js";import"./Validation-BNlJRDE1.js";import"./input-kBVpmtEZ.js";import"./core-Bizuf87v.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const r={channel:"channel",channels:"channels",colorField:"color-field",colorFieldScope:"scope--color-field",colorMode:"color-mode",colorModeContainer:"color-mode-container",container:"container",control:"control",controlAndScope:"control-and-scope",controlSection:"control-section",deleteColor:"delete-color",header:"header",hexAndChannelsGroup:"hex-and-channels-group",hexOptions:"color-hex-options",hueScope:"scope--hue",hueSlider:"hue-slider",opacityScope:"scope--opacity",opacitySlider:"opacity-slider",preview:"preview",previewAndSliders:"preview-and-sliders",saveColor:"save-color",savedColor:"saved-color",savedColors:"saved-colors",savedColorsButtons:"saved-colors-buttons",savedColorsSection:"saved-colors-section",scope:"scope",section:"section",slider:"slider",sliders:"sliders",splitSection:"section--split"},b=v("#007AC2"),T="calcite-color-",X={r:255,g:255,b:255},C={h:360,s:100,v:100},W=C.h-1,S={min:0,max:100},G={s:{slider:{height:12,width:104},colorField:{height:80,width:160},thumb:{radius:10}},m:{slider:{height:12,width:204},colorField:{height:150,width:272},thumb:{radius:10}},l:{slider:{height:12,width:384},colorField:{height:200,width:464},thumb:{radius:10}}},q=1,L={container:"container",hexInput:"hex-input",opacityInput:"opacity-input"},Ye=":host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:68px;margin-inline-start:-1px}:host([scale=s]) .container{flex-wrap:wrap;row-gap:0.125rem}:host([scale=s]) .opacity-input{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .opacity-input{inline-size:88px}:host([hidden]){display:none}[hidden]{display:none}",Y=v(),Je=Z(class extends Q{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerHexInputChange=R(this,"calciteColorPickerHexInputChange",6),this.onHexInputBlur=()=>{const e=this.hexInputNode,t=e.value,o=`#${t}`,{allowEmpty:n,internalColor:i}=this,s=n&&!t,a=ye(o);this.onHexInputChange(),!(s||w(o)&&a)&&(e.value=n&&!i?"":this.formatHexForInternalInput(xe(i.object())))},this.onOpacityInputBlur=()=>{const e=this.opacityInputNode,t=e.value,{allowEmpty:o,internalColor:n}=this;o&&!t||(e.value=o&&!n?"":this.formatOpacityForInternalInput(n))},this.onHexInputChange=()=>{let t=this.hexInputNode.value;if(t){const o=m(t,!1);if(w(o)&&this.alphaChannel&&this.internalColor){const i=m(this.internalColor.hexa(),!0).slice(-2);t=`${o+i}`}}this.internalSetValue(t,this.value)},this.onOpacityInputChange=()=>{var o;const e=this.opacityInputNode;let t;if(!e.value)t=e.value;else{const n=F(Number(e.value));t=(o=this.internalColor)==null?void 0:o.alpha(n).hexa()}this.internalSetValue(t,this.value)},this.onInputKeyDown=e=>{const{altKey:t,ctrlKey:o,metaKey:n,shiftKey:i}=e,{alphaChannel:s,hexInputNode:a,internalColor:l,value:h}=this,{key:d}=e,p=e.composedPath();if(d==="Tab"||d==="Enter"){p.includes(a)?this.onHexInputChange():this.onOpacityInputChange(),d==="Enter"&&e.preventDefault();return}const u=d==="ArrowDown"||d==="ArrowUp",f=this.value;if(u){if(!h){this.internalSetValue(this.previousNonNullValue,f),e.preventDefault();return}const y=d==="ArrowUp"?1:-1,P=i?10:1;this.internalSetValue(g(this.nudgeRGBChannels(l,P*y,p.includes(a)?"rgb":"a"),s),f),e.preventDefault();return}const x=t||o||n,k=d.length===1,D=Ie.test(d);k&&!x&&!D&&e.preventDefault()},this.onHexInputPaste=e=>{const t=e.clipboardData.getData("text");w(t)&&(e.preventDefault(),this.hexInputNode.value=t.slice(1))},this.previousNonNullValue=this.value,this.storeHexInputRef=e=>{this.hexInputNode=e},this.storeOpacityInputRef=e=>{this.opacityInputNode=e},this.allowEmpty=!1,this.alphaChannel=!1,this.hexLabel="Hex",this.messages=void 0,this.numberingSystem=void 0,this.scale="m",this.value=m(g(Y,this.alphaChannel),this.alphaChannel,!0),this.internalColor=Y}connectedCallback(){const{allowEmpty:e,alphaChannel:t,value:o}=this;if(o){const n=m(o,t);w(n,t)&&this.internalSetValue(n,n,!1);return}e&&this.internalSetValue(null,null,!1)}componentWillLoad(){ee(this)}componentDidLoad(){te(this)}handleValueChange(e,t){this.internalSetValue(e,t,!1)}render(){const{alphaChannel:e,hexLabel:t,internalColor:o,messages:n,scale:i,value:s}=this,a=this.formatHexForInternalInput(s),l=this.formatOpacityForInternalInput(o),h=i==="l"?"m":"s";return c("div",{class:L.container},c("calcite-input-text",{class:L.hexInput,label:(n==null?void 0:n.hex)||t,maxLength:6,onCalciteInputTextChange:this.onHexInputChange,onCalciteInternalInputTextBlur:this.onHexInputBlur,onKeyDown:this.onInputKeyDown,onPaste:this.onHexInputPaste,prefixText:"#",scale:h,value:a,ref:this.storeHexInputRef}),e?c("calcite-input-number",{class:L.opacityInput,key:"opacity-input",label:n==null?void 0:n.opacity,max:S.max,maxLength:3,min:S.min,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberChange:this.onOpacityInputChange,onCalciteInternalInputNumberBlur:this.onOpacityInputBlur,onKeyDown:this.onInputKeyDown,scale:h,suffixText:"%",value:l,ref:this.storeOpacityInputRef}):null)}async setFocus(){return await oe(this),we(this.hexInputNode)}internalSetValue(e,t,o=!0){if(e){const{alphaChannel:n}=this,i=m(e,n,n);if(w(i,n)){const{internalColor:s}=this,a=v(i),l=m(g(a,n),n),h=!s||l!==m(g(s,n),n);this.internalColor=a,this.previousNonNullValue=l,this.value=l,h&&o&&this.calciteColorPickerHexInputChange.emit();return}}else if(this.allowEmpty){this.internalColor=null,this.value=null,o&&this.calciteColorPickerHexInputChange.emit();return}this.value=t}formatHexForInternalInput(e){return e?e.replace("#","").slice(0,6):""}formatOpacityForInternalInput(e){return e?`${I(e.alpha())}`:""}nudgeRGBChannels(e,t,o){let n;const i=e.array(),s=i.slice(0,3);if(o==="rgb")n=[...s.map(l=>l+t),this.alphaChannel?i[3]:void 0];else{const a=F(I(e.alpha())+t);n=[...s,a]}return v(n)}get el(){return this}static get watchers(){return{value:["handleValueChange"]}}static get style(){return Ye}},[1,"calcite-color-picker-hex-input",{allowEmpty:[4,"allow-empty"],alphaChannel:[4,"alpha-channel"],hexLabel:[1,"hex-label"],messages:[16],numberingSystem:[1,"numbering-system"],scale:[513],value:[1537],internalColor:[32],setFocus:[64]},void 0,{value:["handleValueChange"]}]);function le(){if(typeof customElements>"u")return;["calcite-color-picker-hex-input","calcite-icon","calcite-input-message","calcite-input-number","calcite-input-text","calcite-progress"].forEach(e=>{switch(e){case"calcite-color-picker-hex-input":customElements.get(e)||customElements.define(e,Je);break;case"calcite-icon":customElements.get(e)||J();break;case"calcite-input-message":customElements.get(e)||ne();break;case"calcite-input-number":customElements.get(e)||ie();break;case"calcite-input-text":customElements.get(e)||se();break;case"calcite-progress":customElements.get(e)||ae();break}})}le();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const Ze=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-color-picker-spacing:8px}:host([scale=s]) .container{inline-size:160px}:host([scale=s]) .saved-colors{gap:0.25rem;grid-template-columns:repeat(auto-fill, 20px)}:host([scale=m]){--calcite-color-picker-spacing:12px}:host([scale=m]) .container{inline-size:272px}:host([scale=l]){--calcite-color-picker-spacing:16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{inline-size:464px}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, 32px)}:host([scale=l]) .control-section{flex-wrap:nowrap;align-items:baseline;flex-wrap:wrap}:host([scale=l]) .color-hex-options{display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-color-foreground-1);display:inline-block;border:1px solid var(--calcite-color-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.scope{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);block-size:1px;inline-size:1px;border-radius:9999px;background-color:transparent;font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          );outline-offset:11px}.hex-and-channels-group{inline-size:100%}.hex-and-channels-group,.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-color-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex;row-gap:0.125rem}.channel[data-channel-index="3"]{inline-size:159px}:host([scale=s]) .channels{flex-wrap:wrap}:host([scale=s]) .channel{flex-basis:30%;flex-grow:1}:host([scale=s]) .channel[data-channel-index="3"]{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .channel[data-channel-index="3"]{inline-size:131px}.saved-colors{display:grid;gap:0.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill, 24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-color-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}`,Qe=16,re=Z(class extends Q{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerChange=R(this,"calciteColorPickerChange",6),this.calciteColorPickerInput=R(this,"calciteColorPickerInput",6),this.internalColorUpdateContext=null,this.mode=U.HEX,this.shiftKeyChannelAdjustment=0,this.handleTabActivate=e=>{this.channelMode=e.currentTarget.getAttribute("data-color-mode"),this.updateChannelsFromColor(this.color)},this.handleColorFieldScopeKeyDown=e=>{const{key:t}=e,o={ArrowUp:{x:0,y:-10},ArrowRight:{x:10,y:0},ArrowDown:{x:0,y:10},ArrowLeft:{x:-10,y:0}};o[t]&&(e.preventDefault(),this.scopeOrientation=t==="ArrowDown"||t==="ArrowUp"?"vertical":"horizontal",this.captureColorFieldColor(this.colorFieldScopeLeft+o[t].x||0,this.colorFieldScopeTop+o[t].y||0,!1))},this.handleHueScopeKeyDown=e=>{const t=e.shiftKey?10:1,{key:o}=e,n={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1};if(n[o]){e.preventDefault();const i=n[o]*t,s=this.baseColorFieldColor.hue(),a=this.baseColorFieldColor.hue(s+i);this.internalColorSet(a,!1)}},this.handleHexInputChange=e=>{e.stopPropagation();const{isClearable:t,color:o}=this,i=e.target.value;if(t&&!i){this.internalColorSet(null);return}const s=o&&m(g(o,A(this.mode)));i!==s&&this.internalColorSet(v(i))},this.handleSavedColorSelect=e=>{const t=e.currentTarget;this.internalColorSet(v(t.color))},this.handleChannelInput=e=>{const t=e.currentTarget,o=Number(t.getAttribute("data-channel-index")),i=o===3?S.max:this.channelMode==="rgb"?X[Object.keys(X)[o]]:C[Object.keys(C)[o]];let s;if(this.isClearable&&!t.value)s="";else{const l=Number(t.value)+this.shiftKeyChannelAdjustment;s=je(l,0,i).toString()}t.value=s,s!==""&&this.shiftKeyChannelAdjustment!==0&&this.handleChannelChange(e)},this.handleChannelChange=e=>{const t=e.currentTarget,o=Number(t.getAttribute("data-channel-index")),n=[...this.channels];if(this.isClearable&&!t.value){this.channels=[null,null,null,null],this.internalColorSet(null);return}const s=o===3,a=Number(t.value);n[o]=s?F(a):a,this.updateColorFromChannels(n)},this.handleSavedColorKeyDown=e=>{ke(e.key)&&(e.preventDefault(),this.handleSavedColorSelect(e))},this.handleColorFieldPointerDown=e=>{if(!E(e))return;const{offsetX:t,offsetY:o}=e;window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:this.colorFieldRenderingContext,bounds:this.colorFieldRenderingContext.canvas.getBoundingClientRect()},this.captureColorFieldColor(t,o),this.colorFieldScopeNode.focus()},this.handleHueSliderPointerDown=e=>{if(!E(e))return;const{offsetX:t}=e;window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:this.hueSliderRenderingContext,bounds:this.hueSliderRenderingContext.canvas.getBoundingClientRect()},this.captureHueSliderColor(t),this.hueScopeNode.focus()},this.handleOpacitySliderPointerDown=e=>{if(!E(e))return;const{offsetX:t}=e;window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:this.opacitySliderRenderingContext,bounds:this.opacitySliderRenderingContext.canvas.getBoundingClientRect()},this.captureOpacitySliderValue(t),this.opacityScopeNode.focus()},this.globalPointerUpHandler=e=>{if(!E(e))return;const t=this.activeCanvasInfo;this.activeCanvasInfo=null,this.drawColorControls(),t&&this.calciteColorPickerChange.emit()},this.globalPointerMoveHandler=e=>{const{activeCanvasInfo:t,el:o}=this;if(!o.isConnected||!t)return;const{context:n,bounds:i}=t;let s,a;const{clientX:l,clientY:h}=e;n.canvas.matches(":hover")?(s=l-i.x,a=h-i.y):(l<i.x+i.width&&l>i.x?s=l-i.x:l<i.x?s=0:s=i.width,h<i.y+i.height&&h>i.y?a=h-i.y:h<i.y?a=0:a=i.height),n===this.colorFieldRenderingContext?this.captureColorFieldColor(s,a,!1):n===this.hueSliderRenderingContext?this.captureHueSliderColor(s):n===this.opacitySliderRenderingContext&&this.captureOpacitySliderValue(s)},this.storeColorFieldScope=e=>{this.colorFieldScopeNode=e},this.storeHueScope=e=>{this.hueScopeNode=e},this.renderChannelsTabTitle=e=>{const{channelMode:t,messages:o}=this,n=e===t,i=e==="rgb"?o.rgb:o.hsv;return c("calcite-tab-title",{class:r.colorMode,"data-color-mode":e,key:e,onCalciteTabsActivate:this.handleTabActivate,selected:n},i)},this.renderChannelsTab=e=>{const{isClearable:t,channelMode:o,channels:n,messages:i,alphaChannel:s}=this,a=e===o,h=e==="rgb"?[i.red,i.green,i.blue]:[i.hue,i.saturation,i.value],d=Ae(this.el),p=s?n:n.slice(0,3);return c("calcite-tab",{class:r.control,key:e,selected:a},c("div",{class:r.channels,dir:"ltr"},p.map((u,f)=>{const x=f===3;return x&&(u=t&&!u?u:I(u)),this.renderChannel(u,f,h[f],d,x?"%":"")})))},this.renderChannel=(e,t,o,n,i)=>c("calcite-input-number",{class:r.channel,"data-channel-index":t,dir:n,key:t,label:o,lang:this.effectiveLocale,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberChange:this.handleChannelChange,onCalciteInputNumberInput:this.handleChannelInput,onKeyDown:this.handleKeyDown,scale:this.scale==="l"?"m":"s",style:{marginLeft:t>0&&!(this.scale==="s"&&this.alphaChannel&&t===3)?"-1px":""},suffixText:i,value:e==null?void 0:e.toString()}),this.deleteColor=()=>{const e=g(this.color,this.alphaChannel);if(!(this.savedColors.indexOf(e)>-1))return;const o=this.savedColors.filter(i=>i!==e);this.savedColors=o;const n=`${T}${this.storageId}`;this.storageId&&localStorage.setItem(n,JSON.stringify(o))},this.saveColor=()=>{const e=g(this.color,this.alphaChannel);if(this.savedColors.indexOf(e)>-1)return;const o=[...this.savedColors,e];this.savedColors=o;const n=`${T}${this.storageId}`;this.storageId&&localStorage.setItem(n,JSON.stringify(o))},this.drawColorControls=qe((e="all")=>{(e==="all"||e==="color-field")&&this.colorFieldRenderingContext&&this.drawColorField(),(e==="all"||e==="hue-slider")&&this.hueSliderRenderingContext&&this.drawHueSlider(),this.alphaChannel&&(e==="all"||e==="opacity-slider")&&this.opacitySliderRenderingContext&&this.drawOpacitySlider()},Qe),this.captureColorFieldColor=(e,t,o=!0)=>{const{dimensions:{colorField:{height:n,width:i}}}=this,s=Math.round(C.s/i*e),a=Math.round(C.v/n*(n-t));this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(s).value(a),o)},this.initColorField=e=>{this.colorFieldRenderingContext=e.getContext("2d"),this.updateCanvasSize("color-field"),this.drawColorControls()},this.initHueSlider=e=>{this.hueSliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("hue-slider"),this.drawHueSlider()},this.initOpacitySlider=e=>{e&&(this.opacitySliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("opacity-slider"),this.drawOpacitySlider())},this.storeOpacityScope=e=>{this.opacityScopeNode=e},this.handleOpacityScopeKeyDown=e=>{const t=e.shiftKey?10:1,{key:o}=e,n={ArrowUp:.01,ArrowRight:.01,ArrowDown:-.01,ArrowLeft:-.01};if(n[o]){e.preventDefault();const i=n[o]*t,s=this.baseColorFieldColor.alpha(),a=this.baseColorFieldColor.alpha(s+i);this.internalColorSet(a,!1)}},this.allowEmpty=!1,this.alphaChannel=!1,this.channelsDisabled=!1,this.clearable=!1,this.color=b,this.disabled=!1,this.format="auto",this.hideChannels=!1,this.hexDisabled=!1,this.hideHex=!1,this.hideSaved=!1,this.savedDisabled=!1,this.scale="m",this.storageId=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.value=m(g(b,this.alphaChannel)),this.defaultMessages=void 0,this.channelMode="rgb",this.channels=this.toChannels(b),this.dimensions=G.m,this.effectiveLocale="",this.messages=void 0,this.savedColors=[],this.colorFieldScopeTop=void 0,this.colorFieldScopeLeft=void 0,this.hueScopeLeft=void 0,this.opacityScopeLeft=void 0,this.scopeOrientation=void 0}handleAllowEmptyOrClearableChange(){this.isClearable=this.clearable||this.allowEmpty}handleAlphaChannelChange(e){const{format:t}=this;e&&t!=="auto"&&!A(t)&&(console.warn(`ignoring alphaChannel as the current format (${t}) does not support alpha`),this.alphaChannel=!1)}handleColorChange(e,t){this.drawColorControls(),this.updateChannelsFromColor(e),this.previousColor=t}handleFormatOrAlphaChannelChange(){this.setMode(this.format),this.internalColorSet(this.color,!1,"internal")}handleScaleChange(e="m"){this.updateDimensions(e),this.updateCanvasSize("all"),this.drawColorControls()}onMessagesChange(){}handleValueChange(e,t){const{isClearable:o,format:n}=this,i=!o||e;let s=!1;if(i){const d=j(e);if(!d||n!=="auto"&&d!==n){this.showIncompatibleColorWarning(e,n),this.value=t;return}s=this.mode!==d,this.setMode(d,this.internalColorUpdateContext===null)}const a=this.activeCanvasInfo;if(this.internalColorUpdateContext==="initial")return;if(this.internalColorUpdateContext==="user-interaction"){this.calciteColorPickerInput.emit(),a||this.calciteColorPickerChange.emit();return}const l=o&&!e?null:v(e!=null&&typeof e=="object"&&A(this.mode)?Ee(e):e),h=!B(l,this.color);(s||h)&&this.internalColorSet(l,this.alphaChannel&&!(this.mode.endsWith("a")||this.mode.endsWith("a-css")),"internal")}get baseColorFieldColor(){return this.color||this.previousColor||b}effectiveLocaleChange(){Fe(this,this.effectiveLocale)}handleChannelKeyUpOrDown(e){this.shiftKeyChannelAdjustment=0;const{key:t}=e;if(t!=="ArrowUp"&&t!=="ArrowDown"||!e.composedPath().some(i=>{var s;return(s=i.classList)==null?void 0:s.contains(r.channel)}))return;const{shiftKey:o}=e;if(e.preventDefault(),!this.color){this.internalColorSet(this.previousColor),e.stopPropagation();return}const n=9;this.shiftKeyChannelAdjustment=t==="ArrowUp"&&o?n:t==="ArrowDown"&&o?-n:0}async setFocus(){await oe(this),this.el.focus()}async componentWillLoad(){ee(this),this.handleAllowEmptyOrClearableChange();const{isClearable:e,color:t,format:o,value:n}=this,i=e&&!n,s=j(n),a=i||o==="auto"&&s||o===s,l=i?null:a?v(n):t;a||this.showIncompatibleColorWarning(n,o),this.setMode(o,!1),this.internalColorSet(l,!1,"initial"),this.updateDimensions(this.scale);const h=`${T}${this.storageId}`;this.storageId&&localStorage.getItem(h)&&(this.savedColors=JSON.parse(localStorage.getItem(h))),await Oe(this)}connectedCallback(){De(this),Pe(this),He(this)}componentDidLoad(){te(this)}disconnectedCallback(){window.removeEventListener("pointermove",this.globalPointerMoveHandler),window.removeEventListener("pointerup",this.globalPointerUpHandler),Te(this),Le(this),Re(this)}componentDidRender(){Me(this)}render(){const{channelsDisabled:e,color:t,colorFieldScopeLeft:o,colorFieldScopeTop:n,dimensions:{slider:{width:i},thumb:{radius:s}},hexDisabled:a,hideChannels:l,hideHex:h,hideSaved:d,hueScopeLeft:p,messages:u,alphaChannel:f,opacityScopeLeft:x,savedColors:k,savedDisabled:D,scale:y,scopeOrientation:P}=this,M=t?g(t,f):null,he=s,de=p??i*b.hue()/C.h,ue=s,pe=x??i*I(b.alpha())/S.max,$=t===null,H=P==="vertical",K=a||h,z=e||l,Ce=D||d,[fe,me]=this.getAdjustedScopePosition(o,n),[ge,ve]=this.getAdjustedScopePosition(de,he),[be,Se]=this.getAdjustedScopePosition(pe,ue);return c($e,{disabled:this.disabled},c("div",{class:r.container},c("div",{class:r.controlAndScope},c("canvas",{class:r.colorField,onPointerDown:this.handleColorFieldPointerDown,ref:this.initColorField}),c("div",{"aria-label":H?u.value:u.saturation,"aria-valuemax":H?C.v:C.s,"aria-valuemin":"0","aria-valuenow":(H?t==null?void 0:t.saturationv():t==null?void 0:t.value())||"0",class:{[r.scope]:!0,[r.colorFieldScope]:!0},onKeyDown:this.handleColorFieldScopeKeyDown,role:"slider",style:{top:`${me||0}px`,left:`${fe||0}px`},tabindex:"0",ref:this.storeColorFieldScope})),c("div",{class:r.previewAndSliders},c("calcite-color-picker-swatch",{class:r.preview,color:M,scale:"l"}),c("div",{class:r.sliders},c("div",{class:r.controlAndScope},c("canvas",{class:{[r.slider]:!0,[r.hueSlider]:!0},onPointerDown:this.handleHueSliderPointerDown,ref:this.initHueSlider}),c("div",{"aria-label":u.hue,"aria-valuemax":C.h,"aria-valuemin":"0","aria-valuenow":(t==null?void 0:t.round().hue())||b.round().hue(),class:{[r.scope]:!0,[r.hueScope]:!0},onKeyDown:this.handleHueScopeKeyDown,role:"slider",style:{top:`${ve}px`,left:`${ge}px`},tabindex:"0",ref:this.storeHueScope})),f?c("div",{class:r.controlAndScope},c("canvas",{class:{[r.slider]:!0,[r.opacitySlider]:!0},onPointerDown:this.handleOpacitySliderPointerDown,ref:this.initOpacitySlider}),c("div",{"aria-label":u.opacity,"aria-valuemax":S.max,"aria-valuemin":S.min,"aria-valuenow":(t||b).round().alpha(),class:{[r.scope]:!0,[r.opacityScope]:!0},onKeyDown:this.handleOpacityScopeKeyDown,role:"slider",style:{top:`${Se}px`,left:`${be}px`},tabindex:"0",ref:this.storeOpacityScope})):null)),K&&z?null:c("div",{class:{[r.controlSection]:!0,[r.section]:!0}},c("div",{class:r.hexAndChannelsGroup},K?null:c("div",{class:r.hexOptions},c("calcite-color-picker-hex-input",{allowEmpty:this.isClearable,alphaChannel:f,class:r.control,messages:u,numberingSystem:this.numberingSystem,onCalciteColorPickerHexInputChange:this.handleHexInputChange,scale:y,value:M})),z?null:c("calcite-tabs",{class:{[r.colorModeContainer]:!0,[r.splitSection]:!0},scale:y==="l"?"m":"s"},c("calcite-tab-nav",{slot:"title-group"},this.renderChannelsTabTitle("rgb"),this.renderChannelsTabTitle("hsv")),this.renderChannelsTab("rgb"),this.renderChannelsTab("hsv")))),Ce?null:c("div",{class:{[r.savedColorsSection]:!0,[r.section]:!0}},c("div",{class:r.header},c("label",null,u.saved),c("div",{class:r.savedColorsButtons},c("calcite-button",{appearance:"transparent",class:r.deleteColor,disabled:$,iconStart:"minus",kind:"neutral",label:u.deleteColor,onClick:this.deleteColor,scale:y,type:"button"}),c("calcite-button",{appearance:"transparent",class:r.saveColor,disabled:$,iconStart:"plus",kind:"neutral",label:u.saveColor,onClick:this.saveColor,scale:y,type:"button"}))),k.length>0?c("div",{class:r.savedColors},[...k.map(V=>c("calcite-color-picker-swatch",{class:r.savedColor,color:V,key:V,onClick:this.handleSavedColorSelect,onKeyDown:this.handleSavedColorKeyDown,scale:y,tabIndex:0}))]):null)))}handleKeyDown(e){e.key==="Enter"&&e.preventDefault()}showIncompatibleColorWarning(e,t){console.warn(`ignoring color value (${e}) as it is not compatible with the current format (${t})`)}setMode(e,t=!0){const o=e==="auto"?this.mode:e;this.mode=this.ensureCompatibleMode(o,t)}ensureCompatibleMode(e,t){const{alphaChannel:o}=this,n=A(e);if(o&&!n){const i=Ke(e);return t&&console.warn(`setting format to (${i}) as the provided one (${e}) does not support alpha`),i}if(!o&&n){const i=_(e);return t&&console.warn(`setting format to (${i}) as the provided one (${e}) does not support alpha`),i}return e}captureHueSliderColor(e){const{dimensions:{slider:{width:t}}}=this,o=W/t*e;this.internalColorSet(this.baseColorFieldColor.hue(o),!1)}captureOpacitySliderValue(e){const{dimensions:{slider:{width:t}}}=this,o=F(S.max/t*e);this.internalColorSet(this.baseColorFieldColor.alpha(o),!1)}internalColorSet(e,t=!0,o="user-interaction"){t&&B(e,this.color)||(this.internalColorUpdateContext=o,this.color=e,this.value=this.toValue(e),this.internalColorUpdateContext=null)}toValue(e,t=this.mode){if(!e)return null;if(t.includes("hex")){const i=t===U.HEXA;return m(g(e.round(),i),i)}if(t.includes("-css")){const i=e[t.replace("-css","").replace("a","")]().round().string();if((t.endsWith("a")||t.endsWith("a-css"))&&e.alpha()===1){const a=i.slice(0,3),l=i.slice(4,-1);return`${a}a(${l}, ${e.alpha()})`}return i}const n=e[_(t)]().round().object();return t.endsWith("a")?ze(n):n}getSliderCapSpacing(){const{dimensions:{slider:{height:e},thumb:{radius:t}}}=this;return t*2-e}updateDimensions(e="m"){this.dimensions=G[e]}drawColorField(){const e=this.colorFieldRenderingContext,{dimensions:{colorField:{height:t,width:o}}}=this;e.fillStyle=this.baseColorFieldColor.hsv().saturationv(100).value(100).alpha(1).string(),e.fillRect(0,0,o,t);const n=e.createLinearGradient(0,0,o,0);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,o,t);const i=e.createLinearGradient(0,0,0,t);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=i,e.fillRect(0,0,o,t),this.drawActiveColorFieldColor()}setCanvasContextSize(e,{height:t,width:o}){if(!e)return;const n=window.devicePixelRatio||1;e.width=o*n,e.height=t*n,e.style.height=`${t}px`,e.style.width=`${o}px`,e.getContext("2d").scale(n,n)}updateCanvasSize(e="all"){var n,i,s;const{dimensions:t}=this;(e==="all"||e==="color-field")&&this.setCanvasContextSize((n=this.colorFieldRenderingContext)==null?void 0:n.canvas,t.colorField);const o={width:t.slider.width,height:t.slider.height+(t.thumb.radius-t.slider.height/2)*2};(e==="all"||e==="hue-slider")&&this.setCanvasContextSize((i=this.hueSliderRenderingContext)==null?void 0:i.canvas,o),(e==="all"||e==="opacity-slider")&&this.setCanvasContextSize((s=this.opacitySliderRenderingContext)==null?void 0:s.canvas,o)}drawActiveColorFieldColor(){const{color:e}=this;if(!e)return;const t=e.hsv(),{dimensions:{colorField:{height:o,width:n},thumb:{radius:i}}}=this,s=t.saturationv()/(C.s/n),a=o-t.value()/(C.v/o);requestAnimationFrame(()=>{this.colorFieldScopeLeft=s,this.colorFieldScopeTop=a}),this.drawThumb(this.colorFieldRenderingContext,i,s,a,t,!1)}drawThumb(e,t,o,n,i,s){const l=2*Math.PI,h=1;if(e.beginPath(),e.arc(o,n,t,0,l),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=h,e.stroke(),s&&i.alpha()<1){const p=e.createPattern(this.getCheckeredBackgroundPattern(),"repeat");e.beginPath(),e.arc(o,n,t-3,0,l),e.fillStyle=p,e.fill()}e.globalCompositeOperation="source-atop",e.beginPath(),e.arc(o,n,t-3,0,l);const d=s?i.alpha():1;e.fillStyle=i.rgb().alpha(d).string(),e.fill(),e.globalCompositeOperation="source-over"}drawActiveHueSliderColor(){const{color:e}=this;if(!e)return;const t=e.hsv().saturationv(100).value(100),{dimensions:{slider:{width:o},thumb:{radius:n}}}=this,i=t.hue()/(W/o),s=n,a=this.getSliderBoundX(i,o,n);requestAnimationFrame(()=>{this.hueScopeLeft=a}),this.drawThumb(this.hueSliderRenderingContext,n,a,s,t,!1)}drawHueSlider(){const e=this.hueSliderRenderingContext,{dimensions:{slider:{height:t,width:o},thumb:{radius:n}}}=this,i=0,s=n-t/2,a=e.createLinearGradient(0,0,o,0),l=["red","yellow","lime","cyan","blue","magenta","#ff0004"],h=1/(l.length-1);let d=0;l.forEach(p=>{a.addColorStop(d,v(p).string()),d+=h}),e.clearRect(0,0,o,t+this.getSliderCapSpacing()*2),this.drawSliderPath(e,t,o,i,s),e.fillStyle=a,e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),this.drawActiveHueSliderColor()}drawOpacitySlider(){const e=this.opacitySliderRenderingContext,{baseColorFieldColor:t,dimensions:{slider:{height:o,width:n},thumb:{radius:i}}}=this,s=0,a=i-o/2;e.clearRect(0,0,n,o+this.getSliderCapSpacing()*2);const l=e.createLinearGradient(0,a,n,0),h=t.rgb().alpha(0),d=t.rgb().alpha(.5),p=t.rgb().alpha(1);l.addColorStop(0,h.string()),l.addColorStop(.5,d.string()),l.addColorStop(1,p.string()),this.drawSliderPath(e,o,n,s,a);const u=e.createPattern(this.getCheckeredBackgroundPattern(),"repeat");e.fillStyle=u,e.fill(),e.fillStyle=l,e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),this.drawActiveOpacitySliderColor()}drawSliderPath(e,t,o,n,i){const s=t/2+1;e.beginPath(),e.moveTo(n+s,i),e.lineTo(n+o-s,i),e.quadraticCurveTo(n+o,i,n+o,i+s),e.lineTo(n+o,i+t-s),e.quadraticCurveTo(n+o,i+t,n+o-s,i+t),e.lineTo(n+s,i+t),e.quadraticCurveTo(n,i+t,n,i+t-s),e.lineTo(n,i+s),e.quadraticCurveTo(n,i,n+s,i),e.closePath()}getCheckeredBackgroundPattern(){if(this.checkerPattern)return this.checkerPattern;const e=document.createElement("canvas");e.width=10,e.height=10;const t=e.getContext("2d");return t.fillStyle="#ccc",t.fillRect(0,0,10,10),t.fillStyle="#fff",t.fillRect(0,0,5,5),t.fillRect(5,5,5,5),this.checkerPattern=e,e}drawActiveOpacitySliderColor(){const{color:e}=this;if(!e)return;const t=e,{dimensions:{slider:{width:o},thumb:{radius:n}}}=this,i=I(t.alpha())/(S.max/o),s=n,a=this.getSliderBoundX(i,o,n);requestAnimationFrame(()=>{this.opacityScopeLeft=a}),this.drawThumb(this.opacitySliderRenderingContext,n,a,s,t,!0)}getSliderBoundX(e,t,o){const n=Be(e,t,o);return n===0?e:n===-1?N(e,0,t,o,o*2):N(e,0,t,t-o*2,t-o)}updateColorFromChannels(e){this.internalColorSet(v(e,this.channelMode))}updateChannelsFromColor(e){this.channels=e?this.toChannels(e):[null,null,null,null]}toChannels(e){const{channelMode:t}=this,o=e[t]().array().map((n,i)=>i===3?n:Math.floor(n));return o.length===3&&o.push(1),o}getAdjustedScopePosition(e,t){return[e-q/2,t-q/2]}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{allowEmpty:["handleAllowEmptyOrClearableChange"],clearable:["handleAllowEmptyOrClearableChange"],alphaChannel:["handleAlphaChannelChange","handleFormatOrAlphaChannelChange"],color:["handleColorChange"],format:["handleFormatOrAlphaChannelChange"],scale:["handleScaleChange"],messageOverrides:["onMessagesChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Ze}},[17,"calcite-color-picker",{allowEmpty:[516,"allow-empty"],alphaChannel:[4,"alpha-channel"],channelsDisabled:[4,"channels-disabled"],clearable:[516],color:[1040],disabled:[516],format:[513],hideChannels:[516,"hide-channels"],hexDisabled:[4,"hex-disabled"],hideHex:[516,"hide-hex"],hideSaved:[516,"hide-saved"],savedDisabled:[516,"saved-disabled"],scale:[513],storageId:[513,"storage-id"],messageOverrides:[1040],numberingSystem:[513,"numbering-system"],value:[1025],messages:[1040],defaultMessages:[32],channelMode:[32],channels:[32],dimensions:[32],effectiveLocale:[32],savedColors:[32],colorFieldScopeTop:[32],colorFieldScopeLeft:[32],hueScopeLeft:[32],opacityScopeLeft:[32],scopeOrientation:[32],setFocus:[64]},[[2,"keydown","handleChannelKeyUpOrDown"],[2,"keyup","handleChannelKeyUpOrDown"]],{allowEmpty:["handleAllowEmptyOrClearableChange"],clearable:["handleAllowEmptyOrClearableChange"],alphaChannel:["handleAlphaChannelChange","handleFormatOrAlphaChannelChange"],color:["handleColorChange"],format:["handleFormatOrAlphaChannelChange"],scale:["handleScaleChange"],messageOverrides:["onMessagesChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleChange"]}]);function ce(){if(typeof customElements>"u")return;["calcite-color-picker","calcite-button","calcite-color-picker-hex-input","calcite-color-picker-swatch","calcite-icon","calcite-input-message","calcite-input-number","calcite-input-text","calcite-loader","calcite-progress","calcite-tab","calcite-tab-nav","calcite-tab-title","calcite-tabs"].forEach(e=>{switch(e){case"calcite-color-picker":customElements.get(e)||customElements.define(e,re);break;case"calcite-button":customElements.get(e)||_e();break;case"calcite-color-picker-hex-input":customElements.get(e)||le();break;case"calcite-color-picker-swatch":customElements.get(e)||Ue();break;case"calcite-icon":customElements.get(e)||J();break;case"calcite-input-message":customElements.get(e)||ne();break;case"calcite-input-number":customElements.get(e)||ie();break;case"calcite-input-text":customElements.get(e)||se();break;case"calcite-loader":customElements.get(e)||Ve();break;case"calcite-progress":customElements.get(e)||ae();break;case"calcite-tab":customElements.get(e)||Ne();break;case"calcite-tab-nav":customElements.get(e)||Xe();break;case"calcite-tab-title":customElements.get(e)||We();break;case"calcite-tabs":customElements.get(e)||Ge();break}})}ce();const vt=re,bt=ce;export{vt as CalciteColorPicker,bt as defineCustomElement};
