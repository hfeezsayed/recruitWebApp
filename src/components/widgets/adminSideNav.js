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
import { LuCalendarSearch } from "react-icons/lu";
import { RiCalculatorLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
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

export const AdminSideNav = ({ openTemplate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [openSecondLevel, setOpenSecondLevel] = React.useState(false);
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
                minHeight: 30,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                mt: 2,
                mb: 1,
                px: 1,
                borderRadius: 2,
                bgcolor: currentState === "/admin" ? "#008080" : "#ffffff",
                color: currentState === "/admin" ? "#ffffff" : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/admin");
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
                  COLOR={currentState === "admin" ? "#ffffff" : "#475467"}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Dashboard"}
                primaryTypographyProps={{
                  color: currentState === "/admin" ? "#ffffff" : "#475467",
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
                minHeight: 30,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                mt: 2,
                mb: 1,
                px: 1,
                borderRadius: 2,
                bgcolor:
                  currentState === "/clientManagement" ? "#008080" : "#ffffff",
                color:
                  currentState === "/clientManagement" ? "#ffffff" : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/clientManagement");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}
              >
                <RiCalculatorLine
                  COLOR={
                    currentState === "clientManagement" ? "#ffffff" : "#475467"
                  }
                  fontSize={20}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Clients"}
                primaryTypographyProps={{
                  color:
                    currentState === "/clientManagement"
                      ? "#ffffff"
                      : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          {/* JOBS ADMIN CODE START */}

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 30,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                my: 1,
                px: 1,
                borderRadius: 2,
                bgcolor: currentState.includes("jobsadmin")
                  ? "#008080"
                  : "#ffffff",
                color: currentState.includes("jobsadmin")
                  ? "#ffffff"
                  : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                setShowAcordianJobsAdmin(!showAcordianJobsAdmin);
                // navigate("/dashboardPanel");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                <LuCalendarSearch
                  COLOR={
                    currentState.includes("jobsadmin") ? "#ffffff" : "#475467"
                  }
                  fontSize={20}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Jobs"}
                primaryTypographyProps={{
                  color: currentState.includes("jobsadmin")
                    ? "#ffffff"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {!showAcordianJobsAdmin ? (
                <IoIosArrowUp
                  style={{
                    color: currentState.includes("jobsadmin")
                      ? "#ffffff"
                      : "#475467",
                  }}
                />
              ) : (
                <IoIosArrowDown
                  style={{
                    color: currentState.includes("jobsadmin")
                      ? "#ffffff"
                      : "#475467",
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
          {/* collapse */}
          <Collapse in={showAcordianJobsAdmin} timeout="auto" unmountOnExit>
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/jobs-admin/jobs")}
            >
              <p
                style={{
                  color: currentState.includes("job-istings")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                  cursor: "pointer",
                }}
                onClick={handleClickSecondLevel}
                className="flex justify-between items-center"
              >
                Jobs
                {/* <span className="pr-7">
                  {openSecondLevel ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span> */}
              </p>
            </div>
            {/* <Collapse in={openSecondLevel} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className="sub-level-menu ">
                <ListItem>
                  <ListItemText primary="Sourcing Help" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Onboarding Help" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Full Service Staff Help" />
                </ListItem>
              </List>
            </Collapse> */}
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/client/jobs-admin/applicant")}
            >
              <p
                style={{
                  color: currentState.includes("applicant")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                  cursor: "pointer",
                }}
              >
                Applicant
              </p>
            </div>
          </Collapse>

          {/* JOBS ADMIN CODE END */}

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 30,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                mt: 2,
                mb: 1,
                px: 1,
                borderRadius: 2,
                bgcolor:
                  currentState === "/assignCandidate" ? "#008080" : "#ffffff",
                color:
                  currentState === "/assignCandidate" ? "#ffffff" : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/assignCandidate");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}
              >
                <TbUsers
                  COLOR={
                    currentState === "assignCandidate" ? "#ffffff" : "#475467"
                  }
                  fontSize={20}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Candidates"}
                primaryTypographyProps={{
                  color:
                    currentState === "/assignCandidate" ? "#ffffff" : "#475467",
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
