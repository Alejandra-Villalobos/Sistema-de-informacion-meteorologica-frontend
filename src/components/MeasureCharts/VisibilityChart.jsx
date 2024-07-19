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

function VisibilityChart({ measureRangeInfo }) {
  // Transformar los datos
  const data = measureRangeInfo.flatMap((measure) => {
    const date = `${measure.fecha.split("-").reverse()[0]}/${
      measure.fecha.split("-").reverse()[1]
    }`;
    return [
      {
        dateHour: `${date}-07:00`,
        date: `07:00`,
        "Visibilidad": measure.vis07
      },
      {
        dateHour: `${date}-14:00`,
        date: `14:00`,
        "Visibilidad": measure.vis14
      },
      {
        dateHour: `${date}-21:00`,
        date: `21:00`,
        "Visibilidad": measure.vis21
      },
    ];
  });

  return (
    <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
      <p className="text-2xl text-center my-4 text-main-blue">
        Gráfica de visibilidad (Km)
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
          dataKey="Visibilidad"
          stroke="#e8072c"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}

export default VisibilityChart;