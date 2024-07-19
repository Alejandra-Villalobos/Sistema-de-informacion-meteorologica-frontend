import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import pin from "../assets/pin.png";
import Header from "../components/Header";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import { getAllStationsService } from "../api/station";
import StationInfo from "../components/StationInfo";

const icon = new Icon({
  iconUrl: pin,
  iconSize: [45, 60],
});

function Home() {
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);

  const handleGetAllStations = async () => {
    try {
      const response = await getAllStationsService();
      setStations(response);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetAllStations();
  }, []);

  const handleMarkerClick = (station) => {
    setSelectedStation(station);
    window.scrollTo({ top: 725, behavior: "smooth" })
  };

  return (
    <div>
      <Header />
      <h1 className="text-2xl text-center my-4 text-main-blue">
        Selecciona una estación meteorológica
      </h1>
      <div className="flex justify-center">
        <MapContainer
          center={[13.6914, -88.8821]}
          zoom={9}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {stations.map((station) => (
            <Marker
              key={station.id_estacion}
              position={[station.latitud, station.longitud]}
              icon={icon}
              eventHandlers={{
                click: () => handleMarkerClick(station),
              }}
            >
              <Tooltip placement="top">
                <p>{station.nombre}</p>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {selectedStation ? <StationInfo station={selectedStation} /> : null}
    </div>
  );
}

export default Home;
