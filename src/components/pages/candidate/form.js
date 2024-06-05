import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import {
  Autocomplete,
  Button,
  Radio,
  Rating,
  TextField,
  styled,
} from "@mui/material";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import { SideNav } from "../../widgets/sidenav";
import pdflogo from "../../../assets/images/fileUpload.png";
import { Footer } from "../../widgets/footer";
import { TopNav } from "../../widgets/topNav";
import { ValueAssesmentData, ValuseAssesmentRating } from "../../dummy/Data";

export const CandidateForm = () => {
  const [activeScreen, setActiveScreen] = useState(4);

  // form 1
  const [file, setFile] = useState();
  const [fullName, setFullName] = useState();
  const [title, setTitle] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [url, setUrl] = useState();
  const [summary, setSummary] = useState();
  const [education, setEducation] = useState([
    {
      degree: null,
      filedStudy: null,
      institutions: null,
      certificate: null,
      city: null,
      state: null,
    },
  ]);

  // form 2
  const [academicQualification, setAcademicQualification] = useState();
  const [specialization, setSpecialization] = useState();
  const [academicBackGround, setAcademicBackground] = useState();
  const [specificLicense, setSpecificLicense] = useState();
  const [yearsOfExperience, setYearOfExperience] = useState();
  const [experienceRole, setExperienceRole] = useState();
  const [workInIndustry, setWorkInIndustry] = useState();
  const [workRole, setWorkRole] = useState();
  const [experienceStackHolder, setExperienceStachHolder] = useState();
  const [noticePeriod, setNoticePeriod] = useState();
  const [teamHandling, setTeamHandling] = useState();
  const [teamSize, setTeamSize] = useState();
  const [indusrtyExperience, setIndustryExperience] = useState([
    { type: null, experience: null },
  ]);
  const [primarySkills, setPrimarySkill] = useState([
    { skill: null, expertise: null },
  ]);
  const [secoundrySkills, setSecoundrykill] = useState([
    { skill: null, expertise: null },
  ]);
  const [softwareApplication, setSoftwareApplication] = useState({
    app: null,
    experience: null,
  });

  // form 3
  const [workSetting, setWorkSetting] = useState();
  const [workShift, setWorkShift] = useState();
  const [preffrredLocation, setPrefferedLocation] = useState();
  const [openToRelocate, setOpenToRelocate] = useState();
  const [requiredForTravel, setRequiredForTravel] = useState();
  const [workSchedule, setWorkSchedule] = useState();
  const [workIndepandently, setWorkIndepandently] = useState();
  const [expectedSelary, setExpectedSelary] = useState({
    range: null,
    frequency: null,
  });
  const [expectedRange, setExpectedRange] = useState({
    range: null,
    frequency: null,
  });
  const [typeOfJobOpening, setTypeOfJobOpening] = useState();
  const [appealingWork, setAppealingWork] = useState();
  const [workEnvironment, setWorkEnvironment] = useState();
  const [companyOutlook, setCompanyOutlook] = useState();
  const [visaStatus, setVisaStatus] = useState();

  // form 4
  const [questionList, setQuestionList] = useState(ValueAssesmentData);
  const [ratingList, setRatingList] = useState(ValuseAssesmentRating);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mostLikelyOption, setMostLikelyOption] = useState({});
  const [leastLikelyOption, setLeastLikelyOption] = useState({});
  const [currentSection, setCurrentSection] = useState(1);
  const ValueAssesmentQuestion = questionList[currentQuestion];
  const options = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  // education
  const addEducation = () => {
    setEducation([
      ...education,
      {
        degree: null,
        filedStudy: null,
        institutions: null,
        certificate: null,
        city: null,
        state: null,
      },
    ]);
  };

  const handleChangeEducation = (e, value, i) => {
    let newFormValues = [...education];
    newFormValues[i][e] = value;
    setEducation(newFormValues);
  };

  const removeEducation = (i) => {
    let newFormValues = [...education];
    newFormValues.splice(i, 1);
    setEducation(newFormValues);
  };

  // industry experiance
  const addIndustryExperience = () => {
    setIndustryExperience([
      ...indusrtyExperience,
      {
        type: null,
        experience: null,
      },
    ]);
  };

  const handleChangeIndustryExperience = (e, value, i) => {
    let newFormValues = [...indusrtyExperience];
    newFormValues[i][e] = value;
    setIndustryExperience(newFormValues);
  };

  const removeIndustryExperience = (i) => {
    let newFormValues = [...indusrtyExperience];
    newFormValues.splice(i, 1);
    setIndustryExperience(newFormValues);
  };

  // primary skill
  const addPrimarySkill = () => {
    setPrimarySkill([...primarySkills, { skill: null, expertise: null }]);
  };

  const handleChangePrimarySkill = (e, value, i) => {
    let newFormValues = [...primarySkills];
    newFormValues[i][e] = value;
    setPrimarySkill(newFormValues);
  };

  const removePrimarySkill = (i) => {
    let newFormValues = [...primarySkills];
    newFormValues.splice(i, 1);
    setPrimarySkill(newFormValues);
  };

  // secoundry skill
  const addSecoundrySkill = () => {
    setSecoundrykill([...secoundrySkills, { skill: null, expertise: null }]);
  };

  const handleChangeSecoundrySkill = (e, value, i) => {
    let newFormValues = [...secoundrySkills];
    newFormValues[i][e] = value;
    setSecoundrykill(newFormValues);
  };

  const removeSecoundrySkill = (i) => {
    let newFormValues = [...secoundrySkills];
    newFormValues.splice(i, 1);
    setSecoundrykill(newFormValues);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleLeastlike = (question, option) => {
    setLeastLikelyOption({
      ...leastLikelyOption,
      [question.questionNo]: option,
    });
    question.leastLikely = option;
    if (mostLikelyOption[question.questionNo] === option) {
      setMostLikelyOption({
        ...mostLikelyOption,
        [question.questionNo]: "",
      });
      question.mostLikely = "";
    }
  };

  const handleMostlike = (question, option) => {
    setMostLikelyOption({
      ...mostLikelyOption,
      [question.questionNo]: option,
    });
    question.mostLikely = option;
    if (leastLikelyOption[question.questionNo] === option) {
      setLeastLikelyOption({
        ...leastLikelyOption,
        [question.questionNo]: "",
      });
      question.leastLikely = "";
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (ValueAssesmentQuestion) {
      if (
        ValueAssesmentQuestion?.mostLikely &&
        ValueAssesmentQuestion?.leastLikely
      ) {
        if (currentQuestion === questionList.length - 1) {
          setCurrentSection(2);
        } else {
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        }
      }
    }
  };

  const handlePrev = (event) => {
    event.preventDefault();
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleChangeRating = (value, i) => {
    let newFormValues = [...ratingList];
    newFormValues[i].rating = value;
    setRatingList(newFormValues);
  };

  const onPersonalInfoSubmit = async () => {
    console.log(
      file?.name,
      fullName,
      title,
      contactNumber,
      url,
      summary,
      education,
      "---------form 1"
    );

    await axios
      .post(
        "http://localhost/3000",
        file,
        fullName,
        title,
        contactNumber,
        url,
        summary,
        education
      )
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  const onPrefrenceSubmit = async () => {
    console.log(
      academicQualification,
      specialization,
      academicBackGround,
      specificLicense,
      yearsOfExperience,
      experienceRole,
      workInIndustry,
      workRole,
      experienceStackHolder,
      noticePeriod,
      teamHandling,
      teamSize,
      indusrtyExperience,
      primarySkills,
      secoundrySkills,
      softwareApplication,
      "---------form 2"
    );
    await axios
      .post(
        "http://localhost/3000",
        academicQualification,
        specialization,
        academicBackGround,
        specificLicense,
        yearsOfExperience,
        experienceRole,
        workInIndustry,
        workRole,
        experienceStackHolder,
        noticePeriod,
        teamHandling,
        teamSize,
        indusrtyExperience,
        primarySkills,
        secoundrySkills,
        softwareApplication
      )
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  const onWorkPrefrenceSumnit = async () => {
    console.log(
      workSetting,
      workShift,
      preffrredLocation,
      openToRelocate,
      requiredForTravel,
      workSchedule,
      workIndepandently,
      expectedSelary,
      expectedRange,
      typeOfJobOpening,
      appealingWork,
      workEnvironment,
      companyOutlook,
      visaStatus,
      "---------form 3"
    );

    await axios
      .post(
        "http://localhost/3000",
        workSetting,
        workShift,
        preffrredLocation,
        openToRelocate,
        requiredForTravel,
        workSchedule,
        workIndepandently,
        expectedSelary,
        expectedRange,
        typeOfJobOpening,
        appealingWork,
        workEnvironment,
        companyOutlook,
        visaStatus
      )
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  const handleValueSave = async () => {
    console.log("questionsData ", questionList, ratingList);

    await axios
      .post("http://localhost/3000", questionList, ratingList)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  const ValueAssesment = () => {
    return (
      <div className="p-8">
        <div className="flex gap-2 items-center py-5">
          <p style={{ color: "#008080", fontWeight: 500, fontSize: 14 }}>
            Value Assessment
          </p>
          <FaArrowRight style={{ fontSize: 16, color: "#D0D5DD" }} />
          <p
            style={{
              color: currentSection > 0 ? "#008080" : "#475467",
              fontWeight: 500,
              fontSize: 14,
            }}>
            Section 1
          </p>
          <FaArrowRight style={{ fontSize: 16, color: "#D0D5DD" }} />
          <p
            style={{
              color: currentSection > 1 ? "#008080" : "#475467",
              fontWeight: 500,
              fontSize: 14,
            }}>
            Section 2
          </p>
          <FaArrowRight style={{ fontSize: 16, color: "#D0D5DD" }} />
          <p
            style={{
              color: currentSection > 2 ? "#008080" : "#475467",
              fontWeight: 500,
              fontSize: 14,
            }}>
            Submit Assessment Confirmation
          </p>
        </div>
        {currentSection === 1 && (
          <>
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Value Assessment
              </p>
              <p style={{ color: "#475467", fontSize: 14 }}>
                Please thoroughly evaluate and clearly indicate which value you
                believe should be regarded as the highest priority for immediate
                attention, as well as those which, while still important, may be
                considered of lower priority and can be addressed at a later
                stage.
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
                Statement {currentQuestion + 1}
              </p>
            </div>
            <form
              className="grid grid-flow-row justify-start"
              onSubmit={handleNext}>
              {/* question */}
              <div>
                {/* header */}
                <div className="grid grid-cols-4 py-2 border-app-tableBorder mt-2">
                  <div className="flex justify-center items-center text-center border">
                    <p
                      style={{
                        color: "#475467",
                        fontWeight: 500,
                        fontSize: 14,
                      }}>
                      Most Like Me
                    </p>
                  </div>
                  <div className="col-span-2 flex justify-center items-center text-center py-2 mx-1 border">
                    <p
                      style={{
                        color: "#008080",
                        fontWeight: 500,
                        fontSize: 14,
                      }}>
                      Self-Direction Value
                    </p>
                  </div>
                  <div className="flex justify-center items-center text-center py-2 border">
                    <p
                      style={{
                        color: "#475467",
                        fontWeight: 500,
                        fontSize: 14,
                      }}>
                      Least Like Me
                    </p>
                  </div>
                </div>
                {/* body */}
                {ValueAssesmentQuestion.options.map((value, index) => {
                  return (
                    <div className="grid grid-cols-4 py-1" key={index}>
                      <div className="flex justify-center items-center text-center border">
                        <Radio
                          required
                          value={
                            mostLikelyOption[
                              ValueAssesmentQuestion.questionNo
                            ] === value
                          }
                          checked={
                            mostLikelyOption[
                              ValueAssesmentQuestion.questionNo
                            ] === value
                          }
                          onChange={() =>
                            handleMostlike(ValueAssesmentQuestion, value)
                          }
                          sx={{
                            color: "#D0D5DD",
                            " &.Mui-checked": {
                              color: "#66B2B2",
                            },
                          }}
                        />
                      </div>
                      <div className="col-span-2 flex justify-center items-center text-center  px-3 mx-1 border">
                        <p
                          style={{
                            color: "#475467",
                            fontSize: 14,
                          }}>
                          {value}
                        </p>
                      </div>
                      <div className="flex justify-center items-center text-center border">
                        <Radio
                          required
                          checked={
                            leastLikelyOption[
                              ValueAssesmentQuestion.questionNo
                            ] === value
                          }
                          onChange={() =>
                            handleLeastlike(ValueAssesmentQuestion, value)
                          }
                          sx={{
                            color: "#D0D5DD",
                            " &.Mui-checked": {
                              color: "#66B2B2",
                            },
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* button */}
              <div className="flex justify-end  gap-4 mt-5">
                {!(currentQuestion === 0) && (
                  <Button
                    variant="contained"
                    onClick={handlePrev}
                    disabled={currentQuestion === 0}
                    sx={{ bgcolor: "#008080" }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  type="submit"
                  sx={{ bgcolor: "#008080" }}>
                  Next
                </Button>
              </div>
            </form>
          </>
        )}
        {currentSection === 2 && (
          <>
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Value Assessment
              </p>
              <p style={{ color: "#475467", fontSize: 14 }}>
                Please carefully evaluate the following statements and indicate
                their importance to you in a work setting on a scale from 1 to
                6. There are no right or wrong answers; this test is designed to
                help understand your individual preferences and priorities in
                the workplace.
              </p>
            </div>
            <div className="mt-10">
              {/* header */}
              <div className="grid grid-cols-4 mt-4 border-app-tableBorder border">
                <div className="flex p-2  items-center ">
                  <p
                    style={{
                      color: "#101828",
                      fontWeight: 500,
                      fontSize: 14,
                    }}>
                    Value
                  </p>
                </div>
                <div className="col-span-2 flex p-2  items-center ">
                  <p
                    style={{
                      color: "#101828",
                      fontWeight: 500,
                      fontSize: 14,
                    }}>
                    Statements
                  </p>
                </div>
                <div className="flex  items-center p-2">
                  <p
                    style={{
                      color: "#101828",
                      fontWeight: 500,
                      fontSize: 14,
                    }}>
                    Ratings
                  </p>
                </div>
              </div>
              {/* bodey */}
              {ratingList.map((data, index) => {
                return (
                  <div
                    className="grid grid-cols-4 border-app-tableBorder border"
                    key={index}>
                    <div className="flex p-2  items-center ">
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 14,
                        }}>
                        {data.value}
                      </p>
                    </div>
                    <div className="col-span-2 flex p-2  items-center ">
                      <p
                        style={{
                          color: "#475467",
                          fontSize: 14,
                        }}>
                        {data.statement}
                      </p>
                    </div>
                    <div className="flex  items-center p-2">
                      <p
                        style={{
                          color: "#101828",
                          fontWeight: 500,
                          fontSize: 14,
                        }}>
                        <Rating
                          value={data?.rating}
                          onChange={(e, newvalue) =>
                            handleChangeRating(newvalue, index)
                          }
                          max={6}
                          sx={{ color: "#66B2B2" }}
                        />
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end gap-5 py-5">
              <Button
                variant="outlined"
                style={{ color: "#475467", borderColor: "#D0D5DD" }}>
                Clear
              </Button>
              <Button
                variant="contained"
                style={{ colorL: "#ffffff", backgroundColor: "#008080" }}
                onClick={handleValueSave}>
                Submit
              </Button>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flex">
      <SideNav />
      <div className="w-full">
        <TopNav />
        {activeScreen === 1 && (
          <form
            className="p-8"
            onSubmit={() => {
              setActiveScreen(2);
              onPersonalInfoSubmit();
            }}>
            {/* file upload */}
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Candidate’s Personal Detail Information
              </p>
              <div className="grid grid-flow-row  w-96 justify-center items-center text-center py-5">
                <p style={{ color: "#101828", fontSize: 14, fontWeight: 500 }}>
                  Upload Resume
                </p>
                <div className="flex justify-center py-3">
                  <img src={pdflogo} alt="logo" />
                </div>
                <p style={{ color: "#101828", fontSize: 14, fontWeight: 500 }}>
                  Select a file or drag and drop here
                </p>
                <p style={{ color: "#475467", fontSize: 12, fontWeight: 500 }}>
                  JPG, PNG or PDF (10 MB Max)
                </p>
                <Button
                  component="label"
                  variant="outlined"
                  size="small"
                  style={{
                    color: "#008080",
                    borderColor: "#008080",
                    marginTop: 10,
                    borderRadius: 8,
                  }}>
                  Select file
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/jpeg,image/png,application/pdf"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </Button>
              </div>
            </div>
            {/* input fileds */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              <div className="grid grid-flow-row">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Candidate Full Name
                </p>
                <TextField
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="grid grid-flow-row">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Title
                </p>
                <TextField
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Senior Software Developer"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid grid-flow-row">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Mobile Number
                </p>
                <TextField
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Senior Mobile Number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
              <div className="grid grid-flow-row">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  LinkedIn Profile
                </p>
                <TextField
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="https://www.example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-flow-row pt-5 pb-8">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Summary.
              </p>
              <TextField
                required
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Type"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
            {/* education */}
            <div>
              <p style={{ color: "#475467", fontSize: 20, fontWeight: 500 }}>
                Education
              </p>
              {education.map((value, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-3">
                      <div className="grid grid-flow-row">
                        <p
                          style={{
                            color: "#344054",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          Degree
                        </p>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={options.map((option) => option.label)}
                          value={value.degree || null}
                          onChange={(e, value) =>
                            handleChangeEducation("degree", value, index)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Select"
                              required
                            />
                          )}
                        />
                      </div>
                      <div className="grid grid-flow-row">
                        <p
                          style={{
                            color: "#344054",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          Field of Study
                        </p>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={options.map((option) => option.label)}
                          value={value.filedStudy || null}
                          onChange={(e, value) =>
                            handleChangeEducation("filedStudy", value, index)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Select"
                              required
                            />
                          )}
                        />
                      </div>
                      <div className="grid grid-flow-row">
                        <p
                          style={{
                            color: "#344054",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          Institutions
                        </p>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={options.map((option) => option.label)}
                          value={value.institutions || null}
                          onChange={(e, value) =>
                            handleChangeEducation("institutions", value, index)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Select"
                              required
                            />
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="grid grid-flow-row">
                          <p
                            style={{
                              color: "#344054",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            City
                          </p>
                          <Autocomplete
                            disablePortal
                            size="small"
                            fullWidth
                            options={options.map((option) => option.label)}
                            value={value.city || null}
                            onChange={(e, value) =>
                              handleChangeEducation("city", value, index)
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Select"
                                required
                              />
                            )}
                          />
                        </div>
                        <div className="grid grid-flow-row">
                          <p
                            style={{
                              color: "#344054",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            State
                          </p>
                          <Autocomplete
                            disablePortal
                            size="small"
                            fullWidth
                            options={options.map((option) => option.label)}
                            value={value.state || null}
                            onChange={(e, value) =>
                              handleChangeEducation("state", value, index)
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Select"
                                required
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-5">
                      <div className="grid grid-flow-row">
                        <p
                          style={{
                            color: "#344054",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          Institutions
                        </p>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={options.map((option) => option.label)}
                          value={value.institutions || null}
                          onChange={(e, value) =>
                            handleChangeEducation("institutions", value, index)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Select"
                              required
                            />
                          )}
                        />
                      </div>
                      <div className="grid grid-flow-row">
                        <p
                          style={{
                            color: "#344054",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          Any Certificates
                        </p>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={options.map((option) => option.label)}
                          value={value.certificate || null}
                          onChange={(e, value) =>
                            handleChangeEducation("certificate", value, index)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Select"
                              required
                            />
                          )}
                        />
                      </div>
                    </div>
                    {education.length > 1 && (
                      <div className="pt-3 flex justify-end">
                        <Button
                          variant="outlined"
                          size="small"
                          style={{
                            color: "#EB5757",
                            borderColor: "#E6E6E6",
                            textTransform: "none",
                          }}
                          onClick={() => removeEducation(index)}
                          startIcon={
                            <IoMdRemoveCircleOutline
                              style={{ color: "#EB5757" }}
                            />
                          }>
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="py-3 flex justify-end">
                <Button
                  variant="outlined"
                  size="small"
                  style={{
                    color: "#404040",
                    borderColor: "#E6E6E6",
                    textTransform: "none",
                  }}
                  onClick={addEducation}
                  startIcon={<FiPlus />}>
                  Add
                </Button>
              </div>
            </div>
            {/* buttons */}
            <div className="flex justify-end py-8 gap-5">
              <Button
                variant="outlined"
                style={{ borderColor: "#787879", color: "#787879" }}>
                Clear
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#008080", color: "#ffffff" }}
                type="submit">
                NEXT
              </Button>
            </div>
          </form>
        )}
        {activeScreen === 2 && (
          <form
            className="p-8"
            onSubmit={() => {
              setActiveScreen(3);
              onPrefrenceSubmit();
            }}>
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Candidate’s Preference Form
              </p>
              <p
                style={{
                  color: "#475467",
                  fontSize: 20,
                  fontWeight: 500,
                  marginTop: 10,
                }}>
                Academic Qualifications
              </p>
              <div className="grid grid-cols-2 gap-8 mt-5">
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What level of academic qualification have you attained?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={academicQualification || null}
                    onChange={(e, value) => setAcademicQualification(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What is your specialization?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={specialization || null}
                    onChange={(e, value) => setSpecialization(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-flow-row my-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Can you share your academic background and how it aligns with
                  this role?
                </p>
                <textarea
                  required
                  value={academicBackGround}
                  onChange={(e) => setAcademicBackground(e.target.value)}
                  rows={3}
                  placeholder="Type"
                  style={{
                    minHeight: 50,
                    padding: 6,
                    width: "100%",
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "#D0D5DD",
                  }}
                />
              </div>
              <div className="grid grid-flow-row mt-5 mb-10">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Do you possess any specific certifications or licenses?
                </p>
                <Autocomplete
                  disablePortal
                  size="small"
                  fullWidth
                  options={options.map((option) => option.label)}
                  value={specificLicense || null}
                  onChange={(e, value) => setSpecificLicense(value)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" required />
                  )}
                />
              </div>
            </div>
            {/* experience */}
            <div>
              <p
                style={{
                  color: "#475467",
                  fontSize: 20,
                  fontWeight: 500,
                  marginTop: 10,
                }}>
                Profesional Experience
              </p>
              <div className="grid grid-cols-2 gap-8 mt-5">
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    How many years of experience do you have?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={yearsOfExperience || null}
                    onChange={(e, value) => setYearOfExperience(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Could you elaborate on your experience in [specific area
                    relevant to the role]
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={experienceRole || null}
                    onChange={(e, value) => setExperienceRole(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
              <div className="mt-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Have you previously worked in a specific industry related to
                  this role? If Yes then specify your role there.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={workInIndustry || null}
                    onChange={(e, value) => setWorkInIndustry(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={workRole || null}
                    onChange={(e, value) => setWorkRole(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-5">
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Have you had experience with stakeholders for business
                    goals?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={experienceStackHolder || null}
                    onChange={(e, value) => setExperienceStachHolder(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What is your notice period in the current organization?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={noticePeriod || null}
                    onChange={(e, value) => setNoticePeriod(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
              <div className="mt-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Do you have team handling experience? (If yes, please select
                  the team size)
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={teamHandling || null}
                    onChange={(e, value) => setTeamHandling(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={teamSize || null}
                    onChange={(e, value) => setTeamSize(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
              {/* indusrtyExperience */}
              <div className="mt-5">
                <p
                  style={{
                    color: "#344054",
                    fontSize: 14,
                    fontWeight: 500,
                  }}>
                  Please select the industry and specify the industry experience
                </p>
                {indusrtyExperience.map((value, index) => {
                  return (
                    <>
                      <div className="grid grid-cols-2 gap-8 mt-5">
                        <TextField
                          required
                          size="small"
                          fullWidth
                          placeholder="Type"
                          value={value.type}
                          onChange={(e) =>
                            handleChangeIndustryExperience(
                              "type",
                              e.target.value,
                              index
                            )
                          }
                        />
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={options.map((option) => option.label)}
                          value={value.experience || null}
                          onChange={(e, newvalue) =>
                            handleChangeIndustryExperience(
                              "experience",
                              newvalue,
                              index
                            )
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Select"
                              required
                            />
                          )}
                        />
                      </div>
                      {indusrtyExperience.length > 1 && (
                        <div className="pt-3 flex justify-end">
                          <Button
                            variant="outlined"
                            size="small"
                            style={{
                              color: "#EB5757",
                              borderColor: "#E6E6E6",
                              textTransform: "none",
                            }}
                            onClick={() => removeIndustryExperience(index)}
                            startIcon={
                              <IoMdRemoveCircleOutline
                                style={{ color: "#EB5757" }}
                              />
                            }>
                            Remove
                          </Button>
                        </div>
                      )}
                    </>
                  );
                })}
                <div className="py-3 flex justify-end">
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      color: "#404040",
                      borderColor: "#E6E6E6",
                      textTransform: "none",
                    }}
                    onClick={addIndustryExperience}
                    startIcon={<FiPlus />}>
                    Add
                  </Button>
                </div>
              </div>
            </div>

            {/* skills */}
            <div>
              <p
                style={{
                  color: "#475467",
                  fontSize: 20,
                  fontWeight: 500,
                  marginTop: 10,
                }}>
                Skills
              </p>
              <p
                style={{
                  color: "#787879",
                  fontSize: 16,
                  fontWeight: 500,
                  marginTop: 5,
                }}>
                Mention the skills along with your status against it:
              </p>
              {/* primary skill */}
              <div className="mt-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Primary Skills
                </p>
                {primarySkills.map((value, index) => {
                  return (
                    <>
                      <div className="grid grid-cols-2 gap-8 mt-5">
                        <div className="grid grid-flow-row">
                          <p
                            style={{
                              color: "#344054",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Skills {index + 1}
                          </p>
                          <Autocomplete
                            disablePortal
                            size="small"
                            fullWidth
                            options={options.map((option) => option.label)}
                            value={value.skill || null}
                            onChange={(e, value) =>
                              handleChangePrimarySkill("skill", value, index)
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Select"
                                required
                              />
                            )}
                          />
                        </div>
                        <div className="grid grid-flow-row">
                          <p
                            style={{
                              color: "#344054",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Expertise
                          </p>
                          <Autocomplete
                            disablePortal
                            size="small"
                            fullWidth
                            options={options.map((option) => option.label)}
                            value={value.expertise || null}
                            onChange={(e, value) =>
                              handleChangePrimarySkill(
                                "expertise",
                                value,
                                index
                              )
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Select"
                                required
                              />
                            )}
                          />
                        </div>
                      </div>
                      {primarySkills.length > 1 && (
                        <div className="pt-3 flex justify-end">
                          <Button
                            variant="outlined"
                            size="small"
                            style={{
                              color: "#EB5757",
                              borderColor: "#E6E6E6",
                              textTransform: "none",
                            }}
                            onClick={() => removePrimarySkill(index)}
                            startIcon={
                              <IoMdRemoveCircleOutline
                                style={{ color: "#EB5757" }}
                              />
                            }>
                            Remove
                          </Button>
                        </div>
                      )}
                    </>
                  );
                })}
                <div className="py-3 flex justify-end">
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      color: "#404040",
                      borderColor: "#E6E6E6",
                      textTransform: "none",
                    }}
                    onClick={addPrimarySkill}
                    startIcon={<FiPlus />}>
                    Add
                  </Button>
                </div>
              </div>
              {/* secoundry skill */}
              <div>
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Secoundry Skills
                </p>
                {secoundrySkills.map((value, index) => {
                  return (
                    <div key={index}>
                      <div className="grid grid-cols-2 gap-8 mt-5">
                        <div className="grid grid-flow-row">
                          <p
                            style={{
                              color: "#344054",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Skills {index + 1}
                          </p>
                          <Autocomplete
                            disablePortal
                            size="small"
                            fullWidth
                            options={options.map((option) => option.label)}
                            value={value.skill || null}
                            onChange={(e, value) =>
                              handleChangeSecoundrySkill("skill", value, index)
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Select"
                                required
                              />
                            )}
                          />
                        </div>
                        <div className="grid grid-flow-row">
                          <p
                            style={{
                              color: "#344054",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Expertise
                          </p>
                          <Autocomplete
                            disablePortal
                            size="small"
                            fullWidth
                            options={options.map((option) => option.label)}
                            value={value.expertise || null}
                            onChange={(e, value) =>
                              handleChangeSecoundrySkill(
                                "expertise",
                                value,
                                index
                              )
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Select"
                                required
                              />
                            )}
                          />
                        </div>
                      </div>
                      {secoundrySkills.length > 1 && (
                        <div className="pt-3 flex justify-end">
                          <Button
                            variant="outlined"
                            size="small"
                            style={{
                              color: "#EB5757",
                              borderColor: "#E6E6E6",
                              textTransform: "none",
                            }}
                            onClick={() => removeSecoundrySkill(index)}
                            startIcon={
                              <IoMdRemoveCircleOutline
                                style={{ color: "#EB5757" }}
                              />
                            }>
                            Remove
                          </Button>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="py-3 flex justify-end">
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      color: "#404040",
                      borderColor: "#E6E6E6",
                      textTransform: "none",
                    }}
                    onClick={addSecoundrySkill}
                    startIcon={<FiPlus />}>
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Please add the tools or software application you have used in
                the past
              </p>
              <div className="grid grid-cols-2 gap-8">
                <Autocomplete
                  disablePortal
                  size="small"
                  fullWidth
                  options={options.map((option) => option.label)}
                  value={softwareApplication.app || null}
                  onChange={(e, value) =>
                    setSoftwareApplication({
                      ...softwareApplication,
                      app: value,
                    })
                  }
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" required />
                  )}
                />
                <Autocomplete
                  disablePortal
                  size="small"
                  fullWidth
                  options={options.map((option) => option.label)}
                  value={softwareApplication.experience || null}
                  onChange={(e, value) =>
                    setSoftwareApplication({
                      ...softwareApplication,
                      experience: value,
                    })
                  }
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Experience" required />
                  )}
                />
              </div>
            </div>
            {/* buttons */}
            <div className="flex justify-end py-8 gap-5">
              <Button
                variant="outlined"
                style={{ borderColor: "#787879", color: "#787879" }}>
                Clear
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#008080", color: "#ffffff" }}
                type="submit">
                NEXT
              </Button>
            </div>
          </form>
        )}
        {activeScreen === 3 && (
          <form
            className="p-8"
            onSubmit={() => {
              setActiveScreen(4);
              onWorkPrefrenceSumnit();
            }}>
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Candidate’s Preference Form
              </p>
              <p
                style={{
                  color: "#475467",
                  fontSize: 20,
                  fontWeight: 500,
                  marginTop: 10,
                }}>
                Work Preference
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-5">
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Which work setting do you prefer in-office?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={workSetting || null}
                    onChange={(e, value) => setWorkSetting(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What is your preference on work shifts?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={workShift || null}
                    onChange={(e, value) => setWorkShift(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What are your preferred locations for the job?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={preffrredLocation || null}
                    onChange={(e, value) => setPrefferedLocation(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Are you open to relocation if required for the job?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={openToRelocate || null}
                    onChange={(e, value) => setOpenToRelocate(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    If your work requires you to travel, how comfortable are you
                    to travel?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={requiredForTravel || null}
                    onChange={(e, value) => setRequiredForTravel(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What is your preferred work schedule?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={workSchedule || null}
                    onChange={(e, value) => setWorkSchedule(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-flow-row mt-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Do you prefer working independently or as part of a small
                  team, or as a part of a large team?
                </p>
                <Autocomplete
                  disablePortal
                  size="small"
                  fullWidth
                  options={options.map((option) => option.label)}
                  value={workIndepandently || null}
                  onChange={(e, value) => setWorkIndepandently(value)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" required />
                  )}
                />
              </div>
            </div>
            {/* job type */}
            <div className="mt-8">
              <p
                style={{
                  color: "#475467",
                  fontSize: 20,
                  fontWeight: 500,
                  marginTop: 10,
                }}>
                Compensation and Job Type
              </p>
              <div className="grid grid-flow-row  mt-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  What are the salary expectations?
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <TextField
                    required
                    fullWidth
                    placeholder="Type Range"
                    size="small"
                    value={expectedSelary.range}
                    onChange={(e) =>
                      setExpectedSelary({
                        ...expectedSelary,
                        range: e.target.value,
                      })
                    }
                  />

                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={expectedSelary.frequency || null}
                    onChange={(e, value) =>
                      setExpectedSelary({ ...expectedSelary, frequency: value })
                    }
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-flow-row  mt-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  What is the expected compensation range?
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <TextField
                    required
                    fullWidth
                    placeholder="Type Range"
                    size="small"
                    value={expectedRange.range}
                    onChange={(e) =>
                      setExpectedRange({
                        ...expectedRange,
                        range: e.target.value,
                      })
                    }
                  />

                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={expectedRange.frequency || null}
                    onChange={(e, value) =>
                      setExpectedRange({ ...expectedRange, frequency: value })
                    }
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-5">
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What is the type of job openings are you interested in ?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={typeOfJobOpening || null}
                    onChange={(e, value) => setTypeOfJobOpening(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
            </div>

            {/* environment and values */}
            <div className="mt-8">
              <p
                style={{
                  color: "#475467",
                  fontSize: 20,
                  fontWeight: 500,
                  marginTop: 10,
                }}>
                Work Environment and Values
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-5">
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What is appealing to you at work?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={appealingWork || null}
                    onChange={(e, value) => setAppealingWork(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What kind of work environment are you looking for?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={workEnvironment || null}
                    onChange={(e, value) => setWorkEnvironment(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-flow-row mt-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Is the company outlook on environment important? Like
                  sustainability initiatives, being carbon neutral etc.
                </p>
                <Autocomplete
                  disablePortal
                  size="small"
                  fullWidth
                  options={options.map((option) => option.label)}
                  value={companyOutlook || null}
                  onChange={(e, value) => setCompanyOutlook(value)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" required />
                  )}
                />
              </div>
            </div>
            {/* legal and visa status */}
            <div className="mt-8">
              <p
                style={{
                  color: "#475467",
                  fontSize: 20,
                  fontWeight: 500,
                  marginTop: 10,
                }}>
                Legal and Visa Status
              </p>
              <div className="grid grid-flow-row mt-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  What is your current Visa or Work status?
                </p>
                <Autocomplete
                  disablePortal
                  size="small"
                  fullWidth
                  options={options.map((option) => option.label)}
                  value={visaStatus || null}
                  onChange={(e, value) => setVisaStatus(value)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" required />
                  )}
                />
              </div>
            </div>
            {/* buttons */}
            <div className="flex justify-end py-8 gap-5">
              <Button
                variant="outlined"
                style={{ borderColor: "#787879", color: "#787879" }}>
                Clear
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#008080", color: "#ffffff" }}
                type="submit">
                NEXT
              </Button>
            </div>
          </form>
        )}
        {activeScreen === 4 && <ValueAssesment />}
        <Footer />
      </div>
    </div>
  );
};
