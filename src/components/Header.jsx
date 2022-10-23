import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import starwars from "../assets/images/starwars-logo.png";

const Header = () => {
 

  const activeLink = "text-yellow-700";
  const normalLink = "";

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <img className="w-52" src={starwars} alt="star wars logo" />
        </div>
        <div className="navbar-end p-2">
          <Link to={"/login"}>
            <button>LOG IN</button>
          </Link>
          <p className="mx-3 text-zinc-500">//</p>
          <Link to={"/signup"}>
            <button>SIGN UP</button>
          </Link>
        </div>
      </div>
      <nav className="flex justify-center">
        <div className="mx-4 p-2">
          <NavLink to={"/"} className="active: underline-offset-8">
            <button className="hover:text-white text-zinc-400">HOME</button>
          </NavLink>
        </div>
        <div className="mx-4 p-2">
          <NavLink
            to={"/starships"}
            className={({ isActive }) => [isActive ? "underline" : ""].filter(Boolean).join(" ")}
          >
            <button className="hover:text-white  text-zinc-400">
              SPACESHIPS
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
