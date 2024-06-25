import React from "react";
import {
  Autocomplete,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const TeamPopup = ({ data, setClose, open }) => {
  const options = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const yes_no = ["Yes", "No"];

  return (
    <Dialog
      open={open}
      onClose={setClose}
      PaperProps={{ sx: { minWidth: "55%" } }}>
      <DialogTitle>Team Details</DialogTitle>
      <IconButton
        onClick={setClose}
        style={{ position: "absolute", top: 10, right: 10 }}>
        <IoIosCloseCircleOutline />
      </IconButton>
      <Divider />
      <DialogContent>
        <div className="grid-cols-2 grid gap-8 ">
          <div className="grid grid-flow-row gap-2">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What is the size of the team
            </p>
            <Autocomplete
              disabled
              size="small"
              disablePortal
              options={options.map((option) => option.label)}
              value={data?.teamSize || null}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" />
              )}
            />
          </div>
          <div className="grid grid-flow-row gap-2">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              What is the location of the team where it works from?
            </p>
            <Autocomplete
              disabled
              size="small"
              disablePortal
              options={options.map((option) => option.label)}
              value={data?.teamLocation || null}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" />
              )}
            />
          </div>
          <div className="grid grid-flow-row gap-2">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Does the role have to work cross functionally?
            </p>
            <Autocomplete
              disabled
              size="small"
              disablePortal
              options={yes_no}
              value={data?.crossFunctionality || null}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" />
              )}
            />
          </div>
          <div className="grid grid-flow-row gap-2">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              If yes, please specify the domain or teams the role will interact
              with?
            </p>
            <Autocomplete
              size="small"
              disablePortal
              disabled
              options={options.map((option) => option.label)}
              value={data?.specifyDomain || null}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" />
              )}
            />
          </div>
        </div>

        <div className="grid grid-flow-row gap-2 mt-8">
          <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
            What problem/project is the team working on which the candidate will
            be joining?
          </p>
          <textarea
            value={data?.teamWorkingDes}
            placeholder="type"
            style={{
              borderWidth: 1,
              borderColor: "#D0D5DD",
              borderRadius: 8,
              padding: 5,
            }}
          />
        </div>
        <div className="grid grid-flow-row gap-2 py-5">
          <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
            Could you describe the contributions of a particularly successful
            team member in a similar role and how they've impacted the team's
            success?
          </p>
          <textarea
            value={data?.describeContributions}
            placeholder="type"
            style={{
              borderWidth: 1,
              borderColor: "#D0D5DD",
              borderRadius: 8,
              padding: 5,
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
