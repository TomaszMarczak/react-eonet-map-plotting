import "./App.css";
import { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import LoaderComponent from "./components/LoaderComponent";
import PanelComponent from "./components/PanelComponent";

function App() {
  const [loading, setLoading] = useState([false]);
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

  return (
    <>
      {!loading ? (
        <PanelComponent
          checkedIcebergs={checkedIcebergs}
          checkedVolcanoes={checkedVolcanoes}
          checkedWildfires={checkedWildfires}
          setCheckedIcebergs={setCheckedIcebergs}
          setCheckedVolcanoes={setCheckedVolcanoes}
          setCheckedWildfires={setCheckedWildfires}
        />
      ) : null}
      {!loading ? (
        <MapComponent
          eventData={eventData}
          checkedIcebergs={checkedIcebergs}
          checkedVolcanoes={checkedVolcanoes}
          checkedWildfires={checkedWildfires}
        />
      ) : (
        <LoaderComponent />
      )}
    </>
  );
}

export default App;
