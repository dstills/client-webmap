import React from 'react';
import MapView from '@arcgis/core/views/MapView';

const MapContext = React.createContext<(MapView | null)>(null);

export default MapContext;