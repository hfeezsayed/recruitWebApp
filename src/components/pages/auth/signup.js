import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import photo from "../../../assets/images/Image.png";
import logo from "../../../assets/images/logo.png";
import axiosInstance from "../../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css";

export const SignUp = () => {
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, conPassword);
    const username = name;
    axiosInstance
      .post("/signup", { username, email, password })
      .then((data) => {
        console.log(data.data);
        navigation("/signupotp/" + email);
      })
      .catch((e) => {
        console.log(e);
      });
    if (!username || username.length === 0) {
      toast.error("Name is required");
    }
    if (!password || password.length === 0) {
      toast.error("Password is required");
    }
    if (!conPassword || conPassword.length === 0) {
      toast.error("Confirm Password is required");
    }
    if (!email || email.length === 0) {
      toast.error("Email is required");
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Use the correct email");
    }
    if (password && password.length <= 8) {
      toast.error("Password must be at least 8 characters.");
    }
    if (password !== conPassword) {
      toast.error("Password does not match");
    }
  };

  return (
    <div className="main-signup">
      <div className="signup">
        {/* notification alert */}
        <ToastContainer />
        <div className="h-screen flex items-center min-w-fit">
          <img
            src={photo}
            alt="background"
            style={{ height: "96%" }}
            className="img-fluid"
          />
        </div>
        <div className="w-full ">
          <div className="mt-5 px-10 flex items-center gap-2">
            <img src={logo} width={32} alt="logo" />
            {/* <p style={{ fontSize: 20, fontWeight: 600, color: "#101828" }}>
            Xenhire
          </p> */}
          </div>
          <div className="items-center justify-center flex mt-10">
            <div className="min-w-96 grid grid-flow-row">
              <p
                style={{
                  color: "#101828",
                  fontWeight: 600,
                  fontSize: 30,
                  paddingBottom: 5,
                }}
              >
                Sign up
              </p>
              <p style={{ color: "#475467", fontSize: 16 }}>
                Start your 30-day free trial.
              </p>
              <div className="mt-8">
                <p style={{ color: "#344054", fontSize: 16, paddingBottom: 3 }}>
                  Name
                </p>
                <TextField
                  size="small"
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <p style={{ color: "#344054", fontSize: 16, paddingBottom: 3 }}>
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
              <div className="mt-3">
                <p style={{ color: "#344054", fontSize: 16, paddingBottom: 3 }}>
                  Password
                </p>
                <TextField
                  size="small"
                  fullWidth
                  type="password"
                  variant="outlined"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p style={{ color: "#475467", fontSize: 14, paddingBottom: 3 }}>
                  Must be at least 8 characters.
                </p>
              </div>
              <div className="mt-3 mb-6">
                <p style={{ color: "#344054", fontSize: 16, paddingBottom: 3 }}>
                  Confirm Password
                </p>
                <TextField
                  size="small"
                  fullWidth
                  type="password"
                  variant="outlined"
                  placeholder="Confirm password"
                  value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)}
                />
              </div>
              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#008080",
                  color: "#ffffff",
                  textTransform: "none",
                }}
                onClick={onSubmit}
              >
                Get started
              </Button>
              <p className="my-5 text-center">
                Already have an account?{" "}
                <a
                  style={{
                    color: "#008080",
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                  href="login"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
