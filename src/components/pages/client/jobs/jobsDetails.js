import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { IoFilterSharp, IoTimeOutline } from "react-icons/io5";
import { MdOutlinePeople } from "react-icons/md";
import {
  Button,
  Card,
  CardContent,
  Divider,
  InputAdornment,
  TextField,
} from "@mui/material";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import { PiBagSimpleBold } from "react-icons/pi";
import { PiCalendarDots } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import { LuFiles } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import { CiSearch } from "react-icons/ci";
import logo from "../../../../assets/images/logo.png";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";
import { AllJobsData, JobDetails } from "../../../dummy/Data";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { useNavigate } from "react-router-dom";

export const JobsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [alljobs, setAllJobs] = useState(AllJobsData);
  const [jobDetail, setJobDetail] = useState(JobDetails);
  const [search, setSearch] = useState("");

  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log(location.state.jobs);
    console.log(location.state.row);
    if(location.state){
      setAllJobs(location.state?.jobs);
      setJobDetail(location.state?.row);
    }
  }, [location.state])

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
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
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
                    startIcon={<IoFilterSharp />}>
                    Filter
                  </Button>
                </div>
                <div className="flex gap-5">
                  <div className="w-[450px] max-h-screen overflow-y-scroll ">
                    {alljobs?.map((row, index) => {
                      return (
                        <div
                          key={index}
                          className="border border-gray-300"
                          style={{
                            backgroundColor:
                              row?.id === location.state ? "#F3F8F9" : "#ffffff",
                          }}
                          onClick={() => {
                            handleCLickJob(row?.id);
                          }}>
                          <div style={{ padding: 10 }}>
                            <div>
                              <div className="flex gap-2">
                                <p
                                  style={{
                                    color: "#101828",
                                    fontSize: 16,
                                    fontWeight: 500,
                                  }}>
                                  {row?.jobName}
                                </p>
                                {row?.new ? (
                                  <p
                                    style={{
                                      color: "#7D5AE2",
                                      backgroundColor: "#7D5AE210",
                                      fontSize: 16,
                                      fontWeight: 500,
                                      borderRadius: 3,
                                      paddingLeft: 8,
                                      paddingRight: 8,
                                      paddingBottom: 4,
                                    }}>
                                    New post
                                  </p>
                                ) : (
                                  <></>
                                )}
                              </div>

                              <div className="flex gap-3 items-center">
                                <div className="flex gap-1 items-center">
                                  <GrLocation style={{ color: "#47546780" }} />
                                  <p style={{ color: "#47546770", fontSize: 14 }}>
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
                                            index + 1 === row?.typeOfHire?.length
                                              ? 0
                                              : 2,
                                        }}>
                                        {data}
                                      </p>
                                    );
                                  })}
                                </div>
                              </div>
                              <div className="pt-3 flex gap-3 rounded-lg">
                                <div className="w-12 h-12">
                                  <img
                                    src={row?.image}
                                    alt="company logo"
                                    style={{ borderRadius: 8 }}
                                  />
                                </div>
                                <div className="grid grid-flow-row gap-1">
                                  <p style={{ color: "#475467", fontSize: 14 }}>
                                    {row?.companyName}
                                  </p>
                                  <p
                                    style={{
                                      color: "#47546770",
                                      fontSize: 12,
                                      fontWeight: 500,
                                    }}>
                                    Hiring Manger :{" "}
                                    <span style={{ color: "#101828" }}>
                                      {row?.hiringManager}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full">
                    <Card sx={{ borderRadius: 5 }}>
                      <CardContent>
                        <div className="pt-3 flex justify-between">
                          <div className="flex gap-3 rounded-lg">
                            <div className="w-12 h-12">
                              <img
                                src={jobDetail?.image}
                                alt="company logo"
                                style={{ borderRadius: 8 }}
                              />
                            </div>
                            <div className="grid grid-flow-row gap-1">
                              <p style={{ color: "#475467", fontSize: 14 }}>
                                {jobDetail?.companyName}
                              </p>
                              <p
                                style={{
                                  color: "#47546770",
                                  fontSize: 14,
                                }}>
                                Hiring Manger :{" "}
                                <span style={{ color: "#101828" }}>
                                  {jobDetail?.hiringManager}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div>
                            <Button
                              variant="text"
                              style={{
                                color: "#008080",
                                backgroundColor: "#EAF4F5",
                                textTransform: "none",
                              }}
                              onClick={() => navigate("/job/jobCandidates", { state : jobDetail?.id})}>
                              Show Candidates
                            </Button>
                            <IconButton onClick={handleClick}>
                              <HiDotsVertical style={{ color: "#D9D9D9" }} />
                            </IconButton>
                          </div>
                        </div>
                        <div className="py-5">
                          <p
                            style={{
                              color: "#101828",
                              fontSize: 25,
                              fontWeight: 500,
                            }}>
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
                                    }}>
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
                            <div className="flex gap-1 items-center">
                              <MdOutlinePeople
                                style={{ color: "#47546780", fontSize: 22 }}
                              />
                              <p style={{ color: "#47546770", fontSize: 14 }}>
                                {jobDetail?.applicants} applications
                              </p>
                            </div>
                          </div>
                          <div className="pt-3">
                            <div className="flex gap-1 items-center">
                              <MdOutlineCurrencyRupee style={{ color: "#475467" }} />
                              <p
                                style={{
                                  color: "#475467",
                                  fontSize: 14,
                                  fontWeight: 500,
                                }}>
                                {jobDetail?.compensation} /month
                              </p>
                            </div>
                            <div className="flex gap-1 items-center">
                              <PiBagSimpleBold style={{ color: "#475467" }} />
                              <p
                                style={{
                                  color: "#475467",
                                  fontSize: 14,
                                  fontWeight: 500,
                                }}>
                                {jobDetail?.experience} Year
                              </p>
                            </div>
                            <div className="flex gap-1 items-center">
                              <PiCalendarDots style={{ color: "#475467" }} />
                              <p
                                style={{
                                  color: "#475467",
                                  fontSize: 14,
                                  fontWeight: 500,
                                }}>
                                {jobDetail?.noticePeriod}
                              </p>
                            </div>
                          </div>
                        </div>
                        <Divider />
                        <div className="py-5">
                          <p
                            style={{
                              color: "#101828",
                              fontSize: 18,
                              fontWeight: 500,
                            }}>
                            Job Description
                          </p>
                          <p
                            style={{
                              color: "#475467",
                              fontSize: 14,
                            }}>
                            {jobDetail?.description}
                          </p>
                        </div>
                        <div className="py-5">
                          <p
                            style={{
                              color: "#101828",
                              fontSize: 18,
                              fontWeight: 500,
                            }}>
                            Your Responsibility:
                          </p>
                          {jobDetail?.responsibility.map((data, index) => {
                            return (
                              <li
                                style={{
                                  color: "#475467",
                                  fontSize: 14,
                                }}>
                                {data}
                              </li>
                            );
                          })}
                        </div>
                        <div className="py-5">
                          <p
                            style={{
                              color: "#101828",
                              fontSize: 18,
                              fontWeight: 500,
                            }}>
                            Front End Developer Requirements:
                          </p>
                          {jobDetail?.requirements.map((data, index) => {
                            return (
                              <li
                                style={{
                                  color: "#475467",
                                  fontSize: 14,
                                }}>
                                {data}
                              </li>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* menu */}
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    TransitionComponent={Fade}>
                    <MenuItem onClick={handleClose}>
                      <div className="flex gap-1 items-center">
                        <TbEdit style={{ color: "#5FAEDA", fontSize: 14 }} />
                        <p
                          style={{
                            color: "#5FAEDA",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          Edit
                        </p>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <div className="flex gap-1 items-center">
                        <RiDeleteBin6Line
                          style={{ color: "#E05880", fontSize: 14 }}
                        />
                        <p
                          style={{
                            color: "#E05880",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          Delete
                        </p>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <div className="flex gap-1 items-center">
                        <LuFiles style={{ color: "#58A20F", fontSize: 14 }} />
                        <p
                          style={{
                            color: "#58A20F",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          Clone
                        </p>
                      </div>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};