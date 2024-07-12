import React, { useState } from "react";
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
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";
import { workValueEditData, workValueViewData } from "../../../dummy/Data";

export const ValuesPopup = ({ data, setClose, open }) => {
  const [viewData, setViewData] = useState(workValueViewData);
  return (
    <Dialog
      open={open}
      onClose={setClose}
      PaperProps={{ sx: { minWidth: "55%" } }}>
      <DialogTitle>{data?.templateName}</DialogTitle>
      <IconButton
        onClick={setClose}
        style={{ position: "absolute", top: 10, right: 10 }}>
        <IoIosCloseCircleOutline />
      </IconButton>
      <Divider />
      <DialogContent>
        <div className="grid grid-flow-row py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Work Value Template Tags
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>{data?.tag}</p>
        </div>
        <div className="grid grid-flow-row  py-1">
          <p style={{ color: "#101828", fontSize: 16, fontWeight: 500 }}>
            Work Value Template Description
          </p>
          <p style={{ color: "#475467", fontSize: 16 }}>
            {data?.templateDescription}
          </p>
        </div>
        <div className="py-5">
          <RadarChart
            height={350}
            width={450}
            outerRadius="80%"
            data={viewData.data}>
            <PolarGrid />
            <Tooltip />
            <PolarAngleAxis dataKey="statement" />
            <PolarRadiusAxis />
            <Radar
              dataKey="rating"
              stroke="#008080"
              fill="#ffffff"
              fillOpacity={0}
            />
          </RadarChart>
        </div>
        <Box>
          <TableContainer sx={{ minWidth: 500 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      bgcolor: "#F8F9FA",
                      color: "#101828",
                      border: 1,
                      borderColor: "#D0D5DD50",
                      width: 250,
                    }}>
                    Work Attribute
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "#F8F9FA",
                      color: "#101828",
                      border: 1,
                      borderColor: "#D0D5DD50",
                    }}>
                    Frequency Selected
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#171717",
                      border: 1,
                      borderColor: "#D0D5DD50",
                    }}>
                    Priority 4
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#171717",
                      border: 1,
                      borderColor: "#D0D5DD50",
                      backgroundColor: "#C2E0E8",
                    }}>
                    <div className="grid grid-cols-4 gap-y-2">
                      {viewData?.data?.map((data) => {
                        return Number(data?.rating) === 4 ? (
                          <p>{data.statement}</p>
                        ) : null;
                      })}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#171717",
                      border: 1,
                      borderColor: "#D0D5DD50",
                    }}>
                    Priority 3
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#171717",
                      border: 1,
                      borderColor: "#D0D5DD50",
                      backgroundColor: "#F2EFC9",
                    }}>
                    <div className="grid grid-cols-4 gap-y-2">
                      {viewData?.data?.map((data) => {
                        return Number(data?.rating) === 3 ? (
                          <p>{data.statement}</p>
                        ) : null;
                      })}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#171717",
                      border: 1,
                      borderColor: "#D0D5DD50",
                    }}>
                    Priority 2
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#171717",
                      border: 1,
                      borderColor: "#D0D5DD50",
                      backgroundColor: "#D1E6D5",
                    }}>
                    <div className="grid grid-cols-4 gap-y-2">
                      {viewData?.data?.map((data) => {
                        return Number(data?.rating) === 2 ? (
                          <p>{data.statement}</p>
                        ) : null;
                      })}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#171717",
                      border: 1,
                      borderColor: "#D0D5DD50",
                    }}>
                    Priority 1
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#171717",
                      border: 1,
                      borderColor: "#D0D5DD50",
                      backgroundColor: "#ECCCB7",
                    }}>
                    <div className="grid grid-cols-4 gap-y-2">
                      {viewData?.data?.map((data) => {
                        return Number(data?.rating) === 1 ? (
                          <p>{data.statement}</p>
                        ) : null;
                      })}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#171717",
                      border: 1,
                      borderColor: "#D0D5DD50",
                    }}>
                    No Priority
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#171717",
                      border: 1,
                      borderColor: "#D0D5DD50",
                      backgroundColor: "#EDDAD3",
                    }}>
                    <div className="grid grid-cols-4 gap-y-2">
                      {viewData?.data?.map((data) => {
                        return Number(data?.rating) === 0 ? (
                          <p>{data.statement}</p>
                        ) : null;
                      })}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
