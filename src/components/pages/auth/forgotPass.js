import React, { useState } from "react";
import { HiOutlineKey } from "react-icons/hi2";
import { Button, TextField } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backImage from "../../../assets/images/Background pattern decorative.png";

export const ForgotPass = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    console.log(email);
    navigation("/forgotpasswordotp", { state: { email: email } });
    axios
      .get("https://xenflexer.northcentralus.cloudapp.azure.com/xen/forgotPassword?emailId="+email)
      .then((data) => console.log(data.data))
      .catch((e) => console.log(e));
  };

  return (
    <div className="justify-center w-full flex">
      <div className="-top-72 fixed">
        <img src={backImage} alt="backGround" />
      </div>
      <div className="relative pt-16 grid grid-flow-row justify-center items-center">
        <div className="flex justify-center">
          <div
            className="p-3 border rounded-xl bg-white"
            style={{ borderColor: "#0186E5" }}>
            <HiOutlineKey style={{ color: "#0186E5", fontSize: 30 }} />
          </div>
        </div>
        <div className="text-center mt-5">
          <p style={{ color: "#101828", fontSize: 30, fontWeight: 600 }}>
            Forgot password?
          </p>
          <p style={{ color: "#475467", fontSize: 16, marginTop: 8 }}>
            No problem at all! Just share your email address <br /> with us, and
            we will send you a code to reset <br /> your password.
          </p>
        </div>
        <div className="text-start mt-6">
          <p
            style={{
              color: "#344054",
              fontSize: 16,
              paddingBottom: 3,
              fontWeight: 500,
            }}>
            Email
          </p>
          <TextField
            size="small"
            fullWidth
            type="email"
            variant="outlined"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button
          variant="contained"
          fullWidth
          style={{
            backgroundColor: "#008080",
            color: "#ffffff",
            textTransform: "none",
            marginTop: 20,
          }}
          onClick={onSubmit}>
          Send
        </Button>

        <div
          className="flex justify-center items-center gap-4 hover:cursor-pointer py-5"
          onClick={() => {
            navigation("/login");
          }}>
          <IoArrowBack style={{ color: "#475467", fontSize: 16 }} />
          <p
            style={{
              color: "#475467",
              fontSize: 16,
              fontWeight: 600,
            }}>
            Back to log in
          </p>
        </div>
      </div>
    </div>
  );
};
