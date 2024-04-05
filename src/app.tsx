import React, { useState } from "react";
import "./index.css";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import HeatMapRenderer from "@arcgis/core/renderers/HeatmapRenderer";
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import Expand from "@arcgis/core/widgets/Expand";
import TimeExtent from "@arcgis/core/TimeExtent";
import { ArcgisMap, ArcgisBasemapGallery, ArcgisExpand, ArcgisTimeSlider, ArcgisLayerList, ArcgisCompass } from "@arcgis/map-components-react";
import { setAssetPath as setCalciteAssetPath } from "@esri/calcite-components/dist/components";
setCalciteAssetPath(window.location.href);
// import { ArcgisScene } from "@arcgis/map-components-react";
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel
} from "@esri/calcite-components-react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MapContenxt from "./components/mapContext";
// import defineCustomElements to register custom elements with the custom elements registry
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
// Register custom elements
defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });
defineCalciteElements(window,{ resourcesUrl: "https://js.arcgis.com/calcite-components/2.5.1/assets" });

const fetchTimeExtent = async (url: string, time_field: string): Promise<TimeExtent> => {
  const response = await fetch(url)
  if (!response.ok)  return new TimeExtent()
  const data = await response.json()
  if (!data?.features) return new TimeExtent()
  return new TimeExtent({
    start: new Date(Math.min(...data.features.map((feature: any) => feature.properties[time_field]))),
    end: new Date(Math.max(...data.features.map((feature: any) => feature.properties[time_field])) + (24 * 60 * 60 * 1000)) // Maximum time, plus one day
  })
}

export default function App() {
  const [mapView, setMapView] = useState<(MapView | null)>(null);
  const [itemId , setItemId] = useState<string>("fd17c88a44ff4a6590bed974ea7eb0b1");// b688d7686c904b439e5a7fb3657a62f8 #3893f5c499df4167b62fac051c817d81# 1f8fc584adb04f64afe38fcb2aa7f3bc fd17c88a44ff4a6590bed974ea7eb0b1

  const handleArcgisViewReadyChange = async (event: { target: { view: MapView } }) => {
    const { view } = event.target;
    console.log("MapView ready", view);
    const geojsonLayer = new GeoJSONLayer({
      url: "http://localhost:1337/api/features/",
      title: "GeoJSON Layer",

    });
    const timeSlider = new TimeSlider({
      container: document.createElement("div"),
      view,
      fullTimeExtent: {
        start: new Date(2004,1,1),
        end: new Date(2024,4,4)
      },
    });
    const expand = new Expand({
      view,
      content: timeSlider,
      expandIconClass: "esri-icon-time-clock",
    });

    view.ui.add(expand, "top-right");
    view.map.add(geojsonLayer);
    setMapView(view);
  };

  const handleItemIdChange = (newId: string) => {
    console.log("Item ID changed", newId);
    setItemId(newId);
  };

  return (
    <MapContenxt.Provider value={mapView}>
      <CalciteShell>
        <Header
          username="Daniel Stills"
          thumbnail="/assets/user.jpg"
          logoUrl="/assets/logo.png"
          portalUrl="https://geosyntec.maps.arcgis.com"
          itemId={itemId}
          onItemIdChange={handleItemIdChange}
        />
        <Sidebar />
        <CalcitePanel>
          <ArcgisMap
            style={{ height: '100%', width: '100%' }}
            itemId={itemId}
            onArcgisViewReadyChange={handleArcgisViewReadyChange}
          >
            <ArcgisExpand>
              <ArcgisBasemapGallery />
            </ArcgisExpand>
            <ArcgisExpand position="bottom-right">
              <ArcgisLayerList />
            </ArcgisExpand>
            <ArcgisCompass />
          </ArcgisMap>
        </CalcitePanel>
      </CalciteShell>
    </MapContenxt.Provider>
  )
}