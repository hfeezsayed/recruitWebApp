import React from "react";
import "./LogsTable.css";

const LogsTable = () => {
  const data = [
    {
      id: 1,
      userName: "User123 Admin User",
      actionType: "Moved Applicant Status",
      actionTyp: `'John Doe' to Interview Scheduled for 'Product Manager'`,
      dateTime: "11/ 07/2024 10:00 AM",
    },
    {
      id: 2,
      userName: "User123 Admin User",
      actionType: "Deleted Applicant",
      actionTyp: `'Jane Smith' from 'Data Analyst' job`,
      dateTime: "11/ 07/2024 10:00 AM",
    },
    {
      id: 3,
      userName: "User123 Admin User",
      actionType: "Updated Job Status",
      actionTyp: `'Sales Manager' changed to Closed`,
      dateTime: "11/ 07/2024 10:00 AM",
    },
    {
      id: 4,
      userName: "User123 Admin User",
      actionType: "Moved Applicant Status",
      actionTyp: `'John Doe' to Interview Scheduled for 'Product Manager'`,
      dateTime: "11/ 07/2024 10:00 AM",
    },
    {
      id: 5,
      userName: "User123 Admin User",
      actionType: "Updated Job Status",
      actionTyp: `'Sales Manager' changed to Closed`,
      dateTime: "11/ 07/2024 10:00 AM",
    },
  ];

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
              <th>Action Type</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.userName}</td>
                <td>{user.actionType}</td>
                <td>{user.actionTyp}</td>
                <td>{user.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogsTable;
