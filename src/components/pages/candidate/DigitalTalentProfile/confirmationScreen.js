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
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { convertCompetencies } from "../../../utils/function";
import {
  BehaviouralAttributes,
  candidatePersonalInfoData,
  candidatePreferenceFormData,
  icpTemplateResultData,
  workValueViewData,
} from "../../../dummy/Data";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";
import { ColorBodySvg } from "../../../../assets/icon/ColorBodySvg";
import { SideNav } from "../../../widgets/sidenav";

export const ConfirmationScreen = () => {
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
  const [personalInfo, setPersonalInfio] = useState(candidatePersonalInfoData);
  const [preferenceForm, setPreferenceForm] = useState(
    candidatePreferenceFormData
  );
  const [behaviour, setBehaviour] = useState(BehaviouralAttributes);
  const [workValueData, setWorkValueData] = useState(workValueViewData);
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
      <div className="flex ">
        <SideNav />

        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div className="w-full min-h-screen p-4">
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
                    Below is the information for the created job description.
                  </p>
                </div>
                <div>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#008080", color: "#ffffff" }}
                    onClick={() => {
                      navigate("/candidate");
                    }}>
                    CONFIRM
                  </Button>
                </div>
              </div>
              {/* Candidate’s Personal Detail Information */}
              <Card className="p-4 my-4">
                <div className="flex justify-between">
                  <p
                    style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                    Candidate’s Personal Detail Information
                  </p>
                  <Button
                    variant="text"
                    style={{ color: "#5FAEDA", textTransform: "none" }}
                    onClick={() => {
                      navigate("/candidate");
                    }}>
                    Edit
                  </Button>
                </div>
                <div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 600,
                      }}>
                      Resume
                    </p>
                    <p style={{ color: "#101828", fontSize: 16 }}>
                      {personalInfo?.resume}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 600,
                      }}>
                      Title
                    </p>
                    <p style={{ color: "#101828", fontSize: 16 }}>
                      {personalInfo?.title}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 600,
                      }}>
                      Mobile Number
                    </p>
                    <p style={{ color: "#101828", fontSize: 16 }}>
                      {personalInfo?.mobileNumber}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 600,
                      }}>
                      LinkedIn Link
                    </p>
                    <p style={{ color: "#101828", fontSize: 16 }}>
                      {personalInfo?.linkdianLink}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 600,
                      }}>
                      Summary
                    </p>
                    <p style={{ color: "#101828", fontSize: 16 }}>
                      {personalInfo?.summry}
                    </p>
                  </div>
                  <div className="py-4">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Education
                    </p>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Degree
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {personalInfo?.degree}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Field of study
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {personalInfo?.filedOfStudy}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Institutions
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {personalInfo?.institute}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        City
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {personalInfo?.city}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        State
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {personalInfo?.state}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              {/* Candidate’s  Preference Form */}
              <Card className="p-4 my-4">
                <div className="flex justify-between">
                  <p
                    style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                    Candidate’s Preference Form
                  </p>
                  <Button
                    variant="text"
                    style={{ color: "#5FAEDA", textTransform: "none" }}
                    onClick={() => {
                      navigate("/candidate");
                    }}>
                    Edit
                  </Button>
                </div>
                <div>
                  <div>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Academic Qualifications
                    </p>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What level of academic qualification have you attained?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.academicQualification}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What is your specialization?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.specialization}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Can you share your academic background and how it aligns
                        with this role?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.academicBackground}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Do you possess any specific certifications or licenses?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.specificCertifications}
                      </p>
                    </div>
                  </div>
                  <div className="py-4">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Professional Experience
                    </p>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        How many years of experience do you have
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.experiance}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Could you elaborate on your experience in [specific area
                        relevant to the role]
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.specificRole}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Have you previously worked in a specific industry
                        related to this role? If Yes then specify your role
                        there.
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.specificIndustry}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Have you had experience with stakeholders for business
                        goals?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.experienceStakeholders}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What is your notice period in the current organization?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.noticePeriod}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Do you have team handling experience? (If yes, please
                        select the team size)
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.teamHandling}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Please select the industry and specify the industry
                        experience
                      </p>
                      <p style={{ color: "#475467", fontSize: 16 }}>
                        Industry :{" "}
                        {preferenceForm?.industryExperience?.industry}
                      </p>
                      <p style={{ color: "#475467", fontSize: 16 }}>
                        Experience :{" "}
                        {preferenceForm?.industryExperience.experience}
                      </p>
                    </div>
                  </div>
                  <div className="py-4">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Skills
                    </p>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Primary Skills
                      </p>
                      {preferenceForm?.primarySkills?.map((row) => {
                        return (
                          <div className="pb-3">
                            <p style={{ color: "#333333", fontSize: 16 }}>
                              Skill : {row?.skill}
                            </p>
                            <p style={{ color: "#333333", fontSize: 16 }}>
                              Experience : {row?.experiance}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Secondary Skills
                      </p>
                      {preferenceForm?.secondarySkills?.map((row) => {
                        return (
                          <div className="pb-3">
                            <p style={{ color: "#333333", fontSize: 16 }}>
                              Skill : {row?.skill}
                            </p>
                            <p style={{ color: "#333333", fontSize: 16 }}>
                              Experience : {row?.experiance}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Please add the tools or software application you have
                        used in the past
                      </p>
                      {preferenceForm?.softwareApplication?.map((row) => {
                        return (
                          <div className="pb-3">
                            <p style={{ color: "#333333", fontSize: 16 }}>
                              Tools : {row?.tool}
                            </p>
                            <p style={{ color: "#333333", fontSize: 16 }}>
                              Experience : {row?.experiance}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="py-4">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Work Experience
                    </p>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Which work setting do you prefer in-office?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.workSetting}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What is your preference on work shifts?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.workShift}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What are your preferred locations for the job?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.perfferdLocation}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Are you open to relocation if required for the job?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.openToRelocate}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        If your work requires you to travel, how comfortable are
                        you to travel?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.requredToTravel}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What is your preferred work schedule?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.workShedule}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Do you prefer working independently or as part of a
                        small team, or as a part of a large team?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.workTeam}
                      </p>
                    </div>
                  </div>
                  <div className="py-4">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Compensation and Job Type
                    </p>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What are the salary expectations?
                      </p>
                      <p style={{ color: "#475467", fontSize: 16 }}>
                        Type Range: {preferenceForm?.salaryExpectations?.range}
                      </p>
                      <p style={{ color: "#475467", fontSize: 16 }}>
                        Payment Frequency:{" "}
                        {preferenceForm?.salaryExpectations?.payment}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What is the type of job openings are you interested in ?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.typeOfJobopenings}
                      </p>
                    </div>
                  </div>
                  <div className="py-4">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Work Environment and Values
                    </p>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What is appealing to you at work?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.appealingWork}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What kind of work environment are you looking for?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.workEnvironment}
                      </p>
                    </div>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        Is the company outlook on environment important? Like
                        sustainability initiatives, being carbon neutral etc.
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.environmentImportant}
                      </p>
                    </div>
                  </div>
                  <div className="py-4">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      Legal and Visa Status
                    </p>
                    <div className="grid grid-flow-row  py-1">
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 16,
                          fontWeight: 600,
                        }}>
                        What is your current Visa or Work status?
                      </p>
                      <p style={{ color: "#101828", fontSize: 16 }}>
                        {preferenceForm?.visaStatus}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              {/*  Work Value  */}
              <Card className="p-4 my-4">
                <div className="flex justify-between">
                  <p
                    style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                    Work Value
                  </p>
                  <Button
                    variant="text"
                    style={{ color: "#5FAEDA", textTransform: "none" }}
                    onClick={() => {
                      navigate("/candidate");
                    }}>
                    Edit
                  </Button>
                </div>
                <div>
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
              {/* ICP Analysis */}
              <Card className="p-4 my-4">
                <div className="flex justify-between">
                  <p
                    style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                    ICP Analysis
                  </p>
                  <Button
                    variant="text"
                    style={{ color: "#5FAEDA", textTransform: "none" }}
                    onClick={() => {
                      navigate("/candidate");
                    }}>
                    Edit
                  </Button>
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
      </div>
      <Footer />
    </div>
  );
};
