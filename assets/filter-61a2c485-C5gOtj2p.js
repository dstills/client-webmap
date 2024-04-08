import{S as l,a as y,r as S,b as g,f as B,c as M,i as I}from"./debounce-fea9fa7b-C4ODLmyJ.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */function R(r,e){for(var t=-1,o=r==null?0:r.length,i=Array(o);++t<o;)i[t]=e(r[t],t,r);return i}var E=Array.isArray,U=1/0,d=l?l.prototype:void 0,T=d?d.toString:void 0;function O(r){if(typeof r=="string")return r;if(E(r))return R(r,O)+"";if(M(r))return T?T.call(r):"";var e=r+"";return e=="0"&&1/r==-U?"-0":e}function N(r){return r}var C="[object AsyncFunction]",G="[object Function]",L="[object GeneratorFunction]",_="[object Proxy]";function D(r){if(!I(r))return!1;var e=g(r);return e==G||e==L||e==C||e==_}var K=9007199254740991,V=/^(?:0|[1-9]\d*)$/;function q(r,e){var t=typeof r;return e=e??K,!!e&&(t=="number"||t!="symbol"&&V.test(r))&&r>-1&&r%1==0&&r<e}var X=9007199254740991;function w(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=X}function H(r){return r!=null&&w(r.length)&&!D(r)}var W=Object.prototype;function Y(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||W;return r===t}function z(r,e){for(var t=-1,o=Array(r);++t<r;)o[t]=e(t);return o}var J="[object Arguments]";function j(r){return y(r)&&g(r)==J}var P=Object.prototype,Q=P.hasOwnProperty,Z=P.propertyIsEnumerable,k=j(function(){return arguments}())?j:function(r){return y(r)&&Q.call(r,"callee")&&!Z.call(r,"callee")};function rr(){return!1}var $=typeof exports=="object"&&exports&&!exports.nodeType&&exports,A=$&&typeof module=="object"&&module&&!module.nodeType&&module,er=A&&A.exports===$,m=er?S.Buffer:void 0,tr=m?m.isBuffer:void 0,nr=tr||rr,or="[object Arguments]",ar="[object Array]",sr="[object Boolean]",ir="[object Date]",fr="[object Error]",ur="[object Function]",cr="[object Map]",pr="[object Number]",br="[object Object]",yr="[object RegExp]",gr="[object Set]",lr="[object String]",dr="[object WeakMap]",Tr="[object ArrayBuffer]",jr="[object DataView]",Ar="[object Float32Array]",mr="[object Float64Array]",xr="[object Int8Array]",hr="[object Int16Array]",Ir="[object Int32Array]",Er="[object Uint8Array]",Or="[object Uint8ClampedArray]",wr="[object Uint16Array]",Pr="[object Uint32Array]",n={};n[Ar]=n[mr]=n[xr]=n[hr]=n[Ir]=n[Er]=n[Or]=n[wr]=n[Pr]=!0;n[or]=n[ar]=n[Tr]=n[sr]=n[jr]=n[ir]=n[fr]=n[ur]=n[cr]=n[pr]=n[br]=n[yr]=n[gr]=n[lr]=n[dr]=!1;function $r(r){return y(r)&&w(r.length)&&!!n[g(r)]}function vr(r){return function(e){return r(e)}}var v=typeof exports=="object"&&exports&&!exports.nodeType&&exports,p=v&&typeof module=="object"&&module&&!module.nodeType&&module,Fr=p&&p.exports===v,b=Fr&&B.process,x=function(){try{var r=p&&p.require&&p.require("util").types;return r||b&&b.binding&&b.binding("util")}catch{}}(),h=x&&x.isTypedArray,Sr=h?vr(h):$r,Br=Object.prototype,Mr=Br.hasOwnProperty;function Rr(r,e){var t=E(r),o=!t&&k(r),i=!t&&!o&&nr(r),c=!t&&!o&&!i&&Sr(r),s=t||o||i||c,f=s?z(r.length,String):[],u=f.length;for(var a in r)(e||Mr.call(r,a))&&!(s&&(a=="length"||i&&(a=="offset"||a=="parent")||c&&(a=="buffer"||a=="byteLength"||a=="byteOffset")||q(a,u)))&&f.push(a);return f}function Ur(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Nr=Object.prototype,Cr=Nr.hasOwnProperty;function Gr(r){if(!I(r))return Ur(r);var e=Y(r),t=[];for(var o in r)o=="constructor"&&(e||!Cr.call(r,o))||t.push(o);return t}function Lr(r){return H(r)?Rr(r,!0):Gr(r)}function _r(r){return r==null?"":O(r)}function Dr(r){return function(e,t,o){for(var i=-1,c=Object(e),s=o(e),f=s.length;f--;){var u=s[r?f:++i];if(t(c[u],u,c)===!1)break}return e}}var Kr=Dr();function Vr(r){return typeof r=="function"?r:N}var F=/[\\^$.*+?()[\]{}|]/g,qr=RegExp(F.source);function Xr(r){return r=_r(r),r&&qr.test(r)?r.replace(F,"\\$&"):r}function Hr(r,e){return r==null?r:Kr(r,Vr(e),Lr)}const Yr=(r,e)=>{const t=Xr(e),o=new RegExp(t,"i");r.length===0&&console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);const i=(s,f)=>{if(s!=null&&s.constant||s!=null&&s.filterDisabled)return!0;let u=!1;return Hr(s,a=>{typeof a=="function"||a==null||(Array.isArray(a)||typeof a=="object"&&a!==null?i(a,f)&&(u=!0):f.test(a)&&(u=!0))}),u};return r.filter(s=>i(s,o))};export{Yr as f};
