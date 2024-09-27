import React, { useState } from "react";
import "./ClientManagementSec.css";
import { ClientSideNav } from "../../../../widgets/clientSideNav";
import { TopNav } from "../../../../widgets/topNav";
//MUI
import {
  Button,
  InputAdornment,
  TextField,
  Pagination,
  Fade,
  Menu,
  MenuItem,
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
//Dummy JSON Data
import Data from "./ClientDummyData.json";

const ClientManagementSec = () => {
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
  // const veiwProfileHandle = () => {};
  //ecllipse action menu popup code end

  return (
    <div className="flex">
      <ClientSideNav />
      <div className="w-full min-h-screen side-bar pr-3">
        <TopNav />
        <div className="client-management-sec pb-28">
          <div className="client-header-section pt-8 px-8">
            <h2 className="text-2xl pt-4 font-bold main-black">
              Client Management Section
            </h2>
            <p className="text-sm pt-3 smallTextGray">
              Listed below are the details regarding each candidate.
            </p>
            <div className="form-block pt-8">
              <div className="flex justify-between">
                <TextField
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
          <div className="client-body-section px-8 mt-12">
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
                          Client Name
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Email Address
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Phone Number
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Job Posted
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
                      {Data.map((row, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell sx={{ color: "#475467" }}>
                              <FormControlLabel control={<Checkbox />} />
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {row.CName}
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {row.email}
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {row.phone}
                            </TableCell>
                            <TableCell
                              sx={{ color: "#475467", textAlign: "center" }}
                            >
                              {row.jobPost}
                            </TableCell>
                            <TableCell
                              sx={{ color: "#475467", textAlign: "center" }}
                            >
                              <div
                                className="status"
                                style={{
                                  backgroundColor: `${row.bgColor}`,
                                  color: `${row.txtColor}`,
                                }}
                              >
                                {row.status}
                              </div>
                            </TableCell>
                            <TableCell
                              sx={{ color: "#475467" }}
                              className="action-type relative"
                            >
                              <div className="flex gap-3 justify-center cursor-pointer">
                                <BsThreeDotsVertical
                                  onClick={(e) => {
                                    handleClick(e);
                                    setAnchorData(row);
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
                  Showing 11 results found
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

export default ClientManagementSec;
