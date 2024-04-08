/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 *//**!
 * Sortable 1.15.1
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,o)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ue(Object(n),!0).forEach(function(o){Fe(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Mt(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Mt=function(t){return typeof t}:Mt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mt(e)}function Fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},q.apply(this,arguments)}function Re(e,t){if(e==null)return{};var n={},o=Object.keys(e),i,r;for(r=0;r<o.length;r++)i=o[r],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Xe(e,t){if(e==null)return{};var n=Re(e,t),o,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var Ye="1.15.1";function $(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var V=$(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Ct=$(/Edge/i),fe=$(/firefox/i),yt=$(/safari/i)&&!$(/chrome/i)&&!$(/android/i),be=$(/iP(ad|od|hone)/i),Ee=$(/chrome/i)&&$(/android/i),we={capture:!1,passive:!1};function E(e,t,n){e.addEventListener(t,n,!V&&we)}function b(e,t,n){e.removeEventListener(t,n,!V&&we)}function kt(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function ke(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function W(e,t,n,o){if(e){n=n||document;do{if(t!=null&&(t[0]===">"?e.parentNode===n&&kt(e,t):kt(e,t))||o&&e===n)return e;if(e===n)break}while(e=ke(e))}return null}var de=/\s+/g;function F(e,t,n){if(e&&t)if(e.classList)e.classList[n?"add":"remove"](t);else{var o=(" "+e.className+" ").replace(de," ").replace(" "+t+" "," ");e.className=(o+(n?" "+t:"")).replace(de," ")}}function h(e,t,n){var o=e&&e.style;if(o){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(n=e.currentStyle),t===void 0?n:n[t];!(t in o)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),o[t]=n+(typeof n=="string"?"":"px")}}function dt(e,t){var n="";if(typeof e=="string")n=e;else do{var o=h(e,"transform");o&&o!=="none"&&(n=o+" "+n)}while(!t&&(e=e.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function ye(e,t,n){if(e){var o=e.getElementsByTagName(t),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function L(){var e=document.scrollingElement;return e||document.documentElement}function C(e,t,n,o,i){if(!(!e.getBoundingClientRect&&e!==window)){var r,a,l,s,u,c,d;if(e!==window&&e.parentNode&&e!==L()?(r=e.getBoundingClientRect(),a=r.top,l=r.left,s=r.bottom,u=r.right,c=r.height,d=r.width):(a=0,l=0,s=window.innerHeight,u=window.innerWidth,c=window.innerHeight,d=window.innerWidth),(t||n)&&e!==window&&(i=i||e.parentNode,!V))do if(i&&i.getBoundingClientRect&&(h(i,"transform")!=="none"||n&&h(i,"position")!=="static")){var m=i.getBoundingClientRect();a-=m.top+parseInt(h(i,"border-top-width")),l-=m.left+parseInt(h(i,"border-left-width")),s=a+r.height,u=l+r.width;break}while(i=i.parentNode);if(o&&e!==window){var y=dt(i||e),v=y&&y.a,w=y&&y.d;y&&(a/=w,l/=v,d/=v,c/=w,s=a+c,u=l+d)}return{top:a,left:l,bottom:s,right:u,width:d,height:c}}}function De(e){var t=C(e),n=parseInt(h(e,"padding-left")),o=parseInt(h(e,"padding-top")),i=parseInt(h(e,"padding-right")),r=parseInt(h(e,"padding-bottom"));return t.top+=o+parseInt(h(e,"border-top-width")),t.left+=n+parseInt(h(e,"border-left-width")),t.width=e.clientWidth-n-i,t.height=e.clientHeight-o-r,t.bottom=t.top+t.height,t.right=t.left+t.width,t}function ce(e,t,n){for(var o=tt(e,!0),i=C(e)[t];o;){var r=C(o)[n],a=void 0;if(n==="top"||n==="left"?a=i>=r:a=i<=r,!a)return o;if(o===L())break;o=tt(o,!1)}return!1}function ct(e,t,n,o){for(var i=0,r=0,a=e.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==p.ghost&&(o||a[r]!==p.dragged)&&W(a[r],n.draggable,e,!1)){if(i===t)return a[r];i++}r++}return null}function re(e,t){for(var n=e.lastElementChild;n&&(n===p.ghost||h(n,"display")==="none"||t&&!kt(n,t));)n=n.previousElementSibling;return n||null}function Y(e,t){var n=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==p.clone&&(!t||kt(e,t))&&n++;return n}function he(e){var t=0,n=0,o=L();if(e)do{var i=dt(e),r=i.a,a=i.d;t+=e.scrollLeft*r,n+=e.scrollTop*a}while(e!==o&&(e=e.parentNode));return[t,n]}function Be(e,t){for(var n in e)if(e.hasOwnProperty(n)){for(var o in t)if(t.hasOwnProperty(o)&&t[o]===e[n][o])return Number(n)}return-1}function tt(e,t){if(!e||!e.getBoundingClientRect)return L();var n=e,o=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=h(n);if(n.clientWidth<n.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return L();if(o||t)return n;o=!0}}while(n=n.parentNode);return L()}function Ge(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function jt(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Dt;function Se(e,t){return function(){if(!Dt){var n=arguments,o=this;n.length===1?e.call(o,n[0]):e.apply(o,n),Dt=setTimeout(function(){Dt=void 0},t)}}}function He(){clearTimeout(Dt),Dt=void 0}function _e(e,t,n){e.scrollLeft+=t,e.scrollTop+=n}function Te(e){var t=window.Polymer,n=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):n?n(e).clone(!0)[0]:e.cloneNode(!0)}var X="Sortable"+new Date().getTime();function We(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var o=[].slice.call(this.el.children);o.forEach(function(i){if(!(h(i,"display")==="none"||i===p.ghost)){e.push({target:i,rect:C(i)});var r=z({},e[e.length-1].rect);if(i.thisAnimationDuration){var a=dt(i,!0);a&&(r.top-=a.f,r.left-=a.e)}i.fromRect=r}})}},addAnimationState:function(o){e.push(o)},removeAnimationState:function(o){e.splice(Be(e,{target:o}),1)},animateAll:function(o){var i=this;if(!this.options.animation){clearTimeout(t),typeof o=="function"&&o();return}var r=!1,a=0;e.forEach(function(l){var s=0,u=l.target,c=u.fromRect,d=C(u),m=u.prevFromRect,y=u.prevToRect,v=l.rect,w=dt(u,!0);w&&(d.top-=w.f,d.left-=w.e),u.toRect=d,u.thisAnimationDuration&&jt(m,d)&&!jt(c,d)&&(v.top-d.top)/(v.left-d.left)===(c.top-d.top)/(c.left-d.left)&&(s=ze(v,m,y,i.options)),jt(d,c)||(u.prevFromRect=c,u.prevToRect=d,s||(s=i.options.animation),i.animate(u,v,d,s)),s&&(r=!0,a=Math.max(a,s),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},s),u.thisAnimationDuration=s)}),clearTimeout(t),r?t=setTimeout(function(){typeof o=="function"&&o()},a):typeof o=="function"&&o(),e=[]},animate:function(o,i,r,a){if(a){h(o,"transition",""),h(o,"transform","");var l=dt(this.el),s=l&&l.a,u=l&&l.d,c=(i.left-r.left)/(s||1),d=(i.top-r.top)/(u||1);o.animatingX=!!c,o.animatingY=!!d,h(o,"transform","translate3d("+c+"px,"+d+"px,0)"),this.forRepaintDummy=Le(o),h(o,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),h(o,"transform","translate3d(0,0,0)"),typeof o.animated=="number"&&clearTimeout(o.animated),o.animated=setTimeout(function(){h(o,"transition",""),h(o,"transform",""),o.animated=!1,o.animatingX=!1,o.animatingY=!1},a)}}}}function Le(e){return e.offsetWidth}function ze(e,t,n,o){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-n.top,2)+Math.pow(t.left-n.left,2))*o.animation}var lt=[],Ut={initializeByDefault:!0},Ot={mount:function(t){for(var n in Ut)Ut.hasOwnProperty(n)&&!(n in t)&&(t[n]=Ut[n]);lt.forEach(function(o){if(o.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),lt.push(t)},pluginEvent:function(t,n,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var r=t+"Global";lt.forEach(function(a){n[a.pluginName]&&(n[a.pluginName][r]&&n[a.pluginName][r](z({sortable:n},o)),n.options[a.pluginName]&&n[a.pluginName][t]&&n[a.pluginName][t](z({sortable:n},o)))})},initializePlugins:function(t,n,o,i){lt.forEach(function(l){var s=l.pluginName;if(!(!t.options[s]&&!l.initializeByDefault)){var u=new l(t,n,t.options);u.sortable=t,u.options=t.options,t[s]=u,q(o,u.defaults)}});for(var r in t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);typeof a<"u"&&(t.options[r]=a)}},getEventProperties:function(t,n){var o={};return lt.forEach(function(i){typeof i.eventProperties=="function"&&q(o,i.eventProperties.call(n[i.pluginName],t))}),o},modifyOption:function(t,n,o){var i;return lt.forEach(function(r){t[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[n]=="function"&&(i=r.optionListeners[n].call(t[r.pluginName],o))}),i}};function je(e){var t=e.sortable,n=e.rootEl,o=e.name,i=e.targetEl,r=e.cloneEl,a=e.toEl,l=e.fromEl,s=e.oldIndex,u=e.newIndex,c=e.oldDraggableIndex,d=e.newDraggableIndex,m=e.originalEvent,y=e.putSortable,v=e.extraEventProperties;if(t=t||n&&n[X],!!t){var w,k=t.options,j="on"+o.charAt(0).toUpperCase()+o.substr(1);window.CustomEvent&&!V&&!Ct?w=new CustomEvent(o,{bubbles:!0,cancelable:!0}):(w=document.createEvent("Event"),w.initEvent(o,!0,!0)),w.to=a||n,w.from=l||n,w.item=i||n,w.clone=r,w.oldIndex=s,w.newIndex=u,w.oldDraggableIndex=c,w.newDraggableIndex=d,w.originalEvent=m,w.pullMode=y?y.lastPutMode:void 0;var A=z(z({},v),Ot.getEventProperties(o,t));for(var B in A)w[B]=A[B];n&&n.dispatchEvent(w),k[j]&&k[j].call(t,w)}}var Ue=["evt"],N=function(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=o.evt,r=Xe(o,Ue);Ot.pluginEvent.bind(p)(t,n,z({dragEl:f,parentEl:_,ghostEl:g,rootEl:D,nextEl:at,lastDownEl:Ft,cloneEl:S,cloneHidden:J,dragStarted:bt,putSortable:O,activeSortable:p.active,originalEvent:i,oldIndex:ft,oldDraggableIndex:St,newIndex:R,newDraggableIndex:Q,hideGhostForTarget:Ae,unhideGhostForTarget:Pe,cloneNowHidden:function(){J=!0},cloneNowShown:function(){J=!1},dispatchSortableEvent:function(l){P({sortable:n,name:l,originalEvent:i})}},r))};function P(e){je(z({putSortable:O,cloneEl:S,targetEl:f,rootEl:D,oldIndex:ft,oldDraggableIndex:St,newIndex:R,newDraggableIndex:Q},e))}var f,_,g,D,at,Ft,S,J,ft,R,St,Q,At,O,ut=!1,Bt=!1,Gt=[],it,G,$t,qt,pe,ge,bt,st,_t,Tt=!1,Pt=!1,Rt,I,Vt=[],te=!1,Ht=[],Lt=typeof document<"u",Nt=be,me=Ct||V?"cssFloat":"float",$e=Lt&&!Ee&&!be&&"draggable"in document.createElement("div"),Ce=function(){if(Lt){if(V)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),Oe=function(t,n){var o=h(t),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),r=ct(t,0,n),a=ct(t,1,n),l=r&&h(r),s=a&&h(a),u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+C(r).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+C(a).width;if(o.display==="flex")return o.flexDirection==="column"||o.flexDirection==="column-reverse"?"vertical":"horizontal";if(o.display==="grid")return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&l.float&&l.float!=="none"){var d=l.float==="left"?"left":"right";return a&&(s.clear==="both"||s.clear===d)?"vertical":"horizontal"}return r&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||u>=i&&o[me]==="none"||a&&o[me]==="none"&&u+c>i)?"vertical":"horizontal"},qe=function(t,n,o){var i=o?t.left:t.top,r=o?t.right:t.bottom,a=o?t.width:t.height,l=o?n.left:n.top,s=o?n.right:n.bottom,u=o?n.width:n.height;return i===l||r===s||i+a/2===l+u/2},Ve=function(t,n){var o;return Gt.some(function(i){var r=i[X].options.emptyInsertThreshold;if(!(!r||re(i))){var a=C(i),l=t>=a.left-r&&t<=a.right+r,s=n>=a.top-r&&n<=a.bottom+r;if(l&&s)return o=i}}),o},Ie=function(t){function n(r,a){return function(l,s,u,c){var d=l.options.group.name&&s.options.group.name&&l.options.group.name===s.options.group.name;if(r==null&&(a||d))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return n(r(l,s,u,c),a)(l,s,u,c);var m=(a?l:s).options.group.name;return r===!0||typeof r=="string"&&r===m||r.join&&r.indexOf(m)>-1}}var o={},i=t.group;(!i||Mt(i)!="object")&&(i={name:i}),o.name=i.name,o.checkPull=n(i.pull,!0),o.checkPut=n(i.put),o.revertClone=i.revertClone,t.group=o},Ae=function(){!Ce&&g&&h(g,"display","none")},Pe=function(){!Ce&&g&&h(g,"display","")};Lt&&!Ee&&document.addEventListener("click",function(e){if(Bt)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Bt=!1,!1},!0);var rt=function(t){if(f){t=t.touches?t.touches[0]:t;var n=Ve(t.clientX,t.clientY);if(n){var o={};for(var i in t)t.hasOwnProperty(i)&&(o[i]=t[i]);o.target=o.rootEl=n,o.preventDefault=void 0,o.stopPropagation=void 0,n[X]._onDragOver(o)}}},Ke=function(t){f&&f.parentNode[X]._isOutsideThisEl(t.target)};function p(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=q({},t),e[X]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Oe(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,l){a.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:p.supportPointer!==!1&&"PointerEvent"in window&&!yt,emptyInsertThreshold:5};Ot.initializePlugins(this,e,n);for(var o in n)!(o in t)&&(t[o]=n[o]);Ie(t);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=t.forceFallback?!1:$e,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?E(e,"pointerdown",this._onTapStart):(E(e,"mousedown",this._onTapStart),E(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(E(e,"dragover",this),E(e,"dragenter",this)),Gt.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),q(this,We())}p.prototype={constructor:p,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(st=null)},_getDirection:function(t,n){return typeof this.options.direction=="function"?this.options.direction.call(this,t,n,f):this.options.direction},_onTapStart:function(t){if(t.cancelable){var n=this,o=this.el,i=this.options,r=i.preventOnFilter,a=t.type,l=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,s=(l||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=i.filter;if(rn(o),!f&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||i.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&yt&&s&&s.tagName.toUpperCase()==="SELECT")&&(s=W(s,i.draggable,o,!1),!(s&&s.animated)&&Ft!==s)){if(ft=Y(s),St=Y(s,i.draggable),typeof c=="function"){if(c.call(this,t,s,this)){P({sortable:n,rootEl:u,name:"filter",targetEl:s,toEl:o,fromEl:o}),N("filter",n,{evt:t}),r&&t.cancelable&&t.preventDefault();return}}else if(c&&(c=c.split(",").some(function(d){if(d=W(u,d.trim(),o,!1),d)return P({sortable:n,rootEl:d,name:"filter",targetEl:s,fromEl:o,toEl:o}),N("filter",n,{evt:t}),!0}),c)){r&&t.cancelable&&t.preventDefault();return}i.handle&&!W(u,i.handle,o,!1)||this._prepareDragStart(t,l,s)}}},_prepareDragStart:function(t,n,o){var i=this,r=i.el,a=i.options,l=r.ownerDocument,s;if(o&&!f&&o.parentNode===r){var u=C(o);if(D=r,f=o,_=f.parentNode,at=f.nextSibling,Ft=o,At=a.group,p.dragged=f,it={target:f,clientX:(n||t).clientX,clientY:(n||t).clientY},pe=it.clientX-u.left,ge=it.clientY-u.top,this._lastX=(n||t).clientX,this._lastY=(n||t).clientY,f.style["will-change"]="all",s=function(){if(N("delayEnded",i,{evt:t}),p.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!fe&&i.nativeDraggable&&(f.draggable=!0),i._triggerDragStart(t,n),P({sortable:i,name:"choose",originalEvent:t}),F(f,a.chosenClass,!0)},a.ignore.split(",").forEach(function(c){ye(f,c.trim(),Kt)}),E(l,"dragover",rt),E(l,"mousemove",rt),E(l,"touchmove",rt),E(l,"mouseup",i._onDrop),E(l,"touchend",i._onDrop),E(l,"touchcancel",i._onDrop),fe&&this.nativeDraggable&&(this.options.touchStartThreshold=4,f.draggable=!0),N("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(Ct||V))){if(p.eventCanceled){this._onDrop();return}E(l,"mouseup",i._disableDelayedDrag),E(l,"touchend",i._disableDelayedDrag),E(l,"touchcancel",i._disableDelayedDrag),E(l,"mousemove",i._delayedDragTouchMoveHandler),E(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&E(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(s,a.delay)}else s()}},_delayedDragTouchMoveHandler:function(t){var n=t.touches?t.touches[0]:t;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){f&&Kt(f),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;b(t,"mouseup",this._disableDelayedDrag),b(t,"touchend",this._disableDelayedDrag),b(t,"touchcancel",this._disableDelayedDrag),b(t,"mousemove",this._delayedDragTouchMoveHandler),b(t,"touchmove",this._delayedDragTouchMoveHandler),b(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,n){n=n||t.pointerType=="touch"&&t,!this.nativeDraggable||n?this.options.supportPointer?E(document,"pointermove",this._onTouchMove):n?E(document,"touchmove",this._onTouchMove):E(document,"mousemove",this._onTouchMove):(E(f,"dragend",this),E(D,"dragstart",this._onDragStart));try{document.selection?Xt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,n){if(ut=!1,D&&f){N("dragStarted",this,{evt:n}),this.nativeDraggable&&E(document,"dragover",Ke);var o=this.options;!t&&F(f,o.dragClass,!1),F(f,o.ghostClass,!0),p.active=this,t&&this._appendGhost(),P({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(G){this._lastX=G.clientX,this._lastY=G.clientY,Ae();for(var t=document.elementFromPoint(G.clientX,G.clientY),n=t;t&&t.shadowRoot;){t=t.shadowRoot.elementFromPoint(G.clientX,G.clientY);const i=t.getRootNode().host;if(i&&(t=i),t===n)break;n=t}if(f.parentNode[X]._isOutsideThisEl(t),n)do{if(n[X]){var o=void 0;if(o=n[X]._onDragOver({clientX:G.clientX,clientY:G.clientY,target:t,rootEl:n}),o&&!this.options.dragoverBubble)break}t=n}while(n=n.parentNode);Pe()}},_onTouchMove:function(t){if(it){var n=this.options,o=n.fallbackTolerance,i=n.fallbackOffset,r=t.touches?t.touches[0]:t,a=g&&dt(g,!0),l=g&&a&&a.a,s=g&&a&&a.d,u=Nt&&I&&he(I),c=(r.clientX-it.clientX+i.x)/(l||1)+(u?u[0]-Vt[0]:0)/(l||1),d=(r.clientY-it.clientY+i.y)/(s||1)+(u?u[1]-Vt[1]:0)/(s||1);if(!p.active&&!ut){if(o&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<o)return;this._onDragStart(t,!0)}if(g){a?(a.e+=c-($t||0),a.f+=d-(qt||0)):a={a:1,b:0,c:0,d:1,e:c,f:d};var m="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");h(g,"webkitTransform",m),h(g,"mozTransform",m),h(g,"msTransform",m),h(g,"transform",m),$t=c,qt=d,G=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!g){var t=this.options.fallbackOnBody?document.body:D,n=C(f,!0,Nt,!0,t),o=this.options;if(Nt){for(I=t;h(I,"position")==="static"&&h(I,"transform")==="none"&&I!==document;)I=I.parentNode;I!==document.body&&I!==document.documentElement?(I===document&&(I=L()),n.top+=I.scrollTop,n.left+=I.scrollLeft):I=L(),Vt=he(I)}g=f.cloneNode(!0),F(g,o.ghostClass,!1),F(g,o.fallbackClass,!0),F(g,o.dragClass,!0),h(g,"transition",""),h(g,"transform",""),h(g,"box-sizing","border-box"),h(g,"margin",0),h(g,"top",n.top),h(g,"left",n.left),h(g,"width",n.width),h(g,"height",n.height),h(g,"opacity","0.8"),h(g,"position",Nt?"absolute":"fixed"),h(g,"zIndex","100000"),h(g,"pointerEvents","none"),p.ghost=g,t.appendChild(g),h(g,"transform-origin",pe/parseInt(g.style.width)*100+"% "+ge/parseInt(g.style.height)*100+"%")}},_onDragStart:function(t,n){var o=this,i=t.dataTransfer,r=o.options;if(N("dragStart",this,{evt:t}),p.eventCanceled){this._onDrop();return}N("setupClone",this),p.eventCanceled||(S=Te(f),S.removeAttribute("id"),S.draggable=!1,S.style["will-change"]="",this._hideClone(),F(S,this.options.chosenClass,!1),p.clone=S),o.cloneId=Xt(function(){N("clone",o),!p.eventCanceled&&(o.options.removeCloneOnHide||D.insertBefore(S,f),o._hideClone(),P({sortable:o,name:"clone"}))}),!n&&F(f,r.dragClass,!0),n?(Bt=!0,o._loopId=setInterval(o._emulateDragOver,50)):(b(document,"mouseup",o._onDrop),b(document,"touchend",o._onDrop),b(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(o,i,f)),E(document,"drop",o),h(f,"transform","translateZ(0)")),ut=!0,o._dragStartId=Xt(o._dragStarted.bind(o,n,t)),E(document,"selectstart",o),bt=!0,yt&&h(document.body,"user-select","none")},_onDragOver:function(t){var n=this.el,o=t.target,i,r,a,l=this.options,s=l.group,u=p.active,c=At===s,d=l.sort,m=O||u,y,v=this,w=!1;if(te)return;function k(vt,xe){N(vt,v,z({evt:t,isOwner:c,axis:y?"vertical":"horizontal",revert:a,dragRect:i,targetRect:r,canSort:d,fromSortable:m,target:o,completed:A,onMove:function(se,Me){return xt(D,n,f,i,se,C(se),t,Me)},changed:B},xe))}function j(){k("dragOverAnimationCapture"),v.captureAnimationState(),v!==m&&m.captureAnimationState()}function A(vt){return k("dragOverCompleted",{insertion:vt}),vt&&(c?u._hideClone():u._showClone(v),v!==m&&(F(f,O?O.options.ghostClass:u.options.ghostClass,!1),F(f,l.ghostClass,!0)),O!==v&&v!==p.active?O=v:v===p.active&&O&&(O=null),m===v&&(v._ignoreWhileAnimating=o),v.animateAll(function(){k("dragOverAnimationComplete"),v._ignoreWhileAnimating=null}),v!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(o===f&&!f.animated||o===n&&!o.animated)&&(st=null),!l.dragoverBubble&&!t.rootEl&&o!==document&&(f.parentNode[X]._isOutsideThisEl(t.target),!vt&&rt(t)),!l.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),w=!0}function B(){R=Y(f),Q=Y(f,l.draggable),P({sortable:v,name:"change",toEl:n,newIndex:R,newDraggableIndex:Q,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),o=W(o,l.draggable,n,!0),k("dragOver"),p.eventCanceled)return w;if(f.contains(t.target)||o.animated&&o.animatingX&&o.animatingY||v._ignoreWhileAnimating===o)return A(!1);if(Bt=!1,u&&!l.disabled&&(c?d||(a=_!==D):O===this||(this.lastPutMode=At.checkPull(this,u,f,t))&&s.checkPut(this,u,f,t))){if(y=this._getDirection(t,o)==="vertical",i=C(f),k("dragOverValid"),p.eventCanceled)return w;if(a)return _=D,j(),this._hideClone(),k("revert"),p.eventCanceled||(at?D.insertBefore(f,at):D.appendChild(f)),A(!0);var x=re(n,l.draggable);if(!x||tn(t,y,this)&&!x.animated){if(x===f)return A(!1);if(x&&n===t.target&&(o=x),o&&(r=C(o)),xt(D,n,f,i,o,r,t,!!o)!==!1)return j(),x&&x.nextSibling?n.insertBefore(f,x.nextSibling):n.appendChild(f),_=n,B(),A(!0)}else if(x&&Je(t,y,this)){var et=ct(n,0,l,!0);if(et===f)return A(!1);if(o=et,r=C(o),xt(D,n,f,i,o,r,t,!1)!==!1)return j(),n.insertBefore(f,et),_=n,B(),A(!0)}else if(o.parentNode===n){r=C(o);var H=0,nt,ht=f.parentNode!==n,M=!qe(f.animated&&f.toRect||i,o.animated&&o.toRect||r,y),pt=y?"top":"left",K=ce(o,"top","top")||ce(f,"top","top"),gt=K?K.scrollTop:void 0;st!==o&&(nt=r[pt],Tt=!1,Pt=!M&&l.invertSwap||ht),H=en(t,o,r,y,M?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,Pt,st===o);var U;if(H!==0){var ot=Y(f);do ot-=H,U=_.children[ot];while(U&&(h(U,"display")==="none"||U===g))}if(H===0||U===o)return A(!1);st=o,_t=H;var mt=o.nextElementSibling,Z=!1;Z=H===1;var It=xt(D,n,f,i,o,r,t,Z);if(It!==!1)return(It===1||It===-1)&&(Z=It===1),te=!0,setTimeout(Qe,30),j(),Z&&!mt?n.appendChild(f):o.parentNode.insertBefore(f,Z?mt:o),K&&_e(K,0,gt-K.scrollTop),_=f.parentNode,nt!==void 0&&!Pt&&(Rt=Math.abs(nt-C(o)[pt])),B(),A(!0)}if(n.contains(f))return A(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){b(document,"mousemove",this._onTouchMove),b(document,"touchmove",this._onTouchMove),b(document,"pointermove",this._onTouchMove),b(document,"dragover",rt),b(document,"mousemove",rt),b(document,"touchmove",rt)},_offUpEvents:function(){var t=this.el.ownerDocument;b(t,"mouseup",this._onDrop),b(t,"touchend",this._onDrop),b(t,"pointerup",this._onDrop),b(t,"touchcancel",this._onDrop),b(document,"selectstart",this)},_onDrop:function(t){var n=this.el,o=this.options;if(R=Y(f),Q=Y(f,o.draggable),N("drop",this,{evt:t}),_=f&&f.parentNode,R=Y(f),Q=Y(f,o.draggable),p.eventCanceled){this._nulling();return}ut=!1,Pt=!1,Tt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ee(this.cloneId),ee(this._dragStartId),this.nativeDraggable&&(b(document,"drop",this),b(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),yt&&h(document.body,"user-select",""),h(f,"transform",""),t&&(bt&&(t.cancelable&&t.preventDefault(),!o.dropBubble&&t.stopPropagation()),g&&g.parentNode&&g.parentNode.removeChild(g),(D===_||O&&O.lastPutMode!=="clone")&&S&&S.parentNode&&S.parentNode.removeChild(S),f&&(this.nativeDraggable&&b(f,"dragend",this),Kt(f),f.style["will-change"]="",bt&&!ut&&F(f,O?O.options.ghostClass:this.options.ghostClass,!1),F(f,this.options.chosenClass,!1),P({sortable:this,name:"unchoose",toEl:_,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==_?(R>=0&&(P({rootEl:_,name:"add",toEl:_,fromEl:D,originalEvent:t}),P({sortable:this,name:"remove",toEl:_,originalEvent:t}),P({rootEl:_,name:"sort",toEl:_,fromEl:D,originalEvent:t}),P({sortable:this,name:"sort",toEl:_,originalEvent:t})),O&&O.save()):R!==ft&&R>=0&&(P({sortable:this,name:"update",toEl:_,originalEvent:t}),P({sortable:this,name:"sort",toEl:_,originalEvent:t})),p.active&&((R==null||R===-1)&&(R=ft,Q=St),P({sortable:this,name:"end",toEl:_,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){N("nulling",this),D=f=_=g=at=S=Ft=J=it=G=bt=R=Q=ft=St=st=_t=O=At=p.dragged=p.ghost=p.clone=p.active=null,Ht.forEach(function(t){t.checked=!0}),Ht.length=$t=qt=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":f&&(this._onDragOver(t),Ze(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],n,o=this.el.children,i=0,r=o.length,a=this.options;i<r;i++)n=o[i],W(n,a.draggable,this.el,!1)&&t.push(n.getAttribute(a.dataIdAttr)||on(n));return t},sort:function(t,n){var o={},i=this.el;this.toArray().forEach(function(r,a){var l=i.children[a];W(l,this.options.draggable,i,!1)&&(o[r]=l)},this),n&&this.captureAnimationState(),t.forEach(function(r){o[r]&&(i.removeChild(o[r]),i.appendChild(o[r]))}),n&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,n){return W(t,n||this.options.draggable,this.el,!1)},option:function(t,n){var o=this.options;if(n===void 0)return o[t];var i=Ot.modifyOption(this,t,n);typeof i<"u"?o[t]=i:o[t]=n,t==="group"&&Ie(o)},destroy:function(){N("destroy",this);var t=this.el;t[X]=null,b(t,"mousedown",this._onTapStart),b(t,"touchstart",this._onTapStart),b(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(b(t,"dragover",this),b(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Gt.splice(Gt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!J){if(N("hideClone",this),p.eventCanceled)return;h(S,"display","none"),this.options.removeCloneOnHide&&S.parentNode&&S.parentNode.removeChild(S),J=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(J){if(N("showClone",this),p.eventCanceled)return;f.parentNode==D&&!this.options.group.revertClone?D.insertBefore(S,f):at?D.insertBefore(S,at):D.appendChild(S),this.options.group.revertClone&&this.animate(f,S),h(S,"display",""),J=!1}}};function Ze(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function xt(e,t,n,o,i,r,a,l){var s,u=e[X],c=u.options.onMove,d;return window.CustomEvent&&!V&&!Ct?s=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(s=document.createEvent("Event"),s.initEvent("move",!0,!0)),s.to=t,s.from=e,s.dragged=n,s.draggedRect=o,s.related=i||t,s.relatedRect=r||C(t),s.willInsertAfter=l,s.originalEvent=a,e.dispatchEvent(s),c&&(d=c.call(u,s,a)),d}function Kt(e){e.draggable=!1}function Qe(){te=!1}function Je(e,t,n){var o=C(ct(n.el,0,n.options,!0)),i=De(n.el),r=10;return t?e.clientX<i.left-r||e.clientY<o.top&&e.clientX<o.right:e.clientY<i.top-r||e.clientY<o.bottom&&e.clientX<o.left}function tn(e,t,n){var o=C(re(n.el,n.options.draggable)),i=De(n.el),r=10;return t?e.clientX>i.right+r||e.clientY>o.bottom&&e.clientX>o.left:e.clientY>i.bottom+r||e.clientX>o.right&&e.clientY>o.top}function en(e,t,n,o,i,r,a,l){var s=o?e.clientY:e.clientX,u=o?n.height:n.width,c=o?n.top:n.left,d=o?n.bottom:n.right,m=!1;if(!a){if(l&&Rt<u*i){if(!Tt&&(_t===1?s>c+u*r/2:s<d-u*r/2)&&(Tt=!0),Tt)m=!0;else if(_t===1?s<c+Rt:s>d-Rt)return-_t}else if(s>c+u*(1-i)/2&&s<d-u*(1-i)/2)return nn(t)}return m=m||a,m&&(s<c+u*r/2||s>d-u*r/2)?s>c+u/2?1:-1:0}function nn(e){return Y(f)<Y(e)?1:-1}function on(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,o=0;n--;)o+=t.charCodeAt(n);return o.toString(36)}function rn(e){Ht.length=0;for(var t=e.getElementsByTagName("input"),n=t.length;n--;){var o=t[n];o.checked&&Ht.push(o)}}function Xt(e){return setTimeout(e,0)}function ee(e){return clearTimeout(e)}Lt&&E(document,"touchmove",function(e){(p.active||ut)&&e.cancelable&&e.preventDefault()});p.utils={on:E,off:b,css:h,find:ye,is:function(t,n){return!!W(t,n,t,!1)},extend:Ge,throttle:Se,closest:W,toggleClass:F,clone:Te,index:Y,nextTick:Xt,cancelNextTick:ee,detectDirection:Oe,getChild:ct};p.get=function(e){return e[X]};p.mount=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t[0].constructor===Array&&(t=t[0]),t.forEach(function(o){if(!o.prototype||!o.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));o.utils&&(p.utils=z(z({},p.utils),o.utils)),Ot.mount(o)})};p.create=function(e,t){return new p(e,t)};p.version=Ye;var T=[],Et,ne,oe=!1,Zt,Qt,Wt,wt;function an(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(n){var o=n.originalEvent;this.sortable.nativeDraggable?E(document,"dragover",this._handleAutoScroll):this.options.supportPointer?E(document,"pointermove",this._handleFallbackAutoScroll):o.touches?E(document,"touchmove",this._handleFallbackAutoScroll):E(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var o=n.originalEvent;!this.options.dragOverBubble&&!o.rootEl&&this._handleAutoScroll(o)},drop:function(){this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):(b(document,"pointermove",this._handleFallbackAutoScroll),b(document,"touchmove",this._handleFallbackAutoScroll),b(document,"mousemove",this._handleFallbackAutoScroll)),ve(),Yt(),He()},nulling:function(){Wt=ne=Et=oe=wt=Zt=Qt=null,T.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,o){var i=this,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=document.elementFromPoint(r,a);if(Wt=n,o||this.options.forceAutoScrollFallback||Ct||V||yt){Jt(n,this.options,l,o);var s=tt(l,!0);oe&&(!wt||r!==Zt||a!==Qt)&&(wt&&ve(),wt=setInterval(function(){var u=tt(document.elementFromPoint(r,a),!0);u!==s&&(s=u,Yt()),Jt(n,i.options,u,o)},10),Zt=r,Qt=a)}else{if(!this.options.bubbleScroll||tt(l,!0)===L()){Yt();return}Jt(n,this.options,tt(l,!1),!1)}}},q(e,{pluginName:"scroll",initializeByDefault:!0})}function Yt(){T.forEach(function(e){clearInterval(e.pid)}),T=[]}function ve(){clearInterval(wt)}var Jt=Se(function(e,t,n,o){if(t.scroll){var i=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,l=t.scrollSpeed,s=L(),u=!1,c;ne!==n&&(ne=n,Yt(),Et=t.scroll,c=t.scrollFn,Et===!0&&(Et=tt(n,!0)));var d=0,m=Et;do{var y=m,v=C(y),w=v.top,k=v.bottom,j=v.left,A=v.right,B=v.width,x=v.height,et=void 0,H=void 0,nt=y.scrollWidth,ht=y.scrollHeight,M=h(y),pt=y.scrollLeft,K=y.scrollTop;y===s?(et=B<nt&&(M.overflowX==="auto"||M.overflowX==="scroll"||M.overflowX==="visible"),H=x<ht&&(M.overflowY==="auto"||M.overflowY==="scroll"||M.overflowY==="visible")):(et=B<nt&&(M.overflowX==="auto"||M.overflowX==="scroll"),H=x<ht&&(M.overflowY==="auto"||M.overflowY==="scroll"));var gt=et&&(Math.abs(A-i)<=a&&pt+B<nt)-(Math.abs(j-i)<=a&&!!pt),U=H&&(Math.abs(k-r)<=a&&K+x<ht)-(Math.abs(w-r)<=a&&!!K);if(!T[d])for(var ot=0;ot<=d;ot++)T[ot]||(T[ot]={});(T[d].vx!=gt||T[d].vy!=U||T[d].el!==y)&&(T[d].el=y,T[d].vx=gt,T[d].vy=U,clearInterval(T[d].pid),(gt!=0||U!=0)&&(u=!0,T[d].pid=setInterval((function(){o&&this.layer===0&&p.active._onTouchMove(Wt);var mt=T[this.layer].vy?T[this.layer].vy*l:0,Z=T[this.layer].vx?T[this.layer].vx*l:0;typeof c=="function"&&c.call(p.dragged.parentNode[X],Z,mt,e,Wt,T[this.layer].el)!=="continue"||_e(T[this.layer].el,Z,mt)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&m!==s&&(m=tt(m,!1)));oe=u}},30),Ne=function(t){var n=t.originalEvent,o=t.putSortable,i=t.dragEl,r=t.activeSortable,a=t.dispatchSortableEvent,l=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(n){var u=o||r;l();var c=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,d=document.elementFromPoint(c.clientX,c.clientY);s(),u&&!u.el.contains(d)&&(a("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function ae(){}ae.prototype={startIndex:null,dragStart:function(t){var n=t.oldDraggableIndex;this.startIndex=n},onSpill:function(t){var n=t.dragEl,o=t.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=ct(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(n,i):this.sortable.el.appendChild(n),this.sortable.animateAll(),o&&o.animateAll()},drop:Ne};q(ae,{pluginName:"revertOnSpill"});function le(){}le.prototype={onSpill:function(t){var n=t.dragEl,o=t.putSortable,i=o||this.sortable;i.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),i.animateAll()},drop:Ne};q(le,{pluginName:"removeOnSpill"});p.mount(new an);p.mount(le,ae);const zt=new Set,ln={ghostClass:"calcite-sortable--ghost",chosenClass:"calcite-sortable--chosen",dragClass:"calcite-sortable--drag",fallbackClass:"calcite-sortable--fallback"};function cn(e){sn(e),zt.add(e);const t="id",{group:n,handleSelector:o,dragSelector:i}=e;e.sortable=p.create(e.el,{dataIdAttr:t,...ln,...!!i&&{draggable:i},...!!n&&{group:{name:n,...!!e.canPull&&{pull:(r,a,l,{newIndex:s,oldIndex:u})=>e.canPull({toEl:r.el,fromEl:a.el,dragEl:l,newIndex:s,oldIndex:u})},...!!e.canPut&&{put:(r,a,l,{newIndex:s,oldIndex:u})=>e.canPut({toEl:r.el,fromEl:a.el,dragEl:l,newIndex:s,oldIndex:u})}}},handle:o,filter:`${o}[disabled]`,onStart:({from:r,item:a,to:l,newIndex:s,oldIndex:u})=>{ie.active=!0,un(),e.onDragStart({fromEl:r,dragEl:a,toEl:l,newIndex:s,oldIndex:u})},onEnd:({from:r,item:a,to:l,newIndex:s,oldIndex:u})=>{ie.active=!1,fn(),e.onDragEnd({fromEl:r,dragEl:a,toEl:l,newIndex:s,oldIndex:u})},onSort:({from:r,item:a,to:l,newIndex:s,oldIndex:u})=>{e.onDragSort({fromEl:r,dragEl:a,toEl:l,newIndex:s,oldIndex:u})}})}function sn(e){var t;zt.delete(e),(t=e.sortable)==null||t.destroy(),e.sortable=null}const ie={active:!1};function hn(e){return e.dragEnabled&&ie.active}function un(){Array.from(zt).forEach(e=>e.onGlobalDragStart())}function fn(){Array.from(zt).forEach(e=>e.onGlobalDragEnd())}export{sn as a,cn as c,hn as d};
