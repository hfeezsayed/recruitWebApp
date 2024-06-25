import React, { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";

export const PreferenceCreate = () => {
  const navigate = useNavigate();
  // industry
  const [experianceInIndustry, setExperianceInindustry] = useState();
  const [specifyIndusrtyExp, setSpecifyIndustryExp] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [scopOfRole, setScopOfRole] = useState("");
  const [depthKnowledge, setDepthKnowledge] = useState();

  const [typeOfRoles, setTypeOfROles] = useState();
  const [timeOfRole, setTimeofRole] = useState();
  const [workSetting, setWorkSetting] = useState();
  const [locationRole, setLocationRole] = useState();
  const [relocation, setRelocation] = useState();
  const [relocationBudget, setRelocationBudget] = useState("");
  const [travelRole, setTravelRole] = useState();
  const [visa, setVisa] = useState();
  const [compensationOffered, setCompensationOffered] = useState();
  const [compensationOfferedRate, setCompensationOfferedRate] = useState();

  // skills
  const [primarySkills, setPrimarySkill] = useState([
    { skill: null, expertise: null },
  ]);
  const [secoundrySkills, setSecoundrySkill] = useState([
    { skill: null, expertise: null },
  ]);

  // Qualifications
  const [minimumLevelQualification, setMinimumLevelQualification] = useState();
  const [requireAcademicQualification, setRequireAcademicQualification] =
    useState();
  const [differentAcademic, setDifferentAcademic] = useState();
  const [certificationsOrLicenses, setCertificationsOrLicenses] = useState([
    { certificate: null },
  ]);
  const [
    toolsOrSoftwaresetToolsOrSoftware,
    setToolsOrSoftwaresetToolsOrSoftware,
  ] = useState([{ tools: null }]);
  const [successThreeyear, setSuccessThreeyear] = useState("");

  const options = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const yes_no = ["Yes", "No"];

  const skills = [
    {
      label: "React",
      value: "React",
    },
    {
      label: "Java",
      value: "Java",
    },
    {
      label: "HTML",
      value: "HTML",
    },
    {
      label: "C#",
      value: "C#",
    },
    {
      label: "CSS",
      value: "CSS",
    },
    {
      label: "JavaScript",
      value: "JavaScript",
    },
  ];

  const skillLevel = [
    {
      label: "Basic",
      value: "Basic",
    },
    {
      label: "Expert",
      value: "Expert",
    },
    {
      label: "Proficient",
      value: "Proficient",
    },
    {
      label: "Competent",
      value: "Competent",
    },
    {
      label: "Limited",
      value: "Limited",
    },
  ];

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

  // certificate
  const addCertificate = () => {
    setCertificationsOrLicenses([
      ...certificationsOrLicenses,
      { certificate: null },
    ]);
  };

  const handleChangeCertificate = (e, value, i) => {
    let newFormValues = [...certificationsOrLicenses];
    newFormValues[i][e] = value;
    setCertificationsOrLicenses(newFormValues);
  };

  const removeCertificate = (i) => {
    let newFormValues = [...certificationsOrLicenses];
    newFormValues.splice(i, 1);
    setCertificationsOrLicenses(newFormValues);
  };

  // tools
  const addToolsAndSoftware = () => {
    setToolsOrSoftwaresetToolsOrSoftware([
      ...toolsOrSoftwaresetToolsOrSoftware,
      { tools: null },
    ]);
  };

  const handleChangeToolsAndSoftware = (e, value, i) => {
    let newFormValues = [...toolsOrSoftwaresetToolsOrSoftware];
    newFormValues[i][e] = value;
    setToolsOrSoftwaresetToolsOrSoftware(newFormValues);
  };

  const removeToolsAndSoftware = (i) => {
    let newFormValues = [...toolsOrSoftwaresetToolsOrSoftware];
    newFormValues.splice(i, 1);
    setToolsOrSoftwaresetToolsOrSoftware(newFormValues);
  };

  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    const jobId = localStorage.getItem("jobId");
    axios
      .post(`http://localhost:8080/xen/savePreferenceTemplateForJob?clientId=${user.userId}&jobId=${jobId}`, {
        experianceInIndustry,
        specifyIndusrtyExp,
        jobDescription,
        scopOfRole,
        depthKnowledge,
        typeOfRoles,
        timeOfRole,
        workSetting,
        locationRole,
        relocation,
        relocationBudget,
        travelRole,
        visa,
        compensationOffered,
        compensationOfferedRate,
        primarySkills,
        secoundrySkills,
        minimumLevelQualification,
        requireAcademicQualification,
        differentAcademic,
        certificationsOrLicenses,
        toolsOrSoftwaresetToolsOrSoftware,
        successThreeyear,
      },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((data) => console.log(data.data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                Pre- Fill Job Preference Details: Template 1
              </p>
              <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                Please review and create the information as needed, or use the
                same template.
              </p>
            </div>
            {/* idustry */}
            <div className="py-5">
              <p style={{ color: "#475467", fontWeight: 500, fontSize: 20 }}>
                Industry Details
              </p>
              <div>
                <div className="grid grid-flow-row gap-2 mt-3">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Does the role have to work cross functionally?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={yes_no}
                    value={experianceInIndustry || null}
                    onChange={(e, newvalue) =>
                      setExperianceInindustry(newvalue)
                    }
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row gap-2 mt-3">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    If so, could you specify which industry and why that
                    experience is critical?
                  </p>
                  <TextField
                    size="small"
                    placeholder="type"
                    value={specifyIndusrtyExp}
                    onChange={(e) => setSpecifyIndustryExp(e.target.value)}
                  />
                </div>
                <div className="grid grid-flow-row gap-2 mt-3">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Could you provide a job description if available?
                  </p>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="type"
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
                  />
                </div>
                <div className="grid grid-flow-row gap-2 mt-3">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    What is the scope of the role? (Please specify the
                    responsibilities of the role)
                  </p>
                  <textarea
                    value={scopOfRole}
                    onChange={(e) => setScopOfRole(e.target.value)}
                    placeholder="type"
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D5DD",
                      borderRadius: 8,
                      padding: 5,
                    }}
                  />
                </div>
                <div className="grid grid-flow-row gap-2 mt-3">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Would a candidate's in-depth knowledge of the industry be
                    considered valuable even if they lack direct experience in
                    the field?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={yes_no}
                    value={depthKnowledge || null}
                    onChange={(e, newvalue) => setDepthKnowledge(newvalue)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
                <div className="grid-cols-2 grid gap-8 mt-8">
                  <div className="grid grid-flow-row gap-2">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Type of role
                    </p>
                    <Autocomplete
                      size="small"
                      disablePortal
                      options={options.map((option) => option.label)}
                      value={typeOfRoles || null}
                      onChange={(e, newvalue) => setTypeOfROles(newvalue)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" />
                      )}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-2">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      What are the timings for the role?
                    </p>
                    <Autocomplete
                      size="small"
                      disablePortal
                      options={options.map((option) => option.label)}
                      value={timeOfRole || null}
                      onChange={(e, newvalue) => setTimeofRole(newvalue)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" />
                      )}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-2">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      What is the work setting for the role?
                    </p>
                    <Autocomplete
                      size="small"
                      disablePortal
                      options={options.map((option) => option.label)}
                      value={workSetting || null}
                      onChange={(e, newvalue) => setWorkSetting(newvalue)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" />
                      )}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-2">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      What is the location where the role will be working?
                    </p>
                    <Autocomplete
                      size="small"
                      disablePortal
                      options={options.map((option) => option.label)}
                      value={locationRole || null}
                      onChange={(e, newvalue) => setLocationRole(newvalue)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" />
                      )}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-2">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      Are you providing any relocaiton benefits?
                    </p>
                    <Autocomplete
                      size="small"
                      disablePortal
                      options={yes_no}
                      value={relocation || null}
                      onChange={(e, newvalue) => setRelocation(newvalue)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" />
                      )}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-2">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      If yes, please specify the budget
                    </p>
                    <TextField
                      size="small"
                      type="number"
                      placeholder="type"
                      value={relocationBudget}
                      onChange={(e) => setRelocationBudget(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-2">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      How frequent does the role require to travel?
                    </p>
                    <Autocomplete
                      size="small"
                      disablePortal
                      options={options.map((option) => option.label)}
                      value={travelRole || null}
                      onChange={(e, newvalue) => setTravelRole(newvalue)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" />
                      )}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-2">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}>
                      What kind of visa are you looking for ?
                    </p>
                    <Autocomplete
                      size="small"
                      disablePortal
                      options={options.map((option) => option.label)}
                      value={visa || null}
                      onChange={(e, newvalue) => setVisa(newvalue)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" />
                      )}
                    />
                  </div>
                </div>

                <div className="grid grid-flow-row gap-2 py-5">
                  <p
                    style={{
                      color: "#344054",
                      fontSize: 14,
                      fontWeight: 500,
                    }}>
                    What is the compensation offered for the job
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <Autocomplete
                      size="small"
                      disablePortal
                      options={options.map((option) => option.label)}
                      value={compensationOffered || null}
                      onChange={(e, newvalue) =>
                        setCompensationOffered(newvalue)
                      }
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" />
                      )}
                    />

                    <Autocomplete
                      size="small"
                      disablePortal
                      options={options.map((option) => option.label)}
                      value={compensationOfferedRate || null}
                      onChange={(e, newvalue) =>
                        setCompensationOfferedRate(newvalue)
                      }
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* skills */}
            <div>
              <p style={{ color: "#475467", fontWeight: 500, fontSize: 20 }}>
                Skills
              </p>
              <p style={{ color: "#787879", fontWeight: 500, fontSize: 16 }}>
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
            {/* Qualifications and Requirements */}
            <div className="py-5">
              <p style={{ color: "#475467", fontWeight: 500, fontSize: 20 }}>
                Qualifications and Requirements
              </p>
              <div className="grid-cols-2 grid gap-8 mt-8">
                <div className="grid grid-flow-row gap-2 mt-3">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Minimum level of academic qualification do you seek in
                    potential candidates?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={options.map((option) => option.label)}
                    value={minimumLevelQualification || null}
                    onChange={(e, newvalue) =>
                      setMinimumLevelQualification(newvalue)
                    }
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row gap-2 mt-3">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Are there regulatory/ compliance requirements for academic
                    qualifications?
                  </p>
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={yes_no}
                    value={requireAcademicQualification || null}
                    onChange={(e, newvalue) =>
                      setRequireAcademicQualification(newvalue)
                    }
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-flow-row gap-2 mt-3">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Would you be open to candidate with different academic
                background but match the professional skills?
              </p>
              <Autocomplete
                size="small"
                disablePortal
                options={yes_no}
                value={differentAcademic || null}
                onChange={(e, newvalue) => setDifferentAcademic(newvalue)}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select" />
                )}
              />
            </div>
            {/* cerificate */}
            <div className="grid grid-flow-row gap-2 mt-3">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Are there any specific certifications or licenses that
                candidates must hold?
              </p>
              {certificationsOrLicenses.map((value, index) => {
                return (
                  <>
                    <div>
                      <Autocomplete
                        disablePortal
                        size="small"
                        fullWidth
                        options={options.map((option) => option.label)}
                        value={value.certificate || null}
                        onChange={(e, value) =>
                          handleChangeCertificate("certificate", value, index)
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
                    {certificationsOrLicenses.length > 1 && (
                      <div className=" flex justify-end">
                        <Button
                          variant="outlined"
                          size="small"
                          style={{
                            color: "#EB5757",
                            borderColor: "#E6E6E6",
                            textTransform: "none",
                          }}
                          onClick={() => removeCertificate(index)}
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
                  onClick={addCertificate}
                  startIcon={<FiPlus />}>
                  Add
                </Button>
              </div>
            </div>
            {/* tools */}
            <div className="grid grid-flow-row gap-2 ">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Are there any particular tools or software applications
                candidates should be adept with?
              </p>
              {toolsOrSoftwaresetToolsOrSoftware.map((value, index) => {
                return (
                  <>
                    <div>
                      <Autocomplete
                        disablePortal
                        size="small"
                        fullWidth
                        options={options.map((option) => option.label)}
                        value={value.tools || null}
                        onChange={(e, value) =>
                          handleChangeToolsAndSoftware("tools", value, index)
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
                    {toolsOrSoftwaresetToolsOrSoftware.length > 1 && (
                      <div className=" flex justify-end">
                        <Button
                          variant="outlined"
                          size="small"
                          style={{
                            color: "#EB5757",
                            borderColor: "#E6E6E6",
                            textTransform: "none",
                          }}
                          onClick={() => removeToolsAndSoftware(index)}
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
              <div className="pt-3 flex justify-end">
                <Button
                  variant="outlined"
                  size="small"
                  style={{
                    color: "#404040",
                    borderColor: "#E6E6E6",
                    textTransform: "none",
                  }}
                  onClick={addToolsAndSoftware}
                  startIcon={<FiPlus />}>
                  Add
                </Button>
              </div>
            </div>
            <div className="grid grid-flow-row gap-2">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Can you outline what you envision a successful candidate
                achieving in this role over the next three years?
              </p>
              <TextField
                size="small"
                placeholder="type"
                value={successThreeyear}
                onChange={(e) => setSuccessThreeyear(e.target.value)}
              />
            </div>
            <div className="py-8 gap-8 flex justify-end">
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                variant="outlined"
                style={{ color: "#475467", borderColor: "#D0D5DD" }}>
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                style={{ color: "#ffffff", backgroundColor: "#008080" }}>
                CONFIRM
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
