import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { TbPeace } from "react-icons/tb";
import { FaWind } from "react-icons/fa";

function WindCard({ measureInfo }) {
  const [windBgColor, setWindBgColor] = useState("");

  const handleWindBgColor = () => {
    if (measureInfo.sa >= 7) {
      setWindBgColor("bg-temp-red");
    } else if (measureInfo.sa >= 3) {
      setWindBgColor("bg-temp-yellow");
    } else if (Number.isNaN(measureInfo.sa)) {
      setWindBgColor("bg-white");
    } else {
      setWindBgColor("bg-temp-green");
    }
  };

  useEffect(() => {
    handleWindBgColor();
    // eslint-disable-next-line
  }, [measureInfo]);

  const rotation = (direction) => {
    switch (direction) {
      case "N":
        return 0;
      case "NE":
        return 45;
      case "E":
        return 90;
      case "SE":
        return 135;
      case "S":
        return 180;
      case "SW":
        return 225;
      case "W":
        return 270;
      case "NW":
        return 315;
      default:
        return 0;
    }
  };
  return (
    <div
      className={`h-48 w-48 border-main-blue border-4 rounded-lg mt-2 ${windBgColor}`}
    >
      <p className="text-center text-xl font-bold text-white bg-main-blue">Viento (Beaufort)</p>

      {!Number.isNaN(measureInfo.sa) ? (
        <p className="flex items-center text-white justify-center gap-3 text-center text-4xl py-4 font-light">
          <FaWind size={30} />
          {measureInfo.sa.toFixed(2)}
        </p>
      ) : (
        <p className="text-center text-2xl py-4 font-light text-black">No disponible</p>
      )}
      <p className="text-center text-xl font-bold">Rumbo</p>
      <div className="flex items-center gap-2 justify-center text-white ">
        <p className="text-center text-4xl font-bold">
          {measureInfo.rd ? (
            measureInfo.rd
          ) : (
            <span className="text-2xl text-black">No disponible</span>
          )}
        </p>
        {measureInfo.rd !== "C" ? (
          <FaArrowUp
            size={30}
            style={{ transform: `rotate(${rotation(measureInfo.rd)}deg)` }}
          />
        ) : (
          <TbPeace size={30} />
        )}
      </div>
    </div>
  );
}

export default WindCard;
