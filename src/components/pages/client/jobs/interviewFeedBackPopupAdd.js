import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import axiosInstance from "../../../utils/axiosInstance";

export const InterviewFeedBackPopupAdd = ({ setClose, open }) => {
  const user = JSON.parse(localStorage.getItem("token"));
  const [createdBy, setCreatedBy] = useState(user.username);
  const [createdDate, setCreatedDate] = useState();
  const [overallRating, setOverallRating] = useState("");
  const [recommendation, setRecommendation] = useState();
  const [recommendationWhy, setRecommendationWhy] = useState("");
  const [experience, setExperience] = useState();
  const [experienceWhy, setExperienceWhy] = useState("");

  const [criticalScroing, setCriticalScoring] = useState([
    { criteria: "", rating: "", comments: "" },
  ]);

  const options = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const yes_no = ["Yes", "No"];

  const addCriticalScroing = () => {
    setCriticalScoring([
      ...criticalScroing,
      {
        criteria: "",
        rating: "",
        comments: "",
      },
    ]);
  };

  const handleChangeCriticalScroing = (e, value, i) => {
    let newFormValues = [...criticalScroing];
    newFormValues[i][e] = value;
    setCriticalScoring(newFormValues);
  };

  const removeCriticalScroing = (i) => {
    let newFormValues = [...criticalScroing];
    newFormValues.splice(i, 1);
    setCriticalScoring(newFormValues);
  };

  const handleSavePopupData = () => {
    //   handleClosePopUp();
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    setCreatedBy(user.username);
    axiosInstance
      .post(`/saveInterviewFeedback?clientId=${user.userId}&jobId=1&candidateId=1`, {
        createdBy,
        createdDate,
        overallRating,
        recommendation,
        recommendationWhy,
        experience,
        experienceWhy,
        criticalScroing,
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((e) => console.log(e));
  };

  const handleClosePopUp = () => {
    setClose();
    setCreatedBy("");
    setCreatedDate();
    setOverallRating("");
    setRecommendation();
    setRecommendationWhy("");
    setExperience();
    setExperienceWhy("");
    setCriticalScoring([{ criteria: "", rating: "", comments: "" }]);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClosePopUp}
      PaperProps={{ sx: { minWidth: "60%" } }}>
      <DialogTitle style={{ color: "#101828" }}>
        Add Interview Feedback
      </DialogTitle>
      <IconButton
        onClick={handleClosePopUp}
        style={{ position: "absolute", top: 10, right: 10 }}>
        <IoIosCloseCircleOutline />
      </IconButton>
      <Divider />
      <DialogContent>
        <div className="py-2 px-4">
          <p style={{ color: "#008080", fontSize: 18, fontWeight: 500 }}>
            Candidate Evaluation Form
          </p>
          <div className="grid grid-cols-2 gap-6 mt-2">
            <div className="grid grid-flow-row">
              <p
                style={{
                  color: "#101828",
                  fontSize: 14,
                  fontWeight: 500,
                }}>
                Created By
              </p>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="type"
                disabled
                value={user.username}
                onChange={(e) => setCreatedBy(e.target.value)}
              />
            </div>
            <div className="grid grid-flow-row">
              <p
                style={{
                  color: "#101828",
                  fontSize: 14,
                  fontWeight: 500,
                }}>
                Created Date
              </p>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                type="date"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
              />
            </div>
            <div className="grid grid-flow-row">
              <p
                style={{
                  color: "#101828",
                  fontSize: 14,
                  fontWeight: 500,
                }}>
                Overall Rating (out of 5)
              </p>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="type"
                value={overallRating}
                onChange={(e) => setOverallRating(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="py-3 px-4">
          <p style={{ color: "#10182870", fontSize: 14, fontWeight: 500 }}>
            What is your overall hiring recommendation?
          </p>
          <div className="grid grid-cols-2 gap-6 my-2">
            <div className="grid grid-flow-row">
              <p
                style={{
                  color: "#101828",
                  fontSize: 14,
                  fontWeight: 500,
                }}>
                Recommendation
              </p>
              <Autocomplete
                size="small"
                disablePortal
                options={yes_no}
                value={recommendation || null}
                onChange={(e, newvalue) => setRecommendation(newvalue)}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select" />
                )}
              />
            </div>
            <div className="grid grid-flow-row">
              <p
                style={{
                  color: "#101828",
                  fontSize: 14,
                  fontWeight: 500,
                }}>
                Why?
              </p>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="type"
                value={recommendationWhy}
                onChange={(e) => setRecommendationWhy(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="py-3 px-4">
          <p style={{ color: "#10182870", fontSize: 14, fontWeight: 500 }}>
            Does the candidate have the needed experience?
          </p>
          <div className="grid grid-cols-2 gap-6 my-2">
            <div className="grid grid-flow-row">
              <p
                style={{
                  color: "#101828",
                  fontSize: 14,
                  fontWeight: 500,
                }}>
                Experience
              </p>
              <Autocomplete
                size="small"
                disablePortal
                options={yes_no}
                value={experience || null}
                onChange={(e, newvalue) => setExperience(newvalue)}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select" />
                )}
              />
            </div>
            <div className="grid grid-flow-row">
              <p
                style={{
                  color: "#101828",
                  fontSize: 14,
                  fontWeight: 500,
                }}>
                Why?
              </p>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="type"
                value={experienceWhy}
                onChange={(e) => setExperienceWhy(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="py-2 px-4">
          <p style={{ color: "#008080", fontSize: 18, fontWeight: 500 }}>
            Individual Criteria Scoring
          </p>
          {criticalScroing.map((row, index) => {
            return (
              <Card
                sx={{
                  boxShadow: 0,
                  border: 1,
                  borderColor: "#E6E6E650",
                  borderRadius: 2,
                  my: 2,
                }}
                key={index}>
                <div className="py-2 px-4 bg-[#F7FBFB] w-full flex justify-end">
                  {criticalScroing.length > 1 && (
                    <Button
                      onClick={() => removeCriticalScroing(index)}
                      size="small"
                      style={{ color: "#E05880", textTransform: "none" }}>
                      Delete
                    </Button>
                  )}
                </div>
                <div className="px-4 py-2 bg-[#FBFCFE40]">
                  <div className="grid grid-cols-2 gap-6 my-2">
                    <div className="grid grid-flow-row">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 500,
                        }}>
                        Criteria
                      </p>
                      <Autocomplete
                        size="small"
                        disablePortal
                        options={options.map((option) => option.label)}
                        value={row?.criteria}
                        onChange={(e, newvalue) => {
                          handleChangeCriticalScroing(
                            "criteria",
                            newvalue,
                            index
                          );
                        }}
                        renderInput={(params) => (
                          <TextField {...params} placeholder="Select" />
                        )}
                      />
                    </div>
                    <div className="grid grid-flow-row">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 500,
                        }}>
                        Rating (out of 5)
                      </p>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="type"
                        value={row?.rating}
                        onChange={(e) => {
                          handleChangeCriticalScroing(
                            "rating",
                            e.target.value,
                            index
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-flow-row py-2">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Comments
                    </p>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      placeholder="type"
                      value={row?.comments}
                      onChange={(e) => {
                        handleChangeCriticalScroing(
                          "comments",
                          e.target.value,
                          index
                        );
                      }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
          <div className="p-4 w-full flex justify-end">
            <Button
              onClick={() => addCriticalScroing()}
              size="small"
              style={{ color: "#008080", textTransform: "none" }}
              startIcon={<GoPlus />}>
              Add New
            </Button>
          </div>
        </div>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button
          onClick={handleClosePopUp}
          variant="outlined"
          style={{ color: "#475467", borderColor: "#D0D5DD" }}>
          cancel
        </Button>
        <Button
          onClick={handleSavePopupData}
          variant="contained"
          style={{
            color: "#ffffff",
            backgroundColor: "#008080",
          }}>
          SAVE
        </Button>
      </DialogActions>
    </Dialog>
  );
};
