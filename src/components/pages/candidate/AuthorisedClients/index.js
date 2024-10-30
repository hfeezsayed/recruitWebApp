import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import axiosInstance from "../../../utils/axiosInstance";
import { IoMdClose } from "react-icons/io";
import { SideNav } from "../../../widgets/sidenav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import Spinner from "../../../utils/spinner";
import { AuthorisedClients } from "../../../dummy/Data";
import { useEffect } from "react";

export const AuthorisedClient = () => {
  const [search, setSearch] = useState("");
  const [authClientList, setAuthClientList] = useState([]); //useState(AuthorisedClients);
  const [openPopup, setOpenPopup] = useState(false);
  const [managerName, setHiringManagerName] = useState();
  const [managerEmail, setHiringManagerEmail] = useState();
  const [companyName, setCompanyname] = useState();
  const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(true);

  const [showTableData, setShowTableData] = useState(true);
  // const [authorizeCount, setAutorizeCount] = useState(0);
  // const [declineCount, setDeclineCount] = useState(0);
  // const [filter, setFilter] = useState(false);
  const [anchorFilter, setAnchorFilter] = React.useState(null);
  const [showFilterData, setShowFilterData] = useState(false);
  const openFilter = Boolean(anchorFilter);

  const handleClickFilter = (event) => {
    setAnchorFilter(event.currentTarget);
    setShowFilterData(true);
  };

  const handleCloseFilter = () => {
    setAnchorFilter(null);
  };

  const options = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    axiosInstance
      .get("/getCandidateDTPAccess?candidateId=" + user.userId)
      .then((response) => {
        console.log("AuthData", response.data);
        setAuthClientList(response.data);
        setLoading(false);
        //console.log(response.data.authorized);
        //console.log(response.data?.emtionalFlexibility[1].competencies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAuthorize = (row, value) => {
    // if(row.dtpData === false) {
    //   const confirmed = window.confirm(`please complete you DTP to do this action`);
    // }
    // else{
    const confirmed = window.confirm(
      `Are you sure you want to authorize to access the dtp for this client ${row.clientName}?`
    );
    if (confirmed) {
      if (value === true) {
        setAuthClientList((prevItems) =>
          prevItems.map((item) =>
            item.clientId === row.clientId ? { ...item, declined: false } : item
          )
        );
      }
      setAuthClientList((prevItems) =>
        prevItems.map((item) =>
          item.clientId === row.clientId ? { ...item, authorized: value } : item
        )
      );
      const clientId = row.clientId;
      const authorized = value;
      const user = JSON.parse(localStorage.getItem("token"));
      axiosInstance
        .post("/authorizeClient?candidateId=" + user.userId, {
          clientId,
          authorized,
        })
        .then((data) => {
          console.log(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
      handleClose();
    }
    //}
  };

  const handleDecline = (row, value) => {
    setOpenPopup(true);
    if (value === true) {
      setAuthClientList((prevItems) =>
        prevItems.map((item) =>
          item.clientId === row.clientId ? { ...item, authorized: false } : item
        )
      );
    }
    setAuthClientList((prevItems) =>
      prevItems.map((item) =>
        item.clientId === row.clientId ? { ...item, declined: value } : item
      )
    );
    console.log(row, value);
    const clientId = row.clientId;
    const declined = value;
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .post("/declineClient?candidateId=" + user.userId, {
        clientId,
        declined,
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };

  const handleSubmit = async () => {
    console.log(managerName, managerEmail, companyName, showInfo);
    axiosInstance
      .post("localhost:3000/save", {
        managerName,
        managerEmail,
        companyName,
        showInfo,
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };

  const handleClose = () => {
    setOpenPopup(false);

    setHiringManagerEmail(null);
    setHiringManagerName(null);
    setCompanyname(null);
    setShowInfo(false);
  };

  const filterAuthorizedorDeclined = () => {
    const filteredOptions = authClientList.filter(
      (item) => item.authorized === true || item.declined === true
    );

    return filteredOptions;
  };

  const filterNotAuthorizedorDeclined = () => {
    const filteredOptions = authClientList.filter(
      (item) => item.authorized === false && item.declined === false
    );

    return filteredOptions;
  };

  useEffect(() => {
    handleApprovedFilterTable();
    handleDeclineFilterTable();
    handleAllList();
  }, []);

  const handleApprovedFilterTable = () => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    setShowFilterData(false);
    const filterApproved = authClientList.filter((item) =>
      item.authorized === true ? item.authorized : null
    );
    axiosInstance
      .get("/getCandidateDTPAccess?candidateId=" + user.userId)
      .then((response) => {
        console.log(response.data);
        setAuthClientList(filterApproved);
        setLoading(false);
        setShowFilterData(false);
      })
      .catch((error) => {
        console.log(error);
      });
    setShowTableData(false);
  };

  const handleDeclineFilterTable = () => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    setShowFilterData(false);
    const filterApproved = authClientList.filter((item) =>
      item.declined === true ? item.declined : null
    );
    axiosInstance
      .get("/getCandidateDTPAccess?candidateId=" + user.userId)
      .then((response) => {
        console.log(response.data);
        setAuthClientList(filterApproved);
        setLoading(false);
        setShowFilterData(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAllList = () => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    setShowFilterData(false);
    axiosInstance
      .get("/getCandidateDTPAccess?candidateId=" + user.userId)
      .then((response) => {
        console.log(response.data);
        setAuthClientList(response.data);
        setLoading(false);
        setShowFilterData(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const AuthorizedOrDeclinedClients = () => {
    return (
      <div>
        <div className="mb-2">
          <p style={{ fontSize: 22, fontWeight: 600, color: "#101828" }}>
            Authorised Clients
          </p>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, border: 1, borderColor: "#D0D5DD" }}
              aria-label="simple table"
              stickyHeader
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#101828",
                      fontSize: 14,
                      fontWeight: 500,
                      border: 1,
                      borderColor: "#D0D5DD",
                    }}
                  >
                    Client Name
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#101828",
                      fontSize: 14,
                      fontWeight: 500,
                      border: 1,
                      borderColor: "#D0D5DD",
                    }}
                  >
                    Manager Name
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#101828",
                      fontSize: 14,
                      fontWeight: 500,
                      border: 1,
                      borderColor: "#D0D5DD",
                    }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#101828",
                      fontSize: 14,
                      fontWeight: 500,
                      border: 1,
                      borderColor: "#D0D5DD",
                    }}
                  >
                    Date Authorised
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#101828",
                      fontSize: 14,
                      fontWeight: 500,
                      border: 1,
                      borderColor: "#D0D5DD",
                    }}
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterAuthorizedorDeclined().map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      // component="th"
                      // scope="row"
                      sx={{ color: "#475467", fontSize: 14 }}
                    >
                      {row.clientName}
                    </TableCell>
                    <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                      {row.managerName}
                    </TableCell>
                    <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                      {row.email}
                    </TableCell>
                    <TableCell sx={{ color: "#F4BC06", fontSize: 14 }}>
                      {row.date}
                    </TableCell>
                    <TableCell>
                      {row.authorized === true ? (
                        <p
                          style={{
                            color: "#057903",
                            backgroundColor: "#F4FAF1",
                            borderRadius: 20,
                            padding: "9px",
                            textAlign: "center",
                          }}
                        >
                          Approved
                        </p>
                      ) : (
                        <p
                          style={{
                            color: "#E05880",
                            backgroundColor: "#FCEEEE",
                            borderRadius: 20,
                            padding: "9px",
                            textAlign: "center",
                          }}
                        >
                          Declined
                        </p>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          {loading === true ? (
            <Spinner />
          ) : (
            <div className="p-8">
              <p style={{ fontSize: 22, fontWeight: 600, color: "#101828" }}>
                Authorise Clients
              </p>

              <div className="py-5 flex justify-between items-center">
                <TextField
                  size="small"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IoIosSearch />
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="flex gap-4 items-center">
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
                    startIcon={<IoFilter style={{ color: "#252525" }} />}
                  >
                    Filter
                  </Button>
                  <Button
                    style={{
                      color: "#008080",
                      background: "#EAF4F5",
                      textTransform: "none",
                      fontWeight: 500,
                      borderRadius: 8,
                    }}
                    onClick={() => setOpenPopup(true)}
                  >
                    Add Clients
                  </Button>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <TableContainer component={Paper}>
                      <Table
                        sx={{
                          minWidth: 650,
                          border: 1,
                          borderColor: "#D0D5DD",
                        }}
                        aria-label="simple table"
                        stickyHeader
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              sx={{
                                color: "#101828",
                                fontSize: 14,
                                fontWeight: 500,
                                border: 1,
                                borderColor: "#D0D5DD",
                              }}
                            >
                              Client Name
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#101828",
                                fontSize: 14,
                                fontWeight: 500,
                                border: 1,
                                borderColor: "#D0D5DD",
                              }}
                            >
                              Manager Name
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#101828",
                                fontSize: 14,
                                fontWeight: 500,
                                border: 1,
                                borderColor: "#D0D5DD",
                              }}
                            >
                              Email
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#101828",
                                fontSize: 14,
                                fontWeight: 500,
                                border: 1,
                                borderColor: "#D0D5DD",
                              }}
                            >
                              Date Authorised
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#101828",
                                fontSize: 14,
                                fontWeight: 500,
                                border: 1,
                                borderColor: "#D0D5DD",
                              }}
                            >
                              Status
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {filterNotAuthorizedorDeclined()
                            ?.filter((item) =>
                              item.clientName
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            )
                            .map((row, index) => (
                              <TableRow key={index}>
                                <TableCell
                                  // component="th"
                                  // scope="row"
                                  sx={{ color: "#475467", fontSize: 14 }}
                                >
                                  {row.clientName}
                                </TableCell>
                                <TableCell
                                  sx={{ color: "#475467", fontSize: 14 }}
                                >
                                  {row.managerName}
                                </TableCell>
                                <TableCell
                                  sx={{ color: "#475467", fontSize: 14 }}
                                >
                                  {row.email}
                                </TableCell>
                                <TableCell
                                  sx={{ color: "#F4BC06", fontSize: 14 }}
                                >
                                  {row.date}
                                </TableCell>
                                <TableCell>
                                  <RadioGroup
                                    row
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                  >
                                    <FormControlLabel
                                      value="approve"
                                      control={
                                        <Radio
                                          checked={row.authorized}
                                          size="small"
                                          onChange={(e) =>
                                            handleAuthorize(
                                              row,
                                              e.target.checked
                                            )
                                          }
                                          sx={{ color: "#58A20F" }}
                                        />
                                      }
                                      sx={{
                                        backgroundColor: "#F4FAF1",
                                        pr: 2,
                                        borderRadius: 10,
                                      }}
                                      label={
                                        <p style={{ color: "#057903" }}>
                                          Approve
                                        </p>
                                      }
                                    />
                                    <FormControlLabel
                                      value="decline"
                                      control={
                                        <Radio
                                          checked={row.declined}
                                          size="small"
                                          onChange={(e) =>
                                            handleDecline(row, e.target.checked)
                                          }
                                          sx={{ color: "#E05880" }}
                                        />
                                      }
                                      sx={{
                                        backgroundColor: "#FCEEEE",
                                        pr: 2,
                                        borderRadius: 10,
                                      }}
                                      label={
                                        <p style={{ color: "#E05880" }}>
                                          Decline
                                        </p>
                                      }
                                    />
                                  </RadioGroup>
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <div className="pt-8 mb-10">
                    <p
                      style={{
                        fontSize: 20,
                        color: "#101828",
                        fontWeight: 600,
                      }}
                    >
                      Requests approved for Authorised Clients
                    </p>
                    <div className="flex gap-4 mt-4">
                      <p style={{ fontSize: 16, color: "#475467" }}>
                        Approved Requests
                      </p>
                      <p
                        style={{
                          fontSize: 16,
                          color: "#057903",
                          fontWeight: 600,
                        }}
                      >
                        {
                          authClientList.filter(
                            (item) => item.authorized === true
                          ).length
                        }
                      </p>
                    </div>
                    <div className="flex gap-4 mt-2">
                      <p style={{ fontSize: 16, color: "#475467" }}>
                        Declined Requests
                      </p>
                      <p
                        style={{
                          fontSize: 16,
                          color: "#E05880",
                          fontWeight: 600,
                        }}
                      >
                        {
                          authClientList.filter(
                            (item) => item.declined === true
                          ).length
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <AuthorizedOrDeclinedClients />
            </div>
          )}

          {/* dialoge */}

          <Dialog
            open={openPopup}
            PaperProps={{
              sx: {
                borderRadius: 5,
                minWidth: 800,
                minHeight: 450,
                overflow: "visible",
              },
            }}
            sx={{
              backdropFilter: "blur(5px) sepia(5%)",
            }}
          >
            <DialogTitle id="responsive-dialog-title" sx={{ color: "#101828" }}>
              Add Client Infomration
            </DialogTitle>
            <IconButton
              sx={{
                position: "absolute",
                right: 12,
                top: 12,
              }}
              onClick={handleClose}
            >
              <IoMdClose style={{ color: "#475467" }} />
            </IconButton>
            <Divider />
            <DialogContent>
              <div className="py-3 grid grid-cols-2 gap-5">
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}
                  >
                    Hiring Manager’s Email
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={managerName || null}
                    onChange={(e, value) => setHiringManagerName(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}
                  >
                    Hiring Manager’s Name{" "}
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={managerEmail || null}
                    onChange={(e, value) => setHiringManagerEmail(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}
                  >
                    Company’s Name
                  </p>
                  <Autocomplete
                    disablePortal
                    size="small"
                    fullWidth
                    options={options.map((option) => option.label)}
                    value={companyName || null}
                    onChange={(e, value) => setCompanyname(value)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select" required />
                    )}
                  />
                </div>
              </div>
              <div className="py-3">
                <FormControlLabel
                  checked={showInfo}
                  onChange={(e) => setShowInfo(e.target.checked)}
                  control={<Checkbox />}
                  label={
                    <p style={{ color: "#475467", fontSize: 14 }}>
                      Are you sure you want this client to view your
                      information?
                    </p>
                  }
                />
              </div>
            </DialogContent>
            <Divider />
            <DialogActions>
              <Button
                variant="outlined"
                style={{ borderColor: "#D0D5DD", color: "#475467" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#008080", color: "#ffffff" }}
                onClick={handleSubmit}
              >
                Add client
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        {/*Filter menu */}
        {showFilterData && (
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
            TransitionComponent={Fade}
          >
            <MenuItem
              onClick={() => {
                handleAllList();
              }}
            >
              <p
                style={{
                  color: "#171717",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                All
              </p>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleApprovedFilterTable();
              }}
            >
              <p
                style={{
                  color: "#171717",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Approved
              </p>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleDeclineFilterTable();
              }}
            >
              <p
                style={{
                  color: "#171717",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Declined
              </p>
            </MenuItem>
          </Menu>
        )}
      </div>
      <Footer />
    </div>
  );
};
