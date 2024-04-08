import{cR as V,xn as R,cF as T,xm as le,zX as ie,zY as de,y9 as ue,d7 as E,cS as c,zZ as pe,dL as S,hE as _e,de as se,qZ as ge,dj as A,xx as L,wC as fe,e0 as I,z_ as me,mw as xe,dP as ye,z$ as ve,fq as Ve,hN as Ee,eF as re,cG as Te,j as De,n as $,xU as we,dA as B,A0 as H,dl as D,dk as w,d9 as q,A1 as Pe,dc as X,dV as F,d8 as P,dD as Ae,so as C,A2 as Me,A3 as j,cH as W,l6 as Ze,u9 as Ce,A4 as J,A5 as b,A6 as Re,dC as U,m5 as $e,A7 as ze,xl as Se,u8 as K,bl as Ie}from"./index-nBWeBKPv.js";var l;(function(o){o[o.Z=0]="Z",o[o.M=1]="M"})(l||(l={}));class Xe{constructor(e){this.spatialReference=e}createVector(){return this._tag(V())}pointToVector(e){return this._tag(R(e.x,e.y))}arrayToVector(e){return this._tag(R(e[0],e[1]))}vectorToArray(e){return[e[0],e[1]]}pointToArray(e){return[e.x,e.y]}vectorToPoint(e,t=new T){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new T){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t){if(e)return t??(t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}),t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return le(s,e,t,i)}addDelta(e,t,i){e[0]+=t,e[1]+=i}distance(e,t){return ie(e,t)}getZ(e,t=void 0){return t}hasZ(){return!1}getM(e,t=void 0){return t}hasM(){return!1}clone(e){return this._tag(de(e))}copy(e,t){return ue(t,e)}fromXYZ(e){return this._tag(R(e[0],e[1]))}toXYZ(e,t=c()){return E(t,e[0],e[1],0)}pointToXYZ(e,t=c()){return E(t,e.x,e.y,0)}equals(e,t){return pe(e,t)}_tag(e){return e}}class Q{constructor(e,t){this._valueType=e,this.spatialReference=t}createVector(){return this._tag(c())}pointToVector(e){return this._tag(S(e.x,e.y,this._valueType===l.Z?e.z:e.m))}arrayToVector(e){return this._tag(S(e[0],e[1],e[2]||0))}vectorToArray(e){return[e[0],e[1],e[2]]}pointToArray(e){return this._valueType===l.Z?[e.x,e.y,e.z]:[e.x,e.y,e.m]}vectorToPoint(e,t=new T){return t.x=e[0],t.y=e[1],t.z=this._valueType===l.Z?e[2]:void 0,t.m=this._valueType===l.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new T){return t.x=e[0],t.y=e[1],t.z=this._valueType===l.Z?e[2]:void 0,t.m=this._valueType===l.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t){if(!e)return;t??(t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"});const i=this._valueType===l.Z,s=this._valueType===l.M;return t.x=e[0],t.y=e[1],t.z=i?e[2]:void 0,t.m=s?e[2]:void 0,t.hasZ=i,t.hasM=s,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return _e(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,this._valueType===l.Z&&(e[2]+=s)}distance(e,t){return this._valueType===l.Z?se(e,t):ie(e,t)}getZ(e,t=void 0){return this._valueType===l.Z?e[2]:t}hasZ(){return this._valueType===l.Z}getM(e,t=void 0){return this._valueType===l.M?e[2]:t}hasM(){return this._valueType===l.M}clone(e){return this._tag(ge(e))}copy(e,t){return A(t,e)}fromXYZ(e,t=0,i=0){return this._tag(S(e[0],e[1],this._valueType===l.Z?e.length>2?e[2]:t:i))}toXYZ(e,t=c()){return E(t,e[0],e[1],this._valueType===l.Z?e[2]:0)}pointToXYZ(e,t=c()){return E(t,e.x,e.y,this._valueType===l.Z?e.z??0:0)}equals(e,t){return L(e,t)}_tag(e){return e}}class be{constructor(e){this.spatialReference=e}createVector(){return this._tag(fe())}pointToVector(e){return this._tag(I(e.x,e.y,e.z,e.m))}arrayToVector(e){return this._tag(I(e[0],e[1],e[2]||0,e[3]||0))}vectorToArray(e){return[e[0],e[1],e[2],e[3]]}pointToArray(e){return[e.x,e.y,e.z,e.m]}vectorToPoint(e,t=new T){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new T){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t){if(e)return t??(t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}),t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return me(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,e[2]+=s}distance(e,t){return se(e,t)}getZ(e){return e[2]}hasZ(){return!0}getM(e){return e[3]}hasM(){return!0}clone(e){return this._tag(xe(e))}copy(e,t){return ye(t,e)}fromXYZ(e,t=0,i=0){return this._tag(I(e[0],e[1],e.length>2?e[2]:t,i))}toXYZ(e,t=c()){return E(t,e[0],e[1],e[2])}pointToXYZ(e,t=c()){return E(t,e.x,e.y,e.z??0)}equals(e,t){return ve(e,t)}_tag(e){return e}}function Ue(o,e,t){return o&&e?new be(t):e?new Q(l.M,t):o?new Q(l.Z,t):new Xe(t)}function Ge(o,e){if(!e.supported)return;let t=1/0,i=-1/0;const s=e.upperBoundX-e.lowerBoundX;o.forEach(n=>{let h=n.pos[0];for(;h<e.lowerBoundX;)h+=s;for(;h>e.upperBoundX;)h-=s;t=Math.min(t,h),i=Math.max(i,h),n.pos[0]=h});const r=i-t;s-r<r&&o.forEach(n=>{n.pos[0]<0&&(n.pos[0]+=s)})}function Le(o,e){const t=Ve(o);return e===Ee.Global&&t?{supported:!0,lowerBoundX:t.valid[0],upperBoundX:t.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}class M{constructor(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions()}}let x=class{constructor(e,t,i){this.component=e,this.leftVertex=t,this.rightVertex=i,this.type="edge",t.rightEdge=this,i.leftEdge=this}};class G{constructor(e,t){this._spatialReference=e,this._viewingMode=t,this.vertices=[],this.edges=[],this.index=null}unnormalizeVertexPositions(){this.vertices.length<=1||Ge(this.vertices,Le(this._spatialReference,this._viewingMode))}updateVertexIndex(e,t){if(this.vertices.length===0)return;const i=this.vertices[0];let s=null,r=e,n=t;do s=r,s.index=n++,r=s.rightEdge?s.rightEdge.rightVertex:null;while(r!=null&&r!==i);s.leftEdge&&s!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(s),this.vertices.length-1)}getFirstVertex(){return this.vertices.at(0)}getLastVertex(){return this.vertices.at(-1)}isClosed(){return this.vertices.length>2&&this.vertices[0].leftEdge!==null}swapVertices(e,t){const i=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=i}iterateVertices(e){if(this.vertices.length===0)return;const t=this.vertices[0];let i=t;do e(i,i.index),i=i.rightEdge!=null?i.rightEdge.rightVertex:null;while(i!==t&&i!=null)}}class O extends re{constructor(e,t){super(),this.type=e,this.coordinateHelper=t,this._geometry=null,this._dirty=!0,this.components=[]}get geometry(){if(this._dirty){switch(this.type){case"point":this._geometry=this._toPoint();break;case"polyline":this._geometry=this._toPolyline();break;case"polygon":this._geometry=this._toPolygon()}this._dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}notifyChanges(e){this._dirty=!0,this.emit("change",e)}_toPoint(){return this.components.length===0||this.components[0].vertices.length===0?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[];let r=i.vertices.find(h=>h.leftEdge==null);const n=r;do s.push(t(r.pos)),r=r.rightEdge?r.rightEdge.rightVertex:null;while(r&&r!==n);e.push(s)}return new Te({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[],r=i.vertices[0];let n=r;const h=n;do s.push(t(n.pos)),n=n.rightEdge!=null?n.rightEdge.rightVertex:null;while(n&&n!==h);i.isClosed()&&s.push(t(r.pos)),e.push(s)}return new De({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(e,t){const i=e.spatialReference,s=Ue(e.hasZ,e.hasM,i),r=new O(e.type,s);switch(e.type){case"polygon":{const n=e.rings;for(let h=0;h<n.length;++h){const u=n[h],a=new G(i,t);a.index=h;const y=u.length>2&&$(u[0],u[u.length-1]),v=y?u.length-1:u.length;for(let d=0;d<v;++d){const _=s.arrayToVector(u[d]),f=new M(a);a.vertices.push(f),f.pos=_,f.index=d}const p=a.vertices.length-1;for(let d=0;d<p;++d){const _=a.vertices[d],f=a.vertices[d+1],ce=new x(a,_,f);a.edges.push(ce)}if(y){const d=new x(a,a.vertices[a.vertices.length-1],a.vertices[0]);a.edges.push(d)}r.components.push(a)}break}case"polyline":{const n=e.paths;for(let h=0;h<n.length;++h){const u=n[h],a=new G(i,t);a.index=h;const y=u.length;for(let p=0;p<y;++p){const d=s.arrayToVector(u[p]),_=new M(a);a.vertices.push(_),_.pos=d,_.index=p}const v=a.vertices.length-1;for(let p=0;p<v;++p){const d=a.vertices[p],_=a.vertices[p+1],f=new x(a,d,_);a.edges.push(f)}r.components.push(a)}break}case"point":{const n=new G(i,t);n.index=0;const h=new M(n);h.index=0,h.pos=s.pointToVector(e),n.vertices.push(h),r.components.push(n);break}}return r}}var m;(function(o){o[o.NEW_STEP=0]="NEW_STEP",o[o.ACCUMULATE_STEPS=1]="ACCUMULATE_STEPS"})(m||(m={}));let Ne=class{constructor(e,t,i){this._editGeometry=e,this._component=t,this._pos=i,this._addedVertex=null,this._originalEdge=null,this._left=null,this._right=null}apply(){let e="redo";this._addedVertex==null&&(e="apply",this._addedVertex=new M(this._component));const t=this._component.getLastVertex();if(t==null)this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,this._addedVertex.index=0;else{let i=null;t.rightEdge&&(this._originalEdge=t.rightEdge,i=this._originalEdge.rightVertex,this._component.edges.splice(this._component.edges.indexOf(this._originalEdge),1)),this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,this._left==null&&(this._left=new x(this._component,t,this._addedVertex)),this._component.edges.push(this._left),t.rightEdge=this._left,this._originalEdge!=null&&i!=null&&(this._right==null&&(this._right=new x(this._component,this._addedVertex,i)),this._component.edges.push(this._right),i.leftEdge=this._right),this._component.updateVertexIndex(this._addedVertex,t.index+1)}this._editGeometry.notifyChanges({operation:e,addedVertices:[this._addedVertex]})}undo(){this._addedVertex!=null&&(this._component.vertices.splice(this._component.vertices.indexOf(this._addedVertex),1),this._left!=null&&(this._component.edges.splice(this._component.edges.indexOf(this._left),1),this._left.leftVertex.rightEdge=null),this._right!=null&&(this._component.edges.splice(this._component.edges.indexOf(this._right),1),this._right.rightVertex.leftEdge=null),this._originalEdge!=null&&(this._component.edges.push(this._originalEdge),this._originalEdge.leftVertex.rightEdge=this._originalEdge,this._originalEdge.rightVertex.leftEdge=this._originalEdge),this._left!=null?this._component.updateVertexIndex(this._left.leftVertex,this._left.leftVertex.index):this._component.updateVertexIndex(this._addedVertex,0),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this._addedVertex]}))}accumulate(){return!1}},Oe=class ne{constructor(e,t,i){this._editGeometry=e,this._vertices=t,this.operation=i,this._undone=!1}apply(){this._vertices.forEach(e=>this.operation.apply(e)),this._editGeometry.components.forEach(e=>e.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:this._undone?"redo":"apply",updatedVertices:this._vertices})}undo(){this._vertices.forEach(e=>this.operation.undo(e)),this._editGeometry.notifyChanges({operation:"undo",updatedVertices:this._vertices}),this._undone=!0}canAccumulate(e){if(this._undone||e._vertices.length!==this._vertices.length)return!1;for(let t=0;t<e._vertices.length;++t)if(e._vertices[t]!==this._vertices[t])return!1;return this.operation.canAccumulate(e.operation)}accumulate(e){return!!(e instanceof ne&&this.canAccumulate(e))&&(this._vertices.forEach(t=>this.operation.accumulate(t,e.operation)),this.operation.accumulateParams(e.operation),this._editGeometry.components.forEach(t=>t.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:"apply",updatedVertices:this._vertices}),!0)}};var g;(function(o){o[o.CUMULATIVE=0]="CUMULATIVE",o[o.REPLACE=1]="REPLACE"})(g||(g={}));let Ye=class{constructor(e,t,i=0){this._editGeometry=e,this._vertices=t,this._minNumberOfVertices=i,this.removedVertices=null}apply(){let e="redo";if(this.removedVertices==null){const t=this.removedVertices=[];this._vertices.forEach(i=>{const s=this._removeVertex(i);s!=null&&t.push(s)}),e="apply"}else this.removedVertices.forEach(t=>{this._removeVertex(t.removedVertex)});this._editGeometry.notifyChanges({operation:e,removedVertices:this._vertices})}undo(){var e;(e=this.removedVertices)==null||e.forEach(t=>{this._undoRemoveVertex(t)}),this._editGeometry.notifyChanges({operation:"undo",addedVertices:this._vertices})}accumulate(){return!1}_removeVertex(e){const t=e.component;if(t.vertices.length<=this._minNumberOfVertices)return null;const i={removedVertex:e,createdEdge:null},s=e.leftEdge,r=e.rightEdge;return t.vertices.splice(t.vertices.indexOf(e),1),s&&(t.edges.splice(t.edges.indexOf(s),1),s.leftVertex.rightEdge=null),r&&(t.edges.splice(t.edges.indexOf(r),1),r.rightVertex.leftEdge=null),e.index===0&&r&&this._vertices.length>0&&t.swapVertices(t.vertices.indexOf(r.rightVertex),0),s&&r&&(i.createdEdge=new x(t,s.leftVertex,r.rightVertex),t.edges.push(i.createdEdge)),r&&t.updateVertexIndex(r.rightVertex,r.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,i=e.removedVertex.component,s=t.leftEdge,r=t.rightEdge;e.createdEdge&&i.edges.splice(i.edges.indexOf(e.createdEdge),1),i.vertices.push(t),s&&(i.edges.push(s),s.leftVertex.rightEdge=s),r&&(i.edges.push(r),r.rightVertex.leftEdge=r),i.updateVertexIndex(t,t.index)}};class ke{constructor(e,t,i){this._editGeometry=e,this._edge=t,this._t=i,this.createdVertex=null,this._left=null,this._right=null}apply(){let e="redo";const t=this._edge,i=t.component,s=t.leftVertex,r=t.rightVertex;i.edges.splice(i.edges.indexOf(t),1),this.createdVertex==null&&(e="apply",this.createdVertex=new M(t.component)),i.vertices.push(this.createdVertex),this.createdVertex.pos=this._editGeometry.coordinateHelper.lerp(t.leftVertex.pos,t.rightVertex.pos,this._t,this._editGeometry.coordinateHelper.createVector()),this._left==null&&(this._left=new x(i,s,this.createdVertex)),this._left.leftVertex.leftEdge?i.edges.push(this._left):i.edges.unshift(this._left),s.rightEdge=this._left,this._right==null&&(this._right=new x(i,this.createdVertex,r)),i.edges.push(this._right),r.leftEdge=this._right,i.updateVertexIndex(this.createdVertex,s.index+1),this._editGeometry.notifyChanges({operation:e,addedVertices:[this.createdVertex]})}undo(){if(this.createdVertex==null||this._left==null||this._right==null)return null;const e=this._edge,t=e.component,i=this.createdVertex.leftEdge,s=this.createdVertex.rightEdge,r=i==null?void 0:i.leftVertex,n=s==null?void 0:s.rightVertex;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this._left),1),t.edges.splice(t.edges.indexOf(this._right),1),this._edge.leftVertex.leftEdge?t.edges.push(this._edge):t.edges.unshift(this._edge),r&&(r.rightEdge=e),n&&(n.leftEdge=e),r&&t.updateVertexIndex(r,r.index),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}accumulate(){return!1}}let Be=class oe{constructor(e,t,i){this._editGeometry=e,this._vertex=t,this._pos=i}apply(){const e=this._originalPosition==null;e&&(this._originalPosition=this._vertex.pos),this._apply(e?"apply":"redo")}undo(){this._vertex.pos=this._originalPosition,this._editGeometry.notifyChanges({operation:"undo",updatedVertices:[this._vertex]})}accumulate(e){return e instanceof oe&&e._vertex===this._vertex&&(this._pos=e._pos,this._apply("apply"),!0)}_apply(e){this._vertex.pos=this._pos,this._editGeometry.components.forEach(t=>t.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:e,updatedVertices:[this._vertex]})}};class He{constructor(e,t){this._editGeometry=e,this._component=t,this._createdEdge=null}apply(){let e="redo";if(this._createdEdge==null){e="apply";const t=this._component.getFirstVertex(),i=this._component.getLastVertex();if(this._component.isClosed()||this._component.vertices.length<3||t==null||i==null)return;this._createdEdge=new x(this._component,i,t)}this._createdEdge.leftVertex.rightEdge=this._createdEdge,this._createdEdge.rightVertex.leftEdge=this._createdEdge,this._component.edges.push(this._createdEdge),this._editGeometry.notifyChanges({operation:e})}undo(){this._createdEdge!=null&&(we(this._component.edges,this._createdEdge),this._createdEdge.leftVertex.rightEdge=null,this._createdEdge.rightVertex.leftEdge=null,this._editGeometry.notifyChanges({operation:"undo"}))}accumulate(){return!1}}let qe=class he{constructor(e,t,i,s){this._helper=e,this.dx=t,this.dy=i,this.dz=s}_move(e,t,i,s){this._helper.addDelta(e.pos,t,i,s)}apply(e){this._move(e,this.dx,this.dy,this.dz)}undo(e){this._move(e,-this.dx,-this.dy,-this.dz)}canAccumulate(e){return e instanceof he}accumulate(e,t){this._move(e,t.dx,t.dy,t.dz)}accumulateParams(e){this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz}};class z{get plane(){return this._plane}get requiresSplitEdgeLeft(){return!this._left.isOriginalDirection}get requiresSplitEdgeRight(){return!this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}constructor(e,t,i,s=0,r=Z.IMMEDIATE){this._helper=e,this._planeType=t,this._edge=i,this.distance=s,this._plane=B(),this._offsetPlane=B(),this._minDistance=-1/0,this._maxDistance=1/0,this._selectedArrow=1,r===Z.IMMEDIATE&&this._initialize()}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}_initializeNeighbors(){var r,n,h,u;const e=this._toXYZ(this._edge.leftVertex.pos),t=this._toXYZ((n=(r=this._edge.leftVertex.leftEdge)==null?void 0:r.leftVertex)==null?void 0:n.pos),i=this._toXYZ(this._edge.rightVertex.pos),s=this._toXYZ((u=(h=this._edge.rightVertex.rightEdge)==null?void 0:h.rightVertex)==null?void 0:u.pos);this._edgeDirection=H(c(),e,i),t?(this._left=this._computeNeighbor(e,t,this._edgeDirection),this._right=this._computeNeighbor(i,s,this._edgeDirection,this._left)):(this._right=this._computeNeighbor(i,s,this._edgeDirection),this._left=this._computeNeighbor(e,t,this._edgeDirection,this._right))}_toXYZ(e){return e!=null?this._helper.toXYZ(e):null}_pointToXYZ(e){return this._toXYZ(this._helper.pointToVector(e))}_computeNeighbor(e,t,i,s){const r=c();if(t){H(r,e,t);const n=!this._passesBisectingAngleThreshold(r,i);return{start:e,end:t,direction:n?this._bisectVectorsPerpendicular(i,r):r,isOriginalDirection:!n}}return this._helper.hasZ()?s&&(D(r,i,s.direction),D(r,r,i),w(r,r),Math.sign(r[1])!==Math.sign(i[0])&&q(r,r,-1)):E(r,-i[1],i[0],0),{start:e,end:t,direction:r,isOriginalDirection:!0}}_passesBisectingAngleThreshold(e,t){const i=Math.abs(Pe(t,e));return i>=ee&&i<=Math.PI-ee}_bisectVectorsPerpendicular(e,t){const i=X(e,t)<0?e:F(c(),e),s=Math.abs(X(i,t));if(!(s<te||s>1-te))return this._bisectDirection(i,t);const r=D(c(),i,[0,0,1]);return w(r,r)}_bisectDirection(e,t){const i=P(c(),e,t);return w(i,i)}_initializePlane(){const e=this._computeNormalDirection(this._left),t=this._computeNormalDirection(this._right);X(e,t)<0&&F(t,t),Ae(this._left.start,this._bisectDirection(e,t),this._plane)}_computeNormalDirection(e){const t=D(c(),e.direction,this._edgeDirection);w(t,t);const i=D(c(),this._edgeDirection,t);return this._planeType===N.XY&&(i[2]=0),w(i,i)}_initializeDistanceConstraints(){this._left.end==null||this.requiresSplitEdgeLeft||this._updateDistanceConstraint(C(this._plane,this._left.end)),this._right.end==null||this.requiresSplitEdgeRight||this._updateDistanceConstraint(C(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}_updateDistanceConstraint(e){e<=0&&(this._minDistance=Math.max(this._minDistance,e)),e>=0&&(this._maxDistance=Math.min(this._maxDistance,e))}_updateIntersectDistanceConstraint(e){const t=U(e),i=this._edgeDirection,s=P(c(),this._left.start,this._left.direction),r=P(c(),this._right.start,this._right.direction),n=this._pointInBasis2D(V(),t,i,this._left.start),h=this._pointInBasis2D(V(),t,i,s),u=this._pointInBasis2D(V(),t,i,this._right.start),a=this._pointInBasis2D(V(),t,i,r),[y]=Me({start:h,end:n,type:j.LINE},{start:a,end:u,type:j.LINE});if(!y)return;const v=W(V(),n,h);Ze(v,v);const p=W(V(),y,h),d=Ce(v,p),_=P(c(),s,q(c(),this._left.direction,-d)),f=C(e,_);this._updateDistanceConstraint(f)}_pointInBasis2D(e,t,i,s){return e[0]=J(t,s),e[1]=J(i,s),e}_offset(e,t){Number.isFinite(this._minDistance)&&(t=Math.max(this._minDistance,t)),Number.isFinite(this._maxDistance)&&(t=Math.min(this._maxDistance,t)),b(this._offsetPlane,this._plane),this._offsetPlane[3]-=t;const i=(r,n,h)=>n!=null&&ze(this._offsetPlane,r,P(c(),r,n),h),s=c();(e===this._edge.leftVertex?i(this._left.start,this._left.direction,s):i(this._right.start,this._right.direction,s))&&this._helper.copy(this._helper.fromXYZ(s,void 0,this._helper.getM(e.pos)),e.pos)}selectArrowFromStartPoint(e){this._selectedArrow=Re(this.plane,this._pointToXYZ(e))?1:-1}get selectedArrow(){return this._selectedArrow}signedDistanceToPoint(e){return C(this.plane,this._pointToXYZ(e))}apply(e){this._offset(e,this.distance)}undo(e){this._offset(e,0)}canAccumulate(e){return e instanceof z&&this._edge.leftVertex.index===e._edge.leftVertex.index&&this._edge.rightVertex.index===e._edge.rightVertex.index&&this._edge.component===e._edge.component&&this._maybeEqualsVec3(this._left.direction,e._left.direction)&&this._maybeEqualsVec3(this._right.direction,e._right.direction)&&L(U(this._plane),U(e._plane))}accumulate(e,t){const i=this._plane[3]-t._plane[3]+t.distance;this._offset(e,i)}accumulateParams(e){const t=e.distance-e._plane[3];this.distance=t+this._plane[3]}clone(){const e=new z(this._helper,this._planeType,this._edge,this.distance,Z.DEFERRED);return b(e._plane,this._plane),b(e._offsetPlane,this._offsetPlane),e._maxDistance=this._maxDistance,e._minDistance=this._minDistance,e._left=this._cloneNeighbor(this._left),e._right=this._cloneNeighbor(this._right),e._edgeDirection=A(c(),this._edgeDirection),e}_maybeEqualsVec3(e,t){return e==null&&t==null||e!=null&&t!=null&&L(e,t)}_cloneNeighbor({start:e,end:t,direction:i,isOriginalDirection:s}){return{start:A(c(),e),end:t!=null?A(c(),t):null,direction:A(c(),i),isOriginalDirection:s}}}const ee=$e(15),te=.001;var N,Z;(function(o){o[o.XYZ=0]="XYZ",o[o.XY=1]="XY"})(N||(N={})),function(o){o[o.IMMEDIATE=0]="IMMEDIATE",o[o.DEFERRED=1]="DEFERRED"}(Z||(Z={}));class Y{constructor(e,t,i=g.CUMULATIVE){this.origin=e,this.angle=t,this._accumulationType=i}_rotate(e,t){Se(e.pos,e.pos,this.origin,t)}apply(e){this._rotate(e,this.angle)}undo(e){this._rotate(e,-this.angle)}canAccumulate(e){return e instanceof Y&&$(this.origin,e.origin)}accumulate(e,t){const i=t._accumulationType===g.REPLACE;this._rotate(e,i?t.angle-this.angle:t.angle)}accumulateParams(e){const t=e._accumulationType===g.REPLACE;this.angle=t?e.angle:this.angle+e.angle}}class k{constructor(e,t,i,s,r=g.CUMULATIVE){this.origin=e,this.axis1=t,this.factor1=i,this.factor2=s,this._accumulationType=r,this.axis2=R(t[1],-t[0])}_scale(e,t,i){K(e.pos,e.pos,this.origin,this.axis1,t),K(e.pos,e.pos,this.origin,this.axis2,i)}apply(e){this._scale(e,this.factor1,this.factor2)}undo(e){this._scale(e,1/this.factor1,1/this.factor2)}canAccumulate(e){return e instanceof k&&$(this.origin,e.origin)&&$(this.axis1,e.axis1)}accumulate(e,t){t._accumulationType===g.REPLACE?this._scale(e,t.factor1/this.factor1,t.factor2/this.factor2):this._scale(e,t.factor1,t.factor2)}accumulateParams(e){const t=e._accumulationType===g.REPLACE;this.factor1=t?e.factor1:this.factor1*e.factor1,this.factor2=t?e.factor2:this.factor2*e.factor2}}class Fe{constructor(){this._operations=[],this._closed=!1}close(){this._closed=!0}apply(){for(const e of this._operations)e.apply()}undo(){for(let e=this._operations.length-1;e>=0;e--)this._operations[e].undo()}accumulate(e){if(this._closed)return!1;const t=this._operations.length?this._operations[this._operations.length-1]:null;return t&&t.accumulate(e)||(this._operations.push(e),e.apply()),!0}}class ae extends re{constructor(e){super(),this.data=e,this._undoStack=[],this._redoStack=[],this._listener=this.data.on("change",t=>{t.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:t.addedVertices,operation:t.operation}),t.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:t.removedVertices,operation:t.operation}),t.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:t.updatedVertices,operation:t.operation})})}destroy(){this._listener.remove()}splitEdge(e,t){return this._apply(new ke(this.data,e,t))}updateVertices(e,t,i=m.ACCUMULATE_STEPS){return this._apply(new Oe(this.data,e,t),i)}moveVertices(e,t,i,s,r=m.ACCUMULATE_STEPS){return this.updateVertices(e,new qe(this.data.coordinateHelper,t,i,s),r)}scaleVertices(e,t,i,s,r,n=m.ACCUMULATE_STEPS,h=g.CUMULATIVE){return this.updateVertices(e,new k(t,i,s,r,h),n)}rotateVertices(e,t,i,s=m.ACCUMULATE_STEPS,r=g.CUMULATIVE){return this.updateVertices(e,new Y(t,i,r),s)}removeVertices(e){return this._apply(new Ye(this.data,e,this._minNumVerticesPerType))}appendVertex(e){return this.data.components.length===0?null:this._apply(new Ne(this.data,this.data.components[0],e))}setVertexPosition(e,t){return this._apply(new Be(this.data,e,t))}offsetEdge(e,t,i,s=m.ACCUMULATE_STEPS){return this.updateVertices([t.leftVertex,t.rightVertex],new z(this.data.coordinateHelper,e,t,i),s)}closeComponent(e){return this.data.components.includes(e)?this._apply(new He(this.data,e)):null}canRemoveVertex(e){return e.vertices.length>this._minNumVerticesPerType}createUndoGroup(){const e=new Fe;return this._apply(e),Ie(()=>e.close())}undo(){if(this._undoStack.length>0){const e=this._undoStack.pop();return e.undo(),this._redoStack.push(e),e}return null}redo(){if(this._redoStack.length>0){const e=this._redoStack.pop();return e.apply(),this._undoStack.push(e),e}return null}get canUndo(){return this._undoStack.length>0}get canRedo(){return this._redoStack.length>0}get lastOperation(){return this._undoStack.length>0?this._undoStack[this._undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}_apply(e,t=m.ACCUMULATE_STEPS){return t!==m.NEW_STEP&&this.lastOperation!=null&&this.lastOperation.accumulate(e)||(e.apply(),this._undoStack.push(e),this._redoStack=[]),e}static fromGeometry(e,t){return new ae(O.fromGeometry(e,t))}}export{m as E,Ue as P,ae as V,z as Y,N as Z,qe as a,g as b,k as c,Y as e,G as l,O as p,Oe as t};
