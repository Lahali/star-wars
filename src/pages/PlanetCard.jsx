
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useGetData } from "../context/ApiProvider";

const PlanetCard = () => {

  const {id} = useParams()
  const { planetList } = useGetData();
  const {name} = useParams()

  const planetData = planetList.filter((item) => item.name === name ? item.terrain : "")
  console.log(planetData)
  return (
    <>
      <Header />
      <div className="flex justify-center content-center">
        <div className="w-3/4 bg-zinc-800 rounded-md mt-10">
          <figure>
            <img
              className="float-left max-w-md h-auto"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              alt="star wars planet"
              onError={(e) => (e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")}
            />
          </figure>
          <div className="card-body p-4 my-3">
            <h2 className="card-title">{name}</h2>

            <p className="">Terrain: {planetData.map((item)=>item.terrain)}</p>
            <p className="">Population: {planetData.map((item) => item.population)}</p>
            <p className="">Climate: {planetData.map(item => item.climate)}</p>
            <p className="">Gravity: {planetData.map(item => item.gravity)}</p>
            <p className="">Rotation perios: {planetData.map(item => item.rotation_period)}</p>
            <p className="">Surface water: {planetData.map(item => item.surface_water)}</p>

          
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetCard;
