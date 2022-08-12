import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icebergIcon, volcanoIcon, wildfireIcon } from "../resources/Markers";

export default function MapComponent({
  eventData,
  checkedIcebergs,
  checkedVolcanoes,
  checkedWildfires,
}) {
  const volcanoes = eventData.map((event) => {
    if (event.categories[0].id === "volcanoes") {
      return (
        <Marker
          key={event.id}
          position={[
            event.geometry[0].coordinates[1],
            event.geometry[0].coordinates[0],
          ]}
          icon={volcanoIcon}
        >
          <Popup>
            {event.title} <br />
            More info: <a href={event.sources[0].url}>Link</a>
          </Popup>
        </Marker>
      );
    }
    return null;
  });

  const wildfires = eventData.map((event) => {
    if (event.categories[0].id === "wildfires") {
      return (
        <Marker
          key={event.id}
          position={[
            event.geometry[0].coordinates[1],
            event.geometry[0].coordinates[0],
          ]}
          icon={wildfireIcon}
        >
          <Popup>
            {event.title} <br />
            More info: <a href={event.sources[0].url}>Link</a>
          </Popup>
        </Marker>
      );
    }
    return null;
  });
  const icebergs = eventData.map((event) => {
    if (event.categories[0].id === "seaLakeIce") {
      return (
        <Marker
          key={event.id}
          position={[
            event.geometry[0].coordinates[1],
            event.geometry[0].coordinates[0],
          ]}
          icon={icebergIcon}
        >
          <Popup>{event.title}</Popup>
        </Marker>
      );
    }
    return null;
  });
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
