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
      degree: "",
      filedStudy: "",
      institutions: "",
      certificate: "",
      city: "",
      state: "",
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
    { type: "", experience: "" },
  ]);

  const options = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const addEducation = () => {
    setEducation([
      ...education,
      {
        degree: "",
        filedStudy: "",
        institutions: "",
        certificate: "",
        city: "",
        state: "",
      },
    ]);
  };

  let handleChangeEducation = (e, value, i) => {
    let newFormValues = [...education];
    newFormValues[i][e] = value;
    setEducation(newFormValues);
  };

  let removeEducation = (i) => {
    let newFormValues = [...education];
    newFormValues.splice(i, 1);
    setEducation(newFormValues);
  };

  const onSubmit = () => {
    console.log(
      file?.name,
      fullName,
      title,
      contactNumber,
      url,
      summary,
      education
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
                      <div className="py-3 flex justify-end">
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
                  onSubmit();
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
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};
