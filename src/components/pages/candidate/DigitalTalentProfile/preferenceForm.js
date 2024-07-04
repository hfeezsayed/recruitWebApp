import React, { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { Autocomplete, Button, TextField } from "@mui/material";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { SideNav } from "../../../widgets/sidenav";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";
import { qualifications, specializations, team, skills, skillLevel, PreferOffice, workShifts, locations, yes_No, travels, work_Comapny, schedules, appealings, currency, salary_Rate, envonments, job_Interests, experiences, visa_status, certifications, notice, industry, softwares, environments
 } from "../seedData";
import { useEffect } from "react";


export const PreferenceForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeScreen, setActiveScreen] = useState(1);
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
  const [secoundrySkills, setSecoundrySkill] = useState([
    { skill: null, expertise: null },
  ]);
  const [softwareApplication, setSoftwareApplication] = useState({
    app: null,
    experience: null,
  });

  // form 2
  const [workSetting, setWorkSetting] = useState();
  const [workShift, setWorkShift] = useState();
  const [prefferedLocation, setPrefferedLocation] = useState();
  const [openToRelocate, setOpenToRelocate] = useState();
  const [requiredForTravel, setRequiredForTravel] = useState();
  const [workSchedule, setWorkSchedule] = useState();
  const [workIndepandently, setWorkIndepandently] = useState();
  const [expectedSalary, setexpectedSalary] = useState({
    range: null,
    currency: null,
  });
  const [expectedRange, setExpectedRange] = useState({
    range: null,
    currency: null,
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

  useEffect( () => {
    const user = JSON.parse(localStorage.getItem("token"));
    let preferenceId = 0;
    if(location.state) {
      preferenceId = location.state;
    }
    axiosInstance.get(`/getCandidatePreferences?candidateId=${user.userId}&preferenceId=${location.state}`,

    )
    .then(response => {
      const data = response.data;
      if(response.data){
        setWorkSetting(data.workSetting)
        setWorkShift(data.workShift)
        setPrefferedLocation(data.prefferedLocation)
        setOpenToRelocate(data.openToRelocate)
        setRequiredForTravel(data.requiredForTravel)
        setWorkSchedule(data.workSchedule)
        setWorkIndepandently(data.workIndepandently)
        setexpectedSalary(data.expectedSalary)
        setExpectedRange(data.expectedRange)
        setTypeOfJobOpening(data.typeOfJobOpening)
        setAppealingWork(data.appealingWork)
        setWorkEnvironment(data.workEnvironment)
        setCompanyOutlook(data.companyOutlook)
        setVisaStatus(data.visaStatus)
        setAcademicQualification(data.academicQualification)
        setSpecialization(data.specialization)
        setAcademicBackground(data.academicBackGround)
        setSpecificLicense(data.specificLicense)
        setYearOfExperience(data.yearsOfExperience)
        setExperienceRole(data.experienceRole)
        setWorkInIndustry(data.workInIndustry)
        setWorkRole(data.workRole)
        setExperienceStachHolder(data.experienceStackHolder)
        setNoticePeriod(data.noticePeriod)
        setTeamHandling(data.teamHandling)
        setTeamSize(data.teamSize)
        setIndustryExperience(data.indusrtyExperience)
        setPrimarySkill(data.primarySkills)
        setSecoundrySkill(data.secoundrySkills)
        setSoftwareApplication(data.softwareApplication)
      }
    })
    .catch(error => {
      console.log(error);
    })
}, []);


  const handleChangeIndustryExperience = (e, value, i) => {
    console.log(value, i, e);
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
    console.log(value);
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
    setSecoundrySkill([...secoundrySkills, { skill: null, expertise: null }]);
  };

  const handleChangeSecoundrySkill = (e, value, i) => {
    let newFormValues = [...secoundrySkills];
    newFormValues[i][e] = value;
    setSecoundrySkill(newFormValues);
  };

  const removeSecoundrySkill = (i) => {
    let newFormValues = [...secoundrySkills];
    newFormValues.splice(i, 1);
    setSecoundrySkill(newFormValues);
  };

  const onPrefrenceSubmit = async (e) => {
    e.preventDefault();
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
    setActiveScreen(2);
  };

  const onWorkPrefrenceSumnit = async (e) => {
    e.preventDefault();
    console.log(
      workSetting,
      workShift,
      prefferedLocation,
      openToRelocate,
      requiredForTravel,
      workSchedule,
      workIndepandently,
      expectedSalary,
      expectedRange,
      typeOfJobOpening,
      appealingWork,
      workEnvironment,
      companyOutlook,
      visaStatus,
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
      "---------form 3"
    );

    // navigate("/valueassessmentform");
    const user = JSON.parse(localStorage.getItem("token"));
    await axiosInstance
      .post(
        "/saveCandidateForm?candidateId="+user.userId,
        {
          workSetting,
          workShift,
          prefferedLocation,
          openToRelocate,
          requiredForTravel,
          workSchedule,
          workIndepandently,
          expectedSalary,
          expectedRange,
          typeOfJobOpening,
          appealingWork,
          workEnvironment,
          companyOutlook,
          visaStatus,
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
        },
        
      )
      .then((data) => 
        console.log(data),
        navigate("/digitalTalentProfile")
    )
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          {activeScreen === 1 && (
            <form className="p-8" onSubmit={onPrefrenceSubmit}>
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
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      What level of academic qualification have you attained?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={qualifications.map((option) => option.label)}
                      value={academicQualification || null}
                      onChange={(e, value) => setAcademicQualification(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
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
                      What is your specialization?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={specializations.map((option) => option.label)}
                      value={specialization || null}
                      onChange={(e, value) => setSpecialization(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-flow-row my-5">
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
                    Can you share your academic background and how it aligns
                    with this role?
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
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
                    Do you possess any specific certifications or licenses?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={certifications.map((option) => option.label)}
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
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      How many years of experience do you have?
                    </p>
                    <TextField
                      label="Experience"
                      type="number"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={yearsOfExperience}
                      onChange={(e) => setYearOfExperience(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-flow-row">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Could you elaborate on your experience in [specific area
                      relevant to the role]
                    </p>
                    <TextField
                      required
                      multiline
                      rows={2}
                      fullWidth
                      size="small"
                      variant="outlined"
                      placeholder="Type"
                      value={experienceRole}
                      onChange={(e) => setExperienceRole(e.target.value)}
                  />
                  </div>
                </div>
                <div className="mt-5">
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
                    Have you previously worked in a specific industry related to
                    this role? If Yes then specify your role there.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={yes_No.map((option) => option.label)}
                      value={workInIndustry || null}
                      onChange={(e, value) => setWorkInIndustry(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
                      )}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      placeholder="Type"
                      value={workRole}
                      onChange={(e) => setWorkRole(e.target.value)}
                  />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-5">
                  <div className="grid grid-flow-row">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Have you had experience with stakeholders for business
                      goals?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={yes_No.map((option) => option.label)}
                      value={experienceStackHolder || null}
                      onChange={(e, value) => setExperienceStachHolder(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
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
                      What is your notice period in the current organization?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={notice.map((option) => option.label)}
                      value={noticePeriod || null}
                      onChange={(e, value) => setNoticePeriod(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
                      )}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
                    Do you have team handling experience? (If yes, please select
                    the team size)
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={yes_No.map((option) => option.label)}
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
                      options={team.map((option) => option.label)}
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
                    Please select the industry and specify the industry
                    experience
                  </p>
                  {indusrtyExperience.map((value, index) => {
                    return (
                      <>
                        <div className="grid grid-cols-2 gap-8 mt-5">
                        <Autocomplete
                            disablePortal
                            size="small"
                            fullWidth
                            options={industry.map((option) => option.label)}
                            value={value.type || null}
                            onChange={(e, newValue) =>
                              handleChangeIndustryExperience(
                                "type",
                                newValue,
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
                          <Autocomplete
                            disablePortal
                            size="small"
                            fullWidth
                            options={skillLevel.map((option) => option.label)}
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
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
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
                              options={skills.map((option) => option.label)}
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
                              options={skillLevel.map((option) => option.label)}
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
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
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
                              options={skills.map((option) => option.label)}
                              value={value.skill || null}
                              onChange={(e, value) =>
                                handleChangeSecoundrySkill(
                                  "skill",
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
                              options={skillLevel.map((option) => option.label)}
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
                    options={softwares.map((option) => option.label)}
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
                    options={skillLevel.map((option) => option.label)}
                    value={softwareApplication.experience || null}
                    onChange={(e, value) =>
                      setSoftwareApplication({
                        ...softwareApplication,
                        experience: value,
                      })
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Experience"
                        required
                      />
                    )}
                  />
                </div>
              </div>
              {/* buttons */}
              <div className="flex justify-end py-8 gap-5">
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
            <form className="p-8" onSubmit={onWorkPrefrenceSumnit}>
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
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Which work setting do you prefer in-office?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={PreferOffice.map((option) => option.label)}
                      value={workSetting || null}
                      onChange={(e, value) => setWorkSetting(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
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
                      What is your preference on work shifts?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={workShifts.map((option) => option.label)}
                      value={workShift || null}
                      onChange={(e, value) => setWorkShift(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
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
                      What are your preferred locations for the job?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={locations.map((option) => option.label)}
                      value={prefferedLocation || null}
                      onChange={(e, value) => setPrefferedLocation(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
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
                      Are you open to relocation if required for the job?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={yes_No.map((option) => option.label)}
                      value={openToRelocate || null}
                      onChange={(e, value) => setOpenToRelocate(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
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
                      If your work requires you to travel, how comfortable are
                      you to travel?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={travels.map((option) => option.label)}
                      value={requiredForTravel || null}
                      onChange={(e, value) => setRequiredForTravel(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
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
                      What is your preferred work schedule?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={schedules.map((option) => option.label)}
                      value={workSchedule || null}
                      onChange={(e, value) => setWorkSchedule(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-flow-row mt-5">
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
                    Do you prefer working independently or as part of a small
                    team, or as a part of a large team?
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={work_Comapny.map((option) => option.label)}
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
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
                    What are the salary expectations?
                  </p>
                  <div className="grid grid-cols-3 gap-8">
                    <TextField
                      required
                      type="number"
                      fullWidth
                      placeholder="Type Range"
                      size="small"
                      value={expectedSalary.range}
                      onChange={(e) =>
                        setexpectedSalary({
                          ...expectedSalary,
                          range: e.target.value,
                        })
                      }
                    />

                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={currency.map((option) => option.label)}
                      value={expectedSalary.currency || null}
                      onChange={(e, value) =>
                        setexpectedSalary({
                          ...expectedSalary,
                          currency: value,
                        })
                      }
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-flow-row  mt-5">
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
                    What is the expected compensation range?
                  </p>
                  <div className="grid grid-cols-3 gap-8">
                    <TextField
                      required
                      type="number"
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
                      placeholder="select currency"
                      fullWidth
                      options={currency.map((option) => option.label)}
                      value={expectedRange.currency || null}
                      onChange={(e, value) =>
                        setExpectedRange({
                          ...expectedRange,
                          currency: value,
                        })
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
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      What is the type of job openings are you interested in ?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={job_Interests.map((option) => option.label)}
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
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      What is appealing to you at work?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={appealings.map((option) => option.label)}
                      value={appealingWork || null}
                      onChange={(e, value) => setAppealingWork(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
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
                      What kind of work environment are you looking for?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={environments.map((option) => option.label)}
                      value={workEnvironment || null}
                      onChange={(e, value) => setWorkEnvironment(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-flow-row mt-5">
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
                    Is the company outlook on environment important? Like
                    sustainability initiatives, being carbon neutral etc.
                  </p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-5">
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={yes_No.map((option) => option.label)}
                    value={companyOutlook || null}
                    onChange={(e, value) => setCompanyOutlook(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
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
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
                    What is your current Visa or Work status?
                  </p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-5">
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={visa_status.map((option) => option.label)}
                    value={visaStatus || null}
                    onChange={(e, value) => setVisaStatus(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                  </div>
                </div>
              </div>
              {/* buttons */}
              <div className="flex justify-end py-8 gap-5">
                <Button
                  variant="outlined"
                  style={{ borderColor: "#787879", color: "#787879" }}
                  onClick={() => setActiveScreen(1)}>
                  Back
                </Button>

                <Button
                  variant="contained"
                  style={{ backgroundColor: "#008080", color: "#ffffff" }}
                  type="submit">
                  Submit
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};