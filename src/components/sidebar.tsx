import React, { useContext, useRef, useEffect, useState } from 'react';
import MapContext from './mapContext';
import Legend from '@arcgis/core/widgets/Legend';
import Measurement from '@arcgis/core/widgets/Measurement';
import Editor from '@arcgis/core/widgets/Editor';
import Slice from '@arcgis/core/widgets/Slice';
import SlicePlane from '@arcgis/core/analysis/SlicePlane';
import {
  CalciteShellPanel,
  CalcitePanel,
  CalciteBlock,
  CalciteAction,
  CalciteButton,
  CalciteIcon,
  CalciteActionBar,
  CalciteActionGroup,
  CalciteShell,
  CalciteTooltip
} from '@esri/calcite-components-react'

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const mapView = useContext(MapContext);
  const legendRef = useRef<HTMLDivElement>(null);
  const editRef = useRef<HTMLDivElement>(null);
  const sliceRef = useRef<HTMLDivElement>(null);
  const [isSidebarExpanded, setIsSidebarExpanded ] = useState<boolean>(true);
  const [measurementWidget, setMeasurementWidget] = useState<Measurement | null>(null);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  }
  
  const toggleMeasurement = (activeTool: 'area' | 'distance' | 'direct-line') => {
    if (!measurementWidget) return;
    measurementWidget.activeTool = activeTool;
  }

  const clearMeasurement = () => {
    if (!measurementWidget) return;
    measurementWidget.clear();
  }

  useEffect(() => {
    if (mapView) {
      if (!legendRef.current) return;
      if (!editRef.current) return;
      const legend = new Legend({
        view: mapView,
        container: legendRef.current
      });
      const measurement = new Measurement({
        view: mapView
      });
      const editor = new Editor({
        view: mapView,
        container: editRef.current
      });
      mapView.ui.add(measurement, 'bottom-left');
      setMeasurementWidget(measurement);
    }
  }, [mapView, legendRef, editRef])

  return (
    <>
      <CalciteShellPanel slot="panel-start">
        <CalcitePanel heading='Toolbar' className='sidebar'>
          <CalciteBlock heading="Legend" collapsible>
            <div ref={legendRef}></div>
          </CalciteBlock>
          <CalciteBlock className="measurement-widget" heading="Measure" collapsible>
            <CalciteButton kind="brand" label="Line" onClick={() => toggleMeasurement('distance')}>
              <CalciteIcon icon="measure" textLabel="Line Measurement" />
            </CalciteButton>
            <CalciteButton kind="brand" label="Area" onClick={() => toggleMeasurement('area')}>
              <CalciteIcon icon="measure-area" textLabel="Area Measurement" />
            </CalciteButton>
            <CalciteButton kind="brand" label="Clear" onClick={() => clearMeasurement()}>
              <CalciteIcon icon="trash" textLabel="Clear Measurements" />
            </CalciteButton>
          </CalciteBlock>
          <CalciteBlock heading="Edit" collapsible>
            <div ref={editRef}></div>
          </CalciteBlock>
        </CalcitePanel>
      </CalciteShellPanel>
    </>
  );
}

export default Sidebar;