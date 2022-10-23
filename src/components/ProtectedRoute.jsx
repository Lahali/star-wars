import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserData } from "../context/UserProvider";

const ProtectedRoute = () => {
  const { userArray, userExists } = useUserData;
  if(userArray) {
    return <Navigate to="/login"/>
  }
  if (userExists === true) {
    return <Navigate to="/starships"/>
  }
  return <Outlet/>;
};

export default ProtectedRoute;
