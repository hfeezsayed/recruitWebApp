import { useNavigate } from "react-router-dom";
//Top and Side navbar
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { MdThumbUp } from "react-icons/md";
import { FaThumbsDown } from "react-icons/fa6";
//External Css
import "./reference.css";

const Rating = () => {
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
                  className="font-medium"
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
            Please rate the candidates using a scale of 1 (High Score), 2
            (Medium Score), and 3 (Low Score). You can drag and drop the text to
            indicate your preference. Your feedback is vital for assessing the
            candidates' suitability for the [Position] role at [Company Name].
          </p>

          <div className="questions-block">
            <p className="py-8 text-sm text-end">Statement 2/10</p>
            <div className="table-list">
              <p className="pb-4 text-sm font-medium smallTextGray">
                Question 2
              </p>
              <div className="rating">
                <div className="priority-ranking w-11/12">
                  <div className="header-content border p-4 bg-light-gray rounded-sm">
                    <p className="text-sm font-medium main-black">
                      In your perspective, what feedback would you give to the
                      candidate?
                    </p>
                  </div>
                  <div className="body-content mt-5 text-sm">
                    <p className="flex">
                      Highest
                      <span>
                        <MdThumbUp className="thumb-green" />
                      </span>
                    </p>
                    <p>
                      The candidate demonstrated exceptional skills, exceeded
                      expectations, and made significant contributions to the
                      team.
                    </p>
                    <p>
                      While the candidate has strengths, there are areas where
                      they could improve their skills or knowledge to enhance
                      their performance.
                    </p>
                    <p>
                      The candidate performed adequately in their role, but
                      there were areas where they could have exceeded
                      expectations.
                    </p>
                    <p className="flex">
                      Lowest
                      <span>
                        <FaThumbsDown className="thumb-pink" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="next-btn">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#008080", color: "#ffffff" }}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
