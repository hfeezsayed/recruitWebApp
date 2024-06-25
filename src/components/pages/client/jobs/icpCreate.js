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
import { TopNav } from "../../../widgets/topNav";
import { QUESTIONS } from "../../../dummy/Data";
import { Footer } from "../../../widgets/footer";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { useEffect } from 'react';

export const IcpCreate = () => {
  const [questionList, setQuestionList] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);
  const IcpTemplateQuestion = questionList[currentQuestion];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    axios
      .get(
        "http://localhost:8080/xen/getClientQuestionnaire",
        {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
      )
      .then((data) => {
        console.log(data);
        setQuestionList(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);



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

  const handleSubmitData = async () => {
    console.log(questionList);
    const user = JSON.parse(localStorage.getItem("token"));
    axios
      .post(`http://localhost:8080/xen/saveIcpTemplate?clientId=${user.userId}`, 
        questionList,
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

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div className="flex gap-2 items-center py-5">
              <p style={{ color: "#008080", fontWeight: 500, fontSize: 14 }}>
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
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Choose Ideal Candidate Persona Templates from the existing
                options
              </p>
              <p style={{ color: "#475467", fontSize: 14 }}>
                Please review and edit the information as needed, or use the
                same template. Also choose which option is suitable for you.
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
            {IcpTemplateQuestion?.questionType === "RANKING" && (
              <RankingQuestion />
            )}
            {IcpTemplateQuestion?.questionType === "RATING" && (
              <RatingQuestion />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
