import React, { useContext, useRef, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import MapContext from './mapContext';
import {
  CalciteNavigation,
  CalciteNavigationLogo,
  CalciteNavigationUser,
  CalciteInputText,
  CalciteIcon,
} from '@esri/calcite-components-react'
import Search from '@arcgis/core/widgets/Search';
import "@esri/calcite-components/dist/components/calcite-navigation"
import "@esri/calcite-components/dist/components/calcite-navigation-logo"
import "@esri/calcite-components/dist/components/calcite-navigation-user"
import "@esri/calcite-components/dist/components/calcite-block"
import "@esri/calcite-components/dist/components/calcite-block-section"

interface HeaderProps {
  username: string;
  thumbnail: string;
  logoUrl: string;
  portalUrl: string;
  itemId: string;
  onItemIdChange: (newId: string) => void;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ username, thumbnail, logoUrl, portalUrl, itemId, onItemIdChange, children }) => {
  const mapView = useContext(MapContext);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mapView) {
      if (!headerRef.current) return;
      const search = new Search({
        view: mapView,
        container: headerRef.current
      });
      
      return () => {
        search.destroy();
      };
    }
  }, [mapView, headerRef]);
  
  return (
    <>
      <CalciteNavigationLogo
        slot='logo'
        href={portalUrl}
        thumbnail={logoUrl}
        heading='Custom ArcGIS React App'
      />
      <a slot='content-start'>
        <div ref={headerRef}></div>
      </a>
      <a slot='content-start'>
        <p>Item ID: </p>
        <CalciteInputText
          placeholder={itemId}
          onCalciteInputTextChange={(event) => onItemIdChange(event.target.value)}
        />
      </a>
      <Link to='/tables' slot='content-end'>
        <CalciteIcon icon="table" scale="l" />
      </Link>
      <Link to='/map/2d' slot='content-end'>
        <CalciteIcon icon="map" scale="l" />
      </Link>
      <Link to='/map/3d' slot='content-end'>
        <CalciteIcon icon="globe" scale="l" />
      </Link>
      <Link to='/' slot='content-end'>
        <CalciteIcon icon="home" scale="l" />
      </Link>
      <CalciteNavigationUser slot='user' username={username} thumbnail={thumbnail} />
    </>
  );
}

export default Header;