import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "leaflet/dist/leaflet.css";
import "react-leaflet-fullscreen/styles.css";
import kmlText from "./pune-electoral-wards-2022.kml";
import ReactLeafletKml from "react-leaflet-kml";

const readKml = async () => {
  return new Promise((resolve) => {
    fetch(kmlText)
      .then((r) => r.text())
      .then((text) => {
        return resolve(text);
      });
  });
};

const parser = new DOMParser();
const kml = parser.parseFromString(await readKml(), "text/xml");

// Pune center location
const defaultMapCenter = [18.5204, 73.8567];


function App() {
  return (
    <div className="App">
      <MapContainer
        center={defaultMapCenter}
        zoom={12}
        maxZoom={30}
        className="map-container shadow"
        zoomControl={null}
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png" />
        <FullscreenControl />
        <ZoomControl />
        <ReactLeafletKml kml={kml} />
      </MapContainer>
    </div>
  );
}

export default App;
