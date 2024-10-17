import React, { useState, useEffect } from "react";
import "./WorkflowView.css";
//MUI
import { Fade, Menu, MenuItem, Box } from "@mui/material";
import { Card, CardHeader, Avatar, CardContent } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//icons
import { FiEdit } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import { IoIosMore } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { BsBagDash } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
//components
import { AllJobDataTokanBan } from "../../Jobs/utils/function";
import axiosInstance from "../../../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const WorkflowView = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(AllJobDataTokanBan([]));
  const [anchorEl, setAnchorEl] = useState();
  const [anchorjd, setAnchorjd] = useState();

  const [anchorkb, setAnchorkb] = useState();
  const kbOpen = Boolean(anchorkb);
  const [anchorData, setAnchorData] = useState();
  const [loading, setLoading] = useState(true);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showClonePopup, setShowClonePopup] = useState(false);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    console.log("AllJobDraggableData", user);
    setLoading(true);
    axiosInstance
      .get(`/getAllAdminJobs?pageNo=1&pageSize=25`)
      .then((response) => {
        console.log("dragData", response.data);
        setData(response?.data.data);
        setTasks(AllJobDataTokanBan(response?.data.data));
        setFilterData(response?.data.data);
        setLoading(false);
        setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  const onTaskChange = (source, destination, data) => {
    console.log(source, destination, data);
    const jobId = data.id;
    const user = JSON.parse(localStorage.getItem("token"));
    const status = destination;
    axiosInstance
      .post(`/updateJobStatus?clientId=${user.userId}`, { jobId, status })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // console.log(source, destination);
    if (source.droppableId === destination.droppableId) {
      const items = Array.from(tasks[source.droppableId].items);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      const updatedTasks = {
        ...tasks,
        [source.droppableId]: {
          ...tasks[source.droppableId],
          items,
        },
      };

      setTasks(updatedTasks);
    } else {
      const sourceItems = Array.from(tasks[source.droppableId].items);
      const [movedItem] = sourceItems.splice(source.index, 1);
      const destinationItems = Array.from(tasks[destination.droppableId].items);
      destinationItems.splice(destination.index, 0, movedItem);

      const updatedTasks = {
        ...tasks,
        [source.droppableId]: {
          ...tasks[source.droppableId],
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...tasks[destination.droppableId],
          items: destinationItems,
        },
      };

      setTasks(updatedTasks);
      onTaskChange(source.droppableId, destination.droppableId, movedItem);
    }
  };

  const handleKd = (event) => {
    setAnchorkb(event.currentTarget);
  };

  const handleJobDelete = () => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance
      .get(`/deleteJob?clientId=${user.userId}&jobId=${anchorData.id}`)
      .then((response) => {
        console.log(response.data);
        setData(response?.data.data);
        setLoading(false);
        setShowDeletePopup(false);
        //setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        setLoading(false);
        setShowDeletePopup(false);
        console.log(e);
      });
  };

  const handleJobClone = () => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance
      .get(`/cloneJob?clientId=${user.userId}&jobId=${anchorData.id}`)
      .then((response) => {
        console.log(response.data);
        setData(response?.data.data);
        setLoading(false);
        setShowClonePopup(false);
        //setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        setLoading(false);
        setShowClonePopup(false);
        console.log(e);
      });
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorjd(null);
    setAnchorData(null);
    setAnchorkb(null);
  };

  const handleJobEdit = () => {
    console.log(anchorData);
    navigate("/job/createJob", { state: anchorData.id });
  };

  return (
    <div className="w-full min-h-screen side-bar pr-3">
      <h2 className="smallTextGray pt-3 pb-4 font-medium text-[20px]">
        All Jobs
      </h2>
      <div className="overflow-x-scroll w-[1020px]">
        <DragDropContext onDragEnd={onDragEnd}>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {Object.entries(tasks).map(([key, column]) => (
              <Droppable droppableId={key} key={key}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      margin: "0",
                      padding: "8px",
                      minWidth: "280px",
                      maxWidth: "380px",
                      backgroundColor: snapshot.isDraggingOver
                        ? "lightblue"
                        : "white",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottomWidth: 2,
                        paddingBottom: 2,
                        borderColor: "#00808070",
                      }}
                    >
                      <div className="flex gap-2">
                        <p
                          style={{
                            color: "#1E293B",
                            fontSize: 14,
                            fontWeight: 500,
                          }}
                        >
                          {column?.name}
                        </p>
                        <div className="flex items-center justify-center h-6 w-8 border border-[#E2E8F0] bg-[#FFB58020]">
                          <p
                            style={{
                              color: "#94A3B8",
                              fontSize: 14,
                              fontWeight: 500,
                            }}
                          >
                            {column?.items?.length}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <IconButton>
                          <GoPlus
                            style={{
                              color: "#94A3B8",
                              fontSize: 16,
                            }}
                          />
                        </IconButton>
                        <IconButton>
                          <BsThreeDots
                            style={{
                              color: "#94A3B8",
                              fontSize: 16,
                            }}
                          />
                        </IconButton>
                      </div>
                    </div>
                    {column.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              borderWidth: 1,
                              borderColor: "#E2E8F0",
                              backgroundColor: snapshot.isDragging
                                ? "#CFC8C980"
                                : "#ffffff",

                              borderRadius: 8,
                              marginTop: 10,
                              ...provided.draggableProps.style,
                            }}
                          >
                            <div className="flex justify-between items-center p-2">
                              <div className="flex gap-2 items-center">
                                <img
                                  src="https://picsum.photos/200"
                                  alt="person"
                                  style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: "100%",
                                  }}
                                />
                                <div>
                                  <p
                                    style={{
                                      color: "#1E293B",
                                      fontSize: 16,
                                      fontWeight: 600,
                                    }}
                                  >
                                    {item?.jobName}
                                  </p>
                                  <p
                                    style={{
                                      color: "#252C32",
                                      fontSize: 10,
                                    }}
                                  >
                                    {item?.companyName}
                                  </p>
                                </div>
                              </div>
                              <div className="w-6 h-6 flex justify-center items-center border border-[#DDDDDD] rounded-md">
                                <IconButton
                                  onClick={(e) => {
                                    handleKd(e);
                                    setAnchorData(item);
                                  }}
                                >
                                  <BsThreeDots
                                    style={{
                                      color: "#6F6F6F",
                                      fontSize: 16,
                                    }}
                                  />
                                </IconButton>
                              </div>
                            </div>

                            <div className="p-2 ">
                              <p
                                style={{
                                  color: "#787486",
                                  fontSize: 10,
                                }}
                              >
                                Created Date: {item?.createdDate}
                              </p>
                              <p
                                style={{
                                  color: "#787486",
                                  fontSize: 10,
                                }}
                              >
                                Job Type: {item?.typeOfHire[0]}
                              </p>
                              <p
                                style={{
                                  color: "#787486",
                                  fontSize: 10,
                                }}
                              >
                                Application Sub-status: {item?.jobSubStatus}
                              </p>
                            </div>
                            <div className="mx-2 border-b border-[#E2E8F0]" />

                            <div className="flex justify-between p-2">
                              <p
                                style={{
                                  color: "#5FAEDA",
                                  fontSize: 10,
                                }}
                              >
                                Total: {item?.total}
                              </p>
                              <p
                                style={{
                                  color: "#800080",
                                  fontSize: 10,
                                }}
                              >
                                New: {item?.newly}
                              </p>
                              <p
                                style={{
                                  color: "#FFA500",
                                  fontSize: 10,
                                }}
                              >
                                Active: {item?.active}
                              </p>
                              <p
                                style={{
                                  color: "#7FB27F",
                                  fontSize: 10,
                                }}
                              >
                                Hired: {item?.hired}
                              </p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>

      {/* kanban */}
      <Menu
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorkb}
        open={kbOpen}
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

export default WorkflowView;
