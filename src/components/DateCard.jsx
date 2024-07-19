import React from "react";

function DateCard({ date, selected, onClick }) {
  const formatDate = date.split("-").reverse().join("/");

  return (
    <button
      className={`cursor-pointer border-4 rounded-lg px-2 py-3 shadow-md ${
        selected
          ? "bg-main-blue text-white border-white"
          : "border-main-blue text-main-blue hover:bg-main-blue hover:text-white hover:border-white"
      }`}
      onClick={onClick}
    >
      <p className="font-bold">{formatDate}</p>
    </button>
  );
}

export default DateCard;
