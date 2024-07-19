import { DatePicker, ConfigProvider } from "antd";
import locale from "antd/locale/es_ES";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getInfoByDateRange } from "../api/medicion";

const { RangePicker } = DatePicker;

function MeasureRange({ handleSetMeasureInfo, handleSetMeasureRangeInfo, handleSetDates, estacion }) {
  const [dateRange, setDateRange] = useState([]);

  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    const month = d.getMonth() < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
    return `${d.getFullYear()}-${month}-${day}`;
  };

  const handleSearch = async () => {
    try {
      const response = await getInfoByDateRange({
        name: estacion.nombre,
        date1: formatDate(dateRange[0]),
        date2: formatDate(dateRange[1]),
      });
      handleSetMeasureRangeInfo(response);
      handleSetMeasureInfo(null);
      handleSetDates(
        `${formatDate(dateRange[0])
          .split("-")
          .reverse()
          .join("/")} - ${formatDate(dateRange[1])
          .split("-")
          .reverse()
          .join("/")}`
      );
    } catch (error) {}
  };

  return (
    <div className="flex flex-col justify-center py-3 w-max">
      <p className="text-2xl text-center my-4 text-main-blue">
        Rango de fechas
      </p>
      <div className="flex justify-center items-center py-3 w-max gap-2">
        <ConfigProvider locale={locale}>
          <RangePicker
            placeholder={["Fecha de inicio", "Fecha de fin"]}
            onChange={(dates) => {
              setDateRange(dates);
            }}
            style={{
              border: "3px solid #447EEC",
              color: "#447EEC",
              fontWeight: "bold",
              padding: "0.5rem",
            }}
          />
        </ConfigProvider>
        <button
          className="bg-main-blue text-white font-bold p-3 rounded-md border-2 border-white shadow-md"
          type="button"
          onClick={handleSearch}
        >
          <FaSearch size={20} />
        </button>
      </div>
    </div>
  );
}

export default MeasureRange;
