import "../../assessments.css";
import { ClientSideNav } from "../../../../../widgets/clientSideNav";
import { TopNav } from "../../../../../widgets/topNav";
import { RadialBarChart, RadialBar } from "recharts";

const RatingStyle = () => {
  const dummyData = [
    {
      id: 1,
      testName: "Decision Making",
      styleScore: "85",
      percentage100: "85%",
      styleRanking: "1 (Most Dominant)",
      bgColor: "#58A20F",
    },
    {
      id: 2,
      testName: "Leadership",
      styleScore: "78",
      percentage100: "72%",
      styleRanking: "2",
      bgColor: "#FFA500",
    },
    {
      id: 3,
      testName: "Conflict Management",
      styleScore: "65",
      percentage100: "47%",
      styleRanking: "3 (Least Dominant)",
      bgColor: "#E05880",
    },
  ];

  //score chart start
  const Chartdata = [
    {
      name: "A",
      x: 30,
      fill: "#E05880",
    },
    {
      name: "B",
      x: 50,
      fill: "#FFA500",
    },
    {
      name: "C",
      x: 70,
      fill: "#58A20F",
    },
  ];
  //score chart end

  return (
    <div className="flex">
      <ClientSideNav />
      <div className="w-full min-h-screen side-bar pr-3">
        <TopNav />
        <div className="assessment p-8">
          <div className="top-content">
            <h2 className="text-2xl pt-4 font-bold main-black">
              Output of the Assessments
            </h2>
            <p className="text-sm pt-3 smallTextGray">
              Below are the result of the assessment you have taken
            </p>
          </div>
          <div className="middle-content flex justify-between pt-12">
            <h3 className="text-[18px] font-bold main-black">
              Assessment 1: Skill Spectrum Assessment
            </h3>
            <p className="text-sm pt-3 smallTextGray">
              <span>Date Taken: </span>
              <span>Jan 10, 2024</span>
            </p>
          </div>
          <div className="score-range pt-11">
            <h3 className="text-[18px] font-bold main-black">Score Range</h3>
            <div className="w-48">
              <p className="flex justify-between text-left pt-3">
                <span className="smallTextGray">Low:</span>
                <span style={{ color: "#E05880", fontWeight: "bold" }}>
                  0% – 49%
                </span>
              </p>
              <p className="flex justify-between text-left pt-3">
                <span className="smallTextGray">Medium:</span>
                <span style={{ color: "#FFA500", fontWeight: "bold" }}>
                  50% – 74%
                </span>
              </p>
              <p className="flex justify-between text-left pt-3">
                <span className="smallTextGray">High:</span>
                <span style={{ color: "#58A20F", fontWeight: "bold" }}>
                  75% – 100%
                </span>
              </p>
            </div>
          </div>
          <div className="rating-style-table">
            <div className="tableData pt-4">
              <table className="w-full">
                <tr>
                  <td className="w-[30%] firstTd">
                    <table>
                      <tr>
                        <th className="text-center">Rating Styles</th>
                      </tr>
                      <tr>
                        <td>
                          <RadialBarChart
                            width={167}
                            height={167}
                            data={Chartdata}
                            innerRadius="60%"
                            outerRadius="90%"
                            className="m-auto"
                          >
                            <RadialBar minAngle={30} dataKey="x" clockWise />
                          </RadialBarChart>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td className="w-[70%] secondTd">
                    <table>
                      <tr>
                        <th>Test Name</th>
                        <th className="text-center">Style Score</th>
                        <th className="text-center">Percentage (out of 100)</th>
                        <th className="text-center">Style Ranking</th>
                      </tr>
                      {dummyData.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <span
                              className="score-line"
                              style={{
                                backgroundColor: `${item.bgColor}`,
                              }}
                            ></span>
                            <span>{item.testName}</span>
                          </td>
                          <td className="text-center">{item.styleScore}</td>
                          <td className="text-center">{item.percentage100}</td>
                          <td className="text-center">{item.styleRanking}</td>
                        </tr>
                      ))}
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingStyle;
