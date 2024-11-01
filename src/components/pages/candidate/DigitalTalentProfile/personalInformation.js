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

export const PersonalInformation = () => {
  const navigate = useNavigate();
  const [resume, setResume] = useState("");
  const [file, setFile] = useState("");

  return (
    <div>
      <div className="flex">
        <SideNav openTemplate={true} />
        <div className=" w-full min-h-screen ">
          <TopNav />
          <form className="p-8">
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
                      <p className=" font-semibold text-slate-800">{resume}</p>
                    ) : (
                      <p>
                        Attach, Dropbox, or enter manually
                        <br />
                        File type: pdf, doc, docx, txt,rtf (Less than 25 MB)
                      </p>
                    )}
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
                  Candidate Full Name
                </p>
                <TextField
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Enter Full Name"
                  value=""
                  //onChange={(e) => setFullName(e.target.value)}
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
                  value=""
                  //onChange={(e) => setTitle(e.target.value)}
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
                  value=""
                  //onChange={(e) => setContactNumber(e.target.value)}
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
                    LinkedIn Profile
                  </p>
                  <TextField
                    required
                    fullWidth
                    size="small"
                    variant="outlined"
                    placeholder="https://www.example.com"
                    value=""
                    //onChange={(e) => setUrl(e.target.value)}
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
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={OfficialNoticePeriod.map((option) => option.label)}
                    value=""
                    //onChange={(e, value) => setTeamSize(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
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
                value=""
                //onChange={(e) => setSummary(e.target.value)}
              />
            </div>
            {/* education */}
            <div>
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
                <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-3">
                  <div className="grid grid-flow-row">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Education
                    </p>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      variant="outlined"
                      placeholder="Enter education..."
                      value=""
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
                        Degree
                      </p>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        variant="outlined"
                        placeholder="Enter degree..."
                        value=""
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
                        value=""
                      />
                    </div>
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
                      value=""
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
                        value=""
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
                        value=""
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
                      options={anyCertificates.map((option) => option.label)}
                      value=""
                      //onChange={(e, value) => setTeamSize(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
                      )}
                    />
                  </div>
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
                  //onClick={addEducation}
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
                      value=""
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
                      value=""
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
                      value=""
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
                      value=""
                      //onChange={(e, value) => setTeamSize(value)}
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
                      }}
                    >
                      Do you have team handling experience?
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={yes_No.map((option) => option.label)}
                      value=""
                      //onChange={(e, value) => setTeamSize(value)}
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
                      }}
                    >
                      Please select the team size
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={teamHandSize.map((option) => option.label)}
                      value=""
                      //onChange={(e, value) => setTeamSize(value)}
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
                    value=""
                    //onChange={(e) => setSummary(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <p
                style={{
                  color: "#475467",
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                Skills
              </p>

              <div>
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
                      value=""
                      //onChange={(e, value) => setTeamSize(value)}
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
                      }}
                    >
                      Expertise
                    </p>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      options={expertiseType.map((option) => option.label)}
                      value=""
                      //onChange={(e, value) => setTeamSize(value)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select" required />
                      )}
                    />
                  </div>
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
                  //onClick={addEducation}
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
