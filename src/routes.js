import React from "react";
import { Routes as MainRoute, Navigate, Route } from "react-router-dom";
import { Login } from "./components/pages/auth/login";
import { SignUp } from "./components/pages/auth/signup";
import { SignupOtp } from "./components/pages/auth/signupOtp";
import { ForgotPass } from "./components/pages/auth/forgotPass";
import { ForgotOtp } from "./components/pages/auth/forgotOtp";
import { NewPassword } from "./components/pages/auth/newPassword";
import PrivateRoute from "./components/pages/auth/privateRoute";
import { AnalysisAssessment } from "./components/pages/candidate/PrefrenceForm/analysisAssessment";
import { PersonalInformation } from "./components/pages/candidate/PrefrenceForm/personalInformation";
import { PreferenceForm } from "./components/pages/candidate/PrefrenceForm/preferenceForm";
import { ValueAssessment } from "./components/pages/candidate/PrefrenceForm/valueAssessment";
import { AssesmentForm } from "./components/pages/candidate/AssessmentForm/assesmentForm";

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
        <Route
          path="digitalTalentProfile/personalinfromation"
          element={<PersonalInformation />}
        />
        <Route
          path="digitalTalentProfile/preferenceform"
          element={<PreferenceForm />}
        />
        <Route
          path="digitalTalentProfile/valueassessmentform"
          element={<ValueAssessment />}
        />
        <Route
          path="digitalTalentProfile/analysisassessmentform"
          element={<AnalysisAssessment />}
        />
        <Route path="assesmentform" element={<AssesmentForm />} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="login" replace />} />
    </MainRoute>
  );
};
