import{b3 as r,i_ as e,aL as s}from"./index-D2dWKXoe.js";import{d as x}from"./queryTopFeatures-Ccf5B8ZM.js";import"./query-BHx-VbRk.js";import"./pbfQueryUtils-CqUhfAuD.js";import"./pbf-sj8ixt_4.js";async function d(o,n,i){const m=r(o),a=await x(m,e.from(n),{...i}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:s.fromJSON(t)}}export{d as executeForTopExtents};