import React, { Fragment, useEffect, useState } from "react";
import { Button, Pagination } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Footer } from "../../../widgets/footer";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { assesmentResultData } from "../../../dummy/Data";

export const AsssessmentResult = () => {
  const navigation = useNavigate();

  const [data, setData] = useState(assesmentResultData);
  const [page, setPage] = React.useState(1);

  // pagination

  const pageChangeHandle = (pageNO) => {
    axios
      .get(
        `https://xenflexer.northcentralus.cloudapp.azure.com/xen/getAssessments?clientId=1&pageNo=${pageNO}&pageSize=5`
      )
      .then((data) => {
        console.log(data);
        // setData(data.data);
        // setPage(data?.pageNo || 0);
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
    data.totalCount > 0 ? Math.ceil(data.totalCount / data.pageSize) : 1;

  useEffect(() => {
    axios
      .get(
        "https://xenflexer.northcentralus.cloudapp.azure.com/xen/getAssessments?clientId=1&pageNo=1&pageSize=5"
      )
      .then((data) => {
        console.log(data);
        // setData(data.data);
        // setPage(data?.pageNo || 1);
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
            <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
              Assessment Results
            </p>
            <p style={{ color: "#475467", fontSize: 14 }}>
              Below are the results obtained by the candidates for the allotted
              assessments
            </p>

            <div>
              <div className="pt-5 pb-3">
                <p
                  style={{
                    color: "#475467",
                    fontSize: 20,
                    fontWeight: 500,
                  }}>
                  Batch Name: Team Collaboration Assessment
                </p>
              </div>
              <Box sx={{ width: "100%" }}>
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <TableContainer>
                    <Table stickyHeader>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              bgcolor: "#F8F9FA",
                              color: "#101828",
                              borderWidth: 1,
                            }}>
                            Candidate Name
                          </TableCell>
                          <TableCell
                            sx={{
                              bgcolor: "#F8F9FA",
                              color: "#101828",
                              borderWidth: 1,
                            }}>
                            Assessments Name
                          </TableCell>
                          <TableCell
                            sx={{
                              bgcolor: "#F8F9FA",
                              color: "#101828",
                              borderWidth: 1,
                            }}>
                            Date Added
                          </TableCell>
                          <TableCell
                            sx={{
                              bgcolor: "#F8F9FA",
                              color: "#101828",
                              borderWidth: 1,
                            }}>
                            Status
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              bgcolor: "#F8F9FA",
                              color: "#101828",
                              borderWidth: 1,
                            }}>
                            Time Passed
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              bgcolor: "#F8F9FA",
                              color: "#101828",
                              borderWidth: 1,
                            }}>
                            Notify
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data?.data?.map((row, index) => {
                          return (
                            <Fragment key={index}>
                              <TableRow>
                                <TableCell
                                  sx={{ borderWidth: 1 }}
                                  rowSpan={row?.assessments?.length + 1}>
                                  {row.candidateName}
                                </TableCell>
                              </TableRow>
                              {row?.assessments.map((subData, subindex) => {
                                return (
                                  <TableRow key={subindex}>
                                    <TableCell
                                      sx={{ color: "#475467", borderWidth: 1 }}>
                                      {subData.name}
                                    </TableCell>
                                    <TableCell
                                      sx={{ color: "#475467", borderWidth: 1 }}>
                                      {subData.date}
                                    </TableCell>
                                    <TableCell sx={{ borderWidth: 1 }}>
                                      {subData.status ? (
                                        <p
                                          style={{
                                            color: "#58A20F",
                                            fontSize: 14,
                                            fontWeight: 500,
                                          }}>
                                          Completed
                                        </p>
                                      ) : (
                                        <p
                                          style={{
                                            color: "#E05880",
                                            fontSize: 14,
                                            fontWeight: 500,
                                          }}>
                                          Not Taken
                                        </p>
                                      )}
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      sx={{ color: "#475467", borderWidth: 1 }}>
                                      {subData.timePased}
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      padding="none"
                                      sx={{ borderWidth: 1 }}>
                                      <Button
                                        variant="text"
                                        size="small"
                                        disabled={subData.status}
                                        style={{
                                          color: subData.status
                                            ? "#848382"
                                            : "#5FAEDA",
                                          fontSize: 14,
                                          fontWeight: 500,
                                        }}>
                                        Notify
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                            </Fragment>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
                <div className="flex justify-between items-center">
                  <p style={{ color: "#475467", fontSize: 14 }}>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
