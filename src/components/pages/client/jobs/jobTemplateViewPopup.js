import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";

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
            Job Code
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.code}</p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Job Family
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.family}</p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Job Department
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.department}</p>
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

        <div className="grid grid-flow-row  mt-5">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Job Description
          </p>

          <div className="grid grid-flow-row  py-1">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              About us - info about the company
            </p>
            <p style={{ color: "#333333", fontSize: 16 }}>{data?.aboutUs}</p>
          </div>
          <div className="grid grid-flow-row  py-1">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              Position Summary
            </p>
            <p style={{ color: "#333333", fontSize: 16 }}>{data?.summary}</p>
          </div>
          <div>
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              Duties and Responsibility:
            </p>
            {data?.responsibility?.map((row) => {
              return <li style={{ color: "#333333", fontSize: 16 }}>{row}</li>;
            })}
          </div>
          <div className="grid grid-flow-row  py-1">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              Benefits and Compensation:
            </p>

            {data?.Compensation?.map((row) => {
              return <li style={{ color: "#333333", fontSize: 16 }}>{row}</li>;
            })}
          </div>
          <div className="grid grid-flow-row  py-1">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              Equal Employee Opportunity
            </p>
            <p style={{ color: "#333333", fontSize: 16 }}>
              {data?.Opportunity}
            </p>
          </div>
        </div>
        <div className="grid grid-flow-row  mt-5">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Role Requirements and Preferences
          </p>
          <div className="grid grid-flow-row  py-1">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              Is it essential for the candidate to have experience in a specific
              industry?
            </p>
            <p style={{ color: "#333333", fontSize: 16 }}>
              {data?.experianceIndustry ? "Yes" : "No"}
            </p>
          </div>
          <div className="grid grid-flow-row  py-1">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              If so, could you specify which industry and why that experience is
              critical?
            </p>
            <p style={{ color: "#333333", fontSize: 16 }}>
              {data?.experienceCritical}
            </p>
          </div>
          <div className="grid grid-flow-row  py-1 ">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              Would industry knowledge be valued even without direct experience?
            </p>
            <p style={{ color: "#333333", fontSize: 16 }}>
              {data?.directExperience ? "Yes" : "No"}
            </p>
          </div>
          <div className="grid grid-flow-row  py-1">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              What is the work setting for the role?
            </p>
            <p style={{ color: "#333333", fontSize: 16 }}>
              {data?.settingRole}
            </p>
          </div>
          <div className="grid grid-flow-row  py-1">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              Type of role
            </p>
            <p style={{ color: "#333333", fontSize: 16 }}>{data?.roleType}</p>
          </div>
          <div className="grid grid-flow-row  py-1">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              What are the timings for the role?
            </p>
            <p style={{ color: "#333333", fontSize: 16 }}>{data?.roleTiming}</p>
          </div>
          <div className="grid grid-flow-row  py-1">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              How frequent does the role require to travel?
            </p>
            <p style={{ color: "#333333", fontSize: 16 }}>
              {data?.requireTtravel}
            </p>
          </div>
          <div className="grid grid-flow-row  py-1">
            <p style={{ color: "#333333", fontSize: 16, fontWeight: 600 }}>
              Occassional What kind of visa are you looking for ?
            </p>
            <p style={{ color: "#333333", fontSize: 16 }}>{data?.visa}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
