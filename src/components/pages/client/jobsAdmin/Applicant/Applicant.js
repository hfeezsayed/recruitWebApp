import React, { useState } from "react";
import "./Applicant.css";
import { ClientSideNav } from "../../../../widgets/clientSideNav";
import { TopNav } from "../../../../widgets/topNav";
//MUI
import {
  Button,
  InputAdornment,
  TextField,
  Pagination,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import { IoSearchOutline, IoFilter } from "react-icons/io5";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
//Icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
//Dummy JSON Data
import applicantData from "./ApplicantDummyData.json";

const Applicant = () => {
  //ecllipse action menu popup code start
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [anchorData, setAnchorData] = useState();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleJobEdit = () => {};
  const veiwProfileHandle = () => {};
  //ecllipse action menu popup code end

  return (
    <div className="flex">
      <ClientSideNav />
      <div className="w-full min-h-screen side-bar pr-3">
        <TopNav />
        <div className="applicant-block pb-28">
          <div className="applicant-header-section pt-8 px-8">
            <h2 className="text-2xl pt-4 font-bold main-black">
              Applicant Tracking Section
            </h2>
            <p className="text-sm pt-3 smallTextGray">
              Listed below are the details regarding each candidate.
            </p>
            <div className="form-block pt-8">
              <div className="flex justify-between">
                <TextField
                  type="text"
                  size="small"
                  value=""
                  placeholder="Search..."
                  sx={{ minWidth: 320 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IoSearchOutline />
                      </InputAdornment>
                    ),
                  }}
                />
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
              </div>
            </div>
          </div>
          <div className="applicant-body-section px-8 mt-12">
            <Box sx={{ width: "100%" }}>
              <Paper sx={{ width: "100%", mb: 2 }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="left"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          <FormControlLabel control={<Checkbox />} />
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Applicant Name
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Job Title
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Email Address
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Phone Number
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Status
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Actions
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {applicantData.map((applicant, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell sx={{ color: "#475467" }}>
                              <FormControlLabel control={<Checkbox />} />
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {applicant.applicantName}
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {applicant.jobTitle}
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {applicant.email}
                            </TableCell>
                            <TableCell
                              sx={{ color: "#475467", textAlign: "center" }}
                            >
                              {applicant.phone}
                            </TableCell>
                            <TableCell
                              sx={{ color: "#475467", textAlign: "center" }}
                            >
                              <div
                                className="status"
                                style={{
                                  backgroundColor: `${applicant.bgColor}`,
                                  color: `${applicant.txtColor}`,
                                  textAlign: "center",
                                }}
                              >
                                {applicant.status}
                              </div>
                            </TableCell>
                            <TableCell
                              sx={{ color: "#475467" }}
                              className="action-type"
                            >
                              <div className="flex justify-center cursor-pointer">
                                <BsThreeDotsVertical
                                  onClick={(e) => {
                                    handleClick(e);
                                    setAnchorData(applicant);
                                  }}
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
              <div className="flex justify-between items-center">
                <p style={{ color: "#475467", fontSize: 14 }}>
                  Showing 10 results found
                </p>
                <Pagination
                  count="1"
                  page="1"
                  variant="outlined"
                  shape="rounded"
                  // onChange={(e, newvalue) => {
                  //   pageChangeHandle(newvalue);
                  // }}
                />
              </div>
            </Box>
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
              <MenuItem onClick={veiwProfileHandle}>
                <div className="flex gap-2 items-center">
                  <MdOutlineRemoveRedEye
                    style={{
                      color: "#58A20F",
                      fontSize: 14,
                    }}
                  />
                  <p
                    style={{
                      color: "#58A20F",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    View Profile
                  </p>
                </div>
              </MenuItem>

              <MenuItem onClick={handleJobEdit}>
                <div className="flex gap-2 items-center">
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
                <div className="flex gap-3 items-center">
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
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
