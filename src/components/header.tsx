import React, { useContext, useRef, useEffect } from 'react';
import MapContext from './mapContext';
import {
  CalciteNavigation,
  CalciteNavigationLogo,
  CalciteNavigationUser,
  CalciteInputText,
  CalciteButton,
  CalciteIcon
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
    <CalciteNavigation slot='header'>
      <CalciteNavigationLogo
        slot='logo'
        href={portalUrl}
        thumbnail={logoUrl}
        heading='Custom ArcGIS React App'
      />
      <a slot='content-start'>
        <div ref={headerRef}></div>
      </a>
      <a slot='content-end'>
        <CalciteInputText
          placeholder={itemId}
          onCalciteInputTextChange={(event) => onItemIdChange(event.target.value)}
        >
          {/* <CalciteButton
            slot='action' kind="brand"
            onClick={() => {
              
              onItemIdChange(inputValue);
            }}>
            <CalciteIcon icon="submit"></CalciteIcon>
          </CalciteButton> */}
        </CalciteInputText>
      </a>
      <CalciteNavigationUser slot='user' username={username} thumbnail={thumbnail} />
    </CalciteNavigation>
  );
}

export default Header;