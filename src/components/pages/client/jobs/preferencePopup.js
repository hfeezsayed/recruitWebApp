import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const PreferencePopup = ({ data, setClose, open }) => {
  return (
    <Dialog
      open={open}
      onClose={setClose}
      PaperProps={{ sx: { minWidth: "55%" } }}>
      <DialogTitle>{data?.templateName}</DialogTitle>
      <IconButton
        onClick={setClose}
        style={{ position: "absolute", top: 10, right: 10 }}>
        <IoIosCloseCircleOutline />
      </IconButton>
      <Divider />
      <DialogContent>
        <div className="grid grid-flow-row py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Job Preference Template Tags
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.tag}</p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Job Preference Template Description
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.templateDescription}
          </p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Is it essential for the candidate to have experience in a specific
            industry?
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.experianceIndustry ? "Yes" : "No"}
          </p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            If so, could you specify which industry and why that experience is
            critical?
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.whichIndustry ? "Yes" : "No"}
          </p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Could you provide a job description if available?
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.jobDescription}
          </p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            What is the scope of the role? (Please specify the responsibilities
            of the role)
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.scopeOfRole}</p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Would a candidate's in-depth knowledge of the industry be considered
            valuable even if they lack direct experience in the field?
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.depthKnowledge ? "Yes" : "No"}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
