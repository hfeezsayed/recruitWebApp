import React, { useState } from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  styled,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { FaArrowRight } from "react-icons/fa6";
import { BsFillCameraFill } from "react-icons/bs";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import { createJobData } from "../../../dummy/Data";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { useEffect } from "react";
import axios from "axios";

export const CreateJob = () => {
  const [userData, setUserData] = useState(createJobData);
  const [jobId, setJobId] = useState(0);
  const location = useLocation();
  const { state } = location;
  const userName = JSON.parse(localStorage.getItem("token"))?.username
    ? JSON.parse(localStorage.getItem("token"))?.username
    : userData.name;

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background: `linear-gradient(90deg, #66B2B2 ${
        100 - userData?.jobCompletd ? userData?.jobCompletd : 0
      }%, #008080 100%)`,
    },
  }));
  const navigate = useNavigate();

  const changeUserData = () => {
    if (userData.jobCompletd > 40) {
      setUserData({
        name: "Adobe",
        jobCompletd: 28,
      });
    } else {
      setUserData(createJobData);
    }
  };

  // useEffect(() => {
  //   if (location.state) {
  //     console.log(location.state);
  //     setJobId(location.state);
  //   }
  // }, [location.state]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    console.log(state);
    if(location.state?.new){
      localStorage.setItem("jobId", 0);
    }
    else{
      axios
        .get(
          `http://localhost:8080/xen/getJobDetails?clientId=${user.userId}&jobId=${location.state}`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        )
        .then((data) => {
          console.log(data);
          setUserData(data?.data);
          localStorage.setItem("jobId", data.data.id);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  const handleJobDetails = (jobData) => {
    if (jobData?.jobDetail === true) {
      navigate("/job/jobDetailEdit", { state: { jobData: jobData } });
    } else {
      navigate("/job/jobDetailCreate");
    }
  };

  const handleWorkValues = (jobData) => {
    if (jobData?.workValues === true) {
      navigate("/job/valuesEdit", { state: { jobData: jobData } });
    } else {
      navigate("/job/valuesList");
    }
  };

  const handleJobPreferences = (jobData) => {
    if (jobData?.preference === true) {
      navigate("/job/preferenceEdit", { state: { jobData: jobData } });
    } else {
      navigate("/job/preferenceList");
    }
  };

  const handleTeam = (jobData) => {
    if (jobData?.team === true) {
      navigate("/job/teamEdit", { state: { jobData: jobData } });
    } else {
      navigate("/job/teamList");
    }
  };

  const handleIcp = (jobData) => {
    if (jobData?.icp === true) {
      navigate("/job/icpEdit", { state: { jobData: jobData } });
    } else {
      navigate("/job/icpList");
    }
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              <p style={{ color: "#101828", fontWeight: 600, fontSize: 20 }}>
                Complete all steps to create a job
              </p>
              <p style={{ color: "#475467", fontSize: 16 }}>
                Complete all the steps to generate a job offer for the
                candidate.
              </p>
              <div className="py-4 flex gap-6">
                <div
                  className="w-28 h-28 rounded-full "
                  style={{ borderWidth: 2, borderColor: "#66B2B2" }}>
                  <img
                    src={
                      userData.image ||
                      `https://eu.ui-avatars.com/api/?name=${userName}&size=250`
                    }
                    alt="person"
                    className="rounded-full"
                  />
                  <div
                    className="relative -mt-8 justify-end flex h-9"
                    style={{ backgroundColor: "#" }}>
                    <IconButton
                      style={{ padding: 6, backgroundColor: "#66B2B2" }}>
                      <BsFillCameraFill
                        style={{ color: "#ffffff", fontSize: 22 }}
                      />
                    </IconButton>
                  </div>
                </div>
                <div className="mt-9">
                  <p
                    style={{ color: "#101828", fontWeight: 600, fontSize: 24 }}>
                    {userName}
                  </p>
                </div>
              </div>
              <div className="flex w-full py-2">
                <div className="w-full">
                  <p style={{ color: "#101828", fontSize: 14 }}>
                    Job Creation Completed
                  </p>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: "50%", mr: 1 }}>
                      <BorderLinearProgress
                        variant="determinate"
                        value={userData?.jobCompletd}
                      />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary">{`${Math.round(
                        userData?.jobCompletd
                      )}%`}</Typography>
                    </Box>
                  </Box>
                </div>
                <div>
                <Button
                    variant="text"
                    style={{
                      color: "#008080",
                      backgroundColor: "#EAF4F5",
                      textTransform: "none",
                    }}
                    onClick={() => navigate("/job/jobCandidates", { state : location.state})}>
                    Show Candidates
                  </Button>
                </div>
              </div>
            </div>
            <div className="py-10">
              <p style={{ color: "#101828", fontWeight: 600, fontSize: 20 }}>
                Complete all forms and assessments to begin
              </p>
              <p style={{ color: "#475467", fontSize: 16 }}>
                Please fill out all the necessary forms and complete the
                required assessments to get started
              </p>
              {/* card */}
              <div className="grid grid-cols-2 gap-5 mt-5">
                <Card sx={{ borderRadius: 5 }}>
                  <CardContent>
                    <div className="flex gap-2">
                      <div className="w-1/3">
                        <Gauge
                          height={100}
                          value={userData?.jobDetail ? 100 : 0}
                          startAngle={-110}
                          endAngle={110}
                          sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                              fontSize: 20,
                              transform: "translate(0px, 0px)",
                              color: "#101828",
                              fontWeight: 600,
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                              fill: "#58A20F",
                            },
                          }}
                          text={({ value }) => `${value} %`}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            color: userData?.jobDetails ? "#58A20F" : "#101828",
                            fontWeight: 600,
                          }}>
                          Completed
                        </p>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between items-center">
                          <p style={{ color: "#777980", fontSize: 14 }}>
                            Step 1
                          </p>
                          <div className="flex gap-2 items-center">
                            <MdOutlineWatchLater
                              style={{ color: "#777980", fontSize: 16 }}
                            />
                            <p style={{ color: "#777980", fontSize: 14 }}>
                              5-10 mins
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              color: "#101828",
                              fontWeight: 600,
                              fontSize: 20,
                            }}>
                            Job Details
                          </p>
                          <p style={{ color: "#475467", fontSize: 16 }}>
                            This is the first step in creating a job . Start by
                            choosing a template and filling in the relevant job
                            details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <Divider />
                  <CardActions style={{ justifyContent: "flex-end" }}>
                    <Button
                      size="small"
                      style={{
                        color: userData?.jobDetail ? "#1E90FF" : "#E05880",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                      endIcon={<FaArrowRight />}
                      onClick={() => {
                        handleJobDetails(userData);
                      }}>
                      {userData?.jobDetail ? "Edit" : "Not taken"}
                    </Button>
                  </CardActions>
                </Card>
                <Card sx={{ borderRadius: 5 }}>
                  <CardContent>
                    <div className="flex gap-2">
                      <div className="w-1/3">
                        <Gauge
                          height={100}
                          value={userData?.workValues ? 100 : 0}
                          startAngle={-110}
                          endAngle={110}
                          sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                              fontSize: 20,
                              transform: "translate(0px, 0px)",
                              color: "#101828",
                              fontWeight: 600,
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                              fill: "#58A20F",
                            },
                          }}
                          text={({ value }) => `${value} %`}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            color: userData?.workValues ? "#58A20F" : "#101828",
                            fontWeight: 600,
                          }}>
                          Completed
                        </p>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between items-center">
                          <p style={{ color: "#777980", fontSize: 14 }}>
                            Step 2
                          </p>
                          <div className="flex gap-2 items-center">
                            <MdOutlineWatchLater
                              style={{ color: "#777980", fontSize: 16 }}
                            />
                            <p style={{ color: "#777980", fontSize: 14 }}>
                              5-10 mins
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              color: "#101828",
                              fontWeight: 600,
                              fontSize: 20,
                            }}>
                            Work Values
                          </p>
                          <p style={{ color: "#475467", fontSize: 16 }}>
                            This is the second step in creating a job.
                            <br /> Choose a template and fill in the job details
                            to create your ICP.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <Divider />
                  <CardActions style={{ justifyContent: "flex-end" }}>
                    <Button
                      size="small"
                      style={{
                        color: userData?.workValues ? "#1E90FF" : "#E05880",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                      endIcon={<FaArrowRight />}
                      onClick={() => {
                        handleWorkValues(userData);
                      }}>
                      {userData?.workValues ? "Edit" : "Not taken"}
                    </Button>
                  </CardActions>
                </Card>
                <Card sx={{ borderRadius: 5 }}>
                  <CardContent>
                    <div className="flex gap-2">
                      <div className="w-1/3">
                        <Gauge
                          height={100}
                          value={userData?.team ? 100 : 0}
                          startAngle={-110}
                          endAngle={110}
                          sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                              fontSize: 20,
                              transform: "translate(0px, 0px)",
                              color: "#101828",
                              fontWeight: 600,
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                              fill: "#58A20F",
                            },
                          }}
                          text={({ value }) => `${value} %`}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            color: userData?.team ? "#58A20F" : "#101828",
                            fontWeight: 600,
                          }}>
                          Completed
                        </p>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between items-center">
                          <p style={{ color: "#777980", fontSize: 14 }}>
                            Step 3
                          </p>
                          <div className="flex gap-2 items-center">
                            <MdOutlineWatchLater
                              style={{ color: "#777980", fontSize: 16 }}
                            />
                            <p style={{ color: "#777980", fontSize: 14 }}>
                              5-10 mins
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              color: "#101828",
                              fontWeight: 600,
                              fontSize: 20,
                            }}>
                            Team Preference
                          </p>
                          <p style={{ color: "#475467", fontSize: 16 }}>
                            This is the third step in creating a job . Start by
                            choosing a template and filling in the relevant job
                            details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <Divider />
                  <CardActions style={{ justifyContent: "flex-end" }}>
                    <Button
                      size="small"
                      style={{
                        color: userData?.team ? "#1E90FF" : "#E05880",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                      endIcon={<FaArrowRight />}
                      onClick={() => {
                        handleTeam(userData);
                      }}>
                      {userData?.team ? "Edit" : "Not taken"}
                    </Button>
                  </CardActions>
                </Card>
                <Card sx={{ borderRadius: 5 }}>
                  <CardContent>
                    <div className="flex gap-2">
                      <div className="w-1/3">
                        <Gauge
                          height={100}
                          value={userData?.preference ? 100 : 0}
                          startAngle={-110}
                          endAngle={110}
                          sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                              fontSize: 20,
                              transform: "translate(0px, 0px)",
                              color: "#101828",
                              fontWeight: 600,
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                              fill: "#58A20F",
                            },
                          }}
                          text={({ value }) => `${value} %`}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            color: userData?.preference ? "#58A20F" : "#101828",
                            fontWeight: 600,
                          }}>
                          Completed
                        </p>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between items-center">
                          <p style={{ color: "#777980", fontSize: 14 }}>
                            Step 4
                          </p>
                          <div className="flex gap-2 items-center">
                            <MdOutlineWatchLater
                              style={{ color: "#777980", fontSize: 16 }}
                            />
                            <p style={{ color: "#777980", fontSize: 14 }}>
                              5-10 mins
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              color: "#101828",
                              fontWeight: 600,
                              fontSize: 20,
                            }}>
                            Job Preference
                          </p>
                          <p style={{ color: "#475467", fontSize: 16 }}>
                            This is the forth step in creating a job . Start by
                            choosing a template and filling in the relevant job
                            details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <Divider />
                  <CardActions style={{ justifyContent: "flex-end" }}>
                    <Button
                      size="small"
                      style={{
                        color: userData?.preference ? "#1E90FF" : "#E05880",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                      endIcon={<FaArrowRight />}
                      onClick={() => {
                        handleJobPreferences(userData);
                      }}>
                      {userData?.preference ? "Edit" : "Not taken"}
                    </Button>
                  </CardActions>
                </Card>
                <Card sx={{ borderRadius: 5 }}>
                  <CardContent>
                    <div className="flex gap-2">
                      <div className="w-1/3">
                        <Gauge
                          height={100}
                          value={userData?.icp ? 100 : 0}
                          startAngle={-110}
                          endAngle={110}
                          sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                              fontSize: 20,
                              transform: "translate(0px, 0px)",
                              color: "#101828",
                              fontWeight: 600,
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                              fill: "#58A20F",
                            },
                          }}
                          text={({ value }) => `${value} %`}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            color: userData?.icp ? "#58A20F" : "#101828",
                            fontWeight: 600,
                          }}>
                          Completed
                        </p>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between items-center">
                          <p style={{ color: "#777980", fontSize: 14 }}>
                            Step 5
                          </p>
                          <div className="flex gap-2 items-center">
                            <MdOutlineWatchLater
                              style={{ color: "#777980", fontSize: 16 }}
                            />
                            <p style={{ color: "#777980", fontSize: 14 }}>
                              5-10 mins
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              color: "#101828",
                              fontWeight: 600,
                              fontSize: 20,
                            }}>
                            ICP Template
                          </p>
                          <p style={{ color: "#475467", fontSize: 16 }}>
                            This is the fifth step in creating a job . Start by
                            choosing a template and filling in the relevant job
                            details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <Divider />
                  <CardActions style={{ justifyContent: "flex-end" }}>
                    <Button
                      size="small"
                      style={{
                        color: userData?.icp ? "#1E90FF" : "#E05880",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                      endIcon={<FaArrowRight />}
                      onClick={() => {
                        handleIcp(userData);
                      }}>
                      {userData?.icp ? "Edit" : "Not taken"}
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
