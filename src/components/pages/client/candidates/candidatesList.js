import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import {
  Button,
  InputAdornment,
  Pagination,
  TextField,
  Checkbox,
  styled,
  FormControlLabel,
} from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axiosInstance from "../../../utils/axiosInstance";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
//icon
import { FiUpload } from "react-icons/fi";

export const CandidatesList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = useState("");
  const user = JSON.parse(localStorage.getItem("token"));
  const [selected, setSelected] = useState([]);

  const [addCandidateDatabase, setAddCandidateDatabase] = useState(false);
  const [actions, setActions] = useState("Assign Candidate");
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidateNo, setCandidateNo] = useState("");
  const [candidateLinkedin, setCandidateLinkedin] = useState("");
  const [candidateResume, setCandidateResume] = useState();

  const { batchId } = useLocation().state || {};

  //for file upload
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

  //Add to candiate
  const handleAddAsignment = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axiosInstance
      .post(`/addCandidateToJob?clientId=${user.userId}&jobId=${jobId}`, {
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
            navigate("/job/createJob");
          });
      })
      .catch((e) => console.log(e));
  };

  //select row start
  const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (row) => selected.indexOf(row) !== -1;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data?.data || [];
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleAssignCandidate = (selected) => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axiosInstance
      .post(
        `/assignCandidatesToJob?clientId=${user.userId}&jobId=${jobId}`,
        selected
      )
      .then((data) => {
        console.log(data.data);
      })
      .catch((e) => console.log(e));
  };
  //select row end

  //Pagination start
  // pagination
  const pageChangeHandle = (pageNO) => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .get(
        `/getBatchCandidates?clientId=${user.userId}&pageNo=${pageNO}&pageSize=5`
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
  //Pagination end

  //Candidate list API start
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .get(`/getBatchCandidates?clientId=${user.userId}&pageNo=1&pageSize=5`)
      .then((data) => {
        console.log("Assign candidates----", data);
        setData(data.data);
        setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //Candidate list API End

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div>
            {actions === "Assign Candidate" && (
              <div className="p-10">
                <div>
                  <p
                    style={{
                      color: "#101828",
                      fontSize: 22,
                      fontWeight: 700,
                    }}
                  >
                    Assign Candidate List
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
                    <Button
                      variant="text"
                      style={{
                        color: "#008080",
                        backgroundColor: "#EAF4F5",
                        textTransform: "none",
                      }}
                      onClick={() => setActions("Add Candidate")}
                    >
                      Add Candidate
                    </Button>
                  </div>
                  <Box sx={{ width: "100%" }}>
                    <Paper
                      sx={{
                        width: "100%",
                        mb: 2,
                      }}
                    >
                      <TableContainer
                        sx={{
                          maxHeight: 500,
                        }}
                      >
                        <Table stickyHeader>
                          <TableHead>
                            <TableRow>
                              <TableCell
                                padding="checkbox"
                                sx={{
                                  bgcolor: "#F8F9FA",
                                }}
                              >
                                <Checkbox
                                  color="primary"
                                  indeterminate={
                                    selected.length > 0 &&
                                    selected.length < data?.data?.length
                                  }
                                  checked={
                                    data?.data?.length > 0 &&
                                    selected.length === data?.data?.length
                                  }
                                  onChange={handleSelectAllClick}
                                  sx={{
                                    color: "#D0D5DD",
                                    "&.Mui-checked ": {
                                      color: "#66B2B2",
                                    },
                                  }}
                                />
                              </TableCell>
                              <TableCell
                                sx={{
                                  bgcolor: "#F8F9FA",
                                  color: "#101828",
                                }}
                              >
                                Candidate Names
                              </TableCell>
                              <TableCell
                                sx={{
                                  bgcolor: "#F8F9FA",
                                  color: "#101828",
                                }}
                              >
                                Email Address
                              </TableCell>
                              <TableCell
                                sx={{
                                  bgcolor: "#F8F9FA",
                                  color: "#101828",
                                }}
                              >
                                Phone Number
                              </TableCell>
                              <TableCell
                                sx={{
                                  bgcolor: "#F8F9FA",
                                  color: "#101828",
                                }}
                              >
                                LinkedIn Id
                              </TableCell>
                              <TableCell
                                sx={{
                                  bgcolor: "#F8F9FA",
                                  color: "#101828",
                                }}
                              >
                                Resume
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data?.data
                              ?.filter((item) =>
                                item.name
                                  .toLowerCase()
                                  .includes(search.toLowerCase())
                              )
                              .map((row, index) => {
                                const isItemSelected = isSelected(row);
                                return (
                                  <TableRow
                                    hover
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={index}
                                    selected={isItemSelected}
                                    sx={{
                                      cursor: "pointer",
                                    }}
                                  >
                                    <TableCell padding="checkbox">
                                      <Checkbox
                                        color="primary"
                                        checked={isItemSelected}
                                        onClick={(event) =>
                                          handleClick(event, row)
                                        }
                                        sx={{
                                          color: "#D0D5DD",
                                          "&.Mui-checked": {
                                            color: "#66B2B2",
                                          },
                                        }}
                                      />
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        color: "#475467",
                                      }}
                                    >
                                      {row.name}
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        color: "#475467",
                                      }}
                                    >
                                      {row.emailId}
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        color: "#475467",
                                      }}
                                    >
                                      {row.mobileNo}
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        color: "#475467",
                                      }}
                                    >
                                      {row.linkedIn}
                                    </TableCell>
                                    <TableCell
                                      padding="none"
                                      sx={{
                                        color: "#475467",
                                      }}
                                    >
                                      <Button
                                        size="small"
                                        style={{
                                          color: "#28A745",
                                          fontSize: 14,
                                          textTransform: "none",
                                        }}
                                      >
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
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 14,
                        }}
                      >
                        Showing {data?.totalCount} results found
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

                  <div className="flex justify-end py-5 gap-5">
                    <Button
                      onClick={() => setActions("Add Candidate")}
                      variant="outlined"
                      style={{
                        borderColor: "#D0D5DD",
                        color: "#475467",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        {
                          handleAssignCandidate(selected);
                        }
                      }}
                      variant="contained"
                      style={{
                        backgroundColor: "#008080",
                        color: "#ffffff",
                      }}
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {actions === "Add Candidate" && (
              <div className="p-10">
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
                          onChange={(e) =>
                            setCandidateResume(e.target.files[0])
                          }
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
                    onClick={() => setActions("Assign Candidate")}
                    variant="outlined"
                    style={{ borderColor: "#D0D5DD", color: "#475467" }}
                  >
                    Cancel
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
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
