import React, { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";
import { locations as allLocations } from "../../../utils/allLocations";
import { domainOrTeams } from "../../../utils/seedsData";

export const TeamTemplateEdit = () => {
  const navigate = useNavigate();
  const [teamSize, setTeamSize] = useState();
  const [teamLocation, setTeamLocation] = useState();
  const [crossFunctionality, setCrossFunctionality] = useState();
  const [specifyDomain, setSpecifyDomain] = useState();

  const [teamWorkingDes, setTeamWorkingDes] = useState("");
  const [describeContributions, setDescribeContributions] = useState("");
  const [workValues, setWorkValues] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState("");

  const location = useLocation();

  const teamSizeOpts = [
    { label: "1-5", value: "1-5" },
    { label: "5-10", value: "5-10" },
    { label: "10-15", value: "10-15" },
    { label: "15-20", value: "15-20" },
    { label: "20-30", value: "20-30" },
    { label: "30+", value: "30+" },
  ];

  const yes_no = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const handleSubmit = async () => {
    const domainRole = specifyDomain;
    const project = teamWorkingDes;
    const contributions = describeContributions;
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .post(`/saveTeamTemplate?clientId=${user.userId}`, {
        teamSize,
        teamLocation,
        crossFunctionality,
        domainRole,
        project,
        contributions,
        workValues,
        technicalSkills,
      })
      .then((data) => {
        console.log(data.data);
        navigate("/templates/teamTemplate");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    if (location.state) {
      console.log(location.state);
      if (location.state?.jobData) {
        axiosInstance
          .get(
            `/getTeamTemplate?clientId=${user.userId}&templateId=${location.state.jobData.jobDetailId}`
          )
          .then((data) => {
            console.log(data);
            setTeamSize(data.data.teamSize);
            setTeamLocation(data.data.teamLocation);
            setCrossFunctionality(data.data.crossFunctionality);
            setSpecifyDomain(data.data.domainRole);
            setTeamWorkingDes(data.data.project);
            setDescribeContributions(data.data.contributions);
            setWorkValues(data.data.workValues);
            setTechnicalSkills(data.data.technicalSkills);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        setTeamSize(location.state.teamSize);
        setTeamLocation(location.state.teamLocation);
        setCrossFunctionality(location.state.crossFunctionality);
        setSpecifyDomain(location.state.domainRole);
        setTeamWorkingDes(location.state.project);
        setDescribeContributions(location.state.contributions);
        setWorkValues(location.state.workValues);
        setTechnicalSkills(location.state.technicalSkills);
      }
    }
  }, [location.state]);

  return (
    <div>
      <div className="flex">
        <ClientSideNav openTemplate={true} />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                Team Template Details
              </p>
              <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                Please review and edit the information as needed, or use the
                same template.
              </p>
            </div>
            <div className="grid-cols-2 grid gap-8 mt-8">
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  What is the size of the team
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={teamSizeOpts.map((option) => option.label)}
                  value={teamSize || null}
                  onChange={(e, newvalue) => setTeamSize(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  What is the location of the team where it works from?
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={allLocations?.map((option) => option.label)}
                  value={teamLocation || null}
                  onChange={(e, newvalue) => setTeamLocation(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Does the role have to work cross functionally?
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={yes_no.map((option) => option.label)}
                  value={crossFunctionality || null}
                  onChange={(e, newvalue) => setCrossFunctionality(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  If yes, please specify the domain or teams the role will
                  interact with?
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  disabled={crossFunctionality !== "Yes"}
                  options={domainOrTeams.map((option) => option.label)}
                  value={specifyDomain || null}
                  onChange={(e, newvalue) => setSpecifyDomain(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
            </div>

            <div className="grid grid-flow-row gap-2 mt-8">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                What problem/project is the team working on which the candidate
                will be joining?
              </p>
              <textarea
                value={teamWorkingDes}
                onChange={(e) => setTeamWorkingDes(e.target.value)}
                placeholder="type"
                style={{
                  borderWidth: 1,
                  borderColor: "#D0D5DD",
                  borderRadius: 8,
                  padding: 5,
                }}
              />
            </div>
            <div className="grid grid-flow-row gap-2 py-5">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Could you describe the contributions of a particularly
                successful team member in a similar role and how they've
                impacted the team's success?
              </p>
              <textarea
                value={describeContributions}
                onChange={(e) => setDescribeContributions(e.target.value)}
                placeholder="type"
                style={{
                  borderWidth: 1,
                  borderColor: "#D0D5DD",
                  borderRadius: 8,
                  padding: 5,
                }}
              />
            </div>
            <div className="grid grid-flow-row gap-2 py-5">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                How important are Work Values to you? Is this talent dimension
                used in filtering candidates or not? (Note: by default, we use
                this as one of the talent dimensions in the overall score.)
              </p>
              <Autocomplete
                size="small"
                disablePortal
                options={yes_no.map((option) => option.label)}
                value={workValues || null}
                onChange={(e, newvalue) => setWorkValues(newvalue)}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select" />
                )}
              />
            </div>
            <div className="grid grid-flow-row gap-2 py-5">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Do you want to give extra weight to Technical Skills compared to
                other talent dimensions? (Note: By default, we assign
                corresponding weightages based on your response in the ICP
                Analysis.)
              </p>
              <Autocomplete
                size="small"
                disablePortal
                options={yes_no.map((option) => option.label)}
                value={technicalSkills || null}
                onChange={(e, newvalue) => setTechnicalSkills(newvalue)}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select" />
                )}
              />
            </div>
            <div className="py-8 gap-8 flex justify-end">
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                variant="outlined"
                style={{ color: "#475467", borderColor: "#D0D5DD" }}
              >
                back
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                style={{ color: "#ffffff", backgroundColor: "#008080" }}
              >
                CONFIRM
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
