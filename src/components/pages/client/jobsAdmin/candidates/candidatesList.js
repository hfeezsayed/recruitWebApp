import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import {
  Button,
  InputAdornment,
  Pagination,
  TextField,
  Checkbox,
} from "@mui/material";
import { IoFilter } from "react-icons/io5";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axiosInstance from "../../../../utils/axiosInstance";
import { AdminSideNav } from "../../../../widgets/adminSideNav";
import { Footer } from "../../../../widgets/footer";
import { TopNav } from "../../../../widgets/topNav";

export const CandidatesLists = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = useState("");
  const user = JSON.parse(localStorage.getItem("token"));
  const [selected, setSelected] = useState([]);

  //select row start
  const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (row) => selected.indexOf(row) !== -1;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data?.data || [];
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleAssignCandidate = (selected) => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axiosInstance
      .post(
        `/assignCandidatesToJob?clientId=${user.userId}&jobId=${jobId}`,
        selected
      )
      .then((data) => {
        console.log(data.data);
      })
      .catch((e) => console.log(e));
  };
  //select row end

  //Pagination start
  // pagination
  const pageChangeHandle = (pageNO) => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .get(
        `/getBatchCandidates?clientId=${user.userId}&pageNo=${pageNO}&pageSize=5`
      )
      .then((data) => {
        console.log(data);
        setData(data.data);
        setPage(data?.pageNo || 0);
      })
      .catch((e) => {
        console.log(e);
      });
    setPage(pageNO);
  };

  useEffect(() => {
    setPage(data?.pageNo || 1);
  }, [data]);

  const PAGECOUNT =
    data?.totalCount > 0 ? Math.ceil(data?.totalCount / data?.pageSize) : 1;
  //Pagination end

  //Candidate list API start
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .get(`/getBatchCandidates?clientId=${user.userId}&pageNo=1&pageSize=5`)
      .then((data) => {
        console.log("Assign candidates----", data);
        setData(data.data);
        setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //Candidate list API End

  return (
    <div>
      <div className="flex">
        <AdminSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div>
            <div className="p-10">
              <div>
                <p
                  style={{
                    color: "#101828",
                    fontSize: 22,
                    fontWeight: 700,
                  }}
                >
                  Applicant Tracking Section
                </p>
                <p className="pb-8 text-[14px] text-[#475467]">
                  Listed below are the details regarding each candidate.
                </p>
                <div className="flex justify-between items-center">
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
                <Box sx={{ width: "100%" }} className="pt-11">
                  <Paper
                    sx={{
                      width: "100%",
                      mb: 2,
                    }}
                  >
                    <TableContainer
                      sx={{
                        maxHeight: 500,
                      }}
                    >
                      <Table stickyHeader>
                        <TableHead>
                          <TableRow>
                            <TableCell
                              padding="checkbox"
                              sx={{
                                bgcolor: "#F8F9FA",
                              }}
                            >
                              <Checkbox
                                color="primary"
                                indeterminate={
                                  selected.length > 0 &&
                                  selected.length < data?.data?.length
                                }
                                checked={
                                  data?.data?.length > 0 &&
                                  selected.length === data?.data?.length
                                }
                                onChange={handleSelectAllClick}
                                sx={{
                                  color: "#D0D5DD",
                                  "&.Mui-checked ": {
                                    color: "#66B2B2",
                                  },
                                }}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                bgcolor: "#F8F9FA",
                                color: "#101828",
                              }}
                            >
                              Candidate Names
                            </TableCell>
                            <TableCell
                              sx={{
                                bgcolor: "#F8F9FA",
                                color: "#101828",
                              }}
                            >
                              Email Address
                            </TableCell>
                            <TableCell
                              sx={{
                                bgcolor: "#F8F9FA",
                                color: "#101828",
                              }}
                            >
                              Phone Number
                            </TableCell>
                            <TableCell
                              sx={{
                                bgcolor: "#F8F9FA",
                                color: "#101828",
                              }}
                            >
                              LinkedIn Id
                            </TableCell>
                            <TableCell
                              sx={{
                                bgcolor: "#F8F9FA",
                                color: "#101828",
                              }}
                            >
                              Resume
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data?.data
                            ?.filter((item) =>
                              item.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            )
                            .map((row, index) => {
                              const isItemSelected = isSelected(row);
                              return (
                                <TableRow
                                  hover
                                  role="checkbox"
                                  aria-checked={isItemSelected}
                                  tabIndex={-1}
                                  key={index}
                                  selected={isItemSelected}
                                  sx={{
                                    cursor: "pointer",
                                  }}
                                >
                                  <TableCell padding="checkbox">
                                    <Checkbox
                                      color="primary"
                                      checked={isItemSelected}
                                      onClick={(event) =>
                                        handleClick(event, row)
                                      }
                                      sx={{
                                        color: "#D0D5DD",
                                        "&.Mui-checked": {
                                          color: "#66B2B2",
                                        },
                                      }}
                                    />
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                    }}
                                  >
                                    {row.name}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                    }}
                                  >
                                    {row.emailId}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                    }}
                                  >
                                    {row.mobileNo}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      color: "#475467",
                                    }}
                                  >
                                    {row.linkedIn}
                                  </TableCell>
                                  <TableCell
                                    padding="none"
                                    sx={{
                                      color: "#475467",
                                    }}
                                  >
                                    <Button
                                      size="small"
                                      style={{
                                        color: "#28A745",
                                        fontSize: 14,
                                        textTransform: "none",
                                      }}
                                    >
                                      View
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
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 14,
                      }}
                    >
                      Showing {data?.totalCount} results found
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

                <div className="flex justify-end pt-5 pb-9 gap-5">
                  <Button
                    // onClick={() => setActions("Add Candidate")}
                    variant="outlined"
                    style={{
                      borderColor: "#D0D5DD",
                      color: "#475467",
                    }}
                  >
                    Cancle
                  </Button>
                  <Button
                    onClick={() => {
                      {
                        handleAssignCandidate(selected);
                      }
                    }}
                    variant="contained"
                    style={{
                      backgroundColor: "#008080",
                      color: "#ffffff",
                    }}
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
