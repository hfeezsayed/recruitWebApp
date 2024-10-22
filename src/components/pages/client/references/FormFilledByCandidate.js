import React, { useState } from "react";
//Top and Side navbar
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { FaPlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
//MUI
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
//select country code for phone number
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
//External Css
import "./reference.css";
//API
import axiosInstance from "../../../utils/axiosInstance";
//notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormFilledByCandidate = () => {
  const [candidateName, setCandidateName] = useState("");
  const [position, setPosition] = useState("");
  const [referenceName, setReferenceName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [professionalNetwork, setProfessionalNetwork] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [connectionType, setConnectionType] = useState("");
  const [workDurationStart, setWorkDurationStart] = useState("");
  const [workDurationEnd, setWorkDurationEnd] = useState("");
  const [hasSuperior, setHasSuperior] = useState("");
  //Apened form
  const [apenedForm, setApened] = useState([
    {
      candidateName: "",
      position: "",
      referenceName: "",
      designation: "",
      email: "",
      professionalNetwork: "",
      company: "",
      phoneNumber: "",
      connectionType: "",
      workDurationStart: "",
      workDurationEnd: "",
      hasSuperior: "",
    },
  ]);

  const saveCandidateReference = () => {
    axiosInstance
      .post(`/saveCandidateReference`, {
        candidateName,
        position,
        referenceName,
        designation,
        email,
        professionalNetwork,
        company,
        phoneNumber,
        connectionType,
        workDurationStart,
        workDurationEnd,
        hasSuperior,
      })
      .then((data) => {
        console.log("saveReference", data);
        toast.success(data.data.result);
        setCandidateName("");
        setPosition("");
        setReferenceName("");
        setDesignation("");
        setEmail("");
        setProfessionalNetwork("");
        setCompany("");
        setPhoneNumber("");
        setConnectionType("");
        setWorkDurationStart("");
        setWorkDurationEnd("");
        setHasSuperior("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addHandleForm = () => {
    setApened([
      ...apenedForm,
      {
        candidateName: "",
        position: "",
        referenceName: "",
        designation: "",
        email: "",
        professionalNetwork: "",
        company: "",
        phoneNumber: "",
        connectionType: "",
        workDurationStart: "",
        workDurationEnd: "",
        hasSuperior: "",
      },
    ]);
  };

  const removeHandleForm = (i) => {
    const deleteForm = [...apenedForm];
    deleteForm.splice(i, 1);
    setApened(deleteForm);
  };

  return (
    <div className="flex candidate-request-reference">
      <div className="w-full min-h-screen side-bar pr-3">
        {/* notification alert start*/}
        <ToastContainer />
        {/* notification alert End*/}
        <div className="body-content p-12">
          <h2 className="text-2xl pt-4 font-bold main-black">
            Employee Reference Check Form
          </h2>
          <p className="text-sm pt-3 smallTextGray">
            Please provide the candidate with a request for professional
            references to verify their background.
          </p>
          <div className="candidate-info-form mt-11">
            <h2 className="font-medium smallTextGray">
              Candidate Information:
            </h2>
            {Object.keys(apenedForm).map((x, i) => (
              <div key={i}>
                <div className="grid grid-cols-2 gap-8 mt-5 mb-8">
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Candidate Name
                    </p>
                    <TextField
                      size="small"
                      fullWidth
                      placeholder="name..."
                      value={candidateName}
                      required
                      //className="disable-bg"
                      onChange={(e) => setCandidateName(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Position Applied For
                    </p>
                    <TextField
                      size="small"
                      fullWidth
                      type="text"
                      placeholder="position..."
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      required
                      //className="disable-bg"
                    />
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Reference Contact Name
                    </p>
                    <TextField
                      size="small"
                      fullWidth
                      type="contact name..."
                      placeholder="Type"
                      value={referenceName}
                      onChange={(e) => setReferenceName(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Reference Designation
                    </p>
                    <TextField
                      size="small"
                      fullWidth
                      type="text"
                      placeholder="Type"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Reference Email
                    </p>
                    <TextField
                      size="small"
                      fullWidth
                      type="email"
                      placeholder="Type"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Reference Phone Number
                    </p>
                    <PhoneInput
                      placeholder="Enter phone number"
                      defaultCountry="IN"
                      value={phoneNumber}
                      area-describedby="basic-addon2"
                      onChange={setPhoneNumber}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Professional Network
                      <span
                        style={{ fontStyle: "italic", fontWeight: "normal" }}
                      >
                        (optional)
                      </span>
                    </p>
                    <TextField
                      size="small"
                      fullWidth
                      type="text"
                      placeholder="Type"
                      value={professionalNetwork}
                      onChange={(e) => setProfessionalNetwork(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Reference Company
                    </p>
                    <TextField
                      size="small"
                      fullWidth
                      type="url"
                      placeholder="Type"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Reference Connection Type
                    </p>
                    <Box>
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={connectionType}
                          onChange={(e) => setConnectionType(e.target.value)}
                        >
                          <MenuItem value="direct">Direct</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Has superior
                    </p>
                    <Box>
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={hasSuperior}
                          onChange={(e) => setHasSuperior(e.target.value)}
                        >
                          <MenuItem value="yes">Yes</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Reference Work Duration: Start Date
                    </p>
                    <div className="default-datePicker">
                      <input
                        name="date"
                        type="date"
                        value={workDurationStart}
                        className="date-control"
                        onChange={(e) => setWorkDurationStart(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <p
                      style={{
                        color: "#344054",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      Reference Work Duration: End Date
                    </p>
                    <div className="default-datePicker">
                      <input
                        type="date"
                        name="date"
                        value={workDurationEnd}
                        className="date-control"
                        onChange={(e) => setWorkDurationEnd(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex justify-end gap-2">
                    {apenedForm.length - 1 == i && (
                      <Button
                        variant="outlined"
                        className="add-btn"
                        onClick={addHandleForm}
                      >
                        <FaPlus />
                        &nbsp;Add
                      </Button>
                    )}
                    {apenedForm.length !== 1 && (
                      <Button
                        variant="outlined"
                        className="remove-btn"
                        onClick={() => removeHandleForm(i)}
                      >
                        <FaMinusCircle className="text-red-500" />
                        &nbsp;Remove
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-end py-16 gap-5">
              <Button
                variant="outlined"
                style={{ borderColor: "#D0D5DD", color: "#475467" }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#008080", color: "#ffffff" }}
                onClick={saveCandidateReference}
                //onClick={() => navigate("/references/filledbyreferences")}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFilledByCandidate;
