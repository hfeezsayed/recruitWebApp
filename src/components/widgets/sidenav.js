import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse } from "@mui/material";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { DashboardSvg } from "../../assets/icon/dashboardsvg";
import { AssesmentSvg } from "../../assets/icon/assesmentsvg";
import { AuthorizedSvg } from "../../assets/icon/authorizedsvg";
import { JobSvg } from "../../assets/icon/jobsvg";

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

export const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [showAcordian, setShowAcordian] = React.useState(false);
  const [showAssesment, setShowAssesment] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const currentState = location.pathname;

  return (
    <>
      <div
        id="navbarIcon"
        className=" justify-center z-10 flex w-6 mt-16 overflow-visible shadow-xl rounded-full fixed h-6"
        style={{
          marginLeft: open ? 242 : 53,
          backgroundColor: "#A3A3A3",
          opacity: 0.6,
        }}>
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
          <img src={logo} alt="logo" />
          {open && (
            <p style={{ color: "#000000", fontSize: 25, marginLeft: 5 }}>
              Xenhire
            </p>
          )}
        </DrawerHeader>
        <div>
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
                bgcolor: currentState === "/candidate" ? "#008080" : "#ffffff",
                color: currentState === "/candidate" ? "#ffffff" : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/candidate");
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}>
                <DashboardSvg
                  COLOR={currentState === "/candidate" ? "#ffffff" : "#475467"}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Dashboard"}
                primaryTypographyProps={{
                  color: currentState === "/candidate" ? "#ffffff" : "#475467",
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
                bgcolor: currentState.includes("digitalTalentProfile")
                  ? "#008080"
                  : "#ffffff",
                color: currentState.includes("digitalTalentProfile")
                  ? "#ffffff"
                  : "#475467",
                borderRadius: 2,
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/digitalTalentProfile")
                setShowAcordian(!showAcordian);
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}>
                <AssesmentSvg
                  COLOR={
                    currentState.includes("digitalTalentProfile")
                      ? "#ffffff"
                      : "#475467"
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary={"Digital Talent Profile"}
                primaryTypographyProps={{
                  color: currentState.includes("digitalTalentProfile")
                    ? "#ffffff"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {showAcordian ? (
                
                <IoIosArrowUp
                  style={{
                    color: currentState.includes("digitalTalentProfile")
                      ? "#ffffff"
                      : "#475467",
                  }}
                />
              ) : (
                <IoIosArrowDown
                  style={{
                    color: currentState.includes("digitalTalentProfile")
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
              onClick={() =>
                navigate("/digitalTalentProfile/personalinfromation")
              }>
              <p
                style={{
                  color: currentState.includes("personalinfromation")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}>
                Personal Information
              </p>
            </div>
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/digitalTalentProfile/preferenceform")}>
              <p
                style={{
                  color: currentState.includes("preferenceform")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}>
                Preference Form
              </p>
            </div>
            <div
              className="pl-16 py-2"
              onClick={() =>
                navigate("/digitalTalentProfile/valueassessmentform")
              }>
              <p
                style={{
                  color: currentState.includes("valueassessmentform")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}>
                Value Assessment
              </p>
            </div>
            <div
              className="pl-16 py-2"
              onClick={() =>
                navigate("/digitalTalentProfile/analysisassessmentform")
              }>
              <p
                style={{
                  color: currentState.includes("analysisassessmentform")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}>
                Talent Spectrum Analysis
              </p>
            </div>
          </Collapse>

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
                  currentState === "/assesmentform" ? "#008080" : "#ffffff",
                color:
                  currentState === "/assesmentform" ? "#ffffff" : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                setShowAssesment(!showAssesment);
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}>
                <AssesmentSvg
                  COLOR={
                    currentState === "/assesmentform" ? "#ffffff" : "#475467"
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary={"Assessments"}
                onClick={() => navigate("/assesmentform", { state: 1 })}
                primaryTypographyProps={{
                  color:
                    currentState === "/assesmentform" ? "#ffffff" : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* {showAssesment ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
            </ListItemButton>
          </ListItem>
          {/* collapse */}
          {/* <Collapse in={showAssesment} timeout="auto" unmountOnExit>
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/assesmentform", { state: 1 })}>
              <p
                style={{
                  color: "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}>
                All - Assessments
              </p>
            </div>
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/assesmentform", { state: 2 })}>
              <p
                style={{
                  color: "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}>
                Self - Assessments
              </p>
            </div>
            <div
              className="pl-16 py-2"
              onClick={() => navigate("/assesmentform", { state: 3 })}>
              <p
                style={{
                  color: "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}>
                Clients - Assessment
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
                  currentState === "/authorisedclients" ? "#008080" : "#ffffff",
                color:
                  currentState === "/authorisedclients" ? "#ffffff" : "#475467",
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/authorisedclients");
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}>
                <AuthorizedSvg
                  COLOR={
                    currentState === "/authorisedclients"
                      ? "#ffffff"
                      : "#475467"
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary={"Authorized Clients"}
                primaryTypographyProps={{
                  color:
                    currentState === "/authorisedclients"
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
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                }}>
                <JobSvg
                  COLOR={currentState === "/jobs" ? "#ffffff" : "#475467"}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Jobs"}
                primaryTypographyProps={{
                  color: "#475467",
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
