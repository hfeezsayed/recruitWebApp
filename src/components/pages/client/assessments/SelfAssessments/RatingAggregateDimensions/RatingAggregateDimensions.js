import "../../assessments.css";
import { ClientSideNav } from "../../../../../widgets/clientSideNav";
import { TopNav } from "../../../../../widgets/topNav";
import { RadialBarChart, RadialBar } from "recharts";
//import nestedData from "./DummyNestedData.json";

const RatingAggregateDimensions = () => {
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
          <div className="Rating-Dimensions-table">
            <div className="tableData pt-4">
              <table>
                <thead>
                  <tr>
                    <th>Rating Aggregate Dim.</th>
                    <th>Test Name</th>
                    <th>Score (100%)</th>
                    <th>Score Range</th>
                    <th>Dimension</th>
                    <th>Dim. Score (%</th>
                    <th>Dim. Ranking</th>
                    <th>Dim. Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowspan="20" valign="top">
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
                    <td rowspan="4">Empathy</td>
                    <td rowspan="4">85%</td>
                    <td rowspan="4">High</td>
                  </tr>
                  <tr>
                    <td>Dimension 2</td>
                    <td>70%</td>
                    <td>2</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Dimension 3</td>
                    <td>65%</td>
                    <td>3</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Dimension 1</td>
                    <td>80%</td>
                    <td>1</td>
                    <td>High</td>
                  </tr>

                  <tr>
                    <td rowspan="4">Communication Skills</td>
                    <td rowspan="4">68%</td>
                    <td rowspan="4">Medium</td>
                  </tr>
                  <tr>
                    <td>Dimension 1</td>
                    <td>72%</td>
                    <td>1</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Dimension 2</td>
                    <td>65%</td>
                    <td>2</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Dimension 3</td>
                    <td>60%</td>
                    <td>3</td>
                    <td>Low</td>
                  </tr>

                  <tr>
                    <td rowspan="4">Relationship Building</td>
                    <td rowspan="4">85%</td>
                    <td rowspan="4">High</td>
                  </tr>
                  <tr>
                    <td>Dimension 2</td>
                    <td>70%</td>
                    <td>2</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Dimension 1</td>
                    <td>80%</td>
                    <td>1</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Dimension 3</td>
                    <td>65%</td>
                    <td>3</td>
                    <td>High</td>
                  </tr>

                  <tr>
                    <td rowspan="4">Self- Awareness</td>
                    <td rowspan="4">47%</td>
                    <td rowspan="4">Low</td>
                  </tr>
                  <tr>
                    <td>Dimension 1</td>
                    <td>72%</td>
                    <td>1</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Dimension 2</td>
                    <td>65%</td>
                    <td>2</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Dimension 3</td>
                    <td>60%</td>
                    <td>3</td>
                    <td>Low</td>
                  </tr>

                  <tr>
                    <td rowspan="4">Stress Management</td>
                    <td rowspan="4">85%</td>
                    <td rowspan="4">High</td>
                  </tr>
                  <tr>
                    <td>Dimension 2</td>
                    <td>70%</td>
                    <td>2</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Dimension 3</td>
                    <td>65%</td>
                    <td>3</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Dimension 1</td>
                    <td>80%</td>
                    <td>1</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingAggregateDimensions;
