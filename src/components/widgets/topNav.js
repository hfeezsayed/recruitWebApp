import React, { useState } from "react";
import {
  Avatar,
  Divider,
  IconButton,
  InputAdornment,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { FiBookOpen } from "react-icons/fi";
import usIcon from "../../assets/images/us.png";

export const TopNav = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="grid grid-cols-2 py-2 w-full">
      <div className="px-8 flex items-center -z-10">
        {/* <TextField
          size="small"
          placeholder="Search or type"
          value={search}
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IoSearch />
              </InputAdornment>
            ),
          }}
        /> */}
      </div>
      <div className="grid grid-flow-col justify-end items-center gap-4 px-3">
        <div className="grid grid-flow-col gap-2 justify-start items-center">
          <p style={{ fontSize: 18, fontWeight: 600, color: "#101828" }}>
            Eng (US)
          </p>
        </div>

        <IconButton>
          <Badge
            badgeContent={4}
            color="error"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            classes={{ colorError: "#E05880" }}
          >
            <FaRegBell style={{ color: "#FFA412", fontSize: 18 }} />
          </Badge>
        </IconButton>
        <div
          className="grid grid-flow-col gap-2 justify-start items-center"
          onClick={handleClick}
        >
          <IconButton
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 32, height: 32 }}
              src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
            />
          </IconButton>
          <p style={{ fontSize: 18, fontWeight: 600, color: "#101828" }}>
            {JSON.parse(localStorage.getItem("token"))?.username}
          </p>
          <IoIosArrowDown />
        </div>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <GoPerson
                style={{ color: "#475467", fontWeight: 800, fontSize: 20 }}
              />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem onClick={() => navigate("/signup")}>
            <ListItemIcon>
              <FiBookOpen
                style={{ color: "#475467", fontWeight: 600, fontSize: 18 }}
              />
            </ListItemIcon>
            Password
          </MenuItem>
          <Divider />

          <MenuItem
            onClick={() => {
              localStorage.clear();
              navigate("/logout");
            }}
          >
            <ListItemIcon>
              <FiLogOut
                style={{ color: "#475467", fontWeight: 600, fontSize: 18 }}
              />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
