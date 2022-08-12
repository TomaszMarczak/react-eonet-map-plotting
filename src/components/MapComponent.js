import { MapContainer, TileLayer } from "react-leaflet";
import { useApp } from "../contexts/AppContext";

export default function MapComponent() {
  const {
    checkedIcebergs,
    checkedVolcanoes,
    checkedWildfires,
    volcanoes,
    wildfires,
    icebergs,
  } = useApp();
  return (
    <MapContainer
      center={[41.948081, -7.7007248]}
      zoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {checkedVolcanoes && volcanoes}
      {checkedWildfires && wildfires}
      {checkedIcebergs && icebergs}
    </MapContainer>
  );
}
