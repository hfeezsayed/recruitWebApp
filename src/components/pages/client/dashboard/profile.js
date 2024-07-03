import React, { useState } from "react";
import { Badge, Button, IconButton, TextField, styled } from "@mui/material";
import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";
import axiosInstance from "../../../utils/axiosInstance";

export const ProfileDashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const onSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .post(`/profileUpdate`, {
        name,
        email,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              <p style={{ color: "#101828", fontSize: 20, fontWeight: 600 }}>
                Profile Update
              </p>
              <p style={{ color: "#475467", fontSize: 16 }}>
                Update your profile
              </p>
            </div>
            <div className="flex gap-6 items-center py-5">
              <div className="w-20 h-20">
                <img
                  src="https://picsum.photos/id/25/5000/3333"
                  alt="user"
                  style={{
                    borderRadius: "100%",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="relative -mt-7 justify-end flex h-7">
                  <IconButton
                    style={{ padding: 6, backgroundColor: "#ffffff" }}>
                    <CiEdit style={{ color: "#4B5563", fontSize: 18 }} />
                  </IconButton>
                </div>
              </div>
              <div>
                <p style={{ color: "#101828", fontSize: 16 }}>name</p>
                <p style={{ color: "#475467", fontSize: 14 }}>test@gmail.com</p>
              </div>
              <div>
                <IconButton>
                  <IoMdClose />
                </IconButton>
              </div>
            </div>
            <div>
              <div className="py-3">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Name
                </p>
                <TextField
                  size="small"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="type"
                  style={{ width: 500 }}
                />
              </div>
              <div className="py-3">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Email id
                </p>
                <TextField
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="type"
                  style={{ width: 500 }}
                />
              </div>
              <div className="py-3 mt-32">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#008080",
                    textTransform: "none",
                    color: "#ffffff",
                    width: 500,
                  }}
                  onClick={onSubmit}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
