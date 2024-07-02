import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Autocomplete, Button, TextField } from "@mui/material";
import axiosInstance from "../../../utils/axiosInstance";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  DialogActions,
} from "@mui/material";
import {
  IoIosCloseCircleOutline,
  IoMdRemoveCircleOutline,
} from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";

export const JobDetailCreate = () => {
  const navigate = useNavigate();
  const locations = useLocation();

  const [jobTitle, setJobTitle] = useState();
  const [jobCode, setJobCode] = useState("");
  const [jobFamily, setJobFamily] = useState();
  const [jobDepartment, setJobDepartment] = useState();
  const [jobLocation, setJobLocation] = useState();
  const [salary, setSalary] = useState("");

  // job description
  const [aboutUs, setAbountUs] = useState("");
  const [positionSummry, setPostionSummry] = useState("");
  const [dutiesAndResponsibilities, setDutiesAndResponsibilities] =
    useState("");
  const [benefitsAndCompensation, setBenefitsAndCompensation] = useState("");
  const [equalEmployeeOpportunity, setEqualEmployeeOpportunity] = useState("");

  // Role Requirements
  const [experienceIndustry, setExperienceIndustry] = useState();
  const [specifyIndusrtyExp, setSpecifyIndustryExp] = useState("");
  const [industryKnowledge, setIndustryknowledge] = useState();
  const [workSetting, setWorkSetting] = useState();
  const [typeOfRoles, setTypeOfROles] = useState();
  const [timeOfRole, setTimeofRole] = useState();
  const [travelRole, setTravelRole] = useState();
  const [visa, setVisa] = useState();

  // Qualification and Requirements
  const [minimumLevelQualification, setMinimumLevelQualification] = useState();
  const [requireAcademicQualification, setRequireAcademicQualification] =
    useState();
  const [differentAcademic, setDifferentAcademic] = useState();
  const [certificationsOrLicenses, setCertificationsOrLicenses] = useState([
    { certificate: null },
  ]);
  const [
    toolsOrSoftwaresetToolsOrSoftware,
    setToolsOrSoftwaresetToolsOrSoftware,
  ] = useState([{ tools: null }]);
  const [successThreeyear, setSuccessThreeyear] = useState("");

  // popup
  const [templateName, setTemplateName] = useState("");
  const [templateTag, setTemplateTag] = useState("");
  const [templateDescription, setTemplateDescription] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const options = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const yes_no = ["Yes", "No"];

  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axiosInstance
      .post(
        "/saveJobTemplate?clientId=" + user.userId + "&jobId=" + jobId,
        {
          jobTitle,
          jobCode,
          jobFamily,
          jobDepartment,
          jobLocation,
          salary,
          aboutUs,
          positionSummry,
          dutiesAndResponsibilities,
          benefitsAndCompensation,
          equalEmployeeOpportunity,
          experienceIndustry,
          specifyIndusrtyExp,
          industryKnowledge,
          workSetting,
          typeOfRoles,
          timeOfRole,
          travelRole,
          visa,
          minimumLevelQualification,
          requireAcademicQualification,
          differentAcademic,
          certificationsOrLicenses,
          toolsOrSoftwaresetToolsOrSoftware,
          successThreeyear,
          templateName,
          templateTag,
          templateDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        //localStorage.setItem("jobId", data.data.jobId);
        navigate("/job/CreateJob", { state: data.data.jobId });
      })
      .catch((e) => console.log(e));
    closePopup();
  };

  const closePopup = () => {
    setShowPopup(false);
    setTemplateName("");
    setTemplateTag("");
    setTemplateDescription("");
  };

  // certificate
  const addCertificate = () => {
    setCertificationsOrLicenses([
      ...certificationsOrLicenses,
      { certificate: null },
    ]);
  };

  const handleChangeCertificate = (e, value, i) => {
    let newFormValues = [...certificationsOrLicenses];
    newFormValues[i][e] = value;
    setCertificationsOrLicenses(newFormValues);
  };

  const removeCertificate = (i) => {
    let newFormValues = [...certificationsOrLicenses];
    newFormValues.splice(i, 1);
    setCertificationsOrLicenses(newFormValues);
  };

  // tools
  const addToolsAndSoftware = () => {
    setToolsOrSoftwaresetToolsOrSoftware([
      ...toolsOrSoftwaresetToolsOrSoftware,
      { tools: null },
    ]);
  };

  const handleChangeToolsAndSoftware = (e, value, i) => {
    let newFormValues = [...toolsOrSoftwaresetToolsOrSoftware];
    newFormValues[i][e] = value;
    setToolsOrSoftwaresetToolsOrSoftware(newFormValues);
  };

  const removeToolsAndSoftware = (i) => {
    let newFormValues = [...toolsOrSoftwaresetToolsOrSoftware];
    newFormValues.splice(i, 1);
    setToolsOrSoftwaresetToolsOrSoftware(newFormValues);
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div className="flex justify-between">
              <div>
                <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                  Job Details
                </p>
                <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                  Please fill in the information as needed, or use the existing
                  template.
                </p>
              </div>
              <div>
                <Button
                  onClick={() => {
                    navigate("/job/jobTemplateList");
                  }}
                  variant="text"
                  style={{
                    color: "#008080",
                    backgroundColor: "#EAF4F5",
                    fontSize: 14,
                  }}>
                  Copy data from the template
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 py-5">
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Job Title
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={jobTitle || null}
                  onChange={(e, newvalue) => setJobTitle(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Job Code
                </p>
                <TextField
                  size="small"
                  disablePortal
                  value={jobCode || null}
                  onChange={(e) => setJobCode(e.target.value)}
                  placeholder="type"
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Job Family
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={jobFamily || null}
                  onChange={(e, newvalue) => setJobFamily(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Job Department
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={jobDepartment || null}
                  onChange={(e, newvalue) => setJobDepartment(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Job Location
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={jobLocation || null}
                  onChange={(e, newvalue) => setJobLocation(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Salary Compensation
                </p>
                <TextField
                  size="small"
                  disablePortal
                  value={salary || null}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="type"
                />
              </div>
            </div>
            {/* Job Description */}
            <div className="py-5">
              <p style={{ color: "#475467", fontSize: 20, fontWeight: 500 }}>
                Job Description
              </p>
              <div className="grid grid-flow-row gap-2 mt-8">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  About us - info about the company
                </p>
                <textarea
                  value={aboutUs}
                  onChange={(e) => setAbountUs(e.target.value)}
                  placeholder="type"
                  style={{
                    borderWidth: 1,
                    borderColor: "#D0D5DD",
                    borderRadius: 8,
                    padding: 5,
                  }}
                  rows={1.5}
                />
              </div>
              <div className="grid grid-flow-row gap-2 mt-6">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Position Summary
                </p>
                <textarea
                  value={positionSummry}
                  onChange={(e) => setPostionSummry(e.target.value)}
                  placeholder="type"
                  style={{
                    borderWidth: 1,
                    borderColor: "#D0D5DD",
                    borderRadius: 8,
                    padding: 5,
                  }}
                  rows={1.5}
                />
              </div>
              <div className="grid grid-flow-row gap-2 mt-6">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Duties and Responsibilities
                </p>
                <textarea
                  value={dutiesAndResponsibilities}
                  onChange={(e) => setDutiesAndResponsibilities(e.target.value)}
                  placeholder="type"
                  style={{
                    borderWidth: 1,
                    borderColor: "#D0D5DD",
                    borderRadius: 8,
                    padding: 5,
                  }}
                  rows={1.5}
                />
              </div>
              <div className="grid grid-flow-row gap-2 mt-6">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Benefits and Compensation
                </p>
                <textarea
                  value={benefitsAndCompensation}
                  onChange={(e) => setBenefitsAndCompensation(e.target.value)}
                  placeholder="type"
                  style={{
                    borderWidth: 1,
                    borderColor: "#D0D5DD",
                    borderRadius: 8,
                    padding: 5,
                  }}
                  rows={1.5}
                />
              </div>
              <div className="grid grid-flow-row gap-2 mt-6">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Equal Employee Opportunity
                </p>
                <textarea
                  value={equalEmployeeOpportunity}
                  onChange={(e) => setEqualEmployeeOpportunity(e.target.value)}
                  placeholder="type"
                  style={{
                    borderWidth: 1,
                    borderColor: "#D0D5DD",
                    borderRadius: 8,
                    padding: 5,
                  }}
                  rows={1.5}
                />
              </div>
            </div>
            {/* Role Requirements and Preferences */}{" "}
            <div className="py-5">
              <p style={{ color: "#475467", fontSize: 20, fontWeight: 500 }}>
                Role Requirements and Preferences
              </p>
              <div className="grid grid-flow-row gap-2 mt-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Is it essential for the candidate to have experience in a
                  specific industry?
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={experienceIndustry || null}
                  onChange={(e, newvalue) => setExperienceIndustry(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
              <div className="grid grid-flow-row gap-2 py-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  If so, could you specify which industry and why that
                  experience is critical?
                </p>
                <TextField
                  size="small"
                  disablePortal
                  value={specifyIndusrtyExp}
                  onChange={(e) => setSpecifyIndustryExp(e.target.value)}
                  placeholder="type"
                />
              </div>
              <div className="grid grid-cols-2 gap-8 mt-3">
                <div className="grid grid-flow-row gap-2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Would industry knowledge be valued even without direct
                    experience?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={yes_no.map((option) => option)}
                    value={industryKnowledge || null}
                    onChange={(e, newvalue) => setIndustryknowledge(newvalue)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row gap-2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What is the work setting for the role?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={options.map((option) => option.label)}
                    value={workSetting || null}
                    onChange={(e, newvalue) => setWorkSetting(newvalue)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row gap-2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Type of role
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={options.map((option) => option.label)}
                    value={typeOfRoles || null}
                    onChange={(e, newvalue) => setTypeOfROles(newvalue)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row gap-2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What are the timings for the role?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={options.map((option) => option.label)}
                    value={timeOfRole || null}
                    onChange={(e, newvalue) => setTimeofRole(newvalue)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row gap-2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    How frequent does the role require to travel?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={options.map((option) => option.label)}
                    value={travelRole || null}
                    onChange={(e, newvalue) => setTravelRole(newvalue)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row gap-2 ">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What kind of visa are you looking for ?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={options.map((option) => option.label)}
                    value={visa || null}
                    onChange={(e, newvalue) => setVisa(newvalue)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Qualifications and Requirements */}
            <div className="py-5">
              <p style={{ color: "#475467", fontSize: 20, fontWeight: 500 }}>
                Qualifications and Requirements
              </p>
              <div className="grid-cols-2 grid gap-8 mt-8">
                <div className="grid grid-flow-row gap-2 mt-3">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Minimum level of academic qualification do you seek in
                    potential candidates?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={options.map((option) => option.label)}
                    value={minimumLevelQualification || null}
                    onChange={(e, newvalue) =>
                      setMinimumLevelQualification(newvalue)
                    }
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row gap-2 mt-3">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Are there regulatory/ compliance requirements for academic
                    qualifications?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={yes_no}
                    value={requireAcademicQualification || null}
                    onChange={(e, newvalue) =>
                      setRequireAcademicQualification(newvalue)
                    }
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-flow-row gap-2 py-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Would you be open to candidate with different academic
                  background but match the professional skills?
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={yes_no}
                  value={differentAcademic || null}
                  onChange={(e, newvalue) => setDifferentAcademic(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
              {/* cerificate */}
              <div className="grid grid-flow-row gap-2 mt-3">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Are there any specific certifications or licenses that
                  candidates must hold?
                </p>
                {certificationsOrLicenses.map((value, index) => {
                  return (
                    <>
                      <div>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={options.map((option) => option.label)}
                          value={value.certificate || null}
                          onChange={(e, value) =>
                            handleChangeCertificate("certificate", value, index)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Select"
                              required
                            />
                          )}
                        />
                      </div>
                      {certificationsOrLicenses.length > 1 && (
                        <div className=" flex justify-end">
                          <Button
                            variant="outlined"
                            size="small"
                            style={{
                              color: "#EB5757",
                              borderColor: "#E6E6E6",
                              textTransform: "none",
                            }}
                            onClick={() => removeCertificate(index)}
                            startIcon={
                              <IoMdRemoveCircleOutline
                                style={{ color: "#EB5757" }}
                              />
                            }>
                            Remove
                          </Button>
                        </div>
                      )}
                    </>
                  );
                })}
                <div className="py-3 flex justify-end">
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      color: "#404040",
                      borderColor: "#E6E6E6",
                      textTransform: "none",
                    }}
                    onClick={addCertificate}
                    startIcon={<FiPlus />}>
                    Add
                  </Button>
                </div>
              </div>
              {/* tools */}
              <div className="grid grid-flow-row gap-2 ">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Are there any particular tools or software applications
                  candidates should be adept with?
                </p>
                {toolsOrSoftwaresetToolsOrSoftware.map((value, index) => {
                  return (
                    <>
                      <div>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={options.map((option) => option.label)}
                          value={value.tools || null}
                          onChange={(e, value) =>
                            handleChangeToolsAndSoftware("tools", value, index)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Select"
                              required
                            />
                          )}
                        />
                      </div>
                      {toolsOrSoftwaresetToolsOrSoftware.length > 1 && (
                        <div className=" flex justify-end">
                          <Button
                            variant="outlined"
                            size="small"
                            style={{
                              color: "#EB5757",
                              borderColor: "#E6E6E6",
                              textTransform: "none",
                            }}
                            onClick={() => removeToolsAndSoftware(index)}
                            startIcon={
                              <IoMdRemoveCircleOutline
                                style={{ color: "#EB5757" }}
                              />
                            }>
                            Remove
                          </Button>
                        </div>
                      )}
                    </>
                  );
                })}
                <div className="pt-3 flex justify-end">
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      color: "#404040",
                      borderColor: "#E6E6E6",
                      textTransform: "none",
                    }}
                    onClick={addToolsAndSoftware}
                    startIcon={<FiPlus />}>
                    Add
                  </Button>
                </div>
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Can you outline what you envision a successful candidate
                  achieving in this role over the next three years?
                </p>
                <TextField
                  size="small"
                  placeholder="type"
                  value={successThreeyear}
                  onChange={(e) => setSuccessThreeyear(e.target.value)}
                />
              </div>
            </div>
            {/* button */}
            <div className="py-8 gap-8 flex justify-end">
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                variant="outlined"
                style={{ color: "#475467", borderColor: "#D0D5DD" }}>
                back
              </Button>
              <Button
                onClick={() => {
                  setShowPopup(true);
                }}
                variant="contained"
                style={{ color: "#ffffff", backgroundColor: "#008080" }}>
                SAVE AS TEMPLATE
              </Button>
            </div>
            {/* popup */}
            <Dialog open={showPopup} onClose={closePopup}>
              <DialogTitle>Template Details</DialogTitle>
              <IconButton
                onClick={closePopup}
                style={{ position: "absolute", top: 10, right: 10 }}>
                <IoIosCloseCircleOutline />
              </IconButton>
              <Divider />
              <DialogContent>
                <div className="grid-cols-2 grid gap-8">
                  <div className="grid grid-flow-row gap-2">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Job Template Name
                    </p>
                    <TextField
                      size="small"
                      disablePortal
                      value={templateName}
                      onChange={(e) => setTemplateName(e.target.value)}
                      placeholder="type"
                    />
                  </div>
                  <div className="grid grid-flow-row gap-2">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Job Template Tags
                    </p>
                    <TextField
                      size="small"
                      disablePortal
                      value={templateTag}
                      onChange={(e) => setTemplateTag(e.target.value)}
                      placeholder="type"
                    />
                  </div>
                </div>
                <div className="grid grid-flow-row gap-2 py-8">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Job Template Description
                  </p>
                  <textarea
                    value={templateDescription}
                    placeholder="type"
                    onChange={(e) => setTemplateDescription(e.target.value)}
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
                  />
                </div>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={closePopup}
                  variant="outlined"
                  style={{ color: "#475467", borderColor: "#D0D5DD" }}>
                  cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  style={{ color: "#ffffff", backgroundColor: "#008080" }}>
                  SAVE
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
