import{aj as m,ek as n,P as p,b0 as l,E as i,F as e,dG as d,J as c}from"./index-D2dWKXoe.js";import{S as u}from"./I3SMeshView3D-CV2S1nIo.js";import{n as h}from"./LayerView3D-BWp2guyo.js";import{u as g}from"./LayerView-CdvlOxD9.js";import"./LayerElevationProvider-cyADqo_8.js";import"./RenderTexture-CyTUm68P.js";import"./I3SOverrides-sCfgTMrQ.js";import"./I3SNode-D-1kHY-7.js";import"./I3SUtil-BnpEL__5.js";import"./I3SBinaryReader-6lwpcws_.js";import"./ReactiveSet-QNUlcWBN.js";import"./meshFeatureSet-BVWwfK3K.js";import"./Mesh-DwKIeXEi.js";import"./External-Cdfk_Ixq.js";import"./infoFor3D-CxOdoily.js";import"./FeatureLayerView3D-B1a075Fo.js";import"./FeatureLayerViewBase3D-hZjzQUqS.js";import"./HeatmapDensity.glsl-BgMqh3RC.js";import"./dehydratedFeatureComparison-DMPz3V4Q.js";import"./queryForSymbologySnapping-CXroAMaV.js";import"./hash-CcEbRgUF.js";import"./Graphics3DObjectStates-Cb5JHwgB.js";import"./optimizedFeatureQueryEngineAdapter-BkoAFv2c.js";import"./centroid-DdLmOD72.js";import"./PooledRBush-CAMpd6JN.js";import"./popupUtils-Dv06yRaF.js";import"./QueryEngine-3rzOuYnJ.js";import"./WhereClause-mbTZq1Ug.js";import"./TimeOnly-D0utIrTg.js";import"./timeSupport-CPgUqEcA.js";import"./json-Wa8cmqdu.js";import"./utils-BQwfAars.js";import"./utils-BQgBqKyD.js";import"./ClassBreaksDefinition-DsTASs_h.js";import"./FeatureStore-BDDt6QCR.js";import"./BoundsStore-BqU0iVCZ.js";import"./heatmapTextureUtils-DDKew7qH.js";import"./projectExtentUtils-D6AMB9tJ.js";import"./query-BHx-VbRk.js";import"./pbfQueryUtils-CqUhfAuD.js";import"./pbf-sj8ixt_4.js";import"./EventedSet-L6wH-tYo.js";import"./FeatureLayerView-BZzCQE2O.js";import"./RefreshableLayerView-C_CRn-mm.js";import"./SceneModification-BcuYgGMO.js";import"./persistable-D_p9bU_Z.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-DOAEwW0y.js";import"./SceneLayerWorker-gQAHlVfX.js";import"./makeScheduleFunction-CggzEh3c.js";const y=.2;let r=class extends u(h(g)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this._needsNormals=m("enable-feature:im-shading"),this.drapeTargetType=n.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t;return((t=this._controller)==null?void 0:t.updatingProgress)??0}get lodFactor(){var t,o,a,s;return((s=(a=(o=(t=this.view)==null?void 0:t.qualitySettings)==null?void 0:o.sceneService)==null?void 0:a.integratedMesh)==null?void 0:s.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?y:1}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),p),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const t=new l;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const t=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange(()=>t,()=>this._modifications=t.toArray(),p),"modifications")}};i([e()],r.prototype,"layer",void 0),i([e()],r.prototype,"i3slayer",null),i([e(d)],r.prototype,"updatingProgress",void 0),i([e()],r.prototype,"updatingProgressValue",null),i([e()],r.prototype,"lodFactor",null),i([e({readOnly:!0})],r.prototype,"progressiveLoadFactor",null),r=i([c("esri.views.3d.layers.SceneLayerView3D")],r);const ut=r;export{ut as default};