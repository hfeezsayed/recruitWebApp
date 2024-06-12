import React, { useState } from "react";
import { BarChart, PieChart } from "@mui/x-charts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { SideNav } from "../../../widgets/sidenav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import { talentAnalysisResultData } from "../../../dummy/Data";
import { convertCompetencies } from "../../../utils/function";
import { useEffect, useLocation } from "react";
import axios from "axios";

export const TalentAnalysisResult = () => {
  const [userData, setUserData] = useState(talentAnalysisResultData);
  const [emotional, setEmotional] = useState(null);
  const [cognitive, setCongnitive] = useState(null);
  const [sociability, setSociability] = useState(null);



  // useEffect(() => {
  //   console.log("userData ", userData);
  //   setEmotional(convertCompetencies(
  //     userData?.emtionalFlexibility[1].competencies
  //   ));
  //   setCongnitive(convertCompetencies( 
  //     userData?.cognitiveAgility[1].competencies, "Cognitive"
  //   ));
  //   setSociability(convertCompetencies(
  //     userData?.sociabilitySkills[1].competencies, "Sociability"
  //   ));

  //   console.log("emotional = ", emotional);
  // }, []);


  const  convertedEmtional = convertCompetencies(
    userData?.emtionalFlexibility[1]
  );

  const convertSociability =  convertCompetencies(
      userData?.sociabilitySkills[1]
    );

  const convertCognitive =  convertCompetencies( 
      userData?.cognitiveAgility[1]
    );

    const { version } = useLocation().state || {};

  useEffect( () => {
    const user = JSON.parse(localStorage.getItem("token"));
    axios.get("http://localhost:8080/xen/getCandidateSpectrumResults?candidateId="+user.userId+"&versionNo="+version)
    .then(response => {
        console.log(response.data);
        setUserData(response.data);
        //console.log(response.data?.emtionalFlexibility[1].competencies);
    }) 
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div className="flex justify-between">
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Talent Spectrum Analysis Results Summary
              </p>
              <p style={{ color: "#D0D5DD", fontSize: 16, fontWeight: 600 }}>
                Date Taken : 22nd May 2024
              </p>
            </div>
            <p style={{ color: "#475467", fontSize: 14 }}>
              Along with the table, a bar and pie chart has been shown,
              visualizing your scores across different spectrums
            </p>
            {/* charts */}
            <div className="grid grid-cols-3 gap-5 py-3">
              {/* chart 1 Emotional Flexibility */}
              <div>
                <p style={{ color: "#475467", fontSize: 18, fontWeight: 600 }}>
                  Emotional Flexibility
                </p>
                {/* bar chart */}
                <div>
                  <BarChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: [userData?.emtionalFlexibility[0]?.pillar1 || ""],
                      },
                    ]}
                    dataset={userData?.emtionalFlexibility[0]?.competencies}
                    series={[
                      { dataKey: "Empathy", color: "#AED7B7" },
                      {
                        dataKey: "Resilience",
                        color: "#A8A3CF",
                      },
                      {
                        dataKey: "Stress management",
                        color: "#F9D4DE",
                      },
                      {
                        dataKey: "Self-awareness",
                        color: "#BFE1F4",
                      },
                    ]}
                    height={200}
                    borderRadius={4}
                  />
                  <div className="flex gap-5 ">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#AED7B7",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Empathy
                    </p>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#A8A3CF",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Resilience
                    </p>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#F9D4DE",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Stress Managment
                    </p>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#BFE1F4",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Self- Awarness
                    </p>
                  </div>
                </div>
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
                {/* bar chart */}
                <div>
                  <BarChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: [userData?.cognitiveAgility[0]?.pillar1],
                      },
                    ]}
                    dataset={userData?.cognitiveAgility[0]?.competencies}
                    series={[
                      { dataKey: "Adaptability", color: "#62B2FD" },
                      {
                        dataKey: "Decision Making",
                        color: "#F99BAB",
                      },
                      {
                        dataKey: "Problem Solving",
                        color: "#FFB44F",
                      },
                      {
                        dataKey: "Time Management",
                        color: "#9BDFC4",
                      },
                    ]}
                    height={200}
                    borderRadius={4}
                  />
                  <div className="flex gap-5 ">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#62B2FD",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Empathy
                    </p>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#F99BAB",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Resilience
                    </p>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#FFB44F",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Stress Managment
                    </p>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#9BDFC4",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Self- Awarness
                    </p>
                  </div>
                </div>
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
                {/* bar chart */}
                <div>
                  <BarChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: [userData?.sociabilitySkills[0]?.pillar1],
                      },
                    ]}
                    dataset={userData?.sociabilitySkills[0]?.competencies}
                    series={[
                      { dataKey: "Communication skills", color: "#FBE29F" },
                      {
                        dataKey: "Collaboration",
                        color: "#E8A09A",
                      },
                      {
                        dataKey: "Relationship building",
                        color: "#C6D68F",
                      },
                      {
                        dataKey: "Conflict management",
                        color: "#9BBFE0",
                      },
                    ]}
                    height={200}
                    borderRadius={4}
                  />
                  <div className="flex gap-5 ">
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#FBE29F",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Empathy
                    </p>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#E8A09A",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Resilience
                    </p>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#C6D68F",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Stress Managment
                    </p>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 16,
                      }}>
                      <span
                        style={{
                          fontSize: 24,
                          color: "#9BBFE0",
                          padding: 2,
                        }}>
                        &#x2022;
                      </span>
                      Self- Awarness
                    </p>
                  </div>
                </div>
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
            {/* table */}
            <div>
              <Table
                sx={{
                  width: 625,
                }}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ color: "#101828", fontSize: 14, fontWeight: 600 }}>
                      Dimensions
                    </TableCell>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                        }}>
                        Competencies
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                        }}>
                        Ratings out of 5
                      </TableCell>
                    </TableRow>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "#475467",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Emotional Flexibility
                    </TableCell>
                    {convertedEmtional?.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell
                          sx={{
                            color: "#475467",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          {row.data[0].label}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#008080",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          {row.data[0].rating}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableRow>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "#475467",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Cognitive Agility
                    </TableCell>
                    {convertCognitive?.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell
                          sx={{
                            color: "#475467",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          {row.data[0].label}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#008080",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          {row.data[0].rating}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableRow>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "#475467",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Sociability Skills
                    </TableCell>
                    {convertSociability?.map((row, index) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        key={index}>
                        <TableCell
                          sx={{
                            color: "#475467",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          {row.data[0].label}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#008080",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          {row.data[0].rating}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};