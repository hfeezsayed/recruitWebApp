import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Rating,
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
import { workValueEditData } from "../../../dummy/Data";
import { useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import axiosInstance from "../../../utils/axiosInstance";


export const WorkValueTemplateEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [ratingList, setRatingList] = useState([workValueEditData]);

  const handleChangeRating = (value, i) => {
    let newFormValues = [...ratingList];
    newFormValues[i].rating = value;
    setRatingList(newFormValues);
  };

  useEffect(() => {
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
                Create Template 1
              </p>
              <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                Please review and edit the information as needed, or use the
                same template
              </p>
            </div>
            <div>
              <Box sx={{ width: "100%", marginTop: 4 }}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            bgcolor: "#F8F9FA",
                            color: "#101828",
                          }}>
                          Value
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#F8F9FA",
                            color: "#101828",
                          }}>
                          Statements
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#F8F9FA",
                            color: "#101828",
                          }}>
                          Ratings
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell
                              sx={{
                                color: "#475467",
                              }}>
                              {row.value}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#475467",
                              }}>
                              {row.statement}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#475467",
                              }}>
                              <Rating
                                value={row?.rating}
                                onChange={(e, newvalue) =>
                                  handleChangeRating(newvalue, index)
                                }
                                max={4}
                                sx={{ color: "#66B2B2" }}
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <div className="flex justify-end py-8 gap-8">
                <Button
                  variant="outlined"
                  style={{
                    color: "#475467",
                    borderColor: "#D0D5DD",
                  }}
                  onClick={() => navigate(-1)}>
                  Back
                </Button>
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
