import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  FormControlLabel,
  InputAdornment,
  TextField,
  Autocomplete,
  Pagination,
} from "@mui/material";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";
import { clientAssessmentTableData } from "../../../dummy/Data";

export const AssesmentBatchDetails = () => {
  const navigation = useNavigate();
  //  batch details
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [job, setJob] = useState();
  const [jobId, setJobId] = useState();
  const [activeScreen, setActiveScreen] = useState("batchDetails");

  //  assessments
  const [selected, setSelected] = React.useState([]);
  const [data, setData] = useState(clientAssessmentTableData);
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [allocateAssessments, setAllocateAssessments] = useState(false);

  const options = [
    { label: "The Shawshank Redemption", value: 1 },
    { label: "The Godfather", value: 2 },
    { label: "The Godfather: Part II", value: 3 },
    { label: "The Dark Knight", value: 4 },
    { label: "12 Angry Men", value: 5 },
    { label: "Schindler's List", value: 6 },
    { label: "Pulp Fiction", value: 7 },
  ];

  useEffect( () => {
    const user = JSON.parse(localStorage.getItem("token"));
    axios.get("http://localhost:8080/xen/getAssessments?clientId="+user.userId+"&pageNo=1&pageSize=5")
    .then(response => {
        console.log(response.data.data);
        //setData(response.data.data);
    })
    .catch(error => {
      console.log(error);
    })
}, []);

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  // pagination

  const pageChangeHandle = (pageNO) => {
    setPage(pageNO - 1);
  };

  useEffect(() => {
    setPage(data?.pageNo - 1 || 0);
  }, [data]);

  const PAGECOUNT =
    data.totalCount > 0 ? Math.ceil(data.totalCount / data.pageSize) : 1;

  const visibleRows = React.useMemo(
    () =>
      data?.data.slice(
        page * data.pageSize,
        page * data.pageSize + data.pageSize
      ),
    [page, data.pageSize]
  );

  const handleSubmit = async () => {
    //navigation("/assignCandidate");
    const batchName = name;
    const assessments = selected;
    axios
      .post("http://localhost:8080/xen/saveClientAssessmentBatch", {
        name,
        startDate,
        endDate,
        description,
        job,
        selected,
        allocateAssessments,
      })
      .then((data) => console.log(data.data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          {activeScreen === "batchDetails" && (
            <div className="p-8">
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Assessment Batch Details
              </p>
              <p style={{ color: "#475467", fontSize: 14 }}>
                Begin the process of creating a new job posting by selecting a
                predefined job type or creating a custom one.
              </p>
              <div className="grid grid-flow-row gap-3 mt-5">
                <div className="grid grid-flow-row gap-1">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Name
                  </p>
                  <TextField
                    fullWidth
                    size="small"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Type"
                  />
                </div>
                <div className="grid grid-flow-col gap-5">
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Start Date
                    </p>
                    <TextField
                      fullWidth
                      type="date"
                      size="small"
                      name="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      placeholder="Select Date"
                    />
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      End Date
                    </p>
                    <TextField
                      fullWidth
                      type="date"
                      size="small"
                      name="endDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      placeholder="Select Date"
                    />
                  </div>
                </div>
                <div className="grid grid-flow-row gap-1">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Description
                  </p>
                  <TextField
                    fullWidth
                    size="small"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Type"
                  />
                </div>
              </div>
              <div className="mt-10">
                <p style={{ color: "#475467", fontSize: 20, fontWeight: 500 }}>
                  Assign Job
                </p>

                <div className="grid grid-flow-row gap-1 mt-5 w-1/2">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Job
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={job || null}
                    onChange={(e, value) => setJob(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-end py-10 gap-5">
                <Button
                  onClick={() => setActiveScreen("assessments")}
                  variant="contained"
                  style={{ backgroundColor: "#008080", color: "#ffffff" }}>
                  Next
                </Button>
              </div>
            </div>
          )}
          {activeScreen === "assessments" && (
            <div className="p-8">
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Assessments
              </p>
              <p style={{ color: "#475467", fontSize: 14 }}>
                Select the assessments that you want to allocate to the
                candidate.
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
                  style={{ color: "#008080", backgroundColor: "#EAF4F5" }}>
                  Add New Assessment
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
                                selected.length < data.data.length
                              }
                              checked={
                                data.data.length > 0 &&
                                selected.length === data.data.length
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
                            Assessment Name
                          </TableCell>
                          <TableCell
                            sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                            Date Added
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {visibleRows.map((row, index) => {
                          const isItemSelected = isSelected(row.id);
                          return (
                            <TableRow
                              hover
                              onClick={(event) => handleClick(event, row.id)}
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
                                {row.date}
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
                    Showing {data.totalCount} results found
                  </p>
                  <Pagination
                    count={PAGECOUNT}
                    page={page + 1}
                    variant="outlined"
                    shape="rounded"
                    onChange={(e, newvalue) => {
                      pageChangeHandle(newvalue);
                    }}
                  />
                </div>
              </Box>
              <div className="py-2">
                <FormControlLabel
                  checked={allocateAssessments}
                  onChange={(e) => setAllocateAssessments(e.target.checked)}
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
                      Allocate the assessments that have been selected to the
                      candidates
                    </p>
                  }
                />
              </div>
              <div className="flex justify-end py-5 gap-5">
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  style={{ backgroundColor: "#008080", color: "#ffffff" }}>
                  Submit
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
