import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { IoFilterSharp, IoTimeOutline } from "react-icons/io5";
import {
  Button,
  Card,
  CardContent,
  Divider,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import axiosInstance from "../../../utils/axiosInstance";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";
import logo from "../../../../assets/images/logo.png";
import { AllJobsData, JobDetails as jobsdata } from "../../../dummy/Data";

export const JobDetails = () => {
  const location = useLocation();
  const [alljobs, setAllJobs] = useState(AllJobsData);
  const [jobDetail, setJobDetail] = useState(jobsdata);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      console.log(location.state);
      setAllJobs(location.state?.jobs);
      setJobDetail(location.state?.row);
    }
  }, [location.state]);

  const handleCLickJob = (id) => {
    axiosInstance
      .get("localhost:3000")
      .then((data) => {
        console.log(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {/* top nav */}
      <div className="flex w-full">
        <div className="p-2 pl-5 flex gap-2" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
          <p style={{ color: "#475467", fontSize: 25 }}>Xenhire</p>
        </div>
        <TopNav />
      </div>
      <div className="w-full min-h-screen">
        <div className="p-8 h-full">
          <div>
            <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
              Jobs Created
            </p>
            <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
              Start the process by selecting an option: use an existing job
              template or create a new one job template.
            </p>
          </div>
          <div className="flex gap-2 py-3">
            <TextField
              fullWidth
              size="small"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiSearch />
                  </InputAdornment>
                ),
              }}
              sx={{ maxWidth: 350 }}
            />
            <Button
              variant="outlined"
              style={{
                borderColor: "#D0D5DD",
                color: "#252525",
                textTransform: "none",
                fontWeight: 500,
                borderRadius: 8,
              }}
              startIcon={<IoFilterSharp />}
            >
              Filter
            </Button>
          </div>
          <div className="flex gap-5">
            <div className="w-[450px] max-h-screen overflow-y-scroll ">
              {alljobs?.map((row, index) => {
                return (
                  <div
                    key={index}
                    className="border border-gray-300 p-2"
                    style={{
                      backgroundColor:
                        row?.id === location.state ? "#F3F8F9" : "#ffffff",
                    }}
                    onClick={() => {
                      handleCLickJob(row?.id);
                    }}
                  >
                    <div className="pb-2">
                      <div className="flex gap-2 items-center">
                        <p
                          style={{
                            color: "#008080",
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        >
                          {row?.jobName}
                        </p>
                        {row?.newPost ? (
                          <p
                            style={{
                              color: "#7D5AE2",
                              backgroundColor: "#7D5AE215",
                              fontSize: 12,
                              fontWeight: 500,
                              borderRadius: 3,
                              paddingLeft: 8,
                              paddingRight: 8,
                              paddingBottom: 4,
                            }}
                          >
                            New post
                          </p>
                        ) : (
                          <></>
                        )}
                      </div>
                      <p
                        style={{
                          color: "#474D6A",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        {row?.companyName}
                      </p>
                    </div>

                    <div className="flex gap-3 items-center">
                      <div className="flex gap-1 items-center">
                        <GrLocation style={{ color: "#47546780" }} />
                        <p
                          style={{
                            color: "#47546770",
                            fontSize: 14,
                          }}
                        >
                          {row?.location}
                        </p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <IoTimeOutline style={{ color: "#47546780" }} />
                        {row?.typeOfHire.map((data, index) => {
                          return (
                            <p
                              key={index}
                              style={{
                                color: "#47546770",
                                fontSize: 14,
                                paddingRight: 5,
                                borderRightWidth:
                                  index + 1 === row?.typeOfHire?.length ? 0 : 2,
                              }}
                            >
                              {data}
                            </p>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-flow-row gap-1 mt-4">
                      <p
                        style={{
                          color: "#47546770",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Client :{" "}
                        <span style={{ color: "#101828" }}>
                          {row?.companyName}
                        </span>
                      </p>
                      <p
                        style={{
                          color: "#47546770",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Created Date :{" "}
                        <span style={{ color: "#101828" }}>
                          {row?.createdDate}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full">
              <Card sx={{ borderRadius: 4 }}>
                <CardContent>
                  <div className="pt-3 flex justify-between">
                    <div className="grid grid-flow-row gap-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 500,
                        }}
                      >
                        {jobDetail?.companyName}
                      </p>
                      <p
                        style={{
                          color: "#47546770",
                          fontSize: 14,
                        }}
                      >
                        Client :{" "}
                        <span style={{ color: "#101828" }}>
                          {jobDetail?.companyName}
                        </span>
                      </p>
                    </div>

                    {jobDetail?.apliedTime && (
                      <div>
                        <p
                          style={{
                            color: "#58A20F",
                            fontSize: 14,
                          }}
                        >
                          Applied {jobDetail?.apliedTime} ago
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="py-5">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 25,
                        fontWeight: 500,
                      }}
                    >
                      {jobDetail?.jobName}
                    </p>
                    <div className="flex gap-3 items-center">
                      <div className="flex gap-1 items-center">
                        <GrLocation style={{ color: "#47546780" }} />
                        <p style={{ color: "#47546770", fontSize: 14 }}>
                          {jobDetail?.location}
                        </p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <IoTimeOutline style={{ color: "#47546780" }} />
                        {jobDetail?.typeOfHire.map((data, index) => {
                          return (
                            <p
                              key={index}
                              style={{
                                color: "#47546770",
                                fontSize: 14,
                                paddingRight: 5,
                                borderRightWidth:
                                  index + 1 === jobDetail?.typeOfHire?.length
                                    ? 0
                                    : 2,
                              }}
                            >
                              {data}
                            </p>
                          );
                        })}
                      </div>
                      <div className="flex gap-1 items-center">
                        <IoTimeOutline style={{ color: "#47546780" }} />
                        <p style={{ color: "#47546770", fontSize: 14 }}>
                          {jobDetail?.postedTime} ago
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 flex justify-end gap-4">
                      <Button
                        variant="outlined"
                        style={{ color: "#475467", borderColor: "#D0D5DD" }}
                      >
                        SAVE
                      </Button>
                      <Button
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#008080",
                          paddingLeft: 15,
                          paddingRight: 15,
                        }}
                      >
                        APPLY NOW
                      </Button>
                    </div>
                  </div>
                  <Divider />
                  <div className="py-5">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 18,
                        fontWeight: 500,
                      }}
                    >
                      Job Description
                    </p>
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 14,
                      }}
                    >
                      {jobDetail?.jobDescription}
                    </p>
                  </div>
                  <div className="py-5">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 18,
                        fontWeight: 500,
                      }}
                    >
                      Responsibilities:
                    </p>
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 14,
                      }}
                    >
                      {jobDetail?.responsibility}
                    </p>
                    {/* {jobDetail?.responsibility.map((data, index) => {
                      return (
                        <li
                          style={{
                            color: "#475467",
                            fontSize: 14,
                          }}
                          key={index}>
                          {data}
                        </li>
                      );
                    })} */}
                  </div>
                  <div className="py-5">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 18,
                        fontWeight: 500,
                      }}
                    >
                      Requirements:
                    </p>
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 14,
                      }}
                    >
                      {jobDetail?.requirement}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
