import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useShipListContext } from "../context/ApiProvider";

const StarshipCard = () => {

  const {id} = useParams()
  const shipList = useShipListContext()
  
  
  const getName = shipList.map((item) => {
    if ({id} === id) {
      return item.name }
  })
console.log("hello", getName)

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
            <h2 className="card-title">{getName}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque a quod facere necessitatibus, accusamus culpa magni
              nobis consectetur consequuntur sequi officia blanditiis debitis
              tempore est minus laborum nam inventore possimus.
            </p>
            <p className="">Model:</p>
            <p className="">Cost in credits:</p>
            <p className="">Atmospheric Speed:</p>

            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary"></button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarshipCard;
