import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
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
} from "@mui/material";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { SideNav } from "../../../widgets/sidenav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";
import { AuthorisedClients } from "../../../dummy/Data";

export const AuthorisedClient = () => {
  const [search, setSearch] = useState();
  const [authClientList, setAuthClientList] = useState(AuthorisedClients);
  const [openPopup, setOpenPopup] = useState(false);
  const [managerName, setHiringManagerName] = useState();
  const [managerEmail, setHiringManagerEmail] = useState();
  const [companyName, setCompanyname] = useState();
  const [showInfo, setShowInfo] = useState(false);

  const options = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const handleSubmit = async () => {
    console.log(managerName, managerEmail, companyName, showInfo);
    axios
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

  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <p style={{ fontSize: 22, fontWeight: 600, color: "#101828" }}>
              Authorised Clients
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
                  variant="outlined"
                  style={{
                    borderColor: "#D0D5DD",
                    color: "#252525",
                    textTransform: "none",
                    fontWeight: 500,
                    borderRadius: 8,
                  }}
                  startIcon={<IoFilterSharp />}>
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
                  onClick={() => setOpenPopup(true)}>
                  Add Clients
                </Button>
              </div>
            </div>
            <div>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650, border: 1, borderColor: "#D0D5DD" }}
                  aria-label="simple table"
                  stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 500,
                        }}>
                        Client Name
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 500,
                        }}>
                        Manager Name
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 500,
                        }}>
                        Email
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          fontSize: 14,
                          fontWeight: 500,
                        }}>
                        Date Authorised
                      </TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {authClientList.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ color: "#475467", fontSize: 14 }}>
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
                          <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group">
                            <FormControlLabel
                              value="aprrove"
                              control={
                                <Radio size="small" sx={{ color: "#58A20F" }} />
                              }
                              sx={{
                                backgroundColor: "#F4FAF1",
                                pr: 2,
                                borderRadius: 10,
                              }}
                              label={
                                <p style={{ color: "#057903" }}>Aprrove</p>
                              }
                            />
                            <FormControlLabel
                              value="decline"
                              control={
                                <Radio size="small" sx={{ color: "#E05880" }} />
                              }
                              sx={{
                                backgroundColor: "#FCEEEE",
                                pr: 2,
                                borderRadius: 10,
                              }}
                              label={
                                <p style={{ color: "#E05880" }}>Decline</p>
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
            <div className="pt-8">
              <p style={{ fontSize: 20, color: "#101828", fontWeight: 600 }}>
                Requests approved for Authorised Clients
              </p>
              <div className="flex gap-4 mt-4">
                <p style={{ fontSize: 16, color: "#475467" }}>
                  Approved Requests
                </p>{" "}
                <p style={{ fontSize: 16, color: "#057903", fontWeight: 600 }}>
                  20
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <p style={{ fontSize: 16, color: "#475467" }}>
                  Declined Requests
                </p>{" "}
                <p style={{ fontSize: 16, color: "#E05880", fontWeight: 600 }}>
                  14
                </p>
              </div>
            </div>
          </div>

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
            }}>
            <DialogTitle id="responsive-dialog-title" sx={{ color: "#101828" }}>
              Add Client Infomration
            </DialogTitle>
            <IconButton
              sx={{
                position: "absolute",
                right: 12,
                top: 12,
              }}
              onClick={handleClose}>
              <IoMdClose style={{ color: "#475467" }} />
            </IconButton>
            <Divider />
            <DialogContent>
              <div className="py-3 grid grid-cols-2 gap-5">
                <div className="grid grid-flow-row">
                  <p
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
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
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
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
                    style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
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
                onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#008080", color: "#ffffff" }}
                onClick={handleSubmit}>
                Add client
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      <Footer />
    </div>
  );
};
