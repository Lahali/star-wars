import React from "react";
import { Link } from "react-router-dom";

const Starship = ({ getShipName, getShipModel, getShipUrl }) => {
  const getId = getShipUrl.split("/");
  
  return (
    <div className="bg-zinc-800 col-start-2 col-end-6 m-3 items-strech">
      <Link to={`/${getShipName}/${getId[5]}`}>
        <img
          className="h-28 w-auto float-left mr-4"
          src={`https://starwars-visualguide.com/assets/img/starships/${getId[5]}.jpg`}
          alt="star wars starship"
          onError={(e) =>
            (e.target.src =
              "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
          }
        />
        <div className="mx-3 p-4">
          <h2 className="card-title">{getShipName}</h2>
          <p className="mx-2">Model: {getShipModel}</p>
        </div>
      </Link>
    </div>
  );
};

export default Starship;
