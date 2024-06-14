import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Autocomplete, Button, TextField, styled } from "@mui/material";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import pdflogo from "../../../../assets/images/fileUpload.png";
import { SideNav } from "../../../widgets/sidenav";
import { Footer } from "../../../widgets/footer";
import { useEffect } from "react";

export const PersonalInformation = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [fullName, setFullName] = useState();
  const [title, setTitle] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [url, setUrl] = useState();
  const [summary, setSummary] = useState();
  const [education, setEducation] = useState([
    // {
    //   degree: null,
    //   fieldOfStudy: null,
    //   institution: null,
    //   certificate: null,
    //   city: null,
    //   state: null,
    // },
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
    axios
      .get(
        "https://xenflexer.northcentralus.cloudapp.azure.com/xen/getCandidatePersonalInfo?candidateId="+user.userId
      )
      .then((response) => {
        console.log(response.data.education.length);
        setFullName((response.data.fullName !== null) ? response.data.fullName : "");
        setSummary((response.data.summary !== null) ? response.data.summary : "");
        setTitle((response.data.title !== null) ? response.data.title : "");
        setUrl((response.data.url !== null) ? response.data.url : "");
        setContactNumber((response.data.contactNumber != null) ? response.data.contactNumber : "");
        if(response.data.education.length > 0){
          setEducation(...education, response.data.education);
        }
      })
      .catch((e) => console.log(e))
  }, []);

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
    await axios
      .post(
        "https://xenflexer.northcentralus.cloudapp.azure.com/xen/postCandidatePersonalInfo?candidateId="+user.userId,
        {
          file,
          fullName,
          title,
          contactNumber,
          url,
          summary,
          education
        }
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
        <form
          className="p-8 w-full min-h-screen"
          onSubmit={onPersonalInfoSubmit}>
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
              {file && (
                <p style={{ color: "#101828", fontSize: 14, fontWeight: 500 }}>
                  {file.name}
                </p>
              )}
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
              multiline
              rows={4}
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
      <Footer />
    </div>
  );
};
