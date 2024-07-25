import React, { useState } from "react";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { CiEdit } from "react-icons/ci";
import { Footer } from "../../../widgets/footer";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { ScreeningQuestionsData } from "../../../dummy/Data";
import axiosInstance from "../../../utils/axiosInstance";
import { useEffect } from "react";
import Spinner from "../../../utils/spinner";

export const ScreeningQuestions = () => {
  const [questions, setQuestions] = useState(ScreeningQuestionsData);
  const [proceed, setproceed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editedQuestionId, setEditedQuestionId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [jd, setJd] = useState("");

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("token"));
  //     axiosInstance
  //       .get(`/getJD?clientId=${user.userId}&jobId=1`)
  //       .then((response) => {
  //         console.log(response.data);
  //         setJd(response.data)
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  // }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    //setLoading(true);
    axiosInstance
      .get(`/getJobScreeningQuestions?clientId=${user.userId}&jobId=1`)
      .then((response) => {
        console.log(response.data);

        if (
          response.data?.proceed === false &&
          response.data?.questions.length === 0
        ) {
          getQuestions();
          //setLoading(false);
        } else {
          setQuestions(response.data?.questions);
          setproceed(response.data?.proceed);
        }
      })
      .catch((e) => {
        console.log(e);
        //setLoading(false);
      });
  }, []);

  const getQuestions = () => {
    let job_title = "Tech Lead";
    const user = JSON.parse(localStorage.getItem("token"));
    //setLoading(true);
    axiosInstance
      .get(`/getJD?clientId=${user.userId}&jobId=1`)
      .then((response) => {
        console.log(response.data);
        job_title = response.data;
      })
      .catch((e) => {
        console.log(e);
        //setLoading(false);
      });
    setLoading(true);
    axiosInstance
      .post(
        `https://xenflexer.northcentralus.cloudapp.azure.com/api/questions/`,
        { job_title }
      )
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data?.screening_questions);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  const onSubmit = () => {
    console.log(questions);
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .post(`/saveJobScreeningQuestions?clientId=${user.userId}&jobId=1`, {
        questions,
        proceed,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleEditClick = (id, text) => {
    setEditedQuestionId(id);
    setEditedText(text);
  };

  // Function to handle the change in the input field
  const handleChange = (event) => {
    setEditedText(event.target.value);
  };

  // Function to handle the save button click
  const handleSaveClick = (id) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, question: editedText } : question
      )
    );
    setEditedQuestionId(null);
    setEditedText("");
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          {loading ? (
            <Spinner />
          ) : (
            <div className="p-8">
              <div className="py-5 flex justify-between items-center">
                <div>
                  <p
                    style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                    Screening Questions
                  </p>
                  <p
                    style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                    Please fill in the information as needed, or use the
                    existing template.
                  </p>
                </div>
                {proceed === false && (
                  <div className="py-8 gap-4 flex justify-end">
                    <Button
                      onClick={getQuestions}
                      variant="outlined"
                      style={{ color: "#ffffff", backgroundColor: "#008080" }}>
                      Regenerate
                    </Button>
                  </div>
                )}
              </div>
              <div>
                {questions?.map((data, index) => {
                  return (
                    <div
                      className="flex justify-between gap-6 py-4"
                      key={index}>
                      <div className="flex gap-3 w-full">
                        <p
                          style={{
                            color: "#3C3C43",
                            fontSize: 25,
                            fontWeight: 600,
                          }}>
                          {index + 1}
                        </p>
                        {editedQuestionId === data?.id ? (
                          <div className="w-full">
                            <TextField
                              fullWidth
                              size="small"
                              multiline
                              value={editedText}
                              onChange={handleChange}
                            />
                          </div>
                        ) : (
                          <p
                            style={{
                              color: "#101828",
                              fontSize: 16,
                            }}>
                            {data.question}
                          </p>
                        )}
                      </div>

                      <div>
                        {editedQuestionId === data?.id ? (
                          <Button
                            size="small"
                            style={{
                              color: "#008080",
                              textTransform: "none",
                              backgroundColor: "#EAF4F5",
                            }}
                            onClick={() => {
                              handleSaveClick(data?.id);
                            }}>
                            Save
                          </Button>
                        ) : (
                          <Button
                            size="small"
                            variant="text"
                            style={{ color: "#1E90FF", textTransform: "none" }}
                            endIcon={<CiEdit />}
                            onClick={() => {
                              handleEditClick(data?.id, data?.question);
                            }}>
                            Edit
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <FormControlLabel
                value={proceed}
                onChange={(e) => setproceed(e.target.checked)}
                control={
                  <Checkbox
                    sx={{
                      color: "#4EAF51",
                      "&.Mui-checked": {
                        color: "#4EAF51",
                      },
                    }}
                    checked={proceed}
                  />
                }
                label={
                  <p
                    style={{
                      color: "#4EAF51",
                      fontSize: 16,
                    }}>
                    Are you sure you want to proceed with these questions
                  </p>
                }
              />
              <div className="flex justify-end py-4">
                <Button
                  size="small"
                  variant="contained"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#008080",
                  }}
                  onClick={onSubmit}>
                  Save
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
