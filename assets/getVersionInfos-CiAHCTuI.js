import{c1 as p,hr as v,hs as d,bE as $}from"./index-BhDz4nJ7.js";async function y(n,e,o){const s=p(n),r=e.toJSON(),a=v(s.query,{query:d({...r,f:"json"}),...o}),i=`${s.path}/versionInfos`,{data:t}=await $(i,a);return t.versions.map(f=>{const{versionName:u,versionGuid:m,...c}=f;return{...c,versionIdentifier:{name:u,guid:m}}})}export{y as getVersionInfos};