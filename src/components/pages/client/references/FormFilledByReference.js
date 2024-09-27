import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Top and Side navbar
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
// import { FaPlus } from "react-icons/fa6";
import { Button, TextField } from "@mui/material";
//Select option
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//External Css
import "./reference.css";
//for api
import axiosInstance from "../../../utils/axiosInstance";
import Spinner from "../../../utils/spinner";

const FormFilledByReferences = () => {
  const navigate = useNavigate();

  //Code for select option start
  const [cNumber, setCnumber] = useState("");
  const [role, setRole] = useState("");
  const [cAction, setCaction] = useState("");
  //Code for select option end

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //GET Request
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/getAllCandidateReferences?clientId=1&candidateId=33`)
      .then((data) => {
        //console.log("candidate reference", data);
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex candidate-request-reference">
      <ClientSideNav />
      <div className="w-full min-h-screen side-bar pr-3">
        <TopNav />
        {loading === true ? (
          <Spinner />
        ) : (
          <div className="body-content p-8">
            <h2 className="text-2xl pt-4 font-bold main-black">
              Employee Reference Check Form
            </h2>
            <p className="text-sm pt-3 smallTextGray">
              Please provide the candidate with a request for four professional
              references to verify their background.
            </p>
            <div className="candidate-info-form mt-11">
              <h2 className="font-medium smallTextGray">
                Candidate information:
              </h2>
              {data?.data?.map((user, index) => (
                <div key={index}>
                  <div className="grid grid-cols-2 gap-8 mt-5 mb-8">
                    <div className="grid grid-flow-row gap-1">
                      <p
                        style={{
                          color: "#344054",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        Candidate Name:
                      </p>
                      <TextField
                        size="small"
                        fullWidth
                        placeholder={user.candidateName}
                        value={user.candidateName}
                        className="disable-bg"
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
                        Position Applied For:
                      </p>
                      <TextField
                        size="small"
                        fullWidth
                        type="email"
                        placeholder={user.position}
                        value={user.position}
                        className="disable-bg"
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
                        Reference Contact Name:
                      </p>
                      <TextField
                        size="small"
                        fullWidth
                        type="tel"
                        placeholder={user.phoneNumber}
                        value={user.phoneNumber}
                        className="disable-bg"
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
                        Reference Contact Position:
                      </p>
                      <TextField
                        size="small"
                        fullWidth
                        type="url"
                        placeholder={user.designation}
                        value={user.designation}
                        className="disable-bg"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div className="grid grid-flow-row">
                      <p
                        style={{
                          color: "#344054",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        Reference Contact Organisation:
                      </p>
                      <TextField
                        size="small"
                        fullWidth
                        placeholder={user.company}
                        value={user.company}
                        className="disable-bg"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="filled-by-reference mt-11">
                <h2 className="font-medium smallTextGray text-xl/8">
                  To be filled by References
                </h2>
                <div className="purpose-content py-8">
                  <p className="font-semibold text-black">Purpose:</p>
                  <p className="pt-2 smallTextGray">
                    Thank you for taking the time to provide valuable insights
                    into the professional background of [Candidate Name]. Your
                    feedback plays a crucial role in helping us make informed
                    decisions about the candidate's suitability for the
                    [Position] role at [Company Name]. The purpose of this
                    questionnaire is to assess key behavioral competencies that
                    are essential for success in the role. Your honest and
                    candid responses will allow us to better understand the
                    candidate's strengths and areas for development. Please note
                    that all information provided will be treated with the
                    utmost confidentiality and will only be used for the purpose
                    of evaluating the candidate's fit within our organization.
                    We appreciate your cooperation and valuable input.
                  </p>
                </div>
                <div className="intruction-content">
                  <p className="font-semibold text-black"> Instructions:</p>
                  <p className="pt-2 smallTextGray">
                    Please read each scenario given below and answer according
                    to how much you agree with them. Use the provided options of
                    Rating and Ranking described against each question based on
                    your interpretation. Please choose the option that best
                    decribes the behavioural competencies of the candidate, as
                    relevant answers would be highly beneficial as a feedback.
                  </p>
                </div>
              </div>
              <div className="select-the-right-options pt-11">
                <h2 className="font-medium smallTextGray text-xl/8">
                  Please select the right options
                </h2>
                <div className="select-form grid grid-cols-2 gap-8 mt-5 mb-8">
                  <div className="grid grid-flow-row gap-1">
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                      <p
                        style={{
                          color: "#344054",
                          fontSize: 14,
                          fontWeight: 500,
                          paddingBottom: "5px",
                        }}
                      >
                        How long have you known the candidate?
                      </p>
                      <Select
                        value={cNumber}
                        onChange={(e) => setCnumber(e.target.value)}
                        autoWidth
                        label="Year"
                      >
                        <MenuItem value="Select">
                          <em>Select</em>
                        </MenuItem>
                        <MenuItem value={1}>One Year</MenuItem>
                        <MenuItem value={2}>Two Year</MenuItem>
                        <MenuItem value={3}>Three Year</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                      <p
                        style={{
                          color: "#344054",
                          fontSize: 14,
                          fontWeight: 500,
                          paddingBottom: "5px",
                        }}
                      >
                        In what capacity are you acquainted with the candidate?
                        *
                      </p>
                      <Select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        autoWidth
                        label="Year"
                      >
                        <MenuItem value="Select">
                          <em>Select</em>
                        </MenuItem>
                        <MenuItem value={1}>One Year</MenuItem>
                        <MenuItem value={2}>Two Year</MenuItem>
                        <MenuItem value={3}>Three Year</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="select-form grid grid-cols-1 gap-8 mt-5 mb-8">
                  <div className="grid grid-flow-row gap-1">
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                      <p
                        style={{
                          color: "#344054",
                          fontSize: 14,
                          fontWeight: 500,
                          paddingBottom: "5px",
                        }}
                      >
                        Have you ever formally evaluated the candidate? *
                      </p>
                      <Select
                        value={cAction}
                        onChange={(e) => setCaction(e.target.value)}
                        autoWidth
                        label="Year"
                      >
                        <MenuItem value="Select">
                          <em>Select</em>
                        </MenuItem>
                        <MenuItem value={1}>One Year</MenuItem>
                        <MenuItem value={2}>Two Year</MenuItem>
                        <MenuItem value={3}>Three Year</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="mt-8">
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
                    onClick={() => navigate("/references/ratingQuestions")}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormFilledByReferences;
