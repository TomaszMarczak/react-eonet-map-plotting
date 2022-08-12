import React, { useContext, useState, useEffect } from "react";
import { icebergIcon, volcanoIcon, wildfireIcon } from "../resources/Markers";
import { Marker, Popup } from "react-leaflet";

const AppContext = React.createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState([]);
  const [checkedVolcanoes, setCheckedVolcanoes] = useState(true);
  const [checkedWildfires, setCheckedWildfires] = useState(true);
  const [checkedIcebergs, setCheckedIcebergs] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events");
      const data = await res.json();
      setEventData(data.events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  const volcanoes = eventData
    .map((event) => {
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
    })
    .filter((event) => {
      return event !== null;
    });

  const wildfires = eventData
    .map((event) => {
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
    })
    .filter((event) => {
      return event !== null;
    });

  const icebergs = eventData
    .map((event) => {
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
    })
    .filter((event) => {
      return event !== null;
    });

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        eventData,
        setEventData,
        checkedIcebergs,
        checkedVolcanoes,
        checkedWildfires,
        setCheckedIcebergs,
        setCheckedVolcanoes,
        setCheckedWildfires,
        volcanoes,
        wildfires,
        icebergs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
