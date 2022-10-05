import React from "react";

const Starship = ({ getShipName, getShipModel }) => {
  return (
    <div className="bg-zinc-800 col-start-2 col-end-6 p-2 m-3">
      <h2 className="card-title mt-4 m-2">{getShipName}</h2>
      <p className="mx-2">Model: {getShipModel}</p>
    </div>
  );
};

export default Starship;
