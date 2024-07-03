import React, { useState } from "react";
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
import { TopNav } from "../../../widgets/topNav";
import logo from "../../../../assets/images/logo.png";
import { Footer } from "../../../widgets/footer";
import {
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





export const OutputofJobDescription = () => {
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
  const navigate = useNavigate();
  const location = useLocation();
  const [jobDetailsData, setJobDetailsData] = useState(JobTemplateListViewData);
  const [workValueData, setWorkValueData] = useState([]);
  const [teamPreference, setTeamPreference] = useState(JobTemplateListViewData);
  const [icpAnalysisData, setIcpAnalysisData] = useState(icpTemplateResultData);
  const [pillars, setPillars] = useState(spectrums);
  const [loading, setLoading] = useState(false);
 


  useEffect(() => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("token"));
    console.log(workValueData);
    if(location.state){
      axiosInstance
        .get(
          `/getJobDescription?clientId=${user.userId}&jobId=${location.state}`,
          
        )
        .then((data) => {
          console.log(data);
          setJobDetailsData(data.data?.jobDetail);
          setWorkValueData(data.data?.values);
          setTeamPreference(data.data?.team);
          setIcpAnalysisData(data.data?.icp);
          setPillars(data.data?.icp.pillars);
          setLoading(false);
        })
        .catch((e) => {
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

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          { loading === true ? 
          (
            <Spinner/>
          )
          :
          (
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
                <p style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
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
                  <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
                    Job Description
                  </p>

                  <div className="grid grid-flow-row  py-1">
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
                      About us - info about the company
                    </p>
                    <p style={{ color: "#333333", fontSize: 16 }}>
                      {jobDetailsData?.companyInfo}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
                      Position Summary
                    </p>
                    <p style={{ color: "#333333", fontSize: 16 }}>
                      {jobDetailsData?.positionSummary}
                    </p>
                  </div>
                  <div>
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
                      Duties and Responsibility:
                    </p>
                    {jobDetailsData?.responsibility?.map((row) => {
                      return (
                        <li style={{ color: "#333333", fontSize: 16 }}>{row}</li>
                      );
                    })}
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
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
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
                      Equal Employee Opportunity
                    </p>
                    <p style={{ color: "#333333", fontSize: 16 }}>
                      {jobDetailsData?.equalEmployeeOpportunity}
                    </p>
                  </div>
                </div>
                <div className="grid grid-flow-row  mt-5">
                  <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
                    Role Requirements and Preferences
                  </p>
                  <div className="grid grid-flow-row  py-1">
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
                      Is it essential for the candidate to have experience in a
                      specific industry?
                    </p>
                    <p style={{ color: "#333333", fontSize: 16 }}>
                      {jobDetailsData?.specificIndustryExperience}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
                      If so, could you specify which industry and why that
                      experience is critical?
                    </p>
                    <p style={{ color: "#333333", fontSize: 16 }}>
                      {jobDetailsData?.specifyIndustryExp}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1 ">
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
                      Would industry knowledge be valued even without direct
                      experience?
                    </p>
                    <p style={{ color: "#333333", fontSize: 16 }}>
                      {jobDetailsData?.industryKnowledge ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
                      What is the work setting for the role?
                    </p>
                    <p style={{ color: "#333333", fontSize: 16 }}>
                      {jobDetailsData?.roleSetting}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
                      Type of role
                    </p>
                    <p style={{ color: "#333333", fontSize: 16 }}>
                      {jobDetailsData?.roleType}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
                      What are the timings for the role?
                    </p>
                    <p style={{ color: "#333333", fontSize: 16 }}>
                      {jobDetailsData?.roleTimings}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
                      How frequent does the role require to travel?
                    </p>
                    <p style={{ color: "#333333", fontSize: 16 }}>
                      {jobDetailsData?.roleTrav}
                    </p>
                  </div>
                  <div className="grid grid-flow-row  py-1">
                    <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
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
            <Card className="p-4 my-4">
              <div>
                <p style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                  Work Value
                </p>
              </div>
              <div>
                <Box sx={{ width: "100%", marginTop: 4 }}>
                  <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
                    Work Value Analysis Result
                  </p>
                  <TableContainer sx={{ maxWidth: 686 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            align="center"
                            sx={{
                              bgcolor: "#F8F9FA",
                              color: "#101828",
                              border: 1,
                              borderColor: "#D0D5DD50",
                            }}>
                            Ranking out of 4
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              bgcolor: "#F8F9FA",
                              color: "#101828",
                              border: 1,
                              borderColor: "#D0D5DD50",
                            }}>
                            Work Attribute
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {workValueData?.map((row, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell
                                align="center"
                                sx={{
                                  color: "#008080",
                                  border: 1,
                                  borderColor: "#D0D5DD50",
                                }}>
                                {row.rating}
                              </TableCell>
                              <TableCell
                                align="center"
                                sx={{
                                  color: "#475467",
                                  border: 1,
                                  borderColor: "#D0D5DD50",
                                }}>
                                {row.statement}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </div>
            </Card>
            {/* Team Preference */}
            <Card className="p-4 my-4">
              <div>
                <p style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                  Team Preference
                </p>
              </div>
              <div>
                <div className="grid grid-flow-row  py-1">
                  <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
                    What is the size of the team
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {teamPreference?.teamSize}
                  </p>
                </div>
                <div className="grid grid-flow-row  py-1">
                  <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
                    What is the location of the team where it works from?
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {teamPreference?.teamLocation}
                  </p>
                </div>
                <div className="grid grid-flow-row  py-1">
                  <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
                    Does the role have to work cross functionally?
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {teamPreference?.workCrossFunality ? "Yes" : "No"}
                  </p>
                </div>
                <div className="grid grid-flow-row  py-1">
                  <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
                    What problem/project is the team working on which the candidate
                    will be joining?
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {teamPreference?.teamWorkingProject}
                  </p>
                </div>
                <div className="grid grid-flow-row  py-1">
                  <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
                    What problem/project is the team working on which the candidate
                    will be joining?
                  </p>
                  <p style={{ color: "#475467", fontSize: 16 }}>
                    {teamPreference?.teamWorkingProjectProblem}
                  </p>
                </div>
                <div className="grid grid-flow-row  py-1">
                  <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
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
            {/* ICP Analysis */}
            <Card className="p-4 my-4">
              <div>
                <p style={{ color: "#008080", fontSize: 16, fontWeight: 500 }}>
                  ICP Analysis
                </p>
              </div>
              <div>
                <div className="flex gap-5 py-8">
                  {/* spectrum analysis */}
                  <div
                    className="p-2 w-full "
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#D0D5DD",
                    }}>
                    <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                      Spectrum Analysis
                    </p>
                    <div className="flex justify-center">
                      <div className="grid relative pt-5">
                        {pillars.map((row, index) => {
                          return (
                            <div
                              className={`flex text-end mt-32 ${
                                (index + 1) % 2 !== 0 && "hidden"
                              }`}
                              key={index}>
                              <div>
                                <p
                                  style={{
                                    color: "#101828",
                                    fontSize: 20,
                                    fontWeight: 500,
                                  }}>
                                  {row?.spectrum}
                                </p>
                                <p style={{ color: "#475467", fontSize: 14 }}>
                                  {row?.description}
                                </p>
                              </div>
                              <div className="flex text-center p-2">
                                <p
                                  style={{
                                    color: "#475467",
                                    fontSize: 33,
                                  }}>
                                  <span style={{ fontSize: 30 }}>&#x2022;</span>
                                  &#x2015;
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        <ColorBodySvg />
                      </div>
                      <div className="grid relative pt-5">
                        {pillars.map((row, index) => {
                          return (
                            <div
                              className={`flex mt-16  ${
                                index % 2 !== 0 && "hidden"
                              }`}
                              key={index}>
                              <div className="flex text-center p-2">
                                <p
                                  style={{
                                    color: "#475467",
                                    fontSize: 33,
                                  }}>
                                  &#x2015;
                                  <span style={{ fontSize: 30 }}>&#x2022;</span>
                                </p>
                              </div>
                              <div>
                                <p
                                  style={{
                                    color: "#101828",
                                    fontSize: 20,
                                    fontWeight: 500,
                                  }}>
                                  {row?.spectrum}
                                </p>
                                <p style={{ color: "#475467", fontSize: 14 }}>
                                  {row?.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                {/* charts */}
                <div className="grid grid-cols-3 gap-5 py-3">
                  {/* chart 1 Emotional Flexibility */}
                  <div>
                    <p style={{ color: "#475467", fontSize: 18, fontWeight: 600 }}>
                      Emotional Flexibility
                    </p>

                    {/* circle chart */}
                    <div className="py-5">
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
                      <div className="mt-3">
                        {/* header */}
                        <div className="grid grid-cols-4">
                          <div className="col-span-2">
                            <p
                              style={{
                                color: "#475467",
                                fontSize: 16,
                                fontWeight: 500,
                              }}>
                              Label
                            </p>
                          </div>
                          <div className="flex justify-center">
                            <p
                              style={{
                                color: "#475467",
                                fontSize: 16,
                                fontWeight: 500,
                              }}>
                              Rating out of 5
                            </p>
                          </div>
                          <div className="flex justify-center">
                            <p
                              style={{
                                color: "#475467",
                                fontSize: 16,
                                fontWeight: 500,
                              }}>
                              %
                            </p>
                          </div>
                        </div>
                        {/* body */}
                        <div className="grid grid-flow-row gap-3">
                          {convertedEmtional.map((data, index) => {
                            let row = data.data[0];
                            return (
                              <div
                                className="grid grid-cols-4"
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
                                <div className="flex justify-center">
                                  <p
                                    style={{
                                      color: "#475467",
                                      fontSize: 16,
                                    }}>
                                    {row.rating}
                                  </p>
                                </div>
                                <div className="flex justify-center">
                                  <p
                                    style={{
                                      color: "#475467",
                                      fontSize: 16,
                                    }}>
                                    {row.value} %
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* chart 2 Cognitive Agility */}
                  <div>
                    <p style={{ color: "#475467", fontSize: 18, fontWeight: 600 }}>
                      Cognitive Agility
                    </p>

                    {/* circle chart */}
                    <div className="py-5">
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
                      <div className="mt-3">
                        {/* header */}
                        <div className="grid grid-cols-4">
                          <div className="col-span-2">
                            <p
                              style={{
                                color: "#475467",
                                fontSize: 16,
                                fontWeight: 500,
                              }}>
                              Label
                            </p>
                          </div>
                          <div className="flex justify-center">
                            <p
                              style={{
                                color: "#475467",
                                fontSize: 16,
                                fontWeight: 500,
                              }}>
                              Rating out of 5
                            </p>
                          </div>
                          <div className="flex justify-center">
                            <p
                              style={{
                                color: "#475467",
                                fontSize: 16,
                                fontWeight: 500,
                              }}>
                              %
                            </p>
                          </div>
                        </div>
                        {/* body */}
                        <div className="grid grid-flow-row gap-3">
                          {convertCognitive.map((data, index) => {
                            let row = data.data[0];
                            return (
                              <div
                                className="grid grid-cols-4"
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
                                <div className="flex justify-center">
                                  <p
                                    style={{
                                      color: "#475467",
                                      fontSize: 16,
                                    }}>
                                    {row.rating}
                                  </p>
                                </div>
                                <div className="flex justify-center">
                                  <p
                                    style={{
                                      color: "#475467",
                                      fontSize: 16,
                                    }}>
                                    {row.value} %
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* chart 3 Sociability Skills */}
                  <div>
                    <p style={{ color: "#475467", fontSize: 18, fontWeight: 600 }}>
                      Sociability Skills
                    </p>

                    {/* circle chart */}
                    <div className="py-5">
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
                      <div className="mt-3">
                        {/* header */}
                        <div className="grid grid-cols-4">
                          <div className="col-span-2">
                            <p
                              style={{
                                color: "#475467",
                                fontSize: 16,
                                fontWeight: 500,
                              }}>
                              Label
                            </p>
                          </div>
                          <div className="flex justify-center">
                            <p
                              style={{
                                color: "#475467",
                                fontSize: 16,
                                fontWeight: 500,
                              }}>
                              Rating out of 5
                            </p>
                          </div>
                          <div className="flex justify-center">
                            <p
                              style={{
                                color: "#475467",
                                fontSize: 16,
                                fontWeight: 500,
                              }}>
                              %
                            </p>
                          </div>
                        </div>
                        {/* body */}
                        <div className="grid grid-flow-row gap-3">
                          {convertSociability.map((data, index) => {
                            let row = data.data[0];
                            return (
                              <div
                                className="grid grid-cols-4"
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
                                <div className="flex justify-center">
                                  <p
                                    style={{
                                      color: "#475467",
                                      fontSize: 16,
                                    }}>
                                    {row.rating}
                                  </p>
                                </div>
                                <div className="flex justify-center">
                                  <p
                                    style={{
                                      color: "#475467",
                                      fontSize: 16,
                                    }}>
                                    {row.value} %
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          )}
        </div>
        </div>
      <Footer />
    </div>
  );
};
