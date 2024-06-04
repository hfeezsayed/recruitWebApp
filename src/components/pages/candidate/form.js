import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Autocomplete, Button, TextField, styled } from "@mui/material";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { SideNav } from "../../widgets/sidenav";
import pdflogo from "../../../assets/images/fileUpload.png";
import { Footer } from "../../widgets/footer";
import { TopNav } from "../../widgets/topNav";

export const CandidateForm = () => {
  const [activeScreen, setActiveScreen] = useState(1);

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

  const onPersonalInfoSubmit = () => {
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
  };

  const onPrefrenceSubmit = () => {
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
  };

  const onWorkPrefrenceSumnit = () => {
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

  return (
    <div className="flex">
      <SideNav />
      <div className="w-full">
        <TopNav />
        {activeScreen === 1 && (
          <div className="p-8">
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
                  <>
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
                            <TextField {...params} placeholder="Select" />
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
                            <TextField {...params} placeholder="Select" />
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
                            <TextField {...params} placeholder="Select" />
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
                              <TextField {...params} placeholder="Select" />
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
                              <TextField {...params} placeholder="Select" />
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
                            <TextField {...params} placeholder="Select" />
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
                            <TextField {...params} placeholder="Select" />
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
                onClick={() => {
                  setActiveScreen(2);
                  onPersonalInfoSubmit();
                }}>
                NEXT
              </Button>
            </div>
          </div>
        )}
        {activeScreen === 2 && (
          <div className="p-8">
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                    <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                            <TextField {...params} placeholder="Select" />
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
                              <TextField {...params} placeholder="Select" />
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
                              <TextField {...params} placeholder="Select" />
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
                              handleChangeSecoundrySkill("skill", value, index)
                            }
                            renderInput={(params) => (
                              <TextField {...params} placeholder="Select" />
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
                              <TextField {...params} placeholder="Select" />
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
                    <TextField {...params} placeholder="Select" />
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
                    <TextField {...params} placeholder="Experience" />
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
                onClick={() => {
                  setActiveScreen(3);
                  onPrefrenceSubmit();
                }}>
                NEXT
              </Button>
            </div>
          </div>
        )}
        {activeScreen === 3 && (
          <div className="p-8">
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                    <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                      <TextField {...params} placeholder="Select" />
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
                    <TextField {...params} placeholder="Select" />
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
                    <TextField {...params} placeholder="Select" />
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
                onClick={() => {
                  setActiveScreen(4);
                  onWorkPrefrenceSumnit();
                }}>
                NEXT
              </Button>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};
