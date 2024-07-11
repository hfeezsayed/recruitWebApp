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
import { ValuesPopup } from "./valuesPopup";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const JobWorkValueTemplate = () => {
  const navigate = useNavigate();
  const [actions, setActions] = useState("");
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
  const [showRatingResult, setShowRatingResult] = useState();
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

  const { batchId } = useLocation().state || {};

  // pagination

  const pageChangeHandle = (pageNO) => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .get(
        `/getAllValueTemplate?clientId=${user.userId}&pageNo=${pageNO}&pageSize=5`
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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .get(
        `/getAllValueTemplate?clientId=${user.userId}&pageNo=1&pageSize=5`
      )
      .then((data) => {
        console.log(data);
        setData(data.data);
        setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSubmitTemplate = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axiosInstance
      .get(
        `/assignValueTemplateForJob?clientId=${user.userId}&jobId=${jobId}&valuesId=${selected.id}`,
        
      )
      .then((data) => {
        console.log(data.data);
        navigate("/job/createJob", { state : jobId});
      })
      .catch((e) => console.log(e));
  };

  const handleSubmitRating = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    await axiosInstance
      .post(
        `/saveValueTemplateForJob?clientId=${user.userId}&jobId=${jobId}&template=0`,
        {
          ratingList,
          templateName,
          templateTag,
          templateDescription,
        },
        
      )
      .then((data) => {
        console.log(data.data);
        //localStorage.setItem("jobId", data.data.jobId);
        navigate("/job/createJob", { state : jobId});
        //navigate("/templates/workValueTemplate", { state : { "job" : true }})
      })
      .catch((e) => console.log(e));
    closePopup();
  };


  const saveAsTemplate = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    await axiosInstance
      .post(
        `/saveValueTemplateForJob?clientId=${user.userId}&jobId=${jobId}&template=1`,
        {
          ratingList,
          templateName,
          templateTag,
          templateDescription,
        },
        
      )
      .then((data) => {
        console.log(data.data);
        //localStorage.setItem("jobId", data.data.jobId);
        navigate("/job/createJob", { state : jobId});
        //navigate("/templates/workValueTemplate", { state : { "job" : true }})
      })
      .catch((e) => console.log(e));
    closePopup();
  };

  const handlepopup = (row) => {
    const data = {data : row.valuesData};
    console.log(row.valuesData);
    setViewData(data);
    setShowPopup(true);
  }

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
              Choose an option for Work Value
            </p>
            <p style={{ color: "#475467", fontSize: 14 }}>
              Please select from the available options.
            </p>

            {/* select */}
            <div className="py-5">
              <Select
                size="small"
                displayEmpty
                value={actions}
                onChange={(e) => setActions(e.target.value)}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <span
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 500,
                        }}>
                        Select
                      </span>
                    );
                  }

                  return selected;
                }}
                sx={{ minWidth: 250, color: "#101828", mt: 1 }}>
                <MenuItem disabled value="">
                  <span
                    style={{
                      color: "#475467",
                      fontSize: 16,
                      fontWeight: 600,
                    }}>
                    Actions
                  </span>
                </MenuItem>
                {options.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={{
                      color: name === actions ? "#66B2B2" : "#54595E",
                    }}>
                    <Radio
                      checked={name === actions}
                      sx={{
                        color: "#D0D5DD",
                        "&.Mui-checked": {
                          color: "#66B2B2",
                        },
                      }}
                    />
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div>
              {actions === "Work value template" && (
                <div>
                  <div>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 22,
                        fontWeight: 700,
                      }}>
                      Choose Work Value Templates
                    </p>
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 14,
                        fontWeight: 400,
                      }}>
                      Please choose a work value template from the available
                      options.
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
                    </div>
                    <Box sx={{ width: "100%" }}>
                      <Paper sx={{ width: "100%", mb: 2 }}>
                        <TableContainer sx={{ maxHeight: 500 }}>
                          <Table stickyHeader>
                            <TableHead>
                              <TableRow>
                                <TableCell
                                  padding="none"
                                  sx={{ bgcolor: "#F8F9FA" }}
                                />
                                <TableCell
                                  align="center"
                                  sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                                  Serial Number
                                </TableCell>
                                <TableCell
                                  sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                                  Template Name
                                </TableCell>
                                <TableCell
                                  sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                                  Created By
                                </TableCell>
                                <TableCell
                                  align="center"
                                  sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                                  Result
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {data?.data?.map((row, index) => {
                                return (
                                  <TableRow key={index}>
                                    <TableCell padding="checkbox">
                                      <Radio
                                        checked={selected?.id === row?.id}
                                        value={selected?.id === row?.id}
                                        onClick={() => setSelected(row)}
                                        sx={{
                                          color: "#D0D5DD",
                                          " &.Mui-checked": {
                                            color: "#66B2B2",
                                          },
                                        }}
                                      />
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.id}
                                    </TableCell>
                                    <TableCell sx={{ color: "#475467" }}>
                                      {row.templateName}
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
                                          fontSize: 14,
                                        }}
                                        onClick={() => {
                                          handlepopup(row);
                                          // setViewData(row.valuesData);
                                          // setShowPopup(true);
                                        }}>
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
                    {selected && (
                      <div className="py-8 gap-8 flex justify-end">
                        <Button
                          onClick={handleSubmitTemplate}
                          variant="contained"
                          style={{
                            color: "#ffffff",
                            backgroundColor: "#008080",
                          }}>
                          Choose Template
                        </Button>
                      </div>
                    )}
                  </div>
                  <ValuesPopup
                    open={showPopup}
                    data={viewData}
                    setClose={handleClose}
                  />
                </div>
              )}
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
                          Output of Work Value Analysis Result
                        </p>
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 14,
                            fontWeight: 400,
                          }}>
                          Below are the result of the Work Value Analysis taken.
                        </p>
                      </div>
                      <Box sx={{ width: "60%" }}>
                        <TableContainer sx={{ minWidth: 500 }}>
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
                              {ratingList?.map((row, index) => {
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
                      <div className="flex justify-end py-8 gap-8">
                        <Button
                          variant="outlined"
                          style={{
                            color: "#475467",
                            borderColor: "#D0D5DD",
                          }}
                          onClick={() => {
                            setShowRatingResult(false);
                          }}>
                          Back
                        </Button>
                        <Button
                          onClick={() => {
                            setShowRatingPopUp(true);
                          }}
                          variant="contained"
                          style={{
                            backgroundColor: "#008080",
                            color: "#ffffff",
                          }}>
                          SAVE
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
                            onClick={handleSubmitRating}
                            variant="outlined"
                            style={{
                              color: "#ffffff",
                              backgroundColor: "#008080",
                            }}>
                            SAVE
                          </Button>
                          <Button
                            onClick={saveAsTemplate}
                            variant="contained"
                            style={{
                              color: "#ffffff",
                              backgroundColor: "#008080",
                            }}>
                            SAVE As Template
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
                          Work Value Analysis
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
                            variant="outlined"
                            style={{
                              color: "#475467",
                              borderColor: "#D0D5DD",
                            }}
                            onClick={() => navigate(-1)}>
                            Back
                          </Button>
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
