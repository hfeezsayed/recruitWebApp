import {
  Box,
  Fade,
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
  linearProgressClasses,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BsThreeDots } from "react-icons/bs";
import { TiFolderOpen } from "react-icons/ti";
import { IoIosCalendar } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";

const KanbanBoard = ({ handleKd }) => {
  const [tasks, setTasks] = useState({
    initiated: {
      name: "Initiated",
      items: [
        {
          id: "task-1",
          dtp: "INITIATED",
          jonId: 100,
          name: "Anna Mathew",
          role: "Senior Backend Developer",
          timeStamp: "Jan 25, 2024",
          sub_Status: "Phone call",
          date: "14 April, 24",
          document: "Resume",
          application_Status: 70,
          profile_Status: 10,
        },
        {
          id: "task-2",
          dtp: "INITIATED",
          jonId: 101,
          name: "Anna Mathew",
          role: "Senior Backend Developer",
          timeStamp: "Jan 25, 2024",
          sub_Status: "Phone call",
          date: "14 April, 24",
          document: "Resume",
          application_Status: 70,
          profile_Status: 10,
        },
      ],
    },
    inProgress: {
      name: "In Progress",
      items: [
        {
          id: "task-3",
          dtp: "IN PROGRESS",
          jonId: 152,
          name: "Anna Mathew",
          role: "Senior Backend Developer",
          timeStamp: "Jan 25, 2024",
          sub_Status: "Phone call",
          date: "14 April, 24",
          document: "Resume",
          application_Status: 70,
          profile_Status: 10,
        },
        {
          id: "task-4",
          dtp: "IN PROGRESS",
          jonId: 158,
          name: "Anna Mathew",
          role: "Senior Backend Developer",
          timeStamp: "Jan 25, 2024",
          sub_Status: "Phone call",
          date: "14 April, 24",
          document: "Resume",
          application_Status: 70,
          profile_Status: 10,
        },
      ],
    },
    approved: {
      name: "Approved",
      items: [
        {
          id: "task-5",
          dtp: "APPROVED",
          jonId: 168,
          name: "Anna Mathew",
          role: "Senior Backend Developer",
          timeStamp: "Jan 25, 2024",
          sub_Status: "Phone call",
          date: "14 April, 24",
          document: "Resume",
          application_Status: 70,
          profile_Status: 10,
        },
        {
          id: "task-6",
          dtp: "APPROVED",
          jonId: 172,
          name: "Anna Mathew",
          role: "Senior Backend Developer",
          timeStamp: "Jan 25, 2024",
          sub_Status: "Phone call",
          date: "14 April, 24",
          document: "Resume",
          application_Status: 70,
          profile_Status: 10,
        },
      ],
    },
    rejected: {
      name: "Rejected",
      items: [
        {
          id: "task-7",
          dtp: "REJECTED",
          jonId: 174,
          name: "Anna Mathew",
          role: "Senior Backend Developer",
          timeStamp: "Jan 25, 2024",
          sub_Status: "Phone call",
          date: "14 April, 24",
          document: "Resume",
          application_Status: 70,
          profile_Status: 10,
        },
        {
          id: "task-8",
          dtp: "REJECTED",
          jonId: 132,
          name: "Anna Mathew",
          role: "Senior Backend Developer",
          timeStamp: "Jan 25, 2024",
          sub_Status: "Phone call",
          date: "14 April, 24",
          document: "Resume",
          application_Status: 70,
          profile_Status: 10,
        },
      ],
    },
  });

  const [anchorkb, setAnchorkb] = useState();
  const kbOpen = Boolean(anchorkb);

  // const handleKd = (event) => {
  //   setAnchorkb(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorkb(null);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const items = Array.from(tasks[source.droppableId].items);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: {
          ...prev[source.droppableId],
          items,
        },
      }));
    } else {
      const sourceItems = Array.from(tasks[source.droppableId].items);
      const [movedItem] = sourceItems.splice(source.index, 1);
      const destinationItems = Array.from(tasks[destination.droppableId].items);
      destinationItems.splice(destination.index, 0, movedItem);

      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: {
          ...prev[source.droppableId],
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...prev[destination.droppableId],
          items: destinationItems,
        },
      }));
    }
  };

  const DtpStatus = (status) => {
    let color = "#ffffff";
    let bg = "#ffffff";

    if (status === "Initiated") {
      color = "#FFA500";
      bg = "#FFF2DB";
    }
    if (status === "In Progress") {
      color = "#5FAEDA";
      bg = "#E9F4FA";
    }
    if (status === "Approved") {
      color = "#58A20F";
      bg = "#58A20F20";
    }
    if (status === "Rejected") {
      color = "#E05880";
      bg = "#E0588020";
    }

    return (
      <div
        style={{
          padding: "4px 8px",
          borderWidth: 1,
          borderColor: color,
          borderRadius: 20,
          backgroundColor: bg,
        }}>
        <p style={{ color: color, fontSize: 8, fontWeight: 600 }}>
          Dtp Status: {status?.toUpperCase()}
        </p>
      </div>
    );
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4.9,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background: "#58A20F",
    },
  }));

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: "flex" }}>
          {Object.entries(tasks).map(([key, column]) => (
            <Droppable droppableId={key} key={key}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    margin: "0 8px",
                    padding: "8px",
                    width: "260px",
                    backgroundColor: snapshot.isDraggingOver
                      ? "lightblue"
                      : "white",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottomWidth: 2,
                      paddingBottom: 2,
                      borderColor: "#00808070",
                    }}>
                    <div className="flex gap-2">
                      <p
                        style={{
                          color: "#1E293B",
                          fontSize: 14,
                          fontWeight: 500,
                        }}>
                        {column?.name}
                      </p>
                      <div className="flex items-center justify-center h-6 w-8 border border-[#E2E8F0] bg-[#FFB58020]">
                        <p
                          style={{
                            color: "#94A3B8",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          {column?.items?.length}
                        </p>
                      </div>
                    </div>
                  </div>
                  {column.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          // style={{
                          //   userSelect: "none",
                          //   padding: "16px",
                          //   margin: "4px 0",
                          //   minHeight: "50px",
                          //   backgroundColor: snapshot.isDragging
                          //     ? "#263B4A"
                          //     : "#456C86",
                          //   color: "white",
                          //   ...provided.draggableProps.style,
                          // }}
                          style={{
                            borderWidth: 1,
                            borderColor: "#E2E8F0",
                            backgroundColor: snapshot.isDragging
                              ? "#CFC8C980"
                              : "#ffffff",
                            borderRadius: 8,
                            marginTop: 10,
                          }}>
                          <div className="flex justify-between items-center p-2">
                            {DtpStatus(column?.name)}
                            <p
                              style={{
                                color: "#7E8795",
                                fontWeight: 500,
                                fontSize: 10,
                              }}>
                              Job Id : {item.jonId}
                            </p>
                          </div>
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
                                  }}>
                                  {item?.name}
                                </p>
                                <p style={{ color: "#252C32", fontSize: 10 }}>
                                  {item?.role}
                                </p>
                              </div>
                            </div>
                            <div className="w-6 h-6 flex justify-center items-center border border-[#DDDDDD] rounded-md">
                              <IconButton onClick={handleKd}>
                                <BsThreeDots
                                  style={{ color: "#6F6F6F", fontSize: 16 }}
                                />
                              </IconButton>
                            </div>
                          </div>
                          <div className="w-10 h-4 rounded-r-full bg-[#E20008] flex justify-center items-center">
                            <p style={{ color: "#ffffff", fontSize: 10 }}>
                              {item.profile_Status}%
                            </p>
                          </div>
                          <div className="p-2 ">
                            <p style={{ color: "#787486", fontSize: 10 }}>
                              Created Timestamp: {item?.timeStamp}
                            </p>
                            <p style={{ color: "#787486", fontSize: 10 }}>
                              Application Sub-status: {item?.sub_Status}
                            </p>
                          </div>
                          <div className="mx-2 border-b border-[#E2E8F0]" />
                          <div className="p-2 flex gap-2">
                            <div className="flex gap-1">
                              <TiFolderOpen style={{ color: "#5FAEDA" }} />
                              <p style={{ color: "#5FAEDA", fontSize: 10 }}>
                                {item?.document}
                              </p>
                            </div>
                            <div className="flex gap-1">
                              <IoIosCalendar style={{ color: "#800080" }} />
                              <p style={{ color: "#800080", fontSize: 10 }}>
                                {item?.date}
                              </p>
                            </div>
                          </div>
                          <div className="w-full px-2 py-[2px]">
                            <p style={{ color: "#7E8795", fontSize: 8 }}>
                              Application Status
                            </p>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}>
                              <BorderLinearProgress
                                variant="determinate"
                                value={40}
                                style={{ width: "100%" }}
                              />
                            </Box>
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

      {/* menu */}
      <Menu
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={kbOpen}
        open={kbOpen}
        onClose={handleClose}
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "right",
        // }}
        // transformOrigin={{
        //   vertical: "top",
        //   horizontal: "right",
        // }}
        TransitionComponent={Fade}>
        <MenuItem onClick={() => {}}>
          <div className="flex gap-2 items-center">
            <FiEdit style={{ color: "#FF7F50", fontSize: 14 }} />
            <p
              style={{
                color: "#FF7F50",
                fontSize: 8,
                fontWeight: 500,
              }}>
              Job Screening
            </p>
          </div>
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <div className="flex gap-2 items-center">
            <HiOutlineDocumentDuplicate
              style={{ color: "#E05880", fontSize: 14 }}
            />
            <p
              style={{
                color: "#E05880",
                fontSize: 8,
                fontWeight: 500,
              }}>
              Assessment
            </p>
          </div>
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <div className="flex gap-2 items-center">
            <BiBell style={{ color: "#66B2B2", fontSize: 14 }} />
            <p
              style={{
                color: "#66B2B2",
                fontSize: 8,
                fontWeight: 500,
              }}>
              Notify
            </p>
          </div>
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <div className="flex gap-2 items-center">
            <FiEdit style={{ color: "#5FAEDA", fontSize: 14 }} />
            <p
              style={{
                color: "#5FAEDA",
                fontSize: 8,
                fontWeight: 500,
              }}>
              Edit
            </p>
          </div>
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <div className="flex gap-2 items-center">
            <IoEyeOutline style={{ color: "#58A20F", fontSize: 14 }} />
            <p
              style={{
                color: "#58A20F",
                fontSize: 8,
                fontWeight: 500,
              }}>
              View
            </p>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default KanbanBoard;
