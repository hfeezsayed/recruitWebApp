import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Pagination,
  Radio,
  Select,
  TextField,
  styled,
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
import axiosInstance from "../../../../utils/axiosInstance";
import { useLocation } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { Footer } from "../../../../widgets/footer";
import { AdminSideNav } from "../../../../widgets/adminSideNav";
import { TopNav } from "../../../../widgets/topNav";
import { candidateListData } from "../../../../dummy/Data";
import { IoSearchOutline } from "react-icons/io5";

export const CreateCandidates = () => {
  const navigate = useNavigate();
  const [actions, setActions] = useState("");
  const options = ["Assign Candidate", "Add Candidate"];
  const [search, setSearch] = useState("");
  const [selected, setSelected] = React.useState([]);
  const [data, setData] = useState(candidateListData);
  const [page, setPage] = React.useState(1);

  const [addCandidateDatabase, setAddCandidateDatabase] = useState(false);
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidateNo, setCandidateNo] = useState("");
  const [candidateLinkedin, setCandidateLinkedin] = useState("");
  const [candidateResume, setCandidateResume] = useState();

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleAddAsignment = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axiosInstance
      .post(`/addCandidateToJob?clientId=${user.userId}&jobId=0`, {
        addCandidateDatabase,
        candidateName,
        candidateEmail,
        candidateNo,
        candidateLinkedin,
      })
      .then((data) => {
        console.log(data.data);
        const formData = new FormData();
        formData.append("file", candidateResume);
        axiosInstance
          .post(
            `/uploadCandidateResume?candidateId=${data.data.userId}`,
            formData
          )
          .then((response) => {
            navigate("/clientAssignedCandidates");
          });
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="flex">
        <AdminSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div className="pt-5 pb-3">
              <p
                style={{
                  color: "#101828",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                Add Candidate
              </p>
              <p style={{ color: "#475467", fontSize: 14 }}>
                Please fill in the candidate information as needed
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-8">
                <div className="grid grid-flow-row gap-1">
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Candidate Name
                  </p>
                  <TextField
                    size="small"
                    fullWidth
                    placeholder="Type"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                  />
                </div>
                <div className="grid grid-flow-row gap-1">
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Email Address
                  </p>
                  <TextField
                    size="small"
                    fullWidth
                    type="email"
                    placeholder="Type"
                    value={candidateEmail}
                    onChange={(e) => setCandidateEmail(e.target.value)}
                  />
                </div>
                <div className="grid grid-flow-row gap-1">
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Phone Number
                  </p>
                  <TextField
                    size="small"
                    fullWidth
                    type="tel"
                    placeholder="Type"
                    value={candidateNo}
                    onChange={(e) => setCandidateNo(e.target.value)}
                  />
                </div>
                <div className="grid grid-flow-row gap-1">
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    LinkedIn Profile
                  </p>
                  <TextField
                    size="small"
                    fullWidth
                    type="url"
                    placeholder="Type"
                    value={candidateLinkedin}
                    onChange={(e) => setCandidateLinkedin(e.target.value)}
                  />
                </div>
              </div>
              <div className="pt-8">
                <p
                  style={{
                    color: "#475467",
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  Upload Resume
                </p>
                <div className="flex gap-5 items-center">
                  <Button
                    component="label"
                    variant="text"
                    size="small"
                    style={{
                      color: "#404040",
                      marginTop: 10,
                      borderRadius: 8,
                    }}
                    startIcon={
                      <FiUpload
                        style={{
                          color: "#2C2466",
                          fontWeight: 800,
                          fontSize: 30,
                        }}
                      />
                    }
                  >
                    Attach, Dropbox, or enter manually
                    <br />
                    File type: pdf, doc, docx, txt,rtf (Less than 25 MB)
                    <VisuallyHiddenInput
                      type="file"
                      accept="image/jpeg,image/png,application/pdf"
                      onChange={(e) => setCandidateResume(e.target.files[0])}
                    />
                  </Button>
                  {candidateResume?.name && (
                    <p className=" font-semibold text-slate-800">
                      {candidateResume?.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="py-2 grid grid-flow-row">
              <FormControlLabel
                checked={addCandidateDatabase}
                onChange={(e) => setAddCandidateDatabase(e.target.checked)}
                control={
                  <Checkbox
                    sx={{
                      color: "#D0D5DD",
                      "&.Mui-checked ": {
                        color: "#66B2B2",
                      },
                    }}
                  />
                }
                label={
                  <p style={{ color: "#475467", fontSize: 14 }}>
                    Are you sure you want to add this candidate to database?
                  </p>
                }
              />
            </div>
            <div className="flex justify-end py-5 gap-5">
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                variant="outlined"
                style={{ borderColor: "#D0D5DD", color: "#475467" }}
              >
                Cancle
              </Button>
              <Button
                onClick={handleAddAsignment}
                variant="contained"
                style={{ backgroundColor: "#008080", color: "#ffffff" }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
        <footer />
      </div>
    </div>
  );
};
