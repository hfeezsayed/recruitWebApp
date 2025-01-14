import React, { useState, useEffect } from "react";
import { FiPlus, FiUpload } from "react-icons/fi";
import {
  Autocomplete,
  Button,
  TextField,
  styled,
  IconButton,
} from "@mui/material";
import { IoMdClose, IoMdRemoveCircleOutline } from "react-icons/io";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import pdf from "../../../../assets/images/pdf.png";
import axiosInstance from "../../../utils/axiosInstance";
import { SideNav } from "../../../widgets/sidenav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import {
  OfficialNoticePeriod,
  anyCertificates,
  teamHandSize,
  techTools,
  expertiseType,
  yes_No,
} from "../../../utils/seedsData";
import { TbUvIndex } from "react-icons/tb";

export const PersonalInformation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //CandidatesDeatils
  const [resume, setResume] = useState(null);
  const [candidateId, setCandidateId] = useState();
  const [file, setFile] = useState("");
  const [candidateFullName, setCandidateFullName] = useState("");
  const [title, setTitle] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [summary, setSummary] = useState("");

  //Academic Qualification
  const [candidateEducationDetails, setCandidateEducationDetails] = useState([
    {
      degree: null,
      fieldOfStudy: null,
      institution: null,
      certificate: null,
      city: null,
      state: null,
    },
  ]);

  //Professional Experience
  const [
    candidateProfessionalDetails,
    setCandidateProfessionalDetails,
  ] = useState([
    {
      projectTitle: null,
      role: null,
      yearsOfExperience: null,
      projectDescription: null,
      expWithStakeHolders: null,
      teamHandlingExp: true,
      teamSize: null,
    },
  ]);

  const [candidateSkillDetails, setCandidateSkillDetails] = useState([
    {
      technology: null,
      expertise: null,
    },
  ]);

  //Add education
  const addEducation = () => {
    setCandidateEducationDetails([
      ...candidateEducationDetails,
      {
        degree: null,
        fieldOfStudy: null,
        institution: null,
        certificate: null,
        city: null,
        state: null,
      },
    ]);
  };

  const removeEducation = (i) => {
    let newFormValues = [...candidateEducationDetails];
    newFormValues.splice(i, 1);
    setCandidateEducationDetails(newFormValues);
  };

  //handle Change for skills
  const handleChangeSkill = (e, value, i) => {
    // const { name, value } = e.target;
    // const onChangeVal = [...candidateSkillDetails];
    // onChangeVal[index][name] = value;
    // setCandidateSkillDetails(onChangeVal);

    console.log(value);
    let newFormValues = [...candidateSkillDetails];
    newFormValues[i][e] = value;
    setCandidateSkillDetails(newFormValues);
  };

  //handle Change for Academic Qualification start
  //for Select change
  const handleEducationChange = (e, value, i) => {
    let newFormValues = [...candidateEducationDetails];
    newFormValues[i][e] = value;
    setCandidateEducationDetails(newFormValues);
  };
  //for input change
  const handleEducationInputChange = (e, index) => {
    const { name, value } = e.target;
    const onChangeVal = [...candidateEducationDetails];
    onChangeVal[index][name] = value;
    setCandidateEducationDetails(onChangeVal);
  };
  //handle Change for Academic Qualification end

  //handle Change for candaidate Professional Experience start
  //for input change
  const handleProfessionalChange = (e, index) => {
    const { name, value } = e.target;
    const onChangeVal = [...candidateProfessionalDetails];
    onChangeVal[index][name] = value;
    setCandidateProfessionalDetails(onChangeVal);
  };
  //for Select change
  const handleProfessionalSelectChange = (e, value, i) => {
    let newFormValues = [...candidateProfessionalDetails];
    newFormValues[i][e] = value;
    setCandidateProfessionalDetails(newFormValues);
  };
  //handle Change for candaidate Professional Experience start

  //addSkillsRow
  const addSkillsRow = () => {
    setCandidateSkillDetails([
      ...candidateSkillDetails,
      {
        technology: null,
        expertise: null,
      },
    ]);
  };

  //removeSkills
  const removeSkills = (i) => {
    let newFormValues = [...candidateSkillDetails];
    newFormValues.splice(i, 1);
    setCandidateSkillDetails(newFormValues);
  };

  //Resume code start
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

  const handleUploadResume = (file, e) => {
    e?.preventDefault();
    const user = JSON.parse(localStorage.getItem("token"));
    const formData = new FormData();
    formData.append("file", file);
    axiosInstance
      .post(`/uploadCandidateResume?candidateId=${user.userId}`, formData)
      .then((response) => {
        navigate("/digitalTalentProfile/personalinfromation");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Resume code End

  //Get Request
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    let personalInfoId = 0;
    console.log(location.state);
    if (location.state) {
      personalInfoId = location.state;
    }
    axiosInstance
      .get(
        `/getCandidateDetailsForm?candidateId=${user.userId}&personalInfoId=-1`
      )
      .then((response) => {
        const data = response.data;
        console.log("CandidateDetailsUpdated:", data);
        if (response.data) {
          setCandidateFullName(
            data.candidateFullName !== null ? data.candidateFullName : ""
          );
          setTitle(data.title !== null ? data.title : "");
          setMobileNumber(data.mobileNumber !== null ? data.mobileNumber : "");
          setNoticePeriod(data.noticePeriod !== null ? data.noticePeriod : "");
          setSummary(data.summary !== null ? data.summary : "");
        }
        if (
          data.candidateEducationDetails &&
          data.candidateEducationDetails.length > 0
        ) {
          setCandidateEducationDetails(data.candidateEducationDetails);
        }
        if (
          data.candidateProfessionalDetails &&
          data.candidateProfessionalDetails.length > 0
        ) {
          setCandidateProfessionalDetails(data.candidateProfessionalDetails);
        }
        if (
          data.candidateProfessionalDetails &&
          data.candidateProfessionalDetails.length > 0
        ) {
          setCandidateSkillDetails(data.candidateSkillDetails);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  //Submit request
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      "PersonalInfo:---",
      candidateFullName,
      title,
      mobileNumber,
      noticePeriod,
      summary,
      candidateEducationDetails,
      candidateProfessionalDetails,
      candidateSkillDetails
    );
    const user = JSON.parse(localStorage.getItem("token"));
    console.log("userId---", user);
    await axiosInstance
      .post(`/saveCandidateDetailsForm?candidateId=${user.userId}`, {
        candidateFullName,
        title,
        mobileNumber,
        noticePeriod,
        summary,
        candidateEducationDetails,
        candidateProfessionalDetails,
        candidateSkillDetails,
      })
      .then((data) => {
        console.log(data);
        // navigate("/candidate");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="flex">
        <SideNav openTemplate={true} />
        <div className=" w-full min-h-screen ">
          <TopNav />
          <form className="p-8" onSubmit={handleSubmit}>
            {/* file upload */}
            <div>
              <p
                style={{
                  color: "#101828",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                Candidate Details
              </p>
              <div className=" py-5">
                <p
                  style={{
                    color: "#475467",
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  Upload Resume
                </p>
                <div className="flex gap-3 items-center">
                  <Button
                    component="label"
                    variant="text"
                    size="small"
                    style={{
                      color: "#404040",
                      marginTop: 10,
                      borderRadius: 8,
                    }}
                    startIcon={
                      resume ? (
                        <img
                          src={pdf}
                          alt="plf icon"
                          style={{
                            width: 45,
                            height: 45,
                          }}
                        />
                      ) : (
                        <FiUpload
                          style={{
                            color: "#2C2466",
                            fontWeight: 800,
                            fontSize: 30,
                          }}
                        />
                      )
                    }
                  >
                    {resume ? (
                      <p className=" font-semibold text-slate-800">
                        {resume || null}
                      </p>
                    ) : (
                      <p>
                        Attach, Dropbox, or enter manually
                        <br />
                        File type: pdf, doc, docx, txt,rtf (Less than 25 MB)
                      </p>
                    )}
                    <VisuallyHiddenInput
                      type="file"
                      accept="image/jpeg,image/png,application/pdf"
                      onChange={(e) => handleUploadResume(e.target.files[0])}
                    />
                  </Button>

                  {file?.name && (
                    <IconButton
                      onClick={() => {
                        setFile(null);
                      }}
                    >
                      <IoMdClose />
                    </IconButton>
                  )}
                </div>
              </div>
            </div>
            {/* input fileds */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              <div className="grid grid-flow-row">
                <p
                  style={{
                    color: "#344054",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Full Name
                </p>
                <TextField
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Enter Full Name"
                  value={candidateFullName || null}
                  onChange={(e) => setCandidateFullName(e.target.value)}
                />
              </div>
              <div className="grid grid-flow-row">
                <p
                  style={{
                    color: "#344054",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Title
                </p>
                <TextField
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Senior Software Developer"
                  value={title || null}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid grid-flow-row">
                <p
                  style={{
                    color: "#344054",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Mobile Number
                </p>
                <TextField
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Senior Mobile Number"
                  value={mobileNumber || null}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <div className="grid grid-flow-row">
                <p
                  style={{
                    color: "#344054",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Official Notice Period
                </p>
                {/* <TextField
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Notice period"
                  value={noticePeriod || null}
                  onChange={(e) => setNoticePeriod(e.target.value)}
                /> */}
                <Autocomplete
                  disablePortal
                  size="small"
                  fullWidth
                  options={OfficialNoticePeriod.map((option) => option.label)}
                  value={noticePeriod || null}
                  onChange={(e, value) => setNoticePeriod(value)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" required />
                  )}
                />
              </div>
            </div>
            <div className="grid grid-flow-row pt-5 pb-8">
              <p
                style={{
                  color: "#344054",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Summary
              </p>
              <TextField
                required
                multiline
                rows={2}
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Type"
                value={summary || null}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>

            {/* education */}
            <div className="mt-6">
              <p
                style={{
                  color: "#475467",
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                Academic Qualification
              </p>
              <div>
                <div>
                  {candidateEducationDetails?.map((value, index) => (
                    <div key={index} className="mt-5">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-3">
                        <div className="grid grid-flow-row">
                          <p
                            style={{
                              color: "#344054",
                              fontSize: 14,
                              fontWeight: 500,
                            }}
                          >
                            Degree
                          </p>
                          <TextField
                            required
                            fullWidth
                            size="small"
                            variant="outlined"
                            placeholder="Enter degree..."
                            name="degree"
                            value={value.degree || null}
                            onChange={(e) =>
                              handleEducationInputChange(e, index)
                            }
                          />
                        </div>
                        <div className="grid grid-flow-row">
                          <p
                            style={{
                              color: "#344054",
                              fontSize: 14,
                              fontWeight: 500,
                            }}
                          >
                            Field of Study
                          </p>
                          <TextField
                            required
                            fullWidth
                            size="small"
                            variant="outlined"
                            placeholder="Enter study..."
                            name="fieldOfStudy"
                            value={value.fieldOfStudy || null}
                            onChange={(e) =>
                              handleEducationInputChange(e, index)
                            }
                          />
                        </div>
                        <div className="grid grid-flow-row">
                          <p
                            style={{
                              color: "#344054",
                              fontSize: 14,
                              fontWeight: 500,
                            }}
                          >
                            Institution
                          </p>
                          <TextField
                            required
                            fullWidth
                            size="small"
                            variant="outlined"
                            placeholder="Enter institution..."
                            name="institution"
                            value={value.institution || null}
                            onChange={(e) =>
                              handleEducationInputChange(e, index)
                            }
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                          <div className="grid grid-flow-row">
                            <p
                              style={{
                                color: "#344054",
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            >
                              City
                            </p>
                            <TextField
                              required
                              fullWidth
                              size="small"
                              variant="outlined"
                              placeholder="Enter city..."
                              name="city"
                              value={value.city || null}
                              onChange={(e) =>
                                handleEducationInputChange(e, index)
                              }
                            />
                          </div>
                          <div className="grid grid-flow-row">
                            <p
                              style={{
                                color: "#344054",
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            >
                              State
                            </p>
                            <TextField
                              required
                              fullWidth
                              size="small"
                              variant="outlined"
                              placeholder="Enter state..."
                              name="state"
                              value={value.state || null}
                              onChange={(e) =>
                                handleEducationInputChange(e, index)
                              }
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
                            }}
                          >
                            Any Certificates
                          </p>
                          <Autocomplete
                            disablePortal
                            size="small"
                            fullWidth
                            options={anyCertificates.map(
                              (option) => option.label
                            )}
                            value={value.certificate || null}
                            onChange={(e, value) =>
                              handleEducationChange("certificate", value, index)
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
                      {candidateEducationDetails.length > 1 && (
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
                                style={{
                                  color: "#EB5757",
                                }}
                              />
                            }
                          >
                            Remove
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

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
                  startIcon={<FiPlus />}
                >
                  Add New
                </Button>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <p
                style={{
                  color: "#475467",
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                Professional Experience
              </p>

              <div>
                {candidateProfessionalDetails?.map((val, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-3">
                      <div className="grid grid-flow-row">
                        <p
                          style={{
                            color: "#344054",
                            fontSize: 14,
                            fontWeight: 500,
                          }}
                        >
                          Name of the project?
                        </p>
                        <TextField
                          required
                          fullWidth
                          size="small"
                          variant="outlined"
                          placeholder="Enter project..."
                          name="projectTitle"
                          value={val.projectTitle || null}
                          onChange={(e) => handleProfessionalChange(e, index)}
                        />
                      </div>
                      <div className="grid grid-flow-row">
                        <p
                          style={{
                            color: "#344054",
                            fontSize: 14,
                            fontWeight: 500,
                          }}
                        >
                          Please Specify the Role/Designation in the Project?
                        </p>
                        <TextField
                          required
                          fullWidth
                          size="small"
                          variant="outlined"
                          placeholder="Enter role..."
                          name="role"
                          value={val.role || null}
                          onChange={(e) => handleProfessionalChange(e, index)}
                        />
                      </div>
                      <div className="grid grid-flow-row">
                        <p
                          style={{
                            color: "#344054",
                            fontSize: 14,
                            fontWeight: 500,
                          }}
                        >
                          How many years of experience do you have?
                        </p>
                        <TextField
                          required
                          fullWidth
                          size="small"
                          variant="outlined"
                          placeholder="Enter experience ..."
                          name="yearsOfExperience"
                          value={val.yearsOfExperience || null}
                          onChange={(e) => handleProfessionalChange(e, index)}
                        />
                      </div>
                      <div className="grid grid-flow-row">
                        <p
                          style={{
                            color: "#344054",
                            fontSize: 14,
                            fontWeight: 500,
                          }}
                        >
                          Have you had experience with stakeholders for business
                          goals?
                        </p>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={yes_No.map((option) => option.label)}
                          value={val.expWithStakeHolders || null}
                          onChange={(e, value) =>
                            handleProfessionalSelectChange(
                              "expWithStakeHolders",
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
                        {/* <TextField
                          required
                          fullWidth
                          size="small"
                          variant="outlined"
                          placeholder="yes no..."
                          name="expWithStakeHolders"
                          value={val.expWithStakeHolders || null}
                          onChange={(e) => handleProfessionalChange(e, index)}
                        /> */}
                      </div>
                      <div className="grid grid-flow-row">
                        <p
                          style={{
                            color: "#344054",
                            fontSize: 14,
                            fontWeight: 500,
                          }}
                        >
                          Do you have team handling experience?
                        </p>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={yes_No.map((option) => option.label)}
                          value={
                            val.teamHandlingExp === true ? "Yes" : "No" || null
                          }
                          onChange={(e, value) =>
                            handleProfessionalSelectChange(
                              "teamHandlingExp",
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

                        {/* <TextField
                          required
                          fullWidth
                          size="small"
                          variant="outlined"
                          placeholder="true..."
                          name="teamHandlingExp"
                          value={val.teamHandlingExp ? "Yes" : "NO" || null}
                          onChange={(e) => handleProfessionalChange(e, index)}
                        /> */}
                      </div>
                      <div className="grid grid-flow-row">
                        <p
                          style={{
                            color: "#344054",
                            fontSize: 14,
                            fontWeight: 500,
                          }}
                        >
                          Please specify the team size?
                        </p>
                        <TextField
                          required
                          fullWidth
                          type="number"
                          size="small"
                          variant="outlined"
                          placeholder="Team Size..."
                          name="teamSize"
                          value={val.teamSize || null}
                          onChange={(e) => handleProfessionalChange(e, index)}
                        />

                        {/* <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={teamHandSize.map((option) => option.label)}
                          value={val.teamSize || null}
                          onChange={(e, value) =>
                            handleProfessionalSelectChange(
                              "teamSize",
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
                        /> */}
                      </div>
                    </div>
                    <div className="grid grid-flow-row pt-5 pb-8">
                      <p
                        style={{
                          color: "#344054",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        Could you elaborate on your experience in [specific area
                        relevant to the role] the project.
                      </p>
                      <TextField
                        required
                        multiline
                        rows={2}
                        fullWidth
                        size="small"
                        variant="outlined"
                        placeholder="Type"
                        name="projectDescription"
                        value={val.projectDescription || null}
                        onChange={(e) => handleProfessionalChange(e, index)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mt-6">
              <p
                style={{
                  color: "#475467",
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                Skills
              </p>
              {candidateSkillDetails?.map((val, index) => (
                <div className="mt-3" key={index}>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-3">
                    <div className="grid grid-flow-row">
                      <p
                        style={{
                          color: "#344054",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        Technology/Tool
                      </p>
                      <Autocomplete
                        disablePortal
                        size="small"
                        fullWidth
                        options={techTools.map((option) => option.label)}
                        value={val.technology || null}
                        onChange={(e, value) =>
                          handleChangeSkill("technology", value, index)
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
                        }}
                      >
                        Expertise
                      </p>
                      <Autocomplete
                        disablePortal
                        size="small"
                        fullWidth
                        options={expertiseType.map((option) => option.label)}
                        value={val.expertise || null}
                        onChange={(e, value) =>
                          handleChangeSkill("expertise", value, index)
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
                  {candidateSkillDetails.length > 1 && (
                    <div className="pt-3 flex justify-end">
                      <Button
                        variant="outlined"
                        size="small"
                        style={{
                          color: "#EB5757",
                          borderColor: "#E6E6E6",
                          textTransform: "none",
                        }}
                        onClick={() => removeSkills(index)}
                        startIcon={
                          <IoMdRemoveCircleOutline
                            style={{
                              color: "#EB5757",
                            }}
                          />
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
              ))}

              <div className="py-3 flex justify-end">
                <Button
                  variant="outlined"
                  size="small"
                  style={{
                    color: "#404040",
                    borderColor: "#E6E6E6",
                    textTransform: "none",
                  }}
                  onClick={addSkillsRow}
                  startIcon={<FiPlus />}
                >
                  Add New
                </Button>
              </div>
            </div>

            {/* buttons */}
            <div className="flex justify-end py-8 gap-5">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#008080",
                  color: "#ffffff",
                }}
                type="submit"
                onClick={() => navigate("/candidate")}
              >
                Back
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#008080",
                  color: "#ffffff",
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
