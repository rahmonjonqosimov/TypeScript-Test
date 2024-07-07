import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth: React.FC = () => {
  const isLogin: string | null = localStorage.getItem("x-auth-token");
  return isLogin ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
