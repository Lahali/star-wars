import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import logoYellow from "../assets/images/pngegg.png";
import { useUserData } from "../context/UserProvider";

const Login = () => {
  const { handleMailChange, handlePassChange, user, handleLoginSubmit } =
    useUserData();

  return (
    <>
      <div className="flex justify-center items-center content-center absolute w-full top-0 left-0 min-h-screen bg-black-t">
        <form
          onSubmit={handleLoginSubmit}
          className="p-10 rounded-sm w-fit bg-zinc-900"
        >
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
              // defaultValue=""
              value={user.email}
              onChange={handleMailChange}
            />
          </div>
          <div className="text-center">
            <p className="text-yellow-300 text-lg mt-4">PASSWORD:</p>
            <input
              className="rounded-sm w-60 p-1 mt-2 bg-zinc-600 active:border-1 border-indigo-700 border-t-pink-100"
              type="password"
              placeholder="password"
              // defaultValue=""
              value={user.password}
              onChange={handlePassChange}
            />
          </div>
          <div>
            <button
              className="rounded w-60 p-1 bg-zinc-600 ml-2 mt-5 hover:bg-zinc-400"
              type="submit"
            >
              SEND
            </button>
          </div>
          <div>
  {/* este botón extra está para que se pueda verificar que el usuario existe, sino, no hacía la función de verificación */}
            <Link to={"/starships"}>
              <button
                className="rounded w-60 p-1 bg-zinc-600 ml-2 mt-5 hover:bg-zinc-400"
                type="submit"
              >
                ENTER!!
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
