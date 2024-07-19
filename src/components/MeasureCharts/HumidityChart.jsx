import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function HumidityChart({ measureRangeInfo }) {
  // Transformar los datos
  const data = measureRangeInfo.flatMap((measure) => {
    const date = `${measure.fecha.split("-").reverse()[0]}/${
      measure.fecha.split("-").reverse()[1]
    }`;
    return [
      {
        dateHour: `${date}-07:00`,
        date: `07:00`,
        "Humedad": measure.hr07
      },
      {
        dateHour: `${date}-14:00`,
        date: `14:00`,
        "Humedad": measure.hr14
      },
      {
        dateHour: `${date}-21:00`,
        date: `21:00`,
        "Humedad": measure.hr21
      },
    ];
  });

  return (
    <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
      <p className="text-2xl text-center my-4 text-main-blue">
        Gráfica de humedad (%)
      </p>
      <LineChart
        width={500}
        height={300}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dateHour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Humedad"
          stroke="#05c5ff"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}

export default HumidityChart;
