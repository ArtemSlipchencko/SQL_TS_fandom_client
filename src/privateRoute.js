import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const isAuthenticated = true;

  return <Outlet />;
};

export default PrivateRoute;
