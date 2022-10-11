import L from "leaflet";
import icon from "../assets/pin.png";

const IconLocation = L.icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: null,
  shadowAnchor: null,
  shadowSize: null,
  shadowUrl: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

export default IconLocation;
