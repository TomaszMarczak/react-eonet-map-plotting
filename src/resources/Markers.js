import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

// Markers conversion
const volcano = renderToStaticMarkup(<i className="fa-solid fa-volcano"></i>);

// Markers list
export const volcanoIcon = new L.divIcon({
  html: volcano,
  className: "volcanoIcon",
});
