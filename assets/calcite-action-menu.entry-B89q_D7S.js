import{ef as f,em as g,eg as l,en as E,ei as v}from"./index-nBWeBKPv.js";import{g as r}from"./array-ce2dfae1-DYwCoZHm.js";import{t as x,d as I}from"./dom-bef18e4a-CP2TJ11y.js";import{g as M}from"./guid-617f6e1b-DQtJl1SZ.js";import{i as b}from"./key-3f1e3da4-DU8kuSDQ.js";import{s as B,a as A,c as C}from"./loadable-6056dcbc-CWY718pR.js";import{a as w,C as d,I as O,S as u}from"./resources-c009d20e-BbxciP_7.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const D=":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1);color:var(--calcite-color-text-2)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}::slotted(calcite-action-group:last-child){border-block-end:0}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}",P=["ArrowUp","ArrowDown","End","Home"],S=class{constructor(s){f(this,s),this.calciteActionMenuOpen=g(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${M()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{const{menuButtonId:t,menuId:n,open:e,label:i}=this,o=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==o&&(this.disconnectMenuButtonEl(),this.menuButtonEl=o,this.setTooltipReferenceElement(),o&&(o.active=e,o.setAttribute("aria-controls",n),o.setAttribute("aria-expanded",x(e)),o.setAttribute("aria-haspopup","true"),o.id||(o.id=t),o.label||(o.label=i),o.text||(o.text=i),o.addEventListener("click",this.menuButtonClick),o.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:t}=this;t&&(t.removeEventListener("click",this.menuButtonClick),t.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=t=>{const n=t.target.assignedElements({flatten:!0}).filter(e=>e==null?void 0:e.matches("calcite-action"));this.slottedMenuButtonEl=n[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=t=>{this.defaultMenuButtonEl=t,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=()=>{this.toggleOpen()},this.updateTooltip=t=>{const n=t.target.assignedElements({flatten:!0}).filter(e=>e==null?void 0:e.matches("calcite-tooltip"));this.tooltipEl=n[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:t,expanded:n,menuButtonEl:e,open:i}=this;t&&(t.referenceElement=!n&&!i?e:null)},this.updateAction=(t,n)=>{const{guid:e,activeMenuItemIndex:i}=this,o=`${e}-action-${n}`;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=o),t.toggleAttribute(w,n===i)},this.updateActions=t=>{t==null||t.forEach(this.updateAction)},this.handleDefaultSlotChange=t=>{const n=t.target.assignedElements({flatten:!0}).reduce((e,i)=>i!=null&&i.matches("calcite-action")?(e.push(i),e):i!=null&&i.matches("calcite-action-group")?e.concat(Array.from(i.querySelectorAll("calcite-action"))):e,[]);this.actionElements=n.filter(e=>!e.disabled&&!e.hidden)},this.menuButtonKeyDown=t=>{const{key:n}=t,{actionElements:e,activeMenuItemIndex:i,open:o}=this;if(e.length){if(b(n)){if(t.preventDefault(),!o){this.toggleOpen();return}const a=e[i];a?a.click():this.toggleOpen(!1)}if(n==="Tab"){this.open=!1;return}if(n==="Escape"){this.toggleOpen(!1),t.preventDefault();return}this.handleActionNavigation(t,n,e)}},this.handleActionNavigation=(t,n,e)=>{if(!this.isValidKey(n,P))return;if(t.preventDefault(),!this.open){this.toggleOpen(),(n==="Home"||n==="ArrowDown")&&(this.activeMenuItemIndex=0),(n==="End"||n==="ArrowUp")&&(this.activeMenuItemIndex=e.length-1);return}n==="Home"&&(this.activeMenuItemIndex=0),n==="End"&&(this.activeMenuItemIndex=e.length-1);const i=this.activeMenuItemIndex;n==="ArrowUp"&&(this.activeMenuItemIndex=r(Math.max(i-1,-1),e.length)),n==="ArrowDown"&&(this.activeMenuItemIndex=r(i+1,e.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(t=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=t},this.handlePopoverOpen=()=>{this.open=!0},this.handlePopoverClose=()=>{this.open=!1},this.appearance="solid",this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}connectedCallback(){this.connectMenuButtonEl()}componentWillLoad(){B(this)}componentDidLoad(){A(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(s){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=s),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){return await C(this),I(this.menuButtonEl)}renderMenuButton(){const{appearance:s,label:t,scale:n,expanded:e}=this;return l("slot",{name:u.trigger,onSlotchange:this.setMenuButtonEl},l("calcite-action",{appearance:s,class:d.defaultTrigger,icon:O.menu,scale:n,text:t,textEnabled:e,ref:this.setDefaultMenuButtonEl}))}renderMenuItems(){const{actionElements:s,activeMenuItemIndex:t,open:n,menuId:e,menuButtonEl:i,label:o,placement:a,overlayPositioning:h,flipPlacements:p}=this,c=s[t],m=(c==null?void 0:c.id)||null;return l("calcite-popover",{autoClose:!0,flipPlacements:p,focusTrapDisabled:!0,label:o,offsetDistance:0,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,open:n,overlayPositioning:h,placement:a,pointerDisabled:!0,referenceElement:i},l("div",{"aria-activedescendant":m,"aria-labelledby":i==null?void 0:i.id,class:d.menu,id:e,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},l("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return l(E,null,this.renderMenuButton(),this.renderMenuItems(),l("slot",{name:u.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(s,t){return!!t.find(n=>n===s)}get el(){return v(this)}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}};S.style=D;export{S as calcite_action_menu};
