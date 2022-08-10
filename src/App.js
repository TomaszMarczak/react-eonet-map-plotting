import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";

function App() {
  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;
