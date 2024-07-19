import { Carousel, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";
import { getAllImagesByStationId } from "../api/imagen";
import LastRecords from "./LastRecords";
import TemperatureCard from "./MeasureCards/TemperatureCard";
import WindCard from "./MeasureCards/WindCard";
import RainCard from "./MeasureCards/RainCard";
import Pressure from "./MeasureCards/Pressure";
import Light from "./MeasureCards/Light";
import Humidity from "./MeasureCards/Humidity";
import MeasureTable from "./MeasureTable";
import MeasureRange from "./MeasureRange";
import TemperatureCharts from "./MeasureCharts/TemperatureCharts";
import HumidityChart from "./MeasureCharts/HumidityChart";
import RainChart from "./MeasureCharts/RainChart";
import CloudChart from "./MeasureCharts/CloudChart";
import VisibilityChart from "./MeasureCharts/VisibilityChart";
import { getAverage, getMostFrequentDirection } from "../utils/Statistics";

function StationInfo({ station }) {
  const [images, setImages] = useState([]);
  const [dates, setDates] = useState(null);
  const [measureInfo, setMeasureInfo] = useState(null);
  const [measureRangeInfo, setMeasureRangeInfo] = useState(null);
  const [measureRangeInfoCards, setMeasureRangeInfoCards] = useState(null);

  const handleGetImages = async () => {
    try {
      const response = await getAllImagesByStationId({
        id: station.id_estacion,
      });
      setImages(response);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetImages();
    // eslint-disable-next-line
  }, [station]);

  useEffect(() => {
    if (!measureRangeInfo) return;
    const averageTemp = getAverage(measureRangeInfo, "ts");
    const minTemp = Math.min(...measureRangeInfo?.map((m) => m.tmin));
    const maxTemp = Math.max(...measureRangeInfo?.map((m) => m.tmax));
    const averageWind = getAverage(measureRangeInfo, "sa");
    const averageDirection = getMostFrequentDirection(measureRangeInfo, "rd");
    const averageRain = getAverage(measureRangeInfo, "pd");
    const averageCloud = getAverage(measureRangeInfo, "nub");
    const averagePressure = getAverage(measureRangeInfo, "pm");
    const averageLight = getAverage(measureRangeInfo, "lsm");
    const averageHumidity = getAverage(measureRangeInfo, "hr");

    setMeasureRangeInfoCards({
      ts: averageTemp,
      tmin: minTemp,
      tmax: maxTemp,
      sa: averageWind,
      rd: averageDirection,
      pd: averageRain,
      nub: averageCloud,
      pm: averagePressure,
      lsm: averageLight,
      hr: averageHumidity,
    });
  }, [measureRangeInfo]);

  return (
    <div>
      <div className="w-screen flex sm:justify-evenly items-center sm:flex-row flex-col">
        <LastRecords
          handleSetMeasureInfo={setMeasureInfo}
          handleSetMeasureRangeInfo={setMeasureRangeInfo}
          handleSetDate={setDates}
          estacion={station}
        />
        <div className="flex flex-col justify-center items-center py-3 w-max">
          <Divider type="vertical" className="h-12 bg-gray-400" />
          <p className="text-lg text-center my-4 text-gray-400">o</p>
          <Divider type="vertical" className="h-12 bg-gray-400" />
        </div>
        <MeasureRange
          handleSetMeasureInfo={setMeasureInfo}
          handleSetMeasureRangeInfo={setMeasureRangeInfo}
          handleSetDates={setDates}
          estacion={station}
        />
      </div>
      <div className="flex lg:flex-row flex-col justify-center gap-4">
        <div className="text-main-blue px-8 lg:w-1/2 w-full py-4">
          <p className="font-bold text-4xl text-center">{station.nombre}</p>
          <div className="flex items-center text-xl justify-center gap-8 py-4">
            <div>
              <p>
                <FaMapLocationDot size={25} className="inline mr-3" />
                {station.departamento}, {station.municipio}
              </p>
            </div>
            <div className="flex 2xl:flex-col">
              <p>
                <TbWorldLatitude size={25} className="inline mr-3" />
                Latitud: {station.latitud}
              </p>

              <p>
                <TbWorldLongitude size={25} className="inline mr-3" />
                Longitud: {station.longitud}
              </p>
            </div>
          </div>
          <Carousel autoplay>
            {images.map((image) => (
              <div key={image.id_imagen}>
                <img
                  src={image.url}
                  alt={station.nombre}
                  className="w-full h-96"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="text-main-blue px-8 lg:w-1/2 w-full py-4">
          <p className="font-bold text-4xl text-center pb-12">
            Mediciones {dates}
          </p>
          {measureInfo ? (
            <div className="flex flex-wrap gap-4 justify-center">
              <TemperatureCard measureInfo={measureInfo[0]} />
              <WindCard measureInfo={measureInfo[0]} />
              <RainCard measureInfo={measureInfo[0]} />
              <Pressure measureInfo={measureInfo[0]} />
              <Light measureInfo={measureInfo[0]} />
              <Humidity measureInfo={measureInfo[0]} />
            </div>
          ) : null}
          {measureRangeInfo && measureRangeInfoCards ? (
            <>
              <p className="text-sm text-center text-gray-500 -mt-10 mb-4">
                Promedios de mediciones en el rango de fechas seleccionado
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <TemperatureCard measureInfo={measureRangeInfoCards} />
                <WindCard measureInfo={measureRangeInfoCards} />
                <RainCard measureInfo={measureRangeInfoCards} />
                <Pressure measureInfo={measureRangeInfoCards} />
                <Light measureInfo={measureRangeInfoCards} />
                <Humidity measureInfo={measureRangeInfoCards} />
              </div>
            </>
          ) : null}
        </div>
      </div>
      {measureInfo ? (
        <div className="flex justify-center">
          {measureInfo ? <MeasureTable measureInfo={measureInfo[0]} /> : null}
        </div>
      ) : null}
      {measureRangeInfo ? (
        <div className="w-full justify-center">
          <TemperatureCharts measureRangeInfo={measureRangeInfo} />
          <div className="flex lg:flex-row flex-col justify-center flex-wrap">
            <HumidityChart measureRangeInfo={measureRangeInfo} />
            <RainChart measureRangeInfo={measureRangeInfo} />
            <CloudChart measureRangeInfo={measureRangeInfo} />
            <VisibilityChart measureRangeInfo={measureRangeInfo} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default StationInfo;
