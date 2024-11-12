import React, { useEffect, useState } from "react";
import { Pagination, Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axiosInstance from "../../../utils/axiosInstance";

export const AllCandidatesListData = () => {
  const [data, setData] = useState();
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = useState([]);

  //select row start
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
  //select row end

  //Pagination start
  const pageChangeHandle = (pageNO) => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .get(
        `/getBatchCandidates?clientId=${user.userId}&pageNo=${pageNO}&pageSize=5`
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
  //Pagination end

  //Candidate list API start
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    axiosInstance
      .get(`/getBatchCandidates?clientId=${user.userId}&pageNo=1&pageSize=5`)
      .then((data) => {
        console.log("Assign candidates----", data);
        setData(data.data);
        setPage(data?.pageNo || 1);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //Candidate list API End

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Paper
          sx={{
            width: "100%",
            mb: 2,
          }}
        >
          <TableContainer
            sx={{
              maxHeight: 500,
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell
                    padding="checkbox"
                    sx={{
                      bgcolor: "#F8F9FA",
                    }}
                  >
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
                    sx={{
                      bgcolor: "#F8F9FA",
                      color: "#101828",
                    }}
                  >
                    Candidate Names
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "#F8F9FA",
                      color: "#101828",
                    }}
                  >
                    Email Address
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "#F8F9FA",
                      color: "#101828",
                    }}
                  >
                    Phone Number
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.map((row, index) => {
                  const isItemSelected = isSelected(row);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          onClick={(event) => handleClick(event, row)}
                          sx={{
                            color: "#D0D5DD",
                            "&.Mui-checked": {
                              color: "#66B2B2",
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#475467",
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#475467",
                        }}
                      >
                        {row.emailId}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#475467",
                        }}
                      >
                        {row.mobileNo}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <div className="flex justify-between items-center">
          <p
            style={{
              color: "#475467",
              fontSize: 14,
            }}
          >
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
    </div>
  );
};
