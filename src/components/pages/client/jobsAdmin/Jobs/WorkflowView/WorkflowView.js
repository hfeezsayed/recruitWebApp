import React, { useState } from "react";
import "./WorkflowView.css";
//MUI
import { Fade, Menu, MenuItem, Tab, Tabs, Box } from "@mui/material";
import { Card, CardHeader, Avatar, CardContent } from "@mui/material";
//icons
import { FiEdit } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import { IoIosMore } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { BsBagDash } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
//images
import roleLogo from "../../../../../../assets/images/role-logo.png";

const WorkflowView = () => {
  //ecllipse action menu popup code start
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const [anchorData, setAnchorData] = useState();

  //Tabs start
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };
  //Tabs end

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleJobEdit = () => {};

  const handleJobDelete = () => {};

  const handleJobClone = () => {};
  //ecllipse action menu popup code end

  return (
    <div>
      <div className="joblist-tabs">
        <Tabs value={currentTabIndex} onChange={handleTabChange}>
          <Tab label="Sourcing Help" />
          <Tab label="Onboarding Help" />
          <Tab label="Full Service Staff Help" />
        </Tabs>
        {currentTabIndex === 0 && (
          <Box sx={{ width: "100%" }}>
            <h2 className="smallTextGray pt-8 pb-4 font-medium text-[20px]">
              All Jobs
            </h2>
            <div className="jobs-flow gap-2 flex flex-wrap">
              {/* first card */}
              <div className="card">
                <div className="mb-1">
                  <div className="flex justify-between mb-1">
                    <div className="flex">
                      <h2 className="text-sm font-bold">New Requirement</h2>
                      <span className="number-block">04</span>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <FaPlus className="plus-icon" />
                      <IoIosMore className="three-dots" />
                    </div>
                  </div>
                  <hr />
                </div>
                {/* first innner card */}
                <div className="inner-card">
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar>
                          <img src={roleLogo} />
                        </Avatar>
                      }
                      action={
                        <IconButton
                          aria-label="settings"
                          onClick={(e) => {
                            handleClick(e);
                            setAnchorData();
                          }}
                        >
                          <IoIosMore />
                        </IconButton>
                      }
                      title="Senior Developer"
                      subheader="Information Technology"
                    />
                    <CardContent>
                      <div className="body-content">
                        <p>
                          Created Date: <span>Jan 25, 2024</span>
                        </p>
                        <p>
                          Job Type: <span>Part Time</span>
                        </p>
                        <p>
                          Application Sub-status: <span>Phone Call</span>
                        </p>
                        <hr />
                        <div className="card-footer pt-1">
                          <div className="flex justify-between">
                            <p>Total: 50</p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              Active: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 04
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {/* second innner card */}
                <div className="inner-card">
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar>
                          <img src={roleLogo} />
                        </Avatar>
                      }
                      action={
                        <IconButton
                          aria-label="settings"
                          onClick={(e) => {
                            handleClick(e);
                            setAnchorData();
                          }}
                        >
                          <IoIosMore />
                        </IconButton>
                      }
                      title="Senior Developer"
                      subheader="Information Technology"
                    />
                    <CardContent>
                      <div className="body-content">
                        <p>
                          Created Date: <span>Jan 25, 2024</span>
                        </p>
                        <p>
                          Job Type: <span>Part Time</span>
                        </p>
                        <p>
                          Application Sub-status: <span>Phone Call</span>
                        </p>
                        <hr />
                        <div className="card-footer pt-1">
                          <div className="flex justify-between">
                            <p>Total: 50</p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              Active: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 04
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {/* second card */}
              <div className="card">
                <div className="mb-1">
                  <div className="flex justify-between mb-1">
                    <div className="flex">
                      <h2 className="text-sm font-bold">Sourcing Candidates</h2>
                      <span className="number-block">04</span>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <FaPlus className="plus-icon" />
                      <IoIosMore className="three-dots" />
                    </div>
                  </div>
                  <hr />
                </div>
                {/* first innner card */}
                <div className="inner-card">
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar>
                          <img src={roleLogo} />
                        </Avatar>
                      }
                      action={
                        <IconButton
                          aria-label="settings"
                          onClick={(e) => {
                            handleClick(e);
                            setAnchorData();
                          }}
                        >
                          <IoIosMore />
                        </IconButton>
                      }
                      title="Senior Developer"
                      subheader="Information Technology"
                    />
                    <CardContent>
                      <div className="body-content">
                        <p>
                          Created Date: <span>Jan 25, 2024</span>
                        </p>
                        <p>
                          Job Type: <span>Part Time</span>
                        </p>
                        <p>
                          Application Sub-status: <span>Phone Call</span>
                        </p>
                        <hr />
                        <div className="card-footer pt-1">
                          <div className="flex justify-between">
                            <p>Total: 50</p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              Active: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 04
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {/* second innner card */}
                <div className="inner-card">
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar>
                          <img src={roleLogo} />
                        </Avatar>
                      }
                      action={
                        <IconButton
                          aria-label="settings"
                          onClick={(e) => {
                            handleClick(e);
                            setAnchorData();
                          }}
                        >
                          <IoIosMore />
                        </IconButton>
                      }
                      title="Senior Developer"
                      subheader="Information Technology"
                    />
                    <CardContent>
                      <div className="body-content">
                        <p>
                          Created Date: <span>Jan 25, 2024</span>
                        </p>
                        <p>
                          Job Type: <span>Part Time</span>
                        </p>
                        <p>
                          Application Sub-status: <span>Phone Call</span>
                        </p>
                        <hr />
                        <div className="card-footer pt-1">
                          <div className="flex justify-between">
                            <p>Total: 50</p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              Active: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 04
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {/* Third card */}
              <div className="card">
                <div className="mb-1">
                  <div className="flex justify-between mb-1">
                    <div className="flex">
                      <h2 className="text-sm font-bold">
                        Screening & Evaluation
                      </h2>
                      <span className="number-block">04</span>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <FaPlus className="plus-icon" />
                      <IoIosMore className="three-dots" />
                    </div>
                  </div>
                  <hr />
                </div>
                {/* first innner card */}
                <div className="inner-card">
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar>
                          <img src={roleLogo} />
                        </Avatar>
                      }
                      action={
                        <IconButton
                          aria-label="settings"
                          onClick={(e) => {
                            handleClick(e);
                            setAnchorData();
                          }}
                        >
                          <IoIosMore />
                        </IconButton>
                      }
                      title="Senior Developer"
                      subheader="Information Technology"
                    />
                    <CardContent>
                      <div className="body-content">
                        <p>
                          Created Date: <span>Jan 25, 2024</span>
                        </p>
                        <p>
                          Job Type: <span>Part Time</span>
                        </p>
                        <p>
                          Application Sub-status: <span>Phone Call</span>
                        </p>
                        <hr />
                        <div className="card-footer pt-1">
                          <div className="flex justify-between">
                            <p>Total: 50</p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              Active: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 04
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {/* second innner card */}
                <div className="inner-card">
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar>
                          <img src={roleLogo} />
                        </Avatar>
                      }
                      action={
                        <IconButton
                          aria-label="settings"
                          onClick={(e) => {
                            handleClick(e);
                            setAnchorData();
                          }}
                        >
                          <IoIosMore />
                        </IconButton>
                      }
                      title="Senior Developer"
                      subheader="Information Technology"
                    />
                    <CardContent>
                      <div className="body-content">
                        <p>
                          Created Date: <span>Jan 25, 2024</span>
                        </p>
                        <p>
                          Job Type: <span>Part Time</span>
                        </p>
                        <p>
                          Application Sub-status: <span>Phone Call</span>
                        </p>
                        <hr />
                        <div className="card-footer pt-1">
                          <div className="flex justify-between">
                            <p>Total: 50</p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              Active: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 04
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {/* Fourth card */}
              <div className="card">
                <div className="mb-1">
                  <div className="flex justify-between mb-1">
                    <div className="flex">
                      <h2 className="text-sm font-bold">Interviewing</h2>
                      <span className="number-block">04</span>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <FaPlus className="plus-icon" />
                      <IoIosMore className="three-dots" />
                    </div>
                  </div>
                  <hr />
                </div>
                {/* first innner card */}
                <div className="inner-card">
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar>
                          <img src={roleLogo} />
                        </Avatar>
                      }
                      action={
                        <IconButton
                          aria-label="settings"
                          onClick={(e) => {
                            handleClick(e);
                            setAnchorData();
                          }}
                        >
                          <IoIosMore />
                        </IconButton>
                      }
                      title="Senior Developer"
                      subheader="Information Technology"
                    />
                    <CardContent>
                      <div className="body-content">
                        <p>
                          Created Date: <span>Jan 25, 2024</span>
                        </p>
                        <p>
                          Job Type: <span>Part Time</span>
                        </p>
                        <p>
                          Application Sub-status: <span>Phone Call</span>
                        </p>
                        <hr />
                        <div className="card-footer pt-1">
                          <div className="flex justify-between">
                            <p>Total: 50</p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              Active: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 04
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {/* second innner card */}
                <div className="inner-card">
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar>
                          <img src={roleLogo} />
                        </Avatar>
                      }
                      action={
                        <IconButton
                          aria-label="settings"
                          onClick={(e) => {
                            handleClick(e);
                            setAnchorData();
                          }}
                        >
                          <IoIosMore />
                        </IconButton>
                      }
                      title="Senior Developer"
                      subheader="Information Technology"
                    />
                    <CardContent>
                      <div className="body-content">
                        <p>
                          Created Date: <span>Jan 25, 2024</span>
                        </p>
                        <p>
                          Job Type: <span>Part Time</span>
                        </p>
                        <p>
                          Application Sub-status: <span>Phone Call</span>
                        </p>
                        <hr />
                        <div className="card-footer pt-1">
                          <div className="flex justify-between">
                            <p>Total: 50</p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              Active: 05
                            </p>
                            <p>
                              <span className="dot-gray">&#x2022;</span>
                              New: 04
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/*Actions menu */}
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={() => {}}>
                  <div className="flex gap-2 items-center">
                    <BsBagDash style={{ color: "#FFA412", fontSize: 16 }} />
                    <p
                      style={{
                        color: "#FFA412",
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      Job
                    </p>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleJobEdit}>
                  <div className="flex gap-2 items-center">
                    <FiEdit style={{ color: "#5FAEDA", fontSize: 16 }} />
                    <p
                      style={{
                        color: "#5FAEDA",
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      Edit
                    </p>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleJobDelete}>
                  <div className="flex gap-2 items-center">
                    <RiDeleteBin5Line
                      style={{ color: "#E05880", fontSize: 16 }}
                    />
                    <p
                      style={{
                        color: "#E05880",
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      Delete
                    </p>
                  </div>
                </MenuItem>

                <MenuItem onClick={handleJobClone}>
                  <div className="flex gap-2 items-center">
                    <HiOutlineDocumentDuplicate
                      style={{ color: "#58A20F", fontSize: 16 }}
                    />
                    <p
                      style={{
                        color: "#58A20F",
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      Clone
                    </p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </Box>
        )}

        {currentTabIndex === 1 && (
          <Box sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <h2 className="smallTextGray pt-8 pb-4 font-medium text-[20px]">
                All Jobs
              </h2>
              <div className="jobs-flow gap-2 flex flex-wrap">
                {/* first card */}
                <div className="card">
                  <div className="mb-1">
                    <div className="flex justify-between mb-1">
                      <div className="flex">
                        <h2 className="text-sm font-bold">New Requirement</h2>
                        <span className="number-block">04</span>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <FaPlus className="plus-icon" />
                        <IoIosMore className="three-dots" />
                      </div>
                    </div>
                    <hr />
                  </div>
                  {/* first innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* second innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {/* second card */}
                <div className="card">
                  <div className="mb-1">
                    <div className="flex justify-between mb-1">
                      <div className="flex">
                        <h2 className="text-sm font-bold">
                          Sourcing Candidates
                        </h2>
                        <span className="number-block">04</span>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <FaPlus className="plus-icon" />
                        <IoIosMore className="three-dots" />
                      </div>
                    </div>
                    <hr />
                  </div>
                  {/* first innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* second innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {/* Third card */}
                <div className="card">
                  <div className="mb-1">
                    <div className="flex justify-between mb-1">
                      <div className="flex">
                        <h2 className="text-sm font-bold">
                          Screening & Evaluation
                        </h2>
                        <span className="number-block">04</span>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <FaPlus className="plus-icon" />
                        <IoIosMore className="three-dots" />
                      </div>
                    </div>
                    <hr />
                  </div>
                  {/* first innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* second innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {/* Fourth card */}
                <div className="card">
                  <div className="mb-1">
                    <div className="flex justify-between mb-1">
                      <div className="flex">
                        <h2 className="text-sm font-bold">Interviewing</h2>
                        <span className="number-block">04</span>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <FaPlus className="plus-icon" />
                        <IoIosMore className="three-dots" />
                      </div>
                    </div>
                    <hr />
                  </div>
                  {/* first innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* second innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/*Actions menu */}
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={() => {}}>
                    <div className="flex gap-2 items-center">
                      <BsBagDash style={{ color: "#FFA412", fontSize: 16 }} />
                      <p
                        style={{
                          color: "#FFA412",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Job
                      </p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleJobEdit}>
                    <div className="flex gap-2 items-center">
                      <FiEdit style={{ color: "#5FAEDA", fontSize: 16 }} />
                      <p
                        style={{
                          color: "#5FAEDA",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Edit
                      </p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleJobDelete}>
                    <div className="flex gap-2 items-center">
                      <RiDeleteBin5Line
                        style={{ color: "#E05880", fontSize: 16 }}
                      />
                      <p
                        style={{
                          color: "#E05880",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Delete
                      </p>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleJobClone}>
                    <div className="flex gap-2 items-center">
                      <HiOutlineDocumentDuplicate
                        style={{ color: "#58A20F", fontSize: 16 }}
                      />
                      <p
                        style={{
                          color: "#58A20F",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Clone
                      </p>
                    </div>
                  </MenuItem>
                </Menu>
              </div>
            </Box>
          </Box>
        )}

        {currentTabIndex === 2 && (
          <Box sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <h2 className="smallTextGray pt-8 pb-4 font-medium text-[20px]">
                All Jobs
              </h2>
              <div className="jobs-flow gap-2 flex flex-wrap">
                {/* first card */}
                <div className="card">
                  <div className="mb-1">
                    <div className="flex justify-between mb-1">
                      <div className="flex">
                        <h2 className="text-sm font-bold">New Requirement</h2>
                        <span className="number-block">04</span>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <FaPlus className="plus-icon" />
                        <IoIosMore className="three-dots" />
                      </div>
                    </div>
                    <hr />
                  </div>
                  {/* first innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* second innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {/* second card */}
                <div className="card">
                  <div className="mb-1">
                    <div className="flex justify-between mb-1">
                      <div className="flex">
                        <h2 className="text-sm font-bold">
                          Sourcing Candidates
                        </h2>
                        <span className="number-block">04</span>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <FaPlus className="plus-icon" />
                        <IoIosMore className="three-dots" />
                      </div>
                    </div>
                    <hr />
                  </div>
                  {/* first innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* second innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {/* Third card */}
                <div className="card">
                  <div className="mb-1">
                    <div className="flex justify-between mb-1">
                      <div className="flex">
                        <h2 className="text-sm font-bold">
                          Screening & Evaluation
                        </h2>
                        <span className="number-block">04</span>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <FaPlus className="plus-icon" />
                        <IoIosMore className="three-dots" />
                      </div>
                    </div>
                    <hr />
                  </div>
                  {/* first innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* second innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {/* Fourth card */}
                <div className="card">
                  <div className="mb-1">
                    <div className="flex justify-between mb-1">
                      <div className="flex">
                        <h2 className="text-sm font-bold">Interviewing</h2>
                        <span className="number-block">04</span>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <FaPlus className="plus-icon" />
                        <IoIosMore className="three-dots" />
                      </div>
                    </div>
                    <hr />
                  </div>
                  {/* first innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* second innner card */}
                  <div className="inner-card">
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar>
                            <img src={roleLogo} />
                          </Avatar>
                        }
                        action={
                          <IconButton
                            aria-label="settings"
                            onClick={(e) => {
                              handleClick(e);
                              setAnchorData();
                            }}
                          >
                            <IoIosMore />
                          </IconButton>
                        }
                        title="Senior Developer"
                        subheader="Information Technology"
                      />
                      <CardContent>
                        <div className="body-content">
                          <p>
                            Created Date: <span>Jan 25, 2024</span>
                          </p>
                          <p>
                            Job Type: <span>Part Time</span>
                          </p>
                          <p>
                            Application Sub-status: <span>Phone Call</span>
                          </p>
                          <hr />
                          <div className="card-footer pt-1">
                            <div className="flex justify-between">
                              <p>Total: 50</p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                Active: 05
                              </p>
                              <p>
                                <span className="dot-gray">&#x2022;</span>
                                New: 04
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/*Actions menu */}
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={() => {}}>
                    <div className="flex gap-2 items-center">
                      <BsBagDash style={{ color: "#FFA412", fontSize: 16 }} />
                      <p
                        style={{
                          color: "#FFA412",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Job
                      </p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleJobEdit}>
                    <div className="flex gap-2 items-center">
                      <FiEdit style={{ color: "#5FAEDA", fontSize: 16 }} />
                      <p
                        style={{
                          color: "#5FAEDA",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Edit
                      </p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleJobDelete}>
                    <div className="flex gap-2 items-center">
                      <RiDeleteBin5Line
                        style={{ color: "#E05880", fontSize: 16 }}
                      />
                      <p
                        style={{
                          color: "#E05880",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Delete
                      </p>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleJobClone}>
                    <div className="flex gap-2 items-center">
                      <HiOutlineDocumentDuplicate
                        style={{ color: "#58A20F", fontSize: 16 }}
                      />
                      <p
                        style={{
                          color: "#58A20F",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Clone
                      </p>
                    </div>
                  </MenuItem>
                </Menu>
              </div>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export default WorkflowView;
