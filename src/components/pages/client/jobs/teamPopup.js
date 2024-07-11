import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const TeamPopup = ({ data, setClose, open }) => {
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
            Team Template Tags
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.templateTag}</p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Team Template Description
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.templateDescription}
          </p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            What is the size of the team
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.teamSize}</p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            What is the location of the team where it works from?
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.teamLocation}</p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Does the role have to work cross functionally?
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.workCrossFunality ? "Yes" : "No"}
          </p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            What problem/project is the team working on which the candidate will
            be joining?
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.teamWorkingProject}
          </p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            What problem/project is the team working on which the candidate will
            be joining?
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.teamWorkingProjectProblem}
          </p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Could you describe the contributions of a particularly successful
            team member in a similar role and how they've impacted the team's
            success?
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.contributionsTeam}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
