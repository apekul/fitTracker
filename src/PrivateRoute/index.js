import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, user }) => {
  const Whereto = async () => {
    console.log(user);
  };
  return Whereto;
};

export default PrivateRoute;
