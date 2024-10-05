import React, { useState, useEffect } from "react";
//Side navbar
import { ClientSideNav } from "../../../../widgets/clientSideNav";
//Top Navbar
import { TopNav } from "../../../../widgets/topNav";
//other components
import LogsTable from "./LogsTable/LogsTable";
import JobCreateModal from "./Modal/JobCreateModal";
//card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
//icons
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
//images
import rightArrow from "../../../../../assets/icon/right_arrow.png";
import note from "../../../../../assets/icon/note.png";
import groupUser from "../../../../../assets/icon/group-user.png";
import bag from "../../../../../assets/icon/bag.png";
//external css
import "../AdminPanel/AdminPanel.css";
import AddClientModal from "./Modal/AddClientModal";
//API endPoint
import Spinner from "../../../../utils/spinner";
import axiosInstance from "../../../../utils/axiosInstance";

export const AdminDashBoard = () => {
  const [boxVisibility, setBoxVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]); //for cards api

  //Modal code start
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setBoxVisibility(false);
  };
  const handleUserOpen = () => {
    setShowModal(true);
    setBoxVisibility(false);
  };
  //Modal Code end

  const showNewBox = () => {
    setBoxVisibility(!boxVisibility);
  };

  //GET Request for cards
  useEffect(() => {
    //setLoading(true);
    axiosInstance
      .get(`/getAdminDashboardProperties`)
      .then((response) => {
        //console.log("getAdminDashboardProperties", response);
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex">
      <ClientSideNav />
      <div className="w-full min-h-screen side-bar pr-3">
        <TopNav />
        {loading === true ? (
          <Spinner />
        ) : (
          <div className="p-8">
            <div className="dashboard-overview">
              <div>
                <h2 className="text-xl pt-4 font-bold main-black">
                  Dashboard Overview
                </h2>
                <p className="text-base pt-3 smallTextGray">
                  This area provides quick metrics and insights.
                </p>
              </div>
              <div className="cards">
                <div className="flex justify-between gap-3 mt-7">
                  <Card sx={{ minWidth: 330 }} variant="outlined">
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: "#FEF5F0", color: "#F78F54" }}>
                          <img src={groupUser} alt="total job posted" />
                        </Avatar>
                      }
                      title="Total Jobs Posted"
                    />
                    <div className="body-content">
                      <h2 className="text-3xl font-bold">
                        {userData?.data?.jobs || 0}
                      </h2>
                    </div>
                    <CardActions className="flex justify-between">
                      <p className="smallTextGray text-sm">
                        Job Posted in database
                      </p>
                      <Button size="large">
                        <img src={rightArrow} className="arrow-img" />
                      </Button>
                    </CardActions>
                  </Card>

                  <Card sx={{ minWidth: 330 }} variant="outlined">
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: "#FEF5F0", color: "#F78F54" }}>
                          <img src={note} alt="total active clients" />
                        </Avatar>
                      }
                      title="Total Active Clients"
                    />
                    <div className="body-content">
                      <h2 className="text-3xl font-bold">
                        {userData?.data?.clients || 0}
                      </h2>
                    </div>
                    <CardActions className="flex justify-between">
                      <p className="smallTextGray text-sm">
                        Total clients that are active
                      </p>
                      <Button size="large">
                        <img src={rightArrow} className="arrow-img" />
                      </Button>
                    </CardActions>
                  </Card>

                  <Card sx={{ minWidth: 330 }} variant="outlined">
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: "#FEF5F0", color: "#F78F54" }}>
                          <img src={bag} alt="total applicants" />
                        </Avatar>
                      }
                      title="Total Applicants"
                    />
                    <div className="body-content">
                      <h2 className="text-3xl font-bold">
                        {userData?.data?.applicants || 0}
                      </h2>
                    </div>
                    <CardActions className="flex justify-between">
                      <p className="smallTextGray text-sm">
                        Total applicants that are active
                      </p>
                      <Button size="large">
                        <img src={rightArrow} className="arrow-img" />
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
              <div className="my-11">
                <LogsTable />
              </div>
              <div className="floating-btn">
                <div class="maintop">
                  {boxVisibility ? (
                    <MdCancel class="add-btn" onClick={() => showNewBox()} />
                  ) : (
                    <FaCirclePlus
                      class="add-btn"
                      onClick={() => showNewBox()}
                    />
                  )}
                </div>
                {boxVisibility && (
                  <div className="toggle-block">
                    <div className="user-btn">
                      <FaRegUser
                        className="userIcon"
                        onClick={handleUserOpen}
                      />
                    </div>
                    <div className="create-btn">
                      <IoBagOutline
                        className="createIcon"
                        onClick={handleOpen}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <JobCreateModal open={open} setOpen={setOpen} />
        <AddClientModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};
