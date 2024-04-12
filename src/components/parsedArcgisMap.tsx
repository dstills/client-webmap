import React, { useContext, useRef, useEffect, useState } from 'react';
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel
} from "@esri/calcite-components-react";
import MapView from "@arcgis/core/views/MapView";
import EsriMap from "@arcgis/core/Map";
import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

interface ArcgisMapProps {
  style: React.CSSProperties;
  itemId: string;
  onViewChange: (view: MapView) => void;
  children?: React.ReactNode;
}

const ParsedArcgisMap: React.FC<ArcgisMapProps> = ({ itemId, style, onViewChange, children }) => {
  const mapViewDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mapViewDiv.current) return;
    const webmap = new WebMap({
      portalItem: {
        id: itemId
      }
    });
    const esriMap = new EsriMap({
      basemap: "topo-vector"
    });
    const view = new MapView({
      container: mapViewDiv.current,
      map: esriMap,
      center: [-120.66193313, 35.2841434], //35.28414348209453, -120.66193313770326
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
  }, [mapViewDiv]);
  return (<>
    <CalcitePanel>
      <div style={style} ref={mapViewDiv}></div>
    </CalcitePanel>
  </>)
}

export default ParsedArcgisMap