import React, { useState } from "react";
import { Footer } from "../../../widgets/footer";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { ScreeningQuestionsData } from "../../../dummy/Data";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { CiEdit } from "react-icons/ci";

export const ScreeningQuestions = () => {
  const [questions, setQuestions] = useState(ScreeningQuestionsData);
  const [proceed, setproceed] = useState(false);

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                Screening Questions
              </p>
              <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                Please fill in the information as needed, or use the existing
                template.
              </p>
            </div>
            <div>
              {questions?.map((data, index) => {
                return (
                  <div className="flex justify-between gap-6 py-4">
                    <div className="flex gap-3 ">
                      <p
                        style={{
                          color: "#3C3C43",
                          fontSize: 25,
                          fontWeight: 600,
                        }}>
                        {index + 1}
                      </p>
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                        }}>
                        {data}
                      </p>
                    </div>
                    <div>
                      <Button
                        size="small"
                        variant="text"
                        style={{ color: "#1E90FF", textTransform: "none" }}
                        endIcon={<CiEdit />}>
                        Edit
                      </Button>
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
                }}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
