import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Authentication = () => {
  const isLogin = true;

  return isLogin ? <Outlet /> : <Navigate to="/dang-nhap" />;
};

export default Authentication;

//excerpt
