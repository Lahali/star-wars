import React from "react";
import { Link } from "react-router-dom";
import logoYellow from "../assets/images/Star_Wars_Logo.svg.png";


const Welcome = () => {
  return (
    <>
      <p className="text-yellow-300 text-4xl text-center mt-20">Welcome to</p>
      <div className="flex p-5 justify-center content-center">
        <img className="w-1/3 " src={logoYellow} />
      </div>
      <Link to={"/signup"}>
        <p className="text-center text-yellow-300 text-2xl">entrar</p>
      </Link>
    </>
  );
};

export default Welcome;
