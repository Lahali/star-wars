import React from "react";
import { Link } from "react-router-dom";

const Starship = ({ getShipName, getShipModel, getShipUrl }) => {
 const getId = getShipUrl.split("/")
  
  return (
    <div className="bg-zinc-800 col-start-2 col-end-6 p-2 m-3">
      <Link to={`/starships/${getId[5]}`}>
        <h2 className="card-title mt-4 m-2">{getShipName}</h2>
        <p className="mx-2">Model: {getShipModel}</p>
      </Link>
    </div>
  );
};

export default Starship;
