import{D as c,c1 as d,hr as p,hs as u,bE as g}from"./index-BhDz4nJ7.js";async function h(o,s,a,e){if(!s)throw new c("stop-reading:missing-guid","guid for version is missing");const i=d(o),r=p(i.query,{query:u({sessionId:a,f:"json"}),...e,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const n=`${i.path}/versions/${s}/stopReading`,{data:t}=await g(n,r);return!!t&&t.success}export{h as stopReading};