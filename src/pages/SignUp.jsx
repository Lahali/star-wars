import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import logoYellow from "../assets/images/pngegg.png";


const SignUp = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userArray, setUserArray] = useState([])

  const handleMailChange = (e) => {
    setUser({
      ...user, 
      email: e.target.value
    })
  }
  const handlePassChange = (e) => {
    setUser({
      ...user,
      password: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserArray(user)
  }

  console.log(user)
  console.log("chuski",userArray)

  return (
    <>
      <div className="flex justify-center items-center content-center absolute w-full top-0 left-0 min-h-screen bg-black-t">
        <form onSubmit={handleSubmit} className="p-10 rounded-sm w-fit bg-zinc-900">
          <Link to={"/starships"}>
            <p className="text-end text-2xl text-zinc-600">X</p>
          </Link>

          <img className="w-40 h-auto mt-0 ml-9" src={logoYellow} />

          <div className="text-center">
            <p className="text-yellow-300 text-lg">ARE YOU NEW AROUND HERE?</p>
            <p className="text-yellow-300 text-lg">ENTER YOUR EMAIL ADDRESS:</p>
            <input
              className="rounded-sm w-60 p-1 mt-2 bg-zinc-600 active:border-1 border-indigo-700 border-t-pink-100"
              type="text"
              name="email"
              placeholder="user"

              value={user.email}


              onChange={handleMailChange}
            />
          </div>
          <div className="text-center">
            <p className="text-yellow-300 text-lg mt-4">PASSWORD:</p>
            <input
              className="rounded-sm w-60 p-1 mt-2 bg-zinc-600 active:border-1 border-indigo-700 border-t-pink-100"
              type="password"
              name="password"
              placeholder="password"

              value={user.password}


              onChange={handlePassChange}
            />
          </div>
          <button type="submit" className="rounded w-60 p-1 bg-zinc-600 ml-2 mt-5 hover:bg-zinc-400">
            SEND
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
