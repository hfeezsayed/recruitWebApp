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

export const WorkValueTemplateView = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(workValueViewData);

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
                              {row.rank}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#475467",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}>
                              {row.attribute}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <div className="flex justify-end py-8">
                <Button
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
