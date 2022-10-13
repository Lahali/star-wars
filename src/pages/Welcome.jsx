import React from "react";
import logoYellow from "../assets/images/Star_Wars_Logo.svg.png";

const Welcome = () => {
  return (
    <div className="flex m-4 p-5 justify-center content-center text-center">
      <p className="text-yellow-300 text-4xl">Welcome to</p>
      <img className="w-1/3" src={logoYellow} />
    </div>
  );
};

export default Welcome;
