import React, { useEffect, useState } from "react";
import { IoRainySharp } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";

function RainCard({ measureInfo }) {
  const [rainBgColor, setRainBgColor] = useState("");

  const handleRainBgColor = () => {
    if (measureInfo.pd >= 25) {
      setRainBgColor("bg-rain text-white");
    } else if (measureInfo.pd >= 5) {
      setRainBgColor("bg-soft-rain text-white");
    } else if (Number.isNaN(measureInfo.pd)) {
      setRainBgColor("bg-white");
    } else {
      setRainBgColor("bg-clear-sky");
    }
  };

  useEffect(() => {
    handleRainBgColor();
    // eslint-disable-next-line
  }, [measureInfo]);
  return (
    <div
      className={`h-48 w-48 border-main-blue border-4 rounded-lg mt-2 ${rainBgColor}`}
    >
      <p className="text-center text-xl font-bold text-white bg-main-blue">Precipitación (mm)</p>
      {measureInfo.pd && !Number.isNaN(measureInfo.pd) ? (
        <p className="flex items-center justify-center gap-3 text-center text-4xl py-4 font-light ">
          <IoRainySharp size={30} />
          {measureInfo.pd.toFixed(2)}
        </p>
      ) : (
        <p className="text-center text-2xl font-light text-black">No disponible</p>
      )}
      <p className="text-center text-xl font-bold">Nubosidad (d)</p>
      <div className="flex items-center justify-center ">
        {measureInfo.nub && !Number.isNaN(measureInfo.nub) ? (
          <p className="flex items-center justify-center gap-3 text-center text-4xl font-light">
            <FaCloud size={30} />
            {measureInfo.nub.toFixed(2)}
          </p>
        ) : (
          <p className="text-center text-2xl font-light text-black">No disponible</p>
        )}
      </div>
    </div>
  );
}

export default RainCard;
