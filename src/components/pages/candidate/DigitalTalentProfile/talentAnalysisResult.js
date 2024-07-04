import React, { useState, useEffect, Fragment } from "react";
import { PieChart } from "@mui/x-charts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import {
  icpTemplateResultData,
  talentAnalysisResultData,
} from "../../../dummy/Data";
import { convertCompetencies } from "../../../utils/function";
// import HumanBody from "../../../../assets/images/ColorBodyHuman.png";
import { ColorBodySvg } from "../../../../assets/icon/ColorBodySvg";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import Spinner from "../../../utils/spinner";
import { SideNav } from "../../../widgets/sidenav";

export const TalentAnalysisResult = () => {
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

  const [userData, setUserData] = useState();
  const [pillars, setPillars] = useState(spectrums);
  const [emotional, setEmotional] = useState(null);
  const [cognitive, setCongnitive] = useState(null);
  const [sociability, setSociability] = useState(null);
  const { version } = useLocation().state || {};
  const [spectrum1, setSpectrum1] = useState("spectrum1");
  const [spectrum2, setSpectrum2] = useState("spectrum2");
  const [spectrum3, setSpectrum3] = useState("spectrum3");
  const [spectrum4, setSpectrum4] = useState("spectrum4");
  const [spectrum5, setSpectrum5] = useState("spectrum5");
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance
      .get(
        "/getCandidateSpectrumResults?candidateId=" +
          user.userId +
          "&versionNo=" +
          version
      )
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
        setPillars(response.data.pillars);
        setLoading(false);
        // setSpectrum2(response.data.pillars[1]);
        // setSpectrum3(response.data.pillars[2]);
        // setSpectrum4(response.data.pillars[3]);
        // setSpectrum5(response.data.pillars[4]);
        //console.log(response.data?.emtionalFlexibility[1].competencies);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const convertedEmtional = convertCompetencies(
    userData?.emtionalFlexibility[0]
  );

  const convertSociability = convertCompetencies(
    userData?.sociabilitySkills[0]
  );

  const convertCognitive = convertCompetencies(userData?.cognitiveAgility[0]);

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          {loading === true ? (
            <Spinner />
          ) : (
            <div className="p-8">
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Talent Spectrum Analysis Results Summary
              </p>

              <p style={{ color: "#475467", fontSize: 14 }}>
                Date Taken : 22nd May 2024
              </p>
              <p style={{ color: "#475467", fontSize: 14 }}>
                Along with the table, a bar and pie chart has been shown,
                visualizing your scores across different spectrums
              </p>
              <div className="flex gap-5 py-8">
                {/* spectrum analysis */}
                <div
                  className="border rounded-lg p-4 w-full "
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#D0D5DD",
                  }}>
                  <p
                    style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
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
                {/* table */}
                {/* <div>
                <Table
                  sx={{
                    width: 625,
                    borderWidth: 1,
                  }}>
                  <TableHead>
                    <Fragment>
                      <TableRow>
                        <TableCell
                          rowSpan={5}
                          sx={{
                            color: "#101828",
                            fontSize: 14,
                            fontWeight: 600,
                            borderWidth: 1,
                            bgcolor: "#F8F9FA",
                          }}>
                          Dimensions
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: "#101828",
                            fontSize: 14,
                            fontWeight: 600,
                            borderWidth: 1,
                            bgcolor: "#F8F9FA",
                          }}>
                          Competencies
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "#101828",
                            fontSize: 14,
                            fontWeight: 600,
                            borderWidth: 1,
                            bgcolor: "#F8F9FA",
                          }}>
                          Ratings out of 5
                        </TableCell>
                      </TableRow>
                    </Fragment>
                  </TableHead>
                  <TableBody>
                    <Fragment>
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
                          }}
                          rowSpan={5}>
                          Emotional Flexibility
                        </TableCell>
                      </TableRow>
                      {convertedEmtional?.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{
                              color: "#475467",
                              fontSize: 14,
                              fontWeight: 500,
                              borderWidth: 1,
                            }}>
                            {row.data[0].label}
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#008080",
                              fontSize: 14,
                              fontWeight: 500,
                              borderWidth: 1,
                            }}>
                            {row.data[0].rating}
                          </TableCell>
                        </TableRow>
                      ))}
                    </Fragment>
                    <Fragment>
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
                          }}
                          rowSpan={5}>
                          Cognitive Agility
                        </TableCell>{" "}
                      </TableRow>
                      {convertCognitive?.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{
                              color: "#475467",
                              fontSize: 14,
                              fontWeight: 500,
                              borderWidth: 1,
                            }}>
                            {row.data[0].label}
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#008080",
                              fontSize: 14,
                              fontWeight: 500,
                              borderWidth: 1,
                            }}>
                            {row.data[0].rating}
                          </TableCell>
                        </TableRow>
                      ))}
                    </Fragment>
                    <Fragment>
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
                          }}
                          rowSpan={5}>
                          Sociability Skills
                        </TableCell>
                      </TableRow>
                      {convertSociability?.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{
                              color: "#475467",
                              fontSize: 14,
                              fontWeight: 500,
                              borderWidth: 1,
                            }}>
                            {row.data[0].label}
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#008080",
                              fontSize: 14,
                              fontWeight: 500,
                              borderWidth: 1,
                            }}>
                            {row.data[0].rating}
                          </TableCell>
                        </TableRow>
                      ))}
                    </Fragment>
                  </TableBody>
                </Table>
              </div> */}
              </div>
              {/* charts */}
              <div className="grid grid-cols-3 gap-5 py-3">
                {/* chart 1 Emotional Flexibility */}
                <div>
                  <p
                    style={{ color: "#475467", fontSize: 18, fontWeight: 600 }}>
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
                        {convertedEmtional?.map((data, index) => {
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
                  <p
                    style={{ color: "#475467", fontSize: 18, fontWeight: 600 }}>
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
                        {convertCognitive?.map((data, index) => {
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
                  <p
                    style={{ color: "#475467", fontSize: 18, fontWeight: 600 }}>
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
                        {convertSociability?.map((data, index) => {
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
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
