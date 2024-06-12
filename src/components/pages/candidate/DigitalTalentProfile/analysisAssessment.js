import React, { useState } from "react";
import {
  Alert,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import { SideNav } from "../../../widgets/sidenav";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";
import { QUESTIONS } from "../../../dummy/Data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AnalysisAssessment = () => {
  const [questionList, setQuestionList] = useState(QUESTIONS);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);
  const AnalysisAssessmentQuestion = questionList[currentQuestion];
  const navigate = useNavigate();

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
      handleSubmitData();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  useEffect( () => {
      const user = JSON.parse(localStorage.getItem("token"));
      axios.get("http://localhost:8080/xen/getCandidateQuestionnaire?candidateId="+user.userId+"&versionNo=-1")
      .then(response => {
          setQuestionList(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const handleSubmitData = async () => {
    console.log(questionList);
    const user = JSON.parse(localStorage.getItem("token"));
    axios
      .post("http://localhost:8080/xen/saveCandidateAssessment?candidateId="+user.userId, questionList)
      .then((data) => {
        console.log(data.data);
        navigate("/digitalTalentProfile/talentanalysisresult", { state: { version: data.data.versionNo } });
      })
      .catch((error) => console.log(error));
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
        handleRankingChnage(AnalysisAssessmentQuestion, ans);
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
            {AnalysisAssessmentQuestion.question}
          </p>
        </div>
        {/* question options */}
        <div className="mb-5">
          {AnalysisAssessmentQuestion.options.map((value, index) => {
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
                      max: AnalysisAssessmentQuestion.options.length,
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
          {/* {!(currentQuestion === 0) && (
            <Button
              variant="contained"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              sx={{ bgcolor: "#008080" }}>
              Back
            </Button>
          )} */}
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
            {AnalysisAssessmentQuestion.question}
          </p>
        </div>
        {/* question options */}
        <div className="border">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={AnalysisAssessmentQuestion?.selectedOption}
            onChange={(e) => {
              handleRatingChange(AnalysisAssessmentQuestion, e.target.value);
            }}
            name="radio-buttons-group">
            {AnalysisAssessmentQuestion.options.map((data, index) => {
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
          {/* {!(currentQuestion === 0) && (
            <Button
              variant="contained"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              sx={{ bgcolor: "#008080" }}>
              Back
            </Button>
          )} */}
          <Button variant="contained" type="submit" sx={{ bgcolor: "#008080" }}>
            {currentQuestion === questionList.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    );
  };

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div className="flex gap-2 items-center py-5">
              <p style={{ color: "#008080", fontWeight: 500, fontSize: 14 }}>
                Talent Spectrum Assessment
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
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Talent Spectrum Analysis Assessment
              </p>
              <p style={{ color: "#475467", fontSize: 14 }}>
                Please carefully review the following statements and select the
                one that best represents your response. There are no right or
                wrong answers; this test is designed to help understand your
                individual preferences and priorities in the workplace.
              </p>
            </div>
            <div className="mt-4">
              <p style={{ color: "#101828", fontSize: 14, textAlign: "right" }}>
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
            {AnalysisAssessmentQuestion?.questionType === "RANKING" && (
              <RankingQuestion />
            )}
            {AnalysisAssessmentQuestion?.questionType === "RATING" && (
              <RatingQuestion />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
