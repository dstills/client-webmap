import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/home";
import Scene from './routes/scene';
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import HeatMapRenderer from "@arcgis/core/renderers/HeatmapRenderer";
import TimeInterval from '@arcgis/core/TimeInterval'
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import Expand from "@arcgis/core/widgets/Expand";
import TimeExtent from "@arcgis/core/TimeExtent";
import SceneView from "@arcgis/core/views/SceneView";
import ParsedArcgisMap from "./components/parsedArcgisMap";
import ParsedArcgisScene from "./components/parsedArcgisScene";
import { ArcgisMap, ArcgisScene, ArcgisBasemapGallery, ArcgisExpand, ArcgisTimeSlider, ArcgisLayerList, ArcgisCompass } from "@arcgis/map-components-react";
import { setAssetPath as setCalciteAssetPath } from "@esri/calcite-components/dist/components";
setCalciteAssetPath(window.location.href + "/client-webmap");
// import { ArcgisScene } from "@arcgis/map-components-react";
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel,
  CalciteNavigation
} from "@esri/calcite-components-react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MapContext from "./components/mapContext";
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
  const [mapView, setMapView] = useState<(MapView | SceneView | null)>(null);
  const [itemId , setItemId] = useState<string>("fd17c88a44ff4a6590bed974ea7eb0b1"); //fd17c88a44ff4a6590bed974ea7eb0b1 1f8fc584adb04f64afe38fcb2aa7f3bc
  // const handleArcgisViewReadyChange = async (event: { target: { view: MapView | SceneView } }) => {
  //   const { view } = event.target;
  //   console.log("MapView ready", view);
  //   const timeExtent = await fetchTimeExtent("http://localhost:1337/api/features/", "sampledate");
  //   const geojsonLayer = new GeoJSONLayer({
  //     url: "http://localhost:1337/api/features/",
  //     title: "GeoJSON Layer",
  //     fields: [
  //       {
  //         name: "sampleid",
  //         alias: "Sample ID",
  //         type: "string",
  //       },
  //       {
  //         name: "locationid",
  //         alias: "Location ID",
  //         type: "oid",
  //       },
  //       {
  //         name: "sampledate",
  //         alias: "Date",
  //         type: "date",
  //       },
  //       {
  //         name: "depth",
  //         alias: "Depth",
  //         type: "double",
  //       }, {
  //         name: "PCE",
  //         alias: "Tetrachloroethene",
  //         type: "double",
  //       }
  //     ],
  //     outFields: ["*"],
  //     renderer: new HeatMapRenderer({
  //       valueExpression: "Number($feature.PCE)",
  //       colorStops: [
  //         { color: "rgba(0, 255, 0, 0)", ratio: 0 },
  //         { color: "rgb(0, 255, 0)", ratio: 0.1 },
  //         { color: "rgb(255, 255, 0)", ratio: 0.5 },
  //         { color: "rgb(255, 0, 0)", ratio: 1 },
  //       ],
  //       minDensity: 0,
  //       maxDensity: 0.1
  //     }),
  //     opacity: 0.75,
  //     timeExtent,
  //     popupTemplate: {
  //       title: "{sampleid}",
  //       content: [
  //         {
  //           type: "fields",
  //           fieldInfos: [
  //             {
  //               fieldName: "sampleid",
  //               label: "Sample ID",
  //             },
  //             {
  //               fieldName: "locationid",
  //               label: "Location ID",
  //             },
  //             {
  //               fieldName: "sampledate",
  //               label: "Date",
  //             },
  //             {
  //               fieldName: "depth",
  //               label: "Depth",
  //             },
  //             {
  //               fieldName: "PCE",
  //               label: "Tetrachloroethene",
  //             },
  //           ],
  //         },
  //       ],
  //     }
  //   });
  //   const timeSlider = new TimeSlider({
  //     container: document.createElement("div"),
  //     view,
  //     fullTimeExtent: timeExtent,
  //     stops: {
  //       interval: new TimeInterval({value: 1, unit: 'years'})
  //     },
  //   });
  //   const expand = new Expand({
  //     view,
  //     content: timeSlider,
  //     expandIconClass: "esri-icon-time-clock",
  //   });

  //   view.ui.add(expand, "top-right");
  //   view.map.add(geojsonLayer);
  //   setMapView(view);
  // };

  const handleViewChange = (view: MapView | SceneView) => {
    console.log("View changed", view);
    setMapView(view);
  };

  const handleItemIdChange = (newId: string) => {
    console.log("Item ID changed", newId);
    setItemId(newId);
  };
  return (
    <Router>
      <MapContext.Provider value={mapView}>
        <CalciteShell>
          <CalciteNavigation slot='header'>
            <Header
              username="Daniel Stills"
              thumbnail="/assets/user.jpg"
              logoUrl="/assets/logo.png"
              portalUrl="https://geosyntec.maps.arcgis.com"
              itemId={itemId}
              onItemIdChange={handleItemIdChange}
            />
          </CalciteNavigation>
          {mapView && <Sidebar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map/*" element={
              <Routes>
                <Route path="2d" element={
                  <ParsedArcgisMap
                    style={{ height: '100%', width: '100%' }}
                    itemId={itemId}
                    onViewChange={handleViewChange}
                  ></ParsedArcgisMap>} />
                  <Route path="3d" element={<ParsedArcgisScene
                    style={{ height: '100%', width: '100%' }}
                    itemId={itemId}
                    onViewChange={handleViewChange}
                  />} />
              </Routes>} />
          </Routes>
        </CalciteShell>
      </MapContext.Provider>
    </Router>
  )
}