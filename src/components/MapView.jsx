import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import $ from "jquery";

const MapView = () => {
  useEffect(() => {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/https://giscopade.neuquen.gov.ar/geoserver/wms?request=getCapabilities",
      dataType: "xml",
      success: (xml) => {
        console.log(xml);
      },
    });
  }, []);

  return (
    <MapContainer center={{ lat: "-42.08574", lng: "-70.83348" }} zoom={4}>
      <TileLayer url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png" />
      <Markers />
    </MapContainer>
  );
};

export default MapView;
