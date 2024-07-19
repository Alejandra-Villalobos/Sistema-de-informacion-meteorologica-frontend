import React from "react";

function Light({ measureInfo }) {
  return (
    <div className="h-48 w-48 border-main-blue border-4 rounded-lg mt-2">
      <p className="text-center text-xl font-bold bg-main-blue text-white">Luz solar (Horas)</p>
      <p className="text-center text-6xl mt-4 font-light">
        {measureInfo.lsm && !Number.isNaN(measureInfo.lsm) ? (
          <p className="text-center text-6xl mt-8 font-light text-white">
            {measureInfo.lsm.toFixed(2)}
          </p>
        ) : (
          <p className="text-center text-4xl mt-4 font-light text-black">No disponible</p>
        )}
      </p>
    </div>
  );
}

export default Light;
