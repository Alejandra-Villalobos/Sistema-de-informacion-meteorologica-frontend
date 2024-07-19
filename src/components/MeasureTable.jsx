import React from "react";
import { Table } from "antd";
import { FaArrowUp } from "react-icons/fa6";
import { TbPeace } from "react-icons/tb";
import temp from "../assets/high-temperature.png";
import wetTemp from "../assets/wet.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/heavy-rain.png";
import wind from "../assets/wind.png";
import cloud from "../assets/cloudy.png";
import visibility from "../assets/visibility.png";
import ground from "../assets/ground.png";

import sunrise from "../assets/sunrise.png";
import sun from "../assets/sun.png";
import night from "../assets/night.png";

/*
<a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/half-moon" title="half moon icons">Half moon icons created by Peerapak Takpho - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/temperature" title="temperature icons">Temperature icons created by smashingstocks - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/wet" title="wet icons">Wet icons created by Stasy - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/humidity" title="humidity icons">Humidity icons created by Pixel perfect - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by apien - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/wind" title="wind icons">Wind icons created by Good Ware - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/clouds" title="clouds icons">Clouds icons created by Good Ware - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/eye" title="eye icons">Eye icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ground" title="ground icons">Ground icons created by juicy_fish - Flaticon</a>
*/

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

const columns = [
  {
    title: "",
    dataIndex: "hor",
    key: "hor",
  },
  {
    title: (
      <div className="flex items-center">
        <img
          src={temp}
          alt="Temperature icons created by smashingstocks - Flaticon"
          className="w-8 h-8"
        />
        Temperatura (°C)
      </div>
    ),
    dataIndex: "ts",
    key: "ts",
    render: (text) => <p className=" text-center text-xl">{text}</p>,
  },
  {
    title: (
      <div className="flex items-center">
        <img
          src={wetTemp}
          alt="Wet icons created by Stasy - Flaticon"
          className="w-8 h-8"
        />
        Temperatura húmeda (%)
      </div>
    ),
    dataIndex: "th",
    key: "th",
    render: (text) => <p className=" text-center text-xl">{text}</p>,
  },
  {
    title: (
      <div className="flex items-center">
        <img
          src={humidity}
          alt="Humidity icons created by Pixel perfect - Flaticon"
          className="w-8 h-8"
        />
        Humedad relativa (%)
      </div>
    ),
    dataIndex: "hr",
    key: "hr",
    render: (text) => <p className=" text-center text-xl">{text}</p>,
  },
  {
    title: (
      <div className="flex items-center">
        <img
          src={rain}
          alt="Rain icons created by apien - Flaticon"
          className="w-8 h-8"
        />
        Precipitación (mm)
      </div>
    ),
    dataIndex: "pd",
    key: "pd",
    render: (text) => <p className=" text-center text-xl">{text}</p>,
  },
  {
    title: (
      <div className="flex items-center">
        <img
          src={wind}
          alt="Wind icons created by Good Ware - Flaticon"
          className="w-8 h-8"
        />
        Viento (Beaufort) y dirección
      </div>
    ),
    dataIndex: "sa",
    key: "sa",
    render: (text) => <p className="flex justify-center items-center gap-2  text-center text-xl">{text} {text.split(" ")[1] !== "C" ? (
      <FaArrowUp
        size={18}
        style={{ transform: `rotate(${rotation(text.split(" ")[1])}deg)` }}
      />
    ) : (
      <TbPeace size={30} />
    )}</p>,
  },
  {
    title: (
      <div className="flex items-center">
        <img
          src={cloud}
          alt="Clouds icons created by Good Ware - Flaticon"
          className="w-8 h-8"
        />
        Nubosidad (d)
      </div>
    ),
    dataIndex: "nub",
    key: "nub",
    render: (text) => <p className=" text-center text-xl">{text}</p>,
  },
  {
    title: (
      <div className="flex items-center">
        <img
          src={visibility}
          alt="Eye icons created by Freepik - Flaticon"
          className="w-8 h-8"
        />
        Visibilidad (Km)
      </div>
    ),
    dataIndex: "vis",
    key: "vis",
    render: (text) => <p className=" text-center text-xl">{text}</p>,
  },
  {
    title: (
      <div className="flex items-center">
        <img
          src={ground}
          alt="Ground icons created by juicy_fish - Flaticon"
          className="w-8 h-8"
        />
        Estado del suelo
      </div>
    ),
    dataIndex: "es",
    key: "es",
    render: (text) => <p className=" text-center text-xl">{text}</p>,
  },
];

function MeasureTable({ measureInfo }) {
  const data = [
    {
      key: 1,
      hor: (
        <div className="flex justify-center items-center gap-2 font-bold text-main-blue">
          <img
            src={sunrise}
            alt="Sun icons created by Freepik - Flaticon"
            className="w-8 h-8"
          />
          <p>07:00</p>
        </div>
      ),
      ts: measureInfo?.ts07,
      th: measureInfo?.th07,
      hr: measureInfo?.hr07,
      pd: measureInfo?.p07,
      sa: `${measureInfo?.sa07} ${measureInfo?.rd07}` ,
      nub: measureInfo?.nub07,
      vis: measureInfo?.vis07,
      es: measureInfo?.es07,
    },
    {
      key: 2,
      hor: (
        <div className="flex justify-center items-center gap-2 font-bold text-main-blue">
          <img
            src={sun}
            alt="Sun icons created by Freepik - Flaticon"
            className="w-8 h-8"
          />
          <p>14:00</p>
        </div>
      ),
      ts: measureInfo?.ts14,
      th: measureInfo?.th14,
      hr: measureInfo?.hr14,
      pd: measureInfo?.p14,
      sa: `${measureInfo?.sa14} ${measureInfo?.rd14}`,
      nub: measureInfo?.nub14,
      vis: measureInfo?.vis14,
      es: measureInfo?.es14,
    },
    {
      key: 3,
      hor: (
        <div className="flex justify-center items-center gap-2 font-bold text-main-blue">
          <img
            src={night}
            alt="Half moon icons created by Peerapak Takpho - Flaticon"
            className="w-8 h-8"
          />
          <p>21:00</p>
        </div>
      ),
      ts: measureInfo?.ts21,
      th: measureInfo?.th21,
      hr: measureInfo?.hr21,
      pd: measureInfo?.p21,
      sa: `${measureInfo?.sa21} ${measureInfo?.rd21}`,
      nub: measureInfo?.nub21,
      vis: measureInfo?.vis21,
      es: measureInfo?.es21,
    },
  ];
  return (
    <Table
      className="w-11/12 py-4"
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{
        x: 1200,
      }}
    />
  );
}

export default MeasureTable;
