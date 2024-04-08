import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { CalciteTile } from "@esri/calcite-components-react";

export default function Home() {
  return (
    <>
      <Link to="/map">
        <CalciteTile
          icon="map"
          heading="Maps"
          description="2D Map"
        />
      </Link>
      <Link to="/scene">
        <CalciteTile
          icon="globe"
          heading="Globe"
          description="3D Scene"
        />
      </Link>
    </>
  );
}