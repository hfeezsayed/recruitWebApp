import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Footer } from "../../../widgets/footer";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { setSourcingHelpListData } from "../../../dummy/Data";
import { useEffect } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import Spinner from "../../../utils/spinner";


export const ExternalHelp = () => {
  const [value, setValue] = useState(0);
  const [sourcingHelpList, setSourcingHelpList] = useState(
    []
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const checkStatusRound = (status) => {
    let color = "";
    let backGround = "";

    if (status === "Opened") {
      color = "#58A20F";
      backGround = "#58A20F20";
    } else if (status === "Pending") {
      color = "#FFA500";
      backGround = "#FFA50020";
    } else if (status === "Closed") {
      color = "#E05880";
      backGround = "#E0588020";
    }
    
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
          backgroundColor: backGround,
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 20,
        }}>
        <p
          style={{
            color: color,
            fontSize: 14,
          }}>
          {status}
        </p>
      </div>
    );
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
      axiosInstance
        .get(`/getExternalStaffingJobs?clientId=${user.userId}`)
        .then((response) => {
          console.log(response.data);
          setSourcingHelpList(response.data)
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
   }, []);


  
  const filterData = (dataList) => {
    if(value === 0){
      return dataList.filter(item =>
        item.sourcing?.toLowerCase().includes("sourcing".toLowerCase()))
    }
    if(value === 1){
      return dataList.filter(item =>
        item.onboarding?.toLowerCase().includes("onboarding".toLowerCase()))
    }
    if(value === 2){
      return dataList.filter(item =>
        item.externalService?.toLowerCase().includes("externalService".toLowerCase()))
    }
  }


  const SourcingHelp = () => {
    return (
      <div className="p-4">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, border: 1, borderColor: "#D0D5DD" }}
            aria-label="simple table"
            stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    color: "#333333",
                    fontSize: 14,
                    fontWeight: 500,
                    bgcolor: "#F8F9FA",
                  }}>
                  Job ID
                </TableCell>
                <TableCell
                  sx={{
                    color: "#333333",
                    fontSize: 14,
                    fontWeight: 500,
                    bgcolor: "#F8F9FA",
                  }}>
                  Job Name
                </TableCell>
                <TableCell
                  sx={{
                    color: "#333333",
                    fontSize: 14,
                    fontWeight: 500,
                    bgcolor: "#F8F9FA",
                  }}>
                  Department
                </TableCell>
                <TableCell
                  sx={{
                    color: "#333333",
                    fontSize: 14,
                    fontWeight: 500,
                    bgcolor: "#F8F9FA",
                  }}>
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    color: "#333333",
                    fontSize: 14,
                    fontWeight: 500,
                    bgcolor: "#F8F9FA",
                  }}>
                  Location
                </TableCell>
                <TableCell
                  sx={{
                    color: "#333333",
                    fontSize: 14,
                    fontWeight: 500,
                    bgcolor: "#F8F9FA",
                  }}>
                  Posted Date
                </TableCell>
                <TableCell
                  sx={{
                    color: "#333333",
                    fontSize: 14,
                    fontWeight: 500,
                    bgcolor: "#F8F9FA",
                  }}>
                  Deadline Date
                </TableCell>
              </TableRow>
            </TableHead>
            {loading === true ? (
            <Spinner />
          ) : (
            <TableBody>
              {filterData(sourcingHelpList).map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                    {row.jobId}
                  </TableCell>
                  <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                    {row.jobName}
                  </TableCell>
                  <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                    {row?.department}
                  </TableCell>
                  <TableCell padding="none">
                    {checkStatusRound(row?.status)}
                  </TableCell>
                  <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                    {row?.location}
                  </TableCell>
                  <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                    {row?.postedDate}
                  </TableCell>
                  <TableCell sx={{ color: "#475467", fontSize: 14 }}>
                    {row?.declineDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
          </Table>
        </TableContainer>
      </div>
    );
  };

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              <p style={{ color: "#333333", fontSize: 22, fontWeight: 600 }}>
                External Help
              </p>
              <p style={{ color: "#475467", fontSize: 14 }}>
                Get expert help instantly for optimising recruitment strategies
              </p>
            </div>
            <Box sx={{ width: "100%", py: 2 }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  sx={{
                    "& .MuiTab-root.Mui-selected": {
                      color: "#008080",
                    },
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#008080",
                      height: 3,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    },
                  }}>
                  <Tab
                    label="Sourcing"
                    id="1"
                    sx={{
                      color: "#475467",
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: 16,
                    }}
                  />
                  <Tab
                    label="Onboarding"
                    id="2"
                    sx={{
                      color: "#475467",
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: 16,
                    }}
                  />
                  <Tab
                    label="Full Service Staff"
                    id="3"
                    sx={{
                      color: "#475467",
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: 16,
                    }}
                  />
                </Tabs>
              </Box>

              {value === 0 && <SourcingHelp />}
              {value === 1 && <SourcingHelp />}
              {value === 2 && <SourcingHelp />}
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
