import "./App.css";
import { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import LoaderComponent from "./components/LoaderComponent";

function App() {
  const [loading, setLoading] = useState([false]);
  const [eventData, setEventData] = useState([]);

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
      {!loading ? <MapComponent eventData={eventData} /> : <LoaderComponent />}
    </>
  );
}

export default App;
