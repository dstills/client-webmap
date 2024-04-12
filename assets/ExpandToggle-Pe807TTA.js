import{jt as E,gF as b,ju as S,gr as T}from"./index-D2dWKXoe.js";import{S as a}from"./action-group-ZG7jTjEw.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const w=150,p=2,m=e=>e.reduce((t,o)=>t+o,0)/e.length,y=e=>{const t=e.filter(n=>n.slot!==a.menuActions),o=t==null?void 0:t.length;return{actionWidth:o?m(t.map(n=>n.clientWidth||0)):0,actionHeight:o?m(t.map(n=>n.clientHeight||0)):0}},I=({width:e,actionWidth:t,layout:o,height:n,actionHeight:i,groupCount:r})=>{const c=o==="horizontal"?e:n,s=o==="horizontal"?t:i;return Math.floor((c-r*p)/s)},D=({layout:e,actionCount:t,actionWidth:o,width:n,actionHeight:i,height:r,groupCount:c})=>Math.max(t-I({width:n,actionWidth:o,layout:e,height:r,actionHeight:i,groupCount:c}),0),A=e=>Array.from(e.querySelectorAll("calcite-action")).filter(t=>t.closest("calcite-action-menu")?t.slot===S.trigger:!0),R=({actionGroups:e,expanded:t,overflowCount:o})=>{let n=o;e.reverse().forEach(i=>{let r=0;const c=A(i).reverse();c.forEach(s=>{s.slot===a.menuActions&&(s.removeAttribute("slot"),s.textEnabled=t)}),n>0&&c.some(s=>(c.filter(u=>!u.slot).length>1&&c.length>2&&!s.closest("calcite-action-menu")&&(s.textEnabled=!0,s.setAttribute("slot",a.menuActions),r++,r>1&&n--),n<1)),T(i)})},v={chevronsLeft:"chevrons-left",chevronsRight:"chevrons-right"};function L(e,t){var o;return e||((o=t.closest("calcite-shell-panel"))==null?void 0:o.position)||"start"}function W({el:e,expanded:t}){A(e).filter(o=>o.slot!==a.menuActions).forEach(o=>o.textEnabled=t),e.querySelectorAll("calcite-action-group, calcite-action-menu").forEach(o=>o.expanded=t)}const q=({tooltip:e,referenceElement:t,expanded:o,ref:n})=>(e&&(e.referenceElement=!o&&t?t:null),n&&n(t),t),j=({expanded:e,expandText:t,collapseText:o,toggle:n,el:i,position:r,tooltip:c,ref:s,scale:f})=>{const u=E(i)==="rtl",h=e?o:t,l=[v.chevronsLeft,v.chevronsRight];u&&l.reverse();const g=L(r,i)==="end",x=g?l[1]:l[0],d=g?l[0]:l[1];return b("calcite-action",{icon:e?x:d,onClick:n,scale:f,text:h,textEnabled:e,title:!e&&!c?h:null,ref:C=>q({tooltip:c,referenceElement:C,expanded:e,ref:s})})};export{j as E,R as a,D as b,y as g,w as o,A as q,W as t};