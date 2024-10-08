import React, { useState, useEffect } from "react";
//Navbar
import { AdminSideNav } from "../../../../../widgets/adminSideNav";
import { TopNav } from "../../../../../widgets/topNav";
import "../Jobs.css";
import "../ListView/ListView.css";
import "../WorkflowView/WorkflowView.css";
//MUI
import {
  Box,
  Button,
  TableSortLabel,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tab,
  Tabs,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
} from "@mui/material";
import { ButtonGroup, InputAdornment, TextField } from "@mui/material";
//icons
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { IoBagRemoveOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuFiles } from "react-icons/lu";
import { PiUserFocus } from "react-icons/pi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoMenu, IoFilter } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { BsBagDash } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
//images
import roleLogo from "../../../../../../assets/images/role-logo.png";
//API endPoint
import axiosInstance from "../../../../../utils/axiosInstance";

const FullServiceStaffHelp = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const [anchorData, setAnchorData] = useState();
  const [anchorjd, setAnchorjd] = useState();
  const jdOpen = Boolean(anchorjd);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showClonePopup, setShowClonePopup] = useState(false);
  const [search, setSearch] = useState("");
  //API
  const [sourcingHelp, setSourcingHelp] = useState([]);
  const [boardingHelp, setBoardingHelp] = useState([]);
  const [fullServiceHelp, setFullServiceHelp] = useState([]);
  //Tabs
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [currentView, setCurrentView] = useState("WorkFlow");

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };
  //Tabs end

  //GET request for Souring Help
  useEffect(() => {
    axiosInstance
      .get(`/getAllJobsByFilter?pageNo=1&pageSize=10&filter=sourcingHelp`)
      .then((response) => {
        //console.log("getAllJobsByFilter", response);
        setSourcingHelp(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //GET request for Boarding Help
  useEffect(() => {
    axiosInstance
      .get(`/getAllJobsByFilter?pageNo=1&pageSize=10&filter=onboardHelp`)
      .then((response) => {
        //console.log("boardingHelp", response);
        setBoardingHelp(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //GET request for Full Service Help
  useEffect(() => {
    axiosInstance
      .get(`/getAllJobsByFilter?pageNo=1&pageSize=10&filter=fullServiceHelp`)
      .then((response) => {
        console.log("fullServiceHelp", response);
        setFullServiceHelp(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Color for Job Type
  const jobTypeColor = (jobType) => {
    let color = "";
    let backGround = "";

    if (jobType === "Technology") {
      color = "#0862CE";
      backGround = "#f1f7ff";
    } else if (jobType === "Full time") {
      color = "#8314C7";
      backGround = "#8314C7";
    } else if (jobType === "Part time") {
      color = "#0862CE";
      backGround = "#8314C7";
    }

    return (
      <p
        style={{
          color: color,
          border: 1,
          padding: 6,
          borderRadius: 16,
          backgroundColor: backGround,
        }}
      >
        {jobType}
      </p>
    );
  };

  //Color for Job Status
  const jobStatusColor = (jobStatus) => {
    let color = "";
    let backGround = "";

    if (jobStatus === "Interviewing") {
      color = "#FFA500";
      backGround = "#fff2db";
    } else if (jobStatus === "New Requirement") {
      color = "#5FAEDA";
      backGround = "#e6f1f7";
    }

    return (
      <p
        style={{
          color: color,
          border: 1,
          padding: 6,
          borderRadius: 16,
          textAlign: "center",
          backgroundColor: backGround,
        }}
      >
        {jobStatus}
      </p>
    );
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorData(null);
    setAnchorjd(null);
  };

  const handleJd = (event) => {
    setAnchorjd(event.currentTarget);
  };

  const handleJobEdit = () => {};

  const handleIdentification = () => {};

  const handleStandard = () => {};

  const handleJobDescription = () => {};

  //WorkFlow view code Start
  const handleJobDelete = () => {};

  const handleJobClone = () => {};

  //WorkFlow view code End

  return (
    <div className="flex">
      <AdminSideNav />
      <div className="w-full min-h-screen side-bar pr-3">
        <div className="jobs-top-nav">
          <TopNav />
        </div>
        <div className="jobs-listing pt-8 px-4 pb-8">
          <div className="jobs-header-section">
            <h2 className="text-2xl pt-4 font-bold main-black">Jobs Summary</h2>
            <div className="pt-8 pb-11">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} className="flex justify-between">
                  <Grid item xs={{ minWidth: 390 }}>
                    <ButtonGroup
                      style={{ color: "#008080" }}
                      aria-label="Medium-sized button group"
                    >
                      <Button
                        style={{
                          backgroundColor:
                            currentView === "WorkFlow" ? "#f8f9fa" : "#ffffff",
                          color:
                            currentView === "WorkFlow"
                              ? "#008080"
                              : "#47546770",
                          borderColor: "#D0D5DD",
                          textTransform: "none",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                        startIcon={
                          <FaNetworkWired
                            COLOR={
                              currentView === "WorkFlow"
                                ? "#008080"
                                : "#47546770"
                            }
                          />
                        }
                        onClick={() => setCurrentView("WorkFlow")}
                      >
                        Workflow View
                      </Button>
                      <Button
                        style={{
                          backgroundColor:
                            currentView === "List" ? "#f8f9fa" : "#ffffff",
                          color:
                            currentView === "List" ? "#008080" : "#47546770",
                          borderColor: "#D0D5DD",
                          textTransform: "none",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                        startIcon={<IoMenu />}
                        onClick={() => setCurrentView("List")}
                      >
                        List View
                      </Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid item xs={4}>
                    <div>
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
                        sx={{ minWidth: 390 }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="flex justify-between">
                      <Button
                        size="small"
                        variant="outlined"
                        style={{
                          color: "#252525",
                          borderColor: "#D0D5DD",
                          textTransform: "none",
                          fontSize: 14,
                          fontWeight: 500,
                          borderRadius: 8,
                          width: 94,
                          height: 38,
                        }}
                        startIcon={<IoFilter style={{ color: "#252525" }} />}
                      >
                        Filter
                      </Button>
                      <Button
                        size="small"
                        style={{
                          color: "#008080",
                          background: "#EAF4F5",
                          textTransform: "none",
                          fontSize: 14,
                          fontWeight: 500,
                          borderRadius: 8,
                          width: 145,
                          height: 38,
                        }}
                      >
                        Create New Job
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
          {currentView === "List" && (
            <div className="list-view-table py-3 w-[1040px]">
              <div>
                <div className="joblist-tabs">
                  <Tabs value={currentTabIndex} onChange={handleTabChange}>
                    <Tab label="Sourcing Help" />
                    <Tab label="Onboarding Help" />
                    <Tab label="Full Service Staff Help" />
                  </Tabs>

                  {/* TAB 1 Contents */}
                  {currentTabIndex === 0 && (
                    <Box sx={{ width: "100%" }}>
                      <h2 className="smallTextGray pt-8 pb-4 font-medium text-[20px]">
                        All Jobs
                      </h2>
                      <Paper sx={{ width: "100%", mb: 2 }}>
                        <TableContainer sx={{ maxHeight: 500 }}>
                          <Table stickyHeader>
                            <TableHead>
                              <TableRow>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  <TableSortLabel
                                    active=""
                                    direction=""
                                    onClick=""
                                  >
                                    Job Name
                                  </TableSortLabel>
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Department
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Client Name
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Created
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Type
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Status
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Sub - Status
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Total
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  New
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Active
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Hired
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Description
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Download Pdf
                                </TableCell>
                                <TableCell
                                  align="center"
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Actions
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {sourcingHelp.map((user, index) => (
                                <TableRow key={index}>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.jobName}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.jobDepartment}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.companyName}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.createdDate}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {jobTypeColor(user.jobType)}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {jobStatusColor(user.jobStatus)}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.jobSubStatus}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.total}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.newly}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.active}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.hired}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    padding="none"
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    <IconButton
                                      onClick={(e) => {
                                        handleJd(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <HiDotsVertical
                                        style={{ color: "#D9D9D9" }}
                                      />
                                    </IconButton>
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    padding="none"
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    <Button
                                      style={{
                                        color: "#5FAEDA",
                                        fontSize: 14,
                                        textTransform: "none",
                                      }}
                                      onClick={() => {}}
                                    >
                                      Download
                                    </Button>
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    padding="none"
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    <IconButton
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <HiDotsVertical
                                        style={{ color: "#D9D9D9" }}
                                      />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>
                    </Box>
                  )}

                  {/* TAB 2 Contents */}
                  {currentTabIndex === 1 && (
                    <Box sx={{ width: "100%" }}>
                      <h2 className="smallTextGray pt-8 pb-4 font-medium text-[20px]">
                        All Jobs
                      </h2>
                      <Paper sx={{ width: "100%", mb: 2 }}>
                        <TableContainer sx={{ maxHeight: 500 }}>
                          <Table stickyHeader>
                            <TableHead>
                              <TableRow>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  <TableSortLabel
                                    active=""
                                    direction=""
                                    onClick=""
                                  >
                                    Job Name
                                  </TableSortLabel>
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Department
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Client Name
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Created
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Type
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Status
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Sub - Status
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Total
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  New
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Active
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Hired
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Description
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Download Pdf
                                </TableCell>
                                <TableCell
                                  align="center"
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Actions
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {sourcingHelp.map((user, index) => (
                                <TableRow key={index}>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.jobName}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.jobDepartment}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.companyName}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.createdDate}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {jobTypeColor(user.jobType)}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {jobStatusColor(user.jobStatus)}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.jobSubStatus}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.total}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.newly}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.active}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.hired}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    padding="none"
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    <IconButton
                                      onClick={(e) => {
                                        handleJd(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <HiDotsVertical
                                        style={{ color: "#D9D9D9" }}
                                      />
                                    </IconButton>
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    padding="none"
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    <Button
                                      style={{
                                        color: "#5FAEDA",
                                        fontSize: 14,
                                        textTransform: "none",
                                      }}
                                      onClick={() => {}}
                                    >
                                      Download
                                    </Button>
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    padding="none"
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    <IconButton
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <HiDotsVertical
                                        style={{ color: "#D9D9D9" }}
                                      />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>
                    </Box>
                  )}

                  {/* TAB 3 Contents */}
                  {currentTabIndex === 2 && (
                    <Box sx={{ width: "100%" }}>
                      <h2 className="smallTextGray pt-8 pb-4 font-medium text-[20px]">
                        All Jobs
                      </h2>
                      <Paper sx={{ width: "100%", mb: 2 }}>
                        <TableContainer sx={{ maxHeight: 500 }}>
                          <Table stickyHeader>
                            <TableHead>
                              <TableRow>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  <TableSortLabel
                                    active=""
                                    direction=""
                                    onClick=""
                                  >
                                    Job Name
                                  </TableSortLabel>
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Department
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Client Name
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Created
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Type
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Status
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Sub - Status
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Total
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  New
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Active
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Hired
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Job Description
                                </TableCell>
                                <TableCell
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Download Pdf
                                </TableCell>
                                <TableCell
                                  align="center"
                                  sx={{
                                    bgcolor: "#F8F9FA",
                                    color: "#101828",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                  }}
                                >
                                  Actions
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {sourcingHelp.map((user, index) => (
                                <TableRow key={index}>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.jobName}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.jobDepartment}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.companyName}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.createdDate}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {jobTypeColor(user.jobType)}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {jobStatusColor(user.jobStatus)}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.jobSubStatus}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.total}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.newly}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.active}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    {user.hired}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    padding="none"
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    <IconButton
                                      onClick={(e) => {
                                        handleJd(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <HiDotsVertical
                                        style={{ color: "#D9D9D9" }}
                                      />
                                    </IconButton>
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    padding="none"
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    <Button
                                      style={{
                                        color: "#5FAEDA",
                                        fontSize: 14,
                                        textTransform: "none",
                                      }}
                                      onClick={() => {}}
                                    >
                                      Download
                                    </Button>
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    padding="none"
                                    sx={{
                                      color: "#475467",
                                      border: 1,
                                      borderColor: "#D0D5DD50",
                                    }}
                                  >
                                    <IconButton
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <HiDotsVertical
                                        style={{ color: "#D9D9D9" }}
                                      />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>
                    </Box>
                  )}
                </div>
              </div>
              {/*Actions menu */}
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
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleJobEdit}>
                  <div className="flex gap-1 items-center">
                    <TbEdit style={{ color: "#5FAEDA", fontSize: 14 }} />
                    <p
                      style={{
                        color: "#5FAEDA",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Edit
                    </p>
                  </div>
                </MenuItem>
                <MenuItem onClick={() => setShowDeletePopup(true)}>
                  <div className="flex gap-1 items-center">
                    <RiDeleteBin6Line
                      style={{ color: "#E05880", fontSize: 14 }}
                    />
                    <p
                      style={{
                        color: "#E05880",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Delete
                    </p>
                  </div>
                </MenuItem>
                <MenuItem onClick={() => setShowClonePopup(true)}>
                  <div className="flex gap-1 items-center">
                    <LuFiles style={{ color: "#58A20F", fontSize: 14 }} />
                    <p
                      style={{
                        color: "#58A20F",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Clone
                    </p>
                  </div>
                </MenuItem>
              </Menu>
              {/* job description menu */}
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorjd}
                open={jdOpen}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleStandard}>
                  <div className="flex gap-1 items-center">
                    <IoBagRemoveOutline
                      style={{ color: "#5FAEDA", fontSize: 22 }}
                    />
                    <p
                      style={{
                        color: "#5FAEDA",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Job Description (Standard)
                    </p>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleJobDescription}>
                  <div className="flex gap-1 items-center">
                    <MdOutlinePersonOutline
                      style={{ color: "#58A20F", fontSize: 22 }}
                    />
                    <p
                      style={{
                        color: "#58A20F",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Job Description (Recruiter)
                    </p>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleIdentification}>
                  <div className="flex gap-1 items-center">
                    <PiUserFocus style={{ color: "#FF6347", fontSize: 22 }} />
                    <p
                      style={{
                        color: "#FF6347",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Job Identification
                    </p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          )}

          {currentView === "WorkFlow" && (
            <div>
              <div className="joblist-tabs">
                <Tabs value={currentTabIndex} onChange={handleTabChange}>
                  <Tab label="Sourcing Help" />
                  <Tab label="Onboarding Help" />
                  <Tab label="Full Service Staff Help" />
                </Tabs>

                {/* TAB 1 Contents */}
                {currentTabIndex === 0 && (
                  <Box sx={{ width: "100%" }}>
                    <div className="joblist-tabs">
                      <Box sx={{ width: "100%" }}>
                        <h2 className="smallTextGray pt-8 pb-4 font-medium text-[20px]">
                          All Jobs
                        </h2>
                        <div className="jobs-flow gap-2 flex flex-wrap">
                          {/* first card */}
                          <div className="card">
                            <div className="mb-1">
                              <div className="flex justify-between mb-1">
                                <div className="flex">
                                  <h2 className="text-sm font-bold">
                                    New Requirement
                                  </h2>
                                  <span className="number-block">04</span>
                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                  <FaPlus className="plus-icon" />
                                  <IoIosMore className="three-dots" />
                                </div>
                              </div>
                              <hr />
                            </div>
                            {/* first innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                            {/* second innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                          {/* second card */}
                          <div className="card">
                            <div className="mb-1">
                              <div className="flex justify-between mb-1">
                                <div className="flex">
                                  <h2 className="text-sm font-bold">
                                    Sourcing Candidates
                                  </h2>
                                  <span className="number-block">04</span>
                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                  <FaPlus className="plus-icon" />
                                  <IoIosMore className="three-dots" />
                                </div>
                              </div>
                              <hr />
                            </div>
                            {/* first innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                            {/* second innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          {/*Actions menu */}
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
                            TransitionComponent={Fade}
                          >
                            <MenuItem onClick={() => {}}>
                              <div className="flex gap-2 items-center">
                                <BsBagDash
                                  style={{ color: "#FFA412", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#FFA412",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Job
                                </p>
                              </div>
                            </MenuItem>
                            <MenuItem onClick={handleJobEdit}>
                              <div className="flex gap-2 items-center">
                                <FiEdit
                                  style={{ color: "#5FAEDA", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#5FAEDA",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Edit
                                </p>
                              </div>
                            </MenuItem>
                            <MenuItem onClick={handleJobDelete}>
                              <div className="flex gap-2 items-center">
                                <RiDeleteBin5Line
                                  style={{ color: "#E05880", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#E05880",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Delete
                                </p>
                              </div>
                            </MenuItem>

                            <MenuItem onClick={handleJobClone}>
                              <div className="flex gap-2 items-center">
                                <HiOutlineDocumentDuplicate
                                  style={{ color: "#58A20F", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#58A20F",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Clone
                                </p>
                              </div>
                            </MenuItem>
                          </Menu>
                        </div>
                      </Box>
                    </div>
                  </Box>
                )}

                {currentTabIndex === 1 && (
                  <Box sx={{ width: "100%" }}>
                    <div className="joblist-tabs">
                      <Box sx={{ width: "100%" }}>
                        <h2 className="smallTextGray pt-8 pb-4 font-medium text-[20px]">
                          All Jobs
                        </h2>
                        <div className="jobs-flow gap-2 flex flex-wrap">
                          {/* first card */}
                          <div className="card">
                            <div className="mb-1">
                              <div className="flex justify-between mb-1">
                                <div className="flex">
                                  <h2 className="text-sm font-bold">
                                    New Requirement
                                  </h2>
                                  <span className="number-block">04</span>
                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                  <FaPlus className="plus-icon" />
                                  <IoIosMore className="three-dots" />
                                </div>
                              </div>
                              <hr />
                            </div>
                            {/* first innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                            {/* second innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                          {/* second card */}
                          <div className="card">
                            <div className="mb-1">
                              <div className="flex justify-between mb-1">
                                <div className="flex">
                                  <h2 className="text-sm font-bold">
                                    Sourcing Candidates
                                  </h2>
                                  <span className="number-block">04</span>
                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                  <FaPlus className="plus-icon" />
                                  <IoIosMore className="three-dots" />
                                </div>
                              </div>
                              <hr />
                            </div>
                            {/* first innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                            {/* second innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          {/*Actions menu */}
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
                            TransitionComponent={Fade}
                          >
                            <MenuItem onClick={() => {}}>
                              <div className="flex gap-2 items-center">
                                <BsBagDash
                                  style={{ color: "#FFA412", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#FFA412",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Job
                                </p>
                              </div>
                            </MenuItem>
                            <MenuItem onClick={handleJobEdit}>
                              <div className="flex gap-2 items-center">
                                <FiEdit
                                  style={{ color: "#5FAEDA", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#5FAEDA",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Edit
                                </p>
                              </div>
                            </MenuItem>
                            <MenuItem onClick={handleJobDelete}>
                              <div className="flex gap-2 items-center">
                                <RiDeleteBin5Line
                                  style={{ color: "#E05880", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#E05880",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Delete
                                </p>
                              </div>
                            </MenuItem>

                            <MenuItem onClick={handleJobClone}>
                              <div className="flex gap-2 items-center">
                                <HiOutlineDocumentDuplicate
                                  style={{ color: "#58A20F", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#58A20F",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Clone
                                </p>
                              </div>
                            </MenuItem>
                          </Menu>
                        </div>
                      </Box>
                    </div>
                  </Box>
                )}

                {currentTabIndex === 2 && (
                  <Box sx={{ width: "100%" }}>
                    <div className="joblist-tabs">
                      <Box sx={{ width: "100%" }}>
                        <h2 className="smallTextGray pt-8 pb-4 font-medium text-[20px]">
                          All Jobs
                        </h2>
                        <div className="jobs-flow gap-2 flex flex-wrap">
                          {/* first card */}
                          <div className="card">
                            <div className="mb-1">
                              <div className="flex justify-between mb-1">
                                <div className="flex">
                                  <h2 className="text-sm font-bold">
                                    New Requirement
                                  </h2>
                                  <span className="number-block">04</span>
                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                  <FaPlus className="plus-icon" />
                                  <IoIosMore className="three-dots" />
                                </div>
                              </div>
                              <hr />
                            </div>
                            {/* first innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                            {/* second innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                          {/* second card */}
                          <div className="card">
                            <div className="mb-1">
                              <div className="flex justify-between mb-1">
                                <div className="flex">
                                  <h2 className="text-sm font-bold">
                                    Sourcing Candidates
                                  </h2>
                                  <span className="number-block">04</span>
                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                  <FaPlus className="plus-icon" />
                                  <IoIosMore className="three-dots" />
                                </div>
                              </div>
                              <hr />
                            </div>
                            {/* first innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                            {/* second innner card */}
                            <div className="inner-card">
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar>
                                      <img src={roleLogo} />
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton
                                      aria-label="settings"
                                      onClick={(e) => {
                                        handleClick(e);
                                        setAnchorData();
                                      }}
                                    >
                                      <IoIosMore />
                                    </IconButton>
                                  }
                                  title="Senior Developer"
                                  subheader="Information Technology"
                                />
                                <CardContent>
                                  <div className="body-content">
                                    <p>
                                      Created Date: <span>Jan 25, 2024</span>
                                    </p>
                                    <p>
                                      Job Type: <span>Part Time</span>
                                    </p>
                                    <p>
                                      Application Sub-status:{" "}
                                      <span>Phone Call</span>
                                    </p>
                                    <hr />
                                    <div className="card-footer pt-1">
                                      <div className="flex justify-between">
                                        <p>Total: 50</p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          Active: 05
                                        </p>
                                        <p>
                                          <span className="dot-gray">
                                            &#x2022;
                                          </span>
                                          New: 04
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          {/*Actions menu */}
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
                            TransitionComponent={Fade}
                          >
                            <MenuItem onClick={() => {}}>
                              <div className="flex gap-2 items-center">
                                <BsBagDash
                                  style={{ color: "#FFA412", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#FFA412",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Job
                                </p>
                              </div>
                            </MenuItem>
                            <MenuItem onClick={handleJobEdit}>
                              <div className="flex gap-2 items-center">
                                <FiEdit
                                  style={{ color: "#5FAEDA", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#5FAEDA",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Edit
                                </p>
                              </div>
                            </MenuItem>
                            <MenuItem onClick={handleJobDelete}>
                              <div className="flex gap-2 items-center">
                                <RiDeleteBin5Line
                                  style={{ color: "#E05880", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#E05880",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Delete
                                </p>
                              </div>
                            </MenuItem>

                            <MenuItem onClick={handleJobClone}>
                              <div className="flex gap-2 items-center">
                                <HiOutlineDocumentDuplicate
                                  style={{ color: "#58A20F", fontSize: 16 }}
                                />
                                <p
                                  style={{
                                    color: "#58A20F",
                                    fontSize: 12,
                                    fontWeight: 500,
                                  }}
                                >
                                  Clone
                                </p>
                              </div>
                            </MenuItem>
                          </Menu>
                        </div>
                      </Box>
                    </div>
                  </Box>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullServiceStaffHelp;
