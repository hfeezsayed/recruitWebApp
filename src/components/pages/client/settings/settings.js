import React, { useState } from "react";
import { TextField } from "@mui/material";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";

export const Settings = () => {
  const [jobCode, setJobCode] = useState();
  const [jobFamily, setJobFamily] = useState();
  const [jobDepartment, setJobDepartment] = useState();
  const [jobLocation, setJobLocation] = useState();
  const [defaultCurrency, setDefaultCurrency] = useState();
  const [workSetting, setWorkSetting] = useState();
  const [typeRole, setTypeRole] = useState();
  const [timingRole, setTimingRole] = useState();
  const [travel, setTravel] = useState();
  const [acadamicQualification, setAcadamincQualification] = useState();
  const [teamSize, setTeamSize] = useState();
  const [teamLocation, setTeamLocation] = useState();
  const [certifications, setCertifications] = useState();
  const [softwareCandidates, setSoftwareCandidates] = useState();
  const [companyOverview, setCompanyOverview] = useState();
  const [EEO, setEEO] = useState();
  const [onboarding, setOnboarding] = useState();

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
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={jobCode}
              onChange={(e) => setJobCode(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Job Family
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={jobFamily}
              onChange={(e) => setJobFamily(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Job Department
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={jobDepartment}
              onChange={(e) => setJobDepartment(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Job Location
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Default Currency
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={defaultCurrency}
              onChange={(e) => setDefaultCurrency(e.target.value)}
            />
          </div>
          <p style={{ color: "#475467", fontSize: 20, fontWeight: 500 }}>
            Lookup Value for following questions:
          </p>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What is the work setting for the role?
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={workSetting}
              onChange={(e) => setWorkSetting(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Type of role?
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={typeRole}
              onChange={(e) => setTypeRole(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What are the timings for the role?
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={timingRole}
              onChange={(e) => setTimingRole(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              How frequent does the role require to travel?
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={travel}
              onChange={(e) => setTravel(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What is the minimum level of academic qualification do you seek in
              potential candidates?   Default:  Bachelors/Masters/PhD
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={acadamicQualification}
              onChange={(e) => setAcadamincQualification(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What is the size of the team?
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What is the location of the team where it works from?
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={teamLocation}
              onChange={(e) => setTeamLocation(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Are there any specific certifications or licenses that candidates
              must hold?
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={certifications}
              onChange={(e) => setCertifications(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Are there any tools or software candidates should be proficient
              in?
            </p>
            <TextField
              fullWidth
              size="small"
              placeholder="type.."
              value={softwareCandidates}
              onChange={(e) => setSoftwareCandidates(e.target.value)}
            />
          </div>
          <div className="my-5">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Are there any tools or software candidates should be proficient
              in?
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
        </div>
      </div>
    </div>
  );
};
