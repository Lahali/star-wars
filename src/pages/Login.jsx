import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoYellow from "../assets/images/pngegg.png";
import { useUserData } from "../context/UserProvider";

const Login = () => {
  // const { getSavedUsers, user } = useUserData();

  // const [getUser, setGetUser] = useState({ email: "", password: "" });

  // useEffect(() => {
  //   getSavedUsers();
  // }, []);



// const handleSubmit = (e) => {
//   e.preventDefault()
//   if (user.email === getUser.email) {
//     console.log("bien");
//   }
// }

  return (
    <>
      <div className="flex justify-center items-center content-center absolute w-full top-0 left-0 min-h-screen bg-black-t">
        <form className="p-10 rounded-sm w-fit bg-zinc-900">
          <Link to={"/starships"}>
            <p className="text-end text-2xl text-zinc-600">X</p>
          </Link>
          <img className="w-40 ml-9" src={logoYellow} />
          <div className="text-center">
            <p className="text-yellow-300 text-lg">ENTER YOUR EMAIL ADDRESS:</p>
            <input
              className="rounded-sm w-60 p-1 mt-2 bg-zinc-600 active:border-1 border-indigo-700 border-t-pink-100"
              type="text"
              placeholder="user"
            
            />
          </div>
          <div className="text-center">
            <p className="text-yellow-300 text-lg mt-4">PASSWORD:</p>
            <input
              className="rounded-sm w-60 p-1 mt-2 bg-zinc-600 active:border-1 border-indigo-700 border-t-pink-100"
              type="password"
              placeholder="password"
            />
          </div>
          <button
            className="rounded w-60 p-1 bg-zinc-600 ml-2 mt-5 hover:bg-zinc-400"
         
          >
            SEND
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
