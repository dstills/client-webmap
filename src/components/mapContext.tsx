import React from 'react';
import MapView from '@arcgis/core/views/MapView';
import SceneView from '@arcgis/core/views/SceneView';

const MapContext = React.createContext<(MapView | SceneView | null)>(null);

export default MapContext;