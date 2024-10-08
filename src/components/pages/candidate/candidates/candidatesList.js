import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import axiosInstance from "../../../utils/axiosInstance";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import Spinner from "../../.././utils/spinner";
import { SideNav } from "../../../widgets/sidenav";

export const CandidatesAssign = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = useState("");
  const user = JSON.parse(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);

  const pageChangeHandle = (pageNO) => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance
      .get(
        `/getAllClientAssignedCandidates?clientId=${user.userId}&pageNo=${pageNO}&pageSize=5`
      )
      .then((data) => {
        console.log(data);
        setData(data.data);
        setPage(data?.pageNo || 0);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
    setPage(pageNO);
  };

  const PAGECOUNT =
    data?.totalCount > 0 ? Math.ceil(data?.totalCount / data?.pageSize) : 1;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance
      .get(
        `/getAllClientAssignedCandidates?clientId=${user.userId}&pageNo=1&pageSize=5`
      )
      .then((data) => {
        console.log("candidateDataList____", data);
        setData(data.data);
        setPage(data?.pageNo || 1);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          {loading === true ? (
            <Spinner />
          ) : (
            <div className="p-10">
              <div>
                <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                  Assign Candidate List
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
                    onClick={() => navigate("/candidate/createCandidate")}
                  >
                    Add Candidate
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
                              sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                            >
                              Candidate Name
                            </TableCell>
                            <TableCell
                              sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                            >
                              Email Address
                            </TableCell>
                            <TableCell
                              sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                            >
                              Phone Number
                            </TableCell>
                            <TableCell
                              sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                            >
                              LinkedIn Id
                            </TableCell>
                            <TableCell
                              sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                            >
                              Resume
                            </TableCell>
                            {/* <TableCell
                              align="center"
                              sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                              Actions
                            </TableCell> */}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data?.data?.map((row, index) => {
                            return (
                              <TableRow key={index}>
                                <TableCell sx={{ color: "#475467" }}>
                                  {row.name}
                                </TableCell>
                                <TableCell sx={{ color: "#475467" }}>
                                  {row.email}
                                </TableCell>
                                <TableCell sx={{ color: "#475467" }}>
                                  {row.phone}
                                </TableCell>
                                <TableCell sx={{ color: "#475467" }}>
                                  {row.linkedIn}
                                </TableCell>
                                <TableCell padding="none" align="center">
                                  <Button
                                    size="small"
                                    variant="text"
                                    style={{
                                      color: "#28A745",
                                      textTransform: "none",
                                    }}
                                    onClick={() =>
                                      navigate(
                                        "/templates/workValueTemplateView",
                                        { state: row }
                                      )
                                    }
                                  >
                                    {row.resume}
                                  </Button>
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
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
