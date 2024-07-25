import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import { workValueViewData } from "../../../dummy/Data";

export const ValuesResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(workValueViewData);


  useEffect(() => {
    console.log(location.state);
    setData(location.state);
  }, [location.state])

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                Pre- Fill Work Value Details: Template 1
              </p>
              <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                Below are the result of Template 1
              </p>
            </div>
            <div>
            <div className="py-5">
                    <RadarChart
                      height={350}
                      width={450}
                      outerRadius="80%"
                      data={data?.data}>
                      <PolarGrid />
                      <Tooltip />
                      <PolarAngleAxis dataKey="value" />
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
                                  Priority 1
                                </TableCell>
                                <TableCell
                                  sx={{
                                    color: "#171717",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                    backgroundColor: "#C2E0E8",
                                  }}>
                                  <div className="grid grid-cols-4 gap-y-2">
                                    {data?.map((data) => {
                                      return Number(data?.rating) === 4 ? (
                                        <p>{data.value}</p>
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
                                    backgroundColor: "#F2EFC9",
                                  }}>
                                  <div className="grid grid-cols-4 gap-y-2">
                                    {data?.map((data) => {
                                      return Number(data?.rating) === 3 ? (
                                        <p>{data.value}</p>
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
                                    backgroundColor: "#D1E6D5",
                                  }}>
                                  <div className="grid grid-cols-4 gap-y-2">
                                    {data?.map((data) => {
                                      return Number(data?.rating) === 2 ? (
                                        <p>{data.value}</p>
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
                                  Priority 4
                                </TableCell>
                                <TableCell
                                  sx={{
                                    color: "#171717",
                                    border: 1,
                                    borderColor: "#D0D5DD50",
                                    backgroundColor: "#ECCCB7",
                                  }}>
                                  <div className="grid grid-cols-4 gap-y-2">
                                    {data?.map((data) => {
                                      return Number(data?.rating) === 1 ? (
                                        <p>{data.value}</p>
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
                                    {data?.map((data) => {
                                      return Number(data?.rating) === 0 ? (
                                        <p>{data.value}</p>
                                      ) : null;
                                    })}
                                  </div>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Box>
              <div className="flex justify-end py-8">
                <Button
                  onClick={() => {
                    navigate("/job/createJob");
                  }}
                  variant="contained"
                  style={{ backgroundColor: "#008080", color: "#ffffff" }}>
                  CONFIRM
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
