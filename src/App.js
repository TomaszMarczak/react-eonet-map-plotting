import "./App.css";
import MapComponent from "./components/MapComponent";
import LoaderComponent from "./components/LoaderComponent";
import PanelComponent from "./components/PanelComponent";
import { useApp } from "./contexts/AppContext";

function App() {
  const { loading } = useApp();

  return (
    <>
      {!loading ? <PanelComponent /> : null}
      {!loading ? <MapComponent /> : <LoaderComponent />}
    </>
  );
}

export default App;
