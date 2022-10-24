import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserData } from "../context/UserProvider";

const ProtectedRoute = ({ children }) => {
  const { userLogged } = useUserData;

  userLogged ? <Navigate to="/starships" /> : <Navigate to="/login" />;

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
