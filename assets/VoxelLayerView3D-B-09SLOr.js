import{D as m,aU as T,g3 as x,ar as o,P as b,g4 as r,g5 as w,eC as E,g6 as I,g7 as A,bU as M,g8 as L,dl as D,dk as P,d7 as F,aK as V,g as p,y as S,i as U,cS as v,g9 as $}from"./index-BhDz4nJ7.js";import{n as C}from"./LayerView3D-BKIbGugV.js";import{i as R}from"./PopupSceneLayerView-D8AVeTO_.js";import{u as z}from"./LayerView-C77uL6vR.js";import"./popupUtils-MZRTyQW5.js";var t;(function(e){e[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error"})(t||(t={}));const h=v(),g=v();let c=class extends R(C(z)){constructor(){super(...arguments),this._suspendedHandle=null,this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this.slicePlaneEnabled=!1,this._wasmLayerId=-1,this.ignoresMemoryFactor=!0,this._dbgFlags=new Set}get baseUrl(){var e;return((e=this.layer.parsedUrl)==null?void 0:e.path)??""}get wasmLayerId(){return this._wasmLayerId}initialize(){var u;if(this._dbgFlags.add(t.Error),this.view.viewingMode!=="local")throw new m("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(!((u=this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat)!=null&&u.textureFloat))throw new m("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const e=this.layer.spatialReference;if(!T(e,this.view.spatialReference))throw new m("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const s=this.layer.currentVariableId,i=this.layer.getVolume(s),l=this.layer.getVariable(s);if(i!=null&&l!=null){const d=i.dimensions[0],a=i.dimensions[1],y=i.zDimension;if(y>1){const f=i.dimensions[y],W=d.size*a.size*f.size;let _=1;switch(l.renderingFormat.type){case"Int16":case"UInt16":_=2;break;case"Int32":case"UInt32":case"Float32":_=4}this._futureMemory=_*W}}const n=x(this).then(d=>{this._wasmLayerId=d,this._suspendedHandle=o(()=>this.suspended,a=>{const y=r(this.view);y&&y.setEnabled(this,!a)},b),this.addHandles([o(()=>this.layer.renderMode,a=>this._pushRenderModeToWasm(a)),o(()=>this.layer.currentVariableId,a=>this._pushCurrentVariableIdToWasm(a)),o(()=>this.layer.getSections(),a=>this._pushSectionsToWasm(a)),o(()=>this.layer.getVariableStyles(),a=>this._pushVariableStylesToWasm(a)),o(()=>this.layer.getVolumeStyles(),a=>this._pushVolumeStylesToWasm(a)),o(()=>this.layer.enableDynamicSections,a=>this._pushEnableDynamicSectionsToWasm(a)),o(()=>this.layer.enableIsosurfaces,a=>this._pushEnableIsosurfacesToWasm(a)),o(()=>this.layer.enableSections,a=>this._pushEnableSectionsToWasm(a)),o(()=>this.layer.enableSlices,a=>this._pushEnableSlicesToWasm(a)),o(()=>this.slicePlaneEnabled,a=>this._pushAnalysisSliceToWasm(a,this.view.slicePlane)),o(()=>this.view.slicePlane,a=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,a)),o(()=>this.layer.minScale,a=>this._onScaleUpdated(this.view.scale,a,this.layer.maxScale),b),o(()=>this.layer.maxScale,a=>this._onScaleUpdated(this.view.scale,this.layer.minScale,a),b),o(()=>this.view.scale,a=>this._onScaleUpdated(a,this.layer.minScale,this.layer.maxScale),b)])}).catch(d=>{if(w(this),this._wasmLayerId=-1,d===-1)throw new m("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(d===-2)throw new m("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})});this.addResolvingPromise(n)}destroy(){w(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const e=r(this.view);return!(this._wasmLayerId<0||e==null)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return new E(this.usedMemory)}whenGraphicBounds(e,s){const i=e.attributes["Voxel.WorldPosition"];if(i){const l=I(),n=JSON.parse(i);if(A(n,this.view.renderSpatialReference,g,this.view.spatialReference||M.WGS84))return L(l,g),Promise.resolve({boundingBox:l,screenSpaceObjects:[]})}return Promise.reject()}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=r(this.view);e==null||e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=r(this.view);e==null||e.toggleFullVolumeExtentDraw(this)}getLayerTimes(){const e=r(this.view);return(e==null?void 0:e.getLayerTimes(this))??[]}getCurrentLayerTimeIndex(){const e=r(this.view);return(e==null?void 0:e.getCurrentLayerTimeIndex(this))??0}_pushRenderModeToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setRenderMode(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setStaticSections(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setCurrentVariable(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setVariableStyles(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!")}_accountForEnableSlices(e,s){const i=s??this.layer.enableSlices;for(let l=0;l<e.length;++l){const n=e[l];for(const u of n.slices)u.enabled=u.enabled&&i}}_pushVolumeStylesToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s&&(this._accountForEnableSlices(e,null),s.setVolumeStyles(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(e,s){const i=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+(i?"have WASM":"don't have WASM!!!"));let l=!1;if(i){if(s){const n=s.origin;D(h,s.basis1,s.basis2),P(h,h),l=i.setAnalysisSlice(this,e,n,h)}else F(h,0,0,1),l=i.setAnalysisSlice(this,!1,h,h);l||this._dbg(t.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}_pushEnableDynamicSectionsToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableDynamicSections(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!")}_pushEnableSlicesToWasm(e){const s=r(this.view);if(this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s){const i=this.layer.getVolumeStyles();this._accountForEnableSlices(i,e),s.setVolumeStyles(this,i)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableIsosurfaces(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!")}_pushEnableSectionsToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableSections(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!")}_onScaleUpdated(e,s,i){const l=$(e,s,i),n=r(this.view);n&&n.setIsInScaleRange(this,l)}async whenGraphicAttributes(e,s){return e}_dbg(e,s){this._dbgFlags.has(e)&&(e===t.Error?V.getLogger(this).error(s):V.getLogger(this).warn(s))}};p([S()],c.prototype,"layer",void 0),p([S()],c.prototype,"baseUrl",null),p([S({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0),c=p([U("esri.views.3d.layers.VoxelLayerView3D")],c);const O=c;export{O as default};