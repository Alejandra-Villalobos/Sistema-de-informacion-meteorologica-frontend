import React from "react";

function Pressure({ measureInfo }) {
  return (
    <div className="h-48 w-48 border-main-blue border-4 rounded-lg mt-2">
      <p className="text-center text-xl font-bold bg-main-blue text-white">Presión (Pa)</p>
      {measureInfo.pm && !Number.isNaN(measureInfo.pm) ? (
        <p className="text-center text-6xl mt-8 font-light text-white">
          {measureInfo.pm.toFixed(2)}
        </p>
      ) : (
        <p className="text-center text-4xl mt-4 font-light text-black">No disponible</p>
      )}
    </div>
  );
}

export default Pressure;
