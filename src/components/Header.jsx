import React from "react";
import starwars from "../assets/images/starwars-logo.png";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
    </div> */}
        </div>
        <div className="navbar-center">
          <img className="w-52" src={starwars} alt="star wars logo" />
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

{
  /* <nav>
  <img src={starwars} alt="star wars logo" />
</nav> */
}
