import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import pin from "../assets/pin.png";
import Header from "../components/Header";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import { getAllStationsService } from "../api/station";
import StationInfo from "../components/StationInfo";
import { Select } from "antd";

const icon = new Icon({
  iconUrl: pin,
  iconSize: [45, 60],
});

function Home() {
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [position, setPosition] = useState([13.6914, -88.8821]);
  const [zoom, setZoom] = useState(9);

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
    setTimeout(() => {
      window.scrollTo({
        top: 725,
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <div>
      <Header />
      <h1 className="text-2xl text-center my-4 text-main-blue">
        Selecciona una estación meteorológica
      </h1>
      <div className="w-full flex justify-center">
      <Select
        showSearch
        className="w-11/12 mb-4"
        suffixIcon={null}
        placeholder="Ingrese el nombre de la estación"
        optionFilterProp="label"
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={stations.map((station) => ({
          value: station.id_estacion,
          label: station.nombre,
        }))
        }
      />
      </div>
      <div className="flex justify-center">
        <MapContainer
          center={position}
          zoom={zoom}
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
