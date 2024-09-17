import React from "react";
import "./ClientManagementSec.css";
import { ClientSideNav } from "../../../../widgets/clientSideNav";
import { TopNav } from "../../../../widgets/topNav";

const ClientManagementSec = () => {
  return (
    <div className="flex">
      <ClientSideNav />
      <div className="w-full min-h-screen side-bar pr-3">
        <TopNav />
        <div className="client-management-sec">
          <div className="client-header"></div>
        </div>
      </div>
    </div>
  );
};

export default ClientManagementSec;
