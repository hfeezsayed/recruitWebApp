import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { TopNav } from "../../../widgets/topNav";
import { Footer } from "../../../widgets/footer";
import NoDataFound from "../../../../assets/images/noData Found.png";

export const AllJobs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8 h-full">
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                All Jobs
              </p>
              <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                Start the process by selecting an option: use an existing job
                template or create a new one job template.
              </p>
            </div>
            <div className="flex justify-center items-center text-center h-full">
              <div className="-mt-20">
                <img src={NoDataFound} alt="No Data Found" />
                <p
                  style={{
                    color: "#101828",
                    fontSize: 20,
                    fontWeight: 500,
                    marginTop: 25,
                  }}>
                  No Jobs Created
                </p>
                <Button
                  size="small"
                  style={{
                    color: "#008080",
                    fontSize: 18,
                    textTransform: "none",
                  }}
                  onClick={() => {
                    navigate("/jobs/createdJobs");
                  }}>
                  Add the first job to initiate the list
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
