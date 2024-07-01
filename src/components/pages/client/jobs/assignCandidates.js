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
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { Footer } from "../../../widgets/footer";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { candidateListData } from "../../../dummy/Data";
import { IoSearchOutline } from "react-icons/io5";

export const AssignCandidates = () => {
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

  const { batchId } = useLocation().state || {};

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

  // pagination

  const pageChangeHandle = (pageNO) => {
    const user = JSON.parse(localStorage.getItem("token"));
    axios
      .get(
        `http://localhost:8080/xen/getBatchCandidates?clientId=${user.userId}&pageNo=${pageNO}&pageSize=5`
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
    const user = JSON.parse(localStorage.getItem("token"));
    axios
      .get(
        `http://localhost:8080/xen/getBatchCandidates?clientId=${user.userId}&pageNo=1&pageSize=5`
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
    axios
      .post(
        `http://localhost:8080/xen/addCandidateToJob?clientId=${user.userId}&jobId=${jobId}`,
        {
          addCandidateDatabase,
          candidateName,
          candidateEmail,
          candidateNo,
          candidateLinkedin,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        const formData = new FormData();
        formData.append("file", candidateResume)
        axios
          .post(
            `http://localhost:8080/xen/uploadCandidateResume?candidateId=${data.data.userId}`,
             formData,
             {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            }
          )
          .then((response) => {
            navigate("/job/createJob");
          })
          
      })
      .catch((e) => console.log(e));
  };


  const handleAssignCandidate = (selected) => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axios
      .post(
        `http://localhost:8080/xen/assignCandidatesToJob?clientId=${user.userId}&jobId=${jobId}`,
         selected,
         {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((data) => {
        console.log(data.data)
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
              Choose an option for Adding or Assigning Candidates
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
              {actions === "Assign Candidate" && (
                <div>
                  <p
                    style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                    Assign Candidate List
                  </p>
                  <p
                    style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                    Listed below are the details regarding each candidate.
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
                      onClick={() => {}}>
                      Add Candidate
                    </Button>
                  </div>
                  <Box sx={{ width: "100%" }}>
                    <Paper sx={{ width: "100%", mb: 2 }}>
                      <TableContainer sx={{ maxHeight: 500 }}>
                        <Table stickyHeader>
                          <TableHead>
                            <TableRow>
                              <TableCell
                                padding="checkbox"
                                sx={{ bgcolor: "#F8F9FA" }}>
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
                                sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                                Candidate Names
                              </TableCell>
                              <TableCell
                                sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                                Email Address
                              </TableCell>
                              <TableCell
                                sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                                Phone Number
                              </TableCell>
                              <TableCell
                                sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                                LinkedIn Id
                              </TableCell>
                              <TableCell
                                sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                                Resume
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data?.data?.map((row, index) => {
                              const isItemSelected = isSelected(row);
                              return (
                                <TableRow
                                  hover
                                  role="checkbox"
                                  aria-checked={isItemSelected}
                                  tabIndex={-1}
                                  key={index}
                                  selected={isItemSelected}
                                  sx={{ cursor: "pointer" }}>
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
                                  <TableCell sx={{ color: "#475467" }}>
                                    {row.name}
                                  </TableCell>
                                  <TableCell sx={{ color: "#475467" }}>
                                    {row.emailId}
                                  </TableCell>
                                  <TableCell sx={{ color: "#475467" }}>
                                    {row.mobileNo}
                                  </TableCell>
                                  <TableCell sx={{ color: "#475467" }}>
                                    {row.linkedIn}
                                  </TableCell>
                                  <TableCell
                                    padding="none"
                                    sx={{ color: "#475467" }}>
                                    <Button
                                      size="small"
                                      style={{
                                        color: "#28A745",
                                        fontSize: 14,
                                        textTransform: "none",
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
                      onClick={() => {
                        navigate(-1);
                      }}
                      variant="outlined"
                      style={{ borderColor: "#D0D5DD", color: "#475467" }}>
                      Cancle
                    </Button>
                    <Button
                      onClick={() => {
                        {
                         handleAssignCandidate(selected);
                        }
                      }}
                      variant="contained"
                      style={{ backgroundColor: "#008080", color: "#ffffff" }}>
                      Confirm
                    </Button>
                  </div>
                </div>
              )}
              {actions === "Add Candidate" && (
                <div>
                  <div className="pt-5 pb-3">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 22,
                        fontWeight: 600,
                      }}>
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
                          }}>
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
                          }}>
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
                          }}>
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
                          }}>
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
                        }}>
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
                          }>
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
                      onChange={(e) =>
                        setAddCandidateDatabase(e.target.checked)
                      }
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
                          Are you sure you want to add this candidate to
                          database?
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
                      style={{ borderColor: "#D0D5DD", color: "#475467" }}>
                      Cancle
                    </Button>
                    <Button
                      onClick={handleAddAsignment}
                      variant="contained"
                      style={{ backgroundColor: "#008080", color: "#ffffff" }}>
                      Confirm
                    </Button>
                  </div>
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
