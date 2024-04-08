import React, { useEffect, useRef } from 'react';
import SceneView from '@arcgis/core/views/SceneView';
import EsriMap from '@arcgis/core/Map';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Graphic from '@arcgis/core/Graphic';
import FeatureSet from '@arcgis/core/rest/support/FeatureSet';
import HeatMapRenderer from '@arcgis/core/renderers/HeatmapRenderer';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import Compass from '@arcgis/core/widgets/Compass';
import LayerList from '@arcgis/core/widgets/LayerList';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import Expand from '@arcgis/core/widgets/Expand';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import FieldContent from '@arcgis/core/popup/content/FieldsContent';
import RelationshipContent from '@arcgis/core/popup/content/RelationshipContent';

interface SceneProps {
  center: [number, number];
  zoom: number;
  onReady: (event: { target: { view: SceneView } }) => void;
  children?: React.ReactNode;
}

const Scene: React.FC<SceneProps> = ({ center, zoom, onReady, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
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
    const featureLayer = new FeatureLayer({
      url: 'https://services3.arcgis.com/g6eV2CrSSwCZj8Mc/arcgis/rest/services/SLO_Locations/FeatureServer',
      outFields: ['*']
    });
    const map = new EsriMap({
      basemap: 'satellite',
      ground: 'world-elevation',
      layers: [geojsonLayer, featureLayer]
    });
    const view = new SceneView({
      container: containerRef.current,
      map,
      center,
      zoom,
      ui: {
        components: []
      }
    });
    const basemapGallery = new BasemapGallery({
      view,
      container: document.createElement('div')
    });
    const basemapExpand = new Expand({
      view,
      content: basemapGallery.container,
      expandIconClass: 'esri-icon-basemap'
    });
    const layerList = new LayerList({
      view,
      container: document.createElement('div')
    });
    const layerListExpand = new Expand({
      view,
      content: layerList.container,
      expandIconClass: 'esri-icon-layers'
    });
    const compass = new Compass({
      view
    });
    view.ui.add(compass, 'top-left');
    view.ui.add(layerListExpand, 'bottom-right');
    view.ui.add(basemapExpand, 'top-right');
    view.when((e: SceneView) => {
      onReady({ target: { view } });
      const fieldContent = new FieldContent({
        fieldInfos: [
          {
            fieldName: 'siteid',
            label: 'Site ID'
          },
          {
            fieldName: 'locationid',
            label: 'Location ID'
          },
          {
            fieldName: 'latitude',
            label: 'Latitude'
          },
          {
            fieldName: 'longitude',
            label: 'Longitude'
          }
        ]
      })
      const popupTemplate = new PopupTemplate({
        title: '{siteid} - {locationid}',
        content: [fieldContent]
      });
      featureLayer.popupTemplate = popupTemplate;
    });

    return () => {
      view.destroy();
    };
  }, [containerRef]);
  return (
    <div
      style={{ height: '100%', width: '100%' }}
      ref={containerRef}>
        {children}
    </div>
  );
}

export default Scene;