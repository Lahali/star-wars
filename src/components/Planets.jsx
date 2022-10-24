import React from "react";
import { Link } from "react-router-dom";

const Planets = ({
  getPlanetName,
  getPlanetTerrain,
  getPlanetClimate,
  getPlanetUrl,
}) => {

  const getId = getPlanetUrl.split("/")

  return (
    <div className="bg-zinc-800 col-start-2 col-end-6 m-3 items-strech">
      <Link to={`/p/${getPlanetName}/${getId[5]}`}>
        <img
          className="h-28 w-auto float-left mr-4"
          src={`https://starwars-visualguide.com/assets/img/planets/${getId[5]}.jpg`}
          alt="star wars planet"
          onError={(e) =>
            (e.target.src =
              "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
          }
        />
        <div className="mx-3 p-4">
          <h2 className="card-title">{getPlanetName}</h2>
          <p className="mx-2">Terrain: {getPlanetTerrain}</p>
          <p className="mx-2">Climate: {getPlanetClimate}</p>
        </div>
      </Link>
    </div>
  );
};

export default Planets;
