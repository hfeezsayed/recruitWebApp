import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { Button, InputAdornment, Pagination, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import { jobTemplateData } from "../../../dummy/Data";

export const JobCandidates = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = useState("");


  const handleDtpAccess = (row) => {
    const user = JSON.parse(localStorage.getItem("token"));
    if(row.dtpStatus === "Request Sent"){
        console.log("request already sent");
    }
    else{

        axios
        .get(
            `http://localhost:8080/xen/requestDtpAccess?clientId=${row.clientId}&candidateId=${row.candidateId}`,
            {
                headers: {
                  Authorization: `Bearer ${user.accessToken}`,
                },
              }
        )
        .then((response) => {
            console.log(response);
            setData((prevItems) =>
                prevItems.map((item) =>
                item.id === row.id ? { ...item, dtpStatus: "Request Sent" } : item
                )
            );
        })
        .catch((e) => {
            console.log(e);
        });
    }
  }

  const pageChangeHandle = (pageNO) => {
    const user = JSON.parse(localStorage.getItem("token"));
    axios
      .get(
        `http://localhost:8080/xen/getAllValueTemplate?clientId=${user.userId}&pageNo=${pageNO}&pageSize=5`,
        {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
      )
      .then((data) => {
        console.log(data);
        setData(data?.data);
        // setPage(data?.pageNo || 0);
      })
      .catch((e) => {
        console.log(e);
      });
    setPage(pageNO);
  };

  const PAGECOUNT =
    data?.totalCount > 0 ? Math.ceil(data?.totalCount / data?.pageSize) : 1;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    console.log(location.state);
    axios
      .get(
        `http://localhost:8080/xen/getAllJobCandidates?clientId=${user.userId}&jobId=${location.state}&pageNo=1&pageSize=5`,
        {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
      )
      .then((response) => {
        console.log(response);
        setData(response.data?.data);
        setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                Choose Ideal Candidate Persona Templates from the existing
                options
              </p>
              <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                Please choose ICP template from the available options.
              </p>
              <div className="py-5 flex justify-between items-center">
                <TextField
                  size="small"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
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
                  variant="text"
                  style={{
                    color: "#008080",
                    backgroundColor: "#EAF4F5",
                    textTransform: "none",
                  }}
                  onClick={() => navigate("/templates/icpEdit")}>
                  Create New Template
                </Button>
              </div>
              <Box sx={{ width: "100%" }}>
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            align="center"
                            sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                            Candidate Name
                          </TableCell>
                          <TableCell
                            sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                            Email Address   
                          </TableCell>
                          <TableCell
                            sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                            Phone Number
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                            LinkedIn Id
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                            Matching Scores
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                            DTP Access
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data?.map((row, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell align="center">{row.username}</TableCell>
                              <TableCell sx={{ color: "#475467" }}>
                                {row.email}
                              </TableCell>
                              <TableCell sx={{ color: "#475467" }}>
                                {row.phoneNumber}
                              </TableCell>
                              <TableCell sx={{ color: "#475467" }}>
                                {row.linkedIn}
                              </TableCell>
                              <TableCell padding="none" align="center">
                                {row.matchingScore}
                              </TableCell>
                              <TableCell padding="none" align="center">
                                {row.dtpAccess ? 
                                (
                                    <Button
                                        size="small"
                                        variant="text"
                                        style={{
                                            color: "#5E8EBD",
                                            textTransform: "none",
                                        }}
                                        onClick={() => {
                                            navigate("/digitalTalentProfileResult", {state : row.candidateId});
                                        }}>
                                        {row.dtpStatus}
                                    </Button>
                                )
                                :
                                (
                                    <Button
                                        size="small"
                                        variant="text"
                                        style={{
                                        color: "#5E8EBD",
                                        textTransform: "none",
                                        }}
                                        onClick={() => handleDtpAccess(row)}>
                                        {row.dtpStatus}
                                    </Button> 
                                )}
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
                    Showing {data?.totalCount || 0} results found
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
