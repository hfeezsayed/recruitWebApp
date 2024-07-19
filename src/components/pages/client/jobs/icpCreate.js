import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import { TopNav } from "../../../widgets/topNav";
import { QUESTIONS } from "../../../dummy/Data";
import { Footer } from "../../../widgets/footer";
import { ClientSideNav } from "../../../widgets/clientSideNav";

export const IcpCreate = () => {
  const navigate = useNavigate();

  const [questionList, setQuestionList] = useState(QUESTIONS);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);
  const IcpTemplateQuestion = questionList[currentQuestion];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .get("/getClientQuestionnaire")
      .then((data) => {
        console.log(data);
        setQuestionList(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleRatingChange = (question, option) => {
    question.selectedOption = option;
    question.selectedOrder = [];
  };

  const handleRankingChnage = (question, option) => {
    const sortedValues = option
      .sort((a, b) => a.number - b.number)
      .map((item) => item.value);

    question.selectedOption = null;
    question.selectedOrder = sortedValues;
    handleNext();
  };

  const handleNext = (e) => {
    e?.preventDefault();
    if (currentQuestion === questionList.length - 1) {
      handleSubmitData();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmitData = async () => {
    console.log(questionList);
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axiosInstance
      .post(
        `/saveIcpTemplateForJob?clientId=${user.userId}&jobId=${jobId}`,
        questionList
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  function ItemRanking({ id, content, index, moveItem }) {
    const ref = React.useRef(null);

    const [, drop] = useDrop({
      accept: "item",
      hover(item, monitor) {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
          return;
        }
        const hoverBoundingRect = ref.current?.getBoundingClientRect();
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        moveItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

    const [{ isDragging }, drag] = useDrag({
      type: "item",
      item: { id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const opacity = isDragging ? 0 : 1;

    drag(drop(ref));

    return (
      <div
        ref={ref}
        style={{
          opacity,
          padding: 3,
        }}>
        <text className=" pr-2 text-app-Teal text-2xl">&#x2022;</text>
        <text>{content}</text>
      </div>
    );
  }

  const RankingQuestion = ({ question }) => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
      // Fetch data from API
      fetchData();
    }, [question]);

    const fetchData = async () => {
      try {
        const formattedData = question.options.map((item, index) => ({
          id: index + 1,
          content: item,
        }));
        setItems(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const moveItem = (dragIndex, hoverIndex) => {
      const dragItem = items[dragIndex];
      const newItems = [...items];
      newItems.splice(dragIndex, 1);
      newItems.splice(hoverIndex, 0, dragItem);
      setItems(newItems);
    };

    const onSubmit = (e) => {
      e.preventDefault();
      if (items.length === 0) {
        question.selectedOption = null;
        question.selectedOrder = question;
        return;
      }
      const newArray = items.map((item) => item.content);
      question.selectedOption = null;
      question.selectedOrder = newArray;
      handleNext();
    };

    return (
      <form onSubmit={onSubmit} className="py-5">
        <div className="border p-3 mb-2">
          <p style={{ color: "#101828", fontWeight: 500, fontSize: 14 }}>
            {question.question}
          </p>
        </div>
        <DndProvider backend={HTML5Backend}>
          <div>
            <div className="flex gap-2 items-center">
              <p style={{ color: "#475467", fontSize: 14 }}>Highest</p>
              <IoMdThumbsUp style={{ color: "#58A20F", fontSize: 20 }} />
            </div>
            {items.map((item, index) => (
              <ItemRanking
                key={item.id}
                id={item.id}
                content={item.content}
                index={index}
                moveItem={moveItem}
              />
            ))}
            <div className="flex gap-2 items-center">
              <p style={{ color: "#475467", fontSize: 14 }}>Lowest</p>
              <IoMdThumbsDown style={{ color: "#E05880", fontSize: 20 }} />
            </div>
          </div>
        </DndProvider>
        {/* button */}
        <div className="flex justify-end mt-4 gap-4">
          {/* {!(currentQuestion === 0) && (
            <Button
              variant="contained"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              sx={{ bgcolor: "#008080" }}>
              Back
            </Button>
          )} */}
          <Button variant="contained" type="submit" sx={{ bgcolor: "#008080" }}>
            {currentQuestion === questionList.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    );
  };

  const RatingQuestion = () => {
    return (
      <form onSubmit={handleNext} className="py-5">
        <div className="border p-3">
          <p style={{ color: "#101828", fontWeight: 500, fontSize: 14 }}>
            {IcpTemplateQuestion.question}
          </p>
        </div>
        {/* question options */}
        <div className="border">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={IcpTemplateQuestion?.selectedOption}
            onChange={(e) => {
              handleRatingChange(IcpTemplateQuestion, e.target.value);
            }}
            name="radio-buttons-group">
            {IcpTemplateQuestion.options.map((data, index) => {
              return (
                <div className="border px-2 py-1" key={index}>
                  <FormControlLabel
                    required
                    key={index}
                    value={data}
                    control={
                      <Radio
                        sx={{
                          color: "#D0D5DD",
                          " &.Mui-checked": {
                            color: "#66B2B2",
                          },
                        }}
                      />
                    }
                    sx={{
                      ".MuiFormControlLabel-asterisk": {
                        display: "none",
                      },
                    }}
                    label={
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 14,
                          textTransform: "none",
                        }}>
                        {data}
                      </p>
                    }
                  />
                </div>
              );
            })}
          </RadioGroup>
        </div>
        {/* button */}
        <div className="flex justify-end mt-4 gap-4">
          <Button variant="contained" type="submit" sx={{ bgcolor: "#008080" }}>
            {currentQuestion === questionList.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    );
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div className="flex gap-2 items-center py-5">
              <p style={{ color: "#008080", fontWeight: 500, fontSize: 14 }}>
                Ideal Candidate Persona
              </p>
              <FaArrowRight style={{ fontSize: 16, color: "#D0D5DD" }} />
              <p
                style={{
                  color: currentSection > 0 ? "#008080" : "#475467",
                  fontWeight: 500,
                  fontSize: 14,
                }}>
                Questions
              </p>

              <FaArrowRight style={{ fontSize: 16, color: "#D0D5DD" }} />
              <p
                style={{
                  color: currentSection > 1 ? "#008080" : "#475467",
                  fontWeight: 500,
                  fontSize: 14,
                }}>
                Submit Assessment Confirmation
              </p>
            </div>
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Choose Ideal Candidate Persona Templates from the existing
                options
              </p>
              <p style={{ color: "#475467", fontSize: 14 }}>
                Please review and edit the information as needed, or use the
                same template. Also choose which option is suitable for you.
              </p>
            </div>
            <div className="mt-4">
              <p style={{ color: "#101828", fontSize: 14, textAlign: "right" }}>
                Statement {currentQuestion + 1}/{questionList.length}
              </p>
              <p
                style={{
                  color: "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  marginTop: 10,
                }}>
                Question {currentQuestion + 1}
              </p>
            </div>
            {/* questions */}
            {IcpTemplateQuestion?.questionType === "RANKING" && (
              <RankingQuestion question={IcpTemplateQuestion} />
            )}
            {IcpTemplateQuestion?.questionType === "RATING" && (
              <RatingQuestion />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
