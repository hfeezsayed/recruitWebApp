import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BoardView.css";
import axiosInstance from "../../../../../utils/axiosInstance";
//MUI
import { Fade, Menu, MenuItem } from "@mui/material";
import {
  Card,
  CardContent,
  CardActions,
  Box,
  linearProgressClasses,
  styled,
  Button,
} from "@mui/material";
//Progress bar
import LinearProgress from "@mui/material/LinearProgress";
//icons
import { FiEdit } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import { BsBagDash } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const BoardView = () => {
  const navigate = useNavigate();
  //ecllipse action menu popup code start
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const [data, setData] = useState([]);
  const [anchorData, setAnchorData] = useState();
  const [filterData, setFilterData] = useState([]);

  //progress bar
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5.5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#ebf6f1",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background: `#46BD84`,
    },
  }));

  useEffect(() => {
    axiosInstance
      .get(`/getAllAdminJobs?pageNo=1&pageSize=25`)
      .then((response) => {
        console.log("board card data---", response.data);
        setData(response?.data.data);
        setFilterData(response?.data.data);
        // setLoading(false);
        //setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        // setLoading(false);
        console.log(e);
      });
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
    <div className="jobs-flow">
      <h2 className="smallTextGray pt-3 pb-4 font-medium text-[20px]">
        All Jobs
      </h2>
      <div className="flex flex-wrap gap-3">
        {/* first card */}
        {filterData.map((row, index) => (
          <div className="board-view" key={index}>
            <div className="card">
              <Card>
                <CardContent>
                  <div className="flex justify-between">
                    <div className="mb-1">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-[16px] font-bold">
                          {row?.jobName}
                        </h2>

                        {row?.newJob ? (
                          <span className="new-post">New post</span>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="sub-header flex">
                        <p>
                          <span>
                            <CiLocationOn />
                          </span>
                          <span className="pl-1">{row?.location}</span>
                        </p>
                        {row?.typeOfHire.map((data, index) => (
                          <p className="px-2" key={index}>
                            <span>
                              <IoTimeOutline />
                            </span>
                            <span className="pl-1">{data}</span>
                          </p>
                        ))}
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
                        <img src={row.image} />
                      </div>
                      <div className="right-content pl-1">
                        <p>{row.companyName}</p>
                        <p>
                          Hiring Manger:
                          <span className="font-medium text-[#101828] pl-1">
                            {row.hiringManager}
                          </span>
                        </p>
                      </div>
                    </div>
                    <hr />
                    <CardActions>
                      {row?.jobProgress < 100 ? (
                        <div className="w-full ">
                          <div className="flex justify-between pb-1">
                            <p
                              style={{
                                color: "#121212",
                                fontSize: 12,
                                fontWeight: 500,
                              }}
                            >
                              Job Progress
                            </p>
                            <p
                              style={{
                                color: "#121212",
                                fontSize: 12,
                                fontWeight: 500,
                              }}
                            >
                              {row?.jobProgress} %
                            </p>
                          </div>
                          <Box sx={{ width: "100%" }}>
                            <BorderLinearProgress
                              variant="determinate"
                              value={row?.jobProgress || 0}
                            />
                          </Box>
                          <div className="flex justify-end w-full">
                            <Button
                              size="small"
                              onClick={() =>
                                navigate("/job/createJob", {
                                  state: row.id,
                                })
                              }
                              style={{
                                color: "#008080",
                                textTransform: "none",
                                fontSize: 16,
                                fontWeight: 500,
                                textDecoration: "underline",
                                padding: 0,
                              }}
                              endIcon={<MdOutlineArrowOutward />}
                            >
                              Complete Job
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full ">
                          <div className="flex justify-between pb-1">
                            <p
                              style={{
                                color: "#121212",
                                fontSize: 12,
                                fontWeight: 500,
                              }}
                            >
                              Job Progress
                            </p>
                            <p
                              style={{
                                color: "#121212",
                                fontSize: 12,
                                fontWeight: 500,
                              }}
                            >
                              {row?.jobProgress} %
                            </p>
                          </div>
                          <Box sx={{ width: "100%" }}>
                            <BorderLinearProgress
                              variant="determinate"
                              value={row?.jobProgress || 100}
                            />
                          </Box>
                          <div className="flex justify-end w-full">
                            <Button
                              size="small"
                              onClick={() =>
                                navigate("/assignCandidate", {
                                  //state: row.id,
                                })
                              }
                              style={{
                                color: "#008080",
                                textTransform: "none",
                                fontSize: 16,
                                fontWeight: 500,
                                textDecoration: "underline",
                                padding: 0,
                              }}
                              endIcon={<MdOutlineArrowOutward />}
                            >
                              More Details
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardActions>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
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
