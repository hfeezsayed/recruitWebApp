import React, { useEffect, useState } from "react";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import photo from "../../../assets/images/Image.png";
import logo from "../../../assets/images/logo.png";

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
        navigate("/digitalTalentProfile/personalinfromation");
      }
    }
  }, []);

  const onSubmit = async (e) => {
    const dummy = {
      userId: 3,
      username: "Ram",
      email: "ram@xenspire.co",
      accessToken:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJSYW0iLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sImlhdCI6MTcxNzA0ODkwNywiZXhwIjoxNzE3MDU0OTA3fQ.3JDSFUgP7R1y9w8bTdX4Md_jTnXfab54MU4WFJdGUus",
      role: "ROLE_CANDIDATE",
    };
    const username = email;
    e.preventDefault();
    localStorage.setItem("token", JSON.stringify(dummy));
    try {
      const response = await axios.post(
        "https://xenflexer.northcentralus.cloudapp.azure.com/xen/login",
        {
          username,
          password,
        }
      );
      console.log(response);
      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem("token", JSON.stringify(response.data));

        // role = response.data.role;
      } else {
        console.log("login Error");
      }
      const role = JSON.parse(localStorage.getItem("token")).role;
      console.log("role = ", role);
      if (role === "ROLE_ADMIN") {
        navigate("/admin");
      }
      if (role === "ROLE_CANDIDATE") {
        navigate("/digitalTalentProfile/personalinfromation");
      }
    } catch (error) {
      console.error(error.message);
    }
    navigate("/digitalTalentProfile/personalinfromation");
  };

  return (
    <div className="flex">
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
            }}>
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
              href="forgotpassword">
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
            onClick={onSubmit}>
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
              href="signup">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
