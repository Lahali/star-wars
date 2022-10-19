import React, { useState } from "react";
// import { useChangeLoginModal, useIsLoginOpen } from "../context/ApiProvider";

const Login = () => {

  // const isLoginOpen = useIsLoginOpen()
  // const changeLoginModal = useChangeLoginModal()


  return (
    <>
   

    <div className="flex justify-center items-center content-center">
      <form className=" m-5 p-20 border max-w-xs">
        <div className="m-4 ">
          <p className="text-yellow-300 text-lg">User's name:</p>
          <input
            className="rounded w-40 p-1 mt-2 bg-yellow-10"
            type="text"
            placeholder="user"
          />
        </div>
        <div className="m-4">
          <p>Password:</p>
          <input type="password" placeholder="password" />
        </div>
      </form>
    </div>

    
    
    </>

  );
};

export default Login;
