import React, { useEffect, useState } from "react";
import {
  Button,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Pagination,
  Radio,
  Rating,
  Select,
  TextField,
} from "@mui/material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  DialogActions,
} from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";
import axiosInstance from "../../../utils/axiosInstance";
import { useLocation } from "react-router-dom";
import { Footer } from "../../../widgets/footer";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import {
  jobTemplateData,
  workValueEditData,
  workValueViewData,
} from "../../../dummy/Data";
import { IoSearchOutline } from "react-icons/io5";
import { WorkValuepopup } from "./workValuepopup";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const WorkValueTemplateCreate = () => {
  const navigate = useNavigate();
  const [actions, setActions] = useState("Work Value Analysis");
  const options = ["Work value template", "Work Value Analysis"];
  const [search, setSearch] = useState("");
  const [selected, setSelected] = React.useState();
  const [data, setData] = useState(jobTemplateData);
  const [page, setPage] = React.useState(1);

  const [templateName, setTemplateName] = useState("");
  const [templateTag, setTemplateTag] = useState("");
  const [templateDescription, setTemplateDescription] = useState("");

  const [viewData, setViewData] = useState(workValueViewData);
  const [showPopup, setShowPopup] = useState(false);

  const [ratingList, setRatingList] = useState(workValueEditData);
  const [showRatingResult, setShowRatingResult] = useState(false);
  const [showRatingPopup, setShowRatingPopUp] = useState(false);

  const handleChangeRating = (value, i) => {
    let newFormValues = [...ratingList];
    newFormValues[i].rating = value;
    setRatingList(newFormValues);
  };

  const handleClose = () => {
    setShowPopup(false);
    // setViewData(null);
  };

  const closePopup = () => {
    setShowRatingPopUp(false);
    setTemplateName("");
    setTemplateTag("");
    setTemplateDescription("");
  };

  const handleSubmitRating = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    await axiosInstance
      .post(`/saveValueTemplate?clientId=${user.userId}`, {
        ratingList,
        templateName,
        templateTag,
        templateDescription,
      })
      .then((data) => {
        console.log(data.data);
        navigate("/templates/workValueTemplate");
      })
      .catch((e) => console.log(e));
    closePopup();
  };

  const handlepopup = (row) => {
    const data = { data: row.valuesData };
    console.log(row.valuesData);
    setViewData(data);
    setShowPopup(true);
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              {actions === "Work Value Analysis" && (
                <div>
                  {showRatingResult ? (
                    <>
                      <div>
                        <p
                          style={{
                            color: "#101828",
                            fontSize: 22,
                            fontWeight: 600,
                          }}>
                          Output of Work Value Template Analysis
                        </p>
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 14,
                            fontWeight: 400,
                          }}>
                          Below are the result of the Work Value Template
                          Analysis taken.
                        </p>
                      </div>
                      <div className="py-5">
                        <RadarChart
                          height={350}
                          width={450}
                          outerRadius="80%"
                          data={viewData.data}>
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
                                    {viewData?.data?.map((data) => {
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
                                    {viewData?.data?.map((data) => {
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
                                    {viewData?.data?.map((data) => {
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
                                    {viewData?.data?.map((data) => {
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
                                    {viewData?.data?.map((data) => {
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
                      <div className="flex justify-end py-8 gap-8">
                        <Button
                          onClick={() => {
                            setShowRatingPopUp(true);
                          }}
                          variant="contained"
                          style={{
                            backgroundColor: "#008080",
                            color: "#ffffff",
                          }}>
                          SAVE AS TEMPLATE
                        </Button>
                      </div>
                      {/* popup */}
                      <Dialog open={showRatingPopup} onClose={closePopup}>
                        <DialogTitle>Template Details</DialogTitle>
                        <IconButton
                          onClick={closePopup}
                          style={{ position: "absolute", top: 10, right: 10 }}>
                          <IoIosCloseCircleOutline />
                        </IconButton>
                        <Divider />
                        <DialogContent>
                          <div className="grid-cols-2 grid gap-8">
                            <div className="grid grid-flow-row gap-2">
                              <p
                                style={{
                                  color: "#344054",
                                  fontSize: 14,
                                  fontWeight: 500,
                                }}>
                                Work Value Template Name
                              </p>
                              <TextField
                                size="small"
                                disablePortal
                                value={templateName}
                                onChange={(e) =>
                                  setTemplateName(e.target.value)
                                }
                                placeholder="type"
                              />
                            </div>
                            <div className="grid grid-flow-row gap-2">
                              <p
                                style={{
                                  color: "#344054",
                                  fontSize: 14,
                                  fontWeight: 500,
                                }}>
                                Work Value Template Tags
                              </p>
                              <TextField
                                size="small"
                                disablePortal
                                value={templateTag}
                                onChange={(e) => setTemplateTag(e.target.value)}
                                placeholder="type"
                              />
                            </div>
                          </div>
                          <div className="grid grid-flow-row gap-2 py-8">
                            <p
                              style={{
                                color: "#344054",
                                fontSize: 14,
                                fontWeight: 500,
                              }}>
                              Work Value Template Description
                            </p>
                            <textarea
                              value={templateDescription}
                              placeholder="type"
                              onChange={(e) =>
                                setTemplateDescription(e.target.value)
                              }
                              style={{
                                borderWidth: 1,
                                borderColor: "#D0D5DD",
                                borderRadius: 8,
                                padding: 5,
                              }}
                            />
                          </div>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={closePopup}
                            variant="outlined"
                            style={{
                              color: "#475467",
                              borderColor: "#D0D5DD",
                            }}>
                            cancel
                          </Button>
                          <Button
                            onClick={handleSubmitRating}
                            variant="contained"
                            style={{
                              color: "#ffffff",
                              backgroundColor: "#008080",
                            }}>
                            SAVE
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </>
                  ) : (
                    <>
                      <div>
                        <p
                          style={{
                            color: "#101828",
                            fontSize: 22,
                            fontWeight: 600,
                          }}>
                          Work Value Template Analysis
                        </p>
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 14,
                            fontWeight: 400,
                          }}>
                          Please complete the work value analysis.
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
                                {ratingList?.map((row, index) => {
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
                            onClick={() => {
                              setShowRatingResult(true);
                            }}
                            variant="contained"
                            style={{
                              backgroundColor: "#008080",
                              color: "#ffffff",
                            }}>
                            CONFIRM
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
