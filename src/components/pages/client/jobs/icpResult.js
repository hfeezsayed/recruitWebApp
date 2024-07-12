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
  BehaviouralAttributes,
  icpTemplateResultData,
} from "../../../dummy/Data";
import { convertCompetencies } from "../../../utils/function";
// import HumanBody from "../../../../assets/images/ColorBodyHuman.png";
import { ColorBodySvg } from "../../../../assets/icon/ColorBodySvg";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import Spinner from "../../../utils/spinner";

export const IcpResult = () => {
  const spectrums = [
    "spectrum1",
    "spectrum2",
    "spectrum3",
    "spectrum4",
    "spectrum5"
  ];
  const [userData, setUserData] = useState(icpTemplateResultData);
  const [behaviour, setBehaviour] = useState(BehaviouralAttributes);
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
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const convertedEmtional = convertCompetencies(
    userData?.emtionalFlexibility[0]
  );

  const convertSociability = convertCompetencies(
    userData?.sociabilitySkills[0]
  );

  const convertCognitive = convertCompetencies(userData?.cognitiveAgility[0]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    console.log(location.state);
    setLoading(true);
    console.log(loading);
    if (location.state.jobData) {
      axiosInstance
        .get(
          `/getIcpResult?clientId=${user.userId}&jobId=${location.state.jobData.icpId}`
        )
        .then((response) => {
          console.log(location.data);
          setUserData(response.data);
          setPillars(response.data.pillars);
          setBehaviour(response.data.behaviourAttributes);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    } else {
      // setUserData(location.state)
      // setSpectrum1(location.state.pillars[0]);
      // setSpectrum2(location.state.pillars[1]);
      // setSpectrum3(location.state.pillars[2]);
      // setSpectrum4(location.state.pillars[3]);
      // setSpectrum5(location.state.pillars[4]);
    }
    setLoading(false);
  }, [location.state]);

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          {loading === true ? (
            <Spinner />
          ) 
          : 
          (
            <div className="p-8">
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Ideal Candidate Persona: Template 1
              </p>
              <p style={{ color: "#475467", fontSize: 14 }}>
                Below are the result of Template 1
              </p>
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
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
