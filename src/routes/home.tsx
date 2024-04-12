import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { CalciteTile } from "@esri/calcite-components-react";

export default function Home() {
  return (
    <>
      <Link to="/map/2d">
        <CalciteTile
          icon="map"
          heading="Maps"
          description="2D Map"
        />
      </Link>
      <Link to="/map/3d">
        <CalciteTile
          icon="globe"
          heading="Globe"
          description="3D Scene"
        />
      </Link>
    </>
  );
}