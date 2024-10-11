import React, { useState, useEffect } from "react";
import "./ListView.css";
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
  Pagination,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
//Icons
import { IoBagRemoveOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuFiles } from "react-icons/lu";
import { PiUserFocus } from "react-icons/pi";
import { MdOutlinePersonOutline } from "react-icons/md";
//API endPoint
import axiosInstance from "../../../../../utils/axiosInstance";

const ListVIew = ({ search, setSearch }) => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const [anchorData, setAnchorData] = useState();
  const [anchorjd, setAnchorjd] = useState();
  const jdOpen = Boolean(anchorjd);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showClonePopup, setShowClonePopup] = useState(false);
  //API
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [page, setPage] = useState(1);
  const [fullServiceHelp, setFullServiceHelp] = useState([]);

  //Pagination start
  const pageChangeHandle = (pageNO, pageSize) => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance //getAllJobsByFilter?pageNo=1&pageSize=25&filter=${value}
      .get(
        `/getAllJobsByFilter&pageNo=${pageNO}&pageSize=${pageSize}&filter=fullServiceHelp`
      )
      .then((data) => {
        console.log(data);
        setData(data.data);
        setPage(data?.pageNo || 0);
        setPage(data?.pageSize || 0);
      })
      .catch((e) => {
        console.log(e);
      });
    setPage(pageNO);
    setPage(pageSize);
  };

  const PAGECOUNT =
    data?.totalCount > 0 ? Math.ceil(data?.totalCount / data?.pageSize) : 1;
  //Pagination end

  //GET request for Souring Help
  useEffect(() => {
    axiosInstance
      .get(`/getAllAdminJobs?pageNo=1&pageSize=25`)
      .then((response) => {
        console.log("getAllJobs", response);
        setFilterData(response.data.data);
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
        setFilterData(response.data.data);
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
      color = "#0862CE";
      backGround = "#f1f7ff";
    } else if (jobType === "Part time") {
      color = "#0862CE";
      backGround = "#f1f7ff";
    } else if (jobType === "not defined") {
      color = "#0862CE";
      backGround = "#f1f7ff";
    } else if (jobType === "Testing") {
      color = "#0862CE";
      backGround = "#f1f7ff";
    } else if (jobType === "Executive") {
      color = "#0862CE";
      backGround = "#f1f7ff";
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

  //sort Data start

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return order === "asc" ? -1 : 1;
    }
    if (b[orderBy] > a[orderBy]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  };

  const sortedRows = filterData.sort((a, b) => sortComparator(a, b, orderBy));
  //sort Data End

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

  return (
    <div className="list-view-table pb-3 w-[1040px]">
      <div className="joblist-tabs">
        <Box sx={{ width: "100%" }}>
          <h2 className="smallTextGray pt-3 pb-4 font-medium text-[20px]">
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
                        active={orderBy === "jobName"}
                        direction={orderBy === "jobName" ? order : "asc"}
                        onClick={() => handleRequestSort("jobName")}
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
                  {sortedRows.map((user, index) => (
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
                          <HiDotsVertical style={{ color: "#D9D9D9" }} />
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
                          <HiDotsVertical style={{ color: "#D9D9D9" }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <div className="flex justify-between items-center">
            <p style={{ color: "#475467", fontSize: 14 }}>
              Showing {sortedRows.length || 0} results found
            </p>
            <Pagination
              count={PAGECOUNT}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={(e, newvalue) => {
                pageChangeHandle(newvalue);
              }}
            />
          </div>
        </Box>
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
            <RiDeleteBin6Line style={{ color: "#E05880", fontSize: 14 }} />
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
            <IoBagRemoveOutline style={{ color: "#5FAEDA", fontSize: 22 }} />
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
  );
};

export default ListVIew;
