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
import axios from 'axios';
import { useEffect } from "react";

export const JobDetailCreate = () => {
  const navigate = useNavigate();
  const locations = useLocation();

  const [jobTitle, setJobTitle] = useState();
  const [jobCode, setJobCode] = useState("");
  const [jobFamily, setJobFamily] = useState();
  const [jobDepartment, setJobDepartment] = useState();
  const [jobLocation, setJobLocation] = useState();
  const [salary, setSalary] = useState();

  // job description
  const [companyInfo, setCompanyInfo] = useState("");
  const [positionSummry, setPositionSummary] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [benefits, setBenefits] = useState();
  const [equalEmployeeOpportunity, setEqualEmployeeOpportunity] = useState("");

  // Role Requirements
  const [specificIndustryExperience, setSpecificIndustryExperience] = useState();
  const [specifyIndustryExp, setSpecifyIndustryExp] = useState("");
  const [industryKnowledge, setIndustryknowledge] = useState();
  const [workSetting, setWorkSetting] = useState();
  const [roleType, setRoleType] = useState();
  const [roleTimings, setRoleTimings] = useState();
  const [roleTravel, setRoleTravel] = useState();
  const [visa, setVisa] = useState();
  const [jobDescription, setJobDescription] = useState();
  const [bulletPoints, setBulletPoints] = useState();
  const [companyOverview, setCompanyOverview] = useState();

  // Qualification and Requirements
  const [minimumLevelQualification, setMinimumLevelQualification] = useState();
  const [requireRegulatory, setRequireRegulatory] =
    useState();
  const [differentAcademic, setDifferentAcademic] = useState();
  const [certifications, setCertifications] = useState([
    { certificate: null },
  ]);
  const [
    softwares,
    setSoftwares,
  ] = useState([{ tools: null }]);
  const [envision, setEnvision] = useState("");

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

  const workSettings = [
    { label: "On-Site", value: "On-Site" },
    { label: "Remote", value: "Remote" },
    { label: "Hybrid", value: "Hybrid" },
  ]

  const roleTypes = [
    { label: "Contract", value: "Contract" },
    { label: "C2H", value: "C2H" },
    { label: "Fulltime", value: "Fulltime" },
  ]

  const budgetOpts = [
    { label: "yes", value: "yes" },
    { label: "No", value: "No" },
    { label: "Limited budget", value: "Limited budget" },
  ]

  const roleTimingOpts = [
    { label: "Day Shift", value: "Day Shift" },
    { label: "Night Shift", value: "Night Shift" },
    { label: "Flexible", value: "Flexible" },
  ]

  const roleTravelOpts = [
    { label: "No Travel", value: "No Travel" },
    { label: "Occasional", value: "Occasional" },
    { label: "Frequent", value: "Frequent" },
  ]

  const minQual = [
    { label: "Bachelors", value: "Bachelors" },
    { label: "Masters", value: "Masters" },
    { label: "PhD", value: "PhD" },
  ]

  const certOpts = [
    { label: "Six Sigma Green belt", value: "Six Sigma Green belt" },
    { label: "PMP", value: "PMP" },
    { label: "Scrum Master", value: "Scrum Master" },
  ]

  const tools = [
    { label: "Azure DevOps", value: "Azure DevOps" },
    { label: "SAP", value: "SAP" },
    { label: "ABAP", value: "ABAP" },
    { label: "ERP", value: "ERP" },
    { label: "AWS", value: "AWS" },
  ]

  const yes_no = ["Yes", "No"];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    if(locations.state.selected) {
        const selected = locations.state.selected;
        console.log(selected);
        setJobTitle(selected.jobTitle)                              
        setJobCode(selected.jobCode)
        setJobFamily(selected.jobFamily)
        setJobDepartment(selected.jobDepartment)
        setJobLocation(selected.jobLocation)
        setSalary(selected.salary)
        setCompanyInfo(selected.companyInfo)
        setPositionSummary(selected.positionSummry)
        setResponsibilities(selected.responsibilities)
        setBenefits(selected.benefits)
        setEqualEmployeeOpportunity(selected.equalEmployeeOpportunity)
        setSpecificIndustryExperience(selected.specificIndustryExperience)
        setSpecifyIndustryExp(selected.specifyIndustryExp)
        setIndustryknowledge(selected.industryKnowledge)
        setWorkSetting(selected.workSetting)
        setRoleType(selected.roleType)
        setRoleTimings(selected.roleTimings)
        setRoleTravel(selected.roleTravel)
        setVisa(selected.visa)
        setMinimumLevelQualification(selected.minimumLevelQualification)
        setRequireRegulatory(selected.requireRegulatory)
        setDifferentAcademic(selected.differentAcademic)
        setCertifications(selected.certifications)
        setSoftwares(selected.softwares)
        setEnvision(selected.envision)
        setTemplateName(selected.templateName)
        setTemplateTag(selected.templateTag)
        setTemplateDescription(selected.templateDescription)
    }
    
  }, [locations.state]);

  const getJobDescription = async () => {
    const title = jobTitle;
    axios
      .post(
        "https://xenflexer.northcentralus.cloudapp.azure.com/api/jobs/",
        {
          jobTitle,
          jobCode,
          jobFamily,
          jobDepartment,
          jobLocation,
          salary,
          companyInfo,
          positionSummry,
          responsibilities,
          benefits,
          equalEmployeeOpportunity,
          specificIndustryExperience,
          specifyIndustryExp,
          industryKnowledge,
          workSetting,
          roleType,
          roleTimings,
          roleTravel,
          visa,
          minimumLevelQualification,
          requireRegulatory,
          differentAcademic,
          certifications,
          softwares,
          envision,
          templateName,
          templateTag,
          templateDescription,
          
        },
      )
      .then((data) => {
        console.log(data.data);
        setJobDescription(data.data.description);
        //localStorage.setItem("jobId", data.data.jobId);
      })
      .catch((e) => console.log(e));
  }

  const savejobDetail = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axiosInstance
      .post(
        "/saveJobTemplateForJob?clientId=" + user.userId + "&jobId=" + jobId + "&template="+0,
        {
          jobTitle,
          jobCode,
          jobFamily,
          jobDepartment,
          jobLocation,
          salary,
          companyInfo,
          positionSummry,
          responsibilities,
          benefits,
          equalEmployeeOpportunity,
          specificIndustryExperience,
          specifyIndustryExp,
          industryKnowledge,
          workSetting,
          roleType,
          roleTimings,
          roleTravel,
          visa,
          minimumLevelQualification,
          requireRegulatory,
          differentAcademic,
          certifications,
          softwares,
          envision,
          templateName,
          templateTag,
          templateDescription,
        },
      )
      .then((data) => {
        console.log(data.data);
        //localStorage.setItem("jobId", data.data.jobId);
        navigate("/job/CreateJob", { state: data.data.jobId });
      })
      .catch((e) => console.log(e));
    closePopup();
  };


  const saveAsTemplate = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axiosInstance
      .post(
        "/saveJobTemplateForJob?clientId=" + user.userId + "&jobId=" + jobId + "&template="+1,
        {
          jobTitle,
          jobCode,
          jobFamily,
          jobDepartment,
          jobLocation,
          salary,
          companyInfo,
          positionSummry,
          responsibilities,
          benefits,
          equalEmployeeOpportunity,
          specificIndustryExperience,
          specifyIndustryExp,
          industryKnowledge,
          workSetting,
          roleType,
          roleTimings,
          roleTravel,
          visa,
          minimumLevelQualification,
          requireRegulatory,
          differentAcademic,
          certifications,
          softwares,
          envision,
          templateName,
          templateTag,
          templateDescription,
        },
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
    setCertifications([
      ...certifications,
      { certificate: null },
    ]);
  };

  const handleChangeCertificate = (e, value, i) => {
    let newFormValues = [...certifications];
    newFormValues[i][e] = value;
    setCertifications(newFormValues);
  };

  const removeCertificate = (i) => {
    let newFormValues = [...certifications];
    newFormValues.splice(i, 1);
    setCertifications(newFormValues);
  };

  // tools
  const addToolsAndSoftware = () => {
    setSoftwares([
      ...softwares,
      { tools: null },
    ]);
  };

  const handleChangeToolsAndSoftware = (e, value, i) => {
    let newFormValues = [...softwares];
    newFormValues[i][e] = value;
    setSoftwares(newFormValues);
  };

  const removeToolsAndSoftware = (i) => {
    let newFormValues = [...softwares];
    newFormValues.splice(i, 1);
    setSoftwares(newFormValues);
  };

  const getCompanyOverview = async () => {
    const title = jobTitle;
    const company_info = companyInfo;
    const bullet_points = bulletPoints;
    axios
      .post(
        "https://xenflexer.northcentralus.cloudapp.azure.com/api/company-description/" ,
        {
          company_info,
          bullet_points
        },
      )
      .then((data) => {
        console.log(data.data);
        setCompanyOverview(data.data.enhanced_description);
        //localStorage.setItem("jobId", data.data.jobId);
      })
      .catch((e) => console.log(e));
  }

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
                <TextField
                  size="small"
                  disablePortal
                  value={jobTitle || null}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="type"
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
                  type="number"
                  disablePortal
                  value={salary || null}
                  onChange={(e) => setSalary(Number(e.target.value))}
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
                  Company Overview
                </p>
              <div className="grid grid-cols-4 gap-2 py-5">
                <div>
                  <TextField
                    value={companyInfo}
                    onChange={(e) => setCompanyInfo(e.target.value)}
                    placeholder="type"
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
                    rows={2}
                  />
                </div>
                <div>
                  <TextField
                    value={bulletPoints}
                    type="number"
                    onChange={(e) => setBulletPoints(e.target.value)}
                    placeholder="type"
                    size="small"
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
                  />
                </div>
                <div>
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      color: "white",
                      borderColor: "#008080",
                      textTransform: "none",
                      backgroundColor: "#008080"
                    }}
                    onClick={getCompanyOverview}
                    >
                    Generate Company Overview
                  </Button>
                </div>
                <div>
                  <TextField
                    value={companyOverview}
                    onChange={(e) => setCompanyOverview(e.target.value)}
                    placeholder="type"
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
                    rows={2}
                  />
                </div>
              </div>
              </div>
              <div className="grid grid-flow-row gap-2 mt-6">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Job Summary
                </p>
                <textarea
                  value={positionSummry}
                  onChange={(e) => setPositionSummary(e.target.value)}
                  placeholder="type"
                  style={{
                    borderWidth: 1,
                    borderColor: "#D0D5DD",
                    borderRadius: 8,
                    padding: 5,
                  }}
                  rows={2}
                />
              </div>
              <div className="grid grid-flow-row gap-2 mt-6">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Responsibilities
                </p>
                <textarea
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                  placeholder="type"
                  style={{
                    borderWidth: 1,
                    borderColor: "#D0D5DD",
                    borderRadius: 8,
                    padding: 5,
                  }}
                  rows={4}
                />
              </div>
              <div className="grid grid-flow-row gap-2 mt-6">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Benefits 
                </p>
                <TextField
                  value={benefits}
                  type="number"
                  onChange={(e) => setBenefits(Number(e.target.value))}
                  placeholder="type"
                  size="small"
                  style={{
                    borderWidth: 1,
                    borderColor: "#D0D5DD",
                    borderRadius: 8,
                    padding: 5,
                  }}
                />
              </div>
              <div className="grid grid-flow-row gap-2 mt-6">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Equal Employee Opportunity (EEO)
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
                  options={yes_no.map((option) => option)}
                  value={specificIndustryExperience || null}
                  onChange={(e, newvalue) => setSpecificIndustryExperience(newvalue)}
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
                  value={specifyIndustryExp}
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
                    options={workSettings.map((option) => option.label)}
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
                    options={roleTypes.map((option) => option.label)}
                    value={roleType || null}
                    onChange={(e, newvalue) => setRoleType(newvalue)}
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
                    options={roleTimingOpts.map((option) => option.label)}
                    value={roleTimings || null}
                    onChange={(e, newvalue) => setRoleTimings(newvalue)}
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
                    options={roleTravelOpts.map((option) => option.label)}
                    value={roleTravel || null}
                    onChange={(e, newvalue) => setRoleTravel(newvalue)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row gap-2 ">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Does this role offer visa sponsorship?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={options.map((option) => option.label)}
                    value={visa || null}
                    onChange={(e, newvalue) => setVisa(newvalue.value)}
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
                    options={minQual.map((option) => option.label)}
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
                    value={requireRegulatory || null}
                    onChange={(e, newvalue) =>
                      setRequireRegulatory(newvalue)
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
                {certifications.map((value, index) => {
                  return (
                    <>
                      <div>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={certOpts.map((option) => option.label)}
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
                      {certifications.length > 1 && (
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
                {softwares.map((value, index) => {
                  return (
                    <>
                      <div>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={tools.map((option) => option.label)}
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
                      {softwares.length > 1 && (
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
                  value={envision}
                  onChange={(e) => setEnvision(e.target.value)}
                />
              </div>
              <div className="grid grid-flow-row gap-2 py-8">
                <div className="pt-3 gap-4 flex">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Job Description
                  </p>
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      color: "white",
                      borderColor: "#008080",
                      textTransform: "none",
                      backgroundColor: "#008080"
                    }}
                    onClick={getJobDescription}
                    >
                    Generate Job Description
                  </Button>
                </div>

                  <textarea
                    value={jobDescription}
                    row={10}
                    placeholder="type"
                    onChange={(e) => setJobDescription(e.target.value)}
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
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
                SAVE
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
                  onClick={savejobDetail}
                  variant="outlined"
                  style={{ color: "#ffffff", backgroundColor: "#008080" }}>
                  SAVE
                </Button>
                <Button
                  onClick={saveAsTemplate}
                  variant="contained"
                  style={{ color: "#ffffff", backgroundColor: "#008080" }}>
                  SAVE As Template
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
