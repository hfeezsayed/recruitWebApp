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
import { valueAssesmentResult } from "../../../dummy/Data";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import Spinner from "../../../utils/spinner";

export const ValueAssessmentResult = () => {
  const [assesmentData, setAssessmentData] = useState(valueAssesmentResult);
  const [loading, setLoading] = useState(false);

  const { version } = useLocation().state || {};


  useEffect( () => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance.get("/getCandidateValueResult?candidateId="+user.userId+"&versionNo="+version, 
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
          { loading === true ? 
          (
            <Spinner/>
          )
          :
          (
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

                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis />
                  <Radar
                    dataKey="rating"
                    stroke="#008080"
                    fill="#ffffff"
                    fillOpacity={0}
                  />
                </RadarChart>
              </div>
              <div>
                <Table
                  sx={{
                    width: 625,
                    border: 1,
                    borderColor: "#D0D5DD",
                  }}>
                  <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                    <TableRow>
                      <TableCell
                        sx={{ color: "#101828", fontSize: 14, fontWeight: 600 }}>
                        Work Attribute
                      </TableCell>
                      <TableCell
                        sx={{ color: "#101828", fontSize: 14, fontWeight: 600 }}>
                        Frequency Selected
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {assesmentData.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            color: "#475467",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          {row.statement}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#008080",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          {row.rating}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
