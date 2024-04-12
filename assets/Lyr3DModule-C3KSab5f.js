function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/lyr3DMain-DgLCp_qp.js","assets/index-D2dWKXoe.js","assets/index-DvE0Cji0.css","assets/lyr3DWorker-De1V3kiT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i,hY as r}from"./index-D2dWKXoe.js";function _(){return new Promise(t=>i(()=>import("./lyr3DMain-DgLCp_qp.js"),__vite__mapDeps([0,1,2])).then(e=>e.l).then(({default:e})=>{const n=e({locateFile:o,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function u(){return new Promise(t=>i(()=>import("./lyr3DWorker-De1V3kiT.js"),__vite__mapDeps([3,1,2])).then(e=>e.l).then(({default:e})=>{const n=e({locateFile:o,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function o(t){return r(`esri/libs/lyr3d/${t}`)}export{u as e,_ as n};
