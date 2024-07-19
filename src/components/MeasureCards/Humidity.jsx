import React, { useEffect, useState } from "react";
import { IoIosWater } from "react-icons/io";

function Humidity({ measureInfo }) {
  const [humidityBgColor, setHumidityBgColor] = useState("");

  const handleHumidityBgColor = () => {
    if (measureInfo.hr >= 69) {
      setHumidityBgColor("bg-humid");
    } else if (measureInfo.hr >= 39) {
      setHumidityBgColor("bg-temp-green");
    } else if (Number.isNaN(measureInfo.hr)) {
      setHumidityBgColor("bg-white");
    } else {
      setHumidityBgColor("bg-dry");
    }
  };

  useEffect(() => {
    handleHumidityBgColor();
    // eslint-disable-next-line
  }, [measureInfo]);
  return (
    <div
      className={`h-48 w-48 border-main-blue border-4 rounded-lg mt-2 ${humidityBgColor}`}
    >
      <p className="text-center text-xl font-bold bg-main-blue text-white">Humedad (%)</p>
      {!Number.isNaN(measureInfo.hr) ? (
        <p className="flex items-center justify-center gap-3 text-center text-6xl pt-8 font-light text-white">
          <IoIosWater size={50} />
          {measureInfo.hr.toFixed(2)}
        </p>
      ) : (
        <p className="text-center text-4xl pt-4 font-light text-black">No disponible</p>
      )}
    </div>
  );
}

export default Humidity;
