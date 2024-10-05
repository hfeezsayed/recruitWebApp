import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "@mui/material";
//icons
import { MdCancelPresentation } from "react-icons/md";
//Extrenal css
import "./Modal.css";
//API Endpoint
import axiosInstance from "../../../../../utils/axiosInstance";
//notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobCreateModal = ({ open, setOpen }) => {
  const [saveJob, setSaveJob] = useState({
    jobName: "",
    department: "",
    locaiton: "",
    clientName: "",
    jobType: "",
    created: "",
    totalPositions: "",
  });

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSaveJob({
      ...saveJob,
      [e.target.name]: value,
    });
  };

  const handleSaveJob = () => {
    axiosInstance
      .post(`/saveJob`, saveJob)
      .then((data) => {
        console.log("save job", data);
        toast.success("Save Job Successfully");
        setOpen(false);
        setSaveJob({
          jobName: "",
          department: "",
          locaiton: "",
          clientName: "",
          jobType: "",
          created: "",
          totalPositions: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="jobCreate-modal">
      {/* notification alert start*/}
      <ToastContainer />
      {/* notification alert End*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div>
            <div className="modal-view">
              <Typography id="transition-modal-title">
                <div
                  className="modal-header flex justify-between border-b-2
               border-gray-50 px-10 py-[18px] focus:outline-none"
                >
                  <h2 className="text-xl font-bold main-black">Job Create</h2>
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
                      <p>Job Name</p>
                      <input
                        className="form-control outline-none"
                        placeholder="Type..."
                        name="jobName"
                        value={saveJob.jobName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="input-box">
                      <p>Department</p>
                      <input
                        className="form-control outline-none"
                        placeholder="Type..."
                        name="department"
                        value={saveJob.department}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mb-8">
                    <div className="input-box select-box">
                      <p>Location</p>
                      <select
                        className="form-control outline-none"
                        name="locaiton"
                        value={saveJob.locaiton}
                        onChange={handleChange}
                      >
                        <option defaultValue="Select">Select</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumabi</option>
                        <option value="Agra">Agra</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Pune">Pune</option>
                      </select>
                      <div className="white-blank">
                        <MdKeyboardArrowDown className="down-arrow" />
                      </div>
                    </div>

                    <div className="input-box">
                      <p>Client Name</p>
                      <input
                        className="form-control outline-none"
                        placeholder="Type..."
                        name="clientName"
                        value={saveJob.clientName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mb-8">
                    <div className="input-box select-box">
                      <p>Job Type</p>
                      <select
                        className="form-control outline-none"
                        name="jobType"
                        value={saveJob.jobType}
                        onChange={handleChange}
                      >
                        <option defaultValue="Select">Select</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time Freelancer">
                          Part Time Freelancer
                        </option>
                        <option value="Full Time Freelancer">
                          Full Time Freelancer
                        </option>
                        <option value="Contract To Hire">
                          Contract To Hire
                        </option>
                      </select>
                      <div className="white-blank">
                        <MdKeyboardArrowDown className="down-arrow" />
                      </div>
                    </div>
                    <div className="input-box">
                      <p>Created</p>
                      <input
                        className="form-control outline-none"
                        placeholder="Type..."
                        type="date"
                        name="created"
                        value={saveJob.created}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="input-box select-box">
                      <p>Total number of positions</p>
                      <select
                        className="form-control w-full-100 outline-none"
                        name="totalPositions"
                        value={saveJob.totalPositions}
                        onChange={handleChange}
                      >
                        <option defaultValue="Select">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                      <div className="white-blank">
                        <MdKeyboardArrowDown className="down-arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </Typography>
              <Typography id="transition-modal-title">
                <div className="flex justify-end gap-5 px-10 mb-5">
                  <Button
                    variant="outlined"
                    style={{ borderColor: "#D0D5DD", color: "#475467" }}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#008080", color: "#ffffff" }}
                    onClick={handleSaveJob}
                  >
                    Save
                  </Button>
                </div>
              </Typography>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default JobCreateModal;
