import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function TemperatureCharts({ measureRangeInfo }) {
  // Transformar los datos
  const data = measureRangeInfo.flatMap((measure) => {
    const date = `${measure.fecha.split("-").reverse()[0]}/${measure.fecha.split("-").reverse()[1]}`;
    return [
      {
        dateHour: `${date}-07:00`,
        date: `07:00`,
        "Temperatura seca": measure.ts07,
        "Temperatura húmeda": measure.th07,
      },
      {
        dateHour: `${date}-14:00`,
        date: `14:00`,
        "Temperatura seca": measure.ts14,
        "Temperatura húmeda": measure.th14,
      },
      {
        dateHour: `${date}-21:00`,
        date: `21:00`,
        "Temperatura seca": measure.ts21,
        "Temperatura húmeda": measure.th21,
      },
    ];
  });

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-2xl text-center my-4 text-main-blue">
        Gráficas de temperatura °C
      </p>
      <BarChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 40,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dateHour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Temperatura seca" fill="#16b2f0" />
        <Bar dataKey="Temperatura húmeda" fill="#c84efc" />
      </BarChart>
    </div>
  );
}

export default TemperatureCharts;
