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

export const JobDetailPopup = ({ data, setClose, open }) => {
  const options = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  return (
    <Dialog
      open={open}
      onClose={setClose}
      PaperProps={{ sx: { minWidth: "55%" } }}>
      <DialogTitle>Job Details</DialogTitle>
      <IconButton
        onClick={setClose}
        style={{ position: "absolute", top: 10, right: 10 }}>
        <IoIosCloseCircleOutline />
      </IconButton>
      <Divider />
      <DialogContent>
        <div className="grid-cols-3 grid gap-8">
          <div className="grid grid-flow-row gap-2">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Title
            </p>
            <TextField
              size="small"
              disablePortal
              value={data?.title || null}
              placeholder="type"
            />
          </div>
          <div className="grid grid-flow-row gap-2">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Location
            </p>
            <Autocomplete
              disabled
              size="small"
              disablePortal
              options={options.map((option) => option.label)}
              value={data?.location || null}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" />
              )}
            />
          </div>
          <div className="grid grid-flow-row gap-2">
            <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
              Salary Compensation
            </p>
            <TextField
              size="small"
              type="number"
              value={data?.salary}
              placeholder="type"
            />
          </div>
        </div>
        <div className="grid grid-flow-row gap-2 py-8">
          <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
            Job Description
          </p>
          <textarea
            value={data?.description}
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
