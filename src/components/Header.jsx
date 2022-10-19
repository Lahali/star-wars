import React from "react";
import { Link } from "react-router-dom";
import starwars from "../assets/images/starwars-logo.png";
// import { useIsLoginOpen, useChangeLoginModal } from "../context/ApiProvider";

const Header = () => {

  // const isLoginOpen = useIsLoginOpen()
  // const changeLoginModal = useChangeLoginModal()
  

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <img className="w-52" src={starwars} alt="star wars logo" />
        </div>
        <div className="navbar-end p-2">
          <Link to={"/starships/login"}>
            <button>LOG IN</button>
          </Link>
          <p className="mx-3 text-zinc-500">//</p>
          <button>SIGN UP</button>
        </div>
      </div>
      <nav className="flex justify-center">
        <div className="mx-4 p-2">
          <Link to={"/"}>
            <button className="hover:text-white text-zinc-400  active:underline underline-offset-8">
              HOME
            </button>
          </Link>
        </div>
        <div className="mx-4 p-2">
          <Link to={"/starships"}>
            <button className="hover:text-white  text-zinc-400 active:underline underline-offset-8">
              SPACESHIPS
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
