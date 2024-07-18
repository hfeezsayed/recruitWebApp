import React, { Fragment, useState, useRef } from "react";
import {
  Button,
  Card,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { useNavigate, useLocation } from "react-router-dom";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";
import { TopNav } from "../../../widgets/topNav";
import logo from "../../../../assets/images/logo.png";
import { Footer } from "../../../widgets/footer";
import {
  BehaviouralAttributes,
  JobTemplateListViewData,
  icpTemplateResultData,
  workValueViewData,
} from "../../../dummy/Data";
import { convertCompetencies } from "../../../utils/function";
import { ColorBodySvg } from "../../../../assets/icon/ColorBodySvg";
import axiosInstance from "../../../utils/axiosInstance";
import { useEffect } from "react";
import Spinner from "../../../utils/spinner";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const OutputofJobDescription = () => {
  const spectrums = [
    "spectrum1",
    "spectrum2",
    "spectrum3",
    "spectrum4",
    "spectrum5"
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const [jobDetailsData, setJobDetailsData] = useState(JobTemplateListViewData);
  const [workValueData, setWorkValueData] = useState([]);
  const [teamPreference, setTeamPreference] = useState(JobTemplateListViewData);
  const [icpAnalysisData, setIcpAnalysisData] = useState(icpTemplateResultData);
  const [behaviour, setBehaviour] = useState(BehaviouralAttributes);
  const [pillars, setPillars] = useState(spectrums);
  const [loading, setLoading] = useState(false);
  const [fullAccess, setFullAccess] = useState(true);
  const [teamAccess, setTeamAccess] = useState(true);

  useEffect(() => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("token"));
    console.log(location.state);
    if (location.state) {
      if(location.state.teamAccess){
        setFullAccess(false);
      }
      if(location.state.jdAccess){
        setFullAccess(false);
        setTeamAccess(false);
      }
      axiosInstance
        .get(
          `/getJobDescription?clientId=${user.userId}&jobId=${location.state.jobId}`
        )
        .then((data) => {
          console.log(data);
          setJobDetailsData(data.data?.jobDetail);
          setWorkValueData(data.data?.values);
          setTeamPreference(data.data?.team);
          setIcpAnalysisData(data.data?.icp);
          setPillars(data.data?.icp.pillars);
          setBehaviour(data.data?.icp.behaviourAttributes);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
        });
    }
  }, []);

  const convertedEmtional = convertCompetencies(
    icpAnalysisData?.emtionalFlexibility[0]
  );

  const convertSociability = convertCompetencies(
    icpAnalysisData?.sociabilitySkills[0]
  );

  const convertCognitive = convertCompetencies(
    icpAnalysisData?.cognitiveAgility[0]
  );

  const contentRef = useRef();

  const handleDownload = async () => {
    const element = contentRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('download.pdf');
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
            <div className="w-full min-h-screen p-4">
              <div className="px-5">
                <p
                  style={{
                    color: "#008080",
                    fontSize: 22,
                    fontWeight: 600,
                  }}>
                  Output of Job Description
                </p>
                <p style={{ color: "#475467", fontSize: 14 }}>
                  Below is the information for the created job description.
                </p>
              </div>

              {/*  Job Details */}
              <Card className="p-4 my-4">
                <div>
                  <p
                    style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                    Job Details
                  </p>
                </div>
                <div>
                  <div className="flex gap-14 py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                        width: 250,
                      }}>
                      Job Title
                    </p>
                    <p style={{ color: "#475467", fontSize: 16 }}>
                      {jobDetailsData?.jobTitle}
                    </p>
                  </div>
                  <div className="flex gap-14 py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                        width: 250,
                      }}>
                      Job Code
                    </p>
                    <p style={{ color: "#475467", fontSize: 16 }}>
                      {jobDetailsData?.jobCode}
                    </p>
                  </div>
                  <div className="flex gap-14 py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                        width: 250,
                      }}>
                      Job Family
                    </p>
                    <p style={{ color: "#475467", fontSize: 16 }}>
                      {jobDetailsData?.jobFamily}
                    </p>
                  </div>
                  <div className="flex gap-14 py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                        width: 250,
                      }}>
                      Job Department
                    </p>
                    <p style={{ color: "#475467", fontSize: 16 }}>
                      {jobDetailsData?.jobDepartment}
                    </p>
                  </div>
                  <div className="flex gap-14 py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                        width: 250,
                      }}>
                      Job Location
                    </p>
                    <p style={{ color: "#475467", fontSize: 16 }}>
                      {jobDetailsData?.jobLocation}
                    </p>
                  </div>
                  <div className="flex gap-14 py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                        width: 250,
                      }}>
                      Salary Compensation
                    </p>
                    <p style={{ color: "#475467", fontSize: 16 }}>
                      {jobDetailsData?.salary}
                    </p>
                  </div>

                  <div className="grid grid-flow-row  mt-5">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Job Description
                    </p>

                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        About us - info about the company
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.companyInfo}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Position Summary
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.positionSummry}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Duties and Responsibility:
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.responsibilities}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Benefits and Compensation:
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.benefits}
                      </p>
                      {/* {jobDetailsData?.Compensation?.map((row) => {
                      return (
                        <li style={{ color: "#333333", fontSize: 16 }}>{row}</li>
                      );
                    })} */}
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Equal Employee Opportunity
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.equalEmployeeOpportunity}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-flow-row  mt-5">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Role Requirements and Preferences
                    </p>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Is it essential for the candidate to have experience in
                        a specific industry?
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.specificIndustryExperience}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        If so, could you specify which industry and why that
                        experience is critical?
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.specifyIndustryExp}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1 ">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Would industry knowledge be valued even without direct
                        experience?
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.industryKnowledge ? "Yes" : "No"}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What is the work setting for the role?
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.workSetting}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Type of role
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.roleType}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What are the timings for the role?
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.roleTimings}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        How frequent does the role require to travel?
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.roleTravel}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#333333",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Occassional What kind of visa are you looking for ?
                      </p>
                      <p style={{ color: "#333333", fontSize: 16 }}>
                        {jobDetailsData?.visa}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/*  Work Value  */}
              {fullAccess && 
              (<Card className="p-4 my-4">
                <div>
                  <p
                    style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                    Work Value
                  </p>
                </div>
                <div>
                  <div className="py-5">
                    <RadarChart
                      height={350}
                      width={450}
                      outerRadius="80%"
                      data={workValueData}>
                      <PolarGrid />
                      <Tooltip />
                      <PolarAngleAxis dataKey="value" />
                      <PolarRadiusAxis />
                      <Radar
                        dataKey="rating"
                        stroke="#008080"
                        fill="#ffffff"
                        fillOpacity={0}
                      />
                    </RadarChart>
                  </div>
                  <Box>
                    <TableContainer sx={{ minWidth: 500 }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell
                              sx={{
                                bgcolor: "#F8F9FA",
                                color: "#101828",
                                border: 1,
                                borderColor: "#D0D5DD50",
                                width: 250,
                              }}>
                              Work Attribute
                            </TableCell>
                            <TableCell
                              sx={{
                                bgcolor: "#F8F9FA",
                                color: "#101828",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}>
                              Frequency Selected
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell
                              sx={{
                                color: "#171717",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}>
                              Priority 4
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#171717",
                                border: 1,
                                borderColor: "#D0D5DD50",
                                backgroundColor: "#C2E0E8",
                              }}>
                              <div className="grid grid-cols-4 gap-y-2">
                                {workValueData?.map((data) => {
                                  return Number(data?.rating) === 4 ? (
                                    <p>{data.value}</p>
                                  ) : null;
                                })}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              sx={{
                                color: "#171717",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}>
                              Priority 3
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#171717",
                                border: 1,
                                borderColor: "#D0D5DD50",
                                backgroundColor: "#F2EFC9",
                              }}>
                              <div className="grid grid-cols-4 gap-y-2">
                                {workValueData?.map((data) => {
                                  return Number(data?.rating) === 3 ? (
                                    <p>{data.value}</p>
                                  ) : null;
                                })}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              sx={{
                                color: "#171717",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}>
                              Priority 2
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#171717",
                                border: 1,
                                borderColor: "#D0D5DD50",
                                backgroundColor: "#D1E6D5",
                              }}>
                              <div className="grid grid-cols-4 gap-y-2">
                                {workValueData?.map((data) => {
                                  return Number(data?.rating) === 2 ? (
                                    <p>{data.value}</p>
                                  ) : null;
                                })}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              sx={{
                                color: "#171717",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}>
                              Priority 1
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#171717",
                                border: 1,
                                borderColor: "#D0D5DD50",
                                backgroundColor: "#ECCCB7",
                              }}>
                              <div className="grid grid-cols-4 gap-y-2">
                                {workValueData?.map((data) => {
                                  return Number(data?.rating) === 1 ? (
                                    <p>{data.value}</p>
                                  ) : null;
                                })}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              sx={{
                                color: "#171717",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}>
                              No Priority
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#171717",
                                border: 1,
                                borderColor: "#D0D5DD50",
                                backgroundColor: "#EDDAD3",
                              }}>
                              <div className="grid grid-cols-4 gap-y-2">
                                {workValueData?.map((data) => {
                                  return Number(data?.rating) === 0 ? (
                                    <p>{data.value}</p>
                                  ) : null;
                                })}
                              </div>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </div>
              </Card>
              )}
              {/* Team Preference */}
              {(fullAccess || teamAccess) && 
              (
              <Card className="p-4 my-4">
                <div>
                  <p
                    style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                    Team Preference
                  </p>
                </div>
                <div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      What is the size of the team
                    </p>
                    <p style={{ color: "#475467", fontSize: 16 }}>
                      {teamPreference?.teamSize}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      What is the location of the team where it works from?
                    </p>
                    <p style={{ color: "#475467", fontSize: 16 }}>
                      {teamPreference?.teamLocation}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Does the role have to work cross functionally?
                    </p>
                    <p style={{ color: "#475467", fontSize: 16 }}>
                      {teamPreference?.workCrossFunality ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      What problem/project is the team working on which the
                      candidate will be joining?
                    </p>
                    <p style={{ color: "#475467", fontSize: 16 }}>
                      {teamPreference?.project}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Could you describe the contributions of a particularly
                      successful team member in a similar role and how they've
                      impacted the team's success?
                    </p>
                    <p style={{ color: "#475467", fontSize: 16 }}>
                      {teamPreference?.contributionsTeam}
                    </p>
                  </div>
                </div>
              </Card>
              )}
              {/* ICP Analysis */}
              { fullAccess &&
              (
              <Card className="p-4 my-4">
                <div>
                  <p
                    style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                    ICP Analysis
                  </p>
                </div>
                <div>
                  {/* spectrum analysis */}
                  <p
                    style={{
                      color: "#101828",
                      fontSize: 22,
                      fontWeight: 600,
                      marginTop: 10,
                    }}>
                    Spectrum Analysis
                  </p>
                  <div className="flex gap-5 py-5">
                    {/* table */}
                    <Table
                      sx={{
                        borderWidth: 1,
                      }}>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                              minWidth: 600,
                            }}>
                            Talent Dimensions
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}>
                            Attributes
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <Fragment>
                          <TableRow>
                            <TableCell
                              sx={{
                                color: "#475467",
                                fontSize: 14,
                                fontWeight: 500,
                                borderWidth: 1,
                              }}
                              rowSpan={behaviour?.length + 1}>
                              {/* <div
                              className="border rounded-lg p-4 w-full"
                              style={{
                                backgroundColor: "#ffffff",
                                borderColor: "#D0D5DD",
                              }}> */}
                              <div className="flex justify-center">
                                <ColorBodySvg />

                                <div className="grid relative pt-5">
                                  {pillars.map((row, index) => {
                                    return (
                                      <div className={`flex mt-10`} key={index}>
                                        {/* <div className="flex text-center p-2"></div> */}
                                        <div className="flex gap-3 items-center">
                                          <p
                                            style={{
                                              color: "#475467",
                                              fontSize: 33,
                                            }}>
                                            &#x2015;
                                            <span style={{ fontSize: 30 }}>
                                              &#x2022;
                                            </span>
                                          </p>
                                          <p
                                            style={{
                                              color: "#101828",
                                              fontSize: 20,
                                              fontWeight: 500,
                                            }}>
                                            {row}
                                          </p>
                                          {/* <p style={{ color: "#475467", fontSize: 14 }}>
                                {row?.description}
                              </p> */}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                              {/* </div> */}
                            </TableCell>
                          </TableRow>
                        </Fragment>
                        <Fragment>
                          {behaviour?.map((row, index) => (
                            <TableRow key={index}>
                              <TableCell
                                sx={{
                                  color: "#475467",
                                  fontSize: 14,
                                  fontWeight: 500,
                                  borderWidth: 1,
                                }}>
                                {row}
                              </TableCell>
                            </TableRow>
                          ))}
                        </Fragment>
                      </TableBody>
                    </Table>
                  </div>
                  {/* charts */}
                  <p
                    style={{
                      color: "#101828",
                      fontSize: 22,
                      fontWeight: 600,
                      marginTop: 10,
                    }}>
                    Pie Charts
                  </p>
                  {/* chart 1 table */}
                  <div className="mt-5">
                    <Table
                      sx={{
                        borderWidth: 1,
                      }}>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}>
                            Emotional Flexibility
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}>
                            Labels
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}
                            align="center">
                            Rating out of 5
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}>
                            Attributes
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <Fragment>
                          <TableRow>
                            <TableCell
                              sx={{
                                color: "#475467",
                                fontSize: 14,
                                fontWeight: 500,
                                borderWidth: 1,
                                width: 450,
                              }}
                              rowSpan={5}>
                              <div className="flex justify-end">
                                <PieChart
                                  series={convertedEmtional}
                                  width={300}
                                  height={200}
                                  slotProps={{
                                    legend: {
                                      hidden: true,
                                    },
                                  }}
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        </Fragment>
                        <Fragment>
                          {convertedEmtional?.map((data, index) => {
                            let row = data.data[0];
                            return (
                              <TableRow key={index}>
                                <TableCell
                                  sx={{
                                    color: "#475467",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    borderWidth: 1,
                                  }}>
                                  <div
                                    className="flex"
                                    style={{
                                      borderLeftWidth: 3,
                                      borderLeftColor: row.color,
                                      borderRadius: 3,
                                      paddingLeft: 5,
                                    }}
                                    key={index}>
                                    <div className="col-span-2">
                                      <p
                                        style={{
                                          color: "#475467",
                                          fontSize: 16,
                                        }}>
                                        {row.label}
                                      </p>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell
                                  sx={{
                                    color: "#475467",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    borderWidth: 1,
                                  }}
                                  align="center">
                                  {row.rating}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    color: "#475467",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    borderWidth: 1,
                                  }}>
                                  {row.attribute}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </Fragment>
                      </TableBody>
                    </Table>
                  </div>
                  {/* chart 2 table */}
                  <div className="mt-5">
                    <Table
                      sx={{
                        borderWidth: 1,
                      }}>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}>
                            Cognitive Agility
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}>
                            Labels
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}
                            align="center">
                            Rating out of 5
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}>
                            Attributes
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <Fragment>
                          <TableRow>
                            <TableCell
                              sx={{
                                color: "#475467",
                                fontSize: 14,
                                fontWeight: 500,
                                borderWidth: 1,
                                width: 450,
                              }}
                              rowSpan={5}>
                              <div className="flex justify-end">
                                <PieChart
                                  series={convertCognitive}
                                  width={300}
                                  height={200}
                                  slotProps={{
                                    legend: {
                                      hidden: true,
                                    },
                                  }}
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        </Fragment>
                        <Fragment>
                          {convertCognitive?.map((data, index) => {
                            let row = data.data[0];
                            return (
                              <TableRow key={index}>
                                <TableCell
                                  sx={{
                                    color: "#475467",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    borderWidth: 1,
                                  }}>
                                  <div
                                    className="flex"
                                    style={{
                                      borderLeftWidth: 3,
                                      borderLeftColor: row.color,
                                      borderRadius: 3,
                                      paddingLeft: 5,
                                    }}
                                    key={index}>
                                    <div className="col-span-2">
                                      <p
                                        style={{
                                          color: "#475467",
                                          fontSize: 16,
                                        }}>
                                        {row.label}
                                      </p>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell
                                  sx={{
                                    color: "#475467",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    borderWidth: 1,
                                  }}
                                  align="center">
                                  {row.rating}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    color: "#475467",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    borderWidth: 1,
                                  }}>
                                  {row.attribute}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </Fragment>
                      </TableBody>
                    </Table>
                  </div>
                  {/* chart 3 table */}
                  <div className="mt-5">
                    <Table
                      sx={{
                        borderWidth: 1,
                      }}>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}>
                            Sociability Skills
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}>
                            Labels
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}
                            align="center">
                            Rating out of 5
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#101828",
                              fontSize: 14,
                              fontWeight: 600,
                              borderWidth: 1,
                              bgcolor: "#F8F9FA",
                            }}>
                            Attributes
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <Fragment>
                          <TableRow>
                            <TableCell
                              sx={{
                                color: "#475467",
                                fontSize: 14,
                                fontWeight: 500,
                                borderWidth: 1,
                                width: 450,
                              }}
                              rowSpan={5}>
                              <div className="flex justify-end">
                                <PieChart
                                  series={convertSociability}
                                  width={300}
                                  height={200}
                                  slotProps={{
                                    legend: {
                                      hidden: true,
                                    },
                                  }}
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        </Fragment>
                        <Fragment>
                          {convertSociability?.map((data, index) => {
                            let row = data.data[0];
                            return (
                              <TableRow key={index}>
                                <TableCell
                                  sx={{
                                    color: "#475467",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    borderWidth: 1,
                                  }}>
                                  <div
                                    className="flex"
                                    style={{
                                      borderLeftWidth: 3,
                                      borderLeftColor: row.color,
                                      borderRadius: 3,
                                      paddingLeft: 5,
                                    }}
                                    key={index}>
                                    <div className="col-span-2">
                                      <p
                                        style={{
                                          color: "#475467",
                                          fontSize: 16,
                                        }}>
                                        {row.label}
                                      </p>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell
                                  sx={{
                                    color: "#475467",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    borderWidth: 1,
                                  }}
                                  align="center">
                                  {row.rating}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    color: "#475467",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    borderWidth: 1,
                                  }}>
                                  {row.attribute}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </Fragment>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </Card>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
