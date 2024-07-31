import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import { ScreeningQuestionsData } from "../../../dummy/Data";
import axiosInstance from "../../../utils/axiosInstance";
import Spinner from "../../../utils/spinner";
import { SideNav } from "../../../widgets/sidenav";

export const ScreeningQuestionsResponse = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(ScreeningQuestionsData);
  const [loading, setLoading] = useState(false);

  const questionChange = (value, index) => {
    let newAray = questions;
    newAray[index].ans = value;

    setQuestions(newAray);
  };

  const onSubmit = () => {
    console.log(questions);
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .post(`/saveJobScreeningQuestions`, {
        questions,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          {loading ? (
            <Spinner />
          ) : (
            <div className="p-8">
              <div className="py-5">
                <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                  Screening Questions
                </p>
                <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                  We kindly request that you take a moment to provide thoughtful
                  responses to the following questions. Your detailed answers
                  will help us better understand your qualifications and
                  suitability for the position:
                </p>
              </div>
              <div className="flex justify-end py-3">
                <p style={{ color: "#008080", fontSize: 14 }}>
                  Date Taken: Jan 10, 2024
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {questions?.map((row, index) => {
                  return (
                    <div key={row.id}>
                      <div className="flex gap-5 items-center py-4">
                        <p
                          style={{
                            color: "#3C3C4350",
                            fontSize: 25,
                            fontWeight: 600,
                          }}>
                          {index + 1}
                        </p>{" "}
                        <p
                          style={{
                            color: "#101828",
                            fontSize: 18,
                            fontWeight: 500,
                          }}>
                          {row?.question}
                        </p>
                      </div>
                      <div>
                        <TextField
                          fullWidth
                          placeholder="Type"
                          size="small"
                          value={row?.ans}
                          variant="standard"
                          onChange={(e) => {
                            questionChange(e.target.value, index);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pb-6 pt-10 gap-5">
                <Button
                  variant="outlined"
                  style={{
                    color: "#475467",
                    borderColor: "#d0d5dd",
                  }}
                  onClick={() => {
                    navigate(-1);
                  }}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#008080",
                  }}
                  onClick={onSubmit}>
                  Confirm
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
