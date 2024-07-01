import React, { useState, useEffect, Fragment } from "react";
import { PieChart } from "@mui/x-charts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import { icpTemplateResultData } from "../../../dummy/Data";
import { convertCompetencies } from "../../../utils/function";
import { HumanBody } from "../../../../assets/icon/humanBody";
import { ClientSideNav } from "../../../widgets/clientSideNav";

export const IcpResult = () => {
  const [userData, setUserData] = useState(icpTemplateResultData);
  const [emotional, setEmotional] = useState(null);
  const [cognitive, setCongnitive] = useState(null);
  const [sociability, setSociability] = useState(null);
  const { version } = useLocation().state || {};
  const [spectrum1, setSpectrum1] = useState("spectrum1");
  const [spectrum2, setSpectrum2] = useState("spectrum2");
  const [spectrum3, setSpectrum3] = useState("spectrum3");
  const [spectrum4, setSpectrum4] = useState("spectrum4");
  const [spectrum5, setSpectrum5] = useState("spectrum5");

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
    if(location.state.jobData){
      axios
          .get(
            `https://xenflexer.northcentralus.cloudapp.azure.com/xen/getIcpResult?clientId=${user.userId}&jobId=${location.state.jobData.icpId}`,
            {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            }
          )
          .then((response) => {
            console.log(location.data);
            setUserData(response.data)
            setSpectrum1(response.data.pillars[0])
            setSpectrum2(response.data.pillars[1])
            setSpectrum3(response.data.pillars[2])
            setSpectrum4(response.data.pillars[3])
            setSpectrum5(response.data.pillars[4])
            //localStorage.setItem("jobId", data.data.id);
          })
          .catch((e) => {
            console.log(e);
          });
        }
        else{
          setUserData(location.state)
          setSpectrum1(location.state.pillars[0])
          setSpectrum2(location.state.pillars[1])
          setSpectrum3(location.state.pillars[2])
          setSpectrum4(location.state.pillars[3])
          setSpectrum5(location.state.pillars[4])
        }
  }, [location.state]);

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
              Ideal Candidate Persona: Template 1
            </p>

            <p style={{ color: "#475467", fontSize: 14 }}>
              Below are the result of Template 1
            </p>
            <div className="flex gap-5 py-8">
              {/* spectrum analysis */}
              <div
                className="border rounded-lg p-4"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#D0D5DD",
                }}>
                <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                  Spectrum Analysis
                </p>
                <div className="py-8 absolute">
                  <HumanBody COLOR={"#404040"} />
                </div>
                <div className="grid justify-end relative pt-5 pl-[180px]">
                  <div className="grid grid-flow-row gap-4">
                    <div className="grid grid-flow-col">
                      <div className="flex items-center justify-end p-2">
                        <p
                          style={{
                            color: "#7FAD89",
                            fontSize: 33,
                          }}>
                          <span style={{ fontSize: 30 }}>&#x2022;</span>
                          &#x2015;
                        </p>
                      </div>
                      <div
                        style={{
                          borderLeftWidth: 2,
                          borderRightWidth: 2,
                          borderLeftColor: "#7FAD89",
                          borderRightColor: "#7FAD89",
                          padding: 5,
                          borderRadius: 8,
                        }}>
                        <p
                          style={{
                            color: "#7FAD89",
                            fontSize: 16,
                            fontWeight: 500,
                          }}>
                          {spectrum1}
                        </p>
                        <p style={{ color: "#7FAD89", fontSize: 12 }}>
                          They serve as guiding <br /> principles that influence
                          <br />
                          decision-making, behavior, and <br />
                          interactions in both personal
                          <br /> and professional settings.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-flow-col">
                      <div className="flex items-center justify-end p-2">
                        <p
                          style={{
                            color: "#E1756B",
                            fontSize: 33,
                          }}>
                          <span style={{ fontSize: 30 }}>&#x2022;</span>
                          &#x2015;
                        </p>
                      </div>
                      <div
                        style={{
                          borderLeftWidth: 2,
                          borderRightWidth: 2,
                          borderLeftColor: "#E1756B",
                          borderRightColor: "#E1756B",
                          padding: 5,
                          borderRadius: 8,
                        }}>
                        <p
                          style={{
                            color: "#E1756B",
                            fontSize: 16,
                            fontWeight: 500,
                          }}>
                          {spectrum2}
                        </p>
                        <p style={{ color: "#E1756B", fontSize: 12 }}>
                          They serve as guiding <br /> principles that influence
                          <br />
                          decision-making, behavior, and <br />
                          interactions in both personal
                          <br /> and professional settings.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-flow-col">
                      <div className="flex items-center justify-end p-2">
                        <p
                          style={{
                            color: "#0F71CD",
                            fontSize: 33,
                          }}>
                          <span style={{ fontSize: 30 }}>&#x2022;</span>
                          &#x2015;
                        </p>
                      </div>
                      <div
                        style={{
                          borderLeftWidth: 2,
                          borderRightWidth: 2,
                          borderLeftColor: "#0F71CD",
                          borderRightColor: "#0F71CD",
                          padding: 5,
                          borderRadius: 8,
                        }}>
                        <p
                          style={{
                            color: "#0F71CD",
                            fontSize: 16,
                            fontWeight: 500,
                          }}>
                          {spectrum3}
                        </p>
                        <p style={{ color: "#0F71CD", fontSize: 12 }}>
                          They serve as guiding <br /> principles that influence
                          <br />
                          decision-making, behavior, and <br />
                          interactions in both personal
                          <br /> and professional settings.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-flow-col">
                      <div className="flex items-center justify-end p-2">
                        <p
                          style={{
                            color: "#FFB44F",
                            fontSize: 33,
                          }}>
                          <span style={{ fontSize: 30 }}>&#x2022;</span>
                          &#x2015;
                        </p>
                      </div>
                      <div
                        style={{
                          borderLeftWidth: 2,
                          borderRightWidth: 2,
                          borderLeftColor: "#FFB44F",
                          borderRightColor: "#FFB44F",
                          padding: 5,
                          borderRadius: 8,
                        }}>
                        <p
                          style={{
                            color: "#FFB44F",
                            fontSize: 16,
                            fontWeight: 500,
                          }}>
                          {spectrum4}
                        </p>
                        <p style={{ color: "#FFB44F", fontSize: 12 }}>
                          They serve as guiding <br /> principles that influence
                          <br />
                          decision-making, behavior, and <br />
                          interactions in both personal
                          <br /> and professional settings.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-flow-col">
                      <div className="flex items-center justify-end p-2">
                        <p
                          style={{
                            color: "#A8A3CF",
                            fontSize: 33,
                          }}>
                          <span style={{ fontSize: 30 }}>&#x2022;</span>
                          &#x2015;
                        </p>
                      </div>
                      <div
                        style={{
                          borderLeftWidth: 2,
                          borderRightWidth: 2,
                          borderLeftColor: "#A8A3CF",
                          borderRightColor: "#A8A3CF",
                          padding: 5,
                          borderRadius: 8,
                        }}>
                        <p
                          style={{
                            color: "#A8A3CF",
                            fontSize: 16,
                            fontWeight: 500,
                          }}>
                          {spectrum5}
                        </p>
                        <p style={{ color: "#A8A3CF", fontSize: 12 }}>
                          They serve as guiding <br /> principles that influence
                          <br />
                          decision-making, behavior, and <br />
                          interactions in both personal
                          <br /> and professional settings.
                        </p>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};
