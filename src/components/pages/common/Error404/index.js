import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, InputAdornment, TextField } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { Footer } from "../../../widgets/footer";

export const Error404 = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  return (
    <div>
      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="absolute">
          <p style={{ fontWeight: 700, fontSize: 500, color: "#66B2B215" }}>
            404
          </p>
        </div>
        <div className="relative">
          <p
            style={{
              color: "#101828",
              fontWeight: 600,
              fontSize: 60,
              textAlign: "center",
            }}>
            We lost this page
          </p>
          <p style={{ color: "#475467", fontSize: 20, textAlign: "center" }}>
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-5 w-full p-9">
            <TextField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search our site"
              fullWidth
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoIosSearch />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="outlined"
              style={{
                color: "#475467",
                borderColor: "#D0D5DD",
                fontWeight: 600,
                textTransform: "none",
              }}>
              Search
            </Button>
          </div>
          <div className="flex justify-center gap-5 p-5">
            <Button
              variant="outlined"
              style={{
                color: "#475467",
                borderColor: "#D0D5DD",
                fontWeight: 600,
                textTransform: "none",
              }}
              startIcon={<FaArrowLeft style={{ fontSize: 14 }} />}
              onClick={() => {
                navigate(-1);
              }}>
              Go back
            </Button>
            <Button
              variant="contained"
              style={{
                color: "#ffffff",
                backgroundColor: "#008080",
                fontWeight: 600,
                textTransform: "none",
              }}
              onClick={() => {
                navigate("/digitalTalentProfile/personalinfromation");
              }}>
              Go Home
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
