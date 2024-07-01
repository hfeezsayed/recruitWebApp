import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { Button, TextField } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import axios from "axios";
import backImage from "../../../assets/images/Background pattern decorative.png";

export const NewPassword = () => {
  const navigation = useNavigate();
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [changed, setChanged] = useState(false);
  let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const { email } = useLocation().state || {};
  
  const onSubmit = () => {
    console.log(password, confPassword);
    if (password.length > 7) {
      setChanged(true);
      axios
        .post("https://xenflexer.northcentralus.cloudapp.azure.com/xen/updatePassword", { password, email})
        .then((data) => console.log(data.data))
        .catch((e) => console.log(e));
    }
  };

  return (
    <div className="justify-center w-full flex">
      <div className="-top-72 fixed">
        <img src={backImage} alt="backGround" />
      </div>
      {changed ? (
        <div className="relative pt-16 grid grid-flow-row justify-center items-center">
          <div className="flex justify-center">
            <div
              className="p-3 border rounded-xl bg-white "
              style={{ borderColor: "#42A336" }}>
              <IoCheckmarkCircleOutline
                style={{ color: "#42A336", fontSize: 30 }}
              />
            </div>
          </div>
          <div className="text-center my-5">
            <p style={{ color: "#101828", fontSize: 30, fontWeight: 600 }}>
              Password changed <br /> Successfully!
            </p>
            <p style={{ color: "#475467", fontSize: 16, marginTop: 8 }}>
              Your password has been successfully changed
            </p>
          </div>

          <Button
            variant="contained"
            style={{
              backgroundColor: "#008080",
              color: "#ffffff",
              textTransform: "none",
              width: 360,
            }}
            onClick={() => {
              navigation("/login");
            }}>
            Go to Login
          </Button>
        </div>
      ) : (
        <div className="relative pt-16 grid grid-flow-row justify-center items-center">
          <div className="flex justify-center">
            <div
              className="p-3 border rounded-xl bg-white"
              style={{ borderColor: "#0186E5" }}>
              <CiLock style={{ color: "#0186E5", fontSize: 30 }} />
            </div>
          </div>
          <div className="text-center mt-5 mx-8">
            <p style={{ color: "#101828", fontSize: 30, fontWeight: 600 }}>
              Set new password
            </p>
            <p style={{ color: "#475467", fontSize: 16, marginTop: 8 }}>
              Your new password must be different to <br /> previously used
              passwords.
            </p>
          </div>
          <div className="mt-6">
            <p
              style={{
                color: "#344054",
                fontSize: 16,
                paddingBottom: 3,
                fontWeight: 500,
              }}>
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
          <div className="my-3">
            <p
              style={{
                color: "#344054",
                fontSize: 16,
                paddingBottom: 3,
                fontWeight: 500,
              }}>
              Confirm Password
            </p>
            <TextField
              size="small"
              fullWidth
              type="password"
              variant="outlined"
              placeholder="••••••••"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 flex gap-3 items-center">
            <FaCheckCircle
              style={{ color: password.length > 7 ? "#42A336" : "gray" }}
            />
            <p style={{ fontSize: 14, color: "#475467" }}>
              Must be at least 8 characters
            </p>
          </div>
          <div className="mb-3 flex gap-3 items-center">
            <FaCheckCircle
              style={{ color: format.test(password) ? "#42A336" : "gray" }}
            />
            <p style={{ fontSize: 14, color: "#475467" }}>
              Must contain one special character
            </p>
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
            Reset password
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
      )}
    </div>
  );
};
