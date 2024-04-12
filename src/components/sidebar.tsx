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
  CalciteTooltip,
  CalcitePopover
} from '@esri/calcite-components-react'

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const mapView = useContext(MapContext);
  const widgetRef = useRef<HTMLDivElement>(null);
  // const editRef = useRef<HTMLDivElement>(null);
  // const sliceRef = useRef<HTMLDivElement>(null);
  const [isSidebarExpanded, setIsSidebarExpanded ] = useState<boolean>(true);
  const [measurementWidget, setMeasurementWidget] = useState<Measurement | null>(null);
  const [legendWidget, setLegendWidget] = useState<Legend>(new Legend());
  const [activeWidget, setActiveWidget] = useState<string | null>(null);
  
  const toggleMeasurement = (activeTool: 'area' | 'distance' | 'direct-line') => {
    if (!measurementWidget) return;
    measurementWidget.activeTool = activeTool;
  }

  const clearMeasurement = () => {
    if (!measurementWidget) return;
    measurementWidget.clear();
  }

  const handleActionBarClick = (widget: string) => {
    setActiveWidget(activeWidget === widget ? null : widget);
  }

  const handlePopoverOpen = async (e: CustomEvent) => {
    console.log(mapView);
    if (!mapView) return;
    const popover = e.target as HTMLCalcitePopoverElement;
    const legendDiv = document.createElement('div');
    popover.appendChild(legendDiv);
    legendWidget.container = legendDiv;
    legendWidget.view = mapView;
  }

  useEffect(() => {
    if (!mapView || !mapView.ui) return;
    console.log('sidebar', mapView);
    // if (mapView) {
    //   console.log(mapView);
    //   const legend = new Legend({
    //     view: mapView
    //   });
    //   setLegendWidget(legend);
      // const measurement = new Measurement({
      //   view: mapView
      // });
      // const editor = new Editor({
      //   view: mapView
      // });
      // mapView.ui.add(measurement, 'bottom-left');
      // setMeasurementWidget(measurement);
    //   const actionBar = document.getElementById('action-bar') as HTMLCalciteActionBarElement;
    //   console.log(actionBar);
    //   actionBar.addEventListener('click', handleActionClick);
    //   document.addEventListener('calciteActionBarToggle', (e) => {
    //     isSidebarExpanded ? setIsSidebarExpanded(false) : setIsSidebarExpanded(true);
    //     mapView.padding = {
    //       left: isSidebarExpanded ? 0 : 300,
    //     };
    // });
    // }
    return () => {
      // if (mapView) {
      //   mapView.ui.remove('bottom-left');
      // }
      // const actionBar = document.querySelector('#action-bar') as HTMLCalciteActionBarElement;
      // actionBar.removeEventListener('click', handleActionClick);
    };
  }, [mapView]);
  // TODO: put the widgets inside the action bar so they're toggleable. Will be a better experience.
  return (
    <>
      <CalciteShellPanel slot="panel-start" collapsed={isSidebarExpanded}>
        <CalciteActionBar slot="action-bar" id="action-bar">
          <CalciteAction
            text="Legend"
            id="legend-action"
            icon="legend"
            // onClick={() => !isSidebarExpanded ? setIsSidebarExpanded(true) : setIsSidebarExpanded(false)}
          />
        </CalciteActionBar>
      </CalciteShellPanel>
      <CalcitePopover
        referenceElement="legend-action"
        label="Legend"
        height-scale="1"
        onCalcitePopoverOpen={handlePopoverOpen}
        >
        </CalcitePopover>
      {/* <CalcitePanel heading='Toolbar' className='sidebar'>
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
      </CalcitePanel> */}
    </>
  );
}

export default Sidebar;