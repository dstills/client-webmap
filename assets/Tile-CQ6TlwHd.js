import{g as f,y as x,b4 as y,i as S,S as $,kJ as k,cC as C,bK as R,pM as V,pN as j}from"./index-nBWeBKPv.js";import{f as q}from"./quickselect-BhLHWy4r.js";let m=class extends ${constructor(){super(...arguments),this.color=new y([0,255,255]),this.haloOpacity=1,this.fillOpacity=.25,this.multiHighlightEnabled=!1}equals(i){return this.color.equals(i.color)&&(this.haloColor||this.color).equals(i.haloColor||i.color)&&this.haloOpacity===i.haloOpacity&&this.fillOpacity===i.fillOpacity&&this.multiHighlightEnabled===i.multiHighlightEnabled}};f([x({type:y})],m.prototype,"color",void 0),f([x({type:y})],m.prototype,"haloColor",void 0),f([x()],m.prototype,"haloOpacity",void 0),f([x()],m.prototype,"fillOpacity",void 0),f([x()],m.prototype,"multiHighlightEnabled",void 0),m=f([S("esri.views.2d.support.HighlightOptions")],m);const L=m;function b(t,i){if(!(this instanceof b))return new b(t,i);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&(typeof i=="function"?this.toBBox=i:this._initFormat(i)),this.clear()}function A(t,i,n){if(!n)return i.indexOf(t);for(var e=0;e<i.length;e++)if(n(t,i[e]))return e;return-1}function d(t,i){g(t,0,t.children.length,i,t)}function g(t,i,n,e,h){h||(h=p(null)),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(var s,r=i;r<n;r++)s=t.children[r],M(h,t.leaf?e(s):s);return h}function M(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function w(t,i){return t.minX-i.minX}function O(t,i){return t.minY-i.minY}function v(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function B(t){return t.maxX-t.minX+(t.maxY-t.minY)}function D(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function F(t,i){var n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),h=Math.min(t.maxX,i.maxX),s=Math.min(t.maxY,i.maxY);return Math.max(0,h-n)*Math.max(0,s-e)}function _(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function X(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function p(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function I(t,i,n,e,h){for(var s,r=[i,n];r.length;)(n=r.pop())-(i=r.pop())<=e||(s=i+Math.ceil((n-i)/e/2)*e,q(t,s,i,n,h),r.push(i,s,s,n))}b.prototype={all:function(){return this._all(this.data,[])},search:function(t){var i=this.data,n=[],e=this.toBBox;if(!X(t,i))return n;for(var h,s,r,o,a=[];i;){for(h=0,s=i.children.length;h<s;h++)r=i.children[h],X(t,o=i.leaf?e(r):r)&&(i.leaf?n.push(r):_(t,o)?this._all(r,n):a.push(r));i=a.pop()}return n},collides:function(t){var i=this.data,n=this.toBBox;if(!X(t,i))return!1;for(var e,h,s,r,o=[];i;){for(e=0,h=i.children.length;e<h;e++)if(s=i.children[e],X(t,r=i.leaf?n(s):s)){if(i.leaf||_(t,r))return!0;o.push(s)}i=o.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}var e=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){var h=this.data;this.data=e,e=h}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this},insert:function(t){return t!=null&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=p([]),this},remove:function(t,i){if(t==null)return this;for(var n,e,h,s,r=this.data,o=this.toBBox(t),a=[],l=[];r||a.length;){if(r||(r=a.pop(),e=a[a.length-1],n=l.pop(),s=!0),r.leaf&&(h=A(t,r.children,i))!==-1)return r.children.splice(h,1),a.push(r),this._condense(a),this;s||r.leaf||!_(r,o)?e?(n++,r=e.children[n],s=!1):r=null:(a.push(r),l.push(n),n=0,e=r,r=r.children[0])}return this},toBBox:function(t){return t},compareMinX:w,compareMinY:O,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},_build:function(t,i,n,e){var h,s=n-i+1,r=this._maxEntries;if(s<=r)return d(h=p(t.slice(i,n+1)),this.toBBox),h;e||(e=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/Math.pow(r,e-1))),(h=p([])).leaf=!1,h.height=e;var o,a,l,u,c=Math.ceil(s/r),Y=c*Math.ceil(Math.sqrt(r));for(I(t,i,n,Y,this.compareMinX),o=i;o<=n;o+=Y)for(I(t,o,l=Math.min(o+Y-1,n),c,this.compareMinY),a=o;a<=l;a+=c)u=Math.min(a+c-1,l),h.children.push(this._build(t,a,u,e-1));return d(h,this.toBBox),h},_chooseSubtree:function(t,i,n,e){for(var h,s,r,o,a,l,u,c;e.push(i),!i.leaf&&e.length-1!==n;){for(u=c=1/0,h=0,s=i.children.length;h<s;h++)a=v(r=i.children[h]),(l=D(t,r)-a)<c?(c=l,u=a<u?a:u,o=r):l===c&&a<u&&(u=a,o=r);i=o||i.children[0]}return i},_insert:function(t,i,n){var e=this.toBBox,h=n?t:e(t),s=[],r=this._chooseSubtree(h,this.data,i,s);for(r.children.push(t),M(r,h);i>=0&&s[i].children.length>this._maxEntries;)this._split(s,i),i--;this._adjustParentBBoxes(h,s,i)},_split:function(t,i){var n=t[i],e=n.children.length,h=this._minEntries;this._chooseSplitAxis(n,h,e);var s=this._chooseSplitIndex(n,h,e),r=p(n.children.splice(s,n.children.length-s));r.height=n.height,r.leaf=n.leaf,d(n,this.toBBox),d(r,this.toBBox),i?t[i-1].children.push(r):this._splitRoot(n,r)},_splitRoot:function(t,i){this.data=p([t,i]),this.data.height=t.height+1,this.data.leaf=!1,d(this.data,this.toBBox)},_chooseSplitIndex:function(t,i,n){var e,h,s,r,o,a,l,u;for(a=l=1/0,e=i;e<=n-i;e++)r=F(h=g(t,0,e,this.toBBox),s=g(t,e,n,this.toBBox)),o=v(h)+v(s),r<a?(a=r,u=e,l=o<l?o:l):r===a&&o<l&&(l=o,u=e);return u},_chooseSplitAxis:function(t,i,n){var e=t.leaf?this.compareMinX:w,h=t.leaf?this.compareMinY:O;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,h)&&t.children.sort(e)},_allDistMargin:function(t,i,n,e){t.children.sort(e);var h,s,r=this.toBBox,o=g(t,0,i,r),a=g(t,n-i,n,r),l=B(o)+B(a);for(h=i;h<n-i;h++)s=t.children[h],M(o,t.leaf?r(s):s),l+=B(o);for(h=n-i-1;h>=i;h--)s=t.children[h],M(a,t.leaf?r(s):s),l+=B(a);return l},_adjustParentBBoxes:function(t,i,n){for(var e=n;e>=0;e--)M(i[e],t)},_condense:function(t){for(var i,n=t.length-1;n>=0;n--)t[n].children.length===0?n>0?(i=t[n-1].children).splice(i.indexOf(t[n]),1):this.clear():d(t[n],this.toBBox)},_initFormat:function(t){var i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};class E{constructor(i,n){this.key=new k(0,0,0,0),this.bounds=C(),this.objectIds=new Set,this.key.set(n);const e=i.getLODInfoAt(this.key);this.tileInfoView=i,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=e.resolution,this.scale=e.scale,this.level=e.level}get lod(){return this.tileInfoView.getLODInfoAt(this.key)}get id(){return this.key.id}get extent(){return R.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}createArcadeEvaluationOptions(i){return{$view:{scale:this.scale,timeZone:i}}}createChildTiles(){const i=this.key.getChildKeys(),n=V.acquire();for(let e=0;e<i.length;e++)n[e]=new E(this.tileInfoView,i[e]);return n}getQuantizationParameters(){return j.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}export{b as i,E as n,L as p};
