import React, { Fragment, useState } from "react";
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
import { useNavigate } from "react-router-dom";
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
import { ClientSideNav } from "../../../widgets/clientSideNav";

export const ConformationScreen = () => {
  const navigate = useNavigate();
  const spectrums = [
    {
      spectrum: "spectrum 1",
      description:
        "They serve as guiding principles that influence decision-making, behavior, and interactions in both personal and professional settings.",
    },
    {
      spectrum: "spectrum 2",
      description:
        "They serve as guiding principles that influence decision-making, behavior, and interactions in both personal and professional settings.",
    },
    {
      spectrum: "spectrum 3",
      description:
        "They serve as guiding principles that influence decision-making, behavior, and interactions in both personal and professional settings.",
    },
    {
      spectrum: "spectrum 4",
      description:
        "They serve as guiding principles that influence decision-making, behavior, and interactions in both personal and professional settings.",
    },
    {
      spectrum: "spectrum 5",
      description:
        "They serve as guiding principles that influence decision-making, behavior, and interactions in both personal and professional settings.",
    },
  ];
  const [behaviour, setBehaviour] = useState(BehaviouralAttributes);
  const [jobDetailsData, setJobDetailsData] = useState(JobTemplateListViewData);
  const [workValueData, setWorkValueData] = useState(workValueViewData);
  const [teamPreference, setTeamPreference] = useState(JobTemplateListViewData);
  const [icpAnalysisData, setIcpAnalysisData] = useState(icpTemplateResultData);

  const [pillars, setPillars] = useState(spectrums);

  const convertedEmtional = convertCompetencies(
    icpAnalysisData?.emtionalFlexibility[0]
  );

  const convertSociability = convertCompetencies(
    icpAnalysisData?.sociabilitySkills[0]
  );

  const convertCognitive = convertCompetencies(
    icpAnalysisData?.cognitiveAgility[0]
  );

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />

          <div className="p-8">
            <div className="flex justify-between items-center">
              <div className="px-5">
                <p
                  style={{
                    color: "#008080",
                    fontSize: 22,
                    fontWeight: 600,
                  }}>
                  Confirmation Screen
                </p>
                <p style={{ color: "#475467", fontSize: 14 }}>
                  Please review all the details below and make any necessary
                  edits or confirm to create a job
                </p>
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#008080", color: "#ffffff" }}
                  onClick={() => {
                    navigate("/job/createJob");
                  }}>
                  CONFIRM
                </Button>
              </div>
            </div>

            {/*  Job Details */}
            <Card className="p-4 my-4">
              <div className="flex justify-between">
                <p style={{ color: "#008080", fontSize: 18, fontWeight: 500 }}>
                  Job Description
                </p>
                <Button
                  variant="text"
                  style={{ color: "#5FAEDA", textTransform: "none" }}
                  onClick={() => {
                    navigate("/job/createJob");
                  }}>
                  Edit
                </Button>
              </div>
              <div>
                {/* <div className="flex gap-14 py-1">
                  <p
                    style={{
                      color: "#101828",
                      fontSize: 16,
                      fontWeight: 500,
                      width: 250,
                    }}>
                    Work Value Template Name
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {jobDetailsData?.templateName}
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
                    Work Value Template Tags
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {jobDetailsData?.tag}
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
                    Work Value Template Description
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {jobDetailsData?.templateDescription}
                  </p>
                </div> */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex gap-14 py-1">
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 18,

                        width: 250,
                      }}>
                      Job Title
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {jobDetailsData?.jobTitle}
                    </p>
                  </div>
                  <div className="flex gap-5 py-1">
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 18,

                        width: 250,
                      }}>
                      Job Code
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {jobDetailsData?.jobCode}
                    </p>
                  </div>
                  <div className="flex gap-5 py-1">
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 18,

                        width: 250,
                      }}>
                      Job Family
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {jobDetailsData?.jobFamily}
                    </p>
                  </div>
                  <div className="flex gap-5 py-1">
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 18,

                        width: 250,
                      }}>
                      Job Department
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {jobDetailsData?.jobDepartment}
                    </p>
                  </div>
                  <div className="flex gap-5 py-1">
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 18,
                        width: 250,
                      }}>
                      Job Location
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {jobDetailsData?.jobLocation}
                    </p>
                  </div>
                  <div className="flex gap-5 py-1">
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 18,

                        width: 250,
                      }}>
                      Salary Compensation
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {jobDetailsData?.salary}
                    </p>
                  </div>
                </div>

                <div className="grid grid-flow-row  mt-5">
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#008080",
                        fontSize: 18,
                        fontWeight: 500,
                      }}>
                      Company Overview
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {jobDetailsData?.aboutUs}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#008080",
                        fontSize: 18,
                        fontWeight: 500,
                      }}>
                      Job Summary
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {jobDetailsData?.positionSummry}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#008080",
                        fontSize: 18,
                        fontWeight: 500,
                      }}>
                      Responsibilities
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {jobDetailsData?.responsibilities}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#008080",
                        fontSize: 18,
                        fontWeight: 500,
                      }}>
                      Benefits
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
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
                        color: "#008080",
                        fontSize: 18,
                        fontWeight: 500,
                      }}>
                      Qualifications and Skills
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {jobDetailsData?.qualification}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#008080",
                        fontSize: 18,
                        fontWeight: 500,
                      }}>
                      Equal Employee Opportunity (EEO)
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {jobDetailsData?.equalEmployeeOpportunity}
                    </p>
                  </div>
                </div>
                <div className="grid grid-flow-row  mt-5">
                  <p
                    style={{
                      color: "#008080",
                      fontSize: 18,
                      fontWeight: 500,
                    }}>
                    Role Requirements and Preferences
                  </p>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex gap-5  py-1">
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 18,
                          minWidth: 320,
                          maxWidth: 350,
                        }}>
                        Is it essential for the candidate to have experience in
                        a specific industry?
                      </p>
                      <p style={{ color: "#101828", fontSize: 18 }}>
                        {jobDetailsData?.specificIndustryExperience}
                      </p>
                    </div>
                    <div className="flex gap-5 py-1">
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 18,
                          minWidth: 320,
                          maxWidth: 350,
                        }}>
                        If so, could you specify which industry and why that
                        experience is critical?
                      </p>
                      <p style={{ color: "#101828", fontSize: 18 }}>
                        {jobDetailsData?.specifyIndustryExp}
                      </p>
                    </div>
                    <div className="flex gap-5 py-1 ">
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 18,
                          minWidth: 320,
                          maxWidth: 350,
                        }}>
                        Would industry knowledge be valued even without direct
                        experience?
                      </p>
                      <p style={{ color: "#101828", fontSize: 18 }}>
                        {jobDetailsData?.industryKnowledge ? "Yes" : "No"}
                      </p>
                    </div>
                    <div className="flex gap-5 py-1">
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 18,
                          minWidth: 320,
                          maxWidth: 350,
                        }}>
                        What is the work setting for the role?
                      </p>
                      <p style={{ color: "#101828", fontSize: 18 }}>
                        {jobDetailsData?.workSetting}
                      </p>
                    </div>
                    <div className="flex gap-5 py-1">
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 18,
                          minWidth: 320,
                          maxWidth: 350,
                        }}>
                        Type of role
                      </p>
                      <p style={{ color: "#101828", fontSize: 18 }}>
                        {jobDetailsData?.roleType}
                      </p>
                    </div>
                    <div className="flex gap-5  py-1">
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 18,
                          minWidth: 320,
                          maxWidth: 350,
                        }}>
                        What are the timings for the role?
                      </p>
                      <p style={{ color: "#101828", fontSize: 18 }}>
                        {jobDetailsData?.roleTimings}
                      </p>
                    </div>
                    <div className="flex gap-5  py-1">
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 18,
                          minWidth: 320,
                          maxWidth: 350,
                        }}>
                        How frequent does the role require to travel?
                      </p>
                      <p style={{ color: "#101828", fontSize: 18 }}>
                        {jobDetailsData?.roleTravel}
                      </p>
                    </div>
                    <div className="flex gap-5  py-1">
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 18,
                          minWidth: 320,
                          maxWidth: 350,
                        }}>
                        Occassional What kind of visa are you looking for ?
                      </p>
                      <p style={{ color: "#101828", fontSize: 18 }}>
                        {jobDetailsData?.visa}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/*  Work Value  */}
            <Card className="p-4 my-4">
              <div className="flex justify-between">
                <p style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                  Work Value
                </p>
                <Button
                  variant="text"
                  style={{ color: "#5FAEDA", textTransform: "none" }}
                  onClick={() => {
                    navigate("/job/createJob");
                  }}>
                  Edit
                </Button>
              </div>
              <div className="flex items-center gap-5 w-full">
                {/* <div className="flex gap-14 py-1">
                  <p
                    style={{
                      color: "#101828",
                      fontSize: 16,
                      fontWeight: 500,
                      width: 250,
                    }}>
                    Work Value Template Tags
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {workValueData?.tag}
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
                    Work Value Template Description
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {workValueData?.templateDescription}
                  </p>
                </div> */}

                <div className="py-5">
                  <RadarChart
                    height={350}
                    width={450}
                    outerRadius="80%"
                    data={workValueData.data}>
                    <PolarGrid />
                    <Tooltip />
                    <PolarAngleAxis dataKey="statement" />
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
                              {workValueData?.data?.map((data) => {
                                return Number(data?.rating) === 4 ? (
                                  <p>{data.statement}</p>
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
                              {workValueData?.data?.map((data) => {
                                return Number(data?.rating) === 3 ? (
                                  <p>{data.statement}</p>
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
                              {workValueData?.data?.map((data) => {
                                return Number(data?.rating) === 2 ? (
                                  <p>{data.statement}</p>
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
                              {workValueData?.data?.map((data) => {
                                return Number(data?.rating) === 1 ? (
                                  <p>{data.statement}</p>
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
                              {workValueData?.data?.map((data) => {
                                return Number(data?.rating) === 0 ? (
                                  <p>{data.statement}</p>
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
            {/* Team Preference */}
            <Card className="p-4 my-4">
              <div className="flex justify-between">
                <p style={{ color: "#008080", fontSize: 18, fontWeight: 500 }}>
                  Team Preference
                </p>
                <Button
                  variant="text"
                  style={{ color: "#5FAEDA", textTransform: "none" }}
                  onClick={() => {
                    navigate("/job/createJob");
                  }}>
                  Edit
                </Button>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex gap-5  py-1">
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 18,
                        width: 320,
                      }}>
                      What is the size of the team
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {teamPreference?.teamSize}
                    </p>
                  </div>
                  <div className="flex gap-5 py-1">
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 18,
                        width: 320,
                      }}>
                      What is the location of the team where it works from?
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {teamPreference?.teamLocation}
                    </p>
                  </div>
                  <div className="flex gap-5  py-1">
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 18,
                        width: 320,
                      }}>
                      Does the role have to work cross functionally?
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {teamPreference?.workCrossFunality ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="flex gap-5 py-1">
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 18,
                        width: 320,
                      }}>
                      What problem/project is the team working on which the
                      candidate will be joining?
                    </p>
                    <p style={{ color: "#101828", fontSize: 18 }}>
                      {teamPreference?.teamWorking}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5  py-1">
                  <p
                    style={{
                      color: "#475467",
                      fontSize: 18,
                      minWidth: 320,
                      maxWidth: 350,
                    }}>
                    What problem/project is the team working on which the
                    candidate will be joining?
                  </p>
                  <p style={{ color: "#101828", fontSize: 18 }}>
                    {teamPreference?.project}
                  </p>
                </div>
                <div className="flex gap-5  py-1">
                  <p
                    style={{
                      color: "#475467",
                      fontSize: 18,
                      minWidth: 320,
                      maxWidth: 350,
                    }}>
                    Could you describe the contributions of a particularly
                    successful team member in a similar role and how they've
                    impacted the team's success?
                  </p>
                  <p style={{ color: "#101828", fontSize: 18 }}>
                    {teamPreference?.contributionsTeam}
                  </p>
                </div>
              </div>
            </Card>
            {/* ICP Analysis */}
            <Card className="p-4 my-4">
              <div className="flex justify-between">
                <p style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                  ICP Analysis
                </p>
                <Button
                  variant="text"
                  style={{ color: "#5FAEDA", textTransform: "none" }}
                  onClick={() => {
                    navigate("/job/createJob");
                  }}>
                  Edit
                </Button>
              </div>
              <div>
                {/* <div className="grid grid-flow-row py-1">
                  <p
                    style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
                    ICP Template Name
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {icpAnalysisData?.templateName}
                  </p>
                </div>
                <div className="grid grid-flow-row py-1">
                  <p
                    style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
                    ICP Template Tags
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {icpAnalysisData?.tag}
                  </p>
                </div>
                <div className="grid grid-flow-row py-1">
                  <p
                    style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
                    ICP Template Description
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {icpAnalysisData?.description}
                  </p>
                </div> */}
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
                          Behavioural Attributes
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
                                          {row?.spectrum}
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
