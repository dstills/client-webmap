import{b3 as p,dw as v,dx as c,aB as $}from"./index-D2dWKXoe.js";async function I(s,e,o){const n=p(s),a=e.toJSON(),r=v(n.query,{query:c({...a,f:"json"}),...o}),i=`${n.path}/versionInfos`,{data:t}=await $(i,r);return t.versions.map(f=>{const{versionName:u,versionGuid:d,...m}=f;return{...m,versionIdentifier:{name:u,guid:d}}})}export{I as getVersionInfos};