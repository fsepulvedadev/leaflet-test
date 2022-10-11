import React from "react";
import { Marker } from "react-leaflet";
import IconLocation from "./IconLocation";

const Markers = () => {
  return (
    <Marker
      position={{ lat: "-38.9412346", lng: "-68.1154008" }}
      icon={IconLocation}
    />
  );
};

export default Markers;
