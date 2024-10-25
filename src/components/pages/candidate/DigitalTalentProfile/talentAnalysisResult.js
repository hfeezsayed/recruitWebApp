import React, { useState, useEffect, Fragment } from "react";
import { PieChart } from "@mui/x-charts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import "./index.css";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import {
  BehaviouralAttributes,
  icpTemplateResultData,
  talentAnalysisResultData,
  workValueViewData,
} from "../../../dummy/Data";
import { convertCompetencies } from "../../../utils/function";
// import HumanBody from "../../../../assets/images/ColorBodyHuman.png";
import { ColorBodySvg } from "../../../../assets/icon/ColorBodySvg";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import Spinner from "../../../utils/spinner";
import { SideNav } from "../../../widgets/sidenav";

export const TalentAnalysisResult = () => {
  const spectrums = [
    "spectrum1",
    "spectrum2",
    "spectrum3",
    "spectrum4",
    "spectrum5",
  ];

  const [userData, setUserData] = useState(icpTemplateResultData);
  const [pillars, setPillars] = useState(spectrums);
  const [behaviour, setBehaviour] = useState(BehaviouralAttributes);
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
  const navigate = useNavigate();

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
        setBehaviour(response.data.behaviourAttributes);
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
              {/* spectrum analysis */}
              <p
                style={{
                  color: "#101828",
                  fontSize: 22,
                  fontWeight: 600,
                  marginTop: 10,
                }}
              >
                Spectrum Analysis
              </p>
              <div className="flex gap-5 py-5">
                {/* table */}
                <Table
                  sx={{
                    borderWidth: 1,
                  }}
                >
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
                        }}
                      >
                        Talent Dimensions
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                          borderWidth: 1,
                          bgcolor: "#F8F9FA",
                        }}
                      >
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
                          rowSpan={behaviour?.length + 1}
                        >
                          {/* <div
                              className="border rounded-lg p-4 w-full"
                              style={{
                                backgroundColor: "#ffffff",
                                borderColor: "#D0D5DD",
                              }}> */}
                          <div className="flex justify-center humanBodySk">
                            <ColorBodySvg />

                            <div className="grid relative pt-5 pl-3">
                              {pillars?.map((row, index) => {
                                return (
                                  <div className={`flex mt-10`} key={index}>
                                    {/* <div className="flex text-center p-2"></div> */}
                                    <div className="flex gap-3 items-center">
                                      <p
                                        style={{
                                          color: "#475467",
                                          fontSize: 33,
                                        }}
                                      >
                                        &#x2015;
                                        {/* <span style={{ fontSize: 30 }}>
                                          &#x2022;
                                        </span> */}
                                      </p>
                                      <p
                                        style={{
                                          color: "#101828",
                                          fontSize: 20,
                                          fontWeight: 500,
                                        }}
                                      >
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
                            }}
                          >
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
                }}
              >
                Pie Charts
              </p>
              {/* chart 1 table */}
              <div className="mt-5">
                <Table
                  sx={{
                    borderWidth: 1,
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                          borderWidth: 1,
                          bgcolor: "#F8F9FA",
                        }}
                      >
                        Emotional Flexibility
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                          borderWidth: 1,
                          bgcolor: "#F8F9FA",
                        }}
                      >
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
                        align="center"
                      >
                        Rating out of 5
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                          borderWidth: 1,
                          bgcolor: "#F8F9FA",
                        }}
                      >
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
                          rowSpan={5}
                        >
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
                              }}
                            >
                              <div
                                className="flex"
                                style={{
                                  borderLeftWidth: 3,
                                  borderLeftColor: row.color,
                                  borderRadius: 3,
                                  paddingLeft: 5,
                                }}
                                key={index}
                              >
                                <div className="col-span-2">
                                  <p
                                    style={{
                                      color: "#475467",
                                      fontSize: 16,
                                    }}
                                  >
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
                              align="center"
                            >
                              {row.rating}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#475467",
                                fontSize: 14,
                                fontWeight: 500,
                                borderWidth: 1,
                              }}
                            >
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
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                          borderWidth: 1,
                          bgcolor: "#F8F9FA",
                        }}
                      >
                        Cognitive Agility
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                          borderWidth: 1,
                          bgcolor: "#F8F9FA",
                        }}
                      >
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
                        align="center"
                      >
                        Rating out of 5
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                          borderWidth: 1,
                          bgcolor: "#F8F9FA",
                        }}
                      >
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
                          rowSpan={5}
                        >
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
                              }}
                            >
                              <div
                                className="flex"
                                style={{
                                  borderLeftWidth: 3,
                                  borderLeftColor: row.color,
                                  borderRadius: 3,
                                  paddingLeft: 5,
                                }}
                                key={index}
                              >
                                <div className="col-span-2">
                                  <p
                                    style={{
                                      color: "#475467",
                                      fontSize: 16,
                                    }}
                                  >
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
                              align="center"
                            >
                              {row.rating}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#475467",
                                fontSize: 14,
                                fontWeight: 500,
                                borderWidth: 1,
                              }}
                            >
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
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                          borderWidth: 1,
                          bgcolor: "#F8F9FA",
                        }}
                      >
                        Sociability Skills
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                          borderWidth: 1,
                          bgcolor: "#F8F9FA",
                        }}
                      >
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
                        align="center"
                      >
                        Rating out of 5
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 600,
                          borderWidth: 1,
                          bgcolor: "#F8F9FA",
                        }}
                      >
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
                          rowSpan={5}
                        >
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
                              }}
                            >
                              <div
                                className="flex"
                                style={{
                                  borderLeftWidth: 3,
                                  borderLeftColor: row.color,
                                  borderRadius: 3,
                                  paddingLeft: 5,
                                }}
                                key={index}
                              >
                                <div className="col-span-2">
                                  <p
                                    style={{
                                      color: "#475467",
                                      fontSize: 16,
                                    }}
                                  >
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
                              align="center"
                            >
                              {row.rating}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#475467",
                                fontSize: 14,
                                fontWeight: 500,
                                borderWidth: 1,
                              }}
                            >
                              {row.attribute}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </Fragment>
                  </TableBody>
                </Table>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#008080",
                    color: "#ffffff",
                    marginTop: "25px",
                    marginRight: "15px",
                  }}
                  onClick={() => navigate("/candidate")}
                >
                  Back
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
