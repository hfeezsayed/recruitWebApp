import React from "react";
import { Routes as MainRoute, Navigate, Route } from "react-router-dom";
import { Login } from "./components/pages/auth/login";
import { SignUp } from "./components/pages/auth/signup";
import { SignupOtp } from "./components/pages/auth/signupOtp";
import { ForgotPass } from "./components/pages/auth/forgotPass";
import { ForgotOtp } from "./components/pages/auth/forgotOtp";
import { NewPassword } from "./components/pages/auth/newPassword";
import { CandidateForm } from "./components/pages/candidate/form";
import PrivateRoute from "./components/pages/auth/privateRoute";

export const Routes = () => {
  return (
    <MainRoute>
      <Route path="/" element={<Navigate to="login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signupotp" element={<SignupOtp />} />
      <Route path="forgotpassword" element={<ForgotPass />} />
      <Route path="forgotpasswordotp" element={<ForgotOtp />} />
      <Route path="newpassword" element={<NewPassword />} />
      <Route path="" element={<PrivateRoute requiredRole="ROLE_CANDIDATE" />}>
        <Route path="candidateform" element={<CandidateForm />} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="login" replace />} />
    </MainRoute>
  );
};
