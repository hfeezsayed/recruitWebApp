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

const JobCreateModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <div className="jobCreate-modal">
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
                      />
                    </div>

                    <div className="input-box">
                      <p>Department</p>
                      <input
                        className="form-control outline-none"
                        placeholder="Type..."
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mb-8">
                    <div className="input-box select-box">
                      <p>Location</p>
                      <select
                        name="city"
                        id="location"
                        className="form-control outline-none"
                      >
                        <option value="1">Delhi</option>
                        <option value="2">Mumabi</option>
                        <option value="3">Agra</option>
                        <option value="4">Dehradun</option>
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
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mb-8">
                    <div className="input-box select-box">
                      <p>Job Type</p>
                      <select
                        name="city"
                        id="location"
                        className="form-control outline-none"
                      >
                        <option value="1">Select</option>
                        <option value="2">b</option>
                        <option value="3">c</option>
                        <option value="4">d</option>
                      </select>
                      <div className="white-blank">
                        <MdKeyboardArrowDown className="down-arrow" />
                      </div>
                    </div>
                    <div className="input-box select-box">
                      <p>Created</p>
                      <select
                        name="city"
                        id="location"
                        className="form-control outline-none"
                      >
                        <option value="1">Select</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                      <div className="white-blank">
                        <MdKeyboardArrowDown className="down-arrow" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="input-box select-box">
                      <p>Total number of positions</p>
                      <select
                        name="city"
                        id="location"
                        className="form-control w-full-100 outline-none"
                      >
                        <option value="1">Select</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
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
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#008080", color: "#ffffff" }}
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
