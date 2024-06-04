import { Button, TextField } from "@mui/material";
import React from "react";

export const Footer = () => {
  const [email, setEmail] = React.useState();

  return (
    <footer>
      <div className="flex justify-between items-center px-10 pt-8">
        <div className="flex gap-5">
          <a
            style={{ fontSize: 16, fontWeight: 600, color: "#344054" }}
            href="#">
            Xenspire
          </a>
          <a
            style={{ fontSize: 16, fontWeight: 600, color: "#344054" }}
            href="#">
            About Us
          </a>
          <a
            style={{ fontSize: 16, fontWeight: 600, color: "#344054" }}
            href="#">
            Company
          </a>
          <a
            style={{ fontSize: 16, fontWeight: 600, color: "#344054" }}
            href="#">
            Blog
          </a>
          <a
            style={{ fontSize: 16, fontWeight: 600, color: "#344054" }}
            href="#">
            Help
          </a>
          <a
            style={{ fontSize: 16, fontWeight: 600, color: "#344054" }}
            href="#">
            Careers
          </a>
        </div>
        <div className="grid grid-flow-row">
          <p style={{ fontSize: 16, fontWeight: 600, color: "#344054" }}>
            Send Message
          </p>
          <div className="flex gap-3">
            <TextField
              value={email}
              size="small"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              style={{
                color: "#66B2B2",
                borderColor: "#66B2B2",
                textTransform: "none",
              }}
              variant="outlined">
              Send
            </Button>
          </div>
        </div>
      </div>
      <div className="flex mt-5 py-5 border-t justify-between mx-10">
        <div>
          <p style={{ color: "#667085", fontSize: 16 }}>
            © 2024 Xenhire. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <a style={{ fontSize: 16, color: "#667085" }} href="#">
            Terms
          </a>
          <a style={{ fontSize: 16, color: "#667085" }} href="#">
            Privacy
          </a>
          <a style={{ fontSize: 16, color: "#667085" }} href="#">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};
