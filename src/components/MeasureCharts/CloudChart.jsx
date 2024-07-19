import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function CloudChart({ measureRangeInfo }) {
  // Transformar los datos
  const data = measureRangeInfo.flatMap((measure) => {
    const date = `${measure.fecha.split("-").reverse()[0]}/${
      measure.fecha.split("-").reverse()[1]
    }`;
    return [
      {
        dateHour: `${date}-07:00`,
        date: `07:00`,
        Nubosidad: measure.nub07,
      },
      {
        dateHour: `${date}-14:00`,
        date: `14:00`,
        Nubosidad: measure.nub14,
      },
      {
        dateHour: `${date}-21:00`,
        date: `21:00`,
        Nubosidad: measure.nub21,
      },
    ];
  });

  return (
    <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
      <p className="text-2xl text-center my-4 text-main-blue">
        Nubosidad (Décimas)
      </p>
      <AreaChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dateHour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="Nubosidad"
          stroke="#8884d8"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </div>
  );
}

export default CloudChart;
