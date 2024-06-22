import React from "react";
import { Routes as MainRoute, Navigate, Route } from "react-router-dom";
import { Login } from "./components/pages/auth/login";
import { SignUp } from "./components/pages/auth/signup";
import { SignupOtp } from "./components/pages/auth/signupOtp";
import { ForgotPass } from "./components/pages/auth/forgotPass";
import { ForgotOtp } from "./components/pages/auth/forgotOtp";
import { NewPassword } from "./components/pages/auth/newPassword";
import PrivateRoute from "./components/pages/auth/privateRoute";
import { HomePage } from "./components/pages/candidate/HomePage";
import { DigitalTalentProfile } from "./components/pages/candidate/DigitalTalentProfile";
import { AnalysisAssessment } from "./components/pages/candidate/DigitalTalentProfile/analysisAssessment";
import { PersonalInformation } from "./components/pages/candidate/DigitalTalentProfile/personalInformation";
import { PreferenceForm } from "./components/pages/candidate/DigitalTalentProfile/preferenceForm";
import { ValueAssessment } from "./components/pages/candidate/DigitalTalentProfile/valueAssessment";
import { TalentProfileResult } from "./components/pages/candidate/DigitalTalentProfile/talentProfileResult";
import { AssesmentForm } from "./components/pages/candidate/AssessmentForm";
import { AuthorisedClient } from "./components/pages/candidate/AuthorisedClients";
import { Error404 } from "./components/pages/common/Error404";
import { ValueAssessmentResult } from "./components/pages/candidate/DigitalTalentProfile/valueAssessmentResult";
import { TalentAnalysisResult } from "./components/pages/candidate/DigitalTalentProfile/talentAnalysisResult";
import { AssesmentBatchDetails } from "./components/pages/client/assessments/batchDetails";
import { AssignCandidate } from "./components/pages/client/assessments/assignCandidate";
import { JobTemplate } from "./components/pages/client/templates/jobTemplate";
import { JobTemplateEdit } from "./components/pages/client/templates/jobTemplateEdit";
import { WorkValueTemplate } from "./components/pages/client/templates/workValueTemplate";
import { WorkValueTemplateEdit } from "./components/pages/client/templates/workValueTemplateEdit";
import { WorkValueTemplateView } from "./components/pages/client/templates/workValueTemplateView";
import { AsssessmentResult } from "./components/pages/client/assessments/assessmentResult";
import { TeamTemplate } from "./components/pages/client/templates/teamTemplate";
import { TeamTemplateEdit } from "./components/pages/client/templates/teamTemplateEdit";
import { JobPreferenceTemplate } from "./components/pages/client/templates/jobPreferenceTemplate";
import { JobPreferenceTemplateEdit } from "./components/pages/client/templates/jobPreferenceTemplateEdit";
import { JobTemplateCreate } from "./components/pages/client/templates/jobTemplateCreate";
import { WorkValueTemplateCreate } from "./components/pages/client/templates/workValueTemplateCreate";
import { TeamTemplateCreate } from "./components/pages/client/templates/teamTemplateCreate";
import { JobPreferenceTemplateCreate } from "./components/pages/client/templates/jobPreferenceTemplateCreate";
import { AssessmentListView } from "./components/pages/client/assessments/assessmentListView";
import { AllJobs } from "./components/pages/client/jobs/allJobs";
import { CreatedJobs } from "./components/pages/client/jobs/createdJobs";
import { JobsDetails } from "./components/pages/client/jobs/jobsDetails";
import { CreateJob } from "./components/pages/client/jobs/createJob";
import { IcpTemplate } from "./components/pages/client/templates/icpTemplate";
import { IcpTemplateResult } from "./components/pages/client/templates/icpTemplateResult";
import { IcpTemplateEdit } from "./components/pages/client/templates/icpTemplateEdit";

export const Routes = () => {
  return (
    <MainRoute>
      <Route path="/" element={<Navigate to="login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signupotp/:email" element={<SignupOtp />} />
      <Route path="forgotpassword" element={<ForgotPass />} />
      <Route path="forgotpasswordotp" element={<ForgotOtp />} />
      <Route path="newpassword" element={<NewPassword />} />
      <Route path="" element={<PrivateRoute requiredRole="ROLE_CANDIDATE" />}>
        <Route path="candidate" element={<HomePage />} />
        <Route path="digitalTalentProfile" element={<DigitalTalentProfile />} />
        <Route
          path="digitalTalentProfileResult"
          element={<TalentProfileResult />}
        />
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
          path="digitalTalentProfile/valueassessmentresult"
          element={<ValueAssessmentResult />}
        />
        <Route
          path="digitalTalentProfile/analysisassessmentform"
          element={<AnalysisAssessment />}
        />
        <Route
          path="digitalTalentProfile/talentanalysisresult"
          element={<TalentAnalysisResult />}
        />
        <Route path="assesmentform" element={<AssesmentForm />} />
        <Route path="authorisedclients" element={<AuthorisedClient />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="" element={<PrivateRoute requiredRole="ROLE_CLIENT" />}>
        <Route path="jobs/allJobs" element={<AllJobs />} />
        <Route path="jobs/createdJobs" element={<CreatedJobs />} />
        <Route path="jobs/jobsDetails" element={<JobsDetails />} />
        <Route path="jobs/createJob" element={<CreateJob />} />
        <Route path="templates/jobTemplate" element={<JobTemplate />} />
        <Route path="templates/jobTemplateEdit" element={<JobTemplateEdit />} />
        <Route
          path="templates/jobTemplateCreate"
          element={<JobTemplateCreate />}
        />
        <Route
          path="templates/workValueTemplate"
          element={<WorkValueTemplate />}
        />
        <Route
          path="templates/workValueTemplateEdit"
          element={<WorkValueTemplateEdit />}
        />
        <Route
          path="templates/workValueTemplateCreate"
          element={<WorkValueTemplateCreate />}
        />
        <Route
          path="templates/workValueTemplateView"
          element={<WorkValueTemplateView />}
        />
        <Route path="templates/teamTemplate" element={<TeamTemplate />} />
        <Route
          path="templates/teamTemplateEdit"
          element={<TeamTemplateEdit />}
        />
        <Route
          path="templates/teamTemplateCreate"
          element={<TeamTemplateCreate />}
        />
        <Route
          path="templates/jobPreferenceTemplate"
          element={<JobPreferenceTemplate />}
        />
        <Route
          path="templates/jobPreferenceTemplateEdit"
          element={<JobPreferenceTemplateEdit />}
        />
        <Route
          path="templates/jobPreferenceTemplateCreate"
          element={<JobPreferenceTemplateCreate />}
        />
        <Route path="templates/icp" element={<IcpTemplate />} />
        <Route path="templates/icpResult" element={<IcpTemplateResult />} />
        <Route path="templates/icpEdit" element={<IcpTemplateEdit />} />
        <Route path="assessmentsList" element={<AssessmentListView />} />
        <Route
          path="assessmentBatchDetails"
          element={<AssesmentBatchDetails />}
        />
        <Route path="assessmentResult" element={<AsssessmentResult />} />
        <Route path="assignCandidate" element={<AssignCandidate />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </MainRoute>
  );
};
