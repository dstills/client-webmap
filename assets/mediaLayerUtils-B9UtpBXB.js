import{$ as c,j as l}from"./utils-BVm5YABj.js";import{o as y}from"./jsonContext-BDfQJJ3g.js";import{w as f,z as d,C as v}from"./index-BhDz4nJ7.js";import{p as o}from"./resourceUtils-BsUeDECd.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-CoHQbrv0.js";import"./saveUtils-CjoLFEtF.js";import"./resourceUtils-DEF3g4Gm.js";const s="Media Layer",x="media-layer-save",N="media-layer-save-as",n=["media-layer:unsupported-source"];function i(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return y(e,"portal-item",!0)}function p(e){return e.layerJSON}async function A(e,r){const{title:a,fullExtent:t}=e;r.title||(r.title=a),r.extent=t?await f(t):null,d(r,v.METADATA)}async function J(e,r){return c({layer:e,itemType:s,validateLayer:i,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:x,supplementalUnsupportedErrors:n,saveResources:(a,t)=>o(e.resourceReferences,t)},r)}async function M(e,r,a){return l({layer:e,itemType:s,validateLayer:i,createJSONContext:t=>m(t),createItemData:p,errorNamePrefix:N,supplementalUnsupportedErrors:n,newItem:r,setItemProperties:A,saveResources:(t,u)=>o(e.resourceReferences,u)},a)}export{J as save,M as saveAs};