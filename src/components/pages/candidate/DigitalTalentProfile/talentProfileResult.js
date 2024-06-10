import React, { useState } from "react";
import { MdOutlinePhone } from "react-icons/md";
import {
  Button,
  Chip,
  IconButton,
  Rating,
  Slider,
  styled,
} from "@mui/material";
import { LuGraduationCap } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { PiGenderNeuter } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
import { LuRectangleHorizontal } from "react-icons/lu";
import { TopNav } from "../../../widgets/topNav";
import logo from "../../../../assets/images/logo.png";
import { Footer } from "../../../widgets/footer";
import { TalentProfileResultData } from "../../../dummy/Data";
import Briefcase from "../../../../assets/images/Briefcase.png";
import Location from "../../../../assets/images/Location.png";
import Rocket from "../../../../assets/images/Rocket.png";
import { HumanBody } from "../../../../assets/icon/humanBody";
import { checkSkillLevel } from "../../../utils/function";
import { BarChart, PieChart, axisClasses } from "@mui/x-charts";

export const TalentProfileResult = () => {
  const [userData, setUserData] = useState(TalentProfileResultData);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#008080",
    },
    "& .MuiRating-iconHover": {
      color: "#A2C4D4",
    },
  });

  return (
    <div>
      {/* top nav */}
      <div className="flex w-full">
        <div className="p-2 pl-5 flex gap-2">
          <img src={logo} alt="logo" />
          <p style={{ color: "#475467", fontSize: 25 }}>Xenhire</p>
        </div>
        <TopNav />
      </div>
      <div className="w-full min-h-screen">
        {/* top image */}
        <div>
          {/* image */}
          <div
            className="grid grid-cols-2  h-[600px] absolute w-full"
            style={{ backgroundColor: "#008080" }}>
            <div />
            <div className="w-full h-full">
              <img
                src="https://farm4.staticflickr.com/3224/3081748027_0ee3d59fea_z_d.jpg"
                alt="persone"
                className="w-full h-[600px]"
              />
            </div>
          </div>
          {/* data */}
          <div className="relative pt-16 pl-24 h-[600px]">
            <p style={{ fontSize: 77, fontWeight: 600, color: "#ffffff" }}>
              Hello!
              <br /> I’m {userData?.name}
            </p>
            <div className="grid grid-flow-row gap-3 mt-5">
              <div className="flex gap-5 items-center">
                <IconButton sx={{ p: 1, bgcolor: "#FFFFFF15" }}>
                  <MdOutlinePhone style={{ color: "#FFFFFF" }} />
                </IconButton>
                <p style={{ fontSize: 18, color: "#ffffff" }}>
                  Mobile Number: {userData?.mobileNo}
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <IconButton sx={{ p: 1, bgcolor: "#FFFFFF15" }}>
                  <LuGraduationCap style={{ color: "#FFFFFF" }} />
                </IconButton>
                <p style={{ fontSize: 18, color: "#ffffff" }}>
                  Education: {userData?.education}
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <IconButton sx={{ p: 1, bgcolor: "#FFFFFF15" }}>
                  <IoLocationOutline style={{ color: "#FFFFFF" }} />
                </IconButton>
                <p style={{ fontSize: 18, color: "#ffffff" }}>
                  {userData?.location}
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <IconButton sx={{ p: 1, bgcolor: "#FFFFFF15" }}>
                  <PiGenderNeuter style={{ color: "#FFFFFF" }} />
                </IconButton>
                <p style={{ fontSize: 18, color: "#ffffff" }}>
                  Gender: {userData?.gender}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* summary */}
        <div
          className="border rounded-lg mx-8 my-5 p-3"
          style={{ backgroundColor: "#B2D8D815", borderColor: "#B2D8D8" }}>
          <p style={{ color: "#232323", fontSize: 22 }}>{userData?.summary}</p>
          <div className="flex gap-5 mt-5">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#008080",
                color: "#ffffff",
                textTransform: "none",
              }}
              startIcon={<MdEmail style={{ color: "#ffffff" }} />}>
              Email me
            </Button>
            <Button
              variant="text"
              style={{
                color: "#008080",
                textDecorationLine: "underline",
              }}
              startIcon={<HiOutlineDownload style={{ color: "#008080" }} />}>
              Download CV
            </Button>
          </div>
        </div>
        {/* domain , skill , spectrum */}
        <div className="grid grid-cols-3 my-5 mx-8 gap-5">
          {/* card 1 domain */}
          <div
            className="border rounded-lg p-5"
            style={{
              backgroundColor: "#B2D8D815",
              borderColor: "#B2D8D8",
            }}>
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Domain
              </p>
              <p style={{ color: "#475467", fontSize: 18 }}>
                Quality Assurance Engineer
              </p>
              <div className="flex gap-3">
                <p style={{ color: "#475467", fontSize: 18 }}>Expert</p>
                {Array.from(Array(userData?.expert), (e, i) => {
                  return (
                    <FaStar
                      style={{ color: "#008080", fontSize: 22 }}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
            <div className="mt-24">
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Preference
              </p>
              <img src={Briefcase} alt="Briefcase" />
              <div className="pb-10">
                <p style={{ color: "#008080", fontSize: 18 }}>Open To</p>
                {userData?.openTo?.map((e, i) => {
                  return (
                    <Chip
                      label={e}
                      key={i}
                      sx={{ bgcolor: "#00808015", mr: 1 }}
                    />
                  );
                })}
              </div>
              <img src={Location} alt="location" />
              <div className="pb-10">
                <p style={{ color: "#008080", fontSize: 18 }}>
                  Ready to relocate
                </p>
                <Chip
                  label={userData?.readyToRelocate ? "Yes" : "No"}
                  sx={{ bgcolor: "#00808015", mr: 1 }}
                />
              </div>
              <img src={Rocket} alt="Rocket" />
              <div className="pb-10">
                <p style={{ color: "#008080", fontSize: 18 }}>
                  Ready to travel
                </p>
                <Chip
                  label={userData?.readyToTravel ? "Yes" : "No"}
                  sx={{ bgcolor: "#00808015", mr: 1 }}
                />
              </div>
            </div>
          </div>
          {/* card 2 skill */}
          <div>
            <div
              className="border rounded-lg p-5"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#D0D5DD",
              }}>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Credentials
              </p>
              <div className="grid grid-flow-row">
                <li style={{ color: "#736C7C", fontSize: 18 }}>
                  Bachelor of Science in Computer Science
                </li>
                <li style={{ color: "#736C7C", fontSize: 18 }}>
                  Certified Scrum Master
                </li>
                <li style={{ color: "#736C7C", fontSize: 18 }}>
                  AWS Certified Solutions Architect
                </li>
              </div>
            </div>
            <div
              className="border rounded-lg p-5 mt-3"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#D0D5DD",
              }}>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Top 5 Skills
              </p>
              <div>
                <p style={{ color: "#008080", fontSize: 18 }}>
                  Technical Skills
                </p>
                {userData.technicalSkill.map((data, index) => {
                  return (
                    <div key={index}>
                      <div className="flex justify-between">
                        <p style={{ color: "#181818", fontSize: 16 }}>
                          {data.skill}
                        </p>
                        <p style={{ color: "#181818", fontSize: 16 }}>
                          {checkSkillLevel(data?.value)}
                        </p>
                      </div>
                      <Slider
                        track={false}
                        value={data?.value || 0}
                        sx={{
                          "& .MuiSlider-thumb": {
                            color: "#008080",
                          },
                          "& .MuiSlider-rail": {
                            color: "#E1F0F0",
                            opacity: 1,
                          },
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="mt-5">
                <p style={{ color: "#008080", fontSize: 18 }}>
                  Technical Skills
                </p>
                {userData.technicalSkill.map((data, index) => {
                  return (
                    <div key={index}>
                      <div className="flex justify-between">
                        <p style={{ color: "#181818", fontSize: 16 }}>
                          {data.skill}
                        </p>
                        <p style={{ color: "#181818", fontSize: 16 }}>
                          {checkSkillLevel(data?.value)}
                        </p>
                      </div>
                      <Slider
                        track={false}
                        value={data?.value || 0}
                        sx={{
                          "& .MuiSlider-thumb": {
                            color: "#008080",
                          },
                          "& .MuiSlider-rail": {
                            color: "#E1F0F0",
                            opacity: 1,
                          },
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* card 3 human body spectrum analysis */}
          <div
            className="border rounded-lg p-5"
            style={{
              backgroundColor: "#B2D8D815",
              borderColor: "#B2D8D8",
            }}>
            <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
              Spectrum Analysis
            </p>
            <div className="py-8 absolute mt-10">
              <HumanBody />
            </div>
            <div className="grid justify-end relative mt-14">
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
                      CORE VALUES
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
                      SKILLS
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
                      CORE VALUES
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
                      SKILLS
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
                      SKILLS
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
        </div>
        {/* Core Values */}
        <div
          className="border rounded-lg mx-8 p-5"
          style={{ borderColor: "#D0D5DD" }}>
          <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
            Core Values
          </p>
          <div className="flex mt-3 gap-40">
            <div className="grid grid-flow-row gap-3">
              {userData?.coreValues.map((data, index) => {
                return (
                  <div key={index}>
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      {data.name}
                    </p>
                    <StyledRating
                      name="customized-color"
                      value={data?.point || 0}
                      max={10}
                      sx={{
                        "& .MuiRating-icon": {
                          width: "2.5rem",
                        },
                      }}
                      icon={<LuRectangleHorizontal fill="#008080" />}
                      emptyIcon={<LuRectangleHorizontal />}
                    />
                  </div>
                );
              })}
            </div>
            <div className="grid grid-flow-row gap-3">
              {userData?.coreValues.map((data, index) => {
                return (
                  <div key={index}>
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 16,
                        fontWeight: 500,
                      }}>
                      {data.name}
                    </p>
                    <StyledRating
                      name="customized-color"
                      value={data?.point || 0}
                      max={10}
                      sx={{
                        "& .MuiRating-icon": {
                          width: "2.5rem",
                        },
                      }}
                      icon={<LuRectangleHorizontal fill="#008080" />}
                      emptyIcon={<LuRectangleHorizontal />}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Competencies Analysis */}
        <div
          className="border rounded-lg mx-8 p-5 my-5"
          style={{ borderColor: "#D0D5DD" }}>
          <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
            Competencies Analysis
          </p>
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
                      data: ["Emotional Flexibility"],
                    },
                  ]}
                  dataset={userData?.emotionalFlexibilityBar}
                  series={[
                    { dataKey: "empathy", color: "#AED7B7" },
                    {
                      dataKey: "resilience",
                      color: "#A8A3CF",
                    },
                    {
                      dataKey: "stressManagment",
                      color: "#F9D4DE",
                    },
                    {
                      dataKey: "selfAwarness",
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
                      style={{ fontSize: 24, color: "#AED7B7", padding: 2 }}>
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
                      style={{ fontSize: 24, color: "#A8A3CF", padding: 2 }}>
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
                      style={{ fontSize: 24, color: "#F9D4DE", padding: 2 }}>
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
                      style={{ fontSize: 24, color: "#BFE1F4", padding: 2 }}>
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
                    series={userData?.emotionalFlexibilityCircle}
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
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#AED7B7",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Empathy
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          3.7
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          90 %
                        </p>
                      </div>
                    </div>
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#A8A3CF",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Resilience
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          2.5
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          70 %
                        </p>
                      </div>
                    </div>
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#F9D4DE",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Stress- Managment
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          1.6
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          40 %
                        </p>
                      </div>
                    </div>
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#BFE1F4",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Self - Awareness
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          0.8
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          100 %
                        </p>
                      </div>
                    </div>
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
                      data: ["Cognitive Agility"],
                    },
                  ]}
                  dataset={userData?.cognitiveAgilityBar}
                  series={[
                    { dataKey: "empathy", color: "#62B2FD" },
                    {
                      dataKey: "resilience",
                      color: "#F99BAB",
                    },
                    {
                      dataKey: "stressManagment",
                      color: "#FFB44F",
                    },
                    {
                      dataKey: "selfAwarness",
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
                      style={{ fontSize: 24, color: "#62B2FD", padding: 2 }}>
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
                      style={{ fontSize: 24, color: "#F99BAB", padding: 2 }}>
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
                      style={{ fontSize: 24, color: "#FFB44F", padding: 2 }}>
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
                      style={{ fontSize: 24, color: "#9BDFC4", padding: 2 }}>
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
                    series={userData?.cognitiveAgilityCircle}
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
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#62B2FD",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Empathy
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          3.7
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          90 %
                        </p>
                      </div>
                    </div>
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#F99BAB",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Resilience
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          2.5
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          70 %
                        </p>
                      </div>
                    </div>
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#FFB44F",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Stress- Managment
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          1.6
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          40 %
                        </p>
                      </div>
                    </div>
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#9BDFC4",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Self - Awareness
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          0.8
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          100 %
                        </p>
                      </div>
                    </div>
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
                      data: ["Sociability Skills"],
                    },
                  ]}
                  dataset={userData?.sociabilitySkillsBar}
                  series={[
                    { dataKey: "empathy", color: "#FBE29F" },
                    {
                      dataKey: "resilience",
                      color: "#E8A09A",
                    },
                    {
                      dataKey: "stressManagment",
                      color: "#C6D68F",
                    },
                    {
                      dataKey: "selfAwarness",
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
                      style={{ fontSize: 24, color: "#FBE29F", padding: 2 }}>
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
                      style={{ fontSize: 24, color: "#E8A09A", padding: 2 }}>
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
                      style={{ fontSize: 24, color: "#C6D68F", padding: 2 }}>
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
                      style={{ fontSize: 24, color: "#9BBFE0", padding: 2 }}>
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
                    series={userData?.sociabilitySkillsCircle}
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
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#FBE29F",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Empathy
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          3.7
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          90 %
                        </p>
                      </div>
                    </div>
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#E8A09A",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Resilience
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          2.5
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          70 %
                        </p>
                      </div>
                    </div>
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#C6D68F",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Stress- Managment
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          1.6
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          40 %
                        </p>
                      </div>
                    </div>
                    <div
                      className="grid grid-cols-4"
                      style={{
                        borderLeftWidth: 3,
                        borderLeftColor: "#9BBFE0",
                        borderRadius: 3,
                        paddingLeft: 5,
                      }}>
                      <div className="col-span-2">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          Self - Awareness
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          0.8
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 16,
                          }}>
                          100 %
                        </p>
                      </div>
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
