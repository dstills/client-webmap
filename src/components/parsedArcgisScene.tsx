import React, { useContext, useRef, useEffect, useState } from 'react';
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel
} from "@esri/calcite-components-react";
import SceneView from "@arcgis/core/views/SceneView";
import EsriMap from "@arcgis/core/Map";
import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

interface ArcgisSceneProps {
  style: React.CSSProperties;
  itemId: string;
  onViewChange: (view: SceneView) => void;
  children?: React.ReactNode;
}

const ParsedArcgisScene: React.FC<ArcgisSceneProps> = ({ itemId, style, onViewChange, children }) => {
  const sceneViewDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!sceneViewDiv.current) return;
    const webmap = new WebMap({
      portalItem: {
        id: itemId
      }
    });
    const esriMap = new EsriMap({
      basemap: "topo-vector"
    });
    const view = new SceneView({
      container: sceneViewDiv.current,
      map: esriMap,
      center: [-120.66193313, 35.2841434],
      zoom: 13
    });
    view.ui.move('zoom', 'top-right');
    webmap.load().then(() => {
      webmap.layers.forEach((layer) => {
        if (layer instanceof FeatureLayer) {
          const featureLayer = layer.clone();
          esriMap.add(featureLayer);
        }
      });
      // Works, but throws an error
      // webmap.tables.forEach((table) => {
      //   esriMap.add(table);
      // });
    });
    onViewChange(view);
    return () => {
      view.destroy();
    };
  }, [sceneViewDiv]);
  return (<>
    <CalcitePanel>
      <div style={style} ref={sceneViewDiv}></div>
    </CalcitePanel>
  </>)
}

export default ParsedArcgisScene;