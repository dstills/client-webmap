function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/lyr3DMain-Cjq7_E9i.js","assets/index-HSyhVbHY.js","assets/index-DvE0Cji0.css","assets/lyr3DWorker-aDqpZXIh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i,hY as r}from"./index-HSyhVbHY.js";function _(){return new Promise(t=>i(()=>import("./lyr3DMain-Cjq7_E9i.js"),__vite__mapDeps([0,1,2])).then(e=>e.l).then(({default:e})=>{const n=e({locateFile:o,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function u(){return new Promise(t=>i(()=>import("./lyr3DWorker-aDqpZXIh.js"),__vite__mapDeps([3,1,2])).then(e=>e.l).then(({default:e})=>{const n=e({locateFile:o,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function o(t){return r(`esri/libs/lyr3d/${t}`)}export{u as e,_ as n};
