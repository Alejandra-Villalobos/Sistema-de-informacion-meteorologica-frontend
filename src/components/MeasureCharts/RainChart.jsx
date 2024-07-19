import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 border border-gray-300">
                <p>{`${label}`}</p>
                <p className="text-[#8884d8]">{`Precipitación - 7:00: ${payload[0].value}`}</p>
                <p className="text-[#82ca9d]">{`Precipitación - 14:00: ${payload[1].value}`}</p>
                <p className="text-[#ffc658]">{`Precipitación - 21:00: ${payload[2].value}`}</p>
                <p className="font-bold text-center">{`Total: ${payload.reduce((acc, item) => acc + item.value, 0)}`}</p>
            </div>
        );
    }
    return null;
};

function RainChart({ measureRangeInfo }) {
  // Transformar los datos
  const data = measureRangeInfo.flatMap((measure) => {
    const date = `${measure.fecha.split("-").reverse()[0]}/${
      measure.fecha.split("-").reverse()[1]
    }`;
    return [
      {
        dateHour: date,
        "Precipitación - 7:00": measure.p07,
        "Precipitación - 14:00": measure.p14,
        "Precipitación - 21:00": measure.p21,
      },
    ];
  });
  return (
    <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
      <p className="text-2xl text-center my-4 text-main-blue">
        Gráfica de precipitación (mm)
      </p>
      <BarChart
        width={500}
        height={300}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dateHour" />
        <YAxis />
        <Tooltip content={customTooltip} />
        <Legend />
        <Bar dataKey="Precipitación - 7:00" stackId="a" fill="#8884d8" />
        <Bar dataKey="Precipitación - 14:00" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Precipitación - 21:00" stackId="a" fill="#ffc658" />
      </BarChart>
    </div>
  );
}

export default RainChart;
