import React from "react";
import {
  Autocomplete,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const PreferencePopup = ({ data, setClose, open }) => {
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

  return (
    <Dialog
      open={open}
      onClose={setClose}
      PaperProps={{ sx: { minWidth: "55%" } }}>
      <DialogTitle>Preference Details</DialogTitle>
      <IconButton
        onClick={setClose}
        style={{ position: "absolute", top: 10, right: 10 }}>
        <IoIosCloseCircleOutline />
      </IconButton>
      <Divider />
      <DialogContent>
        {/* idustry */}
        <div className="py-5">
          <p style={{ color: "#475467", fontWeight: 500, fontSize: 20 }}>
            Industry Details
          </p>
          <div>
            <div className="grid grid-flow-row gap-2 mt-3">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Does the role have to work cross functionally?
              </p>
              <Autocomplete
                disabled
                size="small"
                disablePortal
                options={yes_no}
                value={data?.experianceInIndustry || null}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select" />
                )}
              />
            </div>
            <div className="grid grid-flow-row gap-2 mt-3">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                If so, could you specify which industry and why that experience
                is critical?
              </p>
              <TextField
                size="small"
                placeholder="type"
                value={data?.specifyIndusrtyExp}
              />
            </div>
            <div className="grid grid-flow-row gap-2 mt-3">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Could you provide a job description if available?
              </p>
              <textarea
                value={data?.jobDescription}
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
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                What is the scope of the role? (Please specify the
                responsibilities of the role)
              </p>
              <textarea
                value={data?.scopOfRole}
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
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Would a candidate's in-depth knowledge of the industry be
                considered valuable even if they lack direct experience in the
                field?
              </p>
              <Autocomplete
                disabled
                size="small"
                disablePortal
                options={yes_no}
                value={data?.depthKnowledge || null}
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
                  disabled
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={data?.typeOfRoles || null}
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
                  disabled
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={data?.timeOfRole || null}
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
                  disabled
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={data?.workSetting || null}
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
                  disabled
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={data?.locationRole || null}
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
                  disabled
                  size="small"
                  disablePortal
                  options={yes_no}
                  value={data?.relocation || null}
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
                  value={data?.relocationBudget}
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
                  disabled
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={data?.travelRole || null}
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
                  disabled
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={data?.visa || null}
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
                  disabled
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={data?.compensationOffered || null}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />

                <Autocomplete
                  disabled
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={data?.compensationOfferedRate || null}
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
            {data?.primarySkills?.map((value, index) => {
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
                        disabled
                        disablePortal
                        size="small"
                        fullWidth
                        options={skills.map((option) => option.label)}
                        value={value.skill || null}
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
                        disabled
                        disablePortal
                        size="small"
                        fullWidth
                        options={skillLevel.map((option) => option.label)}
                        value={value.expertise || null}
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
                </>
              );
            })}
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
            {data?.secoundrySkills?.map((value, index) => {
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
                        disabled
                        disablePortal
                        size="small"
                        fullWidth
                        options={skills.map((option) => option.label)}
                        value={value.skill || null}
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
                        disabled
                        disablePortal
                        size="small"
                        fullWidth
                        options={skillLevel.map((option) => option.label)}
                        value={value.expertise || null}
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
              );
            })}
          </div>
        </div>
        {/* Qualifications and Requirements */}
        <div className="py-5">
          <p style={{ color: "#475467", fontWeight: 500, fontSize: 20 }}>
            Qualifications and Requirements
          </p>
          <div className="grid-cols-2 grid gap-8 mt-8">
            <div className="grid grid-flow-row gap-2 mt-3">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Minimum level of academic qualification do you seek in potential
                candidates?
              </p>
              <Autocomplete
                disabled
                size="small"
                disablePortal
                options={options.map((option) => option.label)}
                value={data?.minimumLevelQualification || null}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select" />
                )}
              />
            </div>
            <div className="grid grid-flow-row gap-2 mt-3">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Are there regulatory/ compliance requirements for academic
                qualifications?
              </p>
              <Autocomplete
                disabled
                size="small"
                disablePortal
                options={yes_no}
                value={data?.requireAcademicQualification || null}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select" />
                )}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row gap-2 mt-3">
          <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
            Would you be open to candidate with different academic background
            but match the professional skills?
          </p>
          <Autocomplete
            disabled
            size="small"
            disablePortal
            options={yes_no}
            value={data?.differentAcademic || null}
            renderInput={(params) => (
              <TextField {...params} placeholder="Select" />
            )}
          />
        </div>
        {/* cerificate */}
        <div className="grid grid-flow-row gap-2 mt-3">
          <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
            Are there any specific certifications or licenses that candidates
            must hold?
          </p>
          {data?.certificationsOrLicenses?.map((value, index) => {
            return (
              <>
                <div>
                  <Autocomplete
                    disabled
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={value.certificate || null}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </>
            );
          })}
        </div>
        {/* tools */}
        <div className="grid grid-flow-row gap-2 ">
          <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
            Are there any particular tools or software applications candidates
            should be adept with?
          </p>
          {data?.toolsOrSoftwaresetToolsOrSoftware?.map((value, index) => {
            return (
              <>
                <div>
                  <Autocomplete
                    disabled
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={value.tools || null}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className="grid grid-flow-row gap-2">
          <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
            Can you outline what you envision a successful candidate achieving
            in this role over the next three years?
          </p>
          <TextField
            size="small"
            placeholder="type"
            value={data?.successThreeyear}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
