import{d0 as G,ar as A,cT as L,cU as M,d1 as N,au as B,cV as D,d2 as V,bB as Y}from"./index-nBWeBKPv.js";import{a as q}from"./dehydratedFeatureComparison-yNW1AtFP.js";import{Y as J}from"./InteractiveToolBase-B1cmKqcL.js";import{e as K}from"./SnappingContext-Cpn1WUY8.js";function tn({predicate:n=()=>!0,snappingManager:e,snappingContext:o,updatingHandles:a,useZ:t=!0}){const i=new J;if(e==null)return{snappingStep:[z,i],cancelSnapping:z};let p,u=null,l=null,c=null;const f=()=>{u=B(u),e.doneSnapping(),l==null||l.frameTask.remove(),l=null,p=D(p),c=null},m=Q(e,t,i);let d=null,s=null,Z=null;return{snappingStep:[r=>{if(!n(r))return r;const{action:P}=r;if(P==="start"){const{info:x}=r,S=R(e.view);if(l=W(o,r,S),l.context.selfSnappingZ=null,!t&&x!=null){const g=_(o.coordinateHelper,x.handle.component);g!=null&&(l.context.selfSnappingZ={value:g,elevationInfo:o.elevationInfo??G})}}if(l!=null){const{context:x,originalScenePos:S,originalPos:g}=l,{mapEnd:T,mapStart:k,scenePoints:C}=r,v=U(g,y(T,k)),w=y(k,g),E={...r,action:"update"},H=l.context,h=X(S,C),I=e.update({point:v,scenePoint:h,context:x});if(Z=I,b(T,I,w,t),d=v,s=h,P!=="end"){const{frameTask:O}=l;u==null&&(u=new AbortController),c=F=>{a.addPromise(V(m({frameTask:O,event:E,context:H,point:v,scenePoint:h,delta:w,getLastState:()=>({point:d,scenePoint:s,updatePoint:F.forceUpdate?null:Z})},u.signal)))},c({forceUpdate:!1}),p==null&&(p=A(()=>e.options.effectiveEnabled,()=>c==null?void 0:c({forceUpdate:!0})))}}return P==="end"&&f(),r},i],cancelSnapping:r=>(f(),r)}}function Q(n,e,o){return Y(async({frameTask:a,point:t,scenePoint:i,context:p,event:u,delta:l,getLastState:c},f)=>{const m=await a.schedule(()=>n.snap({point:t,scenePoint:i,context:p,signal:f}),f);if(m.valid){let d=await a.schedule(()=>m.apply(),f);const s=c();s.point!=null&&t!==s.point&&(d=n.update({point:s.point,scenePoint:s.scenePoint,context:p})),s.updatePoint!=null&&q(d,s.updatePoint)||(b(u.mapEnd,d,l,e),o.execute(u))}})}function R(n){return n.type==="3d"?n.resourceController.scheduler.registerTask(L.SNAPPING):M}function W(n,e,o){return{context:new K({editGeometryOperations:n.editGeometryOperations,elevationInfo:n.elevationInfo,pointer:n.pointer,vertexHandle:e.info!=null?e.info.handle:null,excludeFeature:n.excludeFeature,feature:n.feature,visualizer:n.visualizer}),originalPos:e.snapOrigin!=null?n.coordinateHelper.vectorToDehydratedPoint(e.snapOrigin):e.mapStart,originalScenePos:e.scenePoints!=null?e.scenePoints.sceneStart:null,frameTask:o}}function U(n,[e,o,a]){const t=N(n);return t.x+=e,t.y+=o,t.hasZ&&(t.z+=a),t}function X(n,e){return n==null||e==null?null:U(n,y(e.sceneEnd,e.sceneStart))}function y(n,e){const o=n.hasZ&&e.hasZ?n.z-e.z:0;return[n.x-e.x,n.y-e.y,o]}function b(n,e,[o,a,t],i){n.x=e.x+o,n.y=e.y+a,i&&n.hasZ&&e.hasZ&&(n.z=e.z+t)}function _(n,e){if(!n.hasZ())return null;const o=e.vertices;let a=null;for(const t of o){const i=n.getZ(t.pos);if(a!=null&&i!=null&&Math.abs(i-a)>1e-6)return null;a==null&&(a=i)}return a}function z(n){return n}export{tn as f};