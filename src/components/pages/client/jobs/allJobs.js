import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  Select,
  TableSortLabel,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import {
  Box,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Divider,
  InputAdornment,
  LinearProgress,
  TextField,
  linearProgressClasses,
  styled,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { PiUserFocus } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import {
  IoTimeOutline,
  IoMenu,
  IoFilter,
  IoBagRemoveOutline,
} from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { MdOutlineArrowOutward, MdOutlinePersonOutline } from "react-icons/md";
import { BsBagDash, BsThreeDots } from "react-icons/bs";
import { HiDotsVertical, HiOutlineDocumentDuplicate } from "react-icons/hi";
import { LuFiles } from "react-icons/lu";
import { RiDeleteBin5Line, RiDeleteBin6Line } from "react-icons/ri";
import { AllJobsData, allJobsKanBanData } from "../../../dummy/Data";
import axios from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import Spinner from "../../../utils/spinner";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";
import NoDataFound from "../../../../assets/images/noData Found.png";
import { WorkflowOutlinesvg } from "../../../../assets/icon/workflowOutlinesvg";
import { AllJobDataTokanBan } from "../../../utils/function";

export const AllJobs = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("Card");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(AllJobsData);
  const [filterData, setFilterData] = useState([]);

  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const [anchorkb, setAnchorkb] = useState();
  const kbOpen = Boolean(anchorkb);
  const [anchorData, setAnchorData] = useState();
  const [loading, setLoading] = useState(true);
  const [showClonePopup, setShowClonePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [anchorjd, setAnchorjd] = useState();
  const [filterValue, setFilterValue] = useState("Active");
  const jdOpen = Boolean(anchorjd);
  const [filter, setFilter] = useState(false);
  const [tasks, setTasks] = useState(AllJobDataTokanBan(AllJobsData));

  const [anchorFilter, setAnchorFilter] = React.useState(null);
  const openFilter = Boolean(anchorFilter);

  const handleClickFilter = (event) => {
    setAnchorFilter(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setAnchorFilter(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleJd = (event) => {
    setAnchorjd(event.currentTarget);
  };
  const handleKd = (event) => {
    setAnchorkb(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorjd(null);
    setAnchorData(null);
    setAnchorkb(null);
  };

  const closePopup = () => {
    setShowClonePopup(false);
    setShowDeletePopup(false);
  };

  const handleJobEdit = () => {
    console.log(anchorData);
    navigate("/job/createJob", { state: anchorData.id });
  };

  const handleFilterDrop = (type) => {
    console.log(type);
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance
      .get(`/dropdata/${type}`)
      .then((response) => {
        setData(response?.data.data);
        setFilterData(response?.data.data);
        setLoading(false);
        //setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
    handleCloseFilter();
  };

  useEffect(() => {
    if (search === "") {
      setFilterData(data);
    } else {
      onSearchChange(search);
    }
  }, [search]);

  const onSearchChange = (name) => {
    let newArray = data?.filter((data) =>
      data?.jobName?.toLowerCase().includes(name?.toLowerCase())
    );
    setFilterData(newArray.length === 0 ? data : newArray);
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

  const handleStandard = () => {
    navigate("/job/outputofJobDescription", {
      state: { jobId: anchorData.id, jdAccess: true },
    });
  };

  const handleJobDescription = () => {
    navigate("/job/outputofJobDescription", {
      state: { jobId: anchorData.id, teamAccess: true },
    });
  };

  const handleIdentification = () => {
    navigate("/job/outputofJobDescription", {
      state: { jobId: anchorData.id, fullAccess: true },
    });
  };

  const handleFilter = (value) => {
    const user = JSON.parse(localStorage.getItem("token"));
    console.log(value);
    setFilterValue(value);
    setLoading(true);
    setFilter(true);
    axiosInstance
      .get(`/getFilterJobs?clientId=${user.userId}&filterValue=${value}`)
      .then((response) => {
        console.log(response.data);
        setData(response?.data.data);
        setFilterData(response?.data.data);
        setLoading(false);
        //setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
    handleCloseFilter();
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance
      .get(`/getAllJobs?clientId=${user.userId}&pageNo=1&pageSize=5`)
      .then((response) => {
        console.log(response.data);
        setData(response?.data.data);
        setTasks(AllJobDataTokanBan(response?.data.data));
        setFilterData(response?.data.data);
        setLoading(false);
        //setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

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

  const [hovered, setHovered] = useState(false);

  const filterOpts = [
    { label: "Closed", value: "Closed" },
    { label: "Active", value: "Active" },
    { label: "Past 90 Days", value: "Past 90 Days" },
    { label: "Past 365 Days", value: "Past 365 Days" },
    { label: "All", value: "All" },
  ];

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return order === "asc" ? -1 : 1;
    }
    if (b[orderBy] > a[orderBy]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
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

      // setTasks((prev) => ({
      //   ...prev,
      //   [source.droppableId]: {
      //     ...prev[source.droppableId],
      //     items,
      //   },
      // }));
      setTasks(updatedTasks);
      // onTaskChange(source.droppableId, destination.droppableId, movedItem);
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

      // setTasks((prev) => ({
      //   ...prev,
      //   [source.droppableId]: {
      //     ...prev[source.droppableId],
      //     items: sourceItems,
      //   },
      //   [destination.droppableId]: {
      //     ...prev[destination.droppableId],
      //     items: destinationItems,
      //   },
      // }));
      setTasks(updatedTasks);
      onTaskChange(source.droppableId, destination.droppableId, movedItem);
    }
  };

  const onTaskChange = (source, destination, data) => {
    console.log(source, destination, data);
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .post(`/taskChange`, { source, destination, data })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const jobStatusColor = (status) => {
    let color = "#ffffff";
    let bg = "#ffffff";

    if (status === "Interviewing") {
      color = "#FFA500";
      bg = "#FFA50020";
    }
    if (status === "Screening & Evaluation") {
      color = "#F3CA36";
      bg = "#F3CA3620";
    }
    if (status === "New Requirement") {
      color = "#5FAEDA";
      bg = "#5FAEDA20";
    }
    if (status === "Hiring Manager Review") {
      color = "#C89EC8";
      bg = "#C89EC820";
    }
    if (status === "Closed - Successful") {
      color = "#58A20F";
      bg = "#58A20F20";
    }
    if (status === "Offer Processing") {
      color = "#FE8D9E";
      bg = "#FE8D9E20";
    }

    return (
      <div
        style={{
          padding: "4px 8px",
          borderRadius: 20,
          backgroundColor: bg,
        }}>
        <p style={{ color: color, fontSize: 14 }}>{status}</p>
      </div>
    );
  };

  const sortedRows = filterData.sort((a, b) => sortComparator(a, b, orderBy));

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          {loading === true ? (
            <Spinner />
          ) : (
            <div>
              {filterData.length === 0 && filter === false ? (
                <div className="p-8 h-full">
                  <div>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 22,
                        fontWeight: 700,
                      }}>
                      All Jobs
                    </p>
                    <Button
                      size="small"
                      style={{
                        color: "#008080",
                        fontSize: 18,
                        textTransform: "none",
                      }}
                      onClick={() => {
                        navigate("/job/createJob", { state: { new: true } });
                      }}>
                      Add the first job to initiate the list
                    </Button>
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 14,
                        fontWeight: 400,
                      }}>
                      Start the process by selecting an option: use an existing
                      job template or create a new one job template.
                    </p>
                  </div>
                  <div className="flex justify-center items-center text-center h-full">
                    <div className="-mt-20">
                      <img src={NoDataFound} alt="No Data Found" />
                      <p
                        style={{
                          color: "#101828",
                          fontSize: 20,
                          fontWeight: 500,
                          marginTop: 25,
                        }}>
                        Jobs Summary
                      </p>
                      <Button
                        size="small"
                        style={{
                          color: "#008080",
                          fontSize: 18,
                          textTransform: "none",
                        }}
                        onClick={() => {
                          navigate("/job/createJob", { state: { new: true } });
                        }}>
                        Add the first job to initiate the list
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 h-full w-full">
                  <div>
                    <p
                      style={{
                        color: "#101828",
                        fontSize: 22,
                        fontWeight: 700,
                      }}>
                      Jobs Summary
                    </p>
                  </div>
                  <div className="py-5 grid grid-flow-col gap-8 justify-between items-center">
                    <div className="flex gap-5">
                      <ButtonGroup
                        style={{ color: "#008080" }}
                        aria-label="Medium-sized button group">
                        <Button
                          style={{
                            backgroundColor: "#F8F9FA",
                            color:
                              currentView === "WorkFlow"
                                ? "#008080"
                                : "#47546770",
                            borderColor: "#D0D5DD",
                            textTransform: "none",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                          startIcon={
                            <WorkflowOutlinesvg
                              COLOR={
                                currentView === "WorkFlow"
                                  ? "#008080"
                                  : "#47546770"
                              }
                            />
                          }
                          onClick={() => setCurrentView("WorkFlow")}>
                          Workflow View
                        </Button>
                        <Button
                          style={{
                            backgroundColor: "#F8F9FA",
                            color:
                              currentView === "Card" ? "#008080" : "#47546770",
                            borderColor: "#D0D5DD",
                            textTransform: "none",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                          startIcon={<HiOutlineSquares2X2 />}
                          onClick={() => setCurrentView("Card")}>
                          Board View
                        </Button>
                        <Button
                          style={{
                            backgroundColor: "#F8F9FA",
                            color:
                              currentView === "List" ? "#008080" : "#47546770",
                            borderColor: "#D0D5DD",
                            textTransform: "none",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                          startIcon={<IoMenu />}
                          onClick={() => setCurrentView("List")}>
                          List View
                        </Button>
                      </ButtonGroup>
                      <div>
                        <TextField
                          fullWidth
                          size="small"
                          placeholder="Search..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CiSearch />
                              </InputAdornment>
                            ),
                          }}
                          sx={{ minWidth: 412 }}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {/* <FormControl fullWidth sx={{ minWidth: 130 }}>
                        <InputLabel id="dropdown-label">Filter Jobs</InputLabel>
                        <Select
                          size="small"
                          label="dropdown-label"
                          value={filterValue}
                          onChange={handleFilter}>
                          <MenuItem value="Active">Active</MenuItem>
                          <MenuItem value="Closed">Closed</MenuItem>
                          <MenuItem value="90Days">Past 90 Days</MenuItem>
                          <MenuItem value="365Days">Past 365 Days</MenuItem>
                          <MenuItem value="All">All</MenuItem>
                        </Select>
                      </FormControl> */}
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={handleClickFilter}
                        style={{
                          color: "#252525",
                          borderColor: "#D0D5DD",
                          textTransform: "none",
                          fontSize: 14,
                          fontWeight: 500,
                          borderRadius: 8,
                          width: 94,
                          height: 38,
                        }}
                        startIcon={<IoFilter style={{ color: "#252525" }} />}>
                        Filter
                      </Button>
                      <Button
                        size="small"
                        onClick={() =>
                          navigate("/job/createJob", {
                            state: { new: true, showPopup: true },
                          })
                        }
                        style={{
                          color: "#008080",
                          background: "#EAF4F5",
                          textTransform: "none",
                          fontSize: 14,
                          fontWeight: 500,
                          borderRadius: 8,
                          width: 120,
                          height: 38,
                        }}>
                        Create New Job
                      </Button>
                    </div>
                  </div>
                  <div className="pb-5">
                    <p
                      style={{
                        color: "#475467",
                        fontSize: 20,
                        fontWeight: 600,
                      }}>
                      All Jobs
                    </p>

                    {currentView === "WorkFlow" && (
                      <div className="overflow-x-scroll w-[1210px]">
                        <DragDropContext onDragEnd={onDragEnd}>
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                            }}>
                            {Object.entries(tasks).map(([key, column]) => (
                              <Droppable droppableId={key} key={key}>
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    style={{
                                      margin: "0 8px",
                                      padding: "8px",
                                      minWidth: "280px",
                                      maxWidth: "380px",
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
                                        index={index}>
                                        {(provided, snapshot) => (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                              borderWidth: 1,
                                              borderColor: "#E2E8F0",
                                              backgroundColor:
                                                snapshot.isDragging
                                                  ? "#CFC8C980"
                                                  : "#ffffff",

                                              borderRadius: 8,
                                              marginTop: 10,
                                              ...provided.draggableProps.style,
                                            }}>
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
                                                    {item?.jobName}
                                                  </p>
                                                  <p
                                                    style={{
                                                      color: "#252C32",
                                                      fontSize: 10,
                                                    }}>
                                                    {item?.companyName}
                                                  </p>
                                                </div>
                                              </div>
                                              <div className="w-6 h-6 flex justify-center items-center border border-[#DDDDDD] rounded-md">
                                                <IconButton onClick={handleKd}>
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
                                                }}>
                                                Created Date: {item?.created}
                                              </p>
                                              <p
                                                style={{
                                                  color: "#787486",
                                                  fontSize: 10,
                                                }}>
                                                Job Type: {item?.typeOfHire[0]}
                                              </p>
                                              <p
                                                style={{
                                                  color: "#787486",
                                                  fontSize: 10,
                                                }}>
                                                Application Sub-status:{" "}
                                                {item?.jobSubStatus}
                                              </p>
                                            </div>
                                            <div className="mx-2 border-b border-[#E2E8F0]" />

                                            <div className="flex justify-between p-2">
                                              <p
                                                style={{
                                                  color: "#5FAEDA",
                                                  fontSize: 10,
                                                }}>
                                                Total: {item?.total}
                                              </p>
                                              <p
                                                style={{
                                                  color: "#800080",
                                                  fontSize: 10,
                                                }}>
                                                New: {item?.new}
                                              </p>
                                              <p
                                                style={{
                                                  color: "#FFA500",
                                                  fontSize: 10,
                                                }}>
                                                Active: {item?.active}
                                              </p>
                                              <p
                                                style={{
                                                  color: "#7FB27F",
                                                  fontSize: 10,
                                                }}>
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
                    )}

                    {currentView === "Card" && (
                      <div className="grid grid-cols-3 gap-5 py-3">
                        {filterData?.map((row, index) => {
                          return (
                            <div key={index}>
                              <Card sx={{ borderRadius: 3, px: 1 }}>
                                <CardContent>
                                  <div className="flex justify-between gap-2">
                                    <div className="flex gap-2">
                                      <p
                                        style={{
                                          color: "#101828",
                                          fontSize: 16,
                                          fontWeight: 500,
                                        }}>
                                        {row?.jobName}
                                      </p>
                                      {row?.new ? (
                                        <p
                                          style={{
                                            color: "#7D5AE2",
                                            backgroundColor: "#7D5AE210",
                                            fontSize: 16,
                                            fontWeight: 500,
                                            borderRadius: 3,
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                            paddingBottom: 4,
                                          }}>
                                          New post
                                        </p>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                    <div>
                                      <IconButton
                                        onClick={(e) => {
                                          handleClick(e);
                                          setAnchorData(row);
                                        }}>
                                        <HiDotsVertical
                                          style={{ color: "#D9D9D9" }}
                                        />
                                      </IconButton>
                                    </div>
                                  </div>
                                  <div className="flex gap-3 items-center">
                                    <div className="flex gap-1 items-center">
                                      <GrLocation
                                        style={{ color: "#47546780" }}
                                      />
                                      <p
                                        style={{
                                          color: "#47546770",
                                          fontSize: 14,
                                        }}>
                                        {row?.location}
                                      </p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                      <IoTimeOutline
                                        style={{ color: "#47546780" }}
                                      />
                                      {/* {row?.typeOfHire.map((data, index) => {
                                    return ( */}
                                      <p
                                        key={index}
                                        style={{
                                          color: "#47546770",
                                          fontSize: 14,
                                          paddingRight: 5,
                                          borderRightWidth:
                                            index + 1 ===
                                            row?.typeOfHire?.length
                                              ? 0
                                              : 2,
                                        }}>
                                        {row.compensation}
                                      </p>
                                      {/* );
                                  })} */}
                                    </div>
                                  </div>
                                  <div className="pt-3 flex gap-3 rounded-lg">
                                    <div className="w-12 h-12">
                                      <img
                                        src={row?.image}
                                        alt="company logo"
                                        style={{ borderRadius: 8 }}
                                      />
                                    </div>
                                    <div className="grid grid-flow-row gap-1">
                                      <p
                                        style={{
                                          color: "#475467",
                                          fontSize: 14,
                                        }}>
                                        {row?.companyName}
                                      </p>
                                      <p
                                        style={{
                                          color: "#47546770",
                                          fontSize: 12,
                                          fontWeight: 500,
                                        }}>
                                        Hiring Manger :{" "}
                                        <span style={{ color: "#101828" }}>
                                          {row?.hiringManager}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </CardContent>
                                <Divider />
                                <CardActions>
                                  {row?.jobProgress < 100 ? (
                                    <div className="w-full ">
                                      <div className="flex justify-between pb-1">
                                        <p
                                          style={{
                                            color: "#121212",
                                            fontSize: 12,
                                            fontWeight: 500,
                                          }}>
                                          Job Progress
                                        </p>
                                        <p
                                          style={{
                                            color: "#121212",
                                            fontSize: 12,
                                            fontWeight: 500,
                                          }}>
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
                                          endIcon={<MdOutlineArrowOutward />}>
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
                                          }}>
                                          Job Progress
                                        </p>
                                        <p
                                          style={{
                                            color: "#121212",
                                            fontSize: 12,
                                            fontWeight: 500,
                                          }}>
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
                                          endIcon={<MdOutlineArrowOutward />}>
                                          More Details
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </CardActions>
                              </Card>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {currentView === "List" && (
                      <div className="py-3">
                        <Box sx={{ width: "100%" }}>
                          <Paper sx={{ width: "100%", mb: 2 }}>
                            <TableContainer sx={{ maxHeight: 500 }}>
                              <Table stickyHeader>
                                <TableHead>
                                  <TableRow>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      <TableSortLabel
                                        active={orderBy === "jobName"}
                                        direction={
                                          orderBy === "jobName" ? order : "asc"
                                        }
                                        onClick={() =>
                                          handleRequestSort("jobName")
                                        }>
                                        Job Name
                                      </TableSortLabel>
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      Department
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      Created
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      Job Type
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      Job Status
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      Job Sub - Status
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      Total
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      New
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      Active
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      Hired
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      Job Description
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      Download Pdf
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      sx={{
                                        bgcolor: "#F8F9FA",
                                        color: "#101828",
                                        border: 1,
                                        borderColor: "#D0D5DD50",
                                      }}>
                                      Actions
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {sortedRows?.map((row, index) => {
                                    return (
                                      <TableRow key={index}>
                                        <TableCell
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          {row?.jobName}
                                        </TableCell>
                                        <TableCell
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          {row?.location}
                                        </TableCell>
                                        <TableCell
                                          sx={{
                                            color: "#475467",
                                            padding: 0,
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          {row.created}
                                        </TableCell>
                                        <TableCell
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                            display: "flex",
                                            gap: 2,
                                          }}>
                                          {row?.typeOfHire?.map((time) => {
                                            return (
                                              <p
                                                style={{
                                                  color:
                                                    time === "Part Time"
                                                      ? "#0862CE"
                                                      : "#8314C7",
                                                  fontSize: 14,
                                                  fontWeight: 500,
                                                  paddingLeft: 10,
                                                  paddingRight: 10,
                                                  paddingTop: 5,
                                                  paddingBottom: 5,
                                                  backgroundColor:
                                                    time === "Part Time"
                                                      ? "#F1F7FF"
                                                      : "#FBF1FF",
                                                }}
                                                key={time}>
                                                {time}
                                              </p>
                                            );
                                          })}
                                        </TableCell>
                                        <TableCell
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          {jobStatusColor(row?.jobStatus)}
                                        </TableCell>
                                        <TableCell
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          {row?.jobSubStatus}
                                        </TableCell>
                                        <TableCell
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          {row?.total}
                                        </TableCell>
                                        <TableCell
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          {row?.new}
                                        </TableCell>
                                        <TableCell
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          {row?.active}
                                        </TableCell>
                                        <TableCell
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          {row?.hired}
                                        </TableCell>
                                        <TableCell
                                          align="center"
                                          padding="none"
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          <IconButton
                                            onClick={(e) => {
                                              handleJd(e);
                                              setAnchorData(row);
                                            }}>
                                            <HiDotsVertical
                                              style={{ color: "#D9D9D9" }}
                                            />
                                          </IconButton>
                                        </TableCell>
                                        <TableCell
                                          align="center"
                                          padding="none"
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          <Button
                                            style={{
                                              color: "#5FAEDA",
                                              fontSize: 14,
                                              textTransform: "none",
                                            }}
                                            onClick={() => {}}>
                                            Download
                                          </Button>
                                        </TableCell>
                                        <TableCell
                                          align="center"
                                          padding="none"
                                          sx={{
                                            color: "#475467",
                                            border: 1,
                                            borderColor: "#D0D5DD50",
                                          }}>
                                          <IconButton
                                            onClick={(e) => {
                                              handleClick(e);
                                              setAnchorData(row);
                                            }}>
                                            <HiDotsVertical
                                              style={{ color: "#D9D9D9" }}
                                            />
                                          </IconButton>
                                        </TableCell>
                                      </TableRow>
                                    );
                                  })}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Paper>
                        </Box>
                      </div>
                    )}

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
                      TransitionComponent={Fade}>
                      <MenuItem onClick={handleJobEdit}>
                        <div className="flex gap-1 items-center">
                          <TbEdit style={{ color: "#5FAEDA", fontSize: 14 }} />
                          <p
                            style={{
                              color: "#5FAEDA",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Edit
                          </p>
                        </div>
                      </MenuItem>
                      <MenuItem onClick={() => setShowDeletePopup(true)}>
                        <div className="flex gap-1 items-center">
                          <RiDeleteBin6Line
                            style={{ color: "#E05880", fontSize: 14 }}
                          />
                          <p
                            style={{
                              color: "#E05880",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Delete
                          </p>
                        </div>
                      </MenuItem>
                      <MenuItem onClick={() => setShowClonePopup(true)}>
                        <div className="flex gap-1 items-center">
                          <LuFiles style={{ color: "#58A20F", fontSize: 14 }} />
                          <p
                            style={{
                              color: "#58A20F",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Clone
                          </p>
                        </div>
                      </MenuItem>
                    </Menu>

                    {/*Filter menu */}
                    <Menu
                      id="filter-menu"
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorFilter}
                      open={openFilter}
                      onClose={handleCloseFilter}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      TransitionComponent={Fade}>
                      <MenuItem
                        onClick={() => {
                          handleFilter("Active");
                        }}>
                        <p
                          style={{
                            color: "#171717",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          Active
                        </p>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleFilter("Closed");
                        }}>
                        <p
                          style={{
                            color: "#171717",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          Closed
                        </p>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleFilter("90Days");
                        }}>
                        <p
                          style={{
                            color: "#171717",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          90Days
                        </p>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleFilter("365Days");
                        }}>
                        <p
                          style={{
                            color: "#171717",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          365Days
                        </p>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleFilter("All");
                        }}>
                        <p
                          style={{
                            color: "#171717",
                            fontSize: 14,
                            fontWeight: 500,
                          }}>
                          All
                        </p>
                      </MenuItem>
                    </Menu>

                    {/* job description menu */}
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorjd}
                      open={jdOpen}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      TransitionComponent={Fade}>
                      <MenuItem onClick={handleStandard}>
                        <div className="flex gap-1 items-center">
                          <IoBagRemoveOutline
                            style={{ color: "#5FAEDA", fontSize: 22 }}
                          />
                          <p
                            style={{
                              color: "#5FAEDA",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Job Description (Standard)
                          </p>
                        </div>
                      </MenuItem>
                      <MenuItem onClick={handleJobDescription}>
                        <div className="flex gap-1 items-center">
                          <MdOutlinePersonOutline
                            style={{ color: "#58A20F", fontSize: 22 }}
                          />
                          <p
                            style={{
                              color: "#58A20F",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Job Description (Recruiter)
                          </p>
                        </div>
                      </MenuItem>
                      <MenuItem onClick={handleIdentification}>
                        <div className="flex gap-1 items-center">
                          <PiUserFocus
                            style={{ color: "#FF6347", fontSize: 22 }}
                          />
                          <p
                            style={{
                              color: "#FF6347",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Job Identification
                          </p>
                        </div>
                      </MenuItem>
                    </Menu>

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
                      TransitionComponent={Fade}>
                      <MenuItem onClick={() => {}}>
                        <div className="flex gap-2 items-center">
                          <BsBagDash
                            style={{ color: "#FFA412", fontSize: 16 }}
                          />
                          <p
                            style={{
                              color: "#FFA412",
                              fontSize: 12,
                              fontWeight: 500,
                            }}>
                            Job
                          </p>
                        </div>
                      </MenuItem>
                      <MenuItem onClick={() => {}}>
                        <div className="flex gap-2 items-center">
                          <FiEdit style={{ color: "#5FAEDA", fontSize: 16 }} />
                          <p
                            style={{
                              color: "#5FAEDA",
                              fontSize: 12,
                              fontWeight: 500,
                            }}>
                            Edit
                          </p>
                        </div>
                      </MenuItem>
                      <MenuItem onClick={() => {}}>
                        <div className="flex gap-2 items-center">
                          <RiDeleteBin5Line
                            style={{ color: "#E05880", fontSize: 16 }}
                          />
                          <p
                            style={{
                              color: "#E05880",
                              fontSize: 12,
                              fontWeight: 500,
                            }}>
                            Delete
                          </p>
                        </div>
                      </MenuItem>

                      <MenuItem onClick={() => {}}>
                        <div className="flex gap-2 items-center">
                          <HiOutlineDocumentDuplicate
                            style={{ color: "#58A20F", fontSize: 16 }}
                          />
                          <p
                            style={{
                              color: "#58A20F",
                              fontSize: 12,
                              fontWeight: 500,
                            }}>
                            Clone
                          </p>
                        </div>
                      </MenuItem>
                    </Menu>

                    {/* Job Clone popup */}
                    <Dialog open={showClonePopup} onClose={closePopup}>
                      <DialogTitle>Confirm Clone</DialogTitle>
                      <IconButton
                        onClick={closePopup}
                        style={{ position: "absolute", top: 10, right: 10 }}>
                        <IoIosCloseCircleOutline />
                      </IconButton>
                      <Divider />
                      <DialogContent>
                        <div className="grid grid-flow-row gap-2">
                          <p
                            style={{
                              color: "#344054",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Do you want to clone the Job `{anchorData?.jobName}`
                          </p>
                        </div>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={closePopup}
                          variant="outlined"
                          style={{ color: "#475467", borderColor: "#D0D5DD" }}>
                          cancel
                        </Button>
                        <Button
                          onClick={handleJobClone}
                          variant="contained"
                          style={{
                            color: "#ffffff",
                            backgroundColor: "#008080",
                          }}>
                          clone
                        </Button>
                      </DialogActions>
                    </Dialog>

                    {/* delete job popup */}
                    <Dialog open={showDeletePopup} onClose={closePopup}>
                      <DialogTitle>Confirm Clone</DialogTitle>
                      <IconButton
                        onClick={closePopup}
                        style={{ position: "absolute", top: 10, right: 10 }}>
                        <IoIosCloseCircleOutline />
                      </IconButton>
                      <Divider />
                      <DialogContent>
                        <div className="grid grid-flow-row gap-2">
                          <p
                            style={{
                              color: "#344054",
                              fontSize: 14,
                              fontWeight: 500,
                            }}>
                            Do you want to clone the Job `{anchorData?.jobName}`
                          </p>
                        </div>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={closePopup}
                          variant="outlined"
                          style={{ color: "#475467", borderColor: "#D0D5DD" }}>
                          cancel
                        </Button>
                        <Button
                          onClick={handleJobDelete}
                          variant="contained"
                          style={{ color: "#ffffff", backgroundColor: "red" }}>
                          delete
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
