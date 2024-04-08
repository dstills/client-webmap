import{ef as v,em as c,eg as r,eh as y,ei as m,eo as k,ek as R,en as P}from"./index-nBWeBKPv.js";import{A as z,k as D,g as I,B as C,t as N}from"./dom-bef18e4a-CP2TJ11y.js";import{g as O}from"./guid-617f6e1b-DQtJl1SZ.js";import{c as p}from"./observers-ff65e337--1jEkyko.js";import{c as A,d as B}from"./locale-b835bf72-D_ioPdlj.js";import{c as L,s as W,d as F,u as H}from"./t9n-91f18f76-DmfvLzG2.js";import{a as M,b as $,d as q}from"./core-890e7ced-Bizuf87v.js";import{c as _,d as j,I as U,u as V}from"./interactive-583e13d7-Cl8hsh9F.js";import{g as x}from"./component-b0a9a44a-WqEOSVCt.js";import"./key-3f1e3da4-DU8kuSDQ.js";import"./browser-1baf23f7-zzj4YD6P.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const S={container:"container",content:"content"},X=`:host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.content{box-sizing:border-box;padding-block:var(--calcite-internal-tab-content-block-padding)}.scale-s{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.25rem);font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.5rem);font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.625rem);font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}.container{outline-color:transparent}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([hidden]){display:none}[hidden]{display:none}`,G=class{constructor(t){v(this,t),this.calciteInternalTabRegister=c(this,"calciteInternalTabRegister",6),this.guid=`calcite-tab-title-${O()}`,this.tab=void 0,this.selected=!1,this.scale="m",this.labeledBy=void 0}render(){const t=this.el.id||this.guid;return r(y,{"aria-labelledby":this.labeledBy,id:t},r("div",{class:{[S.container]:!0,[`scale-${this.scale}`]:!0},role:"tabpanel",tabIndex:this.selected?0:-1},r("section",{class:S.content},r("slot",null))))}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs")}componentDidLoad(){this.calciteInternalTabRegister.emit()}disconnectedCallback(){var t;(t=document.body)==null||t.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(t){t.composedPath().find(i=>i.tagName==="CALCITE-TABS")===this.parentTabsEl&&(this.tab?this.selected=this.tab===t.detail.tab:this.getTabIndex().then(i=>{this.selected=i===t.detail.tab}),t.stopPropagation())}async getTabIndex(){return Array.prototype.indexOf.call(z(this.el.parentElement.children).filter(t=>t.matches("calcite-tab")),this.el)}async updateAriaInfo(t=[],e=[]){this.labeledBy=e[t.indexOf(this.el.id)]||null}get el(){return m(this)}};G.style=X;const E={chevronRight:"chevron-right",chevronLeft:"chevron-left"},b={activeIndicatorContainer:"tab-nav-active-indicator-container",container:"tab-nav",containerHasEndTabTitleOverflow:"tab-nav--end-overflow",containerHasStartTabTitleOverflow:"tab-nav--start-overflow",scrollButton:"scroll-button",scrollButtonContainer:"scroll-button-container",scrollBackwardContainerButton:"scroll-button-container--backward",scrollForwardContainerButton:"scroll-button-container--forward",tabTitleSlotWrapper:"tab-titles-slot-wrapper"},J=':host{--calcite-internal-tab-nav-gradient-start-side:left;--calcite-internal-tab-nav-gradient-end-side:right;position:relative;display:flex}.scale-s{--calcite-internal-tab-nav-scroller-button-width:24px;min-block-size:1.5rem}.scale-m{--calcite-internal-tab-nav-scroller-button-width:32px;min-block-size:2rem}.scale-l{--calcite-internal-tab-nav-scroller-button-width:44px;min-block-size:2.75rem}.calcite--rtl{--calcite-internal-tab-nav-gradient-start-side:right;--calcite-internal-tab-nav-gradient-end-side:left}.tab-nav--start-overflow .tab-nav-active-indicator-container,.tab-nav--start-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%)}.tab-nav--end-overflow .tab-nav-active-indicator-container,.tab-nav--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%)}.tab-nav--start-overflow.tab-nav--end-overflow .tab-nav-active-indicator-container,.tab-nav--start-overflow.tab-nav--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%, transparent 51%), linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%, transparent 51%)}.tab-nav::-webkit-scrollbar{display:none;-ms-overflow-style:none;scrollbar-width:none}:host([layout=center]) ::slotted(calcite-tab-title){display:flex;flex-grow:1;flex-shrink:0;min-inline-size:auto;white-space:nowrap}:host([layout=center]) ::slotted(calcite-tab-title[selected]){overflow:unset}:host(:not([bordered])) .scale-l{--calcite-internal-tab-nav-gap:var(--calcite-size-xxl)}:host(:not([bordered])) .scale-m{--calcite-internal-tab-nav-gap:var(--calcite-size-xl)}:host(:not([bordered])) .scale-s{--calcite-internal-tab-nav-gap:var(--calcite-size-lg)}:host(:not([bordered])) .tab-titles-slot-wrapper{gap:var(--calcite-internal-tab-nav-gap)}:host([layout=center]:not([bordered])) .tab-titles-slot-wrapper{padding-inline:var(--calcite-spacing-xxl)}.tab-nav,.tab-titles-slot-wrapper{display:flex;inline-size:100%;justify-content:flex-start;overflow:hidden;white-space:nowrap}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-color-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}.scroll-button-container{position:absolute;inset-block:0px}.scroll-button-container calcite-button{--calcite-offset-invert-focus:1;--calcite-color-text-1:var(--calcite-color-text-3);block-size:100%}.scroll-button-container calcite-button:hover{--calcite-color-text-1:unset;--calcite-color-foreground-1:var(--calcite-color-transparent-hover);--calcite-color-foreground-3:var(--calcite-color-transparent)}.scroll-button-container--forward{inset-inline-end:0;z-index:var(--calcite-z-index)}.scroll-button-container--backward{inset-inline-start:0;z-index:var(--calcite-z-index)}:host(:not([bordered])) .scroll-button-container--backward::before,:host(:not([bordered])) .scroll-button-container--forward::before{background-color:var(--calcite-color-border-3);content:"";inline-size:var(--calcite-border-width-sm);inset-block-start:var(--calcite-border-width-md);inset-block-end:var(--calcite-border-width-md);position:absolute}:host(:not([bordered])) .scroll-button-container--backward::before{inset-inline-end:0}:host(:not([bordered])) .scroll-button-container--forward::before{inset-inline-start:0}:host .position-bottom .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host .position-bottom .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered]) .position-bottom .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}:host([hidden]){display:none}[hidden]{display:none}',Y=class{constructor(t){v(this,t),this.calciteTabChange=c(this,"calciteTabChange",6),this.calciteInternalTabChange=c(this,"calciteInternalTabChange",6),this.effectiveDir="ltr",this.lastScrollWheelAxis="x",this.resizeObserver=p("resize",()=>{this.updateScrollingState(),this.activeIndicatorEl&&this.updateActiveIndicator()}),this.onTabTitleWheel=e=>{e.preventDefault();const{deltaX:i,deltaY:a}=e,n=Math.abs(i),s=Math.abs(a);let o;n===s?o=this.lastScrollWheelAxis==="x"?i:a:n>s?(o=i,this.lastScrollWheelAxis="x"):(o=a,this.lastScrollWheelAxis="y");const l=(this.effectiveDir==="rtl"?-1:1)*o;e.currentTarget.scrollBy(l,0),requestAnimationFrame(()=>this.updateActiveIndicator())},this.onSlotChange=e=>{var a;(a=this.intersectionObserver)==null||a.disconnect(),e.target.assignedElements().forEach(n=>{var s;(s=this.intersectionObserver)==null||s.observe(n)})},this.storeContainerRef=e=>this.containerEl=e,this.storeTabTitleWrapperRef=e=>{this.tabTitleContainerEl=e,this.intersectionObserver=p("intersection",()=>this.updateScrollingState(),{root:e,threshold:[0,.5,1]})},this.scrollToTabTitles=e=>{k(()=>{const i=this.tabTitleContainerEl,a=i.getBoundingClientRect(),n=Array.from(this.el.querySelectorAll("calcite-tab-title")),{effectiveDir:s}=this;e==="forward"&&n.reverse();let o=null;if(n.forEach(l=>{const d=l.getBoundingClientRect(),h=a.x+a.width,f=d.x+d.width;e==="forward"&&s==="ltr"||e==="backward"&&s==="rtl"?(d.x>h||f>h&&d.x>a.x)&&(o=l):(f<a.x||f<h&&d.x<a.x)&&(o=l)}),o){const{scrollerButtonWidth:l}=this,d=e==="forward"&&s==="ltr"||e==="backward"&&s==="rtl"?-l:o.offsetWidth-i.clientWidth+l,h=o.offsetLeft+d;i.scrollTo({left:h,behavior:"smooth"})}})},this.scrollToNextTabTitles=()=>this.scrollToTabTitles("forward"),this.scrollToPreviousTabTitles=()=>this.scrollToTabTitles("backward"),this.handleTabFocus=(e,i,a)=>{const n=D(this.enabledTabTitles,i,a);this.scrollTabTitleIntoView(n,"instant"),e.stopPropagation()},this.onTabTitleScroll=()=>{this.updateActiveIndicator(),this.updateScrollingState()},this.renderScrollButton=e=>{const{bordered:i,messages:a,hasOverflowingStartTabTitle:n,hasOverflowingEndTabTitle:s,scale:o}=this,l=e==="end";return r("div",{class:{[b.scrollButtonContainer]:!0,[b.scrollBackwardContainerButton]:!l,[b.scrollForwardContainerButton]:l},hidden:l&&!s||!l&&!n,key:e},r("calcite-button",{appearance:i?"outline-fill":"transparent","aria-label":l?a.nextTabTitles:a.previousTabTitles,class:{[b.scrollButton]:!0},iconFlipRtl:"both",iconStart:l?E.chevronRight:E.chevronLeft,kind:"neutral",onClick:l?this.scrollToNextTabTitles:this.scrollToPreviousTabTitles,scale:o,tabIndex:-1}))},this.storageId=void 0,this.syncId=void 0,this.selectedTitle=null,this.scale="m",this.layout="inline",this.position="bottom",this.bordered=!1,this.indicatorOffset=void 0,this.indicatorWidth=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasOverflowingStartTabTitle=!1,this.hasOverflowingEndTabTitle=!1,this.selectedTabId=void 0}onMessagesChange(){}async selectedTabIdChanged(){localStorage&&this.storageId&&this.selectedTabId!==void 0&&this.selectedTabId!==null&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTabId)),this.calciteInternalTabChange.emit({tab:this.selectedTabId}),this.selectedTitle=await this.getTabTitleById(this.selectedTabId)}selectedTitleChanged(){this.updateActiveIndicator()}connectedCallback(){var t;this.parentTabsEl=this.el.closest("calcite-tabs"),(t=this.resizeObserver)==null||t.observe(this.el),A(this),L(this)}async componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;if(localStorage&&this.storageId&&localStorage.getItem(t)){const e=JSON.parse(localStorage.getItem(t));this.selectedTabId=e}await W(this)}componentDidLoad(){this.scrollTabTitleIntoView(this.selectedTitle,"instant")}componentWillRender(){const{parentTabsEl:t}=this;this.layout=t==null?void 0:t.layout,this.bordered=t==null?void 0:t.bordered,this.effectiveDir=I(this.el),this.selectedTitle&&this.updateActiveIndicator()}componentDidRender(){this.tabTitles.length&&this.tabTitles.every(t=>!t.selected)&&!this.selectedTabId&&this.tabTitles[0].getTabIdentifier().then(t=>{this.calciteInternalTabChange.emit({tab:t})})}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.disconnect(),B(this),F(this)}render(){const t=`${this.indicatorWidth}px`,e=`${this.indicatorOffset}px`,i=this.effectiveDir!=="rtl"?{width:t,left:e}:{width:t,right:e};return r(y,{role:"tablist"},r("div",{class:{[b.container]:!0,[b.containerHasStartTabTitleOverflow]:!!this.hasOverflowingStartTabTitle,[b.containerHasEndTabTitleOverflow]:!!this.hasOverflowingEndTabTitle,[`scale-${this.scale}`]:!0,[`position-${this.position}`]:!0,[R.rtl]:this.effectiveDir==="rtl"},ref:this.storeContainerRef},this.renderScrollButton("start"),r("div",{class:{[b.tabTitleSlotWrapper]:!0},onScroll:this.onTabTitleScroll,onWheel:this.onTabTitleWheel,ref:this.storeTabTitleWrapperRef},r("slot",{onSlotchange:this.onSlotChange})),r("div",{class:{[b.activeIndicatorContainer]:!0},ref:a=>this.activeIndicatorContainerEl=a},r("div",{class:"tab-nav-active-indicator",style:i,ref:a=>this.activeIndicatorEl=a})),this.renderScrollButton("end")))}focusPreviousTabHandler(t){this.handleTabFocus(t,t.target,"previous")}focusNextTabHandler(t){this.handleTabFocus(t,t.target,"next")}focusFirstTabHandler(t){this.handleTabFocus(t,t.target,"first")}focusLastTabHandler(t){this.handleTabFocus(t,t.target,"last")}internalActivateTabHandler(t){const e=t.target;this.selectedTabId=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(e),t.stopPropagation(),this.scrollTabTitleIntoView(e)}scrollTabTitleIntoView(t,e="smooth"){t&&k(()=>{const i=this.effectiveDir==="ltr",a=this.tabTitleContainerEl,n=a.getBoundingClientRect(),s=t.getBoundingClientRect(),o=a.scrollLeft,l=i?this.hasOverflowingStartTabTitle:this.hasOverflowingEndTabTitle,d=i?this.hasOverflowingEndTabTitle:this.hasOverflowingStartTabTitle;if(s.left<n.left+(l?this.scrollerButtonWidth:0)){const h=o+(s.left-n.left)-this.scrollerButtonWidth;a.scrollTo({left:h,behavior:e})}else if(s.right>n.right-(d?this.scrollerButtonWidth:0)){const h=o+(s.right-n.right)+this.scrollerButtonWidth;a.scrollTo({left:h,behavior:e})}})}activateTabHandler(t){this.calciteTabChange.emit(),t.stopPropagation()}internalCloseTabHandler(t){const e=t.target;this.handleTabTitleClose(e),t.stopPropagation()}updateTabTitles(t){t.target.selected&&(this.selectedTabId=t.detail)}globalInternalTabChangeHandler(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTabId!==t.detail.tab&&(this.selectedTabId=t.detail.tab),t.stopPropagation()}iconStartChangeHandler(){this.updateActiveIndicator()}effectiveLocaleChange(){H(this,this.effectiveLocale)}get scrollerButtonWidth(){const{scale:t}=this;return parseInt(t==="s"?M:t==="m"?$:q)}updateActiveIndicator(){var d,h,f,g,T,w;const t=(d=this.tabTitleContainerEl)==null?void 0:d.scrollLeft,e=(h=this.containerEl)==null?void 0:h.scrollLeft,i=(f=this.activeIndicatorContainerEl)==null?void 0:f.offsetWidth,a=(g=this.selectedTitle)==null?void 0:g.offsetLeft,n=(T=this.selectedTitle)==null?void 0:T.offsetWidth,s=i-a-n,o=this.effectiveDir==="ltr"?a:s,l=this.effectiveDir==="ltr"?-1:1;this.indicatorOffset=o+l*(e+t),this.indicatorWidth=(w=this.selectedTitle)==null?void 0:w.offsetWidth}updateScrollingState(){const t=this.tabTitleContainerEl;if(!t)return;let e,i;const a=t.scrollLeft,n=t.clientWidth,s=t.scrollWidth;this.effectiveDir==="ltr"?(e=a>0,i=a+n<s):(e=a<0,i=a!==-(s-n)),this.hasOverflowingStartTabTitle=e,this.hasOverflowingEndTabTitle=i}getIndexOfTabTitle(t,e=this.tabTitles){return e.indexOf(t)}async getTabTitleById(t){return Promise.all(this.tabTitles.map(e=>e.getTabIdentifier())).then(e=>this.tabTitles[e.indexOf(t)])}get tabTitles(){return C(this.el,"calcite-tab-title")}get enabledTabTitles(){return C(this.el,"calcite-tab-title:not([disabled])").filter(t=>!t.closed)}handleTabTitleClose(t){const{tabTitles:e}=this,i=t.selected,a=e.reduce((s,o,l)=>o.closed?s:[...s,l],[]),n=a.length;if(n===1&&e[a[0]].closable)e[a[0]].closable=!1,this.selectedTabId=a[0],i&&e[a[0]].activateTab();else if(n>1){const s=e.findIndex(l=>l===t),o=a.find(l=>l>s);this.selectedTabId===s&&(this.selectedTabId=o||n-1,e[this.selectedTabId].activateTab())}requestAnimationFrame(()=>{this.updateActiveIndicator(),e[this.selectedTabId].focus()})}static get assetsDirs(){return["assets"]}get el(){return m(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],selectedTabId:["selectedTabIdChanged"],selectedTitle:["selectedTitleChanged"],effectiveLocale:["effectiveLocaleChange"]}}};Y.style=J;const u={closeButton:"close-button",container:"container",content:"content",contentHasText:"content--has-text",iconEnd:"icon-end",iconPresent:"icon-present",iconStart:"icon-start",titleIcon:"calcite-tab-title--icon"},K={close:"x"},Q=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px}:host([layout=inline]){flex:0 1 auto}:host([layout=center]){flex:1 1 auto}.content{display:flex;align-items:center;justify-content:center}.scale-s .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([closable]) .content{box-sizing:border-box;block-size:100%;border-block-end-color:transparent}:host([layout=inline]) .content,:host([layout=center]) .content{padding-inline:0.25rem}:host([layout=center]) .scale-s,:host([layout=center]) .scale-m,:host([layout=center]) .scale-l{margin-block:0px;justify-content:center;text-align:center}:host([layout=center]) .scale-s .content,:host([layout=center]) .scale-m .content,:host([layout=center]) .scale-l .content{flex:1 1 auto;flex-grow:1}.container{box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-content:center;justify-content:space-between;border-block-end-width:2px;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end-color:transparent;border-block-end-style:solid}:host([position=bottom]) .container{border-block-end-width:0px;border-block-start-width:2px;border-block-start-color:transparent;border-block-start-style:solid}:host([closed]){display:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-color-text-1)}:host(:focus) .container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:focus) .container:focus-within{outline-color:transparent}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-color-border-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.content--has-text{padding:0.25rem}.content--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:0.5rem}.content--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:0.5rem}.close-button{display:flex;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-style:none;background-color:var(--calcite-color-foreground-1);padding:0.25rem;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-button-transparent-1);margin-inline-start:auto}.close-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          );outline-offset:-1px}.close-button:focus,.close-button:hover{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-2)}.close-button:active{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.close-button calcite-icon{color:inherit}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:0.5rem}:host([bordered]){margin-inline-end:0}:host([bordered][selected]){box-shadow:inset 0px -2px var(--calcite-color-foreground-1)}:host([bordered][selected][position=bottom]){box-shadow:inset 0 2px 0 var(--calcite-color-foreground-1)}:host([bordered]:hover) .container{background-color:var(--calcite-color-transparent-hover)}:host([closable]) .container,:host([bordered]) .container{border-inline-start:1px solid transparent;border-inline-end:1px solid transparent}:host([closable]) .container .close-button,:host([bordered]) .container .close-button{margin-inline:0}:host([closable][position=bottom]) .container,:host([bordered][position=bottom]) .container{border-block-start-style:unset}:host([selected][bordered]) .container{border-inline-start-color:var(--calcite-color-border-1);border-inline-end-color:var(--calcite-color-border-1)}:host([layout=inline][bordered]) .scale-m .content,:host([layout=center][bordered]) .scale-m .content{padding-inline:0.75rem}:host([layout=inline][bordered]) .scale-s .content,:host([layout=center][bordered]) .scale-s .content{padding-inline:0.5rem}:host([layout=inline][bordered]) .scale-l .content,:host([layout=center][bordered]) .scale-l .content{padding-inline:1rem}:host([layout=inline][closable]) .scale-s .content,:host([layout=inline][closable]) .scale-m .content,:host([layout=inline][closable]) .scale-l .content{padding-inline-end:0}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered][position=bottom]) .container{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][position=bottom][selected]) .container{border-block-start-style:none}.close-button{z-index:var(--calcite-z-index)}}:host([hidden]){display:none}[hidden]{display:none}`,Z=class{constructor(t){v(this,t),this.calciteTabsActivate=c(this,"calciteTabsActivate",6),this.calciteInternalTabsActivate=c(this,"calciteInternalTabsActivate",6),this.calciteTabsClose=c(this,"calciteTabsClose",6),this.calciteInternalTabsClose=c(this,"calciteInternalTabsClose",6),this.calciteInternalTabsFocusNext=c(this,"calciteInternalTabsFocusNext",6),this.calciteInternalTabsFocusPrevious=c(this,"calciteInternalTabsFocusPrevious",6),this.calciteInternalTabsFocusFirst=c(this,"calciteInternalTabsFocusFirst",6),this.calciteInternalTabsFocusLast=c(this,"calciteInternalTabsFocusLast",6),this.calciteInternalTabTitleRegister=c(this,"calciteInternalTabTitleRegister",6),this.calciteInternalTabIconChanged=c(this,"calciteInternalTabIconChanged",6),this.closeClickHandler=()=>{this.closeTabTitleAndNotify()},this.mutationObserver=p("mutation",()=>this.updateHasText()),this.resizeObserver=p("resize",()=>{this.calciteInternalTabIconChanged.emit()}),this.guid=`calcite-tab-title-${O()}`,this.selected=!1,this.closable=!1,this.closed=!1,this.disabled=!1,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.layout=void 0,this.position="top",this.scale="m",this.bordered=!1,this.tab=void 0,this.messages=void 0,this.messageOverrides=void 0,this.controls=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasText=!1}selectedHandler(){this.selected&&this.activateTab(!1)}onMessagesChange(){}connectedCallback(){_(this),A(this),L(this),this.setupTextContentObserver(),this.parentTabNavEl=this.el.closest("calcite-tab-nav"),this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){var t,e,i;(t=this.mutationObserver)==null||t.disconnect(),(e=document.body)==null||e.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el})),(i=this.resizeObserver)==null||i.disconnect(),j(this),B(this),F(this)}async componentWillLoad(){await W(this),this.updateHasText(),this.tab&&this.selected&&this.activateTab(!1)}componentWillRender(){this.parentTabsEl&&(this.layout=this.parentTabsEl.layout,this.bordered=this.parentTabsEl.bordered)}render(){const{el:t,closed:e}=this,i=t.id||this.guid,a=r("calcite-icon",{class:{[u.titleIcon]:!0,[u.iconStart]:!0},flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:x(this.scale)}),n=r("calcite-icon",{class:{[u.titleIcon]:!0,[u.iconEnd]:!0},flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:x(this.scale)});return r(y,{"aria-controls":this.controls,"aria-selected":N(this.selected),id:i,role:"tab",tabIndex:this.selected&&!this.disabled?0:-1},r(U,{disabled:this.disabled},r("div",{class:{container:!0,[u.iconPresent]:!!this.iconStart||!!this.iconEnd,[`scale-${this.scale}`]:!0},hidden:e,ref:s=>{var o;return(o=this.resizeObserver)==null?void 0:o.observe(s)}},r("div",{class:{[u.content]:!0,[u.contentHasText]:this.hasText}},this.iconStart?a:null,r("slot",null),this.iconEnd?n:null),this.renderCloseButton())))}renderCloseButton(){const{closable:t,messages:e}=this;return t?r("button",{"aria-label":e.close,class:u.closeButton,disabled:!1,key:u.closeButton,onClick:this.closeClickHandler,title:e.close,type:"button",ref:i=>this.closeButtonEl=i},r("calcite-icon",{icon:K.close,scale:x(this.scale)})):null}async componentDidLoad(){this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier())}componentDidRender(){V(this)}internalTabChangeHandler(t){t.composedPath().find(i=>i.tagName==="CALCITE-TABS")===this.parentTabsEl&&(this.tab?this.selected=this.tab===t.detail.tab:this.getTabIndex().then(i=>{this.selected=i===t.detail.tab}),t.stopPropagation())}onClick(){this.activateTab()}keyDownHandler(t){switch(t.key){case" ":case"Enter":t.composedPath().includes(this.closeButtonEl)||(this.activateTab(),t.preventDefault());break;case"ArrowRight":t.preventDefault(),I(this.el)==="ltr"?this.calciteInternalTabsFocusNext.emit():this.calciteInternalTabsFocusPrevious.emit();break;case"ArrowLeft":t.preventDefault(),I(this.el)==="ltr"?this.calciteInternalTabsFocusPrevious.emit():this.calciteInternalTabsFocusNext.emit();break;case"Home":t.preventDefault(),this.calciteInternalTabsFocusFirst.emit();break;case"End":t.preventDefault(),this.calciteInternalTabsFocusLast.emit();break}}async getTabIndex(){return Array.prototype.indexOf.call(z(this.el.parentElement.children).filter(t=>t.matches("calcite-tab-title")),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(t=[],e=[]){this.controls=t[e.indexOf(this.el.id)]||null}async activateTab(t=!0){if(this.disabled||this.closed)return;const e={tab:this.tab};this.calciteInternalTabsActivate.emit(e),t&&requestAnimationFrame(()=>this.calciteTabsActivate.emit())}effectiveLocaleChange(){H(this,this.effectiveLocale)}updateHasText(){this.hasText=this.el.textContent.trim().length>0}setupTextContentObserver(){var t;(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0})}closeTabTitleAndNotify(){this.closed=!0,this.calciteInternalTabsClose.emit({tab:this.tab}),this.calciteTabsClose.emit()}static get assetsDirs(){return["assets"]}get el(){return m(this)}static get watchers(){return{selected:["selectedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};Z.style=Q;const tt={titleGroup:"title-group"},et=":host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1);background-color:var(--calcite-color-foreground-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1)}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1), inset 0 -1px 0 var(--calcite-color-border-1)}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-color-border-1);border-block-start-style:solid}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-color-border-1)}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}:host([hidden]){display:none}[hidden]{display:none}",it=class{constructor(t){v(this,t),this.mutationObserver=p("mutation",e=>{for(const i of e){const a=i.target;(a.nodeName==="CALCITE-TAB-NAV"||a.nodeName==="CALCITE-TAB-TITLE"||a.nodeName==="CALCITE-TAB")&&this.updateItems()}}),this.layout="inline",this.position="top",this.scale="m",this.bordered=!1,this.titles=[],this.tabs=[]}handleInheritableProps(){this.updateItems()}connectedCallback(){this.mutationObserver.observe(this.el,{childList:!0}),this.updateItems()}async componentWillLoad(){this.updateItems()}disconnectedCallback(){var t;(t=this.mutationObserver)==null||t.disconnect()}render(){return r(P,null,r("slot",{name:tt.titleGroup}),r("section",null,r("slot",null)))}calciteInternalTabTitleRegister(t){this.titles=[...this.titles,t.target],this.registryHandler(),t.stopPropagation()}calciteTabTitleUnregister(t){this.titles=this.titles.filter(e=>e!==t.detail),this.registryHandler(),t.stopPropagation()}calciteInternalTabRegister(t){this.tabs=[...this.tabs,t.target],this.registryHandler(),t.stopPropagation()}calciteTabUnregister(t){this.tabs=this.tabs.filter(e=>e!==t.detail),this.registryHandler(),t.stopPropagation()}updateItems(){const{position:t,scale:e}=this,i=this.el.querySelector("calcite-tab-nav");i&&(i.position=t,i.scale=e),Array.from(this.el.querySelectorAll("calcite-tab")).forEach(a=>{a.parentElement===this.el&&(a.scale=e)}),Array.from(this.el.querySelectorAll("calcite-tab-nav > calcite-tab-title")).forEach(a=>{a.position=t,a.scale=e})}async registryHandler(){let t,e;if(this.tabs.some(i=>i.tab)||this.titles.some(i=>i.tab))t=this.tabs.sort((i,a)=>i.tab.localeCompare(a.tab)).map(i=>i.id),e=this.titles.sort((i,a)=>i.tab.localeCompare(a.tab)).map(i=>i.id);else{const i=await Promise.all(this.tabs.map(n=>n.getTabIndex())),a=await Promise.all(this.titles.map(n=>n.getTabIndex()));t=i.reduce((n,s,o)=>(n[s]=this.tabs[o].id,n),[]),e=a.reduce((n,s,o)=>(n[s]=this.titles[o].id,n),[])}this.tabs.forEach(i=>i.updateAriaInfo(t,e)),this.titles.forEach(i=>i.updateAriaInfo(t,e))}get el(){return m(this)}static get watchers(){return{position:["handleInheritableProps"],scale:["handleInheritableProps"]}}};it.style=et;export{G as calcite_tab,Y as calcite_tab_nav,Z as calcite_tab_title,it as calcite_tabs};
