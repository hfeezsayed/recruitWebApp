import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Card,
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

export const InterviewFeedBackPopupView = ({ setClose, open, data }) => {
  return (
    <Dialog
      open={open}
      onClose={setClose}
      PaperProps={{ sx: { minWidth: "60%" } }}>
      <DialogTitle style={{ color: "#101828" }}>
        View Interview Feedback
      </DialogTitle>
      <IconButton
        onClick={setClose}
        style={{ position: "absolute", top: 10, right: 10 }}>
        <IoIosCloseCircleOutline />
      </IconButton>
      <Divider />
      <DialogContent>
        <Card
          sx={{
            boxShadow: 0,
            border: 1,
            borderColor: "#E6E6E650",
            borderRadius: 2,
            mb: 2,
          }}>
          <div className="py-2 px-4 bg-[#F7FBFB] w-full border-b border-[#E6E6E6]">
            <p
              style={{
                color: "#008080",
                fontSize: 16,
                fontWeight: 500,
              }}>
              Candidate Evaluation Form
            </p>
          </div>
          <div className="px-4 py-2 bg-[#FBFCFE40]">
            <div className="grid grid-cols-2 gap-6 border-b py-2 border-[#DCDCDC50]">
              <div className="flex gap-3">
                <p
                  style={{
                    color: "#10182875",
                    fontSize: 14,
                    fontWeight: 600,
                    width: 150,
                  }}>
                  Date
                </p>
                <p style={{ color: "#101828", fontSize: 14 }}>
                  {data?.FormData?.date}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-b py-2 border-[#DCDCDC50]">
              <p style={{ color: "#10182870", fontSize: 14, fontWeight: 500 }}>
                What is your overall hiring recommendation?
              </p>
              <div className="flex gap-3">
                <p
                  style={{
                    color: "#10182875",
                    fontSize: 14,
                    fontWeight: 600,
                    width: 150,
                  }}>
                  Recommendation
                </p>
                <p style={{ color: "#101828", fontSize: 14 }}>
                  {data?.FormData?.recommendation ? "Yes" : "No"}
                </p>
              </div>
              <div className="flex gap-3">
                <p
                  style={{
                    color: "#10182875",
                    fontSize: 14,
                    fontWeight: 600,
                    minWidth: 150,
                  }}>
                  Why?
                </p>
                <p style={{ color: "#101828", fontSize: 14 }}>
                  {data?.FormData?.recommendationWhy}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-2">
              <p style={{ color: "#10182870", fontSize: 14, fontWeight: 500 }}>
                Does the candidate have the needed experience?
              </p>
              <div className="flex gap-3">
                <p
                  style={{
                    color: "#10182875",
                    fontSize: 14,
                    fontWeight: 600,
                    width: 150,
                  }}>
                  Experience
                </p>
                <p style={{ color: "#101828", fontSize: 14 }}>
                  {data?.FormData?.experiance ? "Yes" : "No"}
                </p>
              </div>
              <div className="flex gap-3">
                <p
                  style={{
                    color: "#10182875",
                    fontSize: 14,
                    fontWeight: 600,
                    minWidth: 150,
                  }}>
                  Why?
                </p>
                <p style={{ color: "#101828", fontSize: 14 }}>
                  {data?.FormData?.experianceWhy}
                </p>
              </div>
            </div>
          </div>
        </Card>
        <Card
          sx={{
            boxShadow: 0,
            border: 1,
            borderColor: "#E6E6E650",
            borderRadius: 2,
          }}>
          <div className="py-2 px-4 bg-[#F7FBFB] w-full border-b border-[#E6E6E6] ">
            <p
              style={{
                color: "#008080",
                fontSize: 16,
                fontWeight: 500,
              }}>
              Individual Criteria Scoring
            </p>
          </div>
          <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%" }}>
              <TableContainer>
                <Table
                  stickyHeader
                  size="small"
                  sx={{ backgroundColor: "#FBFCFE50" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: "#101828",
                          backgroundColor: "#FBFCFE50",
                          border: 1,
                          borderColor: "#D0D5DD50",
                        }}>
                        Criteria
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          color: "#101828",
                          backgroundColor: "#FBFCFE50",
                          border: 1,
                          borderColor: "#D0D5DD50",
                        }}>
                        Rating (1-5)
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#101828",
                          backgroundColor: "#FBFCFE50",
                          border: 1,
                          borderColor: "#D0D5DD50",
                        }}>
                        Comments
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.individualScore?.map((row, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell
                            sx={{
                              color: "#475467",
                              border: 1,
                              borderColor: "#D0D5DD50",
                            }}>
                            {row?.criateria}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              color: "#475467",
                              border: 1,
                              borderColor: "#D0D5DD50",
                            }}>
                            {row?.rating}
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "#475467",
                              border: 1,
                              borderColor: "#D0D5DD50",
                            }}>
                            {row?.comments}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
