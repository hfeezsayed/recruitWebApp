import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "@mui/material";
//icons
import { MdCancelPresentation } from "react-icons/md";
import "./Modal.css";
//API Endpoint
import axiosInstance from "../../../../../utils/axiosInstance";
//notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddClientModal = ({ showModal, setShowModal }) => {
  const [saveClient, setSaveClient] = useState({
    companyName: "",
    email: "",
    name: "",
    phoneNumber: "",
    industry: "",
    companyAddress: "",
  });

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSaveClient({
      ...saveClient,
      [e.target.name]: value,
    });
  };

  const handleSaveClient = () => {
    axiosInstance
      .post(`/saveClient`, saveClient)
      .then((data) => {
        console.log("save Clients", data);
        toast.success("Save Successfully");
        setShowModal(false);
        setSaveClient({
          companyName: "",
          email: "",
          name: "",
          phoneNumber: "",
          industry: "",
          companyAddress: "",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="addClient-modal">
      {/* notification alert start*/}
      <ToastContainer />
      {/* notification alert End*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={showModal}>
          <div>
            <div className="modal-view">
              <Typography id="transition-modal-title">
                <div
                  className="modal-header flex justify-between border-b-2
               border-gray-50 px-10 py-[18px] focus:outline-none"
                >
                  <h2 className="text-xl font-bold main-black">Add Client</h2>
                  <MdCancelPresentation
                    className="text-2xl cursor-pointer"
                    onClick={handleClose}
                  />
                </div>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <div className="modal-body px-10 pb-10">
                  <div className="flex justify-between mb-8">
                    <div className="input-box">
                      <p>Client Name</p>
                      <input
                        className="form-control outline-none"
                        placeholder="Type..."
                        name="companyName"
                        value={saveClient.companyName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="input-box">
                      <p>Email Address</p>
                      <input
                        className="form-control outline-none"
                        placeholder="Type..."
                        name="email"
                        value={saveClient.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mb-8">
                    <div className="input-box">
                      <p>Phone Number</p>
                      <input
                        className="form-control outline-none"
                        placeholder="Type..."
                        name="phoneNumber"
                        value={saveClient.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="input-box select-box">
                      <p>Industry</p>
                      <select
                        className="form-control outline-none"
                        name="industry"
                        value={saveClient.industry}
                        onChange={handleChange}
                      >
                        <option defaultValue="select">Select</option>
                        <option value="IT">IT</option>
                        <option value="Banking">Banking</option>
                      </select>
                      <div className="white-blank">
                        <MdKeyboardArrowDown className="down-arrow" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="input-box">
                      <p>Company Address</p>
                      <input
                        className="form-control outline-none w-full-100"
                        placeholder="Type..."
                        name="companyAddress"
                        value={saveClient.companyAddress}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </Typography>
              <Typography id="transition-modal-title">
                <div className="mb-5 mt-24 border-t-2 border-gray-50">
                  <div className="flex justify-end gap-5 px-10 pt-4">
                    <Button
                      variant="outlined"
                      style={{ borderColor: "#D0D5DD", color: "#475467" }}
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#008080", color: "#ffffff" }}
                      onClick={handleSaveClient}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Typography>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddClientModal;
