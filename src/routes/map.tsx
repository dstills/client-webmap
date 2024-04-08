import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel
} from "@esri/calcite-components-react";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import HeatMapRenderer from "@arcgis/core/renderers/HeatmapRenderer";
import TimeInterval from '@arcgis/core/TimeInterval'
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import Expand from "@arcgis/core/widgets/Expand";
import TimeExtent from "@arcgis/core/TimeExtent";
import { ArcgisMap, ArcgisBasemapGallery, ArcgisExpand, ArcgisTimeSlider, ArcgisLayerList, ArcgisCompass } from "@arcgis/map-components-react";
import Sidebar from "../components/sidebar";
import MapContext from "../components/mapContext";

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

export default function EsriMap() {
  const [mapView, setMapView] = useState<(MapView | null)>(null);
  const [itemId , setItemId] = useState<string>("fd17c88a44ff4a6590bed974ea7eb0b1");
  const handleArcgisViewReadyChange = async (event: { target: { view: MapView } }) => {
    const { view } = event.target;
    console.log("MapView ready", view);
    const timeExtent = await fetchTimeExtent("http://localhost:1337/api/features/", "sampledate");
    const geojsonLayer = new GeoJSONLayer({
      url: "http://localhost:1337/api/features/",
      title: "GeoJSON Layer",
      fields: [
        {
          name: "sampleid",
          alias: "Sample ID",
          type: "string",
        },
        {
          name: "locationid",
          alias: "Location ID",
          type: "oid",
        },
        {
          name: "sampledate",
          alias: "Date",
          type: "date",
        },
        {
          name: "depth",
          alias: "Depth",
          type: "double",
        }, {
          name: "PCE",
          alias: "Tetrachloroethene",
          type: "double",
        }
      ],
      outFields: ["*"],
      renderer: new HeatMapRenderer({
        valueExpression: "Number($feature.PCE)",
        colorStops: [
          { color: "rgba(0, 255, 0, 0)", ratio: 0 },
          { color: "rgb(0, 255, 0)", ratio: 0.1 },
          { color: "rgb(255, 255, 0)", ratio: 0.5 },
          { color: "rgb(255, 0, 0)", ratio: 1 },
        ],
        minDensity: 0,
        maxDensity: 0.1
      }),
      opacity: 0.75,
      timeExtent,
      popupTemplate: {
        title: "{sampleid}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "sampleid",
                label: "Sample ID",
              },
              {
                fieldName: "locationid",
                label: "Location ID",
              },
              {
                fieldName: "sampledate",
                label: "Date",
              },
              {
                fieldName: "depth",
                label: "Depth",
              },
              {
                fieldName: "PCE",
                label: "Tetrachloroethene",
              },
            ],
          },
        ],
      }
    });
    const timeSlider = new TimeSlider({
      container: document.createElement("div"),
      view,
      fullTimeExtent: timeExtent,
      stops: {
        interval: new TimeInterval({value: 1, unit: 'years'})
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
    <>
      <CalciteShellPanel slot="start" position="start">
        <Sidebar />
      </CalciteShellPanel>
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
    </>
  );
}