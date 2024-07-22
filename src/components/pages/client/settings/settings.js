import React, { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import axiosInstance from "../../../utils/axiosInstance";

export const Settings = () => {
  const [jobCode, setJobCode] = useState();
  const [jobFamily, setJobFamily] = useState();
  const [jobDepartment, setJobDepartment] = useState();
  const [jobLocation, setJobLocation] = useState();
  const [defaultCurrency, setDefaultCurrency] = useState();
  const [workSetting, setWorkSetting] = useState();
  const [typeRole, setTypeRole] = useState();
  const [roleTiming, setRoleTiming] = useState();
  const [travel, setTravel] = useState();
  const [acadamicQualification, setAcadamincQualification] = useState();
  const [teamSize, setTeamSize] = useState();
  const [teamLocation, setTeamLocation] = useState();
  const [certifications, setCertifications] = useState();
  const [softwares, setSoftwares] = useState();
  const [companyOverview, setCompanyOverview] = useState();
  const [EEO, setEEO] = useState();
  const [onboarding, setOnboarding] = useState();

  const jobCodeList = ["JC001", "JCC002", "JC003"];
  const jobFamilyList = ["Technology", "Designing", "Marketing", "Finance"];
  const jobDepartmentList = ["Engineering", "Sales", "Human Resources"];
  const jobLocationList = [
    "New York",
    "NY",
    "San Francisco",
    "CA",
    "London",
    "UK",
  ];
  const currencyList = ["USD", "EUR", "GBP"];
  const workSettingList = ["On-Site", "Remote", "Hybrid"];
  const typeRoleList = ["Contract", "C2H", "Fulltime"];
  const roleTimingList = ["Day Shift", "Night shift", "Flexible"];
  const travelList = ["No Travel", "Occasional", "Frequent"];
  const acadamicQualificationList = ["Bachelors", "Master", "PhD"];
  const teamSizeList = ["1-5", "5-10", "10-15", "15-20", "20-30", "30+"];
  const teamLocationList = ["Hyderabad", "Noida", "Delhi", "Gurgaon", "Pune"];
  const certificationsList = ["Six Sigma Green belt", "PMP", "Scrum Master"];
  const softwaresList = ["Azure DevOps", "SAP", "ABAP", "ERP", "AWS"];

  const onSubmitData = () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axiosInstance
      .post(`/saveClientSettings?clientId=${user.userId}`, {
        jobCode,
        jobFamily,
        jobDepartment,
        jobLocation,
        defaultCurrency,
        workSetting,
        typeRole,
        roleTiming,
        travel,
        acadamicQualification,
        teamSize,
        teamLocation,
        certifications,
        softwares,
        companyOverview,
        EEO,
        onboarding,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex">
      <ClientSideNav />
      <div className="w-full">
        <TopNav />
        <div className="p-8">
          <div>
            <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
              Settings
            </p>
            <p style={{ color: "#475467", fontSize: 14 }}>
              Please fill in the information as needed, or use the existing
              template.
            </p>
          </div>
          <div className="mt-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Job Code
            </p>
            <Autocomplete
              size="small"
              fullWidth
              options={jobCodeList.map((option) => option)}
              value={jobCode || null}
              onChange={(e, value) => setJobCode(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="mt-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Job Family
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={jobFamilyList.map((option) => option)}
              value={jobFamily || null}
              onChange={(e, value) => setJobFamily(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="mt-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Job Department
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={jobDepartmentList.map((option) => option)}
              value={jobDepartment || null}
              onChange={(e, value) => setJobDepartment(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="mt-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Job Location
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={jobLocationList.map((option) => option)}
              value={jobLocation || null}
              onChange={(e, value) => setJobLocation(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Default Currency
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={currencyList.map((option) => option)}
              value={defaultCurrency || null}
              onChange={(e, value) => setDefaultCurrency(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <p style={{ color: "#475467", fontSize: 20, fontWeight: 500 }}>
            Lookup Value for following questions:
          </p>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What is the work setting for the role?
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={workSettingList.map((option) => option)}
              value={workSetting || null}
              onChange={(e, value) => setWorkSetting(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Type of role?
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={typeRoleList.map((option) => option)}
              value={typeRole || null}
              onChange={(e, value) => setTypeRole(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What are the timings for the role?
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={roleTimingList.map((option) => option)}
              value={roleTiming || null}
              onChange={(e, value) => setRoleTiming(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              How frequent does the role require to travel?
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={travelList.map((option) => option)}
              value={travel || null}
              onChange={(e, value) => setTravel(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What is the minimum level of academic qualification do you seek in
              potential candidates?   Default:  Bachelors/Masters/PhD
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={acadamicQualificationList.map((option) => option)}
              value={acadamicQualification || null}
              onChange={(e, value) => setAcadamincQualification(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What is the size of the team?
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={teamSizeList.map((option) => option)}
              value={teamSize || null}
              onChange={(e, value) => setTeamSize(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What is the location of the team where it works from?
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={teamLocationList.map((option) => option)}
              value={teamLocation || null}
              onChange={(e, value) => setTeamLocation(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Are there any specific certifications or licenses that candidates
              must hold?
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={certificationsList.map((option) => option)}
              value={certifications || null}
              onChange={(e, value) => setCertifications(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Are there any tools or software candidates should be proficient
              in?
            </p>

            <Autocomplete
              size="small"
              fullWidth
              options={softwaresList.map((option) => option)}
              value={softwares || null}
              onChange={(e, value) => setSoftwares(value)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" required />
              )}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Company Overview
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={companyOverview}
              onChange={(e) => setCompanyOverview(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Equal Employee Opportunity (EEO)
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={EEO}
              onChange={(e) => setEEO(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Onboarding Requirements
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={onboarding}
              onChange={(e) => setOnboarding(e.target.value)}
            />
          </div>
          <div className="flex justify-end mt-4 gap-4">
            <Button
              variant="contained"
              onClick={onSubmitData}
              sx={{ bgcolor: "#008080", color: "#ffffff" }}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
