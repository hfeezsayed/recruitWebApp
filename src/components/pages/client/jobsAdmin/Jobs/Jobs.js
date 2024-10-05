import React, { useState, useEffect } from "react";
//Navbar
import { ClientSideNav } from "../../../../widgets/clientSideNav";
import { TopNav } from "../../../../widgets/topNav";
import "./Jobs.css";
//MUI start
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ButtonGroup, Button, InputAdornment, TextField } from "@mui/material";
//icons
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoMenu, IoFilter } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
//components
import WorkflowView from "./WorkflowView/WorkflowView";
import BoardView from "./BoardView/BoardView";
import ListView from "./ListView/ListVIew";

const Jobs = () => {
  const [currentView, setCurrentView] = useState("WorkFlow");
  const [search, setSearch] = useState("");

  return (
    <div className="flex">
      <ClientSideNav />
      <div className="w-full min-h-screen side-bar pr-3">
        <div className="jobs-top-nav">
          <TopNav />
        </div>
        <div className="jobs-listing pt-8 px-4 pb-8">
          <div className="jobs-header-section">
            <h2 className="text-2xl pt-4 font-bold main-black">Jobs Summary</h2>
            <div className="pt-8 pb-11">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} className="flex justify-between">
                  <Grid item xs={{ minWidth: 390 }}>
                    <ButtonGroup
                      style={{ color: "#008080" }}
                      aria-label="Medium-sized button group"
                    >
                      <Button
                        style={{
                          backgroundColor:
                            currentView === "WorkFlow" ? "#f8f9fa" : "#ffffff",
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
                          <FaNetworkWired
                            COLOR={
                              currentView === "WorkFlow"
                                ? "#008080"
                                : "#47546770"
                            }
                          />
                        }
                        onClick={() => setCurrentView("WorkFlow")}
                      >
                        Workflow View
                      </Button>
                      <Button
                        style={{
                          backgroundColor:
                            currentView === "Board" ? "#f8f9fa" : "#ffffff",
                          color:
                            currentView === "Board" ? "#008080" : "#47546770",
                          borderColor: "#D0D5DD",
                          textTransform: "none",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                        startIcon={<HiOutlineSquares2X2 />}
                        onClick={() => setCurrentView("Board")}
                      >
                        Board View
                      </Button>
                      <Button
                        style={{
                          backgroundColor:
                            currentView === "List" ? "#f8f9fa" : "#ffffff",
                          color:
                            currentView === "List" ? "#008080" : "#47546770",
                          borderColor: "#D0D5DD",
                          textTransform: "none",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                        startIcon={<IoMenu />}
                        onClick={() => setCurrentView("List")}
                      >
                        List View
                      </Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid item xs={4}>
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
                        sx={{ minWidth: 300 }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="flex justify-between">
                      <Button
                        size="small"
                        variant="outlined"
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
                        startIcon={<IoFilter style={{ color: "#252525" }} />}
                      >
                        Filter
                      </Button>
                      <Button
                        size="small"
                        style={{
                          color: "#008080",
                          background: "#EAF4F5",
                          textTransform: "none",
                          fontSize: 14,
                          fontWeight: 500,
                          borderRadius: 8,
                          width: 145,
                          height: 38,
                        }}
                      >
                        Create New Job
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
          <div className="">
            {/* Workflow View Start */}
            {currentView === "WorkFlow" && <WorkflowView />}
            {/* Board View Start */}
            {currentView === "Board" && <BoardView />}
            {/* List View Start */}
            {currentView === "List" && <ListView />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
