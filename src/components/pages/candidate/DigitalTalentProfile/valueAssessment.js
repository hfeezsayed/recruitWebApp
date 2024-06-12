import React, { useState } from "react";
import { Button, Radio, Rating } from "@mui/material";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { SideNav } from "../../../widgets/sidenav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import { ValueAssesmentData, ValuseAssesmentRating } from "../../../dummy/Data";
import { useEffect } from "react";

export const ValueAssessment = () => {
  const navigate = useNavigate();
  const [questionList, setQuestionList] = useState(ValueAssesmentData);
  const [ratingList, setRatingList] = useState(ValuseAssesmentRating);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mostLikelyOption, setMostLikelyOption] = useState({});
  const [leastLikelyOption, setLeastLikelyOption] = useState({});
  const [currentSection, setCurrentSection] = useState(1);
  const ValueAssesmentQuestion = questionList[currentQuestion];

  const handleLeastlike = (question, option) => {
    setLeastLikelyOption({
      ...leastLikelyOption,
      [question.questionNo]: option,
    });
    question.leastLikely = option;
    if (mostLikelyOption[question.questionNo] === option) {
      setMostLikelyOption({
        ...mostLikelyOption,
        [question.questionNo]: "",
      });
      question.mostLikely = "";
    }
  };

  const handleMostlike = (question, option) => {
    setMostLikelyOption({
      ...mostLikelyOption,
      [question.questionNo]: option,
    });
    question.mostLikely = option;
    if (leastLikelyOption[question.questionNo] === option) {
      setLeastLikelyOption({
        ...leastLikelyOption,
        [question.questionNo]: "",
      });
      question.leastLikely = "";
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (ValueAssesmentQuestion) {
      if (
        ValueAssesmentQuestion?.mostLikely &&
        ValueAssesmentQuestion?.leastLikely
      ) {
        if (currentQuestion === questionList.length - 1) {
          setCurrentSection(2);
        } else {
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        }
      }
    }
  };

  const handlePrev = (event) => {
    event.preventDefault();
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleChangeRating = (value, i) => {
    let newFormValues = [...ratingList];
    newFormValues[i].rating = value;
    setRatingList(newFormValues);
  };

  useEffect( () => {
    const user = JSON.parse(localStorage.getItem("token"));
    axios.get("http://localhost:8080/xen/getCandidateValuesQuestionnaire?candidateId="+user.userId)
    .then(response => {
        setQuestionList(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  
  const handleValueSave = async () => {
    console.log("questionsData ", questionList, ratingList);
    const user = JSON.parse(localStorage.getItem("token"));
    // navigate("/analysisassessmentform");
    await axios
      .post("http://localhost:8080/xen/saveCandidateValueAssessment?candidateId="+user.userId, questionList) //ratingList)
      .then(response => {
        console.log(response.data)
        navigate("/digitalTalentProfile/valueassessmentresult", { state: { version: response.data.versionNo } })
  })
      .catch((e) => console.log(e));
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
                Value Assessment
              </p>
              <FaArrowRight style={{ fontSize: 16, color: "#D0D5DD" }} />
              <p
                style={{
                  color: currentSection > 0 ? "#008080" : "#475467",
                  fontWeight: 500,
                  fontSize: 14,
                }}>
                Section 1
              </p>
              <FaArrowRight style={{ fontSize: 16, color: "#D0D5DD" }} />
              <p
                style={{
                  color: currentSection > 1 ? "#008080" : "#475467",
                  fontWeight: 500,
                  fontSize: 14,
                }}>
                Section 2
              </p>
              <FaArrowRight style={{ fontSize: 16, color: "#D0D5DD" }} />
              <p
                style={{
                  color: currentSection > 2 ? "#008080" : "#475467",
                  fontWeight: 500,
                  fontSize: 14,
                }}>
                Submit Assessment Confirmation
              </p>
            </div>
            {currentSection === 1 && (
              <>
                <div>
                  <p
                    style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                    Value Assessment
                  </p>
                  <p style={{ color: "#475467", fontSize: 14 }}>
                    Please thoroughly evaluate and clearly indicate which value
                    you believe should be regarded as the highest priority for
                    immediate attention, as well as those which, while still
                    important, may be considered of lower priority and can be
                    addressed at a later stage.
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
                <form
                  className="grid grid-flow-row justify-start"
                  onSubmit={handleNext}>
                  {/* question */}
                  <div>
                    {/* header */}
                    <div className="grid grid-cols-4 py-2 border-app-tableBorder mt-2">
                      <div className="flex justify-center items-center text-center border w-56">
                        <p
                          style={{
                            color: "#475467",
                            fontWeight: 500,
                            fontSize: 14,
                          }}>
                          Most Like Me
                        </p>
                      </div>
                      <div className="col-span-2 flex justify-center items-center text-center py-2 mx-1 border">
                        <p
                          style={{
                            color: "#008080",
                            fontWeight: 500,
                            fontSize: 14,
                          }}>
                          Self-Direction Value
                        </p>
                      </div>
                      <div className="flex justify-center items-center text-center py-2 border w-56">
                        <p
                          style={{
                            color: "#475467",
                            fontWeight: 500,
                            fontSize: 14,
                          }}>
                          Least Like Me
                        </p>
                      </div>
                    </div>
                    {/* body */}
                    {ValueAssesmentQuestion.options.map((value, index) => {
                      return (
                        <div className="grid grid-cols-4 py-1" key={index}>
                          <div className="flex justify-center items-center text-center border">
                            <Radio
                              required
                              value={
                                mostLikelyOption[
                                  ValueAssesmentQuestion.questionNo
                                ] === value
                              }
                              checked={
                                mostLikelyOption[
                                  ValueAssesmentQuestion.questionNo
                                ] === value
                              }
                              onChange={() =>
                                handleMostlike(ValueAssesmentQuestion, value)
                              }
                              sx={{
                                color: "#D0D5DD",
                                " &.Mui-checked": {
                                  color: "#66B2B2",
                                },
                              }}
                            />
                          </div>
                          <div className="col-span-2 flex justify-center items-center text-center  px-3 mx-1 border">
                            <p
                              style={{
                                color: "#475467",
                                fontSize: 14,
                              }}>
                              {value}
                            </p>
                          </div>
                          <div className="flex justify-center items-center text-center border">
                            <Radio
                              required
                              checked={
                                leastLikelyOption[
                                  ValueAssesmentQuestion.questionNo
                                ] === value
                              }
                              onChange={() =>
                                handleLeastlike(ValueAssesmentQuestion, value)
                              }
                              sx={{
                                color: "#D0D5DD",
                                " &.Mui-checked": {
                                  color: "#66B2B2",
                                },
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* button */}
                  <div className="flex justify-end  gap-4 mt-5">
                    {!(currentQuestion === 0) && (
                      <Button
                        variant="contained"
                        onClick={handlePrev}
                        disabled={currentQuestion === 0}
                        sx={{ bgcolor: "#008080" }}>
                        Back
                      </Button>
                    )}

                    {(currentQuestion < questionList.length -1) ? 
                     (<Button
                      variant="contained"
                      type="submit"
                      sx={{ bgcolor: "#008080" }}>
                      Next
                    </Button>)
                    : ( 
                      <Button
                      variant="contained"
                      style={{ colorL: "#ffffff", backgroundColor: "#008080" }}
                      onClick={handleValueSave}>
                      Submit
                    </Button>
                    )}
                  </div>
                </form>
              </>
            )}
            {currentSection === 2 && (
              <>
                <div>
                  <p
                    style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                    Value Assessment
                  </p>
                  <p style={{ color: "#475467", fontSize: 14 }}>
                    Please carefully evaluate the following statements and
                    indicate their importance to you in a work setting on a
                    scale from 1 to 6. There are no right or wrong answers; this
                    test is designed to help understand your individual
                    preferences and priorities in the workplace.
                  </p>
                </div>
                <div className="mt-10">
                  {/* header */}
                  <div className="grid grid-cols-4 mt-4 border-app-tableBorder border">
                    <div className="flex p-2  items-center ">
                      <p
                        style={{
                          color: "#101828",
                          fontWeight: 500,
                          fontSize: 14,
                        }}>
                        Value
                      </p>
                    </div>
                    <div className="col-span-2 flex p-2  items-center ">
                      <p
                        style={{
                          color: "#101828",
                          fontWeight: 500,
                          fontSize: 14,
                        }}>
                        Statements
                      </p>
                    </div>
                    <div className="flex  items-center p-2">
                      <p
                        style={{
                          color: "#101828",
                          fontWeight: 500,
                          fontSize: 14,
                        }}>
                        Ratings
                      </p>
                    </div>
                  </div>
                  {/* bodey */}
                  {ratingList.map((data, index) => {
                    return (
                      <div
                        className="grid grid-cols-4 border-app-tableBorder border"
                        key={index}>
                        <div className="flex p-2  items-center ">
                          <p
                            style={{
                              color: "#475467",
                              fontSize: 14,
                            }}>
                            {data.value}
                          </p>
                        </div>
                        <div className="col-span-2 flex p-2  items-center ">
                          <p
                            style={{
                              color: "#475467",
                              fontSize: 14,
                            }}>
                            {data.statement}
                          </p>
                        </div>
                        <div className="flex  items-center p-2">
                          <p
                            style={{
                              color: "#101828",
                              fontWeight: 500,
                              fontSize: 14,
                            }}>
                            <Rating
                              value={data?.rating}
                              onChange={(e, newvalue) =>
                                handleChangeRating(newvalue, index)
                              }
                              max={6}
                              sx={{ color: "#66B2B2" }}
                            />
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-end gap-5 py-5">
                  <Button
                    variant="outlined"
                    style={{ color: "#475467", borderColor: "#D0D5DD" }}>
                    Clear
                  </Button>
                  <Button
                    variant="contained"
                    style={{ colorL: "#ffffff", backgroundColor: "#008080" }}
                    onClick={handleValueSave}>
                    Submit
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
