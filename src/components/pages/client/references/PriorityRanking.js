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

const PriorityRanking = () => {
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
                  className="font-medium smallTextGray"
                  onClick={() => navigate("/references/priorityRanking")}
                >
                  Priority Ranking
                </Link>
                <span>
                  <FaArrowRight />
                </span>
                <Link
                  underline="hover"
                  className="font-medium"
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
            Provide a rating indicating which one is highest and which one is
            lowest, using a scale of 1 for the High Score, 2 being Medium Score
            and 3 for the Low Score. Participants have the flexibility to drag
            the text from its current position and place it in the position of
            another sentence. Your feedback plays a crucial role in helping us
            make informed decisions about the candidate's suitability for the
            [Position] role at [Company Name].
          </p>

          <div className="questions-block">
            <p className="py-8 text-sm text-end">Statement 2/10</p>
            <div className="table-list">
              <p className="pb-4 text-sm font-medium smallTextGray">
                Question 2
              </p>
              <div className="priority-ranking w-11/12">
                <div className="header-content border p-4 bg-light-gray rounded-sm">
                  <p className="text-sm font-medium main-black">
                    Imagine the candidate is working on a critical project with
                    tight deadlines. Suddenly, they receive an unexpected
                    request from a senior leader to incorporate additional
                    requirements, which will significantly impact the project
                    timeline. The candidate also has another team member seeking
                    their advice on a decision that could affect the direction
                    of work. How does the candidate prioritize theiractions?
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
                    The candidate quickly adapts to the new requirements,
                    adjusting the project plan to accommodate the changes while
                    keeping the senior leader informed.
                  </p>
                  <p>
                    The candidate focuses on making a prompt decision for the
                    team member, ensuring their work aligns with the overall
                    project objectives before addressing the new requirements.
                  </p>
                  <p>
                    The candidate immediately reassesses the timeline and manage
                    their time effectively to balance both the new requirements
                    and the team member’s request.
                  </p>
                  <p className="flex">
                    Lowest
                    <span>
                      <FaThumbsDown className="thumb-pink" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="next-btn">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#008080", color: "#ffffff" }}
                  onClick={() => navigate("/references/rating")}
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

export default PriorityRanking;
