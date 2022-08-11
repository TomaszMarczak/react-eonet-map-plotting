import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

// Markers conversion
const volcano = renderToStaticMarkup(
  <div className="redPin">
    <i className="fa-solid fa-volcano"></i>
  </div>
);
const wildfire = renderToStaticMarkup(
  <div className="orangePin">
    <i className="fa-solid fa-fire"></i>
  </div>
);
const iceberg = renderToStaticMarkup(
  <div className="bluePin">
    <i class="fa-solid fa-snowflake"></i>
  </div>
);

// Markers list
export const volcanoIcon = new L.divIcon({
  html: volcano,
});
export const wildfireIcon = new L.divIcon({
  html: wildfire,
});
export const icebergIcon = new L.divIcon({
  html: iceberg,
});
