// src/components/PrivateRoute.js

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, requiredRole, ...rest }) => {
  console.log(Component);
  console.log(rest);
  const isAuthenticated = localStorage.getItem("token"); // Check if user is authenticated
  console.log(requiredRole);
  if (isAuthenticated) {
    const role = JSON.parse(isAuthenticated).role;
    if (role === requiredRole) {
      return <Outlet />;
    } else {
      if (role === "ROLE_ADMIN")
        return <Navigate replace to={`admin/unauthorized`} />;
      if (role === "ROLE_CANDIDATE")
        return (
          <Navigate replace to={`/digitalTalentProfile/personalinfromation`} />
        );
    }
  } else {
    return <Navigate replace to={`login`} />;
  }
};

export default PrivateRoute;
