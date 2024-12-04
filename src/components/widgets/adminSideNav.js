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
import { RiDashboardFill } from "react-icons/ri";

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
                <RiDashboardFill
                  style={{
                    color: currentState === "/admin" ? "#ffffff" : "#475467",
                    fontSize: 20,
                  }}
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
                minHeight: 48,
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
                  style={{
                    color:
                      currentState === "/clientManagement"
                        ? "#ffffff"
                        : "#475467",
                    fontSize: 20,
                  }}
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

          {/* djd */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                mx: open ? 2.5 : 1.5,
                my: 1,
                px: 1,
                bgcolor: currentState.includes("jobs") ? "#008080" : "#ffffff",
                color: currentState.includes("jobs") ? "#ffffff" : "#475467",
                borderRadius: 2,
                ":hover": {
                  bgcolor: "#d5d5d5",
                },
              }}
              onClick={() => {
                navigate("/jobs");
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
                  COLOR={currentState.includes("jobs") ? "#ffffff" : "#475467"}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Jobs"}
                primaryTypographyProps={{
                  color: currentState.includes("jobs") ? "#ffffff" : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {!showAcordian ? (
                <IoIosArrowUp
                  style={{
                    color: currentState.includes("jobs")
                      ? "#ffffff"
                      : "#475467",
                  }}
                />
              ) : (
                <IoIosArrowDown
                  style={{
                    color: currentState.includes("jobs")
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
              className="pl-16 py-2 cursor-pointer"
              onClick={() => navigate("/sourcingHelp")}
            >
              <p
                style={{
                  color: currentState.includes("sourcingHelp")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}
              >
                Sourcing Help
              </p>
            </div>

            <div
              className="pl-16 py-2 cursor-pointer"
              onClick={() => navigate("/onboardingHelp")}
            >
              <p
                style={{
                  color: currentState.includes("onboardingHelp")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}
              >
                Onboarding Help
              </p>
            </div>
            <div
              className="pl-16 py-2 cursor-pointer"
              onClick={() => navigate("/fullServiceStaffHelp")}
            >
              <p
                style={{
                  color: currentState.includes("fullServiceStaffHelp")
                    ? "#008080"
                    : "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.6,
                }}
              >
                Full Service Staff Help
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
                  style={{
                    color:
                      currentState === "/assignCandidate"
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
