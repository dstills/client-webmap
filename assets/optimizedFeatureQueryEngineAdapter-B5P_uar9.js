import{n as r}from"./centroid-DdLmOD72.js";import{bq as o,br as i}from"./index-nBWeBKPv.js";const s={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new o(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid==null&&(t.centroid=r(new i,t.geometry,e.hasZ,e.hasM)),t.centroid)};export{s as o};
