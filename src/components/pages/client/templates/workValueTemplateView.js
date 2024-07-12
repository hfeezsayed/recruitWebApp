import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import { workValueViewData } from "../../../dummy/Data";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

export const WorkValueTemplateView = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
    if (location.state) {
      console.log(location.state);
      setData(location.state.valuesData);
    }
  }, [location.state]);

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                Work Value Template Details: {data.templateName}
              </p>
              <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                Below are the result of Template 1
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
                data={data}>
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
              <Box sx={{ width: "100%", marginTop: 4 }}>
                <TableContainer sx={{ maxWidth: 686 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="center"
                          sx={{
                            bgcolor: "#F8F9FA",
                            color: "#101828",
                            border: 1,
                            borderColor: "#D0D5DD50",
                          }}>
                          Ranking out of 4
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#F8F9FA",
                            color: "#101828",
                            border: 1,
                            borderColor: "#D0D5DD50",
                          }}>
                          Work Attribute
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell
                              align="center"
                              sx={{
                                color: "#008080",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}>
                              {row.rating}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#475467",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}>
                              {row.value}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
