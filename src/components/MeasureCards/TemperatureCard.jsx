import React, { useEffect, useState } from "react";
import { FaTemperatureHigh } from "react-icons/fa";

function TemperatureCard({ measureInfo }) {
  const [tempBgColor, setTempBgColor] = useState("");

  const handleTempBgColor = () => {
    if (measureInfo.ts >= 30) {
      setTempBgColor("bg-temp-red");
    } else if (measureInfo.ts >= 25) {
      setTempBgColor("bg-temp-yellow");
    } else if (measureInfo.ts >= 20) {
      setTempBgColor("bg-temp-green");
    } else if (Number.isNaN(measureInfo.ts)) {
      setTempBgColor("bg-white");
    } else {
      setTempBgColor("bg-temp-blue");
    }
  };

  useEffect(() => {
    handleTempBgColor();
    // eslint-disable-next-line
  }, [measureInfo]);

  return (
    <div
      className={`h-48 w-48 border-main-blue border-4 rounded-lg mt-2 ${tempBgColor}`}
    >
      <p className="text-center text-xl font-bold text-white bg-main-blue">Temperatura (°C)</p>
      {measureInfo.ts && !Number.isNaN(measureInfo.ts) ? (
        <p className="flex items-center justify-center gap-3 text-white text-center text-4xl font-light py-4">
          <FaTemperatureHigh size={30} />
          {measureInfo.ts.toFixed(2)}
        </p>
      ) : (
        <p className="text-center text-2xl text-white font-light">No disponible</p>
      )}
      <div className="flex justify-evenly">
        <div>
          <p className="text-center text-xl">Máxima</p>
          <p className="text-center text-white text-xl">
            {measureInfo.tmax && !Number.isNaN(measureInfo.tmax) ? (
              measureInfo.tmax.toFixed(2)
            ) : (
              <span className="text-lg text-white">No disponible</span>
            )}
          </p>
        </div>
        <div>
          <p className="text-center text-xl">Mínima</p>
          <p className="text-center text-xl text-white">
            {measureInfo.tmin && !Number.isNaN(measureInfo.tmin) ? (
              measureInfo.tmin.toFixed(2)
            ) : (
              <span className="text-lg text-black">No disponible</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TemperatureCard;
