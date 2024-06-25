import React, { useState } from "react";
import { TbMail } from "react-icons/tb";
import OtpInput from "react-otp-input";
import { Button } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backImage from "../../../assets/images/Background pattern decorative.png";
import { useLocation } from "react-router-dom";

export const ForgotOtp = () => {
  //let email = "olivia@untitledui.com";
  const navigation = useNavigate();
  const [otp, setOtp] = useState("");
  const { email } = useLocation().state || {};

  const onSubmit = () => {
    console.log(otp);
    if (otp.length === 4) {
      navigation("/newpassword", { state : {email : email}});
      axios
        .post("http://localhost:8080/xen/verifyOTP", { otp, email })
        .then((data) => console.log(data.data))
        .catch((e) => console.log(e));
    }
  };

  const reSendOtp = () => {
    console.log("resenf otp");
    axios
      .post("localhost:8080/xen/resendOTP", { email })
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
          <div className="p-3 border rounded-xl bg-white border-yellow-400 ">
            <TbMail style={{ color: "#FFC107", fontSize: 30 }} />
          </div>
        </div>
        <div className="text-center mt-5">
          <p style={{ color: "#101828", fontSize: 30, fontWeight: 600 }}>
            Check your email
          </p>
          <p style={{ color: "#475467", fontSize: 16, marginTop: 8 }}>
            Verification code sent to
            <br /> <span style={{ fontWeight: 600 }}>{email}</span>. Enter the
            4-digit code <br /> to verify your account.
          </p>
          <p style={{ color: "#475467", fontSize: 16, marginTop: 8 }}>
            (Be sure to check your spam folder)
          </p>
        </div>
        <div className="justify-center flex bg-white text-center py-5">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            shouldAutoFocus={true}
            skipDefaultStyles={true}
            renderInput={(props) => (
              <input
                {...props}
                focusStyle={{
                  outline: "none",
                  border: "2px solid #00ff00",
                  borderRadius: "8px",
                }}
              />
            )}
            inputStyle={{
              borderWidth: 2,
              borderColor: "#66B2B2",
              borderRadius: 12,
              margin: 5,
              width: 60,
              height: 60,
              textAlign: "center",
              fontSize: 26,
              fontWeight: 500,
              color: "#66B2B2",
            }}
          />
        </div>
        <Button
          size="large"
          variant="contained"
          fullWidth
          disabled={otp.length < 4}
          style={{
            backgroundColor: otp.length === 4 ? "#008080" : "#787879",
            opacity: otp.length === 4 ? 1 : 0.54,
            color: "#ffffff",
            textTransform: "none",
          }}
          onClick={onSubmit}>
          Verify OTP
        </Button>
        <p
          className="my-5 text-center"
          style={{ color: "#475467", fontSize: 14 }}>
          Didn’t receive the OTP?{" "}
          <span
            style={{
              color: "#008080",
              fontWeight: 600,
              fontSize: 16,
            }}
            onClick={reSendOtp}>
            Click to resend
          </span>
        </p>
        <div
          className="flex justify-center items-center gap-4 hover:cursor-pointer"
          onClick={() => {
            navigation("/login");
          }}>
          <IoArrowBack style={{ color: "#475467", fontSize: 16 }} />
          <p
            style={{
              color: "#475467",
              fontSize: 14,
              fontWeight: 600,
            }}>
            Back to log in
          </p>
        </div>
      </div>
    </div>
  );
};
