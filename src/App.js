import { MapContainer, TileLayer, useMap, ZoomControl } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "leaflet/dist/leaflet.css";
import "react-leaflet-fullscreen/styles.css";
import kmlText from "./pune-electoral-wards-2022.kml";
import ReactLeafletKml from "react-leaflet-kml";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

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

const ResizeMap = ({ visible }) => {
  const map = useMap();

  useEffect(() => {
    setTimeout(function () {
      map.invalidateSize();
    }, 400);
  }, [map, visible]);

  return null;
};

function App() {
  const [visible, setVisible] = useState(true);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div className="h-screen flex w-full container mx-auto">
      <div className="relative flex-1 w-full body">
        <AppHeader />
        <MapContainer
          center={defaultMapCenter}
          zoom={12}
          maxZoom={30}
          className="h-full w-full shadow"
          zoomControl={null}
        >
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png" />
          <ReactLeafletKml kml={kml} />
          <ResizeMap visible={visible} />
          <ZoomControl position="bottomright" />
          <FullscreenControl position="bottomright" />
        </MapContainer>
        <AppFooter />
      </div>
      <div
        className="relative h-full side-bar bg-white transition-width ease-in-out delay-150 duration-300"
        style={
          visible
            ? { width: 400, boxShadow: "0px 4px 20px 0px #00000040" }
            : { width: 36 }
        }
      >
        <button
          className="absolute top-10 -left-9 z-500"
          onClick={visible ? hide : show}
        >
          <img alt="btn" src={require("./sidebar-btn.png")} />
        </button>
        <div
          className="w-full h-full transition-display ease-in-out delay-150 duration-300"
          style={visible ? { display: "block" } : { display: "none" }}
        >
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default App;
