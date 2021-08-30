import React from "react";
import DataItem from "./DataItem";

const Data = ({ data }) => {
  return (
    <div className="data">
      {Object.entries(data).map(([title, stat]) => (
        <DataItem key={title} title={title} stat={stat} />
      ))}
    </div>
  );
};

export default Data;
