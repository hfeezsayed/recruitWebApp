import React, { useEffect, useState } from "react";
import {
  Button,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Alert,
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
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { Footer } from "../../../widgets/footer";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import {
  QUESTIONS,
  jobTemplateData,
  workValueViewData,
} from "../../../dummy/Data";
import { ValuesPopup } from "./valuesPopup";

export const JobIcpTemplate = () => {
  const navigate = useNavigate();
  const [actions, setActions] = useState("");
  const options = ["ICP template", "ICP Analysis"];
  const [search, setSearch] = useState("");
  const [selected, setSelected] = React.useState();
  const [data, setData] = useState(jobTemplateData);
  const [page, setPage] = React.useState(1);
  const [viewData, setViewData] = useState(workValueViewData);
  const [showPopup, setShowPopup] = useState(false);

  const [questionList, setQuestionList] = useState(QUESTIONS);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);
  const IcpTemplateQuestion = questionList[currentQuestion];

  const [templateName, setTemplateName] = useState("");
  const [templateTag, setTemplateTag] = useState("");
  const [templateDescription, setTemplateDescription] = useState("");

  const [showQuestionPopup, setShowQuestionPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
    // setViewData(null);
  };

  const { batchId } = useLocation().state || {};

  const closePopup = () => {
    setShowQuestionPopup(false);
    setTemplateName("");
    setTemplateTag("");
    setTemplateDescription("");
  };
  // pagination

  const pageChangeHandle = (pageNO) => {
    axios
      .get(
        `http://localhost:8080/xen/getAssessments?clientId=1&pageNo=${pageNO}&pageSize=5`
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
    axios
      .get(
        "http://localhost:8080/xen/getBatchCandidates?clientId=1&pageNo=1&pageSize=5"
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
    navigate("/job/createJob");
    const user = JSON.parse(localStorage.getItem("token"));
    axios
      .post(
        "http://localhost:8080/xen/addCandidateToBatch?batchId=" + batchId,
        {
          selected,
        }
      )
      .then((data) => console.log(data.data))
      .catch((e) => console.log(e));
  };

  const handleRatingChange = (question, option) => {
    question.selectedOption = option;
    question.selectedOrder = [];
  };

  const handleRankingChnage = (question, option) => {
    const sortedValues = option
      .sort((a, b) => a.number - b.number)
      .map((item) => item.value);

    question.selectedOption = null;
    question.selectedOrder = sortedValues;
    handleNext();
  };

  const handleNext = (e) => {
    e?.preventDefault();
    if (currentQuestion === questionList.length - 1) {
      setShowQuestionPopup(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const RankingQuestion = () => {
    const [error, setError] = useState({ error: false, message: "" });
    const [ans, setAns] = useState([]);

    const handleChange = (value, num) => {
      const existingField = ans.findIndex((field) => field.value === value);
      if (existingField > -1) {
        let newArry = [...ans];
        newArry[existingField].number = num;
        setAns(newArry);
      } else {
        setAns([...ans, { value: value, number: num }]);
      }
    };

    const onSubmit = (e) => {
      e.preventDefault();
      const duplicateNumber = validateArray(ans);
      if (duplicateNumber) {
        setError({
          error: false,
          message: `Error: Duplicate number found `,
        });
        handleRankingChnage(IcpTemplateQuestion, ans);
        setAns([]);
      }
    };

    function validateArray(array) {
      const numberSet = new Set();
      for (let i = 0; i < array.length; i++) {
        if (numberSet.has(array[i].number)) {
          setError({
            error: true,
            message: `Error: Duplicate number found - ${array[i].number}`,
          });
          return false;
        }
        numberSet.add(array[i].number);
      }
      return true;
    }

    return (
      <form onSubmit={onSubmit} className="py-5">
        <div className="border p-3">
          <p style={{ color: "#101828", fontWeight: 500, fontSize: 14 }}>
            {IcpTemplateQuestion.question}
          </p>
        </div>
        {/* question options */}
        <div className="mb-5">
          {IcpTemplateQuestion.options.map((value, index) => {
            return (
              <div
                className="border p-2 flex justify-between items-center"
                key={index}>
                <p
                  style={{
                    color: "#475467",
                    fontSize: 14,
                    textTransform: "none",
                  }}>
                  {value}
                </p>
                <TextField
                  onChange={(e) => handleChange(value, e.target.value)}
                  required
                  type="number"
                  size="small"
                  sx={{ minWidth: 80, maxWidth: 100 }}
                  InputProps={{
                    inputProps: {
                      max: IcpTemplateQuestion.options.length,
                      min: 1,
                    },
                  }}
                />
              </div>
            );
          })}
        </div>
        {error.error && (
          <Alert variant="filled" severity="error">
            {error.message}
          </Alert>
        )}
        {/* button */}
        <div className="flex justify-end mt-5 gap-4">
          <Button variant="contained" type="submit" sx={{ bgcolor: "#008080" }}>
            {currentQuestion === questionList.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    );
  };

  const RatingQuestion = () => {
    return (
      <form onSubmit={handleNext} className="py-5">
        <div className="border p-3">
          <p style={{ color: "#101828", fontWeight: 500, fontSize: 14 }}>
            {IcpTemplateQuestion.question}
          </p>
        </div>
        {/* question options */}
        <div className="border">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={IcpTemplateQuestion?.selectedOption}
            onChange={(e) => {
              handleRatingChange(IcpTemplateQuestion, e.target.value);
            }}
            name="radio-buttons-group">
            {IcpTemplateQuestion.options.map((data, index) => {
              return (
                <div className="border px-2 py-1" key={index}>
                  <FormControlLabel
                    required
                    key={index}
                    value={data}
                    control={
                      <Radio
                        sx={{
                          color: "#D0D5DD",
                          " &.Mui-checked": {
                            color: "#66B2B2",
                          },
                        }}
                      />
                    }
                    sx={{
                      ".MuiFormControlLabel-asterisk": {
                        display: "none",
                      },
                    }}
                    label={
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 14,
                          textTransform: "none",
                        }}>
                        {data}
                      </p>
                    }
                  />
                </div>
              );
            })}
          </RadioGroup>
        </div>
        {/* button */}
        <div className="flex justify-end mt-4 gap-4">
          <Button variant="contained" type="submit" sx={{ bgcolor: "#008080" }}>
            {currentQuestion === questionList.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    );
  };

  const handleSubmitData = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    navigate("/job/createJob");
    const jobId = localStorage.getItem("jobId");
    axios
      .post(
        `http://localhost:8080/xen/saveIcpTemplateForJob?clientId=${user.userId}&jobId=${jobId}`,
        { questionList, templateName, templateDescription },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
              Choose an option for Ideal Candidate Persona
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
              {actions === "ICP template" && (
                <div>
                  <div>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 22,
                        fontWeight: 700,
                      }}>
                      Choose Ideal Candidate Persona Templates
                    </p>
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 14,
                        fontWeight: 400,
                      }}>
                      Please choose Ideal Candidate Persona template from the
                      available options.
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
                                          navigate("/job/icpResult", {
                                            state: row,
                                          });
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

                    <div className="py-8 gap-8 flex justify-end">
                      <Button
                        onClick={handleSubmitTemplate}
                        variant="contained"
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#008080",
                        }}>
                        CONFIRM
                      </Button>
                    </div>
                  </div>
                  <ValuesPopup
                    open={showPopup}
                    data={viewData}
                    setClose={handleClose}
                  />
                </div>
              )}
              {actions === "ICP Analysis" && (
                <div>
                  <div className="flex gap-2 items-center py-5">
                    <p
                      style={{
                        color: "#008080",
                        fontWeight: 500,
                        fontSize: 14,
                      }}>
                      Ideal Candidate Persona
                    </p>
                    <FaArrowRight style={{ fontSize: 16, color: "#D0D5DD" }} />
                    <p
                      style={{
                        color: currentSection > 0 ? "#008080" : "#475467",
                        fontWeight: 500,
                        fontSize: 14,
                      }}>
                      Questions
                    </p>

                    <FaArrowRight style={{ fontSize: 16, color: "#D0D5DD" }} />
                    <p
                      style={{
                        color: currentSection > 1 ? "#008080" : "#475467",
                        fontWeight: 500,
                        fontSize: 14,
                      }}>
                      Submit Assessment Confirmation
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 22,
                        fontWeight: 600,
                      }}>
                      Choose Ideal Candidate Persona Templates from the existing
                      options
                    </p>
                    <p style={{ color: "#475467", fontSize: 14 }}>
                      Please review and edit the information as needed, or use
                      the same template. Also choose which option is suitable
                      for you.
                    </p>
                  </div>
                  <div className="mt-4">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 14,
                        textAlign: "right",
                      }}>
                      Statement {currentQuestion + 1}/{questionList.length}
                    </p>
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 14,
                        fontWeight: 500,
                        marginTop: 10,
                      }}>
                      Statement {currentQuestion + 1}
                    </p>
                  </div>
                  {/* questions */}
                  {IcpTemplateQuestion?.questionType === "RANKING" && (
                    <RankingQuestion />
                  )}
                  {IcpTemplateQuestion?.questionType === "RATING" && (
                    <RatingQuestion />
                  )}

                  {/* popup */}
                  <Dialog open={showQuestionPopup} onClose={closePopup}>
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
                            Job Template Name
                          </p>
                          <TextField
                            size="small"
                            disablePortal
                            value={templateName}
                            onChange={(e) => setTemplateName(e.target.value)}
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
                            Job Template Tags
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
                          Job Template Description
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
                        style={{ color: "#475467", borderColor: "#D0D5DD" }}>
                        cancel
                      </Button>
                      <Button
                        onClick={handleSubmitData}
                        variant="contained"
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#008080",
                        }}>
                        SAVE
                      </Button>
                    </DialogActions>
                  </Dialog>
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