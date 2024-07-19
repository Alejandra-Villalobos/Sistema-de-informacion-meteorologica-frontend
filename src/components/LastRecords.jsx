import React, { useEffect, useState } from "react";
import { getLastSeven, getInfoByDate } from "../api/medicion";
import DateCard from "./DateCard";

function LastRecords({ handleSetMeasureInfo, handleSetMeasureRangeInfo, handleSetDate, estacion }) {
  const [lastDates, setLastDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleGetLastDates = async () => {
    try {
      const response = await getLastSeven({ name: estacion.nombre });
      setLastDates(response);
      if (response.length > 0) {
        setSelectedDate(response[response.length - 1].fecha); // Selecciona la última fecha por defecto
        handleSetDate(response[response.length - 1].fecha.split("-").reverse().join("/"));
        const responseInfo = await getInfoByDate({
          name: estacion.nombre,
          date: response[response.length - 1].fecha,
        });
        handleSetMeasureInfo(responseInfo);
        handleSetMeasureRangeInfo(null);
      }
    } catch (error) {
      console.error("Error fetching dates:", error);
    }
  };

  const handleSelectDate = async (date) => {
    setSelectedDate(date);
    handleSetDate(date.split("-").reverse().join("/"));
    try {
      const response = await getInfoByDate({ name: estacion.nombre, date });
      handleSetMeasureInfo(response);
      handleSetMeasureRangeInfo(null);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetLastDates();
    // eslint-disable-next-line
  }, [estacion]);

  return (
    <div className="sm:w-1/2 w-full flex flex-col justify-center py-3">
      <h2 className="text-2xl text-center my-4 text-main-blue">
        Últimos registros
      </h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {lastDates.map((date) => (
          <DateCard
            key={date.fecha}
            date={date.fecha}
            selected={date.fecha === selectedDate}
            onClick={() => handleSelectDate(date.fecha)}
          />
        ))}
      </div>
    </div>
  );
}

export default LastRecords;
