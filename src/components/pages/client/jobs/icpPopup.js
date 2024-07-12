import React, { Fragment, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import { PieChart } from "@mui/x-charts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HumanBody } from "../../../../assets/icon/humanBody";
import { convertCompetencies } from "../../../utils/function";
import { ColorBodySvg } from "../../../../assets/icon/ColorBodySvg";
import { BehaviouralAttributes } from "../../../dummy/Data";

export const IcpPopup = ({ data, setClose, open }) => {
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
  const [spectrum1, setSpectrum1] = useState("spectrum1");
  const [spectrum2, setSpectrum2] = useState("spectrum2");
  const [spectrum3, setSpectrum3] = useState("spectrum3");
  const [spectrum4, setSpectrum4] = useState("spectrum4");
  const [spectrum5, setSpectrum5] = useState("spectrum5");

  const [behaviour, setBehaviour] = useState(BehaviouralAttributes);
  const [pillars, setPillars] = useState(spectrums);

  const convertedEmtional = convertCompetencies(data?.emtionalFlexibility[0]);

  const convertSociability = convertCompetencies(data?.sociabilitySkills[0]);

  const convertCognitive = convertCompetencies(data?.cognitiveAgility[0]);
  return (
    <Dialog
      open={open}
      onClose={setClose}
      PaperProps={{ sx: { minWidth: "70%" } }}>
      <DialogTitle>Icp Details</DialogTitle>
      <IconButton
        onClick={setClose}
        style={{ position: "absolute", top: 10, right: 10 }}>
        <IoIosCloseCircleOutline />
      </IconButton>
      <Divider />
      <DialogContent>
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
                                  <span style={{ fontSize: 30 }}>&#x2022;</span>
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
        {/* table */}
        {/* <div>
            <Table
              sx={{
                width: 550,
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
      </DialogContent>
    </Dialog>
  );
};
