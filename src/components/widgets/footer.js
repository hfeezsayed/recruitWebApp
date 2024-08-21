import React from "react";
import { LinkdeanSvg } from "../../assets/icon/linkdeansvg";
import { FacebookSvg } from "../../assets/icon/facebooksvg";
import { BallSvg } from "../../assets/icon/ballsvg";
import logo from "../../assets/images/logo.png";
import candidateLogo from "../../assets/images/xenThub.png";
import logoNew from "../../assets/images/xenrecruit.png";

export const Footer = () => {
  const user = JSON.parse(localStorage.getItem("token"));
  return (
    <footer className="z-50 relative bg-black bottom-0">
      <div className="mx-20 py-5">
        <div className="flex gap-2 items-center mb-5">
          {console.log(user)}
          {console.log(user.role === "ROLE_CANDIDATE")}
        { user.role === "ROLE_CANDIDATE" ? (
        <img
            src={candidateLogo}
            alt="logo"
            style={{ width: 180, marginTop: "20px" }}
          />
        ):
        (
          <img
            src={logoNew}
            alt="logo"
            style={{ width: 180, marginTop: "20px" }}
          />
        )}
        </div>
        <p style={{ fontSize: 16, color: "#B3B3B3" }}>
          Learn more about our mission, vision, and values.
        </p>
      </div>
      <div className="flex gap-5 mx-20">
        <a style={{ fontSize: 16, fontWeight: 600, color: "#B3B3B3" }} href="#">
          About Us
        </a>

        <a style={{ fontSize: 16, fontWeight: 600, color: "#B3B3B3" }} href="#">
          Careers
        </a>

        <a style={{ fontSize: 16, fontWeight: 600, color: "#B3B3B3" }} href="#">
          Contact Us
        </a>

        <a style={{ fontSize: 16, fontWeight: 600, color: "#B3B3B3" }} href="#">
          Help Center
        </a>

        <a style={{ fontSize: 16, fontWeight: 600, color: "#B3B3B3" }} href="#">
          Terms & Conditions
        </a>

        <a style={{ fontSize: 16, fontWeight: 600, color: "#B3B3B3" }} href="#">
          Privacy Policy
        </a>
      </div>

      <div className="flex mt-16 py-5 border-t justify-between mx-20 items-center">
        <div>
          <p style={{ color: "#B3B3B3", fontSize: 16 }}>
            © 2024 XenRecruit. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <LinkdeanSvg />
          <FacebookSvg />
          <BallSvg />
        </div>
      </div>
    </footer>
  );
};
