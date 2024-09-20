import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { Button, InputAdornment, Pagination, TextField } from "@mui/material";
import { IoSearchOutline, IoFilter, IoCheckbox } from "react-icons/io5";
import { RiRefreshFill } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import { TopNav } from "../../../widgets/topNav";
//For Table
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// For checkbox
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//DummyJsonData
import dummyTableData from "./DummyData.json";
//External Css
import "./reference.css";

const CandidateList = () => {
  const navigate = useNavigate();
  return (
    <div className="candidate-reference-list flex">
      <ClientSideNav />
      <div className="w-full min-h-screen">
        <div className="px-4">
          <TopNav />
        </div>
        <div className="p-8 w-full h-full">
          <h2 className="text-2xl pt-4 px-4 font-bold main-black">
            Candidate list to share thier references
          </h2>
          <p className="text-sm pt-3 smallTextGray px-4 ">
            Choose the Candidate for sent their references
          </p>
          <div className="reference-search-block">
            <div className="flex py-8 justify-between pl-4">
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
          <div className="refernce-status px-4">
            <h4 className="font-bold text-lg main-black pb-2">
              Reference Status
            </h4>
            <div className="reference-text flex gap-4">
              <p className="">
                Responded:
                <IoCheckbox className="inline-block text-green-500" />
              </p>
              <p>
                In Progress:
                <RiRefreshFill className="inline-block text-blue-400" />
              </p>
              <p>
                Not Started:
                <GiSandsOfTime className="inline-block text-orange-400" />
              </p>
            </div>
          </div>

          <div className="candidate-list-data p-8 px-4">
            <Box sx={{ width: "100%" }}>
              <Paper sx={{ width: "100%", mb: 2 }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="center"
                          sx={{
                            bgcolor: "#F8F9FA",
                            color: "#101828",
                            fontSize: 14,
                          }}
                        >
                          <FormGroup>
                            <FormControlLabel control={<Checkbox />} />
                          </FormGroup>
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Candidate List
                        </TableCell>
                        <TableCell
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Email
                        </TableCell>
                        <TableCell
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Phone
                        </TableCell>
                        <TableCell
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Interview Passed Date
                        </TableCell>
                        <TableCell
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Resume
                        </TableCell>
                        <TableCell
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Reference Given
                        </TableCell>
                        <TableCell
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Reference Status
                        </TableCell>
                        <TableCell
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Action
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                        >
                          Email Notification
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dummyTableData.map((candidate, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell sx={{ color: "#475467" }}>
                              <FormGroup>
                                <FormControlLabel control={<Checkbox />} />
                              </FormGroup>
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {candidate.clist}
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {candidate.email}
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {candidate.phone}
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {candidate.iPassedDate}
                            </TableCell>
                            <TableCell
                              sx={{ color: "#43b25c", cursor: "pointer" }}
                            >
                              {candidate.resume}
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {candidate.refGiven}
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {candidate.refStatus}
                            </TableCell>
                            <TableCell
                              sx={{ color: "#66b2b2", cursor: "pointer" }}
                              onClick={() =>
                                navigate("/references/requestReferences")
                              }
                            >
                              {candidate.action}
                            </TableCell>
                            <TableCell
                              sx={{ color: "#5faeda", cursor: "pointer" }}
                            >
                              {candidate.sendStatus}
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
                />
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateList;
