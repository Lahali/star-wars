import { getByTestId } from "@testing-library/react";
import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useShipListContext,useShipContext } from "../context/ApiProvider";

const StarshipCard = () => {

  const {id} = useParams()
  const shipList = useShipListContext()
  const getShipList = useShipContext();
  const {name} = useParams()

  const shipData = shipList.filter((item) => item.name === name ? item.model : "")



  return (
    <>
      <Header />
      <div className="flex justify-center content-center">
        <div className="w-3/4 bg-zinc-800 rounded-md mt-10">
          <figure>
            <img
              className="float-left max-w-md h-auto"
              src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
              alt="star wars starship"
              onError={(e) => (e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")}
            />
          </figure>
          <div className="card-body p-4 my-3">
            <h2 className="card-title">{name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque a quod facere necessitatibus, accusamus culpa magni
              nobis consectetur consequuntur sequi officia blanditiis debitis
              tempore est minus laborum nam inventore possimus.
            </p>
            <p className="">Model: {shipData.map((item)=>item.model)}</p>
            <p className="">Cost in credits: {shipData.map((item) => item.cost_in_credits)}</p>
            <p className="">Atmospheric Speed: {shipData.map(item => item.max_atmosphering_speed)}</p>

            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarshipCard;
