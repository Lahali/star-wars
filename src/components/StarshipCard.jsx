import React from "react";
import Header from "./Header"
const StarshipCard = () => {

  const getShipImg = () => {
    
  }


  return (
    <>
    <Header/>
    <div className="grid grid-cols-6">

    <div className="card bg-zinc-800 col-start-2 col-end-6  rounded-md">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body p-2 m-3">
        <h2 className="card-title">Shoes!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a
          quod facere necessitatibus, accusamus culpa magni nobis consectetur
          consequuntur sequi officia blanditiis debitis tempore est minus
          laborum nam inventore possimus.
        </p>
        <p className="">Model:</p>
        <p className="">Cost incredits:</p>
        <p className="">Atmospheric Speed:</p>
        <p className="">Model:</p>


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
