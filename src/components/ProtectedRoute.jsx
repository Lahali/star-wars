import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserData } from "../context/UserProvider";

const ProtectedRoute = ({ children }) => {
  const { userArray } = useUserData;

userArray ?  <Navigate to="/login"/> : <Navigate to="/"/>



  return <Outlet/>;
};

export default ProtectedRoute;
