import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { JobTemplateListViewData } from "../../../dummy/Data";

export const JobTemplateViewPopup = ({ data, setClose, open }) => {
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
            Job Template Tags
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.tag}</p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Job Template Description
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.templateDescription}
          </p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Job Title
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.title}</p>
        </div>

        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Job Location
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.location}</p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Salary Compensation
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.salary}</p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Job Description
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.jobDescription}
          </p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Your Responsibility:
          </p>

          {data?.responsibility?.map((row) => {
            return <li style={{ color: "#475467", fontSize: 16 }}>{row}</li>;
          })}
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Front End Developer Requirements:
          </p>

          {data?.requirments?.map((row) => {
            return <li style={{ color: "#475467", fontSize: 16 }}>{row}</li>;
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};
