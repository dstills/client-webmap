function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/lyr3DMain-_Ed5z9bL.js","assets/index-BS4ejk0L.js","assets/index-DvE0Cji0.css","assets/lyr3DWorker-sze3HsDh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i,hY as r}from"./index-BS4ejk0L.js";function _(){return new Promise(t=>i(()=>import("./lyr3DMain-_Ed5z9bL.js"),__vite__mapDeps([0,1,2])).then(e=>e.l).then(({default:e})=>{const n=e({locateFile:o,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function u(){return new Promise(t=>i(()=>import("./lyr3DWorker-sze3HsDh.js"),__vite__mapDeps([3,1,2])).then(e=>e.l).then(({default:e})=>{const n=e({locateFile:o,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function o(t){return r(`esri/libs/lyr3d/${t}`)}export{u as e,_ as n};
