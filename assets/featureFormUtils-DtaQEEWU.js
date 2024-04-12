import{cw as d,A as N,cc as _,cd as F,cx as I,cy as v,c7 as y,cz as L,cA as b,cB as R,bZ as T,cC as j}from"./index-D2dWKXoe.js";const U=e=>(e==null?void 0:e.type)==="field",V=e=>(e==null?void 0:e.type)==="group",Z=e=>(e==null?void 0:e.type)==="relationship",H=e=>!V(e)&&e.group!=null,D=e=>e.type==="field",M=e=>e.type==="group",P=e=>e.type==="relationship",h=e=>e.reduce((t,n)=>V(n)?[...t,...n.inputs]:[...t,n],[]),$=e=>h(e).filter(U),k=e=>h(e).filter(Z),q=e=>e!=null&&(c(e,"combo-box")||c(e,"radio-buttons")),c=(e,t)=>{var n;return e!=null&&((n=e.input)==null?void 0:n.type)===t},B=e=>e!=null&&(c(e,"text-box")||c(e,"text-area")),z=({domain:e,inputType:t="text-box",dataType:n})=>n==="number"&&t==="text-box"&&(!e||e.type!=="coded-value"),Y=e=>"items"in e,x={typeFieldName:null,types:[]};function J(e){const{attributes:t,fieldsIndex:n,label:r,timeZone:o}=e;if(!t||typeof t!="object")return r;const a=Object.keys(t).filter(i=>d(r,i)),u=a.map(i=>t[i]),l=a.map(i=>n.get(i)).filter(N);return C(r,w({values:u,fields:l,timeZone:o}))}function w(e){const{fields:t,values:n}=e,r=e.timeZone??void 0,o=t.map((a,u)=>{let l=n[u];if(a.domain&&a.domain.type==="coded-value"){const i=a.domain.codedValues.find(p=>p.code===l);i!=null&&i.name&&(l=i.name)}return(_(a)||F(a))&&(l=I(a,l,{timeZone:r,...v(a)})),[a.name,l]});return Object.fromEntries(o)}function C(e,t){return y(y(e,n=>`{${n.toLowerCase()}}`),Object.fromEntries(Object.entries(t).map(([n,r])=>[n.toLowerCase(),r])))}const K=e=>{var t,n;return e?e.type==="subtype-sublayer"?{typeFieldName:(t=e.parent)==null?void 0:t.subtypeField,types:((n=e.parent)==null?void 0:n.subtypes)??[]}:"types"in e&&e.types?{typeFieldName:e.typeIdField,types:e.types.map(({id:r,name:o,domains:a})=>({code:r,name:o,domains:a}))}:x:x},Q=(e,t)=>{if(!e)return!0;const{operations:n}=e;switch(t){case"INSERT":return n.supportsAdd;case"UPDATE":case"DELETE":return n.supportsUpdate;default:return!0}};var m;(function(e){e.TOO_SHORT="length-validation-error::too-short"})(m||(m={}));const E={type:"number"},O={type:"number",intlOptions:{notation:"scientific"}};function g(e){return e>=1e7||e<=-1e7}function S(e,{validationErrors:t}){return e.max!=null&&e.min!=null?t.outsideRange:e.max!=null?t.outsideRangeMax:t.outsideRangeMin}const W=(e,t,n)=>{const{dataType:r,error:o,minLength:a,value:u,required:l}=e,i=t==null?void 0:t.validationErrors;if(!i||!o)return null;if(l&&u===null)return i.cannotBeNull;if(o===b.VALUE_OUT_OF_RANGE||o===R.OUT_OF_RANGE){const{field:p,range:s}=e,f={type:"date",intlOptions:{timeZone:p.type==="date"&&n?n:void 0,...v(p)}},A=S(s,t);return T(A,s,{format:{max:r==="date"?f:s.max!=null&&g(s.max)?O:E,min:r==="date"?f:s.min!=null&&g(s.min)?O:E}})}return o===b.INVALID_CODED_VALUE?i.invalidCodedValue:o===j.INVALID_TYPE?i.invalidType:o===m.TOO_SHORT?T(i.tooShort,{min:a}):null},X=e=>{var o;if(!e)return;const t=e.layer,n=t&&"geometryType"in t?t.geometryType:void 0,r=(o=e.geometry)==null?void 0:o.type;return r==="polyline"||n==="polyline"?"line":r||n||"table"},ee=e=>{var n;const t=[];if(e.formTemplate){const{description:r,title:o}=e.formTemplate;(n=e.fields)==null||n.forEach(a=>{const u=o&&d(o,a.name),l=r&&d(r,a.name);(u||l)&&t.push(a.name)})}return t};function te(e,t){var r;const n=t??("formTemplate"in e&&e.formTemplate);return n?(((r=n.elements)==null?void 0:r.filter(D))??[]).some(({fieldName:o})=>!e.fieldsIndex.get(o)):!1}function ne(e,t){return e==null||t.onValue!==e&&t.offValue!==e}function re(e,t){var n;switch(t.objectType){case"any":return!0;case"null":return e==null;case"code":return e===((n=t.codedValue)==null?void 0:n.code);case"range":return e!=null&&t.minValue!=null&&t.maxValue!=null&&+e>=t.minValue&&+e<=t.maxValue;default:return L(t.objectType),!1}}export{w as A,q as E,m as F,ee as G,te as H,K as L,X as M,$ as O,ne as P,Q as R,W as S,M as T,z as U,B as V,J as _,D as b,V as c,U as d,Z as f,Y as h,k as j,re as k,c as v,P as x,H as y};