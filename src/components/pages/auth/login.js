import React, { useEffect, useState } from "react";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import photo from "../../../assets/images/Image.png";
import logo from "../../../assets/images/logo.png";
import axiosInstance from "../../utils/axiosInstance";
//notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem("token"));
    console.log(isAuthenticated);
    if (isAuthenticated) {
      if (isAuthenticated.role === "ROLE_ADMIN") {
        navigate("/admin");
      }
      if (isAuthenticated.role === "ROLE_CANDIDATE") {
        navigate("/candidate/dashboard");
      }
      if (isAuthenticated.role === "ROLE_CLIENT") {
        navigate("/client/dashboard");
      }
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = email;
    if (username && password) {
      await axiosInstance
        .post("/login", {
          username,
          password,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", JSON.stringify(response?.data));

          // role = response.data.role;
          const role = JSON.parse(localStorage.getItem("token")).role;
          console.log("role = ", role);
          if (role === "ROLE_ADMIN") {
            navigate("/admin");
          }
          if (role === "ROLE_CANDIDATE") {
            navigate("/candidate/dashboard");
          }
          if (role === "ROLE_CLIENT") {
            navigate("/client/dashboard");
          }
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("Credentials not match");
        });
      // navigate("/candidate");
      // navigate("/assesmentBatchDetails");
    }
    if (!username || username.length === 0) {
      toast.error("Email cannot be empty");
    }
    if (!password || password.length === 0) {
      toast.error("Password cannot be empty");
    }
  };

  return (
    <div className="flex">
      {/* notification alert */}
      <ToastContainer />
      <div className="h-screen flex items-center min-w-fit">
        <img src={photo} alt="background" style={{ height: "96%" }} />
      </div>
      <div className="w-full items-center justify-center grid grid-flow-row text-center">
        <div className="min-w-96">
          <div className="flex justify-center py-5">
            <img src={logo} alt="logo" />
          </div>
          <p
            style={{
              color: "#101828",
              fontWeight: 600,
              fontSize: 30,
              paddingBottom: 5,
            }}
          >
            Welcome back
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            Welcome back! Please enter your details.
          </p>
          <div className="text-start mt-6">
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
          <div className="text-start mt-3">
            <p style={{ color: "#344054", fontSize: 16, paddingBottom: 3 }}>
              Password
            </p>
            <TextField
              size="small"
              fullWidth
              type="password"
              variant="outlined"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid grid-flow-col justify-between items-center py-3">
            <FormControlLabel
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              control={<Checkbox size="small" />}
              label={
                <p style={{ color: "#344054", fontWeight: 500, fontSize: 14 }}>
                  Remember for 30 days
                </p>
              }
            />
            <a
              style={{ color: "#008080", fontWeight: 600, fontSize: 16 }}
              href="forgotpassword"
            >
              Forgot password
            </a>
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
            Sign in
          </Button>
          <p className="my-5">
            Don’t have an account?{" "}
            <a
              style={{
                color: "#008080",
                fontWeight: 600,
                fontSize: 16,
              }}
              href="signup"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
