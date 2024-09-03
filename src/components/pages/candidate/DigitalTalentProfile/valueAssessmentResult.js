import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { SideNav } from "../../../widgets/sidenav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import { valueAssesmentResult, workValueViewData } from "../../../dummy/Data";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import Spinner from "../../../utils/spinner";
import { Box, TableContainer } from "@mui/material";

export const ValueAssessmentResult = () => {
  const [assesmentData, setAssessmentData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { version } = useLocation().state || {};

  useEffect( () => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance.get("/getCandidateValueResult?candidateId="+user.userId+"&versionNo=-1",
    )
    .then(response => {
        setAssessmentData(response.data);
        setLoading(false);
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    })
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
            <div className="p-8">
              <div className="flex justify-between">
                <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                  Value Assessment Results Summary
                </p>
                <p style={{ color: "#475467", fontSize: 16 }}>
                  Date Taken : 22nd May 2024
                </p>
              </div>
              <p style={{ color: "#475467", fontSize: 14 }}>
                A spider chart visualising your scores across different work
                attributes.
              </p>
              <div className="py-5">
                <RadarChart
                  height={350}
                  width={450}
                  outerRadius="80%"
                  data={assesmentData}>
                  <PolarGrid />
                  <Tooltip />
                  <PolarAngleAxis dataKey="statement" />
                  <PolarRadiusAxis />
                  <Radar
                    dataKey="rating"
                    stroke="#008080"
                    fill="#ffffff"
                    fillOpacity={0}
                  />
                </RadarChart>
              </div>
              <Box>
                <TableContainer sx={{ minWidth: 500 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            bgcolor: "#F8F9FA",
                            color: "#101828",
                            border: 1,
                            borderColor: "#D0D5DD50",
                            width: 250,
                          }}>
                          Work Attribute
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#F8F9FA",
                            color: "#101828",
                            border: 1,
                            borderColor: "#D0D5DD50",
                          }}>
                          Frequency Selected
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: "#171717",
                            border: 1,
                            borderColor: "#D0D5DD50",
                          }}>
                          Priority 4
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#171717",
                            border: 1,
                            borderColor: "#D0D5DD50",
                            backgroundColor: "#C2E0E8",
                          }}>
                          <div className="grid grid-cols-4 gap-y-2">
                            {assesmentData?.map((data) => {
                              return Number(data?.rating) === 4 ? (
                                <p>{data.statement}</p>
                              ) : null;
                            })}
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: "#171717",
                            border: 1,
                            borderColor: "#D0D5DD50",
                          }}>
                          Priority 3
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#171717",
                            border: 1,
                            borderColor: "#D0D5DD50",
                            backgroundColor: "#F2EFC9",
                          }}>
                          <div className="grid grid-cols-4 gap-y-2">
                            {assesmentData?.map((data) => {
                              return Number(data?.rating) === 3 ? (
                                <p>{data.statement}</p>
                              ) : null;
                            })}
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: "#171717",
                            border: 1,
                            borderColor: "#D0D5DD50",
                          }}>
                          Priority 2
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#171717",
                            border: 1,
                            borderColor: "#D0D5DD50",
                            backgroundColor: "#D1E6D5",
                          }}>
                          <div className="grid grid-cols-4 gap-y-2">
                            {assesmentData?.map((data) => {
                              return Number(data?.rating) === 2 ? (
                                <p>{data.statement}</p>
                              ) : null;
                            })}
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: "#171717",
                            border: 1,
                            borderColor: "#D0D5DD50",
                          }}>
                          Priority 1
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#171717",
                            border: 1,
                            borderColor: "#D0D5DD50",
                            backgroundColor: "#ECCCB7",
                          }}>
                          <div className="grid grid-cols-4 gap-y-2">
                            {assesmentData?.map((data) => {
                              return Number(data?.rating) === 1 ? (
                                <p>{data.statement}</p>
                              ) : null;
                            })}
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: "#171717",
                            border: 1,
                            borderColor: "#D0D5DD50",
                          }}>
                          No Priority
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#171717",
                            border: 1,
                            borderColor: "#D0D5DD50",
                            backgroundColor: "#EDDAD3",
                          }}>
                          <div className="grid grid-cols-4 gap-y-2">
                            {assesmentData?.map((data) => {
                              return Number(data?.rating) === 0 ? (
                                <p>{data.statement}</p>
                              ) : null;
                            })}
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
