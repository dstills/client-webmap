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
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import HeatmapRenderer from '@arcgis/core/renderers/HeatmapRenderer';

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
    const geoJsonLayer = new GeoJSONLayer({
      url: "http://localhost:1337/api/features/",
      title: "GeoJSON Layer",
      fields: [{
        name: "sampleid",
        alias: "Sample ID",
        type: "string",
      }, {
        name: "locationid",
        alias: "Location ID",
        type: "string",
      }, {
        name: "PCE",
        alias: "PCE",
        type: "double",
      }, {
        name: "PCE_num",
        alias: "PCE_num",
        type: "double",
      
      }],
      outFields: ["*"],
      renderer: new HeatmapRenderer({
        field: "PCE_num",
        valueExpression: "Number($feature.PCE)",
        radius: 10,
        colorStops: [
          { ratio: 0, color: "rgba(255, 255, 255, 0)" },
          { ratio: 0.2, color: "rgba(255, 255, 255, 1)" },
          { ratio: 0.5, color: "rgba(255, 140, 0, 1)" },
          { ratio: 0.8, color: "rgba(255, 140, 0, 1)" },
          { ratio: 1, color: "rgba(255, 0, 0, 1)" }
        ],
        maxDensity: 25,
        minDensity: 0
      })
    });
    const esriMap = new EsriMap({
      basemap: "topo-vector",
      layers: [geoJsonLayer]
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