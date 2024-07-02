import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  Pagination,
  FormControlLabel,
} from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import { Footer } from "../../../widgets/footer";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { selectAssesmentData } from "../../../dummy/Data";

export const SelectAssessment = () => {
  const navigate = useNavigate();
  const [batchName, setBatchName] = useState("");
  const [data, setData] = useState(selectAssesmentData);
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = React.useState([]);

  const [allocateAssessment, setAllocateAssessment] = useState(false);

  // checkbox select

  const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (row) => selected.indexOf(row) !== -1;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data?.data || [];
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  // pagination

  const pageChangeHandle = (pageNO) => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .get(
        `/getAssessments?clientId=${user.userId}&pageNo=${pageNO}&pageSize=5`,
        
      )
      .then((data) => {
        console.log(data);
        setData(data.data);
        setPage(data?.pageNo || 0);
      })
      .catch((e) => {
        console.log(e);
      });
    setPage(pageNO);
  };

  useEffect(() => {
    setPage(data?.pageNo || 1);
  }, [data]);

  const PAGECOUNT =
    data?.totalCount > 0 ? Math.ceil(data?.totalCount / data?.pageSize) : 1;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .get(
        `/getAssessments?clientId=${user.userId}&pageNo=1&pageSize=5`,
        
      )
      .then((data) => {
        console.log(data);
        setData(data.data);
        setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                Create New Assignment Batch
              </p>
              <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                Select the assessments that you want to allocate to the
                candidate.
              </p>
              <div className="py-5">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Batch Name
                </p>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Type..."
                  value={batchName}
                  onChange={(e) => setBatchName(e.target.value)}
                />
              </div>
            </div>
            <Box sx={{ width: "100%" }}>
              <Paper sx={{ width: "100%", mb: 2 }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          padding="checkbox"
                          sx={{ bgcolor: "#F8F9FA" }}>
                          <Checkbox
                            color="primary"
                            indeterminate={
                              selected.length > 0 &&
                              selected.length < data?.data?.length
                            }
                            checked={
                              data?.data?.length > 0 &&
                              selected.length === data?.data?.length
                            }
                            onChange={handleSelectAllClick}
                            sx={{
                              color: "#D0D5DD",
                              "&.Mui-checked ": {
                                color: "#66B2B2",
                              },
                            }}
                          />
                        </TableCell>
                        <TableCell
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                          Assessment Name
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data?.data?.map((row, index) => {
                        const isItemSelected = isSelected(row);
                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, row)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={index}
                            selected={isItemSelected}
                            sx={{ cursor: "pointer" }}>
                            <TableCell padding="checkbox">
                              <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                sx={{
                                  color: "#D0D5DD",
                                  "&.Mui-checked": {
                                    color: "#66B2B2",
                                  },
                                }}
                              />
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {row?.name}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
              <div className="flex justify-between items-center">
                <p style={{ color: "#475467", fontSize: 14 }}>
                  Showing {data?.totalCount} results found
                </p>
                <Pagination
                  count={PAGECOUNT}
                  page={page}
                  variant="outlined"
                  shape="rounded"
                  onChange={(e, newvalue) => {
                    pageChangeHandle(newvalue);
                  }}
                />
              </div>
            </Box>
            <div className="py-2">
              <FormControlLabel
                checked={allocateAssessment}
                onChange={(e) => setAllocateAssessment(e.target.checked)}
                control={
                  <Checkbox
                    sx={{
                      color: "#D0D5DD",
                      "&.Mui-checked ": {
                        color: "#66B2B2",
                      },
                    }}
                  />
                }
                label={
                  <p style={{ color: "#475467", fontSize: 14 }}>
                    Allocate the assessments that have been selected to include
                    in the batch.
                  </p>
                }
              />
            </div>
            <div className="flex justify-end py-5 gap-5">
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                variant="outlined"
                style={{ borderColor: "#D0D5DD", color: "#475467" }}>
                Cancle
              </Button>
              <Button
                onClick={() => {
                  navigate("/assignCandidate", {
                    state: { selected: selected, batchName: batchName },
                  });
                }}
                variant="contained"
                style={{ backgroundColor: "#008080", color: "#ffffff" }}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
