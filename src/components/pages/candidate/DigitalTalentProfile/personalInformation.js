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
import { useNavigate, useNavigation } from "react-router-dom";
import pdf from "../../../../assets/images/pdf.png";
import axiosInstance from "../../../utils/axiosInstance";
import { SideNav } from "../../../widgets/sidenav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";

export const PersonalInformation = () => {
  const navigate = useNavigate();
  const location = useNavigate();
  const [file, setFile] = useState();
  const [fullName, setFullName] = useState();
  const [title, setTitle] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [url, setUrl] = useState();
  const [summary, setSummary] = useState();
  const [education, setEducation] = useState([
    {
      degree: null,
      fieldOfStudy: null,
      institution: null,
      certificate: null,
      city: null,
      state: null,
    },
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

  // education
  const addEducation = () => {
    setEducation([
      ...education,
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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    console.log(user);
    axiosInstance
      .get(`/getCandidatePersonalInfo?candidateId=${user.userId}`)
      .then((response) => {
        console.log(response.data.education.length);
        setFullName(
          response.data.fullName !== null ? response.data.fullName : ""
        );
        setSummary(response.data.summary !== null ? response.data.summary : "");
        setTitle(response.data.title !== null ? response.data.title : "");
        setUrl(response.data.url !== null ? response.data.url : "");
        setContactNumber(
          response.data.contactNumber != null ? response.data.contactNumber : ""
        );
        if (response.data.education.length > 0) {
          setEducation(response.data.education);
        }
      })
      .catch((e) => console.log(e));
  }, []);


  const handleUploadResume = (file) => {
    const user = JSON.parse(localStorage.getItem("token"));
    const formData = new FormData();
    formData.append("file", file);
    axiosInstance
          .post(
            `/uploadCandidateResume?candidateId=${user.userId}`,
             formData,
          )
          .then((response) => {
            navigate("/assessmentsList")  
          })
          .catch(error => {
            console.log(error);
          })
  }

  const onPersonalInfoSubmit = async (e) => {
    e.preventDefault();
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
    // navigate("/preferenceform");
    const user = JSON.parse(localStorage.getItem("token"));
    await axiosInstance
      .post("/postCandidatePersonalInfo?candidateId=" + user.userId, {
        file,
        fullName,
        title,
        contactNumber,
        url,
        summary,
        education,
      })
      .then((data) => console.log(data), navigate("/digitalTalentProfile"))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className=" w-full min-h-screen ">
          <TopNav />
          <form className="p-8" onSubmit={onPersonalInfoSubmit}>
            {/* file upload */}
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
                Candidate’s Personal Detail Information
              </p>
              <div className=" py-5">
                <p style={{ color: "#475467", fontSize: 20, fontWeight: 500 }}>
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
                      file?.name ? (
                        <img
                          src={pdf}
                          alt="plf icon"
                          style={{ width: 45, height: 45 }}
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
                    }>
                    {file?.name ? (
                      <p className=" font-semibold text-slate-800">
                        {file?.name}
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
                      }}>
                      <IoMdClose />
                    </IconButton>
                  )}
                </div>
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
                multiline
                rows={2}
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
                          value={value.fieldOfStudy || null}
                          onChange={(e, value) =>
                            handleChangeEducation("fieldOfStudy", value, index)
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
                          institution
                        </p>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={options.map((option) => option.label)}
                          value={value.institution || null}
                          onChange={(e, value) =>
                            handleChangeEducation("institution", value, index)
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
                          institution
                        </p>
                        <Autocomplete
                          disablePortal
                          size="small"
                          fullWidth
                          options={options.map((option) => option.label)}
                          value={value.institution || null}
                          onChange={(e, value) =>
                            handleChangeEducation("institution", value, index)
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
                variant="contained"
                style={{ backgroundColor: "#008080", color: "#ffffff" }}
                type="submit">
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
