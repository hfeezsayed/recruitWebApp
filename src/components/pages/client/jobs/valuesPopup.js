import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const ValuesPopup = ({ data, setClose, open }) => {
  return (
    <Dialog
      open={open}
      onClose={setClose}
      PaperProps={{ sx: { minWidth: "55%" } }}>
      <DialogTitle>Value Details</DialogTitle>
      <IconButton
        onClick={setClose}
        style={{ position: "absolute", top: 10, right: 10 }}>
        <IoIosCloseCircleOutline />
      </IconButton>
      <Divider />
      <DialogContent>
        <Box sx={{ width: "100%" }}>
          <TableContainer sx={{ minWidth: 500 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      bgcolor: "#F8F9FA",
                      color: "#101828",
                      border: 1,
                      borderColor: "#D0D5DD50",
                    }}>
                    Ranking out of 4
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "#F8F9FA",
                      color: "#101828",
                      border: 1,
                      borderColor: "#D0D5DD50",
                    }}>
                    Work Attribute
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell
                        align="center"
                        sx={{
                          color: "#008080",
                          border: 1,
                          borderColor: "#D0D5DD50",
                        }}>
                        {row.rank}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#475467",
                          border: 1,
                          borderColor: "#D0D5DD50",
                        }}>
                        {row.value}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
