import{g as B}from"./guid-617f6e1b-DQtJl1SZ.js";import{bS as C}from"./index-BS4ejk0L.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 *//*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var A=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],h=A.join(","),I=typeof Element>"u",f=I?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,g=!I&&Element.prototype.getRootNode?function(r){var t;return r==null||(t=r.getRootNode)===null||t===void 0?void 0:t.call(r)}:function(r){return r==null?void 0:r.ownerDocument},b=function r(t,e){var a;e===void 0&&(e=!0);var n=t==null||(a=t.getAttribute)===null||a===void 0?void 0:a.call(t,"inert"),i=n===""||n==="true",u=i||e&&t&&r(t.parentNode);return u},M=function(t){var e,a=t==null||(e=t.getAttribute)===null||e===void 0?void 0:e.call(t,"contenteditable");return a===""||a==="true"},E=function(t,e,a){if(b(t))return[];var n=Array.prototype.slice.apply(t.querySelectorAll(h));return e&&f.call(t,h)&&n.unshift(t),n=n.filter(a),n},p=function r(t,e,a){for(var n=[],i=Array.from(t);i.length;){var u=i.shift();if(!b(u,!1))if(u.tagName==="SLOT"){var l=u.assignedElements(),s=l.length?l:u.children,o=r(s,!0,a);a.flatten?n.push.apply(n,o):n.push({scopeParent:u,candidates:o})}else{var d=f.call(u,h);d&&a.filter(u)&&(e||!t.includes(u))&&n.push(u);var c=u.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(u),k=!b(c,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(u));if(c&&k){var T=r(c===!0?u.children:c.children,!0,a);a.flatten?n.push.apply(n,T):n.push({scopeParent:u,candidates:T})}else i.unshift.apply(i,u.children)}}return n},x=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},N=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||M(t))&&!x(t)?0:t.tabIndex},L=function(t,e){var a=N(t);return a<0&&e&&!x(t)?0:a},P=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},R=function(t){return t.tagName==="INPUT"},$=function(t){return R(t)&&t.type==="hidden"},U=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(a){return a.tagName==="SUMMARY"});return e},j=function(t,e){for(var a=0;a<t.length;a++)if(t[a].checked&&t[a].form===e)return t[a]},G=function(t){if(!t.name)return!0;var e=t.form||g(t),a=function(l){return e.querySelectorAll('input[type="radio"][name="'+l+'"]')},n;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")n=a(window.CSS.escape(t.name));else try{n=a(t.name)}catch(u){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",u.message),!1}var i=j(n,t.form);return!i||i===t},z=function(t){return R(t)&&t.type==="radio"},W=function(t){return z(t)&&!G(t)},X=function(t){var e,a=t&&g(t),n=(e=a)===null||e===void 0?void 0:e.host,i=!1;if(a&&a!==t){var u,l,s;for(i=!!((u=n)!==null&&u!==void 0&&(l=u.ownerDocument)!==null&&l!==void 0&&l.contains(n)||t!=null&&(s=t.ownerDocument)!==null&&s!==void 0&&s.contains(t));!i&&n;){var o,d,c;a=g(n),n=(o=a)===null||o===void 0?void 0:o.host,i=!!((d=n)!==null&&d!==void 0&&(c=d.ownerDocument)!==null&&c!==void 0&&c.contains(n))}}return i},w=function(t){var e=t.getBoundingClientRect(),a=e.width,n=e.height;return a===0&&n===0},Y=function(t,e){var a=e.displayCheck,n=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=f.call(t,"details>summary:first-of-type"),u=i?t.parentElement:t;if(f.call(u,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof n=="function"){for(var l=t;t;){var s=t.parentElement,o=g(t);if(s&&!s.shadowRoot&&n(s)===!0)return w(t);t.assignedSlot?t=t.assignedSlot:!s&&o!==t.ownerDocument?t=o.host:t=s}t=l}if(X(t))return!t.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return w(t);return!1},Z=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var a=0;a<e.children.length;a++){var n=e.children.item(a);if(n.tagName==="LEGEND")return f.call(e,"fieldset[disabled] *")?!0:!n.contains(t)}return!0}e=e.parentElement}return!1},y=function(t,e){return!(e.disabled||b(e)||$(e)||Y(e,t)||U(e)||Z(e))},S=function(t,e){return!(W(e)||N(e)<0||!y(t,e))},H=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},K=function r(t){var e=[],a=[];return t.forEach(function(n,i){var u=!!n.scopeParent,l=u?n.scopeParent:n,s=L(l,u),o=u?r(n.candidates):l;s===0?u?e.push.apply(e,o):e.push(l):a.push({documentOrder:i,tabIndex:s,item:n,isScope:u,content:o})}),a.sort(P).reduce(function(n,i){return i.isScope?n.push.apply(n,i.content):n.push(i.content),n},[]).concat(e)},J=function(t,e){e=e||{};var a;return e.getShadowRoot?a=p([t],e.includeContainer,{filter:S.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:H}):a=E(t,e.includeContainer,S.bind(null,e)),K(a)},dt=function(t,e){e=e||{};var a;return e.getShadowRoot?a=p([t],e.includeContainer,{filter:y.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):a=E(t,e.includeContainer,y.bind(null,e)),a},vt=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return f.call(t,h)===!1?!1:S(e,t)},Q=A.concat("iframe").join(","),ht=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return f.call(t,Q)===!1?!1:y(e,t)};const V={getShadowRoot:!0};function gt(r){return r?r.id=r.id||`${r.tagName.toLowerCase()}-${B()}`:""}function bt(r){return Array.isArray(r)?r:Array.from(r)}function yt(r){const t=O(r,`.${C.darkMode}, .${C.lightMode}`);return t!=null&&t.classList.contains("calcite-mode-dark")?"dark":"light"}function St(r){const t="dir",e=`[${t}]`,a=O(r,e);return a?a.getAttribute(t):"ltr"}function mt(r){return r?parseFloat(getComputedStyle(r).inlineSize):0}function m(r){return r.getRootNode()}function Tt(r){const t=m(r);return"host"in t?t:null}function Ct(r,t){if(!r)return 0;const a=document.createElement("canvas").getContext("2d");return a.font=t,a.measureText(r).width}function F(r){return r.host||null}function wt(r,{selector:t,id:e}){function a(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);const i=m(n),u=e?"getElementById"in i?i.getElementById(e):null:t?i.querySelector(t):null,l=F(i);return u||(l?a(l):null)}return a(r)}function O(r,t){function e(a){return a?a.closest(t)||e(F(m(a))):null}return e(r)}function _(r,t){return D(r,t)}function D(r,t){if(!r)return;const e=t(r);if(e!==void 0)return e;const{parentNode:a}=r;return D(a instanceof ShadowRoot?a.host:a,t)}function At(r,t){return!!_(t,e=>e===r?!0:void 0)}function tt(r){return typeof(r==null?void 0:r.setFocus)=="function"}async function rt(r){if(r)return tt(r)?r.setFocus():r.focus()}function et(r){if(r)return J(r,V)[0]??r}function It(r){var t;(t=et(r))==null||t.focus()}const v=":not([slot])";function Et(r,t,e){t&&!Array.isArray(t)&&typeof t!="string"&&(e=t,t=null);const a=t?Array.isArray(t)?t.map(n=>`[slot="${n}"]`).join(","):`[slot="${t}"]`:v;return e!=null&&e.all?at(r,a,e):nt(r,a,e)}function q(r,t){return r?Array.from(r.children||[]).filter(e=>e==null?void 0:e.matches(t)):[]}function at(r,t,e){let a=t===v?q(r,v):Array.from(r.querySelectorAll(t));a=e&&e.direct===!1?a:a.filter(i=>i.parentElement===r),a=e!=null&&e.matches?a.filter(i=>i==null?void 0:i.matches(e.matches)):a;const n=e==null?void 0:e.selector;return n?a.map(i=>Array.from(i.querySelectorAll(n))).reduce((i,u)=>[...i,...u],[]).filter(i=>!!i):a}function nt(r,t,e){let a=t===v?q(r,v)[0]||null:r.querySelector(t);a=e&&e.direct===!1||(a==null?void 0:a.parentElement)===r?a:null,a=e!=null&&e.matches?a!=null&&a.matches(e.matches)?a:null:a;const n=e==null?void 0:e.selector;return n?a==null?void 0:a.querySelector(n):a}function pt(r,t){return Array.from(r.children).filter(e=>e.matches(t))}function xt(r,t,e){if(typeof t=="string"&&t!=="")return t;if(t==="")return r[e]}function Nt(r,t){return!(t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top)}function Rt(r){return(!!r).toString()}function Ft(r){return st(r)||ut(r)}function it(r){return lt(r).filter(t=>t.nodeType===Node.TEXT_NODE).map(t=>t.textContent).join("").trim()}function ut(r){return!!it(r)}function lt(r){return r.target.assignedNodes({flatten:!0})}function st(r){return!!ot(r).length}function ot(r){return r.target.assignedElements({flatten:!0})}function Ot(r){return!!(r.isPrimary&&r.button===0)}function Dt(r){return r.detail===0}const qt=(r,t,e,a=!0)=>{const n=r.indexOf(t),i=n===0,u=n===r.length-1;a&&(e=e==="previous"&&i?"last":e==="next"&&u?"first":e);let l;return e==="previous"?l=r[n-1]||r[a?r.length-1:n]:e==="next"?l=r[n+1]||r[a?0:n]:e==="last"?l=r[r.length-1]:l=r[0],rt(l),l};function kt(r,t){if(r.parentNode!==t.parentNode)return!1;const e=Array.from(r.parentNode.children);return e.indexOf(r)<e.indexOf(t)}export{bt as A,pt as B,mt as C,Ct as D,et as E,O as a,st as b,At as c,rt as d,xt as e,It as f,St as g,Et as h,yt as i,kt as j,qt as k,Ot as l,V as m,ht as n,J as o,dt as p,wt as q,vt as r,ot as s,Rt as t,N as u,Nt as v,gt as w,Dt as x,Ft as y,Tt as z};