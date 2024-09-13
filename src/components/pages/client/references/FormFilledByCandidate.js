//Top and Side navbar
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { FaPlus } from "react-icons/fa6";
import { Button, TextField } from "@mui/material";
//External Css
import "./reference.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormFilledByCandidate = () => {
  const [addFrom, setAddFrom] = useState([
    {
      cName: "",
      posApplied: "",
      refContactName: "",
      refContactPosition: "",
      refContactOrganisation: "",
    },
  ]);

  const addHandleForm = () => {
    setAddFrom([
      ...addFrom,
      {
        cName: "",
        posApplied: "",
        refContactName: "",
        refContactPosition: "",
        refContactOrganisation: "",
      },
    ]);
  };

  const navigate = useNavigate();
  return (
    <div className="flex candidate-request-reference">
      <ClientSideNav />
      <div className="w-full min-h-screen side-bar pr-3">
        <TopNav />
        <div className="body-content p-8">
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
            {addFrom.map((val, index) => (
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
                      placeholder="Arpita Gupta"
                      value=""
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
                      placeholder="Senior Backend Developer"
                      value=""
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
                      placeholder="Type"
                      value=""
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
                      placeholder="Type"
                      value=""
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
                      placeholder="Type"
                      value=""
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-8">
              <div className="text-end">
                <Button
                  variant="outlined"
                  className="add-btn"
                  onClick={addHandleForm}
                >
                  <FaPlus />
                  &nbsp;Add
                </Button>
              </div>
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
                  onClick={() => navigate("/references/filledbyreferences")}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFilledByCandidate;
