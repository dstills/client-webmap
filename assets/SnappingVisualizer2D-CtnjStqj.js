import{cF as p,cG as o,cH as m,cI as a,cJ as S,aP as u,bl as d,cK as l,cL as s,cM as c,cN as M,cO as P,cP as h,cQ as C,cR as g,cS as f}from"./index-nBWeBKPv.js";import{r as I}from"./SnappingVisualizer-CjKEaB7x.js";class L extends I{constructor(e){super(),this._graphicsLayer=e,this._symbolPairingsByType=new Map}visualizeIntersectionPoint(e,t){return this._visualizeSnappingIndicator(new p({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("intersectionPoint",t.view.effectiveTheme.accentColor))}visualizePoint(e,t){return this._visualizeSnappingIndicator(new p({x:e.point[0],y:e.point[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("point",t.view.effectiveTheme.accentColor))}visualizeLine(e,t){return this._visualizeSnappingIndicator(new o({paths:[[e.lineStart,e.lineEnd]],spatialReference:t.spatialReference}),this._getOrCreateSymbol("line",t.view.effectiveTheme.accentColor))}visualizeParallelSign(e,t){return this._visualizeSnappingIndicator(new o({paths:[[e.lineStart,e.lineEnd]],spatialReference:t.spatialReference}),this._getOrCreateSymbol("parallelSign",t.view.effectiveTheme.accentColor))}visualizeRightAngleQuad(e,t){const r=g(),i=g(),y=f();m(r,a(e.centerVertex),a(e.previousVertex)),m(i,a(e.nextVertex),a(e.previousVertex)),S(y,r,i);const b=`rightAngleQuad${y[2]<0?45:225}`;return this._visualizeSnappingIndicator(new o({paths:[[e.previousVertex,e.centerVertex,e.nextVertex]],spatialReference:t.spatialReference}),this._getOrCreateSymbol(b,t.view.effectiveTheme.accentColor))}_visualizeSnappingIndicator(e,t){const r=new u({geometry:e,symbol:t});return this._graphicsLayer.add(r),d(()=>{this._graphicsLayer.remove(r)})}_getOrCreateSymbol(e,t){var i;const r=this._symbolPairingsByType;return((i=r.get(e))==null?void 0:i.color)!==t&&r.set(e,{color:t,symbol:v(e,t)}),r.get(e).symbol}}function v(n,e){const t=[...e.toRgb(),255*e.a];switch(n){case"point":return new h({outline:{width:.5,color:[0,0,0,1]},size:10,color:e});case"intersectionPoint":return new h({outline:new C({width:1.5,color:e}),size:15,color:[0,0,0,0]});case"line":return new l({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:M.Butt,joinStyle:P.Round,miterLimit:10,width:s(c.lineHintWidthTarget),color:t}]}}});case"parallelSign":return new l({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}});case"rightAngleQuad45":case"rightAngleQuad225":{const r=n==="rightAngleQuad45"?45:225;return new l({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:s(c.rightAngleHintSize),rotation:r,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:s(c.rightAngleHintOutlineSize),color:t},{type:"CIMSolidFill",enable:!0,color:[...e.toRgb(),255*e.a*.4]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}})}}}export{L as f};
