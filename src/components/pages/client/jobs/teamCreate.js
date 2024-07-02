import React, { useEffect, useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  DialogActions,
} from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";

export const TeamCreate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [teamSize, setTeamSize] = useState();
  const [teamLocation, setTeamLocation] = useState();
  const [crossFunctionality, setCrossFunctionality] = useState();
  const [specifyDomain, setSpecifyDomain] = useState();

  const [teamWorkingDes, setTeamWorkingDes] = useState("");
  const [describeContributions, setDescribeContributions] = useState("");
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
    const domainRole = specifyDomain;
    const project = teamWorkingDes;
    const contributions = describeContributions;
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axiosInstance
      .post(
        `/saveTeamTemplateForJob?clientId=${user.userId}&jobId=${jobId}`,
        {
          teamSize,
          teamLocation,
          crossFunctionality,
          domainRole,
          project,
          contributions,
          templateName,
          templateTag,
          templateDescription,
        },
        
      )
      .then((data) => {
         console.log(data.data)
         navigate("/job/createJob", { state : jobId});  
      })
      .catch((e) => console.log(e));
  };

  const closePopup = () => {
    setShowPopup(false);
    setTemplateName("");
    setTemplateTag("");
    setTemplateDescription("");
  };

  useEffect(() => {
    console.log(location.state?.selected);
    if(location.state?.selected){
      setTeamSize(location.state.selected.teamSize);
      setTeamLocation(location.state.selected.teamLocation);
      setCrossFunctionality(location.state.selected.crossFunctionality);
      setSpecifyDomain(location.state.selected.domainRole);
      setTeamWorkingDes(location.state.selected.project);
      setDescribeContributions(location.state.selected.contributions);
    }
  }, []);

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
                  Team Template Details
                </p>
                <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                  Please fill in the information as needed, or use the existing
                  template.
                </p>
              </div>
              <div>
                <Button
                  variant="text"
                  style={{
                    color: "#008080",
                    backgroundColor: "#EAF4F5",
                    textTransform: "none",
                  }}
                  onClick={() => navigate("/job/teamList")}>
                  Copy data from the template
                </Button>
              </div>
            </div>
            <div className="grid-cols-2 grid gap-8 mt-8">
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  What is the size of the team
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
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
                  options={options.map((option) => option.label)}
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
                  options={yes_no}
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
                  options={options.map((option) => option.label)}
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
                      Team Template Name
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
                      Team Template Tags
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
                    Team Template Description
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
