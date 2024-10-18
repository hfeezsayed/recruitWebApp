import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const BatchDetailViewPopUp = ({ data, setClose, open }) => {
  const checkStatus = (status) => {
    let color = "#475467";

    if (status === "In progress") {
      color = "#FFA500";
    } else if (status === "Completed") {
      color = "#58A20F";
    } else if (status === "Rejected") {
      color = "#E05880";
    } else {
      color = "#475467";
    }
    return <p style={{ color: color, fontSize: 14 }}>{status}</p>;
  };

  useEffect(() => {
    console.log(data);
  });

  return (
    <Dialog
      open={open}
      onClose={setClose}
      PaperProps={{ sx: { minWidth: "60%" } }}
    >
      <DialogTitle sx={{ color: "#141414", fontWeight: 500 }}>
        Batch Details
      </DialogTitle>
      <IconButton
        onClick={setClose}
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        <IoIosCloseCircleOutline />
      </IconButton>
      <Divider />
      <DialogContent>
        <div>
          <div className="flex">
            <div>
              <p style={{ color: "#1A1A1A", fontSize: 18, fontWeight: 500 }}>
                Batch Name :
              </p>
              <p style={{ color: "#505050", fontSize: 16, fontWeight: 500 }}>
                {data?.batchName}
              </p>
            </div>
          </div>
          <div className="py-3">
            <div className="flex">
              <p style={{ color: "#1A1A1A", fontSize: 18, fontWeight: 500 }}>
                Assignment selected for this batch
              </p>
            </div>
            <div className="grid grid-flow-row gap-1">
              {data?.selectedAssignment?.map((row, index) => {
                return (
                  <p
                    key={index}
                    style={{ color: "#505050", fontSize: 16, fontWeight: 500 }}
                  >
                    {row.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="py-3">
            <div className="flex">
              <p style={{ color: "#1A1A1A", fontSize: 18, fontWeight: 500 }}>
                Candidates assigned to this batch
              </p>
            </div>
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
                          }}
                        >
                          Candidate Names
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#F8F9FA",
                            color: "#101828",
                            border: 1,
                            borderColor: "#D0D5DD50",
                          }}
                        >
                          Email Id
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#F8F9FA",
                            color: "#101828",
                            border: 1,
                            borderColor: "#D0D5DD50",
                          }}
                        >
                          Mobile Number
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#F8F9FA",
                            color: "#101828",
                            border: 1,
                            borderColor: "#D0D5DD50",
                          }}
                        >
                          Status
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data?.assignCandidate?.map((row, index) => {
                        return (
                          <TableRow
                            key={index}
                            hover
                            sx={{ cursor: "pointer" }}
                          >
                            <TableCell
                              sx={{
                                color: "#475467",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}
                            >
                              {row.name}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#475467",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}
                            >
                              {row.emailId}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#475467",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}
                            >
                              {row.mobileNo}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#475467",
                                border: 1,
                                borderColor: "#D0D5DD50",
                              }}
                            >
                              {checkStatus(row.status)}
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
        </div>
      </DialogContent>
    </Dialog>
  );
};
