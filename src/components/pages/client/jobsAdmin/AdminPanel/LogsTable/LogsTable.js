import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../../utils/axiosInstance";
import "./LogsTable.css";

const LogsTable = () => {
  const [userLogs, setUserLogs] = useState([]); //for user logs api

  //GET Request for Activity logs
  useEffect(() => {
    axiosInstance
      .get(`/getApplicationActivities?pageNo=1&pageSize=10`)
      .then((response) => {
        //console.log("getApplicationActivities", response.data.data);
        setUserLogs(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="logs-table">
      <h2 className="text-xl pt-4 font-bold main-black pb-3">
        Recent Activity Log
      </h2>
      <div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Action Type</th>
              <th>Action Activity Type</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
            {userLogs?.map((user, index) => (
              <tr key={index}>
                <td>{user.doneBy}</td>
                <td>{user.userActivity}</td>
                <td>{user.userActivityType}</td>
                <td>{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogsTable;
