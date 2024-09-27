import "../../assessments.css";
import { ClientSideNav } from "../../../../../widgets/clientSideNav";
import { TopNav } from "../../../../../widgets/topNav";
import { RadialBarChart, RadialBar } from "recharts";

const RatingAggregate = () => {
  const dummyData = [
    {
      id: 1,
      testName: "Time Management",
      percentage100: "85%",
      scoreRange: "High",
      bgColor: "#58A20F",
    },
    {
      id: 2,
      testName: "Resilience",
      percentage100: "72%",
      scoreRange: "Medium",
      bgColor: "#FFA500",
    },
    {
      id: 3,
      testName: "Adaptability",
      percentage100: "47%",
      scoreRange: "Low",
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
              Output of the Assessment
            </h2>
            <p className="text-sm pt-3 smallTextGray">
              Below are the result of the assessment you have taken.
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
          <div className="tableData pt-4">
            <table className="w-full">
              <tr>
                <td className="w-1/3 firstTd">
                  <table>
                    <tr>
                      <th>Rating Aggregate</th>
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
                <td className="w-[75%] secondTd">
                  <table>
                    <tr>
                      <th>Test Name</th>
                      <th className="text-center">Percentage (out of 100)</th>
                      <th className="text-center">Score Range</th>
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
                        <td className="text-center">{item.percentage100}</td>
                        <td className="text-center">{item.scoreRange}</td>
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
  );
};

export default RatingAggregate;
