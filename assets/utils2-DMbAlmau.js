import{kB as c}from"./index-BS4ejk0L.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const r="CALCITE-COMBOBOX-ITEM",a="CALCITE-COMBOBOX-ITEM-GROUP",i=`${r}, ${a}`,m={chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container"};function C(e){var o,s;const t=(o=e.parentElement)==null?void 0:o.closest(i),n=(s=t==null?void 0:t.parentElement)==null?void 0:s.closest(i);return[t,n].filter(l=>l)}function b(e){var t;return((t=e.ancestors)==null?void 0:t.filter(n=>n.nodeName==="CALCITE-COMBOBOX-ITEM"))||[]}function p(e){return c(e.querySelectorAll("calcite-combobox-item"))}function g(e){return c(e.querySelectorAll("calcite-combobox-item")).filter(n=>n.selected).length>0}function O(e){return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}function d(e){return e.includes("single")}export{m as C,i as a,p as b,r as c,a as d,C as e,O as f,b as g,g as h,d as i};