import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { volcanoIcon } from "../resources/Markers";

export default function MapComponent({ eventData }) {
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
      <Marker position={[41.948081, -7.7007248]} icon={volcanoIcon} />
    </MapContainer>
  );
}
