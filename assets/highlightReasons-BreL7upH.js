import{b4 as t}from"./index-nBWeBKPv.js";import{p as l}from"./Tile-CQ6TlwHd.js";const e={selection:o=>new l({color:new t([o.color.r/2,o.color.g/2,o.color.b/2,o.color.a])}),highlight:o=>o,popup:o=>new l({color:new t([o.color.g,o.color.b,o.color.r,o.color.a])})};function p(o){if(!o)return 0;let r=1;for(const n in e){if(n===o)break;r<<=1}return r}const f=Object.keys(e);export{e as c,f as l,p as t};