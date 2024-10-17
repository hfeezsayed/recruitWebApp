import React, { useEffect, useState } from "react";
import { Box, Button, Card, InputAdornment, TextField } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";
import { IoFilterSharp } from "react-icons/io5";
import { TopNav } from "../../../widgets/topNav";
import { AllAssessmentData, ClientAssessmentData } from "../../../dummy/Data";
import { Footer } from "../../../widgets/footer";
import axiosInstance from "../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../utils/spinner";
import { ClientSideNav } from "../../../widgets/clientSideNav";

export const ClientAssesmentForm = () => {
  const [search, setSearch] = useState();
  const location = useLocation();
  const [value, setValue] = React.useState(0);
  const [AllAssessmentList, setAllAssessmentList] = useState(AllAssessmentData);
  const [selfAssessmentList, setSelfAssessmentList] = useState(
    ClientAssessmentData
  );
  const [clientAssessmentList, setClientAssessmentList] = useState(
    ClientAssessmentData
  );
  const [viewResults, setViewResult] = useState(-1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state !== null) {
      console.log(location.state);
      setValue(Number(location.state - 1));
    }
  }, [location.state]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance
      .get(`/getCandidateAssessments?candidateId=${user.userId}`)
      .then((response) => {
        console.log("allAssessment", response.data);
        setSelfAssessmentList(response.data.candidateList);
        setClientAssessmentList(response.data.clientList);
        setAllAssessmentList([...selfAssessmentList, ...clientAssessmentList]);
        setLoading(false);
        //console.log(response.data?.emtionalFlexibility[1].competencies);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleShowResult = (index) => {
    if (viewResults === -1) setViewResult(index);
    if (viewResults != -1) setViewResult(-1);
  };

  const handleChange = (event, newValue) => {
    console.log("value = ", value);
    setValue(newValue);
  };
  // const AllAssessment = () => {
  //   return (
  //     <div className="py-3">
  //       <div className="grid grid-flow-row gap-3">
  //         {AllAssessmentList.map((value, index) => {
  //           return (
  //             <Card key={index} sx={{ borderRadius: 5, padding: 2 }}>
  //               {value.status === "completed" ? (
  //                 <div className="flex">
  //                   <div>
  //                     <div className="pb-3 flex gap-5">
  //                       <p
  //                         style={{
  //                           fontSize: 14,
  //                           color: "#475467",
  //                         }}>
  //                         Date Taken : {value.date}
  //                       </p>
  //                       <p
  //                         style={{
  //                           fontSize: 14,
  //                           color: "#FFA412",
  //                         }}>
  //                         Retake : {value.retake}
  //                       </p>
  //                     </div>
  //                     <p
  //                       style={{
  //                         fontSize: 18,
  //                         fontWeight: 600,
  //                         color: "#101828",
  //                       }}>
  //                       {value.name}
  //                     </p>
  //                     <p style={{ fontSize: 16, color: "#475467" }}>
  //                       {value.notes}
  //                     </p>
  //                     <div className="pt-5 flex gap-5">
  //                       <div
  //                         className="p-2 rounded-lg"
  //                         style={{ backgroundColor: "#F1F1F5" }}>
  //                         <p
  //                           style={{
  //                             fontSize: 14,
  //                             fontWeight: 500,
  //                             color: "#475467",
  //                             opacity: 1,
  //                           }}>
  //                           Include in DTP
  //                         </p>
  //                       </div>
  //                       <div
  //                         className="p-2 rounded-lg"
  //                         style={{ backgroundColor: "#B3D8D935" }}>
  //                         <p
  //                           style={{
  //                             fontSize: 14,
  //                             fontWeight: 500,
  //                             color: "#008080",
  //                             opacity: 1,
  //                           }}>
  //                           View Results
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="min-w-fit px-5">
  //                     <p
  //                       style={{
  //                         fontSize: 18,
  //                         fontWeight: 600,
  //                         color: "#58A20F",
  //                       }}>
  //                       Completed
  //                     </p>
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <div className="flex">
  //                   <div>
  //                     <p
  //                       style={{
  //                         fontSize: 18,
  //                         fontWeight: 600,
  //                         color: "#101828",
  //                       }}>
  //                       {value.name}
  //                     </p>
  //                     <p style={{ fontSize: 16, color: "#475467" }}>
  //                       {value.notes}
  //                     </p>
  //                     <div className="pt-5 flex gap-3">
  //                       <div
  //                         className="p-2 rounded-lg"
  //                         style={{ backgroundColor: "#B3D8D935" }}>
  //                         <p
  //                           style={{
  //                             fontSize: 14,
  //                             fontWeight: 500,
  //                             color: "#008080",
  //                             opacity: 1,
  //                           }}>
  //                           Take Assessment
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="min-w-fit px-5">
  //                     <p
  //                       style={{
  //                         fontSize: 18,
  //                         fontWeight: 600,
  //                         color: "#E05880",
  //                       }}>
  //                       Not- Taken
  //                     </p>
  //                   </div>
  //                 </div>
  //               )}
  //             </Card>
  //           );
  //         })}
  //       </div>
  //       <div className="flex justify-end gap-5 py-5">
  //         <Button
  //           variant="outlined"
  //           style={{ color: "#787879", borderColor: "#787879" }}>
  //           Clear
  //         </Button>
  //         <Button
  //           variant="contained"
  //           style={{ color: "#ffffff", backgroundColor: "#008080" }}>
  //           Next
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // };

  const AllAssessment = () => {
    return (
      <div className="p-4">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, border: 1, borderColor: "#D0D5DD" }}
            aria-label="simple table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Company Name
                </TableCell>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Assessment Name
                </TableCell>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Date Added
                </TableCell>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Actions
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {clientAssessmentList.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: "#475467", fontSize: 14 }}
                  >
                    {row.companyName}
                  </TableCell>
                  <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                    {row.assessmentName}
                  </TableCell>
                  <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                    {row.date}
                  </TableCell>
                  <TableCell>
                    {row.status === "Not Taken" ? (
                      <p
                        style={{
                          color: "#E05880",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        Not Taken
                      </p>
                    ) : (
                      <p
                        style={{
                          color: "#58A20F",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        {row.status}
                      </p>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.status === "Not Taken" ? (
                      <p
                        onClick={() =>
                          navigate("/comprehensiveAssessment", {
                            state: {
                              batchName: row.assessmentName,
                              batchId: row.id,
                            },
                          })
                        }
                        style={{
                          color: "#F4BC06",
                          fontSize: 14,
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                      >
                        Take Assessment
                      </p>
                    ) : (
                      <p
                        onClick={() => handleShowResult(index)}
                        style={{
                          color: "#5FAEDA",
                          fontSize: 14,
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                      >
                        {viewResults !== index ? "View Score" : "Hide Score"}
                      </p>
                    )}
                  </TableCell>
                  <TableCell>
                    {viewResults == index ? row.result : ""}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  const SelfAssessment = () => {
    return (
      <div className="p-4">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, border: 1, borderColor: "#D0D5DD" }}
            aria-label="simple table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Assessment Name
                </TableCell>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Date Added
                </TableCell>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Actions
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {selfAssessmentList.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: "#475467", fontSize: 14 }}
                  >
                    {row.assessmentName}
                  </TableCell>
                  <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                    {row.date}
                  </TableCell>
                  <TableCell>
                    {row.status === "Not Taken" ? (
                      <p
                        style={{
                          color: "#E05880",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        Not Taken
                      </p>
                    ) : (
                      <p
                        style={{
                          color: "#58A20F",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        Completed
                      </p>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.status === "Not Taken" ? (
                      <p
                        style={{
                          color: "#F4BC06",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        Take Assessment
                      </p>
                    ) : (
                      <p
                        onClick={() => handleShowResult(index)}
                        style={{
                          color: "#5FAEDA",
                          fontSize: 14,
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                      >
                        {viewResults !== index ? "View Result" : "Hide Result"}
                      </p>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.status === "Not Taken" ? (
                      <p>{""}</p>
                    ) : (
                      <p
                        style={{
                          color: "#66B2B2",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        {viewResults === index ? row.result : ""}
                      </p>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  const ClientAssessment = () => {
    return (
      <div className="p-4">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, border: 1, borderColor: "#D0D5DD" }}
            aria-label="simple table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Company Name
                </TableCell>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Assessment Name
                </TableCell>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Date Added
                </TableCell>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{ color: "#101828", fontSize: 14, fontWeight: 500 }}
                >
                  Actions
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {clientAssessmentList.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: "#475467", fontSize: 14 }}
                  >
                    {row.companyName}
                  </TableCell>
                  <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                    {row.assessmentName}
                  </TableCell>
                  <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                    {row.date}
                  </TableCell>
                  <TableCell>
                    {row.status === "Not Taken" ? (
                      <p
                        style={{
                          color: "#E05880",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        Not Taken
                      </p>
                    ) : (
                      <p
                        style={{
                          color: "#58A20F",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        {row.status}
                      </p>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.status === "Not Taken" ? (
                      <p
                        onClick={() =>
                          navigate("/comprehensiveAssessment", {
                            state: {
                              batchName: row.assessmentName,
                              batchId: row.id,
                            },
                          })
                        }
                        style={{
                          color: "#F4BC06",
                          fontSize: 14,
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                      >
                        Take Assessment
                      </p>
                    ) : (
                      <p
                        onClick={() => handleShowResult(index)}
                        style={{
                          color: "#5FAEDA",
                          fontSize: 14,
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                      >
                        {viewResults !== index ? "View Score" : "Hide Score"}
                      </p>
                    )}
                  </TableCell>
                  <TableCell>
                    {viewResults == index ? row.result : ""}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          {loading === true ? (
            <Spinner />
          ) : (
            <div className="p-8">
              <p style={{ fontSize: 22, fontWeight: 600, color: "#101828" }}>
                Assessments
              </p>
              <div className="py-5 flex justify-between items-center">
                <TextField
                  size="small"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IoIosSearch />
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="flex gap-4">
                  <Button
                    variant="outlined"
                    style={{
                      borderColor: "#D0D5DD",
                      color: "#252525",
                      textTransform: "none",
                      fontWeight: 500,
                      borderRadius: 8,
                    }}
                    startIcon={<IoFilterSharp />}
                  >
                    Filter
                  </Button>
                  <Button
                    onClick={() => navigate("/clientcreateAssessment")}
                    style={{
                      color: "#008080",
                      background: "#EAF4F5",
                      textTransform: "none",
                      fontWeight: 500,
                      borderRadius: 8,
                    }}
                  >
                    Add New Assessment
                  </Button>
                </div>
              </div>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                      "& .MuiTab-root.Mui-selected": {
                        color: "#101828",
                      },
                      "& .MuiTabs-indicator": {
                        backgroundColor: "#101828",
                        height: 3,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                    }}
                  >
                    <Tab
                      label="All - Assessments"
                      id="1"
                      sx={{
                        color: "#475467",
                        textTransform: "none",
                        fontWeight: 500,
                      }}
                    />
                    <Tab
                      label="Self - Assessments"
                      id="2"
                      sx={{
                        color: "#475467",
                        textTransform: "none",
                        fontWeight: 500,
                      }}
                    />
                    <Tab
                      label="Client Assessments"
                      id="3"
                      sx={{
                        color: "#475467",
                        textTransform: "none",
                        fontWeight: 500,
                      }}
                    />
                  </Tabs>
                </Box>
                {value === 0 && <AllAssessment />}
                {value === 1 && <SelfAssessment />}
                {value === 2 && <ClientAssessment />}
              </Box>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
