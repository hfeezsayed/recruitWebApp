import { useNavigate } from "react-router-dom";
//Top and Side navbar
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
//External Css
import "./reference.css";

const RatingQuestions = () => {
  const navigate = useNavigate();
  return (
    <div className="flex rating-questions">
      <ClientSideNav />
      <div className="w-full min-h-screen side-bar pr-3">
        <TopNav />
        <div className="body-content p-8">
          <div className="breadcrumb pb-2">
            <div role="presentation" className="breadcrumb-links">
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  className="font-medium"
                  onClick={() => navigate("/references/requestReferences")}
                >
                  Employee Reference Check Form
                </Link>
                <span>
                  <FaArrowRight />
                </span>
                <Link
                  underline="hover"
                  className="font-medium smallTextGray"
                  onClick={() => navigate("/references/ratingQuestions")}
                >
                  Rating Questions
                </Link>
                <span>
                  <FaArrowRight />
                </span>
                <Link
                  underline="hover"
                  aria-current="page"
                  className="font-medium"
                  onClick={() => navigate("/references/priorityRanking")}
                >
                  Priority Ranking
                </Link>
                <span>
                  <FaArrowRight />
                </span>
                <Link
                  underline="hover"
                  className="font-medium smallTextGray"
                  onClick={() => navigate("/references/rating")}
                >
                  Rating
                </Link>
              </Breadcrumbs>
            </div>
          </div>
          <h2 className="text-2xl pt-8 font-bold main-black">
            Employee Reference Check Form
          </h2>
          <p className="text-sm pt-3 smallTextGray">
            Please carefully review the following statements and select the one
            that best represents your response. There are no right or wrong
            answers. Your feedback plays a crucial role in helping us make
            informed decisions about the candidate's suitability for the
            [Position] role at [Company Name].
          </p>

          <div className="questions-block">
            <p className="py-8 text-sm text-end">Statement 2/10</p>
            <div className="table-list">
              <p className="pb-4 text-sm font-medium smallTextGray">
                Question 2
              </p>
              <table className="table border rounded">
                <thead>
                  <tr>
                    <th colSpan={2} className="text-sm font-medium main-black">
                      Imagine a situation where a critical project deadline was
                      approaching, and the team was relying on the candidate to
                      deliver their part on time.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="The candidate consistently met deadlines without requiring
                      follow-up."
                        />
                      </FormGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="The candidate sometimes needed reminders but ultimately
                      delivered on time."
                        />
                      </FormGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="The candidate often missed deadlines and required
                      extensions."
                        />
                      </FormGroup>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="next-btn">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#008080", color: "#ffffff" }}
                  onClick={() => navigate("/references/priorityRanking")}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingQuestions;
