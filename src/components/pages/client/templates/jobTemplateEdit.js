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
import { useEffect } from "react";
import axios from "axios";
import { AiNetworksvg } from "../../../../assets/icon/aiNetworksvg";
import CreatableSelect from 'react-select/creatable'

export const JobTemplateEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [jobTitle, setJobTitle] = useState();
  const [jobCode, setJobCode] = useState("");
  const [jobFamily, setJobFamily] = useState();
  const [jobDepartment, setJobDepartment] = useState();
  const [jobLocation, setJobLocation] = useState();
  const [salary, setSalary] = useState("");
  const [bulletPoints, setBulletPoints] = useState("");

  // job description
  const [companyInfo, setCompanyInfo] = useState("");
  const [positionSummry, setPositionSummary] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [benefits, setBenefits] = useState("");
  const [equalEmployeeOpportunity, setEqualEmployeeOpportunity] = useState("");

  // Role Requirements
  const [specificIndustryExperience, setSpecificIndustryExperience] =
    useState();
  const [specifyIndustryExp, setSpecifyIndustryExp] = useState("");
  const [industryKnowledge, setIndustryknowledge] = useState();
  const [workSetting, setWorkSetting] = useState();
  const [roleType, setRoleType] = useState();
  const [roleTimings, setRoleTimings] = useState();
  const [roleTravel, setRoleTravel] = useState();
  const [visa, setVisa] = useState();

  // Qualification and Requirements
  const [minimumLevelQualification, setMinimumLevelQualification] = useState();
  const [requireRegulatory, setRequireRegulatory] = useState();
  const [differentAcademic, setDifferentAcademic] = useState();
  const [certification, setCertification] = useState([]);
  const [software, setSoftware] = useState([]);
  const [envision, setEnvision] = useState("");


  // popup
  const [templateName, setTemplateName] = useState("");
  const [templateTag, setTemplateTag] = useState("");
  const [templateDescription, setTemplateDescription] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [settings, setSettings] = useState(null);

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

  const convertToOptions = (commaSeparatedString) => {
    //console.log(commaSeparatedString);
    if(commaSeparatedString !== undefined){
      const options = [];
      commaSeparatedString?.split(',').map(item => {
       // console.log(item);
        const trimmedItem = item.trim();
        options.push({"label" : trimmedItem, "value" : trimmedItem});
      });
      return options;
    }
    else{
      console.log("in the else");
      return tools;
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
      axiosInstance
        .get(`/getClientSettings?clientId=${user.userId}`)
        .then((response) => {
          console.log(response.data);
          setSettings(response.data)
          setEeo(response.data?.eeo);
          setCompanyInfo(response.data.companyOverview);
        })
        .catch((e) => {
          console.log(e);
        });
   }, []);


  const getJobDescription = async () => {
    const title = jobTitle;
    const softwares = software.map(option => option.value);
    const certifications = certification.map(option => option.value);
    axios
      .post("https://xenflexer.northcentralus.cloudapp.azure.com/api/jobs/", {
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
      })
      .then((data) => {
        console.log(data.data);
        setJobDescription(data.data.job_description);
        //localStorage.setItem("jobId", data.data.jobId);
      })
      .catch((e) => console.log(e));
  };

  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    const softwares = software.map(option => option.value);
    const certifications = certification.map(option => option.value);
    axiosInstance
      .post("/saveJobTemplate?clientId=" + user.userId, {
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
        jobDescription,
      })
      .then((data) => {
        console.log(data.data);
        //localStorage.setItem("jobId", data.data.jobId);
        navigate("/templates/jobTemplate");
      })
      .catch((e) => console.log(e));
    closePopup();
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    if (location.state.details) {
      const row = location.state.details;
      console.log(location.state.details);
      setJobTitle(row.jobTitle);
      setJobCode(row.jobCode);
      setJobFamily(row.jobFamily);
      setJobDepartment(row.jobDepartment);
      setJobLocation(row.jobLocation);
      setSalary(row.salary);
      setCompanyInfo(row.companyInfo);
      setPositionSummary(row.positionSummry);
      setResponsibilities(row.responsibilities);
      setBenefits(row.benefits);
      setEqualEmployeeOpportunity(row.equalEmployeeOpportunity);
      setSpecificIndustryExperience(row.specificIndustryExperience);
      setSpecifyIndustryExp(row.specifyIndustryExp);
      setIndustryknowledge(row.industryKnowledge);
      setWorkSetting(row.workSetting);
      setRoleType(row.roleType);
      setRoleTimings(row.roleTimings);
      setRoleTravel(row.roleTravel);
      setVisa(row.visa);
      setMinimumLevelQualification(row.minimumLevelQualification);
      setRequireRegulatory(row.requireRegulatory);
      setDifferentAcademic(row.differentAcademic);
      setCertification(formattedItems(row.certifications));
      setSoftware(formattedItems(row.softwares));
      setEnvision(row.envision);
      setTemplateName(row.templateName);
      setTemplateTag(row.templateTag);
      setTemplateDescription(row.templateDescription);
      setJobDescription(row.jobDescription);
    }
  }, [location.state]);

  const closePopup = () => {
    setShowPopup(false);
    setTemplateName("");
    setTemplateTag("");
    setTemplateDescription("");
  };


  const formattedItems = (items) =>{
    console.log(items);
    const opts =  items.map(item => ({
              value: item,
              label: item
            }))
    console.log(opts);
    return opts;
  }


  const handleChangeCertificate = (selected) => {
    setCertification(selected);
  };

  const handleChangeToolsAndSoftware = (selected) => {
    setSoftware(selected);
  };


  const workSettings = [
    { label: "On-Site", value: "On-Site" },
    { label: "Remote", value: "Remote" },
    { label: "Hybrid", value: "Hybrid" },
  ];

  const roleTypes = [
    { label: "Contract", value: "Contract" },
    { label: "C2H", value: "C2H" },
    { label: "Fulltime", value: "Fulltime" },
  ];

  const budgetOpts = [
    { label: "yes", value: "yes" },
    { label: "No", value: "No" },
    { label: "Limited budget", value: "Limited budget" },
  ];

  const roleTimingOpts = [
    { label: "Day Shift", value: "Day Shift" },
    { label: "Night Shift", value: "Night Shift" },
    { label: "Flexible", value: "Flexible" },
  ];

  const roleTravelOpts = [
    { label: "No Travel", value: "No Travel" },
    { label: "Occasional", value: "Occasional" },
    { label: "Frequent", value: "Frequent" },
  ];

  const minQual = [
    { label: "Bachelors", value: "Bachelors" },
    { label: "Masters", value: "Masters" },
    { label: "PhD", value: "PhD" },
  ];

  const certOpts = [
    { label: "Six Sigma Green belt", value: "Six Sigma Green belt" },
    { label: "PMP", value: "PMP" },
    { label: "Scrum Master", value: "Scrum Master" },
  ];

  const tools = [
    { label: "Azure DevOps", value: "Azure DevOps" },
    { label: "SAP", value: "SAP" },
    { label: "ABAP", value: "ABAP" },
    { label: "ERP", value: "ERP" },
    { label: "AWS", value: "AWS" },
  ];

  const [companyOverview, setCompanyOverview] = useState("");
  const [jobSummary, setJobSummary] = useState("");
  const [responsebility, setResponsibility] = useState("");
  const [benefit, setBenefit] = useState("");
  const [eeo, setEeo] = useState("");

  const getCompanyOverview = async () => {
    const title = jobTitle;
    const company_info = companyInfo;
    const bullet_points = bulletPoints;
    axios
      .post(
        "https://xenflexer.northcentralus.cloudapp.azure.com/api/company-description/",
        {
          company_info,
          bullet_points,
        }
      )
      .then((data) => {
        console.log(data.data);
        setCompanyInfo(data.data.enhanced_company_info);
        //localStorage.setItem("jobId", data.data.jobId);
      })
      .catch((e) => console.log(e));
  };

  const generateEEO = async () => {
    const title = jobTitle;
    const position_summary = positionSummry;
    axios
      .post(
        "https://xenflexer.northcentralus.cloudapp.azure.com/api/enhance-eoe/",
        {
          equalEmployeeOpportunity,
        }
      )
      .then((data) => {
        console.log(data.data);
        setEqualEmployeeOpportunity(data.data.enhanced_equal_opportunity);
        //localStorage.setItem("jobId", data.data.jobId);
      })
      .catch((e) => console.log(e));
  };

  const generateResponsibility = async () => {
    const title = jobTitle;
    axios
      .post(
        "https://xenflexer.northcentralus.cloudapp.azure.com/api/enhance-roles-responsibilities/",
        {
          responsibilities,
        }
      )
      .then((data) => {
        console.log(data.data);
        setResponsibilities(data.data.enhanced_responsibilities);
        //localStorage.setItem("jobId", data.data.jobId);
      })
      .catch((e) => console.log(e));
  };

  const generateJobSummary = async () => {
    const title = jobTitle;
    const position_summary = positionSummry;
    axios
      .post(
        "https://xenflexer.northcentralus.cloudapp.azure.com/api/enhance-position-summary/",
        {
          position_summary,
        }
      )
      .then((data) => {
        console.log(data.data);
        setPositionSummary(data.data.enhanced_position_summary);
        //localStorage.setItem("jobId", data.data.jobId);
      })
      .catch((e) => console.log(e));
  };

  const generateBenefit = async () => {
    const title = jobTitle;
    axios
      .post(
        "https://xenflexer.northcentralus.cloudapp.azure.com/api/enhance-benefits/",
        {
          benefits,
        }
      )
      .then((data) => {
        console.log(data.data);
        setBenefits(data.data.enhanced_benefits);
        //localStorage.setItem("jobId", data.data.jobId);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav openTemplate={true} />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div className="flex justify-between">
              <div>
                <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                  Job Template Details
                </p>
                <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                  Please fill in the information as needed, or use the existing
                  template.
                </p>
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
                <Autocomplete
                  size="small"
                  disablePortal
                  options={convertToOptions(settings?.jobCode).map((option) => option.label)}
                  value={jobCode || null}
                  onChange={(e, newvalue) => setJobCode(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Job Family
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={convertToOptions(settings?.jobFamily).map((option) => option.label)}
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
                  options={convertToOptions(settings?.jobDepartment).map((option) => option.label)}
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
                  options={convertToOptions(settings?.jobLocation).map((option) => option.label)}
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
              {/* <p style={{ color: "#475467", fontSize: 20, fontWeight: 500 }}>
                Job Description
              </p> */}
              <div className="grid grid-cols-2 gap-8 py-5">
                <div className="grid grid-flow-row gap-2">
                  <div className="gap-5 flex items-center justify-between">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Company Overview
                    </p>
                    <Button
                      variant="outlined"
                      size="small"
                      style={{
                        color: "white",
                        borderColor: "#008080",
                        textTransform: "none",
                        backgroundColor: "#008080",
                      }}
                      onClick={getCompanyOverview}>
                      Ask JobGPT AI
                    </Button>
                  </div>

                  <textarea
                    value={companyInfo}
                    onChange={(e) => setCompanyInfo(e.target.value)}
                    placeholder="type"
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
                    rows={4}
                  />
                  {/* <div className="grid grid-cols-2 gap-2 py-5">
                    <div>
                      <TextField
                        value={bulletPoints}
                        type="number"
                        onChange={(e) => setBulletPoints(e.target.value)}
                        placeholder="required points"
                        size="small"
                        style={{
                          borderWidth: 1,
                          borderColor: "#D0D5DD",
                          borderRadius: 8,
                          padding: 5,
                        }}
                      />
                    </div>
                  </div> */}
                </div>
                <div className="py-2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Recommended Practice
                  </p>
                  <p
                    style={{
                      color: companyInfo ? "#008080" : "#101828",
                      fontSize: 16,
                      fontStyle: "italic",
                      marginTop: 10,
                    }}>
                    For the Company Overview, ensure it succinctly captures the
                    mission and culture of the company in three sentences. This
                    summary should provide a clear and compelling introduction
                    to what drives the company and its values, helping to
                    communicate its essence effectively.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 py-5">
                <div className="grid grid-flow-row gap-2">
                  <div className="gap-5 flex items-center justify-between">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Job Summary
                    </p>
                    <Button
                      variant="outlined"
                      size="small"
                      style={{
                        color: "white",
                        borderColor: "#008080",
                        textTransform: "none",
                        backgroundColor: "#008080",
                      }}
                      onClick={generateJobSummary}>
                      Ask JobGPT AI
                    </Button>
                  </div>

                  <textarea
                    value={positionSummry}
                    placeholder="type"
                    rows={4}
                    onChange={(e) => setPositionSummary(e.target.value)}
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
                  />
                </div>
                <div className="py-2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Recommended Practice
                  </p>
                  <p
                    style={{
                      color: positionSummry ? "#008080" : "#101828",
                      fontSize: 16,
                      fontStyle: "italic",
                      marginTop: 10,
                    }}>
                    The job summary should succinctly outline the expectations
                    of this role in three sentences. Include details on the
                    reporting manager's role to provide clarity on hierarchical
                    structure and responsibilities.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 py-5">
                <div className="grid grid-flow-row gap-2">
                  <div className="gap-5 flex items-center justify-between">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Responsibilities
                    </p>
                    <Button
                      variant="outlined"
                      size="small"
                      style={{
                        color: "white",
                        borderColor: "#008080",
                        textTransform: "none",
                        backgroundColor: "#008080",
                      }}
                      onClick={generateResponsibility}>
                      Ask JobGPT AI
                    </Button>
                  </div>

                  <textarea
                    value={responsibilities}
                    rows={4}
                    placeholder="type"
                    onChange={(e) => setResponsibilities(e.target.value)}
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
                  />
                </div>
                <div className="py-2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Recommended Practice
                  </p>
                  <p
                    style={{
                      color: responsibilities ? "#008080" : "#101828",
                      fontSize: 16,
                      fontStyle: "italic",
                      marginTop: 10,
                    }}>
                    Outline detailed but concise core responsibilities,
                    emphasizing unique organizational duties (e.g., social media
                    expertise for event promotion). Highlight daily activities
                    to give candidates a clear view of the role and company fit.
                    Specify reporting structure and organizational impact to
                    show the role's place and significance within the company.
                    Keep it to 10 bullets to maintain clarity and focus.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 py-5">
                <div className="grid grid-flow-row gap-2">
                  <div className="gap-5 flex items-center justify-between">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Benefits
                    </p>
                    <Button
                      variant="outlined"
                      size="small"
                      style={{
                        color: "white",
                        borderColor: "#008080",
                        textTransform: "none",
                        backgroundColor: "#008080",
                      }}
                      onClick={generateBenefit}>
                      Ask JobGPT AI
                    </Button>
                  </div>

                  <textarea
                    value={benefits}
                    rows={4}
                    placeholder="type"
                    onChange={(e) => setBenefits(e.target.value)}
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
                  />
                </div>
                <div className="py-2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Recommended Practice
                  </p>
                  <p
                    style={{
                      color: benefits ? "#008080" : "#101828",
                      fontSize: 16,
                      fontStyle: "italic",
                      marginTop: 10,
                    }}>
                    Include benefits in 3-5 words each, such as 'Flexible work
                    schedules' and 'Health Insurance', to attract top talent.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 py-5">
                <div className="grid grid-flow-row gap-2">
                  <div className="gap-5 flex items-center justify-between">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Equal Employee Opportunity (EEO)
                    </p>
                    <Button
                      variant="outlined"
                      size="small"
                      style={{
                        color: "white",
                        borderColor: "#008080",
                        textTransform: "none",
                        backgroundColor: "#008080",
                      }}
                      onClick={generateEEO}>
                      Ask JobGPT AI
                    </Button>
                  </div>
                  <textarea
                    value={equalEmployeeOpportunity}
                    onChange={(e) =>
                      setEqualEmployeeOpportunity(e.target.value)
                    }
                    rows={4}
                    placeholder="type"
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
                  />
                </div>
                <div className="py-2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Recommended Practice
                  </p>
                  <p
                    style={{
                      color: equalEmployeeOpportunity ? "#008080" : "#101828",
                      fontSize: 16,
                      fontStyle: "italic",
                      marginTop: 10,
                    }}>
                    Craft an effective EEO statement: Be specific about
                    compliance with EEOC rules, mention relevant employment
                    practices beyond hiring, highlight diversity and inclusion
                    efforts, affirm merit-based hiring decisions, and direct to
                    additional resources for more information.
                  </p>
                </div>
              </div>
            </div>
            {/* Role Requirements and Preferences */}{" "}
            <div className="py-5">
              <p style={{ color: "#475467", fontSize: 20, fontWeight: 500 }}>
                Role Requirements and Preferences
              </p>
              <div className="grid grid-flow-row gap-2 py-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Is industry-specific experience essential for candidates, and
                  if so, which industry and why that experience is critical?
                </p>

                <TextField
                  size="small"
                  disablePortal
                  multiline
                  value={specificIndustryExperience}
                  onChange={(e) =>
                    setSpecificIndustryExperience(e.target.value)
                  }
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
                    options={convertToOptions(settings?.workSetting).map((option) => option.label)}
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
                    options={convertToOptions(settings?.typeRole).map((option) => option.label)}
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
                    options={convertToOptions(settings?.roleTiming).map((option) => option.label)}
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
                    options={convertToOptions(settings?.travel).map((option) => option.label)}
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
                    What kind of visa are you looking for ?
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
                    options={convertToOptions(settings?.acadamicQualification).map((option) => option.label)}
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
                    onChange={(e, newvalue) => setRequireRegulatory(newvalue)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>

                <div className="grid grid-flow-row gap-2 py-5">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Open to candidates with diverse academic backgrounds with
                    required skills?
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
                <div className="grid grid-flow-row gap-2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What should a successful candidate achieve in this role
                    within three years?
                  </p>
                  <TextField
                    size="small"
                    placeholder="type"
                    value={envision}
                    onChange={(e) => setEnvision(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid-cols-2 grid gap-8 mt-8">
                {/* cerificate */}
                <div className="grid grid-flow-row gap-2 h-fit">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Are there any specific certifications or licenses that
                    candidates must hold?
                  </p>
                      <>
                        <div>
                        <CreatableSelect
                          isClearable
                          isMulti
                          options={certOpts}
                          value={certification || null}
                          onChange={(selected) =>
                              handleChangeCertificate(
                               selected
                              )
                            }
                          placeholder="Select or create an item"
                        />
                        </div>
                      </>
                </div>
                {/* tools */}
                <div className="grid grid-flow-row gap-2 h-fit">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Are there any tools or software candidates should be
                    proficient in?
                  </p>
                        <div>
                            <CreatableSelect
                              isClearable
                              isMulti
                              options={tools}
                              value={software || null}
                              onChange={(selected) =>
                                  handleChangeToolsAndSoftware(
                                  selected
                                  )
                                }
                              placeholder="Select or create an item"
                            />
                        </div>
                </div>
              </div>

              <div className="grid grid-flow-row gap-2 pb-8">
                <div className="pt-3 ">
                  <p
                    style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                    Generate screening question for this role
                  </p>
                  <Button
                    size="small"
                    style={{
                      color: "#008080",
                      textTransform: "none",
                      backgroundColor: "#EAF4F5",
                      margin: 3,
                    }}
                    startIcon={<AiNetworksvg COLOR={"#008080"} />}
                    onClick={getJobDescription}>
                    Generate JD
                  </Button>
                </div>

                <textarea
                  value={jobDescription}
                  row={50}
                  placeholder="type"
                  onChange={(e) => setJobDescription(e.target.value)}
                  style={{
                    borderWidth: 1,
                    borderColor: "#D0D5DD",
                    borderRadius: 8,
                    padding: 5,
                    height: 200,
                  }}
                />
              </div>
            </div>
            {/* button */}
            <div className="py-8 gap-4 flex justify-end">
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
                Save
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
