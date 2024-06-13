import React, { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";

export const AssesmentBatchDetails = () => {
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [degree, setDegree] = useState();

  const options = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const onNext = async () => {
    await axios
      .post("https:localhost:3000/", {
        name,
        startDate,
        endDate,
        description,
        degree,
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((e) => console.log(e));

    navigation("/assesments");
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
              Assessment Batch Details
            </p>
            <p style={{ color: "#475467", fontSize: 14 }}>
              Begin the process of creating a new job posting by selecting a
              predefined job type or creating a custom one.
            </p>
            <div className="grid grid-flow-row gap-3 mt-5">
              <div className="grid grid-flow-row gap-1">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Name
                </p>
                <TextField
                  fullWidth
                  size="small"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Type"
                />
              </div>
              <div className="grid grid-flow-col gap-5">
                <div className="grid grid-flow-row gap-1">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    Start Date
                  </p>
                  <TextField
                    fullWidth
                    type="date"
                    size="small"
                    name="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    placeholder="Select Date"
                  />
                </div>
                <div className="grid grid-flow-row gap-1">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                    End Date
                  </p>
                  <TextField
                    fullWidth
                    type="date"
                    size="small"
                    name="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    placeholder="Select Date"
                  />
                </div>
              </div>
              <div className="grid grid-flow-row gap-1">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Description
                </p>
                <TextField
                  fullWidth
                  size="small"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Type"
                />
              </div>
            </div>
            <div className="mt-10">
              <p style={{ color: "#475467", fontSize: 20, fontWeight: 500 }}>
                Assign Job
              </p>

              <div className="grid grid-flow-row gap-1 mt-5 w-1/2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Degree
                </p>
                <Autocomplete
                  disablePortal
                  size="small"
                  fullWidth
                  options={options.map((option) => option.label)}
                  value={degree || null}
                  onChange={(e, value) => setDegree(value)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" required />
                  )}
                />
              </div>
            </div>
            <div className="flex justify-end py-10 gap-5">
              <Button
                onClick={onNext}
                variant="contained"
                style={{ backgroundColor: "#008080", color: "#ffffff" }}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
