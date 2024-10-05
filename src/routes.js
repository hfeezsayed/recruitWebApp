import React from "react";
import { Routes as MainRoute, Navigate, Route } from "react-router-dom";
import { Login } from "./components/pages/auth/login";
import { SignUp } from "./components/pages/auth/signup";
import { SignupOtp } from "./components/pages/auth/signupOtp";
import { ForgotPass } from "./components/pages/auth/forgotPass";
import { ForgotOtp } from "./components/pages/auth/forgotOtp";
import { NewPassword } from "./components/pages/auth/newPassword";
import PrivateRoute from "./components/pages/auth/privateRoute";
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
import { JobDetail } from "./components/pages/client/jobs/JobDetail";
import { JobDetailCreate } from "./components/pages/client/jobs/jobDetailCreate";
import { JobDetailEdit } from "./components/pages/client/jobs/JobDetailEdit";
import { ValuesList } from "./components/pages/client/jobs/valuesList";
import { ValuesCreate } from "./components/pages/client/jobs/valuesCreate";
import { ValuesEdit } from "./components/pages/client/jobs/valuesEdit";
import { TeamsList } from "./components/pages/client/jobs/teamsList";
import { TeamCreate } from "./components/pages/client/jobs/teamCreate";
import { TeamEdit } from "./components/pages/client/jobs/teamEdit";
import { PreferenceList } from "./components/pages/client/jobs/preferenceList";
import { PreferenceCreate } from "./components/pages/client/jobs/preferenceCreate";
import { PreferenceEdit } from "./components/pages/client/jobs/preferenceEdit";
import { IcpList } from "./components/pages/client/jobs/icpList";
import { IcpCreate } from "./components/pages/client/jobs/icpCreate";
import { IcpResult } from "./components/pages/client/jobs/icpResult";
import { JobCandidates } from "./components/pages/client/jobs/jobCandidates";
import { Logout } from "./components/pages/auth/logout";
import { ValuesResult } from "./components/pages/client/jobs/valueResult";
import { IcpEdit } from "./components/pages/client/jobs/icpEdit";
import { AllAssessmentBatches } from "./components/pages/client/assessments/allAssessmentBatches";
import { SelectAssessment } from "./components/pages/client/assessments/selectAssessment";
import { JobTemplateList } from "./components/pages/client/jobs/jobTemplateList";
import { AssignCandidates } from "./components/pages/client/jobs/assignCandidates";
import { JobWorkValueTemplate } from "./components/pages/client/jobs/workValueTemplate";
import { JobIcpTemplate } from "./components/pages/client/jobs/icpTemplate";
import { CreateAssessment } from "./components/pages/candidate/AssessmentForm/createAssessment";
import { CandidateAssessmentQuestionnaire } from "./components/pages/candidate/AssessmentForm/CandidateAssessmentQuestionnaire";
import { ConformationScreen } from "./components/pages/client/jobs/conformationScreen";
import { OutputofJobDescription } from "./components/pages/client/jobs/outputOfJobDescription";
import { OutputofDigitalTalentProfile } from "./components/pages/candidate/HomePage/outputofDigitalTalentProfile";
import { ConfirmationScreen } from "./components/pages/candidate/DigitalTalentProfile/confirmationScreen";
import { ProfileDashboard } from "./components/pages/client/dashboard/profile";
import { ScreeningQuestions } from "./components/pages/client/jobs/screeningQuestions";
import { Settings } from "./components/pages/client/settings/settings";
import { ExternalHelp } from "./components/pages/client/externalHelp/externalHelp";
import { DashBoard } from "./components/pages/client/dashboard/dashBoard";
import { JobCandidateCombination } from "./components/pages/client/jobs/JobCandidateCombination";
import { Candidate } from "./components/pages/candidate/HomePage/candidate";
import { HomePage } from "./components/pages/candidate/HomePage/HomePage";
import { JobPortal } from "./components/pages/candidate/job/jobProtal";
import { JobDetails } from "./components/pages/candidate/job/jobDetails";
import { CandidatesList } from "./components/pages/client/candidates/candidatesList";
import { ScreeningQuestionsResponse } from "./components/pages/candidate/job/ScreeningQuestionsResponse";
import { CreateCandidate } from "./components/pages/client/candidates/createCandidate";
import CandidateList from "./components/pages/client/references/CandidateList";
import FormFilledByCandidate from "./components/pages/client/references/FormFilledByCandidate";
import RatingQuestions from "./components/pages/client/references/RatingQuestions";
import FormFilledByReferences from "./components/pages/client/references/FormFilledByReference";
import PriorityRanking from "./components/pages/client/references/PriorityRanking";
import Rating from "./components/pages/client/references/Rating";
import { AdminDashBoard } from "./components/pages/client/jobsAdmin/AdminPanel/AdminPanel";
import ClientManagementSec from "./components/pages/client/jobsAdmin/ClientManagement/ClientManagementSec";
import Applicant from "./components/pages/client/jobsAdmin/Applicant/Applicant";
import RatingAggregate from "./components/pages/client/assessments/SelfAssessments/RatingAggregate/RatingAggregate";
import RatingStyle from "./components/pages/client/assessments/SelfAssessments/RatingStyle/RatingStyle";
import RatingAggregateDimensions from "./components/pages/client/assessments/SelfAssessments/RatingAggregateDimensions/RatingAggregateDimensions";
import Jobs from "./components/pages/client/jobsAdmin/Jobs/Jobs";
import WorkflowView from "./components/pages/client/jobsAdmin/Jobs/WorkflowView/WorkflowView";

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
      <Route path="logout" element={<Logout />} />
      <Route
        path="digitalTalentProfileResult"
        element={<TalentProfileResult />}
      />
      <Route path="" element={<PrivateRoute requiredRole="ROLE_CANDIDATE" />}>
        <Route path="candidate" element={<Candidate />} />
        <Route path="candidate/dashboard" element={<HomePage />} />
        <Route path="job/jobportal" element={<JobPortal />} />
        <Route path="job/jobDetails" element={<JobDetails />} />
        {/* <Route
          path="job/screeningQuestions"
          element={<ScreeningQuestionsResponse />}
        /> */}
        <Route
          path="outputofDigitalTalentProfile"
          element={<OutputofDigitalTalentProfile />}
        />
        <Route path="digitalTalentProfile" element={<DigitalTalentProfile />} />
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
        <Route
          path="digitalTalentProfile/confirmationScreen"
          element={<ConfirmationScreen />}
        />
        <Route
          path="comprehensiveAssessment"
          element={<CandidateAssessmentQuestionnaire />}
        />
        <Route path="createAssessment" element={<CreateAssessment />} />
        <Route path="assesmentform" element={<AssesmentForm />} />
        <Route path="authorisedclients" element={<AuthorisedClient />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="" element={<PrivateRoute requiredRole="ROLE_CLIENT" />}>
        <Route path="client/dashboard" element={<DashBoard />} />
        <Route path="profile" element={<ProfileDashboard />} />
        <Route path="job/allJobs" element={<AllJobs />} />
        <Route path="job/assignCandidates" element={<AssignCandidates />} />
        <Route path="job/createdJobs" element={<CreatedJobs />} />
        <Route path="job/jobsDetails" element={<JobsDetails />} />
        <Route path="job/createJob" element={<CreateJob />} />
        <Route path="job/jobDetailList" element={<JobDetail />} />
        <Route path="job/jobTemplateList" element={<JobTemplateList />} />
        <Route path="job/jobCandidates" element={<JobCandidates />} />
        <Route path="job/jobDetailCreate" element={<JobDetailCreate />} />
        <Route path="job/jobDetailEdit" element={<JobDetailEdit />} />
        <Route path="job/valuesList" element={<ValuesList />} />
        <Route
          path="job/workValueTemplate"
          element={<JobWorkValueTemplate />}
        />
        <Route path="job/valuesCreate" element={<ValuesCreate />} />
        <Route path="job/valuesEdit" element={<ValuesEdit />} />
        <Route path="job/valuesResult" element={<ValuesResult />} />
        <Route path="job/teamList" element={<TeamsList />} />
        <Route path="job/teamCreate" element={<TeamCreate />} />
        <Route path="job/teamEdit" element={<TeamEdit />} />
        <Route path="job/preferenceList" element={<PreferenceList />} />
        <Route path="job/preferenceCreate" element={<PreferenceCreate />} />
        <Route path="job/preferenceEdit" element={<PreferenceEdit />} />
        <Route path="job/icpList" element={<IcpList />} />
        <Route path="job/icpTemplate" element={<JobIcpTemplate />} />
        <Route path="job/icpCreate" element={<IcpCreate />} />
        <Route path="job/icpEdit" element={<IcpEdit />} />
        <Route path="job/icpResult" element={<IcpResult />} />
        <Route path="job/conformationScreen" element={<ConformationScreen />} />
        <Route
          path="job/outputofJobDescription"
          element={<OutputofJobDescription />}
        />
        <Route path="job/screeningQuestions" element={<ScreeningQuestions />} />
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
        <Route path="allAssessmentBatches" element={<AllAssessmentBatches />} />
        <Route path="assessmentsList" element={<AssessmentListView />} />
        <Route path="selectAssesment" element={<SelectAssessment />} />
        <Route
          path="assessmentBatchDetails"
          element={<AssesmentBatchDetails />}
        />
        <Route path="assessmentResult" element={<AsssessmentResult />} />
        <Route path="assignCandidate" element={<AssignCandidate />} />
        <Route
          path="jobCandidateCombination"
          element={<JobCandidateCombination />}
        />
        <Route path="settings" element={<Settings />} />
        <Route path="externalHelp" element={<ExternalHelp />} />
        <Route path="clientAssignedCandidates" element={<CandidatesList />} />
        <Route path="references/candidatelist" element={<CandidateList />} />
        <Route
          path="references/requestReferences"
          element={<FormFilledByCandidate />}
        />
        <Route
          path="references/filledbyreferences"
          element={<FormFilledByReferences />}
        />
        <Route
          path="references/ratingQuestions"
          element={<RatingQuestions />}
        />
        <Route
          path="references/priorityRanking"
          element={<PriorityRanking />}
        />
        <Route path="references/rating" element={<Rating />} />
        <Route path="dashboardPanel" element={<AdminDashBoard />} />
        <Route path="createCandidate" element={<CreateCandidate />} />
        <Route
          path="client/jobs-admin/clientManagementSection"
          element={<ClientManagementSec />}
        />
        <Route path="client/jobs-admin/applicant" element={<Applicant />} />

        <Route
          path="assessment/selfAssessments/rating-aggregate"
          element={<RatingAggregate />}
        />
        <Route
          path="assessment/selfAssessments/rating-style"
          element={<RatingStyle />}
        />
        <Route
          path="assessment/selfAssessments/rating-aggregate-dimensions"
          element={<RatingAggregateDimensions />}
        />
        <Route path="jobs-admin/jobs" element={<Jobs />} />
        <Route
          path="jobs-admin/jobs/workflow-view"
          element={<WorkflowView />}
        />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </MainRoute>
  );
};
