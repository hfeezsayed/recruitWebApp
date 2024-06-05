import React from "react";
import { LinkdeanSvg } from "../../assets/icon/linkdeansvg";
import { FacebookSvg } from "../../assets/icon/facebooksvg";
import { BallSvg } from "../../assets/icon/ballsvg";
import logo from "../../assets/images/logo.png";

export const Footer = () => {
  return (
    <footer className="z-50 relative bg-white bottom-0">
      <div className="mx-10 py-5">
        <div className="flex gap-2 items-center mb-5">
          <img src={logo} alt="logo" />
          <p style={{ fontSize: 25, color: "#101828" }}>Xenhire</p>
        </div>
        <p style={{ fontSize: 16, color: "#475467" }}>
          Learn more about our mission, vision, and values.
        </p>
      </div>
      <div className="flex gap-5 mx-10">
        <a style={{ fontSize: 16, fontWeight: 600, color: "#101828" }} href="#">
          About Us
        </a>

        <a style={{ fontSize: 16, fontWeight: 600, color: "#101828" }} href="#">
          Careers
        </a>

        <a style={{ fontSize: 16, fontWeight: 600, color: "#101828" }} href="#">
          Contact Us
        </a>

        <a style={{ fontSize: 16, fontWeight: 600, color: "#101828" }} href="#">
          Help Center
        </a>

        <a style={{ fontSize: 16, fontWeight: 600, color: "#101828" }} href="#">
          Terms & Conditions
        </a>

        <a style={{ fontSize: 16, fontWeight: 600, color: "#101828" }} href="#">
          Privacy Policy
        </a>
      </div>

      <div className="flex mt-5 py-5 border-t justify-between mx-10 items-center">
        <div>
          <p style={{ color: "#667085", fontSize: 16 }}>
            © 2024 Xenhire. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <LinkdeanSvg />
          <FacebookSvg />
          <BallSvg />
        </div>
      </div>
    </footer>
  );
};
