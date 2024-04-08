function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/lyr3DMain-Dn2wbnYT.js","assets/index-nBWeBKPv.js","assets/index-CIBc8SyM.css","assets/lyr3DWorker-DyO9AWws.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{aj as n,iN as r}from"./index-nBWeBKPv.js";function a(){return new Promise(t=>n(()=>import("./lyr3DMain-Dn2wbnYT.js"),__vite__mapDeps([0,1,2])).then(e=>e.l).then(({default:e})=>{const i=e({locateFile:o,onRuntimeInitialized:()=>t(i)})})).catch(t=>{throw t})}function u(){return new Promise(t=>n(()=>import("./lyr3DWorker-DyO9AWws.js"),__vite__mapDeps([3,1,2])).then(e=>e.l).then(({default:e})=>{const i=e({locateFile:o,onRuntimeInitialized:()=>t(i)})})).catch(t=>{throw t})}function o(t){return r(`esri/libs/lyr3d/${t}`)}export{u as e,a as n};
