import React from "react";
import "./WorkflowView.css";
//MUI
import { Card, CardHeader, Avatar, CardContent } from "@mui/material";
//icons
import IconButton from "@mui/material/IconButton";
import { IoIosMore } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
//images
import roleLogo from "../../../../../../assets/images/role-logo.png";
//DummyData
import Data from "./dummyData.json";

const WorkflowView = () => {
  return (
    <div className="jobs-flow flex flex-wrap">
      {Data.map((item, index) => (
        <div className="card">
          <div className="mb-1" key={index}>
            <div className="flex justify-between ">
              <div className="flex">
                <h2 className="text-sm font-bold">{item.newReq}</h2>
                <span className="number-block">{item.noOfReq}</span>
              </div>
              <div className="flex gap-2 justify-center">
                <FaPlus className="plus-icon" />
                <IoIosMore className="three-dots" />
              </div>
            </div>
            <hr />
          </div>
          <div className="inner-card" key={index}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar>
                    <img src={roleLogo} />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <IoIosMore />
                  </IconButton>
                }
                title={item.designation}
                subheader={item.industry}
              />
              <CardContent>
                <div className="body-content">
                  <p>
                    Created Date: <span>{item.createdDate}</span>
                  </p>
                  <p>
                    Job Type: <span>{item.jobType}</span>
                  </p>
                  <p>
                    Application Sub-status: <span>{item.appSubStatus}</span>
                  </p>
                  <hr />
                  <div className="card-footer pt-1">
                    <div className="flex justify-between">
                      <p>Total: {item.total}</p>
                      <p>.New: {item.new}</p>
                      <p>Active: {item.Active}</p>
                      <p>New: {item.new1}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkflowView;
