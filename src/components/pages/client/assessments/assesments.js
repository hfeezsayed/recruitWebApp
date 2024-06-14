import React, { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  FormControlLabel,
  InputAdornment,
  TablePagination,
  TextField,
} from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";
import { clientAssessmentTableData } from "../../../dummy/Data";

export const Assesments = () => {
  const navigation = useNavigate();
  const [selected, setSelected] = React.useState([]);
  const [data, setData] = useState(clientAssessmentTableData);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [search, setSearch] = useState("");
  const [allocateAssessments, setAllocateAssessments] = useState(false);

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  // pagination

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = React.useMemo(
    () => data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage]
  );

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <p style={{ color: "#101828", fontSize: 22, fontWeight: 600 }}>
              Assessments
            </p>
            <p style={{ color: "#475467", fontSize: 14 }}>
              Select the assessments that you want to allocate to the candidate.
            </p>
            <div className="py-5 flex justify-between items-center">
              <TextField
                size="small"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                sx={{ minWidth: 320 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoSearchOutline />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="text"
                style={{ color: "#008080", backgroundColor: "#EAF4F5" }}>
                Add New Assessment
              </Button>
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
                              selected.length < data.length
                            }
                            checked={
                              data.length > 0 && selected.length === data.length
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
                        <TableCell
                          sx={{ bgcolor: "#F8F9FA", color: "#101828" }}>
                          Date Added
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {visibleRows.map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.id)}
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
                              {row.name}
                            </TableCell>
                            <TableCell sx={{ color: "#475467" }}>
                              {row.date}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                      {emptyRows > 0 && (
                        <TableRow
                          style={{
                            height: 53 * emptyRows,
                          }}>
                          <TableCell colSpan={3} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  variant="outlined"
                  shape="rounded"
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Box>
            <div className="py-2">
              <FormControlLabel
                checked={allocateAssessments}
                onChange={(e) => setAllocateAssessments(e.target.checked)}
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
                    Allocate the assessments that have been selected to the
                    candidates
                  </p>
                }
              />
            </div>
            <div className="flex justify-end py-5 gap-5">
              <Button
                onClick={() => navigation("/assignCandidate")}
                variant="contained"
                style={{ backgroundColor: "#008080", color: "#ffffff" }}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
