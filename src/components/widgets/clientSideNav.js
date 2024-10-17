import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse, List } from "@mui/material";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logoNew from "../../assets/images/xenrecruit.png";
import { DashboardSvg } from "../../assets/icon/dashboardsvg";
import { AssesmentSvg } from "../../assets/icon/assesmentsvg";
import { AuthorizedSvg } from "../../assets/icon/authorizedsvg";
import { JobSvg } from "../../assets/icon/jobsvg";
import { TemplateSvg } from "../../assets/icon/templatesvg";
import { FiUsers } from "react-icons/fi";

const drawerWidth = 256;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const ClientSideNav = ({ openTemplate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [openSecondLevel, setOpenSecondLevel] = React.useState(false);
  const [showAssesment, setShowAssesment] = React.useState(false);
  const [showAcordian, setShowAcordian] = React.useState(
    openTemplate ? true : false
  );
  const [showAcordianAssessment, setShowAcordianAssessment] = React.useState(
    openTemplate ? true : false
  );

  const [showAcordianJobsAdmin, setShowAcordianJobsAdmin] = React.useState(
    openTemplate ? true : false
  );

  const handleDrawer = () => {
    setOpen(!open);
  };

  const currentState = location.pathname;

  const handleClickSecondLevel = () => {
    setOpenSecondLevel(!openSecondLevel);
  };

  return (
    <>
      <div
        id="navbarIcon"
        className=" justify-center z-10 flex w-6 mt-16 overflow-visible shadow-xl rounded-full fixed h-6"
        style={{
          marginLeft: open ? 242 : 53,
          backgroundColor: "#A3A3A3",
          opacity: 0.6,
        }}
      >
        <IconButton onClick={handleDrawer}>
          {open ? (
            <FaAngleLeft style={{ color: "#ffffff", fontSize: 20 }} />
          ) : (
            <FaAngleRight style={{ color: "#ffffff", fontSize: 20 }} />
          )}
        </IconButton>
      </div>
      <Drawer variant="permanent" open={open} className="z-0">
        <DrawerHeader sx={{ justifyContent: "center" }}>
          <img
            src={logoNew}
            alt="logo"
            style={{ width: 180, marginTop: "50px" }}
          />
        </DrawerHeader>
        <div className="pt-8 pb-8">
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                mt: 4,
                mb: 1,
                px: 1,
                borderRadius: 2,
                bgcolor:
                  currentState === "/client/dashboard" ? "#008080" : "#ffffff",
                color:
                  currentState === "/client/dashboard" ? "#ffffff" : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/client/dashboard");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardSvg
                  COLOR={
                    currentState === "/client/dashboard" ? "#ffffff" : "#475467"
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary={"Dashboard"}
                primaryTypographyProps={{
                  color:
                    currentState === "/client/dashboard"
                      ? "#ffffff"
                      : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                my: 1,
                px: 1,
                borderRadius: 2,
                bgcolor: currentState.includes("job/") ? "#008080" : "#ffffff",
                color: currentState.includes("job/") ? "#ffffff" : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/job/allJobs");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}
              >
                <JobSvg
                  COLOR={currentState.includes("job/") ? "#ffffff" : "#475467"}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Jobs"}
                primaryTypographyProps={{
                  color: currentState.includes("job/") ? "#ffffff" : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                my: 1,
                px: 1,
                bgcolor: currentState.includes("templates")
                  ? "#008080"
                  : "#ffffff",
                color: currentState.includes("templates")
                  ? "#ffffff"
                  : "#475467",
                borderRadius: 2,
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                // navigate("/templates");
                setShowAcordian(!showAcordian);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}
              >
                <TemplateSvg
                  COLOR={
                    currentState.includes("templates") ? "#ffffff" : "#475467"
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary={"Templates"}
                primaryTypographyProps={{
                  color: currentState.includes("templates")
                    ? "#ffffff"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {!showAcordian ? (
                <IoIosArrowUp
                  style={{
                    color: currentState.includes("templates")
                      ? "#ffffff"
                      : "#475467",
                  }}
                />
              ) : (
                <IoIosArrowDown
                  style={{
                    color: currentState.includes("templates")
                      ? "#ffffff"
                      : "#475467",
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
          {/* collapse */}
          <Collapse in={showAcordian} timeout="auto" unmountOnExit>
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/templates/jobTemplate")}
            >
              <p
                style={{
                  color: currentState.includes("jobTemplate")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}
              >
                Job Templates
              </p>
            </div>
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/templates/workValueTemplate")}
            >
              <p
                style={{
                  color: currentState.includes("workValueTemplate")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}
              >
                Value Templates
              </p>
            </div>
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/templates/teamTemplate")}
            >
              <p
                style={{
                  color: currentState.includes("teamTemplate")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}
              >
                Team Templates
              </p>
            </div>
            {/* <div
              className="pl-16 py-2"
              onClick={() => navigate("/templates/jobPreferenceTemplate")}>
              <p
                style={{
                  color: currentState.includes("jobPreferenceTemplate")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}>
                Job Preference Template
              </p>
            </div> */}
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/templates/icp")}
            >
              <p
                style={{
                  color: currentState.includes("/icp") ? "#008080" : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}
              >
                Ideal Candidate Persona
              </p>
            </div>
          </Collapse>

          {/* Assessment new */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                my: 1,
                px: 1,
                borderRadius: 2,
                bgcolor:
                  currentState === "/clientAssesmentForm"
                    ? "#008080"
                    : "#ffffff",
                color:
                  currentState === "/clientAssesmentForm"
                    ? "#ffffff"
                    : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                setShowAssesment(!showAssesment);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}
              >
                <AssesmentSvg
                  COLOR={
                    currentState === "/clientAssesmentForm"
                      ? "#ffffff"
                      : "#475467"
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary={"Assessments"}
                onClick={() => navigate("/clientAssesmentForm", { state: 1 })}
                primaryTypographyProps={{
                  color:
                    currentState === "/clientAssesmentForm"
                      ? "#ffffff"
                      : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {showAssesment ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </ListItemButton>
          </ListItem>
          {/* Assessment collapse new*/}
          <Collapse in={showAssesment} timeout="auto" unmountOnExit>
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/clientAssesmentForm", { state: 1 })}
            >
              <p
                style={{
                  color: "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}
              >
                All - Assessments
              </p>
            </div>
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/clientAssesmentForm", { state: 2 })}
            >
              <p
                style={{
                  color: "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}
              >
                Self - Assessments
              </p>
            </div>
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/clientAssesmentForm", { state: 3 })}
            >
              <p
                style={{
                  color: "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}
              >
                Clients - Assessment
              </p>
            </div>
          </Collapse>

          {/* Assessment old */}
          {/* <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                my: 1,
                px: 1,
                borderRadius: 2,
                bgcolor: currentState.includes("assesment")
                  ? "#008080"
                  : "#ffffff",
                color: currentState.includes("assesment")
                  ? "#ffffff"
                  : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                setShowAcordianAssessment(!showAcordianAssessment);
                // navigate("/assessmentsList");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}
              >
                <AssesmentSvg
                  COLOR={
                    currentState.includes("assesment") ? "#ffffff" : "#475467"
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary={"Assessments"}
                primaryTypographyProps={{
                  color: currentState.includes("assesment")
                    ? "#ffffff"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {!showAcordianAssessment ? (
                <IoIosArrowUp
                  style={{
                    color: currentState.includes("templates")
                      ? "#ffffff"
                      : "#475467",
                  }}
                />
              ) : (
                <IoIosArrowDown
                  style={{
                    color: currentState.includes("templates")
                      ? "#ffffff"
                      : "#475467",
                  }}
                />
              )}
            </ListItemButton>
          </ListItem> */}
          {/* Assessment collapse old */}
          {/* <Collapse in={showAcordianAssessment} timeout="auto" unmountOnExit>
            <div
              className="pl-16 py-2"
              onClick={() =>
                navigate(
                  "/assessment/selfAssessments/rating-aggregate-dimensions"
                )
              }
            >
              <p
                style={{
                  color: currentState.includes("all-assessments")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                  cursor: "pointer",
                }}
              >
                All- Assessment
              </p>
            </div>
            <div
              className="pl-16 py-2"
              onClick={() =>
                navigate("/assessment/selfAssessments/rating-aggregate")
              }
            >
              <p
                style={{
                  color: currentState.includes("self-assessments")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                  cursor: "pointer",
                }}
              >
                Self- Assessments
              </p>
            </div>
            <div
              className="pl-16 py-2"
              onClick={() =>
                navigate("/assessment/selfAssessments/rating-style")
              }
            >
              <p
                style={{
                  color: currentState.includes("clients-assessments")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                  cursor: "pointer",
                }}
              >
                Clients- Assessments
              </p>
            </div>
          </Collapse> */}

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                my: 1,
                px: 1,
                borderRadius: 2,
                bgcolor:
                  currentState === "/clientAssignedCandidates"
                    ? "#008080"
                    : "#ffffff",
                color:
                  currentState === "/clientAssignedCandidates"
                    ? "#ffffff"
                    : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/clientAssignedCandidates");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiUsers
                  style={{
                    color:
                      currentState === "/clientAssignedCandidates"
                        ? "#ffffff"
                        : "#475467",
                    fontSize: 20,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Candidates"}
                primaryTypographyProps={{
                  color:
                    currentState === "/clientAssignedCandidates"
                      ? "#ffffff"
                      : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                my: 1,
                px: 1,
                borderRadius: 2,
                bgcolor:
                  currentState === "/references/candidatelist"
                    ? "#008080"
                    : "#ffffff",
                color:
                  currentState === "/references/candidatelist"
                    ? "#ffffff"
                    : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/references/candidatelist");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiUsers
                  style={{
                    color:
                      currentState === "/references/candidatelist"
                        ? "#ffffff"
                        : "#475467",
                    fontSize: 20,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"References"}
                primaryTypographyProps={{
                  color:
                    currentState === "/references/candidatelist"
                      ? "#ffffff"
                      : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                my: 1,
                px: 1,
                borderRadius: 2,
                bgcolor:
                  currentState === "/externalHelp" ? "#008080" : "#ffffff",
                color: currentState === "/externalHelp" ? "#ffffff" : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/externalHelp");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}
              >
                <AiOutlineQuestionCircle
                  style={{
                    color:
                      currentState === "/externalHelp" ? "#ffffff" : "#475467",
                    fontSize: 22,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"External Staffing Service"}
                primaryTypographyProps={{
                  color:
                    currentState === "/externalHelp" ? "#ffffff" : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                my: 1,
                px: 1,
                borderRadius: 2,
                bgcolor: currentState === "/settings" ? "#008080" : "#ffffff",
                color: currentState === "/settings" ? "#ffffff" : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/settings");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}
              >
                <LuSettings
                  style={{
                    color: currentState === "/settings" ? "#ffffff" : "#475467",
                    fontSize: 22,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Settings"}
                primaryTypographyProps={{
                  color: currentState === "/settings" ? "#ffffff" : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </div>
      </Drawer>
    </>
  );
};
