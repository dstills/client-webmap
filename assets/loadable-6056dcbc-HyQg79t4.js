import{bR as t}from"./index-BS4ejk0L.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const n=new WeakMap,o=new WeakMap;function i(e){o.set(e,new Promise(a=>n.set(e,a)))}function p(e){n.get(e)()}function s(e){return o.get(e)}async function c(e){return await s(e),t(e),new Promise(a=>requestAnimationFrame(()=>a()))}export{p as a,s as b,c,i as s};