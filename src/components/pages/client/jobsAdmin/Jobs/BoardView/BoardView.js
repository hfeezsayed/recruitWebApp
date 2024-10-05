import React, { useState, useEffect } from "react";
import "./BoardView.css";
//MUI
import { Fade, Menu, MenuItem } from "@mui/material";
import { Card, CardContent } from "@mui/material";
//Progress bar
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
//icons
import { FiEdit } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import { BsBagDash } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { PiLineVertical } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
//images
import appStore from "../../../../../../assets/images/app-store.png";
import adobeImg from "../../../../../../assets/images/adobe-store.png";

const BoardView = () => {
  //ecllipse action menu popup code start
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const [anchorData, setAnchorData] = useState();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
    <div className="jobs-flow gap-3 flex flex-wrap">
      {/* first card */}
      <div className="board-view">
        <div className="card">
          <Card>
            <CardContent>
              <div className="flex justify-between">
                <div className="mb-1">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-[16px] font-bold">
                      Senior Software Engineer
                    </h2>
                    <span className="new-post">New post</span>
                  </div>
                  <div className="sub-header flex">
                    <p>
                      <span>
                        <CiLocationOn />
                      </span>
                      <span className="pl-1">Hyderabad</span>
                    </p>
                    <p className="px-2">
                      <span>
                        <IoTimeOutline />
                      </span>
                      <span className="pl-1">Full time</span>
                    </p>
                    <p>
                      <PiLineVertical />
                      <span>Part time</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-baseline">
                  <IconButton
                    aria-label="settings"
                    onClick={(e) => {
                      handleClick(e);
                      setAnchorData();
                    }}
                  >
                    <HiDotsVertical />
                  </IconButton>
                </div>
              </div>
              <div className="body-content">
                <div className="flex gap-1 pt-5 pb-5">
                  <div className="left-img">
                    <img src={appStore} />
                  </div>
                  <div className="right-content pl-1">
                    <p>Linear Company</p>
                    <p>
                      Hiring Manger:
                      <span className="font-medium text-[#101828] pl-1">
                        Alex Johnson
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="card-footer">
                  <div className="flex justify-between">
                    <div className="flex justify-between items-center gap-2">
                      <span>
                        <HiOutlineUsers className="text-[#727a87]" />
                      </span>
                      <span className="text-[14px] text-[#727a87]">
                        Candidates
                      </span>
                    </div>
                    <div>
                      <a className="more-details">
                        More Details
                        <FiArrowUpRight className="font-medium" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="board-view">
        <div className="card">
          <Card>
            <CardContent>
              <div className="flex justify-between">
                <div className="mb-1">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-[16px] font-bold">
                      Senior Software Engineer
                    </h2>
                    <span className="new-post">New post</span>
                  </div>
                  <div className="sub-header flex">
                    <p>
                      <span>
                        <CiLocationOn />
                      </span>
                      <span className="pl-1">Hyderabad</span>
                    </p>
                    <p className="px-2">
                      <span>
                        <IoTimeOutline />
                      </span>
                      <span className="pl-1">Full time</span>
                    </p>
                    <p>
                      <PiLineVertical />
                      <span>Part time</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-baseline">
                  <IconButton
                    aria-label="settings"
                    onClick={(e) => {
                      handleClick(e);
                      setAnchorData();
                    }}
                  >
                    <HiDotsVertical />
                  </IconButton>
                </div>
              </div>
              <div className="body-content">
                <div className="flex gap-1 pt-5 pb-5">
                  <div className="left-img">
                    <img src={adobeImg} alt="adobe" />
                  </div>
                  <div className="right-content pl-1">
                    <p>Adobe</p>
                    <p>
                      Hiring Manger:
                      <span className="font-medium text-[#101828] pl-1">
                        Alex Johnson
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="card-footer">
                  <div className="hidden">
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center gap-2">
                        <span>
                          <HiOutlineUsers className="text-[#727a87]" />
                        </span>
                        <span className="text-[14px] text-[#727a87]">
                          Candidates
                        </span>
                      </div>
                      <div>
                        <a className="more-details">
                          More Details
                          <FiArrowUpRight className="font-medium" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Progress bar */}

                  <div className="progress-bar">
                    <p className="flex justify-between text-[#121212] font-medium text-[12px]">
                      <span>Job Progress</span>
                      <span>32%</span>
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <Stack
                        sx={{
                          width: "100%",
                          color: "grey.500",
                        }}
                        spacing={2}
                      >
                        <LinearProgress
                          variant="determinate"
                          value={progress}
                          color="secondary"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="board-view">
        <div className="card">
          <Card>
            <CardContent>
              <div className="flex justify-between">
                <div className="mb-1">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-[16px] font-bold">
                      Senior Software Engineer
                    </h2>
                    <span className="new-post">New post</span>
                  </div>
                  <div className="sub-header flex">
                    <p>
                      <span>
                        <CiLocationOn />
                      </span>
                      <span className="pl-1">Hyderabad</span>
                    </p>
                    <p className="px-2">
                      <span>
                        <IoTimeOutline />
                      </span>
                      <span className="pl-1">Full time</span>
                    </p>
                    <p>
                      <PiLineVertical />
                      <span>Part time</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-baseline">
                  <IconButton
                    aria-label="settings"
                    onClick={(e) => {
                      handleClick(e);
                      setAnchorData();
                    }}
                  >
                    <HiDotsVertical />
                  </IconButton>
                </div>
              </div>
              <div className="body-content">
                <div className="flex gap-1 pt-5 pb-5">
                  <div className="left-img">
                    <img src={appStore} />
                  </div>
                  <div className="right-content pl-1">
                    <p>Adobe</p>
                    <p>
                      Hiring Manger:
                      <span className="font-medium text-[#101828] pl-1">
                        Alex Johnson
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="card-footer">
                  <div className="hidden">
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center gap-2">
                        <span>
                          <HiOutlineUsers className="text-[#727a87]" />
                        </span>
                        <span className="text-[14px] text-[#727a87]">
                          Candidates
                        </span>
                      </div>
                      <div>
                        <a className="more-details">
                          More Details
                          <FiArrowUpRight className="font-medium" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Progress bar */}

                  <div className="progress-bar">
                    <p className="flex justify-between text-[#121212] font-medium text-[12px]">
                      <span>Job Progress</span>
                      <span>32%</span>
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <Stack
                        sx={{
                          width: "100%",
                          color: "grey.500",
                        }}
                        spacing={2}
                      >
                        <LinearProgress
                          variant="determinate"
                          value={progress}
                          color="secondary"
                        />
                      </Stack>
                    </div>
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
            <RiDeleteBin5Line style={{ color: "#E05880", fontSize: 16 }} />
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
  );
};

export default BoardView;
