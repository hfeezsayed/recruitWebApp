import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, InputAdornment, Pagination, TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axiosInstance from "../../../utils/axiosInstance";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import { BatchPopUpData, assignmentBatchesData } from "../../../dummy/Data";
import NoDataFound from "../../../../assets/images/noData Found.png";
import { BatchDetailEditPopUp } from "./batchDetailEditPopUp";
import { BatchDetailViewPopUp } from "./batchDetailViewPopUp";
import Spinner from "../../../utils/spinner";

export const AssessmentListView = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(assignmentBatchesData);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = useState("");

  const [viewData, setViewData] = useState();
  const [showPopupEdit, setShowPopupEdit] = useState(false);
  const [showPopupView, setShowPopupView] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShowPopupEdit(false);
    setViewData(null);
    setShowPopupView(false);
  };

  const pageChangeHandle = (pageNO) => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance
      .get(
        `/getAssessments?clientId=${user.userId}&pageNo=${pageNO}&pageSize=5`
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
      .get(`/getBatchList?clientId=${user.userId}&pageNo=1&pageSize=5`)
      .then((data) => {
        console.log(data);
        setData(data.data);
        setPage(data?.pageNo || 1);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  const checkStatus = (status) => {
    let color = "#475467";

    if (status === "Send Request") {
      color = "#FFA500";
    } else if (status === "Created") {
      color = "#5FAEDA";
    } else if (status === "All Completed") {
      color = "#58A20F";
    } else if (status === "Some Candidate Completed") {
      color = "#E05880";
    } else {
      color = "#475467";
    }
    return <p style={{ color: color, fontSize: 14 }}>{status}</p>;
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          {loading === true ? (
            <Spinner />
          ) : (
            <div>
              {data.length === 0 ? (
                <div className="p-8 h-full">
                  <div>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 22,
                        fontWeight: 700,
                      }}
                    >
                      Choose Team Templates from the existing options
                    </p>

                    <p
                      style={{
                        color: "#475467",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      Please choose a team template from the available options.
                    </p>
                  </div>
                  <div className="flex justify-center items-center text-center h-full">
                    <div className="-mt-20">
                      <img src={NoDataFound} alt="No Data Found" />
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 20,
                          fontWeight: 500,
                          marginTop: 25,
                        }}
                      >
                        No Assessment Batch Created
                      </p>
                      <Button
                        size="small"
                        style={{
                          color: "#008080",
                          fontSize: 18,
                          textTransform: "none",
                        }}
                        onClick={() => {
                          navigate("/allAssessmentBatches");
                        }}
                      >
                        Add the first assessment batch to initiate the list
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8">
                  <div>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 22,
                        fontWeight: 700,
                      }}
                    >
                      Assignment Batches
                    </p>
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      Select the assessments that you want to allocate to the
                      candidate.
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
                        onClick={() => navigate("/selectAssesment")}
                      >
                        Create New Batch
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
                                  Serial Number
                                </TableCell>
                                <TableCell
                                  sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                                >
                                  Template Name
                                </TableCell>
                                <TableCell
                                  sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                                >
                                  Created By
                                </TableCell>
                                <TableCell
                                  align="center"
                                  sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                                >
                                  Candidate Details
                                </TableCell>
                                <TableCell
                                  align="center"
                                  sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                                >
                                  Edit
                                </TableCell>
                                <TableCell
                                  sx={{ bgcolor: "#F8F9FA", color: "#101828" }}
                                >
                                  Status
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {data?.data?.map((row, index) => {
                                return (
                                  <TableRow key={index}>
                                    <TableCell align="center">
                                      {row.id}
                                    </TableCell>
                                    <TableCell sx={{ color: "#475467" }}>
                                      {row.batchName}
                                    </TableCell>
                                    <TableCell sx={{ color: "#475467" }}>
                                      {row.createdBy}
                                    </TableCell>
                                    <TableCell padding="none" align="center">
                                      <Button
                                        size="small"
                                        variant="text"
                                        style={{
                                          color: "#28A745",
                                          textTransform: "none",
                                        }}
                                        onClick={() => {
                                          console.log(row);
                                          setShowPopupView(true);
                                          setViewData(row);
                                        }}
                                      >
                                        View
                                      </Button>
                                    </TableCell>
                                    <TableCell padding="none" align="center">
                                      <Button
                                        size="small"
                                        variant="text"
                                        style={{
                                          color: "#5E8EBD",
                                          textTransform: "none",
                                        }}
                                        onClick={() => {
                                          setShowPopupEdit(true);
                                          setViewData(row);
                                        }}
                                      >
                                        Edit
                                      </Button>
                                    </TableCell>
                                    <TableCell>
                                      {checkStatus(row?.status)}
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
          )}
        </div>

        <BatchDetailEditPopUp
          open={showPopupEdit}
          data={viewData}
          setClose={handleClose}
        />
        <BatchDetailViewPopUp
          open={showPopupView}
          data={viewData}
          setClose={handleClose}
        />
      </div>
      <Footer />
    </div>
  );
};
