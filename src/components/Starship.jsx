import React from "react";

const Starship = ({ getShipName, getShipModel }) => {


  return (
    <div>
      <p>Starship name: {getShipName}</p>
      <p>Starship model: {getShipModel}</p>
    </div>
  );
};

export default Starship;
